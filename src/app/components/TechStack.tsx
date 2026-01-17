import Image from "next/image";
import { Tech } from "../Types/index";

type TechStackProps = {
    techs?: Tech[];
};

const TechStack = ({ techs }: TechStackProps) => {
    return (
        <div>
            {techs && (
                <h3 className="mb-1 text-xs sm:text-sm text-gray-500 dark:text-secondary-text-dark">
                    Tech Stack
                </h3>
            )}
            <div className="flex flex-wrap gap-2">
                {techs?.map((tech, index) => {
                    const Icon = tech.Icon;

                    return (
                        <div
                            key={index}
                            className="flex items-center h-8 px-2 border rounded-md bg-primary3 lg:h-9 lg:px-2.5 dark:bg-primary3-dark dark:border-zinc-700"
                        >
                            <div className="relative w-4.5 h-4.5 mr-2 lg:w-5 lg:h-5">
                                {Icon ? (
                                    <Icon className="w-full h-full" />
                                ) : (
                                    <Image
                                        src={`/img/${tech.imgSrc}`}
                                        alt={tech.techName}
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                    />
                                )}
                            </div>
                            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                                {tech.techName}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechStack;
