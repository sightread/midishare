import WebMscore from 'webmscore'
import * as fs from 'node:fs'
import * as path from 'node:path'
import * as crypto from 'node:crypto'
import sharp from 'sharp'

function hash(bytes: any) {
  return crypto.createHash('md5').update(bytes).digest('hex')
}

async function getWebMScoreObject(path: string) {
  return WebMscore.ready.then(async () => {
    const msczFile = fs.promises.readFile(path)
    const byteArray = new Uint8Array((await msczFile).buffer)
    return WebMscore.load('mscz', byteArray)
  })
}

async function generateThumbs() {
  let progress = 0
  const srcDir = './public/scores'
  let files = fs.readdirSync(srcDir)
  // const files = ['3a3893e985e2a299d6164930cdb2c5d9.mscz']
  for (const file of files) {
    const basename = path.basename(file, '.mscz')
    const dest = `./public/images/thumbs/${basename}.png`
    if (await Bun.file(dest).exists()) {
      progress++
      console.log(`[${progress}/${files.length}] done`)
      continue
    }

    try {
      const score = await getWebMScoreObject(`./public/scores/${file}`)
      const png = await score.savePng(0, true)
      // const resized = await sharp(png).resize({ width: 400 }).toBuffer()
      await fs.promises.writeFile(dest, png)
      progress++
      console.log(`[${progress}/${files.length}] done`)
    } catch (err) {
      console.error(err)
      throw new Error(`Failed processing ${file}`)
    }
  }
}

async function fix() {
  let files = fs.readdirSync('./public/scores')
  let count = 0
  for (const file of files) {
    const buffer = await Bun.file(`./public/scores/${file}`).arrayBuffer()
    const id = hash(buffer)
    const dest = `./public/scores/${id}.mscz`
    const stat = await fs.promises.stat(dest)
    console.log(stat)
  }
}

// fix()
generateThumbs()
