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
  'sviluppo-software': 'Software Gestionali',
};

const SERVICE_SLUGS: Record<string, string> = {
  'siti-web': 'siti-web',
  'seo': 'seo',
  'social-media': 'social-media',
  'ecommerce': 'ecommerce',
  'branding': 'branding',
  'sviluppo-software': 'sviluppo-software',
};

// Zone/area keywords per città italiane - zona industriale, quartieri, distretti
const CITY_ZONES: Record<string, string[]> = {
  // Emilia-Romagna - Modena
  'modena': [' Sassuolo', ' Carpi', ' Formigine', ' Mirandola', ' Pavullo', ' Vignola', ' Castelnuovo Rangone', ' Nonantola', ' Castelfranco Emilia', ' Soliera', ' distretto ceramico', ' zona industriale modenese'],
  'bologna': [' San Lazzaro di Savena', ' Imola', ' Castel San Pietro Terme', ' Zola Predosa', ' Pianoro', ' Sasso Marconi', ' Casalecchio di Reno', ' Bentivoglio', ' Minerbio', ' area metropolitana bolognese'],
  'parma': [' Fidenza', ' Salsomaggiore Terme', ' Langhirano', ' Busseto', ' Colorno', ' Sorbolo', ' Medesano', ' Felino', ' zona industriale parmense'],
  'reggio-emilia': [' Correggio', ' Scandiano', ' Guastalla', ' Novellara', ' Luzzara', ' Castellarano', ' Rio Saliceto', ' Cavriago', ' Bagnolo in Piano', ' distretto ceramico reggiano'],
  'piacenza': [' Fiorenzuola d\'Arda', ' Castel San Giovanni', ' Borgonovo Val Tidone', ' Rottofreno', ' Podenzano', ' Vigolzone', ' area industriale piacentina'],
  'ferrara': [' Cento', ' Comacchio', ' Argenta', ' Copparo', ' Bondeno', ' Poggio Renatico', ' delta del Po'],
  'ravenna': [' Faenza', ' Lugo', ' Cervia', ' Bagnacavallo', ' Cotignola', ' Fusignano', ' Alfonsine', ' lidi ravennati'],
  'forli-cesena': [' Forlimpopoli', ' Bertinoro', ' Galeata', ' Civitella di Romagna', ' Predappio', ' Dovadola', ' Cesenatico', ' Gatteo'],
  'rimini': [' Riccione', ' Cattolica', ' San Marino', ' Santarcangelo di Romagna', ' Bellaria-Igea Marina', ' Misano Adriatico'],
  // Veneto
  'verona': [' Villafranca di Verona', ' Legnago', ' Bussolengo', ' Sona', ' Pescantina', ' San Bonifacio', ' zona industriale veronese'],
  'padova': [' Albignasego', ' Selvazzano Dentro', ' Cadoneghe', ' Vigonza', ' Rubano', ' Campo San Marto', ' zona industriale padovana'],
  'vicenza': [' Thiene', ' Schio', ' Bassano del Grappa', ' Arzignano', ' Lonigo', ' Dueville', ' zona industriale vicentina'],
  'venezia': [' Mestre', ' Marghera', ' San Donà di Piave', ' Jesolo', ' Chioggia', ' Cavarzere'],
  'treviso': [' Conegliano', ' Castelfranco Veneto', ' Montebelluna', ' Vittorio Veneto', ' Oderzo', ' Susegana'],
  'rovigo': [' Adria', ' Lendinara', ' Badia Polesine', ' Occhiobello', ' Polesella'],
  // Toscana
  'firenze': [' Sesto Fiorentino', ' Scandicci', ' Bagno a Ripoli', ' Signa', ' Lastra a Signa', ' zona industriale fiorentina'],
  'prato': [' Montemurlo', ' Agliana', ' Carmignano', ' Poggio a Caiano', ' Vaiano'],
  'livorno': [' Piombino', ' Grosseto', ' Rosignano Marittimo', ' Cecina', ' Portoferraio', ' Caltagirone'],
  'pisa': [' Lucca', ' Viareggio', ' Cascina', ' Pontedera', ' San Giuliano Terme', ' Livorno'],
  'arezzo': [' Montevarchi', ' San Giovanni Valdarno', ' Cortona', ' Castiglion Fiorentino', ' Foiano della Chiana'],
  'siena': [' Poggibonsi', ' Colle Val d\'Elsa', ' Montepulciano', ' Chiusi', ' Sinalunga'],
  // Reggio Emilia province specific zones
  'castelnovo-ne-monti': [' Ventasso', ' Busana', ' Collagna', ' Ligonchio', ' Villa Minozzo', ' canossa', ' alta val d\'Enza', ' Appennino reggiano'],
  'san-poledEnza': [' Quattro Castella', ' Montecchio Emilia', ' Bibbiano', ' Traversetolo', ' canossa'],
};

export function generateCanonicalUrl(citySlug: string, serviceSlug: string = 'siti-web'): string {
  return `https://manueldeceglie.it/${serviceSlug}/${citySlug}`;
}

