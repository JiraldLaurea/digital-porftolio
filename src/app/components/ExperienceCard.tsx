import TechStack from "./TechStack";
import { Tech, Task } from "../Types/index";

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
            className={`flex flex-col p-6 space-y-5 bg-white border border-t-0 dark:bg-primary1-dark dark:border-zinc-700 ${
                isLast && "rounded-b-md"
            }`}
        >
            <div>
                <h2 className="text-lg font-medium">{project}</h2>
                <h3 className="text-sm text-zinc-600 dark:text-zinc-300">
                    {date}
                </h3>
            </div>
            <div className="space-y-2">
                {tasks?.map((task, index) => (
                    <p key={index}>{task.description}</p>
                ))}
            </div>
            <TechStack techs={techs} />
        </div>
    );
};

export default ExperienceCard;
