/** @type {import('next').NextConfig} */

// next.config.js
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
    turbopack: {},
    images: {
        qualities: [75, 100],
    },
});
