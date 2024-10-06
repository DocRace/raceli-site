import type { Metadata } from 'next'
import { Kalnia, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const kalnia = Kalnia({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kalnia',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
})

// 删除 IBM_Plex_Sans 的导入和实例化

export const metadata: Metadata = {
  title: 'Race Li\'s Portfolio',
  description: 'Race Li\'s personal portfolio website',
  icons: [
    { rel: 'icon', url: '/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
    { rel: 'apple-touch-icon', url: '/favicon/apple-touch-icon.png' },
  ],
  manifest: '/site.webmanifest',
}

const ThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider), {
  ssr: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${kalnia.variable} ${ibmPlexSans.variable}`}>
      <body className={ibmPlexSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
