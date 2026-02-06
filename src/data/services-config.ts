/**
 * CENTRALIZED SERVICES CONFIGURATION
 * 
 * This file is the single source of truth for all programmatic SEO services.
 * Each service defined here can automatically generate:
 * - City-specific landing pages
 * - Dynamic metadata (title, description, OG, Twitter)
 * - Schema.org structured data
 * - Internal linking patterns
 * - Sitemap entries
 * 
 * To add a new service:
 * 1. Add a new entry to SERVICES_CONFIG
 * 2. Create content templates in src/lib/content/[service]-templates.ts
 * 3. The routing, sitemap, and internal linking will be handled automatically
 */

import { MarketArchetype } from './archetypes';

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type ServiceCategory = 
  | 'web-development'    // Siti web, E-commerce, Landing pages
  | 'software'           // Software gestionali, App mobile
  | 'marketing'          // SEO, Social media, Ads
  | 'design';            // Branding, UI/UX

export type ServicePriority = 'primary' | 'secondary' | 'tertiary';

export interface ServiceSeoConfig {
  /** Title templates with {{CITY_NAME}} placeholder */
  titleTemplates: string[];
  /** Description templates with {{CITY_NAME}} placeholder */
  descriptionTemplates: string[];
  /** H1 templates with {{CITY_NAME}} placeholder */
  h1Templates: string[];
  /** Keywords to include (combined with city name) */
  keywordPatterns: string[];
}

export interface ServiceSchemaConfig {
  /** Primary schema type for the service */
  schemaType: 'ProfessionalService' | 'Service' | 'Product' | 'SoftwareApplication';
  /** Additional schema properties */
  additionalProperties?: Record<string, unknown>;
}

export interface ServicePricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export interface ServiceFaqTemplate {
  question: string;
  answer: string;
  /** Which archetypes this FAQ applies to (empty = all) */
  archetypes?: MarketArchetype[];
}

export interface ServiceConfig {
  /** URL slug (e.g., 'siti-web', 'ecommerce') */
  slug: string;
  /** Display name (e.g., 'Siti Web', 'E-commerce') */
  name: string;
  /** Singular form for copy (e.g., 'Sito Web', 'E-commerce') */
  singularName: string;
  /** Short description for cards/previews */
  shortDescription: string;
  /** Longer description for service page */
  longDescription: string;
  /** Service category */
  category: ServiceCategory;
  /** Priority for internal linking and display order */
  priority: ServicePriority;
  /** Icon name (Lucide icons) */
  icon: string;
  /** Whether city pages should be generated */
  hasCityPages: boolean;
  /** Minimum population for city to qualify */
  minPopulation: number;
  /** SEO configuration */
  seo: ServiceSeoConfig;
  /** Schema.org configuration */
  schema: ServiceSchemaConfig;
  /** Pricing tiers */
  pricing: ServicePricingTier[];
  /** FAQ templates */
  faqTemplates: ServiceFaqTemplate[];
  /** Related services (by slug) */
  relatedServices: string[];
  /** Whether this service is active */
  active: boolean;
}

// =============================================================================
// SERVICES CONFIGURATION
// =============================================================================

