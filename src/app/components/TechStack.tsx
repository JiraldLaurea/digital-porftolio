import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Tech } from "../Types/index";

type TechStackProps = {
    techs?: Tech[];
};

const TechStack = ({ techs }: TechStackProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
            <h3 className="mb-1 text-xs lg:text-sm text-zinc-600 dark:text-zinc-300">
                Tech Stack
            </h3>
            <div className="flex flex-wrap space-x-2 space-y-2">
                {techs?.map((tech, index) => (
                    <React.Fragment key={index}>
                        {mounted ? (
                            <div className="flex items-center h-8 px-2 border rounded-md lg:h-10 lg:px-3 bg-gray-50 dark:bg-primary3-dark dark:border-zinc-700">
                                <div className="relative w-4.5 h-4.5 mr-2 lg:w-6 lg:h-6">
                                    <Image
                                        src={`/img/${tech.imgSrc}`}
                                        alt={tech.techName}
                                        fill
                                        sizes="100vw"
                                        style={{
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                                <p className="text-xs lg:text-sm text-zinc-600 dark:text-zinc-300">
                                    {tech.techName}
                                </p>
                            </div>
                        ) : (
                            <div className="w-20 h-10 border rounded-md bg-gray-50 dark:bg-primary3-dark dark:border-zinc-700 animate-pulse" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
