import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'regenerator-runtime/runtime'
import { Toaster } from "@/components/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActiveNotes",
  description: "Coded By Chris Gaw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
