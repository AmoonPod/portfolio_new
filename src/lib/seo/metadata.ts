import { Location } from '@/data/locations';
import { MarketArchetype, getArchetype } from '@/data/archetypes';

export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    url: string;
    type: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    images?: string[];
  };
  robots?: {
    index: boolean;
    follow: boolean;
  };
}

const SERVICE_NAMES: Record<string, string> = {
  'siti-web': 'Siti Web',
  'seo': 'SEO',
  'social-media': 'Social Media',
  'ecommerce': 'E-commerce',
  'branding': 'Branding',
};

const SERVICE_SLUGS: Record<string, string> = {
  'siti-web': 'siti-web',
  'seo': 'seo',
  'social-media': 'social-media',
  'ecommerce': 'ecommerce',
  'branding': 'branding',
};

export function generateCanonicalUrl(citySlug: string, serviceSlug: string = 'siti-web'): string {
  return `https://manueldeceglie.it/${serviceSlug}/${citySlug}`;
}

export function generateTitle(
  cityName: string,
  serviceName: string,
  suffix: string = 'Manuel De Ceglie'
): string {
  const templates = [
    `Realizzazione ${serviceName} a ${cityName} | ${suffix}`,
    `${serviceName} a ${cityName}: fatti per farti trovare | ${suffix}`,
    `Creazione ${serviceName} professionali a ${cityName} | ${suffix}`,
    `${serviceName} a ${cityName} | Web Developer ${suffix}`,
  ];
  
  const index = cityName.length % templates.length;
  return templates[index];
}

export function generateDescription(
  cityName: string,
  serviceName: string,
  archetype?: MarketArchetype
): string {
  const archetypeHints: Record<MarketArchetype, string[]> = {
    MountainSmall: [
      `Siti web veloci anche con connessione instabile a ${cityName}.`,
      `Realizzo ${serviceName} per attività di montagna: leggeri, performanti, ottimizzati per mobile.`,
      `${serviceName} professionali a ${cityName} pensati per funzionare davvero.`,
    ],
    HillMedium: [
      `${serviceName} per artigiani e agriturismi a ${cityName}.`,
      `Creazione ${serviceName} che valorizzano la tradizione del territorio collinare.`,
      `Siti web professionali per attività di ${cityName} e dintorni.`,
    ],
    IndustrialHub: [
      `${serviceName} B2B per aziende del settore a ${cityName}.`,
      `Realizzo ${serviceName} professionali per aziende industriali.`,
      `Siti web corporate per il settore ${archetype?.toLowerCase() || 'industriale'} a ${cityName}.`,
    ],
    FoodValley: [
      `${serviceName} per aziende food a ${cityName}.`,
      `Creazione ${serviceName} che raccontano tradizione enogastronomica.`,
      `Siti web per produttori alimentari e artigiani del gusto a ${cityName}.`,
    ],
    ProvinceCapital: [
      `${serviceName} professionali a ${cityName}.`,
      `Realizzo ${serviceName} per professionisti e attività della città.`,
      `Siti web che ti fanno distinguere nella competitività di ${cityName}.`,
    ],
    SuburbanGrowth: [
      `${serviceName} per attività in crescita a ${cityName}.`,
      `Creazione ${serviceName} locali efficaci e professionali.`,
      `Siti web che portano risultati concreti per la tua attività a ${cityName}.`,
    ],
    PlainsSmall: [
      `${serviceName} per artigiani e commercianti a ${cityName}.`,
      `Realizzo ${serviceName} locali ottimizzati per la ricerca.`,
      `Siti web professionali per piccole attività della pianura.`,
    ],
    MetroBologna: [
      `${serviceName} nell'area bolognese a ${cityName}.`,
      `Creazione ${serviceName} per compete nella zona metropolitana.`,
      `Siti web professionali per attività dell'hinterland bolognese.`,
    ],
  };

  const hints = archetype ? archetypeHints[archetype] : [
    `${serviceName} professionali a ${cityName}.`,
    `Realizzo ${serviceName} veloci e ottimizzati per farti trovare.`,
    `Creazione ${serviceName} per attività locali a ${cityName}.`,
  ];

  const index = cityName.length % hints.length;
  const base = hints[index];
  
  return `${base} Lavoro con le attività del territorio per risultati misurabili.`;
}

export function generateKeywords(
  cityName: string,
  province: string,
  serviceName: string
): string[] {
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

export function generateH1(
  cityName: string,
  serviceName: string,
  archetype?: MarketArchetype
): string {
  const templates = [
    `${serviceName} a ${cityName} per attività che vogliono crescere`,
    `Il tuo sito web a ${cityName} deve portarti clienti`,
    `${serviceName} professionali a ${cityName}`,
    `Realizzazione ${serviceName} a ${cityName}`,
  ];
  
  const index = (cityName.length + (archetype ? archetype.length : 0)) % templates.length;
  return templates[index];
}

export function buildSeoMetadata(
  location: Location,
  serviceSlug: string = 'siti-web',
  archetype?: MarketArchetype
): SeoMetadata {
  const serviceName = SERVICE_NAMES[serviceSlug] || 'Siti Web';
  const citySlug = location.slug;
  const canonical = generateCanonicalUrl(citySlug, serviceSlug);
  
  const title = generateTitle(location.name, serviceName);
  const description = generateDescription(location.name, serviceName, archetype);
  const keywords = generateKeywords(location.name, location.province, serviceName);
  const h1 = generateH1(location.name, serviceName, archetype);
  
  return {
    title,
    description,
    canonical,
    keywords,
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [
        {
          url: `${canonical}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${serviceName} a ${location.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${canonical}/og-image.png`],
    },
  };
}

export function buildNoIndexMetadata(): SeoMetadata {
  return {
    title: 'Pagina Non Trovata',
    description: 'La pagina richiesta non è disponibile.',
    canonical: 'https://manueldeceglie.it/404',
    robots: {
      index: false,
      follow: false,
    },
  };
}

export function mergeSeoMetadata(
  base: SeoMetadata,
  overrides: Partial<SeoMetadata>
): SeoMetadata {
  return {
    ...base,
    ...overrides,
    openGraph: overrides.openGraph 
      ? { ...base.openGraph, ...overrides.openGraph }
      : base.openGraph,
    twitter: overrides.twitter
      ? { ...base.twitter, ...overrides.twitter }
      : base.twitter,
  };
}
