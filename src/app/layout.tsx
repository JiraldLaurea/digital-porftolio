"use client";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter_Tight({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.className} ${jetbrainsMono.variable}`}
        >
            <body className="bg-primary1 dark:bg-primary1-dark">
                <ThemeProvider
                    enableSystem={true}
                    attribute="class"
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster
                        position="bottom-center"
                        toastOptions={{
                            duration: 4000,
                        }}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
