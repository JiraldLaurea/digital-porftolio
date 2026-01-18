"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

const HeroSection = ({ buttonsRef }: any) => {
    const resumeLink = "/assets/Jirald_Calusay_Resume.pdf";
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
                    typingSpeed * 1000,
                );
            } else {
                timeout = setTimeout(
                    () => setIsDeleting(true),
                    pauseAfterTyping * 1000,
                );
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(
                    () => setText(currentRole.slice(0, text.length - 1)),
                    deletingSpeed * 1000,
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
            className="flex py-10 flex-col text-center md:text-left justify-center items-center max-h-225 min-h-fit h-[calc(100vh-64px)] bg-primary1 dark:bg-primary1-dark px-4"
        >
            <div className="flex flex-col-reverse items-center justify-center w-full lg:justify-between md:px-0 lg:px-6 md:flex-row lg:max-w-5xl">
                <div className="space-y-4 sm:space-y-6 sm:mr-4">
                    <div>
                        <h1 className="mb-2 text-2xl font-semibold leading-tight xxs:text-3xl xs:text-4xl sm:mb-4 sm:text-5xl lg:text-6xl">
                            Jirald Calusay
                        </h1>
                        <div className="flex items-center justify-center text-3xl xxs:text-4xl font-extrabold xs:text-[44px] sm:text-[52px] md:justify-start lg:text-7xl">
                            <h3 className="text-hero dark:text-hero-dark">
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
                        className="flex justify-center space-x-2 sm:space-x-3 md:justify-start"
                    >
                        <Button link={resumeLink} text="Resume" isPrimary />
                        <Button link={linkedInLink} text="LinkedIn" />
                    </div>
                </div>

                <div className="relative flex-none w-40 h-40 mb-4 overflow-hidden border rounded-full md:mb-0 sm:w-48 sm:h-48 lg:w-58 lg:h-58 dark:border-zinc-700">
                    <Image
                        src={`/img/profile_1.png`}
                        alt=""
                        className="object-contain"
                        fill
                        preload
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
