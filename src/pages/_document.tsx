import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#6E56F5" />

          {/* Favicon */}
          <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="bg-slate-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