export function generateTitle(
  cityName: string,
  serviceName: string,
  serviceSlug: string = 'siti-web',
  suffix: string = 'Manuel De Ceglie',
  archetype?: MarketArchetype
): string {
  if (serviceSlug === 'sviluppo-software') {
    // Per piccoli comuni (montagna, pianura): title più "terra terra" e vicini all'artigiano
    const isSmallTown = archetype === 'MountainSmall' || archetype === 'PlainsSmall' || archetype === 'HillMedium';
    
    if (isSmallTown) {
      const smallTownTemplates = [
        `Software per Artigiani e Attività a ${cityName} | Gestionali Semplici`,
        `Gestionali e Software su Misura a ${cityName} | Per Piccole Attività`,
        `Digitalizzazione per Artigiani a ${cityName} | Software Personalizzati`,
        `Software Gestionali Semplici a ${cityName} | ${suffix}`,
      ];
      const index = cityName.length % smallTownTemplates.length;
      return smallTownTemplates[index];
    }
    
    // Per città grandi (capoluoghi, industriali): title più corporate e B2B
    const corporateTemplates = [
      `Sviluppo Software su Misura a ${cityName} | ${suffix}`,
      `Programmatore a ${cityName}: Software Personalizzati e Automazioni | ${suffix}`,
      `Realizzazione Software e Gestionali a ${cityName} | ${suffix}`,
      `Sviluppo Tool e Automazioni a ${cityName} | ${suffix}`,
    ];
    const index = cityName.length % corporateTemplates.length;
    return corporateTemplates[index];
  }
  
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
  serviceSlug: string = 'siti-web',
  archetype?: MarketArchetype
): string {
  if (serviceSlug === 'sviluppo-software') {
    const archetypeHints: Record<MarketArchetype, string[]> = {
      MountainSmall: [
        `Sviluppatore software a ${cityName}. Realizzo gestionali web e automazioni per eliminare Excel. Soluzioni custom senza canoni per artigiani e attività di montagna.`,
        `Basta carta e file persi. Sviluppo software su misura per attività di ${cityName}. Gestionali facili, offline-first e senza costi mensili.`,
        `Digitalizza la tua attività a ${cityName} con un software pensato per te. Automazione processi e zero errori.`,
      ],
      HillMedium: [
        `Sviluppatore software a ${cityName}. Realizzo gestionali web, CRM e automazioni per agriturismi e artigiani. Soluzioni custom senza canoni.`,
        `Software su misura per agriturismi e artigiani del territorio collinare a ${cityName}. Elimina Excel e velocizza il lavoro.`,
        `Gestionali personalizzati per attività della zona collinare. Automazione processi e controllo totale.`,
      ],
      IndustrialHub: [
        `Sviluppatore software a ${cityName}. Realizzo gestionali web, CRM e automazioni per eliminare Excel. Soluzioni custom senza canoni per PMI e aziende.`,
        `Software gestionali B2B per aziende del settore a ${cityName}. Automazione processi e digitalizzazione completa.`,
        `CRM aziendale su misura per PMI e grandi imprese a ${cityName}. Elimina la carta e velocizza il lavoro.`,
      ],
      FoodValley: [
        `Sviluppatore software a ${cityName}. Realizzo gestionali web con tracciabilità HACCP e automazioni per aziende food. Soluzioni custom senza canoni.`,
        `Software gestionali per aziende food e artigiani del gusto a ${cityName}. Elimina Excel e digitalizza i processi.`,
        `Digitalizzazione per aziende enogastronomiche a ${cityName}. Automazione e controllo totale.`,
      ],
      ProvinceCapital: [
        `Sviluppatore software a ${cityName}. Realizzo gestionali web, CRM e automazioni per eliminare Excel. Soluzioni custom senza canoni per PMI e aziende.`,
        `Software su misura per professionisti e attività di ${cityName}. Automazione processi e zero errori.`,
        `Gestionali che ti fanno risparmiare tempo e aumentare il fatturato. Elimina la carta e velocizza il lavoro.`,
      ],
      SuburbanGrowth: [
        `Sviluppatore software a ${cityName}. Realizzo gestionali web, CRM e automazioni per eliminare Excel. Soluzioni custom senza canoni per attività in crescita.`,
        `Software gestionali per attività in crescita nell'hinterland di ${cityName}. Automazione e scalabilità.`,
        `Gestionali personalizzati per attività dinamiche della zona. Elimina Excel e velocizza il lavoro.`,
      ],
      PlainsSmall: [
        `Sviluppatore software a ${cityName}. Realizzo gestionali web e automazioni per eliminare Excel. Soluzioni custom senza canoni per artigiani e commercianti.`,
        `Basta carta e file persi. Sviluppo software su misura per artigiani e attività di ${cityName}. Gestionali facili e senza costi mensili.`,
        `Digitalizza la tua attività con un software su misura. Automazione processi e controllo totale.`,
      ],
      MetroBologna: [
        `Sviluppatore software nell'area metropolitana bolognese. Realizzo gestionali web, CRM e automazioni per eliminare Excel. Soluzioni custom senza canoni.`,
        `Software gestionali per aziende dell'hinterland bolognese. Automazione processi e digitalizzazione completa.`,
        `Gestionali professionali per competitività nel territorio. Elimina la carta e velocizza il lavoro.`,
      ],
    };
    
    const hints = archetype ? archetypeHints[archetype] : [
      `Sviluppatore software a ${cityName}. Realizzo gestionali web, CRM e automazioni per eliminare Excel. Soluzioni custom senza canoni per PMI, artigiani e professionisti.`,
      `Software su misura per la tua attività. Automazione processi e zero errori.`,
      `Digitalizza la tua impresa con un software professionale. Elimina Excel e velocizza il lavoro.`,
    ];
    
    const index = cityName.length % hints.length;
    return hints[index];
  }
  
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
  serviceName: string,
  serviceSlug: string = 'siti-web',
  archetype?: MarketArchetype
): string[] {
  const normalizedCity = cityName.toLowerCase();
  const normalizedProvince = province.toLowerCase();
  const normalizedService = serviceName.toLowerCase();
  
  // For sviluppo-software: NO keyword stuffing with nearby cities
  if (serviceSlug === 'sviluppo-software') {
    // Per piccoli comuni: keyword solo sulla città, NO provincia/regione
    const isSmallTown = archetype === 'MountainSmall' || archetype === 'PlainsSmall' || archetype === 'HillMedium';
    
    const keywords = [
      `sviluppo software ${normalizedCity}`,
      `programmatore ${normalizedCity}`,
      `software su misura ${normalizedCity}`,
      `automazione processi ${normalizedCity}`,
      `realizzazione gestionali ${normalizedCity}`,
      `creazione database ${normalizedCity}`,
      `digitalizzazione azienda ${normalizedCity}`,
      `sviluppo web app ${normalizedCity}`,
      `consulenza informatica ${normalizedCity}`,
      `software house ${normalizedCity}`,
      `crm personalizzato ${normalizedCity}`,
    ];
    
    // Per piccoli comuni: aggiungi keyword più specifiche per artigiani
    if (isSmallTown) {
      keywords.push(`digitalizzazione ${normalizedCity}`);
      keywords.push(`informatica ${normalizedCity}`);
      keywords.push(`gestionale artigiani ${normalizedCity}`);
      keywords.push(`software artigiani ${normalizedCity}`);
    }
    
    // Add province-level keywords SOLO per città grandi (capoluoghi, industriali)
    // Per piccoli comuni, lascia che sia la pagina provinciale a posizionarsi
    if (!isSmallTown) {
      keywords.push(`sviluppo software ${normalizedProvince}`);
      keywords.push(`software su misura ${normalizedProvince}`);
    }
    
    return keywords;
  }
  
  // Base keywords for other services
  const keywords = [
    `${normalizedService} ${normalizedCity}`,
    `${normalizedService} ${normalizedProvince}`,
    `realizzazione ${normalizedService} ${normalizedCity}`,
    `web designer ${normalizedCity}`,
    `creazione ${normalizedService} ${normalizedCity}`,
  ];
  
  // Add zone/district keywords if available (only for siti-web)
  if (CITY_ZONES[normalizedCity]) {
    const zones = CITY_ZONES[normalizedCity];
    zones.forEach(zone => {
      keywords.push(`${normalizedService}${zone}`);
    });
  }
  
  // Add region and broader area keywords
  keywords.push(`${normalizedService} emilia romagna`);
  keywords.push(`${normalizedService} provincia ${normalizedProvince}`);
  
  return keywords;
}

