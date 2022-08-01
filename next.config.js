const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPWA(nextConfig)
