import { NextRequest } from 'next/server'
import { getSongs } from '@/features/data'
import { getAsciiFilename } from '@/components/utils'
import { getAssetUrl } from '@/lib/utils'

// This route only exists for backcompat. It will be deleted soon.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) {
    return new Response('Request must contain an ID', { status: 400 })
  }

  const song = getSongs()[id]
  if (!song) {
    return new Response(`Midi with ID ${id} cannot be found.`, { status: 404 })
  }

  try {
    const headers = {
      'Content-Type': 'audio/midi',
      'Content-Disposition': `attachment; filename="${getAsciiFilename(id)}"`,
    }
    const response = await fetch(getAssetUrl(id, 'mid'))
    return new Response(response.body, { status: 200, headers })
  } catch (err) {
    console.error(`Encountered error while serving: ${song.id}:\n`, err)
    return new Response('Internal server error', { status: 500 })
  }
}
