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
        <div className={`flex items-center gap-4 ${isFirst ? "mb-6" : "my-6"}`}>
            <div
                className={` rounded-full ${
                    hasNoBackground
                        ? "p-0 bg-transparent"
                        : "p-6 bg-white border"
                }`}
            >
                <Image
                    className=""
                    src={`/img/${imgSrc}`}
                    alt=""
                    width={hasNoBackground ? 128 : 80}
                    height={hasNoBackground ? 128 : 80}
                    unoptimized
                />
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl font-medium">{job}</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                    {company}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">{date}</p>
            </div>
        </div>
    );
};

export default ExperienceJob;
