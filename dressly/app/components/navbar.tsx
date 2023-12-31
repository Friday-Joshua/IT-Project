'use client'

import Image from "next/image";
import Logo from '../logo.png';
import { AllHTMLAttributes, MouseEventHandler } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MagnifyingGlass, User, List } from "@phosphor-icons/react/dist/ssr";

function Nav(props:AllHTMLAttributes<HTMLElement> & 
     {searchicon:React.ReactNode, profileicon:React.ReactNode, menuicon:React.ReactNode}) {
     
    return (
        <nav {...props} className={`${props.className} flex justify-between  items-center h-10 px-5 py-6 fixed left-0 top-0 w-screen transition z-50`}>
            <Link href='/'>
                <Image src={Logo} width={24} height={24} alt="Dressly logo"/>
            </Link>
            <div className="flex justify-between items-center gap-6">
                {props.searchicon}
                {props.profileicon}
                {props.menuicon}
            </div>
        </nav>
    );
}

export default function Navbar() {
    const [isOffset, setIsOffset] = useState<boolean>(false);
    useEffect(()=> {
      window.addEventListener('scroll',e=>{
        const offset = window.scrollY;
        if(offset <= (window.screen.height - 200)){
          setIsOffset(false);
        }else{
          setIsOffset(true);
        } 
      });
    },[isOffset]);

    return (
        <>
            {!isOffset ?
                <Nav className='bg-transparent'
                searchicon={<MagnifyingGlass size={24} className='text-white transition-transform active:scale-50' />}
                profileicon={<User size={24} className='text-white transition-transform active:scale-50' />}
                menuicon={<List size={24} className='text-white transition-transform active:scale-50 ' />}
                />
                : 
                <Nav className='bg-secondary shadow-sm'
                searchicon={<MagnifyingGlass size={24} className='text-icon transition-transform active:scale-50' />}
                profileicon={<User size={24} className='text-icon transition-transform active:scale-50' />}
                menuicon={<List size={24} className='text-icon transition-transform active:scale-50 ' />}
                />
            }
        </>
    )
}