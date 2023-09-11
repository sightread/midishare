import crypto from 'node:crypto'
import fs from 'node:fs'
import { getDuration } from './utils.mjs'
import prettier from 'prettier'

function hash(bytes) {
  return crypto.createHash('md5').update(bytes).digest('hex')
}

async function main() {
  if (fs.existsSync('../public/download/.DS_STORE')) {
    fs.rmSync('../public/download/.DS_STORE', { recursive: true, force: true })
  }

  const folders = fs.readdirSync('../public/download')
  const manifest = {}

  for (const dir of folders) {
    const metadataFile = `../public/download/${dir}/metadata.js`
    const midiFile = `../public/download/${dir}/${dir}.mid`

    const metadata = (await import(metadataFile)).default
    const u8Array = new Uint8Array(fs.readFileSync(midiFile))
    const id = hash(u8Array)
    metadata.id = id
    metadata.filename = dir
    metadata.duration = Math.round(getDuration(u8Array.buffer))
    manifest[id] = metadata

    fs.writeFileSync(
      '../src/features/data/manifest.json',
      prettier.format(JSON.stringify(manifest), { parser: 'json' }),
    )
  }
}

main()
