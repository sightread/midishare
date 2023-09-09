import React from 'react'
import { Spacer } from '@/components'
import { DownloadDropdown } from '@/components/DownloadDropdown'
import { getSongs } from '@/features/data'
// @ts-ignore
import { redirect, permanentRedirect, notFound } from 'next/navigation'

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
      <div className="relative aspect-video">
        <iframe
          width="600"
          height="400"
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?&rel=0`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <Spacer axis="vertical" size={16} />
      <div className="flex flex-row flex-wrap gap-5">
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
        <span className="ml-auto w-full md:w-fit">
          <DownloadDropdown id={id} />
        </span>
      </div>
    </>
  )
}
