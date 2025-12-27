type ButtonProps = {
    link: string;
    text: string;
    isPrimary?: boolean;
    isSmaller?: boolean;
    isFromNavbar?: boolean;
};

const Button = ({
    link,
    text,
    isPrimary,
    isSmaller,
    isFromNavbar,
}: ButtonProps) => {
    return (
        // text-blue-600
        <a
            href={link}
            target="_blank"
            className={`
                flex items-center justify-center rounded-3xl transition-colors 
                ${
                    isSmaller
                        ? `text-sm h-10 ${isFromNavbar ? "px-5" : "lg:px-5"}`
                        : "px-4 sm:px-7 h-10 text-sm sm:text-base sm:h-12"
                } 
                ${
                    isPrimary
                        ? "text-white bg-accent hover:bg-accent-hovered dark:hover:bg-accent-hovered-dark dark:bg-accent-dark"
                        : "border hover:bg-primary-hovered hover:dark:bg-primary-hovered-dark dark:border-zinc-700"
                }`}
        >
            <p>{text}</p>
        </a>
    );
};

export default Button;
