import { HTMLAttributes } from "react";
import Rating from "./rating";
import Image, { StaticImageData } from 'next/image'

type CustomerReviewProps = {avatarUrl:string, comment:string, userName:string};

export default function CustomerReview({avatarUrl,comment,userName}:CustomerReviewProps) {
    return (
        <article className={`flex flex-col justify-center p-5 items-start gap-5 bg-secondary rounded-2xl border border-line`}>
          <Rating size={20} />
          <p className='text-p-color text-lg'>{comment}</p>
          <footer className='flex justify-start items-center gap-4'>
            <Image src={avatarUrl} alt='customer avatar' width={40} height={40} className='aspect-square rounded-full object-top' />
            <h6 className='text-h6 text-h-color font-black'>{userName}</h6>
          </footer>
        </article>
    )
}