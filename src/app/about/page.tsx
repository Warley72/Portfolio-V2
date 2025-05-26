import { Card } from "@/components/ui/card";

export default function About () {
    return(
        <div className="bg-zinc-950 text-white p-[3rem]">
            <h1 className="font-mono text-5xl font-bold mb-4">About</h1>
            <p className="text-2xl text-gray-500 font-semibold mb-8">Meet Warley, a skilled Front-end Developer.</p>
            <Card className="p-6 bg-zinc-950 border border-white/20">
                <h1 className="text-gray-500 text-3xl">Introduction</h1>
                <h1 className="font-mono text-4xl  text-white">Front-end developer passionate about technology and coffee.</h1>
                <p className="font-mono text-2xl text-white">
                    I worked as a programming instructor at SuperGeeks and currently work as a freelancer, 
                    developing interfaces with React, Next.js, TypeScript, SASS and Lua, both for systems 
                    and windows at FiveM and I am looking to develop my skills eventually within the market.
                </p>
                <div className="w-full h-px bg-zinc-800 opacity-50"/>
                <h1 className="text-gray-500 text-3xl">Technologies</h1>
                <div className="flex items-center justify-center gap-x-2">
                    <span className="text-white">HTML</span>
                    <span className="text-white">CSS</span>
                    <span className="text-white">TYPESCRIPT</span>
                    <span className="text-white">REACT</span>
                </div>
            </Card>

            <Card className="p-6 bg-zinc-950 border border-white/20 mt-8">
                <h1 className="font-mono text-2xl text-white">Career</h1>
                <div>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                            <span className="font-mono text-2xl text-white">Front-end Developer</span>
                        </div>
                        <span className="font-mono text-2xl text-white">Actio Software • Remote</span>
                        <span className="font-mono text-2xl text-white">November 2023 – February 2025</span>
                    </div>
                    <div className="w-full h-px bg-zinc-800 opacity-50 my-4"/>
                </div>
            </Card>
        </div>
    )
}