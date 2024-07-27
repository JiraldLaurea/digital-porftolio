/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                custom: "0 3px 6px 3px rgba(0,0,0,0.06)",
                "custom-sm": "0 3px 6px 2px rgba(0,0,0,0.06)",
            },
            screens: {
                xs: "492px",
                // => @media (min-width: 640px) { ... }
            },
        },
    },
    plugins: [],
};
