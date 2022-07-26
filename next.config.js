/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ihsanshots.mo.cloudinary.net'],
  },
};

module.exports = nextConfig;
