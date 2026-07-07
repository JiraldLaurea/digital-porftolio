import "./globals.css";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Providers from "./providers";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter_Tight({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
    title: "Jirald Calusay",
    description: "Welcome to my portfolio",
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "Jirald Calusay",
    },
    icons: {
        icon: [
            { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: "/icons/apple-touch-icon.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#fbfbf9",
    width: "device-width",
    initialScale: 1,
};

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
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
