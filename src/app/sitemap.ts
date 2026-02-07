/**
 * DYNAMIC MULTI-SITEMAP GENERATOR (WAVE STRATEGY)
 * 
 * Generates split sitemaps to allow controlled rollout (drip-feed)
 * of thousands of programmatic pages.
 * 
 * SITEMAP INDEX:
 * - id: 0 -> Core pages, Blog, Hubs, Wave 1 Cities (Priority)
 * - id: 1 -> Wave 2 Cities (Regional Expansion)
 * - id: 2 -> Wave 3 Cities (National Expansion)
 * - id: 3 -> Wave 4 Cities (Deep Coverage)
 */

import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';
import { getAllCaseStudySlugs } from '@/data/case-studies/case-studies-data';
import { LOCATIONS, Location } from '@/data/locations';
import { getServicesWithCityPages } from '@/data/services-config';
import { NICHE_SLUGS, getNichesByServiceType } from '@/data/niches-config';
import { getAllPlaybookSlugs } from '@/data/playbooks';
import { getAllPosts } from '@/lib/blog';
import { getRegions, getProvinces } from '@/lib/seo/hub-generator';

const BASE_URL = DATA.url;

// =============================================================================
// SITEMAP INDEX GENERATION
// =============================================================================

export async function generateSitemaps() {
  // We have 4 distinct waves of content
  return [
    { id: 0 }, // Core + Wave 1
    { id: 1 }, // Wave 2
    { id: 2 }, // Wave 3
    { id: 3 }, // Wave 4
  ];
}

// =============================================================================
// SITEMAP GENERATOR
// =============================================================================

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const waveId = Number(id);

  // -------------------------------------------------------------------------
  // WAVE 0: CORE PAGES (Static, Blog, Hubs, Wave 1 Cities)
  // -------------------------------------------------------------------------
  if (waveId === 0) {
    // 1. Static Core Pages
    entries.push(
      { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
      { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
      { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
      { url: `${BASE_URL}/casi-studio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
      // Landing Pages
      { url: `${BASE_URL}/il-tuo-business-sanguina`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/offerta-landing`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
      { url: `${BASE_URL}/offerta-preventivo`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
      { url: `${BASE_URL}/offerta-rate`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
      { url: `${BASE_URL}/offerta-garanzia`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    );

    // 2. Blog Posts
    const blogPosts = getAllPosts();
    for (const post of blogPosts) {
      entries.push({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }

    // 3. Case Studies
    const caseStudies = getAllCaseStudySlugs();
    for (const slug of caseStudies) {
      entries.push({
        url: `${BASE_URL}/casi-studio/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }

    // 4. Service Hubs (Main pages like /siti-web)
    const services = getServicesWithCityPages();
    for (const service of services) {
      entries.push({
        url: `${BASE_URL}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      });
    }

    // 5. Niche Hubs & Playbooks
    for (const nicheSlug of NICHE_SLUGS) {
      entries.push({
        url: `${BASE_URL}/siti-web/${nicheSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });

      const playbooks = getAllPlaybookSlugs(nicheSlug);
      for (const topic of playbooks) {
        entries.push({
          url: `${BASE_URL}/siti-web/${nicheSlug}/${topic}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      }
    }

    // 6. Regional & Provincial Hubs (Mainly for siti-web and ecommerce)
    const hubServices = ['siti-web', 'ecommerce'];
    const regions = getRegions();
    const provinces = getProvinces();

    for (const serviceSlug of hubServices) {
      regions.forEach(region => {
        entries.push({
          url: `${BASE_URL}/${serviceSlug}/regione/${region.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });

      provinces.forEach(province => {
        entries.push({
          url: `${BASE_URL}/${serviceSlug}/provincia/${province.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.5,
        });
      });
    }
  }

  // -------------------------------------------------------------------------
  // CITY PAGES GENERATION (Based on Wave ID)
  // -------------------------------------------------------------------------
  
  // Filter locations for this wave
  // Wave 0 includes locations with wave=1 or undefined (legacy)
  // Wave 1 includes wave=2, etc.
  const waveLocations = LOCATIONS.filter(loc => {
    const locWave = loc.wave || 1; // Default to Wave 1 if undefined
    
    if (waveId === 0) return locWave === 1;
    if (waveId === 1) return locWave === 2;
    if (waveId === 2) return locWave === 3;
    if (waveId === 3) return locWave === 4;
    return false;
  });

  if (waveLocations.length > 0) {
    const services = getServicesWithCityPages();
    const sitiWebNiches = getNichesByServiceType('siti-web');

    for (const location of waveLocations) {
      // A. Service + City Pages (e.g. /siti-web/modena)
      for (const service of services) {
        if (location.population >= service.minPopulation) {
          entries.push({
            url: `${BASE_URL}/${service.slug}/${location.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: location.priority === 1 ? 0.9 : 0.8,
          });
        }
      }

      // B. Niche + City Pages (e.g. /siti-web/ristoranti/modena)
      for (const niche of sitiWebNiches) {
        if (location.population >= niche.minPopulation) {
          entries.push({
            url: `${BASE_URL}/siti-web/${niche.slug}/${location.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: location.priority === 1 ? 0.8 : 0.7,
          });
        }
      }
    }
  }

  return entries;
}
