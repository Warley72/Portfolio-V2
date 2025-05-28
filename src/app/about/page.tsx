"use client"
import { useState } from "react";
import Navigation from "@/components/layout/navigation/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function About () {
    const [showPrevious, setShowPrevious] = useState(false);
    
    return(
        <div className="bg-zinc-950 text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <Navigation />
                <h1 className="font-mono text-4xl font-bold mb-4">About</h1>
                <p className="text-lg text-[#A1A1AA] font-semibold mb-8">Meet Warley, a skilled Front-end Developer.</p>
                <Card className="p-6 bg-zinc-950 border border-white/20">
                    <h1 className="text-[#A1A1AA] text-base uppercase">Introduction</h1>
                    <h1 className="font-mono text-3xl  text-white">Front-end developer passionate about technology and coffee.</h1>
                    <p className="font-mono text-lg text-white">
                        I worked as a programming instructor at SuperGeeks and currently work as a freelancer, 
                        developing interfaces using React, Next.js, TypeScript, SASS, Tailwind, 
                        and Lua for both web systems and games like FiveM. In addition, I maintain a personal 
                        project called ProjetoX, which I use as a study and experimentation environment to apply 
                        the knowledge I've gained in both frontend and backend development, using technologies such as 
                        Node.js, Express, PostgreSQL, Prisma, and JWT-based authentication. I am currently seeking to further 
                        develop my skills and grow professionally in the market.
                    </p>
                    <div className="w-full h-px bg-zinc-800 opacity-50"/>
                    <h1 className="text-[#A1A1AA] text-base uppercase">Technologies</h1>
                    <div className="flex items-center justify-center gap-x-2">
                        <span className="text-white">HTML</span>
                        <span className="text-white">CSS</span>
                        <span className="text-white">TYPESCRIPT</span>
                        <span className="text-white">REACT</span>
                    </div>
                </Card>

                <Card className="p-6 bg-zinc-950 border border-white/20 mt-8">
                    <h1 className="font-mono text-white font-bold text-lg">Career</h1>
                    <div>
                        <div>
                            <div className="flex items-center gap-x-2 mb-2">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                                <span className="font-mono text-xl text-white font-semibold">Front-end Developer Freelancer</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-base text-[#A1A1AA]">November 2024 – Actual</span>
                                <span className="font-mono text-base text-[#A1A1AA]">Actio Software</span>
                            </div>
                        </div>
                        <div className="w-full h-px bg-zinc-800 opacity-50 my-4"/>
                    </div>

                    <div>
                        <Button onClick={() => setShowPrevious(!showPrevious)} className="bg-transparent text-[#A1A1AA] cursor-pointer hover:bg-[#222224] hover:text-white transition duration-300">
                            {showPrevious ? "Hide previous roles" : "Show previous roles"}
                            <svg className={`ml-2 transition-transform duration-300 ${showPrevious ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"></path></svg>  
                        </Button>
                        {showPrevious && (
                            <div className="mt-4 space-y-6">
                                <div>
                                <h2 className="font-mono text-white font-semibold">
                                    Developer Instructor
                                </h2>
                                <p className="text-[#A1A1AA]">SuperGeeks • Presecial, DF</p>
                                <p className="text-[#A1A1AA]">Jul. 2022  – Dez. 2023</p>
                                </div>
                                <div>
                                    <h2 className="font-mono text-white font-semibold">Technical Support</h2>
                                    <p className="text-[#A1A1AA]">UNINK • Presecial, DF</p>
                                    <p className="text-[#A1A1AA]">Mai 2021 – Jul 2022</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    )
}