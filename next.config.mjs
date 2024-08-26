/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ativa o modo estrito do React
  swcMinify: true, // Usa o SWC para minificação de código
  images: {
    domains: ['example.com'], // Adicione domínios permitidos para imagens externas
  },
};

export default nextConfig;