export const SERVICES_CONFIG: ServiceConfig[] = [
  // ---------------------------------------------------------------------------
  // WEB DEVELOPMENT
  // ---------------------------------------------------------------------------
  {
    slug: 'siti-web',
    name: 'Siti Web',
    singularName: 'Sito Web',
    shortDescription: 'Siti web professionali che generano contatti e vendite.',
    longDescription: 'Realizzo siti web moderni, veloci e ottimizzati per i motori di ricerca. Ogni sito e progettato per convertire visitatori in clienti.',
    category: 'web-development',
    priority: 'primary',
    icon: 'Globe',
    hasCityPages: true,
    minPopulation: 3000,
    seo: {
      titleTemplates: [
        'Sito Web {{CITY_NAME}}: Online in 14 Giorni | Manuel De Ceglie',
        'Realizzazione Siti Web {{CITY_NAME}} | Prezzi da 890€',
        'Web Designer {{CITY_NAME}}: Il Tuo Sito che Vende davvero',
        'Siti Web {{CITY_NAME}}: Preventivo Gratuito in 2 Minuti',
      ],
      descriptionTemplates: [
        'Cerchi un sito web a {{CITY_NAME}}? Realizzo siti professionali pronti in 2 settimane. Più veloce delle agenzie, meno costoso. Leggi le recensioni.',
        'Smetti di perdere clienti a {{CITY_NAME}}. Creo siti web che convertono visitatori in contatti. Prezzi chiari, zero sorprese. Clicca per preventivo.',
        'Web designer per aziende e professionisti a {{CITY_NAME}}. Risultati misurabili come il caso Pichello (+200% utenti). Richiedi analisi gratuita.',
      ],
      h1Templates: [
        'Realizzazione Siti Web a {{CITY_NAME}}: Online in 14 Giorni',
        'Il Tuo Nuovo Sito Web a {{CITY_NAME}}',
        'Siti Web Professionali a {{CITY_NAME}} (Senza Stress)',
      ],
      keywordPatterns: [
        'siti web {{CITY_NAME}}',
        'realizzazione siti web {{CITY_NAME}}',
        'preventivo sito web {{CITY_NAME}}',
        'costo sito web {{CITY_NAME}}',
        'web designer {{CITY_NAME}}',
        'agenzia web {{CITY_NAME}}',
      ],
    },
    schema: {
      schemaType: 'ProfessionalService',
      additionalProperties: {
        priceRange: '€€',
      },
    },
    pricing: [
      {
        id: 'landing-pro',
        name: 'Landing Page Pro',
        price: '890',
        description: 'Una pagina professionale per farti conoscere e contattare subito.',
        features: [
          '1 pagina completa',
          'SEO locale ottimizzato',
          'Mobile-first design',
          'Form contatto + WhatsApp',
          'Analytics e Search Console',
          '1 revisione inclusa',
        ],
        badge: 'Popolare',
        popular: true,
      },
      {
        id: 'sito-5-pagine',
        name: 'Sito Essenziale',
        price: '1.490',
        description: 'Un sito completo per presentare la tua attivita in modo professionale.',
        features: [
          'Fino a 5 pagine',
          'SEO su ogni pagina',
          'Blog opzionale',
          'Form avanzato + WhatsApp + chiamata',
          'Analytics e Search Console',
          '2 revisioni incluse',
        ],
      },
    ],
    faqTemplates: [
      {
        question: 'Quanto costa un sito web a {{CITY_NAME}}?',
        answer: 'I prezzi partono da 890€ per una landing page professionale fino a 1.490€+ per siti multipagina. Ogni preventivo è personalizzato in base alle tue esigenze.',
      },
      {
        question: 'Quanto tempo serve per realizzare un sito web?',
        answer: 'Una landing page è pronta in 7-10 giorni. Un sito multipagina richiede 2-3 settimane. Tempi più rapidi disponibili su richiesta.',
      },
      {
        question: 'Il sito sarà ottimizzato per Google?',
        answer: 'Sì, ogni sito include ottimizzazione SEO di base: meta tag, velocità, mobile-first, sitemap e integrazione Search Console.',
      },
      {
        question: 'Posso gestire il sito da solo dopo la consegna?',
        answer: 'Assolutamente. Includo una breve formazione e documentazione. Per modifiche future offro assistenza a tariffa oraria o pacchetti mensili.',
      },
    ],
    relatedServices: ['ecommerce', 'landing-pages', 'posizionamento-seo'],
    active: true,
  },

  {
    slug: 'ecommerce',
    name: 'E-commerce',
    singularName: 'E-commerce',
    shortDescription: 'Negozi online che vendono. Semplici da gestire, pronti per crescere.',
    longDescription: 'Creo e-commerce su misura o su piattaforme consolidate (Shopify, WooCommerce). Ogni shop è ottimizzato per vendere ed è facile da gestire.',
    category: 'web-development',
    priority: 'primary',
    icon: 'ShoppingCart',
    hasCityPages: true,
    minPopulation: 8000,
    seo: {
      titleTemplates: [
        'E-commerce {{CITY_NAME}}: Vendi Online in 30 Giorni',
        'Realizzazione E-commerce {{CITY_NAME}} | Shop Chiavi in Mano',
        'Sviluppo E-commerce {{CITY_NAME}}: Pagamenti e Spedizioni Inclusi',
        'Apri il Tuo Negozio Online a {{CITY_NAME}} | Zero Commissioni',
      ],
      descriptionTemplates: [
        'Vuoi vendere online da {{CITY_NAME}}? Realizzo e-commerce completi e facili da usare. Inizia a vendere i tuoi prodotti in tutta Italia. Preventivo rapido.',
        'Smetti di pagare commissioni ai marketplace. Crea il tuo e-commerce proprietario a {{CITY_NAME}}. Gestione ordini semplice, pagamenti sicuri. Chiama ora.',
        'E-commerce per negozi di {{CITY_NAME}}. Dal negozio fisico alla vendita online in 4 settimane. Formazione inclusa per gestire tutto da solo.',
      ],
      h1Templates: [
        'Realizzazione E-commerce a {{CITY_NAME}}',
        'Vendi Online da {{CITY_NAME}} col Tuo E-commerce',
        'Il Tuo Negozio Aperto 24/7 a {{CITY_NAME}}',
      ],
      keywordPatterns: [
        'ecommerce {{CITY_NAME}}',
        'realizzazione ecommerce {{CITY_NAME}}',
        'preventivo ecommerce {{CITY_NAME}}',
        'aprire negozio online {{CITY_NAME}}',
        'vendere online {{CITY_NAME}}',
      ],
    },
    schema: {
      schemaType: 'Service',
      additionalProperties: {
        serviceType: 'E-commerce Development',
        priceRange: '€€€',
      },
    },
    pricing: [
      {
        id: 'ecommerce-starter',
        name: 'E-commerce Starter',
        price: '2.490',
        description: 'Negozio online pronto per vendere. Perfetto per iniziare.',
        features: [
          'Fino a 50 prodotti',
          'Pagamenti Stripe/PayPal',
          'Gestione ordini e inventario',
          'SEO prodotti base',
          'Mobile responsive',
          '1 revisione inclusa',
        ],
      },
      {
        id: 'ecommerce-pro',
        name: 'E-commerce Pro',
        price: '4.990',
        description: 'Shop completo con tutte le funzionalità per scalare.',
        features: [
          'Prodotti illimitati',
          'Multi-gateway pagamento',
          'Coupon e promozioni',
          'Integrazione corrieri',
          'Dashboard analytics',
          'SEO avanzato',
          '2 revisioni incluse',
        ],
        badge: 'Consigliato',
        popular: true,
      },
    ],
    faqTemplates: [
      {
        question: 'Quanto costa un e-commerce a {{CITY_NAME}}?',
        answer: 'Un e-commerce base parte da 2.490€. Per shop con molti prodotti e funzionalità avanzate il costo sale a 4.990€+. Preventivo personalizzato disponibile.',
      },
      {
        question: 'Posso gestire prodotti e ordini da solo?',
        answer: 'Sì, tutti i miei e-commerce hanno un pannello di gestione semplice. Aggiungi prodotti, gestisci ordini e monitora le vendite in autonomia.',
      },
      {
        question: 'Quali metodi di pagamento posso accettare?',
        answer: 'Stripe, PayPal, bonifico, contrassegno, Satispay e molti altri. Configuriamo insieme i gateway più adatti ai tuoi clienti.',
      },
      {
        question: 'Come gestisco le spedizioni?',
        answer: 'Integro i principali corrieri (GLS, BRT, DHL, Poste). Puoi stampare etichette, tracciare spedizioni e notificare i clienti automaticamente.',
      },
    ],
    relatedServices: ['siti-web', 'posizionamento-seo', 'landing-pages'],
    active: true,
  },

  {
    slug: 'landing-pages',
    name: 'Landing Pages',
    singularName: 'Landing Page',
    shortDescription: 'Pagine progettate per convertire. Perfette per campagne e offerte.',
    longDescription: 'Landing page ottimizzate per la conversione. Ideali per campagne Google Ads, social media o promozioni specifiche. Massimo impatto, minimo investimento.',
    category: 'web-development',
    priority: 'secondary',
    icon: 'Target',
    hasCityPages: true,
    minPopulation: 10000,
    seo: {
      titleTemplates: [
        'Realizzazione Landing Pages a {{CITY_NAME}} | Manuel De Ceglie',
        'Creazione Landing Page Professionali a {{CITY_NAME}}',
        'Landing Page che Convertono a {{CITY_NAME}}',
        'Landing Pages a {{CITY_NAME}}: Più Contatti e Vendite',
      ],
      descriptionTemplates: [
        'Realizzo landing page a {{CITY_NAME}} ottimizzate per convertire visitatori in clienti. Perfette per Ads e campagne social. Preventivo gratuito.',
        'Creazione landing page a {{CITY_NAME}}. Pagine veloci, persuasive e ottimizzate per Google Ads e Facebook Ads.',
        'Landing page professionali a {{CITY_NAME}}. Design conversion-oriented per massimizzare il ROI delle tue campagne.',
      ],
      h1Templates: [
        'Realizzazione Landing Pages a {{CITY_NAME}}',
        'Landing Page Professionali a {{CITY_NAME}}',
        'Creazione Landing Page a {{CITY_NAME}}',
      ],
      keywordPatterns: [
        'landing page {{CITY_NAME}}',
        'realizzazione landing page {{CITY_NAME}}',
        'creazione landing page {{CITY_NAME}}',
        'landing pages {{CITY_NAME}}',
      ],
    },
    schema: {
      schemaType: 'Service',
      additionalProperties: {
        serviceType: 'Landing Page Development',
        priceRange: '€€',
      },
    },
    pricing: [
      {
        id: 'landing-basic',
        name: 'Landing Essenziale',
        price: '590',
        description: 'Pagina singola ottimizzata per una singola offerta.',
        features: [
          '1 pagina persuasiva',
          'Form contatto ottimizzato',
          'Mobile responsive',
          'Velocità ottimizzata',
          'Tracking conversioni',
        ],
      },
      {
        id: 'landing-advanced',
        name: 'Landing Avanzata',
        price: '990',
        description: 'Landing con A/B testing e funzionalità avanzate.',
        features: [
          'Design conversion-oriented',
          'A/B testing setup',
          'Exit intent popup',
          'Video background',
          'Countdown timer',
          'Integrazioni CRM/Email',
          '2 revisioni incluse',
        ],
        badge: 'Alta Conversione',
        popular: true,
      },
    ],
    faqTemplates: [
      {
        question: 'Che differenza c\'è tra landing page e sito web?',
        answer: 'Una landing page è una singola pagina focalizzata su un obiettivo specifico (vendita, lead, iscrizione). Un sito web ha più pagine per presentare tutta la tua attività.',
      },
      {
        question: 'Le landing page funzionano per le piccole attività?',
        answer: 'Assolutamente sì. Sono ideali per promozioni, eventi, lancio prodotti o campagne pubblicitarie. Investimento contenuto, risultati misurabili.',
      },
      {
        question: 'Quanto tempo serve per creare una landing page?',
        answer: 'Una landing page base è pronta in 3-5 giorni. Con A/B testing e funzionalità avanzate servono 7-10 giorni.',
      },
    ],
    relatedServices: ['siti-web', 'posizionamento-seo', 'ecommerce'],
    active: true,
  },

  // ---------------------------------------------------------------------------
  // SOFTWARE & APP
  // ---------------------------------------------------------------------------
  {
    slug: 'sviluppo-software',
    name: 'Sviluppo Software',
    singularName: 'Software su Misura',
    shortDescription: 'Software gestionali e web app che automatizzano il tuo lavoro.',
    longDescription: 'Sviluppo software personalizzati per aziende e professionisti: gestionali, web app, CRM, tool di automazione. Elimina Excel e i processi manuali con soluzioni proprietarie che crescono con te. Nessun canone mensile, il software è tuo per sempre.',
    category: 'software',
    priority: 'primary',
    icon: 'Cog',
    hasCityPages: true,
    minPopulation: 15000,
    seo: {
      titleTemplates: [
        'Software Gestionale {{CITY_NAME}}: Basta Fogli Excel | 3.990€',
        'Sviluppo Software {{CITY_NAME}} | Automazione Processi Aziendali',
        'Gestionale su Misura {{CITY_NAME}}: Risparmia 10h/Settimana',
        'Programmatore {{CITY_NAME}} | Software per PMI e Artigiani',
        'Sviluppo Software {{CITY_NAME}}: Da 3.990€ - Garanzia Risultati',
        'Software su Misura {{CITY_NAME}} | Elimina Excel in 30 Giorni',
        'Programmatore Software {{CITY_NAME}}: CRM e Gestionali Custom',
        'Digitalizzazione Aziendale {{CITY_NAME}} | Software Proprietari',
        'Automazione Processi {{CITY_NAME}}: Software su Misura',
        'Sviluppo Web App {{CITY_NAME}} | Software che Fa Risparmiare Tempo',
      ],
      descriptionTemplates: [
        'Perdi troppo tempo su Excel? Sviluppo software gestionali a {{CITY_NAME}} che automatizzano il tuo lavoro. Da 3.990€, nessun canone mensile. Come ho fatto per Pichello.',
        'Software su misura a {{CITY_NAME}} per eliminare carta ed errori. Gestisci clienti, ordini e fatture in un click. Soluzioni proprietarie, zero canoni eterni. Pronto in 30 giorni.',
        'Cerchi un programmatore a {{CITY_NAME}}? Realizzo il software che le agenzie ti farebbero pagare il triplo. Automazione vera per la tua azienda. Preventivo gratuito in 24h.',
        'Digitalizza la tua azienda a {{CITY_NAME}} con software su misura. CRM, gestionali, web app. Da 3.990€ una tantum. 58+ progetti completati. Garanzia soddisfatti o rimborsati.',
        'Stop a Excel e processi manuali a {{CITY_NAME}}. Sviluppo software personalizzati che ti fanno risparmiare 10+ ore a settimana. Assistenza diretta con Manuel.',
        'Software proprietario per {{CITY_NAME}}: niente abbonamenti, niente limiti. Gestionali, app interne, automazioni. Consegna in 30 giorni, formazione inclusa.',
        'Hai un processo che ti fa perdere tempo? A {{CITY_NAME}} sviluppo il software che lo automatizza. Come per Pichello: +200% efficienza. Richiedi analisi gratuita.',
        'Programmatore a {{CITY_NAME}} per software su misura. Database, API, integrazioni. Soluzioni scalabili che crescono con il tuo business. Preventivo in 2 minuti.',
      ],
      h1Templates: [
        'Sviluppo Software Gestionali a {{CITY_NAME}}',
        'Automatizza la Tua Azienda a {{CITY_NAME}}',
        'Software su Misura per PMI di {{CITY_NAME}}',
        'Programmatore Software a {{CITY_NAME}}: Soluzioni Custom',
        'Digitalizzazione Aziendale a {{CITY_NAME}}',
        'Software Gestionali {{CITY_NAME}}: Basta Excel',
        'Sviluppo Web App a {{CITY_NAME}} per Aziende',
        'CRM e Gestionali su Misura a {{CITY_NAME}}',
      ],
      keywordPatterns: [
        'sviluppo software {{CITY_NAME}}',
        'software gestionali {{CITY_NAME}}',
        'gestionale su misura {{CITY_NAME}}',
        'programmatore {{CITY_NAME}}',
        'automazione aziendale {{CITY_NAME}}',
        'software personalizzato {{CITY_NAME}}',
        'sviluppo web app {{CITY_NAME}}',
        'crm {{CITY_NAME}}',
        'digitalizzazione aziendale {{CITY_NAME}}',
        'programma gestionale {{CITY_NAME}}',
        'software erp {{CITY_NAME}}',
        'applicazione su misura {{CITY_NAME}}',
      ],
    },
    schema: {
      schemaType: 'Service',
      additionalProperties: {
        serviceType: 'Software Development',
        priceRange: '€€€',
      },
    },
    pricing: [
      {
        id: 'software-starter',
        name: 'Gestionale Starter',
        price: '3.990',
        description: 'Gestionale base per piccole attivita. Ordini, clienti, fatture.',
        features: [
          'Gestione clienti/fornitori',
          'Ordini e preventivi',
          'Fatturazione base',
          'Dashboard riepilogativa',
          'Export dati',
          '3 mesi assistenza inclusi',
        ],
      },
      {
        id: 'software-pro',
        name: 'Gestionale Pro',
        price: '7.990',
        description: 'Soluzione completa con moduli personalizzati.',
        features: [
          'Tutti i moduli base',
          'Magazzino e inventario',
          'Workflow personalizzati',
          'Reportistica avanzata',
          'Integrazioni API',
          '6 mesi assistenza inclusi',
        ],
        badge: 'Più Richiesto',
        popular: true,
      },
    ],
    faqTemplates: [
      {
        question: 'Quanto costa un software gestionale a {{CITY_NAME}}?',
        answer: 'Un gestionale base parte da 3.990€. Soluzioni più complesse con moduli personalizzati partono da 7.990€. Nessun canone mensile, il software è tuo.',
      },
      {
        question: 'Posso migrare i dati dal mio sistema attuale?',
        answer: 'Sì, mi occupo della migrazione completa. Che tu abbia Excel, Access o un gestionale obsoleto, trasferisco tutti i dati nel nuovo sistema.',
      },
      {
        question: 'Il software funziona anche offline?',
        answer: 'Dipende dalle esigenze. Posso sviluppare soluzioni web (accessibili ovunque) o desktop (anche offline). Valutiamo insieme la scelta migliore.',
      },
    ],
    relatedServices: ['sviluppo-app-mobile', 'siti-web', 'ecommerce'],
    active: true,
  },

  {
    slug: 'sviluppo-app-mobile',
    name: 'App Mobile',
    singularName: 'App Mobile',
    shortDescription: 'App iOS e Android su misura per la tua attivita. Da 5.990€.',
    longDescription: 'Sviluppo app mobile native e cross-platform con Flutter e React Native. Dalla progettazione UX/UI al lancio su App Store e Google Play. App performanti, scalabili e pronte per il mercato. Nessun canone, il codice è tuo.',
    category: 'software',
    priority: 'primary',
    icon: 'Smartphone',
    hasCityPages: true,
    minPopulation: 20000,
    seo: {
      titleTemplates: [
        'Sviluppo App Mobile {{CITY_NAME}} | Da 5.990€ iOS e Android',
        'Creazione App iOS e Android {{CITY_NAME}} | Flutter & React Native',
        'Programmatore App {{CITY_NAME}}: Dall\'Idea allo Store',
        'Sviluppo App su Misura {{CITY_NAME}} | Pubblicazione Store Inclusa',
        'App Mobile {{CITY_NAME}}: Da 5.990€ - Garanzia Soddisfazione',
        'Creazione App {{CITY_NAME}} | Cross-Platform iOS + Android',
        'Sviluppatore App {{CITY_NAME}}: MVP in 60 Giorni',
        'App iOS e Android {{CITY_NAME}} | Design e Sviluppo Completo',
        'Realizzazione App Mobile {{CITY_NAME}}: Pronta per il Mercato',
        'Programmatore Mobile {{CITY_NAME}} | Flutter, React Native, Native',
      ],
      descriptionTemplates: [
        'Sviluppo app mobile a {{CITY_NAME}} per iOS e Android con Flutter. Da 5.990€, una tantum. Dalla progettazione alla pubblicazione su App Store e Google Play.',
        'Creazione app a {{CITY_NAME}}: trasforma la tua idea in un\'app reale. Flutter, React Native e sviluppo nativo. Pubblicazione store inclusa. Preventivo in 24h.',
        'App mobile professionali a {{CITY_NAME}}. 58+ progetti completati. Design UX/UI, sviluppo cross-platform, backend. Pronta per lo store in 60 giorni.',
        'Hai un\'idea per un\'app? A {{CITY_NAME}} la sviluppo da zero: design, codice, backend, pubblicazione. Da 5.990€ MVP, 12.990€ app completa. Nessun canone.',
        'Programmatore app mobile a {{CITY_NAME}}. Specialista Flutter per iOS e Android. App veloci, belle, scalabili. Come ho fatto per Pichello. Richiedi preventivo.',
        'Sviluppo app {{CITY_NAME}}: iOS, Android o entrambe con una codebase. Risparmia tempo e budget. Design moderno, performance native. Assistenza post-lancio.',
        'Creazione app aziendali a {{CITY_NAME}}. App per clienti, dipendenti, field service. Integrazione con sistemi esistenti. Formazione e manuale inclusi.',
        'App su misura a {{CITY_NAME}}: niente template, niente limiti. La tua idea, il tuo brand, le tue funzionalità. Codice proprietario, zero dipendenza da terzi.',
      ],
      h1Templates: [
        'Sviluppo App Mobile a {{CITY_NAME}}: iOS e Android',
        'Creazione App iOS e Android a {{CITY_NAME}}',
        'App su Misura a {{CITY_NAME}}: Dall\'Idea allo Store',
        'Programmatore App Mobile a {{CITY_NAME}}',
        'Sviluppo App {{CITY_NAME}} con Flutter e React Native',
        'Realizzazione App Professionali a {{CITY_NAME}}',
        'App iOS e Android a {{CITY_NAME}}: Design e Sviluppo',
        'Creazione App Mobile a {{CITY_NAME}}: Pronta per il Mercato',
      ],
      keywordPatterns: [
        'sviluppo app {{CITY_NAME}}',
        'sviluppo app mobile {{CITY_NAME}}',
        'creazione app {{CITY_NAME}}',
        'app ios {{CITY_NAME}}',
        'app android {{CITY_NAME}}',
        'programmatore app {{CITY_NAME}}',
        'sviluppatore app {{CITY_NAME}}',
        'app flutter {{CITY_NAME}}',
        'app react native {{CITY_NAME}}',
        'realizzazione app {{CITY_NAME}}',
        'applicazione mobile {{CITY_NAME}}',
        'app su misura {{CITY_NAME}}',
      ],
    },
    schema: {
      schemaType: 'Service',
      additionalProperties: {
        serviceType: 'Mobile App Development',
        priceRange: '€€€€',
      },
    },
    pricing: [
      {
        id: 'app-mvp',
        name: 'App MVP',
        price: '5.990',
        description: 'Versione minima per validare la tua idea sul mercato.',
        features: [
          'iOS o Android',
          'Funzionalità core',
          'Design essenziale',
          'Backend base',
          'Pubblicazione store',
        ],
      },
      {
        id: 'app-completa',
        name: 'App Completa',
        price: '12.990',
        description: 'App professionale con tutte le funzionalità.',
        features: [
          'iOS + Android',
          'Design UI/UX completo',
          'Backend scalabile',
          'Notifiche push',
          'Analytics integrato',
          'Pubblicazione entrambi gli store',
          '3 mesi supporto inclusi',
        ],
        badge: 'Full Stack',
        popular: true,
      },
    ],
    faqTemplates: [
      {
        question: 'Quanto costa sviluppare un\'app a {{CITY_NAME}}?',
        answer: 'Un MVP parte da 5.990€. Un\'app completa per iOS e Android parte da 12.990€. Il costo varia in base alla complessità delle funzionalità.',
      },
      {
        question: 'Meglio app nativa o cross-platform?',
        answer: 'Per la maggior parte dei progetti consiglio Flutter (cross-platform): un codice, due app. Risparmi tempo e budget. App native solo per casi specifici.',
      },
      {
        question: 'Ti occupi anche della pubblicazione sugli store?',
        answer: 'Sì, gestisco tutto il processo: creazione account developer, screenshot, descrizioni, invio per review e pubblicazione.',
      },
    ],
    relatedServices: ['sviluppo-software', 'siti-web', 'ecommerce'],
    active: true,
  },

  // ---------------------------------------------------------------------------
  // MARKETING
  // ---------------------------------------------------------------------------
  {
    slug: 'posizionamento-seo',
    name: 'SEO e Posizionamento',
    singularName: 'Posizionamento SEO',
    shortDescription: 'Fatti trovare su Google. Più visibilità, più clienti.',
    longDescription: 'Servizi SEO completi: audit tecnico, ottimizzazione on-page, link building e local SEO. Strategia personalizzata per farti trovare dai clienti che cercano i tuoi servizi.',
    category: 'marketing',
    priority: 'primary',
    icon: 'Search',
    hasCityPages: true,
    minPopulation: 15000,
    seo: {
      titleTemplates: [
        'Posizionamento SEO a {{CITY_NAME}} | Manuel De Ceglie',
        'Consulente SEO a {{CITY_NAME}} | Primi su Google',
        'Ottimizzazione SEO a {{CITY_NAME}} | Più Visibilità',
        'SEO Specialist a {{CITY_NAME}} | Strategia Personalizzata',
      ],
      descriptionTemplates: [
        'Posizionamento SEO a {{CITY_NAME}}. Strategia personalizzata per farti trovare su Google dai clienti che cercano i tuoi servizi. Analisi gratuita.',
        'Consulente SEO a {{CITY_NAME}}. Audit tecnico, ottimizzazione on-page e local SEO. Aumenta visibilita e contatti organici.',
        'Ottimizzazione SEO a {{CITY_NAME}} per aziende e professionisti. Risultati misurabili e reportistica mensile.',
      ],
      h1Templates: [
        'Posizionamento SEO a {{CITY_NAME}}',
        'Consulente SEO a {{CITY_NAME}}',
        'Ottimizzazione SEO a {{CITY_NAME}}',
      ],
      keywordPatterns: [
        'seo {{CITY_NAME}}',
        'posizionamento seo {{CITY_NAME}}',
        'consulente seo {{CITY_NAME}}',
        'ottimizzazione seo {{CITY_NAME}}',
        'posizionamento google {{CITY_NAME}}',
        'posizionamento motori ricerca {{CITY_NAME}}',
      ],
    },
    schema: {
      schemaType: 'Service',
      additionalProperties: {
        serviceType: 'SEO Services',
        priceRange: '€€',
      },
    },
    pricing: [
      {
        id: 'seo-audit',
        name: 'Audit SEO',
        price: '490',
        description: 'Analisi completa del tuo sito con raccomandazioni prioritizzate.',
        features: [
          'Audit tecnico completo',
          'Analisi competitor',
          'Keyword research',
          'Report dettagliato',
          'Piano di azione prioritizzato',
        ],
      },
      {
        id: 'seo-mensile',
        name: 'SEO Mensile',
        price: '590/mese',
        description: 'Gestione SEO continuativa con risultati misurabili.',
        features: [
          'Ottimizzazione on-page continua',
          'Creazione contenuti SEO',
          'Link building etico',
          'Local SEO (Google Business)',
          'Report mensile',
          'Call strategica mensile',
        ],
        badge: 'Risultati Duraturi',
        popular: true,
      },
    ],
    faqTemplates: [
      {
        question: 'Quanto tempo serve per vedere risultati SEO a {{CITY_NAME}}?',
        answer: 'I primi miglioramenti sono visibili in 2-3 mesi. Risultati significativi in 4-6 mesi. La SEO e un investimento a lungo termine.',
      },
      {
        question: 'Garantisci la prima posizione su Google?',
        answer: 'Nessuno puo garantirlo (diffida da chi lo fa). Garantisco invece un metodo trasparente, etico e risultati misurabili nel tempo.',
      },
      {
        question: 'Fai anche SEO locale per {{CITY_NAME}}?',
        answer: 'Sì, la local SEO è fondamentale per attività locali. Ottimizzo il profilo Google Business, citazioni locali e contenuti geo-targettizzati.',
      },
    ],
    relatedServices: ['siti-web', 'ecommerce', 'landing-pages'],
    active: true,
  },
];

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/** Get all active services */
export function getAllServices(): ServiceConfig[] {
  return SERVICES_CONFIG.filter(s => s.active);
}

