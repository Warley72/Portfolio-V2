"use client"

import { useState } from "react";
import { Stack } from "@/mocks/Stack";
import { about } from "@/mocks/About";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Navigation from "@/components/layout/Navigation";
import { PageTransition } from "@/components/layout/PageTransition";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function About() {
    const [showPrevious, setShowPrevious] = useState(false);

    return (
        <PageTransition >
            <div className=" p-6 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <Navigation />
                    <h1 className="text-4xl font-bold mb-4">{about.about}</h1>
                    <p className="text-[#A1A1AA] text-lg font-semibold mb-8">{about.subtext}</p>

                    <Card className="p-6 border stroke-black dark:stroke-white">
                        <h1 className="text-base uppercase">{about.textIntroduction}</h1>
                        <h1 className="text-3xl">{about.titleAbout}</h1>
                        <p className="text-lg">{about.textAbout}</p>
                        <div className="w-full h-px bg-zinc-800 opacity-50" />
                        <h1 className="flex items-center justify-center text-base uppercase">{about.curriculum}</h1>
                        <div className="flex flex-wrap items-center justify-center">
                            <div className="flex items-center justify-center w-14 h-14 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 opacity-50 hover:opacity-100 cursor-pointer transition duration-200 ease-in hover:scale-105">
                                <a
                                    href="/document/curriculoWarley.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-14 h-14 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 opacity-50 hover:opacity-100 cursor-pointer transition duration-200 ease-in hover:scale-104"
                                >
                                    <FaEnvelopeOpenText className="stroke-black dark:stroke-white w-10 h-10" />
                                </a>
                            </div>
                        </div>
                        <h1 className="flex items-center justify-center text-[#A1A1AA] text-base uppercase">{about.textTechnologies}</h1>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {Stack.map((stack, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <img
                                            src={`/iconsTec/${stack.icon}.svg`}
                                            alt={stack.stack}
                                            className="mt-2 w-14 h-14 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="text-white text-sm">{stack.stack}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-6 border stroke-black dark:stroke-white mt-8">
                        <h1 className="font-bold text-2xl">{about.textCareer}</h1>
                        <div>
                            <div>
                                <div className="flex items-center gap-x-2 mb-2">
                                    <svg className="stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                                    <span className="text-xl font-semibold">{about.titleCarerr}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-lg text-[#A1A1AA]">{about.dateCarerr}</span>
                                    <span className="text-lg text-[#A1A1AA]">{about.currentCarrer}</span>
                                </div>
                            </div>
                            <div className="w-full h-px bg-zinc-800 opacity-50 my-4" />
                        </div>

                        <div>
                            <Button onClick={() => setShowPrevious(!showPrevious)} className="bg-transparent text-[#A1A1AA] cursor-pointer hover:bg-zinc-200 dark:hover:bg-[#222224] hover:text-black dark:hover:text-white transition duration-300">
                                {showPrevious ? "Hide previous roles" : "Show previous roles"}
                                <svg className={`ml-2 transition-transform duration-300 ${showPrevious ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"></path></svg>
                            </Button>
                            {showPrevious && (
                                <div className="mt-4 space-y-6">
                                    {about.previousCareer.map((carrer, index) => (
                                        <div key={index}>
                                            <h2 className="font-semibold text-lg">{carrer.title}</h2>
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
