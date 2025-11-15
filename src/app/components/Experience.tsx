import React from "react";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";
import Wrapper from "./Wrapper";

const Experience = () => {
    const tasksGsoFullStackWebDev = [
        "Developed the frontend and backend of a website that contains statistical reports of wastes and profiles from various barangays in Iloilo.",
    ];

    const tasksAWSAsstRNDEngineer = [
        "Developed several softwares for clients from Japan.",
    ];

    return (
        <Wrapper
            id="experience"
            title="Experience"
            subtitle="My work experience journey."
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0">
                <ExperienceCard
                    imgSrc="exp_aws.png"
                    job="Assistant R&D Engineer"
                    company="Advanced World Solutions, Inc."
                    date="October 2023 - Current"
                    tasks={tasksAWSAsstRNDEngineer}
                />
                <ExperienceCard
                    imgSrc="exp_gso.png"
                    job="Full Stack Web Developer"
                    company="General Services Office Iloilo"
                    date="Feb 2023 - May 2023"
                    tasks={tasksGsoFullStackWebDev}
                />
            </div>
        </Wrapper>
    );
};

export default Experience;
