'use client'

export default function Loader({children}:{children:React.ReactNode}) {
    return (
        <p className="flex justify-center items-center w-screen h-screen animate-pulse">
            Loading...
            {children}
        </p>
    )
}