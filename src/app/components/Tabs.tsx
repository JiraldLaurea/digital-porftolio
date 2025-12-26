import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TabsProps = {
    categories: string[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    isProjects?: boolean;
    section: string;
};

const Tabs = ({ categories, activeTab, setActiveTab, section }: TabsProps) => {
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const transition: any = {
        type: "tween",
        ease: "easeOut",
        duration: 0.15,
    };

    return (
        <div
            className={`flex justify-center overflow-x-auto sm:text-base text-sm `}
        >
            <div className="p-2 pb-0 mb-6 border rounded-md bg-primary1 dark:border-zinc-700 dark:bg-primary1-dark">
                <div className="relative z-0 flex items-center pb-0 overflow-x-auto overflow-y-hidden">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex relative flex-col items-center space-y-1.5"
                        >
                            <motion.button
                                onHoverStart={() => {
                                    setHoveredTab(index);
                                }}
                                onHoverEnd={() => setHoveredTab(null)}
                                className={` relative mb-2 duration-200 rounded-md ${
                                    activeTab === index
                                        ? "dark:text-white"
                                        : "text-secondary-text dark:text-secondary-text-dark"
                                } py-2 px-4`}
                                onClick={() => setActiveTab(index)}
                            >
                                {category}
                            </motion.button>

                            <AnimatePresence>
                                {hoveredTab === index ? (
                                    <motion.span
                                        layoutId={"hover"}
                                        className="absolute inset-0 h-10 rounded-md bg-primary-hovered dark:bg-primary-hovered-dark"
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
                                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white"
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
