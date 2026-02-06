import { MarketArchetype } from '@/data/archetypes';
import { NicheConfig } from '@/data/niches-config';
import { TokenReplacements, replaceTokens, buildNicheCanonicalUrl, buildKeywords } from '@/lib/link-graph/tokens';
import { pickVariant, spintaxParse } from '@/lib/content/spintax';
import { getNicheLabelForPhrase } from '@/lib/niche-labels';

interface NicheHeroTemplate {
  h1: string;
  sub: string;
  ctaText: string;
  trustSignal: string;
}

interface NicheDiagnosticaTemplate {
  badge: string;
  title: string;
  problems: string[];
  solutions: string[];
}

interface NicheGoodInvestmentTemplate {
  title: string;
  titleHighlight: string;
  subtitle: string;
}

const NICHE_HERO_TEMPLATES: Record<string, NicheHeroTemplate> = {
  ristoranti: {
    h1: 'Il tuo ristorante a {{CityName}} merita un sito che porta prenotazioni',
    sub: 'Menu digitale, prenotazioni online e visibilità su Google. Trasforma il tuo sito in una macchina da clienti.',
    ctaText: 'Aumenta le Prenotazioni',
    trustSignal: 'Specializzato in siti per ristoranti e locali food',
  },
  avvocati: {
    h1: 'Il tuo studio legale a {{CityName}} merita clienti che ti cercano',
    sub: 'SEO per avvocati, lead generation qualificata e prenotazione consulenze online. La competenza merita di essere trovata.',
    ctaText: 'Acquisisci Clienti Qualificati',
    trustSignal: 'Specializzato in siti per studi legali e professionisti',
  },
  architetti: {
    h1: 'Il tuo portfolio architettonico a {{CityName}} merita di essere visto',
    sub: 'Tour virtuali 360°, gallery interattiva e lead generation per studi di architettura. Mostra il tuo talento al mondo.',
    ctaText: 'Vinci Nuovi Progetti',
    trustSignal: 'Specializzato in portfolio per architetti e designer',
  },
  dentisti: {
    h1: 'Il tuo studio dentistico a {{CityName}} merita pazienti che si fidano',
    sub: 'Guide ai trattamenti, prenotazioni online e reputazione professionale. Costruisci fiducia prima della prima visita.',
    ctaText: 'Attrai Pazienti di Qualità',
    trustSignal: 'Specializzato in siti per studi dentistici e cliniche',
  },
  idraulici: {
    h1: 'Il tuo business idraulico a {{CityName}} merita di essere trovato',
    sub: 'Local SEO, sistema preventivi e area emergenza 24/7. Quando hanno un problema, ti trovano subito.',
    ctaText: 'Aumenta le Chiamate',
    trustSignal: 'Specializzato in siti per idraulici e termoidraulici',
  },
  estetiste: {
    h1: 'Il tuo salone di bellezza a {{CityName}} merita prenotazioni dirette',
    sub: 'Booking online, gallery lavori e programma fedeltà. Smetti di dipendere dal telefono.',
    ctaText: 'Semplifica le Prenotazioni',
    trustSignal: 'Specializzato in siti per centri estetici e parrucchieri',
  },
  'saloni-bellezza': {
    h1: 'Il tuo salone a {{CityName}} prenota da solo, anche di notte',
    sub: 'Booking online, listino chiaro e portfolio lavori. Meno telefonate, più appuntamenti puntuali.',
    ctaText: 'Attiva il Booking Online',
    trustSignal: 'Specializzato in siti per saloni di bellezza e parrucchieri',
  },
  'personal-trainer': {
    h1: 'Il tuo personal brand fitness a {{CityName}} merita clienti che ti cercano',
    sub: 'Programmi online, trasformazioni before/after e booking. Costruisci il tuo impero fitness.',
    ctaText: 'Costruisci il Tuo Brand',
    trustSignal: 'Specializzato in siti per personal trainer e coach fitness',
  },
  immobiliare: {
    h1: 'La tua agenzia immobiliare a {{CityName}} merita di vendere di più',
    sub: 'Motore ricerca avanzato, tour virtuali e lead generation. Gli immobili vendono prima con il sito giusto.',
    ctaText: 'Vendi Più Immobili',
    trustSignal: 'Specializzato in siti per agenzie immobiliari',
  },
  medici: {
    h1: 'La tua pratica medica a {{CityName}} merita pazienti preparati',
    sub: 'Guide ai trattamenti, prenotazioni online e telemedicina. Pazienti informati, flussi ottimizzati.',
    ctaText: 'Migliora l\'Esperienza Paziente',
    trustSignal: 'Specializzato in siti per medici e specialisti',
  },
  fotografi: {
    h1: 'Il tuo portfolio fotografico a {{CityName}} merita clienti che apprezzano',
    sub: 'Gallery immersive, booking online e video showreel. Il tuo talento merita una vetrina all\'altezza.',
    ctaText: 'Attrai Clienti di Qualità',
    trustSignal: 'Specializzato in portfolio per fotografi e videomaker',
  },
  'aziende-agricole': {
    h1: 'La tua azienda agricola a {{CityName}} merita clienti diretti',
    sub: 'E-commerce, visite in azienda e storytelling del territorio. Porta le persone dalla terra al carrello.',
    ctaText: 'Racconta la Tua Azienda',
    trustSignal: 'Specializzato in siti per aziende agricole, agriturismi e cantine',
  },
  commercialisti: {
    h1: 'Il tuo studio fiscale a {{CityName}} merita imprenditori che ti cercano',
    sub: 'Guide fiscali, tool interattivi e lead generation B2B. Posizionati come l\'esperto di riferimento.',
    ctaText: 'Attrai Clienti B2B',
    trustSignal: 'Specializzato in siti per commercialisti e consulenti fiscali',
  },
  'wedding-planner': {
    h1: 'Il tuo business wedding a {{CityName}} merita coppie che sognano',
    sub: 'Love stories, portfolio emozionale e preventivi strutturati. Ogni matrimonio è una storia da raccontare.',
    ctaText: 'Vinci Matrimoni',
    trustSignal: 'Specializzato in siti per wedding planner e organizzatori eventi',
  },
  edilizia: {
    h1: 'La tua impresa edile a {{CityName}} merita preventivi che vincono',
    sub: 'Portfolio before/after, SEO locale e sistema preventivi. I clienti vedono e credono.',
    ctaText: 'Aumenta i Preventivi',
    trustSignal: 'Specializzato in siti per imprese edili e costruttori',
  },
};

