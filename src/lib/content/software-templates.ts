import { MarketArchetype } from '@/data/archetypes';
import { TokenReplacements, replaceTokens, createReplacements, buildCanonicalUrl, buildKeywords } from '@/lib/content/tokens';
import { pickVariant, spintaxParse, getPopulationTier, getZoneContext } from '@/lib/content/spintax';

interface SoftwareSolution {
  text: string;
  value: string;
}

export interface SoftwarePageContentTemplates {
  hero: {
    h1: string;
    sub: string;
    ctaText: string;
    trustSignal: string;
  };
  seo: {
    title: string;
    description: string;
    h1: string;
    keywords: string[];
  };
  diagnostica: {
    badge: string;
    title: string;
    problems: string[];
    solutions: SoftwareSolution[];
  };
  goodInvestment: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  faq: Array<{ q: string; a: string }>;
}

type CopyInitialBucket = 'A_L' | 'M_Z';

type SoftwareHeroTemplate = { h1: string; sub: string; ctaText: string; trustSignal: string };
type SoftwareDiagnosticaTemplate = { badge: string; title: string; problems: string[]; solutions: { text: string; value: string }[] };
type SoftwareGoodInvestmentTemplate = { title: string; titleHighlight: string; subtitle: string };
type SoftwareFaqTemplate = Array<{ q: string; a: string }>;

function normalizeCityInitial(cityName: string): string {
  const trimmed = cityName.trim();
  if (!trimmed) return '';
  const normalized = trimmed.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return normalized.charAt(0).toUpperCase();
}

function getCopyInitialBucketFromCityName(cityName: string): CopyInitialBucket {
  const initial = normalizeCityInitial(cityName);
  const charCode = initial.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90 && charCode <= 76) {
    return 'A_L';
  }
  return 'M_Z';
}

function getCityNameFromReplacements(replacements: TokenReplacements): string {
  const raw = replacements.cityName;
  return typeof raw === 'string' ? raw : raw == null ? '' : String(raw);
}

const SOFTWARE_HERO_TEMPLATES: Record<MarketArchetype, SoftwareHeroTemplate> = {
  MountainSmall: {
    h1: "A {{CityName}} creo software che fanno il lavoro noioso al posto tuo",
    sub: "Smetti di perdere tempo a compilare carte e fogli. Ti costruisco strumenti su misura che automatizzano le tue operazioni quotidiane.",
    ctaText: 'Automatizza Ora',
    trustSignal: 'Sviluppo software pratico per chi lavora sodo',
  },
  HillMedium: {
    h1: "A {{CityName}} il software deve risolvere i tuoi problemi, non crearne altri",
    sub: "Hai un processo ripetitivo? Un file Excel che ti fa impazzire? Ti creo un programma su misura che lo gestisce in un clic.",
    ctaText: 'Analisi Gratuita',
    trustSignal: 'Soluzioni informatiche su misura per PMI',
  },
  IndustrialHub: {
    h1: "A {{CityName}} digitalizzo i tuoi flussi di lavoro con software dedicati",
    sub: "Dalla lettura automatica delle email alla creazione di report. Sviluppo software che collegano i tuoi reparti e velocizzano il lavoro.",
    ctaText: 'Migliora l\'Efficienza',
    trustSignal: 'Sviluppo software per automazione processi',
  },
  FoodValley: {
    h1: "A {{CityName}} metto il turbo alla tua attività con software custom",
    sub: "Gestire ordini, fornitori e clienti porta via troppo tempo? Creo il software che lo fa in automatico, esattamente come vuoi tu.",
    ctaText: 'Scopri come fare',
    trustSignal: 'Automazione digitale per imprese del territorio',
  },
  ProvinceCapital: {
    h1: "A {{CityName}} sviluppo il software che non trovi in commercio",
    sub: "Non ti serve un gestionale gigante. Ti serve un tool specifico che risolva quel problema che ti ruba ore ogni giorno. Io lo costruisco.",
    ctaText: 'Parla con uno Sviluppatore',
    trustSignal: 'Sviluppo Web App e Tool a {{CityName}}',
  },
  SuburbanGrowth: {
    h1: "A {{CityName}} elimino l'errore umano con automazioni intelligenti",
    sub: "Copia-incolla, data entry, controllo dati: sono lavori per robot, non per persone. Sviluppo software che automatizzano la routine.",
    ctaText: 'Richiedi Preventivo',
    trustSignal: 'Partner tecnologico per aziende dinamiche',
  },
  PlainsSmall: {
    h1: "A {{CityName}} basta carta e file persi: passa al digitale su misura",
    sub: "Metto ordine nei tuoi dati. Un unico software semplice per gestire clienti, preventivi o qualsiasi cosa tu debba tracciare.",
    ctaText: 'Digitalizza Tutto',
    trustSignal: 'Software semplici ed efficaci',
  },
  MetroBologna: {
    h1: "A {{CityName}} sviluppo piattaforme e tool per velocizzare il tuo business",
    sub: "In un mercato veloce, chi automatizza vince. Creo integrazioni, dashboard e software custom per darti un vantaggio competitivo.",
    ctaText: 'Consulenza Software',
    trustSignal: 'Sviluppo Full-Stack e Automazioni',
  },
};

