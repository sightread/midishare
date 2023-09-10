import type { SongMetadataMaybeYoutube } from '@/types'
import { NextRequest } from 'next/server'
import { getSongs } from '@/features/data'
import fs from 'fs'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) {
    return new Response('Request must contain an ID', { status: 400 })
  } else if (Array.isArray(id)) {
    return new Response('Request cannot contain multiple IDs', { status: 400 })
  }

  const song = getSongs()[id]
  if (!song) {
    return new Response(`Midi with ID ${id} cannot be found.`, { status: 404 })
  }

  try {
    // In development we have access to the filesystem but can't hit localhost with https.
    // When deployed we don't have access to fs, but can proxy to the hosted /public.
    if (process.env.NODE_ENV !== 'development') {
      return fetch(`https://${process.env.VERCEL_URL}/${getFileLocation(song)}`)
    }

    const stream = fs.readFileSync(`public/${getFileLocation(song)}`)
    const headers = {
      'Content-Type': 'audio/midi',
      'Content-Disposition': `attachment; filename="${getAsciiFilename(song)}"`,
    }

    return new Response(stream, { status: 200, headers })
  } catch (err) {
    console.error(`Encountered error while serving: ${song.filename}:\n`, err)
    return new Response('Internal server error', { status: 500 })
  }
}

// Strip all non-ascii characters to be compatible with Content-Disposition spec.
// TODO: It would be far more graceful to escape non-ascii characters instead
//       of throwing them out wholesale.
function getAsciiFilename(song: SongMetadataMaybeYoutube) {
  const filename = `${song.title}-${song.artist}.mid`
  return filename.replace(/[^\x00-\x7F]/g, '')
}

function getFileLocation(song: SongMetadataMaybeYoutube): string {
  return `download/${song.filename}/${song.filename}.mid`
}

/* async function get(url: string): Promise<IncomingMessage> {
  return new Promise((resolve, reject) => {
    const req = https.get(url)
    req.on('response', (response) => resolve(response))
    req.on('error', (err) => reject(err))
  })
}
*/

/*async function proxy(stream: Stream, res: NextApiResponse<any>) {
  return new Promise((resolve, reject) => {
    stream.on('end', () => resolve(undefined))
    stream.on('error', (e) => reject(e))
    stream.pipe(res)
  })
}
*/
