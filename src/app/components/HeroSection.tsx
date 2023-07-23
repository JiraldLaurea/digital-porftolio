"use client";
import React from "react";
import { Icon } from "@iconify/react";

const HeroSection = () => {
    return (
        <div
            id="home"
            className="flex flex-col justify-center h-[calc(100vh-68.4px)] bg-white dark:bg-zinc-900   border-b dark:border-b-zinc-800"
        >
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-6xl font-bold">Hi, I'm Jirald!</h1>
                <div className="flex justify-center">
                    <p className="max-w-lg">
                        I'm a Computer Science Graduate from Central Philippine
                        University with a strong background in full stack web
                        development.
                    </p>
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <a
                    href="https://firebasestorage.googleapis.com/v0/b/jirald.appspot.com/o/Jirald%20Laurea%20Calusay.pdf?alt=media&token=234978fa-80d5-4a1e-b5a2-ce29a1cad57d"
                    target="_blank"
                    className="flex items-center px-6 py-3 space-x-1 text-blue-600 border rounded-md dark:text-blue-500 dark:border-zinc-800"
                >
                    <p>Resume</p>
                    <Icon
                        icon="ic:baseline-open-in-new"
                        width={20}
                        height={20}
                    />
                </a>

                <a
                    href="https://linkedin.com/in/jirald-calusay-064b09220"
                    target="_blank"
                    className="flex items-center px-6 py-3 space-x-1 text-blue-600 border rounded-md dark:text-blue-500 dark:border-zinc-800"
                >
                    <p>LinkedIn</p>
                    <Icon
                        icon="ic:baseline-open-in-new"
                        width={20}
                        height={20}
                    />
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
