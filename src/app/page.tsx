'use client'
import type { SongMetadata } from '@/types'
import React, { PropsWithChildren } from 'react'
import { Spacer } from '@/components'
import { getSongs } from '@/features/data'
import { useMemo, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { ColumnHeader, DataTable } from '@/components/ui/data-table'
import { useRouter } from 'next/navigation'
import { formatTime } from '@/lib/utils'

function getColumnHeader(title: string) {
  const CH = ({ column }: any) => <ColumnHeader column={column} title={title} className="whitespace-nowrap" />
  CH.displayName = 'ColumnHeaderWrapper'
  return CH
}

// Converts a string to title case
function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const columns: ColumnDef<SongMetadata>[] = [
  {
    accessorKey: 'title',
    header: getColumnHeader('Title'),
    cell: (props) => <span title={props.getValue() as string}>{toTitleCase(props.getValue() as string)}</span>,
  },
  { accessorKey: 'artist', header: getColumnHeader('Artist') },
  {
    accessorKey: 'duration',
    header: getColumnHeader('Duration'),

    cell: (props) => formatTime(props.getValue() as number),
  },
  { accessorKey: 'difficulty', header: getColumnHeader('Difficulty') },
]
export default function Home() {
  const songs: { [id: string]: SongMetadata } = useMemo(() => getSongs(), [])
  const songsArray: Array<SongMetadata> = useMemo(() => Object.values(songs), [songs])
  const router = useRouter()

  return (
    <>
      <div className="text-left text-2xl font-medium">Browse sheet music</div>
      <Spacer size={12} axis={'vertical'} />
      <div className="">
        <DataTable
          columns={columns}
          data={songsArray}
          onClickRow={(metadata) => router.push(`/detail/${metadata.id}`)}
        />
      </div>
      <Spacer size={32} axis={'vertical'} />
    </>
  )
}
