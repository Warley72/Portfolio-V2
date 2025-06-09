import Footer from "@/components/layout/footer/Footer";
import "../styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",           
})
export const metadata = {
  title: "Carlos Warley | Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className="font-mono bg-zinc-950">
        {children}
        <Footer />
      </body>
    </html>
  );
}

