'use client'

import Input from "@/app/components/inputs";

export default function ContactForm() {
    return (
        <>
            <form action="" className="flex flex-col justify-between items-center gap-4">
                <Input.Email label="Email" placeholder="me@example.com" id="email" name="email" defaultValue={''} />
                <Input.TextArea label="Message us" placeholder="Hello!" id="message" name="message" defaultValue={''} />
                <Input.Submit label="Send Message" />
            </form>

        </>
    )
}