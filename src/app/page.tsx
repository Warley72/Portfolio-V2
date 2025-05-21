import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950">
      <div className="flex items-center justify-between w-full max-w-md">
        <Button className="bg-transparent hover:bg-transparent mb-4 hover:text-accent-foreground opacity-50 hover:opacity-100 transition duration-300 ease-in cursor-pointer">
          <svg className="stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l18 0"></path><path d="M5 21v-14l8 -4v18"></path><path d="M19 21v-10l-6 -4"></path><path d="M9 9l0 .01"></path><path d="M9 12l0 .01"></path><path d="M9 15l0 .01"></path><path d="M9 18l0 .01"></path></svg>
          <span className="text-white text-base">Brasilia, DF</span>
        </Button>
        <Button className="bg-transparent hover:bg-zinc-800 hover:text-accent-foreground h-9 w-9 opacity-50 hover:opacity-100 mb-4 cursor-pointer transition duration-300 ease-in">
          <svg className="stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        </Button>
      </div>
      <Card className="p-6 bg-zinc-950 border-white">
        <h1 className=" font-mono text-3xl font-bold text-white">Carlos Warley</h1>
          <p className="font-mono text-xl text-gray-400">Front-end Developer / Typescript & Lua</p>
        <Card className="flex bg-zinc-950 border-transparent">
          <h1 className="text-gray-500 rounded-sm uppercase">menu</h1>
          <nav className="flex flex-col">
            {[
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/Contact" },
            ].map(({ label, href }) => (
              <Link className="flex p-2 text-gray-500 rounded-sm hover:bg-zinc-800" key={label} href={href}>
                <span className="font-mono text-xl">{label}</span>
              </Link>
            ))}
          </nav>
        </Card>
      </Card>
    </div>
  );
}
