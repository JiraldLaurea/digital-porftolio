import Image from "next/image";
import React from "react";
import SkillsGrid from "./SkillsGrid";

const Skills = () => {
    return (
        <div
            id="skills"
            className="text-center flex flex-col justify-center min-h-[calc(100vh-68.4px)] bg-white dark:bg-zinc-900 py-14 border-b dark:border-b-zinc-800"
        >
            <h1 className="mb-8 text-xl font-light tracking-[6px] uppercase">
                Skills
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <SkillsGrid imgSrc="skills_react.svg" text="Reactjs" />
                <div className="dark:hidden">
                    <SkillsGrid imgSrc="skills_nextjsLight.svg" text="Nextjs" />
                </div>
                <div className="hidden dark:block">
                    <SkillsGrid imgSrc="skills_nextjsDark.svg" text="Nextjs" />
                </div>
                <SkillsGrid imgSrc="skills_html.svg" text="HTML" />
                <SkillsGrid imgSrc="skills_css.svg" text="CSS" />
                <SkillsGrid imgSrc="skills_javascript.svg" text="Javascript" />
                <SkillsGrid imgSrc="skills_typescript.svg" text="Typescript" />
                <SkillsGrid imgSrc="skills_nodejs.svg" text="Nodejs" />
                <SkillsGrid
                    imgSrc="skills_tailwindcss.svg"
                    text="Tailwind CSS"
                />
                <SkillsGrid imgSrc="skills_mysql.svg" text="MySQL" />
                <SkillsGrid imgSrc="skills_python.svg" text="Python" />
                <SkillsGrid imgSrc="skills_csharp.svg" text="C#" />
                <SkillsGrid imgSrc="skills_firebase.svg" text="Firebase" />
                <div className="dark:hidden">
                    <SkillsGrid imgSrc="skills_githubLight.svg" text="Github" />
                </div>
                <div className="hidden dark:block">
                    <SkillsGrid imgSrc="skills_githubDark.svg" text="Github" />
                </div>
                <div className="dark:hidden">
                    <SkillsGrid imgSrc="skills_vercelLight.svg" text="Vercel" />
                </div>
                <div className="hidden dark:block">
                    <SkillsGrid imgSrc="skills_vercelDark.svg" text="Vercel" />
                </div>
            </div>
        </div>
    );
};

export default Skills;
