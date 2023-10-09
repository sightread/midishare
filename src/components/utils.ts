import { getSongs } from '@/features/data'

export type DownloadableFormat = 'mid' | 'pdf' | 'mp3' | 'mxl'

export function getMimeType(format: DownloadableFormat) {
  if (format === 'mid') return 'audio/midi'
  else if (format === 'pdf') return 'application/pdf'
  else if (format === 'mp3') return 'audio/mpeg'
  else if (format === 'mxl') return 'application/vnd.recordare.musicxml+xml'
  return 'application/octet-stream'
}

// Strip all non-ascii characters to be compatible with Content-Disposition spec.
// TODO: It would be far more graceful to escape non-ascii characters instead
//       of throwing them out wholesale.
export function getAsciiFilename(id: string) {
  const song = getSongs()[id]
  const filename = `${song.title}-${song.artist}.mid`
  return filename.replace(/[^\x00-\x7F]/g, '')
}
