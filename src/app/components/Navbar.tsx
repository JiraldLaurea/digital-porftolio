"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";
import { RxMoon } from "react-icons/rx";
import { Link } from "react-scroll/modules";
import Button from "./Button";

const Navbar = ({ showButtons }: any) => {
    const { theme, setTheme }: any = useTheme();
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const resumeLink =
        "https://drive.google.com/file/d/1w-ep7j_ZsZbAQHgd_KyecjXKQGjdwqWR/view?usp=drive_link";
    const linkedInLink = "https://linkedin.com/in/jirald-calusay-064b09220";

    const SM_BREAKPOINT = 640;

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

    const navItems = [
        { label: "Home", page: "home" },
        { label: "Experience", page: "experience" },
        { label: "Skills", page: "skills" },
        { label: "Projects", page: "projects" },
        { label: "Contact", page: "contact" },
    ];

    return (
        <>
            <div
                className={`sticky top-0 z-100 flex justify-center h-16 bg-white border-b dark:bg-primary1-dark dark:border-zinc-700`}
            >
                <div className="flex items-center justify-end w-full max-w-6xl px-4 sm:justify-between">
                    <div className="items-center hidden space-x-6 text-sm sm:flex">
                        {navItems.map((navItem, idx) => {
                            return (
                                <Link
                                    offset={idx === 0 ? -64 : -63}
                                    // offset={-63}
                                    smooth
                                    duration={300}
                                    to={navItem.page}
                                    key={idx}
                                >
                                    <p className="transition-colors rounded-md cursor-pointer select-none dark:text-secondary-text-dark dark:hover:text-white text-zinc-500 hover:text-black">
                                        {navItem.label}
                                    </p>
                                </Link>
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
                            />
                            <Button
                                link={linkedInLink}
                                text="LinkedIn"
                                isSmaller
                            />
                        </div>
                        {mounted ? (
                            <div className="flex items-center">
                                <button
                                    className="flex items-center justify-center w-10 h-10 transition-colors border border-opacity-50 rounded-md dark:border-zinc-700 hover:bg-primary-hovered dark:hover:bg-primary-hovered-dark"
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
                                    className="flex items-center justify-center w-10 h-10 ml-2 transition-colors ease-in border border-opacity-50 rounded-md cursor-pointer select-none sm:hidden dark:border-zinc-700 hover:bg-primary3 dark:hover:bg-primary-hovered-dark"
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
                        {navItems.map((navItem, idx) => {
                            return (
                                <Link
                                    offset={idx === 0 ? -64 : -63}
                                    smooth
                                    duration={500}
                                    to={navItem.page}
                                    key={idx}
                                    className={`w-full rounded-md text-sm px-4 py-4 bg-primary3 dark:bg-primary3-dark border cursor-pointer dark:border-zinc-700`}
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
