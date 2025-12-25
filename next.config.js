/** @type {import('next').NextConfig} */

// next.config.js
const withPWA = require("next-pwa")({
    dest: "public", // where service worker and files will be output
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/app",
    sw: "service-worker.js",
});

module.exports = withPWA({
    turbopack: {},
    images: {
        qualities: [75, 100],
    },
});
