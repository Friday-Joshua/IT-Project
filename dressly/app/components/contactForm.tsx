'use client'

import dynamic from 'next/dynamic';

const InputEmail = dynamic(() => import('@/app/components/inputs').then(mod => mod.InputEmail));
const InputTextArea = dynamic(() => import('@/app/components/inputs').then(mod => mod.InputTextArea));
const InputSubmit = dynamic(() => import('@/app/components/inputs').then(mod => mod.InputSubmit));


export default function ContactForm() {
    return (
        <>
            <form action="" className="flex flex-col justify-between items-center gap-4">
                <InputEmail label="Email" placeholder="me@example.com" id="email" name="email" defaultValue={''} />
                <InputTextArea label="Message us" placeholder="Hello!" id="message" name="message" defaultValue={''} />
                <InputSubmit label="Send Message" />
            </form>

        </>
    )
}