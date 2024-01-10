'use client'

import { createContext,useState } from "react";

export type SideMenuType = {status:boolean,toggle:()=>void}

export const sideMenuValue = {status:false,toggle(){
    this.status = this.status ? false : true}};

export const SideMenuContext = createContext<SideMenuType>(sideMenuValue);

export default function SideMenuProvider({children} : {children:React.ReactNode}) {
    const [status, setStatus] = useState<boolean>(false);
    const defaultValue = {status,toggle() {
        setStatus(!status);
    }};
    return (
        <>
            <SideMenuContext.Provider value={defaultValue}>
                {children}
            </SideMenuContext.Provider>
        </>
    )
}