import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'lite-youtube-embed/src/lite-yt-embed.css'
import '@/styles/global.css'
import { Header, Spacer, MaxWidthWrapper } from '@/components'
import { GA_TRACKING_ID } from '@/lib/gtag'
import { ThemeProvider } from '@/components/theme-provider'

const description = `Download and share MIDIs for learning Piano`
export const metadata: Metadata = {
  title: 'midishare',
  themeColor: 'hsl(262.1, 83.3%, 57.8%)',
  description,
  openGraph: {
    type: 'website',
    url: 'midishare.dev',
    title: 'midishare',
    description,
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'midishare',
    description,
    images: [],
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`min-h-screen ${inter.variable} bg-background font-sans text-foreground`}>
      <head>
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
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <Spacer axis="vertical" size={16} />
          <MaxWidthWrapper as="main">
            <Spacer axis="vertical" size={16} />
            {children}
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
