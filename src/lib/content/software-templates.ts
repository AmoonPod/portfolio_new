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

const SOFTWARE_HERO_TEMPLATES: Record<MarketArchetype, { h1: string; sub: string; ctaText: string; trustSignal: string }> = {
  MountainSmall: {
    h1: "A {{CityName}} automatizza la tua attività con un software su misura",
    sub: "Nella tua zona il tempo è prezioso. Ti creo un gestionale che elimina la carta e i fogli Excel, facendoti risparmiare ore ogni settimana.",
    ctaText: 'Parliamone insieme',
    trustSignal: 'Software gestionali per artigiani e attività di montagna',
  },
  HillMedium: {
    h1: "A {{CityName}} il tuo gestionale deve adattarsi a te, non il contrario",
    sub: "Ti costruisco un software che segue i tuoi processi, non il contrario. Più efficienza, meno errori, più tempo per quello che conta.",
    ctaText: 'Parliamone insieme',
    trustSignal: 'Gestionali su misura per artigiani e agriturismi del territorio',
  },
  IndustrialHub: {
    h1: "A {{CityName}} la tua azienda merita un software all'altezza",
    sub: "Il settore {{Sector}} richiede precisione. Ti creo un gestionale che integra commesse, magazzino e clienti in un unico sistema.",
    ctaText: 'Parliamone insieme',
    trustSignal: 'Software gestionali per aziende del settore {{Sector}}',
  },
  FoodValley: {
    h1: "A {{CityName}} digitalizza la tua azienda food con un gestionale su misura",
    sub: "Dalla materia prima al cliente, ti creo un software che gestisce ordini, fornitori e tracciabilità in modo efficace.",
    ctaText: 'Parliamone insieme',
    trustSignal: 'Gestionali per aziende food e artigiani del gusto',
  },
  ProvinceCapital: {
    h1: "A {{CityName}} smetti di combattere con Excel e carta",
    sub: "Ti creo un gestionale su misura che si adatta ai tuoi processi. Più ordine, meno errori, più tempo per i tuoi clienti.",
    ctaText: 'Parliamone insieme',
    trustSignal: 'Software gestionali per professionisti e attività della provincia',
  },
  SuburbanGrowth: {
    h1: "A {{CityName}} digitalizza la tua attività in crescita",
    sub: "Ti creo un gestionale che cresce con te. Automatizza i processi ripetitivi e concentra l'energia su ciò che fa davvero la differenza.",
    ctaText: 'Parliamone insieme',
    trustSignal: 'Gestionali per attività in crescita nella zona',
  },
  PlainsSmall: {
    h1: "A {{CityName}} un gestionale che funziona davvero esiste",
    sub: 'Niente più fogli sparsi, niente più "dov\'è quel dato?". Ti creo un software chiaro, semplice e utile davvero.',
    ctaText: 'Parliamone insieme',
    trustSignal: 'Software gestionali per artigiani e commercianti',
  },
  MetroBologna: {
    h1: "A {{CityName}} automatizza i processi della tua attività",
    sub: "Ti creo un gestionale su misura che elimina le perdite di tempo e ti dà il controllo totale sulla tua attività.",
    ctaText: 'Parliamone insieme',
    trustSignal: 'Software gestionali per attività dell\'area bolognese',
  },
};

