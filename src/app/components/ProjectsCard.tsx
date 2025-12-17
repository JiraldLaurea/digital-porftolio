"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProjectsCard = ({
    imgSrc,
    name,
    description,
    link,
    technologies,
}: any) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="flex flex-col bg-white rounded-md border dark:border-zinc-800 dark:bg-[#2A3247]">
            <div className="border-b dark:border-zinc-700">
                <Image
                    className="object-cover w-full rounded-t-md border-transparent dark:brightness-90"
                    src={`/img/${imgSrc}`}
                    alt=""
                    width={450}
                    height={450}
                    quality={100}
                />
            </div>
            <div className="flex flex-col justify-between grow w-full p-4 text-left">
                <div>
                    <h1 className="mb-2 text-xl font-medium">{name}</h1>
                    <p className="dark:text-zinc-300">{description}</p>
                    <div className="mt-6 mb-10">
                        <p className="mb-2 text-sm font-light uppercase dark:text-zinc-300">
                            Tech stack
                        </p>
                        {isClient == true && (
                            <div className="flex items-center">
                                {technologies?.map(
                                    (technology: any, index: any) => (
                                        <Image
                                            key={index}
                                            className="mr-2"
                                            src={`/img/${technology}`}
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <a href={link} target="_blank" className="w-fit">
                    <button className="w-full px-5 py-2 text-white transition-colors rounded-md hover:bg-blue-600  bg-blue-700 md:w-auto">
                        Visit
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ProjectsCard;