const SOFTWARE_HERO_TEMPLATES_BY_INITIAL: Partial<Record<MarketArchetype, Record<CopyInitialBucket, SoftwareHeroTemplate>>> = {
  MountainSmall: {
    A_L: {
      h1: 'A {{CityName}} creo software semplici che fanno il lavoro noioso al posto tuo',
      sub: 'Basta perdere tempo a ricopiare dati dalla carta al computer. Ti costruisco strumenti su misura che funzionano anche offline, automatizzano le operazioni quotidiane e ti fanno risparmiare ore ogni settimana.',
      ctaText: 'Automatizza Ora',
      trustSignal: 'Software pratici per chi lavora sodo a {{CityName}}',
    },
    M_Z: {
      h1: 'A {{CityName}} basta carta e file persi: passa al digitale su misura',
      sub: 'Smetti di cercare quel vecchio preventivo o quella nota. Creo un software essenziale che funziona anche senza internet, mette ordine nei tuoi dati e ti fa trovare qualsiasi cosa in un attimo.',
      ctaText: 'Automatizza Ora',
      trustSignal: 'Digitalizzazione semplice per attività di montagna',
    },
  },
  HillMedium: {
    A_L: {
      h1: 'A {{CityName}} il software deve risolvere i tuoi problemi, non crearne altri',
      sub: 'Hai un processo ripetitivo? Un file Excel che ti fa impazzire? Ti creo un programma su misura che ricalca esattamente il tuo modo di lavorare, senza costringerti a cambiare le tue abitudini.',
      ctaText: 'Analisi Gratuita',
      trustSignal: 'Soluzioni informatiche su misura per PMI a {{CityName}}',
    },
    M_Z: {
      h1: 'A {{CityName}} automatizza i processi ripetitivi con software custom',
      sub: 'Perché cambiare il tuo modo di lavorare per colpa di un programma? Ascolto il tuo problema e scrivo il codice per risolverlo. Un clic fa il lavoro di dieci passaggi.',
      ctaText: 'Analisi Gratuita',
      trustSignal: 'Software personalizzati per artigiani e agriturismi',
    },
  },
  IndustrialHub: {
    A_L: {
      h1: 'A {{CityName}} digitalizzo i tuoi flussi di lavoro con software dedicati',
      sub: 'Dalla lettura automatica delle email alla creazione di report. Sviluppo software che collegano i tuoi reparti, eliminano la carta e velocizzano il lavoro. Stop al data entry manuale.',
      ctaText: 'Migliora l\'Efficienza',
      trustSignal: 'Sviluppo software per automazione processi a {{CityName}}',
    },
    M_Z: {
      h1: 'A {{CityName}} collego ufficio e reparti con automazioni intelligenti',
      sub: 'Basta stampare fogli per portarli in un altro ufficio. Creo integrazioni che fanno viaggiare i dati da soli tra i reparti, con notifiche automatiche e monitoraggio stato in tempo reale.',
      ctaText: 'Migliora l\'Efficienza',
      trustSignal: 'Integrazioni e flussi digitali per aziende industriali',
    },
  },
  FoodValley: {
    A_L: {
      h1: 'A {{CityName}} metto il turbo alla tua attività con software custom',
      sub: 'Gestire ordini, fornitori e clienti porta via troppo tempo? Creo il software che raccoglie ordini da tutti i canali, gestisce scadenze e genera documenti in automatico, esattamente come vuoi tu.',
      ctaText: 'Scopri come fare',
      trustSignal: 'Automazione digitale per imprese food a {{CityName}}',
    },
    M_Z: {
      h1: 'A {{CityName}} organizza ordini e fornitori con software su misura',
      sub: 'Ricevi ordini via mail, whatsapp e telefono e ne perdi qualcuno? Sviluppo un sistema centralizzato che raccoglie tutto, ti avvisa su scadenze e riordini, e genera etichette in un clic.',
      ctaText: 'Scopri come fare',
      trustSignal: 'Software gestionali per aziende enogastronomiche',
    },
  },
  ProvinceCapital: {
    A_L: {
      h1: 'A {{CityName}} sviluppo software gestionali su misura che semplificano davvero il lavoro',
      sub: 'Se oggi lavori con Excel, email e procedure a mano, stai pagando in tempo e in errori. Creo un gestionale personalizzato che mette ordine nei dati, automatizza i passaggi ripetitivi e collega i tuoi strumenti.',
      ctaText: 'Parla con uno Sviluppatore',
      trustSignal: 'Software gestionali, CRM e automazioni a {{CityName}}',
    },
    M_Z: {
      h1: 'A {{CityName}} costruisco tool e automazioni che eliminano il copia-incolla',
      sub: 'Niente software giganti che usi al 10%. Ti sviluppo un programma leggero, con i tasti giusti, che genera documenti, valida i dati e aggiorna report in automatico: tu lavori, il software corre.',
      ctaText: 'Parla con uno Sviluppatore',
      trustSignal: 'Web app e tool custom a {{CityName}} (codice tuo)',
    },
  },
  SuburbanGrowth: {
    A_L: {
      h1: 'A {{CityName}} elimino l\'errore umano con automazioni intelligenti',
      sub: 'Copia-incolla, data entry, controllo dati: sono lavori per robot, non per persone. Sviluppo software che automatizzano la routine e ti permettono di gestire più lavoro senza impazzire.',
      ctaText: 'Richiedi Preventivo',
      trustSignal: 'Partner tecnologico per aziende dinamiche a {{CityName}}',
    },
    M_Z: {
      h1: 'A {{CityName}} scala il tuo business con software che crescono con te',
      sub: 'Quello che facevi a mano con 10 clienti, con 100 è impossibile. Creo software scalabili con CRM, promemoria automatici e processi guidati che chiunque può usare subito.',
      ctaText: 'Richiedi Preventivo',
      trustSignal: 'Software scalabili per attività in crescita',
    },
  },
  PlainsSmall: {
    A_L: {
      h1: 'A {{CityName}} basta carta e file persi: passa al digitale su misura',
      sub: 'Metto ordine nei tuoi dati. Un unico software semplice per gestire clienti, preventivi o qualsiasi cosa tu debba tracciare. Database unico, stato pagamenti chiaro, rubrica intelligente.',
      ctaText: 'Digitalizza Tutto',
      trustSignal: 'Software semplici ed efficaci per artigiani a {{CityName}}',
    },
    M_Z: {
      h1: 'A {{CityName}} investi nella tranquillità con software su misura',
      sub: 'Hai scrivania e computer pieni di file chiamati "finale_v2_vero"? Creo un programma semplice che mette ordine senza impazzire. Interfaccia pulita, solo le cose che usi, zero stress tecnologico.',
      ctaText: 'Digitalizza Tutto',
      trustSignal: 'Digitalizzazione semplice per piccole attività',
    },
  },
  MetroBologna: {
    A_L: {
      h1: 'A {{CityName}} sviluppo piattaforme e tool per velocizzare il tuo business',
      sub: 'In un mercato veloce, chi automatizza vince. Creo integrazioni, dashboard e software custom per darti un vantaggio competitivo. Integrazione totale Web-Ufficio tramite API.',
      ctaText: 'Consulenza Software',
      trustSignal: 'Sviluppo Full-Stack e Automazioni a {{CityName}}',
    },
    M_Z: {
      h1: 'A {{CityName}} la tecnologia ti fa eccellere con software unici',
      sub: 'I tuoi processi sono lenti rispetto a chi usa software moderni? Sviluppo tool specifici per le tue idee, risposte automatiche e portali self-service. Arrivi prima sul mercato.',
      ctaText: 'Consulenza Software',
      trustSignal: 'Software innovativi per area metropolitana bolognese',
    },
  },
};

const SOFTWARE_DIAGNOSTICA_TEMPLATES: Record<MarketArchetype, SoftwareDiagnosticaTemplate> = {
  MountainSmall: {
    badge: 'Problemi Comuni',
    title: 'Perdi tempo in operazioni che un computer farebbe in un secondo?',
    problems: [
      'Devi ricopiare dati dalla carta al computer ogni sera',
      'Perdi ore a cercare quel vecchio preventivo o quella nota',
      'Usi software complicati di cui usi solo il 10% delle funzioni',
      'Se manca internet non riesci a lavorare',
    ],
    solutions: [
      { text: 'Digitalizzazione: inserisci i dati una volta sola, da dove vuoi', value: 'Risparmi ore ogni settimana' },
      { text: 'Archivio intelligente: trovi qualsiasi cosa digitando due lettere', value: 'Tutto a portata di mano' },
      { text: 'Software essenziale: costruisco solo i tasti che ti servono', value: 'Facilissimo da usare' },
      { text: 'Funziona anche offline: lavori sempre, sincronizzi dopo', value: 'Nessun fermo lavoro' },
    ],
  },
  HillMedium: {
    badge: 'Analisi Processi',
    title: 'Il tuo metodo di lavoro è unico, perché il software deve essere standard?',
    problems: [
      'Ti adatti tu al software invece che il contrario',
      'Per fare una cosa semplice devi fare dieci passaggi inutili',
      'Hai dati sparsi su Excel, Whatsapp e Post-it',
      'Fai fatica a capire se stai guadagnando o perdendo tempo',
    ],
    solutions: [
      { text: 'Sviluppo su misura: ricalco esattamente il tuo modo di lavorare', value: 'Nessuna curva di apprendimento' },
      { text: 'Automazione: un clic fa il lavoro di dieci passaggi', value: 'Velocità operativa' },
      { text: 'Centralizzazione: tutto in un unico posto sicuro', value: 'Ordine mentale e pratico' },
      { text: 'Dashboard semplici: vedi subito i numeri che contano', value: 'Controllo totale' },
    ],
  },
  IndustrialHub: {
    badge: 'Efficienza',
    title: 'Ufficio e Reparti non si parlano? C\'è troppa manualità?',
    problems: [
      'Devi stampare fogli per portarli in un altro ufficio',
      'Qualcuno deve inserire a mano dati che sono già digitali altrove',
      'Si perdono informazioni nel passaggio tra una persona e l\'altra',
      'Non sai mai a che punto è una pratica o un lavoro',
    ],
    solutions: [
      { text: 'Flussi digitali: i dati viaggiano da soli tra i reparti', value: 'Addio carta e stampanti' },
      { text: 'Integrazioni: collego i tuoi software attuali tra loro', value: 'Stop al data entry manuale' },
      { text: 'Notifiche automatiche: il sistema avvisa chi di dovere', value: 'Comunicazione perfetta' },
      { text: 'Monitoraggio stato: sai sempre chi sta facendo cosa', value: 'Visione completa' },
    ],
  },
  FoodValley: {
    badge: 'Organizzazione',
    title: 'Troppi ordini, troppi fornitori, troppa confusione?',
    problems: [
      'Ricevi ordini via mail, whatsapp e telefono e ne perdi qualcuno',
      'Devi controllare scadenze o forniture manualmente una per una',
      'Creare documenti di trasporto o etichette è un lavoro lungo',
      'Fai fatica a tenere traccia di tutto lo storico',
    ],
    solutions: [
      { text: 'Raccolta ordini centralizzata da tutti i canali', value: 'Non perdi più un cliente' },
      { text: 'Alert automatici su scadenze e riordini', value: 'Il software ti ricorda le cose' },
      { text: 'Generazione documenti e etichette in un clic', value: 'Da 10 minuti a 10 secondi' },
      { text: 'Storico automatico: sai sempre cosa è successo', value: 'Tracciabilità senza sforzo' },
    ],
  },
  ProvinceCapital: {
    badge: 'Automazione',
    title: 'Stai usando le persone come robot?',
    problems: [
      'Hai dipendenti che passano ore a fare copia-incolla tra file Excel',
      'Mandare preventivi o report richiede troppo tempo manuale',
      'Gli errori di distrazione costano soldi e figuracce',
      'Le informazioni importanti sono chiuse nel PC di qualcun altro',
    ],
    solutions: [
      { text: 'Bot e Script che fanno il copia-incolla al posto vostro', value: 'Risorse liberate per lavori intelligenti' },
      { text: 'Generatori di documenti automatici (PDF, Excel, Word)', value: 'Documenti pronti in un istante' },
      { text: 'Validazione dati: il software impedisce di sbagliare', value: 'Zero errori umani' },
      { text: 'Cloud condiviso: tutti accedono agli stessi dati aggiornati', value: 'Collaborazione reale' },
    ],
  },
  SuburbanGrowth: {
    badge: 'Crescita',
    title: 'Cresce il lavoro, cresce il caos?',
    problems: [
      'Quello che facevi a mano con 10 clienti, con 100 è impossibile',
      'Ti dimentichi di richiamare i clienti o di mandare i rinnovi',
      'Nuovi collaboratori ci mettono mesi a capire il tuo "sistema"',
      'Hai paura di delegare perché "nessuno lo fa come me"',
    ],
    solutions: [
      { text: 'Software scalabile che gestisce 10 o 1000 clienti uguale', value: 'Pronti a crescere' },
      { text: 'CRM con promemoria e azioni automatiche', value: 'Segui ogni cliente perfettamente' },
      { text: 'Processi guidati passo-passo nel software', value: 'Chiunque può usarlo subito' },
      { text: 'Standardizzazione: il software garantisce la qualità', value: 'Delega con tranquillità' },
    ],
  },
  PlainsSmall: {
    badge: 'Semplicità',
    title: 'Vuoi solo mettere ordine senza impazzire?',
    problems: [
      'Hai scrivania e computer pieni di file chiamati "finale_v2_vero"',
      'Non ricordi mai se quel lavoro è stato pagato o no',
      'Perdi tempo a cercare numeri di telefono e indirizzi',
      'Ti serve un programma semplice, non un\'astronave',
    ],
    solutions: [
      { text: 'Database unico e ordinato per tutto', value: 'Basta file duplicati' },
      { text: 'Stato pagamenti e lavori chiaro a colpo d\'occhio', value: 'Tutto sotto controllo' },
      { text: 'Rubrica intelligente collegata a tutto il resto', value: 'Contatti organizzati' },
      { text: 'Interfaccia pulita: solo le cose che usi', value: 'Zero stress tecnologico' },
    ],
  },
  MetroBologna: {
    badge: 'Innovazione',
    title: 'La concorrenza corre, tu sei fermo ai file Excel?',
    problems: [
      'I tuoi processi sono lenti rispetto a chi usa software moderni',
      'Non riesci a collegare il sito web con l\'ufficio',
      'I clienti si aspettano risposte veloci che non riesci a dare',
      'Vuoi lanciare un nuovo servizio ma non hai lo strumento giusto',
    ],
    solutions: [
      { text: 'Sviluppo rapido di tool specifici per le tue idee', value: 'Arrivi prima sul mercato' },
      { text: 'Integrazione totale Web-Ufficio tramite API', value: 'Business sempre aperto' },
      { text: 'Risposte automatiche e portali self-service', value: 'Clienti serviti all\'istante' },
      { text: 'Tecnologia flessibile per creare esattamente ciò che vuoi', value: 'Nessun limite alla creatività' },
    ],
  },
};

