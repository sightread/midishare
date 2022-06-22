import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { getSongs, SongMetadata } from "features/data"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"

export function DownloadDropdown() {
  const [selectedFiletype, setValue] = useState("midi")
  const [downloadHovered, setDownloadHovered] = useState(false)

  const { id } = useRouter().query
  if (typeof id !== "string") {
    return null
  }
  const song = getSongs()[id]
  const fileTypes = ["midi", "mp3", "musicxml", "pdf"]
  const toFilename = (song: SongMetadata) => song.filename ?? song.title.replace(/ /g, "_")
  const toExtension: any = { midi: "mid", mp3: "mp3", musicxml: "mxl", pdf: "pdf" }

  return (
    <div
      className="download_dropdown"
      onMouseEnter={() => setDownloadHovered(true)}
      onMouseLeave={() => setDownloadHovered(false)}
    >
      <a
        href={`/download/${toFilename(song)}/${toFilename(song)}.${toExtension[selectedFiletype]}`}
        download={`${song.title}.${toExtension[selectedFiletype]}`}
      >
        <button className="download_dropdown__button">Download</button>
      </a>
      <ToggleGroup.Root
        className={"download_dropdown__group" + (downloadHovered ? " download_hovered" : "")}
        type="single"
        value={selectedFiletype}
        onValueChange={(value: string) => {
          if (value) setValue(value)
        }}
      >
        {fileTypes.map((fileType) => (
          <ToggleGroup.Item className="download_dropdown__item" value={fileType} key={fileType}>
            {fileType}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}
