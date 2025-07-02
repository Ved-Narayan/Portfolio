import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ved Narayan portfolio',
  keywords: ['Ved Narayan', 'Portfolio', 'Web Developer'],
  description: '',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/vn.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
