/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif'],
    domains: ['images.microcms-assets.io'], // Add the domain serving your images
  },
};

export default nextConfig;
