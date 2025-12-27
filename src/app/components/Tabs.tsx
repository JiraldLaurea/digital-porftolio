import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

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
            <div className="flex p-2 pb-0 border rounded-3xl bg-primary1 dark:border-zinc-700 dark:bg-primary1-dark">
                <div className="z-0 flex items-center pb-0 overflow-x-auto overflow-y-hidden">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex relative flex-col items-center space-y-1.5"
                        >
                            <motion.button
                                onHoverStart={() => setHoveredTab(index)}
                                onHoverEnd={() => setHoveredTab(null)}
                                onClick={() => setActiveTab(index)}
                                className={` relative mb-2 rounded-3xl py-2 px-4 sm:hover:dark:text-white sm:hover:text-black transition-colors ${
                                    activeTab === index
                                        ? "dark:text-white"
                                        : "text-secondary-text dark:text-secondary-text-dark"
                                }`}
                            >
                                {category}
                            </motion.button>

                            <AnimatePresence>
                                {hoveredTab === index ? (
                                    <motion.span
                                        layoutId={"hover"}
                                        className="absolute inset-0 hidden h-10 rounded-3xl sm:inline bg-primary-hovered dark:bg-primary-hovered-dark"
                                        style={{ zIndex: -1 }}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                        }}
                                        transition={transition}
                                    />
                                ) : null}
                            </AnimatePresence>

                            {activeTab === index && (
                                <motion.span
                                    layoutId={
                                        section === "Skills"
                                            ? "skillsUnderline"
                                            : "projectsUnderline"
                                    }
                                    className="absolute w-[calc(100%-32px)] left-4 rounded-full right-0 bottom-2 h-0.5 bg-black dark:bg-white"
                                    transition={{
                                        type: "spring",
                                        stiffness: 2000,
                                        damping: 100,
                                    }}
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
