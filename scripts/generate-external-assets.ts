import type { InputFileFormat } from 'webmscore/schemas'
import * as fs from 'node:fs'
import * as path from 'node:path'
import * as crypto from 'node:crypto'
import sharp from 'sharp'

function hash(bytes: any) {
  return crypto.createHash('md5').update(bytes).digest('hex')
}

async function getWebMScoreObject(path: string, format: InputFileFormat) {
  delete require.cache[require.resolve('webmscore')]
  const WebMscore = require('webmscore')
  return WebMscore.ready.then(async () => {
    const msczFile = fs.promises.readFile(path)
    const byteArray = new Uint8Array((await msczFile).buffer)

    return WebMscore.load(format, byteArray, [
      fs.readFileSync('public/fonts/Leland.otf'),
      fs.readFileSync('public/fonts/Times New Roman.ttf'),
    ])
  })
}

export async function getFileInFormat(path: string, format: string): Promise<ArrayBufferLike> {
  const webmscore = await getWebMScoreObject(`public/scores/${path}`, 'mxl')
  if (format === 'mxl') {
    return (await webmscore.saveMxl()).buffer
  } else if (format === 'mp3') {
    const soundfont = fs.promises.readFile('public/fonts/MS_Basic.sf3')
    const soundfontByteArray = new Uint8Array((await soundfont).buffer)
    await webmscore.setSoundFont(soundfontByteArray)
    return (await webmscore.saveAudio('mp3')).buffer
  } else if (format === 'pdf') {
    return (await webmscore.savePdf()).buffer
  }
  return (await webmscore.saveMidi()).buffer
}

async function generateFormats() {
  let progress = 0
  const formats = ['mxl', 'mid', 'pdf', 'mp3']
  const srcDir = './public/scores'
  const destDir = `./external_assets/scores`
  fs.mkdirSync(destDir, { recursive: true })
  let files = fs.readdirSync(srcDir)
  const totalFiles = files.length * formats.length
  for (const file of files) {
    const id = path.basename(file, '.mxl')
    for (const format of formats) {
      const dest = `${destDir}/${id}/${id}.${format}`
      if (fs.existsSync(dest)) {
        progress++
        console.log(`[${progress}/${totalFiles}] done`)
        continue
      }

      try {
        const outfile = await getFileInFormat(file, format)
        fs.writeFileSync(dest, outfile)
        progress++
        console.log(`Generated ${id}.${format} - [${progress}/${totalFiles}] done`)
      } catch (error) {
        throw new Error(`Failed processing ${file}`, { cause: error })
      }
    }
  }
}

async function generateThumbs() {
  let progress = 0
  const srcDir = './public/scores'
  let files = fs.readdirSync(srcDir)
  for (const file of files) {
    const id = path.basename(file, '.mxl')
    const destDir = `./external_assets/scores/${id}`
    fs.mkdirSync(destDir, { recursive: true })

    const dest = `${destDir}/preview.png`
    if (fs.existsSync(dest)) {
      progress++
      console.log(`[${progress}/${files.length}] done`)
      continue
    }

    try {
      const webmscore = await getWebMScoreObject(`./public/scores/${file}`, 'mxl')
      const png = await webmscore.savePng(0, true)
      const optimizedPng = (await sharp(png).png({ quality: 80 }).toBuffer()).buffer
      await fs.promises.writeFile(dest, optimizedPng)
      progress++
      console.log(`[${progress}/${files.length}] done`)
    } catch (error) {
      console.error(error)
      throw new Error(`Failed processing ${file}`, { cause: error })
    }
  }
}

// generateThumbs()
generateFormats()
