/**
 * PROGRAMMATIC PAGE GENERATOR
 * 
 * This module generates page data for any service + city combination.
 * It's the single source of truth for programmatic SEO page content.
 * 
 * USAGE:
 * ```typescript
 * const pageData = buildServicePageData('ecommerce', 'modena');
 * // Returns full page data including SEO, hero, FAQ, pricing, etc.
 * ```
 * 
 * The system uses:
 * - ServiceConfig from services-config.ts
 * - Location data from locations.ts
 * - Archetype-based content differentiation from archetypes.ts
 */

import { 
  ServiceConfig, 
  getServiceBySlug, 
  generateServiceTitle,
  generateServiceDescription,
  generateServiceH1,
  generateServiceKeywords,
  generateServiceFaq,
} from '@/data/services-config';
import { Location, getLocationBySlug, getNearbyCities } from '@/data/locations';
import { MarketArchetype, assignArchetype, getArchetype } from '@/data/archetypes';

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface ServicePageSeo {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  h1: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: 'website' | 'article';
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    images: string[];
  };
}

export interface ServicePageHero {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export interface ServicePageProblem {
  title: string;
  description: string;
  icon?: string;
}

export interface ServicePageSolution {
  title: string;
  description: string;
  icon?: string;
}

export interface ServicePageData {
  // Identification
  slug: string;
  citySlug: string;
  serviceSlug: string;
  nicheSlug?: string;
  
  // Location Data
  cityName: string;
  province: string;
  region: string;
  population: number;
  geo: { lat: number; lng: number };
  
  // Service Data
  serviceName: string;
  serviceCategory: string;
  
  // Archetype Data
  archetype: MarketArchetype;
  archetypeName: string;
  
  // SEO Data
  seo: ServicePageSeo;
  
  // Page Sections
  hero: ServicePageHero;
  problems?: ServicePageProblem[];
  solutions?: ServicePageSolution[];
  pricing: ServiceConfig['pricing'];
  faq: Array<{ question: string; answer: string }>;
  
  // Internal Linking
  nearbyCities: Array<{
    slug: string;
    name: string;
    province: string;
  }>;
  relatedServices: Array<{
    slug: string;
    name: string;
    description: string;
  }>;
  
  // City-specific content blocks
  localContext: string;
  whyHere: string;
  marketInsight: string;
  deliverables: string[];
  archetypeFaq: Array<{ question: string; answer: string }>;
  
