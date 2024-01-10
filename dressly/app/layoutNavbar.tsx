'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

const Navbar = dynamic(() => import('@/app/components/navbar'));
const HomeNavbar = dynamic(() => import('@/app/components/navbar').then(mod => mod.HomeNavbar));

export default function LayoutNavbar() {
    const path = usePathname();

    return (
        <>
            {path === '/' ? <HomeNavbar /> :
            path === '/signin'||'/signup' ? null :
            <Navbar pageOffset={50} />}
        </>)

}