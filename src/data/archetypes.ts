export type MarketArchetype =
  | 'MountainSmall'
  | 'HillMedium'
  | 'IndustrialHub'
  | 'FoodValley'
  | 'ProvinceCapital'
  | 'SuburbanGrowth'
  | 'PlainsSmall'
  | 'MetroBologna';

export interface ArchetypeDefinition {
  id: MarketArchetype;
  name: string;
  description: string;
  focusKeywords: string[];
}

export const ARCHETYPES: Record<MarketArchetype, ArchetypeDefinition> = {
  MountainSmall: {
    id: 'MountainSmall',
    name: 'Montagna Appenninica',
    description: 'Piccoli centri appenninici (< 5.000 abitanti) con sfide di connettività e opportunità turistiche',
    focusKeywords: [
      'connessione difficile',
      'visibilità per turisti',
      'web per montagna',
      'mobile-first estremo',
      'lento caricamento',
      'turismo verde',
      'ospitalità rurale',
    ],
  },
  HillMedium: {
    id: 'HillMedium',
    name: 'Collina Media',
    description: 'Centri medio-piccoli (5k-15k) in zona collinare con artigianato e agriturismi',
    focusKeywords: [
      'artigianato locale',
      'agriturismo',
      'qualità artigianale',
      'territorio collinare',
      'prodotto tipico',
      'tradizione',
    ],
  },
  IndustrialHub: {
    id: 'IndustrialHub',
    name: 'Distretto Industriale',
    description: 'Zone a forte concentrazione industriale (ceramica, biomedicale, motorsport) con B2B e export',
    focusKeywords: [
      'B2B',
      'export',
      'competizione alta',
      'settore ceramico',
      'biomedicale',
      'motorsport',
      'catalogo prodotti',
      'aziende',
    ],
  },
  FoodValley: {
    id: 'FoodValley',
    name: 'Food Valley',
    description: 'Territori legati alla tradizione alimentare (Parma, Langhirano) con focus su qualità e artigianato food',
    focusKeywords: [
      'tradizione food',
      'prosciutto',
      'parmigiano',
      'qualità alimentare',
      'artigianato food',
      'gastronomia locale',
      'export alimentare',
    ],
  },
  ProvinceCapital: {
    id: 'ProvinceCapital',
    name: 'Capoluogo di Provincia',
    description: 'Città principali (> 50k) con alta competizione e servizi professionali',
    focusKeywords: [
      'alta competizione',
      'professionisti',
      'servizi',
      'visibilità cittadina',
      'differenziazione',
      'branding',
    ],
  },
  SuburbanGrowth: {
    id: 'SuburbanGrowth',
    name: 'Crescita Suburbana',
    description: 'Comuni in crescita demografica (10k-30k) con tessuto commerciale dinamico',
    focusKeywords: [
      'crescita commerciale',
      'famiglie giovani',
      'servizi locali',
      'nuovi residenti',
      'commercio locale',
      'artigiani',
    ],
  },
  PlainsSmall: {
    id: 'PlainsSmall',
    name: 'Pianura Padana',
    description: 'Piccoli centri della pianura padana con agricoltura e commercio locale',
    focusKeywords: [
      'agricoltura',
      'commercio locale',
      'artigiani',
      'meccanica agricola',
      'servizi rurali',
      'piccole imprese',
    ],
  },
  MetroBologna: {
    id: 'MetroBologna',
    name: 'Area Metropolitana Bologna',
    description: 'Comuni nell\'area bolognese con dinamiche metropolitane e forte concorrenza',
    focusKeywords: [
      'area metropolitana',
      'competizione bolognese',
      'tecnologia',
      'startup',
      'servizi avanzati',
      'commessi viaggiatori',
    ],
  },
};

const CERAMIC_DISTRICT_SLG = ['sassuolo', 'formigine', 'maranello', 'casalgrande', 'castellarano', 'fiorano-modenese', 'vignola'];
const BIOMEDICAL_HUB = ['mirandola'];
const FOOD_VALLEY_CITIES = ['parma', 'langhirano', 'traversetolo', 'collecchio'];
const METRO_BOLOGNA_CITIES = ['casalecchio-di-reno', 'san-lazzaro-di-savena', 'zola-predosa', 'castel-maggiore', 'castenaso', 'budrio', 'san-giovanni-in-persiceto', 'valsamoggia'];

const APPENNINE_MOUNTAINS: Record<string, number> = {
  'castelnovo-ne-monti': 700,
  'casina': 650,
  'carpineti': 600,
  'albinea': 450,
};

function estimateAltitude(lat: number, lng: number): number {
  if (APPENNINE_MOUNTAINS.lat) {
  }
  if (lat < 44.4 && lng > 11.0) {
    return 100;
  }
  if (lat > 44.6 && lng < 10.5) {
    return 150;
  }
  if (lat > 44.5 && lng < 10.8 && lng > 10.3) {
    return 500;
  }
  if (lat > 44.2 && lat < 44.4 && lng > 10.2 && lng < 10.7) {
    return 600;
  }
  if (lat > 44.4 && lng > 10.8) {
    return 50;
  }
  return 100;
}

function isInCeramicDistrict(slug: string): boolean {
  return CERAMIC_DISTRICT_SLG.includes(slug);
}

function isInFoodValley(slug: string): boolean {
  return FOOD_VALLEY_CITIES.includes(slug);
}

function isInBolognaMetro(slug: string): boolean {
  return METRO_BOLOGNA_CITIES.includes(slug);
}

export function assignArchetype(location: { slug: string; population: number; geo: { lat: number; lng: number } }): MarketArchetype {
  const { slug, population, geo } = location;
  const altitude = estimateAltitude(geo.lat, geo.lng);

  if (population < 5000 && altitude > 400) {
    return 'MountainSmall';
  }

  if (population < 15000 && altitude > 300) {
    return 'HillMedium';
  }

  if (isInCeramicDistrict(slug)) {
    return 'IndustrialHub';
  }

  if (slug === 'mirandola' || slug === 'finale-emilia') {
    return 'IndustrialHub';
  }

  if (isInFoodValley(slug)) {
    return 'FoodValley';
  }

  if (['parma', 'modena', 'reggio-emilia', 'bologna', 'piacenza', 'ferrara', 'ravenna', 'forlì', 'cesena', 'rimini'].includes(slug)) {
    return 'ProvinceCapital';
  }

  if (isInBolognaMetro(slug)) {
    return 'MetroBologna';
  }

  if (population < 15000) {
    return 'PlainsSmall';
  }

  if (population < 35000) {
    return 'SuburbanGrowth';
  }

  return 'ProvinceCapital';
}

export function getArchetype(archetypeId: MarketArchetype): ArchetypeDefinition {
  return ARCHETYPES[archetypeId];
}

export function getArchetypeForLocation(location: { slug: string; population: number; geo: { lat: number; lng: number } }): ArchetypeDefinition {
  const archetypeId = assignArchetype(location);
  return getArchetype(archetypeId);
}
