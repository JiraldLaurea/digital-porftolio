import { Task, Tech } from "../Types/index";
import Badge from "./Badge";
import TechStack from "./TechStack";

type ExperienceCardProps = {
    project: string;
    role?: string;
    date: string;
    tasks?: string[];
    techs?: Tech[];
    isLast?: boolean;
};

const ExperienceCard = ({
    project,
    role,
    date,
    tasks,
    techs,
    isLast,
}: ExperienceCardProps) => {
    return (
        <div className="pb-6 pl-3 space-y-4">
            <div className="space-y-1">
                <p className="font-semibold">{project}</p>
                {role && <p className="text-sm">{role}</p>}
                <p className="text-sm text-gray-500 dark:text-secondary-text-dark">
                    {date}
                </p>
            </div>

            <ul className="space-y-2 text-sm list-disc list-inside">
                {tasks?.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

            <TechStack techs={techs} />
        </div>
    );
};

export default ExperienceCard;
