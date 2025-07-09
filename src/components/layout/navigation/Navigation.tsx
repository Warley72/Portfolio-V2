"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Navigation() {
    const pathname = usePathname();

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <div className="flex items-center justify-between mb-12">
            <Link
                href="/"
                className="flex items-center gap-2 text-[#A1A1AA] hover:text-white transition duration-300 text-lg"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
                Back
            </Link>

            <nav className="hidden lg:flex gap-5 text-[#A1A1AA] ">
                {links.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`text-lg transition duration-300 ${isActive ? "text-white" : "hover:text-white"
                                }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </nav>

            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon className="w-6 h-6 text-white cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-zinc-950 border-none text-white w-[250px]">
                        <div className="p-4 space-y-4">
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 font-mono">
                                {links.map(({ label, href }) => {
                                    const isActive = pathname === href;
                                    return (
                                        <Link
                                            key={href}
                                            href={href}
                                            className={`text-lg transition duration-300 ${isActive ? "text-white" : "text-[#A1A1AA] hover:text-white"
                                                }`}
                                        >
                                            {label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
