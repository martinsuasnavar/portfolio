/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! ADVERTENCIA !!
    // Esto permite que la build termine con éxito aunque haya errores de tipo.
    ignoreBuildErrors: true,
  },
}

export default nextConfig;
