import { LocalPageData } from './types';

const BASE_URL = 'https://manueldeceglie.it';

export const sitiWebDataset: LocalPageData[] = [
  {
    slug: 'castelnovo-ne-monti',
    cityName: "Castelnovo ne' Monti",
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.566667,
      lng: 10.666667,
    },
    population: 10500,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'landing-montagna-sprint',
        title: 'Landing Montagna Sprint',
        description:
          'In 7 giorni hai una pagina che porta contatti (telefono/WhatsApp/richieste) e che comunica bene in mobile.',
        price: '499',
        badge: 'Promo Montagna',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa',
          'Call to Action base',
          'SEO locale base ',
          'Mappa + indicazioni + orari + link recensioni',
          'Velocità & adatto anche agli schermi più piccoli',
          'Moduli contatto + anti-spam',
          'Analytics + Search Console (impostazione base) per misurare contatti e visite',
          'Cookie/GDPR base (banner + pagina privacy)',
        ],
      },
      {
        id: 'sito-completo-montagna',
        title: 'Sito Completo',
        description:
          'Un sito professionale che ti posiziona e ti fa scegliere da nuovi clienti.',
        price: '899',
        badge: 'Promo Montagna',
        active: true,
        type: 'website',
        features: [
          'Sito completo fino a 5 pagine',
          'Struttura SEO ottimizzata',
          'Ottimizzazione profilo Google Business',
          'Velocità & UX: sito rapido e chiaro, adatto anche per gli schermi più piccoli',
          'Sezione recensioni / prove social (integrazione dove possibile)',
          'Form avanzato (richiesta preventivo con campi utili) + WhatsApp + click-to-call',
          'Analytics + Search Console',
          'Cookie/GDPR',
        ],
      },
    ],
    seo: {
      title: "Realizzazione Siti Web Castelnovo ne' Monti | Manuel De Ceglie",
      description:
        "Sviluppo siti web per attività a Castelnovo ne' Monti. Siti web veloci, perfetti anche da smartphone e ottimizzati per scalare le classifiche di Google.",
      canonical: 'https://manueldeceglie.it/siti-web-castelnovo-ne-monti',
      keywords: [
        'siti web castelnovo ne monti',
        'web designer castelnovo',
        'realizzazione siti web reggio emilia',
        'sviluppatore web appennino',
        'sito web castelnovo ne monti',
      ],
      h1: "Siti Web per le attività di Castelnovo ne' Monti",
    },
    hero: {
      h1: 'Il tuo lavoro merita di essere visto da tutti!',
      sub: "Aiuto ristoranti, artigiani e tutti i tipi di attività a Castelnovo ne' Monti a farsi trovare online. Non ti serve un sito complicato, ti serve un sito che porti clienti alla tua attività.",
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Lavoro con le realtà del nostro territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito attuale ti sta costando clienti?',
      problems: [
        'Il tuo sito è lento e i turisti abbandonano prima di vedere i tuoi servizi',
        'Su Google non esisti quando cercano "ristorante Castelnovo" o "(la tua attività) Castelnovo"',
        'Il sito da telefono non funziona (e qui tutti cercano da smartphone)',
        'I clienti vanno alla concorrenza di Reggio o Modena perché hanno siti migliori',
        'Hai speso soldi in passato ma non hai mai visto un cliente nuovo dal sito',
        'La tua scheda Google Maps è incompleta e con foto vecchie',
      ],
      solutions: [
        'Veloce davvero, caricamento in meno di 1.5 secondi anche con connessione lenta',
        'Ottimizzato per farti trovare da chi cerca i tuoi servizi a Castelnovo',
        'Ricevi ordini o prenotazioni direttamente dal sito, anche da WhatsApp',
        'Perfetto su smartphone: qui la gente cerca solo da telefono',
        'Scheda Google Maps finalmente sistemata e professionale',
      ],
    },
    goodInvestment: {
      title: 'La differenza tra una spesa e un',
      titleHighlight: 'buon investimento',
      subtitle:
        'Molti vedono il sito web come un costo fisso, come la bolletta della luce. Io lo costruisco come un investimento che deve generare un ritorno misurabile.',
      cards: [
        {
          icon: 'star',
          title: 'Il tuo biglietto da visita h24',
          description:
            'Mentre tu dormi, il sito lavora. Risponde alle domande, mostra i tuoi lavori e convince i clienti.',
          description2:
            'Se è trascurato, lento o non si adatta al cellulare, il cliente penserà che anche il tuo lavoro sia scadente.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: "L'unica cosa che possiedi davvero",
          description:
            'I social media sono "in affitto". Se domani l\'algoritmo cambia o ti bloccano il profilo, sparisci nel nulla.',
          description2:
            'Un sito web è casa tua. Nessuno può togliertelo. È un asset sicuro che accumula valore storico nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Un venditore che non chiede stipendio',
          description:
            'Immagina di dover spiegare a ogni singolo cliente chi sei e perché costi quella cifra. Estenuante, vero?',
          description2:
            'Un sito ben progettato lo fa al posto tuo. Filtra i perditempo e ti porta solo contatti già convinti.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ma serve davvero un sito se ho già la pagina Facebook?',
        a: 'Facebook è utile, ma non è tuo. Se domani cambiano le regole o ti bloccano il profilo, perdi tutto. Un sito è casa tua, è professionale e soprattutto ti fa trovare su Google da chi non sa chi sei e da chi non ha Facebook.',
      },
      {
        q: 'Quanto tempo devo dedicarci? Io devo lavorare...',
        a: 'Il tempo di una chiacchierata. Mi dai le informazioni base, qualche foto, e al resto penso io. Ti consegno un prodotto finito pronto per andare online.',
      },
      {
        q: 'E se poi voglio cambiare un prezzo o un orario?',
        a: 'Piccole modifiche sono incluse nel pacchetto di assistenza annuale che propongo a tutti i miei clienti. Ti basterà contattarmi e nel giro di poche ore la modifica sarà online!',
      },
      {
        q: 'Quanto costa davvero? Ci sono costi nascosti?',
        a: "Se non ci sono offerte attive, il costo lo definirò dopo una chiacchierata conoscitiva e aver compreso la mole di lavoro.\nMa tranquillo: non sono un'agenzia! Quindi quello che ti chiederò sarà sempre minore di ciò che ti richiedono loro.",
      },
    ],
  },
  {
    slug: 'casalgrande',
    cityName: 'Casalgrande',
    province: 'Reggio Emilia',
    active: false,
    region: 'Emilia-Romagna',
    population: 19000,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Casalgrande | Sviluppo Veloce e Professionale',
      description:
        'Realizzazione siti web a Casalgrande. Codice leggero e ottimizzato per aziende e professionisti che vogliono farsi trovare subito.',
      canonical: 'https://manueldeceglie.it/siti-web-casalgrande',
      keywords: [
        'siti web casalgrande',
        'realizzazione siti reggio emilia',
        'web designer casalgrande',
        'siti internet veloci',
      ],
      h1: 'Siti web a Casalgrande che si caricano all’istante',
    },
    hero: {
      h1: 'A Casalgrande si lavora sodo. Il tuo sito deve fare lo stesso.',
      sub: 'Niente giri di parole: ti serve un sito che spieghi cosa fai, dove sei e come contattarti. Deve aprirsi subito, anche dal telefono, e portare clienti veri, non solo visite.',
      ctaText: 'Analizziamo il tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Codice proprietario, niente abbonamenti inutili',
    },
    diagnostica: {
      badge: 'Analisi Attuale',
      title: 'Il tuo sito attuale funziona o è solo una spesa?',
      problems: [
        'Ci mette troppo ad aprirsi e la gente chiude la pagina',
        'Da telefono si vede piccolo e bisogna ingrandire per leggere',
        'Su Google non esisti quando cercano i tuoi servizi a Casalgrande',
        'Hai foto pesanti che bloccano il caricamento',
        'Non si capisce subito come contattarti o dove sei',
        'Paghi per un servizio che non ti porta nessuna richiesta',
      ],
      solutions: [
        'Codice ottimizzato per caricare in meno di 1.5 secondi',
        'Perfetto su smartphone: testi grandi e pulsanti comodi',
        'Ottimizzazione locale per farti trovare in zona',
        'Immagini lavorate per essere nitide ma leggerissime',
        'Pulsanti "Chiama" e "WhatsApp" sempre visibili',
      ],
    },
    goodInvestment: {
      title: 'Perché investire in un',
      titleHighlight: 'sito di proprietà',
      subtitle:
        'I social cambiano le regole ogni giorno. Un sito web veloce e ben fatto è casa tua: nessuno può togliertelo o nascondere i tuoi post.',
      cards: [
        {
          icon: 'star',
          title: 'Professionalità immediata',
          description:
            'Chi cerca online giudica la tua azienda in pochi secondi.',
          description2:
            'Un sito veloce e ordinato fa capire subito che lavori bene anche nella realtà.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Tutto tuo, per sempre',
          description:
            'Non paghi affitti mensili per la piattaforma. Il codice è tuo.',
          description2:
            'È un bene aziendale che acquista valore nel tempo e ti rende indipendente.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Assistenza inclusa',
          description:
            'Non devi imparare a fare il tecnico. Se c’è un problema, ci sono io.',
          description2:
            'Tu pensi a gestire la tua attività, io mi assicuro che il sito rimanga online e veloce.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Se devo cambiare un orario o una foto, come faccio?',
        a: 'È semplicissimo: mi mandi un messaggio su WhatsApp con la modifica e la faccio io per te. Non devi perdere tempo a capire come funziona il pannello di controllo, è tutto incluso nell’assistenza.',
      },
      {
        q: 'Perché la velocità è così importante?',
        a: 'Perché nessuno aspetta più di 3 secondi. Se il sito è lento, il cliente torna indietro su Google e chiama il tuo concorrente. Un sito veloce è il primo passo per vendere.',
      },
      {
        q: 'Il sito si vedrà bene anche sui cellulari vecchi?',
        a: 'Sì. Scrivo codice pulito e leggero proprio per questo: il sito deve funzionare ovunque, anche se la connessione non è perfetta o il telefono non è l’ultimo modello.',
      },
      {
        q: 'Cosa succede dopo che hai finito il sito?',
        a: 'Non sparisco. Rimango il tuo riferimento tecnico. Monitoro che tutto funzioni e sono disponibile se vuoi aggiungere nuove sezioni in futuro.',
      },
    ],
  },
  {
    slug: 'casina',
    cityName: 'Casina',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 4500,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Casina | Manuel De Ceglie',
      description:
        'Realizzazione siti web a Casina. Soluzioni ottimizzate per agriturismi, artigiani e attività dell’Appennino. Veloci anche con connessione lenta.',
      canonical: 'https://manueldeceglie.it/siti-web-casina',
      keywords: [
        'siti web casina',
        'web master appennino',
        'siti internet montagna',
        'realizzazione siti reggio emilia',
      ],
      h1: 'Siti web per chi lavora a Casina (e vuole farsi trovare)',
    },
    hero: {
      h1: 'Qui la connessione non è sempre il massimo. Il tuo sito deve volare.',
      sub: 'Se hai un’attività a Casina, sai che i clienti spesso cercano dal telefono, magari con poco campo. Ti creo un sito leggerissimo che si apre subito, mostra dove sei e ti fa chiamare con un click.',
      ctaText: 'Voglio un sito veloce',
      ctaHref: '#contatti',
      trustSignal: 'Ottimizzato per connessioni mobili instabili',
    },
    diagnostica: {
      badge: 'Analisi Attuale',
      title: 'I clienti riescono a trovarti quando sono in zona?',
      problems: [
        'Il sito è pesante e non si apre quando il telefono prende poco',
        'I turisti cercano "ristorante" o "servizi" e tu non compari',
        'Hai solo la pagina Facebook, ma chi non ha Facebook non ti vede',
        'Le foto dei tuoi prodotti o del locale ci mettono una vita a caricare',
        'La posizione su Google Maps è sbagliata o poco chiara',
        'Perdi chiamate perché il numero non è cliccabile dal sito',
      ],
      solutions: [
        'Tecnologia ultra-leggera per caricamenti immediati ovunque',
        'SEO locale per comparire nelle ricerche di chi è in montagna',
        'Un sito professionale visibile a tutti, senza iscrizioni social',
        'Immagini ottimizzate che si vedono subito e in alta qualità',
        'Integrazione perfetta con Google Maps',
        'Pulsanti di contatto rapidi e ben visibili',
      ],
    },
    goodInvestment: {
      title: 'Il sito web è il tuo',
      titleHighlight: 'biglietto da visita',
      subtitle:
        'Soprattutto in montagna, dove il passaparola è forte ma non basta più. Un sito curato ti dà credibilità agli occhi di turisti e nuovi clienti.',
      cards: [
        {
          icon: 'star',
          title: 'Immagine curata',
          description:
            'Presentati al meglio. Un sito disordinato fa pensare a un servizio disordinato.',
          description2: 'Un sito pulito e moderno ispira subito fiducia.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Indipendenza dai Social',
          description: 'Facebook e Instagram sono utili, ma non sono tuoi.',
          description2:
            'Il sito resta, è sempre raggiungibile e raccoglie tutte le informazioni importanti in un posto solo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Gestione zero pensieri',
          description: 'Non ti aggiungo altro lavoro.',
          description2:
            'Tu mi dici cosa vuoi pubblicare, io lo metto online ottimizzato. Semplice.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ma a Casina serve davvero un sito?',
        a: 'Sì, soprattutto per chi viene da fuori. I turisti o chi passa per lavoro usa Google per cercare dove mangiare, dormire o comprare. Se non ci sei lì, per loro non esisti.',
      },
      {
        q: 'Ho paura che costi troppo mantenerlo.',
        a: 'Ti sbagli. A parte il costo iniziale per crearlo, le spese annuali sono minime (circa 50-70€ per dominio e hosting).',
      },
      {
        q: 'E se cambio numero di telefono o chiudo per ferie?',
        a: 'Basta un messaggio WhatsApp a me. Aggiorno io il sito e la scheda Google in tempo reale. Non devi toccare nulla.',
      },
      {
        q: 'Le foto le fai tu?',
        a: 'Possiamo usare quelle che hai se sono buone, oppure ti do due dritte su come farle col cellulare. L’importante è che siano vere e autentiche.',
      },
    ],
  },
  {
    slug: 'carpineti',
    cityName: 'Carpineti',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 4000,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Carpineti | Sviluppo Web Manuel De Ceglie',
      description:
        'Realizzazione siti internet a Carpineti. Aiuto le piccole attività a farsi trovare online con siti veloci e facili da usare.',
      canonical: 'https://manueldeceglie.it/siti-web-carpineti',
      keywords: [
        'siti web carpineti',
        'creazione siti internet reggio emilia',
        'web designer carpineti',
        'sito web economico',
      ],
      h1: 'Siti web a Carpineti: fatti per essere trovati',
    },
    hero: {
      h1: 'Porta clienti alla tua porta, non a quella del vicino.',
      sub: 'A Carpineti ci conosciamo tutti, ma chi cerca su Google no. Se il tuo concorrente ha un sito fatto bene e tu no, indovina chi chiameranno? Ti faccio un sito veloce che ti mette davanti agli altri.',
      ctaText: 'Parliamo del progetto',
      ctaHref: '#contatti',
      trustSignal: 'Vicino a te, assistenza diretta',
    },
    diagnostica: {
      badge: 'Analisi Attuale',
      title: 'Perché i clienti scelgono gli altri e non te?',
      problems: [
        'Il tuo sito vecchio non si legge bene dal telefono',
        'Chi cerca "idraulico" o "negozio" a Carpineti trova i tuoi concorrenti',
        'Le informazioni online sono sbagliate o vecchie',
        'Il caricamento è lento e snervante per chi naviga',
        'Non hai un sito e ti affidi solo al passaparola (che sta calando)',
        'Le foto non rendono giustizia alla qualità del tuo lavoro',
      ],
      solutions: [
        'Sito responsive che si adatta perfettamente a ogni cellulare',
        'Posizionamento locale per uscire nelle ricerche di Carpineti',
        'Tutte le info corrette e aggiornate da me per te',
        'Velocità estrema per non perdere neanche un visitatore',
        'Una vetrina digitale aperta 24 ore su 24',
        'Galleria lavori ottimizzata per mostrare la tua qualità',
      ],
    },
    goodInvestment: {
      title: 'Più di un costo, è un',
      titleHighlight: 'investimento sicuro',
      subtitle:
        'Un sito web ben fatto lavora per te giorno e notte, rispondendo alle domande dei clienti anche quando sei chiuso o impegnato.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilità',
          description: 'Oggi, se non hai un sito, la gente si insospettisce.',
          description2:
            'Un sito professionale rassicura il cliente che la tua attività è solida e attiva.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Sicurezza dei dati',
          description: 'Costruisco siti sicuri e rispettosi della privacy.',
          description2: 'Niente plugin inutili che rallentano o creano rischi.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Manutenzione inclusa',
          description: 'I siti hanno bisogno di cura tecnica.',
          description2:
            'Me ne occupo io. Tu non devi preoccuparti di aggiornamenti, backup o problemi tecnici.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Non sono pratico di computer, è un problema?',
        a: 'Assolutamente no. Il sito lo faccio e lo gestisco io. Tu devi solo rispondere al telefono quando ti chiamano i clienti.',
      },
      {
        q: 'Quanto tempo ci vuole per farlo?',
        a: 'Se mi dai le informazioni base, in un paio di settimane siamo online. Non mi piace perdere tempo, voglio darti subito uno strumento che funziona.',
      },
      {
        q: 'Posso mettere le foto dei miei lavori?',
        a: 'Certo, anzi, devi! Mi mandi le foto su WhatsApp, io le ottimizzo (così non rallentano il sito) e le carico nella galleria.',
      },
      {
        q: 'Il prezzo cambia dopo un anno?',
        a: 'Il mio prezzo per la realizzazione è una tantum. Negli anni successivi paghi solo il rinnovo del dominio e dell’hosting (poche decine di euro) direttamente al fornitore.',
      },
    ],
  },
  {
    slug: 'maranello',
    cityName: 'Maranello',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 17000,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Maranello | Manuel De Ceglie',
      description:
        'Sviluppo siti web a Maranello. Performance eccellenti e design curato per attività che si rivolgono a un pubblico esigente e internazionale.',
      canonical: 'https://manueldeceglie.it/siti-web-maranello',
      keywords: [
        'siti web maranello',
        'web agency maranello',
        'realizzazione siti modena',
        'siti turistici maranello',
      ],
      h1: 'A Maranello la velocità è di casa. Anche per il tuo sito.',
    },
    hero: {
      h1: 'Fatti trovare pronto dal mondo che passa di qui.',
      sub: 'A Maranello arrivano turisti e clienti da ovunque. Se il tuo sito è lento, vecchio o non si capisce, fai una brutta figura. Ti creo un sito veloce, elegante e chiaro, all’altezza del nome della tua città.',
      ctaText: 'Contattami ora',
      ctaHref: '#contatti',
      trustSignal: 'Performance al top, come ci si aspetta qui',
    },
    diagnostica: {
      badge: 'Analisi Attuale',
      title: 'Stai perdendo clienti internazionali o locali?',
      problems: [
        'Il sito è lento e chi naviga dall’estero si stanca subito',
        'La grafica sembra vecchia e non dà fiducia a chi non ti conosce',
        'Non si capisce bene cosa offri o dove ti trovi',
        'Su smartphone è difficile da navigare',
        'Le immagini sono sgranate o, al contrario, pesantissime',
        'Mancano collegamenti rapidi per chiamarti o prenotare',
      ],
      solutions: [
        'Velocità massima: il sito si apre in un lampo ovunque',
        'Design moderno e pulito che comunica professionalità',
        'Informazioni chiare e struttura logica',
        'Esperienza perfetta su qualsiasi smartphone',
        'Gestione professionale delle immagini',
        'Call-to-action chiare per convertire i visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'La qualità paga,',
      titleHighlight: 'anche sul web',
      subtitle:
        'Non serve spendere cifre folli, serve spendere bene. Un sito ottimizzato ti distingue dalla massa e ti posiziona come un’attività di livello.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione',
          description:
            'Hai solo una possibilità per fare una buona prima impressione.',
          description2:
            'Un sito veloce e bello dice al cliente: "Qui si lavora bene".',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Stabilità tecnica',
          description: 'Utilizzo tecnologie moderne e sicure.',
          description2:
            'Il tuo sito sarà solido, protetto e sempre online, senza sorprese.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Supporto continuo',
          description: 'Non ti lascio solo dopo la messa online.',
          description2:
            'Per qualsiasi modifica o aggiornamento, sono a tua disposizione. Tu lavori, io curo il sito.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Lavoro molto con gli stranieri, il sito va bene?',
        a: 'Certo. Costruisco il sito predisposto per essere capito da tutti, con icone chiare e, se serve, possiamo gestire facilmente i testi in doppia lingua.',
      },
      {
        q: 'Posso integrare le recensioni di Google?',
        a: 'Assolutamente sì. Le recensioni sono oro. Le integriamo in modo che non rallentino il sito ma mostrino subito quanto vali.',
      },
      {
        q: 'Se voglio cambiare il menu o i prezzi?',
        a: 'Mi scrivi e ci penso io. Non voglio che tu perda tempo o rischi di "rompere" la grafica del sito. È tutto incluso nel servizio.',
      },
      {
        q: 'Il sito sarà veloce anche con tante foto?',
        a: 'Sì, perché le ottimizzo una per una. Uso formati moderni che mantengono la qualità ma pesano pochissimo. Così hai un sito bello da vedere e veloce da caricare.',
      },
    ],
  },
  {
    slug: 'scandiano',
    cityName: 'Scandiano',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 25000,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Scandiano | Realizzazione Siti Manuel De Ceglie',
      description:
        'Siti web a Scandiano per negozi, ristoranti e aziende. Fatti trovare prima dei tuoi concorrenti con un sito veloce e professionale.',
      canonical: 'https://manueldeceglie.it/siti-web-scandiano',
      keywords: [
        'siti web scandiano',
        'realizzazione siti internet scandiano',
        'web agency scandiano',
        'sito e-commerce scandiano',
      ],
      h1: 'Fatti notare a Scandiano (prima che lo facciano gli altri)',
    },
    hero: {
      h1: 'Tutti cercano online. Tu ti fai trovare?',
      sub: 'Scandiano è piena di attività. Per distinguerti non basta "esserci", serve un sito che funzioni meglio degli altri. Veloce, chiaro e che convinca il cliente a venire da te e non dalla concorrenza.',
      ctaText: 'Migliora la tua visibilità',
      ctaHref: '#contatti',
      trustSignal: 'Siti proprietari, no canoni mensili',
    },
    diagnostica: {
      badge: 'Analisi Attuale',
      title: 'Il tuo sito ti aiuta o ti nasconde?',
      problems: [
        'Sei a pagina 2 o 3 di Google e nessuno ti vede',
        'Il sito è lento e i clienti escono subito',
        'Da cellulare è scomodo leggere o trovare il numero di telefono',
        'I tuoi concorrenti hanno siti più belli e moderni',
        'Non hai modo di capire chi visita il tuo sito',
        'Aggiornare le informazioni è un incubo',
      ],
      solutions: [
        'Ottimizzazione SEO per scalare le posizioni a Scandiano',
        'Caricamento istantaneo per tenere il cliente incollato',
        'Mobile-first: perfetto per chi cerca passeggiando in centro',
        'Design moderno che ti fa preferire alla concorrenza',
        'Statistiche chiare su chi ti cerca',
        'Aggiornamenti gestiti interamente da me',
      ],
    },
    goodInvestment: {
      title: 'Smetti di regalare clienti alla',
      titleHighlight: 'concorrenza',
      subtitle:
        'Se il tuo sito non funziona bene, il cliente non smette di cercare: va semplicemente da qualcun altro. Riprenditi il tuo spazio.',
      cards: [
        {
          icon: 'star',
          title: 'Distinguersi',
          description: 'In un mercato affollato, la qualità si nota.',
          description2:
            'Un sito curato è segno di un’attività che ci tiene ai dettagli.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Nessun vincolo',
          description: 'Il sito è tuo al 100%.',
          description2:
            'Non ti lego con contratti strani. Sei libero, ma scommetto che resterai per il servizio.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Assistenza rapida',
          description: 'Hai un problema o una modifica?',
          description2:
            'Un messaggio e risolvo. Avere un tecnico di fiducia fa la differenza.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ho già un sito vecchio, puoi sistemarlo?',
        a: 'Spesso costa meno e rende meglio rifarlo da zero con tecnologie moderne che mettere le pezze a un sito vecchio e lento. Valutiamolo insieme, ma punto sempre alla qualità.',
      },
      {
        q: 'Quanto tempo ci vuole?',
        a: 'In media 2-3 settimane. Dipende da quanto velocemente mi dai testi e foto. Io sono rapido perché scrivo il codice a mano, non uso programmi lenti.',
      },
      {
        q: 'Devo pagare ogni volta che cambio una foto?',
        a: 'No. Le piccole modifiche di routine (cambio orario, una nuova foto, un testo diverso) sono incluse nel rapporto di fiducia. Non ti mando la fattura per ogni click.',
      },
      {
        q: 'Perché costi 800€ mentre altri chiedono molto di più?',
        a: 'Perché sono un freelance, non una grossa agenzia con uffici costosi e segretarie. Paghi solo il mio tempo e la mia competenza tecnica. Massima resa, spesa giusta.',
      },
    ],
  },
  {
    slug: 'reggio-emilia',
    cityName: 'Reggio Emilia',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 170000,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Realizzazione Siti Web Reggio Emilia | Manuel De Ceglie',
      description:
        'Sviluppo siti web a Reggio Emilia per aziende e professionisti. Siti veloci, proprietari e ottimizzati per convertire i visitatori in clienti.',
      canonical: 'https://manueldeceglie.it/siti-web-reggio-emilia',
      keywords: [
        'siti web reggio emilia',
        'web agency reggio emilia',
        'realizzazione siti internet re',
        'esperto seo reggio emilia',
      ],
      h1: 'A Reggio la concorrenza è tanta. Il tuo sito deve fare la differenza.',
    },
    hero: {
      h1: 'Smetti di essere uno dei tanti. Fatti scegliere.',
      sub: 'In città i clienti hanno decine di opzioni a portata di click. Se il tuo sito è vecchio, lento o difficile da usare, vanno dal concorrente. Ti costruisco un sito che ti posiziona subito come la scelta migliore.',
      ctaText: 'Voglio emergere',
      ctaHref: '#contatti',
      trustSignal: 'Sviluppo sartoriale, niente template pronti',
    },
    diagnostica: {
      badge: 'Analisi Strategica',
      title: 'Il tuo sito attuale regge il confronto?',
      problems: [
        'Il design sa di "vecchio" e non riflette la qualità della tua azienda',
        'Sei invisibile su Google Maps in mezzo a decine di competitor',
        'Il sito è lento e frustrante per chi va di fretta in città',
        'Non hai un sistema chiaro per ricevere richieste o appuntamenti',
        'Ti affidi solo ai social, ma l’algoritmo nasconde i tuoi post',
        'Paghi canoni mensili per un servizio che non ti dà supporto reale',
      ],
      solutions: [
        'Design moderno e autorevole che ispira fiducia immediata',
        'Ottimizzazione locale per dominare la tua zona a Reggio',
        'Velocità istantanea: rispetto il tempo dei tuoi clienti',
        'Call-to-action studiate per portarti contatti profilati',
        'Piattaforma tua al 100%: costruiamo un asset aziendale solido',
        'Supporto diretto: parli con me, non con un ticket system',
      ],
    },
    goodInvestment: {
      title: 'Non è una spesa, è',
      titleHighlight: 'crescita aziendale',
      subtitle:
        'Un sito web professionale è l’unico venditore che lavora h24, non chiede ferie e presenta la tua attività esattamente come vuoi tu.',
      cards: [
        {
          icon: 'star',
          title: 'Reputazione',
          description:
            'A Reggio la voce gira, ma oggi la prima verifica si fa online.',
          description2:
            'Un sito impeccabile conferma che sei un professionista serio.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Proprietà',
          description: 'Il codice è tuo. I dati sono tuoi.',
          description2:
            'Non costruiamo la tua casa su un terreno in affitto. Sei indipendente e tutelato.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Zero perdite di tempo',
          description: 'Gestisco io la tecnica e gli aggiornamenti.',
          description2:
            'Tu ti concentri sul tuo lavoro, sapendo che la tua immagine online è in mani sicure.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ho un’azienda strutturata, 800€ non sono pochi?',
        a: 'Il prezzo è competitivo perché non ho i costi fissi di un’agenzia. La qualità del codice è di livello enterprise: veloce, sicuro e scalabile. Non paghi l’ufficio in centro, paghi la competenza.',
      },
      {
        q: 'Possiamo collegare il sito al gestionale o alla newsletter?',
        a: 'Certamente. Essendo uno sviluppatore (e non uno che usa solo template), posso creare integrazioni su misura per le tue esigenze specifiche.',
      },
      {
        q: 'Come gestisci la sicurezza?',
        a: 'Utilizzo le ultime tecnologie in fatto di sicurezza web. Niente database vulnerabili o plugin non aggiornati. Il tuo sito sarà una cassaforte.',
      },
      {
        q: 'Fai anche posizionamento su Google (SEO)?',
        a: 'Il sito nasce già ottimizzato per Google (struttura, velocità, meta tag). Per le piccole realtà locali spesso basta questo per salire in prima pagina. Se serve di più, pianifichiamo una strategia.',
      },
    ],
  },
  {
    slug: 'villa-minozzo',
    cityName: 'Villa Minozzo',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 3500,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Villa Minozzo | Manuel De Ceglie',
      description:
        'Sviluppo siti internet a Villa Minozzo. Aiuto ristoranti, alberghi e attività locali a farsi trovare dai turisti e dai residenti con siti belli e veloci.',
      canonical: 'https://manueldeceglie.it/siti-web-villa-minozzo',
      keywords: [
        'siti web villa minozzo',
        'siti ristoranti appennino',
        'web designer montagna',
        'realizzazione siti reggio emilia',
      ],
      h1: 'Fai trovare la tua attività a chi sale a Villa Minozzo',
    },
    hero: {
      h1: 'Accogli i clienti online bene come fai nel tuo locale.',
      sub: 'Chi viene a Villa cerca relax, buon cibo o servizi, e lo cerca dal telefono. Il tuo sito deve trasmettere subito l’atmosfera giusta e dare le informazioni chiave (aperto/chiuso, menu, dove siamo) in un istante.',
      ctaText: 'Migliora la tua immagine',
      ctaHref: '#contatti',
      trustSignal: 'Specializzato in attività locali e ristorazione',
    },
    diagnostica: {
      badge: 'Check-up Rapido',
      title: 'I turisti riescono a sceglierti?',
      problems: [
        'Il menu in PDF è illeggibile dal telefono',
        'Non si capisce se sei aperto o chiuso (e Google spesso sbaglia)',
        'Le foto dei piatti o delle camere sono vecchie e sgranate',
        'Manca un tasto veloce per prenotare o chiamare',
        'Il sito è lento e chi ha fame non ha voglia di aspettare',
        'Affidi tutto a Facebook, ma non tutti i turisti lo usano',
      ],
      solutions: [
        'Menu e servizi digitali perfettamente leggibili su smartphone',
        'Orari e contatti sempre aggiornati (ci penso io)',
        'Galleria fotografica che fa venire voglia di venire da te',
        'Pulsante "Chiama ora" o "Prenota" sempre visibile',
        'Sito scheggia: si apre subito e non fa scappare il cliente',
        'Un punto di riferimento online sicuro e professionale',
      ],
    },
    goodInvestment: {
      title: 'Il sito lavora mentre tu',
      titleHighlight: 'sei in attività',
      subtitle:
        'Mentre tu servi i clienti o gestisci il negozio, il sito risponde alle domande più frequenti: dov’è, cosa si mangia, quanto costa.',
      cards: [
        {
          icon: 'star',
          title: 'Vetrina H24',
          description:
            'Il turista programma la gita la sera prima o la mattina presto.',
          description2:
            'Il tuo sito è lì a convincerlo quando tu stai ancora riposando.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Basta commissioni',
          description: 'Perché regalare percentuali a portali esterni?',
          description2:
            'Con un sito tuo, il contatto è diretto. Più margine per te, più rapporto con il cliente.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Senza pensieri',
          description: 'Devi cambiare il menu stagionale?',
          description2:
            'Mi mandi la foto del menu nuovo su WhatsApp e io aggiorno il sito. Facile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ma per un piccolo negozio o bar ne vale la pena?',
        a: 'Assolutamente sì. La gente cerca su Google anche il bar per la colazione o l’alimentari aperto. Esserci con un sito curato ti dà un vantaggio enorme su chi non c’è.',
      },
      {
        q: 'Le foto devono essere fatte da un fotografo?',
        a: 'Aiuta, ma non è obbligatorio. Gli smartphone di oggi fanno ottime foto. Io ti aiuto a scegliere quelle giuste e le ritocco per farle rendere al massimo sul sito.',
      },
      {
        q: 'Posso mettere il menu online?',
        a: 'Devi! E non un PDF da scaricare che riempie la memoria del telefono. Creo una pagina menu facile da leggere e bella da vedere, che fa venire fame.',
      },
      {
        q: 'Quanto costa dopo il primo anno?',
        a: 'Solo il rinnovo tecnico (hosting e dominio), parliamo di circa 50-70€ all’anno totali. Il sito è tuo, non hai altri costi fissi con me.',
      },
    ],
  },
  {
    slug: 'sassuolo',
    cityName: 'Sassuolo',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 40000,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Sassuolo | Sviluppo Web per Aziende e Attività',
      description:
        'Creazione siti web a Sassuolo. Dal piccolo negozio alla PMI, sviluppo siti veloci, sicuri e orientati al business. Preventivo chiaro, zero sorprese.',
      canonical: 'https://manueldeceglie.it/siti-web-sassuolo',
      keywords: [
        'siti web sassuolo',
        'web agency sassuolo',
        'siti aziende modena',
        'sviluppatore web sassuolo',
      ],
      h1: 'Sassuolo corre veloce. Il tuo sito deve tenere il passo.',
    },
    hero: {
      h1: 'Il tuo sito deve essere all’altezza del tuo fatturato.',
      sub: 'A Sassuolo si lavora a ritmi alti e la qualità è lo standard. Che tu abbia un’azienda, un negozio o uno studio, il tuo sito non può sembrare amatoriale. Ti serve uno strumento professionale, veloce e che vada dritto al sodo.',
      ctaText: 'Parliamo di business',
      ctaHref: '#contatti',
      trustSignal: 'Approccio concreto, orientato ai risultati',
    },
    diagnostica: {
      badge: 'Analisi Business',
      title: 'La tua immagine online rispecchia la realtà?',
      problems: [
        'Hai un’attività solida ma un sito che sembra fatto in casa',
        'I clienti non trovano le informazioni tecniche o i servizi',
        'Il sito è lento e dà l’idea di un’azienda poco innovativa',
        'Non stai raccogliendo contatti (lead) dal web',
        'La concorrenza ha siti più moderni e funzionali',
        'Perdi tempo a spiegare cose che il sito dovrebbe dire da solo',
      ],
      solutions: [
        'Immagine aziendale coordinata e altamente professionale',
        'Struttura chiara che guida il cliente verso il contatto',
        'Velocità e stabilità tecnica per dimostrare efficienza',
        'Moduli di contatto ottimizzati per ricevere richieste vere',
        'Posizionamento su Google per farsi trovare da chi cerca qualità',
        'Un asset digitale che lavora per te e valorizza il brand',
      ],
    },
    goodInvestment: {
      title: 'Investi nella tua',
      titleHighlight: 'proprietà digitale',
      subtitle:
        'Nel distretto di Sassuolo la concretezza è tutto. Un sito web di proprietà è un macchinario digitale che produce contatti e visibilità.',
      cards: [
        {
          icon: 'star',
          title: 'Percezione del valore',
          description: 'Se vendi qualità, devi apparire di qualità.',
          description2:
            'Un sito curato giustifica i tuoi prezzi e posiziona il tuo brand in alto.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Controllo totale',
          description: 'Non lasciare il tuo business in mano ai social.',
          description2:
            'Il sito è il tuo quartier generale online, dove decidi tu le regole e i contenuti.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Efficienza',
          description:
            'Meno telefonate informative, più contatti pronti a comprare.',
          description2:
            'Il sito filtra i curiosi e ti porta chi è davvero interessato.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Lavoro con aziende (B2B), il sito mi serve?',
        a: 'È fondamentale. Prima di darti un appuntamento, i buyer controllano il tuo sito. Se è vecchio o non funziona, partono prevenuti. Un sito serio ti apre le porte.',
      },
      {
        q: 'Ho un negozio in centro, perché mi serve il sito?',
        a: 'Perché la gente cerca "negozio abbigliamento Sassuolo" o "ristorante Sassuolo" su Google prima di uscire. Se ti trovano lì, vengono da te. Altrimenti vanno da chi trovano.',
      },
      {
        q: 'Quanto mi impegna la gestione?',
        a: 'Zero. Tu fai il tuo lavoro, io faccio il mio. Se c’è da cambiare qualcosa, mi scrivi e lo faccio io. Non devi diventare un esperto di web.',
      },
      {
        q: 'I tempi di consegna?',
        a: 'Sono abituato a lavorare con chi ha fretta. In 2-3 settimane, se abbiamo il materiale, andiamo online. E ci andiamo con un prodotto finito e testato.',
      },
    ],
  },
  {
    slug: 'vignola',
    cityName: 'Vignola',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 25000,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Vignola | Manuel De Ceglie',
      description:
        'Realizzazione siti web a Vignola. Valorizza la tua attività con un sito internet veloce, moderno e capace di attirare clienti che cercano qualità.',
      canonical: 'https://manueldeceglie.it/siti-web-vignola',
      keywords: [
        'siti web vignola',
        'web designer vignola',
        'realizzazione siti modena',
        'siti per negozi vignola',
      ],
      h1: 'A Vignola la qualità è di casa. Il tuo sito deve rispecchiarla.',
    },
    hero: {
      h1: 'Non basta avere un ottimo prodotto, bisogna saperlo raccontare.',
      sub: 'Vignola è terra di eccellenze. Se la tua attività offre valore, il tuo sito non può essere mediocre. Ti creo una vetrina digitale che trasmette la cura che metti nel tuo lavoro e convince i clienti a sceglierti.',
      ctaText: 'Valorizza la tua attività',
      ctaHref: '#contatti',
      trustSignal: 'Design curato per attività di pregio',
    },
    diagnostica: {
      badge: 'Analisi Immagine',
      title: 'Il tuo sito valorizza o svaluta il tuo lavoro?',
      problems: [
        'Il sito è graficamente superato e sminuisce i tuoi prodotti',
        'Non racconti la tua storia o la tua differenza rispetto agli altri',
        'I clienti faticano a trovare dove sei o quando sei aperto',
        'Le immagini caricano lentamente e annoiano il visitatore',
        'Manca quel tocco di professionalità che giustifica il tuo prezzo',
        'Sei difficile da trovare per chi non ti conosce già',
      ],
      solutions: [
        'Grafica pulita ed elegante che mette al centro il prodotto',
        'Storytelling visivo che racconta la tua qualità',
        'Informazioni essenziali sempre in primo piano',
        'Ottimizzazione tecnica per un’esperienza fluida e piacevole',
        'Posizionamento locale per attrarre clienti alto-spendenti',
        'Un sito che ti fa sentire orgoglioso di condividerlo',
      ],
    },
    goodInvestment: {
      title: 'La vetrina più importante è',
      titleHighlight: 'quella digitale',
      subtitle:
        'Oggi i clienti guardano lo schermo del telefono molto più di quanto guardino le vetrine in strada. Essere lì, e bene, è obbligatorio.',
      cards: [
        {
          icon: 'star',
          title: 'Eccellenza',
          description:
            'Il sito deve essere bello e funzionale quanto il tuo negozio o azienda.',
          description2: 'Non scendere a compromessi sull’immagine.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Patrimonio tuo',
          description:
            'Investire sul proprio sito significa investire su se stessi.',
          description2:
            'Non sui social network che oggi ci sono e domani chissà.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Servizio completo',
          description: 'Dalla struttura alla messa online, penso a tutto io.',
          description2: 'Incluso il mantenimento delle prestazioni nel tempo.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ho un prodotto di nicchia, mi serve il sito?',
        a: 'Ancora di più. Chi cerca prodotti specifici o di alta qualità lo fa su Google. Un sito ben indicizzato ti porta clienti che cercano esattamente quello che fai tu.',
      },
      {
        q: 'Posso vendere online in futuro?',
        a: 'Certo. Il sito che costruisco è modulare. Possiamo partire con una vetrina impeccabile e aggiungere l’e-commerce quando sei pronto a gestire le spedizioni.',
      },
      {
        q: 'Come funziona per gli aggiornamenti?',
        a: 'È il mio compito. Tu mi segnali le novità (nuovi arrivi, eventi, chiusure) e io aggiorno il sito. Rapido e senza stress per te.',
      },
      {
        q: 'Perché scegliere te e non un’agenzia di Modena?',
        a: 'Perché con me hai un rapporto diretto. Rispondo io al telefono, scrivo io il codice. Risparmi i costi di struttura dell’agenzia e hai un tecnico dedicato.',
      },
    ],
  },
  {
    slug: 'viano',
    cityName: 'Viano',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 3400,
    active: false,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: {
      title: 'Siti Web Viano | Manuel De Ceglie',
      description:
        'Sviluppo siti internet a Viano. Soluzioni web per artigiani e piccole imprese. Siti veloci che portano contatti e lavoro vero.',
      canonical: 'https://manueldeceglie.it/siti-web-viano',
      keywords: [
        'siti web viano',
        'realizzazione siti reggio emilia',
        'web per artigiani',
        'siti internet veloci',
      ],
      h1: 'A Viano servono fatti, non parole. Il tuo sito deve funzionare.',
    },
    hero: {
      h1: 'Poche chiacchiere. Un sito che porta lavoro.',
      sub: 'Se hai un’attività a Viano, non ti serve un sito "artistico". Ti serve uno strumento che spieghi cosa fai e convinca il cliente a chiamarti. Veloce, semplice, efficace. Come il tuo lavoro.',
      ctaText: 'Richiedi preventivo',
      ctaHref: '#contatti',
      trustSignal: 'Siti concreti per gente che lavora',
    },
    diagnostica: {
      badge: 'Analisi Pratica',
      title: 'Perché i clienti non ti chiamano dal sito?',
      problems: [
        'Il sito è complicato e non si capisce cosa fai di preciso',
        'Manca il numero di telefono cliccabile (errore grave!)',
        'Da cellulare bisogna ingrandire per leggere i testi',
        'Non ci sono foto dei tuoi lavori recenti',
        'Su Google non esisti, e i clienti chiamano chi trovano prima',
        'Hai un sito vecchio che ti fa sembrare un’azienda chiusa',
      ],
      solutions: [
        'Descrizione chiara e diretta dei tuoi servizi',
        'Pulsante "Chiama" bello grande e sempre visibile',
        'Sito perfetto su smartphone, facile da usare per tutti',
        'Galleria lavori che dimostra la tua competenza',
        'Ottimizzazione base per farti trovare in zona Viano/Scandiano',
        'Un’immagine online fresca e operativa',
      ],
    },
    goodInvestment: {
      title: 'Uno strumento di lavoro,',
      titleHighlight: 'non un giocattolo',
      subtitle:
        'Il sito deve ripagarsi portandoti nuovi clienti. Lo costruisco con questo unico obiettivo: generare contatti utili.',
      cards: [
        {
          icon: 'star',
          title: 'Professionalità',
          description: 'Anche se sei piccolo, presentati come un grande.',
          description2:
            'Un sito ordinato dà sicurezza al cliente che deve affidarti un lavoro.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Tutto tuo',
          description: 'Niente piattaforme in abbonamento.',
          description2:
            'Il sito è di tua proprietà. È un investimento che rimane in azienda.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Assistenza rapida',
          description: 'Hai bisogno di cambiare una cosa al volo?',
          description2:
            'Non ti faccio aspettare settimane. Un messaggio e risolviamo.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Io vado col passaparola, il sito mi serve?',
        a: 'Il passaparola è ottimo, ma oggi anche chi riceve il tuo nome poi ti cerca su Google per vedere "chi sei". Se non ti trova, o trova un sito brutto, potrebbe cambiare idea.',
      },
      {
        q: 'Non ho tempo di seguirti per fare il sito.',
        a: 'Lo so che lavori. Per questo ti chiedo il minimo indispensabile: ci sentiamo al telefono 15 minuti, mi mandi due foto su WhatsApp e al resto penso io.',
      },
      {
        q: 'Quanto costa mantenerlo?',
        a: 'Pochissimo. Circa 50-70€ l’anno per dominio e hosting.',
      },
      {
        q: 'E se voglio mettere le foto dei cantieri/lavori?',
        a: 'Ottima idea. Me le mandi via WhatsApp man mano che li finisci e io aggiorno la galleria. Così il sito è sempre vivo e mostra che lavori tanto.',
      },
    ],
  },
];

export const getLocalPageBySlug = (slug: string): LocalPageData | undefined => {
  return sitiWebDataset.find((page) => page.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return sitiWebDataset.filter((page) => page.active).map((page) => page.slug);
};

export const getPagesByProvince = (province: string): LocalPageData[] => {
  return sitiWebDataset.filter((page) => page.province === province);
};
