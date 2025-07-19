import Footer from "@/components/layout/Footer";
import "../styles/globals.css";

import { ThemeProvider } from "../providers/theme-provider"

export const metadata = {
    title: "Carlos Warley | Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

