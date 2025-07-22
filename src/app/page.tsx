import Link from "next/link";
import { getTemperature } from "@/lib/weather"
import { Card } from "@/components/ui/card";
import { home } from "@/mocks/Home"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ButtonDarkMode } from "@/components/layout/ButtonDarkMode";

import GitHubIcon from "@/components/ui/gitHubIcon";
import LinkedinIcon from "@/components/ui/linkedinIcon";
import InstagramIcon from "@/components/ui/instagramIcon";

export default async function Home() {
    const temperature = await getTemperature();

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen ">
            <div className="flex items-center justify-between w-full max-w-md mb-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex items-center justify-center gap-1 cursor-pointer">
                            <svg className="stroke-black dark:stroke-white size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l18 0"></path><path d="M5 21v-14l8 -4v18"></path><path d="M19 21v-10l-6 -4"></path><path d="M9 9l0 .01"></path><path d="M9 12l0 .01"></path><path d="M9 15l0 .01"></path><path d="M9 18l0 .01"></path></svg>
                            <span className="text-lg">{home.local}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-white">{temperature}°C</p>
                    </TooltipContent>
                </Tooltip>
                <ButtonDarkMode />
            </div>
            <Card className="p-6 border stroke-black dark:stroke-white">
                <h1 className="font-mono text-3xl font-bold ">{home.name}</h1>
                <p className="text-[#A1A1AA] font-mono text-2xl">{home.language}</p>
                <Card className="text-[#A1A1AA] flex border-transparent">
                    <h1 className="text-[#A1A1AA] text-2xl font-semibold uppercase">{home.TitleMenu}</h1>
                    <nav className="flex flex-col">
                        {[
                            { label: "About", href: "/about" },
                            { label: "Projects", href: "/projects" },
                            { label: "Contact", href: "/contact" },
                        ].map(({ label, href }) => (
                            <Link className="flex items-center justify-between p-2 rounded-sm transition duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:translate-x-1" key={label} href={href}>
                                <span className="font-mono text-2xl">{label}</span>
                                <svg className="tabler-icon tabler-icon-chevron-right h-[1.25rem] w-[1.25rem] transition-transform stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6l-6 6"></path></svg>
                            </Link>
                        ))}
                    </nav>
                </Card>
                <div className="flex items-center justify-center gap-4 py-4">
                    <GitHubIcon />
                    <LinkedinIcon />
                    <InstagramIcon />
                </div>
            </Card>
        </div>
    );
}