/** Get service by slug */
export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return SERVICES_CONFIG.find(s => s.slug === slug && s.active);
}

/** Get services with city pages */
export function getServicesWithCityPages(): ServiceConfig[] {
  return SERVICES_CONFIG.filter(s => s.active && s.hasCityPages);
}

/** Get services by category */
export function getServicesByCategory(category: ServiceCategory): ServiceConfig[] {
  return SERVICES_CONFIG.filter(s => s.active && s.category === category);
}

/** Get related services */
export function getRelatedServices(service: ServiceConfig): ServiceConfig[] {
  return service.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter((s): s is ServiceConfig => s !== undefined);
}

/** Get service slugs for city pages */
export function getServiceSlugsWithCityPages(): string[] {
  return getServicesWithCityPages().map(s => s.slug);
}

/** Check if a city qualifies for a service based on population */
export function cityQualifiesForService(cityPopulation: number, service: ServiceConfig): boolean {
  return cityPopulation >= service.minPopulation;
}

/** Generate SEO title for a service + city combination */
export function generateServiceTitle(service: ServiceConfig, cityName: string): string {
  const templates = service.seo.titleTemplates;
  const index = cityName.charCodeAt(0) % templates.length;
  return templates[index].replace(/\{\{CITY_NAME\}\}/g, cityName);
}

