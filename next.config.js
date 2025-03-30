/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com'],
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}

module.exports = nextConfig 