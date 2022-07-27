import type { SongMetadataMaybeYoutube, SongMetadata } from "types"
import manifest from "./manifest.json"

// Return all the song data for songs with YT videos.
export function getSongs(): { [id: string]: SongMetadataMaybeYoutube } {
  return manifest as any
}

export function getSongsWithYoutubeVideos(): { [id: string]: SongMetadata } {
  return Object.fromEntries(Object.entries(manifest).filter(([_id, v]) => !!v.youtubeId)) as any
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
//
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
//
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
//
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
//
// },
