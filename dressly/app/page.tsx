'use client'

import Image from 'next/image'
import Link from 'next/link'
import {Hamburger} from '@phosphor-icons/react'

export default function Page(){
  return(
    <>
     <nav className='w-full h-14 shadow-slate-800 transition-shadow duration-150 bg-secondary border-b-2 border-w-500 p-8 flex flex-row justify-between items-center space-x-8'>
          <div>
            <Hamburger size={24} className='text-accent'/>
          </div>
          <div className='flex space-x-8 justify-between items-center'>
      
          </div>
        </nav>
    </>
  )
}