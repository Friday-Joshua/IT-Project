import Spacer from "@/app/components/spacer";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import dynamic from "next/dynamic";
import Link from "next/link";

const ProductCard = dynamic(()=> import('@/app/components/productCard'));

export default async function PopularCollections() {
    const store = (await import('@/app/store')).default;
    const items = new store().getItems();

    return (
        <>
        <section>
            <header className="flex justify-between items-center">
                <h5 className="text-h-color text-h5 font-black">Popular Collections</h5>
                <Spacer size={12} />
                <div className="flex justify-between items-center gap-1 rounded-full ring-1 ring-gray-200 px-2 py-1">
                <Link href={'/shop/popular'} className='text-sm text-b-500'>More</Link>
                <CaretRight size={12} className="text-icon" />
                </div>
            </header>
            <div className="grid grid-cols-2 gap-3">
                {items.map(item=> <ProductCard key={item.pid} product={item} />)}
            </div>
        </section>
        </>
    )
}