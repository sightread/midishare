import Image from "next/image"
import { Spacer } from "components"
import { Headphones, Upload } from "icons"

export function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          height: 40px;
          align-items: center;
          background-color: var(--primary);
          color: white;
        }

        h2 {
          font-size: 24px;
        }
      `}</style>
      <Spacer size={20} axis="horizontal" />
      <Headphones height={24} />
      <Spacer size={10} axis="horizontal" />
      <h2>midishare</h2>
      <Spacer style={{ marginLeft: "auto" }} />
      <Upload height={24} />
      <Spacer size={10} axis="horizontal" />
      <h2>Upload</h2>
      <Spacer size={20} axis="horizontal" />
      <h2>Log in</h2>
      <Spacer size={20} axis="horizontal" />
    </div>
  )
}
