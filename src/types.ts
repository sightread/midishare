export type SongMetadata = SongMetadataMaybeYoutube & { youtubeId: string }

export type SongMetadataMaybeYoutube = HandwrittenSongMetadata & BuildGeneratedMetadata

export interface BuildGeneratedMetadata {
  id: string

  filename: string
}

export interface HandwrittenSongMetadata {
  title: string
  artist?: string
  uploader: string
  uploadedAt: Date
  youtubeId?: string
  originalSourceUrl?: string
  originalSourceType: "musescore" | "flat.io" | "other"
  originalArranger: string
}
