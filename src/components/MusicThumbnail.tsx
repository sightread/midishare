import type { SongMetadata } from '@/types'
import { getYoutubeThumbnailUrl } from '@/features/data'
import Link from 'next/link'
import { Spacer } from './Spacer'
import Image from 'next/image'
import { cn } from '@/lib/utils'

function getThumbUrl(metadata: SongMetadata) {
  if (metadata.youtubeId) {
    getYoutubeThumbnailUrl(metadata.youtubeId)
  }
  return `/images/thumbs/${metadata.id}.png`
}

// Returns a string in Title Case
function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
}

// const placeholder =
//   'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
export function MusicThumbnail({ metadata }: { metadata: SongMetadata }) {
  return (
    <div className={cn('transition-transform', 'hover:-translate-y-1', 'shadow-lg', 'rounded-b-lg')}>
      <Link href={`/detail/${metadata.id}`}>
        <div className="flex flex-col text-center">
          <div className="relative h-[200px] w-[250px]">
            <Image
              fill
              className="rounded-t-lg object-cover object-top"
              alt={`Thumbnail for ${metadata.title}`}
              src={getThumbUrl(metadata)}
            />
          </div>
          <div className="flex flex-col rounded-b-lg border-t-2 border-b-[1px] border-t-violet-600 border-b-violet-600 bg-slate-50">
            <Spacer axis="vertical" size={8} />
            <div className="text-base font-medium">{toTitleCase(metadata.title)}</div>
            <Spacer axis="vertical" size={8} />
            <div className="text-xs font-extralight text-slate-900">{metadata.artist ?? '\u00A0'}</div>
            <Spacer axis="vertical" size={8} />
          </div>
        </div>
      </Link>
    </div>
  )
}
