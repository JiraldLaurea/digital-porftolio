import React from "react";

type TabsProps = {
    categories: string[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    isProjects?: boolean;
    isAlternate?: boolean;
};

const Tabs = ({
    categories,
    activeTab,
    setActiveTab,
    isProjects,
    isAlternate,
}: TabsProps) => (
    <div className={`flex justify-center overflow-x-auto`}>
        <div
            className={`flex p-2 pb-0 mb-6 w-fit overflow-x-auto justify-center bg-primary1 border dark:border-zinc-700 dark:bg-primary1-dark rounded-md ${
                isAlternate ? "border-zinc-600" : ""
            } `}
        >
            {categories.map((category, index) => (
                <div className="flex flex-col items-center space-y-1.5">
                    <button
                        key={index}
                        className={`transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-primary3-dark ${
                            activeTab === index
                                ? "dark:text-white"
                                : "text-secondary-text dark:text-secondary-text-dark"
                        } py-2 px-4`}
                        onClick={() => setActiveTab(index)}
                    >
                        {category}
                    </button>
                    <div
                        className={`h-0.5 rounded-full w-full transition-colors ${
                            activeTab === index
                                ? "bg-black dark:bg-white"
                                : "bg-transparent"
                        }`}
                    ></div>
                </div>
            ))}
        </div>
    </div>
);

export default Tabs;
