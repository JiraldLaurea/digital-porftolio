type TabsProps = {
    categories: string[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    isProjects?: boolean;
};

const Tabs = ({ categories, activeTab, setActiveTab }: TabsProps) => (
    <div
        className={`flex justify-center overflow-x-auto sm:text-base text-sm `}
    >
        <div className="flex p-2 pb-0 mb-6 overflow-x-auto border rounded-md bg-primary1 dark:border-zinc-700 dark:bg-primary1-dark">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center space-y-1.5"
                >
                    <button
                        key={index}
                        className={`transition-colors rounded-md hover:bg-primary-hovered dark:hover:bg-primary-hovered-dark ${
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
