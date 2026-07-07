"use client";
import { Skill } from "../Types/index";

const LEVELS: Record<number, { label: string; percent: number }> = {
    1: { label: "Beginner", percent: 45 },
    2: { label: "Intermediate", percent: 68 },
    3: { label: "Advanced", percent: 90 },
};

const SkillsGrid = ({ techName, level }: Skill) => {
    const { label, percent } = LEVELS[level] ?? LEVELS[1];

    return (
        <div className="flex items-center justify-between p-5 bg-white dark:bg-primary1-dark">
            <div>
                <p className="font-medium">{techName}</p>
                <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
                    {label}
                </p>
            </div>
            <p className="font-mono text-sm text-accent">{percent}%</p>
        </div>
    );
};

export default SkillsGrid;
