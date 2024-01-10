import ContactForm from "@/app/components/contactForm";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Spacer from "@/app/components/spacer";
import { Clock, Envelope, FacebookLogo, InstagramLogo, MapPin, Phone, TwitterLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <main className="mx-5">
                <Spacer size={8} />
                <header className="">
                    <h1 className="text-h-color text-h1 font-black">Get In Touch</h1>
                    <span className="text-lg">Our friendly team would love to hear from you</span>
                    <Spacer size={4} />
                    <ContactForm />
                </header>
                <Spacer size={12} />

                {/* Contact info */}
                <section>
                    <h3 className="text-h-color font-black text-h3">Contact Info</h3>
                    <Spacer size={2} />
                    <div className="flex justify-between items-center gap-3">
                        <Link href={'/facebook'} className=" transition dura active:scale-95 active:opacity-50 active:bg-secondary p-2 rounded-full border border-w-100 flex justify-center items-center">
                            <FacebookLogo size={26} />
                        </Link>
                        <Link href={'/whatsapp'} className=" transition dura active:scale-95 active:opacity-50 active:bg-secondary p-2 rounded-full border border-w-100 flex justify-center items-center">
                            <WhatsappLogo size={26} />
                        </Link>
                        <Link href={'/instagram'} className=" transition dura active:scale-95 active:opacity-50 active:bg-secondary p-2 rounded-full border border-w-100 flex justify-center items-center">
                            <InstagramLogo size={26} />
                        </Link>
                        <Link href={'/twitter'} className=" transition dura active:scale-95 active:opacity-50 active:bg-secondary p-2 rounded-full border border-w-100 flex justify-center items-center">
                            <TwitterLogo size={26} />
                        </Link>
                    </div>
                    <Spacer size={8} />
                    <section className="flex flex-col justify-center items-center gap-2 px-5">
                        <article className='flex gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5'>
                            <span className='flex justify-center items-center p-5 border border-w-100 rounded-2xl bg-w-500 transition duration-200 active:scale-95 hover:scale-95' >
                                <Envelope size={24} className="text-icon" />
                            </span>
                            <div className="flex flex-col justify-between items-start">
                                <h6 className='text-h6 text-h-color text-center font-black'>Email</h6>
                                <p className='text-p-color text-lg'>contact.email@dressly.com
                                </p>
                            </div>
                        </article>
                        <Spacer size={8} />
                        <article className=' flex flex-col gap-2 justify-center items-center bg-white rounded-2xl border border-w-100 p-5 '>
                            <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500 transition duration-200 active:scale-95 hover:scale-95' >
                                <Phone size={24} className="text-icon" />
                            </span>
                            <h5 className='text-h5 text-h-color text-center font-black'>Phone numbers</h5>
                            <p className='text-p-color text-lg flex flex-col justify-center items-center gap-2'>
                                <span>08101890368</span>
                                <span>08023768295</span>
                            </p>
                        </article>
                        <Spacer size={8} />
                        <article className='flex flex-col gap-4 justify-center items-center bg-white rounded-2xl border border-w-100 p-5 '>
                            <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500 transition duration-200 active:scale-95 hover:scale-95' >
                                <MapPin size={24} className="text-icon" />
                            </span>
                            <h5 className='text-h5 text-h-color text-center font-black'>Address</h5>
                            <p className='text-p-color text-lg'>NO 10 Birabi street, Port harcourt</p>
                        </article>
                        <Spacer size={8} />
                        <article className='flex flex-col gap-4 justify-center items-center bg-white rounded-2xl border border-w-100 p-5 '>
                            <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500 transition duration-200 active:scale-95 hover:scale-95' >
                                <Clock size={24} className="text-icon" />
                            </span>
                            <h5 className='text-h5 text-h-color text-center font-black'>Opens</h5>
                            <p className='text-p-color text-lg flex flex-col gap-1 justify-center items-center'>
                                <span>Monday<br />8AM - 5PM</span>
                                <span>&minus;s</span>
                                <span>Saturday<br />8AM - 5PM</span>
                            </p>
                        </article>
                    </section>
                </section>
                <Spacer size={12} />
                <section className="flex flex-col gap-2">
                    <h6 className="text-h-color text-h6 font-bold">Need our services?</h6>
                    <Link href={'/services'} className="text-accent underline">Book Appointment Now</Link>
                    <Link href={'/shop'} className="text-accent underline">Shop Now</Link>
                </section>
                <Spacer size={8} />

                {/* Footer */}
                <Footer />
            </main>
        </>
    )
}