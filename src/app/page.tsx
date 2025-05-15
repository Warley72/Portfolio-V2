import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950">
      <Card className="p-6 text-gray-400  bg-zinc-950 border border-gray-400">
        <h1 className=" font-mono text-3xl font-bold text-white">Carlos Warley</h1>
          <p className="font-mono text-xl text-gray-400">Front-end Developer / Typescript & Lua</p>

        <Card className="bg-zinc-950 border border-gray-700 p-4 ">
          <nav className="flex flex-col">
            {[
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/Contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex py-2 text-gray-500 rounded hover:bg-zinc-800 transition"
              >
                <span className="font-mono text-xl">{label}</span>
              </Link>
            ))}
          </nav>
        </Card>

      </Card>
    </div>
  );
}
