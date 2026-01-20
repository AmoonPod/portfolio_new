import { MarketArchetype } from '@/data/archetypes';
import { TokenReplacements, replaceTokens, createReplacements, buildCanonicalUrl, buildKeywords } from '@/lib/link-graph/tokens';
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

// --- UTILS ---
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

// --- KEYWORD MAPPING SPECIFICO PER ARCHETIPO ---
// Questo aiuta Google a capire il contesto economico della zona
const ARCHETYPE_KEYWORDS: Record<MarketArchetype, string[]> = {
  MountainSmall: ['software offline', 'gestionale artigiani', 'digitalizzazione semplice', 'programmi senza internet'],
  HillMedium: ['software pmi', 'automazione ufficio', 'sviluppo gestionale cloud', 'software su misura artigiani'],
  IndustrialHub: ['software produzione', 'interconnessione 4.0', 'gestione commesse', 'software automazione industriale'],
  FoodValley: ['software tracciabilità', 'gestione lotti scadenza', 'software agroalimentare', 'automazione ordini'],
  ProvinceCapital: ['sviluppo web app', 'crm personalizzato', 'software su misura locale', 'integrazione api'],
  SuburbanGrowth: ['software scalabile', 'gestione clienti crm', 'automazione processi aziendali', 'sviluppo saas'],
  PlainsSmall: ['gestionale magazzino semplice', 'software fatturazione', 'programmatore locale', 'assistenza software'],
  MetroBologna: ['sviluppo piattaforme web', 'system integrator', 'software su misura enterprise', 'big data analytics'],
};

// --- HERO SECTION (Problema Universale -> Soluzione Locale) ---
// Nota: Rimosso "A Vignola creo..." che suona robotico. Meglio "Sviluppo Software a Vignola".

const SOFTWARE_HERO_TEMPLATES: Record<MarketArchetype, SoftwareHeroTemplate> = {
  // Fallback generici (coperti dai bucket sotto)
  MountainSmall: { h1: "Sviluppo Software a {{CityName}}", sub: "Soluzioni offline.", ctaText: "Inizia", trustSignal: "Locale" },
  HillMedium: { h1: "Sviluppo Software a {{CityName}}", sub: "Soluzioni offline.", ctaText: "Inizia", trustSignal: "Locale" },
  IndustrialHub: { h1: "Sviluppo Software a {{CityName}}", sub: "Soluzioni offline.", ctaText: "Inizia", trustSignal: "Locale" },
  FoodValley: { h1: "Sviluppo Software a {{CityName}}", sub: "Soluzioni offline.", ctaText: "Inizia", trustSignal: "Locale" },
  ProvinceCapital: { h1: "Sviluppo Software a {{CityName}}", sub: "Soluzioni offline.", ctaText: "Inizia", trustSignal: "Locale" },
  SuburbanGrowth: { h1: "Sviluppo Software a {{CityName}}", sub: "Soluzioni offline.", ctaText: "Inizia", trustSignal: "Locale" },
  PlainsSmall: { h1: "Sviluppo Software a {{CityName}}", sub: "Soluzioni offline.", ctaText: "Inizia", trustSignal: "Locale" },
  MetroBologna: { h1: "Sviluppo Software a {{CityName}}", sub: "Soluzioni offline.", ctaText: "Inizia", trustSignal: "Locale" },
};

