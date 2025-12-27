"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";
import { RxMoon } from "react-icons/rx";
import { Link } from "react-scroll/modules";
import Button from "./Button";

type ActiveSource = "scroll" | "click";

const Navbar = ({ showButtons }: any) => {
    const { theme, setTheme }: any = useTheme();
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<number>(0);

    const resumeLink =
        "https://drive.google.com/file/d/1w-ep7j_ZsZbAQHgd_KyecjXKQGjdwqWR/view?usp=drive_link";
    const linkedInLink = "https://linkedin.com/in/jirald-calusay-064b09220";
    const SM_BREAKPOINT = 640;

    const activeSourceRef = useRef<ActiveSource>("scroll");

    useEffect(() => {
        setMounted(true);
    }, []);

    // Closes menu when passing on a certain
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${SM_BREAKPOINT}px)`);

        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                // Screen is now >= sm
                setIsMenuOpened(false);
            }
        };

        // Run once on mount
        if (mediaQuery.matches) {
            setIsMenuOpened(false);
        }

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        const sections = navItems.map((item) =>
            document.getElementById(item.page)
        );

        let lastActive = activeTab;

        const observer = new IntersectionObserver(
            (entries) => {
                if (activeSourceRef.current !== "scroll") return;

                // pick the section closest to top
                const visibleEntries = entries.filter(
                    (e) => e.intersectionRatio > 0
                );
                if (visibleEntries.length === 0) return;

                const nearestEntry = visibleEntries.reduce((prev, curr) =>
                    Math.abs(curr.boundingClientRect.top) <
                    Math.abs(prev.boundingClientRect.top)
                        ? curr
                        : prev
                );

                const index = navItems.findIndex(
                    (item) => item.page === nearestEntry.target.id
                );
                if (index !== -1) setActiveTab(index);
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
                rootMargin: "-40% 0px -40% 0px",
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let rafId: number;
        let lastY = window.scrollY;

        const checkScrollEnd = () => {
            const currentY = window.scrollY;

            if (Math.abs(currentY - lastY) < 1) {
                activeSourceRef.current = "scroll";
            } else {
                lastY = currentY;
                rafId = requestAnimationFrame(checkScrollEnd);
            }
        };

        window.addEventListener("scroll", () => {
            if (activeSourceRef.current === "click") {
                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(checkScrollEnd);
            }
        });

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const navItems = [
        { label: "Home", page: "home" },
        { label: "Experience", page: "experience" },
        { label: "Skills", page: "skills" },
        { label: "Projects", page: "projects" },
        { label: "Contact", page: "contact" },
    ];

    const transition: any = {
        type: "tween",
        ease: "easeOut",
        duration: 0.15,
    };

    const transitionUnderline: any = {
        type: "tween",
        duration: 0.15,
    };

    return (
        <>
            <div
                className={`flex sticky top-0 z-100 justify-center w-full h-16 bg-white border-b dark:bg-primary1-dark dark:border-zinc-700`}
            >
                <div className="flex items-center justify-end w-full max-w-6xl gap-8 px-4 md:justify-between md:px-4">
                    <div className="relative items-center hidden text-sm md:flex">
                        {navItems.map((navItem, index) => {
                            return (
                                <div key={index} className="relative">
                                    <motion.button
                                        onHoverStart={() =>
                                            setHoveredTab(index)
                                        }
                                        onHoverEnd={() => setHoveredTab(null)}
                                    >
                                        <Link
                                            onClick={() => {
                                                activeSourceRef.current =
                                                    "click";
                                                setActiveTab(index);
                                            }}
                                            offset={index === 0 ? -64 : -63}
                                            to={navItem.page}
                                            smooth
                                            duration={400}
                                        >
                                            <p
                                                className={`flex items-center justify-center h-10 px-4 transition-colors cursor-pointer select-none rounded-3xl dark:text-secondary-text-dark dark:hover:text-white  hover:text-black ${
                                                    activeTab === index
                                                        ? "dark:text-white"
                                                        : "text-zinc-500"
                                                }`}
                                            >
                                                {navItem.label}
                                            </p>
                                        </Link>
                                    </motion.button>

                                    <AnimatePresence>
                                        {hoveredTab === index ? (
                                            <motion.span
                                                key={"hoverNavbar"}
                                                layoutId={"hoverNavbar"}
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
                                            layoutId="navbarUnderline"
                                            className="absolute w-[calc(100%-32px)] left-4 rounded-full right-0 bottom-0 h-0.5 bg-black dark:bg-white"
                                            transition={transitionUnderline}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center space-x-2">
                        <div
                            className={`flex space-x-2 items-center transition-all ${
                                showButtons || isMenuOpened
                                    ? "opacity-100"
                                    : "opacity-0 pointer-events-none"
                            }`}
                        >
                            <Button
                                link={resumeLink}
                                text="Resume"
                                isPrimary
                                isSmaller
                                isFromNavbar
                            />
                            <Button
                                link={linkedInLink}
                                text="LinkedIn"
                                isSmaller
                                isFromNavbar
                            />
                        </div>
                        {mounted ? (
                            <div className="flex items-center">
                                <button
                                    className="flex items-center justify-center w-10 h-10 transition-colors border border-opacity-50 rounded-full dark:border-zinc-700 hover:bg-primary-hovered dark:hover:bg-primary-hovered-dark"
                                    onClick={() => {
                                        theme === "dark"
                                            ? setTheme("light")
                                            : setTheme("dark");
                                    }}
                                >
                                    {theme === "dark" ? (
                                        <RiSunLine size={18} />
                                    ) : (
                                        <RxMoon size={18} />
                                    )}
                                </button>
                                <div
                                    onClick={() =>
                                        setIsMenuOpened(!isMenuOpened)
                                    }
                                    className="flex items-center justify-center w-10 h-10 ml-2 transition-colors ease-in border border-opacity-50 rounded-full cursor-pointer select-none md:hidden dark:border-zinc-700 hover:bg-primary3 dark:hover:bg-primary-hovered-dark"
                                >
                                    <FaBars
                                        className=""
                                        width={25}
                                        height={25}
                                    />
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            {isMenuOpened && (
                <div className="fixed w-full h-screen bg-white z-100 top-16 dark:bg-primary1-dark">
                    <div className="flex flex-col items-center h-full px-4 py-4 space-y-4 bg-primary1 dark:bg-primary1-dark">
                        {navItems.map((navItem, index) => {
                            return (
                                <Link
                                    offset={index === 0 ? -64 : -63}
                                    smooth
                                    duration={400}
                                    to={navItem.page}
                                    key={index}
                                    className={`w-full rounded-3xl text-sm px-5 py-4 bg-primary3 dark:bg-primary3-dark border cursor-pointer dark:border-zinc-700`}
                                    onClick={() => setIsMenuOpened(false)}
                                >
                                    <p>{navItem.label}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
