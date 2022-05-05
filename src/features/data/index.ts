export interface SongMetadata {
  title: string
  artist?: string
  uploader: string
  uploadedAt: Date // TODO: make a date type?
  youtubeId: string
  originalSourceUrl?: string
  originalSourceType: "musescore" | "flat.io" | "bloom"
  originalArranger: string
  duration: string
}

export function getSongs(): SongMetadata[] {
  return [
    {
      title: "People Can't Stop Chillin",
      artist: "Sports",
      uploader: "sightread",
      uploadedAt: new Date("2022-04-26"),
      youtubeId: "ivPV66gBxrc",
      originalSourceUrl: "https://dannybloommusic.com/",
      originalSourceType: "bloom",
      originalArranger: "bloom",
      duration: "1:21",
    },
    {
      title: "Simple and Clean",
      artist: "Utada Hikaru",
      uploader: "sightread",
      uploadedAt: new Date("2022-04-25"),
      youtubeId: "-8z9zB61Vac",
      originalSourceUrl: "https://musescore.com/user/164580/scores/421356",
      originalSourceType: "musescore",
      originalArranger: "Sawdust.Apple",
      duration: "3:05",
    },
    {
      title: "Scarborough Fair",
      uploader: "sightread",
      uploadedAt: new Date("2022-04-23"),
      youtubeId: "hC-Xca0X5ZI",
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/203715/scores/5183854",
      originalArranger: "thepianoplayer",
      duration: "1:03",
    },
    {
      title: "All Eyes On Me",
      artist: "Bo Burnham",
      uploader: "sightread",
      uploadedAt: new Date("2022-04-22"),
      youtubeId: "fP9erBo-Eds",
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/21150936/scores/6817499",
      originalArranger: "musicllama",
      duration: "3:05",
    },
    {
      title: "Havana",
      artist: "Camila Cabello",
      uploader: "sightread",
      youtubeId: "z7nttEdJNTo",
      uploadedAt: new Date("2022-05-03"),
      originalSourceType: "flat.io",
      originalSourceUrl: "https://flat.io/score/5a160292f138063a18d8a14b-havana",
      originalArranger: "danielszymula",
      duration: "3:20",
    },
    {
      title: "Into The Unknown",
      artist: "The Blasting Company",
      uploader: "sightread",
      youtubeId: "9Y49FwoLeUk",
      uploadedAt: new Date("2022-05-04"),
      originalSourceType: "bloom",
      originalSourceUrl: "https://dannybloommusic.com/",
      originalArranger: "bloom",
      duration: "1:16",
    },
    {
      title: "Sweet Hibiscus Tea",
      artist: "Penelope Scott",
      uploader: "sightread",
      youtubeId: "gWQO56u_WBQ",
      uploadedAt: new Date("2022-05-04"),
      originalSourceType: "bloom",
      originalSourceUrl: "https://dannybloommusic.com/",
      originalArranger: "bloom",
      duration: "1:03",
    },
  ]
}

export function getYoutubeThumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}
