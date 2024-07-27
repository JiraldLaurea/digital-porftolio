"use client";
import React from "react";
import { Icon } from "@iconify/react";

const HeroSection = () => {
    return (
        <div
            id="home"
            className="flex flex-col justify-center h-[calc(100vh-68.4px)] bg-zinc-50 dark:bg-[#1E263A] px-4"
        >
            <div className="mb-8 text-center">
                <h1 className="pb-1 mb-3 text-5xl font-extrabold text-transparent sm:text-7xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    Jirald Calusay
                </h1>
                <h3 className="mb-6 text-3xl font-bold sm:text-5xl">
                    Jr. R&D Engineer
                </h3>
                <p className="max-w-lg mx-auto text-lg font-light sm:text-xl">
                    Passionate about developing user-friendly websites and
                    creating seamless user experiences.
                </p>
            </div>
            <div className="flex justify-center space-x-4">
                <a
                    href="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-a7967.appspot.com/o/Resume_JiraldCalusay.pdf?alt=media&token=ed5829a6-c257-4b80-bcab-a4cd726dc715"
                    target="_blank"
                    className="flex items-center px-6 py-3 space-x-1 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600 dark:hover:bg-blue-600 dark:bg-blue-700 dark:text-white dark:border-transparent"
                >
                    <p>Resume</p>
                </a>
                <a
                    href="https://linkedin.com/in/jirald-calusay-064b09220"
                    target="_blank"
                    className="flex items-center px-6 py-3 space-x-1 text-blue-600 transition-colors ease-in bg-white border rounded-md hover:border-blue-500 dark:hover:border-blue-600 dark:bg-transparent dark:text-blue-500 dark:border-slate-500 dark:border-opacity-50"
                >
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