const NICHE_DIAGNOSTICA_TEMPLATES: Record<string, NicheDiagnosticaTemplate> = {
  ristoranti: {
    badge: 'Diagnostica Ristorante',
    title: 'Il tuo ristorante sta perdendo clienti online?',
    problems: [
      'Le commissioni di TheFork e delivery ti mangiano i margini',
      'Il menu PDF non si vede bene da smartphone',
      'Le recensioni negative restano senza risposta',
      'Non riesci a gestire le prenotazioni senza perdere telefonate',
    ],
    solutions: [
      'Menu digitale interattivo con QR code e filtri',
      'Sistema prenotazioni diretto con commissioni zero',
      'Gestione automatica delle recensioni Google',
      'Prenotazioni WhatsApp integrate nel sito',
    ],
  },
  avvocati: {
    badge: 'Diagnostica Studio Legale',
    title: 'Il tuo studio sta perdendo clienti qualificati?',
    problems: [
      'Il 70% delle telefonate sono da clienti non qualificati',
      'Non appari su Google per ricerche legali',
      'I clienti ti contattano senza conoscerti prima',
      'Non hai un sistema di prenotazione consulenze',
    ],
    solutions: [
      'Questionario di pre-qualifica per filtrare i lead',
      'SEO legale per posizionarti su ricerche specifiche',
      'Video presentazione del socio per creare fiducia',
      'Booking online per consulenze 24/7',
    ],
  },
  architetti: {
    badge: 'Diagnostica Studio Architettonico',
    title: 'Il tuo portfolio non sta portando progetti?',
    problems: [
      'Le foto dei tuoi lavori sono sparse ovunque',
      'Non vieni trovato per ricerche architettoniche locali',
      'I clienti guardano il sito e se ne vanno senza contattarti',
      'Non comunichi il tuo stile e la tua filosofia',
    ],
    solutions: [
      'Portfolio interattivo con tour virtuali 360°',
      'SEO architettonico per "architetto [città]"',
      'Case study dettagliati che raccontano il processo',
      'Sezione team e approccio progettuale',
    ],
  },
  dentisti: {
    badge: 'Diagnostica Studio Dentistico',
    title: 'Il tuo studio sta perdendo pazienti per paura?',
    problems: [
      'Il 75% dei pazienti ha paura del dentista',
      'Le recensioni negative danneggiano la reputazione',
      'Il centralino è intasato da telefonate inutili',
      'I pazienti non capiscono i costi dei trattamenti',
    ],
    solutions: [
      'Guide ai trattamenti che rassicurano i pazienti',
      'Sistema di gestione recensioni automatizzato',
      'Prenotazione online che riduce le telefonate',
      'Calcolatore costi per trasparenza immediata',
    ],
  },
  idraulici: {
    badge: 'Diagnostica Idraulico',
    title: 'Il tuo business idraulico non viene trovato?',
    problems: [
      'Non appari su Google per "idraulico [città]"',
      'Le emergenze le prendono i competitor',
      'I preventivi si perdono nelle email',
      'Non comunichi la zona di intervento',
    ],
    solutions: [
      'Local SEO per emergenze idrauliche',
      'Sezione emergenza 24/7 sempre visibile',
      'Sistema preventivi strutturato con foto',
      'Mappa chiara delle zone coperte',
    ],
  },
  estetiste: {
    badge: 'Diagnostica Centro Estetico',
    title: 'Il tuo salone non sta prenotando abbastanza?',
    problems: [
      'Il telefono squilla sempre per le prenotazioni',
      'I clienti non vedono i tuoi lavori prima di venire',
      'I no-show costano tempo e fatturato',
      'Non hai un programma fedeltà efficace',
    ],
    solutions: [
      'Booking online 24/7 che libera il telefono',
      'Gallery lavori che convince le clienti',
      'Promemoria SMS che riducono i no-show',
      'Programma fedeltà integrato nel sito',
    ],
  },
  'saloni-bellezza': {
    badge: 'Diagnostica Salone',
    title: 'Il tuo salone perde tempo al telefono?',
    problems: [
      'Agenda piena di telefonate e WhatsApp sparsi',
      'Listino poco chiaro: i nuovi clienti vanno dal concorrente',
      'No-show e ritardi che ti sballano la giornata',
      'Poche recensioni e social proof deboli',
    ],
    solutions: [
      'Booking online 24/7 con acconto e promemoria automatici',
      'Listino digitale chiaro con durata servizi e upgrade',
      'Portfolio prima/dopo per mostrare lo stile',
      'Raccolta recensioni automatizzata post-servizio',
    ],
  },
  fotografi: {
    badge: 'Diagnostica Portfolio',
    title: 'Il tuo portfolio non sta portando richieste?',
    problems: [
      'Le tue foto sono su social diversi e non sul sito',
      'Chi cerca "fotografo {{CITY_NAME}}" non ti trova',
      'I clienti non capiscono prezzi e pacchetti',
      'Non hai prove social come recensioni o case study',
    ],
    solutions: [
      'Portfolio unico con filtri per servizio e stile',
      'SEO locale e struttura pensata per keyword fotografiche',
      'Pacchetti chiari con optional e tempi di consegna',
      'Sezione clienti e testimonianze integrate',
    ],
  },
  'aziende-agricole': {
    badge: 'Diagnostica Agricola',
    title: 'I tuoi prodotti non arrivano ai clienti giusti?',
    problems: [
      'Dipendenza da portali e GDO che tagliano i margini',
      'E-commerce assente o datato che non trasmette qualità',
      'Poche prenotazioni per visite, degustazioni o agriturismo',
      'Certificazioni e filiera corta non sono spiegate',
    ],
    solutions: [
      'E-commerce diretto con filiera corta e prezzi chiari',
      'Schede prodotto complete con origine e tracciabilità',
      'Calendario visite/degustazioni con prenotazione online',
      'Storytelling stagionale e newsletter automatizzate',
    ],
  },
  immobiliare: {
    badge: 'Diagnostica Agenzia Immobiliare',
    title: 'La tua agenzia non sta vendendo abbastanza?',
    problems: [
      'Il motore di ricerca sul sito non funziona bene',
      'Gli immobili non hanno foto professionali',
      'I lead non sono qualificati',
      'Non fai abbastanza tour virtuali',
    ],
    solutions: [
      'Motore ricerca avanzato con filtri intelligenti',
      'Servizio fotografico professionale per ogni immobile',
      'Form qualificazione lead strutturato',
      'Tour virtuali 360° per ogni proprietà',
    ],
  },
  edilizia: {
    badge: 'Diagnostica Impresa Edile',
    title: 'La tua impresa non sta ottenendo preventivi?',
    problems: [
      'Non hai un portfolio digitale organizzato',
      'I before/after non sono visibili ai clienti',
      'I preventivi si fanno ancora a mano',
      'La zona di lavoro non è chiara',
    ],
    solutions: [
      'Portfolio progetti organizzato per tipologia',
      'Slider before/after che parla da solo',
      'Preventivo express con form strutturato',
      'Mappa delle zone di intervento',
    ],
  },
};

