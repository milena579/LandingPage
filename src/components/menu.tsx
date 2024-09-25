import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/titulo.webp";

export function Menu() {
    return (
        <>
            <nav className="flex w-full p-5 items-center justify-center bg-rose-700 font-ubuntu text-large text-branco">
                <Image alt="" src={Logo} className="w-36"></Image>
            </nav>
        </>
    );
}