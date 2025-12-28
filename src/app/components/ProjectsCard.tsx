"use client";
import Image from "next/image";
import { memo } from "react";
import { Project, Tech } from "../Types/index";
import Button from "./Button";
import TechStack from "./TechStack";

const ProjectsCard = memo(
    ({
        imgSrc,
        name,
        description,
        link,
        sourceCode,
        techs,
        index,
        figmaLink,
        projectType,
    }: Project) => {
        return (
            <div className="flex flex-col w-full h-full p-5 bg-white md:p-6 md:flex-row dark:border-zinc-700 dark:bg-primary1-dark">
                <div className="relative md:h-full flex-none w-full border rounded-md grow md:max-w-81.25 lg:max-w-lg md2:max-w-md lg2:max-w-150 aspect-video dark:border-zinc-700">
                    <Image
                        src={`/img/${imgSrc}`}
                        alt=""
                        className="object-cover h-full rounded-md"
                        quality={75}
                        priority={index === 0}
                        fill
                        sizes="100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw,"
                    />
                </div>

                <div className="flex flex-col gap-4 pt-4 text-left grow md:pt-0 md:pl-4">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-base font-medium sm:text-lg">
                                {name}
                            </p>
                            <p className="px-4 py-1 text-sm font-medium border rounded-full text-zinc-600 dark:text-zinc-300 bg-primary3 dark:bg-primary3-dark dark:border-zinc-700 w-fit">
                                {projectType}
                            </p>
                            {/* <p className="px-3 py-1 text-xs rounded-full sm:text-sm text-zinc-600 dark:text-red-500 bg-primary3 dark:bg-red-200 w-fit">
                                {projectType}
                            </p> */}
                        </div>
                        <p className="text-sm sm:text-base">{description}</p>
                    </div>

                    <div className="grow">
                        <TechStack techs={techs} />
                    </div>

                    <div
                        className={`grid mt-2 gap-2 sm:text-left lg:flex ${
                            sourceCode ? "grid-cols-2" : "grid-cols-1"
                        }`}
                    >
                        {link && (
                            <Button
                                link={link}
                                text="Live Demo"
                                isPrimary
                                isSmaller
                            />
                        )}

                        {sourceCode && (
                            <Button
                                link={sourceCode}
                                text="Source Code"
                                isSmaller
                            />
                        )}
                        {figmaLink && (
                            <Button
                                link={figmaLink}
                                text="Open in Figma"
                                isSmaller
                                isFigma
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

export default ProjectsCard;
