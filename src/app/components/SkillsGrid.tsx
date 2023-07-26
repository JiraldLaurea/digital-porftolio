"use client";
import Image from "next/image";
import React from "react";

const SkillsGrid = ({ imgSrc, text }: any) => {
    return (
        <div className="flex items-center h-full p-5 bg-white border rounded-md dark:border-zinc-800 dark:bg-zinc-950">
            <Image
                className="mr-4 dark:shadow-none"
                src={`/img/${imgSrc}`}
                alt=""
                width={40}
                height={40}
            />
            <p>{text}</p>
        </div>
    );
};

export default SkillsGrid;
