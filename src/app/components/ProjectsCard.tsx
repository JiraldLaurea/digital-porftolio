import Image from "next/image";
import React from "react";

const ProjectsCard = ({ imgSrc, name, description, link }: any) => {
    return (
        <div className="flex flex-col items-center mb-12 md:flex-row">
            <Image
                className="w-full mb-6 mr-0 border rounded-lg md:mb-0 md:mr-8 dark:shadow-none dark:border-none md:w-auto"
                src={`/img/${imgSrc}`}
                alt=""
                width={400}
                height={400}
            />
            <div className="w-full text-left">
                <h1 className="mb-2 text-2xl font-semibold">{name}</h1>
                <p className="mb-6">{description}</p>
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
