import crypto from "crypto"
import fs from "fs"

function hash(bytes) {
  return crypto.createHash("md5").update(bytes).digest("hex")
}

async function main() {
  if (fs.existsSync("../public/download/.DS_STORE")) {
    fs.rmSync("../public/download/.DS_STORE", { recursive: true, force: true })
  }

  const folders = fs.readdirSync("../public/download")
  const manifest = {}

  for (const dir of folders) {
    const metadataFile = `../public/download/${dir}/metadata.js`
    const midiFile = `../public/download/${dir}/${dir}.mid`

    const metadata = (await import(metadataFile)).default
    const u8Array = new Uint8Array(fs.readFileSync(midiFile))
    const id = hash(u8Array)
    metadata.id = id
    metadata.filename = dir
    manifest[id] = metadata

    // TODO: automatically generate duration
    fs.writeFileSync("../src/features/data/manifest.json", JSON.stringify(manifest))
  }
}

main()
