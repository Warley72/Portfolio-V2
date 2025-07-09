import Footer from "@/components/layout/footer/Footer";
import "../styles/globals.css";

export const metadata = {
    title: "Carlos Warley | Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body className="font-mono bg-white text-black dark:bg-zinc-950 dark:text-white transition-colors">
                {children}
                <Footer />
            </body>
        </html>
    );
}

