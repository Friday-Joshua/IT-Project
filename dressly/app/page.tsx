'use client'

import Image from 'next/image'
import Link from 'next/link'
import {User,List, MagnifyingGlass} from '@phosphor-icons/react'
import {Navbar} from './components/navbar'

export default function Page(){
  function demoFunc() {

  }
  return(
    <>
    <Navbar className='bg-transparent'
      onLogoClick={demoFunc}
      searchIcon={<MagnifyingGlass size={24} className='text-white active:' />}
      profileIcon={<User size={24} className='text-white' />}
      menuIcon={<List size={24} className='text-white' />}
      />
    <main>
      <header className='-m-5 w-screen h-screen bg-[url("/hero.png")] bg-cover bg-center bg-no-repeat'>

      </header>
    </main>
    </>
  )
}