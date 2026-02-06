import { Location } from '@/data/locations';
import { MarketArchetype } from '@/data/archetypes';
import { NicheConfig } from '@/data/niches-config';
import { buildNicheCanonicalUrl } from '@/lib/link-graph/tokens';
import { getNicheLabelForPhrase } from '@/lib/niche-labels';

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

    // Hash unico per la città (usato in tutti i casi)
    const cityHash = cityName.split('').reduce((acc, char) => {
      return ((acc << 5) - acc) + char.charCodeAt(0) | 0;
    }, 0);

    // CASO 1: Piccoli Comuni (Target: Artigiani, Negozi, Piccole Imprese)
    if (isSmallTown) {
      const smallTownTemplates = [
        `Software Gestionali Semplici a ${cityName} | ${suffix}`,
        `Programmi per Artigiani e PMI a ${cityName} | No Excel`,
        `Digitalizzazione ${cityName}: Software su Misura Semplici`,
        `Software Gestionale Magazzino e Fatture a ${cityName}`,
        `App su Misura per Negozi a ${cityName} | Facile e Veloce`,
        `Digitalizza la Tua Attività a ${cityName}: Software Intuitivi`,
        `Software per Ristoranti e Negozi a ${cityName} | Pronto in 14 Giorni`,
        `Gestionale Semplice ${cityName}: Dici Addio alla Carta`,
      ];
      const index = Math.abs(cityHash) % smallTownTemplates.length;
      return smallTownTemplates[index];
    }

    // CASO 2: Poli Industriali e Food Valley (Target: Aziende Strutturate, Produzione)
    if (isIndustrial) {
      const industrialTemplates = [
        `Sviluppo Software Industria 4.0 a ${cityName} | ${suffix}`,
        `Automazione Processi e Software Custom a ${cityName}`,
        `Software su Misura ${cityName}: Integrazioni e Gestionali Web`,
        `Sviluppo Gestionale Produzione a ${cityName} | ${suffix}`,
        `Software Industriale ${cityName}: Automazione e Controllo Qualità`,
        `ERP e Gestionali per Aziende ${cityName} | Industria 4.0`,
        `Digitalizzazione Produzione ${cityName}: Software su Misura`,
        `Software Gestione Commesse e Magazzino ${cityName}`,
      ];
      const index = Math.abs(cityHash) % industrialTemplates.length;
      return industrialTemplates[index];
    }

    // CASO 3: Città Grandi/Standard (Target: Business misto, Startup)
    const corporateTemplates = [
      `Sviluppo Software su Misura a ${cityName} | ${suffix}`,
      `Programmatore a ${cityName}: Web App e Automazioni | ${suffix}`,
      `Realizzazione Software e CRM a ${cityName} | ${suffix}`,
      `Sviluppo Tool e Integrazioni API a ${cityName}`,
      `Software House ${cityName}: App, Gestionali e Web App`,
      `CRM e Software Gestionali ${cityName} | Sviluppo Custom`,
      `Applicazioni Web e Mobile ${cityName} | Sviluppo su Misura`,
      `Digital Transformation ${cityName}: Software per Aziende`,
    ];
    const index = Math.abs(cityHash) % corporateTemplates.length;
    return corporateTemplates[index];
  }

  // LOGICA STANDARD PER ALTRI SERVIZI (Siti Web, SEO, ecc) - Emotional Trigger per CTR
  // Hash unico per combinazione city + service per evitare duplicati
  const hashInput = `${cityName}-${serviceSlug}`;
  const hash = hashInput.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0) | 0;
  }, 0);
  
  const templates = [
    `${serviceName} ${cityName}: Primi su Google in 30 giorni ⭐ 58+ Recensioni`,
    `Sito Web ${cityName} che vende in 14 giorni o rimborsati | 58+ Clienti`,
    `${serviceName} ${cityName}: Da 890€ - Pagamento a Rate 0% ✅`,
    `${serviceName} ${cityName} | Garanzia Soddisfatti o Rimborsati`,
    `${serviceName} ${cityName}: Solo 3 slot disponibili questo mese 🔥`,
    `Web Designer ${cityName}: Risultati garantiti in 30 giorni | Manuel De Ceglie`,
    `${serviceName} ${cityName} - Preventivo Gratuito in 2 minuti`,
    `${serviceName} ${cityName}: 100% Italiano, Assistenza 24/7`,
    `${serviceName} ${cityName}: Pronto in 7-14 Giorni 🚀`,
    `Realizzazione ${serviceName} ${cityName} - 58+ Imprese Soddisfatte`,
    `${serviceName} ${cityName}: SEO Inclusa e Mobile-First 📱`,
    `${serviceName} ${cityName} | Consulente Web Locale`,
  ];

  const index = Math.abs(hash) % templates.length;
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
    // Hash unico per città + servizio per evitare duplicati
    const descHashInput = `${cityName}-${serviceSlug}-desc`;
    const descHash = descHashInput.split('').reduce((acc, char) => {
      return ((acc << 5) - acc) + char.charCodeAt(0) | 0;
    }, 0);
    const descIndex = Math.abs(descHash) % specificDescs.length;
    return specificDescs[descIndex];
  }

  // DESCRIZIONI STANDARD (Siti Web, ecc.) - Emotional trigger e social proof
  const standardDescs = [
    `58+ progetti completati a ${cityName}. Sito web professionale da 890€ con garanzia soddisfatti o rimborsati. Pagamento a rate 0%. Solo 3 slot disponibili questo mese!`,
    `Realizzazione ${serviceName} a ${cityName}: pronto in 14 giorni o ti rimborsiamo. Assistenza 24/7 inclusa. Valutazione 4.9/5 su 58 recensioni verificate.`,
    `${serviceName} ${cityName} che portano clienti reali. Preventivo gratuito in 2 minuti. Garanzia "prima pagina Google" in 30 giorni o continuo gratis.`,
    `Non rischiare con agenzie anonime. 58+ imprese a ${cityName} si sono già affidate a me. ${serviceName} professionali da 890€. Pagamento rateale 0%.`,
    `Hai bisogno di ${serviceName.toLowerCase()} a ${cityName}? Consegna in 7-14 giorni, non mesi. Risultati garantiti o rimborso integrale. Richiedi preventivo ora.`,
    `${serviceName} ${cityName}: il tuo sito online in 2 settimane. SEO inclusa, mobile-first, assistenza diretta con Manuel. Solo 3 progetti al mese.`,
  ];

  // Hash unico per città + servizio
  const descHashInput = `${cityName}-${serviceSlug}-desc`;
  const descHash = descHashInput.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0) | 0;
  }, 0);
  const descIndex = Math.abs(descHash) % standardDescs.length;
  return standardDescs[descIndex];
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
  // Hash unico per città + servizio
  const h1HashInput = `${cityName}-${serviceSlug}-h1`;
  const h1Hash = h1HashInput.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0) | 0;
  }, 0);

  if (serviceSlug === 'sviluppo-software') {
    const isSmallTown = archetype === 'MountainSmall' || archetype === 'PlainsSmall';

    if (isSmallTown) {
      const templates = [
        `Software Gestionali Semplici a ${cityName}`,
        `Il Tuo Gestionale su Misura a ${cityName}`,
        `Digitalizza la Tua Attività a ${cityName}`,
        `App per Negozi e Ristoranti a ${cityName}`,
        `Software Intuitivo per PMI a ${cityName}`,
        `Gestionale Facile per ${cityName}`,
      ];
      return templates[Math.abs(h1Hash) % templates.length];
    }

    const templates = [
      `Sviluppo Software e Automazioni a ${cityName}`,
      `Realizzazione Gestionali Custom a ${cityName}`,
      `Software su Misura e Web App a ${cityName}`,
      `Soluzioni Software per Aziende a ${cityName}`,
      `CRM e Gestionali ${cityName}: Sviluppo su Misura`,
      `Software Industria 4.0 a ${cityName}`,
      `Digital Transformation ${cityName}: Software Custom`,
      `Programmatore Software ${cityName}: App e Gestionali`,
    ];
    return templates[Math.abs(h1Hash) % templates.length];
  }

  // Standard H1 - Emotional trigger
  const h1Templates = [
    `${serviceName} ${cityName}: Il tuo sito che vende in 14 giorni`,
    `${serviceName} ${cityName} - Da 890€ con Garanzia Risultati`,
    `${serviceName} ${cityName}: Primi su Google in 30 giorni`,
    `${serviceName} ${cityName} - 58+ Clienti Soddisfatti`,
    `Web Designer ${cityName}: Sito Professionale in 2 Settimane`,
    `${serviceName} ${cityName} - Preventivo Gratuito in 2 minuti`,
    `${serviceName} ${cityName}: SEO Inclusa e Mobile-First`,
    `Realizzazione ${serviceName} ${cityName} - Pagamento a Rate 0%`,
    `${serviceName} ${cityName}: Sito Web che Porta Clienti`,
    `Creazione ${serviceName} ${cityName} - Assistenza 24/7`,
  ];
  return h1Templates[Math.abs(h1Hash) % h1Templates.length];
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