const NICHE_GOOD_INVESTMENT_TEMPLATES: Record<string, NicheGoodInvestmentTemplate> = {
  ristoranti: {
    title: 'Un sito che',
    titleHighlight: 'porta prenotazioni',
    subtitle: 'Non un sito generico. Un asset pensato per ristoranti: menu digitali, prenotazioni dirette e visibilità che riduce le commissioni dei portali.',
  },
  avvocati: {
    title: 'Uno studio che',
    titleHighlight: 'attrae clienti qualificati',
    subtitle: 'Non uno studio generico. Un sistema di lead generation che filtra i casi e porta solo clienti compatibili con le tue competenze.',
  },
  architetti: {
    title: 'Un portfolio che',
    titleHighlight: 'vende progetti',
    subtitle: 'Non un portfolio generico. Una vetrina interattiva con tour virtuali che mostra il tuo talento e convince i clienti a contattarti.',
  },
  dentisti: {
    title: 'Uno studio che',
    titleHighlight: 'costruisce fiducia',
    subtitle: 'Non uno studio generico. Un sistema che rassicura i pazienti, li informa sui trattamenti e li porta a prenotare con serenità.',
  },
  idraulici: {
    title: 'Un business che',
    titleHighlight: 'viene trovato',
    subtitle: 'Non un sito generico. Una presenza online che ti fa trovare nelle emergenze e porta preventivi qualificati.',
  },
  estetiste: {
    title: 'Un salone che',
    titleHighlight: 'prenota da solo',
    subtitle: 'Non un sito generico. Un sistema di booking che libera il telefono e porta clienti anche di sera e weekend.',
  },
  'saloni-bellezza': {
    title: 'Un salone che',
    titleHighlight: 'riempie l’agenda',
    subtitle: 'Booking online, listino chiaro e promemoria automatici: meno telefonate, più appuntamenti puntuali.',
  },
  immobiliare: {
    title: 'Un\'agenzia che',
    titleHighlight: 'vende più velocemente',
    subtitle: 'Non un sito generico. Un motore di ricerca potente e tour virtuali che portano visitatori qualificati.',
  },
  fotografi: {
    title: 'Un portfolio che',
    titleHighlight: 'trasforma visite in richieste',
    subtitle: 'Gallery curate, showreel e pacchetti chiari: il tuo lavoro viene visto e richiesto.',
  },
  'aziende-agricole': {
    title: 'Un’azienda che',
    titleHighlight: 'vende diretto e porta persone in azienda',
    subtitle: 'E-commerce, visite e storytelling del territorio: margini più alti e clienti fidelizzati.',
  },
  edilizia: {
    title: 'Un\'impresa che',
    titleHighlight: 'convince con le prove',
    subtitle: 'Non un sito generico. Un portfolio with before/after che mostra i risultati e convince a richiedere un preventivo.',
  },
};

