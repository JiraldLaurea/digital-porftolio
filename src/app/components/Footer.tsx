const Footer = () => {
    return (
        <footer className="flex justify-center px-4 py-8 border-t sm:px-8 bg-primary1 dark:bg-primary2-dark dark:border-zinc-700">
            <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-4 sm:flex-row">
                <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
                    © 2026 Jirald Calusay
                </p>
                <div className="flex items-center gap-6 text-sm">
                    <a
                        href="https://www.linkedin.com/in/jirald-calusay-064b09220"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors text-secondary-text dark:text-secondary-text-dark hover:text-primary-text dark:hover:text-white"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/JiraldLaurea"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors text-secondary-text dark:text-secondary-text-dark hover:text-primary-text dark:hover:text-white"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
