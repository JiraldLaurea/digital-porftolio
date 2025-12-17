import React from "react";

type ExperienceCardProps = {
    project: string;
    date: string;
    task1?: string;
    task2?: string;
    task3?: string;
};

const ExperienceCard = ({
    project,
    date,
    task1,
    task2,
    task3,
}: ExperienceCardProps) => {
    return (
        <div className="dark:bg-[#2A3247] border bg-white p-8 space-y-4 rounded-md dark:border-zinc-800">
            <div>
                <h2 className="text-xl font-medium">{project}</h2>
                <h3 className="text-zinc-600 dark:text-zinc-300">{date}</h3>
            </div>
            <div className="pl-3 space-y-3">
                <p>{task1}</p>
                {task2 && <p>{task2}</p>}
                {task3 && <p>{task3}</p>}
            </div>
        </div>
    );
};

export default ExperienceCard;
