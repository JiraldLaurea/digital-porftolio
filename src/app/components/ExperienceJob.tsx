import Image from "next/image";
import React from "react";

type ExperienceJobProps = {
    imgSrc: string;
    job: string;
    company: string;
    date: string;
    isFirst?: boolean;
    hasNoBackground?: boolean;
};

const ExperienceJob = ({
    imgSrc,
    job,
    company,
    date,
    isFirst,
    hasNoBackground,
}: ExperienceJobProps) => {
    return (
        <div
            className={`flex border dark:border-zinc-700 bg-white dark:bg-primary1-dark rounded-t-md  p-6 py-4 items-center gap-2 ${
                isFirst ? "" : "mt-6"
            }`}
        >
            <div
                className={`rounded-full ${
                    hasNoBackground
                        ? "p-0 bg-transparent"
                        : "h-20 w-20 flex items-center justify-center bg-white border"
                }`}
            >
                <Image
                    className=""
                    src={`/img/${imgSrc}`}
                    alt=""
                    width={hasNoBackground ? 80 : 50}
                    height={hasNoBackground ? 80 : 50}
                    unoptimized
                />
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl font-medium">{job}</h2>
                <p className=" text-zinc-600 dark:text-secondary-text-dark">
                    {company}
                </p>
                <p className="text-sm text-zinc-600 dark:text-secondary-text-dark">
                    {date}
                </p>
            </div>
        </div>
    );
};

export default ExperienceJob;
