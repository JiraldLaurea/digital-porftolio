export type Tech = {
    imgSrc: string;
    techName: string;
};

export type Task = {
    description: string;
};

export type Skill = {
    imgSrc: string;
    techName: string;
    level: number;
    mounted?: boolean;
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
