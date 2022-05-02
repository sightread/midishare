import { Menu, MenuButton, MenuItem, MenuLink, MenuList } from "@reach/menu-button"

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
