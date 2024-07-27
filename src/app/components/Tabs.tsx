import React from "react";

interface TabsProps {
    categories: string[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    isProjects?: boolean;
}

const Tabs: React.FC<TabsProps> = ({
    categories,
    activeTab,
    setActiveTab,
    isProjects,
}) => (
    <div
        className={`flex overflow-x-auto justify-normal ${
            isProjects ? "justify-center" : "xs:justify-center"
        }`}
    >
        <div className="flex p-2 mb-12 space-x-2 overflow-x-auto border rounded-full w-fit border-slate-300 dark:border-slate-600">
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
