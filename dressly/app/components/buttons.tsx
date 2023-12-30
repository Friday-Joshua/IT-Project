'use client'

import React from "react";

function Contained({label,leading,trailing,className}:{label:string,leading?:React.ReactNode,trailing?:React.ReactNode,className?:any}) {
    return (
        <button type="button" className={`${className} bg-accent flex flex-row items-center justify-center gap-2 text-a-50 h-[50px] rounded-full font-bold`}>{leading}{label}{trailing}</button>
    )
}

export default function Button(){}
Button.Contained = Contained;