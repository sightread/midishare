import { Spacer } from "components"
import { Dialog, DialogProps } from "./Dialog"

export function UploadDialog(props: DialogProps) {
  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }

        .title {
          font-weight: 100;
          text-align: center;
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
        }

        button {
          color: white;
          background-color: var(--primary);
          border-radius: 10px;
        }
        .horizontal {
          display: flex;
          position: relative;
          gap: 20px;
        }
        .form_inputs {
          display: grid;
          gap: 10px;
          grid-template-rows: auto;
          grid-template-columns: repeat(2, 1fr); /*first col should be min*/
        }
      `}</style>
      <Dialog
        {...props}
        aria-label="Upload Dialog"
        style={{ width: "calc(100vw-100px)", maxWidth: 600, minWidth: 400 }}
      >
        <div className="container">
          <h1 className="title">Upload a MIDI File</h1>
          <Spacer axis="vertical" size={24} />
          <div className="horizontal">
            <div className="upload_box">
              <button>Select file</button>
              Or drag
            </div>
            <div className="form_inputs">
              <TextInput label="Title" />
              <TextInput label="Artist" />
              <SelectDialog label="Genre" options={["Jazz", "Pop"]} />
            </div>
          </div>
          <Spacer size={64} axis="vertical" />
          <button>Upload</button>
        </div>
      </Dialog>
    </>
  )
}

type SelectDialogProps = { options: string[]; onSelect?: (val: string) => void; label: string }
function SelectDialog({ options, label }: SelectDialogProps) {
  return (
    <>
      <label>{label}</label>
      <select>
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </>
  )
}

type TextInputProps = { onChange?: (str: string) => void; label: string }
function TextInput({ label }: TextInputProps) {
  return (
    <>
      <label>{label}</label>
      <input type="text" />
    </>
  )
}
