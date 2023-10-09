import type { SongMetadata } from '@/types'
import manifest from './manifest.json'

// Return all the song data for songs with YT videos.
export function getSongs(): { [id: string]: SongMetadata } {
  return manifest as any
}

export function getYoutubeThumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}