const SOFTWARE_DIAGNOSTICA_TEMPLATES_BY_INITIAL: Partial<Record<MarketArchetype, Record<CopyInitialBucket, SoftwareDiagnosticaTemplate>>> = {
  MountainSmall: {
    A_L: {
      badge: 'Problemi Comuni',
      title: 'Perdi tempo in operazioni che un computer farebbe in un secondo?',
      problems: [
        'Devi ricopiare dati dalla carta al computer ogni sera',
        'Perdi ore a cercare quel vecchio preventivo o quella nota',
        'Usi software complicati di cui usi solo il 10% delle funzioni',
        'Se manca internet non riesci a lavorare',
      ],
      solutions: [
        { text: 'Digitalizzazione: inserisci i dati una volta sola, da dove vuoi', value: 'Risparmi ore ogni settimana' },
        { text: 'Archivio intelligente: trovi qualsiasi cosa digitando due lettere', value: 'Tutto a portata di mano' },
        { text: 'Software essenziale: costruisco solo i tasti che ti servono', value: 'Facilissimo da usare' },
        { text: 'Funziona anche offline: lavori sempre, sincronizzi dopo', value: 'Nessun fermo lavoro' },
      ],
    },
    M_Z: {
      badge: 'Semplicità',
      title: 'Vuoi solo mettere ordine senza impazzire?',
      problems: [
        'Hai scrivania e computer pieni di file chiamati "finale_v2_vero"',
        'Non ricordi mai se quel lavoro è stato pagato o no',
        'Perdi tempo a cercare numeri di telefono e indirizzi',
        'Ti serve un programma semplice, non un\'astronave',
      ],
      solutions: [
        { text: 'Database unico e ordinato per tutto', value: 'Basta file duplicati' },
        { text: 'Stato pagamenti e lavori chiaro a colpo d\'occhio', value: 'Tutto sotto controllo' },
        { text: 'Rubrica intelligente collegata a tutto il resto', value: 'Contatti organizzati' },
        { text: 'Interfaccia pulita: solo le cose che usi', value: 'Zero stress tecnologico' },
      ],
    },
  },
  HillMedium: {
    A_L: {
      badge: 'Analisi Processi',
      title: 'Il tuo metodo di lavoro è unico, perché il software deve essere standard?',
      problems: [
        'Ti adatti tu al software invece che il contrario',
        'Per fare una cosa semplice devi fare dieci passaggi inutili',
        'Hai dati sparsi su Excel, Whatsapp e Post-it',
        'Fai fatica a capire se stai guadagnando o perdendo tempo',
      ],
      solutions: [
        { text: 'Sviluppo su misura: ricalco esattamente il tuo modo di lavorare', value: 'Nessuna curva di apprendimento' },
        { text: 'Automazione: un clic fa il lavoro di dieci passaggi', value: 'Velocità operativa' },
        { text: 'Centralizzazione: tutto in un unico posto sicuro', value: 'Ordine mentale e pratico' },
        { text: 'Dashboard semplici: vedi subito i numeri che contano', value: 'Controllo totale' },
      ],
    },
    M_Z: {
      badge: 'Personalizzazione',
      title: 'Perché cambiare il tuo modo di lavorare per colpa di un programma?',
      problems: [
        'I software pronti non si adattano al tuo flusso di lavoro',
        'Devi fare compromessi e adattarti a funzioni che non ti servono',
        'Perdi tempo a imparare procedure complicate',
        'Non hai controllo su come funziona il software',
      ],
      solutions: [
        { text: 'Software costruito da zero per te', value: 'Fatto su misura, non adattato' },
        { text: 'Solo le funzioni che ti servono davvero', value: 'Niente complessità inutile' },
        { text: 'Interfaccia intuitiva pensata per te', value: 'Lo usi subito senza manuali' },
        { text: 'Puoi evolvere il software quando serve', value: 'Cresce con te' },
      ],
    },
  },
  IndustrialHub: {
    A_L: {
      badge: 'Efficienza',
      title: 'Ufficio e Reparti non si parlano? C\'è troppa manualità?',
      problems: [
        'Devi stampare fogli per portarli in un altro ufficio',
        'Qualcuno deve inserire a mano dati che sono già digitali altrove',
        'Si perdono informazioni nel passaggio tra una persona e l\'altra',
        'Non sai mai a che punto è una pratica o un lavoro',
      ],
      solutions: [
        { text: 'Flussi digitali: i dati viaggiano da soli tra i reparti', value: 'Addio carta e stampanti' },
        { text: 'Integrazioni: collego i tuoi software attuali tra loro', value: 'Stop al data entry manuale' },
        { text: 'Notifiche automatiche: il sistema avvisa chi di dovere', value: 'Comunicazione perfetta' },
        { text: 'Monitoraggio stato: sai sempre chi sta facendo cosa', value: 'Visione completa' },
      ],
    },
    M_Z: {
      badge: 'Integrazione',
      title: 'I tuoi sistemi non comunicano tra loro?',
      problems: [
        'Dati inseriti due volte in sistemi diversi',
        'Devi esportare e importare manualmente tra software',
        'Le informazioni sono chiuse nel PC di qualcun altro',
        'Non hai una visione unificata dei processi',
      ],
      solutions: [
        { text: 'Collego i tuoi software esistenti tramite API', value: 'Comunicazione automatica' },
        { text: 'Database centralizzato accessibile da tutti', value: 'Dati sempre aggiornati' },
        { text: 'Import ed export automatici tra sistemi', value: 'Zero lavoro manuale' },
        { text: 'Dashboard unificata per vedere tutto insieme', value: 'Controllo totale' },
      ],
    },
  },
  FoodValley: {
    A_L: {
      badge: 'Organizzazione',
      title: 'Troppi ordini, troppi fornitori, troppa confusione?',
      problems: [
        'Ricevi ordini via mail, whatsapp e telefono e ne perdi qualcuno',
        'Devi controllare scadenze o forniture manualmente una per una',
        'Creare documenti di trasporto o etichette è un lavoro lungo',
        'Fai fatica a tenere traccia di tutto lo storico',
      ],
      solutions: [
        { text: 'Raccolta ordini centralizzata da tutti i canali', value: 'Non perdi più un cliente' },
        { text: 'Alert automatici su scadenze e riordini', value: 'Il software ti ricorda le cose' },
        { text: 'Generazione documenti e etichette in un clic', value: 'Da 10 minuti a 10 secondi' },
        { text: 'Storico automatico: sai sempre cosa è successo', value: 'Tracciabilità senza sforzo' },
      ],
    },
    M_Z: {
      badge: 'Tracciabilità',
      title: 'Hai bisogno di tracciare tutto per norme HACCP e qualità?',
      problems: [
        'Documenti di trasporto e etichette richiedono troppo tempo',
        'Fai fatica a tenere traccia di lotti e scadenze',
        'Controlli manuali su ogni prodotto sono lunghi',
        'Non hai uno storico completo delle operazioni',
      ],
      solutions: [
        { text: 'Generazione automatica documenti e etichette', value: 'Tempo risparmiato' },
        { text: 'Tracciabilità completa lotti e scadenze', value: 'Conformità HACCP' },
        { text: 'Storico automatico di tutte le operazioni', value: 'Controllo qualità garantito' },
        { text: 'Report e certificazioni generate automaticamente', value: 'Sempre pronti per controlli' },
      ],
    },
  },
  ProvinceCapital: {
    A_L: {
      badge: 'Processi',
      title: 'Dati sparsi e zero controllo? A {{CityName}} succede più spesso di quanto pensi.',
      problems: [
        'Anagrafiche, ordini e documenti sono sparsi tra Excel, email e cartelle diverse',
        'Per trovare un dato devi aprire 10 file o chiedere in giro',
        'Report e consuntivi si fanno a mano, quindi arrivano sempre in ritardo',
        'Ogni reparto lavora in modo diverso e il risultato è confusione',
      ],
      solutions: [
        { text: 'Database unico: clienti, pratiche e documenti in un solo posto', value: 'Tutti lavorano sugli stessi dati' },
        { text: 'Workflow guidati: ogni operazione ha passaggi chiari e replicabili', value: 'Processi delegabili, senza caos' },
        { text: 'Dashboard e report automatici aggiornati in tempo reale', value: 'Decisioni veloci, numeri affidabili' },
        { text: 'Integrazioni (sito, email, fatture, magazzino) per evitare doppioni', value: 'Meno lavoro manuale ogni giorno' },
      ],
    },
    M_Z: {
      badge: 'Automazione',
      title: 'Quante ore al mese bruci in attività ripetitive?',
      problems: [
        'Copia-incolla da email/WhatsApp a Excel e poi al gestionale',
        'Preventivi, report o documenti che richiedono sempre gli stessi passaggi',
        'Dati inseriti due volte in sistemi diversi che non comunicano tra loro',
        'Errori di battitura che fanno perdere tempo e credibilità',
      ],
      solutions: [
        { text: 'Automazioni e bot: il sistema compila e aggiorna per te', value: 'Ore recuperate ogni settimana' },
        { text: 'Generatori di documenti (PDF, Excel, Word) in un clic', value: 'Output sempre coerente' },
        { text: 'Integrazioni via API e import automatici tra strumenti', value: 'Zero doppio inserimento' },
        { text: 'Validazioni e controlli automatici sui dati', value: 'Errori quasi azzerati' },
      ],
    },
  },
  SuburbanGrowth: {
    A_L: {
      badge: 'Crescita',
      title: 'Cresce il lavoro, cresce il caos?',
      problems: [
        'Quello che facevi a mano con 10 clienti, con 100 è impossibile',
        'Ti dimentichi di richiamare i clienti o di mandare i rinnovi',
        'Nuovi collaboratori ci mettono mesi a capire il tuo "sistema"',
        'Hai paura di delegare perché "nessuno lo fa come me"',
      ],
      solutions: [
        { text: 'Software scalabile che gestisce 10 o 1000 clienti uguale', value: 'Pronti a crescere' },
        { text: 'CRM con promemoria e azioni automatiche', value: 'Segui ogni cliente perfettamente' },
        { text: 'Processi guidati passo-passo nel software', value: 'Chiunque può usarlo subito' },
        { text: 'Standardizzazione: il software garantisce la qualità', value: 'Delega con tranquillità' },
      ],
    },
    M_Z: {
      badge: 'Scalabilità',
      title: 'Vuoi crescere ma hai paura del caos?',
      problems: [
        'Con più clienti perdi il controllo su tutto',
        'I nuovi dipendenti non sanno come lavori',
        'Delegare è difficile perché ogni processo è diverso',
        'Non hai metriche per capire se stai andando bene',
      ],
      solutions: [
        { text: 'Software che cresce con te senza limiti', value: 'Da 10 a 1000 clienti senza problemi' },
        { text: 'Processi standardizzati nel software', value: 'Tutti lavorano allo stesso modo' },
        { text: 'Dashboard con metriche chiare', value: 'Vedi subito come va il business' },
        { text: 'Onboarding rapido per nuovi collaboratori', value: 'Produttivi da subito' },
      ],
    },
  },
  PlainsSmall: {
    A_L: {
      badge: 'Semplicità',
      title: 'Vuoi solo mettere ordine senza impazzire?',
      problems: [
        'Hai scrivania e computer pieni di file chiamati "finale_v2_vero"',
        'Non ricordi mai se quel lavoro è stato pagato o no',
        'Perdi tempo a cercare numeri di telefono e indirizzi',
        'Ti serve un programma semplice, non un\'astronave',
      ],
      solutions: [
        { text: 'Database unico e ordinato per tutto', value: 'Basta file duplicati' },
        { text: 'Stato pagamenti e lavori chiaro a colpo d\'occhio', value: 'Tutto sotto controllo' },
        { text: 'Rubrica intelligente collegata a tutto il resto', value: 'Contatti organizzati' },
        { text: 'Interfaccia pulita: solo le cose che usi', value: 'Zero stress tecnologico' },
      ],
    },
    M_Z: {
      badge: 'Tranquillità',
      title: 'Investi nella tua tranquillità con software su misura',
      problems: [
        'Non sai mai dove sono i tuoi dati',
        'Hai paura di perdere informazioni importanti',
        'Gestire tutto manualmente è stressante',
        'Vuoi semplicità, non complessità',
      ],
      solutions: [
        { text: 'Dati al sicuro in Cloud con backup automatici', value: 'Niente più paura di perdere tutto' },
        { text: 'Tutto organizzato e accessibile quando serve', value: 'Lavori sereno' },
        { text: 'Software semplice che capisci subito', value: 'Niente manuali complicati' },
        { text: 'Assistenza diretta quando serve', value: 'Non sei mai solo' },
      ],
    },
  },
  MetroBologna: {
    A_L: {
      badge: 'Innovazione',
      title: 'La concorrenza corre, tu sei fermo ai file Excel?',
      problems: [
        'I tuoi processi sono lenti rispetto a chi usa software moderni',
        'Non riesci a collegare il sito web con l\'ufficio',
        'I clienti si aspettano risposte veloci che non riesci a dare',
        'Vuoi lanciare un nuovo servizio ma non hai lo strumento giusto',
      ],
      solutions: [
        { text: 'Sviluppo rapido di tool specifici per le tue idee', value: 'Arrivi prima sul mercato' },
        { text: 'Integrazione totale Web-Ufficio tramite API', value: 'Business sempre aperto' },
        { text: 'Risposte automatiche e portali self-service', value: 'Clienti serviti all\'istante' },
        { text: 'Tecnologia flessibile per creare esattamente ciò che vuoi', value: 'Nessun limite alla creatività' },
      ],
    },
    M_Z: {
      badge: 'Competitività',
      title: 'Vuoi eccellere con software unici?',
      problems: [
        'Le soluzioni standard vanno bene per la media',
        'Non hai strumenti per differenziarti',
        'I competitor hanno tecnologie più avanzate',
        'Vuoi innovare ma non sai da dove partire',
      ],
      solutions: [
        { text: 'Software costruito apposta per la tua visione', value: 'Differenziazione reale' },
        { text: 'Tecnologie moderne e flessibili', value: 'Vantaggio competitivo' },
        { text: 'Sviluppo rapido per testare nuove idee', value: 'Innovazione continua' },
        { text: 'Partner tecnologico per crescere insieme', value: 'Evoluzione costante' },
      ],
    },
  },
};

