import Footer from "@/components/layout/footer/Footer";
import "../styles/globals.css";

export const metadata = {
    title: "Carlos Warley | Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" >
            <body className="font-mono bg-zinc-950">
                {children}
                <Footer />
            </body>
        </html>
    );
}

