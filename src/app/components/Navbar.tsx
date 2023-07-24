"use client";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { Link } from "react-scroll/modules";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
    const { systemTheme, theme, setTheme }: any = useTheme();
    // const currentTheme = theme === "system" ? systemTheme : theme;
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
    ];

    return (
        <>
            <div className="sticky top-0 flex justify-center py-4 bg-white border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                <div className="flex items-center justify-between w-full max-w-5xl px-4">
                    <div className="flex items-center text-sm sm:space-x-6">
                        {navItems.map((navItem, idx) => {
                            return (
                                <Link
                                    offset={-68}
                                    smooth
                                    duration={500}
                                    to={navItem.page}
                                    key={idx}
                                >
                                    <p className="hidden cursor-pointer select-none sm:block">
                                        {navItem.label}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                    {isClient === true && (
                        <>
                            {theme === "dark" ? (
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="p-2 transition-colors border rounded-lg border-zinc-700 hover:bg-zinc-800"
                                        onClick={() => setTheme("light")}
                                    >
                                        <RiSunLine size={18} />
                                    </button>
                                    <div
                                        onClick={() => setIsMenuOpened(true)}
                                        className="sm:hidden w-[35.6px] h-[35.6px] justify-center flex items-center transition-colors border rounded-lg cursor-pointer select-none border-zinc-700 hover:bg-zinc-800"
                                    >
                                        <FaBars
                                            className="text-white"
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="p-2 transition-colors border rounded-lg hover:bg-slate-100"
                                        onClick={() => setTheme("dark")}
                                    >
                                        <RiMoonFill size={18} />
                                    </button>
                                    <div
                                        onClick={() => setIsMenuOpened(true)}
                                        className="sm:hidden  w-[35.6px] h-[35.6px] justify-center flex items-center transition-colors border rounded-lg cursor-pointer select-none hover:bg-slate-100"
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
                <div className="fixed top-0 z-10 w-full h-screen bg-white dark:bg-zinc-900">
                    <div className="h-[68.4px]  flex items-center px-4 justify-between border-b dark:border-b-zinc-800">
                        <Link
                            offset={-68}
                            smooth
                            duration={500}
                            to="home"
                            onClick={() => setIsMenuOpened(false)}
                        >
                            <h1 className="text-xl font-bold cursor-pointer">
                                Jirald
                            </h1>
                        </Link>
                        {isClient === true && (
                            <>
                                {theme === "dark" ? (
                                    <div className="flex items-center space-x-4">
                                        <button
                                            className="p-2 transition-colors border rounded-lg border-zinc-700 hover:bg-zinc-800"
                                            onClick={() => setTheme("light")}
                                        >
                                            <RiSunLine size={18} />
                                        </button>
                                        <div
                                            onClick={() =>
                                                setIsMenuOpened(false)
                                            }
                                            className="w-[35.6px] h-[35.6px] justify-center flex items-center transition-colors border rounded-lg cursor-pointer select-none border-zinc-700 hover:bg-zinc-800"
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
                                    <div className="flex items-center space-x-4">
                                        <button
                                            className="p-2 transition-colors border rounded-lg hover:bg-slate-100"
                                            onClick={() => setTheme("dark")}
                                        >
                                            <RiMoonFill size={18} />
                                        </button>
                                        <div
                                            onClick={() =>
                                                setIsMenuOpened(false)
                                            }
                                            className="w-[35.6px] h-[35.6px] justify-center flex items-center transition-colors border rounded-lg cursor-pointer select-none hover:bg-slate-100"
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
                    <div className="flex flex-col items-center px-4 text-center">
                        {navItems.map((navItem, idx) => {
                            return (
                                <Link
                                    offset={-68}
                                    smooth
                                    duration={500}
                                    to={navItem.page}
                                    key={idx}
                                    className="w-full py-4 border-b cursor-pointer dark:border-b-zinc-800"
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
