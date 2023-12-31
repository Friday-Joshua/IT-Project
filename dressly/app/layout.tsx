import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dressly',
  description: 'Fashion Storehouse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`font-sans accent-primary bg-primary scroll-smooth m-5`}>
        {children}
      </body>
    </html>
  )
}
