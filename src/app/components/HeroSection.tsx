"use client";
import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";
import Image from "next/image";

const HeroSection = ({ buttonsRef }: any) => {
    const resumeLink =
        "https://drive.google.com/file/d/1w-ep7j_ZsZbAQHgd_KyecjXKQGjdwqWR/view?usp=drive_link";
    const linkedInLink = "https://linkedin.com/in/jirald-calusay-064b09220";

    return (
        <div
            id="home"
            className="flex flex-col justify-center items-center h-[calc(100vh-68.4px)] bg-white dark:bg-[#1E263A] px-4"
        >
            <div className="flex items-center justify-between w-full max-w-4xl mb-8 text-left">
                <div>
                    <h1 className="pb-1 mb-3 text-5xl font-extrabold text-transparent sm:text-7xl bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500">
                        Jirald Calusay
                    </h1>
                    <h3 className="mb-6 text-3xl font-bold sm:text-5xl">
                        Assistant R&D Engineer
                    </h3>
                    <p className="max-w-lg mb-6 text-lg font-light sm:text-xl">
                        Passionate about developing user-friendly websites and
                        creating seamless user experiences.
                    </p>
                    <div ref={buttonsRef} className="flex space-x-4">
                        <Button link={resumeLink} text="Resume" isResume />
                        <Button
                            link={linkedInLink}
                            text="LinkedIn"
                            isResume={false}
                        />
                    </div>
                </div>

                <div className="relative w-64 h-64 overflow-hidden rounded-full border dark:border-0">
                    <Image
                        src={`/img/avatar2.jpg`}
                        alt=""
                        layout="fill"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
