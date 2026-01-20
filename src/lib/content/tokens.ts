export interface TokenReplacements {
  [key: string]: string | number;
}

export const TOKENS = {
  CITY_NAME: 'cityName',
  PROVINCE: 'province',
  REGION: 'region',
  SERVICE_NAME: 'serviceName',
  SERVICE_SLUG: 'serviceSlug',
  ALTITUDE: 'altitude',
  POPULATION: 'population',
  SECTOR: 'sector',
  ARCHETYPE_NAME: 'archetypeName',
  ARCHETYPE_DESCRIPTION: 'archetypeDescription',
} as const;

const COMMON_TOKENS: Record<string, string> = {
  [TOKENS.SERVICE_NAME]: 'Siti Web',
  [TOKENS.SERVICE_SLUG]: 'siti-web',
};

// Converte camelCase in UPPER_CASE (es: cityName -> CITY_NAME)
function camelToUpperSnake(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Inserisce underscore tra minuscola e maiuscola
    .toUpperCase();
}

export function replaceTokens(template: string, replacements: TokenReplacements): string {
  let result = template;
  for (const [key, value] of Object.entries(replacements)) {
    // Supporta multiple varianti: camelCase, PascalCase, UPPER_CASE
    const variants = [
      `{{${key}}}`,                                    // {{cityName}}
      `{{${key.charAt(0).toUpperCase() + key.slice(1)}}}`, // {{CityName}}
      `{{${key.toUpperCase()}}}`,                      // {{CITYNAME}}
      `{{${camelToUpperSnake(key)}}}`,                // {{CITY_NAME}}
    ];
    
    for (const token of variants) {
      // Escape caratteri speciali regex e usa flag 'gi' per case-insensitive
      const escapedToken = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      result = result.replace(new RegExp(escapedToken, 'gi'), String(value));
    }
  }
  return result;
}

export function createReplacements(
  cityName: string,
  province: string,
  region: string,
  population: number,
  serviceName: string = 'Siti Web',
  serviceSlug: string = 'siti-web',
  altitude: number = 100,
  sector: string = 'servizi locali',
  archetypeName: string = '',
  archetypeDescription: string = ''
): TokenReplacements {
  return {
    ...COMMON_TOKENS,
    [TOKENS.CITY_NAME]: cityName,
    [TOKENS.PROVINCE]: province,
    [TOKENS.REGION]: region,
    [TOKENS.POPULATION]: population,
    [TOKENS.SERVICE_NAME]: serviceName,
    [TOKENS.SERVICE_SLUG]: serviceSlug,
    [TOKENS.ALTITUDE]: altitude,
    [TOKENS.SECTOR]: sector,
    [TOKENS.ARCHETYPE_NAME]: archetypeName,
    [TOKENS.ARCHETYPE_DESCRIPTION]: archetypeDescription,
  };
}

export function buildCanonicalUrl(citySlug: string, serviceSlug: string = 'siti-web'): string {
  return `https://manueldeceglie.it/${serviceSlug}/${citySlug}`;
}

export function buildKeywords(cityName: string, province: string, serviceName: string = 'siti web'): string[] {
  const normalizedCity = cityName.toLowerCase();
  const normalizedProvince = province.toLowerCase();
  const normalizedService = serviceName.toLowerCase();
  
  return [
    `${normalizedService} ${normalizedCity}`,
    `${normalizedService} ${normalizedProvince}`,
    `realizzazione ${normalizedService} ${normalizedCity}`,
    `web designer ${normalizedCity}`,
    `creazione ${normalizedService} ${normalizedCity}`,
    `${normalizedService} ${normalizedProvince} appennino`,
    `${normalizedService} emilia romagna`,
  ];
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatPopulation(pop: number): string {
  return new Intl.NumberFormat('it-IT').format(pop);
}