const SOFTWARE_DIAGNOSTICA_TEMPLATES: Record<MarketArchetype, { badge: string; title: string; problems: string[]; solutions: { text: string; value: string }[] }> = {
  MountainSmall: {
    badge: 'Analisi Gratuita',
    title: 'Il caos gestionale sta rallentando la tua attività?',
    problems: [
      'Compili gli stessi dati su preventivi, ordini e fatture - manualmente, ogni volta',
      'I clienti sono su un foglio, gli ordini su un altro, le fatture da un\'altra parte',
      'Non sai mai cosa hai in magazzino fino a quando non controlli fisicamente',
      'Le operazioni ripetitive ti rubano ore che potresti dedicare ai clienti',
    ],
    solutions: [
      { text: 'Documenti generati automaticamente, senza errori di copia-incolla', value: 'Risparmi 5+ ore settimanali' },
      { text: 'Un unico sistema per clienti, ordini, magazzino e fatture', value: 'Tutto sincronizzato, sempre aggiornato' },
      { text: 'Alert automatici quando le scorte scendono sotto il minimo', value: 'Mai più ordini in ritardo' },
      { text: 'Automazioni personalizzate per i tuoi processi specifici', value: 'Ti liberi delle operazioni noiose' },
    ],
  },
  HillMedium: {
    badge: 'Analisi Gratuita',
    title: 'La gestione manuale ti sta facendo perdere tempo e soldi?',
    problems: [
      'Usi fogli Excel che si rompono, si perdono e sono impossibili da condividere',
      'Non hai una visione chiara di ordini, scadenze e pagamenti in arrivo',
      'I tuoi collaboratori lavorano in modo disallineato, ognuno per conto proprio',
      'Non sai davvero quanto guadagni da ogni cliente o prodotto',
    ],
    solutions: [
      { text: 'Gestionale su misura che segue i tuoi processi, non il contrario', value: 'Lavori come hai sempre fatto, ma meglio' },
      { text: 'Dashboard con metriche chiare e aggiornate in tempo reale', value: 'Prendi decisioni basate sui dati, non sulle sensazioni' },
      { text: 'Accesso multiutente con permessi personalizzati per ogni ruolo', value: 'Il team è sempre allineato e sincronizzato' },
      { text: 'Report dettagliati su fatturato, marginalità e clienti top', value: 'Scopri dove guadagni e dove sprechi' },
    ],
  },
  IndustrialHub: {
    badge: 'Analisi Gratuita',
    title: 'I tuoi processi produttivi sono inefficienti e costosi?',
    problems: [
      'Commesse, magazzino e produzione non comunicano tra loro - tu fai da ponte',
      'Non hai traccia delle lavorazioni, dei tempi e dei materiali usati',
      'L\'ufficio e il reparto produzione sono sempre disallineati',
      'Perdi ordini o commesse per mancanza di visibilità sui flussi',
    ],
    solutions: [
      { text: 'Software integrato che collega commesse, produzione e magazzino', value: 'Flusso di lavoro fluido e senza interruzioni' },
      { text: 'Tracciabilità completa delle lavorazioni dal vivo al prodotto finito', value: 'Sai sempre cosa accade in ogni fase' },
      { text: 'Integrazione ufficio-produzione in tempo reale con notifiche', value: 'Niente più telefonate per capire lo stato' },
      { text: 'Kanban digitale e gestione code commesse intelligente', value: 'Ottimizzi tempi e risorse' },
    ],
  },
  FoodValley: {
    badge: 'Analisi Gratuita',
    title: 'La gestione della filiera food è troppo complicata e rischiosa?',
    problems: [
      'Tracciabilità e certificazioni richiedono tempo infinito e carta infinita',
      'Non hai controllo su fornitori, lotti e scadenze - speri che vada tutto bene',
      'La gestione ordini clienti è caotica - email, telefonate, WhatsApp spariti ovunque',
      'Non sai quali prodotti rendono di più e quali sono solo un costo',
    ],
    solutions: [
      { text: 'Software con tracciabilità integrata e certificazioni automatiche', value: 'HACCP, BIO e più a portata di clic' },
      { text: 'Gestione fornitori e lotti semplificata con alert scadenze', value: 'Niente più prodotti scaduti o lotti non tracciabili' },
      { text: 'Ordini clienti automatizzati con conferme immediate via email/WhatsApp', value: 'Professionalità che i clienti apprezzano' },
      { text: 'Analytics sulla profittabilità di ogni prodotto e ingrediente', value: 'Decidi cosa produrre in base ai dati' },
    ],
  },
  ProvinceCapital: {
    badge: 'Analisi Gratuita',
    title: 'La tua attività è gestita con sistemi che non funzionano davvero?',
    problems: [
      'Usi software generici pieni di funzioni che non usi e che ti confondono',
      'I dati sono sparsi in posti diversi - cloud, hard disk, chiavette, fogli',
      'Non riesci a trovare le informazioni quando ti servono, al momento giusto',
      'I processi ripetitivi ti rubano tempo prezioso che potresti vendere',
    ],
    solutions: [
      { text: 'Gestionale snello con solo le funzioni che ti servono davvero', value: 'Niente fronzoli, solo risultati concreti' },
      { text: 'Un unico database centrale dove trovi tutto, subito', value: 'Cerca in un secondo, trova sempre' },
      { text: 'Ricerca rapida, filtri intuitivi e navigazione senza pensieri', value: 'Il software lavora per te, non il contrario' },
      { text: 'Automazioni personalizzate per i tuoi processi specifici', value: 'Le cose noiose le fa il software da solo' },
    ],
  },
  SuburbanGrowth: {
    badge: 'Analisi Gratuita',
    title: 'La crescita sta rendendo tutto più caotico e ingestibile?',
    problems: [
      'I sistemi che usavi da piccoli non funzionano più con piú lavoro',
      'Non hai tempo per gestire la parte amministrativa - preferisci lavorare',
      'I collaboratori non hanno le informazioni aggiornate e si bloccano',
      'Perdi opportunità perché non riesci a seguire tutti i clienti',
    ],
    solutions: [
      { text: 'Software scalabile progettato per crescere insieme a te', value: 'Oggi ti serve poco, domani molto - senza rifare tutto' },
      { text: 'Automatizzazione della routine amministrativa e contabile', value: 'Ti liberi delle scartoffie, ti dedichi al lavoro' },
      { text: 'Accesso cloud per tutto il team, ovunque si trovino', value: 'Tutti hanno gli stessi dati, sempre aggiornati' },
      { text: 'CRM integrato per non perdere nessun contatto e seguire ogni opportunità', value: 'Niente piú clienti dimenticati' },
    ],
  },
  PlainsSmall: {
    badge: 'Analisi Gratuita',
    title: 'Gestisci ancora tutto con carta e fogli che si perdono?',
    problems: [
      'Hai informazioni importanti su post-it, fogli volanti, quaderni sparsi',
      'Non sai mai cosa hai fatto ieri, figuriamoci la settimana scorsa',
      'Perdi tempo a cercare documenti, dati, informazioni che dovrebbero essere a portata di mano',
      'Non hai una visione d\'insieme della tua attività - vai a naso',
    ],
    solutions: [
      { text: 'Digitalizzazione completa di tutti i tuoi processi e documenti', value: 'Tutto ordinato, tutto trovabile, tutto sicuro' },
      { text: 'To-do list e promemoria automatizzati che non dimentichi mai', value: 'Non perdi più una scadenza o un impegno' },
      { text: 'Archivio digitale ordinato, ricercabile e accessibile ovunque', value: 'Trovi quello che cerchi in pochi secondi' },
      { text: 'Dashboard con la situazione in tempo reale - sempre chiaro dove sei', value: 'Prendi il controllo della tua attività' },
    ],
  },
  MetroBologna: {
    badge: 'Analisi Gratuita',
    title: 'La competizione è dura e tu non sei abbastanza digitalizzato?',
    problems: [
      'I tuoi competitor sono piú digitalizzati di te e vincono sui tempi',
      'Perdi tempo in operazioni che i competitor hanno automatizzato da anni',
      'Non riesci a essere competitivo sui tempi di consegna e risposta',
      'I clienti si lamentano della lentezza dei tuoi processi e della comunicazione',
    ],
    solutions: [
      { text: 'Software all\'avanguardia per stare davanti ai competitor', value: 'Diventi il punto di riferimento del settore' },
      { text: 'Automazioni che ti fanno risparmiare tempo su ogni operazione', value: 'Rispondi prima, consegni prima, vinci' },
      { text: 'Processi ottimizzati per velocità, qualità e soddisfazione cliente', value: 'Clienti contenti = clienti che ritornano' },
      { text: 'Esperienza cliente migliorata con comunicazione automatizzata', value: 'Professionalità che fa la differenza' },
    ],
  },
};

