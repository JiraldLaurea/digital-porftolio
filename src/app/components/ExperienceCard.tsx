import TechStack from "./TechStack";
import { Tech, Task } from "../Types/index";

type ExperienceCardProps = {
    project: string;
    date: string;
    tasks?: Task[];
    techs?: Tech[];
};

const ExperienceCard = ({
    project,
    date,
    tasks,
    techs,
}: ExperienceCardProps) => {
    return (
        <div className="dark:bg-[#2A3247] border bg-white p-7 space-y-5 rounded-md dark:border-zinc-700 flex flex-col">
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
