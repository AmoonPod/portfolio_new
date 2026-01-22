import { targetLocations, getLocationBySlug, NICHE_CITY_SET, isTargetCitySlug, nicheEligibleLocations } from '@/data/locations';
import { getApplicableNiches, getNichesForSmallCities } from '@/data/niches-config';

export interface PathParams {
  city: string;
  niche?: string;
}

export interface GeneratedPath {
  params: PathParams;
}

const POPULATION_THRESHOLD_FOR_NICHES = 50000;

export function getGeneratedPaths(): GeneratedPath[] {
  const paths: GeneratedPath[] = [];

  targetLocations.forEach(city => {
    paths.push({
      params: { city: city.slug },
    });

    if (NICHE_CITY_SET.has(city.slug) && city.population >= POPULATION_THRESHOLD_FOR_NICHES) {
      const applicableNiches = getApplicableNiches(city.population);
      
      applicableNiches.forEach(niche => {
        paths.push({
          params: { 
            city: city.slug,
            niche: niche.slug,
          },
        });
      });
    }
  });

  return paths;
}

export function getPathsForCity(citySlug: string): GeneratedPath[] {
  if (!isTargetCitySlug(citySlug)) {
    return [];
  }

  const location = getLocationBySlug(citySlug);
  if (!location) {
    return [];
  }

  const paths: GeneratedPath[] = [
    { params: { city: citySlug } },
  ];

  if (NICHE_CITY_SET.has(location.slug) && location.population >= POPULATION_THRESHOLD_FOR_NICHES) {
    const applicableNiches = getApplicableNiches(location.population);
    
    applicableNiches.forEach(niche => {
      paths.push({
        params: { 
          city: citySlug,
          niche: niche.slug,
        },
      });
    });
  }

  return paths;
}

export function shouldGenerateNichePage(citySlug: string, nicheSlug: string): boolean {
  if (!isTargetCitySlug(citySlug) || !NICHE_CITY_SET.has(citySlug)) {
    return false;
  }

  const location = getLocationBySlug(citySlug);
  if (!location) {
    return false;
  }

  if (location.population < POPULATION_THRESHOLD_FOR_NICHES) {
    return false;
  }

  const applicableNiches = getApplicableNiches(location.population);
  return applicableNiches.some(n => n.slug === nicheSlug);
}

export function getRelatedCityPaths(nicheSlug: string, currentCitySlug: string, limit: number = 4): Array<{ citySlug: string; cityName: string }> {
  const citiesWithNiche = nicheEligibleLocations
    .filter(city => city.population >= POPULATION_THRESHOLD_FOR_NICHES && city.slug !== currentCitySlug);

  return citiesWithNiche.slice(0, limit).map(city => ({
    citySlug: city.slug,
    cityName: city.name,
  }));
}

export function getNicheLinksForCity(citySlug: string): Array<{ slug: string; name: string }> {
  const location = getLocationBySlug(citySlug);
  if (!location || !NICHE_CITY_SET.has(location.slug)) {
    return [];
  }

  if (location.population >= POPULATION_THRESHOLD_FOR_NICHES) {
    const applicableNiches = getApplicableNiches(location.population);
    return applicableNiches.map(n => ({
      slug: n.slug,
      name: n.pluralName,
    }));
  }

  if (location.population >= 30000) {
    const smallNiches = getNichesForSmallCities(location.population);
    return smallNiches.map(n => ({
      slug: n.slug,
      name: n.pluralName,
    }));
  }

  return [];
}

export const POPULATION_THRESHOLDS = {
  MICRO: 15000,
  SMALL: 30000,
  MEDIUM: 50000,
  LARGE: 100000
} as const;
