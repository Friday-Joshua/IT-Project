import FixedCartButton from "@/app/components/fixedCartButton";
import { SearchBar } from "@/app/components/inputs";
import Navbar from "@/app/components/navbar";
import Spacer from "@/app/components/spacer";
import { Link, ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import dress1 from '@/public/image1.png'
import dress2 from '@/public/image2.png'
import dress3 from '@/public/image3.png'
import dress4 from '@/public/image4.png'
import dress5 from '@/public/image5.png'
import dress6 from '@/public/image6.png'
import dress7 from '@/public/image7.png'
import dress8 from '@/public/image8.png'
import Image from "next/image";
import dynamic from "next/dynamic";
const FreshKnits = dynamic(() => import('./freshKnits'));
const PopularCollections = dynamic(() => import('./popularCollections'));

export default function Page() {
    return (
        <>
            <Spacer size={8} />
            <main id='page-wrapper' className="mx-5">
                <header>
                    <div className="flex justify-between items-center">
                        <h1 className="text-h-color text-h1 font-black">Shop</h1>
                        <FixedCartButton pageOffset={40} />
                    </div>
                    <Spacer size={2} />
                    <SearchBar />
                </header>
                <Spacer size={4} />

                {/* Fresh knits */}
                <section>
                    <h5 className="text-h5 font-bold text-h-color">Fresh Knits</h5>
                    <Spacer size={2} />
                    <FreshKnits />
                </section>
                <Spacer size={4} />

                {/* Popular collections */}

                <PopularCollections />

            </main>
        </>
    )
}