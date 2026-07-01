import { DiJqueryLogo } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAndroid,
  SiJetpackcompose,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiSqlite,
} from "react-icons/si";
import {
  CsharpIcon,
  DynamoIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  JavascriptIcon,
  KotlinIcon,
  MuiIcon,
  NodejsIcon,
  OracleIcon,
  ReactIcon,
  SqlIcon,
  TailwindIcon,
  TypescriptIcon,
  XamarinIcon,
} from "../components/icons/Icons";

const reactTech = {
  Icon: ReactIcon,
  imgSrc: "skills_react.svg",
  techName: "React",
};
const nextTech = {
  Icon: RiNextjsFill,
  imgSrc: "skills_nextjsLight.svg",
  techName: "Next.js",
};
const typescriptTech = {
  Icon: TypescriptIcon,
  imgSrc: "skills_typescript.svg",
  techName: "TypeScript",
};
const tailwindTech = {
  Icon: TailwindIcon,
  imgSrc: "skills_tailwindcss.svg",
  techName: "Tailwind CSS",
};
const prismaTech = { Icon: SiPrisma, imgSrc: "", techName: "Prisma" };
const muiTech = {
  Icon: MuiIcon,
  imgSrc: "skills_materialUI.svg",
  techName: "MUI",
};
const nodeTech = {
  Icon: NodejsIcon,
  imgSrc: "skills_nodejs.svg",
  techName: "Node.js",
};
const openaiTech = { Icon: SiOpenai, imgSrc: "", techName: "OpenAI" };

export const qroadProjects = [
  {
    project: "GameLead Radar — AI Lead Discovery Platform",
    roles: ["AI Engineer", "Fullstack Developer"],
    date: "June 2026",
    tasks: [
      "Built an AI-powered platform that crawls game-industry news and RSS feeds to surface pre-launch sales opportunities (CBT, OBT, pre-registration, soft launch) for QROAD",
      "Engineered an automated pipeline that uses OpenAI to analyze articles and score/grade leads, then enriches contact emails and automatically sends outreach emails to qualified leads via SMTP with daily limits and scheduling windows",
    ],
    techs: [
      nextTech,
      reactTech,
      typescriptTech,
      nodeTech,
      prismaTech,
      { Icon: SiSqlite, imgSrc: "", techName: "SQLite" },
      openaiTech,
      muiTech,
    ],
  },
  {
    project: "QROAD AI SNS Manager",
    roles: ["AI Engineer", "Fullstack Developer"],
    date: "June 2026",
    tasks: [
      "Developed an internal AI social media manager for Facebook, Instagram, and TikTok that uses OpenAI to generate platform-specific post drafts (captions, hashtags, image text, and video scripts) with quality scoring",
      "Built a human-in-the-loop approve-before-publish workflow with approval queues, scheduling, and reporting on Prisma with SQLite locally and Turso/libSQL for hosted deployments",
    ],
    techs: [
      nextTech,
      reactTech,
      typescriptTech,
      openaiTech,
      prismaTech,
      { Icon: SiSqlite, imgSrc: "", techName: "Turso / libSQL" },
      tailwindTech,
    ],
  },
  {
    project: "BizFlow Voucher Engine",
    roles: ["Fullstack Developer"],
    date: "June 2026",
    tasks: [
      "Built a performance-trackable voucher marketing engine that turns ad/QR engagement into a measurable landing-page-to-redemption funnel",
      "Engineered a concurrency-safe issuance flow using PostgreSQL row locking to prevent overselling, with JWT auth, role-based access, and pluggable SMS delivery",
    ],
    techs: [
      nextTech,
      reactTech,
      typescriptTech,
      { Icon: SiPostgresql, imgSrc: "", techName: "PostgreSQL" },
      prismaTech,
      tailwindTech,
    ],
  },
  {
    project: "iLoveJ Comment-to-DM Voucher Campaign",
    roles: ["Fullstack Developer"],
    date: "June 2026",
    tasks: [
      "Built the API backend and admin dashboard for a Meta comment-to-DM voucher promo integrated with a Shopify storefront",
      "Implemented atomic tiered-voucher assignment from limited inventory and SMS delivery, secured with rate limiting and HMAC-verified webhooks; deployed on Vercel",
    ],
    techs: [
      nextTech,
      reactTech,
      typescriptTech,
      { Icon: SiSqlite, imgSrc: "", techName: "Turso / libSQL" },
      tailwindTech,
    ],
  },
  {
    project: "Internal Business Lead Collection",
    roles: ["Fullstack Developer"],
    date: "June 2026",
    tasks: [
      "Built a lead-generation tool that collects business leads from Google Maps by location and category, with duplicate detection and Excel/CSV export",
      "Added email and SMS outreach to collected leads, including automatic scheduled email sending with contact-email discovery, daily limits, and SMTP delivery",
    ],
    techs: [nextTech, reactTech, typescriptTech, nodeTech, prismaTech, muiTech],
  },
  {
    project: "BasketballScorer (Android)",
    roles: ["Mobile Developer"],
    date: "June 2026",
    tasks: [
      "Built and packaged a native Android basketball scoring app for public release on Google Play, featuring live CameraX recording and an on-screen score overlay",
      "Auto-generated scoring highlight clips and SRT subtitles via on-device MediaMuxer processing, with Room storage, Play Billing subscriptions, and AdMob ads",
    ],
    techs: [
      {
        Icon: KotlinIcon,
        imgSrc: "skills_kotlin.svg",
        techName: "Kotlin",
      },
      { Icon: SiJetpackcompose, imgSrc: "", techName: "Jetpack Compose" },
      { Icon: SiAndroid, imgSrc: "", techName: "Android" },
      { Icon: SiSqlite, imgSrc: "", techName: "Room" },
    ],
  },
];

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