const SOFTWARE_HERO_TEMPLATES_BY_INITIAL: Partial<Record<MarketArchetype, Record<CopyInitialBucket, SoftwareHeroTemplate>>> = {
  MountainSmall: {
    A_L: {
      h1: 'Sviluppo Software e Gestionali a {{CityName}}',
      sub: 'Basta carta e file persi. Realizzo software semplici e su misura che funzionano anche senza internet. Automatizza il lavoro noioso e recupera tempo prezioso.',
      ctaText: 'Analisi Gratuita',
      trustSignal: 'Sviluppo pratico per chi lavora sul territorio',
    },
    M_Z: {
      h1: 'Software su misura per attività a {{CityName}}',
      sub: 'Dimentica i programmi complicati. Ti costruisco uno strumento essenziale che fa esattamente quello che ti serve. Funziona offline, zero canoni, zero stress.',
      ctaText: 'Analisi Gratuita',
      trustSignal: 'Digitalizzazione concreta per la montagna',
    },
  },
  HillMedium: {
    A_L: {
      h1: 'Software Gestionale su Misura a {{CityName}}',
      sub: 'Il tuo metodo di lavoro è unico: il software deve adattarsi a te, non il contrario. Sviluppo soluzioni custom per PMI che eliminano Excel e i processi manuali.',
      ctaText: 'Parliamo del Progetto',
      trustSignal: 'Soluzioni informatiche sartoriali per PMI',
    },
    M_Z: {
      h1: 'Automazione e Software Custom a {{CityName}}',
      sub: 'Hai processi ripetitivi che ti rubano ore? Creiamo un tool su misura che li gestisce in un clic. Efficienza massima senza stravolgere le tue abitudini.',
      ctaText: 'Parliamo del Progetto',
      trustSignal: 'Sviluppatore software per artigiani e imprese',
    },
  },
  IndustrialHub: {
    A_L: {
      h1: 'Sviluppo Software per l\'Industria a {{CityName}}',
      sub: 'Collego ufficio, produzione e magazzino. Sviluppo software che eliminano la carta, tracciano le commesse e ti danno il controllo totale sui costi in tempo reale.',
      ctaText: 'Ottimizza i Processi',
      trustSignal: 'Specialista in automazione e Industria 4.0',
    },
    M_Z: {
      h1: 'Integrazioni e Software Gestionali a {{CityName}}',
      sub: 'I tuoi sistemi non comunicano? Creo integrazioni che fanno viaggiare i dati automaticamente tra i reparti. Meno errori umani, più velocità di produzione.',
      ctaText: 'Ottimizza i Processi',
      trustSignal: 'Software per la produzione e la logistica',
    },
  },
  FoodValley: {
    A_L: {
      h1: 'Software per Aziende Alimentari a {{CityName}}',
      sub: 'Dagli ordini alla spedizione, senza perdere un dato. Sviluppo gestionali su misura con tracciabilità lotti, gestione scadenze e documenti automatici.',
      ctaText: 'Digitalizza la Filiera',
      trustSignal: 'Automazione per il settore Food & Beverage',
    },
    M_Z: {
      h1: 'Gestionali e Tracciabilità su Misura a {{CityName}}',
      sub: 'Smetti di rincorrere ordini su WhatsApp ed Email. Centralizzo tutto in un unico software facile da usare che gestisce clienti, fornitori e produzione.',
      ctaText: 'Digitalizza la Filiera',
      trustSignal: 'Software specifici per la Food Valley',
    },
  },
  ProvinceCapital: {
    A_L: {
      h1: 'Sviluppo Web App e Gestionali a {{CityName}}',
      sub: 'Trasforma i tuoi file Excel in un vero software aziendale. Database unico, accessi sicuri e automazioni intelligenti per liberare il tuo team dalla burocrazia.',
      ctaText: 'Richiedi Preventivo',
      trustSignal: 'Sviluppo software professionali a {{CityName}}',
    },
    M_Z: {
      h1: 'Software su Misura e Automazioni a {{CityName}}',
      sub: 'Non ti serve un gestionale gigante, ti serve il *tuo* gestionale. Costruisco tool e piattaforme web specifiche per risolvere i tuoi colli di bottiglia operativi.',
      ctaText: 'Richiedi Preventivo',
      trustSignal: 'Soluzioni digitali custom (Codice di proprietà)',
    },
  },
  SuburbanGrowth: {
    A_L: {
      h1: 'Software Scalabili per Aziende di {{CityName}}',
      sub: 'La tua azienda cresce, ma i tuoi strumenti sono rimasti indietro? Sviluppo software che automatizzano il back-office e ti permettono di gestire il doppio dei clienti.',
      ctaText: 'Scala il Business',
      trustSignal: 'Partner tecnologico per aziende in crescita',
    },
    M_Z: {
      h1: 'Automazione Processi e CRM a {{CityName}}',
      sub: 'Elimina l\'errore umano e il data-entry manuale. Creo ecosistemi digitali dove sito, gestionale e contabilità si parlano da soli. Recupera il controllo.',
      ctaText: 'Scala il Business',
      trustSignal: 'Sviluppo software per l\'efficienza aziendale',
    },
  },
  PlainsSmall: {
    A_L: {
      h1: 'Gestionali Semplici e Su Misura a {{CityName}}',
      sub: 'Basta post-it e file persi. Metto ordine nella tua attività con un software unico, facile e veloce. Tutto sotto controllo, da qualsiasi dispositivo.',
      ctaText: 'Metti Ordine Ora',
      trustSignal: 'Software chiari ed efficaci per il territorio',
    },
    M_Z: {
      h1: 'Digitalizzazione Semplice a {{CityName}}',
      sub: 'Investi nella tua tranquillità. Sviluppo programmi su misura per gestire scadenze, clienti e lavori senza impazzire. Assistenza diretta inclusa.',
      ctaText: 'Metti Ordine Ora',
      trustSignal: 'Sviluppatore locale per piccole imprese',
    },
  },
  MetroBologna: {
    A_L: {
      h1: 'Sviluppo Piattaforme Digitali a {{CityName}}',
      sub: 'In un mercato competitivo, chi automatizza vince. Sviluppo dashboard, integrazioni API e software custom per darti un vantaggio tecnologico reale.',
      ctaText: 'Consulenza Tech',
      trustSignal: 'Sviluppo Full-Stack e System Integration',
    },
    M_Z: {
      h1: 'Software Innovation e Tool Custom a {{CityName}}',
      sub: 'Non adattarti agli standard. Costruiamo insieme la tecnologia che serve alla tua visione. Web App veloci, sicure e integrate con i tuoi sistemi.',
      ctaText: 'Consulenza Tech',
      trustSignal: 'Software su misura agile per Bologna e provincia',
    },
  },
};

// --- DIAGNOSTICA (Problema Universale - Soluzione Concreta) ---
// Nota: Rimosso "A Vignola è un problema..." -> Sostituito con problemi reali e tangibili.

const SOFTWARE_DIAGNOSTICA_TEMPLATES: Record<MarketArchetype, SoftwareDiagnosticaTemplate> = {
  // Fallback generici
  MountainSmall: { badge: 'Problemi', title: 'Caos dati?', problems: ['Dati sparsi'], solutions: [{ text: 'Database unico', value: 'Ordine' }] },
  HillMedium: { badge: 'Problemi', title: 'Caos dati?', problems: ['Dati sparsi'], solutions: [{ text: 'Database unico', value: 'Ordine' }] },
  IndustrialHub: { badge: 'Problemi', title: 'Caos dati?', problems: ['Dati sparsi'], solutions: [{ text: 'Database unico', value: 'Ordine' }] },
  FoodValley: { badge: 'Problemi', title: 'Caos dati?', problems: ['Dati sparsi'], solutions: [{ text: 'Database unico', value: 'Ordine' }] },
  ProvinceCapital: { badge: 'Problemi', title: 'Caos dati?', problems: ['Dati sparsi'], solutions: [{ text: 'Database unico', value: 'Ordine' }] },
  SuburbanGrowth: { badge: 'Problemi', title: 'Caos dati?', problems: ['Dati sparsi'], solutions: [{ text: 'Database unico', value: 'Ordine' }] },
  PlainsSmall: { badge: 'Problemi', title: 'Caos dati?', problems: ['Dati sparsi'], solutions: [{ text: 'Database unico', value: 'Ordine' }] },
  MetroBologna: { badge: 'Problemi', title: 'Caos dati?', problems: ['Dati sparsi'], solutions: [{ text: 'Database unico', value: 'Ordine' }] },
};