export function buildNicheSeoMetadata(
  location: Location,
  niche: NicheConfig
): SeoMetadata {
  const citySlug = location.slug;
  const canonical = buildNicheCanonicalUrl(citySlug, niche.slug, 'siti-web');
  const baseUrl = 'https://manueldeceglie.it';

  const label = getNicheLabelForPhrase(niche);
  const labelTitle = label.charAt(0).toUpperCase() + label.slice(1);
  
  // Hash unico per città + nicchia per evitare duplicati
  const nicheHashInput = `${location.name}-${niche.slug}`;
  const nicheHash = nicheHashInput.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0) | 0;
  }, 0);
  
  const titleVariants = [
    `${niche.name} ${location.name}: Sito che porta clienti ⭐ 58+ Recensioni`,
    `Web Design ${labelTitle} ${location.name} - Pronti in 14 giorni`,
    `${niche.name} ${location.name}: Da 890€ - Solo 3 slot disponibili`,
    `${niche.name} ${location.name} | Garanzia Prima Pagina Google`,
    `Siti Web per ${labelTitle} ${location.name} - Pagamento Rate 0%`,
    `${niche.name} ${location.name}: Risultati garantiti o rimborso`,
    `${niche.name} ${location.name} - Preventivo Gratuito 2 minuti`,
    `Web Designer ${labelTitle} ${location.name} | 58+ Progetti`,
    `${niche.name} ${location.name}: SEO per il tuo settore`,
    `Realizzazione Siti ${labelTitle} ${location.name} - 7-14 Giorni`,
  ];

  const title = titleVariants[Math.abs(nicheHash) % titleVariants.length];
  const descriptionVariants = [
    `58+ attività nel settore ${label} hanno già scelto il mio servizio a ${location.name}. Sito professionale da 890€ con garanzia soddisfatti o rimborsati. Solo 3 slot disponibili!`,
    `${niche.name} ${location.name}: sito web pronto in 14 giorni o ti rimborsiamo. SEO specifica per il tuo settore, assistenza 24/7. Pagamento a rate 0%.`,
    `Realizzo siti web per ${label} a ${location.name}. 58+ progetti completati, valutazione 4.9/5. Preventivo gratuito in 2 minuti!`,
    `${niche.name} ${location.name}: il tuo sito che porta clienti reali. Garanzia "prima pagina Google" in 30 giorni o continuo gratis. Da 890€.`,
    `Non rischiare con agenzie anonime. Specialista in ${niche.name.toLowerCase()} a ${location.name} con 58+ casi di successo. Risultati garantiti, pagamento rateale.`,
    `${niche.name} ${location.name}: sito ottimizzato per farti trovare dai clienti giusti. Design professionale, mobile-first. Richiedi preventivo!`,
  ];

  const description = descriptionVariants[Math.abs(nicheHash) % descriptionVariants.length];

  const keywords = [
    `${niche.name.toLowerCase()} ${location.name}`,
    `web design ${label} ${location.name}`,
    `marketing per ${label} ${location.name}`,
    `realizzazione siti ${label} ${location.name}`,
  ];

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
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${niche.name} a ${location.name}`,
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
    },
  };
}