export function generateH1(
  cityName: string,
  serviceName: string,
  serviceSlug: string = 'siti-web',
  archetype?: MarketArchetype
): string {
  if (serviceSlug === 'sviluppo-software') {
    const templates = [
      `Software Gestionali a ${cityName} per Attività che Vogliono Crescere`,
      `Il Tuo Gestionale Personalizzato a ${cityName}`,
      `CRM e Software Su Misura per la Tua Impresa`,
      `Digitalizza la Tua Attività con un Software a ${cityName}`,
    ];
    const index = (cityName.length + (archetype ? archetype.length : 0)) % templates.length;
    return templates[index];
  }
  
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
  const baseUrl = 'https://manueldeceglie.it';
  
  const title = generateTitle(location.name, serviceName, serviceSlug, 'Manuel De Ceglie', archetype);
  const description = generateDescription(location.name, serviceName, serviceSlug, archetype);
  const keywords = generateKeywords(location.name, location.province, serviceName, serviceSlug, archetype);
  const h1 = generateH1(location.name, serviceName, serviceSlug, archetype);
  
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
          url: serviceSlug === 'sviluppo-software' 
            ? `${baseUrl}/api/og/sviluppo-software/${citySlug}`
            : `${baseUrl}/og-image.png`,
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
      images: [serviceSlug === 'sviluppo-software' 
        ? `${baseUrl}/api/og/sviluppo-software/${citySlug}`
        : `${baseUrl}/og-image.png`
      ],
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
