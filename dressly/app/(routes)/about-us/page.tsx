import dynamic from "next/dynamic";

const Footer = dynamic(()=> import('@/app/components/footer'));
const Spacer = dynamic(()=> import('@/app/components/spacer'));
const Ruler = dynamic(()=> import('@phosphor-icons/react/dist/ssr').then(mod=>mod.Ruler));
const Notepad = dynamic(()=> import('@phosphor-icons/react/dist/ssr').then(mod=>mod.Notepad));
const ShoppingCart = dynamic(()=> import('@phosphor-icons/react/dist/ssr').then(mod=>mod.ShoppingCart));
const Link = dynamic(()=> import('next/link'));

export default function Page() {
    return (
        <>
            <Spacer size={8} />
            <main className="mx-5">
                <Spacer size={4} />
                <header className=" my-w-full my-2 h-screen hideScrollbar">
                    <h1 className="text-h-color font-black text-h1 flex flex-col justify-start items-start gap-2">About Us
                        <em className="text-sm text-accent" >Dressly</em>
                    </h1>
                    <Spacer size={4} />
                    <p className="text-p-color font-medium text-2xl">
                        At Dressly, our story is woven from threads of passion, innovation, and the desire to redefine fashion. It all began with a vision to create a brand that doesn&apos;t just sell clothes but crafts experiences, embraces individuality, and empowers confidence in every stitch.
                    </p>
                </header>

                {/* Our Goal */}
                <section className="w-full hideScrollbar">
                    <h3 className="font-black text-h-color text-h3">Our Goal</h3>
                    <Spacer size={8} />

                    <article className='flex flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5 '>
                        <span className='flex justify-center w-16 h-16 items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500 font-bold text-h-color text-h4' >1</span>
                        <h5 className='text-h5 text-h-color text-center font-black'>Elevate Personal Style</h5>
                        <p className='text-p-color text-lg'>Help clients discover and elevate their personal style through professional styling services.
                        </p>
                    </article>
                    <Spacer size={8} />
                    <article className='flex flex-col gap-4 justify-center items-center bg-white rounded-2xl border border-w-100 p-5 '>
                        <span className='flex justify-center w-16 h-16 items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500 font-bold text-h-color text-h4' >2</span>
                        <h5 className='text-h5 text-h-color text-center font-black'>Unique and Tailored Designs</h5>
                        <p className='text-p-color text-lg'>Create one-of-a-kind, tailored fashion designs that reflect each client&apos;s individuality.
                        </p>
                    </article>
                    <Spacer size={8} />
                    <article className='flex flex-col gap-4 justify-center items-center bg-white rounded-2xl border border-w-100 p-5 '>
                        <span className='flex justify-center w-16 h-16 items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500 font-bold text-h4 text-h-color' >3</span>
                        <h5 className='text-h5 text-h-color text-center font-black'>Exceptional Client Experience</h5>
                        <p className='text-p-color text-lg'>Provide exceptional customer service and a memorable client experience, both in styling and fashion design.
                        </p>
                    </article>
                </section>
                <Spacer size={16} />

                {/*  */}
                <section className='w-full hideScrollbar'>
                    <header className=''>
                        <h4 className='text-h4 text-h-color font-black'>Our Services</h4>
                    </header>
                    <Spacer size={8} />
                    <article className='flex flex-col gap-4 justify-between items-center bg-white rounded-2xl border border-w-100 p-5 '>
                        <span className='flex justify-center items-center -mt-[52px] p-5 border border-w-100 rounded-full bg-w-500' ><Ruler size={24} /></span>
                        <h5 className='text-h5 text-h-color font-black'>Tailoring</h5>
                        <p className='text-p-color text-lg'>Unleash your creativity and design your own clothing pieces with our bespoke service. From selecting fabrics to adding personalized details, our designers will bring your vision to life.
                        </p>
                        <Link href='/' className='flex justify-center items-center text-a-50 bg-accent p-5 h-12 w-full rounded-full transition-transform active:scale-95 active:opacity-50'>Book Now</Link>
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
                <Spacer size={16} />

                {/* Footer Section */}
                <section className="w-full hideScrollbar">
                    <Footer />
                </section>
            </main>
        </>
    )
}