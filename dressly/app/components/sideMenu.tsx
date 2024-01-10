'use client'

import { MouseEvent, useContext, useEffect,useRef, useState} from "react";
import { SideMenuContext, SideMenuType } from "./sideMenuContext";
import Image from 'next/image'
import heroImg from '../../public/hero.png'
import Logo from '../logo-w-bg.png'
import Link from 'next/link'
import Spacer from './spacer'
import { usePathname } from "next/navigation";

export default function SideMenu({children}:{children:React.ReactNode}) {
    const sideMenu = useContext<SideMenuType>(SideMenuContext);
    const mainElRef = useRef<HTMLElement>();
    const asideElRef = useRef<HTMLElement>();
    const pathName = usePathname();
    
    useEffect(()=> {
        function shiftIn() {
            sideMenu.toggle();
        }

        let tempPos = 0;

        console.log(sideMenu.status);
        if(sideMenu.status) {
            console.log(sideMenu.status);
            localStorage.setItem('offset',window.scrollY.toString());
            mainElRef.current.classList.add('rounded-3xl','overflow-hidden', 'absolute', 'left-0', 'right-0','top-0', 'bottom-0', 'shiftOff','animate-pulse');
            asideElRef.current.classList.remove('hidden');
            ["click","mousedown"].forEach(e=> mainElRef.current.addEventListener(e,shiftIn));
        }else {
            console.log(sideMenu.status);
            mainElRef.current.classList.remove('shiftOff','rounded-3xl','overflow-hidden', 'animate-pulse');
            ["click","mousedown"].forEach(e=> mainElRef.current.removeEventListener(e,shiftIn));
            tempPos = Number.parseInt(localStorage.getItem('offset'));
            setTimeout(()=> {
                if(asideElRef.current){
                    asideElRef.current.classList.add('hidden');
                }
                mainElRef.current.classList.remove( 'absolute', 'left-0', 'right-0','top-0', 'bottom-0');
                window.scroll({top:tempPos,left:0,behavior:'smooth'});
            },500);
        }
    },[sideMenu]);

    return (
        <>
        {sideMenu.status && <aside ref={asideElRef} className="z-40 overflow-hidden bg-a-400 px-5 flex flex-col justify-start fixed top-0 bottom-0 w-screen h-screen overflow-y-auto">
            <header className='flex justify-start items-center gap-2 mt-3'>
                <Image src={Logo} width={24} height={24} alt='logo' />
                <h4 className='text-h4 text-a-50 font-black'>Dressly</h4>
            </header>
            <Spacer size={2} />
            <ul className='list-none overflow-y-auto flex flex-col gap-7 justify-between pt-3 items-start transition duration-200 slide-in'>
                <li>
                    <Link href='/' onClick={()=>sideMenu.toggle()} className={`${pathName == '/' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-bold`} >Home
                    </Link>
                </li>
                <li>
                    <Link href='/shop' onClick={()=>sideMenu.toggle()} className={`${pathName == '/shop' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-medium`}>Shop
                    </Link>
                </li>
                <li>
                    <Link href='/services' onClick={()=>sideMenu.toggle()} className={`${pathName == '/services' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-medium`}>Services</Link>
                </li>
                <li>
                    <Link href='/profile' onClick={()=>sideMenu.toggle()} className={`${pathName == '/profile' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-medium`}>Profile</Link>
                </li>
                <li><Link href='/blog' onClick={()=>sideMenu.toggle()} className={`${pathName == '/blog' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-medium`}>Blog</Link></li>
                <li><Link href='/notification' onClick={()=>sideMenu.toggle()} className={`${pathName == '/notification' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-medium`}>Notification</Link></li>
                <li><Link href='/about-us' onClick={()=>sideMenu.toggle()} className={`${pathName == '/about-us' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-medium`}>About us</Link></li>
                <li><Link href='/contact-us' onClick={()=>sideMenu.toggle()} className={`${pathName == '/contact-us' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-medium`}>Contact us</Link></li>
                <li><Link href='/settings' onClick={()=>sideMenu.toggle()} className={`${pathName == '/settings' ? "trans-w-200" : ""} active:trans-w-100 hover:trans-w-100 px-10 py-3 rounded-full text-a-50 font-medium`}>Settings</Link></li>
            </ul>
            <footer className='flex justify-between items-center w-full mt-9'>
                <Link href='/signin' onClick={()=>sideMenu.toggle()} className='px-10 py-3 rounded-full text-a-50 font-medium bg-accent'>Sign In</Link>
                <Link href='/signup' onClick={()=>sideMenu.toggle()} className='px-10 py-3 rounded-full text-a-50 font-medium active:underline hover:underline'>Sign Up</Link>
            </footer>
        </aside> }
        <main ref={mainElRef} id="page-wrapper" className={`z-50 hideScrollbar w-full overflow-x-hidden max-h-screen overflow-y-scroll snap-y snap-mandatory drop-bg bg-primary transition duration-500`}>
            {children}
        </main>        
        </>

    )
}