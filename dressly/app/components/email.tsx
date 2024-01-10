'use client'

import dynamic from "next/dynamic";

import { MouseEvent, useState } from "react"

const InputEmail = dynamic(() => import('@/app/components/inputs').then(mod => mod.InputEmail));
const CircleNotch = dynamic(() => import('@phosphor-icons/react/dist/ssr').then(mod => mod.CircleNotch));
const TrendUp = dynamic(() => import('@phosphor-icons/react/dist/ssr').then(mod => mod.TrendUp));

export default function Email() {
    const [inProgress, setInProgress] = useState<boolean>(false);
    function handleNewsLetterSubscription(e:MouseEvent) {
        if(inProgress) {
            return
        }else {
            setInProgress(true);
            setTimeout(()=> {
                setInProgress(false);
            },3000);
        }
    }
    return (
        <section>
            <h6 className='text-h6 text-a-50 font-medium mb-3'>Subscribe to Our Newsletter</h6>
            <InputEmail label='Email' id='newsletter' placeholder='me@example.com' />
            <button onClick={handleNewsLetterSubscription} className='flex justify-center items-center gap-4 rounded-full trans-w-200 text-a-50 w-full mt-3 font-bold py-4 transition duraton-200 active:scale-95 active:opacity-50'>Subscribe 
                {inProgress && <CircleNotch weight="bold" size={24} className='text-a-50 animate-spin' />}
            </button>
        </section>
    )
}