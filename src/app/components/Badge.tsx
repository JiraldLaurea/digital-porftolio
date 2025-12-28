import React from "react";

type BadgeProps = {
    text: string;
};

const Badge = ({ text }: BadgeProps) => {
    return (
        <p className="px-4 py-1 text-xs font-medium border rounded-full sm:text-sm text-zinc-600 dark:text-zinc-300 bg-primary3 dark:bg-primary3-dark dark:border-zinc-700 w-fit">
            {text}
        </p>
    );
};

export default Badge;