const SOFTWARE_GOOD_INVESTMENT_TEMPLATES: Record<MarketArchetype, { title: string; titleHighlight: string; subtitle: string }> = {
  MountainSmall: {
    title: 'Un gestionale che',
    titleHighlight: 'ti fa risparmiare tempo',
    subtitle: 'Nelle zone dove il tempo è prezioso e la connessione può mancare, un software ben fatto ti permette di lavorare meglio e più velocemente.',
  },
  HillMedium: {
    title: 'Un gestionale che',
    titleHighlight: 'si adatta a te',
    subtitle: 'Non il contrario. Ti creo un software che segue i tuoi processi, che hai già nel sangue, adattandosi al tuo modo di lavorare.',
  },
  IndustrialHub: {
    title: 'Un gestionale che',
    titleHighlight: 'integra tutto',
    subtitle: 'Dalle commesse alla produzione, dal magazzino alla fatturazione. Un unico sistema che elimina i silos e migliora l\'efficienza.',
  },
  FoodValley: {
    title: 'Un gestionale che',
    titleHighlight: 'gestisce la filiera',
    subtitle: 'Dalla materia prima al prodotto finito, con tracciabilità completa e certificazioni a portata di mano.',
  },
  ProvinceCapital: {
    title: 'Un gestionale non è una spesa:',
    titleHighlight: 'è un investimento che paga',
    subtitle: 'Il tempo risparmiato, gli errori evitati, i clienti non persi. Un gestionale ben fatto si ripaga da solo.',
  },
  SuburbanGrowth: {
    title: 'Un gestionale che',
    titleHighlight: 'cresce con te',
    subtitle: 'Niente costi nascosti, niente canoni. Un asset digitale tuo che si espande insieme alla tua attività.',
  },
  PlainsSmall: {
    title: 'Un gestionale che',
    titleHighlight: 'porta ordine',
    subtitle: 'Niente più fogli sparsi, niente più "non lo so dove l\'ho messo". Chiarezza, ordine e controllo totale.',
  },
  MetroBologna: {
    title: 'Un gestionale che',
    titleHighlight: 'ti dà vantaggio',
    subtitle: 'Nell\'area competitiva bolognese, l\'efficienza digitale fa la differenza. Un software ti fa vincere.',
  },
};

