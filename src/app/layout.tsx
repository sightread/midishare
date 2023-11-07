import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import 'lite-youtube-embed/src/lite-yt-embed.css'
import '@/styles/global.css'
import { GA_TRACKING_ID } from '@/lib/gtag'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/Footer'
import { Spacer } from '@/components/Spacer'
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper'
import { Header } from '@/components/Header'

const description = `Download and share MIDIs for learning Piano`
export const metadata: Metadata = {
  metadataBase: new URL('https://midishare.dev'),
  title: 'midishare',
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

export const viewport: Viewport = {
  themeColor: 'hsl(262.1, 83.3%, 57.8%)',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`min-h-screen ${inter.variable} bg-background font-sans text-foreground`}
      // Suppress hydration warning because next-theme will add "dark"/"light" to the html classList
      suppressHydrationWarning
    >
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
          <MaxWidthWrapper as="main">{children}</MaxWidthWrapper>
          <Spacer axis="vertical" size={32} />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
