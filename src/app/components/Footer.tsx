import React from "react";
import { Icon } from "@iconify/react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="flex justify-center py-10 border-t bg-gray-50 dark:bg-primary2-dark dark:border-zinc-700">
            <div className="flex items-center space-x-8">
                <a
                    href="https://www.linkedin.com/in/jirald-calusay-064b09220"
                    target="_blank"
                    className="flex items-center space-x-1"
                >
                    <Icon
                        icon="mdi:linkedin"
                        className="w-10 h-10 cursor-pointer"
                    />
                    <p>LinkedIn</p>
                </a>
                <a
                    href="https://github.com/JiraldLaurea"
                    target="_blank"
                    className="flex items-center space-x-1"
                >
                    <Icon
                        width={40}
                        height={40}
                        icon="mdi:github"
                        className="cursor-pointer"
                    />
                    <p>Github</p>
                </a>
            </div>
        </div>
    );
};

export default Footer;
