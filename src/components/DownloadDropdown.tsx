'use client'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { getSongs } from '@/features/data'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function DownloadDropdown({ id }: any) {
  const [selectedFiletype, setValue] = useState('midi')
  const [downloadHovered, setDownloadHovered] = useState(false)

  if (typeof id !== 'string') {
    return null
  }
  const song = getSongs()[id]
  const fileTypes = ['midi', 'mp3', 'musicxml', 'pdf']
  const toExtension: any = { midi: 'mid', mp3: 'mp3', musicxml: 'mxl', pdf: 'pdf' }

  return (
    <div className="flex min-w-fit flex-col-reverse overflow-hidden rounded-md shadow-2xl">
      <a href={`/todo`} download={`${song.title}.${toExtension[selectedFiletype]}`}>
        <button
          className="w-full cursor-pointer select-none border-none bg-violet-600 p-1 text-2xl text-white hover:bg-violet-400"
          onMouseEnter={() => setDownloadHovered(true)}
          onMouseLeave={() => setDownloadHovered(false)}
        >
          Download
        </button>
      </a>
      <ToggleGroup.Root
        type="single"
        value={selectedFiletype}
        onValueChange={(value: string) => {
          if (value) setValue(value)
        }}
        className="flex"
      >
        {fileTypes.map((fileType) => (
          <ToggleGroup.Item
            className={cn(
              `w-1/4 min-w-fit bg-slate-50 py-2 px-4 text-lg`,
              `hover:!bg-violet-300 hover:!text-slate-50`,
              `data-[state=on]:bg-violet-600 data-[state=on]:text-slate-50`,
              downloadHovered && 'data-[state=on]:!bg-violet-400',
            )}
            value={fileType}
            key={fileType}
          >
            {fileType}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}
