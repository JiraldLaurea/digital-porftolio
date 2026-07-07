import Image from "next/image";

type ButtonProps = {
    link: string;
    text: string;
    isPrimary?: boolean;
    isSmaller?: boolean;
    isFromNavbar?: boolean;
    isFigma?: boolean;
};

const Button = ({
    link,
    text,
    isPrimary,
    isSmaller,
    isFromNavbar,
    isFigma,
}: ButtonProps) => {
    return (
        // text-blue-600
        <a
            href={link}
            target="_blank"
            className={`
                flex items-center justify-center rounded-full transition-colors font-medium
                ${
                    isSmaller
                        ? `text-sm h-10 ${isFromNavbar ? "px-5" : "lg:px-5"}`
                        : "px-6 sm:px-7 h-11 text-sm sm:text-base sm:h-12"
                }
                ${
                    isPrimary
                        ? "text-primary1 bg-primary-text hover:bg-primary-text/85 dark:text-black dark:bg-white dark:hover:bg-white/85"
                        : "border hover:bg-primary-hovered hover:dark:bg-primary-hovered-dark dark:border-zinc-700"
                }
                ${isFigma && "gap-2"}`}
        >
            {isFigma && (
                <div className={`relative w-5 h-5`}>
                    <Image
                        src={`/img/skills_figma.svg`}
                        alt=""
                        fill
                        quality={100}
                        sizes="100vw"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
            )}
            <p>{text}</p>
        </a>
    );
};

export default Button;
