import { Location } from '@/data/locations';
import { MarketArchetype, assignArchetype, getArchetype } from '@/data/archetypes';
import { createReplacements, TokenReplacements, replaceTokens } from '@/lib/link-graph/tokens';
import { pickVariant, getPopulationTier, getZoneContext, spintaxParse } from '@/lib/content/spintax';
import { generateHero, generateDiagnostica, generateGoodInvestment, generateSEO } from '@/lib/content/templates';
import { generateSoftwareHero, generateSoftwareDiagnostica, generateSoftwareGoodInvestment, generateSoftwareSEO, generateSoftwareFAQ } from '@/lib/content/software-templates';
import { LocalPageData } from '@/data/local-pages/types';

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
