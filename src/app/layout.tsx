import FooterClient from "@/components/layout/FooterClient";
import { ThemeProvider } from "../providers/theme-provider";

import "../styles/globals.css";

export const metadata = {
    title: "Carlos Warley | Developer",
    icons: {
        icon: "/code.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className="min-h-screen flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="flex-1">
                        {children}
                    </main>

                    <FooterClient />
                </ThemeProvider>
            </body>
        </html>
    );
}
