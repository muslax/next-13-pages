const { EnvironmentPlugin } = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // webpack(config) {
  //     config.plugins.push(new EnvironmentPlugin(['HONOKV', 'HONODB']));
  //     return config;
  // },
}

module.exports = nextConfig
