import { Envelope, FacebookLogo, InstagramLogo, MapPin, Phone, TwitterLogo, WhatsappLogo, X} from "@phosphor-icons/react/dist/ssr";
import NewsLetter from "./newsletter";
import Spacer from "./spacer";
import Email from "./email";
import Link from 'next/link'

export default function Footer() {
    return (
        <section className="-mx-5 p-5 bg-a-400 rounded-t-3xl">
            <Email />
            <Spacer size={4} />
            <span className="mb-3 block text-a-900">Follow us on:</span>
            <div className="flex justify-start items-center gap-3">
                <Link href='/' className="rounded-2xl p-2 trans-w-100 transition duration-200 active:scale-95 active:opacity-50">
                    <FacebookLogo size={28} weight='fill' className='text-a-50' />
                </Link>
                <Link href='/' className="rounded-2xl p-2 trans-w-100 transition duration-200 active:scale-95 active:opacity-50">
                    <WhatsappLogo size={28} weight='fill' className='text-a-50' />
                </Link>
                <Link href='/' className="rounded-2xl p-2 trans-w-100 transition duration-200 active:scale-95 active:opacity-50">
                    <InstagramLogo size={28} weight='fill' className='text-a-50' />
                </Link>
                <Link href='/' className="rounded-2xl p-2 trans-w-100 transition duration-200 active:scale-95 active:opacity-50">
                    <TwitterLogo size={28} weight='fill' className='text-a-50' />
                </Link>
            </div>

            
            <Spacer size={4} />
            <section className='flex flex-col items-start gap-4'> 
                <h6 className='font-medium text-a-900'>Contact Information</h6>
                <div className='flex justify-start items-center gap-3'>
                    <MapPin size={24} className='text-a-800'/>
                    <p className='text-a-900'>No. 25 Birabi street, PH,Nigeria</p>
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <Envelope size={24} className='text-a-800'/>
                    <p className='text-a-900'>Ncontact@dressly.com</p>
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <Phone size={24} className='text-a-800'/>
                    <p className='text-a-900'>+234086247901</p>
                </div>
            </section>
            <Spacer size={4} />
            <section className='flex justify-start items-start gap-24'> 
                <section className='flex flex-col justify-start items-start gap-4'>
                    <h6 className='font-medium text-a-900'>Quick links</h6>
                    <Link href='/signin' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Sign In</Link>
                    <Link href='/shop' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Shop</Link>
                    <Link href='/settings' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Settings</Link>
                    <Link href='/' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Sitemap</Link>
                </section>
                <section className='flex flex-col justify-start items-start gap-4'>
                    <h6 className='font-medium text-a-900'>Legals</h6>
                    <Link href='/' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Privacy Policy</Link>
                    <Link href='/' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Cookie Policy</Link>
                    <Link href='/' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Terms of Service</Link>
                    <Link href='/' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Refund Policy</Link>
                </section>
            </section>
            <Spacer size={4} />
            <section className='flex flex-col justify-start items-start gap-4'>
                <h6 className='font-medium text-a-900'>Info</h6>
                <Link href='/' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Home</Link>
                <Link href='/about' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>About Us</Link>
                <Link href='/contact' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Contact Us</Link>
                <Link href='/blog' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>Blog</Link>
                <Link href='/' className='text-a-800 transition duration-200 active:text-a-900 active:underline hover:text-a-900 hover:underline'>FAQs</Link>
            </section>
            <Spacer size={2} />
            <hr className='border-a-500 -mx-5'/>
            <Spacer size={2} />
            <small className='text-a-800 text-center block'>&copy; {new Date(Date.now()).getFullYear()} Dressly. All rights reserved.</small>
        </section>
    )
}