export function generateNicheHero(
  nicheSlug: string,
  cityName: string,
  replacements: TokenReplacements
) {
  const template = NICHE_HERO_TEMPLATES[nicheSlug];
  if (!template) {
    // Fallback to generic
    return {
      h1: `Il tuo sito per ${cityName}`,
      sub: 'Un sito professionale che ti fa trovare e ti fa scegliere.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Specializzato in siti per attività locali',
    };
  }
  return {
    h1: replaceTokens(template.h1, replacements),
    sub: replaceTokens(template.sub, replacements),
    ctaText: template.ctaText,
    ctaHref: '#contatti',
    trustSignal: replaceTokens(template.trustSignal, replacements),
  };
}

export function generateNicheDiagnostica(
  nicheSlug: string,
  cityName: string,
  replacements: TokenReplacements
) {
  const template = NICHE_DIAGNOSTICA_TEMPLATES[nicheSlug];
  if (!template) {
    return null;
  }
  return {
    badge: template.badge,
    title: replaceTokens(template.title, replacements),
    problems: template.problems.map(p => replaceTokens(p, replacements)),
    solutions: template.solutions.map(s => replaceTokens(s, replacements)),
  };
}

export function generateNicheGoodInvestment(
  nicheSlug: string,
  replacements: TokenReplacements
) {
  const template = NICHE_GOOD_INVESTMENT_TEMPLATES[nicheSlug];
  if (!template) {
    return {
      title: 'Un sito che',
      titleHighlight: 'porta risultati',
      subtitle: 'Un sito professionale che ti fa trovare e ti fa scegliere.',
    };
  }
  return {
    title: replaceTokens(template.title, replacements),
    titleHighlight: replaceTokens(template.titleHighlight, replacements),
    subtitle: replaceTokens(template.subtitle, replacements),
  };
}

