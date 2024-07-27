import React from "react";

const Wrapper = (props: any) => {
    return (
        <div
            id={props.id}
            className={`text-center flex flex-col ${
                props.isNotCentered ? "" : "justify-center"
            } items-center min-h-[calc(100vh-68.4px)] bg-zinc-50 dark:bg-[#1E263A] py-14 `}
        >
            <div className="flex flex-col items-center mb-12">
                <p className="mb-2 text-4xl font-bold md:text-5xl w-fit">
                    {props.title}
                </p>
                <p className="text-xl font-light md:text-2xl text-zinc-600 dark:text-zinc-300">
                    {props.subtitle}
                </p>
            </div>
            <div className="w-full max-w-6xl px-4">{props.children}</div>
        </div>
    );
};

export default Wrapper;
