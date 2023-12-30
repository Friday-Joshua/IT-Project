'use client'

import Image from 'next/image'
import Link from 'next/link'
import {Notepad,Ruler,User,List, MagnifyingGlass,ShoppingCart} from '@phosphor-icons/react'
import {Navbar} from './components/navbar'

export default function Page(){
  function demoFunc() {

  }
  return(
    <>
    <Navbar className='bg-transparent'
      onLogoClick={demoFunc}
      searchicon={<MagnifyingGlass size={24} className='text-white transition-transform active:scale-50' />}
      profileicon={<User size={24} className='text-white transition-transform active:scale-50' />}
      menuicon={<List size={24} className='text-white transition-transform active:scale-50 ' />}
      />
    <main>
      <header className='-m-5 sw-screen h-screen bg-[url("/hero.png")] bg-cover bg-center bg-no-repeat'>
        <div className='absolute bottom-7 ml-5'>
          <h1 className=' text-[60px] text-white w-7 font-black'>CHIC AND UNIQUE</h1>
          <button className='flex justify-between items-center gap-4 p-5 rounded-full bg-accent outline-none border-white border-4 text-a-50 h-16 transition-transform active:scale-50'>
            <ShoppingCart size={24}  />Shop Now</button>
        </div>
      </header>

      {/* OUR SERVICES  */}
      <section className='my-20'>
        <header className='mb-8'>
          <h4 className='text-h3 text-color font-black'>Our Services</h4>
        </header>
        {/* Tailoring */}
        <article className='flex flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5'>
          <span className='flex justify-center items-center -mt-[50px] p-5 border border-w-100 rounded-full bg-w-500' ><Ruler size={24}  /></span>
          <h5 className='text-h4 font-black'>Tailoring</h5>
          <p>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
          </p>
          <button className='flex justify-center items-center bg-a-50 p-5 h-12 w-full rounded-full transition-transform active:scale-50'>Book Now</button>
        </article>
        {/* Styling Session */}
        <article className='flex flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5'>
          <span className='flex justify-center items-center -mt-[50px] p-5 border border-w-100 rounded-full bg-w-500' ><Ruler size={24}  /></span>
          <h5 className='text-h4 font-black'>Tailoring</h5>
          <p>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
          </p>
          <button className='flex justify-center items-center bg-a-50 p-5 h-12 w-full rounded-full transition-transform active:scale-50'>Book Now</button>
        </article>
        {/*  */}
      </section>


    </main>
    </>
  )
}