'use client'

import dynamic from 'next/dynamic';

import Link from 'next/link'
const InputEmail = dynamic(() => import('@/app/components/inputs').then(mod => mod.InputEmail));

export default function NewsLetter() {
    return (
        <section className='flex flex-col justify-between items-center gap-4'>
            <header>
            <h4 className='text-h-color text-h4'>Subscribe to Our Newsletter</h4>
            <p className='text-b-500 '>Stay In The Loop with our latest updates, promotions, and fashion tips!</p>
            </header>
            <InputEmail label='Email' id='id' placeholder='me@example.com' name='newLetterEmail'/>
            <div className='flex justify-between items-center gap-3'>
                <input type="checkbox" name="exclusive-offers" id="exclusive-offers" className='w-5 h-5' />
                <label htmlFor="exclusive-offers">I want to receive exclusive offers and promotions.</label>
            </div>
            <p className='text-b-500'>By subscribing, you agree to our <Link href='/legals' className='underline'>Privacy Policy</Link></p>
            <button className='bg-accent text-a-50 font-bold w-full rounded-full py-4 px-6 transition duration-200 active:scale-95 active:opacity-50'>Subscribe</button>
      </section>
    )
}