const SOFTWARE_DIAGNOSTICA_TEMPLATES_BY_INITIAL: Partial<Record<MarketArchetype, Record<CopyInitialBucket, SoftwareDiagnosticaTemplate>>> = {
  MountainSmall: {
    A_L: {
      badge: 'Problemi Comuni',
      title: 'Perdi tempo prezioso al computer invece di lavorare?',
      problems: [
        'Devi ricopiare a mano i dati dai fogli di cantiere al PC',
        'Perdi ore a cercare vecchi preventivi o note sparse',
        'I software standard richiedono internet, ma la linea va e viene',
        'Usi programmi complicati di cui sfrutti solo il 5%',
      ],
      solutions: [
        { text: 'Sviluppo "Offline-First": lavori sempre, sincronizzi dopo', value: 'Continuità operativa' },
        { text: 'Archivio digitale: trovi qualsiasi documento in 2 secondi', value: 'Tutto a portata di mano' },
        { text: 'Interfaccia essenziale: solo i tasti che ti servono', value: 'Facilissimo da usare' },
        { text: 'Inserimento dati unico: lo scrivi una volta, vale per tutto', value: 'Risparmio tempo' },
      ],
    },
    M_Z: {
      badge: 'Efficienza',
      title: 'Basta carta persa e contabilità nel weekend',
      problems: [
        'La scrivania è piena di foglietti che rischi di perdere',
        'Non sai mai a colpo d\'occhio chi ti deve ancora pagare',
        'Fare una fattura ti porta via 15 minuti ogni volta',
        'Vuoi digitalizzare ma hai paura che sia troppo difficile',
      ],
      solutions: [
        { text: 'Gestionale su misura semplicissimo, zero formazione', value: 'Usalo dal primo giorno' },
        { text: 'Cruscotto pagamenti: vedi subito i sospesi', value: 'Controllo finanziario' },
        { text: 'Generazione documenti automatica in un clic', value: 'Velocità imbattibile' },
        { text: 'Backup automatico in cloud: i tuoi dati sono al sicuro', value: 'Tranquillità totale' },
      ],
    },
  },
  HillMedium: {
    A_L: {
      badge: 'Analisi Processi',
      title: 'Il tuo gestionale attuale ti sta rallentando?',
      problems: [
        'Ti devi adattare tu al software invece che il contrario',
        'Per fare una operazione semplice devi aprire 5 finestre',
        'I dati sono sparsi tra Excel, WhatsApp e gestionale',
        'L\'assistenza è un call center che non sa chi sei',
      ],
      solutions: [
        { text: 'Sviluppo Sartoriale: ricalco il tuo modo di lavorare', value: 'Nessuno stress' },
        { text: 'Automazione Workflow: un clic fa il lavoro di dieci', value: 'Produttività +40%' },
        { text: 'Centralizzazione: tutto in un unico posto sicuro', value: 'Ordine mentale' },
        { text: 'Assistenza diretta con lo sviluppatore (io)', value: 'Risoluzione immediata' },
      ],
    },
    M_Z: {
      badge: 'Personalizzazione',
      title: 'Vuoi valorizzare la tua unicità, non standardizzarla',
      problems: [
        'I software commerciali non gestiscono le tue specificità',
        'Sei costretto a usare workaround e fogli Excel paralleli',
        'I collaboratori sbagliano perché il sistema è confuso',
        'Non hai controllo sui dati reali della tua produzione',
      ],
      solutions: [
        { text: 'Software costruito da zero sulle tue esigenze', value: 'Aderenza perfetta' },
        { text: 'Eliminazione definitiva dei fogli Excel volanti', value: 'Dato unico e certo' },
        { text: 'Interfaccia intuitiva per azzerare gli errori', value: 'Qualità del lavoro' },
        { text: 'Dashboard su misura per vedere i tuoi KPI', value: 'Controllo totale' },
      ],
    },
  },
  IndustrialHub: {
    A_L: {
      badge: 'Integrazione',
      title: 'I tuoi reparti non si parlano? È un costo nascosto enorme.',
      problems: [
        'L\'ufficio stampa fogli che poi girano a mano in officina',
        'I dati di produzione vengono reinseriti a mano nel gestionale',
        'Nessuno sa a che punto è una commessa senza fare telefonate',
        'Si perdono informazioni nel passaggio tra una persona e l\'altra',
      ],
      solutions: [
        { text: 'Flussi digitali: i dati viaggiano da soli tra i reparti', value: 'Addio carta inutile' },
        { text: 'Integrazioni API: collego i tuoi software attuali', value: 'Stop al data entry manuale' },
        { text: 'Monitoraggio stato commesse in tempo reale', value: 'Visione completa' },
        { text: 'Notifiche automatiche al cambio di stato', value: 'Comunicazione perfetta' },
      ],
    },
    M_Z: {
      badge: 'Automazione',
      title: 'Sistemi scollegati e dati duplicati? Fermiamo il caos.',
      problems: [
        'Devi esportare CSV da un programma e importarli in un altro',
        'Errori di copiatura manuale creano problemi a valle',
        'Le informazioni critiche sono chiuse nel PC di un dipendente',
        'Manca una visione unificata dell\'andamento aziendale',
      ],
      solutions: [
        { text: 'Automazioni che sincronizzano i dati in background', value: 'Dati sempre allineati' },
        { text: 'Database centralizzato accessibile (con permessi)', value: 'Collaborazione reale' },
        { text: 'Validazione automatica dei dati inseriti', value: 'Zero errori umani' },
        { text: 'Dashboard unificata per la direzione', value: 'Decisioni rapide' },
      ],
    },
  },
  FoodValley: {
    A_L: {
      badge: 'Organizzazione',
      title: 'Gestire gli ordini sta diventando un incubo?',
      problems: [
        'Gli ordini arrivano da mail, telefono e messaggi: si perde traccia',
        'Devi controllare manualmente scadenze e disponibilità',
        'Creare documenti di trasporto ed etichette richiede troppo tempo',
        'Il cliente chiede lo stato dell\'ordine e devi cercare ovunque',
      ],
      solutions: [
        { text: 'Raccolta ordini centralizzata multicanale', value: 'Nessun ordine perso' },
        { text: 'Alert automatici su scadenze e sottoscorta', value: 'Magazzino perfetto' },
        { text: 'Generazione documenti ed etichette in un clic', value: 'Da 10 min a 10 sec' },
        { text: 'Area clienti o notifiche automatiche sullo stato', value: 'Cliente soddisfatto' },
      ],
    },
    M_Z: {
      badge: 'Tracciabilità',
      title: 'La burocrazia alimentare ti sta soffocando?',
      problems: [
        'La tracciabilità dei lotti su carta è rischiosa e lenta',
        'In caso di richiamo prodotto impiegheresti giorni a capire',
        'Le schede tecniche non sono mai aggiornate con gli ingredienti',
        'Temi i controlli perché l\'archivio è disordinato',
      ],
      solutions: [
        { text: 'Tracciabilità digitale integrata (ingresso/uscita)', value: 'Conformità HACCP' },
        { text: 'Funzione "Recall Immediato": storico in 1 secondo', value: 'Sicurezza totale' },
        { text: 'Generazione automatica schede tecniche e allergeni', value: 'Sempre a norma' },
        { text: 'Archivio digitale ordinato e ricercabile', value: 'Pronti per i controlli' },
      ],
    },
  },
  ProvinceCapital: {
    A_L: {
      badge: 'Efficienza',
      title: 'Stai usando le persone per fare il lavoro dei robot?',
      problems: [
        'Hai dipendenti che passano ore a fare copia-incolla su Excel',
        'Mandare report o preventivi richiede passaggi manuali ripetitivi',
        'Gli errori di distrazione costano soldi e rifacimenti',
        'Le informazioni importanti non sono condivise',
      ],
      solutions: [
        { text: 'Bot e Script che fanno il data-entry al posto vostro', value: 'Risorse liberate' },
        { text: 'Generatori di documenti automatici (PDF/Excel)', value: 'Output coerente' },
        { text: 'Database condiviso in Cloud con ruoli definiti', value: 'Lavoro di squadra' },
        { text: 'Controlli automatici che impediscono errori', value: 'Qualità garantita' },
      ],
    },
    M_Z: {
      badge: 'Controllo',
      title: 'Dati sparsi e zero controllo? C\'è un modo migliore.',
      problems: [
        'Per trovare un\'informazione devi aprire 10 file diversi',
        'Non sai mai qual è l\'ultima versione del documento',
        'Se un dipendente manca, nessuno sa come portare avanti il lavoro',
        'Prendi decisioni basate su sensazioni, non su dati certi',
      ],
      solutions: [
        { text: 'Unica fonte di verità: tutto centralizzato', value: 'Chiarezza assoluta' },
        { text: 'Versionamento automatico e cloud', value: 'Sempre aggiornati' },
        { text: 'Processi standardizzati nel software', value: 'Delegabile a chiunque' },
        { text: 'Reportistica automatica in tempo reale', value: 'Business Intelligence' },
      ],
    },
  },
  SuburbanGrowth: {
    A_L: {
      badge: 'Crescita',
      title: 'La tua azienda cresce, ma il caos cresce più in fretta?',
      problems: [
        'Quello che gestivi a memoria con 10 clienti, con 100 è impossibile',
        'Ti dimentichi di richiamare i lead o di mandare i rinnovi',
        'I nuovi assunti ci mettono mesi a capire il tuo "sistema"',
        'Hai paura di spingere sulle vendite perché l\'ufficio è saturo',
      ],
      solutions: [
        { text: 'Architettura software scalabile (da 10 a 10k clienti)', value: 'Pronti al futuro' },
        { text: 'CRM con automazioni e scadenziario attivo', value: 'Niente più buchi' },
        { text: 'Workflow guidati che formano i neo-assunti', value: 'Onboarding rapido' },
        { text: 'Automazione back-office per gestire volumi alti', value: 'Crescita sostenibile' },
      ],
    },
    M_Z: {
      badge: 'Scalabilità',
      title: 'Vuoi scalare il business senza esplodere?',
      problems: [
        'I processi manuali sono il collo di bottiglia della crescita',
        'Non riesci a delegare perché "è tutto nella tua testa"',
        'Perdi qualità del servizio quando aumentano gli ordini',
        'Non hai metriche chiare per capire dove investire',
      ],
      solutions: [
        { text: 'Digitalizzazione processi: rendi il lavoro replicabile', value: 'Delega efficace' },
        { text: 'Software che garantisce gli standard di qualità', value: 'Servizio costante' },
        { text: 'Dashboard direzionale con i KPI vitali', value: 'Guida dati alla mano' },
        { text: 'Automazioni che gestiscono i picchi di lavoro', value: 'Flessibilità' },
      ],
    },
  },
  PlainsSmall: {
    A_L: {
      badge: 'Semplicità',
      title: 'Vuoi solo mettere ordine senza complicarti la vita?',
      problems: [
        'Hai il computer pieno di file chiamati "finale_v2_vero"',
        'Non ricordi mai se quel lavoro è stato fatturato o no',
        'Perdi tempo a cercare numeri di telefono e indirizzi',
        'Vuoi un programma semplice, non un\'astronave',
      ],
      solutions: [
        { text: 'Database unico e pulito per tutto', value: 'Basta duplicati' },
        { text: 'Stato lavori e pagamenti chiaro a colpo d\'occhio', value: 'Controllo totale' },
        { text: 'Rubrica intelligente collegata ai lavori', value: 'Tutto connesso' },
        { text: 'Interfaccia pulita: solo le cose che usi davvero', value: 'Zero stress' },
      ],
    },
    M_Z: {
      badge: 'Tranquillità',
      title: 'Investi nella tua serenità con un software su misura',
      problems: [
        'Hai paura di perdere dati importanti se si rompe il PC',
        'La gestione manuale ti crea ansia e insicurezza',
        'Non sai mai dove sono archiviate le cose',
        'Perdi tempo prezioso in burocrazia inutile',
      ],
      solutions: [
        { text: 'Dati in Cloud sicuro con backup automatici', value: 'Nessun rischio' },
        { text: 'Archivio digitale strutturato e logico', value: 'Ordine mentale' },
        { text: 'Accesso da qualsiasi dispositivo, ovunque', value: 'Libertà' },
        { text: 'Automazione delle scadenze e avvisi', value: 'Lavori sereno' },
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
        'Vuoi lanciare un nuovo servizio digitale ma ti manca il tool',
      ],
      solutions: [
        { text: 'Sviluppo rapido di tool specifici per le tue idee', value: 'Time-to-market' },
        { text: 'Integrazione totale Web-Ufficio tramite API', value: 'Business 24/7' },
        { text: 'Risposte automatiche e portali self-service', value: 'Clienti felici' },
        { text: 'Tecnologia flessibile per creare ciò che vuoi', value: 'Nessun limite' },
      ],
    },
    M_Z: {
      badge: 'Competitività',
      title: 'Nell\'area metropolitana serve velocità: sei pronto?',
      problems: [
        'I competitor offrono app e portali che tu non hai',
        'La gestione manuale ti rende lento e costoso',
        'Non sfrutti i dati dei clienti per vendere di più',
        'I tuoi sistemi sono vecchi e non si integrano',
      ],
      solutions: [
        { text: 'Sviluppo Web App moderne e veloci', value: 'Immagine innovativa' },
        { text: 'Automazione processi per abbattere i costi', value: 'Margini più alti' },
        { text: 'CRM avanzato per fidelizzare i clienti', value: 'Più vendite' },
        { text: 'Modernizzazione legacy: integro il vecchio col nuovo', value: 'Evoluzione smart' },
      ],
    },
  },
};

