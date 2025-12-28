import Image from "next/image";
import Badge from "./Badge";

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
            className={`flex border dark:border-zinc-700 bg-white dark:bg-primary1-dark rounded-t-3xl p-4  sm:p-6 sm:py-4 items-center gap-2 ${
                isFirst ? "" : "mt-6"
            }`}
        >
            <div
                className={`rounded-full h-14 w-14 sm:h-16 sm:w-16 ${
                    hasNoBackground
                        ? "p-0 bg-transparent"
                        : "p-2 sm:p-3 sm:w-16 flex items-center justify-center bg-white border"
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
            <div className="flex items-center justify-between grow">
                <div className="flex flex-col">
                    <h2 className="font-medium sm:text-lg">{job}</h2>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-secondary-text-dark">
                        {company}
                    </p>
                </div>
                <Badge text={date} />
            </div>
        </div>
    );
};

export default ExperienceJob;
