'use client'

import { ShoppingCart } from "@phosphor-icons/react/dist/ssr"
import { useState, useEffect } from "react";

export default function FixedCartButton({pageOffset}:{pageOffset:number}) {
    const [isOffset, setIsOffset] = useState<boolean>(false);
    
    useEffect(()=> {
        const pageWrapper = document.getElementById('page-wrapper');
        pageWrapper.addEventListener('scroll',e=>{
          const offset = pageWrapper.scrollTop;
          console.log(offset);
          if(offset <= pageOffset){
            setIsOffset(false);
          }else{
            setIsOffset(true);
          } 
        });
      },[isOffset]);

    return (
        <div className={`relative ${isOffset ? 'fixed bottom-12 right-5 text-accent bg-a-50 shadow-lg rounded-full flex justify-center items-center p-3' : 'text-icon'}`}>
          <span></span>
          <ShoppingCart size={isOffset ? 32 : 24}/>
        </div>
        )
    
}