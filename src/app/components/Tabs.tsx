type TabsProps = {
    categories: string[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    isProject?: boolean;
    section?: string;
};

const Tabs = ({ categories, activeTab, setActiveTab }: TabsProps) => {
    return (
        <div className="flex mb-6">
            <div className="inline-flex p-1 text-sm border rounded-full bg-primary1 dark:border-zinc-700 dark:bg-primary1-dark">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                            activeTab === index
                                ? "bg-primary-text text-white dark:bg-white dark:text-black"
                                : "text-secondary-text dark:text-secondary-text-dark hover:text-primary-text dark:hover:text-white"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
