import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Work_Sans } from "next/font/google"
import { cn } from "@/lib/utils";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.className)}>
      <body
        className="min-h-screen pt-12 bg-[#f5f5f5] slate-50 antialiazed"
      >
        <div>
          <Sidebar />
        </div>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
