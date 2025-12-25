type SkillsLevelPointProps = {
    level: number;
    order: number;
};

const SkillsLevelPoint = ({ level, order }: SkillsLevelPointProps) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div
                    className={`z-10 flex items-center justify-center p-1 sm:p-2 rounded-full ${
                        order == 1 ||
                        (level >= 2 && order == 2) ||
                        (level == 3 && order == 3)
                            ? ` ${
                                  (level == 1 &&
                                      "bg-yellow-500 dark:bg-yellow-600") ||
                                  (level == 2 &&
                                      "bg-blue-500 dark:bg-blue-600") ||
                                  (level == 3 &&
                                      "bg-green-500 dark:bg-green-600")
                              }`
                            : "dark:bg-primary5-dark bg-gray-300"
                    }`}
                >
                    <div
                        className={`w-4 h-4 border-2 0 rounded-full flex items-center justify-center ${
                            order == 1 ||
                            (level >= 2 && order == 2) ||
                            (level == 3 && order == 3)
                                ? "border-white"
                                : "border-primary6 dark:border-primary6-dark"
                        }`}
                    >
                        <div
                            className={`w-2 h-2 rounded-full ${
                                order == 1 ||
                                (level >= 2 && order == 2) ||
                                (level == 3 && order == 3)
                                    ? "bg-white"
                                    : "bg-primary6 dark:bg-primary6-dark"
                            }`}
                        />
                    </div>
                </div>
            </div>
            {order < 3 && (
                <div
                    className={`w-full h-1 outline-2 sm:outline-4  ${
                        (level >= 2 && order == 1) || (level == 3 && order == 2)
                            ? `dark:bg-blue-600  dark:outline-blue-600
                            ${
                                (level == 1 &&
                                    "bg-yellow-500 outline-yellow-500 dark:outline-yellow-600 dark:bg-yellow-600") ||
                                (level == 2 &&
                                    "bg-blue-500 outline-blue-500 dark:outline-blue-600 dark:bg-blue-600") ||
                                (level == 3 &&
                                    "bg-green-500 outline-green-500 dark:outline-green-600 dark:bg-green-600")
                            }
                            `
                            : "dark:bg-primary5-dark bg-primary5 outline-primary5 dark:outline-primary5-dark"
                    }`}
                />
            )}
        </>
    );
};

export default SkillsLevelPoint;
