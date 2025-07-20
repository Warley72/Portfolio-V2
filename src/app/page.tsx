import Link from "next/link";
import { getTemperature } from "@/lib/weather"
import { Card } from "@/components/ui/card";
import { home } from "@/mocks/Home"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ButtonDarkMode } from "@/components/layout/ButtonDarkMode";

export default async function Home() {
    const temperature = await getTemperature();

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen ">
            <div className="flex items-center justify-between w-full max-w-md mb-4">
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
                                <svg className="tabler-icon tabler-icon-chevron-right h-[1.25rem] w-[1.25rem] transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6l-6 6"></path></svg>
                            </Link>
                        ))}
                    </nav>
                </Card>

                <footer>
                    <div className="w-full h-px bg-zinc-800 opacity-50" />
                    <div className="flex items-center justify-center gap-4 py-4">
                        <a href="https://github.com/Warley72" target="_blank" rel="noopener noreferrer">
                            <svg className="h-12 w-12 stroke-black dark:stroke-white p-2 rounded-md cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60">
                                <g clipPath="url(#a)">
                                    <mask id="b" width="60" height="60" x="0" y="0" maskUnits="userSpaceOnUse">
                                        <path fill="#fff" d="M60 0H0v60h60V0Z" />
                                    </mask>
                                    <g mask="url(#b)">
                                        <path fill="#fff" d="M17.555 7.07c-1.288.335-1.938 1.34-2.436 3.793-.27 1.319-.314 3.285-.108 4.669.152 1.026.152 1.037-.812 2.734-1.353 2.399-1.872 4.906-1.677 8.18.184 2.972.66 4.972 1.72 7.165 1.667 3.459 4.363 5.728 8.4 7.079.79.26 1.288.486 1.288.562-.011.075-.098.432-.195.789-.098.356-.206 1.124-.25 1.696l-.064 1.049-.703.075c-1.083.108-2.685-.021-3.486-.28-1.537-.509-2.619-1.265-4.654-3.243-.747-.724-1.645-1.534-2.013-1.794-.78-.55-2.176-1.275-2.825-1.437-.844-.227-1.797.151-2.349.94-.433.616-.52 1.61-.195 2.248.282.54.726.962 1.267 1.189.92.378 1.97 1.178 3.344 2.561 3.042 3.07 6.105 4.41 10.164 4.43l1.59.023v.842c0 1.265.39 1.989 1.343 2.475.335.173.573.206 1.104.173.877-.054 1.483-.443 1.872-1.221l.282-.53.021-3.912c.022-4.69.055-4.863 1.17-6.31.93-1.2.93-2.238.02-3.178-.519-.54-.67-.595-2.835-.973-3.28-.583-5.52-1.686-6.97-3.436-1.602-1.935-2.522-5.339-2.36-8.786.076-1.589.412-2.842 1.126-4.16 1.396-2.54 1.504-2.951 1.375-4.81-.098-1.491-.12-3.793-.022-3.89.076-.076 1.472.464 2.5.983.422.216 1.256.713 1.84 1.102 1.32.876 1.613.919 3.29.52 2.414-.574 5.023-.79 7.274-.606 1.461.119 3.29.421 4.275.713.671.195 1.375.195 1.83 0 .194-.075.757-.421 1.266-.756 1.32-.876 3.929-2.118 4.102-1.945.032.032.043.778.032 1.642-.108 4.669-.14 4.485.996 6.495 1.234 2.172 1.58 3.826 1.364 6.538-.27 3.556-1.126 5.76-2.912 7.522-1.59 1.578-3.355 2.345-6.645 2.896-2.133.367-2.49.54-2.944 1.48-.26.508-.293.692-.238 1.2.043.4.162.746.335 1.005.152.216.455.627.66.93.758 1.07.812 1.437.812 5.695 0 4.15.022 4.366.617 5.046 1.017 1.19 2.868.94 3.593-.475l.282-.53v-4.171c0-4.204-.022-4.507-.433-5.847-.043-.13.173-.227.996-.464 5.953-1.719 9.395-5.933 10.271-12.601.26-2.043.173-5.198-.195-6.592-.378-1.405-.898-2.691-1.515-3.718-.693-1.145-.736-1.318-.552-2.604.346-2.41-.227-5.998-1.169-7.284-1.223-1.697-5.044-1.091-9.265 1.47l-.79.475-1.06-.216c-1.981-.4-3.064-.497-5.542-.497-2.457 0-3.431.097-5.466.497l-1.082.216-1.191-.713c-1.375-.81-3.085-1.556-4.33-1.891-.941-.238-2.619-.368-3.138-.227Z" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M0 0h60v60H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/carlos-warley-106058229/" target="_blank" rel="noopener noreferrer">
                            <svg className="h-12 w-12 stroke-black dark:stroke-white p-2 rounded-md cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60">
                                <g clipPath="url(#a)">
                                    <mask id="b" width="60" height="60" x="0" y="0" maskUnits="userSpaceOnUse">
                                        <path fill="#fff" d="M60 0H0v60h60V0Z" />
                                    </mask>
                                    <g mask="url(#b)">
                                        <path fill="#fff" d="M8.59 4.196c-1.106.295-1.899.752-2.762 1.626-.883.873-1.33 1.655-1.625 2.803C4 9.397 4 9.824 4 29.997s0 20.6.203 21.371c.295 1.148.742 1.93 1.625 2.804.874.883 1.656 1.33 2.803 1.625C9.403 56 9.83 56 30 56c20.17 0 20.597 0 21.369-.203 1.147-.295 1.93-.742 2.803-1.625.884-.874 1.33-1.656 1.625-2.804C56 50.596 56 50.17 56 29.997s0-20.6-.203-21.372c-.295-1.148-.741-1.93-1.625-2.803-.874-.884-1.656-1.331-2.803-1.626-.772-.203-1.188-.203-21.41-.193-19.977 0-20.647.01-21.368.193Zm42.362 4.155c.214.132.508.426.66.65.18.272.275.59.275.915v40.193c0 .298-.085.59-.244.843a2.672 2.672 0 0 1-.65.66c-.272.179-.59.274-.915.274H9.922c-.325 0-.643-.095-.915-.274a2.67 2.67 0 0 1-.65-.66 1.582 1.582 0 0 1-.244-.843l-.03-19.9c-.01-14.118.01-20.467.081-20.751.132-.477.782-1.158 1.24-1.29.212-.061 8.053-.091 20.748-.081l19.958.02c.298 0 .59.085.842.244Z" />
                                        <path fill="#fff" d="M15.7 12.678c-.752.213-1.33.569-1.92 1.199-.914.965-1.29 2.204-1.076 3.474.152.873.467 1.513 1.076 2.153.914.965 2.062 1.422 3.321 1.32 1.016-.08 1.747-.406 2.479-1.086 1.401-1.32 1.767-3.261.914-4.947-.386-.762-1.382-1.676-2.143-1.96-.762-.285-1.93-.356-2.651-.153Zm21.206 11.031c-1.97.284-3.981 1.453-4.925 2.864a.194.194 0 0 1-.356-.108v-.918c0-.852-.691-1.544-1.544-1.544h-1.91a3.453 3.453 0 0 0-3.452 3.454v16.06a3.443 3.443 0 0 0 3.443 3.443 3.474 3.474 0 0 0 3.474-3.453l.02-3.18c.04-7.202.04-7.182.63-8.441.73-1.544 2.162-2.296 4.123-2.164 1.38.092 2.305.69 2.833 1.849.528 1.137.539 1.25.58 8.553l.019 3.332a3.525 3.525 0 0 0 3.525 3.504 3.486 3.486 0 0 0 3.485-3.504l-.022-4.297c-.03-5.069-.092-8.025-.163-8.451-.761-4.45-2.63-6.44-6.56-7.01-.823-.111-2.397-.111-3.2.01ZM13.14 35.481v7.924a3.555 3.555 0 0 0 7.11 0V27.558a3.555 3.555 0 0 0-7.11 0v7.923Z" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M0 0h60v60H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/warley02/" target="_blank" rel="noopener noreferrer">
                            <svg className="h-12 w-12 stroke-black dark:stroke-white p-2 rounded-md cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60">
                                <g clipPath="url(#a)">
                                    <mask id="b" width="60" height="60" x="0" y="0" maskUnits="userSpaceOnUse" >
                                        <path fill="#fff" d="M60 0H0v60h60V0Z" />
                                    </mask>
                                    <g mask="url(#b)">
                                        <path fill="#fff" d="M18.722 4C10.604 4 4 10.604 4 18.722v23.556C4 50.396 10.604 57 18.722 57h23.556C50.396 57 57 50.396 57 42.278V18.722C57 10.604 50.396 4 42.278 4H18.722Zm0 5.889h23.556c4.87 0 8.833 3.963 8.833 8.833v23.556c0 4.87-3.963 8.833-8.833 8.833H18.722c-4.87 0-8.833-3.963-8.833-8.833V18.722c0-4.87 3.963-8.833 8.833-8.833Zm26.5 2.944a2.944 2.944 0 1 0 0 5.89 2.944 2.944 0 0 0 0-5.89ZM30.5 15.778c-8.118 0-14.722 6.604-14.722 14.722 0 8.118 6.604 14.722 14.722 14.722 8.118 0 14.722-6.604 14.722-14.722 0-8.118-6.604-14.722-14.722-14.722Zm0 5.889c4.87 0 8.833 3.963 8.833 8.833s-3.963 8.833-8.833 8.833-8.833-3.963-8.833-8.833 3.963-8.833 8.833-8.833Z" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M0 0h60v60H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </footer>
            </Card>
        </div>
    );
}
