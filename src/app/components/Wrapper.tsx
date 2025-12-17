import React, { ReactNode } from "react";

type WrapperProps = {
    id: string;
    title: string;
    subtitle: string;
    isAlternate?: boolean;
    isContact?: boolean;
    children: ReactNode;
};

const Wrapper = ({
    id,
    title,
    subtitle,
    isAlternate,
    isContact,
    children,
}: WrapperProps) => {
    return (
        <div
            id={id}
            className={`flex  flex-col border-t items-center min-h-[calc(100vh-68.4px)] py-14 dark:border-zinc-700 ${
                isAlternate
                    ? "bg-white dark:bg-dark-primary1"
                    : "bg-gray-50 dark:bg-dark-primary2"
            } ${isContact && "justify-center"}`}
        >
            <div className="flex flex-col w-full max-w-6xl px-4 mb-8 ">
                <p className="mb-2 text-4xl font-bold md:text-5xl w-fit">
                    {title}
                </p>
                <p
                    className={`text-xl font-light md:text-2xl text-zinc-600 dark:text-zinc-300 `}
                >
                    {subtitle}
                </p>
            </div>
            <div className={`w-full max-w-6xl px-4`}>{children}</div>
        </div>
    );
};

export default Wrapper;
