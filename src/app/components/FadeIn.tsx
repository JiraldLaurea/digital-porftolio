"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
    y?: number;
    duration?: number;
    className?: string;
    /** Fade in immediately on mount instead of when scrolled into view. */
    onMount?: boolean;
};

const FadeIn = ({
    children,
    delay = 0,
    y = 16,
    duration = 0.5,
    className,
    onMount = false,
}: FadeInProps) => {
    const reveal = onMount
        ? { animate: { opacity: 1, y: 0 } }
        : {
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
          };

    return (
        <motion.div
            initial={{ opacity: 0, y }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...reveal}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
