import { Tech } from "../Types/index";

type TechStackProps = {
    techs?: Tech[];
};

const TechStack = ({ techs }: TechStackProps) => {
    if (!techs || techs.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2">
            {techs.map((tech, index) => (
                <span
                    key={index}
                    className="px-2.5 py-1 font-mono text-xs rounded-md border bg-primary3 text-primary-text/75 dark:bg-primary3-dark dark:text-zinc-300 dark:border-zinc-700"
                >
                    {tech.techName}
                </span>
            ))}
        </div>
    );
};

export default TechStack;
