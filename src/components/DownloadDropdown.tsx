'use client'
import { getSongs } from '@/features/data'

import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { DownloadableFormat } from './utils'

export function DownloadDropdown({ id }: any) {
  if (typeof id !== 'string') {
    return null
  }
  const song = getSongs()[id]
  const fileTypes: Array<DownloadableFormat> = ['mid', 'mp3', 'mxl', 'pdf']
  const toExtension: any = { midi: 'mid', mp3: 'mp3', musicxml: 'mxl', pdf: 'pdf' }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-2">
          Download
          <CaretSortIcon className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuGroup>
          {fileTypes.map((fileType) => (
            <a
              key={fileType}
              target="_blank"
              href={`https://assets.midishare.dev/scores/${id}/${id}.${fileType}`}
              download={`${song.title}.${toExtension[fileType]}`}
            >
              <DropdownMenuItem>
                <span>{fileType}</span>
              </DropdownMenuItem>
            </a>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
