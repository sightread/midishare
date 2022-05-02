import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

export function DownloadDropdown() {
  return (
    <div className="download_dropdown">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="trigger">Download</DropdownMenu.Trigger>
        {/* Need to recreate the className due to portal. */}
        <DropdownMenu.Content sideOffset={5} className="download_dropdown content">
          <DropdownMenu.Item className="item">*.mid</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item className="item">*.mp3</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item className="item">*.musicxml</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item className="item">*.pdf</DropdownMenu.Item>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
