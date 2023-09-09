'use client'
import type { SongMetadata } from '@/types'
import React from 'react'
import { Search, Spacer, MusicThumbnail } from '@/components'
import { getSongsWithYoutubeVideos } from '@/features/data'
import { useMemo, useState } from 'react'

export default function () {
  const [search, setSearch] = useState('')
  const songs: SongMetadata[] = useMemo(() => Object.values(getSongsWithYoutubeVideos()), [])

  const filteredSongs = songs.filter((s: SongMetadata) => {
    if (!search) {
      return true
    }

    return (
      s.title.toLowerCase().includes(search.toLowerCase()) || s.artist?.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <>
      <div className="text-4xl font-bold text-center">Browse sheet music</div>
      <Spacer size={20} axis={'vertical'} />
      <Search onSearch={(query: string) => setSearch(query)} />
      <Spacer size={24} axis={'vertical'} />
      {filteredSongs.length === 0 && (
        <>
          <span style={{ fontSize: 18 }}>No results found.</span>
        </>
      )}
      <div className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-around">
        {filteredSongs.map((metadata) => (
          <MusicThumbnail metadata={metadata} key={metadata.youtubeId} />
        ))}
      </div>
      <Spacer size={24} axis={'vertical'} />
    </>
  )
}