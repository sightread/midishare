import "styles/reset.css"
import "styles/palette.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
