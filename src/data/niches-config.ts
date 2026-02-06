/**
 * EXPANDED NICHES CONFIGURATION
 * 
 * This file defines all vertical niches for programmatic SEO.
 * 
 * NICHE TYPES:
 * 1. Service Niches: Siti web for specific industries (ristoranti, fotografi, etc.)
 * 2. E-commerce Niches: E-commerce for specific product categories
 * 
 * Each niche can be combined with cities to create pages like:
 * - /siti-web/ristoranti/modena
 * - /ecommerce/abbigliamento/bologna
 */

export type NicheCategory = 
  | 'Food & Hospitality'
  | 'Beauty & Wellness'
  | 'Creative'
  | 'Agriculture'
  | 'Professional Services'
  | 'Health & Fitness'
  | 'E-commerce Fashion'
  | 'E-commerce Food'
  | 'E-commerce Home'
  | 'E-commerce Tech'
  | 'Retail';

export interface NicheConfig {
  slug: string;
  name: string;
  singularName: string;
  pluralName: string;
  category: NicheCategory;
  /** Minimum city population to show this niche */
  minPopulation: number;
  /** Which service this niche applies to */
  serviceType: 'siti-web' | 'ecommerce' | 'both';
  /** Hero image (for legacy compatibility) */
  heroImage: string;
  /** Whether this niche supports city pages */
  supportsCityPages?: boolean;
}

// =============================================================================
// SERVICE NICHES (Siti Web)
// =============================================================================

const serviceNiches: NicheConfig[] = [
  {
    slug: 'ristoranti',
    name: 'Ristoranti e Pizzerie',
    singularName: 'Ristorante',
    pluralName: 'Ristoranti',
    category: 'Food & Hospitality',
    minPopulation: 30000,
    serviceType: 'siti-web',
    heroImage: 'restaurant-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'saloni-bellezza',
    name: 'Saloni di Bellezza e Parrucchieri',
    singularName: 'Salone di Bellezza',
    pluralName: 'Saloni di Bellezza',
    category: 'Beauty & Wellness',
    minPopulation: 20000,
    serviceType: 'siti-web',
    heroImage: 'beauty-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'fotografi',
    name: 'Fotografi e Videomaker',
    singularName: 'Fotografo',
    pluralName: 'Fotografi',
    category: 'Creative',
    minPopulation: 30000,
    serviceType: 'siti-web',
    heroImage: 'photography-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'aziende-agricole',
    name: 'Aziende Agricole e Agriturismi',
    singularName: 'Azienda Agricola',
    pluralName: 'Aziende Agricole',
    category: 'Agriculture',
    minPopulation: 20000,
    serviceType: 'siti-web',
    heroImage: 'restaurant-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'studi-legali',
    name: 'Studi Legali e Avvocati',
    singularName: 'Studio Legale',
    pluralName: 'Studi Legali',
    category: 'Professional Services',
    minPopulation: 50000,
    serviceType: 'siti-web',
    heroImage: 'professional-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'dentisti',
    name: 'Dentisti e Studi Odontoiatrici',
    singularName: 'Dentista',
    pluralName: 'Dentisti',
    category: 'Health & Fitness',
    minPopulation: 40000,
    serviceType: 'siti-web',
    heroImage: 'health-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'palestre',
    name: 'Palestre e Centri Fitness',
    singularName: 'Palestra',
    pluralName: 'Palestre',
    category: 'Health & Fitness',
    minPopulation: 30000,
    serviceType: 'siti-web',
    heroImage: 'fitness-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'architetti',
    name: 'Architetti e Studi di Progettazione',
    singularName: 'Architetto',
    pluralName: 'Architetti',
    category: 'Professional Services',
    minPopulation: 50000,
    serviceType: 'siti-web',
    heroImage: 'architecture-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'hotel',
    name: 'Hotel e Strutture Ricettive',
    singularName: 'Hotel',
    pluralName: 'Hotel',
    category: 'Food & Hospitality',
    minPopulation: 40000,
    serviceType: 'siti-web',
    heroImage: 'hotel-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'negozi',
    name: 'Negozi e Boutique',
    singularName: 'Negozio',
    pluralName: 'Negozi',
    category: 'Retail',
    minPopulation: 40000,
    serviceType: 'both',
    heroImage: 'retail-bg.webp',
    supportsCityPages: true,
  },
];

// =============================================================================
// E-COMMERCE NICHES (Product Categories)
// =============================================================================

