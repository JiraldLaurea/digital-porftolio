import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

const Projects = () => {
    return (
        <Wrapper id="projects" title="projects">
            <div className="flex flex-col items-center mb-12 md:flex-row">
                <Image
                    className="mb-6 mr-0 border rounded-lg md:mb-0 md:mr-8 dark:shadow-none dark:border-none"
                    src={`/img/projects_google-clone.png`}
                    alt=""
                    width={400}
                    height={400}
                />
                <div className="w-full text-left">
                    <h1 className="mb-2 text-2xl font-semibold">
                        Google Clone
                    </h1>
                    <p className="mb-6">
                        A mobile-responsive website using Nextjs that allows
                        users to search for terms and display the links of the
                        results similar to Google Search
                    </p>
                    <a
                        href="https://zandell-google-clone-2.vercel.app/"
                        target="_blank"
                    >
                        <button className="w-full px-5 py-2 text-white bg-blue-600 rounded-md md:w-auto">
                            Visit
                        </button>
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row">
                <Image
                    className="mb-6 mr-0 border rounded-lg md:mb-0 md:mr-8 dark:shadow-none dark:border-none"
                    src={`/img/projects_airbnb-clone.png`}
                    alt=""
                    width={400}
                    height={400}
                />
                <div className="w-full text-left">
                    <h1 className="mb-2 text-2xl font-semibold">
                        Airbnb Clone
                    </h1>
                    <p className="mb-6">
                        A mobile-responsive website using Nextjs that allows
                        users to search for terms and display the links of the
                        results similar to Google Search
                    </p>
                    <a
                        href="https://zandell-airbnb-clone.vercel.app/"
                        target="_blank"
                    >
                        <button className="w-full px-5 py-2 text-white bg-blue-600 rounded-md md:w-auto">
                            Visit
                        </button>
                    </a>
                </div>
            </div>
        </Wrapper>
    );
};

export default Projects;
