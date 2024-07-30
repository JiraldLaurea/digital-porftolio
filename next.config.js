/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
    // other Next.js config options
});