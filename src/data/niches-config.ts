export type NicheCategory = 
  | 'Food & Hospitality'
  | 'Beauty & Wellness'
  | 'Creative'
  | 'Agriculture';

export interface NicheConfig {
  slug: string;
  name: string;
  singularName: string;
  pluralName: string;
  category: NicheCategory;
  minPopulation: number;
  heroImage: string;
}

export const nichesConfig: NicheConfig[] = [
  {
    slug: 'ristoranti',
    name: 'Ristoranti e Pizzerie',
    singularName: 'Ristorante',
    pluralName: 'Ristoranti',
    category: 'Food & Hospitality',
    minPopulation: 30000,
    heroImage: 'restaurant-bg.webp'
  },
  {
    slug: 'saloni-bellezza',
    name: 'Saloni di Bellezza e Parrucchieri',
    singularName: 'Salone di Bellezza',
    pluralName: 'Saloni di Bellezza',
    category: 'Beauty & Wellness',
    minPopulation: 20000,
    heroImage: 'beauty-bg.webp'
  },
  {
    slug: 'fotografi',
    name: 'Fotografi e Videomaker',
    singularName: 'Fotografo',
    pluralName: 'Fotografi',
    category: 'Creative',
    minPopulation: 30000,
    heroImage: 'photography-bg.webp'
  },
  {
    slug: 'aziende-agricole',
    name: 'Aziende Agricole e Agriturismi',
    singularName: 'Azienda Agricola',
    pluralName: 'Aziende Agricole',
    category: 'Agriculture',
    minPopulation: 20000,
    heroImage: 'restaurant-bg.webp'
  }
];

export const POPULATION_THRESHOLDS = {
  MICRO: 15000,
  SMALL: 30000,
  MEDIUM: 50000,
  LARGE: 100000
};

export const getNicheConfig = (slug: string): NicheConfig | undefined => {
  return nichesConfig.find(niche => niche.slug === slug);
};

export const getNichesByCategory = (category: NicheCategory): NicheConfig[] => {
  return nichesConfig.filter(niche => niche.category === category);
};

export const getApplicableNiches = (cityPopulation: number): NicheConfig[] => {
  return nichesConfig.filter(niche => cityPopulation >= niche.minPopulation);
};

export const getNichesForSmallCities = (cityPopulation: number): NicheConfig[] => {
  if (cityPopulation >= POPULATION_THRESHOLDS.MEDIUM) {
    return nichesConfig;
  }
  if (cityPopulation >= POPULATION_THRESHOLDS.SMALL) {
    return nichesConfig.filter(n => 
      ['Food & Hospitality', 'Beauty & Wellness', 'Creative', 'Agriculture'].includes(n.category)
    );
  }
  return nichesConfig.filter(n => 
    ['Food & Hospitality', 'Agriculture'].includes(n.category)
  );
};

export const NICHE_SLUGS = nichesConfig.map(n => n.slug) as readonly string[];
