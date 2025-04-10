/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Incremental Static Regeneration
  output: 'export',
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.clerk.dev',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
  
  // For Azure Static Web App deployments
  trailingSlash: true,
  
  // Strict mode for better development
  reactStrictMode: true,
  
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig; 