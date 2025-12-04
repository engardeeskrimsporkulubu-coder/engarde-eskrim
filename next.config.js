/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Modern tarayıcılar için ES6+ desteği - polyfill'leri azaltır
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  transpilePackages: [],
  // Webpack optimizasyonları - kullanılmayan kodu azaltır
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      // Production'da tree shaking ve code splitting optimizasyonu
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
      };
    }
    return config;
  },
};

module.exports = nextConfig;

