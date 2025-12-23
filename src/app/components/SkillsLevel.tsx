import SkillsLevelPoint from "./SkillsLevelPoint";

type SkillsLevelProps = {
    level: number;
};

const SkillsLevel = ({ level }: SkillsLevelProps) => {
    return (
        <div className="w-full mt-6">
            <div className="flex items-center mb-1">
                <SkillsLevelPoint level={level} order={1} />
                <SkillsLevelPoint level={level} order={2} />
                <SkillsLevelPoint level={level} order={3} />
            </div>
            <div className="grid w-full grid-cols-3 text-xs text-zinc-400 dark:text-zinc-400">
                <p
                    className={`text-left ${
                        level == 1 && "font-medium text-black dark:text-white"
                    }`}
                >
                    Beginner
                </p>
                <p
                    className={`text-center ${
                        level == 2 && "font-medium text-black dark:text-white"
                    }`}
                >
                    Intermediate
                </p>
                <p
                    className={`text-right ${
                        level == 3 && "font-medium text-black dark:text-white"
                    }`}
                >
                    Advanced
                </p>
            </div>
        </div>
    );
};

export default SkillsLevel;
