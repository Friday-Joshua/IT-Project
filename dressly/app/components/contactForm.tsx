'use client'

import Input from "@/app/components/inputs";

export default function ContactForm() {
    return (
        <>
            <form action="" className="flex flex-col justify-between items-center gap-4">
                <InputEmail label="Email" placeholder="me@example.com" id="email" name="email" defaultValue={''} />
                <InputTextArea label="Message us" placeholder="Hello!" id="message" name="message" defaultValue={''} />
                <Input.Submit label="Send Message" />
            </form>

        </>
    )
}