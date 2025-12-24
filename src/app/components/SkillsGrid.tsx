"use client";
import Image from "next/image";
import { Skill } from "../Types/index";
import SkillsLevel from "./SkillsLevel";

const SkillsGrid = ({ imgSrc, techName, level, mounted }: Skill) => {
    return (
        <>
            {mounted ? (
                <div className="flex flex-col items-center justify-center px-4 border rounded-md h-44 100 bg-primary4 dark:border-zinc-700 dark:bg-primary4-dark">
                    <div className={`relative w-10 h-10 mb-1.5`}>
                        <Image
                            src={`/img/${imgSrc}`}
                            alt=""
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <p>{techName}</p>
                    <SkillsLevel level={level} />
                </div>
            ) : (
                <div className="w-full border rounded-md h-44 bg-primary4 dark:bg-primary4-dark animate-pulse dark:border-zinc-700" />
            )}
        </>
    );
};

export default SkillsGrid;
