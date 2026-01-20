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

// Zone/area keywords per città italiane - zona industriale, quartieri, distretti
const CITY_ZONES: Record<string, string[]> = {
  'modena': ['sassuolo', 'carpi', 'formigine', 'mirandola', 'pavullo', 'vignola', 'castelnuovo rangone', 'nonantola', 'castelfranco emilia', 'soliera', 'distretto ceramico', 'zona industriale modenese'],
  'bologna': ['san lazaro di savena', 'imola', 'castel san pietro terme', 'zola predosa', 'pianoro', 'sasso marconi', 'casalecchio di reno', 'bentivoglio', 'minerbio', 'area metropolitana bolognese'],
  'parma': ['fidenza', 'salsomaggiore terme', 'langhirano', 'busseto', 'colorno', 'sorbolo', 'medesano', 'felino', 'zona industriale parmense'],
  'reggio-emilia': ['correggio', 'scandiano', 'guastalla', 'novellara', 'luzzara', 'castellarano', 'rio saliceto', 'cavriago', 'bagnolo in piano', 'distretto ceramico reggiano'],
  'piacenza': ['fiorenzuola d\'arda', 'castel san giovanni', 'borgonovo val tidone', 'rottofreno', 'podenzano', 'vigolzone', 'area industriale piacentina'],
  'ferrara': ['cento', 'comacchio', 'argenta', 'copparo', 'bondeno', 'poggio renatico', 'delta del po'],
  'ravenna': ['faenza', 'lugo', 'cervia', 'bagnacavallo', 'cotignola', 'fusignano', 'alfonsine', 'lidi ravennati'],
  'forlì': ['forlimpopoli', 'bertinoro', 'galeata', 'civitella di romagna', 'predappio', 'dovadola', 'cesenatico', 'gatteo'],
  'rimini': ['riccione', 'cattolica', 'san marino', 'santarcangelo di romagna', 'bellaria-igea marina', 'misano adriatico'],
  'verona': ['villafranca di verona', 'legnago', 'bussolengo', 'sona', 'pescantina', 'san bonifacio', 'zona industriale veronese'],
  'padova': ['albignasego', 'selvazzano dentro', 'cadoneghe', 'vigonza', 'rubano', 'campo san marto', 'zona industriale padovana'],
  'vicenza': ['thiene', 'schio', 'bassano del grappa', 'arzignano', 'lonigo', 'dueville', 'zona industriale vicentina'],
  'venezia': ['mestre', 'marghera', 'san donà di piave', 'jesolo', 'chioggia', 'cararzere'],
  'treviso': ['conegliano', 'castelfranco veneto', 'montebelluna', 'vittorio veneto', 'oderzo', 'susegana'],
  'firenze': ['sesto fiorentino', 'scandicci', 'bagno a ripoli', 'signa', 'lastra a signa', 'zona industriale fiorentina'],
  'prato': ['montemurlo', 'agliana', 'carmignano', 'poggio a caiano', 'vaiano'],
  'livorno': ['piombino', 'grosseto', 'rosignano marittimo', 'cegna', 'portoferraio', 'caltagirone'],
  'pisa': ['lucca', 'viareggio', 'cascina', 'pontedera', 'san giuliano terme'],
  'arezzo': ['montevarchi', 'san giovanni valdarno', 'cortona', 'castiglion fiorentino', 'foiano della chiana'],
  'siena': ['poggibonsi', 'colle val d\'elsa', 'montepulciano', 'chiusi', 'sinalunga'],
  'castelnovo ne\'monti': ['ventasso', 'busana', 'collagna', 'ligonchio', 'villa minozzo', 'canossa', 'alta val d\'enza', 'appennino reggiano'],
  'san polo d\'enza': ['quattro castella', 'montecchio emilia', 'bibbiano', 'traversetolo', 'canossa'],
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
  
  // Base keywords
  const keywords: string[] = [
    `${normalizedService} ${normalizedCity}`,
    `${normalizedService} ${normalizedProvince}`,
    `realizzazione ${normalizedService} ${normalizedCity}`,
    `web designer ${normalizedCity}`,
    `creazione ${normalizedService} ${normalizedCity}`,
    `${normalizedService} ${normalizedProvince} appennino`,
    `${normalizedService} emilia romagna`,
    `${normalizedService} provincia ${normalizedProvince}`,
  ];
  
  // Add zone/district keywords if available
  if (CITY_ZONES[normalizedCity]) {
    const zones = CITY_ZONES[normalizedCity];
    zones.forEach(zone => {
      keywords.push(`${normalizedService} ${zone}`);
    });
  }
  
  return keywords;
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatPopulation(pop: number): string {
  return new Intl.NumberFormat('it-IT').format(pop);
}
