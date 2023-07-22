import React from "react";

const HeroSection = () => {
    return (
        <div
            id="home"
            className="flex flex-col justify-center h-[calc(100vh-68.4px)] bg-white dark:bg-zinc-900  border-b dark:border-b-zinc-800"
        >
            {/* <div className="flex-none mb-6 md:mb-0 md:mr-8">
                <Image
                    className="border rounded-full shadow-2xl dark:shadow-none dark:border-transparent"
                    src="/img/avatar1.jpg"
                    alt="avatar"
                    width={250}
                    height={250}
                />
            </div> */}
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-6xl font-bold">Hi, I'm Jirald!</h1>
                <div className="flex justify-center">
                    <p className="max-w-lg">
                        I'm a Computer Science Graduate from Central Philippine
                        University with a strong background in full stack web
                        development.
                    </p>
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <button className="px-8 py-3 border rounded-md dark:border-zinc-800">
                    Resume
                </button>
                <button className="px-8 py-3 border rounded-md dark:border-zinc-800">
                    LinkedIn
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
