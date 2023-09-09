interface Part {
  harmonyCount: number
  hasDrumStaff: boolean
  hasPitchedStaff: boolean
  hasTabStaff: boolean
  instrumentId: 'string'
  instrumentName: 'string'
  lyricCount: number
  name: string
  program: number
}

export interface AttributionData {
  musescoreUrl: string
  user: {
    id: number
    name: string
    url: string
  }
  license: 'cc-by-sa' | 'cc-by' | 'publicdomain'
  licenseUrl: string
}
export interface SongMetadata {
  id: string
  title: string
  artist: string
  hasLyrics: boolean
  keysig: number
  timesig: string
  measures: number
  duration: number
  pages: number
  parts: Part[]
  tempo: number
  genres?: string[]
  difficulty: string
  attributionData: AttributionData
  canonical: {
    songId: number
    artistId: number
  }
  youtubeId?: string
}
