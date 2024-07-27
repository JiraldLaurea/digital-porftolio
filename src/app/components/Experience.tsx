import React from "react";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";
import Wrapper from "./Wrapper";

const Experience = () => {
    const tasksCpuLabAssistant = [
        "Provided maintenance of computer laboratory equipments.",
        "Assisted students and teachers for technical issues.",
    ];

    const tasksGsoFullStackWebDev = [
        "Developed the frontend and backend of a website that contains statistical reports of wastes and profiles from various barangays in Iloilo.",
    ];

    const tasksAWSJrRNDEngineer = [
        "Developed several softwares for clients from Japan.",
    ];

    return (
        <Wrapper
            id="experience"
            title="Experience"
            subtitle="My work experience journey."
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:space-y-0">
                <ExperienceCard
                    imgSrc="exp_aws.png"
                    job="Jr. R&D Engineer"
                    company="Advanced World Solutions, Inc."
                    date="October 2023 - Current"
                    tasks={tasksAWSJrRNDEngineer}
                />
                <ExperienceCard
                    imgSrc="exp_gso.png"
                    job="Full Stack Web Developer"
                    company="General Services Office Iloilo"
                    date="Feb 2023 - May 2023"
                    tasks={tasksGsoFullStackWebDev}
                />
                <ExperienceCard
                    imgSrc="exp_cpu.png"
                    job="Computer Laboratory Assistant"
                    company="Central Philippine University"
                    date="Jun 2019 - Mar 2020"
                    tasks={tasksCpuLabAssistant}
                />
            </div>
        </Wrapper>
    );
};

export default Experience;
