import Image from "next/image";
import Logo from '../logo.png';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-transparent h-7 fixed top-0 w-screen">
            <Image src={Logo} width={24} height={24} alt="Dressly logo"/>
        </nav>
    );
}