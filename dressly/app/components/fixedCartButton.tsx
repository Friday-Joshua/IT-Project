'use client'

import { ShoppingCart } from "@phosphor-icons/react/dist/ssr"
import { useState, useEffect } from "react";
import Store from '@/app/store'

export default function FixedCartButton({pageOffset}:{pageOffset:number}) {
    const [isOffset, setIsOffset] = useState<boolean>(false);
    const store = new Store();
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
        <div className={`z-40 transition duration-200 active:scale-95 active:opacity-50 ${isOffset ? 'fixed bottom-5 right-5 text-accent bg-a-50 shadow-lg rounded-2xl flex justify-center items-center p-3' : 'relative text-icon'}`}>
          <span className={`flex justify-center items-center p-5 rounded-full text-accent font-bold bg-white ring-1 ring-white size-2 scale-50 absolute bottom-1 left-1 z-20 ${isOffset ? `absolute top-0 left-5 bg-white text-accent` : ``}`}>{store.getCart().items.length}
          </span>
          <ShoppingCart size={isOffset ? 32 : 24}/>
        </div>
        )
    
}