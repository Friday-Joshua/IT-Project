import Image from "next/image"
import Link from "next/link"
import dress1 from '@/public/image8.png'
import dress2 from '@/public/image2.png'
import dress3 from '@/public/image3.png'
import dress4 from '@/public/image4.png'
import dress5 from '@/public/image5.png'
import dress6 from '@/public/image6.png'
import dress7 from '@/public/image7.png'
import styles from '@/app/styles/index.module.css'

export default function FreshKits() {
    return (
        <section className={`${styles.noScrollBar} -mx-5 overflow-x-auto whitespace-pre snap-x snap-mandatory scroll-p-5 p-3`}>
            <Link href={'/shop/88sh63d'} className="">
                <Image src={dress1} width={250} height={400} alt="dress" className="mx-4 object-contain p-3 inline-block snap-center snap-always w-2/4 h-60 rounded-2xl transition duration-200 hover:bg-secondary hover:ring-1 hover:ring-gray-200 active:bg-secondary active:scale-95 "/>
            </Link>
            <Link href={'/shop/88sh63d'} className=" ">
                <Image src={dress2} width={250} height={400} alt="dress" className="mx-4 object-contain p-3  inline-block snap-center snap-always w-2/4 h-60 rounded-2xl transition duration-200 hover:bg-secondary hover:ring-1 hover:ring-gray-200 active:bg-secondary active:scale-95" />
            </Link>
            <Link href={'/shop/88sh63d'} className="">
                <Image src={dress3} width={250} height={400} alt="dress" className="mx-4 object-contain p-3 inline-block snap-center snap-always w-2/4 h-60 rounded-2xl transition duration-200 hover:bg-secondary hover:ring-1 hover:ring-gray-200 active:bg-secondary active:scale-95 "/>
            </Link>
            <Link href={'/shop/88sh63d'} className="">
                <Image src={dress4} width={250} height={400} alt="dress" className="mx-4 object-contain p-3 inline-block snap-center snap-always w-2/4 h-60 rounded-2xl transition duration-200 hover:bg-secondary hover:ring-1 hover:ring-gray-200 active:bg-secondary active:scale-95 "/>
            </Link>
            <Link href={'/shop/88sh63d'} className="">
                <Image src={dress5} width={250} height={400} alt="dress" className="mx-4 object-contain p-3 inline-block snap-center snap-always w-2/4 h-60 rounded-2xl transition duration-200 hover:bg-secondary hover:ring-1 hover:ring-gray-200 active:bg-secondary active:scale-95 "/>
            </Link>
            <Link href={'/shop/88sh63d'} className="">
                <Image src={dress6} width={250} height={400} alt="dress" className="mx-4 object-contain p-3 inline-block snap-center snap-always w-2/4 h-60 rounded-2xl transition duration-200 hover:bg-secondary hover:ring-1 hover:ring-gray-200 active:bg-secondary active:scale-95 "/>
            </Link>
            <Link href={'/shop/88sh63d'} className="">
                <Image src={dress7} width={250} height={400} alt="dress" className="mx-4 object-contain p-3 inline-block snap-center snap-always w-2/4 h-60 rounded-2xl transition duration-200 hover:bg-secondary hover:ring-1 hover:ring-gray-200 active:bg-secondary active:scale-95 "/>
            </Link>
        </section>
    )
}