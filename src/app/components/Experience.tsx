import { useTheme } from "next-themes";
import { DiJqueryLogo } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import ExperienceCard from "./ExperienceCard";
import ExperienceJob from "./ExperienceJob";
import Wrapper from "./Wrapper";
import {
    CsharpIcon,
    DynamoIcon,
    FigmaIcon,
    FirebaseIcon,
    GitIcon,
    JavascriptIcon,
    NodejsIcon,
    OracleIcon,
    ReactIcon,
    SqlIcon,
    TypescriptIcon,
    XamarinIcon,
} from "./icons/Icons";

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
                            Icon: CsharpIcon,
                            imgSrc: "skills_csharp.svg",
                            techName: "C#",
                        },
                        {
                            Icon: SqlIcon,
                            imgSrc: "skills_sql.svg",
                            techName: "Sql",
                        },
                        {
                            Icon: OracleIcon,
                            imgSrc: "skills_oracle.svg",
                            techName: "Oracle",
                        },
                    ]}
                />
                <ExperienceCard
                    project="Quality Analysis & Root Cause Visualization Tool"
                    date="July 2024 - August 2024"
                    tasks={[
                        {
                            description:
                                "- Web development for offshore clients.",
                        },
                    ]}
                    techs={[
                        {
                            Icon: ReactIcon,
                            imgSrc: "skills_react.svg",
                            techName: "React",
                        },
                        {
                            Icon: JavascriptIcon,
                            imgSrc: "skills_javascript.svg",
                            techName: "JavaScript",
                        },
                        {
                            Icon: NodejsIcon,
                            imgSrc: "skills_nodejs.svg",
                            techName: "Node.js",
                        },
                    ]}
                />
                <ExperienceCard
                    project="Location-Based Promotional Mobile Application"
                    date="May 2024 - July 2024"
                    tasks={[
                        {
                            description:
                                "- Mobile development & Figma design for BLE-enabled promo app.",
                        },
                    ]}
                    techs={[
                        {
                            Icon: CsharpIcon,
                            imgSrc: "skills_csharp.svg",
                            techName: "C#",
                        },
                        {
                            Icon: XamarinIcon,
                            imgSrc: "skills_xamarin.svg",
                            techName: "Xamarin",
                        },
                        {
                            Icon: FigmaIcon,
                            imgSrc: "skills_figma.svg",
                            techName: "Figma",
                        },
                    ]}
                />
                <ExperienceCard
                    project="Cell Coverage Web Development Project"
                    date="March 2024 - April 2024"
                    tasks={[{ description: "- Developer for web platform." }]}
                    techs={[
                        {
                            Icon: JavascriptIcon,
                            imgSrc: "skills_javascript.svg",
                            techName: "JavaScript",
                        },
                        {
                            Icon: DiJqueryLogo,
                            imgSrc: "skills_jquery.svg",
                            techName: "JQuery",
                        },
                        {
                            Icon: DynamoIcon,
                            imgSrc: "skills_dynamodb.svg",
                            techName: "DynamoDB",
                        },
                        {
                            Icon: NodejsIcon,
                            imgSrc: "skills_nodejs.svg",
                            techName: "Node.js",
                        },
                        {
                            Icon: GitIcon,
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
                            Icon: ReactIcon,
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
                            Icon: NodejsIcon,
                            imgSrc: "skills_nodejs.svg",
                            techName: "Node.js",
                        },
                        {
                            Icon: FirebaseIcon,
                            imgSrc: "skills_firebase.svg",
                            techName: "Firebase",
                        },
                        {
                            Icon: GrMysql,
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
