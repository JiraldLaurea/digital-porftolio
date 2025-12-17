import React from "react";

type ButtonProps = {
    link: string;
    text: string;
    isResume: boolean;
    isSmaller?: boolean;
};

const Button = ({ link, text, isResume, isSmaller }: ButtonProps) => {
    return (
        // text-blue-600
        <a
            href={link}
            target="_blank"
            className={`
                flex items-center px-6 ${
                    isSmaller ? "py-3" : "py-3"
                }  space-x-1 rounded-md transition-colors  ${
                isResume
                    ? "text-white bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:border-transparent"
                    : "text-blue-500 bg-white border hover:border-blue-500 dark:hover:border-blue-500 dark:bg-transparent dark:text-blue-500 dark:border-zinc-700 dark:border-opacity-50"
            }`}
        >
            <p>{text}</p>
        </a>
    );
};

export default Button;
