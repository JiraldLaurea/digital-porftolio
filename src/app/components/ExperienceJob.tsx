import Image from "next/image";

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
            className={`flex border dark:border-zinc-700 bg-white dark:bg-primary1-dark rounded-t-md p-4  sm:p-6 sm:py-4 items-center gap-2 ${
                isFirst ? "" : "mt-6"
            }`}
        >
            <div
                className={`rounded-full h-16 w-16 sm:h-20 sm:w-20 ${
                    hasNoBackground
                        ? "p-0 bg-transparent"
                        : "p-2 sm:p-4 sm:w-20 flex items-center justify-center bg-white border"
                }`}
            >
                <div className="relative w-full h-full ">
                    <Image
                        className=""
                        src={`/img/${imgSrc}`}
                        alt={company}
                        quality={100}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="font-medium xs:text-lg sm:text-xl">{job}</h2>
                <p className="text-xs xs:text-sm text-zinc-600 sm:text-base dark:text-secondary-text-dark">
                    {company}
                </p>
                <p className="text-xs xs:text-sm text-zinc-600 dark:text-secondary-text-dark">
                    {date}
                </p>
            </div>
        </div>
    );
};

export default ExperienceJob;
