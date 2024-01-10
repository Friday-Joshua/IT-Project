'use client'

import { Heart } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react"

export default function WhishIcon() {
    const [isWished, setIsWished] = useState(false);
    return <Heart size={24} weight={isWished ? 'fill' : 'regular'} onClick={()=> setIsWished(!isWished)} className="absolute top-3 right-3 text-accent transition duration-200 active:scale-150 active:opacity-10"/>
}