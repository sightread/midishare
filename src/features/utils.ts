type Arg = string | boolean | null | undefined
import WebMscore from 'webmscore'

export function cx(...args: Arg[]) {
  return args.filter((a) => a).join(' ')
}

type Format = 'mxl' | 'mid' | 'mp3' | 'mscz'
// export function convertToFormat(file, format:Format) {
//   return WebMscore.ready.then(async () => {

//     const arrBuffer = await file.arrayBuffer()
//     const byteArray = new Uint8Array(arrBuffer)
//     const score = await WebMscore.load(format, byteArray)
//     const metadata = await score.metadata()

// }
