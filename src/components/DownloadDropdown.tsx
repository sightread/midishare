import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { getSongs } from "features/data"
import { useRouter } from "next/dist/client/router"

export function DownloadDropdown() {
  const { youtubeId } = useRouter().query
  if (!youtubeId) {
    return null
  }
  const song = getSongs().find((s) => s.youtubeId === youtubeId)!
  const fileTypes = ["mid", "mp3", "mxl", "pdf"]
  return (
    <div className="download_dropdown">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="trigger">Download</DropdownMenu.Trigger>
        {/* Need to recreate the className due to portal. */}
        <DropdownMenu.Content sideOffset={5} className="download_dropdown content">
          {fileTypes.map((extension) => (
            <>
              <DropdownMenu.Item className="item">
                <a href={`/download/${song.title}/${song.title}.${extension}`} download={`${song.title}.${extension}`}>
                  *.{extension}
                </a>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
            </>
          ))}
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
