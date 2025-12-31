import { MetadataRoute } from 'next'
import { DATA } from '@/data/resume'
import { getAllSlugs } from '@/data/local-pages/siti-web-dataset'

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

  // Local pages - Siti Web (generated dynamically from dataset)
  const localSlugs = getAllSlugs()
  const sitiWebLocalPages = localSlugs.map(slug => ({
    url: `${baseUrl}/siti-web-${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: slug.includes('reggio-emilia') || slug.includes('sassuolo') ? 0.8 : 0.7,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...sitiWebLocalPages,
  ]
}





