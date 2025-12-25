/** @type {import('next').NextConfig} */

// next.config.js
const withPWA = require("next-pwa")({
    dest: "public", // where service worker and files will be output
    disable: process.env.NODE_ENV === "development", // disables PWA in dev
    register: true, // automatically register service worker
    skipWaiting: true, // activate new SW immediately
});

module.exports = withPWA({
    turbopack: {},
    images: {
        qualities: [75, 100],
    },
});
