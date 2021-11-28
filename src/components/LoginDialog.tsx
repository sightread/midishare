import { Dialog, DialogProps } from "./Dialog"

export function LoginDialog(props: DialogProps) {
  return (
    <Dialog {...props} aria-label="Login Dialog">
      <h1>Continue with Federated Login</h1>
    </Dialog>
  )
}
