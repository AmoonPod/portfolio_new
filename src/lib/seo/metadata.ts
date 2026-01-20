import { Location } from '@/data/locations';
import { MarketArchetype } from '@/data/archetypes';

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
  'sviluppo-software': 'Sviluppo Software', // Cambiato da "Software Gestionali" a "Sviluppo Software" per coprire tutto
};

// Zone/area keywords per città italiane (Utili per siti-web, DA EVITARE per software)
const CITY_ZONES: Record<string, string[]> = {
  // Emilia-Romagna
  'modena': [' Sassuolo', ' Carpi', ' Formigine', ' Mirandola', ' Pavullo', ' Vignola', ' Castelnuovo Rangone', ' Nonantola', ' Castelfranco Emilia', ' Soliera', ' distretto ceramico', ' zona industriale modenese'],
  'bologna': [' San Lazzaro', ' Imola', ' Casalecchio', ' Zola Predosa', ' Valsamoggia', ' Interporto', ' Centergross', ' zona industriale Roveri'],
  'parma': [' Fidenza', ' Langhirano', ' Collecchio', ' Interporto di Parma', ' zona SPIP'],
  'reggio-emilia': [' Correggio', ' Scandiano', ' Guastalla', ' Rubiera', ' zona industriale Mancasale'],
  // ... (altre città rimangono invariate se le hai nel db)
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
  // LOGICA SPECIFICA PER SOFTWARE (Alta competizione / B2B)
  if (serviceSlug === 'sviluppo-software') {
    const isSmallTown = archetype === 'MountainSmall' || archetype === 'PlainsSmall';
    const isIndustrial = archetype === 'IndustrialHub' || archetype === 'FoodValley';

    // CASO 1: Piccoli Comuni (Target: Artigiani, Negozi, Piccole Imprese)
    if (isSmallTown) {
      const smallTownTemplates = [
        `Software Gestionali Semplici a ${cityName} | ${suffix}`,
        `Programmi per Artigiani e PMI a ${cityName} | No Excel`,
        `Digitalizzazione ${cityName}: Software su Misura Semplici`,
        `Software Gestionale Magazzino e Fatture a ${cityName}`,
      ];
      // Usa un hash della città per mantenere il titolo consistente (non random a ogni build)
      const index = cityName.charCodeAt(0) % smallTownTemplates.length;
      return smallTownTemplates[index];
    }

    // CASO 2: Poli Industriali e Food Valley (Target: Aziende Strutturate, Produzione)
    if (isIndustrial) {
      const industrialTemplates = [
        `Sviluppo Software Industria 4.0 a ${cityName} | ${suffix}`,
        `Automazione Processi e Software Custom a ${cityName}`,
        `Software su Misura ${cityName}: Integrazioni e Gestionali Web`,
        `Sviluppo Gestionale Produzione a ${cityName} | ${suffix}`,
      ];
      const index = cityName.charCodeAt(0) % industrialTemplates.length;
      return industrialTemplates[index];
    }

    // CASO 3: Città Grandi/Standard (Target: Business misto, Startup)
    const corporateTemplates = [
      `Sviluppo Software su Misura a ${cityName} | ${suffix}`,
      `Programmatore a ${cityName}: Web App e Automazioni | ${suffix}`,
      `Realizzazione Software e CRM a ${cityName} | ${suffix}`,
      `Sviluppo Tool e Integrazioni API a ${cityName}`,
    ];
    const index = cityName.charCodeAt(0) % corporateTemplates.length;
    return corporateTemplates[index];
  }

  // LOGICA STANDARD PER ALTRI SERVIZI (Siti Web, SEO, ecc)
  const templates = [
    `Realizzazione ${serviceName} a ${cityName} | ${suffix}`,
    `${serviceName} a ${cityName}: Strategie per crescere | ${suffix}`,
    `Creazione ${serviceName} professionali a ${cityName}`,
    `${serviceName} a ${cityName} | Consulente Digitale`,
  ];

  const index = cityName.charCodeAt(0) % templates.length;
  return templates[index];
}

