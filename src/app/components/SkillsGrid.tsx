"use client";
import Image from "next/image";
import { Skill } from "../Types/index";
import SkillsLevel from "./SkillsLevel";

const SkillsGrid = ({ imgSrc, techName, level, Icon }: Skill) => {
    return (
        <div className="flex flex-col items-center justify-center px-6 border rounded-3xl h-40 sm:px-6 sm:h-46.75 100 bg-primary4 dark:border-zinc-700 dark:bg-primary4-dark">
            <div className={`relative w-7 h-7 sm:w-10 sm:h-10 mb-1.5`}>
                {Icon ? (
                    <Icon className="w-full h-full" />
                ) : (
                    <Image
                        src={`/img/${imgSrc}`}
                        alt=""
                        fill
                        quality={100}
                        sizes="100vw"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                )}
            </div>
            <p className="text-sm sm:text-base">{techName}</p>
            <SkillsLevel level={level} />
        </div>
    );
};

export default SkillsGrid;
