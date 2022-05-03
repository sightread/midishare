import { getYoutubeThumbnailUrl, SongMetadata } from "features/data"
import Link from "next/link"
import { Spacer } from "./Spacer"

export function MusicThumbnail({ metadata }: { metadata: SongMetadata }) {
  return (
    <div className="music_thumbnail">
      <div className="image_thumb">
        <Link href={`/detail/${metadata.youtubeId}`}>
          <a>
            <img alt={`Thumbnail for ${metadata.title}`} src={getYoutubeThumbnailUrl(metadata.youtubeId)} />
          </a>
        </Link>
      </div>
      <Spacer axis="vertical" size={8} />
      <Link href={`/detail/${metadata.youtubeId}`}>
        <a className="title">{metadata.title}</a>
      </Link>
      <span className="artist">{metadata.artist}</span>
    </div>
  )
}