const SOFTWARE_FAQ_TEMPLATES: Record<MarketArchetype, Array<{ q: string; a: string }>> = {
  MountainSmall: [
    {
      q: 'Il software funziona anche con poca connessione?',
      a: 'Sì, progetto gestionali che funzionano anche in modalità offline. Quando la connessione torna, tutto si sincronizza automaticamente. Perfetto per zone con copertura instabile.',
    },
    {
      q: 'Quanto tempo ci vuole per implementarlo?',
      a: 'Per un gestionale base con le funzioni essenziali, circa 3-4 settimane. Progetti più complessi richiedono più tempo. Ti fornisco una tempistica precisa dopo l\'analisi iniziale.',
    },
    {
      q: 'Posso gestirlo da solo o serve personale tecnico?',
      a: 'Progetto interfacce intuitive che chiunque può usare. Fornisco manuali e video tutorial. Se serve, sono disponibile per formazione al tuo team.',
    },
    {
      q: 'Quanto costa un gestionale su misura?',
      a: 'Dipende dalle funzionalità. Si parte da 1.500€ per un CRM base. Un gestionale completo con magazzino e automazioni parte da 3.000€. Ti preparo un preventivo personalizzato gratuito.',
    },
  ],
  HillMedium: [
    {
      q: 'Il gestionale si adatta al mio modo di lavorare?',
      a: 'Assolutamente sì. Prima di sviluppare, analizzo i tuoi processi attuali e li ottimizzo. Il risultato è un software che segue il tuo flusso di lavoro, non il contrario.',
    },
    {
      q: 'Posso integrarlo con i software che già uso?',
      a: 'Sì, nella maggior parte dei casi. Posso creare integrazioni con contabilità, e-commerce, email, WhatsApp e altri strumenti che usi già.',
    },
    {
      q: 'Il mio team lo saprà usare?',
      a: 'Progetto interfacce semplici e intuitive. Se sai usare WhatsApp, saprai usare il tuo gestionale. Fornisco tutta la documentazione necessaria.',
    },
    {
      q: 'Qual è il costo totale?',
      a: 'Il costo varia in base alle funzionalità. Ti fornisco un preventivo trasparente senza sorprese. Paghi per quello che ti serve, niente di più.',
    },
  ],
  IndustrialHub: [
    {
      q: 'Il gestionale si integra con il mio ERP esistente?',
      a: 'Nella maggior parte dei casi sì. Analizzo i tuoi sistemi attuali e progetto un\'integrazione che funziona, senza sostituire quello che già funziona.',
    },
    {
      q: 'Posso tracciare le commesse e i tempi di produzione?',
      a: 'Certo, è una delle funzionalità più richieste. Tracciamento commesse, tempi, materiali e reportistica sulla produzione.',
    },
    {
      q: 'Quanti utenti possono accedere?',
      a: 'Tutti quelli che ti servono. Licenze illimitate incluse. Puoi dare accessi diversi a ufficio, produzione, magazzino, commerciali.',
    },
    {
      q: 'Avrò supporto dopo il lancio?',
      a: 'Sì, offro pacchetti di manutenzione e supporto. Puoi chiamarmi per problemi, richiedere modifiche o nuove funzionalità.',
    },
  ],
  FoodValley: [
    {
      q: 'Il gestionale gestisce tracciabilità e HACCP?',
      a: 'Sì, progetto software con tracciabilità completa e supporto per certificazioni HACCP, BIO e altre richieste nel settore food.',
    },
    {
      q: 'Posso gestire fornitori e lotti?',
      a: 'Certo. Gestione fornitori, tracciabilità lotti, scadenze, recall: tutto integrato nel sistema.',
    },
    {
      q: 'Si integra con il mio e-commerce?',
      a: 'Sì, posso creare integrazioni con Shopify, WooCommerce, e altri. Ordini che arrivano online → automaticamente nel gestionale.',
    },
    {
      q: 'Quanto costa la manutenzione?',
      a: 'Nessun canone obbligatorio. Puoi scegliere un pacchetto di supporto oppure gestire gli aggiornamenti autonomamente. Sei libero.',
    },
  ],
  ProvinceCapital: [
    {
      q: 'Il gestionale è facile da usare?',
      a: 'Progetto interfacce intuitive pensate per chi non ha tempo di imparare software complicati. Se sai usare uno smartphone, sai usare il tuo gestionale.',
    },
    {
      q: 'Posso accedere ai dati da remoto?',
      a: 'Sì, il gestionale è accessibile da qualsiasi dispositivo connesso a internet. Da ufficio, da casa, in trasferta: i tuoi dati sono sempre con te.',
    },
    {
      q: 'Quanto tempo per implementarlo?',
      a: 'Dipende dalla complessità. Un gestionale base è pronto in 3-4 settimane. Progetti più strutturati richiedono 2-3 mesi.',
    },
    {
      q: 'Cosa succede se ho bisogno di modifiche?',
      a: 'Il software è tuo, quindi posso modificarlo quando vuoi. Offro pacchetti di assistenza per modifiche e miglioramenti.',
    },
  ],
  SuburbanGrowth: [
    {
      q: 'Il gestionale può crescere con la mia azienda?',
      a: 'Sì, lo progetto fin dall\'inizio per essere scalabile. Aggiungere funzionalità, utenti, sedi: tutto possibile senza rifare tutto da zero.',
    },
    {
      q: 'Posso automatizzare i processi ripetitivi?',
      a: 'Certo, l\'automazione è il mio pane quotidiano. Email automatiche, promemoria, compilazione documenti: elimino le operazioni che ti rubano tempo.',
    },
    {
      q: 'Avrò i dati per prendere decisioni migliori?',
      a: 'Sì, dashboard e report ti danno visibilità su metriche chiave: fatturato, marginalità, clienti migliori, prodotti più venduti.',
    },
    {
      q: 'Quanto costa in totale?',
      a: 'Preventivo trasparente basato sulle tue esigenze. Nessun canone nascosto. Una volta pagato, il software è tuo.',
    },
  ],
  PlainsSmall: [
    {
      q: 'Il gestionale può sostituire i miei fogli?',
      a: 'Sì, digitalizzo tutti i tuoi processi. Dalla rubrica clienti alla gestione ordini, dalla contabilità al magazzino. Addio carta.',
    },
    {
      q: 'È difficile da imparare?',
      a: 'No, lo progetto semplice e intuitivo. Pochi clic per le operazioni quotidiane. Video tutorial e documentazione inclusi.',
    },
    {
      q: 'Quanto costa?',
      a: 'Si parte da 1.500€ per un CRM base. Un gestionale completo parte da 3.000€. Ti do un preventivo preciso dopo l\'analisi.',
    },
    {
      q: 'Posso avere i dati sempre con me?',
      a: 'Sì, accesso cloud da qualsiasi dispositivo. I tuoi dati sono sempre disponibili, sempre aggiornati.',
    },
  ],
  MetroBologna: [
    {
      q: 'Il gestionale mi dà vantaggio competitivo?',
      a: 'Sì, l\'automazione e l\'efficienza digitale ti permettono di essere più veloce, più preciso, più competitivo dei competitor meno digitalizzati.',
    },
    {
      q: 'Si integra con l\'ecosistema bolognese?',
      a: 'Sì, posso integrarti con comuni, camere di commercio, fornitori logistici e altri attori del territorio.',
    },
    {
      q: 'Quanto tempo per vedere risultati?',
      a: 'I primi benefici li vedi subito: meno errori, più ordine. I risultati completi in 2-3 mesi quando il team ha adottato il nuovo sistema.',
    },
    {
      q: 'Avrò formazione per il team?',
      a: 'Sì, includo formazione per il tuo team. In presenza o da remoto, come preferisci.',
    },
  ],
};

