import { Location, targetLocations, getLocationBySlug } from '@/data/locations';

export interface NeighborCity {
  location: Location;
  distanceKm: number;
}

export interface ProvinceInfo {
  name: string;
  slug: string;
  region: string;
  cityCount: number;
  totalPopulation: number;
  mainCity?: Location;
  cities: Location[];
}

export interface HubSpokeRelation {
  hub: {
    type: 'province' | 'region';
    name: string;
    slug: string;
    url: string;
  };
  spoke: Location;
}

const EARTH_RADIUS_KM = 6371;

export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return EARTH_RADIUS_KM * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function getNearestNeighbors(
  citySlug: string,
  limit: number = 5,
  maxDistanceKm: number = 50
): NeighborCity[] {
  const city = getLocationBySlug(citySlug);
  if (!city) return [];

  const neighbors: NeighborCity[] = [];

  for (const other of targetLocations) {
    if (other.slug === citySlug) continue;

    const distance = haversineDistance(
      city.geo.lat,
      city.geo.lng,
      other.geo.lat,
      other.geo.lng
    );

    if (distance <= maxDistanceKm) {
      neighbors.push({
        location: other,
        distanceKm: Math.round(distance * 10) / 10,
      });
    }
  }

  return neighbors
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit);
}

export function getAllProvinces(): ProvinceInfo[] {
  const provinceMap = new Map<string, ProvinceInfo>();

  for (const location of targetLocations) {
    const existing = provinceMap.get(location.province);
    
    if (existing) {
      existing.cityCount++;
      existing.totalPopulation += location.population;
      existing.cities.push(location);
      if (!existing.mainCity || location.population > existing.mainCity.population) {
        existing.mainCity = location;
      }
    } else {
      provinceMap.set(location.province, {
        name: location.province,
        slug: slugify(location.province),
        region: location.region,
        cityCount: 1,
        totalPopulation: location.population,
        mainCity: location,
        cities: [location],
      });
    }
  }

  return Array.from(provinceMap.values()).sort((a, b) => b.cityCount - a.cityCount);
}

export function getProvinceInfo(provinceName: string): ProvinceInfo | undefined {
  const allProvinces = getAllProvinces();
  return allProvinces.find(p => 
    p.name.toLowerCase() === provinceName.toLowerCase()
  );
}

export function getProvinceByCitySlug(citySlug: string): ProvinceInfo | undefined {
  const city = getLocationBySlug(citySlug);
  if (!city) return undefined;
  return getProvinceInfo(city.province);
}

export function getHubSpokeRelation(citySlug: string): HubSpokeRelation | null {
  const city = getLocationBySlug(citySlug);
  if (!city) return null;

  const province = getProvinceByCitySlug(citySlug);

  return {
    hub: {
      type: 'province',
      name: province?.name || city.province,
      slug: province?.slug || slugify(city.province),
      url: `/siti-web/${slugify(city.province)}`,
    },
    spoke: city,
  };
}

export function buildProvinceBreadcrumb(
  citySlug: string
): Array<{ name: string; url: string }> {
  const city = getLocationBySlug(citySlug);
  if (!city) return [];

  return [
    { name: 'Home', url: 'https://manueldeceglie.it' },
    { name: 'Siti Web', url: 'https://manueldeceglie.it/siti-web' },
    { name: city.province, url: `https://manueldeceglie.it/siti-web/${slugify(city.province)}` },
    { name: city.name, url: `https://manueldeceglie.it/siti-web/${citySlug}` },
  ];
}

export function buildRegionBreadcrumb(
  citySlug: string
): Array<{ name: string; url: string }> {
  const city = getLocationBySlug(citySlug);
  if (!city) return [];

  return [
    { name: 'Home', url: 'https://manueldeceglie.it' },
    { name: 'Servizi', url: 'https://manueldeceglie.it/siti-web' },
    { name: city.region, url: `https://manueldeceglie.it/siti-web/${slugify(city.region.toLowerCase().replace(/ /g, '-'))}` },
    { name: city.name, url: `https://manueldeceglie.it/siti-web/${citySlug}` },
  ];
}

export function generateNeighborFooter(
  citySlug: string,
  maxNeighbors: number = 6
): string {
  const neighbors = getNearestNeighbors(citySlug, maxNeighbors);
  
  if (neighbors.length === 0) return '';

  const neighborNames = neighbors
    .map(n => n.location.name)
    .join(', ');

  return `Operiamo anche a: ${neighborNames}`;
}

export function getCitiesForProvince(provinceSlug: string): Location[] {
  const province = getAllProvinces().find(
    p => p.slug === provinceSlug
  );
  return province?.cities || [];
}

export function getTopCitiesForProvince(
  provinceSlug: string,
  limit: number = 8
): Location[] {
  const cities = getCitiesForProvince(provinceSlug);
  return cities
    .sort((a, b) => b.population - a.population)
    .slice(0, limit);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function generateInternalLinks(
  citySlug: string,
  options: {
    includeProvinceLink?: boolean;
    includeNearestNeighbors?: boolean;
    includeRegionalContext?: boolean;
    maxNeighbors?: number;
  } = {}
): InternalLink[] {
  const {
    includeProvinceLink = true,
    includeNearestNeighbors = true,
    includeRegionalContext = true,
    maxNeighbors = 6,
  } = options;

  const links: InternalLink[] = [];
  const city = getLocationBySlug(citySlug);
  
  if (!city) return links;

  if (includeProvinceLink) {
    const province = getProvinceByCitySlug(citySlug);
    if (province) {
      links.push({
        type: 'province_hub',
        title: `Siti Web nella provincia di ${province.name}`,
        url: `/siti-web/${province.slug}`,
        context: `Tutte le città della provincia di ${province.name}`,
      });
    }
  }

  if (includeNearestNeighbors) {
    const neighbors = getNearestNeighbors(citySlug, maxNeighbors);
    for (const neighbor of neighbors) {
      links.push({
        type: 'nearest_neighbor',
        title: `Siti Web a ${neighbor.location.name}`,
        url: `/siti-web/${neighbor.location.slug}`,
        context: `A soli ${neighbor.distanceKm} km da ${city.name}`,
      });
    }
  }

  if (includeRegionalContext) {
    links.push({
      type: 'regional_hub',
      title: `Siti Web in ${city.region}`,
      url: `/siti-web/${slugify(city.region.toLowerCase())}`,
      context: `Tutte le città della ${city.region}`,
    });
  }

  return links;
}

export interface InternalLink {
  type: 'province_hub' | 'nearest_neighbor' | 'regional_hub' | 'service_hub';
  title: string;
  url: string;
  context?: string;
}

export function getServiceHubLink(serviceSlug: string): InternalLink {
  const serviceNames: Record<string, string> = {
    'siti-web': 'Siti Web',
    'seo': 'SEO',
    'social-media': 'Social Media',
    'ecommerce': 'E-commerce',
  };

  return {
    type: 'service_hub',
    title: `${serviceNames[serviceSlug] || serviceSlug}`,
    url: `/${serviceSlug}`,
  };
}
