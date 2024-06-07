// @ts-check
const withMakeswift = require('@makeswift/runtime/next/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: process.env.BIGCOMMERCE_CDN_HOSTNAME ?? '*.bigcommerce.com',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['@bigcommerce/components'],
  typescript: {
    ignoreBuildErrors: !!process.env.CI,
  },
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
    dirs: ['app', 'client', 'components', 'lib', 'middlewares', 'pages', 'providers'],
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    optimizePackageImports: ['@icons-pack/react-simple-icons'],
  },

  
};

module.exports = withMakeswift(nextConfig);