  // Status
  active: boolean;
}

// =============================================================================
// CONTENT GENERATORS (Archetype-specific)
// =============================================================================

const HERO_TEMPLATES: Record<string, Record<MarketArchetype, Partial<ServicePageHero>>> = {
  'siti-web': {
    MountainSmall: {
      badge: 'Per attività in montagna',
      subtitle: 'Un sito semplice e veloce che funziona anche quando la connessione non è perfetta. Per farti trovare dai turisti e dai clienti della zona.',
    },
    HillMedium: {
      badge: 'Per attività di collina',
      subtitle: 'Valorizza la tua attività con un sito che racconta la tua storia e ti fa trovare da chi cerca prodotti e servizi autentici.',
    },
    IndustrialHub: {
      badge: 'Per aziende del distretto',
      subtitle: 'Un sito professionale che comunica solidità e competenza. Per aziende che vogliono farsi trovare anche online.',
    },
    FoodValley: {
      badge: 'Per il settore alimentare',
      subtitle: 'Racconta la qualità dei tuoi prodotti con un sito che trasmette autenticità e tradizione. E-commerce opzionale per vendita diretta.',
    },
    ProvinceCapital: {
      badge: 'Per professionisti e aziende',
      subtitle: 'Nella città competitiva, un sito curato fa la differenza. Distinguiti con una presenza online che genera fiducia e contatti.',
    },
    SuburbanGrowth: {
      badge: 'Per attività in crescita',
      subtitle: 'La tua attività sta crescendo e il passaparola non basta più. Un sito web ti apre a nuovi clienti nella zona e oltre.',
    },
    PlainsSmall: {
      badge: 'Per attività locali',
      subtitle: 'Un sito chiaro e concreto per farti trovare da chi cerca i tuoi servizi. Niente fronzoli, solo risultati.',
    },
    MetroBologna: {
      badge: 'Per l\'area metropolitana',
      subtitle: 'Nel mercato più competitivo della regione, un sito professionale è indispensabile. Posizionati al meglio con una presenza digitale di qualità.',
    },
  },
  'ecommerce': {
    MountainSmall: {
      badge: 'Vendi online dalla montagna',
      subtitle: 'Porta i tuoi prodotti locali in tutta Italia. Un e-commerce semplice da gestire, perfetto per valorizzare le eccellenze del territorio.',
    },
    HillMedium: {
      badge: 'E-commerce per prodotti tipici',
      subtitle: 'Vendi direttamente ai clienti senza intermediari. Formaggi, vino, conserve: i tuoi prodotti meritano un negozio online dedicato.',
    },
    IndustrialHub: {
      badge: 'B2B e B2C digitale',
      subtitle: 'Un e-commerce professionale per vendere a privati e aziende. Gestione ordini, fatturazione e spedizioni integrate.',
    },
    FoodValley: {
      badge: 'Vendi le tue eccellenze',
      subtitle: 'Dal produttore al consumatore. Un e-commerce che racconta la storia dei tuoi prodotti e li consegna in tutta Italia.',
    },
    ProvinceCapital: {
      badge: 'Negozio online professionale',
      subtitle: 'Espandi il tuo business oltre i confini fisici. Un e-commerce che lavora per te 24 ore su 24.',
    },
    SuburbanGrowth: {
      badge: 'Vendi anche online',
      subtitle: 'Affianca al tuo negozio fisico un canale di vendita online. Raggiungi nuovi clienti senza costi di affitto.',
    },
    PlainsSmall: {
      badge: 'Il tuo negozio online',
      subtitle: 'Vendi i tuoi prodotti anche a chi non può raggiungerti di persona. Spedizioni, pagamenti e gestione ordini tutto in un unico posto.',
    },
    MetroBologna: {
      badge: 'E-commerce competitivo',
      subtitle: 'Nel mercato online servono strumenti professionali. Un e-commerce ottimizzato per vendere di più e meglio.',
    },
  },
  'posizionamento-seo': {
    MountainSmall: {
      badge: 'SEO per zone turistiche',
      subtitle: 'Fatti trovare da chi cerca "cosa fare" o "dove mangiare" nella tua zona. SEO locale per intercettare turisti e visitatori.',
    },
    HillMedium: {
      badge: 'SEO per nicchie locali',
      subtitle: 'Nella tua zona la concorrenza online è bassa. Posizionarsi bene su Google è più facile di quanto pensi.',
    },
    IndustrialHub: {
      badge: 'SEO per aziende B2B',
      subtitle: 'I buyer cercano fornitori su Google. Una strategia SEO mirata ti fa trovare dalle aziende che cercano i tuoi servizi.',
    },
    FoodValley: {
      badge: 'SEO per food & agri',
      subtitle: 'Chi cerca prodotti tipici inizia da Google. Posizionati per le ricerche legate al tuo territorio e ai tuoi prodotti.',
    },
    ProvinceCapital: {
      badge: 'SEO competitivo',
      subtitle: 'In città la concorrenza è alta. Una strategia SEO professionale ti fa emergere tra i competitor locali.',
    },
    SuburbanGrowth: {
      badge: 'SEO per crescere',
      subtitle: 'Stai crescendo e vuoi piu clienti dalla zona? La SEO locale ti fa trovare da chi cerca i tuoi servizi nelle vicinanze.',
    },
    PlainsSmall: {
      badge: 'SEO locale',
      subtitle: 'Nella tua zona ci sono poche attività online. Posizionarsi bene è relativamente facile e ti dà un vantaggio competitivo.',
    },
    MetroBologna: {
      badge: 'SEO metropolitano',
      subtitle: 'Nell\'area bolognese serve una strategia SEO solida. Ti aiuto a posizionarti per le ricerche che contano.',
    },
  },
  'sviluppo-app-mobile': {
    MountainSmall: {
      badge: 'App per il turismo',
      subtitle: 'Un\'app per la tua attività turistica: prenotazioni, info, itinerari. Perfetta anche offline.',
    },
    HillMedium: {
      badge: 'App per agriturismi',
      subtitle: 'Gestisci prenotazioni, menu e comunicazioni con i clienti da un\'app dedicata alla tua attività.',
    },
    IndustrialHub: {
      badge: 'App per l\'azienda',
      subtitle: 'App aziendali per operatori, clienti o processi interni. Soluzioni su misura per le esigenze industriali.',
    },
    FoodValley: {
      badge: 'App per il food',
      subtitle: 'Ordini, prenotazioni, menu digitali. Un\'app che semplifica la vita ai tuoi clienti e al tuo staff.',
    },
    ProvinceCapital: {
      badge: 'App per il tuo business',
      subtitle: 'Distinguiti con un\'app dedicata. Fidelizza i clienti e offri servizi esclusivi direttamente sul loro smartphone.',
    },
    SuburbanGrowth: {
      badge: 'App per attività in crescita',
      subtitle: 'Un investimento per scalare. Un\'app ti permette di gestire più clienti con meno sforzo.',
    },
    PlainsSmall: {
      badge: 'App semplici ed efficaci',
      subtitle: 'Non serve un\'app complessa. Ti creo esattamente quello che ti serve, senza funzionalità inutili.',
    },
    MetroBologna: {
      badge: 'App professionali',
      subtitle: 'App native o cross-platform per aziende che vogliono competere ad alto livello sul mobile.',
    },
  },
  'landing-pages': {
    MountainSmall: {
      badge: 'Landing per promozioni',
      subtitle: 'Una pagina dedicata per la tua offerta stagionale o per eventi speciali. Massimo impatto, investimento contenuto.',
    },
    HillMedium: {
      badge: 'Landing per eventi',
      subtitle: 'Sagre, degustazioni, eventi in azienda: una landing page dedicata per raccogliere iscrizioni e contatti.',
    },
    IndustrialHub: {
      badge: 'Landing B2B',
      subtitle: 'Pagine di atterraggio per campagne LinkedIn o Google Ads. Ottimizzate per generare lead qualificati.',
    },
    FoodValley: {
      badge: 'Landing per prodotti',
      subtitle: 'Lancia un nuovo prodotto o una linea speciale con una pagina dedicata che racconta la storia e invita all\'acquisto.',
    },
    ProvinceCapital: {
      badge: 'Landing per campagne',
      subtitle: 'Massimizza il ROI delle tue campagne pubblicitarie con landing page progettate per convertire.',
    },
    SuburbanGrowth: {
      badge: 'Landing per lead',
      subtitle: 'Cattura contatti interessati con pagine focalizzate su un\'offerta specifica. Perfette per Google e Facebook Ads.',
    },
    PlainsSmall: {
      badge: 'Landing essenziali',
      subtitle: 'Una singola pagina che spiega cosa fai e come contattarti. Semplice, veloce, efficace.',
    },
    MetroBologna: {
      badge: 'Landing ad alta conversione',
      subtitle: 'Landing page professionali con A/B testing e ottimizzazione continua per massimizzare i risultati.',
    },
  },
  'sviluppo-software': {
    MountainSmall: {
      badge: 'Software semplici',
      subtitle: 'Basta fogli Excel e appunti cartacei. Un gestionale semplice per mettere ordine nella tua attività.',
    },
    HillMedium: {
      badge: 'Gestionali per PMI',
      subtitle: 'Software su misura per artigiani e piccole imprese. Preventivi, ordini, clienti: tutto in un unico posto.',
    },
    IndustrialHub: {
      badge: 'Software Industria 4.0',
      subtitle: 'Automazione processi, interconnessione macchinari, gestione produzione. Soluzioni per l\'azienda moderna.',
    },
    FoodValley: {
      badge: 'Gestionali food',
      subtitle: 'Tracciabilità lotti, gestione scadenze, ordini e produzione. Software pensati per il settore alimentare.',
    },
    ProvinceCapital: {
      badge: 'Software enterprise',
      subtitle: 'Soluzioni scalabili per aziende strutturate. CRM, ERP, integrazioni API e dashboard personalizzate.',
    },
    SuburbanGrowth: {
      badge: 'Software per crescere',
      subtitle: 'La tua azienda cresce e i processi manuali non bastano piu. Automatizza con software su misura.',
    },
    PlainsSmall: {
      badge: 'Digitalizzazione base',
      subtitle: 'Il primo passo verso la digitalizzazione. Un software semplice che risolve i problemi quotidiani.',
    },
    MetroBologna: {
      badge: 'Software avanzati',
      subtitle: 'Piattaforme web complesse, integrazioni avanzate, architetture scalabili. Per chi ha esigenze enterprise.',
    },
  },
};

const PROBLEM_TEMPLATES: Record<string, Record<MarketArchetype, ServicePageProblem[]>> = {
  'ecommerce': {
    MountainSmall: [
      { title: 'Vendite solo locali', description: 'I tuoi prodotti arrivano solo a chi passa di persona. I clienti di città non ti trovano.' },
      { title: 'Stagionalità', description: 'Fuori stagione le vendite crollano. Un e-commerce ti permette di vendere tutto l\'anno.' },
      { title: 'Margini bassi', description: 'Vendere tramite intermediari erode i tuoi margini. Online vendi direttamente.' },
    ],
    HillMedium: [
      { title: 'Mercato limitato', description: 'I tuoi prodotti potrebbero arrivare ovunque, ma li vendi solo a km zero.' },
      { title: 'Visibilità zero', description: 'Chi cerca prodotti tipici online non ti trova. I marketplace mangiano i tuoi margini.' },
      { title: 'Gestione manuale', description: 'Ordini via telefono, WhatsApp, email. Ogni canale un caos diverso.' },
    ],
    IndustrialHub: [
      { title: 'Solo canali tradizionali', description: 'I tuoi competitor vendono online. Tu perdi ordini da clienti che preferiscono ordinare dal web.' },
      { title: 'Catalogo non aggiornato', description: 'Listini PDF, cataloghi cartacei. I clienti vogliono vedere disponibilità e prezzi in tempo reale.' },
      { title: 'Ordini manuali', description: 'Ogni ordine richiede email, telefonate, conferme. Un e-commerce B2B automatizza tutto.' },
    ],
    FoodValley: [
      { title: 'Solo vendita diretta', description: 'Produci eccellenze ma le vendi solo a chi viene in azienda o ai mercati.' },
      { title: 'Intermediari costosi', description: 'GDO e distributori prendono margini altissimi. Online vendi al prezzo giusto.' },
      { title: 'Storytelling assente', description: 'I tuoi prodotti hanno una storia. Online puoi raccontarla e farla valere.' },
    ],
    ProvinceCapital: [
      { title: 'Concorrenza alta', description: 'In città ci sono tanti competitor. Online puoi differenziarti e raggiungere nuovi clienti.' },
      { title: 'Costi fissi alti', description: 'Affitto, personale, utenze. Un e-commerce ti permette di vendere con costi marginali ridotti.' },
      { title: 'Orari limitati', description: 'Il negozio chiude, l\'e-commerce vende 24/7. Non perdere vendite fuori orario.' },
    ],
    SuburbanGrowth: [
      { title: 'Solo clienti locali', description: 'La tua attività funziona bene ma è limitata geograficamente. Online espandi il mercato.' },
      { title: 'Crescita bloccata', description: 'Per crescere dovresti aprire nuovi punti vendita. Un e-commerce è più economico e scalabile.' },
      { title: 'Mancanza di dati', description: 'Non sai chi sono i tuoi clienti online. Un e-commerce ti dà analytics e insight.' },
    ],
    PlainsSmall: [
      { title: 'Visibilità limitata', description: 'Nella tua zona ti conoscono, ma oltre? Un e-commerce ti apre a nuovi mercati.' },
      { title: 'Dipendenza dal passaparola', description: 'Il passaparola funziona, ma non scala. Online raggiungi chi non ti conosce ancora.' },
      { title: 'Gestione ordini caotica', description: 'Tra telefono, WhatsApp e email perdi pezzi. Un e-commerce centralizza tutto.' },
    ],
    MetroBologna: [
      { title: 'Mercato saturo offline', description: 'Troppa concorrenza fisica. Online puoi differenziarti e trovare la tua nicchia.' },
      { title: 'Aspettative alte', description: 'I clienti si aspettano servizio impeccabile: tracking, resi, assistenza. Devi essere allaltezza.' },
      { title: 'Margini compressi', description: 'La concorrenza comprime i prezzi. Devi ottimizzare per vendere di più con meno costi.' },
    ],
  },
  'posizionamento-seo': {
    MountainSmall: [
      { title: 'Invisibile su Google', description: 'Chi cerca "cosa fare a [città]" non ti trova. Perdi turisti e visitatori.' },
      { title: 'Solo passaparola', description: 'Ti affidi solo a chi ti conosce già. Chi ti cerca su Google trova i tuoi competitor.' },
      { title: 'Profilo Google trascurato', description: 'La tua scheda Google Business è incompleta o con info sbagliate.' },
    ],
    HillMedium: [
      { title: 'Ricerche locali perse', description: 'Chi cerca prodotti tipici o servizi nella tua zona non ti trova.' },
      { title: 'Sito non ottimizzato', description: 'Hai un sito ma non compare mai nelle ricerche. È come non averlo.' },
      { title: 'Zero strategia', description: 'Non sai quali parole chiave intercettare. Pubblichi contenuti a caso.' },
    ],
    IndustrialHub: [
      { title: 'Competitor più visibili', description: 'I tuoi concorrenti compaiono prima di te su Google. Prendono i lead migliori.' },
      { title: 'Keyword B2B ignorate', description: 'Non compari per le ricerche dei buyer. Perdi opportunità commerciali.' },
      { title: 'Contenuti tecnici assenti', description: 'I tuoi potenziali clienti cercano info tecniche. Tu non le offri.' },
    ],
    FoodValley: [
      { title: 'Prodotti introvabili', description: 'Chi cerca i tuoi prodotti tipici online non ti trova. Trovano marketplace.' },
      { title: 'Storytelling non indicizzato', description: 'La tua storia è unica ma Google non la mostra. Nessuno la legge.' },
      { title: 'Competitor più furbi', description: 'Chi ha investito in SEO ti supera. Anche se i tuoi prodotti sono migliori.' },
    ],
    ProvinceCapital: [
      { title: 'Concorrenza agguerrita', description: 'In città tutti vogliono essere primi su Google. Senza strategia resti indietro.' },
      { title: 'Budget sprecato in Ads', description: 'Paghi per ogni clic. La SEO ti porta traffico organico e gratuito.' },
      { title: 'Traffico che non converte', description: 'Hai visite ma pochi contatti. Il tuo sito non è ottimizzato per convertire.' },
    ],
    SuburbanGrowth: [
      { title: 'Crescita bloccata', description: 'Hai raggiunto il massimo dal passaparola. Per crescere devi farti trovare online.' },
      { title: 'Area di copertura limitata', description: 'I clienti delle zone vicine non sanno che esisti. La SEO locale ti espande.' },
      { title: 'Sito datato', description: 'Il tuo sito è vecchio e lento. Google lo penalizza.' },
    ],
    PlainsSmall: [
      { title: 'Opportunità sprecate', description: 'Nella tua zona la concorrenza online è bassa. Basterebbe poco per dominare.' },
      { title: 'Nessuna presenza digitale', description: 'Non hai sito o è abbandonato. Chi ti cerca non ti trova.' },
      { title: 'Solo offline', description: 'Ti affidi solo al negozio fisico. Ma i clienti cercano prima su Google.' },
    ],
    MetroBologna: [
      { title: 'Mercato iper-competitivo', description: 'Nell\'area bolognese tutti investono in SEO. Senza strategia sei invisibile.' },
      { title: 'Costi Ads insostenibili', description: 'Il CPC è altissimo. La SEO offre un ROI migliore sul lungo termine.' },
      { title: 'Autorevolezza da costruire', description: 'I clienti cercano i migliori. Devi costruire reputazione online.' },
    ],
  },
  'siti-web': {
    MountainSmall: [
      { title: 'Sito lento con connessioni deboli', description: 'In montagna la connessione è spesso instabile. Il tuo sito deve caricarsi veloce anche con poca banda.' },
      { title: 'Turisti che non ti trovano', description: 'Chi cerca un albergo, un rifugio o un\'esperienza in montagna finisce sui portali. Il tuo sito non esiste.' },
      { title: 'Mobile ignorato', description: 'I turisti cercano tutto dal telefono. Se il tuo sito non funziona bene su mobile, perdi prenotazioni.' },
    ],
    HillMedium: [
      { title: 'Sito fermo al 2010', description: 'Il tuo sito sembra vecchio e non rappresenta la qualità di quello che offri.' },
      { title: 'Nessuna prenotazione online', description: 'Agriturismi, cantine, esperienze: i clienti vogliono prenotare dal sito. Tu li costringi a telefonare.' },
      { title: 'Immagini che non rendono giustizia', description: 'Il paesaggio e i tuoi prodotti meritano foto professionali e un sito che li valorizzi.' },
    ],
    IndustrialHub: [
      { title: 'Sito aziendale datato', description: 'Il tuo sito corporate è un biglietto da visita dimenticato. I buyer B2B lo giudicano in 3 secondi.' },
      { title: 'Catalogo prodotti assente', description: 'I tuoi clienti internazionali vogliono sfogliare i prodotti online con schede tecniche. Tu mandi PDF via email.' },
      { title: 'Zero credibilità internazionale', description: 'Esporti ma il sito è solo in italiano e non comunica professionalità ai mercati esteri.' },
    ],
    FoodValley: [
      { title: 'Il prodotto parla, il sito no', description: 'Fai prodotti eccezionali ma il tuo sito non racconta la filiera, la tradizione, la qualità.' },
      { title: 'Nessuna vetrina per i riconoscimenti', description: 'DOP, IGP, premi: li hai conquistati ma il sito non li mette in evidenza.' },
      { title: 'Visite in azienda perse', description: 'Chi cerca esperienze enogastronomiche non trova il tuo sito. Trovi solo i soliti portali.' },
    ],
    ProvinceCapital: [
      { title: 'Concorrenza con siti professionali', description: 'I tuoi competitor hanno siti moderni e curati. Il tuo sembra amatoriale al confronto.' },
      { title: 'Nessun contatto dal sito', description: 'Hai un sito ma non genera richieste. Le persone guardano e se ne vanno.' },
      { title: 'Informazioni sparse ovunque', description: 'Orari su Google, prezzi su Facebook, servizi su WhatsApp. Ti serve un punto unico e aggiornato.' },
    ],
    SuburbanGrowth: [
      { title: 'Crescita senza presenza online', description: 'La tua attività cresce ma il sito non la rappresenta. I nuovi residenti cercano online prima di tutto.' },
      { title: 'Sito generico senza identità', description: 'Il tuo sito è un template uguale a mille altri. Non trasmette cosa ti rende diverso.' },
      { title: 'Difficile da aggiornare', description: 'Ogni modifica al sito richiede il webmaster. Vorresti poter aggiornare offerte e news in autonomia.' },
    ],
    PlainsSmall: [
      { title: 'Nessun sito web', description: 'La tua attività vive di passaparola ma chi ti cerca su Google trova solo una pagina vuota.' },
      { title: 'Sito fatto in casa', description: 'L\'hai costruito con un builder gratuito anni fa. Si vede, e non ispira fiducia.' },
      { title: 'Non mobile-friendly', description: 'Il sito si vede bene solo da desktop. Ma i tuoi clienti navigano tutti da smartphone.' },
    ],
    MetroBologna: [
      { title: 'Sito che non converte', description: 'Hai traffico ma poche conversioni. Il sito non guida l\'utente verso il contatto o l\'acquisto.' },
      { title: 'Performance scadenti', description: 'Il sito è lento e pesante. Gli utenti escono e Google ti penalizza nei risultati.' },
      { title: 'Design non all\'altezza', description: 'Nell\'area metropolitana le aspettative sono alte. Un sito mediocre ti fa sembrare poco professionale.' },
    ],
  },
  'landing-pages': {
    MountainSmall: [
      { title: 'Campagne senza destinazione', description: 'Fai pubblicità su Facebook ma mandi le persone alla home del sito. Il messaggio si perde.' },
      { title: 'Offerte stagionali sprecate', description: 'Settimana bianca, estate in quota: le tue promozioni non hanno una pagina dedicata che converta.' },
      { title: 'Lead turistici persi', description: 'I turisti interessati non trovano un percorso chiaro per prenotare. Vanno su Booking.' },
    ],
    HillMedium: [
      { title: 'Eventi senza prenotazioni', description: 'Organizzi degustazioni e eventi ma non hai una pagina dedicata per raccogliere iscrizioni.' },
      { title: 'Promozioni invisibili', description: 'Lanci un\'offerta speciale ma la comunichi solo sui social. Chi arriva dal web non la trova.' },
      { title: 'Contatti generici', description: 'Il form di contatto è generico. Non catturi le informazioni giuste per qualificare i lead.' },
    ],
    IndustrialHub: [
      { title: 'Fiere senza follow-up', description: 'Partecipi a fiere e investi migliaia di euro ma non hai una landing per raccogliere contatti mirati.' },
      { title: 'Campagne Ads che bruciano budget', description: 'Investi in Google Ads ma mandi tutto alla homepage. Il costo per lead è alle stelle.' },
      { title: 'Lancio prodotti senza impatto', description: 'Lanci un nuovo prodotto industriale ma non hai una pagina che ne spieghi i vantaggi e raccolga richieste.' },
    ],
    FoodValley: [
      { title: 'Promozioni stagionali disperse', description: 'Cesti di Natale, offerte estive, nuovi raccolti: ogni promozione merita una pagina dedicata.' },
      { title: 'Lanci DOP/IGP senza vetrina', description: 'Ottieni una certificazione importante ma non hai una pagina per comunicarla e generare ordini.' },
      { title: 'Degustazioni vuote', description: 'Organizzi visite e degustazioni ma le prenotazioni arrivano solo dal passaparola. Online zero.' },
    ],
    ProvinceCapital: [
      { title: 'Troppi messaggi, zero focus', description: 'La tua homepage parla di tutto. Ti serve una pagina per ogni servizio, chiara e focalizzata.' },
      { title: 'Campagne social senza conversione', description: 'Investi in social ads ma senza una landing ottimizzata il ritorno è deludente.' },
      { title: 'Preventivi non richiesti', description: 'Vorresti più richieste di preventivo ma il tuo sito non ha un percorso chiaro per ottenerle.' },
    ],
    SuburbanGrowth: [
      { title: 'Apertura nuova sede senza buzz', description: 'Stai aprendo o espandendo ma non hai una pagina per generare interesse e raccogliere contatti.' },
      { title: 'Servizi specifici nascosti', description: 'Offri servizi diversi per target diversi ma li presenti tutti insieme. Ogni target merita la sua pagina.' },
      { title: 'Promozioni locali inefficaci', description: 'Fai volantinaggio o ads locali ma senza una destinazione digitale i contatti si perdono.' },
    ],
    PlainsSmall: [
      { title: 'Nessuna pagina promozionale', description: 'Le tue offerte vivono solo su un post Facebook che dopo un giorno nessuno vede più.' },
      { title: 'Contatti solo telefonici', description: 'Chi vede una tua pubblicità deve chiamarti. Ma la sera, il weekend, in pausa pranzo, non può.' },
      { title: 'Primo approccio al digitale', description: 'Non hai un sito completo? Una landing page è il modo più veloce ed economico per partire.' },
    ],
    MetroBologna: [
      { title: 'A/B testing inesistente', description: 'Investi migliaia in campagne ma non testi mai varianti. Stai buttando soldi senza saperlo.' },
      { title: 'Funnel di vendita spezzato', description: 'Il percorso dall\'annuncio alla conversione ha troppi passaggi. I potenziali clienti abbandonano.' },
      { title: 'Landing generiche', description: 'Usi la stessa pagina per campagne diverse. Ogni campagna ha bisogno di un messaggio su misura.' },
    ],
  },
  'sviluppo-software': {
    MountainSmall: [
      { title: 'Gestione manuale delle prenotazioni', description: 'Quaderni, Excel, WhatsApp. D\'inverno ti perdi nelle prenotazioni per la stagione sciistica.' },
      { title: 'Nessun sistema per la stagionalità', description: 'Prezzi, disponibilità, turni del personale cambiano ogni stagione. Gestisci tutto a mano.' },
      { title: 'Dati sparsi ovunque', description: 'Fatture nel cassetto, clienti su un foglio, fornitori a memoria. Un gestionale ti semplifica la vita.' },
    ],
    HillMedium: [
      { title: 'Tracciabilità artigianale', description: 'Produci vino, olio, miele? La tracciabilità di filiera è obbligatoria ma la fai ancora su carta.' },
      { title: 'Gestione agriturismi complessa', description: 'Camere, ristorante, eventi, fattoria didattica: ogni attività ha il suo foglio Excel.' },
      { title: 'Nessun controllo sui costi', description: 'Non sai quali prodotti o servizi sono realmente profittevoli. Ti manca un sistema di analisi.' },
    ],
    IndustrialHub: [
      { title: 'Produzione senza controllo', description: 'Monitori la produzione con fogli cartacei. Scarti, fermi macchina e ritardi non vengono tracciati.' },
      { title: 'Supply chain manuale', description: 'Ordini ai fornitori, magazzino, spedizioni: ogni passaggio è un collo di bottiglia gestito a mano.' },
      { title: 'Documentazione export complicata', description: 'Certificati, bolle doganali, compliance: ogni mercato estero ha le sue regole e tu le gestisci in Word.' },
    ],
    FoodValley: [
      { title: 'Conformità HACCP su carta', description: 'Registri temperature, pulizie, lotti ancora su moduli cartacei. Un errore e rischi sanzioni.' },
      { title: 'Gestione lotti impossibile', description: 'Tracciare un lotto dalla materia prima al prodotto finito richiede ore di lavoro manuale.' },
      { title: 'Ordini e produzione scollegati', description: 'Gli ordini arrivano da un canale, la produzione va per conto suo. Nessuna pianificazione integrata.' },
    ],
    ProvinceCapital: [
      { title: 'Processi interni inefficienti', description: 'Approvazioni, richieste interne, report: tutto via email. Si perde tempo e si dimenticano cose.' },
      { title: 'Software che non si parlano', description: 'Usi 5 strumenti diversi che non si integrano. Copi e incolli dati da uno all\'altro.' },
      { title: 'Crescita bloccata dai processi', description: 'La tua azienda è cresciuta ma i processi sono rimasti quelli di quando eravate in tre.' },
    ],
    SuburbanGrowth: [
      { title: 'Gestione multi-sede caotica', description: 'Hai più sedi o punti vendita ma ogni sede lavora con i propri strumenti. Nessuna visione d\'insieme.' },
      { title: 'Reportistica manuale', description: 'Per avere i numeri del mese devi chiedere a tre persone e mettere insieme fogli diversi.' },
      { title: 'Automazione zero', description: 'Attività ripetitive che i tuoi dipendenti fanno ogni giorno potrebbero essere automatizzate.' },
    ],
    PlainsSmall: [
      { title: 'Tutto in testa al titolare', description: 'Se ti ammali si ferma tutto. Le procedure non sono scritte, figuriamoci digitalizzate.' },
      { title: 'Fatturazione e contabilità base', description: 'Usi ancora il foglio Excel del commercialista. Ogni scadenza è uno stress.' },
      { title: 'Nessun CRM', description: 'I contatti dei clienti sono sparsi tra telefono, email e biglietti da visita.' },
    ],
    MetroBologna: [
      { title: 'Piattaforme legacy da sostituire', description: 'Il gestionale ha 15 anni e il fornitore non lo supporta più. Ogni aggiornamento è un rischio.' },
      { title: 'Integrazioni complesse', description: 'Devi collegare ERP, CRM, e-commerce, BI. Servono API custom e architetture scalabili.' },
      { title: 'Time to market troppo lungo', description: 'Sviluppare nuove funzionalità richiede mesi. I competitor si muovono più velocemente.' },
    ],
  },
  'sviluppo-app-mobile': {
    MountainSmall: [
      { title: 'Informazioni turistiche frammentate', description: 'Sentieri, impianti, meteo, eventi: i turisti devono cercare su 10 siti diversi. Un\'app risolve tutto.' },
      { title: 'Nessun canale diretto con i visitatori', description: 'I turisti arrivano, spendono e ripartono. Non hai modo di ricontattarli o fidelizzarli.' },
      { title: 'Emergenze senza comunicazione', description: 'Chiusura impianti, allerta meteo, variazioni percorsi: non hai un canale push per avvisare in tempo reale.' },
    ],
    HillMedium: [
      { title: 'Esperienze non prenotabili', description: 'Degustazioni, visite guidate, percorsi: i clienti vogliono prenotare e pagare dal telefono.' },
      { title: 'Mappa e percorsi assenti', description: 'I visitatori vogliono esplorare il territorio. Un\'app con mappe e itinerari li guida da te.' },
      { title: 'Fidelizzazione inesistente', description: 'I clienti vengono una volta e non tornano. Un\'app con notifiche e offerte li riporta da te.' },
    ],
    IndustrialHub: [
      { title: 'Operai senza strumenti mobili', description: 'I tuoi tecnici compilano rapportini cartacei. Un\'app di field service digitalizza tutto.' },
      { title: 'Magazzino non tracciato', description: 'Inventario, movimentazioni, picking: tutto a mano. Un\'app con scanner velocizza le operazioni.' },
      { title: 'Manutenzione reattiva', description: 'Intervieni solo quando qualcosa si rompe. Un\'app di manutenzione programmata riduce i fermi macchina.' },
    ],
    FoodValley: [
      { title: 'Tracciabilità non comunicata', description: 'Il consumatore vuole sapere da dove viene il cibo. Un\'app che mostra la filiera crea fiducia.' },
      { title: 'Ordini B2B ancora al telefono', description: 'Ristoranti e negozi ti ordinano chiamando. Un\'app dedicata semplifica e velocizza tutto.' },
      { title: 'Nessun programma fedeltà', description: 'I clienti comprano i tuoi prodotti ma non hai modo di premiarli e farli tornare.' },
    ],
    ProvinceCapital: [
      { title: 'Clienti persi dalle catene', description: 'Le grandi catene hanno app con punti, offerte, prenotazioni. Tu no, e i clienti se ne vanno.' },
      { title: 'Prenotazioni appuntamenti caotiche', description: 'Telefonate, messaggi, no-show. Un\'app con booking e reminder risolve il problema.' },
      { title: 'Comunicazione one-way', description: 'Comunichi solo via social ma non tutti li seguono. Le notifiche push arrivano sempre.' },
    ],
    SuburbanGrowth: [
      { title: 'Servizi a domicilio senza gestione', description: 'Consegne, interventi, appuntamenti a casa: coordini tutto a mano tra telefonate e messaggi.' },
      { title: 'Community locale disconnessa', description: 'I nuovi residenti non conoscono le attività locali. Un\'app di quartiere crea connessione.' },
      { title: 'Feedback dei clienti non raccolto', description: 'Non sai cosa pensano i tuoi clienti. Un\'app con recensioni e sondaggi ti dà risposte concrete.' },
    ],
    PlainsSmall: [
      { title: 'Servizio clienti solo in orario', description: 'I clienti vorrebbero controllare ordini, prenotazioni, stato lavori anche la sera o il weekend.' },
      { title: 'Nessuna presenza mobile', description: 'I tuoi clienti passano ore sullo smartphone ma tu non sei tra le app che usano.' },
      { title: 'Comunicazioni perse', description: 'Avvisi, promozioni, novità: li pubblichi su Facebook ma raggiungono il 5% dei tuoi clienti.' },
    ],
    MetroBologna: [
      { title: 'App competitor già sul mercato', description: 'I tuoi concorrenti hanno già un\'app. Ogni giorno che aspetti perdi terreno.' },
      { title: 'Esperienza utente frammentata', description: 'I clienti usano il sito, chiamano, mandano email. Un\'app unifica tutto in un unico punto.' },
      { title: 'Dati mobile non sfruttati', description: 'Geolocalizzazione, abitudini d\'uso, preferenze: un\'app ti dà insight che il sito non può darti.' },
    ],
  },
  // Add more service problem templates as needed...
};

// =============================================================================
// MAIN PAGE DATA BUILDER
// =============================================================================

export function buildServicePageData(
  serviceSlug: string,
  citySlug: string
): ServicePageData | null {
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(citySlug);

  if (!service || !location) {
    return null;
  }

  // Check if city qualifies for this service
  if (location.population < service.minPopulation) {
    return null;
  }

  const archetype = assignArchetype(location);
  const archetypeData = getArchetype(archetype);
  const baseUrl = 'https://manueldeceglie.it';

  // Generate SEO data
  const title = generateServiceTitle(service, location.name);
  const description = generateServiceDescription(service, location.name);
  const h1 = generateServiceH1(service, location.name);
  const keywords = generateServiceKeywords(service, location.name);
  const canonical = `${baseUrl}/${service.slug}/${location.slug}`;

  // Build OG image URL
  const ogUrl = new URL(`${baseUrl}/api/og`);
  ogUrl.searchParams.set('title', title);
  ogUrl.searchParams.set('subtitle', description.slice(0, 100));
  ogUrl.searchParams.set('badge', service.name);

  const seo: ServicePageSeo = {
    title,
    description,
    canonical,
    keywords,
    h1,
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [{
        url: ogUrl.toString(),
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl.toString()],
    },
  };

  // Generate hero content based on archetype
  const heroTemplate = HERO_TEMPLATES[serviceSlug]?.[archetype] || {};
  const hero: ServicePageHero = {
    badge: heroTemplate.badge || `${service.name} a ${location.name}`,
    title: h1,
    subtitle: heroTemplate.subtitle || description,
    ctaText: 'Richiedi Preventivo Gratuito',
    ctaHref: '#contatti',
    secondaryCtaText: 'Vedi i Prezzi',
    secondaryCtaHref: '#prezzi',
  };

  // Generate problems/solutions (if available for this service)
  const problems = PROBLEM_TEMPLATES[serviceSlug]?.[archetype];

  // Generate FAQ
  const faq = generateServiceFaq(service, location.name, archetype);

  // Get nearby cities
  const nearby = getNearbyCities(location.slug, 6);
  const nearbyCities = nearby.map(loc => ({
    slug: loc.slug,
    name: loc.name,
    province: loc.province,
  }));

  // Get related services
  const relatedServiceConfigs = service.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter((s): s is ServiceConfig => s !== undefined && s.hasCityPages);

  const relatedServices = relatedServiceConfigs.map(s => ({
    slug: s.slug,
    name: s.name,
    description: s.shortDescription,
  }));

  return {
    slug: `${serviceSlug}-${citySlug}`,
    citySlug: location.slug,
    serviceSlug: service.slug,
    cityName: location.name,
    province: location.province,
    region: location.region,
    population: location.population,
    geo: location.geo,
    serviceName: service.name,
    serviceCategory: service.category,
    archetype,
    archetypeName: archetypeData.name,
    seo,
    hero,
    problems,
    pricing: service.pricing,
    faq,
    nearbyCities,
    relatedServices,
    localContext: archetypeData.description,
    whyHere: `Supporto dedicato alle realtà di ${location.name}.`,
    marketInsight: `Analisi di mercato per ${service.name} in zona ${location.province}.`,
    deliverables: service.pricing[0]?.features || [],
    archetypeFaq: [],
    active: true,
  };
}

// =============================================================================
// BATCH PAGE GENERATION
// =============================================================================

import { LOCATIONS } from '@/data/locations';
import { getServicesWithCityPages } from '@/data/services-config';

/**
 * Generate all valid page combinations for a service
 */
export function generateAllPagesForService(serviceSlug: string): ServicePageData[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];

  const pages: ServicePageData[] = [];

  for (const location of LOCATIONS) {
    if (location.population >= service.minPopulation) {
      const pageData = buildServicePageData(serviceSlug, location.slug);
      if (pageData) {
        pages.push(pageData);
      }
    }
  }

  return pages;
}

/**
 * Generate all valid page slugs for static params
 * OPTIMIZATION: Only generate Priority 1 cities to keep build times fast.
 * Other cities will be generated on-demand (ISR).
 */
export function generateStaticParamsForService(serviceSlug: string): Array<{ city: string }> {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];

  return LOCATIONS
    .filter(loc => loc.population >= service.minPopulation && loc.priority === 1)
    .map(loc => ({ city: loc.slug }));
}

/**
 * Get total page count across all services
 */
export function getTotalPageCount(): {
  services: Record<string, number>;
  total: number;
} {
  const services: Record<string, number> = {};
  let total = 0;

  for (const service of getServicesWithCityPages()) {
    const count = LOCATIONS.filter(
      loc => loc.population >= service.minPopulation
    ).length;
    services[service.slug] = count;
    total += count;
  }

  return { services, total };
}
