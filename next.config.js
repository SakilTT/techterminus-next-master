const isProd = process.env.NODE_ENV === 'production';
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  assetPrefix: isProd ? '/techterminus-next-master/' : '',
  basePath: isProd ? '/techterminus-next-master' : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  poweredByHeader: false,
  trailingSlash: true,
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
