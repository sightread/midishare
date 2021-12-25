import Link from "next/link"
import { Spacer } from "components"
import { Headphones, Upload } from "icons"
import { useState } from "react"
import { LoginDialog } from "./LoginDialog"
import { UploadDialog } from "./UploadDialog"

import { useSession } from "next-auth/react"

export function Header() {
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const openLoginDialog = () => setShowLoginDialog(true)
  const closeLoginDialog = () => setShowLoginDialog(false)

  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const openUploadDialog = () => setShowUploadDialog(true)
  const closeUploadDialog = () => setShowUploadDialog(false)
  const { data: session } = useSession()

  const loginText = session?.user?.email ?? "Log in"

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
      <Link href="/">
        <a>
          <Headphones height={24} />
        </a>
      </Link>
      <Spacer size={10} axis="horizontal" />
      <Link href="/">
        <a>
          <h2>midishare</h2>
        </a>
      </Link>
      <Spacer style={{ marginLeft: "auto" }} />
      <Upload height={24} />
      <Spacer size={10} axis="horizontal" />
      <h2 style={{ cursor: "pointer" }} onClick={openUploadDialog}>
        Upload
      </h2>
      <Spacer size={20} axis="horizontal" />
      <h2 onClick={openLoginDialog} style={{ cursor: "pointer" }}>
        {loginText}
      </h2>
      <Spacer size={20} axis="horizontal" />
    </div>
  )
}
