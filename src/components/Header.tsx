import Link from "next/link"
import { Spacer } from "components"
import { Headphones, Upload } from "icons"
import { useState } from "react"
import { LoginDialog } from "./LoginDialog"
import { UploadDialog } from "./UploadDialog"

import { useSession, signOut } from "next-auth/react"
import { Menu, MenuButton, MenuItem, MenuLink, MenuList } from "@reach/menu-button"

export function Header() {
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const openLoginDialog = () => setShowLoginDialog(true)
  const closeLoginDialog = () => setShowLoginDialog(false)

  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const openUploadDialog = () => setShowUploadDialog(true)
  const closeUploadDialog = () => setShowUploadDialog(false)
  const { data: session } = useSession()

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
      {!session ? (
        <h2 onClick={openLoginDialog} style={{ cursor: "pointer" }}>
          Log In
        </h2>
      ) : (
        <UserDropdown user={session?.user as any} />
      )}

      <Spacer size={20} axis="horizontal" />
    </div>
  )
}

type User = { email: string; image: string }
function UserDropdown(props: { user: User }) {
  const { email, image } = props.user
  return (
    <>
      <Menu>
        <MenuButton style={{ backgroundColor: "inherit", border: "none" }}>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <img src={image} style={{ borderRadius: "50%", height: 30 }} />
            <span aria-hidden style={{ color: "white" }}>
              ▾
            </span>
          </div>
        </MenuButton>
        <MenuList>
          <MenuLink href="/users/me">See uploads</MenuLink>
          <MenuItem onSelect={() => signOut()}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}
