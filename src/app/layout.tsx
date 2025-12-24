"use client";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
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
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} bg-white dark:bg-primary1-dark`}
            >
                <ThemeProvider
                    enableSystem={true}
                    attribute="class"
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