const SOFTWARE_GOOD_INVESTMENT_TEMPLATES: Record<MarketArchetype, SoftwareGoodInvestmentTemplate> = {
  MountainSmall: {
    title: 'Uno strumento che',
    titleHighlight: 'ti semplifica la vita',
    subtitle: 'Meno tempo al computer, più tempo per il tuo lavoro vero. Un software su misura serve a toglierti pensieri, non ad aggiungerli.',
  },
  HillMedium: {
    title: 'Non adattarti tu,',
    titleHighlight: 'adatta il software',
    subtitle: 'Perché cambiare il tuo modo di lavorare per colpa di un programma? Costruisco esattamente quello che ti serve, come lo vuoi tu.',
  },
  IndustrialHub: {
    title: 'L\'automazione è',
    titleHighlight: 'tempo guadagnato',
    subtitle: 'Ogni minuto che il software risparmia è un minuto che puoi dedicare a far crescere l\'azienda o a riposarti. Si ripaga da solo.',
  },
  FoodValley: {
    title: 'Metti ordine nel',
    titleHighlight: 'tuo business',
    subtitle: 'Basta rincorrere le informazioni. Con il giusto strumento digitale, hai tutto sotto controllo in un attimo.',
  },
  ProvinceCapital: {
    title: 'Smetti di fare il',
    titleHighlight: 'lavoro del robot',
    subtitle: 'Copia-incolla, controlli, invii massivi: lascia che sia un software a farlo. Tu metti la testa, il software mette la velocità.',
  },
  SuburbanGrowth: {
    title: 'La tecnologia',
    titleHighlight: 'ti fa scalare',
    subtitle: 'Non puoi crescere se sei sommerso dalla burocrazia. Un software su misura è il motore che ti permette di gestire più lavoro senza impazzire.',
  },
  PlainsSmall: {
    title: 'Investi nella tua',
    titleHighlight: 'tranquillità',
    subtitle: 'Sapere che i dati sono al sicuro, ordinati e accessibili non ha prezzo. Digitalizza il tuo archivio e lavora sereno.',
  },
  MetroBologna: {
    title: 'Software unico per',
    titleHighlight: 'un\'azienda unica',
    subtitle: 'Le soluzioni standard vanno bene per la media. Se vuoi eccellere, ti serve uno strumento costruito apposta per la tua visione.',
  },
};

