"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Tech } from "../Types/index";
import ProjectsCarousel from "./ProjectsCarousel";
import Tabs from "./Tabs";
import Wrapper from "./Wrapper";

interface Project {
    imgSrc: string;
    name: string;
    description: string;
    link: string;
    sourceCode?: string;
    techs: Tech[];
}

interface ProjectsData {
    Professional: Project[];
    Personal: Project[];
}

const Projects = () => {
    const { theme }: any = useTheme();

    const projectsData: ProjectsData = {
        Professional: [
            {
                imgSrc: "projects_pareto-chart.png",
                name: "Chart Creation Tool",
                description:
                    "Allows users to create charts(Fishbone & Pareto).",
                link: "https://pareto-chart.vercel.app/",
                sourceCode: "https://gitlab.com/Zandell/chart/tree/master",
                techs: [
                    {
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        imgSrc: "skills_materialUI.svg",
                        techName: "MaterialUI",
                    },
                    {
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_vercelDark.svg"
                                : "skills_vercelLight.svg"
                        }`,
                        techName: "Vercel",
                    },
                ],
            },
        ],
        Personal: [
            {
                imgSrc: "projects_google-clone.png",
                name: "Google Clone",
                description:
                    "A mobile-responsive website that allows users to search for terms and display the links of the results similar to Google Search.",
                link: "https://zandell-google-clone-2.vercel.app",
                sourceCode: "https://github.com/JiraldLaurea/google-clone-2",
                techs: [
                    {
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_nextjsDark.svg"
                                : "skills_nextjsLight.svg"
                        }`,
                        techName: "Next.js",
                    },
                    {
                        imgSrc: "skills_tailwindcss.svg",
                        techName: "Tailwind CSS",
                    },
                    {
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
                imgSrc: "projects_facebook-clone.png",
                name: "Facebook Clone",
                description:
                    "A mobile-responsive website with Google login authentication that enables users to post texts, images, or videos similar to Facebook.",
                link: "https://facebook-clone-dfe01.web.app",
                techs: [
                    {
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        imgSrc: "skills_firebase.svg",
                        techName: "Firebase",
                    },
                ],
            },
            {
                imgSrc: "projects_discord-clone.png",
                name: "Discord Clone",
                description:
                    "A mobile-responsive website with Google login authentication that enables users to create a channel where they can chat with another user.",
                link: "https://discord-clone-84659.web.app",
                techs: [
                    {
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        imgSrc: "skills_reactRedux.svg",
                        techName: "React Redux",
                    },
                    {
                        imgSrc: "skills_firebase.svg",
                        techName: "Firebase",
                    },
                ],
            },
            {
                imgSrc: "projects_airbnb-clone.png",
                name: "Airbnb Clone",
                description:
                    "A mobile-responsive website with calendar and date functionality.",
                link: "https://zandell-airbnb-clone.vercel.app",
                sourceCode: "https://github.com/JiraldLaurea/airbnb-clone",
                techs: [
                    {
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_nextjsDark.svg"
                                : "skills_nextjsLight.svg"
                        }`,
                        techName: "Next.js",
                    },
                    {
                        imgSrc: "skills_tailwindcss.svg",
                        techName: "Tailwind CSS",
                    },
                    {
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
                imgSrc: "projects_tesla-clone.png",
                name: "Tesla Clone",
                description:
                    "A mobile-responsive website with scroll snapping functionality.",
                link: "https://zandell-tesla-clone.vercel.app",
                sourceCode: "https://github.com/JiraldLaurea/tesla-clone",
                techs: [
                    {
                        imgSrc: "skills_react.svg",
                        techName: "React",
                    },
                    {
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_nextjsDark.svg"
                                : "skills_nextjsLight.svg"
                        }`,
                        techName: "Next.js",
                    },
                    {
                        imgSrc: "skills_tailwindcss.svg",
                        techName: "Tailwind CSS",
                    },
                    {
                        imgSrc: `${
                            theme === "dark"
                                ? "skills_vercelDark.svg"
                                : "skills_vercelLight.svg"
                        }`,
                        techName: "Vercel",
                    },
                ],
            },
        ],
    };

    const [activeTab, setActiveTab] = useState(0);
    const categories = Object.keys(projectsData) as (keyof ProjectsData)[];
    const projects = projectsData[categories[activeTab]];

    return (
        <Wrapper
            id="projects"
            title="Projects"
            subtitle="Websites I've built"
            isCentered
            isPoject
        >
            <Tabs
                categories={categories}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isProjects
            />
            <ProjectsCarousel projects={projects} activeTab={activeTab} />
        </Wrapper>
    );
};

export default Projects;
