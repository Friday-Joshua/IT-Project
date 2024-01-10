import { Eye } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import BlogCardActions from "./blogCardActions";
import Image, { StaticImageData } from "next/image";

export type BlogCardProps = {title:string,heroSrc:string, author:string, date:string, views:number,likes:number, content:string}

export default function BlogCard({title, heroSrc, author, date, views, likes, content}:BlogCardProps) {
    return (
        <article className='bg-secondary border border-w-100 rounded-2xl p-5 col-span-12 flex flex-col justify-between items-center gap-8 transiton duration-100 select-none hover:shadow-lg active:shadow-lg'>
            <header className='w-full'>
              <div className='flex justify-between items-center gap-2 w-full'>
                <h1 className='text-h5 text-h-color font-black'>{title}</h1>
                <Image src={heroSrc} width={100} height={100}  alt='blog background image' className='aspect-square rounded-full'/>
              </div>
              <strong className='text-b-600 mt-4 block'>{author}</strong>
              <div className='flex justify-between items-center'>
                <small className='text-b-600'>{date}</small>
                <div className='flex justify-between items-center gap-2'>
                  <Eye size={16} className='text-b-600' />
                  <small className='text-b-600'>{views}</small>
                </div>
              </div>
            </header>
            <hr className=' border-w-100 w-full'/>
            <p className='text-p-color text-lg w-full'>
                {content.substring(0,70)}
                <span className='truncate w-full overflow-hidden block'>{content.substring(70,content.length)}</span>
            </p>
            <div className='flex justify-between items-center transition w-full '>
              <Link href={'/blog'} className='py-4 px-5 rounded-full bg-accent text-white transition duration-200 active:scale-95 active:opacity-50'>Read More</Link>
              <BlogCardActions likes={likes} />
            </div>
        </article>
    )
}