export interface Location {
  id: string;
  slug: string;
  name: string;
  province: string;
  region: string;
  population: number;
  geo: {
    lat: number;
    lng: number;
  };
}

// Target cities currently served (others removed to avoid thin/scaled local pages)
export const TARGET_CITY_SLUGS = [
  'castelnovo-ne-monti',
  'carpineti',
  'sassuolo',
  'maranello',
  'fiorano-modenese',
  'vignola',
  'reggio-emilia',
  'modena',
  'bologna',
  'carpi',
] as const;

// Cities where niche pages are allowed
export const NICHE_CITY_SLUGS = ['modena', 'reggio-emilia'] as const;

const TARGET_CITY_SET = new Set<string>(TARGET_CITY_SLUGS);
export const NICHE_CITY_SET = new Set<string>(NICHE_CITY_SLUGS);

export const locations: Location[] = [
  {
    id: 'bologna',
    slug: 'bologna',
    name: 'Bologna',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 392564,
    geo: { lat: 44.4949, lng: 11.3426 },
  },
  {
    id: 'modena',
    slug: 'modena',
    name: 'Modena',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 185334,
    geo: { lat: 44.6458885, lng: 10.9255707 },
  },
  {
    id: 'carpi',
    slug: 'carpi',
    name: 'Carpi',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 71131,
    geo: { lat: 44.7833, lng: 10.8833 },
  },
  {
    id: 'sassuolo',
    slug: 'sassuolo',
    name: 'Sassuolo',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 40884,
    geo: { lat: 44.5409769, lng: 10.7829023 },
  },
  {
    id: 'maranello',
    slug: 'maranello',
    name: 'Maranello',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 17342,
    geo: { lat: 44.5253, lng: 10.8659 },
  },
  {
    id: 'fiorano-modenese',
    slug: 'fiorano-modenese',
    name: 'Fiorano Modenese',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 16723,
    geo: { lat: 44.32, lng: 10.49 },
  },
  {
    id: 'vignola',
    slug: 'vignola',
    name: 'Vignola',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 26170,
    geo: { lat: 44.28, lng: 11.0058 },
  },
  {
    id: 'reggio-emilia',
    slug: 'reggio-emilia',
    name: 'Reggio Emilia',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 171337,
    geo: { lat: 44.6982, lng: 10.6312 },
  },
  {
    id: 'castelnovo-ne-monti',
    slug: 'castelnovo-ne-monti',
    name: "Castelnovo ne' Monti",
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 10500,
    geo: { lat: 44.566667, lng: 10.666667 },
  },
  {
    id: 'carpineti',
    slug: 'carpineti',
    name: 'Carpineti',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 4500,
    geo: { lat: 44.3, lng: 10.3 },
  },
];

export const targetLocations: Location[] = locations.filter(loc => TARGET_CITY_SET.has(loc.slug));
export const nicheEligibleLocations: Location[] = targetLocations.filter(loc => NICHE_CITY_SET.has(loc.slug));

export type TargetCitySlug = typeof TARGET_CITY_SLUGS[number];
export type NicheCitySlug = typeof NICHE_CITY_SLUGS[number];

export function isTargetCitySlug(slug: string): slug is TargetCitySlug {
  return TARGET_CITY_SET.has(slug);
}

export function isNicheCitySlug(slug: string): slug is NicheCitySlug {
  return NICHE_CITY_SET.has(slug);
}

export function getLocationBySlug(slug: string): Location | undefined {
  if (!isTargetCitySlug(slug)) {
    return undefined;
  }

  return targetLocations.find(loc => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return [...TARGET_CITY_SLUGS];
}

export function getLocationsByProvince(province: string): Location[] {
  return targetLocations.filter(loc => loc.province === province);
}

export function getLocationById(id: string): Location | undefined {
  return targetLocations.find(loc => loc.id === id);
}
