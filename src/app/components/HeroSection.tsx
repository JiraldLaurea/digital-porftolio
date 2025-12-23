"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = ({ buttonsRef }: any) => {
    const resumeLink =
        "https://drive.google.com/file/d/1w-ep7j_ZsZbAQHgd_KyecjXKQGjdwqWR/view?usp=drive_link";
    const linkedInLink = "https://linkedin.com/in/jirald-calusay-064b09220";

    const roles = ["Web", "Frontend", "Fullstack"];

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = 0.05; // seconds per character
    const deletingSpeed = 0.03;
    const pauseAfterTyping = 2;

    useEffect(() => {
        const currentRole = roles[roleIndex];

        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (text.length < currentRole.length) {
                timeout = setTimeout(
                    () => setText(currentRole.slice(0, text.length + 1)),
                    typingSpeed * 1000
                );
            } else {
                timeout = setTimeout(
                    () => setIsDeleting(true),
                    pauseAfterTyping * 1000
                );
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(
                    () => setText(currentRole.slice(0, text.length - 1)),
                    deletingSpeed * 1000
                );
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <div
            id="home"
            className="flex py-10 flex-col text-center md:text-left  justify-center items-center max-h-192 min-h-fit h-[calc(100vh-64px)] bg-primary1 dark:bg-primary1-dark px-4"
        >
            <div className="flex flex-col-reverse items-center justify-between w-full md:px-10 lg:px-12 md:flex-row lg:max-w-5xl">
                <div className="mr-4 space-y-6">
                    <div>
                        <h1 className="mb-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-6xl">
                            Jirald Calusay
                        </h1>
                        <div className="flex items-center justify-center text-4xl font-extrabold sm:text-5xl md:justify-start lg:text-7xl">
                            <h3 className="text-accent dark:text-accent-dark">
                                <motion.span
                                    key={text}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    {text}
                                </motion.span>
                            </h3>
                            <motion.span
                                className="font-normal"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                            >
                                |
                            </motion.span>
                            <span className="text-current">Developer</span>
                        </div>
                    </div>

                    <p className="max-w-lg md:text-lg lg:text-xl">
                        Passionate about developing user-friendly websites and
                        creating seamless user experiences
                    </p>
                    <div
                        ref={buttonsRef}
                        className="flex justify-center space-x-4 md:justify-start"
                    >
                        <Button link={resumeLink} text="Resume" isResume />
                        <Button
                            link={linkedInLink}
                            text="LinkedIn"
                            isResume={false}
                        />
                    </div>
                </div>

                <div className="relative flex-none mb-4 overflow-hidden border rounded-full md:mb-0 w-30 h-30 sm:w-44 sm:h-44 lg:w-56 lg:h-56 dark:border-0">
                    <Image
                        src={`/img/avatar2.jpg`}
                        alt=""
                        className="object-contain"
                        fill
                        sizes="100vw" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