const SOFTWARE_GOOD_INVESTMENT_TEMPLATES_BY_INITIAL: Partial<Record<MarketArchetype, Record<CopyInitialBucket, SoftwareGoodInvestmentTemplate>>> = {
  MountainSmall: {
    A_L: {
      title: 'Uno strumento che',
      titleHighlight: 'ti semplifica la vita',
      subtitle: 'Meno tempo al computer, più tempo per il tuo lavoro vero. Un software su misura serve a toglierti pensieri, non ad aggiungerli.',
    },
    M_Z: {
      title: 'Investi nella tua',
      titleHighlight: 'tranquillità',
      subtitle: 'Sapere che i dati sono al sicuro, ordinati e accessibili non ha prezzo. Digitalizza il tuo archivio e lavora sereno.',
    },
  },
  HillMedium: {
    A_L: {
      title: 'Non adattarti tu,',
      titleHighlight: 'adatta il software',
      subtitle: 'Perché cambiare il tuo modo di lavorare per colpa di un programma? Costruisco esattamente quello che ti serve, come lo vuoi tu.',
    },
    M_Z: {
      title: 'Software fatto',
      titleHighlight: 'apposta per te',
      subtitle: 'Non devi cambiare le tue abitudini. Il software si adatta al tuo modo di lavorare, non il contrario.',
    },
  },
  IndustrialHub: {
    A_L: {
      title: 'L\'automazione è',
      titleHighlight: 'tempo guadagnato',
      subtitle: 'Ogni minuto che il software risparmia è un minuto che puoi dedicare a far crescere l\'azienda o a riposarti. Si ripaga da solo.',
    },
    M_Z: {
      title: 'Collega i tuoi',
      titleHighlight: 'sistemi esistenti',
      subtitle: 'Non devi buttare via quello che hai. Integro i tuoi software attuali per farli comunicare e lavorare insieme.',
    },
  },
  FoodValley: {
    A_L: {
      title: 'Metti ordine nel',
      titleHighlight: 'tuo business',
      subtitle: 'Basta rincorrere le informazioni. Con il giusto strumento digitale, hai tutto sotto controllo in un attimo.',
    },
    M_Z: {
      title: 'Tracciabilità e',
      titleHighlight: 'qualità garantite',
      subtitle: 'Conformità HACCP e controllo qualità automatici. Il software ti aiuta a rispettare le norme senza sforzo.',
    },
  },
  ProvinceCapital: {
    A_L: {
      title: 'Metti ordine e',
      titleHighlight: 'controllo nei dati',
      subtitle: 'Quando dati e processi sono centralizzati, decidi più in fretta e sbagli meno. Un gestionale su misura ti dà chiarezza ogni giorno.',
    },
    M_Z: {
      title: 'Trasforma le ore perse in',
      titleHighlight: 'tempo produttivo',
      subtitle: 'Un software che automatizza i passaggi ripetitivi si ripaga da solo: meno errori, meno caos, più lavoro fatto (e meglio).',
    },
  },
  SuburbanGrowth: {
    A_L: {
      title: 'La tecnologia',
      titleHighlight: 'ti fa scalare',
      subtitle: 'Non puoi crescere se sei sommerso dalla burocrazia. Un software su misura è il motore che ti permette di gestire più lavoro senza impazzire.',
    },
    M_Z: {
      title: 'Cresci senza',
      titleHighlight: 'perdere il controllo',
      subtitle: 'Con più clienti e collaboratori, il software mantiene tutto organizzato e standardizzato. Cresci sereno.',
    },
  },
  PlainsSmall: {
    A_L: {
      title: 'Investi nella tua',
      titleHighlight: 'tranquillità',
      subtitle: 'Sapere che i dati sono al sicuro, ordinati e accessibili non ha prezzo. Digitalizza il tuo archivio e lavora sereno.',
    },
    M_Z: {
      title: 'Semplicità e',
      titleHighlight: 'ordine quotidiano',
      subtitle: 'Niente più file sparsi o informazioni perse. Un software semplice che mette ordine nella tua attività senza complicarti la vita.',
    },
  },
  MetroBologna: {
    A_L: {
      title: 'Software unico per',
      titleHighlight: 'un\'azienda unica',
      subtitle: 'Le soluzioni standard vanno bene per la media. Se vuoi eccellere, ti serve uno strumento costruito apposta per la tua visione.',
    },
    M_Z: {
      title: 'Innovazione e',
      titleHighlight: 'vantaggio competitivo',
      subtitle: 'Tecnologie moderne per differenziarti dalla concorrenza. Un software su misura ti dà l\'edge che cerchi.',
    },
  },
};

