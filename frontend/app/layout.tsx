import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import ProviderWrapper from "@/components/dynamic-wrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Athoos",
  description: "Safer Transactions",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <ProviderWrapper>
        <body className={`overflow-x-hidden min-h-screen 
          bg-white flex flex-col 
          justify-between items-center
           ${dm_sans.className}`}>

          <Navbar />
          {children}
          <Toaster />
          <Footer />

        </body>
      </ProviderWrapper>

    </html>
  );
}
