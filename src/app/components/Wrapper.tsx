import React from "react";

const Wrapper = (props: any) => {
    return (
        <div
            id={props.id}
            className="text-center flex flex-col justify-center min-h-[calc(100vh-68.4px)] bg-white dark:bg-zinc-900 py-14 border-b dark:border-b-zinc-800"
        >
            <div className="mb-12 text-2xl font-bold tracking-[4px] uppercase flex justify-center">
                <p className="w-fit">{props.title}</p>
            </div>
            {props.children}
        </div>
    );
};

export default Wrapper;
