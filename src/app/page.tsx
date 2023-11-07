import { getSongs } from '@/features/data'
import { useMemo } from 'react'
import { Spacer } from '@/components/Spacer'
import { DataTableSong, SongsDataTable } from '@/components/ui/songs-data-table'

export default function Home() {
  const songs: { [id: string]: DataTableSong } = useMemo(() => {
    return Object.fromEntries(
      Object.entries(getSongs()).map(([id, song]) => [
        id,
        { id: song.id, title: song.title, artist: song.artist, duration: song.duration },
      ]),
    )
  }, [])
  const songsArray = useMemo(() => Object.values(songs), [songs])

  return (
    <>
      <Spacer size={12} axis={'vertical'} />
      <div className="text-left text-2xl font-medium">Browse music</div>
      <Spacer size={12} axis={'vertical'} />
      <SongsDataTable songs={songsArray} />
      <Spacer size={32} axis={'vertical'} />
    </>
  )
}
