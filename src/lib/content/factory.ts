import { Location } from '@/data/locations';
import { MarketArchetype, assignArchetype, getArchetype } from '@/data/archetypes';
import { NicheConfig, getNicheConfig } from '@/data/niches-config';
import { NicheContent, getNicheContent } from '@/data/niches-content';
import { createReplacements, TokenReplacements, replaceTokens } from '@/lib/link-graph/tokens';
import { pickVariant, getPopulationTier, getZoneContext, spintaxParse } from '@/lib/content/spintax';
import { generateHero, generateDiagnostica, generateGoodInvestment, generateSEO } from '@/lib/content/templates';
import { generateNicheHero, generateNicheDiagnostica, generateNicheGoodInvestment, generateNicheSEO } from '@/lib/content/niche-templates';
import { generateSoftwareHero, generateSoftwareDiagnostica, generateSoftwareGoodInvestment, generateSoftwareSEO, generateSoftwareFAQ } from '@/lib/content/software-templates';
import { LocalPageData, NichePageData } from '@/data/local-pages/types';

const NICHE_OFFERS: Record<string, Array<{
  id: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
  active: boolean;
  type: 'landing' | 'website';
  features: string[];
}>> = {
  ristoranti: [
    {
      id: 'menu-digitale-pro',
      title: 'Menu Digitale & Vetrina',
      description: 'Un sito pensato per ristoranti: menu interattivo, prenotazioni online e galleria piatti che fa venire fame.',
      price: '1.290',
      badge: 'Ristoranti',
      active: true,
      type: 'landing',
      features: [
        'Menu digitale interattivo con filtri',
        'Sistema prenotazioni integrato',
        'Galleria foto piatti professionale',
        'Integrazione Google Maps e TripAdvisor',
        'SEO locale per "ristorante [città]"',
        'Mobile-first e ultra-veloce',
        'Analytics per monitorare ordinazioni',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'ristorante-web-5p',
      title: 'Sito Completo per Ristorante',
      description: 'Un sito completo per presentare il tuo ristorante: storia, menu, eventi e prenotazioni.',
      price: '1.990',
      badge: 'Ristoranti',
      active: true,
      type: 'website',
      features: [
        'Fino a 5 pagine: Home, Menu, Galleria, Eventi, Contatti',
        'Menu digitale interattivo con QR code',
        'Sistema prenotazioni WhatsApp integrato',
        'Sezione eventi e serate speciali',
        'Blog per ricette e news culinarie',
        'SEO avanzato per ricerche food locali',
        'Integrazione Instagram feed',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  avvocati: [
    {
      id: 'studio-legale-vetrina',
      title: 'Vetrina Professionale per Studi Legali',
      description: 'Un sito che comunica competenza e costruisce fiducia. Lead generation integrata per clienti qualificati.',
      price: '1.990',
      badge: 'Studi Legali',
      active: true,
      type: 'landing',
      features: [
        'Presentazione studio e team',
        'Aree di competenza chiare',
        'Blog per articoli giuridici',
        'Form richiesta informazioni qualificato',
        'SEO per "avvocato [città]"',
        'Design sobrio e professionale',
        'Area riservata clienti opzionale',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'studio-legale-web',
      title: 'Sito Completo per Studio Legale',
      description: 'Un sito completo per studi legali strutturati con multiple aree di competenza.',
      price: '2.990',
      badge: 'Studi Legali',
      active: true,
      type: 'website',
      features: [
        'Fino a 8 pagine personalizzate',
        'Sezione news e approfondimenti',
        'Sistema richiesta appuntamenti',
        'Newsletter integration',
        'Case study anonimizzati',
        'SEO avanzato per settore legale',
        'Multilingua opzionale',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  architetti: [
    {
      id: 'portfolio-architetto',
      title: 'Portfolio Immersivo per Architetti',
      description: 'Un sito che mostra il tuo lavoro in modo emozionale. Tour virtuali 360° e gallery interattive.',
      price: '1.990',
      badge: 'Architetti',
      active: true,
      type: 'landing',
      features: [
        'Portfolio interattivo con filtering',
        'Tour virtuali 360° integrati',
        'Before/After slider per ristrutturazioni',
        'Case study dettagliati',
        'SEO per "architetto [città]"',
        'Design minimal ed elegante',
        'Video walkthrough opzionale',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'architetto-web',
      title: 'Sito Completo per Studio di Architettura',
      description: 'Un sito completo per studi di architettura con progettazione e interior design.',
      price: '2.990',
      badge: 'Architetti',
      active: true,
      type: 'website',
      features: [
        'Fino a 6 pagine: Home, Portfolio, Progetti, Studio, Contatti, Blog',
        'Portfolio avanzato con categorie',
        'Tour virtuali 360° per progetti',
        'Sezione team e filosofia progettuale',
        'SEO avanzato per architettura',
        'Integrazione Instagram Architecture',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  dentisti: [
    {
      id: 'studio-dentale-vetrina',
      title: 'Vetrina per Studio Odontoiatrico',
      description: 'Un sito che trasmette rassicurazione e professionalità. Guide ai trattamenti e prenotazioni online.',
      price: '1.490',
      badge: 'Dentisti',
      active: true,
      type: 'landing',
      features: [
        'Guide trattamenti per pazienti',
        'Sistema prenotazioni online',
        'Sezione team e specializzazioni',
        'Gallery casi clinici (prima/dopo)',
        'SEO per "dentista [città]"',
        'Design rassicurante e moderno',
        'Promemoria SMS automatici',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'dentista-web',
      title: 'Sito Completo per Clinica Dentale',
      description: 'Un sito completo per cliniche dentali con multiple specializzazioni.',
      price: '2.490',
      badge: 'Dentisti',
      active: true,
      type: 'website',
      features: [
        'Fino a 8 pagine personalizzate',
        'Guide dettagliate per ogni trattamento',
        'Sistema prenotazioni avanzato',
        'Sezione team con specializzazioni',
        'Case study clinici (prima/dopo)',
        'SEO avanzato per odontoiatria',
        'Multilingua opzionale',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  idraulici: [
    {
      id: 'idraulico-vetrina',
      title: 'Vetrina per Idraulico',
      description: 'Un sito che ti fa trovare nelle emergenze. Local SEO e sistema preventivi rapidi.',
      price: '890',
      badge: 'Idraulici',
      active: true,
      type: 'landing',
      features: [
        'Servizi chiari e listino prezzi',
        'Sistema richiesta preventivo rapido',
        'SEO per "idraulico [città]"',
        'Mappa zona di intervento',
        'Design robusto e affidabile',
        'Numero emergenza sempre visibile',
        'Gallery lavori realizzati',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'idraulico-web',
      title: 'Sito Completo per Termoidraulico',
      description: 'Un sito completo per idraulici e termoidraulici con tutti i servizi.',
      price: '1.490',
      badge: 'Idraulici',
      active: true,
      type: 'website',
      features: [
        'Fino a 5 pagine: Home, Servizi, Lavori, Zone, Contatti',
        'Sistema preventivi strutturato',
        'Calendario disponibilità',
        'Sezione certificazioni e marchi',
        'SEO avanzato per idraulica',
        'Blog con guide manutenzione',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  estetiste: [
    {
      id: 'estetista-vetrina',
      title: 'Vetrina per Centro Estetico',
      description: 'Un sito che fa venire voglia di prenotare. Gallery lavori e booking online.',
      price: '990',
      badge: 'Estetiste',
      active: true,
      type: 'landing',
      features: [
        'Listino servizi e prezzi chiaro',
        'Sistema booking online',
        'Gallery trattamenti con foto',
        'Programma fedeltà integrato',
        'SEO per "estetista [città]"',
        'Design elegante e rilassante',
        'Promemoria appuntamenti',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'estetista-web',
      title: 'Sito Completo per Salone di Bellezza',
      description: 'Un sito completo per centri estetici e saloni con tutti i servizi.',
      price: '1.690',
      badge: 'Estetiste',
      active: true,
      type: 'website',
      features: [
        'Fino a 6 pagine: Home, Servizi, Team, Prodotti, Galleria, Contatti',
        'Booking online avanzato',
        'Programma fedeltà e punti',
        'E-commerce prodotti opzionale',
        'SEO avanzato per bellezza',
        'Instagram feed integrato',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  'saloni-bellezza': [
    {
      id: 'salone-veloce',
      title: 'Landing Booking Salone',
      description: 'Booking online 24/7, listino chiaro e portfolio lavori per riempire l’agenda senza telefonate.',
      price: '1.190',
      badge: 'Saloni',
      active: true,
      type: 'landing',
      features: [
        'Booking online con slot e acconto',
        'Listino chiaro con durata servizi',
        'Portfolio prima/dopo per colore, taglio, nails',
        'Promemoria WhatsApp/SMS',
        'SEO per "parrucchiere [città]"',
        'Integrazione Instagram',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'salone-completo',
      title: 'Sito Completo Salone/Beauty',
      description: 'Sito multipagina con listino, team, portfolio e programma fedeltà digitale.',
      price: '1.990',
      badge: 'Saloni',
      active: true,
      type: 'website',
      features: [
        'Fino a 6 pagine: Home, Servizi, Portfolio, Listino, Abbonamenti, Contatti',
        'Booking online integrato',
        'Sezione team e competenze',
        'E-commerce prodotti beauty',
        'Programma fedeltà digitale',
        'SEO per beauty e wellness',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  immobiliare: [
    {
      id: 'agenzia-vetrina',
      title: 'Vetrina per Agenzia Immobiliare',
      description: 'Un sito che mostra gli immobili in modo professionale. Ricerca avanzata e tour virtuali.',
      price: '1.990',
      badge: 'Immobiliare',
      active: true,
      type: 'landing',
      features: [
        'Motore di ricerca avanzato',
        'Tour virtuali 360° per immobili',
        'Gallery con filtri per tipologia',
        'Valutazione gratuita online',
        'SEO per "agenzia immobiliare [città]"',
        'Design professionale e moderno',
        'Lead generation qualificata',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'agenzia-web',
      title: 'Sito Completo per Agenzia Immobiliare',
      description: 'Un sito completo per agenzie con portfolio esteso e funzioni avanzate.',
      price: '2.990',
      badge: 'Immobiliare',
      active: true,
      type: 'website',
      features: [
        'Fino a 8 pagine personalizzate',
        'Motore ricerca avanzato con mappe',
        'Tour virtuali per ogni immobile',
        'Sistema valutazione automatica',
        'CRM integrato per agenti',
        'SEO avanzato per immobiliare',
        'Multilingua opzionale',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  fotografi: [
    {
      id: 'portfolio-foto',
      title: 'Portfolio Fotografico Pro',
      description: 'Una landing che mette in primo piano i tuoi lavori con portfolio, listino e richiesta preventivo veloce.',
      price: '1.290',
      badge: 'Fotografi',
      active: true,
      type: 'landing',
      features: [
        'Portfolio per tipologia: wedding, corporate, ritratto',
        'Slider before/after editing',
        'Listino chiaro per servizi base',
        'Form preventivo con moodboard',
        'SEO per "fotografo [città]"',
        'Integrazione Instagram/Vimeo',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'fotografo-web',
      title: 'Sito Completo per Fotografo/Videomaker',
      description: 'Sito multipagina con showreel, pacchetti e galleria clienti.',
      price: '2.190',
      badge: 'Fotografi',
      active: true,
      type: 'website',
      features: [
        'Fino a 6 pagine: Home, Portfolio, Servizi, Prezzi, Clienti, Contatti',
        'Video showreel integrato',
        'Area clienti privata per download',
        'Pacchetti e optional ben spiegati',
        'SEO avanzato per servizi foto/video',
        '2 round di revisioni inclusi',
      ],
    },
  ],
  'aziende-agricole': [
    {
      id: 'filiera-corta-landing',
      title: 'Landing Vendita Diretta',
      description: 'Storytelling, prodotti di punta e prenotazione visite in azienda per vendere senza intermediari.',
      price: '1.290',
      badge: 'Agri',
      active: true,
      type: 'landing',
      features: [
        'Schede prodotti con origine e ingredienti',
        'Call to action per box degustazione',
        'Prenotazione visite/degustazioni online',
        'SEO per prodotti tipici locali',
        'Certificazioni BIO, DOC, IGP in evidenza',
        'Ritiro in azienda e spedizione spiegati',
        '1 round di revisioni inclusi',
      ],
    },
    {
      id: 'agricola-web',
      title: 'Sito Completo Azienda Agricola',
      description: 'E-commerce diretto, calendario visite e area B2B per ristoranti e botteghe.',
      price: '2.190',
      badge: 'Agri',
      active: true,
      type: 'website',
      features: [
        'Fino a 6 pagine: Home, Prodotti, Visite, E-commerce, Storia, Contatti',
        'Pagamenti online e ritiro in azienda',
        'Sezione B2B con listino dedicato',
        'Newsletter stagionale automatizzata',
        'Storytelling foto/video delle lavorazioni',
        'SEO per filiera corta e prodotti bio',
        '2 round di revisioni inclusi',
      ],
    },
  ],
};

const OFFERS_BASE = {
  landing: {
    id: 'onepage-pro',
    title: 'One Page Pro',
    description: 'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
    price: '890',
    badge: 'Pro',
    active: true,
    type: 'landing' as const,
    features: [
      '1 pagina completa con struttura efficace',
      'Call to Action visibili: WhatsApp, chiamata, form',
      'SEO locale per intercettare ricerche locali',
      'Mappa, indicazioni, orari, link recensioni',
      'Ottimizzazione mobile e velocità',
      'Analytics e Search Console',
      'Cookie/GDPR a norma',
      '1 round di revisioni inclusi',
    ],
  },
  website: {
    id: ' sito-essenziale-5p',
    title: 'Sito Essenziale (fino a 5 pagine)',
    description: 'Un sito completo per presentare la tua attività in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
    price: '1490',
    badge: 'Essenziale',
    active: true,
    type: 'website' as const,
    features: [
      'Fino a 5 pagine personalizzate',
      'Navigazione semplice e intuitiva',
      'SEO base su ogni pagina',
      'Form contatti avanzato + WhatsApp + click-to-call',
      'Analytics e Search Console',
      'Cookie/GDPR completo',
      '2 round di revisioni inclusi',
    ],
  },
};

const MOUNTAIN_OFFERS = {
  landing: {
    ...OFFERS_BASE.landing,
    id: 'landing-montagna-sprint',
    title: 'Landing Montagna Sprint',
    description: 'In 7 giorni hai una pagina che porta contatti (telefono/WhatsApp/richieste) e che funziona e comunica bene da mobile.',
    price: '599',
    badge: 'Promo Montagna',
    features: [
      '1 pagina completa',
      'Call to Action base',
      'SEO locale base',
      'Mappa + indicazioni + orari + link recensioni',
      'Veloce e perfetto anche su schermi piccoli',
      'Moduli contatto + anti-spam',
      'Analytics + Search Console per misurare contatti e visite',
      'Cookie/GDPR base (banner + pagina privacy)',
    ],
  },
  website: {
    ...OFFERS_BASE.website,
    id: 'sito-completo-montagna',
    title: 'Sito Completo',
    description: 'Un sito professionale che ti posiziona e ti fa scegliere da nuovi clienti.',
    price: '899',
    badge: 'Promo Montagna',
    features: [
      'Sito completo fino a 5 pagine',
      'Struttura SEO ottimizzata',
      'Ottimizzazione del profilo Google Business',
      'Velocità & UX: sito rapido e chiaro',
      'Sezione recensioni / prove social',
      'Form avanzato + WhatsApp + click-to-call',
      'Analytics + Search Console',
      'Cookie/GDPR',
    ],
  },
};

function generateFAQ(archetype: MarketArchetype, citySlug: string, location: Location): Array<{ q: string; a: string }> {
  const sector = getSectorFromArchetype(archetype);

  const replacements = {
    cityName: location.name,
    province: location.province,
    region: location.region,
    population: location.population,
    sector: sector,
  };

  const faqTemplates: Record<MarketArchetype, Array<{ q: string; a: string }>> = {
    MountainSmall: [
      {
        q: 'A {{CITY_NAME}} con la connessione che a volte manca, un sito serve?',
        a: 'Proprio per questo serve. Se la connessione è instabile, il tuo sito deve essere leggero e caricarsi velocemente. Io lo progetto così: funziona anche quando il segnale è debole.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e qualche foto. Io preparo tutto pronto per andare online. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo è toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics integrato. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
    HillMedium: [
      {
        q: 'Per un agriturismo o un artigiano serve un sito?',
        a: 'Sì. Chi cerca servizi o prodotti in zona inizia da Google. Un sito ti fa trovare e ti dà credibilità.',
      },
      {
        q: 'Posso mostrare i miei prodotti e la storia?',
        a: 'Sì, è fondamentale. Gallery ottimizzata, sezione prodotti e storia aziendale rendono il sito efficace e credibile.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo è toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e qualche foto. Io preparo tutto pronto per andare online.',
      },
    ],
    IndustrialHub: [
      {
        q: 'Per un\'azienda del settore {{SECTOR}} serve un sito?',
        a: 'Sì, e non solo per i clienti finali. I buyer e i rivenditori cercano online. Un sito professionale ti dà credibilità e ti fa trovare.',
      },
      {
        q: 'Non ho materiale fotografico di qualità.',
        a: 'Non serve essere fotografi. Mi mandi quello che hai e lo ottimizzo. Se serve, ti do indicazioni su come fare foto semplici ma efficaci.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo è un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Quanto tempo per andare online?',
        a: 'Con il materiale pronto, si parte velocemente. Lavoro in modo snello: poche riunioni, tanta concretezza.',
      },
    ],
    FoodValley: [
      {
        q: 'Per un produttore alimentare serve un sito?',
        a: 'Assolutamente sì. Chi cerca prodotti tipici, prosciutti o specialità locali inizia da Google. Un sito ti fa trovare e ti dà autorevolezza.',
      },
      {
        q: 'Posso mostrare i miei prodotti e la storia?',
        a: 'Sì, è fondamentale. Gallery ottimizzata, sezione prodotti e storia aziendale rendono il sito efficace e credibile.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo è toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e qualche foto. Io preparo tutto pronto per andare online.',
      },
    ],
    ProvinceCapital: [
      {
        q: 'A {{CITY_NAME}} serve davvero un sito?',
        a: 'Sì. La città è competitiva. Professionisti, artigiani e commercianti hanno bisogno di una presenza online che li faccia trovare e dia fiducia.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo è un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi.',
      },
      {
        q: 'Posso mostrare i miei lavori e le recensioni?',
        a: 'Sì, è uno dei modi migliori per farti scegliere. Mi mandi foto e recensioni: le inserisco in modo pulito e veloce.',
      },
    ],
    SuburbanGrowth: [
      {
        q: 'Per un artigiano o un servizio serve un sito?',
        a: 'Sì. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti dà credibilità.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo è toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
    PlainsSmall: [
      {
        q: 'Per un artigiano o un commerciante serve un sito?',
        a: 'Sì. Il passaparola resta importante, ma chi ti cerca online non ti conosce ancora. Un sito ti fa trovare e ti dà credibilità.',
      },
      {
        q: 'Non ho tempo di gestirlo.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche successive, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo è toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come misuro i risultati?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
    MetroBologna: [
      {
        q: 'Nell\'area bolognese serve davvero un sito?',
        a: 'Sì. La zona è competitiva e i clienti cercano online prima di decidere. Un sito professionale ti dà autorevolezza.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo è un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi.',
      },
    ],
  };

  const template = faqTemplates[archetype];

  return template.map(faq => ({
    q: replaceTokens(faq.q, replacements),
    a: replaceTokens(faq.a, replacements),
  })).map(faq => ({
    q: spintaxParse(faq.q, citySlug),
    a: spintaxParse(faq.a, citySlug),
  }));
}

function getOffersForArchetype(archetype: MarketArchetype, citySlug: string) {
  if (archetype === 'MountainSmall') {
    return [MOUNTAIN_OFFERS.landing, MOUNTAIN_OFFERS.website];
  }
  return [OFFERS_BASE.landing, OFFERS_BASE.website];
}

function estimateAltitudeFromLocation(location: Location): number {
  const { lat, lng } = location.geo;

  if (lat > 44.2 && lat < 44.4 && lng > 10.2 && lng < 10.7) {
    return 600;
  }
  if (lat > 44.5 && lng < 10.8 && lng > 10.3) {
    return 500;
  }
  if (lat > 44.6 && lat < 44.7 && lng > 10.3 && lng < 10.7) {
    return 450;
  }
  if (lat > 44.3 && lat < 44.35 && lng > 10.25 && lng < 10.35) {
    return 650;
  }

  return 100;
}

function getSectorFromArchetype(archetype: MarketArchetype): string {
  switch (archetype) {
    case 'IndustrialHub':
      return 'industriale';
    case 'FoodValley':
      return 'alimentare';
    case 'MetroBologna':
      return 'dei servizi';
    default:
      return 'locali';
  }
}

export function buildPageContent(location: Location, active: boolean = true): LocalPageData {
  const archetype = assignArchetype(location);
  const archetypeData = getArchetype(archetype);

  const altitude = estimateAltitudeFromLocation(location);
  const sector = getSectorFromArchetype(archetype);

  const replacements = createReplacements(
    location.name,
    location.province,
    location.region,
    location.population,
    'Siti Web',
    'siti-web',
    altitude,
    sector,
    archetypeData.name,
    archetypeData.description
  );

  const hero = generateHero(archetype, location.name, replacements);
  const diagnostica = generateDiagnostica(archetype, location.name, replacements);
  const goodInvestmentBase = generateGoodInvestment(archetype, replacements);

  const investmentCards = [
    {
      icon: 'star' as const,
      title: 'Credibilità immediata',
      description: 'Un sito curato trasmette serietà e qualità.',
      description2: 'I clienti ti percepiscono come professionista.',
      footerType: 'premium' as const,
    },
    {
      icon: 'shield' as const,
      title: 'Un asset di proprietà',
      description: 'Il sito è tuo e non dipende da algoritmi.',
      description2: 'Un investimento che dura nel tempo.',
      footerType: 'ownership' as const,
    },
    {
      icon: 'zap' as const,
      title: 'Risultati verificabili',
      description: 'Puoi misurare visite, richieste e conversioni.',
      description2: 'Investimento con ritorno tangibile.',
      footerType: 'roi' as const,
    },
  ];

  const goodInvestment = {
    ...goodInvestmentBase,
    cards: investmentCards,
  };

  const seo = generateSEO(
    archetype,
    location.name,
    location.province,
    'Siti Web',
    'siti-web',
    location.slug,
    replacements
  );
  const offers = getOffersForArchetype(archetype, location.slug);
  const faq = generateFAQ(archetype, location.slug, location);

  return {
    slug: location.slug,
    cityName: location.name,
    province: location.province,
    region: location.region,
    population: location.population,
    active,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers,
    seo,
    hero,
    diagnostica,
    goodInvestment,
    faq,
    geo: location.geo,
  };
}

export function rebuildPageData(location: Location, existingData?: Partial<LocalPageData>): LocalPageData {
  const newData = buildPageContent(location, existingData?.active ?? true);

  return {
    ...newData,
    ...existingData,
    offers: existingData?.offers || newData.offers,
    faq: existingData?.faq || newData.faq,
  };
}

export function buildSoftwarePageContent(location: Location, active: boolean = true): LocalPageData {
  const archetype = assignArchetype(location);
  const archetypeData = getArchetype(archetype);

  const altitude = estimateAltitudeFromLocation(location);
  const sector = getSectorFromArchetype(archetype);

  const replacements = createReplacements(
    location.name,
    location.province,
    location.region,
    location.population,
    'Software Gestionali',
    'sviluppo-software',
    altitude,
    sector,
    archetypeData.name,
    archetypeData.description
  );

  const hero = generateSoftwareHero(archetype, location.name, replacements);
  const diagnostica = generateSoftwareDiagnostica(archetype, location.name, replacements);
  const goodInvestmentBase = generateSoftwareGoodInvestment(archetype, replacements);

  const investmentCards = [
    {
      icon: 'zap' as const,
      title: 'Tempo Recuperato',
      description: 'Automazione dei processi ripetitivi',
      description2: 'Ore risparmiate ogni settimana',
      footerType: 'roi' as const,
    },
    {
      icon: 'shield' as const,
      title: 'Zero Errori',
      description: 'Dati sempre consistenti e aggiornati',
      description2: 'Niente più fogli che non tornano',
      footerType: 'ownership' as const,
    },
    {
      icon: 'star' as const,
      title: 'Controllo Totale',
      description: 'Metriche e report sempre disponibili',
      description2: 'Decidi con i dati, non con le sensazioni',
      footerType: 'premium' as const,
    },
  ];

  const goodInvestment = {
    ...goodInvestmentBase,
    cards: investmentCards,
  };

  const seo = generateSoftwareSEO(
    archetype,
    location.name,
    location.province,
    location.slug,
    replacements
  );

  const faq = generateSoftwareFAQ(archetype, location.slug, replacements);

  return {
    slug: location.slug,
    cityName: location.name,
    province: location.province,
    region: location.region,
    population: location.population,
    active,
    serviceSlug: 'sviluppo-software',
    serviceName: 'Software Gestionali',
    offers: [],
    seo,
    hero,
    diagnostica,
    goodInvestment,
    faq,
    geo: location.geo,
  };
}

export function rebuildSoftwarePageData(location: Location, existingData?: Partial<LocalPageData>): LocalPageData {
  const newData = buildSoftwarePageContent(location, existingData?.active ?? true);

  return {
    ...newData,
    ...existingData,
    faq: existingData?.faq || newData.faq,
  };
}

export function buildNichePageContent(
  location: Location,
  nicheSlug: string,
  active: boolean = true
): NichePageData {
  const nicheConfig = getNicheConfig(nicheSlug);
  const nicheContent = getNicheContent(nicheSlug);
  
  if (!nicheConfig) {
    throw new Error(`Niche config not found: ${nicheSlug}`);
  }

  const archetype = assignArchetype(location);
  const archetypeData = getArchetype(archetype);
  const sector = getSectorFromArchetype(archetype);

  const replacements = createReplacements(
    location.name,
    location.province,
    location.region,
    location.population,
    nicheConfig.name,
    'siti-web',
    100, // altitude - not relevant for niche pages
    sector,
    archetypeData.name,
    archetypeData.description
  );

  const hero = generateNicheHero(nicheSlug, location.name, replacements);
  const diagnostica = generateNicheDiagnostica(nicheSlug, location.name, replacements);
  const goodInvestmentBase = generateNicheGoodInvestment(nicheSlug, replacements);

  const investmentCards = [
    {
      icon: 'star' as const,
      title: 'Visibilità di Settore',
      description: 'Un sito pensato per il tuo settore.',
      description2: 'Ti posiziona come esperto locale.',
      footerType: 'premium' as const,
    },
    {
      icon: 'shield' as const,
      title: 'Lead Qualificati',
      description: 'Landing page ottimizzata per il tuo target.',
      description2: 'Clienti che cercano esattamente te.',
      footerType: 'ownership' as const,
    },
    {
      icon: 'zap' as const,
      title: 'Risultati Misurabili',
      description: 'Analytics integrato per monitorare.',
      description2: 'Conversioni e richieste tracciate.',
      footerType: 'roi' as const,
    },
  ];

  const goodInvestment = {
    ...goodInvestmentBase,
    cards: investmentCards,
  };

  const seo = generateNicheSEO(
    nicheConfig,
    location.name,
    location.province,
    location.slug,
    replacements
  );

  const offers = NICHE_OFFERS[nicheSlug] || [OFFERS_BASE.landing, OFFERS_BASE.website];

  const faq = nicheContent ? nicheContent.painPoints.map(pp => ({
    q: `Problemi con ${pp.title.toLowerCase()} a ${location.name}?`,
    a: pp.description,
  })) : [];

  return {
    slug: location.slug,
    cityName: location.name,
    province: location.province,
    region: location.region,
    population: location.population,
    active,
    serviceSlug: 'siti-web',
    serviceName: nicheConfig.name,
    offers,
    seo,
    hero,
    diagnostica: diagnostica || undefined,
    goodInvestment,
    faq,
    geo: location.geo,
    nicheSlug,
    nicheName: nicheConfig.name,
    nicheContent: nicheContent ? {
      painPoints: nicheContent.painPoints,
      features: nicheContent.features,
      stats: nicheContent.stats,
      testimonials: nicheContent.testimonials,
    } : undefined,
  };
}
