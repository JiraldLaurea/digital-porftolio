"use client";
import React from "react";
import Wrapper from "./Wrapper";
import ProjectsCard from "./ProjectsCard";
import { useTheme } from "next-themes";

const Projects = () => {
    const { theme }: any = useTheme();

    const technologies1 = [
        "skills_react.svg",
        theme == "dark" ? "skills_nextjsDark.svg" : "skills_nextjsLight.svg",
        "skills_tailwindcss.svg",
        theme == "dark" ? "skills_vercelDark.svg" : "skills_vercelLight.svg",
    ];

    const technologies2 = ["skills_react.svg", "skills_firebase.svg"];
    const technologies3 = [
        "skills_react.svg",
        "skills_reactRedux.svg",
        "skills_firebase.svg",
    ];

    return (
        <Wrapper id="projects" title="Projects" subtitle="What I've built">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectsCard
                    imgSrc="projects_google-clone.png"
                    name="Google Clone"
                    description="A mobile-responsive website that allows
                users to search for terms and display the links of the
                results similar to Google Search."
                    link="https://zandell-google-clone-2.vercel.app"
                    technologies={technologies1}
                />
                <ProjectsCard
                    imgSrc="projects_facebook-clone.png"
                    name="Facebook Clone"
                    description="A mobile-responsive website with Google login authentication that enables users to post texts, images, or videos similar to Facebook."
                    link="https://facebook-clone-dfe01.web.app"
                    technologies={technologies2}
                />
                <ProjectsCard
                    imgSrc="projects_discord-clone.png"
                    name="Discord Clone"
                    description="A mobile-responsive website with Google login authentication that enables users to create a channel where they can chat with another user."
                    link="https://discord-clone-84659.web.app"
                    technologies={technologies3}
                />
                <ProjectsCard
                    imgSrc="projects_airbnb-clone.png"
                    name="Airbnb Clone"
                    description="A mobile-responsive website with calendar and date functionality."
                    link="https://zandell-airbnb-clone.vercel.app"
                    technologies={technologies1}
                />
                <ProjectsCard
                    imgSrc="projects_tesla-clone.png"
                    name="Tesla Clone"
                    description="A mobile-responsive website with scroll snapping functionality."
                    link="https://zandell-tesla-clone.vercel.app"
                    technologies={technologies1}
                />
            </div>
        </Wrapper>
    );
};

export default Projects;
