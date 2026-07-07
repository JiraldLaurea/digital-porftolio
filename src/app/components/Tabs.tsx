import { motion } from "framer-motion";

type TabsProps = {
    categories: string[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    isProject?: boolean;
    section: string;
};

const Tabs = ({
    categories,
    activeTab,
    setActiveTab,
    section,
}: TabsProps) => {
    const transition: any = {
        type: "tween",
        ease: "easeOut",
        duration: 0.2,
    };

    return (
        <div className="flex mb-6">
            <div className="inline-flex p-1 overflow-x-auto text-sm border rounded-full bg-primary1 dark:border-zinc-700 dark:bg-primary1-dark">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                            activeTab === index
                                ? "text-white dark:text-black"
                                : "text-secondary-text dark:text-secondary-text-dark hover:text-primary-text dark:hover:text-white"
                        }`}
                    >
                        {activeTab === index && (
                            <motion.span
                                layoutId={
                                    section === "Skills"
                                        ? "skillsTab"
                                        : "projectsTab"
                                }
                                className="absolute inset-0 z-0 rounded-full bg-primary-text dark:bg-white"
                                transition={transition}
                            />
                        )}
                        <span className="relative z-10">{category}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
