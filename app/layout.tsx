import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'DIROS — DJ & Producer | Barcelona',
  description:
    'Official EPK for DIROS, a Tech House, Minimal Deep Tech and Minimal DJ & producer based in Barcelona. Live sets, media, venues, riders and booking.',
  generator: 'v0.app',
  keywords: ['DIROS', 'DJ', 'Producer', 'Barcelona', 'Tech House', 'Minimal Deep Tech', 'EPK', 'Booking'],
  openGraph: {
    title: 'DIROS — DJ & Producer | Barcelona',
    description:
      'Tech House · Minimal Deep Tech · Minimal | Barcelona. Live sets, media, venues, riders and booking.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
