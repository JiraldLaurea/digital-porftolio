import React from "react";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";
import Wrapper from "./Wrapper";

const Experience = () => {
    return (
        <Wrapper
            id="experience"
            title="Experience"
            subtitle="Where I've worked with"
        >
            <div className="grid grid-cols-1 space-y-6 md:grid-cols-2 md:space-x-6 md:space-y-0">
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
        </Wrapper>
    );
};

export default Experience;
