"use client";
import Image from "next/image";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import SkillsGrid from "./SkillsGrid";
import Tabs from "./Tabs";

interface Skill {
    imgSrc: string;
    darkModeImgSrc?: string;
    text: string;
}

interface SkillsData {
    Programming: Skill[];
    Frontend: Skill[];
    "Backend/Database": Skill[];
    Tools: Skill[];
}

const skillsData: SkillsData = {
    Programming: [
        { imgSrc: "skills_kotlin.svg", text: "Kotlin" },
        { imgSrc: "skills_html.svg", text: "HTML" },
        { imgSrc: "skills_css.svg", text: "CSS" },
        { imgSrc: "skills_javascript.svg", text: "Javascript" },
        { imgSrc: "skills_typescript.svg", text: "Typescript" },
        { imgSrc: "skills_python.svg", text: "Python" },
        { imgSrc: "skills_csharp.svg", text: "C#" },
    ],
    Frontend: [
        { imgSrc: "skills_react.svg", text: "Reactjs" },
        { imgSrc: "skills_reactRedux.svg", text: "React Redux" },
        {
            imgSrc: "skills_nextjsLight.svg",
            darkModeImgSrc: "skills_nextjsDark.svg",
            text: "Nextjs",
        },
        { imgSrc: "skills_flutter.svg", text: "Flutter" },
        { imgSrc: "skills_tailwindcss.svg", text: "Tailwind CSS" },
        { imgSrc: "skills_materialUI.svg", text: "MaterialUI" },
    ],
    "Backend/Database": [
        { imgSrc: "skills_nodejs.svg", text: "Nodejs" },
        { imgSrc: "skills_mysql.svg", text: "MySQL" },
        { imgSrc: "skills_firebase.svg", text: "Firebase" },
    ],
    Tools: [
        {
            imgSrc: "skills_githubLight.svg",
            darkModeImgSrc: "skills_githubDark.svg",
            text: "Github",
        },
        {
            imgSrc: "skills_vercelLight.svg",
            darkModeImgSrc: "skills_vercelDark.svg",
            text: "Vercel",
        },
        { imgSrc: "skills_figma.svg", text: "Figma" },
    ],
};

const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const categories = Object.keys(skillsData) as (keyof SkillsData)[];
    const skills = skillsData[categories[activeTab]];

    return (
        <Wrapper
            id="skills"
            title="Skills"
            subtitle="Technologies and frameworks I have knowledge of."
            isNotCentered
        >
            <Tabs
                categories={categories}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                {skills.map((skill, index) => (
                    <SkillsGrid
                        key={index}
                        imgSrc={skill.imgSrc}
                        darkModeImgSrc={skill.darkModeImgSrc}
                        text={skill.text}
                    />
                ))}
            </div>
        </Wrapper>
    );
};

export default Skills;
