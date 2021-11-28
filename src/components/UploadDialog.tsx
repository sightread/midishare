import { Dialog, DialogProps } from "./Dialog"

export function UploadDialog(props: DialogProps) {
  return (
    <Dialog {...props} aria-label="Upload Dialog">
      <h1>Upload music!</h1>
    </Dialog>
  )
}
