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
        <div className="px-8 py-12 border md:max-w-xs rounded-xl dark:border-zinc-800">
            <div className="flex flex-col mb-8">
                <Image
                    className="rounded-full"
                    src={`/img/${imgSrc}`}
                    alt=""
                    width={80}
                    height={80}
                />
            </div>
            <div className="text-left">
                <h2 className="text-lg font-semibold">{job}</h2>
                <h3 className="text-sm">{company}</h3>
                <p className="mt-4 text-sm uppercase text-zinc-600 dark:text-zinc-300">
                    {date}
                </p>
                <hr className="my-4 dark:border-zinc-800" />

                <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>{task1}</li>
                    {noTask2 ? <></> : <li>{task2}</li>}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
