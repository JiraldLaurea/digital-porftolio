"use client";
import Image from "next/image";
import React from "react";

const SkillsGrid = ({ imgSrc, text }: any) => {
    return (
        <div className="flex items-center h-full py-6 px-8 100 bg-white shadow-custom-sm dark:border-transparent rounded-md dark:shadow-xl  dark:bg-[#2A3247]">
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
