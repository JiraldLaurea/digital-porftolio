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
import { Timeline } from "primereact/timeline";

const Experience = () => {
    const { theme }: any = useTheme();

    const awsProjects = [
        {
            project: "Property Management System Migration",
            role: "API Engineer / Integration Tester",
            date: "August 2024 - October 2025",
            tasks: [
                "Developed and maintained REST APIs for PMS web migration",
                "Fixed production bugs and supported integration testing",
                "Wrote technical documentation and migration evidence",
                "Contributed to converting a desktop PMS into a web-based system",
            ],
            techs: [
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
                { Icon: SqlIcon, imgSrc: "skills_sql.svg", techName: "SQL" },
                {
                    Icon: OracleIcon,
                    imgSrc: "skills_oracle.svg",
                    techName: "Oracle",
                },
            ],
        },
        {
            project: "Quality Analysis & Root Cause Visualization Tool",
            role: "Web Developer",
            date: "July 2024 - August 2024",
            tasks: [
                "Developed a web-based quality analysis tool for an offshore client to support structured root cause analysis",
                "Implemented interactive Pareto Charts and Fishbone (Ishikawa) Diagrams for data-driven decision making",
                "Built reusable React components to visualize and manage quality metrics",
            ],
            techs: [
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
            ],
        },
        {
            project: "Location-Based Promotional Mobile Application",
            role: "Web Developer",
            date: "May 2024 - July 2024",
            tasks: [
                "Assisted in developing a BLE-enabled mobile application for delivering location-based promotional content",
                "Designed and prototyped UI/UX flows using Figma",
                "Implemented application logic using C# and Xamarin for cross-platform mobile support",
            ],
            techs: [
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
            ],
        },
        {
            project: "Cell Coverage Web Development Project",
            role: "Web Developer",
            date: "March 2024 - April 2024",
            tasks: [
                "Assisted in the development of a web platform for visualizing and managing cellular coverage data",
                "Implemented frontend functionality using JavaScript and jQuery",
            ],
            techs: [
                {
                    Icon: JavascriptIcon,
                    imgSrc: "skills_javascript.svg",
                    techName: "JavaScript",
                },
                {
                    Icon: DiJqueryLogo,
                    imgSrc: "skills_jquery.svg",
                    techName: "jQuery",
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
                { Icon: GitIcon, imgSrc: "skills_git.svg", techName: "Git" },
            ],
        },
    ];

    const gsoProjects = [
        {
            project: "Barangay Solid Waste Management System",
            role: "Fullstack Developer",
            date: "Feb 2023 - May 2023",
            tasks: [
                "Designed and developed an end-to-end web-based Barangay Solid Waste Management System as the sole developer during an OJT engagement",
                ,
                "Built the frontend using React.js and Next.js, implementing responsive UI components and data-driven views",
                "Developed a RESTful backend using Node.js and Express.js, handling business logic and API routing",
                "Designed and implemented database models using Sequelize ORM, including relationships for waste records, barangays, users, schedules, and reports",
                "Integrated the backend with a MySQL database for persistent storage and statistical waste reporting",
                "Implemented authentication and request validation using custom Express middleware",
            ],

            techs: [
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
            ],
        },
    ];

    <ExperienceCard
        project="Barangay Solid Waste Management System"
        date="Feb 2023 - May 2023"
        tasks={["Full-stack developer for statistical waste reporting system."]}
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
    />;

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
            <div className="p-4 bg-white border-b border-x rounded-b-3xl sm:p-6 dark:bg-primary1-dark dark:border-zinc-700">
                <Timeline
                    value={awsProjects}
                    align="left"
                    marker={() => (
                        <div className="flex items-center justify-center w-4 h-4 border-2 rounded-full dark:border-zinc-700" />
                    )}
                    content={(item) => (
                        <ExperienceCard
                            project={item.project}
                            role={item.role}
                            date={item.date}
                            tasks={item.tasks}
                            techs={item.techs}
                        />
                    )}
                />
            </div>

            <ExperienceJob
                imgSrc="exp_gso.png"
                job="Fullstack Developer"
                company="General Services Office Iloilo"
                date="February 2023 - May 2023"
                hasNoBackground
            />
            <div className="p-4 bg-white border-b border-x rounded-b-3xl sm:p-6 dark:bg-primary1-dark dark:border-zinc-700">
                <Timeline
                    value={gsoProjects}
                    align="left"
                    marker={() => (
                        <div className="flex items-center justify-center w-4 h-4 border-2 rounded-full dark:border-zinc-700" />
                    )}
                    content={(item) => (
                        <ExperienceCard
                            project={item.project}
                            role={item.role}
                            date={item.date}
                            tasks={item.tasks}
                            techs={item.techs}
                        />
                    )}
                />
            </div>
        </Wrapper>
    );
};

export default Experience;