export function generateDescription(
  cityName: string,
  serviceName: string,
  serviceSlug: string = 'siti-web',
  archetype?: MarketArchetype
): string {

  // DESCRIZIONI IPER-OTTIMIZZATE PER SOFTWARE
  if (serviceSlug === 'sviluppo-software') {
    const descriptionMap: Record<MarketArchetype, string[]> = {
      MountainSmall: [
        `Basta carta persa. Sviluppo software semplici per artigiani a ${cityName}. Funzionano anche offline, gestiscono preventivi e lavori. Preventivo gratuito.`,
        `Cerchi un gestionale semplice a ${cityName}? Creo software su misura per piccole attività: facili, veloci e senza canoni mensili.`,
      ],
      HillMedium: [
        `Sviluppatore software a ${cityName} per PMI e artigiani. Elimina i file Excel e metti ordine nei dati con un gestionale creato apposta per te.`,
        `Software su misura a ${cityName}. Automatizza il lavoro d'ufficio e gestisci i clienti senza stress. Soluzioni web senza costi di licenza.`,
      ],
      IndustrialHub: [
        `Automazione industriale a ${cityName}. Sviluppo software per interconnessione macchinari, gestione commesse e tracciabilità. Soluzioni Industria 4.0.`,
        `Software su Misura per aziende di ${cityName}. Integrazioni API, gestione produzione e magazzino. Elimina l'errore umano dai processi.`,
      ],
      FoodValley: [
        `Software per aziende alimentari a ${cityName}. Gestione lotti, scadenze e tracciabilità HACCP automatizzata. Sviluppo custom per il food.`,
        `Digitalizza la tua azienda food a ${cityName}. Software su misura per ordini, produzione e logistica. Controllo totale della filiera.`,
      ],
      ProvinceCapital: [
        `Sviluppo Software e Web App a ${cityName}. Trasforma i tuoi processi manuali in flussi digitali automatizzati. CRM, Gestionali e Tool su misura.`,
        `Programmatore a ${cityName} specializzato in soluzioni aziendali. Database SQL, API e interfacce web moderne. Parliamo del tuo progetto.`,
      ],
      SuburbanGrowth: [
        `La tua azienda a ${cityName} sta crescendo? Sviluppo software scalabili che automatizzano il back-office e ti permettono di gestire più clienti.`,
        `Partner tecnologico a ${cityName}. Realizzo ecosistemi digitali su misura: dal sito al gestionale, tutto integrato.`,
      ],
      PlainsSmall: [
        `Metti ordine nella tua attività a ${cityName}. Sviluppo piccoli gestionali e tool di automazione per eliminare la burocrazia inutile.`,
        `Software personalizzati a ${cityName}. Investi in uno strumento che è tuo per sempre. Niente abbonamenti, assistenza diretta.`,
      ],
      MetroBologna: [
        `Software Innovation a ${cityName}. Sviluppo piattaforme web complesse, dashboard analytics e integrazioni avanzate. Consulenza senior.`,
        `Cerchi uno sviluppatore a ${cityName}? Realizzo Web App e Software Cloud per aziende che vogliono competere ad alto livello.`,
      ],
    };

    // Fallback se l'archetipo non è definito
    const fallbackDescs = [
      `Sviluppo software su misura a ${cityName}. Elimina Excel e automatizza i processi aziendali con tool personalizzati. Preventivo gratuito.`,
      `Programmatore a ${cityName}: realizzo gestionali web, CRM e automazioni per farti risparmiare tempo. Soluzioni proprietarie senza canone.`,
    ];

    const specificDescs = archetype ? descriptionMap[archetype] : fallbackDescs;
    const index = cityName.charCodeAt(0) % specificDescs.length;
    return specificDescs[index];
  }

  // DESCRIZIONI STANDARD (Siti Web, ecc.) - Mantenute generiche ma efficaci
  const standardDescs = [
    `Cerchi ${serviceName} a ${cityName}? Aiuto professionisti e aziende locali a crescere online con strategie concrete e misurabili.`,
    `Realizzazione ${serviceName} a ${cityName}. Progetti curati nel design e ottimizzati per Google. Richiedi un'analisi gratuita.`,
    `Servizi di ${serviceName} professionali a ${cityName}. Affidati a un esperto che conosce il mercato locale. Risultati garantiti.`,
  ];

  const index = cityName.charCodeAt(0) % standardDescs.length;
  return standardDescs[index];
}

