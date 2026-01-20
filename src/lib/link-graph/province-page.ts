import { ProvinceInfo, getProvinceInfo, getTopCitiesForProvince } from './graph';
import { TokenReplacements, replaceTokens, createReplacements } from '@/lib/link-graph/tokens';
import { pickVariant, deterministicPick } from '@/lib/content/spintax';

export interface ProvincePageData {
  slug: string;
  name: string;
  region: string;
  description: string;
  hero: {
    h1: string;
    sub: string;
    ctaText: string;
    trustSignal: string;
  };
  seo: {
    title: string;
    description: string;
    canonical: string;
    keywords: string[];
    h1: string;
  };
  cities: Array<{
    name: string;
    slug: string;
    population: number;
    distance?: number;
  }>;
  geo: {
    centerLat: number;
    centerLng: number;
  };
}

const PROVINCE_DESCRIPTIONS: Record<string, string[]> = {
  'Reggio Emilia': [
    'La provincia di Reggio Emilia è un territorio ricco di artigianato, industria e tradizione. Dalla pianura all\'Appennino, le attività locali hanno bisogno di una presenza online che le faccia distinguere.',
    'Territorio tra Emilia e Appennino, Reggio offre opportunità per artigiani, commercianti e professionisti. Un sito web professionale ti fa trovare dai clienti giusti.',
    "Dalla Food Valley all'Appennino, la provincia di Reggio ha un tessuto economico diversificato. Un sito web efficace ti aiuta a raggiungere nuovi clienti.",
  ],
  'Modena': [
    'La provincia di Modena è famosa per il distretto ceramico, il motorsport e l\'agroalimentare. Un sito web professionale è essenziale per competere in questi settori.',
    'Terra di eccellenze, dal Aceto Balsamico alle auto sportive. Le aziende modenesi hanno bisogno di siti web che raccontino la loro qualità.',
    'Il territorio modenese combina industria, artigianato e gastronomia. Un sito web efficace ti fa distinguere in un mercato competitivo.',
  ],
  'Parma': [
    'La provincia di Parma è il cuore della Food Valley italiana. Produttori, ristoranti e artigiani hanno bisogno di siti web che valorizzino la tradizione.',
    'Parma è sinonimo di qualità alimentare nel mondo. Un sito web professionale ti aiuta a raggiungere clienti in Italia e all\'estero.',
    'Territorio di eccellenze enogastronomiche e cultura. Le attività parmigiane meritano siti web che raccontino la loro storia.',
  ],
  'Bologna': [
    'L\'area metropolitana di Bologna è un polo economico e culturale. Un sito web professionale ti aiuta a distinguerti nella competizione cittadina.',
    'Bologna e il suo hinterland offrono grandi opportunità per professionisti e attività locali. Un sito web efficace ti fa trovare dai clienti.',
    'Territorio dinamico tra tradizione e innovazione. Le attività bolognesi hanno bisogno di una presenza online all\'altezza.',
  ],
};

const PROVINCE_HERO_TEMPLATES = [
  {
    h1: 'Siti Web Professionali in Provincia di {{Province}}',
    sub: 'Aiuto attività, artigiani e professionisti di {{Province}} a farsi trovare online con siti veloci, ottimizzati e orientati ai risultati.',
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Conosco il territorio e le esigenze delle attività di {{Province}}',
  },
  {
    h1: 'Il tuo sito web in provincia di {{Province}} deve portarti clienti',
    sub: 'Non serve un sito complicato. Serve uno che funzioni e ti faccia trovare da chi cerca i tuoi servizi nella zona di {{Province}}.',
    ctaText: 'Contattami',
    trustSignal: 'Specializzato in siti web per attività locali di {{Province}}',
  },
  {
    h1: 'Siti Web per le attività di {{Province}} e dintorni',
    sub: 'Dalla pianura all\'Appennino, aiuto imprenditori e professionisti a costruire una presenza online efficace e misurabile.',
    ctaText: 'Richiedi un preventivo',
    trustSignal: 'Esperienza con le attività del territorio emiliano',
  },
];

function slugifyProvinceName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function buildProvincePageData(provinceSlug: string): ProvincePageData | null {
  const province = getProvinceInfo(provinceSlug);
  if (!province) return null;

  const descriptions = PROVINCE_DESCRIPTIONS[province.name] || [
    `La provincia di ${province.name} offre opportunità per attività locali. Un sito web professionale ti aiuta a raggiungere nuovi clienti.`,
  ];

  const replacements = createReplacements(
    province.name,
    province.name,
    province.region,
    province.totalPopulation,
    'Siti Web',
    'siti-web',
    100,
    '',
    '',
    ''
  );

  const heroTemplate = deterministicPick(PROVINCE_HERO_TEMPLATES, provinceSlug);
  const description = pickVariant(provinceSlug, descriptions);

  const titleVariants = [
    `Siti Web in Provincia di ${province.name} | Manuel De Ceglie`,
    `Realizzazione Siti Web ${province.name} | Web Developer`,
    `Siti Web Professionali ${province.name} | Manuel De Ceglie`,
  ];
  const title = pickVariant(provinceSlug, titleVariants);

  const h1Variants = [
    `Siti Web per attività in provincia di ${province.name}`,
    `Il tuo sito web in provincia di ${province.name}`,
    `Siti Web professionali in ${province.name}`,
  ];
  const h1 = pickVariant(provinceSlug, h1Variants);

  const cities = getTopCitiesForProvince(provinceSlug, 12).map(city => ({
    name: city.name,
    slug: city.slug,
    population: city.population,
  }));

  const centerLat = province.cities.reduce((sum, c) => sum + c.geo.lat, 0) / province.cities.length;
  const centerLng = province.cities.reduce((sum, c) => sum + c.geo.lng, 0) / province.cities.length;

  return {
    slug: province.slug,
    name: province.name,
    region: province.region,
    description,
    hero: {
      h1: replaceTokens(heroTemplate.h1, replacements),
      sub: replaceTokens(heroTemplate.sub, replacements),
      ctaText: heroTemplate.ctaText,
      trustSignal: replaceTokens(heroTemplate.trustSignal, replacements),
    },
    seo: {
      title,
      description,
      canonical: `https://manueldeceglie.it/siti-web/${province.slug}`,
      keywords: [
        `siti web ${province.name.toLowerCase()}`,
        `web designer ${province.name.toLowerCase()}`,
        `realizzazione siti web ${province.name.toLowerCase()}`,
        `siti web provincia di ${province.name.toLowerCase()}`,
      ],
      h1,
    },
    cities,
    geo: {
      centerLat,
      centerLng,
    },
  };
}

function slugifyForProvince(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function getProvinceSlugFromName(name: string): string {
  return slugifyForProvince(name);
}
