const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Esto ignorará los errores de TypeScript y permitirá que la build finalice.
    ignoreBuildErrors: true,
  },
  // Puedes incluir otras configuraciones de Next.js aquí
};

module.exports = withNextIntl(nextConfig);