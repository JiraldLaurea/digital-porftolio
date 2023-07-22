import React from "react";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return (
        <div
            id="experience"
            className="text-center flex flex-col justify-center min-h-[calc(100vh-68.4px)] bg-white dark:bg-zinc-900 py-14 border-b dark:border-b-zinc-800"
        >
            <h1 className="mb-8 text-xl font-light tracking-[6px] uppercase">
                Experience
            </h1>
            <div className="flex flex-col justify-center space-y-6 md:space-x-6 md:flex-row md:space-y-0">
                <ExperienceCard
                    imgSrc="exp_cpu.png"
                    job="Computer Laboratory Assistant"
                    company="Central Philippine University"
                    date="Jun 2019 - Mar 2020"
                    task1="Provided maintenance of computer laboratory
                    equipments"
                    task2=" Assisted students and teachers for technical
                    issues"
                />
                <ExperienceCard
                    imgSrc="exp_gso.png"
                    job=" Full Stack Web Developer"
                    company="General Services Office Iloilo"
                    date="Feb 2023 - May 2023"
                    task1="  Developed the frontend and backend of a website
                    that contains statistical reports of wastes and
                    profiles from various barangays in Iloilo"
                    noTask2
                />
            </div>
        </div>
    );
};

export default Experience;
