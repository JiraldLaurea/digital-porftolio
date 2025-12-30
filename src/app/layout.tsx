"use client";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-white dark:bg-primary1-dark">
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
