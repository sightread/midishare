import { getYoutubeThumbnailUrl, SongMetadata } from "features/data"
import Link from "next/link"
import { Spacer } from "./Spacer"

export function MusicThumbnail({ metadata }: { metadata: SongMetadata }) {
  return (
    <div className="music_thumbnail">
      <Link href={`/detail/${metadata.youtubeId}`}>
        <a>
          <div className="inner">
            <div className="image_thumb">
              <img
                width="1280"
                height="720"
                alt={`Thumbnail for ${metadata.title}`}
                src={getYoutubeThumbnailUrl(metadata.youtubeId)}
              />
            </div>
            <Spacer axis="vertical" size={8} />
            <div className="title">{metadata.title}</div>
            <div className="artist">{metadata.artist}</div>
          </div>
        </a>
      </Link>
    </div>
  )
}
