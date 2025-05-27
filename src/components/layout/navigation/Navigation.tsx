"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
    const pathname = usePathname();

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];

    return(
        <div className="flex items-center justify-between mb-12">
            <Link className="flex items-center gap-2 text-[#A1A1AA] hover:text-white transition duration-300" href={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"></path></svg>
                Back
            </Link>   
            <nav className="flex gap-5 text-[#A1A1AA] font-mono">
                {links.map(({ label, href}) => {
                    const isActive = pathname === href;

                        return (
                            <Link key={href} href={href} className={`transition duration-300 ${
                                isActive ? "text-white" : "text-[#A1A1AA] hover:text-white"}`}>
                                {label}
                            </Link>
                        )
                    }
                )}
            </nav>
        </div>
    )
}