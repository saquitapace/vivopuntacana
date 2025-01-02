/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: ['gravatar.com', 'www.gstatic.com'],
  },
  experimental: {
    esmExternals: true,
  },
  i18n,
};

module.exports = nextConfig;
