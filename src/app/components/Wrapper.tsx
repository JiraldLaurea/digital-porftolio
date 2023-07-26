import React from "react";

const Wrapper = (props: any) => {
    return (
        <div
            id={props.id}
            className={`text-center flex flex-col justify-center items-center min-h-[calc(100vh-68.4px)] bg-zinc-100 dark:bg-zinc-900 py-14 ${
                props.last ? "mb-0" : "mb-3"
            }`}
        >
            <div className="flex flex-col items-center mb-12">
                <p className="mb-2 text-5xl font-bold w-fit">{props.title}</p>
                <p className="text-2xl font-light text-zinc-500 dark:text-zinc-400">
                    {props.subtitle}
                </p>
            </div>
            <div className="w-full max-w-5xl px-4">{props.children}</div>
        </div>
    );
};

export default Wrapper;
