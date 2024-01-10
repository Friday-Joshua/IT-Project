'use client'

import Image from "next/image";
import Logo from '../logo.png';
import { AllHTMLAttributes, MouseEvent, MouseEventHandler } from "react";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { MagnifyingGlass, User, List } from "@phosphor-icons/react/dist/ssr";
import { SideMenuContext, SideMenuType } from "./sideMenuContext";

function Nav(props: AllHTMLAttributes<HTMLElement> &
{ searchicon: React.ReactNode, profileicon: React.ReactNode, menuicon: React.ReactNode }) {

  return (
    <nav className={`${props.className} z-40 flex justify-between  items-center h-14 px-5 py-6 fixed left-0 top-0 w-screen transition`}>
      <Link href='/'>
        <Image src={Logo} width={24} height={24} alt="Dressly logo" />
      </Link>
      <div className="flex justify-between items-center gap-7">
        {props.searchicon}
        {props.profileicon}
        {props.menuicon}
      </div>
    </nav>
  );
}

export default function Navbar({ pageOffset }: { pageOffset: number }) {
  const [isOffset, setIsOffset] = useState<boolean>(false);
  const [sideMenuState, setSideMenuState] = useState<boolean>(true);
  const sideMenu = useContext<SideMenuType>(SideMenuContext);

  useEffect(() => {
    const pageWrapper = document.getElementById('page-wrapper');
    pageWrapper.addEventListener('scroll', e => {
      const offset = pageWrapper.scrollTop;
      console.log(offset);
      if (offset <= pageOffset) {
        setIsOffset(false);
      } else {
        setIsOffset(true);
      }
    });
  }, [isOffset]);

  function openSideMenu(e: MouseEvent) {
    console.log(sideMenu.status);
    sideMenu.toggle();
  }

  return (
    <>
      <Nav className={!isOffset ? 'bg-transparent' : 'bg-secondary shadow-sm'}
        searchicon={
          <Link href='/search'>
            <MagnifyingGlass size={24} className='text-icon transition duration-200 active:hover:scale-95 active:hover:opacity-50' />
          </Link>
        }
        profileicon={
          <Link href='/profile'>
            <User size={24} className='text-icon transition duration-200 active:hover:scale-95 active:hover:opacity-50' />
          </Link>
        }
        menuicon={
          <List size={24} onClick={openSideMenu} className='text-icon transition duration-200 active:hover:scale-95 active:hover:opacity-50 ' />
        }
      />
    </>
  )
}

export function HomeNavbar() {
  const [isOffset, setIsOffset] = useState<boolean>(false);
  const [sideMenuState, setSideMenuState] = useState<boolean>(true);
  const sideMenu = useContext<SideMenuType>(SideMenuContext);

  useEffect(() => {
    const pageWrapper = document.getElementById('page-wrapper');
    pageWrapper.addEventListener('scroll', e => {
      const offset = pageWrapper.scrollTop;
      console.log(offset);
      if (offset <= (window.screen.height - 200)) {
        setIsOffset(false);
      } else {
        setIsOffset(true);
      }
    });
  }, [isOffset]);

  function openSideMenu(e: MouseEvent) {
    console.log(sideMenu.status);
    sideMenu.toggle();
  }

  return (
    <>
      {!isOffset ?
        <Nav className={'bg-transparent'}
          searchicon={
            <Link href='/search'>
              <MagnifyingGlass size={24} className='text-white transition duration-200 active:hover:scale-95 active:hover:opacity-50' />
            </Link>
          }
          profileicon={
            <Link href='/profile'>
              <User size={24} className='text-white transition duration-200 active:hover:scale-95 active:hover:opacity-50' />
            </Link>
          }
          menuicon={
            <List size={24} onClick={openSideMenu} className='text-white transition duration-200 active:hover:scale-95 active:hover:opacity-50 ' />
          }
        />
        :
        <Nav className='bg-secondary shadow-sm'
          searchicon={
            <Link href='/search'>
              <MagnifyingGlass size={24} className='text-icon transition duration-200 active:hover:scale-95 active:hover:opacity-50' />
            </Link>
          }
          profileicon={
            <Link href='/profile'>
              <User size={24} className='text-icon transition duration-200 active:hover:scale-95 active:hover:opacity-50' />
            </Link>
          }
          menuicon={
            <List size={24} onClick={openSideMenu} className='text-icon transition duration-200 active:hover:scale-95 active:hover:opacity-50' />
          }
        />
      }

    </>
  )
}

