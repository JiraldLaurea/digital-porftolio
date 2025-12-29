import { useTheme } from "next-themes";
import { RiNextjsFill } from "react-icons/ri";
import ExperienceCard from "./ExperienceCard";
import ExperienceJob from "./ExperienceJob";
import Wrapper from "./Wrapper";
import { NodejsIcon, ReactIcon, TypescriptIcon } from "./icons/Icons";

const Experience = () => {
    const { theme }: any = useTheme();

    return (
        <Wrapper
            id="experience"
            title="Experience"
            subtitle="My Professional Experience"
        >
            <ExperienceJob
                imgSrc="exp_aws.png"
                job="Assistant R&D Engineer"
                company="Advanced World Solutions, Inc."
                date="October 2023 - Present"
                isFirst
            />
            <div className="grid grid-cols-1">
                <ExperienceCard
                    project="Property Management System Migration"
                    date="August 2024 - October 2025"
                    tasks={[
                        {
                            description:
                                "- API development, bug fixing, documentation, integration testing, evidence creation.",
                        },
                        {
                            description:
                                "- Worked on a migration converting a desktop PMS to a web application.",
                        },
                    ]}
                    techs={[
                        {
                            Icon: ReactIcon,
                            imgSrc: "skills_react.svg",
                            techName: "React",
                        },
                        {
                            Icon: TypescriptIcon,
                            imgSrc: "skills_typescript.svg",
                            techName: "TypeScript",
                        },
                        {
                            Icon: NodejsIcon,
                            imgSrc: "skills_nodejs.svg",
                            techName: "Node.js",
                        },
                        {
                            imgSrc: "skills_csharp.svg",
                            techName: "C#",
                        },
                        {
                            imgSrc: "skills_sql.svg",
                            techName: "Sql",
                        },
                        {
                            imgSrc: "skills_oracle.svg",
                            techName: "Oracle",
                        },
                    ]}
                />
                <ExperienceCard
                    project="BOSCH-UBICOM-ODX Offshore"
                    date="July 2024 - August 2024"
                    tasks={[
                        {
                            description:
                                "- Web development for offshore clients.",
                        },
                    ]}
                    techs={[
                        {
                            imgSrc: "skills_react.svg",
                            techName: "React",
                        },
                        {
                            imgSrc: "skills_javascript.svg",
                            techName: "JavaScript",
                        },
                        {
                            imgSrc: "skills_nodejs.svg",
                            techName: "Node.js",
                        },
                    ]}
                />
                <ExperienceCard
                    project="JATCO-UBICOM Web Recipe"
                    date="May 2024 - July 2024"
                    tasks={[
                        {
                            description:
                                "- Mobile development & Figma design for BLE-enabled promo app.",
                        },
                    ]}
                    techs={[
                        {
                            imgSrc: "skills_csharp.svg",
                            techName: "C#",
                        },
                        {
                            imgSrc: "skills_xamarin.svg",
                            techName: "Xamarin",
                        },
                        {
                            imgSrc: "skills_figma.svg",
                            techName: "Figma",
                        },
                    ]}
                />
                <ExperienceCard
                    project="JRC Cell Coverage Development"
                    date="March 2024 - April 2024"
                    tasks={[{ description: "- Developer for web platform." }]}
                    techs={[
                        {
                            imgSrc: "skills_javascript.svg",
                            techName: "JavaScript",
                        },
                        {
                            imgSrc: "skills_jquery.svg",
                            techName: "JQuery",
                        },
                        {
                            imgSrc: "skills_dynamodb.svg",
                            techName: "DynamoDB",
                        },
                        {
                            imgSrc: "skills_nodejs.svg",
                            techName: "Node.js",
                        },
                        {
                            imgSrc: "skills_git.svg",
                            techName: "Git",
                        },
                    ]}
                    isLast
                />
            </div>
            <ExperienceJob
                imgSrc="exp_gso.png"
                job="Fullstack Developer"
                company="General Services Office Iloilo"
                date="February 2023 - May 2023"
                hasNoBackground
            />
            <div className="grid grid-cols-1 gap-6">
                <ExperienceCard
                    project="Barangay Solid Waste Management System"
                    date="Feb 2023 - May 2023"
                    tasks={[
                        {
                            description:
                                "- Full-stack developer for statistical waste reporting system.",
                        },
                    ]}
                    techs={[
                        {
                            imgSrc: "skills_react.svg",
                            techName: "React.js",
                        },
                        {
                            Icon: RiNextjsFill,
                            imgSrc: `${
                                theme === "dark"
                                    ? "skills_nextjsDark.svg"
                                    : "skills_nextjsLight.svg"
                            }`,
                            techName: "Next.js",
                        },
                        {
                            imgSrc: "skills_nodejs.svg",
                            techName: "Node.js",
                        },
                        {
                            imgSrc: "skills_firebase.svg",
                            techName: "Firebase",
                        },
                        {
                            imgSrc: "skills_mysql.svg",
                            techName: "MySQL",
                        },
                    ]}
                    isLast
                />
            </div>
        </Wrapper>
    );
};

export default Experience;
