"use client";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter_Tight({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} dark:bg-zinc-900 bg-white`}>
                <ThemeProvider enableSystem={true} attribute="class">
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
