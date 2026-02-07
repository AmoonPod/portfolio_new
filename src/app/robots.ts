import { MetadataRoute } from 'next'
import { DATA } from '@/data/resume'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/edit-cms'],
    },
    sitemap: [
      `${DATA.url}/sitemap.xml`,
      `${DATA.url}/sitemap/0.xml`,
    ],
  }
}





