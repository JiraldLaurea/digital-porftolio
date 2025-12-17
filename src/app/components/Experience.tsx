import React from "react";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";
import Wrapper from "./Wrapper";
import ExperienceJob from "./ExperienceJob";

const Experience = () => {
    const tasksGsoFullStackWebDev = [
        "Developed the frontend and backend of a website that contains statistical reports of wastes and profiles from various barangays in Iloilo.",
    ];

    const tasksAWSAsstRNDEngineer = [
        "Developed several softwares for clients from Japan.",
    ];

    //    <div className="bg-[#2A344B]"></div>

    return (
        <Wrapper
            id="experience"
            title="Experience"
            subtitle="My work experience journey."
        >
            <ExperienceJob
                imgSrc="exp_aws.png"
                job="Assistant R&D Engineer"
                company="Advanced World Solutions, Inc."
                date="October 2023 - Present"
                isFirst
            />
            <div className="grid grid-cols-2 gap-6">
                <ExperienceCard
                    project="Property Management System Migration"
                    date="August 2024 - October 2025"
                    task1="• API development, bug fixing, documentation,
                        integration testing, evidence creation."
                    task2="• Worked on a migration converting a desktop PMS to a
                        web application."
                    task3="• Tech: Typescript, C#, React.js, Node.js,
                        Oracle/PL/SQL."
                />
                <ExperienceCard
                    project="BOSCH-UBICOM-ODX Offshore"
                    date="July 2024 - August 2024"
                    task1="• Web development for offshore clients."
                    task2="• Tech: JavaScript, React.js, Node.js."
                />
                <ExperienceCard
                    project="JATCO-UBICOM Web Recipe"
                    date="May 2024 - July 2024"
                    task1="• Mobile development & Figma design for BLE-enabled promo app."
                    task2="• Tech: C#, Xamarin."
                />
                <ExperienceCard
                    project="JRC Cell Coverage Development"
                    date="March 2024 - April 2024"
                    task1="• Developer for web platform."
                    task2="• Tech: JavaScript, JQuery, DynamoDB, Node.js, Git."
                />
            </div>
            <ExperienceJob
                imgSrc="exp_gso.png"
                job="Full-stack Web Developer"
                company="General Services Office Iloilo"
                date="February 2023 - May 2023"
                hasNoBackground
            />
            <div className="grid grid-cols-2 gap-6">
                <ExperienceCard
                    project="Barangay Solid Waste Management System"
                    date="Feb 2023 - May 2023"
                    task1="• Full-stack developer for statistical waste reporting system."
                    task2="• Tech: React.js, Next.js, Node.js, Firebase, MySQL. "
                />
            </div>
        </Wrapper>
    );
};

export default Experience;
