import { DiJqueryLogo } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
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
} from "../components/icons/Icons";

export const awsProjects = [
    {
        project: "Property Management System Migration",
        roles: ["API Engineer", "Integration Tester"],
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
        roles: ["Web Developer"],
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
        roles: ["Mobile Developer", "UI/UX Designer"],
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
        roles: ["Web Developer"],
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

export const gsoProjects = [
    {
        project: "Barangay Solid Waste Management System",
        roles: ["Fullstack Developer"],
        date: "Feb 2023 - May 2023",
        tasks: [
            "Designed and developed an end-to-end web-based Barangay Solid Waste Management System as the sole developer during an OJT engagement",
            "Built a full-stack solution using React.js and Next.js for the frontend, and a RESTful backend with Node.js and Express.js",
            "Designed relational database models with Sequelize ORM and MySQL, implementing authentication, data management, and reporting features",
        ],

        techs: [
            {
                Icon: ReactIcon,
                imgSrc: "skills_react.svg",
                techName: "React.js",
            },
            {
                Icon: RiNextjsFill,
                imgSrc: "skills_nextjsLight.svg",
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
