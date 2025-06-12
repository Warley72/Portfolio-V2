"use client"

import { useState } from "react";
import { about } from "@/data/About"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/navigation/Navigation";
import { PageTransition } from "@/components/layout/pageTransition/PageTransition";

export default function About() {
    const [showPrevious, setShowPrevious] = useState(false);

    return (
        <PageTransition >
            <div className="bg-zinc-950 text-white p-6 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <Navigation />
                    <h1 className="text-4xl font-bold mb-4">{about.about}</h1>
                    <p className="text-lg text-[#A1A1AA] font-semibold mb-8">{about.subtext}</p>
                    <Card className="p-6 bg-zinc-950 border border-white/20">
                        <h1 className="text-[#A1A1AA] text-base uppercase">{about.textIntroduction}</h1>
                        <h1 className="text-3xl  text-white">{about.titleAbout}</h1>
                        <p className="text-lg text-white">{about.textAbout}</p>
                        <div className="w-full h-px bg-zinc-800 opacity-50" />
                        <h1 className="text-[#A1A1AA] text-base uppercase">{about.textTechnologies}</h1>
                        <div className="flex items-center justify-center gap-x-2">
                            <span className="text-white">HTML</span>
                            <span className="text-white">CSS</span>
                            <span className="text-white">TYPESCRIPT</span>
                            <span className="text-white">REACT</span>
                        </div>
                    </Card>

                    <Card className="p-6 bg-zinc-950 border border-white/20 mt-8">
                        <h1 className=" text-white font-bold text-2xl">{about.textCareer}</h1>
                        <div>
                            <div>
                                <div className="flex items-center gap-x-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                                    <span className="text-xl text-white font-semibold">{about.titleCarerr}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-lg text-[#A1A1AA]">{about.dateCarerr}</span>
                                    <span className="text-lg text-[#A1A1AA]">{about.currentCarrer}</span>
                                </div>
                            </div>
                            <div className="w-full h-px bg-zinc-800 opacity-50 my-4" />
                        </div>

                        <div>
                            <Button onClick={() => setShowPrevious(!showPrevious)} className="bg-transparent text-[#A1A1AA] cursor-pointer hover:bg-[#222224] hover:text-white transition duration-300">
                                {showPrevious ? "Hide previous roles" : "Show previous roles"}
                                <svg className={`ml-2 transition-transform duration-300 ${showPrevious ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"></path></svg>
                            </Button>
                            {showPrevious && (
                                <div className="mt-4 space-y-6">
                                    {about.previousCareer.map((carrer, index) => (
                                        <div key={index}>
                                            <h2 className="text-white font-semibold text-lg">{carrer.title}</h2>
                                            <p className="text-[#A1A1AA] text-lg">{carrer.company}</p>
                                            <p className="text-[#A1A1AA] text-lg">{carrer.date}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </PageTransition>
    )
}