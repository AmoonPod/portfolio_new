import { MetadataRoute } from 'next'
import { DATA } from '@/data/resume'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Service pages (generic)
  const servicePages = [
    {
      url: `${baseUrl}/siti-web`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Local pages - Siti Web
  const sitiWebLocalPages = [
    {
      url: `${baseUrl}/siti-web-modena`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/siti-web-reggio-emilia`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/siti-web-castelnovo-ne-monti`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [
    ...staticPages,
    ...servicePages,
    ...sitiWebLocalPages,
  ]
}





