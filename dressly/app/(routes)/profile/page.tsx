import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('@/app/components/navbar'));
const Spacer = dynamic(() => import('@/app/components/spacer'));
const User = dynamic(() => import('@phosphor-icons/react/dist/ssr').then(mod => mod.User));

export default function Page() {
    return (
        <>
            <main className="w-screen h-screen flex flex-col justify-center items-center">
                <div className="flex justify-center items-center gap-4">
                    <i className="flex justify-center items-center bg-a-50 p-4 rounded-2xl">
                        <User size={20} className="text-accent" />
                    </i>
                    <em className="text-accent">Profile</em>
                </div>
                <Spacer size={2} />
                <h1 className="animate-pulse text-h-color text-h1 font-black">Coming Soon</h1>
            </main>
        </>

    )
} 