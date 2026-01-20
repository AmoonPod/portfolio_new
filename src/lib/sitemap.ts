import { locations, getAllLocationSlugs } from '@/data/locations';
import { getAllProvinces } from '@/lib/link-graph/graph';

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface ProvinceSitemap {
  provinceSlug: string;
  provinceName: string;
  cities: SitemapEntry[];
}

const BASE_URL = 'https://manueldeceglie.it';

export function buildRootSitemap(): SitemapEntry[] {
  return [
    {
      url: BASE_URL,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/siti-web`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/seo`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/social-media`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
    },
  ];
}

export function buildCitySitemap(): SitemapEntry[] {
  return getAllLocationSlugs().map(slug => {
    const location = locations.find(l => l.slug === slug);
    return {
      url: `${BASE_URL}/siti-web/${slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: calculatePriority(location?.population || 0),
    };
  });
}

export function buildProvinceSitemaps(): ProvinceSitemap[] {
  const provinces = getAllProvinces();
  
  return provinces.map(province => ({
    provinceSlug: province.slug,
    provinceName: province.name,
    cities: province.cities.map(city => ({
      url: `${BASE_URL}/siti-web/${city.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: calculatePriority(city.population),
    })),
  }));
}

export function buildProvinceSitemapEntries(provinceSlug: string): SitemapEntry[] {
  const province = getAllProvinces().find(p => p.slug === provinceSlug);
  if (!province) return [];

  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/siti-web/${provinceSlug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9,
    },
  ];

  entries.push(...province.cities.map(city => ({
    url: `${BASE_URL}/siti-web/${city.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: calculatePriority(city.population),
  })));

  return entries;
}

function calculatePriority(population: number): number {
  if (population > 100000) return 0.9;
  if (population > 50000) return 0.8;
  if (population > 20000) return 0.7;
  if (population > 10000) return 0.6;
  if (population > 5000) return 0.5;
  return 0.4;
}

export function generateSitemapXml(entries: SitemapEntry[]): string {
  const urls = entries.map(entry => {
    let url = `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${entry.changefreq || 'monthly'}</changefreq>
    <priority>${entry.priority || 0.5}</priority>
  </url>`;
    return url;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function generateSitemapIndexXml(
  sitemaps: Array<{ loc: string; lastmod: string }>
): string {
  const entries = sitemaps.map(s => `  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

export function buildCompleteSitemapIndex(): string {
  const sitemaps: Array<{ loc: string; lastmod: string }> = [
    { loc: `${BASE_URL}/sitemap-root.xml`, lastmod: new Date().toISOString().split('T')[0] },
  ];

  const provinceSitemaps = buildProvinceSitemaps();
  provinceSitemaps.forEach(province => {
    sitemaps.push({
      loc: `${BASE_URL}/sitemap-${province.provinceSlug}.xml`,
      lastmod: new Date().toISOString().split('T')[0],
    });
  });

  if (locations.length > 1000) {
    const chunkSize = 1000;
    for (let i = 0; i < locations.length; i += chunkSize) {
      const chunk = locations.slice(i, i + chunkSize);
      sitemaps.push({
        loc: `${BASE_URL}/sitemap-cities-${Math.floor(i / chunkSize) + 1}.xml`,
        lastmod: new Date().toISOString().split('T')[0],
      });
    }
  }

  return generateSitemapIndexXml(sitemaps);
}