const ecommerceNiches: NicheConfig[] = [
  {
    slug: 'abbigliamento',
    name: 'E-commerce Abbigliamento e Moda',
    singularName: 'E-commerce Abbigliamento',
    pluralName: 'E-commerce Abbigliamento',
    category: 'E-commerce Fashion',
    minPopulation: 50000,
    serviceType: 'ecommerce',
    heroImage: 'fashion-ecom-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'alimentari',
    name: 'E-commerce Alimentari e Prodotti Tipici',
    singularName: 'E-commerce Alimentare',
    pluralName: 'E-commerce Alimentari',
    category: 'E-commerce Food',
    minPopulation: 40000,
    serviceType: 'ecommerce',
    heroImage: 'food-ecom-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'arredamento',
    name: 'E-commerce Arredamento e Casa',
    singularName: 'E-commerce Arredamento',
    pluralName: 'E-commerce Arredamento',
    category: 'E-commerce Home',
    minPopulation: 60000,
    serviceType: 'ecommerce',
    heroImage: 'home-ecom-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'cosmetici',
    name: 'E-commerce Cosmetici e Beauty',
    singularName: 'E-commerce Cosmetici',
    pluralName: 'E-commerce Cosmetici',
    category: 'E-commerce Fashion',
    minPopulation: 50000,
    serviceType: 'ecommerce',
    heroImage: 'beauty-ecom-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'elettronica',
    name: 'E-commerce Elettronica e Tech',
    singularName: 'E-commerce Elettronica',
    pluralName: 'E-commerce Elettronica',
    category: 'E-commerce Tech',
    minPopulation: 70000,
    serviceType: 'ecommerce',
    heroImage: 'tech-ecom-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'gioielli',
    name: 'E-commerce Gioielli e Accessori',
    singularName: 'E-commerce Gioielli',
    pluralName: 'E-commerce Gioielli',
    category: 'E-commerce Fashion',
    minPopulation: 60000,
    serviceType: 'ecommerce',
    heroImage: 'jewelry-ecom-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'sport',
    name: 'E-commerce Sportivo e Outdoor',
    singularName: 'E-commerce Sport',
    pluralName: 'E-commerce Sport',
    category: 'E-commerce Fashion',
    minPopulation: 50000,
    serviceType: 'ecommerce',
    heroImage: 'sport-ecom-bg.webp',
    supportsCityPages: true,
  },
  {
    slug: 'libri',
    name: 'E-commerce Libri ed Editoria',
    singularName: 'E-commerce Libri',
    pluralName: 'E-commerce Libri',
    category: 'E-commerce Tech',
    minPopulation: 60000,
    serviceType: 'ecommerce',
    heroImage: 'books-ecom-bg.webp',
    supportsCityPages: true,
  },
];

// =============================================================================
// COMBINED NICHES
// =============================================================================

export const nichesConfig: NicheConfig[] = [
  ...serviceNiches,
  ...ecommerceNiches,
];

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export const POPULATION_THRESHOLDS = {
  MICRO: 15000,
  SMALL: 30000,
  MEDIUM: 50000,
  LARGE: 100000,
  METRO: 200000,
};

export const getNicheConfig = (slug: string): NicheConfig | undefined => {
  return nichesConfig.find(niche => niche.slug === slug);
};

export const getNichesByCategory = (category: NicheCategory): NicheConfig[] => {
  return nichesConfig.filter(niche => niche.category === category);
};

export const getNichesByServiceType = (serviceType: 'siti-web' | 'ecommerce'): NicheConfig[] => {
  return nichesConfig.filter(niche => 
    niche.serviceType === serviceType || niche.serviceType === 'both'
  );
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

/** Get niches that support city-specific pages */
export const getNichesWithCityPages = (): NicheConfig[] => {
  return nichesConfig.filter(n => n.supportsCityPages === true);
};

/** Get niche slugs for a specific service */
export const getNicheSlugsByService = (serviceType: 'siti-web' | 'ecommerce'): string[] => {
  return getNichesByServiceType(serviceType).map(n => n.slug);
};

// Legacy export for backwards compatibility - NOW INCLUDES ALL NICHES
export const NICHE_SLUGS = nichesConfig.map(n => n.slug) as readonly string[];

// New exports for service-specific slugs
export const SITI_WEB_NICHE_SLUGS = getNicheSlugsByService('siti-web');
export const ECOMMERCE_NICHE_SLUGS = getNicheSlugsByService('ecommerce');
export const ALL_NICHE_SLUGS = nichesConfig.map(n => n.slug);
