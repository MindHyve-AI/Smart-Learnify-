/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'img.clerk.com',
      'images.clerk.dev',
      'uploadthing.com',
      'utfs.io',
    ],
  },
  // Add the webpack configuration to handle mp3 files
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      }
    });

    return config;
  },
};

module.exports = nextConfig; 