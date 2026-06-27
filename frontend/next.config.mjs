/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid PackFileCacheStrategy on disk (often corrupts under OneDrive / cloud sync).
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;
