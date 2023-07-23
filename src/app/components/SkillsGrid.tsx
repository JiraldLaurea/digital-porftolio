"use client";
import Image from "next/image";
import React from "react";

const SkillsGrid = ({ imgSrc, text }: any) => {
    return (
        <div className="flex items-center h-full p-5 border rounded-lg dark:border-zinc-800">
            <Image
                className="mr-4 dark:shadow-none"
                src={`/img/${imgSrc}`}
                alt=""
                width={40}
                height={40}
                onLoadingComplete={(e) => console.log("TEST", e)}
            />
            <p>{text}</p>
        </div>
    );
};

export default SkillsGrid;
