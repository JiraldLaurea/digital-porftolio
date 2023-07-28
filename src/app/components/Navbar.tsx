"use client";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { Link } from "react-scroll/modules";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
    const { theme, setTheme }: any = useTheme();
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
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
            <div className="sticky top-0 flex justify-center h-[68.4px] bg-white border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
                <div className="flex items-center justify-between w-full max-w-5xl px-4">
                    <div className="flex items-center text-sm">
                        {navItems.map((navItem, idx) => {
                            return (
                                <Link
                                    offset={-68}
                                    smooth
                                    duration={500}
                                    to={navItem.page}
                                    key={idx}
                                >
                                    <p className="hidden px-4 py-2 transition-colors rounded-md cursor-pointer select-none dark:hover:bg-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white text-zinc-500 hover:text-zinc-950 sm:block">
                                        {navItem.label}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                    {isClient === true && (
                        <>
                            {theme === "dark" ? (
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="p-2 transition-colors border rounded-md border-zinc-700 hover:bg-zinc-900"
                                        onClick={() => setTheme("light")}
                                    >
                                        <RiSunLine size={18} />
                                    </button>
                                    <div
                                        onClick={() => setIsMenuOpened(true)}
                                        className="sm:hidden w-[35.6px] h-[35.6px] justify-center flex items-center transition-colors border rounded-md cursor-pointer select-none border-zinc-700 hover:bg-zinc-900"
                                    >
                                        <FaBars
                                            className="text-white"
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="p-2 transition-colors border rounded-md hover:bg-zinc-100"
                                        onClick={() => setTheme("dark")}
                                    >
                                        <RiMoonFill size={18} />
                                    </button>
                                    <div
                                        onClick={() => setIsMenuOpened(true)}
                                        className="sm:hidden  w-[35.6px] h-[35.6px] justify-center flex items-center transition-colors border rounded-md cursor-pointer select-none hover:bg-zinc-100"
                                    >
                                        <FaBars
                                            className=""
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            {isMenuOpened && (
                <div className="fixed top-0 z-10 w-full h-screen bg-white dark:bg-zinc-950">
                    <div className="h-[68.4px] flex items-center px-4 justify-end border-b dark:border-b-zinc-800">
                        {isClient === true && (
                            <>
                                {theme === "dark" ? (
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="p-2 transition-colors border rounded-md border-zinc-700 hover:bg-zinc-900"
                                            onClick={() => setTheme("light")}
                                        >
                                            <RiSunLine size={18} />
                                        </button>
                                        <div
                                            onClick={() =>
                                                setIsMenuOpened(false)
                                            }
                                            className="w-[35.6px] h-[35.6px] justify-center flex items-center transition-colors border rounded-md cursor-pointer select-none border-zinc-700 hover:bg-zinc-900"
                                        >
                                            <Icon
                                                icon="ic:baseline-close"
                                                className="text-white"
                                                width={25}
                                                height={25}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="p-2 transition-colors border rounded-md hover:bg-zinc-100"
                                            onClick={() => setTheme("dark")}
                                        >
                                            <RiMoonFill size={18} />
                                        </button>
                                        <div
                                            onClick={() =>
                                                setIsMenuOpened(false)
                                            }
                                            className="w-[35.6px] h-[35.6px] justify-center flex items-center transition-colors border rounded-md cursor-pointer select-none hover:bg-zinc-100"
                                        >
                                            <Icon
                                                icon="ic:baseline-close"
                                                width={25}
                                                height={25}
                                            />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className="flex pb-[68.4px] flex-col items-center justify-center h-full text-center">
                        {navItems.map((navItem, idx) => {
                            return (
                                <Link
                                    offset={-68}
                                    smooth
                                    duration={500}
                                    to={navItem.page}
                                    key={idx}
                                    className={`w-full py-4 border-b cursor-pointer dark:border-y-zinc-800 ${
                                        idx == 0 && "border-t"
                                    }`}
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
