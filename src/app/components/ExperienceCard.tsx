import { Tech } from "../Types/index";
import Badge from "./Badge";
import TechStack from "./TechStack";

type ExperienceCardProps = {
    project: string;
    roles?: string[];
    date: string;
    tasks?: string[];
    techs?: Tech[];
};

const ExperienceCard = ({
    project,
    roles,
    date,
    tasks,
    techs,
}: ExperienceCardProps) => {
    return (
        <div className="pb-6 pl-3 space-y-4">
            <div className="space-y-1">
                <p className="font-semibold">{project}</p>
                <div className="flex items-center divide-x text-sm dark:divide-secondary-text-dark gap-2">
                    {roles?.map((role, index) => (
                        <p key={index} className="pr-2">
                            {role}
                        </p>
                    ))}
                </div>
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
