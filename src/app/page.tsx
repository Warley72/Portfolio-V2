import Link from "next/link";
import { getTemperature } from "@/lib/weather"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { home } from "@/mocks/Home"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ButtonDarkMode } from "@/components/layout/ButtonDarkMode";

export default async function Home() {
    const temperature = await getTemperature();

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-zinc-950">
            <div className="flex items-center justify-between w-full max-w-md mb-4">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="bg-transparent hover:bg-transparent opacity-50 hover:opacity-100 transition duration-300 ease-in cursor-pointer">
                            <svg className=" size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l18 0"></path><path d="M5 21v-14l8 -4v18"></path><path d="M19 21v-10l-6 -4"></path><path d="M9 9l0 .01"></path><path d="M9 12l0 .01"></path><path d="M9 15l0 .01"></path><path d="M9 18l0 .01"></path></svg>
                            <span className="text-white text-lg">{home.local}</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-white">{temperature}°C</p>
                    </TooltipContent>
                </Tooltip>
                <ButtonDarkMode />
            </div>
            <Card className="p-6 bg-zinc-950 border border-white/20">
                <h1 className="font-mono text-3xl font-bold text-white">{home.name}</h1>
                <p className="font-mono text-2xl text-[#A1A1AA]">{home.language}</p>
                <Card className="flex bg-zinc-950 border-transparent">
                    <h1 className="text-[#A1A1AA] text-2xl font-semibold uppercase">{home.TitleMenu}</h1>
                    <nav className="flex flex-col">
                        {[
                            { label: "About", href: "/about" },
                            { label: "Projects", href: "/projects" },
                            { label: "Contact", href: "/contact" },
                        ].map(({ label, href }) => (
                            <Link className="flex items-center justify-between p-2 text-[#A1A1AA] rounded-sm hover:bg-zinc-800 hover:translate-x-1 transition duration-300" key={label} href={href}>
                                <span className="font-mono text-2xl">{label}</span>
                                <svg className="tabler-icon tabler-icon-chevron-right h-[1.25rem] w-[1.25rem] transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6l-6 6"></path></svg>
                            </Link>
                        ))}
                    </nav>
                </Card>

                <footer>
                    <div className="w-full h-px bg-zinc-800 opacity-50" />
                    <div className="flex items-center justify-center gap-4 py-4">
                        <a href="https://github.com/Warley72" target="_blank" rel="noopener noreferrer">
                            <img className="h-12 w-12 text-white p-2 rounded-md cursor-pointer hover:bg-zinc-800 transition duration-300" src="/socialIcons/github.svg" alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/carlos-warley-106058229/" target="_blank" rel="noopener noreferrer">
                            <img className="h-12 w-12 text-white p-2 rounded-md cursor-pointer hover:bg-zinc-800 transition duration-300" src="/socialIcons/linkedin.svg" alt="linkedin" />
                        </a>
                        <a href="https://www.instagram.com/warley02/" target="_blank" rel="noopener noreferrer">
                            <img className="h-12 w-12 text-white p-2 rounded-md cursor-pointer hover:bg-zinc-800 transition duration-300" src="/socialIcons/instagram.svg" alt="discord" />
                        </a>
                    </div>
                </footer>
            </Card>
        </div>
    );
}
