import Link from "next/link"
import { Spacer } from "components"
import * as Icons from "icons"

export function Header() {
  return (
    <div className="header">
      <div className="inner_wrapper max-width-wrapper">
        <Link href="/">
          <a style={{ display: "flex", flexDirection: "row" }}>
            <Icons.Headphones height={24} style={{ alignSelf: "center" }} />
            <Spacer size={10} axis="horizontal" />
            <h2>midishare</h2>
          </a>
        </Link>
        <Spacer style={{ marginLeft: "auto" }} />
        <Link href={"/upload"}>
          <a style={{ display: "flex", flexDirection: "row" }}>
            <Icons.Upload height={24} style={{ alignSelf: "center" }} />
            <Spacer size={8} axis="horizontal" />
            <h2>Upload</h2>
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
