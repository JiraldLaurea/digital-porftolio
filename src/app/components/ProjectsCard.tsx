"use client";
import Image from "next/image";
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
};

const ProjectsCard = ({
    imgSrc,
    name,
    description,
    link,
    sourceCode,
    techs,
}: ProjectsCardProps) => {
    // 160 x 90
    return (
        <div className="flex flex-col w-full h-full p-4 bg-white md:flex-row dark:border-zinc-700 dark:bg-primary1-dark">
            <div className="">
                <div className="relative w-full border rounded-md md:h-70 md:w-85 lg:w-120 lg2:h-auto lg2:w-150 aspect-video dark:border-zinc-700">
                    <Image
                        src={`/img/${imgSrc}`}
                        alt=""
                        className="object-cover rounded-md"
                        quality={100}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <div className="flex flex-col pt-4 space-y-2 text-left md:pt-0 md:pl-4 grow">
                <div>
                    <p className="mb-2 font-medium lg:text-lg">{name}</p>
                    <p className="text-sm lg:text-base">{description}</p>
                </div>

                <div className="grow">
                    <TechStack techs={techs} />
                </div>

                <div className="flex space-x-2">
                    <Button link={link} text="Visit Page" isPrimary isSmaller />
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
};

export default ProjectsCard;
