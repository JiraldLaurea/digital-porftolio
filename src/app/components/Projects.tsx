"use client";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { RiNextjsFill, RiVercelFill } from "react-icons/ri";
import { SiExpo, SiTurso } from "react-icons/si";
import { Project } from "../Types/index";
import ProjectsCarousel from "./ProjectsCarousel";
import FadeIn from "./FadeIn";
import { ReactIcon, TailwindIcon, TypescriptIcon } from "./icons/Icons";

const Projects = () => {
    const { theme }: any = useTheme();

    const projects: Project[] = useMemo(
        () => [
            {
                projectType: "Website",
                category: "Web & Mobile Platform",
                year: "2026",
                imgSrc: "projects-voucher-hunt.png",
                name: "Voucher Hunt",
                description:
                    "A reservation-based voucher marketing platform for small businesses: spin to reveal a voucher, book a slot tied to that prize, then redeem it in store — with an admin dashboard and an Expo Android app on one API.",
                link: "https://bizflow-voucher-hunt.vercel.app/",
                sourceCode: "https://github.com/JiraldLaurea/bizflow-voucher-hunter",
                techs: [
                    {
                        Icon: RiNextjsFill,
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_nextjsDark.svg"
                                : "skills_nextjsLight.svg"
                        }`,
                        techName: "Next.js",
                    },
                    {
                        Icon: ReactIcon,
                        imgSrc: "skills_react.svg",
                        techName: "React Native",
                    },
                    {
                        Icon: SiExpo,
                        imgSrc: "",
                        techName: "Expo",
                    },
                    {
                        Icon: TypescriptIcon,
                        imgSrc: "skills_typescript.svg",
                        techName: "TypeScript",
                    },
                    {
                        Icon: SiTurso,
                        imgSrc: "",
                        techName: "Turso / libSQL",
                    },
                ],
            },
            {
                projectType: "Website",
                category: "Web Platform",
                year: "2024",
                imgSrc: "projects_kwarta.png",
                name: "Kwarta",
                description:
                    "A responsive personal finance app for tracking income, expenses, budgets, accounts, transfers, reports, and backups with authenticated workspace persistence.",
                link: "https://kwarta.vercel.app/",
                sourceCode: "https://github.com/JiraldLaurea/kwarta",
                techs: [
                    {
                        Icon: ReactIcon,
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        Icon: RiNextjsFill,
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_nextjsDark.svg"
                                : "skills_nextjsLight.svg"
                        }`,
                        techName: "Next.js",
                    },
                    {
                        Icon: TailwindIcon,
                        imgSrc: "skills_tailwindcss.svg",
                        techName: "Tailwind",
                    },
                    {
                        Icon: RiVercelFill,
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_vercelDark.svg"
                                : "skills_vercelLight.svg"
                        }`,
                        techName: "Vercel",
                    },
                ],
            },
            {
                projectType: "Website",
                category: "E-Commerce",
                year: "2025",
                imgSrc: "projects-sellix.png",
                name: "Sellix",
                description:
                    "A production-grade full-stack e-commerce platform built to demonstrate real-world frontend and full-stack development skills.",
                link: "https://sellix-ecommerce.vercel.app/",
                sourceCode: "https://github.com/JiraldLaurea/sellix",
                techs: [
                    {
                        Icon: ReactIcon,
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        Icon: RiNextjsFill,
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_nextjsDark.svg"
                                : "skills_nextjsLight.svg"
                        }`,
                        techName: "Next.js",
                    },
                    {
                        Icon: TailwindIcon,
                        imgSrc: "skills_tailwindcss.svg",
                        techName: "Tailwind",
                    },
                    {
                        Icon: RiVercelFill,
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_vercelDark.svg"
                                : "skills_vercelLight.svg"
                        }`,
                        techName: "Vercel",
                    },
                ],
            },
            {
                projectType: "Website",
                category: "AI Platform",
                year: "2026",
                name: "GameLead Radar",
                description:
                    "An AI-powered lead discovery platform that crawls game-industry news and RSS feeds to surface pre-launch leads, then enriches contacts and automates scheduled outreach.",
                techs: [
                    {
                        Icon: RiNextjsFill,
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_nextjsDark.svg"
                                : "skills_nextjsLight.svg"
                        }`,
                        techName: "Next.js",
                    },
                    {
                        Icon: ReactIcon,
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        Icon: TailwindIcon,
                        imgSrc: "skills_tailwindcss.svg",
                        techName: "Tailwind",
                    },
                ],
            },
        ],
        [theme],
    );

    return (
        <section
            id="projects"
            className="py-14 overflow-hidden border-t bg-primary1 dark:bg-primary1-dark dark:border-zinc-700"
        >
            {/* Section header (constrained to the content column) */}
            <FadeIn className="w-full max-w-6xl px-4 mx-auto mb-8">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Selected Work
                    </h2>
                    <span className="text-sm text-secondary-text dark:text-secondary-text-dark">
                        2024 — 2026
                    </span>
                </div>
            </FadeIn>

            {/* Carousel is full-bleed so neighbours peek outside the column */}
            <FadeIn delay={0.1}>
                <ProjectsCarousel projects={projects} />
            </FadeIn>
        </section>
    );
};

export default Projects;
