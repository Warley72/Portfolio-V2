import "../styles/globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"], 
  variable: "--font-ibm",
});

export const metadata = {
  title: "Portfólio Carlos Warley",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={ibmPlex.variable}>
      <body className="font-mono">{children}</body>
    </html>
  );
}