export function generateNicheSEO(
  niche: NicheConfig,
  cityName: string,
  province: string,
  citySlug: string,
  replacements: TokenReplacements
) {
  const label = getNicheLabelForPhrase(niche);
  const titleVariants = [
    `${niche.name} a ${cityName} | Web Design e Marketing`,
    `Siti web per ${label} a ${cityName}`,
    `${niche.name} a ${cityName}? Il sito che porta clienti`,
  ];

  const descriptionVariants = [
    `Sito web professionale per ${label} a ${cityName}: design, SEO e marketing per il tuo settore.`,
    `Realizzo siti web per ${label} a ${cityName}. Presenza online che porta risultati.`,
    `${niche.name} a ${cityName}: sito web ottimizzato per farti trovare dai clienti del tuo settore.`,
  ];

  const h1Variants = [
    `${niche.name} a ${cityName}`,
    `Web design per ${label} a ${cityName}`,
    `Il tuo sito per ${cityName}`,
  ];

  const title = pickVariant(citySlug, titleVariants);
  const description = pickVariant(citySlug, descriptionVariants);
  const h1 = pickVariant(citySlug, h1Variants);

  const keywords = [
    `${niche.name.toLowerCase()} ${cityName}`,
    `web design ${label} ${cityName}`,
    `marketing per ${label} ${cityName}`,
  ];

  return {
    title: replaceTokens(title, replacements),
    description: replaceTokens(description, replacements),
    canonical: buildNicheCanonicalUrl(citySlug, niche.slug, 'siti-web'),
    keywords,
    h1: replaceTokens(h1, replacements),
  };
}
