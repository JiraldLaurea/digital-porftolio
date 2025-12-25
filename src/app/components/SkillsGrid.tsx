"use client";
import Image from "next/image";
import { Skill } from "../Types/index";
import SkillsLevel from "./SkillsLevel";

const SkillsGrid = ({ imgSrc, techName, level, mounted }: Skill) => {
    return (
        <>
            {mounted ? (
                <div className="flex flex-col items-center justify-center px-2 border rounded-md h-34 sm:px-4 sm:h-44 100 bg-primary4 dark:border-zinc-700 dark:bg-primary4-dark">
                    <div className={`relative w-7 h-7 sm:w-10 sm:h-10 mb-1.5`}>
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
                    </div>
                    <p className="text-sm sm:text-base">{techName}</p>
                    <SkillsLevel level={level} />
                </div>
            ) : (
                <div className="w-full border rounded-md h-34 sm:h-44 bg-primary4 dark:bg-primary4-dark animate-pulse dark:border-zinc-700" />
            )}
        </>
    );
};

export default SkillsGrid;
