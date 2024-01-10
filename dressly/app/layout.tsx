import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const SideMenuProvider = dynamic(() => import('@/app/components/sideMenuContext'));
const SideMenu = dynamic(() => import('@/app/components/sideMenu'));
const LayoutNavbar = dynamic(() => import('@/app/layoutNavbar'));

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
          <LayoutNavbar />
          <SideMenu>
            {children}
          </SideMenu>
        </SideMenuProvider>
      </body>
    </html>
  )
}