const SOFTWARE_FAQ_TEMPLATES: Record<MarketArchetype, SoftwareFaqTemplate> = {
  MountainSmall: [
    {
      q: 'Ma io non sono bravo con il computer, riuscirò a usarlo?',
      a: 'Sì, è il mio obiettivo principale. Creo schermate pulite, con pochi tasti chiari. Se sai usare un bancomat o WhatsApp, saprai usare il mio software.',
    },
    {
      q: 'Funziona anche se internet va e viene?',
      a: 'Sì, posso crearlo in modo che funzioni offline sul tuo computer e si aggiorni appena torna la linea. Non ti lascio a piedi.',
    },
    {
      q: 'Posso usarlo dal tablet?',
      a: 'Certamente. Disegno tutto perché funzioni bene sia su PC che su tablet o telefono, così hai i tuoi dati ovunque.',
    },
    {
      q: 'Quanto costa?',
      a: 'Dipende da cosa deve fare. Si parte da piccoli tool da 1.000-1.500€ fino a sistemi complessi. Il preventivo è gratuito e senza impegno.',
    },
  ],
  HillMedium: [
    {
      q: 'Cosa intendi per "software su misura"?',
      a: 'Intendo un programma creato da zero per te. Non ti vendo un pacchetto pronto. Ascolto il tuo problema e scrivo il codice per risolverlo.',
    },
    {
      q: 'Puoi fare un programma che legge i miei file Excel?',
      a: 'Sì! Posso creare un tool che prende i tuoi Excel, li legge, fa i calcoli che vuoi e ti dà il risultato pulito, risparmiandoti ore di lavoro.',
    },
    {
      q: 'Devo pagare un abbonamento ogni mese?',
      a: 'No. Di solito lavoro a progetto: paghi lo sviluppo e il software è tuo per sempre. Niente canoni a vita.',
    },
    {
      q: 'E se poi voglio aggiungere una funzione?',
      a: 'Nessun problema. Il software è modulare. Mi chiami e aggiungiamo il pezzo nuovo quando ti serve.',
    },
  ],
  IndustrialHub: [
    {
      q: 'Puoi automatizzare l\'invio delle email?',
      a: 'Sì. Posso creare sistemi che mandano preventivi, conferme o solleciti in automatico quando succede qualcosa (es. quando clicchi un tasto).',
    },
    {
      q: 'Si può collegare al mio vecchio gestionale?',
      a: 'Spesso sì. Posso creare dei "ponti" che leggono i dati dal tuo vecchio sistema e li usano per fare cose nuove, senza dover cambiare tutto.',
    },
    {
      q: 'È sicuro mettere i dati lì?',
      a: 'Molto più sicuro di un file Excel sul desktop. Uso database protetti, backup automatici e accessi con password sicure.',
    },
    {
      q: 'Quanto tempo ci vuole?',
      a: 'Per piccoli tool di automazione bastano 2-3 settimane. Per gestionali completi 1-2 mesi. Ti do tempi certi prima di iniziare.',
    },
  ],
  FoodValley: [
    {
      q: 'Può gestire gli ordini che mi arrivano via email?',
      a: 'Sì, esistono tecnologie per "leggere" le email standard e trasformarle in ordini nel sistema automaticamente.',
    },
    {
      q: 'È difficile da imparare per i dipendenti?',
      a: 'No, lo facciamo insieme. Disegno l\'interfaccia proprio ascoltando chi dovrà usarla, per renderla naturale.',
    },
    {
      q: 'Posso stampare documenti o etichette?',
      a: 'Sì, il software può generare PDF pronti per la stampa o comandare stampanti di etichette direttamente.',
    },
    {
      q: 'Chi è proprietario dei dati?',
      a: 'Tu. I dati sono tuoi e puoi esportarli quando vuoi. Non sono "chiusi" dentro il programma.',
    },
  ],
  ProvinceCapital: [
    {
      q: 'Che tipo di software sviluppi?',
      a: 'Di tutto: gestionali web, tool per automatizzare Excel, CRM personalizzati, portali clienti. Se hai un processo manuale, posso farci un software.',
    },
    {
      q: 'Serve un server in ufficio?',
      a: 'Non per forza. Spesso conviene usare il Cloud sicuro: costa meno, è più sicuro e ti permette di accedere anche da casa.',
    },
    {
      q: 'Come funziona il pagamento?',
      a: 'Di solito chiedo un acconto all\'inizio, una parte a metà lavori e il saldo alla consegna, quando vedi che tutto funziona.',
    },
    {
      q: 'Fornisci assistenza se qualcosa non va?',
      a: 'Certamente. Rispondo direttamente io, non un call center. Se c\'è un bug, lo risolvo subito.',
    },
  ],
  SuburbanGrowth: [
    {
      q: 'Il software può crescere con l\'azienda?',
      a: 'Sì, è progettato per questo. Partiamo con le funzioni base per spendere il giusto, poi aggiungiamo pezzi man mano che cresci.',
    },
    {
      q: 'Puoi importare i miei vecchi dati?',
      a: 'Sì, mi occupo io di prendere le tue vecchie anagrafiche o storici (da Excel o altro) e metterli nel nuovo sistema.',
    },
    {
      q: 'È compatibile con Mac e Windows?',
      a: 'Sì, sviluppo principalmente "Web App". Funzionano dentro il browser (Chrome, Safari, Edge), quindi vanno su qualsiasi computer, Mac o Windows.',
    },
    {
      q: 'Posso provarlo prima?',
      a: 'Essendo su misura, non c\'è una demo pronta. Ma ti mostro prototipi e disegni delle schermate prima di scrivere il codice, così sei sicuro del risultato.',
    },
  ],
  PlainsSmall: [
    {
      q: 'Costa tanto farselo fare su misura?',
      a: 'Meno di quanto credi. Un piccolo tool che ti salva 2 ore al giorno può costare anche solo 1.000-2.000€ una tantum. Si ripaga in due mesi.',
    },
    {
      q: 'Devo installare cose complicate?',
      a: 'No. Ti do un link privato, metti nome utente e password e sei dentro. Facile come entrare su Facebook.',
    },
    {
      q: 'Se cambio computer perdo tutto?',
      a: 'No, i dati sono in Cloud. Cambi PC, fai login e ritrovi tutto esattamente come l\'avevi lasciato.',
    },
    {
      q: 'È sicuro per la privacy?',
      a: 'Sì, rispetto tutte le normative GDPR. I dati sono tuoi, protetti e criptati.',
    },
  ],
  MetroBologna: [
    {
      q: 'Sviluppi anche App per il telefono?',
      a: 'Sì, posso creare anche App che si scaricano store o Web App che sembrano app native. Dipende da cosa ti serve.',
    },
    {
      q: 'Puoi collegarlo al mio sito web?',
      a: 'Certo. Un classico esempio è: cliente compila form sul sito -> finisce direttamente nel tuo gestionale -> parte email automatica.',
    },
    {
      q: 'Qual è il primo passo?',
      a: 'Scrivimi o chiamami. Facciamo una chiacchierata di 15 minuti gratis. Mi spieghi il problema e ti dico se posso risolverlo col software.',
    },
    {
      q: 'Lavori da solo o hai un team?',
      a: 'Sono un libero professionista, ma per progetti grossi ho una rete di collaboratori fidati. Hai il vantaggio di un unico referente (io) e la flessibilità di un team.',
    },
  ],
};

