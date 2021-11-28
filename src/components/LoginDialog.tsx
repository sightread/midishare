import { Dialog, DialogProps } from "./Dialog"

export function LoginDialog(props: DialogProps) {
  return (
    <Dialog {...props}>
      <h1>Continue with Federated Login</h1>
    </Dialog>
  )
}
