"use client";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (
            process.env.NODE_ENV === "production" &&
            "serviceWorker" in navigator
        ) {
            navigator.serviceWorker.register("/service-worker.js").catch(() => {});
        }
    }, []);

    return (
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
    );
}