const SOFTWARE_FAQ_TEMPLATES_BY_INITIAL: Partial<Record<MarketArchetype, Record<CopyInitialBucket, SoftwareFaqTemplate>>> = {
  MountainSmall: {
    A_L: [
      {
        q: 'Ma io non sono bravo con il computer, riuscirò a usarlo?',
        a: 'Sì, è il mio obiettivo principale. Creo schermate pulite, con pochi tasti chiari. Se sai usare un bancomat o WhatsApp, saprai usare il mio software.',
      },
      {
        q: 'Funziona anche se internet va e viene?',
        a: 'Sì, posso crearlo in modo che funzioni offline sul tuo computer e si aggiorni appena torna la linea. Non ti lascio a piedi.',
      },
      {
        q: 'Posso usarlo dal tablet?',
        a: 'Certamente. Disegno tutto perché funzioni bene sia su PC che su tablet o telefono, così hai i tuoi dati ovunque.',
      },
      {
        q: 'Quanto costa?',
        a: 'Dipende da cosa deve fare. Si parte da piccoli tool da 1.000-1.500€ fino a sistemi complessi. Il preventivo è gratuito e senza impegno.',
      },
    ],
    M_Z: [
      {
        q: 'Devo installare cose complicate?',
        a: 'No. Ti do un link privato, metti nome utente e password e sei dentro. Facile come entrare su Facebook.',
      },
      {
        q: 'Se cambio computer perdo tutto?',
        a: 'No, i dati sono in Cloud. Cambi PC, fai login e ritrovi tutto esattamente come l\'avevi lasciato.',
      },
      {
        q: 'È sicuro per la privacy?',
        a: 'Sì, rispetto tutte le normative GDPR. I dati sono tuoi, protetti e criptati.',
      },
      {
        q: 'Costa tanto farselo fare su misura?',
        a: 'Meno di quanto credi. Un piccolo tool che ti salva 2 ore al giorno può costare anche solo 1.000-2.000€ una tantum. Si ripaga in due mesi.',
      },
    ],
  },
  HillMedium: {
    A_L: [
      {
        q: 'Cosa intendi per "software su misura"?',
        a: 'Intendo un programma creato da zero per te. Non ti vendo un pacchetto pronto. Ascolto il tuo problema e scrivo il codice per risolverlo.',
      },
      {
        q: 'Puoi fare un programma che legge i miei file Excel?',
        a: 'Sì! Posso creare un tool che prende i tuoi Excel, li legge, fa i calcoli che vuoi e ti dà il risultato pulito, risparmiandoti ore di lavoro.',
      },
      {
        q: 'Devo pagare un abbonamento ogni mese?',
        a: 'No. Di solito lavoro a progetto: paghi lo sviluppo e il software è tuo per sempre. Niente canoni a vita.',
      },
      {
        q: 'E se poi voglio aggiungere una funzione?',
        a: 'Nessun problema. Il software è modulare. Mi chiami e aggiungiamo il pezzo nuovo quando ti serve.',
      },
    ],
    M_Z: [
      {
        q: 'Il software si adatta al mio modo di lavorare?',
        a: 'Esattamente. Non devi cambiare le tue abitudini. Ascolto come lavori e costruisco il software che si adatta a te, non il contrario.',
      },
      {
        q: 'Quanto tempo ci vuole per svilupparlo?',
        a: 'Dipende dalla complessità. Per piccoli tool bastano 2-3 settimane. Per gestionali completi 1-2 mesi. Ti do tempi certi prima di iniziare.',
      },
      {
        q: 'Posso provarlo prima di pagare tutto?',
        a: 'Sì. Ti mostro prototipi e disegni delle schermate prima di scrivere il codice. Quando sei sicuro del risultato, procediamo.',
      },
      {
        q: 'Chi è proprietario del software?',
        a: 'Tu. Il software è costruito per te e i dati sono tuoi. Puoi esportarli quando vuoi e mantenere tutto sotto controllo.',
      },
    ],
  },
  IndustrialHub: {
    A_L: [
      {
        q: 'Puoi automatizzare l\'invio delle email?',
        a: 'Sì. Posso creare sistemi che mandano preventivi, conferme o solleciti in automatico quando succede qualcosa (es. quando clicchi un tasto).',
      },
      {
        q: 'Si può collegare al mio vecchio gestionale?',
        a: 'Spesso sì. Posso creare dei "ponti" che leggono i dati dal tuo vecchio sistema e li usano per fare cose nuove, senza dover cambiare tutto.',
      },
      {
        q: 'È sicuro mettere i dati lì?',
        a: 'Molto più sicuro di un file Excel sul desktop. Uso database protetti, backup automatici e accessi con password sicure.',
      },
      {
        q: 'Quanto tempo ci vuole?',
        a: 'Per piccoli tool di automazione bastano 2-3 settimane. Per gestionali completi 1-2 mesi. Ti do tempi certi prima di iniziare.',
      },
    ],
    M_Z: [
      {
        q: 'Puoi integrare i miei software esistenti?',
        a: 'Sì, è uno dei miei punti di forza. Collego i tuoi software tramite API per farli comunicare e lavorare insieme senza dover cambiare tutto.',
      },
      {
        q: 'Come funziona il pagamento?',
        a: 'Di solito chiedo un acconto all\'inizio, una parte a metà lavori e il saldo alla consegna, quando vedi che tutto funziona.',
      },
      {
        q: 'Fornisci assistenza dopo la consegna?',
        a: 'Certamente. Se c\'è un problema lo gestisco io direttamente. E se vuoi evolverlo nel tempo, aggiungiamo funzioni quando servono.',
      },
      {
        q: 'I dati restano miei?',
        a: 'Assolutamente sì. I dati sono tuoi e puoi esportarli quando vuoi. Niente lock-in: mantieni sempre il controllo.',
      },
    ],
  },
  FoodValley: {
    A_L: [
      {
        q: 'Può gestire gli ordini che mi arrivano via email?',
        a: 'Sì, esistono tecnologie per "leggere" le email standard e trasformarle in ordini nel sistema automaticamente.',
      },
      {
        q: 'È difficile da imparare per i dipendenti?',
        a: 'No, lo facciamo insieme. Disegno l\'interfaccia proprio ascoltando chi dovrà usarla, per renderla naturale.',
      },
      {
        q: 'Posso stampare documenti o etichette?',
        a: 'Sì, il software può generare PDF pronti per la stampa o comandare stampanti di etichette direttamente.',
      },
      {
        q: 'Chi è proprietario dei dati?',
        a: 'Tu. I dati sono tuoi e puoi esportarli quando vuoi. Non sono "chiusi" dentro il programma.',
      },
    ],
    M_Z: [
      {
        q: 'Il software rispetta le norme HACCP?',
        a: 'Sì, posso implementare tracciabilità completa, gestione lotti e scadenze, e generazione automatica di documenti conformi.',
      },
      {
        q: 'Quanto costa un software per aziende food?',
        a: 'Dipende dalle funzionalità. Possiamo partire da un sistema base per ordini e tracciabilità, oppure un gestionale completo. Preventivo gratuito.',
      },
      {
        q: 'Posso collegarlo alla mia etichettatrice?',
        a: 'Sì, posso integrare il software con stampanti di etichette per generarle automaticamente con tutti i dati necessari.',
      },
      {
        q: 'Come funziona il backup dei dati?',
        a: 'Uso backup automatici giornalieri su server sicuri. I tuoi dati sono protetti e sempre recuperabili.',
      },
    ],
  },
  ProvinceCapital: {
    A_L: [
      {
        q: 'Ho già un gestionale: ha senso farne uno su misura?',
        a: 'Spesso sì. Possiamo integrare e migliorare quello che hai (oppure affiancarlo con un tool dedicato) per eliminare i passaggi manuali e mettere ordine nei dati.',
      },
      {
        q: 'Puoi collegare sito, email, fatturazione e magazzino?',
        a: 'Certo. Il punto forte del software su misura è proprio questo: integrazioni. Esempio: richiesta dal sito -> anagrafica cliente -> preventivo -> documento -> promemoria automatico.',
      },
      {
        q: 'Qual è il primo passo?',
        a: 'Una chiacchierata di 15 minuti. Mi spieghi come lavori oggi e dove si inceppa il processo: io ti dico se conviene un gestionale completo o un tool mirato.',
      },
      {
        q: 'Dati e codice restano miei?',
        a: 'Sì. Il software è costruito per te e i dati sono tuoi. Niente lock-in: puoi esportare e mantenere tutto sotto controllo.',
      },
    ],
    M_Z: [
      {
        q: 'Puoi automatizzare Excel e il copia-incolla?',
        a: 'Sì. Creo automazioni che prendono i dati dove sono (email, file, form, database) e li trasformano in azioni: aggiornamenti, report, documenti e notifiche.',
      },
      {
        q: 'Quanto costa un software su misura a {{CityName}}?',
        a: 'Dipende da cosa deve fare. Possiamo partire da un tool piccolo e focalizzato, oppure da un gestionale completo. Faccio un preventivo chiaro dopo l\'analisi (senza impegno).',
      },
      {
        q: 'Posso partire piccolo e poi aggiungere funzioni?',
        a: 'Assolutamente. Progetto tutto in modo modulare: inizi con le funzionalità che ti fanno recuperare tempo subito, poi si cresce insieme.',
      },
      {
        q: 'Dopo la consegna offri assistenza?',
        a: 'Sì. Se c\'è un problema lo gestisco io direttamente. E se vuoi evolverlo nel tempo, aggiungiamo funzioni quando servono, senza buttare via nulla.',
      },
    ],
  },
  SuburbanGrowth: {
    A_L: [
      {
        q: 'Il software può crescere con l\'azienda?',
        a: 'Sì, è progettato per questo. Partiamo con le funzioni base per spendere il giusto, poi aggiungiamo pezzi man mano che cresci.',
      },
      {
        q: 'Puoi importare i miei vecchi dati?',
        a: 'Sì, mi occupo io di prendere le tue vecchie anagrafiche o storici (da Excel o altro) e metterli nel nuovo sistema.',
      },
      {
        q: 'È compatibile con Mac e Windows?',
        a: 'Sì, sviluppo principalmente "Web App". Funzionano dentro il browser (Chrome, Safari, Edge), quindi vanno su qualsiasi computer, Mac o Windows.',
      },
      {
        q: 'Posso provarlo prima?',
        a: 'Essendo su misura, non c\'è una demo pronta. Ma ti mostro prototipi e disegni delle schermate prima di scrivere il codice, così sei sicuro del risultato.',
      },
    ],
    M_Z: [
      {
        q: 'Come faccio a sapere se il software funziona per me?',
        a: 'Facciamo una chiacchierata di 15 minuti gratis. Mi spieghi il problema e ti dico se posso risolverlo col software. Poi ti mostro prototipi prima di iniziare.',
      },
      {
        q: 'Quanto tempo ci vuole per svilupparlo?',
        a: 'Dipende dalla complessità. Per piccoli tool bastano 2-3 settimane. Per gestionali completi 1-2 mesi. Ti do tempi certi prima di iniziare.',
      },
      {
        q: 'Il software è scalabile?',
        a: 'Sì, è progettato per crescere con te. Gestisce 10 clienti come 1000, senza problemi di performance.',
      },
      {
        q: 'Chi può usare il software?',
        a: 'Tutti i tuoi collaboratori. Creo interfacce semplici e processi guidati che chiunque può usare subito, anche senza esperienza.',
      },
    ],
  },
  PlainsSmall: {
    A_L: [
      {
        q: 'Costa tanto farselo fare su misura?',
        a: 'Meno di quanto credi. Un piccolo tool che ti salva 2 ore al giorno può costare anche solo 1.000-2.000€ una tantum. Si ripaga in due mesi.',
      },
      {
        q: 'Devo installare cose complicate?',
        a: 'No. Ti do un link privato, metti nome utente e password e sei dentro. Facile come entrare su Facebook.',
      },
      {
        q: 'Se cambio computer perdo tutto?',
        a: 'No, i dati sono in Cloud. Cambi PC, fai login e ritrovi tutto esattamente come l\'avevi lasciato.',
      },
      {
        q: 'È sicuro per la privacy?',
        a: 'Sì, rispetto tutte le normative GDPR. I dati sono tuoi, protetti e criptati.',
      },
    ],
    M_Z: [
      {
        q: 'Ma io non sono bravo con il computer, riuscirò a usarlo?',
        a: 'Sì, è il mio obiettivo principale. Creo schermate pulite, con pochi tasti chiari. Se sai usare un bancomat o WhatsApp, saprai usare il mio software.',
      },
      {
        q: 'Quanto costa?',
        a: 'Dipende da cosa deve fare. Si parte da piccoli tool da 1.000-1.500€ fino a sistemi complessi. Il preventivo è gratuito e senza impegno.',
      },
      {
        q: 'Devo pagare un abbonamento ogni mese?',
        a: 'No. Di solito lavoro a progetto: paghi lo sviluppo e il software è tuo per sempre. Niente canoni a vita.',
      },
      {
        q: 'E se poi voglio aggiungere una funzione?',
        a: 'Nessun problema. Il software è modulare. Mi chiami e aggiungiamo il pezzo nuovo quando ti serve.',
      },
    ],
  },
  MetroBologna: {
    A_L: [
      {
        q: 'Sviluppi anche App per il telefono?',
        a: 'Sì, posso creare anche App che si scaricano store o Web App che sembrano app native. Dipende da cosa ti serve.',
      },
      {
        q: 'Puoi collegarlo al mio sito web?',
        a: 'Certo. Un classico esempio è: cliente compila form sul sito -> finisce direttamente nel tuo gestionale -> parte email automatica.',
      },
      {
        q: 'Qual è il primo passo?',
        a: 'Scrivimi o chiamami. Facciamo una chiacchierata di 15 minuti gratis. Mi spieghi il problema e ti dico se posso risolverlo col software.',
      },
      {
        q: 'Lavori da solo o hai un team?',
        a: 'Sono un libero professionista, ma per progetti grossi ho una rete di collaboratori fidati. Hai il vantaggio di un unico referente (io) e la flessibilità di un team.',
      },
    ],
    M_Z: [
      {
        q: 'Che tipo di tecnologie usi?',
        a: 'Uso tecnologie moderne e flessibili: web app, API, integrazioni cloud. Il software è veloce, sicuro e accessibile da qualsiasi dispositivo.',
      },
      {
        q: 'Quanto costa un software innovativo?',
        a: 'Dipende dalla complessità. Possiamo partire da tool mirati per testare nuove idee, oppure sviluppare piattaforme complete. Preventivo gratuito dopo l\'analisi.',
      },
      {
        q: 'Posso integrare con servizi esterni?',
        a: 'Sì, posso integrare con API di servizi esterni (pagamenti, spedizioni, CRM, ecc.) per creare soluzioni complete e innovative.',
      },
      {
        q: 'Quanto tempo per sviluppare?',
        a: 'Per tool innovativi e rapidi: 2-4 settimane. Per piattaforme complesse: 2-3 mesi. Ti do tempi certi e aggiornamenti costanti.',
      },
    ],
  },
};

