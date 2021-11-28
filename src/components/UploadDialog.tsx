import { Spacer } from "components"
import { Dialog, DialogProps } from "./Dialog"

export function UploadDialog(props: DialogProps) {
  return (
    <Dialog {...props} aria-label="Upload Dialog" style={{ display: "flex", flexDirection: "column" }}>
      <style jsx>{`
        h1 {
          font-weight: 100;
        }

        .upload_box {
          display: flex;
          flex-direction: column;
          width: 250px;
          height: 150px;
          border: 1px solid black;
          justify-content: center;
          align-items: center;
        }

        .upload_box button {
          width: 150px;
          height: 30px;
          color: white;
          background-color: var(--primary);
          border-radius: 10px;
        }
      `}</style>
      <h1>Upload a MIDI File</h1>
      <div className="horizontal">
        <div className="upload_box">
          <button>Select file</button>
          Or drag
        </div>
        <div className="select_dialogs"></div>
      </div>
      <Spacer size={64} axis="vertical" />
      <button>Upload</button>
    </Dialog>
  )
}
