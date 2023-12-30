import Image from "next/image";
import Logo from '../logo.png';
import { AllHTMLAttributes, MouseEvent, MouseEventHandler } from "react";
import {MagnifyingGlass} from '@phosphor-icons/react'

export function Navbar(props:AllHTMLAttributes<HTMLElement> &
     {onLogoClick:MouseEventHandler} & 
     {searchIcon:React.ReactNode, profileIcon:React.ReactNode, menuIcon:React.ReactNode}) {
    return (
        <nav {...props} className={`${props.className} flex justify-between  items-center h-10 px-5 py-6 fixed left-0 top-0 w-screen`}>
            <Image src={Logo} width={24} height={24} alt="Dressly logo" onClick={props.onLogoClick}/>
            <div className="flex justify-between items-center gap-6">
                {props.searchIcon}
                {props.profileIcon}
                {props.menuIcon}
            </div>
        </nav>
    );
}

export function SearchBar() {
    
}