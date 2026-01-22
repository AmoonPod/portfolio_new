import { NicheConfig } from '@/data/niches-config';

export interface GeneratedKeywords {
  base: string[];
  local: string[];
  longTail: string[];
}

const NICHE_SPECIFIC_PATTERNS: Record<string, string[]> = {
  ristoranti: [
    'dove mangiare a {city}',
    'prenotazione ristorante {city}',
    'ristorante romantico {city}',
    'cena di pesce {city}',
    'menu di pesce {city}',
    'trattoria tipica {city}',
    'pizzeria {city}',
    'dove andare a cena {city}'
  ],
  'saloni-bellezza': [
    'parrucchiere {city}',
    'centro estetico {city}',
    'trucco sposa {city}',
    'trattamenti viso {city}',
    'salone bellezza {city}',
    'hair stylist {city}',
    'manicure {city}',
    'massaggio {city}'
  ],
  fotografi: [
    'fotografo matrimoniale {city}',
    'fotografo pubblicitario {city}',
    'servizio foto {city}',
    'video produzione {city}',
    'fotografo newborn {city}',
    'fotografo corporate {city}',
    'fotografo eventi {city}',
    'ritratto professionale {city}'
  ],
  'aziende-agricole': [
    'acquisto prodotti agricoli {city}',
    'degustazione vino {city}',
    'agriturismo {city}',
    'visita in cantina {city}',
    'vendita diretta formaggi {city}',
    'olio extravergine {city}',
    'box degustazione {city}',
    'prodotti bio {city}'
  ]
};

const SERVICE_KEYWORDS: Record<string, string[]> = {
  'Food & Hospitality': [
    'menu digitale',
    'prenotazioni online',
    'food delivery',
    'sistema ordinazioni',
    'gestione tavoli'
  ],
  'Beauty & Wellness': [
    'prenotazione trattamenti',
    'listino prezzi',
    'pacchetti benessere',
    'prodotti professionali',
    'fedeltà clienti'
  ],
  'Creative': [
    'portfolio fotografico',
    'video produzione',
    'post-produzione',
    'servizio fotografico',
    'booking online'
  ],
  'Agriculture': [
    'filiera corta',
    'vendita diretta',
    'degustazioni in azienda',
    'prodotti bio',
    'spedizione refrigerata'
  ]
};

export const generateKeywords = (
  niche: NicheConfig,
  cityName: string,
  citySlug: string
): GeneratedKeywords => {
  const patterns = NICHE_SPECIFIC_PATTERNS[niche.slug] || [];
  const local = patterns.map(pattern => 
    pattern.replace('{city}', cityName)
  );

  const serviceKeywords = SERVICE_KEYWORDS[niche.category] || [];
  const base = serviceKeywords.map(kw => `${kw} ${niche.singularName.toLowerCase()}`);

  const longTail = [
    `${niche.singularName.toLowerCase()} professionale ${cityName}`,
    `web marketing per ${niche.pluralName.toLowerCase()}`,
    `aumento clienti ${niche.pluralName.toLowerCase()}`,
    `digitalizzazione ${niche.pluralName.toLowerCase()}`,
    `${niche.slug} seo locale ${cityName}`,
    `sviluppo web per ${niche.pluralName.toLowerCase()}`,
    `presenza online ${niche.singularName.toLowerCase()} ${cityName}`,
    `lead generation per ${niche.pluralName.toLowerCase()}`
  ];

  return {
    base,
    local,
    longTail
  };
};

export const generateMetaDescription = (
  niche: NicheConfig,
  cityName: string
): string => {
  return `Sei un ${niche.singularName.toLowerCase()} a ${cityName}? Realizziamo siti web professionali per ${niche.pluralName.toLowerCase()}. Web design, SEO locale e marketing digitale per professionisti come te.`;
};

export const generateTitle = (
  niche: NicheConfig,
  cityName: string,
  isServicePage: boolean = false
): string => {
  if (isServicePage) {
    return `${niche.name} a ${cityName} | Web Design e Marketing per ${niche.pluralName}`;
  }
  return `Siti Web per ${niche.name} a ${cityName}`;
};

export const generateSlug = (
  nicheSlug: string,
  citySlug: string
): string => {
  return `${nicheSlug}/${citySlug}`;
};

export const generateHreflangAlternates = (
  niche: NicheConfig,
  cityName: string,
  baseUrl: string
): Record<string, string> => {
  const cityNameNormalized = cityName.toLowerCase().replace(/\s+/g, '-');
  return {
    it: `${baseUrl}/${niche.slug}/${cityNameNormalized}`
  };
};

export const KEYWORD_BUNDLES = {
  primary: [
    '{niche} {city}',
    'web design {niche}',
    'sviluppo web {niche}',
    'marketing digitale {niche}'
  ],
  secondary: [
    '{niche} professionale {city}',
    '{niche} seo locale',
    'aumento clienti {niche}',
    'lead generation {niche}'
  ],
  question: [
    'come trovare clienti {niche}',
    'quanto costa sito web {niche}',
    'quanto tempo per sito web {niche}',
    'cosa serve per sito web {niche}'
  ]
};

export const generateBulkKeywords = (
  niche: NicheConfig,
  cityName: string
): string[] => {
  const keywords: string[] = [];
  
  KEYWORD_BUNDLES.primary.forEach(bundle => {
    keywords.push(bundle.replace('{niche}', niche.slug).replace('{city}', cityName));
    keywords.push(bundle.replace('{niche}', niche.name.toLowerCase()).replace('{city}', cityName));
  });
  
  KEYWORD_BUNDLES.secondary.forEach(bundle => {
    keywords.push(bundle.replace('{niche}', niche.slug).replace('{city}', cityName));
  });
  
  KEYWORD_BUNDLES.question.forEach(bundle => {
    keywords.push(bundle.replace('{niche}', niche.pluralName.toLowerCase()));
  });
  
  return [...new Set(keywords)];
};
