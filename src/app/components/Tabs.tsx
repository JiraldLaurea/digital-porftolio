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
    isProject,
    section,
}: TabsProps) => {
    const transition: any = {
        type: "tween",
        ease: "easeOut",
        duration: 0.15,
    };

    return (
        <div
            className={`flex items-center mb-6  overflow-x-auto sm:text-base text-sm ${
                isProject ? "justify-center" : "justify-start"
            }`}
        >
            <div className="flex p-2 border rounded-full bg-primary1 dark:border-zinc-700 dark:bg-primary1-dark">
                <div className="z-0 flex items-center pb-0 overflow-x-auto overflow-y-hidden">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center"
                        >
                            <motion.button
                                onClick={() => setActiveTab(index)}
                                className={` relative rounded-full py-2 px-4 sm:hover:dark:text-white sm:hover:text-black transition-colors ${
                                    activeTab === index
                                        ? "dark:text-white"
                                        : "text-secondary-text dark:text-secondary-text-dark"
                                }`}
                            >
                                {category}
                            </motion.button>

                            {activeTab === index && (
                                <motion.span
                                    layoutId={
                                        section === "Skills"
                                            ? "skillsUnderline"
                                            : "projectsUnderline"
                                    }
                                    className="absolute inset-0 border rounded-full dark:border-zinc-700 bg-primary3 dark:bg-primary3-dark"
                                    style={{ zIndex: -1 }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                    transition={transition}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
