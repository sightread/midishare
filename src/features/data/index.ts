export interface SongMetadata {
  title: string
  artist?: string
  uploader: string
  uploadedAt: number // TODO: make a date type?
  youtubeId: string
  originalSourceUrl?: string
  originalSourceType: "musescore" | "flat.io" | "bloom"
}
export function getSongs(): SongMetadata[] {
  return [
    {
      title: "People Can't Stop Chillin",
      artist: "Sports",
      uploader: "sightread",
      uploadedAt: Date.now(),
      youtubeId: "ivPV66gBxrc",
      originalSourceUrl: "https://dannybloommusic.com/",
      originalSourceType: "bloom",
    },
    {
      title: "Kingdom Hearts: Simple and Clean",
      artist: "Utada Hikaru",
      uploader: "sightread",
      uploadedAt: Date.now(),
      youtubeId: "-8z9zB61Vac",
      originalSourceUrl: "https://musescore.com/user/164580/scores/421356",
      originalSourceType: "musescore",
    },
    {
      title: "Scarborough Fair",
      uploader: "sightread",
      uploadedAt: Date.now(),
      youtubeId: "hC-Xca0X5ZI",
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/203715/scores/5183854",
    },
    {
      title: "All Eyes On Me",
      artist: "Bo Burnham",
      uploader: "sightread",
      uploadedAt: Date.now(),
      youtubeId: "fP9erBo-Eds",
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/21150936/scores/6817499",
    },
    {
      title: "Havana",
      artist: "Camila Cabello",
      uploader: "sightread",
      youtubeId: "z7nttEdJNTo",
      uploadedAt: Date.now(),
      originalSourceType: "flat.io",
      originalSourceUrl: "https://flat.io/score/5a160292f138063a18d8a14b-havana",
    },
  ]
}

export function getYoutubeThumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}