export function generateKeywords(
  cityName: string,
  province: string,
  serviceName: string,
  serviceSlug: string = 'siti-web',
  archetype?: MarketArchetype
): string[] {
  const normalizedCity = cityName.toLowerCase();

  // LOGICA SOFTWARE: Niente Keyword Stuffing di zone limitrofe!
  if (serviceSlug === 'sviluppo-software') {
    const isSmallTown = archetype === 'MountainSmall' || archetype === 'PlainsSmall' || archetype === 'HillMedium';
    const isIndustrial = archetype === 'IndustrialHub' || archetype === 'FoodValley';

    // Base keywords sempre valide
    const keywords = [
      `sviluppo software ${normalizedCity}`,
      `programmatore ${normalizedCity}`,
      `software su misura ${normalizedCity}`,
      `realizzazione gestionali ${normalizedCity}`,
      `creazione database ${normalizedCity}`,
      `automazione processi ${normalizedCity}`,
      `consulenza informatica ${normalizedCity}`,
    ];

    // Keywords specifiche per target
    if (isSmallTown) {
      keywords.push(`gestionale artigiani ${normalizedCity}`);
      keywords.push(`programma fatture ${normalizedCity}`);
      keywords.push(`digitalizzazione ${normalizedCity}`);
    } else if (isIndustrial) {
      keywords.push(`software industria 4.0 ${normalizedCity}`);
      keywords.push(`gestione produzione ${normalizedCity}`);
      keywords.push(`integrazione sistemi ${normalizedCity}`);
    } else {
      // Città grandi
      keywords.push(`software su misura ${normalizedCity}`);
      keywords.push(`sviluppo web app ${normalizedCity}`);
      keywords.push(`crm personalizzato ${normalizedCity}`);
    }

    return keywords;
  }

  // LOGICA SITI WEB: Qui le zone limitrofe hanno senso (Local SEO classica)
  const keywords = [
    `${serviceName.toLowerCase()} ${normalizedCity}`,
    `realizzazione ${serviceName.toLowerCase()} ${normalizedCity}`,
    `agenzia web ${normalizedCity}`,
    `web designer ${normalizedCity}`,
  ];

  // Aggiungi zone/quartieri SOLO per servizi "local" come siti web
  if (CITY_ZONES[normalizedCity]) {
    const zones = CITY_ZONES[normalizedCity];
    // Prendiamo solo i primi 3 per non esagerare
    zones.slice(0, 3).forEach(zone => {
      keywords.push(`${serviceName.toLowerCase()}${zone}`);
    });
  }

  return keywords;
}

export function generateH1(
  cityName: string,
  serviceName: string,
  serviceSlug: string = 'siti-web',
  archetype?: MarketArchetype
): string {
  if (serviceSlug === 'sviluppo-software') {
    const isSmallTown = archetype === 'MountainSmall' || archetype === 'PlainsSmall';

    if (isSmallTown) {
      const templates = [
        `Software Gestionali Semplici a ${cityName}`,
        `Il Tuo Gestionale su Misura a ${cityName}`,
        `Digitalizza la Tua Attività a ${cityName}`,
      ];
      return templates[cityName.charCodeAt(0) % templates.length];
    }

    const templates = [
      `Sviluppo Software e Automazioni a ${cityName}`,
      `Realizzazione Gestionali Custom a ${cityName}`,
      `Software su Misura e Web App a ${cityName}`,
      `Soluzioni Software per Aziende a ${cityName}`,
    ];
    return templates[cityName.charCodeAt(0) % templates.length];
  }

  // Standard H1
  return `${serviceName} a ${cityName}: Soluzioni per Crescere`;
}

export function buildSeoMetadata(
  location: Location,
  serviceSlug: string = 'siti-web',
  archetype?: MarketArchetype
): SeoMetadata {
  const serviceName = SERVICE_NAMES[serviceSlug] || 'Servizi Web';
  const citySlug = location.slug;
  const canonical = generateCanonicalUrl(citySlug, serviceSlug);
  const baseUrl = 'https://manueldeceglie.it'; // Assicurati che sia corretto

  const title = generateTitle(location.name, serviceName, serviceSlug, 'Manuel De Ceglie', archetype);
  const description = generateDescription(location.name, serviceName, serviceSlug, archetype);
  const keywords = generateKeywords(location.name, location.province, serviceName, serviceSlug, archetype);

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
          // Immagine specifica per software se disponibile, altrimenti fallback
          url: serviceSlug === 'sviluppo-software'
            ? `${baseUrl}/og-image.png` // Qui potresti mettere una OG image dinamica in futuro
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
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export function buildNoIndexMetadata(): SeoMetadata {
  return {
    title: 'Pagina Non Trovata | Manuel De Ceglie',
    description: 'La pagina richiesta non è disponibile.',
    canonical: 'https://manueldeceglie.it/404',
    robots: {
      index: false,
      follow: false,
    },
  };
}