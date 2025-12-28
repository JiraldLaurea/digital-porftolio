"use client";
import { useTheme } from "next-themes";
import { useMemo, useState } from "react";
import { Project } from "../Types/index";
import ProjectsCarousel from "./ProjectsCarousel";
import Tabs from "./Tabs";
import Wrapper from "./Wrapper";

interface ProjectsData {
    Professional: Project[];
    Personal: Project[];
}

const Projects = () => {
    const { theme }: any = useTheme();

    const projectsData: ProjectsData = useMemo(
        () => ({
            Professional: [
                {
                    projectType: "Website",
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
                {
                    projectType: "UI Design",
                    imgSrc: "projects_beacon_service_app.png",
                    name: "Beacon Service App UI",
                    description:
                        "A mobile service app UI designed to deliver location-based promotions by showing coupons and offers when users enter the vicinity of a BLE beacon.",
                    figmaLink:
                        "https://www.figma.com/design/1PgYCJAbYvft6CriicoMKI/Beacon-App?node-id=0-1&t=MtjCpUL5MIX5yprq-1",
                },
            ],
            Personal: [
                {
                    projectType: "Website",
                    imgSrc: "projects_digital-portfolio.png",
                    name: "Digital Portfolio",
                    description:
                        "A personal digital portfolio showcasing my frontend development and UI/UX design projects built with modern tools and design principles.",
                    link: "https://jiraldcalusay.vercel.app/",
                    sourceCode:
                        "https://github.com/JiraldLaurea/digital-porftolio",
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
                            techName: "Tailwind",
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
                    projectType: "Website",
                    imgSrc: "projects_google-clone.png",
                    name: "Google Clone",
                    description:
                        "A mobile-responsive website that allows users to search for terms and display the links of the results similar to Google Search.",
                    link: "https://zandell-google-clone-2.vercel.app",
                    sourceCode:
                        "https://github.com/JiraldLaurea/google-clone-2",
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
                            techName: "Tailwind",
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
                    projectType: "Website",
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
                    projectType: "Website",
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
                            techName: "Tailwind",
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
                    projectType: "UI Design",
                    imgSrc: "projects-mobile-grocery-app.png",
                    name: "Mobile Grocery App UI",
                    description:
                        "A mobile grocery shopping app UI focused on fast product discovery, clean layout, and smooth checkout flow.",
                    figmaLink:
                        "https://www.figma.com/design/JUIEqvDWBVAbWPyUSeCbwJ/Grocery-App?node-id=0-1&t=Ob5OjP5AgPcuiwYH-1",
                },
                {
                    projectType: "UI Design",
                    imgSrc: "projects_hotel_booking_app.png",
                    name: "Hotel Booking App UI",
                    description:
                        "Mobile hotel booking application UI that allows users to search for accommodations, view hotel and room details, and complete bookings efficiently.",
                    figmaLink:
                        "https://www.figma.com/design/bdcgbe4gXuFaAyd6qSXqqc/Hotel-Booking-App?node-id=0-1&t=o7MKgzCAea1bYPuF-1",
                },
            ],
        }),
        [theme]
    );

    const [activeTab, setActiveTab] = useState(0);
    const categories = Object.keys(projectsData) as (keyof ProjectsData)[];
    const projects = projectsData[categories[activeTab]];

    return (
        <Wrapper
            id="projects"
            title="Projects"
            subtitle="Websites I've built"
            isProject
            isCentered
        >
            <Tabs
                categories={categories}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                section="Projects"
                isProject
            />
            <ProjectsCarousel projects={projects} activeTab={activeTab} />
        </Wrapper>
    );
};

export default Projects;
