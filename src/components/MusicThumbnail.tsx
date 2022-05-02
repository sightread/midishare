import { getYoutubeThumbnailUrl, SongMetadata } from "features/data"
import Link from "next/link"
import { Spacer } from "./Spacer"

export function MusicThumbnail({ metadata }: { metadata: SongMetadata }) {
  return (
    <div className="music_thumbnail" key={`thumb-${metadata.youtubeId}`}>
      <div className="image_thumb">
        <img width="300px" src={getYoutubeThumbnailUrl(metadata.youtubeId)} />
      </div>
      <Spacer axis="vertical" size={8} />
      <Link href={`/song/${metadata.youtubeId}`}>
        <a className="title">{metadata.title}</a>
      </Link>
      <span className="artist">{metadata.artist}</span>
    </div>
  )
}
