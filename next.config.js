/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['8fpa87ovv8.ufs.sh'],
  },
  typescript: {
    // WARNING: Allows production builds to complete even if
    // your project has type errors. Remove this once TS errors
    // are resolved.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
