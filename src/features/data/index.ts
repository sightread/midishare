import manifest from "./manifest.json"

export type SongMetadata = SongMetadataMaybeYoutube & { youtubeId: string; midiUrl: string }

export interface SongMetadataMaybeYoutube {
  id: string
  title: string
  artist?: string
  uploader: string
  uploadedAt: Date // TODO: make a date type?
  youtubeId?: string
  originalSourceUrl?: string
  originalSourceType: "musescore" | "flat.io" | "other"
  originalArranger: string
  duration: string
  filename?: string
}

// Return all the song data for songs with YT videos.
export function getSongs(): { [id: string]: SongMetadata } {
  return manifest as any
}

export function getYoutubeThumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

// {
//   title: "Levels",
//   artist: "Avicii",
//   uploader: "sightread",
//   // youtubeId:
//   uploadedAt: new Date("2022-06-16"),
//   originalSourceType: "musescore",
//   originalSourceUrl: "https://musescore.com/official_author/scores/6923306",
//   originalArranger: "Official Scores",
//   duration: "3:03",
// },
// {
//   title: "Piano Man",
//   artist: "Billy Joel",
//   uploader: "sightread",
//   // youtubeId:
//   uploadedAt: new Date("2022-06-16"),
//   originalSourceType: "musescore",
//   originalSourceUrl: "https://musescore.com/official_scores/scores/6941641",
//   originalArranger: "Official Scores",
//   duration: "1:48",
// },
// {
//   title: "All Of Me",
//   artist: "John Legend",
//   uploader: "sightread",
//   // youtubeId:
//   uploadedAt: new Date("2022-06-16"),
//   originalSourceType: "musescore",
//   originalSourceUrl: "https://musescore.com/user/28416909/scores/5926797",
//   originalArranger: "Official Scores",
//   duration: "2:21",
// },
// {
//   title: "Never Gonna Give You Up",
//   artist: "Rick Astley",
//   uploader: "sightread",
//   // youtubeId:
//   uploadedAt: new Date("2022-06-16"),
//   originalSourceType: "musescore",
//   originalSourceUrl: "https://musescore.com/user/28857438/scores/5112198",
//   originalArranger: "punctuationless",
//   duration: "3:24",
// },
