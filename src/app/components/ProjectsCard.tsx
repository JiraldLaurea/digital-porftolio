"use client";
import Image from "next/image";
import { memo } from "react";
import { Tech } from "../Types/index";
import Button from "./Button";
import TechStack from "./TechStack";

type ProjectsCardProps = {
    imgSrc: string;
    name: string;
    description: string;
    link: string;
    sourceCode: string;
    techs?: Tech[];
    index: number;
};

const ProjectsCard = memo(
    ({
        imgSrc,
        name,
        description,
        link,
        sourceCode,
        techs,
        index,
    }: ProjectsCardProps) => {
        return (
            <div className="flex flex-col w-full h-full p-5 bg-white md:p-6 md:flex-row dark:border-zinc-700 dark:bg-primary1-dark">
                <div className="relative md:h-full flex-none w-full border rounded-md grow md:max-w-81.25 lg:max-w-lg md2:max-w-md lg2:max-w-150 aspect-video dark:border-zinc-700">
                    <Image
                        src={`/img/${imgSrc}`}
                        alt=""
                        className="object-cover h-full rounded-md dark:bg-white"
                        quality={50}
                        priority={index === 0}
                        fill
                        sizes="75vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw,"
                    />
                </div>

                <div className="flex flex-col gap-4 pt-4 text-left grow md:pt-0 md:pl-4">
                    <div>
                        <p className="mb-2 font-medium lg:text-lg">{name}</p>
                        <p className="text-sm lg:text-base">{description}</p>
                    </div>

                    <div className="grow">
                        <TechStack techs={techs} />
                    </div>

                    <div
                        className={`grid mt-2 gap-2 sm:text-left lg:flex ${
                            sourceCode ? "grid-cols-2" : "grid-cols-1"
                        }`}
                    >
                        <Button
                            link={link}
                            text="Visit Page"
                            isPrimary
                            isSmaller
                        />
                        {sourceCode && (
                            <Button
                                link={sourceCode}
                                text="Source Code"
                                isSmaller
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

export default ProjectsCard;
