import fs from 'fs'

export async function getCanonicalMusicFile(id: string): Promise<ArrayBufferLike> {
  // In development we have access to the filesystem but can't hit localhost with https.
  // When deployed we don't have access to fs, but can proxy to the hosted /public.
  if (process.env.NODE_ENV !== 'development') {
    return (await fetch(`https://${process.env.VERCEL_URL}/public/scores/${id}.mscz`))
      .arrayBuffer as unknown as ArrayBufferLike
  }
  return fs.readFileSync(`public/scores/${id}.mscz`).buffer
}
