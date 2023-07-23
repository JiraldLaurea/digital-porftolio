import React from "react";

const Wrapper = (props: any) => {
    return (
        <div
            id={props.id}
            className="text-center flex flex-col justify-center min-h-[calc(100vh-68.4px)] bg-white dark:bg-zinc-900 py-14 border-b dark:border-b-zinc-800"
        >
            <h1 className="mb-12 text-xl font-light tracking-[6px] uppercase">
                {props.title}
            </h1>
            {props.children}
        </div>
    );
};

export default Wrapper;
