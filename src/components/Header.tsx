import { Spacer } from "components"
import { Headphones, Upload } from "icons"
import { useState } from "react"
import { LoginDialog } from "./LoginDialog"
import { UploadDialog } from "./UploadDialog"

export function Header() {
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const openLoginDialog = () => setShowLoginDialog(true)
  const closeLoginDialog = () => setShowLoginDialog(false)

  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const openUploadDialog = () => setShowUploadDialog(true)
  const closeUploadDialog = () => setShowUploadDialog(false)

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
          font-weight: normal;
        }
        a {
          text-decoration: none;
          font-size: inherit;
          color: inherit;
        }
      `}</style>
      <LoginDialog isOpen={showLoginDialog} onDismiss={closeLoginDialog} />
      <UploadDialog isOpen={showUploadDialog} onDismiss={closeUploadDialog} />
      <Spacer size={20} axis="horizontal" />
      <a href="/">
        <Headphones height={24} />
      </a>
      <Spacer size={10} axis="horizontal" />
      <a href="/">
        <h2>midishare</h2>
      </a>
      <Spacer style={{ marginLeft: "auto" }} />
      <Upload height={24} />
      <Spacer size={10} axis="horizontal" />
      <h2 style={{ cursor: "pointer" }} onClick={openUploadDialog}>
        Upload
      </h2>
      <Spacer size={20} axis="horizontal" />
      <h2 onClick={openLoginDialog} style={{ cursor: "pointer" }}>
        Log in
      </h2>
      <Spacer size={20} axis="horizontal" />
    </div>
  )
}
