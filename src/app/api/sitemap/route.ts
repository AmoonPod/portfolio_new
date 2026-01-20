import { NextRequest, NextResponse } from 'next/server';
import { locations } from '@/data/locations';
import {
  buildRootSitemap,
  buildCitySitemap,
  buildProvinceSitemaps,
  generateSitemapXml,
  generateSitemapIndexXml,
} from '@/lib/sitemap';

const BASE_URL = 'https://manueldeceglie.it';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const province = searchParams.get('province');

  if (type === 'index') {
    const sitemaps: Array<{ loc: string; lastmod: string }> = [
      { loc: `${BASE_URL}/api/sitemap?type=root`, lastmod: new Date().toISOString().split('T')[0] },
    ];

    if (locations.length > 0) {
      sitemaps.push({
        loc: `${BASE_URL}/api/sitemap?type=cities`,
        lastmod: new Date().toISOString().split('T')[0],
      });
    }

    const provinceSitemaps = buildProvinceSitemaps();
    provinceSitemaps.forEach(p => {
      sitemaps.push({
        loc: `${BASE_URL}/api/sitemap?province=${p.provinceSlug}`,
        lastmod: new Date().toISOString().split('T')[0],
      });
    });

    const xml = generateSitemapIndexXml(sitemaps);
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }

  if (province) {
    const { buildProvinceSitemapEntries } = await import('@/lib/sitemap');
    const entries = buildProvinceSitemapEntries(province);
    const xml = generateSitemapXml(entries);
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }

  let entries;
  const typeParam = type || 'all';

  switch (typeParam) {
    case 'root':
      entries = buildRootSitemap();
      break;
    case 'cities':
      entries = buildCitySitemap();
      break;
    default:
      entries = [...buildRootSitemap(), ...buildCitySitemap()];
  }

  const xml = generateSitemapXml(entries);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
