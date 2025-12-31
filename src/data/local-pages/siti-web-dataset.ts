import { LocalPageData } from './types';

const BASE_URL = 'https://manueldeceglie.it';

export const sitiWebDataset: LocalPageData[] = [
  {
    slug: 'castelnovo-ne-monti',
    cityName: "Castelnovo ne' Monti",
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 10500,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offer: {
      title: 'Offerta Lancio Appennino',
      description:
        'Sito Vetrina Professionale (5 pagine), SEO base e ottimizzazione mobile.',
      price: '800€',
      badge: 'Promo Locale',
    },
    seo: {
      title: "Realizzazione Siti Web Castelnovo ne' Monti | Manuel De Ceglie",
      description:
        "Sviluppo siti web per attività a Castelnovo ne' Monti. Siti veloci, pensati per chi vive l'Appennino e vuole farsi trovare dai turisti.",
      canonical: `${BASE_URL}/siti-web-castelnovo-ne-monti`,
      keywords: [
        'siti web castelnovo ne monti',
        'web designer castelnovo',
        'realizzazione siti reggio emilia',
        'sviluppatore web appennino',
      ],
      h1: "Siti Web per le attività di Castelnovo ne' Monti",
    },
    hero: {
      h1: 'Il tuo lavoro merita di essere visto, anche quassù.',
      sub: 'Aiuto agriturismi, artigiani e negozi di Castelnovo a farsi trovare online. Non ti serve un sito complicato, ti serve un sito che porti persone in negozio o in struttura.',
      ctaText: 'Parliamo del tuo progetto',
      ctaHref: '#contatti',
      trustSignal: 'Lavoro con le realtà del nostro territorio',
    },
    pain: {
      title: 'Senti anche tu che il passaparola non basta più?',
      bullets: [
        'I turisti cercano un posto dove mangiare o dormire ma su Google non esisti',
        'Hai un sito vecchio che da telefono non si legge (e qui la gente usa solo quello)',
        'Vedi i tuoi concorrenti di Reggio o Modena che prendono i tuoi potenziali clienti',
        'Ti hanno chiesto cifre assurde per un sito che poi non gestisci tu',
        'La tua scheda su Maps ha le foto vecchie o gli orari sbagliati',
      ],
    },
    solution: {
      title: 'Un sito che lavora per te, mentre sei in laboratorio o in campo',
      body: 'Conosco bene la nostra zona e so che qui le persone cercano concretezza. Non ti vendo fumo: ti costruisco un sito che carica in un secondo anche con poco segnale, che spiega bene cosa fai e che rende facilissimo contattarti. Che tu sia un elettricista, un ristoratore o un produttore locale, il tuo sito sarà il tuo miglior biglietto da visita.',
      highlights: [
        "Veloce davvero, anche con la connessione dell'Appennino",
        'Ottimizzato per farti trovare da chi cerca in zona',
        'Facile da usare: puoi cambiare foto e orari da solo',
        'Integrazione diretta con WhatsApp per ricevere ordini o prenotazioni',
        'Scheda Google Maps finalmente sistemata e professionale',
      ],
    },
    uniqueBlocks: [
      {
        kind: 'comparison',
        title: "Perché un sito 'fatto bene' vince su uno economico",
        items: [
          {
            label: 'Velocità di caricamento',
            has: true,
            description: 'Fondamentale se il segnale non è al massimo',
          },
          {
            label: 'Ottimizzazione Google Maps',
            has: true,
            description: 'Ti posiziona sopra i tuoi competitor in zona',
          },
          {
            label: 'Supporto diretto (parli con me)',
            has: true,
            description: 'Nessun call center, mi trovi subito',
          },
          {
            label: 'Pannello di controllo semplice',
            has: true,
            description:
              'Modifichi tutto in autonomia senza pagarmi ogni volta',
          },
          {
            label: 'Sito di proprietà al 100%',
            has: true,
            description: 'Nessun canone nascosto o vincolo strano',
          },
        ],
      },
      {
        kind: 'case',
        title: "Dall'invisibilità a 15 contatti al mese",
        before:
          'Un agriturismo locale aveva un sito fatto 10 anni fa, non ottimizzato per mobile. Riceveva solo chiamate da chi già lo conosceva.',
        after:
          'Dopo il nuovo sito, hanno iniziato a ricevere prenotazioni da turisti che non sapevano nemmeno della loro esistenza. +1400% di visite al sito in 3 mesi.',
        metrics: [
          { label: 'Prenotazioni online', value: '+1400%', trend: 'up' },
          { label: 'Visibilità locale', value: 'Top 3 su Maps', trend: 'up' },
          { label: 'Tempo di risposta', value: 'Immediato', trend: 'up' },
        ],
      },
    ],
    faq: [
      {
        q: 'Ma serve davvero un sito se ho già la pagina Facebook?',
        a: 'Facebook è utile, ma non è tuo. Se domani cambiano le regole o ti bloccano il profilo, perdi tutto. Un sito è casa tua, è professionale e soprattutto ti fa trovare su Google da chi non sa chi sei.',
      },
      {
        q: 'Quanto tempo devo dedicarci? Io devo lavorare...',
        a: 'Praticamente zero. Mi dai le informazioni base, qualche foto, e al resto penso io. Ti consegno un prodotto finito che devi solo usare.',
      },
      {
        q: 'E se poi voglio cambiare un prezzo o un orario?',
        a: 'Ti lascio un accesso semplicissimo. È come usare Word o Facebook: entri, cambi il testo e salvi. Se poi hai problemi, mi chiami.',
      },
      {
        q: 'Quanto costa davvero? Ci sono costi nascosti?',
        a: "L'offerta per Castelnovo è chiara: 800€ per il sito completo. Gli unici costi extra sono l'hosting e il dominio (circa 50-70€ l'anno) che paghi direttamente al fornitore, senza ricarichi da parte mia.",
      },
    ],
    links: [
      {
        label: 'Software per aziende locali',
        href: '/gestionali-castelnovo-ne-monti',
      },
      {
        label: 'App per prenotazioni',
        href: '/app-mobile-castelnovo-ne-monti',
      },
      { label: 'Vedi i miei lavori', href: '/#projects' },
    ],
  },
  {
    slug: 'reggio-emilia',
    cityName: 'Reggio Emilia',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 171000,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    seo: {
      title:
        'Realizzazione Siti Web Reggio Emilia | Sviluppatore Professionale',
      description:
        'Siti web che portano clienti a Reggio Emilia. Soluzioni professionali per studi medici, avvocati, negozi e aziende. SEO locale inclusa.',
      canonical: `${BASE_URL}/siti-web-reggio-emilia`,
      keywords: [
        'siti web reggio emilia',
        'sviluppatore web reggio emilia',
        'realizzazione siti web re',
        'web designer reggio',
        'seo reggio emilia',
      ],
      h1: 'Siti Web che funzionano a Reggio Emilia',
    },
    hero: {
      h1: 'Smetti di essere invisibile ai clienti di Reggio.',
      sub: 'In una città come la nostra, la concorrenza è tanta. Se il tuo sito è lento, brutto o non si trova, stai regalando clienti a qualcun altro. Ti aiuto a riprenderteli.',
      ctaText: "Voglio un'analisi gratuita",
      ctaHref: '#contatti',
      trustSignal: 'Oltre 50 progetti realizzati con successo',
    },
    pain: {
      title: 'Cosa non va nel tuo attuale sito?',
      bullets: [
        'Sei in seconda o terza pagina su Google e non ti vede nessuno',
        'Il sito sembra uscito dal 2010 e non dà fiducia ai clienti',
        'Chi entra esce subito perché non capisce cosa deve fare',
        'Hai speso soldi in passato e non hai visto un solo cliente nuovo',
        'Non sai quante persone visitano il sito o cosa cercano',
      ],
    },
    solution: {
      title: 'Un metodo basato sui dati, non sulle opinioni',
      body: "Non sono qui per farti un sito 'carino'. Sono qui per costruire uno strumento che ti aiuti a fatturare di più. Analizzo i tuoi competitor a Reggio, capisco cosa cercano i tuoi clienti e creo un'esperienza di navigazione che li porti dritti a scriverti o chiamarti. Niente fronzoli, solo quello che serve per convertire.",
      highlights: [
        'Design moderno che riflette la tua professionalità',
        'SEO tecnica per scalare le posizioni a Reggio Emilia',
        'Ottimizzazione per conversioni (più lead, meno perdite)',
      ],
    },
    uniqueBlocks: [
      {
        kind: 'process',
        title: 'Come lavoreremo insieme (senza perdite di tempo)',
        steps: [
          {
            step: 1,
            title: 'Analisi Strategica',
            description:
              'Capisco chi sono i tuoi clienti a Reggio e cosa offri di diverso.',
          },
          {
            step: 2,
            title: 'Progettazione',
            description:
              "Definisco la struttura del sito per guidare l'utente all'azione.",
          },
          {
            step: 3,
            title: 'Sviluppo Tecnico',
            description: 'Costruisco un sito velocissimo e pronto per Google.',
          },
          {
            step: 4,
            title: 'Lancio e Crescita',
            description:
              'Mettiamo online e monitoriamo i primi risultati insieme.',
          },
        ],
      },
      {
        kind: 'testimonial',
        text: 'Cercavamo qualcuno che capisse davvero le nostre esigenze senza venderci un pacchetto standard. Manuel ha saputo interpretare perfettamente il nostro studio professionale, portandoci contatti qualificati fin dalle prime settimane.',
        author: 'Dott. Andrea Borghi',
        role: 'Titolare Studio Professionale',
        location: 'Reggio Emilia',
      },
    ],
    faq: [
      {
        q: 'Perché non dovrei usare un servizio gratuito come Wix?',
        a: "Wix va bene per un blog personale, non per un'azienda. I siti gratuiti sono lenti, non sono tuoi (se chiudono, perdi tutto) e non si posizionano bene su Google. Se vuoi essere preso sul serio, serve una soluzione professionale.",
      },
      {
        q: 'Mi aiuti anche con i testi? Non so cosa scrivere...',
        a: 'Certamente. Possiamo lavorare insieme per definire i messaggi chiave o posso collaborare con copywriter professionisti che scriveranno testi ottimizzati per vendere i tuoi servizi.',
      },
      {
        q: 'Quanto costa la manutenzione?',
        a: "Offro piani chiari che includono hosting, backup giornalieri e aggiornamenti di sicurezza. Non avrai mai sorprese o siti che smettono di funzionare all'improvviso.",
      },
    ],
    links: [
      {
        label: 'Gestionali per studi professionali',
        href: '/gestionali-reggio-emilia',
      },
      {
        label: 'App per fidelizzazione clienti',
        href: '/app-mobile-reggio-emilia',
      },
      { label: 'Chi sono e come lavoro', href: '/chi-sono' },
    ],
  },
  {
    slug: 'carpineti',
    cityName: 'Carpineti',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 4200,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offer: {
      title: 'Speciale Piccole Attività',
      description:
        'Sito Vetrina Standard (5 pagine) ideale per piccole attività.',
      price: '800€',
      badge: 'Prezzo Amico',
    },
    seo: {
      title: 'Siti Web Carpineti | Sviluppatore Locale Manuel De Ceglie',
      description:
        'Creazione siti web a Carpineti. Soluzioni semplici ed efficaci per agriturismi, artigiani e commercianti della montagna reggiana.',
      canonical: `${BASE_URL}/siti-web-carpineti`,
      keywords: [
        'siti web carpineti',
        'web designer carpineti',
        'siti web appennino',
        'sviluppatore web montagna',
        'realizzazione siti re',
      ],
      h1: 'Siti Web per le attività di Carpineti',
    },
    hero: {
      h1: 'Porta il tuo lavoro fuori dai confini di Carpineti.',
      sub: "Se hai un B&B, una ditta o un'attività artigianale, un sito web è la tua vetrina aperta h24. Ti aiuto a farti trovare da chi cerca i tuoi servizi online, con semplicità e trasparenza.",
      ctaText: 'Chiedimi un preventivo',
      ctaHref: '#contatti',
      trustSignal: 'Supporto le attività locali della montagna',
    },
    pain: {
      title: 'Ti capita mai di pensare che...',
      bullets: [
        'Un sito web costi troppo per una piccola attività',
        'Nessuno cercherà mai un artigiano di Carpineti online',
        'Sia troppo complicato da gestire e non hai tempo',
        'Basti avere solo la pagina Facebook o Instagram',
        'Il sito che avevi anni fa non ti ha mai portato un cliente',
      ],
    },
    solution: {
      title: 'Siti concreti, per persone concrete',
      body: "Abito in zona e so cosa significa gestire un'attività qui. Non ti serve un sito con animazioni spaziali che non carica mai. Ti serve un sito leggero, che funzioni bene sul telefono di chi sta guidando verso Carpineti, che mostri chiaramente cosa fai e dove sei. Il mio obiettivo è farti squillare il telefono o ricevere mail di richiesta.",
      highlights: [
        'Prezzo fisso senza sorprese',
        'Ottimizzato per i turisti che visitano il Castello e la zona',
        'Facilissimo da usare anche da smartphone',
        'Posizionamento locale su Google Maps incluso',
        'Supporto diretto: se hai un problema, mi chiami',
      ],
    },
    uniqueBlocks: [
      {
        kind: 'checklist',
        title: 'Cosa avrai con il tuo nuovo sito',
        items: [
          'Design pulito che mette in risalto il tuo lavoro',
          'Galleria fotografica per i tuoi prodotti o la tua struttura',
          'Modulo contatti semplice per ricevere richieste',
          'Mappa interattiva per portarti i clienti in sede',
          'Collegamento rapido a WhatsApp e Social',
          "Ottimizzazione per la ricerca 'vicino a me'",
          'Corso rapido su come aggiornarlo da solo',
        ],
        icon: true,
      },
      {
        kind: 'callout',
        title: 'Vuoi un sito, ma non sai da dove iniziare?',
        body: 'Tranquillo, ci penso io a tutto. Dalla registrazione del nome alla configurazione delle email. Tu devi solo dirmi cosa fai e mandarmi qualche foto.',
        variant: 'info',
      },
    ],
    faq: [
      {
        q: 'Ho davvero bisogno di un sito se tutti in paese mi conoscono?',
        a: 'In paese sì, ma fuori? Se un turista cerca un B&B o un artigiano a Carpineti, troverà chi ha un sito professionale. Non lasciare questi clienti alla concorrenza dei paesi vicini.',
      },
      {
        q: "Quanto costa l'offerta da 800€?",
        a: 'È un prezzo pensato proprio per le piccole realtà locali. Include tutto il necessario per partire: 5 pagine (Home, Chi Siamo, Servizi, Gallery, Contatti), ottimizzazione mobile e SEO base.',
      },
      {
        q: 'E se non ho foto belle?',
        a: 'Possiamo iniziare con quelle che hai o posso darti qualche consiglio su come scattarle con il cellulare. Se preferisci, posso metterti in contatto con fotografi della zona.',
      },
    ],
    links: [
      { label: 'Soluzioni per Agriturismi', href: '#' },
      { label: 'Siti per Artigiani', href: '#' },
      { label: 'Contattami ora', href: '#contatti' },
    ],
  },
  {
    slug: 'sassuolo',
    cityName: 'Sassuolo',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 41000,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    seo: {
      title: 'Siti Web Sassuolo | Soluzioni B2B & Cataloghi Digitali',
      description:
        'Sviluppo siti web per aziende del distretto ceramico a Sassuolo. Cataloghi digitali, siti B2B e soluzioni integrate per la crescita aziendale.',
      canonical: `${BASE_URL}/siti-web-sassuolo`,
      keywords: [
        'siti web sassuolo',
        'sviluppatore web sassuolo',
        'siti aziende ceramiche',
        'web designer modena',
        'e-commerce sassuolo',
      ],
      h1: 'Siti Web Aziendali nel Distretto di Sassuolo',
    },
    hero: {
      h1: 'Il tuo catalogo è bloccato in un PDF (o peggio, sulla carta)?',
      sub: 'Aiuto le aziende ceramiche e le PMI di Sassuolo a trasformare il loro sito in un vero strumento commerciale. Cataloghi intelligenti, aree riservate e visibilità internazionale.',
      ctaText: 'Parliamo di business',
      ctaHref: '#contatti',
      trustSignal: 'Consulente per diverse realtà del distretto',
    },
    pain: {
      title: 'I limiti che frenano la tua azienda online',
      bullets: [
        'I clienti esteri non trovano facilmente i tuoi prodotti online',
        'Il tuo team commerciale perde tempo a mandare listini via email',
        'Il sito attuale non riflette la qualità dei tuoi prodotti',
        'Non hai un modo semplice per aggiornare le nuove collezioni',
        'Il sito è lento e i partner B2B lo trovano frustrante',
      ],
    },
    solution: {
      title: 'Efficienza e velocità: il linguaggio delle aziende',
      body: "A Sassuolo sappiamo che il tempo è denaro. Non ti propongo un sito generico, ma una piattaforma pensata per il B2B. Che tu venda ceramica, servizi industriali o logistica, il tuo sito deve semplificare la vita a te e ai tuoi clienti. Integrazioni con i tuoi dati attuali, filtri avanzati per i prodotti e una velocità che stupirà i tuoi partner all'estero.",
      highlights: [
        'Cataloghi dinamici facili da navigare',
        'Aree riservate per distributori e agenti',
        'SEO multilingua per raggiungere i mercati esteri',
        'Integrazione con ERP e CRM aziendali',
        'Performance ottimizzate per carichi di immagini elevati',
      ],
    },
    uniqueBlocks: [
      {
        kind: 'comparison',
        title: 'Perché un sito industriale deve essere diverso',
        items: [
          {
            label: 'Ricerca prodotti avanzata',
            has: true,
            description: 'Filtri per formato, colore, tipologia',
          },
          {
            label: 'Documentazione tecnica accessibile',
            has: true,
            description: 'Schede tecniche e certificazioni a portata di click',
          },
          {
            label: 'Sicurezza dei dati',
            has: true,
            description: 'Protezione delle aree riservate e dei listini',
          },
          {
            label: 'Scalabilità',
            has: true,
            description: 'Il sito cresce con il tuo catalogo',
          },
          {
            label: 'Supporto post-vendita',
            has: true,
            description: 'Manutenzione proattiva e monitoraggio',
          },
        ],
      },
      {
        kind: 'case',
        title: 'Caso: Ottimizzazione Catalogo B2B',
        before:
          "Un'azienda del settore ceramico gestiva i prodotti solo tramite PDF pesantissimi. I clienti esteri facevano fatica a scegliere i materiali.",
        after:
          'Abbiamo creato un catalogo interattivo veloce. Risultato: +40% di lead qualificati e agenti molto più produttivi.',
        metrics: [
          { label: 'Richieste campioni', value: '+40%', trend: 'up' },
          { label: 'Velocità sito', value: '< 1.5s', trend: 'up' },
          { label: 'Tempo di gestione', value: '-60%', trend: 'up' },
        ],
      },
    ],
    faq: [
      {
        q: 'Potete integrarvi con il nostro gestionale attuale?',
        a: 'Sì, valuto la tecnologia del vostro ERP/CRM per creare un ponte (API) che permetta di sincronizzare prodotti, giacenze o ordini senza dover inserire i dati due volte.',
      },
      {
        q: 'Gestite anche la parte multilingua?',
        a: 'Certamente. Progetto il sito per supportare tutte le lingue necessarie, gestendo correttamente la SEO internazionale così che ogni mercato veda i contenuti giusti.',
      },
      {
        q: 'Offrite assistenza prioritaria per le aziende?',
        a: 'Sì, ho dei piani di manutenzione pensati proprio per le aziende che non possono permettersi fermi macchina online, con tempi di intervento garantiti.',
      },
    ],
    links: [
      { label: 'Software gestionali su misura', href: '/gestionali-sassuolo' },
      { label: 'Sviluppo E-commerce B2B', href: '#' },
      { label: 'Contatta per consulenza', href: '#contatti' },
    ],
  },
  {
    slug: 'fiorano-modenese',
    cityName: 'Fiorano Modenese',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 17000,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    seo: {
      title: 'Siti Web Fiorano Modenese | Web Design & SEO Locale',
      description:
        'Realizzazione siti web a Fiorano Modenese per aziende e professionisti. Siti veloci, ottimizzati per Google e pronti a generare contatti.',
      canonical: `${BASE_URL}/siti-web-fiorano-modenese`,
      keywords: [
        'siti web fiorano modenese',
        'sviluppatore web fiorano',
        'web designer modenese',
        'realizzazione siti modena',
        'e-commerce fiorano',
      ],
      h1: 'Sviluppo Siti Web a Fiorano Modenese',
    },
    hero: {
      h1: 'Il tuo sito è un costo o un investimento?',
      sub: 'Se il tuo sito non ti porta nuovi clienti, è solo un costo. Ti aiuto a trasformarlo in un investimento che genera richieste, telefonate e vendite per la tua attività a Fiorano.',
      ctaText: 'Analizziamo il tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Supporto le imprese di Fiorano e dintorni',
    },
    pain: {
      title: 'Le frustrazioni di chi non ha un sito che funziona',
      bullets: [
        'Vedi che i tuoi competitor sono sempre davanti a te su Google',
        "Ti senti in imbarazzo a dare l'indirizzo del tuo sito attuale",
        "Il sito non è aggiornato e dà un'immagine sbagliata della tua azienda",
        'Non sai come farti notare dalle persone che cercano i tuoi servizi in zona',
        'Ricevi solo chiamate da operatori che vogliono venderti pubblicità inutile',
      ],
    },
    solution: {
      title: 'Più visibilità, meno chiacchiere',
      body: "A Fiorano c'è bisogno di praticità. Il mio lavoro è semplice: prendo la tua attività e la rendo visibile a chi ne ha bisogno. Studio come cercano i tuoi servizi, sistemo la tua presenza su Google Maps e costruisco un sito che carichi all'istante. Non ti serve un sito per vincere premi di design, ti serve un sito per vincere nuovi clienti.",
      highlights: [
        'Posizionamento locale garantito su Fiorano',
        'Siti pronti per il mobile (smartphone)',
        'Ottimizzazione della scheda Google My Business',
        'Facile da gestire: lo aggiorni in un minuto',
        'Referente unico: parli solo con me',
      ],
    },
    uniqueBlocks: [
      {
        kind: 'stats',
        title: 'Perché la velocità conta (molto)',
        items: [
          {
            label: 'Abbandono sito',
            value: '> 50%',
            description: 'se il caricamento supera i 3 secondi',
          },
          {
            label: 'Conversione',
            value: '+20%',
            description: 'per ogni secondo guadagnato in velocità',
          },
          {
            label: 'Fiducia cliente',
            value: '90%',
            description: 'preferiscono siti veloci e chiari',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Hai un negozio a Fiorano?',
        body: 'Possiamo integrare un sistema di prenotazione o un catalogo prodotti che attiri le persone direttamente in negozio. Portiamo il digitale al servizio del tuo punto vendita fisico.',
        variant: 'success',
      },
    ],
    faq: [
      {
        q: 'Quanto tempo ci vuole per avere il sito pronto?',
        a: 'Solitamente tra le 3 e le 5 settimane, a seconda di quanto velocemente riusciamo a definire i contenuti e le foto. Ti darò un cronoprogramma chiaro fin da subito.',
      },
      {
        q: 'Il sito sarà mio?',
        a: 'Assolutamente sì. Non uso piattaforme proprietarie che ti tengono in ostaggio. Il sito è tuo, i dati sono tuoi e potrai spostarlo dove vuoi in qualsiasi momento (anche se spero resterai con me!).',
      },
      {
        q: 'E se non so usare il computer?',
        a: 'Il pannello che ti lascio è studiato per essere semplicissimo. Ti farò una breve formazione e sarai perfettamente in grado di fare le modifiche base da solo.',
      },
    ],
    links: [
      { label: 'Gestionali aziendali', href: '/gestionali-fiorano-modenese' },
      { label: 'Sviluppo App Mobile', href: '/app-mobile-fiorano-modenese' },
      { label: 'Guarda chi sono', href: '/chi-sono' },
    ],
  },
];

export const getLocalPageBySlug = (slug: string): LocalPageData | undefined => {
  return sitiWebDataset.find((page) => page.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return sitiWebDataset.map((page) => page.slug);
};

export const getPagesByProvince = (province: string): LocalPageData[] => {
  return sitiWebDataset.filter((page) => page.province === province);
};
