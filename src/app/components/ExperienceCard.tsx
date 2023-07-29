import React from "react";
import Image from "next/image";

const ExperienceCard = ({
    imgSrc,
    job,
    company,
    date,
    task1,
    task2,
    noTask2,
}: any) => {
    return (
        <div className="px-8 py-10 bg-white rounded-md shadow-custom md:max-w-xs dark:shadow-xl  dark:border-zinc-800 dark:bg-[#2A3247]">
            <div className="flex flex-col items-center mb-8">
                <Image
                    className=""
                    src={`/img/${imgSrc}`}
                    alt=""
                    width={110}
                    height={110}
                    unoptimized
                />
            </div>
            <div className="text-left">
                <div className="text-center">
                    <h2 className="mb-1 text-2xl font-bold">{job}</h2>
                    <h3 className="">{company}</h3>
                    <p className="mt-4 text-sm uppercase text-zinc-600 dark:text-zinc-300">
                        {date}
                    </p>
                </div>
                <hr className="my-4 dark:border-zinc-800" />
                <ul className="space-y-2 list-disc list-inside text-zinc-600 dark:text-zinc-300">
                    <li>{task1}</li>
                    {noTask2 ? <></> : <li>{task2}</li>}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