// --- GOOD INVESTMENT (Valore > Costo) ---

const SOFTWARE_GOOD_INVESTMENT_TEMPLATES: Record<MarketArchetype, SoftwareGoodInvestmentTemplate> = {
  // Fallback
  MountainSmall: { title: 'Software che', titleHighlight: 'funziona', subtitle: 'Semplice.' },
  HillMedium: { title: 'Software che', titleHighlight: 'funziona', subtitle: 'Semplice.' },
  IndustrialHub: { title: 'Software che', titleHighlight: 'funziona', subtitle: 'Semplice.' },
  FoodValley: { title: 'Software che', titleHighlight: 'funziona', subtitle: 'Semplice.' },
  ProvinceCapital: { title: 'Software che', titleHighlight: 'funziona', subtitle: 'Semplice.' },
  SuburbanGrowth: { title: 'Software che', titleHighlight: 'funziona', subtitle: 'Semplice.' },
  PlainsSmall: { title: 'Software che', titleHighlight: 'funziona', subtitle: 'Semplice.' },
  MetroBologna: { title: 'Software che', titleHighlight: 'funziona', subtitle: 'Semplice.' },
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
      subtitle: 'Sapere che i dati sono al sicuro, ordinati e accessibili non ha prezzo. Digitalizza il tuo archivio e lavora sereno, anche offline.',
    },
  },
  HillMedium: {
    A_L: {
      title: 'Non adattarti tu,',
      titleHighlight: 'adatta il software',
      subtitle: 'Perché cambiare il tuo modo di lavorare per colpa di un programma standard? Costruisco esattamente quello che ti serve, come lo vuoi tu.',
    },
    M_Z: {
      title: 'Valorizza la tradizione',
      titleHighlight: 'con la tecnologia',
      subtitle: 'Un software su misura rispetta il tuo lavoro artigianale e lo velocizza. Mantieni la qualità, elimini solo gli sprechi di tempo.',
    },
  },
  IndustrialHub: {
    A_L: {
      title: 'L\'automazione è',
      titleHighlight: 'tempo guadagnato',
      subtitle: 'Ogni minuto che il software risparmia è un minuto che puoi dedicare a far crescere l\'azienda. Si ripaga da solo in pochi mesi.',
    },
    M_Z: {
      title: 'Collega i reparti',
      titleHighlight: 'senza confusione',
      subtitle: 'Quando i dati fluiscono automaticamente tra produzione e ufficio, elimini errori e riunioni inutili. Efficienza pura.',
    },
  },
  FoodValley: {
    A_L: {
      title: 'Metti ordine nel',
      titleHighlight: 'tuo business',
      subtitle: 'Basta rincorrere le informazioni. Con il giusto strumento digitale, hai tutto sotto controllo in un attimo: ordini, scadenze, clienti.',
    },
    M_Z: {
      title: 'Qualità garantita',
      titleHighlight: 'senza sforzo',
      subtitle: 'Il software gestisce la burocrazia dei lotti e delle scadenze in automatico. Tu ti concentri sulla qualità del prodotto.',
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
      subtitle: 'Smetti di fare il lavoro del robot. Lascia che il software gestisca i dati, tu metti il valore aggiunto umano.',
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
      subtitle: 'Con più clienti serve più organizzazione. Un software scalabile ti permette di delegare con tranquillità e mantenere alto il servizio.',
    },
  },
  PlainsSmall: {
    A_L: {
      title: 'Investi nella tua',
      titleHighlight: 'tranquillità',
      subtitle: 'Sapere che i dati sono al sicuro, ordinati e accessibili non ha prezzo. Digitalizza il tuo archivio e lavora sereno.',
    },
    M_Z: {
      title: 'Ordine digitale',
      titleHighlight: 'senza complicazioni',
      subtitle: 'Un software semplice che mette tutto a posto: clienti, lavori, pagamenti. Niente file persi, niente confusione, solo chiarezza.',
    },
  },
  MetroBologna: {
    A_L: {
      title: 'Software unico per',
      titleHighlight: 'un\'azienda unica',
      subtitle: 'Le soluzioni standard vanno bene per la media. Se vuoi eccellere, ti serve uno strumento costruito apposta per la tua visione.',
    },
    M_Z: {
      title: 'Innovazione che',
      titleHighlight: 'ti fa competere',
      subtitle: 'Nell\'area bolognese la velocità è tutto. Un software moderno ti dà il vantaggio competitivo e l\'immagine professionale che cerchi.',
    },
  },
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
        a: 'No. Ti do un link privato, metti nome utente e password e sei dentro. Facile come entrare su Facebook. Funziona anche offline se necessario.',
      },
      {
        q: 'Se cambio computer perdo tutto?',
        a: 'No, i dati sono in Cloud. Cambi PC, fai login e ritrovi tutto esattamente come l\'avevi lasciato. Sicurezza totale.',
      },
      {
        q: 'È sicuro per la privacy?',
        a: 'Sì, rispetto tutte le normative GDPR. I dati sono tuoi, protetti e criptati. Nessuno può accedere se non tu.',
      },
      {
        q: 'Cosa succede se poi voglio aggiungere una funzione?',
        a: 'Nessun problema. Il software è modulare. Mi chiami e aggiungiamo il pezzo nuovo quando ti serve.',
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
        q: 'Il software rispetta il mio modo di lavorare?',
        a: 'Assolutamente sì. Prima di scrivere codice, ascolto come lavori. Il software si adatta a te, non il contrario.',
      },
      {
        q: 'Posso tracciare cose specifiche che i programmi standard non hanno?',
        a: 'Certo. Essendo su misura, posso aggiungere qualsiasi campo o funzione tu abbia bisogno.',
      },
      {
        q: 'È difficile da imparare per i collaboratori?',
        a: 'No, lo facciamo insieme. Disegno l\'interfaccia proprio ascoltando chi dovrà usarla, per renderla naturale.',
      },
      {
        q: 'Quanto tempo ci vuole per averlo pronto?',
        a: 'Dipende dalla complessità. Per piccoli tool bastano 2-3 settimane. Per gestionali completi 1-2 mesi.',
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
        q: 'Puoi far comunicare i miei sistemi attuali tra loro?',
        a: 'Sì, è una delle cose che faccio meglio. Creo integrazioni via API che fanno parlare produzione, ufficio e magazzino in automatico.',
      },
      {
        q: 'Quanto costa integrare i sistemi esistenti?',
        a: 'Spesso è più economico integrare che sostituire tutto. Faccio un preventivo dopo aver analizzato la situazione.',
      },
      {
        q: 'I dati sono accessibili da tutti i reparti?',
        a: 'Sì, posso creare un database condiviso con permessi personalizzati. Ogni reparto vede quello che serve.',
      },
      {
        q: 'Cosa succede se un sistema si rompe?',
        a: 'I dati sono in Cloud con backup automatici. Anche se un computer si rompe, i dati sono al sicuro.',
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
        q: 'Può gestire la tracciabilità HACCP?',
        a: 'Sì, posso creare un sistema che traccia lotti, scadenze, fornitori e genera automaticamente la documentazione HACCP richiesta.',
      },
      {
        q: 'Posso tracciare la provenienza di ogni prodotto?',
        a: 'Assolutamente. Il software tiene traccia di ogni lotto, fornitore e trasformazione, per una storia completa.',
      },
      {
        q: 'Il sistema mi avvisa delle scadenze?',
        a: 'Sì, posso impostare alert automatici per scadenze, riordini e qualsiasi evento importante.',
      },
      {
        q: 'Posso esportare i dati per i controlli?',
        a: 'Certo. Tutti i dati sono esportabili in Excel o PDF. Puoi generare report per controlli in un clic.',
      },
    ],
  },
  ProvinceCapital: {
    A_L: [
      {
        q: 'Ho già un gestionale: ha senso farne uno su misura?',
        a: 'Spesso sì. Possiamo integrare e migliorare quello che hai (oppure affiancarlo con un tool dedicato) per eliminare i passaggi manuali.',
      },
      {
        q: 'Puoi collegare sito, email, fatturazione e magazzino?',
        a: 'Certo. Il punto forte del software su misura è proprio questo: integrazioni. Tutto comunica.',
      },
      {
        q: 'Qual è il primo passo?',
        a: 'Una chiacchierata di 15 minuti. Mi spieghi come lavori oggi e dove si inceppa il processo.',
      },
      {
        q: 'Dati e codice restano miei?',
        a: 'Sì. Il software è costruito per te e i dati sono tuoi. Niente lock-in.',
      },
    ],
    M_Z: [
      {
        q: 'Puoi automatizzare Excel e il copia-incolla?',
        a: 'Sì. Creo automazioni che prendono i dati dove sono (email, file, form) e li trasformano in azioni e report.',
      },
      {
        q: 'Quanto costa un software su misura a {{CityName}}?',
        a: 'Dipende da cosa deve fare. Possiamo partire da un tool piccolo e focalizzato, oppure da un gestionale completo. Preventivo chiaro dopo l\'analisi.',
      },
      {
        q: 'Posso partire piccolo e poi aggiungere funzioni?',
        a: 'Assolutamente. Progetto tutto in modo modulare: inizi con l\'essenziale, poi si cresce.',
      },
      {
        q: 'Dopo la consegna offri assistenza?',
        a: 'Sì. Se c\'è un problema lo gestisco io direttamente. E se vuoi evolverlo nel tempo, siamo pronti.',
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
        a: 'Sì, mi occupo io di prendere le tue vecchie anagrafiche o storici e metterli nel nuovo sistema.',
      },
      {
        q: 'È compatibile con Mac e Windows?',
        a: 'Sì, sviluppo "Web App" che funzionano dentro il browser (Chrome, Safari), quindi vanno su qualsiasi computer.',
      },
      {
        q: 'Posso provarlo prima?',
        a: 'Essendo su misura, non c\'è una demo pronta. Ma ti mostro prototipi e disegni delle schermate prima di scrivere il codice.',
      },
    ],
    M_Z: [
      {
        q: 'Come faccio a delegare senza perdere il controllo?',
        a: 'Il software ha workflow guidati. I collaboratori seguono processi chiari, tu monitori tutto dalla dashboard.',
      },
      {
        q: 'I nuovi collaboratori ci metteranno mesi a impararlo?',
        a: 'No. L\'interfaccia è pensata per essere intuitiva. Chiunque può usarlo subito, senza formazione lunga.',
      },
      {
        q: 'Posso vedere cosa stanno facendo i collaboratori?',
        a: 'Sì, la dashboard ti mostra lo stato di ogni pratica e chi sta lavorando su cosa. Visibilità totale.',
      },
      {
        q: 'Cosa succede se voglio aggiungere più utenti?',
        a: 'Nessun problema. Il software è scalabile: aggiungi utenti quando servono, senza costi esorbitanti.',
      },
    ],
  },
  PlainsSmall: {
    A_L: [
      {
        q: 'Costa tanto farselo fare su misura?',
        a: 'Meno di quanto credi. Un piccolo tool che ti salva 2 ore al giorno può costare anche solo 1.000-2.000€ una tantum.',
      },
      {
        q: 'Devo installare cose complicate?',
        a: 'No. Ti do un link privato, metti nome utente e password e sei dentro. Facile.',
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
        q: 'È davvero semplice da usare?',
        a: 'Sì, è il mio obiettivo principale. Creo interfacce pulite con pochi tasti chiari. Se sai usare WhatsApp, saprai usare questo.',
      },
      {
        q: 'Quanto tempo ci vuole per metterlo in funzione?',
        a: 'Dipende dalla complessità. Per piccoli tool bastano 2-3 settimane. Ti do tempi certi prima di iniziare.',
      },
      {
        q: 'Posso provarlo prima di pagare tutto?',
        a: 'Sì, lavoro con acconti progressivi. Paghi il saldo solo quando vedi che tutto funziona.',
      },
      {
        q: 'Cosa succede se poi non mi serve più?',
        a: 'I dati sono tuoi e puoi esportarli quando vuoi. Non sei "bloccato" nel sistema.',
      },
    ],
  },
  MetroBologna: {
    A_L: [
      {
        q: 'Sviluppi anche App per il telefono?',
        a: 'Sì, posso creare anche App che si scaricano dallo store o Web App che sembrano app native. Dipende da cosa ti serve.',
      },
      {
        q: 'Puoi collegarlo al mio sito web?',
        a: 'Certo. Un classico esempio è: cliente compila form sul sito -> finisce direttamente nel tuo gestionale -> parte email automatica.',
      },
      {
        q: 'Qual è il primo passo?',
        a: 'Scrivimi o chiamami. Facciamo una chiacchierata di 15 minuti gratis. Mi spieghi il problema e ti dico se posso risolverlo.',
      },
      {
        q: 'Lavori da solo o hai un team?',
        a: 'Sono un libero professionista, ma per progetti grossi ho una rete di collaboratori fidati. Unico referente (io), flessibilità del team.',
      },
    ],
    M_Z: [
      {
        q: 'Puoi creare portali clienti self-service?',
        a: 'Sì, posso sviluppare portali dove i clienti accedono, vedono i loro ordini e fanno richieste 24/7.',
      },
      {
        q: 'Quanto tempo ci vuole per essere operativi?',
        a: 'Dipende dal progetto. Per tool mirati bastano 2-3 settimane. Per piattaforme complete 1-2 mesi.',
      },
      {
        q: 'Il software può integrarsi con strumenti cloud moderni?',
        a: 'Assolutamente. Google Workspace, Microsoft 365, Dropbox e qualsiasi servizio con API. Il software parla con tutto.',
      },
      {
        q: 'Offri supporto continuo dopo la consegna?',
        a: 'Sì. Se c\'è un problema lo risolvo io direttamente. E se vuoi evolvere il software, aggiungiamo funzioni quando servono.',
      },
    ],
  },
};

