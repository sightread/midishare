import type { SongMetadata } from "@/types"
import { getYoutubeThumbnailUrl } from "@/features/data"
import Link from "next/link"
import { Spacer } from "./Spacer"
import { cx } from "@/features/utils"

export function MusicThumbnail({ metadata }: { metadata: SongMetadata }) {
  return (
    <div className={cx("transition-transform", "hover:-translate-y-1", "shadow-lg", "rounded-b-lg")}>
      <Link href={`/detail/${metadata.id}`}>
        <a>
          <div className="flex flex-col w-full h-full text-center">
            <img
              className="rounded-t-lg"
              width="1280"
              height="720"
              alt={`Thumbnail for ${metadata.title}`}
              src={getYoutubeThumbnailUrl(metadata.youtubeId)}
            />
            <div className="bg-slate-50 border-t-2 border-t-violet-600 border-b-[1px] border-b-violet-600 rounded-b-lg overflow-hidden h-full">
              <Spacer axis="vertical" size={8} />
              <div className="text-base font-medium">{metadata.title}</div>
              <Spacer axis="vertical" size={8} />
              <div className="text-xs font-extralight text-slate-900">{metadata.artist ?? "\u00A0"}</div>
              <Spacer axis="vertical" size={8} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
