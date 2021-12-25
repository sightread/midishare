import { Spacer } from "components"
import Link from "next/link"
import { Dialog, DialogProps } from "./Dialog"
import { signIn } from "next-auth/react"

export function LoginDialog(props: DialogProps) {
  return (
    <Dialog {...props} aria-label="Login Dialog">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center" }}>Log in / Sign up</h1>
        <Spacer axis="vertical" size={24} />

        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              width: 300,
              height: 60,
              border: "1px solid black",
              borderRadius: 10,
              lineHeight: "60px",
            }}
            onClick={() => signIn("google")}
          >
            Continue with Google
          </div>
          <Spacer axis="vertical" size={16} />
          <div
            onClick={() => signIn("facebook")}
            style={{ width: 300, height: 60, border: "1px solid black", borderRadius: 10, lineHeight: "60px" }}
          >
            Continue with Facebook
          </div>
        </div>
      </div>
    </Dialog>
  )
}
