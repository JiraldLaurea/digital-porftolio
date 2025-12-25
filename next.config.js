/** @type {import('next').NextConfig} */

// next.config.js
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
    // Merge your Next.js config here
    images: {
        qualities: [75, 100], // ✅ add allowed qualities
    },
});
