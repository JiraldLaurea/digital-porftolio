import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="flex justify-center py-10 border-t bg-gray-50 dark:bg-primary2-dark dark:border-zinc-700">
            <div className="flex flex-col-reverse items-center justify-center w-full max-w-6xl px-4 sm:justify-between sm:flex-row">
                <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
                    © 2025 Jirald Calusay
                </p>
                <div className="flex items-center mb-4 space-x-4 text-sm sm:space-x-8 sm:mb-0 sm:text-base">
                    <a
                        href="https://www.linkedin.com/in/jirald-calusay-064b09220"
                        target="_blank"
                        className="flex items-center space-x-1"
                    >
                        <FaLinkedin size={30} />
                        <p>LinkedIn</p>
                    </a>
                    <a
                        href="https://github.com/JiraldLaurea"
                        target="_blank"
                        className="flex items-center space-x-1"
                    >
                        <FaGithub size={30} />
                        <p>Github</p>
                    </a>
                </div>
            </div>
            <div />
        </div>
    );
};

export default Footer;