export function generateSoftwareHero(archetype: MarketArchetype, cityName: string, replacements: TokenReplacements) {
  const template = SOFTWARE_HERO_TEMPLATES[archetype];
  return {
    h1: replaceTokens(template.h1, replacements),
    sub: replaceTokens(template.sub, replacements),
    ctaText: template.ctaText,
    ctaHref: '#contatti',
    trustSignal: replaceTokens(template.trustSignal, replacements),
  };
}

export function generateSoftwareDiagnostica(archetype: MarketArchetype, cityName: string, replacements: TokenReplacements) {
  const template = SOFTWARE_DIAGNOSTICA_TEMPLATES[archetype];
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
  const template = SOFTWARE_GOOD_INVESTMENT_TEMPLATES[archetype];
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
  const titleVariants = [
    `Software Gestionale a {{CityName}} | Manuel De Ceglie`,
    `Gestionale su Misura a {{CityName}}: automatizza la tua attività`,
    `CRM e Software per Aziende a {{CityName}}`,
  ];
  
  const descriptionVariants = [
    `Software gestionali e CRM su misura a {{CityName}}: elimino carta e fogli Excel, automatizzo processi e ti do il controllo totale.`,
    `Creo gestionali che si adattano ai tuoi processi. Più efficienza, meno errori, più tempo per i tuoi clienti a {{CityName}}.`,
    `Software gestionale a {{CityName}} per professionisti e attività locali. Automazione, controllo e risultati misurabili.`,
  ];
  
  const h1Variants = [
    `Software Gestionale a {{CityName}} per attività che vogliono crescere`,
    `Il tuo gestionale a {{CityName}} deve lavorare per te`,
    `Gestionali e CRM su Misura a {{CityName}}`,
  ];

  const title = pickVariant(citySlug, titleVariants);
  const description = pickVariant(citySlug, descriptionVariants);
  const h1 = pickVariant(citySlug, h1Variants);

  return {
    title: replaceTokens(title, replacements),
    description: replaceTokens(description, replacements),
    canonical: buildCanonicalUrl(citySlug, 'software-gestionali'),
    keywords: buildKeywords(cityName, province, 'Software Gestionale'),
    h1: replaceTokens(h1, replacements),
  };
}

export function generateSoftwareFAQ(archetype: MarketArchetype, citySlug: string, replacements: TokenReplacements) {
  const template = SOFTWARE_FAQ_TEMPLATES[archetype];
  
  return template.map(faq => ({
    q: spintaxParse(faq.q, citySlug),
    a: spintaxParse(faq.a, citySlug),
  }));
}
