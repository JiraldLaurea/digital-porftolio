"use client";
import Image from "next/image";
import React from "react";

const SkillsGrid = ({ imgSrc, darkModeImgSrc, text }: any) => {
    return (
        <div className="flex items-center h-full py-6 px-8 100 bg-white shadow-custom-sm dark:border-transparent rounded-md dark:shadow-xl  dark:bg-[#2A3247]">
            {darkModeImgSrc && (
                <>
                    <div className="relative w-10 h-10 mr-4 dark:hidden">
                        <Image
                            src={`/img/${imgSrc}`}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="relative hidden w-10 h-10 mr-4 dark:block">
                        <Image
                            src={`/img/${darkModeImgSrc}`}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </>
            )}

            {!darkModeImgSrc && (
                <div className="relative w-10 h-10 mr-4">
                    <Image
                        src={`/img/${imgSrc}`}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            )}

            <p>{text}</p>
        </div>
    );
};

export default SkillsGrid;
