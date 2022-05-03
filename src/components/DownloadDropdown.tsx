import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { getSongs } from "features/data"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"

export function DownloadDropdown() {
  const [selectedFiletype, setValue] = useState("midi")
  const [downloadHovered, setDownloadHovered] = useState(false)

  const { youtubeId } = useRouter().query
  if (!youtubeId) {
    return null
  }
  const song = getSongs().find((s) => s.youtubeId === youtubeId)!
  const fileTypes = ["midi", "mp3", "musicxml", "pdf"]
  const toFilename = (title: string) => title.replace(/ /g, "_")
  const toExtension: any = { midi: "mid", mp3: "mp3", musicxml: "mxl", pdf: "pdf" }

  return (
    <div
      className="download_dropdown"
      onMouseEnter={() => setDownloadHovered(true)}
      onMouseLeave={() => setDownloadHovered(false)}
    >
      <a
        href={`/download/${toFilename(song.title)}/${toFilename(song.title)}.${toExtension[selectedFiletype]}`}
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
          <ToggleGroup.Item className="download_dropdown__item" value={fileType}>
            {fileType}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}

// <DropdownMenu.Root>
//   <DropdownMenu.Trigger className="trigger">Download</DropdownMenu.Trigger>
//   <DropdownMenu.Content sideOffset={5} className="download_dropdown content">
//     {fileTypes.map((extension) => (
//       <>
//         <DropdownMenu.Item className="item">
//           <a
//             href={`/download/${toFilename(song.title)}/${toFilename(song.title)}.${extension}`}
//             download={`${song.title}.${extension}`}
//           >
//             *.{extension}
//           </a>
//         </DropdownMenu.Item>
//         <DropdownMenu.Separator />
//       </>
//     ))}
//     <DropdownMenu.Arrow />
//   </DropdownMenu.Content>
// </DropdownMenu.Root>
