
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Dressly',
    description: 'Fashion Storehouse',
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}