/** Generate SEO description for a service + city combination */
export function generateServiceDescription(service: ServiceConfig, cityName: string): string {
  const templates = service.seo.descriptionTemplates;
  const index = cityName.charCodeAt(0) % templates.length;
  return templates[index].replace(/\{\{CITY_NAME\}\}/g, cityName);
}

/** Generate H1 for a service + city combination */
export function generateServiceH1(service: ServiceConfig, cityName: string): string {
  const templates = service.seo.h1Templates;
  const index = cityName.charCodeAt(0) % templates.length;
  return templates[index].replace(/\{\{CITY_NAME\}\}/g, cityName);
}

/** Generate keywords for a service + city combination */
export function generateServiceKeywords(service: ServiceConfig, cityName: string): string[] {
  return service.seo.keywordPatterns.map(pattern => 
    pattern.replace(/\{\{CITY_NAME\}\}/g, cityName.toLowerCase())
  );
}

/** Generate FAQ for a service + city combination */
export function generateServiceFaq(
  service: ServiceConfig,
  cityName: string,
  archetype?: MarketArchetype
): Array<{ question: string; answer: string }> {
  return service.faqTemplates
    .filter(faq => !faq.archetypes || !archetype || faq.archetypes.includes(archetype))
    .map(faq => ({
      question: faq.question.replace(/\{\{CITY_NAME\}\}/g, cityName),
      answer: faq.answer.replace(/\{\{CITY_NAME\}\}/g, cityName),
    }));
}
