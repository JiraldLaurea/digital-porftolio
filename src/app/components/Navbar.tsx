"use client";
import { motion } from "framer-motion";
import { throttle } from "lodash";
import debounce from "lodash/debounce";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { RiCloseLargeFill, RiMenuFill, RiSunLine } from "react-icons/ri";
import { RxMoon } from "react-icons/rx";
import { Link, scroller } from "react-scroll/modules";
import Button from "./Button";

const Navbar = ({ showButtons }: any) => {
    const { theme, setTheme }: any = useTheme();
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [navItemSourceType, setNavItemSourceType] = useState<
        "scrolled" | "clicked"
    >("scrolled");

    const resumeLink =
        "https://drive.google.com/file/d/1w-ep7j_ZsZbAQHgd_KyecjXKQGjdwqWR/view?usp=drive_link";
    const linkedInLink = "https://linkedin.com/in/jirald-calusay-064b09220";
    const SM_BREAKPOINT = 640;

    const navItems = [
        { label: "Home", page: "home" },
        { label: "Experience", page: "experience" },
        { label: "Skills", page: "skills" },
        { label: "Projects", page: "projects" },
        { label: "Contact", page: "contact" },
    ];

    // Closes menu when passing on a certain threshold
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

    // Throttled
    const scrollBegin = useCallback(
        throttle(() => setNavItemSourceType("clicked"), 300),
        []
    );

    // Debounced
    const scrollEnd = useCallback(
        debounce(() => setNavItemSourceType("scrolled"), 500),
        []
    );

    useEffect(() => {
        return () => {
            scrollBegin.cancel();
        };
    }, [scrollBegin]);

    useEffect(() => {
        return () => {
            scrollEnd.cancel();
        };
    }, [scrollEnd]);

    const handleNavItemClick = (index: number, page: string) => {
        scrollBegin();
        setActiveTab(index);

        scroller.scrollTo(page, {
            duration: 300,
            smooth: "easeInOutCubic",
            offset: index === 0 ? -64 : -63,
        });

        scrollEnd();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (navItemSourceType === "clicked") return;

            const scrollPosition = window.scrollY + 150;
            let currentIndex = 0;

            navItems.forEach((item, index) => {
                const section = document.getElementById(item.page);
                if (!section) return;

                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    currentIndex = index;
                }
            });

            if (currentIndex !== activeTab) {
                setActiveTab(currentIndex);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [navItems]);

    const transition: any = {
        type: "tween",
        ease: "easeOut",
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
                                    <button
                                        onClick={() =>
                                            handleNavItemClick(
                                                index,
                                                navItem.page
                                            )
                                        }
                                    >
                                        <p
                                            className={`flex items-center justify-center h-10 px-4 transition-colors cursor-pointer select-none rounded-3xl dark:text-secondary-text-dark dark:hover:text-white hover:text-black ${
                                                activeTab === index
                                                    ? "dark:text-white"
                                                    : "text-zinc-500"
                                            }`}
                                        >
                                            {navItem.label}
                                        </p>
                                    </button>

                                    {activeTab === index && (
                                        <motion.span
                                            layoutId="navbarUnderline"
                                            className="absolute w-[calc(100%-32px)] left-4 rounded-full right-0 bottom-0 h-0.5 bg-black dark:bg-white"
                                            transition={transition}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-between w-full space-x-2 md:justify-end">
                        {/* Resume and LinkedIn Buttons */}
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
                        {/* Theme switcher and Menu Buttons */}

                        <div className="flex items-center">
                            <button
                                className="flex items-center justify-center w-10 h-10 transition-colors border border-opacity-50 rounded-full dark:border-zinc-700 hover:bg-primary-hovered dark:hover:bg-primary-hovered-dark"
                                onClick={() =>
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    )
                                }
                            >
                                <RiSunLine
                                    size={18}
                                    className="hidden dark:block"
                                />
                                <RxMoon
                                    size={18}
                                    className="block dark:hidden"
                                />
                            </button>
                            <div
                                onClick={() => setIsMenuOpened(!isMenuOpened)}
                                className="flex items-center justify-center w-10 h-10 ml-2 transition-colors ease-in border border-opacity-50 rounded-full cursor-pointer select-none md:hidden dark:border-zinc-700 hover:bg-primary3 dark:hover:bg-primary-hovered-dark"
                            >
                                <RiCloseLargeFill
                                    size={18}
                                    className={`${
                                        isMenuOpened ? "block" : "hidden"
                                    }`}
                                />
                                <RiMenuFill
                                    size={18}
                                    className={`${
                                        isMenuOpened ? "hidden" : "block"
                                    }`}
                                />
                            </div>
                        </div>
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
