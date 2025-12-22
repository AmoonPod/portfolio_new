/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      // Redirect blog to home
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/',
        permanent: true,
      },
      // Redirect old AI consultation page to home
      {
        source: '/consulenza-integrazione-ai-modena',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
