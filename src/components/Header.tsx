import Link from "next/link"
import { Spacer } from "components"
import * as Icons from "icons"

export function Header() {
  return (
    <div className="header">
      <div className="header__inner_wrapper max-width-wrapper">
        <Link href="/">
          <a className="header__brand" style={{ display: "flex", flexDirection: "row" }}>
            <Icons.Headphones height={24} style={{ alignSelf: "center" }} />
            <Spacer size={10} axis="horizontal" />
            <span>midishare</span>
          </a>
        </Link>
        <Spacer style={{ marginLeft: "auto" }} />
        <Link href={"/upload"}>
          <a className="header__upload_link">
            <Icons.Upload height={16} style={{ alignSelf: "center" }} />
            <Spacer size={6} axis="horizontal" />
            <span>Upload</span>
          </a>
        </Link>
        <Link href="https://github.com/samouri/midishare">
          <a>
            <Icons.GitHub height={24} />
          </a>
        </Link>
      </div>
    </div>
  )
}
