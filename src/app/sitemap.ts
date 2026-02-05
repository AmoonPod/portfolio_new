import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';
import { getAllCaseStudySlugs } from '@/data/case-studies/case-studies-data';
import { getAllLocationSlugs } from '@/data/locations';
import { NICHE_SLUGS } from '@/data/niches-config';
import { getAllPlaybookSlugs } from '@/data/playbooks';
import { getAllPosts } from '@/lib/blog';

// Constants for Sitemap Configuration
const BASE_URL = DATA.url;
const PRIORITY = {
  HOME: 1.0,
  LANDING_CORE: 1.0,
  LANDING_OFFER: 0.9,
  LOCAL_CORE: 0.9, // Key cities
  LOCAL_STD: 0.8,  // Other cities
  CASE_STUDY: 0.8,
  NICHE_HUB: 0.9,
  PLAYBOOK: 0.8,
  BLOG_POST: 0.8,
  LEGAL: 0.3,
};

const CHANGE_FREQ = {
  DAILY: 'daily' as const,
  WEEKLY: 'weekly' as const,
  MONTHLY: 'monthly' as const,
  YEARLY: 'yearly' as const,
};

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static Core Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: PRIORITY.HOME,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.YEARLY,
      priority: PRIORITY.LEGAL,
    },
    {
      url: `${BASE_URL}/il-tuo-business-sanguina`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.MONTHLY,
      priority: PRIORITY.LANDING_OFFER,
    },
    // Core Services
    {
      url: `${BASE_URL}/siti-web`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: PRIORITY.LANDING_CORE,
    },
    {
      url: `${BASE_URL}/sviluppo-software`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: PRIORITY.LANDING_CORE,
    },
    {
      url: `${BASE_URL}/sviluppo-app-mobile`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: 0.9, // Slightly less than core services? Or same? Let's keep 0.9 as per previous
    },
    {
      url: `${BASE_URL}/casi-studio`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: 0.9,
    },
    // Blog
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: 0.9,
    },
    // Offer Landing Pages
    {
      url: `${BASE_URL}/offerta-landing`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.DAILY,
      priority: PRIORITY.LANDING_CORE,
    },
    {
      url: `${BASE_URL}/offerta-preventivo`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.DAILY,
      priority: PRIORITY.LANDING_OFFER,
    },
    {
      url: `${BASE_URL}/offerta-rate`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.DAILY,
      priority: PRIORITY.LANDING_OFFER,
    },
    {
      url: `${BASE_URL}/offerta-garanzia`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.DAILY,
      priority: PRIORITY.LANDING_OFFER,
    },
  ];

  // 2. Case Studies
  const caseStudySlugs = getAllCaseStudySlugs();
  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${BASE_URL}/casi-studio/${slug}`,
    lastModified: new Date(),
    changeFrequency: CHANGE_FREQ.MONTHLY,
    priority: PRIORITY.CASE_STUDY,
  }));

  // 3. Local Pages (Siti Web & Software)
  const allLocationSlugs = getAllLocationSlugs();
  
  const isPriorityCity = (slug: string) => 
    slug.includes('reggio-emilia') || 
    slug.includes('sassuolo') || 
    slug.includes('modena') || 
    slug.includes('bologna');

  const sitiWebLocalPages: MetadataRoute.Sitemap = allLocationSlugs.map((slug) => ({
    url: `${BASE_URL}/siti-web/${slug}`,
    lastModified: new Date(),
    changeFrequency: CHANGE_FREQ.WEEKLY,
    priority: isPriorityCity(slug) ? PRIORITY.LOCAL_CORE : PRIORITY.LOCAL_STD,
  }));

  const softwareGestionaliLocalPages: MetadataRoute.Sitemap = allLocationSlugs.map((slug) => ({
    url: `${BASE_URL}/sviluppo-software/${slug}`,
    lastModified: new Date(),
    changeFrequency: CHANGE_FREQ.WEEKLY,
    priority: isPriorityCity(slug) ? PRIORITY.LOCAL_CORE : PRIORITY.LOCAL_STD,
  }));

  // 4. Niche Hub & Playbooks
  const nichePages: MetadataRoute.Sitemap = [];
  
  NICHE_SLUGS.forEach((niche) => {
    // Hub Page (e.g. /siti-web/ristoranti)
    nichePages.push({
      url: `${BASE_URL}/siti-web/${niche}`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: PRIORITY.NICHE_HUB,
    });

    // Playbook Pages (e.g. /siti-web/ristoranti/menu-online)
    const playbookSlugs = getAllPlaybookSlugs(niche);
    playbookSlugs.forEach((topic) => {
      nichePages.push({
        url: `${BASE_URL}/siti-web/${niche}/${topic}`,
        lastModified: new Date(),
        changeFrequency: CHANGE_FREQ.MONTHLY,
        priority: PRIORITY.PLAYBOOK,
      });
    });
  });

  // 5. Blog Posts
  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: CHANGE_FREQ.MONTHLY,
    priority: PRIORITY.BLOG_POST,
  }));

  return [
    ...staticPages,
    ...caseStudyPages,
    ...sitiWebLocalPages,
    ...softwareGestionaliLocalPages,
    ...nichePages,
    ...blogPages,
  ];
}
