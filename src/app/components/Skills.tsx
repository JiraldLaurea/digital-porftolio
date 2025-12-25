"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Skill } from "../Types/index";
import SkillsGrid from "./SkillsGrid";
import Tabs from "./Tabs";
import Wrapper from "./Wrapper";

type SkillsData = {
    Frontend: Skill[];
    Backend: Skill[];
    Programming: Skill[];
    Tools: Skill[];
};

const Skills: React.FC = () => {
    const { theme }: any = useTheme();
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // if (!mounted) return null; // or a placeholder

    const skillsData: SkillsData = {
        Frontend: [
            {
                imgSrc: "skills_react.svg",
                techName: "Reactjs",
                level: 3,
            },
            {
                imgSrc: `${
                    theme === "dark" && mounted
                        ? "skills_nextjsDark.svg"
                        : "skills_nextjsLight.svg"
                }`,
                techName: "Nextjs",
                level: 2,
            },
            {
                imgSrc: "skills_tailwindcss.svg",
                techName: "Tailwind CSS",
                level: 3,
            },
            {
                imgSrc: "skills_reactRedux.svg",
                techName: "React Redux",
                level: 1,
            },
            {
                imgSrc: "skills_materialUI.svg",
                techName: "MaterialUI",
                level: 2,
            },
            {
                imgSrc: "skills_flutter.svg",
                techName: "Flutter",
                level: 1,
            },
        ],
        Backend: [
            {
                imgSrc: "skills_nodejs.svg",
                techName: "Nodejs",
                level: 2,
            },
            { imgSrc: "skills_mysql.svg", techName: "MySQL", level: 2 },
            {
                imgSrc: "skills_firebase.svg",
                techName: "Firebase",
                level: 2,
            },
            {
                imgSrc: `${
                    theme === "dark" ? "skills_awsDark.png" : "skills_aws.svg"
                }`,
                techName: "AWS",
                level: 1,
            },
        ],
        Programming: [
            {
                imgSrc: "skills_javascript.svg",
                techName: "Javascript",
                level: 3,
            },
            {
                imgSrc: "skills_typescript.svg",
                techName: "Typescript",
                level: 2,
            },
            { imgSrc: "skills_html.svg", techName: "HTML", level: 3 },
            { imgSrc: "skills_css.svg", techName: "CSS", level: 3 },
            { imgSrc: "skills_csharp.svg", techName: "C#", level: 2 },
            {
                imgSrc: "skills_kotlin.svg",
                techName: "Kotlin",
                level: 1,
            },
            {
                imgSrc: "skills_python.svg",
                techName: "Python",
                level: 1,
            },
        ],
        Tools: [
            {
                imgSrc: `${
                    theme === "dark"
                        ? "skills_githubDark.svg"
                        : "skills_githubLight.svg"
                }`,
                techName: "Github",
                level: 2,
            },
            {
                imgSrc: `${
                    theme === "dark"
                        ? "skills_vercelDark.svg"
                        : "skills_vercelLight.svg"
                }`,
                techName: "Vercel",
                level: 2,
            },
            { imgSrc: "skills_figma.svg", techName: "Figma", level: 3 },
        ],
    };

    const categories = Object.keys(skillsData) as (keyof SkillsData)[];
    const skills = skillsData[categories[activeTab]];

    return (
        <Wrapper
            id="skills"
            title="Skills"
            subtitle="My Technical Expertise"
            isAlternate
            isCentered
            isFullHeight
        >
            <Tabs
                categories={categories}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className="grid grid-cols-1 gap-4 xxs:grid-cols-2 lg:grid-cols-3 lg2:grid-cols-4">
                {skills.map((skill, index) => (
                    <SkillsGrid
                        key={index}
                        imgSrc={skill.imgSrc}
                        techName={skill.techName}
                        level={skill.level}
                        mounted={mounted}
                    />
                ))}
            </div>
        </Wrapper>
    );
};

export default Skills;
