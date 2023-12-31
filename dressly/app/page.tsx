
import Image from 'next/image'
import Link from 'next/link'
import {Notepad,Ruler,User,List, MagnifyingGlass,ShoppingCart, Eye, ShareFat} from '@phosphor-icons/react/dist/ssr'
import Navbar from './components/navbar'
import Spacer from './components/spacer'

// blog bg imports
import blogBG1 from '../public/blog-bg1.png'
import blogBG2 from '../public/blog-bg2.png'
import blogBG3 from '../public/blog-bg3.png'

// import { useState, useEffect } from 'react'


export default function Page(){

  
  return(
    <>
    <Navbar />
    <main>
      <header className='-m-5 sw-screen h-screen bg-[url("/hero.png")] bg-cover bg-center bg-no-repeat'>
        <div className='absolute bottom-7 ml-5'>
          <h1 className=' text-[60px] text-white w-7 font-black'>CHIC AND UNIQUE</h1>
          <button className='flex justify-between items-center gap-4 p-5 rounded-full bg-accent outline-none border-white border-4 text-a-50 h-16 transition-transform active:scale-50'>
            <ShoppingCart size={24}  />Shop Now</button>
        </div>
      </header>

      <Spacer size={12} />
      
      {/* OUR SERVICES  */}
      <section>
        <header className=''>
          <h3 className='text-h3 text-h-color font-black'>Our Services</h3>
        </header>

        <Spacer size={8} />

        {/* Tailoring */}
        <article className='flex my flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5 '>
          <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500' ><Ruler size={24}  /></span>
          <h5 className='text-h5 text-h-color font-black'>Tailoring</h5>
          <p className='text-p-color'>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
          </p>
          <button className='flex justify-center items-center text-accent bg-a-50 p-5 h-12 w-full rounded-full transition-transform active:scale-95'>Book Now</button>
        </article>

        <Spacer size={8} />

        {/* Styling Session */}
        <article className='flex flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5 '>
          <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500' ><Notepad size={24}  /></span>
          <h5 className='text-h5 text-h-color font-black'>Styling Session</h5>
          <p className='text-p-color'>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
          </p>
          <button className='flex justify-center items-center text-accent bg-a-50 p-5 h-12 w-full rounded-full transition-transform active:scale-95'>Book Now</button>
        </article>

        <Spacer size={8} />

        {/* Online Store  */}
        <article className='flex flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5 '>
          <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500' ><ShoppingCart size={24}  /></span>
          <h5 className='text-h5 text-h-color font-black'>Online Store</h5>
          <p className='text-p-color'>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
          </p>
          <button className='flex justify-center items-center text-accent bg-a-50 p-5 h-12 w-full rounded-full transition-transform active:scale-95'>Book Now</button>
        </article>
      </section>

      <Spacer size={12}/>

      {/* A glimps into our store */}
      <section>
        <header>
          <h3 className='text-h3 text-h-color font-black'>A glimpse into our store</h3>
        </header>
        <Spacer size={6}/>
        <div className='overflow-x-auto whitespace-pre snap-x snap-mandatory scroll-p-7'>
          <Image  src={'/image6.png'} width={300} height={500} alt='product image' className=' object-contain aspect-square  snap-center scroll-m-2 snap-always inline-block' /> 

          <Image  src={'/image8.png'}  width={300} height={500} alt='product image' className=' object-contain aspect-square  snap-center scroll-m-2 snap-always inline-block' /> 

          <Image  src={'/image5.png'} width={300} height={500} alt='product image' className=' object-contain aspect-square  snap-center scroll-m-2 snap-always inline-block' /> 
        </div>

        <Spacer size={6}/>

        <Link href={'/shop'} className='flex justify-center items-center gap-4 bg-accent py-4 px-5 rounded-full text-a-50 w-fit mx-auto transiton-transform active:scale-95 active:bg-a-600'><ShoppingCart size={24} />Shop Now</Link>
      </section>

      <Spacer size={12}/>

      <section>
      <header>
          <h3 className='text-h3 text-color font-black'>Latest Bogs</h3>
        </header>

        <Spacer size={4}/>

        <div className='grid grid-cols-12'>
          <article className='bg-secondary border border-w-100 rounded-2xl p-5 col-span-12 flex flex-col justify-between items-center gap-8'>
            <header>
              <div className='flex justify-between items-center gap-2 w-full'>
                <h1 className='text-h5 text-h-color font-black'>Navigating the World of Fashion</h1>
                <Image src={blogBG1} width={100} height={100}  alt='blog background image' className='aspect-square rounded-full'/>
              </div>
              <strong className='text-b-600 mt-4 block'>By Jane Doe</strong>
              <div className='flex justify-between items-center'>
                <small className='text-b-600'>September 10 2023</small>
                <div className='flex justify-between items-center gap-2'>
                  <Eye size={16} className='text-b-600' />
                  <small className='text-b-600'>324</small>
                </div>
              </div>
            </header>
            <hr className=' border-w-100 w-full'/>
          <p className='text-p-color'>
            Vintage fashion is more than just clothing; it&apos;s a treasure trove of stories, each garment bearing witness to the cultural, social, and artistic influences of its time. From the roaring &apos;20s to the glamorous &apos;50s and beyond, every era brought forth distinct silhouettes, fabrics, and designs that reflected the essence of that period.
            </p>
            <div className='flex justify-between items-center transition '>
              <Link href={'/blog'} className='py-4 px-5 rounded-full bg-accent text-white active:scale-95 active:bg-a-600'>Read More</Link>
              <div className='flex justify-between items-center gap-3'>
                <ShareFat size={20} />
              </div>
            </div>
          </article>
        </div>
      </section>
      </main>
    </>
  )
}
