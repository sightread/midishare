import "styles/reset.css"
import "styles/palette.css"
import "styles/global.css"
import "components/Header.css"
import "components/DownloadDropdown.css"
import "components/MusicThumbnail.css"
import "components/Search.css"
import "features/pages/SongDetail/index.css"
import "features/pages/Landing/index.css"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
