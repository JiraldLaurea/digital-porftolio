import { ReactNode } from "react";

type WrapperProps = {
    id: string;
    title: string;
    subtitle: string;
    isAlternate?: boolean;
    isPoject?: boolean;
    isContact?: boolean;
    isCentered?: boolean;
    isFullHeight?: boolean;
    children: ReactNode;
};

const Wrapper = ({
    id,
    title,
    subtitle,
    isAlternate,
    isPoject,
    isContact,
    isCentered,
    isFullHeight,
    children,
}: WrapperProps) => {
    return (
        <div
            id={id}
            className={`flex flex-col border-t items-center py-10 dark:border-zinc-700 ${
                isAlternate
                    ? "bg-primary1 dark:bg-primary1-dark"
                    : "bg-primary2 dark:bg-primary2-dark"
            } ${
                isContact &&
                "justify-center min-h-fit max-h-192 h-[calc(100vh-64px)]"
            } ${isFullHeight && "min-h-fit h-[calc(100vh-64px)] max-h-192"}
             ${isPoject && "px-4 sm:px-18"}`}
        >
            <div
                className={`flex flex-col w-full max-w-6xl px-4 mb-8 ${
                    isCentered && "text-center"
                }`}
            >
                <p className="text-3xl font-semibold md:text-3xl">{title}</p>
                <p
                    className={`text-lg text-secondary-text dark:text-secondary-text-dark`}
                >
                    {subtitle}
                </p>
            </div>
            <div className={`w-full max-w-6xl  ${isPoject ? "px-0" : "px-4"}`}>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;
