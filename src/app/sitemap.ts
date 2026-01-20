import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';
import { getAllSlugs } from '@/data/local-pages/siti-web-dataset';
import { getAllCaseStudySlugs } from '@/data/case-studies/case-studies-data';
import { getAllLocationSlugs } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url;

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
    {
      url: `${baseUrl}/il-tuo-business-sanguina`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Landing page offerte (tutte indicizzate)
    {
      url: `${baseUrl}/offerta-landing`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/offerta-preventivo`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offerta-rate`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offerta-garanzia`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/siti-web`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sviluppo-software`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sviluppo-app-mobile`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/casi-studio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Case studies pages
  const caseStudySlugs = getAllCaseStudySlugs();
  const caseStudyPages = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/casi-studio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Local pages - Software Gestionali (all cities from locations)
  const allLocationSlugs = getAllLocationSlugs();

  const sitiWebLocalPages = allLocationSlugs.map((slug) => ({
    url: `${baseUrl}/siti-web/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority:
      slug.includes('reggio-emilia') || slug.includes('sassuolo') ? 0.9 : 0.8,
  }));

  const softwareGestionaliLocalPages = allLocationSlugs.map((slug) => ({
    url: `${baseUrl}/sviluppo-software/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority:
      slug.includes('reggio-emilia') || slug.includes('modena') || slug.includes('bologna') ? 0.9 : 0.8,
  }));

  return [
    ...staticPages,
    ...caseStudyPages,
    ...sitiWebLocalPages,
    ...softwareGestionaliLocalPages,
  ];
}
