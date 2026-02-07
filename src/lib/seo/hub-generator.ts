import { LOCATIONS, Location, Province } from '@/data/locations';
import { getServiceBySlug } from '@/data/services-config';

export interface HubPageData {
  title: string;
  description: string;
  h1: string;
  serviceName: string;
  items: Array<{
    name: string;
    slug: string;
    href: string;
    count?: number;
  }>;
  parent?: {
    name: string;
    href: string;
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function getRegions() {
  const regions = [...new Set(LOCATIONS.map(l => l.region))];
  return regions.map(r => ({
    name: r,
    slug: slugify(r)
  }));
}

export function getProvinces() {
  const provinces = [...new Set(LOCATIONS.map(l => l.province))];
  return provinces.map(p => ({
    name: p,
    slug: slugify(p)
  }));
}

export function getRegionBySlug(slug: string) {
  return getRegions().find(r => r.slug === slug);
}

export function getProvinceBySlug(slug: string) {
  return getProvinces().find(p => p.slug === slug);
}

export function generateRegionHubData(regionSlug: string, serviceSlug: string = 'siti-web'): HubPageData | null {
  const region = getRegionBySlug(regionSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!region || !service) return null;

  const provincesInRegion = [...new Set(LOCATIONS.filter(l => l.region === region.name).map(l => l.province))];
  
  return {
    title: `${service.name} in ${region.name}: Sviluppo e Strategia | Manuel De Ceglie`,
    description: `Servizi professionali di ${service.name.toLowerCase()} in tutta la regione ${region.name}. Scopri le soluzioni per la tua attività nelle principali province.`,
    h1: `${service.name} in ${region.name}`,
    serviceName: service.name,
    items: provincesInRegion.map(p => ({
      name: p,
      slug: slugify(p),
      href: `/${serviceSlug}/provincia/${slugify(p)}`,
      count: LOCATIONS.filter(l => l.province === p && l.population >= service.minPopulation).length
    })).filter(item => item.count! > 0).sort((a, b) => a.name.localeCompare(b.name))
  };
}

export function generateProvinceHubData(provinceSlug: string, serviceSlug: string = 'siti-web'): HubPageData | null {
  const province = getProvinceBySlug(provinceSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!province || !service) return null;

  const citiesInProvince = LOCATIONS.filter(l => l.province === province.name && l.population >= service.minPopulation);
  if (citiesInProvince.length === 0) return null;
  
  const region = citiesInProvince[0]?.region;

  return {
    title: `${service.name} Provincia di ${province.name}: Consulente Locale | Manuel De Ceglie`,
    description: `Servizi di ${service.name.toLowerCase()} per aziende e professionisti in provincia di ${province.name}. Qualità garantita in tutti i comuni della zona.`,
    h1: `${service.name} in Provincia di ${province.name}`,
    serviceName: service.name,
    parent: {
      name: region,
      href: `/${serviceSlug}/regione/${slugify(region)}`
    },
    items: citiesInProvince.map(c => ({
      name: c.name,
      slug: c.slug,
      href: `/${serviceSlug}/${c.slug}`
    })).sort((a, b) => a.name.localeCompare(b.name))
  };
}
