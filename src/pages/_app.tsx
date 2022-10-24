import '@/styles/global.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import React from 'react'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: any }>) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => gtag.pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