export function generateSoftwareHero(archetype: MarketArchetype, cityName: string, replacements: TokenReplacements) {
  const bucket = getCopyInitialBucketFromCityName(cityName);
  const template = SOFTWARE_HERO_TEMPLATES_BY_INITIAL[archetype]?.[bucket] ?? SOFTWARE_HERO_TEMPLATES[archetype];
  return {
    h1: replaceTokens(template.h1, replacements),
    sub: replaceTokens(template.sub, replacements),
    ctaText: template.ctaText,
    ctaHref: '#prezzi',
    trustSignal: replaceTokens(template.trustSignal, replacements),
  };
}

export function generateSoftwareDiagnostica(archetype: MarketArchetype, cityName: string, replacements: TokenReplacements) {
  const bucket = getCopyInitialBucketFromCityName(cityName);
  const template = SOFTWARE_DIAGNOSTICA_TEMPLATES_BY_INITIAL[archetype]?.[bucket] ?? SOFTWARE_DIAGNOSTICA_TEMPLATES[archetype];
  return {
    badge: template.badge,
    title: replaceTokens(template.title, replacements),
    problems: template.problems.map(p => replaceTokens(p, replacements)),
    solutions: template.solutions.map(s => ({
      text: replaceTokens(s.text, replacements),
      value: replaceTokens(s.value, replacements),
    })),
  };
}

export function generateSoftwareGoodInvestment(archetype: MarketArchetype, replacements: TokenReplacements) {
  const cityName = getCityNameFromReplacements(replacements);
  const bucket = getCopyInitialBucketFromCityName(cityName);
  const template = SOFTWARE_GOOD_INVESTMENT_TEMPLATES_BY_INITIAL[archetype]?.[bucket] ?? SOFTWARE_GOOD_INVESTMENT_TEMPLATES[archetype];
  return {
    title: replaceTokens(template.title, replacements),
    titleHighlight: replaceTokens(template.titleHighlight, replacements),
    subtitle: replaceTokens(template.subtitle, replacements),
  };
}

export function generateSoftwareSEO(
  archetype: MarketArchetype,
  cityName: string,
  province: string,
  citySlug: string,
  replacements: TokenReplacements
) {
  const bucket = getCopyInitialBucketFromCityName(cityName);
  // SEO OTTIMIZZATA PER INTENTO AMPIO: SOFTWARE, AUTOMAZIONE, TOOL
  const titleVariants =
    bucket === 'A_L'
      ? [
        `Software Gestionale su Misura a {{CityName}} | Automazioni e CRM`,
        `Sviluppo Software a {{CityName}}: Gestionali Personalizzati | Manuel De Ceglie`,
        `Programmatore a {{CityName}} per Gestionali, Tool e Automazioni`,
        `Web App e Gestionali Custom a {{CityName}} | Software su Misura`,
      ]
      : [
        `Automazioni e Software su Misura a {{CityName}} | Stop Excel e Caos`,
        `Sviluppo Tool e Gestionali a {{CityName}} | Automazione Processi`,
        `Software Personalizzati a {{CityName}}: Integrazioni e Report Automatici`,
        `Programmatore a {{CityName}} | Software, Tool e Web App Custom`,
      ];

  const descriptionVariants =
    bucket === 'A_L'
      ? [
        `Cerchi un software gestionale su misura a {{CityName}}? Creo CRM, web app e automazioni che mettono ordine nei dati e velocizzano i processi.`,
        `Sviluppatore software a {{CityName}}: gestionali personalizzati, integrazioni e report automatici. Analisi gratuita e preventivo chiaro.`,
        `Basta dati sparsi: realizzo software su misura a {{CityName}} per centralizzare clienti, pratiche e documenti. Automazioni incluse.`,
        `Software house freelance a {{CityName}}: creo gestionali e tool custom per aziende. Meno errori, piu controllo, piu tempo.`,
      ]
      : [
        `Vuoi eliminare copia-incolla e procedure manuali a {{CityName}}? Sviluppo tool e software su misura che automatizzano documenti, dati e report.`,
        `Sviluppatore software a {{CityName}}. Automazioni per Excel, email e processi aziendali con web app create apposta per te.`,
        `Software su misura a {{CityName}}: integrazioni tra strumenti, validazione dati e dashboard. Risparmia ore ogni settimana.`,
        `Non ti serve un gestionale enorme: ti serve quello giusto. A {{CityName}} creo software snelli, veloci e personalizzati.`,
      ];

  const h1Variants =
    bucket === 'A_L'
      ? [
        `Software Gestionali e CRM su Misura a {{CityName}}`,
        `Sviluppo Gestionali Personalizzati a {{CityName}}`,
        `Automazioni e Software su Misura per Aziende a {{CityName}}`,
        `Web App e Tool Gestionali a {{CityName}}`,
      ]
      : [
        `Tool e Automazioni per Eliminare Excel a {{CityName}}`,
        `Software su Misura a {{CityName}} per Automatizzare Processi`,
        `Gestionali Snelli e Custom a {{CityName}}`,
        `Automazione Processi e Web App a {{CityName}}`,
      ];

  const title = pickVariant(citySlug, titleVariants);
  const description = pickVariant(citySlug, descriptionVariants);
  const h1 = pickVariant(citySlug, h1Variants);

  // Keyword Strategy: Mix ampio di termini
  const baseKeywords = [
    `sviluppo software ${cityName}`,
    `programmatore ${cityName}`,
    `software su misura ${cityName}`,
    `automazione processi ${cityName}`,
    `realizzazione gestionali ${cityName}`,
    `creazione database ${cityName}`,
    `digitalizzazione azienda ${cityName}`,
    `sviluppo web app ${cityName}`,
    `consulenza informatica ${cityName}`,
  ];

  return {
    title: replaceTokens(title, replacements),
    description: replaceTokens(description, replacements),
    canonical: buildCanonicalUrl(citySlug, 'software-gestionali'),
    keywords: baseKeywords,
    h1: replaceTokens(h1, replacements),
  };
}

export function generateSoftwareFAQ(archetype: MarketArchetype, citySlug: string, replacements: TokenReplacements) {
  const cityName = getCityNameFromReplacements(replacements);
  const bucket = getCopyInitialBucketFromCityName(cityName);
  const template = SOFTWARE_FAQ_TEMPLATES_BY_INITIAL[archetype]?.[bucket] ?? SOFTWARE_FAQ_TEMPLATES[archetype];

  return template.map(faq => ({
    q: spintaxParse(faq.q, citySlug),
    a: spintaxParse(faq.a, citySlug),
  }));
}
