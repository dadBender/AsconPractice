const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    ...i18n,
    localeDetection: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
