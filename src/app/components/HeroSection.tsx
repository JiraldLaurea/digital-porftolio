"use client";
import React from "react";
import { Icon } from "@iconify/react";

const HeroSection = () => {
    return (
        <div
            id="home"
            className="flex flex-col justify-center h-[calc(100vh-68.4px)] bg-zinc-100 dark:bg-zinc-900 px-4 mb-3"
        >
            <div className="mb-8 text-center">
                <h1 className="mb-4 font-bold text-7xl">
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                        Jirald!
                    </span>
                </h1>
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
                    className="flex items-center px-6 py-3 space-x-1 text-white bg-blue-500 rounded-md dark:bg-blue-700 dark:text-white dark:border-transparent"
                >
                    <p>Resume</p>
                </a>

                <a
                    href="https://linkedin.com/in/jirald-calusay-064b09220"
                    target="_blank"
                    className="flex items-center px-6 py-3 space-x-1 text-blue-600 bg-white border rounded-md dark:bg-zinc-950 dark:text-blue-500 dark:border-zinc-800"
                >
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
