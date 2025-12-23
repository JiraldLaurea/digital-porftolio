"use client";
import Image from "next/image";
import { Tech } from "../Types/index";
import TechStack from "./TechStack";

type ProjectsCardProps = {
    imgSrc: string;
    name: string;
    description: string;
    link: string;
    techs?: Tech[];
};

const ProjectsCard = ({
    imgSrc,
    name,
    description,
    link,
    techs,
}: ProjectsCardProps) => {
    // 160 x 90
    return (
        <div className="flex flex-col w-full h-full p-4 bg-white md:flex-row dark:border-zinc-700 dark:bg-primary1-dark">
            <div className="">
                <div className="relative w-full border rounded-md md:h-70 md:w-70 lg:w-90 lg2:h-auto lg2:w-110 aspect-video dark:border-zinc-700">
                    <Image
                        src={`/img/${imgSrc}`}
                        alt=""
                        fill
                        className="object-cover rounded-md"
                        quality={100}
                    />
                </div>
            </div>
            <div className="flex flex-col pt-4 space-y-2 text-left md:pl-4 grow">
                <div>
                    <p className="mb-2 font-medium lg:text-lg">{name}</p>
                    <p className="text-sm lg:text-base">{description}</p>
                </div>

                <div className="grow">
                    <TechStack techs={techs} />
                </div>

                <div className="flex space-x-2 text-sm lg:text-base">
                    <a href={link} target="_blank" className="w-full md:w-fit">
                        <button className="w-full h-10 px-4 text-white transition-colors rounded-md lg:h-12 lg:px-6 md:w-fit bg-accent dark:bg-accent-dark dark:hover:bg-accent-hovered-dark hover:bg-accent-hovered">
                            Visit Page
                        </button>
                    </a>
                    <a href={link} target="_blank" className="w-full md:w-fit">
                        <button className="w-full h-10 px-4 transition-colors border rounded-md lg:h-12 lg:px-6 md:w-fit hover:bg-gray-100 hover:dark:bg-primary3-dark dark:border-zinc-700 ">
                            Source Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
