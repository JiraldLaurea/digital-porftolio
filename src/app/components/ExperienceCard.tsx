import { Task, Tech } from "../Types/index";
import TechStack from "./TechStack";

type ExperienceCardProps = {
    project: string;
    date: string;
    tasks?: Task[];
    techs?: Tech[];
    isLast?: boolean;
};

const ExperienceCard = ({
    project,
    date,
    tasks,
    techs,
    isLast,
}: ExperienceCardProps) => {
    return (
        <div
            className={`flex flex-col p-4 sm:p-6 space-y-5 bg-white border border-t-0 dark:bg-primary1-dark dark:border-zinc-700 ${
                isLast && "rounded-b-3xl"
            }`}
        >
            <div>
                <h2 className="text-sm font-medium sm:text-base md:text-lg">
                    {project}
                </h2>
                <h3 className="text-xs xs:text-sm text-zinc-600 dark:text-secondary-text-dark">
                    {date}
                </h3>
            </div>
            <div className="space-y-2 text-sm sm:text-base">
                {tasks?.map((task, index) => (
                    <p key={index}>{task.description}</p>
                ))}
            </div>
            <TechStack techs={techs} />
        </div>
    );
};

export default ExperienceCard;
