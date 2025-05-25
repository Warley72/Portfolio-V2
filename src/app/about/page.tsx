import { Card } from "@/components/ui/card";

export default function About () {
    return(
        <div className="bg-zinc-950 text-white p-[3rem]">
            <h1 className="font-mono text-5xl font-bold mb-4">About</h1>
            <p className="text-2xl text-gray-500 font-semibold mb-8">Meet Warley, a skilled Front-end Developer.</p>
            <Card className="p-6 bg-zinc-950 border border-white/20">
                <h1 className="text-gray-500 text-3xl">Introduction</h1>
                <h1 className="font-mono text-4xl  text-white">Front-end developer passionate about technology and coffee.</h1>
                <p className="font-mono text-2xl  text-white">
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
        </div>
    )
}