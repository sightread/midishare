import React from 'react'
import { DownloadDropdown } from '@/components/DownloadDropdown'
import { getSongs } from '@/features/data'
import { redirect, permanentRedirect, notFound } from 'next/navigation'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getAssetThumbnailUrl } from '@/lib/utils'
import { Spacer } from '@/components/Spacer'

function isYoutubeId(id: any) {
  return typeof id === 'string' && id.length === 11
}

export default async function SongDetail({ params }: any) {
  const { id } = params

  // Redirects
  if (isYoutubeId(id)) {
    const song = Object.values(getSongs()).find((s) => s.youtubeId === id)
    if (!song) {
      console.log('redirecting b/c no song found')
      redirect('/')
    }
    permanentRedirect(`/detail/${song.id}`)
  } else if (typeof id !== 'string' || id.length !== 32) {
    notFound()
  }

  const song = getSongs()[id]
  const youtubeId = song.youtubeId

  if (!song) {
    return <></>
  }
  const YouTubeContent = (
    <div className="relative aspect-video">
      <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${youtubeId}?&rel=0`} allowFullScreen />
    </div>
  )
  const SheetContent = (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm border dark:border-none">
      <Image src={getAssetThumbnailUrl(id)} fill className="object-cover object-top" alt="" />
    </div>
  )
  const availablePreviews: Array<{ value: string; label: string; content: JSX.Element }> = [
    youtubeId && { value: 'youtube', label: 'YouTube', content: YouTubeContent },
    { value: 'sheet', label: 'Sheet Music', content: SheetContent },
  ].filter(Boolean) as any

  return (
    <>
      <div className="mx-auto flex max-w-4xl flex-col">
        <Tabs defaultValue={availablePreviews[0].value} className="relative w-full">
          <div className="flex flex-row items-center gap-4">
            <div>Preview formats</div>
            <TabsList>
              {availablePreviews.map((preview, i) => (
                <TabsTrigger key={i} value={preview.value}>
                  {preview.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {availablePreviews.map((preview, i) => (
            <TabsContent key={i} value={preview.value}>
              {preview.content}
            </TabsContent>
          ))}
        </Tabs>
        <Spacer axis="vertical" size={16} />
        <div className="flex flex-col gap-1 text-left text-lg">
          <span className="title text-2xl">
            {song.title} {song.artist && <span className="artist"> - {song.artist}</span>}
          </span>
          <span className="text-sm text-muted-foreground">
            Originally uploaded to{' '}
            <a href={song.attributionData.musescoreUrl} className="underline underline-offset-4">
              musescore
            </a>{' '}
            by{' '}
            <a href={song.attributionData.user.url} className="underline underline-offset-4">
              {song.attributionData.user.name}
            </a>
          </span>
        </div>
        <Spacer axis="vertical" size={16} />
        <span className="flex gap-5">
          <DownloadDropdown id={song.id} title={song.title} />
        </span>
      </div>
    </>
  )
}
