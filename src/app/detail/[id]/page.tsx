import React from 'react'
import { Spacer } from '@/components'
import { Button } from '@/components/ui/button'
import { DownloadDropdown } from '@/components/DownloadDropdown'
import { getSongs } from '@/features/data'
// @ts-ignore
import { redirect, permanentRedirect, notFound } from 'next/navigation'
import Image from 'next/image'

const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
function getDaysAgo(date: Date) {
  const msPerDay = 1000 * 60 * 60 * 24
  const days = Math.floor((date.getTime() - new Date().getTime()) / msPerDay)
  return formatter.format(days, 'day')
}

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

  return (
    <>
      <div className="gap- flex-wra flex w-full flex-col">
        <div className="flex flex-col text-left text-lg">
          <span className="title text-2xl">
            {song.title} {song.artist && <span className="artist"> - {song.artist}</span>}
          </span>
          <span className="text-sm text-slate-600">
            Uploaded by <span className="italic">@sightread</span>
          </span>
          <span className="text-sm text-slate-600">
            Sourced from:{' '}
            <a href={song.attributionData.musescoreUrl} className="text-primary hover:text-primary/50">
              {song.attributionData.user.name}
            </a>
          </span>
        </div>
        <Spacer axis="vertical" size={16} />

        <div className="flex w-full flex-wrap gap-5">
          <span className="w-4/12">
            <span className="ml-auto w-full md:w-fit">
              <Image
                src="https://musescore.com/static/musescore/scoredata/g/09522325f13e23685a5ea3615ab2d6b76e94cd1d/score_0.svg"
                width={300}
                height={300}
                alt=""
              />
            </span>
          </span>
          <span className="w-7/12 self-center ">
            <span className="flex justify-center gap-5">
              <DownloadDropdown id={id} />
              <a href="https://sightread.dev/play?id=9a2e41903523a6ba060c06f3b5204f62&source=midishare">
                <Button>Learn to Play</Button>
              </a>
            </span>
            <Spacer axis="vertical" size={16} />
            {youtubeId && (
              <div className="relative aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?&rel=0`}
                  allowFullScreen
                />
              </div>
            )}
          </span>
        </div>
      </div>
    </>
  )
}
