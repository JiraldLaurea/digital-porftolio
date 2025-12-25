import SkillsLevelPoint from "./SkillsLevelPoint";

type SkillsLevelProps = {
    level: number;
};

const SkillsLevel = ({ level }: SkillsLevelProps) => {
    return (
        <div className="w-full mt-4">
            <div className="flex items-center mb-1">
                <SkillsLevelPoint level={level} order={1} />
                <SkillsLevelPoint level={level} order={2} />
                <SkillsLevelPoint level={level} order={3} />
            </div>
            <div className="grid w-full grid-cols-3 text-xs sm:text-sm text-zinc-400 dark:text-zinc-400">
                <small
                    className={`text-left ${
                        level == 1 && "font-medium text-black dark:text-white"
                    }`}
                >
                    Beginner
                </small>
                <small
                    className={`text-center ${
                        level == 2 && "font-medium text-black dark:text-white"
                    }`}
                >
                    Intermediate
                </small>
                <small
                    className={`text-right ${
                        level == 3 && "font-medium text-black dark:text-white"
                    }`}
                >
                    Advanced
                </small>
            </div>
        </div>
    );
};

export default SkillsLevel;
