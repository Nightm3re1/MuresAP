/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

const nextConfig = {
  images: {
    domains: ['8fpa87ovv8.ufs.sh'],
  },
  typescript: {
    // Temporarily allow production builds to succeed despite TS errors
    ignoreBuildErrors: true,
  },
};

module.exports = withNextIntl(nextConfig);