const SOFTWARE_FAQ_TEMPLATES: Record<MarketArchetype, SoftwareFaqTemplate> = {
  // Fallback generico per sicurezza
  MountainSmall: SOFTWARE_FAQ_TEMPLATES_BY_INITIAL.MountainSmall!.A_L!,
  HillMedium: SOFTWARE_FAQ_TEMPLATES_BY_INITIAL.HillMedium!.A_L!,
  IndustrialHub: SOFTWARE_FAQ_TEMPLATES_BY_INITIAL.IndustrialHub!.A_L!,
  FoodValley: SOFTWARE_FAQ_TEMPLATES_BY_INITIAL.FoodValley!.A_L!,
  ProvinceCapital: SOFTWARE_FAQ_TEMPLATES_BY_INITIAL.ProvinceCapital!.A_L!,
  SuburbanGrowth: SOFTWARE_FAQ_TEMPLATES_BY_INITIAL.SuburbanGrowth!.A_L!,
  PlainsSmall: SOFTWARE_FAQ_TEMPLATES_BY_INITIAL.PlainsSmall!.A_L!,
  MetroBologna: SOFTWARE_FAQ_TEMPLATES_BY_INITIAL.MetroBologna!.A_L!,
};

// --- FUNZIONE SEO PRINCIPALE (OTTIMIZZATA) ---
export function generateSoftwareSEO(
  archetype: MarketArchetype,
  cityName: string,
  province: string,
  citySlug: string,
  replacements: TokenReplacements
) {
  const bucket = getCopyInitialBucketFromCityName(cityName);

  // 1. Title Tags aggressivi e orientati al servizio (Sviluppo vs Gestionale generico)
  // Differenziamo A-L e M-Z per evitare duplicazione esatta, ma manteniamo i concetti chiave
  const titleVariants =
    bucket === 'A_L'
      ? [
        `Sviluppo Software su Misura a {{CityName}} | Preventivo Gratuito`,
        `Realizzazione Gestionali Web a {{CityName}} | Manuel De Ceglie`,
        `Programmatore Software a {{CityName}} per Automazione Processi`,
        `Realizzo Software su Misura a {{CityName}}: Sviluppo Tool e Web App Custom`,
      ]
      : [
        `Automazioni e Software Personalizzati a {{CityName}} | No Canoni`,
        `Sviluppo Tool e Gestionali a {{CityName}} per Aziende`,
        `Software su Misura {{CityName}}: Sviluppo Web e Integrazioni`,
        `Cerchi un Programmatore a {{CityName}}? Sviluppo Software Custom`,
      ];

  // 2. Meta Descriptions focalizzate sul beneficio (No Excel, Automazione)
  const descriptionVariants =
    bucket === 'A_L'
      ? [
        `Sviluppo software su misura a {{CityName}}. Elimina Excel, automatizza i processi ripetitivi e ottieni strumenti web personalizzati senza costi di licenza.`,
        `Sviluppatore software a {{CityName}}. Realizzo gestionali, CRM e automazioni per PMI. Analisi gratuita dei tuoi processi e preventivo chiaro.`,
        `Basta dati sparsi. Realizzo software a {{CityName}} per centralizzare il tuo lavoro. Web App veloci, sicure e proprietarie.`,
      ]
      : [
        `Vuoi automatizzare il lavoro a {{CityName}}? Sviluppo tool e software custom che eliminano il copia-incolla e gli errori. Preventivo gratuito.`,
        `Programmatore a {{CityName}} specializzato in software gestionali su misura. Trasforma i tuoi file Excel in Web App potenti e facili da usare.`,
        `Non adattarti ai software standard. A {{CityName}} sviluppo soluzioni su misura per la tua azienda. Integrazioni, API e Automazioni.`,
      ];

  const h1Variants =
    bucket === 'A_L'
      ? [
        `Sviluppo Software Gestionale a {{CityName}}`,
        `Soluzioni Software su Misura a {{CityName}}`,
        `Automazione Processi e Software a {{CityName}}`,
      ]
      : [
        `Realizzazione Software e Tool a {{CityName}}`,
        `Sviluppo Web App e Gestionali a {{CityName}}`,
        `Programmatore Software Custom a {{CityName}}`,
      ];

  const title = pickVariant(citySlug, titleVariants);
  const description = pickVariant(citySlug, descriptionVariants);
  const h1 = pickVariant(citySlug, h1Variants);

  // 3. KEYWORD STRATEGY AVANZATA
  // Base keywords (generiche per tutti)
  const baseKeywords = [
    `sviluppo software ${cityName}`,
    `sviluppo software a ${cityName}`,
    `sviluppo software su misura a ${cityName}`,
    `programmatore software a ${cityName}`,
    `software su misura ${cityName}`,
    `realizzazione gestionali ${cityName}`,
    `crm su misura a ${cityName}`,
    `creazione database ${cityName}`,
    `sviluppo web app ${cityName}`,
    `consulenza informatica ${cityName}`,
  ];

  // Aggiungi keyword specifiche per l'archetipo (Industrial, Food, ecc.)
  const specificKeywords = ARCHETYPE_KEYWORDS[archetype] || [];

  // Unisci e rimuovi duplicati
  const finalKeywords = Array.from(new Set([...baseKeywords, ...specificKeywords]));

  return {
    title: replaceTokens(title, replacements),
    description: replaceTokens(description, replacements),
    canonical: buildCanonicalUrl(citySlug, 'sviluppo-software'),
    keywords: finalKeywords, // Ora include le keyword specifiche del settore!
    h1: replaceTokens(h1, replacements),
  };
}

// --- GENERATOR FUNCTIONS ---

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
  const templateGroup = SOFTWARE_DIAGNOSTICA_TEMPLATES_BY_INITIAL[archetype] || { A_L: SOFTWARE_DIAGNOSTICA_TEMPLATES[archetype], M_Z: SOFTWARE_DIAGNOSTICA_TEMPLATES[archetype] };
  const template = templateGroup[bucket] || SOFTWARE_DIAGNOSTICA_TEMPLATES[archetype];

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
  const templateGroup = SOFTWARE_GOOD_INVESTMENT_TEMPLATES_BY_INITIAL[archetype] || { A_L: SOFTWARE_GOOD_INVESTMENT_TEMPLATES[archetype], M_Z: SOFTWARE_GOOD_INVESTMENT_TEMPLATES[archetype] };
  const template = templateGroup[bucket] || SOFTWARE_GOOD_INVESTMENT_TEMPLATES[archetype];

  return {
    title: replaceTokens(template.title, replacements),
    titleHighlight: replaceTokens(template.titleHighlight, replacements),
    subtitle: replaceTokens(template.subtitle, replacements),
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