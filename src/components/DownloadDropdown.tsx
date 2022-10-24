import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { getSongsWithYoutubeVideos } from "@/features/data"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import { cx } from "@/features/utils"

export function DownloadDropdown() {
  const [selectedFiletype, setValue] = useState("midi")
  const [downloadHovered, setDownloadHovered] = useState(false)

  const { id } = useRouter().query
  if (typeof id !== "string") {
    return null
  }
  const song = getSongsWithYoutubeVideos()[id]
  const fileTypes = ["midi", "mp3", "musicxml", "pdf"]
  const toExtension: any = { midi: "mid", mp3: "mp3", musicxml: "mxl", pdf: "pdf" }

  return (
    <div className="flex flex-col-reverse rounded-md shadow-2xl overflow-hidden min-w-fit">
      <a
        href={`/download/${song.filename}/${song.filename}.${toExtension[selectedFiletype]}`}
        download={`${song.title}.${toExtension[selectedFiletype]}`}
      >
        <button
          className="bg-violet-600 hover:bg-violet-400 cursor-pointer w-full text-white select-none text-2xl border-none p-1"
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
            className={cx(
              `bg-slate-50 w-1/4 text-lg py-2 px-4 min-w-fit`,
              `hover:!bg-violet-300 hover:!text-slate-50`,
              `data-[state=on]:bg-violet-600 data-[state=on]:text-slate-50`,
              downloadHovered && "data-[state=on]:!bg-violet-400"
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
