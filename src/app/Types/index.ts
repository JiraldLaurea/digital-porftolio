import { IconType } from "react-icons";

export type Tech = {
    imgSrc: string;
    techName: string;
    Icon?: IconType;
};

export type Task = {
    description: string;
};

export type Skill = {
    imgSrc?: string;
    techName: string;
    level: number;
    Icon?: IconType;
};

export type ProjectType = "Website" | "UI Design";

export type Project = {
    projectType: ProjectType;
    imgSrc: string;
    name: string;
    description: string;
    link?: string;
    sourceCode?: string;
    figmaLink?: string;
    techs?: Tech[];
    index?: number;
};

export type ContactDetails = {
    Icon: IconType;
    header: string;
    detail: string;
};
