import { Chat, Notepad, Ruler, ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { BlogCardProps } from '@/app/components/blogCard'
import {HomeNavbar} from './components/navbar'
import Spacer from './components/spacer'
import dynamic from 'next/dynamic'

// Stylesheets
import styles from './styles/index.module.css'

const BlogCard = dynamic(()=> import('@/app/components/blogCard'));
const CustomerReview = dynamic(()=> import('@/app/components/customerReview'));
const NewsLetter = dynamic(()=> import('@/app/components/newsletter'));
const Footer = dynamic(()=> import('@/app/components/footer'));

export default function Page() {BlogCard
  type BlogType = BlogCardProps & { id: string };
  const blogPosts: BlogType[] = [
    { id: "1258", title: "Navigating the World of Fashion", author: "Jane Doe", heroSrc:'/blog-bg1.png' , date: 'September 05 2023', views: 38, likes: 59, content: "Vintage fashion is more than just clothing; it's a treasure trove of stories, each garment bearing witness to the cultural, social, and artistic influences of its time. From the roaring '20s to the glamorous '50s and beyond, every era brought forth distinct silhouettes, fabrics, and designs that reflected the essence of that period." },

    { id: "484934", title: "Couture Corner: All About High-End Fashion", author: "Jane Doe", heroSrc:'/blog-bg2.png' , date: 'September 10 2023', views: 48, likes: 82, content: "Vintage fashion is more than just clothing; it's a treasure trove of stories, each garment bearing witness to the cultural, social, and artistic influences of its time. From the roaring '20s to the glamorous '50s and beyond, every era brought forth distinct silhouettes, fabrics, and designs that reflected the essence of that period." },

    { id: "0edd0e39", title: "Navigating the World of Fashion", author: "Jane Doe", heroSrc: '/blog-bg3.png', date: 'September 20 2023', views: 28, likes: 47, content: "Vintage fashion is more than just clothing; it's a treasure trove of stories, each garment bearing witness to the cultural, social, and artistic influences of its time. From the roaring '20s to the glamorous '50s and beyond, every era brought forth distinct silhouettes, fabrics, and designs that reflected the essence of that period." },];

  return (
    <>
      <HomeNavbar />
        <main  className='bg-primary mx-5'>
        <header className=' hideScrollbar  relative w-screen -mx-5 h-screen overflow-hidden bg-[url("/hero.png")] bg-cover bg-center bg-no-repeat'>
          <div className='absolute bottom-20 ml-5'>
            <h1 className=' text-[60px] text-white w-7 font-black'>CHIC AND UNIQUE <i>store</i></h1>
            <button className='flex justify-between items-center gap-4 px-8 py-5 rounded-full bg-accent outline-none border-white border-4 text-a-50 h-16 transition-transform duration-200 active:scale-50 active:opacity-50'>
              <ShoppingCart size={24} />Shop Now
            </button>
          </div>
        </header>
        <Spacer size={12} />

        {/* OUR SERVICES  */}
        <section className=''>
          <header className=''>
            <h4 className='text-h4 text-h-color font-black'>Our Services</h4>
          </header>

          <Spacer size={8} />

          {/* Tailoring */}
          <article className='flex my flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5 '>
            <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500' ><Ruler size={24} /></span>
            <h5 className='text-h5 text-h-color font-black'>Tailoring</h5>
            <p className='text-p-color text-lg'>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
            </p>
            <Link href='/' className='flex justify-center items-center w-full text-a-50 bg-accent p-5 h-12 rounded-full transition-transform active:scale-95 active:opacity-50'>Book Now</Link>
          </article>

          <Spacer size={8} />

          {/* Styling Session */}
          <article className='flex flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5 '>
            <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500' ><Notepad size={24} /></span>
            <h5 className='text-h5 text-h-color font-black'>Styling Session</h5>
            <p className='text-p-color text-lg'>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
            </p>
            <Link href='/' className='flex justify-center items-center text-a-50 bg-accent p-5 h-12 w-full rounded-full transition-transform duration-200 active:scale-95 active:opacity-50'>Book Now</Link>
          </article>

          <Spacer size={8} />

          {/* Online Store  */}
          <article className='flex flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5 '>
            <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500' ><ShoppingCart size={24} /></span>
            <h5 className='text-h5 text-h-color font-black'>Online Store</h5>
            <p className='text-p-color text-lg'>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
            </p>
            <Link href='/' className='flex justify-center items-center text-a-50 bg-accent p-5 h-12 w-full rounded-full transition-transform duration-200 active:scale-95 active:opacity-50'>Book Now</Link>
          </article>
        </section>
        <Spacer size={12} />

        <section className=' hideScrollbar  scroll-my'>
          <header>
            <h4 className='text-h4 text-h-color font-black'>A glimpse into our store</h4>
          </header>
          <Spacer size={4} />
          <div className={`${styles.noScrollBar} py-5 overflow-x-auto whitespace-pre snap-x snap-mandatory scroll-p-7 -mx-5 px-5`}>

            <Link href='/shop'>
              <Image src={'/image6.png'} width={300} height={300} alt='product image' className=' transition duration-90 active:shadow-md hover:shadow-md w-11/12 object-contain aspect-square  snap-center inline-block border border-line bg-secondary mr-5 p-5 rounded-2xl' />
            </Link>
            <Link href='/shop'>
              <Image src={'/image8.png'} width={300} height={300} alt='product image' className=' transition duration-90 active:shadow-md hover:shadow-md w-11/12 object-contain aspect-square  snap-center inline-block border border-line bg-secondary mr-5 p-5 rounded-2xl' />
            </Link>
            <Link href='/shop'>
              <Image src={'/image5.png'} width={300} height={300} alt='product image' className=' transition duration-90 active:shadow-md hover:shadow-md w-11/12 object-contain aspect-square  snap-center inline-block border border-line bg-secondary mr-5 p-5 rounded-2xl' />
            </Link>
          </div>

          <Spacer size={4} />

          <Link href={'/shop'} className='flex justify-center items-center gap-4 bg-accent py-4 px-8 rounded-full text-a-50 w-fit mx-auto transiton-transform duration-200 active:scale-95 active:opacity-50'><ShoppingCart size={24} />Shop Now</Link>
        </section>

        <Spacer size={12} />

        <section className=' scroll-my hideScrollbar'>
          <header>
            <h4 className='text-h4 text-color font-black'>Latest Bogs</h4>
          </header>

          <Spacer size={4} />

          <div className='grid grid-cols-12 gap-6'>
            {blogPosts.map((post) => {
              return (
                <React.Fragment key={post.id} >
                  <BlogCard title={post.title} heroSrc={post.heroSrc} author={post.author} date={post.date} views={post.views} likes={post.likes} content={post.content} />
                </React.Fragment>
              )
            })}
          </div>
        </section>

        <Spacer size={12} />

        {/* Customer Review Section  */}
        <section  className='hideScrollbar'>
          <header>
            <h4 className='text-h4 text-color font-black'>Customer Reviews</h4>
            <div className='flex justify-start items-center gap-3 mt-1'>
              <span className='rounded-full bg-w-100 p-2 flex justify-center items-center'>
                <Chat size={16} className='text-icon' />
              </span>
              <small className='text-b-500'>17 Reviews</small>
            </div>
          </header>
          <Spacer size={6} />

          {/* customer comments */}
          <section className={`${styles.noScrollBar} overflow-x-auto whitespace-pre snap-x snap-mandatory scroll-p-7 -mx-5 px-5`}>
            <div className='snap-center whitespace-normal scroll-m-2  mr-5 snap-always inline-block w-11/12'>
              <CustomerReview avatarUrl= '/blog-bg3.png' comment={`Exceptional quality! The dress exceeded my expectations. Perfect fit and exquisite design. Will definitely shop here again!`} userName={'Chioma M.'} />
            </div>
            <div className='snap-center scroll-m-2 snap-always mr-5 whitespace-normal inline-block w-11/12'>
              <CustomerReview avatarUrl= '/blog-bg1.png' comment={`Exceptional quality! The dress exceeded my expectations. Perfect fit and exquisite design. Will definitely shop here again!`} userName={'Kelly K.'} />
            </div>
            <div className='snap-center scroll-m-2 snap-always mr-5 whitespace-normal inline-block w-11/12'>
              <CustomerReview avatarUrl= '/blog-bg2.png' comment={`Exceptional quality! The dress exceeded my expectations. Perfect fit and exquisite design. Will definitely shop here again!`} userName={'Kelly K.'} />
            </div>
            <div className='snap-center scroll-m-2 snap-always whitespace-normal inline-block w-11/12'>
              <CustomerReview avatarUrl='/blog-bg3.png' comment={`Exceptional quality! The dress exceeded my expectations. Perfect fit and exquisite design. Will definitely shop here again!`} userName={'Janny J.'} />
            </div>
          </section>
        </section>
        <Spacer size={12} />
        <section className=' w-full hideScrollbar'>
          <NewsLetter />
        </section>
        <Spacer size={12} />

        <section className='hideScrollbar'>
          <Footer />
        </section>
        </main>        
    </>
  )
}