'use client'

import { useRouter } from 'next/navigation'
import { ColumnHeader, DataTable } from './data-table'
import { ColumnDef } from '@tanstack/react-table'
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

export interface DataTableSong {
  id: string
  title: string
  artist: string
  duration: number
}

export interface SongsDataTableProps {
  songs: Array<DataTableSong>
}

const columns: ColumnDef<DataTableSong>[] = [
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

export function SongsDataTable(props: SongsDataTableProps) {
  const router = useRouter()
  return (
    <DataTable
      columns={columns}
      data={props.songs}
      onClickRow={(metadata: DataTableSong) => router.push(`/detail/${metadata.id}`)}
    />
  )
}
