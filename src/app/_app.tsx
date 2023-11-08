// TODO!!
import '@/styles/global.css'

import type { AppProps } from 'next/app'
import React from 'react'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: any }>) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
