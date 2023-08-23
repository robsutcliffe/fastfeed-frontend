const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  unoptimized: true,
  assetPrefix: './',
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
});
