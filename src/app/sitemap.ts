/**
 * DYNAMIC SITEMAP GENERATOR
 * 
 * Automatically generates sitemap entries for all:
 * - Static pages
 * - Service pages (all cities that qualify based on population)
 * - Niche hub and playbook pages
 * - Blog posts
 * - Case studies
 * 
 * Total pages: ~350-500 (with 60 cities x 6 services)
 * 
 * To add new services:
 * 1. Add to services-config.ts
 * 2. This sitemap will automatically include qualifying cities
 */

import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';
import { getAllCaseStudySlugs } from '@/data/case-studies/case-studies-data';
import { LOCATIONS } from '@/data/locations';
import { getServicesWithCityPages } from '@/data/services-config';
import { NICHE_SLUGS, getNichesByServiceType } from '@/data/niches-config';
import { getAllPlaybookSlugs } from '@/data/playbooks';
import { getAllPosts } from '@/lib/blog';

// =============================================================================
// CONFIGURATION
// =============================================================================

const BASE_URL = DATA.url;

const PRIORITY = {
  HOME: 1.0,
  SERVICE_HUB: 1.0,        // /siti-web, /ecommerce
  SERVICE_CITY_P1: 0.9,    // Priority 1 cities
  SERVICE_CITY_P2: 0.8,    // Priority 2 cities
  SERVICE_CITY_P3: 0.7,    // Priority 3 cities
  NICHE_HUB: 0.9,
  PLAYBOOK: 0.8,
  CASE_STUDY: 0.8,
  BLOG_POST: 0.8,
  LANDING_OFFER: 0.9,
  BLOG_LIST: 0.9,
  LEGAL: 0.3,
};

const CHANGE_FREQ = {
  DAILY: 'daily' as const,
  WEEKLY: 'weekly' as const,
  MONTHLY: 'monthly' as const,
  YEARLY: 'yearly' as const,
};

// =============================================================================
// SITEMAP GENERATOR
// =============================================================================

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // -------------------------------------------------------------------------
  // 1. STATIC CORE PAGES
  // -------------------------------------------------------------------------
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
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: PRIORITY.BLOG_LIST,
    },
    {
      url: `${BASE_URL}/casi-studio`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: PRIORITY.LANDING_OFFER,
    },
    // Offer/Landing pages
    {
      url: `${BASE_URL}/il-tuo-business-sanguina`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.MONTHLY,
      priority: PRIORITY.LANDING_OFFER,
    },
    {
      url: `${BASE_URL}/offerta-landing`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.DAILY,
      priority: PRIORITY.SERVICE_HUB,
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

  entries.push(...staticPages);

  // -------------------------------------------------------------------------
  // 2. SERVICE HUB PAGES + CITY PAGES (Dynamic based on services-config.ts)
  // -------------------------------------------------------------------------
  const services = getServicesWithCityPages();

  for (const service of services) {
    // Service hub page (e.g., /ecommerce, /siti-web)
    entries.push({
      url: `${BASE_URL}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: PRIORITY.SERVICE_HUB,
    });

    // City pages for this service
    for (const location of LOCATIONS) {
      // Skip cities that don't meet minimum population for this service
      if (location.population < service.minPopulation) {
        continue;
      }

      // Determine priority based on location priority tier
      let priority: number;
      switch (location.priority) {
        case 1:
          priority = PRIORITY.SERVICE_CITY_P1;
          break;
        case 2:
          priority = PRIORITY.SERVICE_CITY_P2;
          break;
        default:
          priority = PRIORITY.SERVICE_CITY_P3;
      }

      entries.push({
        url: `${BASE_URL}/${service.slug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: CHANGE_FREQ.WEEKLY,
        priority,
      });
    }
  }

  // -------------------------------------------------------------------------
  // 3. NICHE HUB & PLAYBOOK PAGES & NICHE CITY PAGES
  // -------------------------------------------------------------------------
  
  // A. Niche Hubs & Playbooks (Siti Web)
  for (const nicheSlug of NICHE_SLUGS) {
    // Niche hub page (e.g., /siti-web/ristoranti)
    entries.push({
      url: `${BASE_URL}/siti-web/${nicheSlug}`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.WEEKLY,
      priority: PRIORITY.NICHE_HUB,
    });

    // Playbook pages (e.g., /siti-web/ristoranti/menu-online)
    const playbookSlugs = getAllPlaybookSlugs(nicheSlug);
    for (const topic of playbookSlugs) {
      entries.push({
        url: `${BASE_URL}/siti-web/${nicheSlug}/${topic}`,
        lastModified: new Date(),
        changeFrequency: CHANGE_FREQ.MONTHLY,
        priority: PRIORITY.PLAYBOOK,
      });
    }
  }

  // B. Niche City Pages (Siti Web Only for now)
  // Cross-reference all siti-web niches with all qualifying cities
  const sitiWebNiches = getNichesByServiceType('siti-web');
  
  for (const niche of sitiWebNiches) {
    for (const location of LOCATIONS) {
      // Skip if city is too small for this niche
      if (location.population < niche.minPopulation) {
        continue;
      }

      // Determine priority - usually lower than main service pages
      let priority = PRIORITY.SERVICE_CITY_P3; // Default
      if (location.priority === 1) priority = PRIORITY.SERVICE_CITY_P2;

      entries.push({
        url: `${BASE_URL}/siti-web/${niche.slug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: CHANGE_FREQ.WEEKLY,
        priority,
      });
    }
  }

  // -------------------------------------------------------------------------
  // 4. CASE STUDIES
  // -------------------------------------------------------------------------
  const caseStudySlugs = getAllCaseStudySlugs();
  for (const slug of caseStudySlugs) {
    entries.push({
      url: `${BASE_URL}/casi-studio/${slug}`,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQ.MONTHLY,
      priority: PRIORITY.CASE_STUDY,
    });
  }

  // -------------------------------------------------------------------------
  // 5. BLOG POSTS
  // -------------------------------------------------------------------------
  const blogPosts = getAllPosts();
  for (const post of blogPosts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: CHANGE_FREQ.MONTHLY,
      priority: PRIORITY.BLOG_POST,
    });
  }

  return entries;
}

// =============================================================================
// STATS HELPER (for debugging/monitoring)
// =============================================================================

export function getSitemapStats(): {
  totalPages: number;
  breakdown: Record<string, number>;
} {
  const services = getServicesWithCityPages();
  const breakdown: Record<string, number> = {
    static: 9, // Approximate static pages
    caseStudies: getAllCaseStudySlugs().length,
    blogPosts: getAllPosts().length,
  };

  // Calculate service pages
  for (const service of services) {
    const qualifyingCities = LOCATIONS.filter(
      loc => loc.population >= service.minPopulation
    ).length;
    breakdown[`${service.slug} (hub + cities)`] = 1 + qualifyingCities;
  }

  // Niche pages
  let nichePages = 0;
  for (const nicheSlug of NICHE_SLUGS) {
    nichePages += 1; // Hub
    nichePages += getAllPlaybookSlugs(nicheSlug).length; // Playbooks
  }
  breakdown['niches (hubs + playbooks)'] = nichePages;

  const totalPages = Object.values(breakdown).reduce((sum, count) => sum + count, 0);

  return { totalPages, breakdown };
}
