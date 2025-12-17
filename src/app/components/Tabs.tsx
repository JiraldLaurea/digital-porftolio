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
    isAlternate,
}: TabsProps) => (
    <div className={`flex overflow-x-auto justify-normal`}>
        <div
            className={`flex p-2 mb-6 space-x-2 overflow-x-auto border dark:border-zinc-700 rounded-full w-fit ${
                isAlternate ? "border-zinc-600" : "border"
            } `}
        >
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`${
                        activeTab === index
                            ? "bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-600 text-white"
                            : "dark:hover:bg-slate-700 hover:bg-slate-200"
                    } py-2 px-4 rounded-full`}
                    onClick={() => setActiveTab(index)}
                >
                    {category}
                </button>
            ))}
        </div>
    </div>
);

export default Tabs;
