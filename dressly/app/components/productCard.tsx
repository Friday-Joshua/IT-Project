import { CurrencyNgn, Heart, Plus, ShoppingCart } from "@phosphor-icons/react/dist/ssr"
import { type Product } from "../store"
import Image from "next/image"
import Link from "next/link"
import Rating from "./rating";
import WhishIcon from "./whishlist";

function formatPrice(price: number) {
    return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'NGN' }).format(price).substring(4);
}
export default function ProductCard({ product: { pid, src, label, price, isFavourite } }: { product: Omit<Product, 'desc' | 'rate' | 'inStore'> }) {
    return (
        <article className="flex flex-col justify-between auto-cols-auto  pb-1 overflow-hidden my-1 rounded-2xl bg-secondary ring-1 ring-gray-200 relative select-none">
            <div className="relative  w-full h-52 bg-w-800 overflow-hidden">
                <Link href={`/shop/${pid}`}>
                    <Image src={src} fill alt='product image' className="transiton duration-200 hover:scale-150 object-contain py-4" />
                </Link>
            </div>
            <WhishIcon />
            <footer className="p-3 h-[40%] flex flex-col justify-between items-start">
                <h6 className="text-h-color text-sm font-black">{label}</h6>
                <div className="flex justify-between items-end gap-1">
                    <div className="w-full flex flex-col justify-between items-start gap-2">
                        <span className="flex justify-between items-center text-sm gap-1">
                            <CurrencyNgn size={20} className="text-icon" />{formatPrice(price)}
                        </span>
                        <Rating size={12} />
                    </div>
                    <button className="rounded-lg bg-accent w-10 h-10 p-2 flex justify-center items-center transition duration-200 active:scale-95 active:opacity-50">
                        <Plus size={20} className="text-a-50" />
                    </button>
                </div>
            </footer>
        </article>
    )
}