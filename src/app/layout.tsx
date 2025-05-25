import "../styles/globals.css";
import { IBM_Plex_Mono } from "next/font/google";

import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-mono",
});


const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"], 
  variable: "--font-ibm",
});

export const metadata = {
  title: "Carlos Warley | Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={geistMono.variable}>
      <body className="font-mono">{children}</body>
    </html>
  );
}

