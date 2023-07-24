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
        <div className="flex flex-col items-start mb-12 md:flex-row">
            <Image
                className="w-full mb-6 mr-0 border rounded-lg md:mb-0 md:mr-6 dark:shadow-none dark:border-transparent md:w-[450px]"
                src={`/img/${imgSrc}`}
                alt=""
                width={450}
                height={450}
                unoptimized
            />
            <div className="w-full text-left">
                <h1 className="mb-2 text-xl font-semibold">{name}</h1>
                <p>{description}</p>
                <div className="mt-4 mb-6 text-zinc-600 dark:text-zinc-300">
                    <p className="mb-2 text-sm uppercase">Tech stack</p>
                    {isClient == true && (
                        <div className="flex items-center">
                            {technologies?.map((technology: any, idx: any) => (
                                <Image
                                    key={idx}
                                    className="mr-2 dark:shadow-none"
                                    src={`/img/${technology}`}
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <a href={link} target="_blank">
                    <button className="w-full px-5 py-2 text-white bg-blue-600 rounded-md md:w-auto">
                        Visit
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ProjectsCard;
