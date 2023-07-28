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
        <div className="flex flex-col-reverse items-center p-6 mb-6 bg-white border rounded-md dark:border-zinc-800 md:flex-row dark:bg-zinc-950">
            <div className="w-full text-left">
                <h1 className="mb-2 text-2xl font-bold">{name}</h1>
                <p className="">{description}</p>
                <div className="mt-4 mb-6 text-zinc-600 dark:text-zinc-300">
                    <p className="mb-2 text-sm uppercase">Tech stack</p>
                    {isClient == true && (
                        <div className="flex items-center">
                            {technologies?.map((technology: any, idx: any) => (
                                <Image
                                    key={idx}
                                    className="mr-2"
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
                    <button className="w-full px-5 py-2 text-white bg-blue-500 rounded-md dark:bg-blue-700 md:w-auto">
                        Visit
                    </button>
                </a>
            </div>
            <Image
                className="w-full mb-6 mr-0 border rounded-md md:mb-0 md:ml-6 dark:border-transparent md:w-[450px]"
                src={`/img/${imgSrc}`}
                alt=""
                width={450}
                height={450}
                unoptimized
            />
        </div>
    );
};

export default ProjectsCard;
