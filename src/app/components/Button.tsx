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
                flex items-center justify-center rounded-md transition-colors 
                ${
                    isSmaller
                        ? `text-sm h-10 ${isFromNavbar ? "px-5" : "lg:px-5"}`
                        : "px-5 sm:px-6 h-10 text-sm sm:text-base sm:h-12"
                } 
                ${
                    isPrimary
                        ? "text-white bg-accent hover:bg-accent-hovered dark:hover:bg-accent-hovered-dark dark:bg-accent-dark"
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
