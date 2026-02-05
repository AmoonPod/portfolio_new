/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect old service pages to new clean URLs
      {
        source: '/realizzazione-siti-web-modena',
        destination: '/siti-web',
        permanent: true,
      },
      {
        source: '/sviluppo-gestionali-personalizzati-modena',
        destination: '/gestionali',
        permanent: true,
      },
      {
        source: '/sviluppo-app-mobile-modena',
        destination: '/app-mobile',
        permanent: true,
      },
      {
        source: '/siti-web-strategici',
        destination: '/siti-web',
        permanent: true,
      },
      // Redirect old AI consultation page to home
      {
        source: '/consulenza-integrazione-ai-modena',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/siti-web-:city', // URL users will see
        destination: '/siti-web/:city', // The internal dynamic route
      },
    ];
  },
};

export default nextConfig;
