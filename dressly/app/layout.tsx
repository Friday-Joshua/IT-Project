import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import SideMenuProvider from './components/sideMenuContext'
import SideMenu from './components/sideMenu'

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
    <html lang="en" className=''>
      <body className='font-sans accent-primary bg-primary scroll-smooth'>
        <SideMenuProvider>
          <SideMenu>
            {children}
          </SideMenu>
        </SideMenuProvider>
      </body>
    </html>
  )
}
