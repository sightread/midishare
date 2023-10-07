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
import { file } from 'bun'

export function DownloadDropdown({ id }: any) {
  if (typeof id !== 'string') {
    return null
  }
  const song = getSongs()[id]
  const fileTypes = ['midi', 'mp3', 'musicxml', 'pdf']
  const toExtension: any = { midi: 'mid', mp3: 'mp3', musicxml: 'mxl', pdf: 'pdf' }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Download</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {fileTypes.map((fileType) => (
            <a key={fileType} href={`/todo`} download={`${song.title}.${toExtension[fileType]}`}>
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
