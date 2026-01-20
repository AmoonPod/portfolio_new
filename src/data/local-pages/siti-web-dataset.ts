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
          'In 7 giorni hai una pagina che porta contatti (telefono/WhatsApp/richieste) e che funziona e comunica bene da mobile.',
        price: '599',
        badge: 'Promo Montagna',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa',
          'Call to Action base',
          'SEO locale base',
          'Mappa + indicazioni + orari + link recensioni',
          'Veloce e perfetto anche su schermi piccoli',
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
          'Ottimizzazione del profilo Google Business',
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
      canonical: 'https://manueldeceglie.it/siti-web/castelnovo-ne-monti',
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
        'Da telefono il sito non funziona (e qui tutti cercano da smartphone)',
        'I clienti vanno alla concorrenza di Reggio o Modena perché hanno siti migliori',
        'Hai speso soldi in passato ma non hai mai visto un cliente nuovo dal sito',
        'La tua scheda Google Maps è incompleta e con foto vecchie',
      ],
      solutions: [
        'Veloce davvero: caricamento in meno di 1,5 secondi anche con connessione lenta',
        'Ottimizzato per farti trovare da chi cerca i tuoi servizi a Castelnovo',
        'Ricevi ordini o prenotazioni direttamente dal sito, anche da WhatsApp',
        'Perfetto su smartphone: qui la gente cerca quasi solo da telefono',
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
        a: 'Il tempo di una chiacchierata. Mi dai le informazioni base, qualche foto e al resto penso io. Ti consegno un prodotto finito pronto per andare online.',
      },
      {
        q: 'E se poi voglio cambiare un prezzo o un orario?',
        a: 'Piccole modifiche sono incluse nel pacchetto di assistenza annuale che propongo a tutti i miei clienti. Ti basta contattarmi: nel giro di poche ore la modifica è online!',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Sì: oltre ai canoni della piattaforma di hosting e del dominio, offro ai miei clienti la possibilità di avere un'assistenza configurabile su tre livelli, che ti permette di concentrarti sul tuo lavoro e dormire sonni tranquilli, perché al tuo sito ci penso io.",
      },
      {
        q: 'Quanto costa davvero? Ci sono costi nascosti?',
        a: "Se non ci sono offerte attive, il costo lo definirò dopo una chiacchierata conoscitiva e aver compreso la mole di lavoro.\nMa tranquillo: non sono un'agenzia! Quindi quello che ti chiederò sarà sempre inferiore a quello che ti chiederebbero loro.",
      },
    ],
  },
  {
    slug: 'casina',
    cityName: 'Casina',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.3,
      lng: 10.3,
    },
    population: 4500,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'landing-montagna-sprint',
        title: 'Landing Montagna Sprint',
        description:
          'In 7 giorni hai una pagina pensata per farti contattare: chiamate, WhatsApp e richieste, con una resa perfetta da smartphone.',
        price: '599',
        badge: 'Promo Montagna',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa',
          'Call to Action essenziali e chiare',
          'SEO locale di base',
          'Mappa + indicazioni + orari + link recensioni',
          'Prestazioni alte anche su rete mobile',
          'Moduli contatto + anti-spam',
          'Analytics + Search Console (setup base) per tracciare visite e contatti',
          'Cookie/GDPR base (banner + pagina privacy)',
        ],
      },
      {
        id: 'sito-completo-montagna',
        title: 'Sito Completo',
        description:
          'Un sito professionale, veloce e ben strutturato: ti aiuta a posizionarti e a farti scegliere da nuovi clienti.',
        price: '899',
        badge: 'Promo Montagna',
        active: true,
        type: 'website',
        features: [
          'Sito completo fino a 5 pagine',
          'Struttura SEO ottimizzata',
          'Ottimizzazione del profilo Google Business',
          'Velocità & UX: sito rapido e chiaro, ottimo anche su schermi piccoli',
          'Sezione recensioni / prove social (integrazione dove possibile)',
          'Form avanzato (richiesta preventivo) + WhatsApp + click-to-call',
          'Analytics + Search Console',
          'Cookie/GDPR',
        ],
      },
    ],
    seo: {
      title: 'Realizzazione Siti Web a Casina | Manuel De Ceglie',
      description:
        'Creo siti web a Casina per attività locali: veloci anche con connessione instabile, ottimizzati per Google e perfetti da smartphone.',
      canonical: 'https://manueldeceglie.it/siti-web/casina',
      keywords: [
        'siti web casina',
        'prezzo sito web casina',
        'realizzazione siti web casina',
        'web designer casina',
        'creazione siti internet casina',
        'siti web reggio emilia appennino',
        'sviluppo siti web emilia romagna',
        'sito web per agriturismo casina',
        'sito web per ristorante casina',
      ],
      h1: 'Siti Web a Casina per chi vuole farsi trovare davvero su Google',
    },
    hero: {
      h1: 'A Casina il tuo sito web deve essere leggero, veloce e chiaro.',
      sub: "Oggi tutti utilizzano il telefono e nelle nostre zone spesso c'è poco segnale. Io ti realizzo un sito web che si apre subito, dice chi sei in pochi secondi e ti fa conosce da nuovi clienti.",
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Progettato per mobile e connessioni “da montagna”',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Quando ti cercano in zona… ti trovano o finiscono dagli altri?',
      problems: [
        'Il sito (se c’è) è pesante e si carica lentamente con la rete del telefono',
        'Non compari su Google per ricerche tipo “agriturismo Casina” o “(servizio) Casina”',
        'Da smartphone è scomodo o illeggibile: testi piccoli, pulsanti invisibili, info confuse',
        'Hai solo i social: utili, ma non bastano per chi cerca su Google',
        'Foto non ottimizzate e che caricano lentamente: l’utente si stanca e va dal tuo comopetitor',
        'Non è chiaro come ordinare, prenotare o contattarti e perdi potenziali clienti',
      ],
      solutions: [
        'Sito super rapido: ottimizzato per caricamenti immediati anche con poco segnale',
        'Ottimizzazione SEO locale pensata per intercettare chi cerca servizi a Casina e dintorni',
        'Esperienza da telefono perfetta: chi arriva legge tutto perfettamente, capisce subito cosa fai e ti contatta',
        'Contatti in primo piano: click-to-call, WhatsApp, form anti-spam',
        'Immagini leggere ma belle: qualità alta, zero attese per il cliente',
        'Scheda Google/Maps ordinata e coerente con il sito',
      ],
    },
    goodInvestment: {
      title: 'Un sito non è una spesa:',
      titleHighlight: 'è un investimento che lavora per te',
      subtitle:
        'Il passaparola resta importante, ma oggi la prima “stretta di mano” spesso è una ricerca su Google. Un sito fatto bene ti porta credibilità, richieste e clienti anche mentre sei impegnato.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione che convince',
          description:
            'In pochi secondi una persona decide se fidarsi o passare oltre.',
          description2:
            'Un sito moderno e ordinato racconta cura, serietà e qualità del tuo lavoro.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'La tua presenza online, davvero tua',
          description:
            'I social cambiano regole e visibilità: oggi ci sei, domani non si sa.',
          description2:
            'Il sito è il tuo spazio: stabile, controllabile e costruito per durare.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Meno perditempo, più contatti utili',
          description:
            'Un sito fatto bene risponde alle domande principali e guida l’utente.',
          description2:
            'Arrivano richieste più chiare, da persone già interessate a ciò che offri.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Casina ha senso investire in un sito?',
        a: 'Sì, soprattutto per chi arriva da fuori o non ti conosce ancora. Chi cerca dove mangiare, dormire o trovare un servizio usa Google: se non compari lì, finisci invisibile.',
      },
      {
        q: 'Se la connessione è lenta, il sito non è un problema?',
        a: 'Proprio per quello lo progetto “leggero”: immagini ottimizzate, codice pulito e caricamento rapido anche su rete mobile instabile.',
      },
      {
        q: 'Io non ho tempo di stare dietro al sito.',
        a: 'Perfetto: mi basta una breve chiacchierata, qualche informazione e foto. Poi ci penso io: ti consegno un sito pronto, misurabile e facile da aggiornare con un messaggio.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Sì: oltre ai canoni della piattaforma di hosting e del dominio, offro ai miei clienti la possibilità di avere un'assistenza configurabile su tre livelli, che ti permette di concentrarti sul tuo lavoro e dormire sonni tranquilli, perché al tuo sito ci penso io.",
      },
      {
        q: 'E se cambio orari, prezzi o chiudo per ferie?',
        a: 'Mi scrivi su WhatsApp e aggiorno io. L’obiettivo è toglierti pensieri, non aggiungerti lavoro.',
      },
    ],
  },
  {
    slug: 'carpineti',
    cityName: 'Carpineti',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.272,
      lng: 10.311,
    },
    population: 4000,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'landing-montagna-sprint',
        title: 'Landing Montagna Sprint',
        description:
          'In 7 giorni metti online una pagina che spinge all’azione: contatti rapidi, WhatsApp, chiamate e richieste, perfetta da mobile.',
        price: '599',
        badge: 'Promo Montagna',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa',
          'Call to Action chiare',
          'SEO locale di base',
          'Mappa + indicazioni + orari + link recensioni',
          'Sito veloce e ottimizzato per smartphone',
          'Moduli contatto + anti-spam',
          'Analytics + Search Console (setup base)',
          'Cookie/GDPR base (banner + pagina privacy)',
        ],
      },
      {
        id: 'sito-completo-montagna',
        title: 'Sito Completo',
        description:
          'Un sito completo e professionale: struttura SEO, velocità e contenuti per superare la concorrenza nelle ricerche locali.',
        price: '899',
        badge: 'Promo Montagna',
        active: true,
        type: 'website',
        features: [
          'Sito completo fino a 5 pagine',
          'Struttura SEO ottimizzata',
          'Ottimizzazione del profilo Google Business',
          'Velocità & UX: sito rapido e chiaro, perfetto su schermi piccoli',
          'Sezione recensioni / prove social (integrazione dove possibile)',
          'Form avanzato + WhatsApp + click-to-call',
          'Analytics + Search Console',
          'Cookie/GDPR',
        ],
      },
    ],
    seo: {
      title: 'Siti Web a Carpineti | Manuel De Ceglie',
      description:
        'Realizzazione siti web a Carpineti: veloci, ottimizzati SEO e pensati per portarti clienti da Google. Perfetti da smartphone.',
      canonical: 'https://manueldeceglie.it/siti-web/carpineti',
      keywords: [
        'siti web carpineti',
        'prezzo sito web carpineti',
        'realizzazione siti web carpineti',
        'web designer carpineti',
        'creazione siti internet carpineti',
        'siti web reggio emilia appennino',
        'sviluppatore siti web carpineti',
        'sito web artigiani carpineti',
        'sito web agriturismo carpineti',
      ],
      h1: 'Siti Web a Carpineti per farti scegliere (prima degli altri)',
    },
    hero: {
      h1: 'Non lasciare i clienti alla concorrenza: fatti trovare prima tu.',
      sub: 'A Carpineti il passaparola aiuta, ma oggi chi non ti conosce digita su Google e decide in pochi secondi. Se vuoi che i potenziali clienti scelgano te, affidati a me. Ti creo un sito veloce e convincente, pensato per portare chiamate e richieste reali.',
      ctaText: 'Parliamo del progetto',
      ctaHref: '#contatti',
      trustSignal: 'Assistenza diretta, senza giri di parole',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title:
        'Se ti cercano su Google, cosa trovano? E cosa trovano i tuoi competitor?',
      problems: [
        "Sito vecchio o assente: da telefono si legge male e non invoglia l'utente a proseguire",
        'Non compari nelle ricerche locali per servizi e attività a Carpineti',
        'Informazioni sparse o vecchie: orari, contatti, posizione non chiari',
        'Caricamento lento del sito web: l’utente non aspetta e chiude',
        'Dipendenza dal passaparola: efficace, ma non intercetta nuovi clienti',
        'Foto non valorizzate: non rendono la qualità del tuo lavoro',
      ],
      solutions: [
        'Sito moderno e responsive: perfetto su smartphone e facile da navigare',
        'Ottimizzazione SEO locale per posizionarti su ricerche legate a Carpineti e dintorni',
        'Contenuti ordinati: in pochi secondi capiscono chi sei e cosa fai',
        'Prestazioni alte: sito rapido per non perdere nessun contatto',
        'Vetrina digitale sempre aperta: richieste anche fuori orario',
        'Galleria e prove social ottimizzate per aumentare la fiducia',
      ],
    },
    goodInvestment: {
      title: 'Il sito giusto è',
      titleHighlight: 'un investimento che lavora per te',
      subtitle:
        'Un sito ben fatto non è “una cosa in più”. È lo strumento che trasforma le ricerche in contatti, e i contatti in clienti. Con me hai un sito web di qualità, con dati e risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilità immediata',
          description:
            'Oggi un’attività senza sito sembra meno affidabile, anche se lavora benissimo.',
          description2:
            'Un sito curato mette ordine, autorevolezza e fa percepire valore.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Solido e sicuro',
          description:
            'Tecnologia pulita, privacy rispettata e niente fronzoli che rallentano.',
          description2:
            'L’obiettivo è avere un sito stabile, veloce e che non ti crei problemi.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Un alleato che filtra e vende',
          description:
            'Non devi ripetere sempre le stesse cose a ogni nuovo contatto.',
          description2:
            'Il sito spiega, rassicura e porta richieste più qualificate.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Non sono “tecnologico”: posso comunque avere un sito efficace?',
        a: 'Certo. Io gestisco la parte tecnica: tu mi dai le informazioni e il materiale base. Il sito deve semplificarti la vita, non complicarla.',
      },
      {
        q: 'In quanto tempo possiamo andare online?',
        a: 'Dipende dai contenuti, ma se mi dai tutto il necessario, si può partire velocemente. Lavoro con un processo snello: poche call, tanta concretezza.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Sì: oltre ai canoni della piattaforma di hosting e del dominio, offro ai miei clienti la possibilità di avere un'assistenza configurabile su tre livelli, che ti permette di concentrarti sul tuo lavoro e dormire sonni tranquilli, perché al tuo sito ci penso io.",
      },
      {
        q: 'Posso mostrare i miei lavori e le recensioni?',
        a: 'Sì, ed è uno dei modi migliori per farti scegliere. Mi mandi foto e recensioni (anche via WhatsApp): le ottimizzo e le inserisco in modo pulito e veloce.',
      },
      {
        q: 'Poi ci sono costi nascosti?',
        a: 'No: la realizzazione è una tantum. Negli anni successivi hai solo i costi di dominio e hosting (di solito poche decine di euro) e, se vuoi, un pacchetto di assistenza per aggiornamenti e piccole modifiche.',
      },
    ],
  },
  {
    slug: 'vignola',
    cityName: 'Vignola',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.28,
      lng: 11.0058,
    },
    population: 26170,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina fatta bene per farti contattare: messaggio chiaro, mobile perfetto e pulsanti di contatto subito visibili.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa (struttura + impaginazione)',
          'Call to Action chiare: WhatsApp + click-to-call + form contatti',
          'SEO base (title/meta, heading, performance, testi essenziali)',
          'Mappa + indicazioni + orari + link recensioni',
          'Ottimizzazione velocità e immagini (mobile-first)',
          'Analytics + Search Console (setup base)',
          'Cookie/GDPR base (banner + privacy/cookie)',
          '1 round di revisioni',
        ],
      },
      {
        id: 'sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito snello e professionale: chiaro, veloce e pensato per farti trovare e ricevere richieste senza complicazioni.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
        features: [
          'Fino a 5 pagine (es. Home, Servizi, Chi siamo, Contatti, Privacy)',
          'Struttura pulita e navigazione semplice (mobile-first)',
          'SEO base su tutte le pagine (title/meta, heading, testi essenziali)',
          'Form contatti + anti-spam + WhatsApp + click-to-call',
          'Analytics + Search Console',
          'Cookie/GDPR',
          '2 round di revisioni',
        ],
      },
    ],
    seo: {
      title: 'Realizzazione Siti Web a Vignola | Manuel De Ceglie',
      description:
        'Sviluppo siti web a Vignola: veloci, ottimizzati per Google e perfetti da smartphone. Un sito fatto bene che converte i visitatori in clienti paganti.',
      canonical: 'https://manueldeceglie.it/siti-web/vignola',
      keywords: [
        'siti web vignola',
        'prezzo sito web vignola',
        'sito web semplice vignola',
        'realizzazione siti web vignola',
        'web designer vignola',
        'creazione siti internet vignola',
        'sviluppatore web vignola',
        'siti web provincia di modena',
        'sito web vignola emilia romagna',
        '',
      ],
      h1: 'Siti Web a Vignola: fatti per farti trovare e contattare',
    },
    hero: {
      h1: 'A Vignola la concorrenza è forte: il tuo sito web deve urlare "scegli me!"',
      sub: 'Che tu sia abbia un ristorante, sia un professionista o un’attività locale, oggi il primo confronto con i tuoi competitor avviene su Google. Io ti realizzo un sito veloce, chiaro e convincente: così chi cerca ti trova, capisce subito il valore e ti contatta.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Approccio pratico: SEO + conversioni, senza fronzoli',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta aiutando… o sta regalando clienti agli altri?',
      problems: [
        'Il sito è lento e non ottimizzato: le persone che lo visitano con il telefono abbandonano subito',
        'Non compari quando cercano “(servizio) Vignola” o “(attività) Vignola”',
        "E' poco chiaro: contatti nascosti, testi piccoli, info confuse",
        'Hai speso soldi in passato ma senza risultati misurabili',
        'Le richieste che arrivano sono poche o poco qualificate',
        'Il tuo sito web e il suo design datato non rendono onore alla qualità del tuo lavoro',
      ],
      solutions: [
        'Prestazioni incredibili: caricamento rapido e navigazione pulita',
        'Ottimizzazione SEO locale pensata per intercettare ricerche a Vignola e dintorni',
        'Mobile-first: contatti subito visibili (WhatsApp/call/form)',
        'Tracciamento base con Analytics + Search Console: misuri visite e richieste',
        'Struttura e contenuti più chiari, per aumentare fiducia e contatti',
      ],
    },
    goodInvestment: {
      title: 'La differenza tra “avere un sito” e',
      titleHighlight: 'avere uno strumento che lavora',
      subtitle:
        'Un sito fatto bene non serve semplicemente a “esserci” online. Serve a generare fiducia, richieste e clienti, con risultati che puoi vedere e misurare: risultati che aumentano il tuo fatturato. ',
      cards: [
        {
          icon: 'star',
          title: 'Impatto immediato',
          description:
            'In pochi secondi una persona decide se contattarti o cercare altrove.',
          description2:
            'Un design pulito, testi chiari e informazioni in ordine fanno percepire qualità, e il cliente si accorgerà che se il tuo sito è di qualità, anche la tua azienda/attività lo sono.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Una base stabile, non più in affitto',
          description:
            'I social sono utili, ma non li controlli: regole, algoritmo e visibilità cambiano di continuo.',
          description2:
            'Il sito è la tua casa digitale: resta, si posiziona e accumula valore nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Più richieste, meno fatica',
          description:
            'Non devi ripetere sempre le stesse cose a ogni cliente.',
          description2:
            'Il sito spiega, rassicura e porta contatti più pronti a sceglierti',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ho già Instagram/Facebook: mi serve davvero anche il sito?',
        a: 'Sì, perché Google è dove ti cercano quando non ti conoscono. Inoltre i social sono “in affitto”: se cala la visibilità o cambia l’algoritmo, sparisci. Il sito invece resta tuo e lavora per il posizionamento.',
      },
      {
        q: 'Quanto tempo devo dedicarci?',
        a: 'Poco: una chiacchierata iniziale, informazioni base e qualche foto. Poi mi occupo io di struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Sì: oltre ai canoni della piattaforma di hosting e del dominio, offro ai miei clienti la possibilità di avere un'assistenza configurabile su tre livelli, che ti permette di concentrarti sul tuo lavoro e dormire sonni tranquilli, perché al tuo sito ci penso io.",
      },
      {
        q: 'Se cambio orari, servizi o prezzi?',
        a: 'Mi scrivi e aggiorno io. L’idea è darti uno strumento utile, non un “problema” da gestire.',
      },
    ],
  },
  {
    slug: 'fiorano-modenese',
    cityName: 'Fiorano Modenese',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.32,
      lng: 10.49,
    },
    population: 16723,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina fatta bene per richieste e preventivi: chiara, veloce e perfetta su mobile, con contatti subito a portata di mano.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa (struttura + impaginazione)',
          'Call to Action chiare: WhatsApp + click-to-call + form contatti',
          'SEO base (title/meta, heading, performance, testi essenziali)',
          'Mappa + indicazioni + orari + link recensioni',
          'Ottimizzazione velocità e immagini (mobile-first)',
          'Analytics + Search Console (setup base)',
          'Cookie/GDPR base (banner + privacy/cookie)',
          '1 round di revisioni',
        ],
      },
      {
        id: 'sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito snello e professionale: autorevole, chiaro e veloce. Ti aiuta a presentarti bene e a ricevere richieste senza fronzoli.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
        features: [
          'Fino a 5 pagine (es. Home, Servizi, Chi siamo, Contatti, Privacy)',
          'Struttura pulita e navigazione semplice (mobile-first)',
          'SEO base su tutte le pagine (title/meta, heading, testi essenziali)',
          'Form contatti + anti-spam + WhatsApp + click-to-call',
          'Analytics + Search Console',
          'Cookie/GDPR',
          '2 round di revisioni',
        ],
      },
    ],
    seo: {
      title: 'Siti Web a Fiorano Modenese | Manuel De Ceglie',
      description:
        'Realizzazione siti web a Fiorano Modenese: veloci, ottimizzati SEO e pensati per generare contatti (preventivi, chiamate e WhatsApp).',
      canonical: 'https://manueldeceglie.it/siti-web/fiorano-modenese',
      keywords: [
        'siti web fiorano modenese',
        'prezzo sito web a fiorano modenese',
        'realizzazione siti web fiorano modenese',
        'web designer fiorano modenese',
        'creazione siti internet fiorano',
        'sviluppatore web fiorano modenese',
        'siti web provincia di modena',
        'siti web distretto ceramico',
      ],
      h1: 'Siti Web a Fiorano Modenese: veloci, chiari, orientati ai contatti',
    },
    hero: {
      h1: 'A Fiorano la concorrenza è forte: il tuo sito web deve urlare "scegli me!"',
      sub: 'Tra tutte le attività locali, i liberi professionisti e le aziende è fondamentale distinguersi. Chi entra nel tuo sito web deve capire in pochi secondi cosa fai e come chiederti un preventivo. Ti creo un sito snello, professionale e ottimizzato per Google.',
      ctaText: 'Parliamo del progetto',
      ctaHref: '#contatti',
      trustSignal: 'Struttura pensata per richieste e preventivi',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito genera nuove opportunità… oppure "esiste" e basta?',
      problems: [
        'Il sito non comunica bene i servizi: chi entra non capisce chi sei, cosa fai e se ne va',
        'Non compari su Google per ricerche locali legate ai tuoi servizi',
        'Da telefono è macchinoso: i contatti e la richiesta di un preventivo non sono immediati',
        'Sito lento o disordinato: dà una sensazione poco professionale',
        'Il design è datato',
      ],
      solutions: [
        'Messaggio chiaro: cosa fai, per chi, perché scegliere te',
        'Ottimizzazione SEO locale per intercettare chi cerca a Fiorano e dintorni',
        'Pensato per funzionare perfettamente da smartphone con contatti visibili: WhatsApp, chiamata, richiesta preventivo',
        'Form contatti chiaro e guidato, per più richieste e più utili',
        'Velocità e pulizia visiva per aumentare fiducia',
        'Design premium e studiato ad-hoc per te e la tua attività: ti conferirà autorevolezza e aumenterà il valore percepito dei tuoi servizi',
      ],
    },
    goodInvestment: {
      title: 'Un sito ben fatto',
      titleHighlight: 'fa aumentare il tuo fatturato.',
      subtitle:
        'Non è “una spesa”. È uno strumento che DEVE portare richieste, aiutarti a vendere meglio e a distinguerti in un mercato competitivo facendo capire perchè devono scegliere te, in un mare di opportunità.',
      cards: [
        {
          icon: 'star',
          title: 'Autorevolezza e fiducia',
          description:
            'Quando il sito è ordinato e chiaro, la percezione del cliente in merito alla tua azienda cambia subito.',
          description2:
            'I clienti capiscono che sei ben organizzato e che possono affidarsi a te.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Controllo totale',
          description:
            'Sui social dipendi da continui cambi di algoritmi e limiti della piattaforma. ',
          description2:
            'Sul sito decidi tu i contenuti, decidi tu come farti contattare e decidi tu il percorso da far seguire al tuo potenziale cliente per convertirlo da visitatore a cliente.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Un agente di vendita sempre attivo',
          description:
            'Il sito risponde alle domande più comuni e guida gli utenti a contattarti.',
          description2:
            'Tu ricevi richieste più chiare e perdi meno tempo con persone che ti fanno sempre le stesse domande.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Io lavoro tanto: posso farlo senza perdere tempo?',
        a: 'Sì. Ti chiedo lo stretto necessario: info base, servizi, contatti e qualche foto. Io preparo struttura, testi, ottimizzazione e messa online.',
      },
      {
        q: 'Il sito serve anche se il lavoro arriva da passaparola?',
        a: 'Il passaparola è oro, ma molte persone controllano online prima di chiamarti. Un sito curato trasforma persone “interessate” in contatti veri e propri.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Sì: oltre ai canoni della piattaforma di hosting e del dominio, offro ai miei clienti la possibilità di avere un'assistenza configurabile su tre livelli, che ti permette di concentrarti sul tuo lavoro e dormire sonni tranquilli, perché al tuo sito ci penso io.",
      },
      {
        q: 'Dopo la pubblicazione posso aggiornare contenuti e foto?',
        a: 'Sì: con un messaggio mi mandi le modifiche e le pubblico io, mantenendo tutto veloce e coerente (anche lato SEO).',
      },
    ],
  },
  {
    slug: 'san-polo-d-enza',
    cityName: 'San Polo d\'Enza',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6258624,
      lng: 10.4222874,
    },
    population: 6088,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina che comunica subito chi sei, cosa fai e come contattarti. Pensata per funzionare bene da telefono e per farti trovare su Google.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura professionale',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale base per intercettare ricerche a San Polo d\'Enza',
          'Mappa, indicazioni, orari e link recensioni',
          'Ottimizzazione mobile e velocità',
          'Analytics e Search Console per misurare i risultati',
          'Cookie/GDPR in regola',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo che ti permette di presentare ogni servizio nel dettaglio, costruire fiducia e generare richieste concrete.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
        features: [
          'Fino a 5 pagine (Home, Servizi, Chi siamo, Contatti, Privacy)',
          'Struttura pulita e navigazione intuitiva',
          'SEO base su ogni pagina',
          'Form contatti avanzato + WhatsApp + click-to-call',
          'Analytics e Search Console',
          'Cookie/GDPR completo',
          '2 round di revisioni inclusi',
        ],
      },
    ],
    seo: {
      title: 'Realizzazione Siti Web a San Polo d\'Enza | Manuel De Ceglie',
      description:
        'Siti web professionali a San Polo d\'Enza: veloci, ottimizzati per Google e costruiti per portarti clienti reali.',
      canonical: 'https://manueldeceglie.it/siti-web/san-polo-d-enza',
      keywords: [
        'siti web san polo d\'enza',
        'web designer san polo d\'enza',
        'realizzazione siti web san polo d\'enza',
        'sviluppatore web san polo d\'enza',
        'siti web provincia di reggio emilia',
      ],
      h1: 'Siti Web a San Polo d\'Enza per attività che vogliono crescere',
    },
    hero: {
      h1: 'A San Polo d\'Enza la tua attività merita un sito che lavora per te',
      sub: 'Che tu abbia un laboratorio artigianale, un negozio o un servizio, oggi i clienti ti cercano online prima di chiamarti. Io ti creo un sito chiaro, veloce e ottimizzato per portarti richieste.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco il territorio e le esigenze delle attività locali',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito attuale ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) San Polo d\'Enza"',
        'Il sito è lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'I clienti trovano siti della concorrenza più chiari e moderni',
        'Hai un sito ma non sai quante persone lo visitano',
        'Il design è datato e non riflette la qualità del tuo lavoro',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare da chi cerca a San Polo d\'Enza e dintorni',
        'Sito super veloce e perfetto da smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics integrato per misurare visite e richieste',
        'Struttura pensata per convertire i visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito non è una spesa:',
      titleHighlight: 'è uno strumento che deve portare risultati',
      subtitle:
        'Il mio approccio è costruire siti che generano valore concreto. Non paghi per un "format", ma per un asset che lavora per la tua attività e che puoi misurare nel tempo.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione che conta',
          description:
            'In pochi secondi il visitatore decide se restare o andare altrove.',
          description2:
            'Un sito curato e veloce trasmette serietà e aumenta la fiducia.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'La tua presenza, stabile e sicura',
          description:
            'I social cambiano regole e visibilità. Il sito resta tuo.',
          description2:
            'È un investimento a lungo termine che non dipende da algoritmi.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Meno telefonate, più richieste qualificate',
          description:
            'Il sito risponde alle domande comuni e filtra i contatti.',
          description2:
            'Ricevi richieste più chiare e perdi meno tempo.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ho già una pagina Facebook, mi serve anche il sito?',
        a: 'Facebook è utile ma non basta. Google è dove ti cercano quando non ti conoscono. Inoltre, i social sono "in affitto": se cambia l\'algoritmo o la piattaforma, perdi visibilità. Il sito è casa tua e lavora per il tuo posizionamento.',
      },
      {
        q: 'Quanto tempo devo dedicargli?',
        a: 'Il tempo di una chiacchierata iniziale. Mi fornisci le informazioni base, qualche foto e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre ai costi di dominio e hosting (di solito poche decine di euro all'anno), offro un pacchetto di assistenza opzionale per aggiornamenti e modifiche. L'obiettivo è toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Posso aggiornare il sito dopo?',
        a: 'Sì. Con un messaggio mi mandi le modifiche e le pubblico io. Così il sito resta sempre aggiornato senza che tu debba imparare strumenti complicati.',
      },
    ],
  },
  {
    slug: 'langhirano',
    cityName: 'Langhirano',
    province: 'Parma',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6103,
      lng: 10.2667,
    },
    population: 10320,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Langhirano e Val Parma',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocità',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attività in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Langhirano | Manuel De Ceglie',
      description:
        'Siti web professionali a Langhirano: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio parmense e la tradizione food.',
      canonical: 'https://manueldeceglie.it/siti-web/langhirano',
      keywords: [
        'siti web langhirano',
        'web designer langhirano',
        'realizzazione siti web langhirano',
        'sviluppatore web langhirano',
        'siti web val parma',
        'agenzia web langhirano',
        'siti web prodotti tipici parma',
      ],
      h1: 'Siti Web a Langhirano per attività food e artigianali',
    },
    hero: {
      h1: 'A Langhirano il tuo sito deve raccontare la qualità del tuo lavoro',
      sub: 'Terra di prosciutti e tradizione gastronomica, qui la credibilità è tutto. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attività della Val Parma',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Langhirano"',
        'Il sito è lento o non funziona bene da telefono',
        'Non riesci a raccontare la qualità dei tuoi prodotti',
        'Hai un sito che non riflette la tradizione del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Langhirano',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che valorizza i tuoi prodotti',
        'Gallery e sezione prodotti ottimizzata',
        'Analytics per misurare visite e richieste',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'racconta la tua storia',
      subtitle:
        'In zona la tradizione è tutto. Un sito ben fatto racconta chi sei, da dove vieni e perché i clienti dovrebbero scegliere te.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilità che si vede',
          description:
            'Un sito curato trasmette la qualità del tuo lavoro.',
          description2:
            'I clienti percepiscono la differenza.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'La tua storia, online per sempre',
          description:
            'Il sito è il luogo dove racconti la tua tradizione.',
          description2:
            'Un asset che dura e cresce nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Clienti che ti trovano',
          description:
            'SEO locale per intercettare chi cerca a Langhirano.',
          description2:
            'Risultati misurabili e concreti.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un produttore alimentare serve un sito?',
        a: 'Assolutamente sì. Chi cerca prodotti tipici, prosciutti o specialità locali inizia da Google. Un sito ti fa trovare e ti dà autorevolezza.',
      },
      {
        q: 'Posso mostrare i miei prodotti e la storia?',
        a: 'Sì, è fondamentale. Gallery ottimizzata, sezione prodotti e storia dell\'azienda rendono il sito efficace e credibile.',
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
  },
  {
    slug: 'traversetolo',
    cityName: 'Traversetolo',
    province: 'Parma',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6333,
      lng: 10.45,
    },
    population: 9248,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Traversetolo e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocità',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attività in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Traversetolo | Manuel De Ceglie',
      description:
        'Siti web professionali a Traversetolo: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio parmense.',
      canonical: 'https://manueldeceglie.it/siti-web/traversetolo',
      keywords: [
        'siti web traversetolo',
        'web designer traversetolo',
        'realizzazione siti web traversetolo',
        'sviluppatore web traversetolo',
        'siti web provincia di parma',
        'agenzia web traversetolo',
      ],
      h1: 'Siti Web a Traversetolo per attività che vogliono crescere',
    },
    hero: {
      h1: 'A Traversetolo il tuo sito deve farti trovare dai clienti',
      sub: 'Che tu abbia un laboratorio, un negozio o un servizio, oggi i clienti ti cercano online. Io ti creo un sito veloce, chiaro e ottimizzato per portarti richieste.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attività del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Traversetolo"',
        'Il sito è lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualità del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Traversetolo',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attività.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione efficace',
          description:
            'In pochi secondi il visitatore capisce chi sei.',
          description2:
            'Un sito curato aumenta la fiducia.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Presenza stabile e sicura',
          description:
            'Il sito è tuo, non dipende da algoritmi.',
          description2:
            'Un asset che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Più richieste, meno fatica',
          description:
            'Il sito filtra e porta contatti qualificati.',
          description2:
            'Tu ti concentri sul tuo lavoro.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un commerciante serve un sito?',
        a: 'Sì. Il passaparola resta importante, ma chi ti cerca online non ti conosce ancora. Un sito ti fa trovare e ti dà credibilità.',
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
  },
  {
    slug: 'quattro-castella',
    cityName: 'Quattro Castella',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.63227685,
      lng: 10.47048437867887,
    },
    population: 5199,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Quattro Castella e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Quattro Castella | Manuel De Ceglie',
      description:
        'Siti web professionali a Quattro Castella: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio reggiano.',
      canonical: 'https://manueldeceglie.it/siti-web/quattro-castella',
      keywords: [
        'siti web quattro castella',
        'web designer quattro castella',
        'realizzazione siti web quattro castella',
        'sviluppatore web quattro castella',
        'siti web provincia di reggio emilia',
        'agenzia web quattro castella',
      ],
      h1: 'Siti Web a Quattro Castella per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Quattro Castella il tuo sito deve distinguerti dalla concorrenza',
      sub: 'Zona in crescita, territorio ricco di attivita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Quattro Castella"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Quattro Castella',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un servizio serve un sito?',
        a: 'Sì. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'albinea',
    cityName: 'Albinea',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6201821,
      lng: 10.6019259,
    },
    population: 8800,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Albinea e zona collinare',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Albinea | Manuel De Ceglie',
      description:
        'Siti web professionali a Albinea: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio collinare reggiano.',
      canonical: 'https://manueldeceglie.it/siti-web/albinea',
      keywords: [
        'siti web albinea',
        'web designer albinea',
        'realizzazione siti web albinea',
        'sviluppatore web albinea',
        'siti web zona collinare reggio emilia',
        'agenzia web albinea',
      ],
      h1: 'Siti Web a Albinea per attivita della collina reggiana',
    },
    hero: {
      h1: 'A Albinea il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Territorio collinare, ricco di attivita artigianali e turistiche. Io ti creo un sito veloce, chiaro e ottimizzato per portarti richieste.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita della zona',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Albinea"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Albinea',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati concreti',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione efficace',
          description:
            'In pochi secondi il visitatore capisce chi sei.',
          description2:
            'Un sito curato aumenta la fiducia.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Presenza stabile e sicura',
          description:
            'Il sito e tuo, non dipende da algoritmi.',
          description2:
            'Un asset che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Piu richieste, meno fatica',
          description:
            'Il sito filtra e porta contatti qualificati.',
          description2:
            'Tu ti concentri sul tuo lavoro.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un agriturismo o un artigiano serve un sito?',
        a: 'Sì. Chi cerca un servizio o un prodotto in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'bibbiano',
    cityName: 'Bibbiano',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6634303,
      lng: 10.4727188,
    },
    population: 10256,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Bibbiano e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Bibbiano | Manuel De Ceglie',
      description:
        'Siti web professionali a Bibbiano: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio reggiano.',
      canonical: 'https://manueldeceglie.it/siti-web/bibbiano',
      keywords: [
        'siti web bibbiano',
        'web designer bibbiano',
        'realizzazione siti web bibbiano',
        'sviluppatore web bibbiano',
        'siti web provincia di reggio emilia',
        'agenzia web bibbiano',
      ],
      h1: 'Siti Web a Bibbiano per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Bibbiano il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Zona in crescita, territorio ricco di attivita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Bibbiano"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Bibbiano',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un commerciante serve un sito?',
        a: 'Sì. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'castellarano',
    cityName: 'Castellarano',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5102806,
      lng: 10.7286395,
    },
    population: 15288,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Castellarano e zona ceramica',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Castellarano | Manuel De Ceglie',
      description:
        'Siti web professionali a Castellarano: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio e le esigenze locali.',
      canonical: 'https://manueldeceglie.it/siti-web/castellarano',
      keywords: [
        'siti web castellarano',
        'web designer castellarano',
        'realizzazione siti web castellarano',
        'sviluppatore web castellarano',
        'siti web zona ceramica',
        'agenzia web castellarano',
      ],
      h1: 'Siti Web a Castellarano per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Castellarano la tua attivita merita un sito che funziona',
      sub: 'Zona industriale e residenziale in crescita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Castellarano"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Castellarano',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un azienda o un artigiano serve un sito?',
        a: 'Si. Chi cerca un servizio o un prodotto in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'cavriago',
    cityName: 'Cavriago',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6941945,
      lng: 10.5268984,
    },
    population: 9800,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Cavriago e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Cavriago | Manuel De Ceglie',
      description:
        'Siti web professionali a Cavriago: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio reggiano.',
      canonical: 'https://manueldeceglie.it/siti-web/cavriago',
      keywords: [
        'siti web cavriago',
        'web designer cavriago',
        'realizzazione siti web cavriago',
        'sviluppatore web cavriago',
        'siti web provincia di reggio emilia',
        'agenzia web cavriago',
      ],
      h1: 'Siti Web a Cavriago per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Cavriago il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Zona residenziale e commerciale in crescita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Cavriago"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Cavriago',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione efficace',
          description:
            'In pochi secondi il visitatore capisce chi sei.',
          description2:
            'Un sito curato aumenta la fiducia.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Presenza stabile e sicura',
          description:
            'Il sito e tuo, non dipende da algoritmi.',
          description2:
            'Un asset che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Piu richieste, meno fatica',
          description:
            'Il sito filtra e porta contatti qualificati.',
          description2:
            'Tu ti concentri sul tuo lavoro.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un commerciante serve un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'parma',
    cityName: 'Parma',
    province: 'Parma',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.801485,
      lng: 10.327904,
    },
    population: 195688,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Parma e provincia',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Parma | Manuel De Ceglie',
      description:
        'Siti web professionali a Parma: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio parmense e le esigenze delle attivita locali.',
      canonical: 'https://manueldeceglie.it/siti-web/parma',
      keywords: [
        'siti web parma',
        'web designer parma',
        'realizzazione siti web parma',
        'sviluppatore web parma',
        'agenzia web parma',
        'siti web parma e provincia',
        'creazione siti internet parma',
        'web agency parma',
      ],
      h1: 'Siti Web a Parma per professionisti e attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Parma la competizione e alta: il tuo sito deve distinguerti',
      sub: 'Citta d\'arte, food e cultura, Parma offre grandi opportunita ma anche forte concorrenza. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare e farti scegliere.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita parmensi',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo vincere o perdere clienti?',
      problems: [
        'Non compari su Google per ricerche legate ai tuoi servizi a Parma',
        'Il sito e lento e i visitatori abbandonano',
        'Da telefono e difficile da navigare o i contatti sono nascosti',
        'Hai un sito datato che non riflette la qualita attuale',
        'Non sai quante richieste arrivano dal sito',
        'La concorrenza ha siti piu moderni e convincenti',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Parma',
        'Sito super veloce e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette affidabilita',
        'Analytics integrato per misurare risultati concreti',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto: piu visibilita, piu fiducia, piu richieste. Questo e cio che differenzia un costo da un investimento.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Parma serve davvero un sito?',
        a: 'Si, e non solo per i clienti finali. Professionisti, artigiani e commercianti hanno bisogno di una presenza online che li faccia trovare e dia fiducia. Chi non ha un sito competitivo perde terreno.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
      {
        q: 'Posso mostrare i miei lavori e le recensioni?',
        a: 'Si, e uno dei modi migliori per farti scegliere. Mi mandi foto e recensioni (anche via WhatsApp): le inserisco in modo pulito e veloce.',
      },
    ],
  },
  {
    slug: 'scandiano',
    cityName: 'Scandiano',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5993449,
      lng: 10.6878385,
    },
    population: 18242,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina che comunica subito chi sei, cosa fai e come contattarti. Pensata per funzionare bene da telefono e per farti trovare su Google.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura professionale',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale base per intercettare ricerche a Scandiano',
          'Mappa, indicazioni, orari e link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console per misurare i risultati',
          'Cookie/GDPR in regola',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo che ti permette di presentare ogni servizio nel dettaglio, costruire fiducia e generare richieste concrete.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
        features: [
          'Fino a 5 pagine (Home, Servizi, Chi siamo, Contatti, Privacy)',
          'Struttura pulita e navigazione intuitiva',
          'SEO base su ogni pagina',
          'Form contatti avanzato + WhatsApp + click-to-call',
          'Analytics e Search Console',
          'Cookie/GDPR completo',
          '2 round di revisioni inclusi',
        ],
      },
    ],
    seo: {
      title: 'Realizzazione Siti Web a Scandiano | Manuel De Ceglie',
      description:
        'Siti web professionali a Scandiano: veloci, ottimizzati per Google e costruiti per portarti clienti reali. Specializzato in attivita locali dellarea reggiana.',
      canonical: 'https://manueldeceglie.it/siti-web/scandiano',
      keywords: [
        'siti web scandiano',
        'web designer scandiano',
        'realizzazione siti web scandiano',
        'sviluppatore web reggio emilia',
        'siti web provincia di reggio emilia',
        'agenzia web scandiano',
      ],
      h1: 'Siti Web a Scandiano: fatti per farti trovare e far crescere la tua attivita',
    },
    hero: {
      h1: 'A Scandiano la tua attivita merita un sito che lavora per te',
      sub: 'Che tu abbia un laboratorio artigianale, un negozio o uno studio professionale, oggi i clienti ti cercano online prima di chiamarti. Io ti creo un sito chiaro, veloce e ottimizzato per portarti richieste.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco il territorio e le esigenze delle attivita locali',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito attuale ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Scandiano"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'I clienti trovano siti della concorrenza piu chiari e moderni',
        'Hai un sito ma non sai quante persone lo visitano',
        'Il design e datato e non riflette la qualita del tuo lavoro',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare da chi cerca a Scandiano e dintorni',
        'Sito super veloce e perfetto da smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics integrato per misurare visite e richieste',
        'Struttura pensata per convertire i visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito non e una spesa:',
      titleHighlight: 'e uno strumento che deve portare risultati',
      subtitle:
        'Il mio approccio e costruire siti che generano valore concreto. Non paghi per un "format", ma per un asset che lavora per la tua attivita e che puoi misurare nel tempo.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione che conta',
          description:
            'In pochi secondi il visitatore decide se restare o andare altrove.',
          description2:
            'Un sito curato e veloce trasmette serieta e aumenta la fiducia.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'La tua presenza, stabile e sicura',
          description:
            'I social cambiano regole e visibilita. Il sito resta tuo.',
          description2:
            'E un investimento a lungo termine che non dipende da algoritmi.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Meno telefonate, piu richieste qualificate',
          description:
            'Il sito risponde alle domande comuni e filtra i contatti.',
          description2:
            'Ricevi richieste piu chiare e perdi meno tempo.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Ho già una pagina Facebook, mi serve anche il sito?',
        a: 'Facebook e utile ma non basta. Google e dove ti cercano quando non ti conoscono. Inoltre, i social sono "in affitto": se cambia lalgoritmo o la piattaforma, perdi visibilita. Il sito e casa tua e lavora per il tuo posizionamento.',
      },
      {
        q: 'Quanto tempo devo dedicargli?',
        a: 'Il tempo di una chiacchierata iniziale. Mi fornisci le informazioni base, qualche foto e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre ai costi di dominio e hosting (di solito poche decine di euro all'anno), offro un pacchetto di assistenza opzionale per aggiornamenti e modifiche. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Posso aggiornare il sito dopo?',
        a: 'Si. Con un messaggio mi mandi le modifiche e le pubblico io. Cosi il sito resta sempre aggiornato senza che tu debba imparare strumenti complicati.',
      },
    ],
  },
  {
    slug: 'casalgrande',
    cityName: 'Casalgrande',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5880091,
      lng: 10.7373209,
    },
    population: 18829,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale che comunica chiaramente chi sei, cosa offri e come contattarti. Ottimizzata per mobile e per farti trovare su Google.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action chiare: WhatsApp, click-to-call, form',
          'SEO locale per intercettare ricerche a Casalgrande',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione velocita e mobile-first',
          'Analytics e Search Console configurati',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare ogni aspetto della tua attivita: servizi, storia, prove social e contatti. Costruito per generare fiducia e richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Siti Web a Casalgrande | Manuel De Ceglie',
      description:
        'Realizzazione siti web professionali a Casalgrande: veloci, ottimizzati per Google e pensati per portarti clienti concreti. Specializzato in attivita locali.',
      canonical: 'https://manueldeceglie.it/siti-web/casalgrande',
      keywords: [
        'siti web casalgrande',
        'web designer casalgrande',
        'realizzazione siti web casalgrande',
        'sviluppatore web provincia di reggio emilia',
        'siti web zona ceramica',
        'agenzia web casalgrande',
      ],
      h1: 'Siti Web a Casalgrande per attivita che vogliono farsi trovare online',
    },
    hero: {
      h1: 'A Casalgrande il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Che tu abbia un laboratorio, un negozio o un servizio, oggi chi cerca un professionista inizia da Google. Io ti creo un sito veloce, chiaro e ottimizzato per portarti richieste reali.',
      ctaText: 'Parliamo del tuo progetto',
      ctaHref: '#contatti',
      trustSignal: 'Esperienza con le realta produttive del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta aiutando… o sta facendo perdere occasioni?',
      problems: [
        'Non compari nelle ricerche locali per servizi a Casalgrande',
        'Il sito e lento o non funziona bene da smartphone',
        'I visitatori non trovano le informazioni che cercano',
        'Hai un sito vecchio che non riflette la qualita attuale',
        'Non sai quante persone visitano il sito o da dove arrivano',
        'I clienti preferiscono competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare da chi cerca a Casalgrande',
        'Sito rapido e perfetto su ogni schermo',
        'Contatti sempre visibili: WhatsApp, chiamata, richiesta preventivo',
        'Design moderno che trasmette professionalita',
        'Analytics integrato per misurare risultati',
        'Struttura pensata per convertire i visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'La differenza tra',
      titleHighlight: 'esserci ed essere efficaci',
      subtitle:
        'Un sito fatto bene non serve solo ad "avere un sito". Serve a generare fiducia, intercettare chi ti cerca e portarti richieste misurabili. Questo e il mio obiettivo.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato e veloce trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita anche prima di contattarti.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset che possiedi davvero',
          description:
            'I social sono in affitto. Il sito e casa tua.',
          description2:
            'Nessuno puo togliertelo o limitare la tua visibilita.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Un venditore che lavora sempre',
          description:
            'Risponde alle domande, convince e porta contatti.',
          description2:
            'Tu ti concentri sul tuo lavoro, il sito porta i clienti.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un laboratorio artigianale o un negozio serve un sito?',
        a: 'Assolutamente si. I clienti cercano online prima di decidere. Se non ti trovano, vanno altrove. Un sito ti fa trovare, ti da credibilita e porta richieste anche quando sei impegnato nel tuo lavoro.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto, il mio lavoro e semplificarti la vita. Mi dai le informazioni base e il materiale, io preparo tutto pronto per andare online. Per le modifiche successive, mi scrivi un messaggio e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre ai costi di dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e darti uno strumento utile senza aggiungerti pensieri.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integro Analytics e Search Console. Cosi puoi vedere quante persone visitano il sito, da dove arrivano e quante richieste ricevi. Numeri concreti, non sensazioni.',
      },
    ],
  },
  {
    slug: 'sassuolo',
    cityName: 'Sassuolo',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5409769,
      lng: 10.7829023,
    },
    population: 23295,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Sassuolo e zona ceramica',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. Struttura SEO ottimizzata e pensato per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Sassuolo | Manuel De Ceglie',
      description:
        'Siti web professionali a Sassuolo: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio e le esigenze delle aziende locali.',
      canonical: 'https://manueldeceglie.it/siti-web/sassuolo',
      keywords: [
        'siti web sassuolo',
        'web designer sassuolo',
        'realizzazione siti web sassuolo',
        'sviluppatore web modena',
        'siti web distretto ceramico',
        'agenzia web sassuolo',
        'sitoweb sassuolo ceramica',
      ],
      h1: 'Siti Web a Sassuolo per aziende e professionisti che vogliono crescere',
    },
    hero: {
      h1: 'A Sassuolo la tua azienda merita un sito che funziona davvero',
      sub: 'Il distretto ceramico e competitivo: se non ti fai trovare online, perdi clienti. Io ti creo un sito veloce, chiaro e ottimizzato per portarti richieste e farti scegliere.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle aziende del settore',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta aiutando a vincere la competizione?',
      problems: [
        'Non compari su Google per ricerche legate ai tuoi prodotti o servizi',
        'Il sito e lento e i clienti abbandonano prima di capire cosa offri',
        'Da telefono e difficile da navigare o i contatti non sono visibili',
        'Hai un sito datato che non riflette la qualita attuale',
        'Non sai quante richieste arrivano dal sito',
        'I competitor hanno siti piu moderni e convincenti',
      ],
      solutions: [
        'Ottimizzazione SEO locale per intercettare ricerche a Sassuolo e zona',
        'Sito super veloce e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette affidabilita',
        'Analytics integrato per misurare risultati concreti',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per la tua azienda',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili: piu visibilita, piu fiducia, piu richieste. Questo e cio che differenzia un costo da un investimento.',
      cards: [
        {
          icon: 'star',
          title: 'Fiducia che si costruisce online',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti scelgono anche prima di contattarti.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Non dipendi da algoritmi o piattaforme.',
          description2:
            'Il sito resta tuo e accumula valore nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano e ti contattano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per unazienda del settore ceramico serve un sito?',
        a: 'Si, e non solo per i clienti finali. I buyer e i rivenditori cercano online. Un sito professionale ti da credibilita e ti fa trovare da chi decide dove acquistare.',
      },
      {
        q: 'Non ho materiale fotografico di qualita.',
        a: 'Non serve essere fotografi. Mi mandi quello che hai e lo ottimizzo. Se serve, ti do indicazioni su come fare foto semplici ma efficaci con il telefono.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Quanto tempo per andare online?',
        a: 'Con il materiale pronto, si parte velocemente. Lavoro in modo snello: poche riunioni, tanta concretezza.',
      },
    ],
  },
  {
    slug: 'rubiera',
    cityName: 'Rubiera',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6532007,
      lng: 10.781081,
    },
    population: 18648,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina che comunica subito chi sei e cosa offri. Ottimizzata per mobile, veloce e pensata per farti contattare.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action chiare: WhatsApp, chiamata, form',
          'SEO locale per Rubiera e hinterland',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Siti Web a Rubiera | Manuel De Ceglie',
      description:
        'Realizzazione siti web professionali a Rubiera: veloci, ottimizzati per Google e pensati per portarti clienti concreti. Conosco il territorio reggiano.',
      canonical: 'https://manueldeceglie.it/siti-web/rubiera',
      keywords: [
        'siti web rubiera',
        'web designer rubiera',
        'realizzazione siti web rubiera',
        'sviluppatore web rubiera',
        'siti web provincia di reggio emilia',
        'agenzia web rubiera',
      ],
      h1: 'Siti Web a Rubiera per attivita che vogliono farsi trovare online',
    },
    hero: {
      h1: 'A Rubiera il tuo sito deve portarti clienti, non solo visitatori',
      sub: 'Che tu abbia un negozio, un laboratorio o un servizio, oggi i clienti ti cercano online. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare e farti scegliere.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Esperienza con le attivita del territorio reggiano',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito attuale ti sta facendo perdere occasioni?',
      problems: [
        'Non compari nelle ricerche locali per servizi a Rubiera',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Rubiera',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Il mio approccio e costruire siti che generano valore concreto. Non paghi per un format, ma per uno strumento che porta risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione efficace',
          description:
            'In pochi secondi il visitatore capisce chi sei.',
          description2:
            'Un sito curato aumenta la fiducia.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Presenza stabile e sicura',
          description:
            'Il sito e tuo, non dipende da algoritmi.',
          description2:
            'Un asset che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Piu richieste, meno fatica',
          description:
            'Il sito filtra e porta contatti qualificati.',
          description2:
            'Tu ti concentri sul tuo lavoro.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un commerciante serve un sito?',
        a: 'Si. Il passaparola resta importante, ma chi ti cerca online non ti conosce ancora. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestirlo.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche successive, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come misuro i risultati?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'pieve-modolena',
    cityName: 'Pieve Modolena',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.7140696,
      lng: 10.5864068,
    },
    population: 6110,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Pieve Modolena e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Pieve Modolena | Manuel De Ceglie',
      description:
        'Siti web professionali a Pieve Modolena: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio reggiano.',
      canonical: 'https://manueldeceglie.it/siti-web/pieve-modolena',
      keywords: [
        'siti web pieve modolena',
        'web designer pieve modolena',
        'realizzazione siti web pieve modolena',
        'sviluppatore web pieve modolena',
        'siti web provincia di reggio emilia',
        'agenzia web pieve modolena',
      ],
      h1: 'Siti Web a Pieve Modolena per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Pieve Modolena il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Zona residenziale e commerciale in crescita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Pieve Modolena"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Pieve Modolena',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un servizio serve un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'castelnuovo-rangone',
    cityName: 'Castelnuovo Rangone',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5513342,
      lng: 10.935016,
    },
    population: 5596,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Castelnuovo Rangone e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Castelnuovo Rangone | Manuel De Ceglie',
      description:
        'Siti web professionali a Castelnuovo Rangone: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio modenese.',
      canonical: 'https://manueldeceglie.it/siti-web/castelnuovo-rangone',
      keywords: [
        'siti web castelnuovo rangone',
        'web designer castelnuovo rangone',
        'realizzazione siti web castelnuovo rangone',
        'sviluppatore web castelnuovo rangone',
        'siti web provincia di modena',
        'agenzia web castelnuovo rangone',
      ],
      h1: 'Siti Web a Castelnuovo Rangone per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Castelnuovo Rangone il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Zona in crescita tra Modena e il territorio. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Castelnuovo Rangone"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Castelnuovo Rangone',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati concreti',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Prima impressione efficace',
          description:
            'In pochi secondi il visitatore capisce chi sei.',
          description2:
            'Un sito curato aumenta la fiducia.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Presenza stabile e sicura',
          description:
            'Il sito e tuo, non dipende da algoritmi.',
          description2:
            'Un asset che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Piu richieste, meno fatica',
          description:
            'Il sito filtra e porta contatti qualificati.',
          description2:
            'Tu ti concentri sul tuo lavoro.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un servizio serve un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'modena',
    cityName: 'Modena',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6458885,
      lng: 10.9255707,
    },
    population: 185334,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Modena e provincia',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Modena | Manuel De Ceglie',
      description:
        'Siti web professionali a Modena: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio modenese e le esigenze delle attivita locali.',
      canonical: 'https://manueldeceglie.it/siti-web/modena',
      keywords: [
        'siti web modena',
        'web designer modena',
        'realizzazione siti web modena',
        'sviluppatore web modena',
        'agenzia web modena',
        'siti web modena e provincia',
        'creazione siti internet modena',
        'web agency modena',
      ],
      h1: 'Siti Web a Modena per professionisti e attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Modena la competizione e alta: il tuo sito deve distinguerti',
      sub: 'Citta darte, food e cultura, Modena offre grandi opportunita ma anche forte concorrenza. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare e farti scegliere.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita modenesi',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo vincere o perdere clienti?',
      problems: [
        'Non compari su Google per ricerche legate ai tuoi servizi a Modena',
        'Il sito e lento e i visitatori abbandonano',
        'Da telefono e difficile da navigare o i contatti sono nascosti',
        'Hai un sito datato che non riflette la qualita attuale',
        'Non sai quante richieste arrivano dal sito',
        'La concorrenza ha siti piu moderni e convincenti',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Modena',
        'Sito super veloce e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette affidabilita',
        'Analytics integrato per misurare risultati concreti',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto: piu visibilita, piu fiducia, piu richieste. Questo e cio che differenzia un costo da un investimento.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Modena serve davvero un sito?',
        a: 'Si, e non solo per i clienti finali. Professionisti, artigiani e commercianti hanno bisogno di una presenza online che li faccia trovare e dia fiducia. Chi non ha un sito competitivo perde terreno.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
      {
        q: 'Posso mostrare i miei lavori e le recensioni?',
        a: 'Si, e uno dei modi migliori per farti scegliere. Mi mandi foto e recensioni (anche via WhatsApp): le inserisco in modo pulito e veloce.',
      },
    ],
  },
  {
    slug: 'spilamberto',
    cityName: 'Spilamberto',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5352,
      lng: 11.0205,
    },
    population: 13007,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Spilamberto e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Spilamberto | Manuel De Ceglie',
      description:
        'Siti web professionali a Spilamberto: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio delle Terre di Castelli.',
      canonical: 'https://manueldeceglie.it/siti-web/spilamberto',
      keywords: [
        'siti web spilamberto',
        'web designer spilamberto',
        'realizzazione siti web spilamberto',
        'sviluppatore web spilamberto',
        'siti web terra dei castelli',
        'agenzia web spilamberto',
        'siti web nocino spilamberto',
      ],
      h1: 'Siti Web a Spilamberto per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Spilamberto il tuo sito deve raccontare la qualita del tuo lavoro',
      sub: 'Terra del Nocino e dei castelli, qui la tradizione e la qualita contano. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Spilamberto"',
        'Il sito e lento o non funziona bene da telefono',
        'Non riesci a raccontare la qualita dei tuoi prodotti',
        'Hai un sito che non riflette la tradizione del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Spilamberto',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che valorizza i tuoi prodotti',
        'Gallery e sezione servizi ottimizzata',
        'Analytics per misurare visite e richieste',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'racconta la tua storia',
      subtitle:
        'In zona la tradizione e la qualita sono tutto. Un sito ben fatto racconta chi sei, da dove vieni e perché i clienti dovrebbero scegliere te.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita che si vede',
          description:
            'Un sito curato trasmette la qualita del tuo lavoro.',
          description2:
            'I clienti percepiscono la differenza.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'La tua storia, online per sempre',
          description:
            'Il sito e il luogo dove racconti la tua tradizione.',
          description2:
            'Un asset che dura e cresce nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Clienti che ti trovano',
          description:
            'SEO locale per intercettare chi cerca a Spilamberto.',
          description2:
            'Risultati misurabili e concreti.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un produttore o un artigiano serve un sito?',
        a: 'Assolutamente si. Chi cerca prodotti locali, servizi o artigiani inizia da Google. Un sito ti fa trovare e ti da autorevolezza.',
      },
      {
        q: 'Posso mostrare i miei prodotti e la storia?',
        a: 'Si, e fondamentale. Gallery ottimizzata, sezione prodotti e storia aziendale rendono il sito efficace e credibile.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e qualche foto. Io preparo tutto pronto per andare online.',
      },
    ],
  },
  {
    slug: 'casalecchio-di-reno',
    cityName: 'Casalecchio di Reno',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.4765,
      lng: 11.2938,
    },
    population: 35549,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Casalecchio di Reno e area bolognese',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Casalecchio di Reno | Manuel De Ceglie',
      description:
        'Siti web professionali a Casalecchio di Reno: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio bolognese e le esigenze locali.',
      canonical: 'https://manueldeceglie.it/siti-web/casalecchio-di-reno',
      keywords: [
        'siti web casalecchio di reno',
        'web designer casalecchio',
        'realizzazione siti web casalecchio',
        'sviluppatore web bologna',
        'siti web area bolognese',
        'agenzia web casalecchio',
      ],
      h1: 'Siti Web a Casalecchio di Reno per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Casalecchio di Reno la tua attivita merita un sito che funziona',
      sub: 'Zona strategica tra Bologna e il territorio, qui la visibilita online e fondamentale. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita dellarea bolognese',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Casalecchio di Reno"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Casalecchio',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto: piu visibilita, piu fiducia, piu richieste.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Casalecchio serve davvero un sito?',
        a: 'Si. La zona e strategica e la competizione e alta. Chi non ha un sito competitivo perde terreno rispetto ai competitor.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
    ],
  },
  {
    slug: 'valsamoggia',
    cityName: 'Valsamoggia',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.4465,
      lng: 11.1135,
    },
    population: 32033,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Valsamoggia e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Valsamoggia | Manuel De Ceglie',
      description:
        'Siti web professionali a Valsamoggia: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio collinare bolognese.',
      canonical: 'https://manueldeceglie.it/siti-web/valsamoggia',
      keywords: [
        'siti web valsamoggia',
        'web designer valsamoggia',
        'realizzazione siti web valsamoggia',
        'sviluppatore web valsamoggia',
        'siti web zona collinare bologna',
        'agenzia web valsamoggia',
        'siti web bazzano valsamoggia',
      ],
      h1: 'Siti Web a Valsamoggia per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Valsamoggia il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Territorio collinare in crescita, ricco di attivita artigianali e turistiche. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita della zona',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Valsamoggia"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Valsamoggia',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un agriturismo o un artigiano serve un sito?',
        a: 'Si. Chi cerca servizi in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'fidenza',
    cityName: 'Fidenza',
    province: 'Parma',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.8667,
      lng: 10.0667,
    },
    population: 27412,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Fidenza e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Fidenza | Manuel De Ceglie',
      description:
        'Siti web professionali a Fidenza: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio parmense e le esigenze locali.',
      canonical: 'https://manueldeceglie.it/siti-web/fidenza',
      keywords: [
        'siti web fidenza',
        'web designer fidenza',
        'realizzazione siti web fidenza',
        'sviluppatore web fidenza',
        'siti web provincia di parma',
        'agenzia web fidenza',
        'siti web fidenza food',
      ],
      h1: 'Siti Web a Fidenza per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Fidenza la tua attivita merita un sito che funziona',
      sub: 'Citta darte e tradizione gastronomica, Fidenza offre grandi opportunita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare e farti scegliere.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo vincere o perdere clienti?',
      problems: [
        'Non compari su Google per ricerche legate ai tuoi servizi a Fidenza',
        'Il sito e lento e i visitatori abbandonano',
        'Da telefono e difficile da navigare o i contatti sono nascosti',
        'Hai un sito datato che non riflette la qualita attuale',
        'Non sai quante richieste arrivano dal sito',
        'La concorrenza ha siti piu moderni e convincenti',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Fidenza',
        'Sito super veloce e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette affidabilita',
        'Analytics integrato per misurare risultati concreti',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Fidenza serve davvero un sito?',
        a: 'Si. La citta e un polo importante per servizi, artigianato e turismo. Chi non ha un sito competitivo perde terreno.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
    ],
  },
  {
    slug: 'finale-emilia',
    cityName: 'Finale Emilia',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.8333,
      lng: 11.2833,
    },
    population: 15243,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Finale Emilia e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Finale Emilia | Manuel De Ceglie',
      description:
        'Siti web professionali a Finale Emilia: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio modenese.',
      canonical: 'https://manueldeceglie.it/siti-web/finale-emilia',
      keywords: [
        'siti web finale emilia',
        'web designer finale emilia',
        'realizzazione siti web finale emilia',
        'sviluppatore web finale emilia',
        'siti web provincia di modena',
        'agenzia web finale emilia',
      ],
      h1: 'Siti Web a Finale Emilia per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Finale Emilia il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Zona storica tra Modena e Ferrara. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Finale Emilia"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Finale Emilia',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un commerciante serve un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'castelfranco-emilia',
    cityName: 'Castelfranco Emilia',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5833,
      lng: 10.8667,
    },
    population: 33397,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Castelfranco Emilia e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Castelfranco Emilia | Manuel De Ceglie',
      description:
        'Siti web professionali a Castelfranco Emilia: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio modenese.',
      canonical: 'https://manueldeceglie.it/siti-web/castelfranco-emilia',
      keywords: [
        'siti web castelfranco emilia',
        'web designer castelfranco emilia',
        'realizzazione siti web castelfranco emilia',
        'sviluppatore web castelfranco emilia',
        'siti web provincia di modena',
        'agenzia web castelfranco emilia',
      ],
      h1: 'Siti Web a Castelfranco Emilia per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Castelfranco Emilia la tua attivita merita un sito che funziona',
      sub: 'Zona strategica tra Modena e Bologna. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Castelfranco Emilia"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Castelfranco Emilia',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Castelfranco serve davvero un sito?',
        a: 'Si. La zona e strategica e in crescita. Chi non ha un sito competitivo perde terreno rispetto ai competitor.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
    ],
  },
  {
    slug: 'san-lazzaro-di-savena',
    cityName: 'San Lazzaro di Savena',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.4145,
      lng: 11.4118,
    },
    population: 32861,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per San Lazzaro di Savena e area bolognese',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a San Lazzaro di Savena | Manuel De Ceglie',
      description:
        'Siti web professionali a San Lazzaro di Savena: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio bolognese.',
      canonical: 'https://manueldeceglie.it/siti-web/san-lazzaro-di-savena',
      keywords: [
        'siti web san lazzaro di savena',
        'web designer san lazzaro',
        'realizzazione siti web san lazzaro',
        'sviluppatore web bologna',
        'siti web zona savena',
        'agenzia web san lazzaro',
      ],
      h1: 'Siti Web a San Lazzaro di Savena per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A San Lazzaro di Savena la tua attivita merita un sito che funziona',
      sub: 'Zona residenziale e commerciale tra Bologna e il territorio. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita dellarea bolognese',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) San Lazzaro di Savena"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a San Lazzaro',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A San Lazzaro serve davvero un sito?',
        a: 'Si. La zona e residenziale e commerciale, la competizione e alta. Chi non ha un sito competitivo perde terreno.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
    ],
  },
  {
    slug: 'zola-predosa',
    cityName: 'Zola Predosa',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.4889,
      lng: 11.2189,
    },
    population: 19441,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Zola Predosa e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Zola Predosa | Manuel De Ceglie',
      description:
        'Siti web professionali a Zola Predosa: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio bolognese.',
      canonical: 'https://manueldeceglie.it/siti-web/zola-predosa',
      keywords: [
        'siti web zola predosa',
        'web designer zola predosa',
        'realizzazione siti web zola predosa',
        'sviluppatore web zola predosa',
        'siti web provincia di bologna',
        'agenzia web zola predosa',
      ],
      h1: 'Siti Web a Zola Predosa per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Zola Predosa il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Zona in crescita tra Bologna e il territorio. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita della zona',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Zola Predosa"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Zola Predosa',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un servizio serve un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'formigine',
    cityName: 'Formigine',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5523,
      lng: 10.8462,
    },
    population: 34591,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Formigine e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Formigine | Manuel De Ceglie',
      description:
        'Siti web professionali a Formigine: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio modenese.',
      canonical: 'https://manueldeceglie.it/siti-web/formigine',
      keywords: [
        'siti web formigine',
        'web designer formigine',
        'realizzazione siti web formigine',
        'sviluppatore web formigine',
        'siti web provincia di modena',
        'agenzia web formigine',
        'siti web distretto ceramico formigine',
      ],
      h1: 'Siti Web a Formigine per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Formigine la tua attivita merita un sito che funziona',
      sub: 'Zona del distretto ceramico e del territorio modenese. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo vincere o perdere clienti?',
      problems: [
        'Non compari su Google per ricerche legate ai tuoi servizi a Formigine',
        'Il sito e lento e i visitatori abbandonano',
        'Da telefono e difficile da navigare o i contatti sono nascosti',
        'Hai un sito datato che non riflette la qualita attuale',
        'Non sai quante richieste arrivano dal sito',
        'La concorrenza ha siti piu moderni e convincenti',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Formigine',
        'Sito super veloce e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette affidabilita',
        'Analytics integrato per misurare risultati concreti',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Formigine serve davvero un sito?',
        a: 'Si. La zona e importante per il distretto ceramico e i servizi. Chi non ha un sito competitivo perde terreno.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
    ],
  },
  {
    slug: 'maranello',
    cityName: 'Maranello',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5253,
      lng: 10.8659,
    },
    population: 17342,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Maranello e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Maranello | Manuel De Ceglie',
      description:
        'Siti web professionali a Maranello: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio del motorsport.',
      canonical: 'https://manueldeceglie.it/siti-web/maranello',
      keywords: [
        'siti web maranello',
        'web designer maranello',
        'realizzazione siti web maranello',
        'sviluppatore web maranello',
        'siti web ferrari maranello',
        'agenzia web maranello',
      ],
      h1: 'Siti Web a Maranello per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Maranello la tua attivita merita un sito che funziona',
      sub: 'Terra del motorsport e dellindustria. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Maranello"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Maranello',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Maranello serve davvero un sito?',
        a: 'Si. La zona e legata al motorsport e allindustria. Chi non ha un sito competitivo perde terreno.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
    ],
  },
  {
    slug: 'savignano-sul-panaro',
    cityName: 'Savignano sul Panaro',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.4892,
      lng: 10.9883,
    },
    population: 11970,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Savignano sul Panaro e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Savignano sul Panaro | Manuel De Ceglie',
      description:
        'Siti web professionali a Savignano sul Panaro: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio delle Terre di Castelli.',
      canonical: 'https://manueldeceglie.it/siti-web/savignano-sul-panaro',
      keywords: [
        'siti web savignano sul panaro',
        'web designer savignano',
        'realizzazione siti web savignano',
        'sviluppatore web savignano',
        'siti web terra dei castelli',
        'agenzia web savignano',
      ],
      h1: 'Siti Web a Savignano sul Panaro per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Savignano sul Panaro il tuo sito deve farti trovare dai clienti',
      sub: 'Zona delle Terre di Castelli, ricca di tradizione e qualita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita della zona',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Savignano sul Panaro"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Savignano',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un produttore serve un sito?',
        a: 'Si. Chi cerca servizi o prodotti in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'marano-sul-panaro',
    cityName: 'Marano sul Panaro',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.4752,
      lng: 10.9754,
    },
    population: 11228,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Marano sul Panaro e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Marano sul Panaro | Manuel De Ceglie',
      description:
        'Siti web professionali a Marano sul Panaro: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio delle Terre di Castelli.',
      canonical: 'https://manueldeceglie.it/siti-web/marano-sul-panaro',
      keywords: [
        'siti web marano sul panaro',
        'web designer marano sul panaro',
        'realizzazione siti web marano',
        'sviluppatore web marano',
        'siti web terra dei castelli',
        'agenzia web marano',
      ],
      h1: 'Siti Web a Marano sul Panaro per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Marano sul Panaro il tuo sito deve farti trovare dai clienti',
      sub: 'Territorio delle Terre di Castelli, ricco di tradizione. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita della zona',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Marano sul Panaro"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Marano',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un produttore serve un sito?',
        a: 'Si. Chi cerca servizi o prodotti in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'san-cesario-sul-panaro',
    cityName: 'San Cesario sul Panaro',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5608,
      lng: 10.9402,
    },
    population: 8624,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per San Cesario sul Panaro e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a San Cesario sul Panaro | Manuel De Ceglie',
      description:
        'Siti web professionali a San Cesario sul Panaro: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio modenese.',
      canonical: 'https://manueldeceglie.it/siti-web/san-cesario-sul-panaro',
      keywords: [
        'siti web san cesario sul panaro',
        'web designer san cesario',
        'realizzazione siti web san cesario',
        'sviluppatore web san cesario',
        'siti web provincia di modena',
        'agenzia web san cesario',
      ],
      h1: 'Siti Web a San Cesario sul Panaro per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A San Cesario sul Panaro il tuo sito deve farti trovare dai clienti',
      sub: 'Zona tra Modena e il territorio. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) San Cesario sul Panaro"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a San Cesario',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno verificabile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un servizio serve un sito?',
        a: 'Si. Chi cerca servizi in zona inizia da Google. Un sito ti fa trovare e ti da credibilita.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'reggio-emilia',
    cityName: 'Reggio Emilia',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6982,
      lng: 10.6312,
    },
    population: 171337,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Reggio Emilia.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Reggio Emilia e provincia',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Reggio Emilia | Manuel De Ceglie',
      description:
        'Siti web professionali a Reggio Emilia: veloci, ottimizzati per Google e costruiti per portarti clienti. Esperienza nel mercato locale reggiano.',
      canonical: 'https://manueldeceglie.it/siti-web/reggio-emilia',
      keywords: [
        'siti web reggio emilia',
        'web designer reggio emilia',
        'realizzazione siti web reggio emilia',
        'sviluppatore web reggio emilia',
        'agenzia web reggio emilia',
        'creazione siti internet reggio emilia',
        'web agency reggio emilia',
        'sito web professionale reggio emilia',
      ],
      h1: 'Siti Web a Reggio Emilia per professionisti e attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Reggio Emilia la tua attivita merita un sito che porti risultati',
      sub: 'Citta del Tricolore e cuore economico, Reggio offre grandi opportunita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti e distinguerti dalla concorrenza.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita reggiane',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo vincere o perdere clienti?',
      problems: [
        'Non compari su Google per ricerche legate ai tuoi servizi a Reggio Emilia',
        'Il sito e lento e i visitatori abbandonano',
        'Da telefono e difficile da navigare o i contatti sono nascosti',
        'Hai un sito datato che non riflette la qualita attuale',
        'Non sai quante richieste arrivano dal sito',
        'La concorrenza ha siti piu moderni e convincenti',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Reggio Emilia',
        'Sito super veloce e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette affidabilita',
        'Analytics integrato per misurare risultati concreti',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto: piu visibilita, piu fiducia, piu richieste.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Reggio Emilia serve davvero un sito?',
        a: 'Si. La competizione in citta e alta. Professionisti e artigiani hanno bisogno di una presenza online che li faccia trovare e dia fiducia a chi non li conosce.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'carpi',
    cityName: 'Carpi',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.7833,
      lng: 10.8833,
    },
    population: 71131,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Carpi.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Carpi e provincia di Modena',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Carpi | Manuel De Ceglie',
      description:
        'Siti web professionali a Carpi: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio e il tessuto economico locale.',
      canonical: 'https://manueldeceglie.it/siti-web/carpi',
      keywords: [
        'siti web carpi',
        'web designer carpi',
        'realizzazione siti web carpi',
        'sviluppatore web carpi',
        'agenzia web carpi',
        'creazione siti internet carpi',
        'web agency carpi',
        'sito web professionale carpi',
      ],
      h1: 'Siti Web a Carpi per attivita che vogliono farsi trovare online',
    },
    hero: {
      h1: 'A Carpi il tuo sito deve portarti clienti, non solo visitatori',
      sub: 'Centro nevralgico del distretto tessile e commerciale, Carpi offre grandi opportunita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito attuale ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Carpi"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Carpi',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Il mio approccio e costruire siti che generano valore concreto. Non paghi per un format, ma per uno strumento che porta risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Carpi serve davvero un sito?',
        a: 'Si. La citta e un polo importante per servizi e commercio. Chi non ha un sito competitivo perde terreno rispetto ai competitor locali.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'imola',
    cityName: 'Imola',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.35,
      lng: 11.7167,
    },
    population: 69936,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Imola.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Imola e provincia di Bologna',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Imola | Manuel De Ceglie',
      description:
        'Siti web professionali a Imola: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio imolese.',
      canonical: 'https://manueldeceglie.it/siti-web/imola',
      keywords: [
        'siti web imola',
        'web designer imola',
        'realizzazione siti web imola',
        'sviluppatore web imola',
        'agenzia web imola',
        'creazione siti internet imola',
        'web agency imola',
        'sito web professionale imola',
      ],
      h1: 'Siti Web a Imola per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Imola la tua attivita merita un sito che corre veloce',
      sub: 'Citta dellautodromo e dellindustria, Imola e dinamica e competitiva. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti e farti scegliere.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio imolese',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Imola"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Imola',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Imola serve davvero un sito?',
        a: 'Si. La zona e competitiva e i clienti cercano online prima di decidere. Un sito professionale ti da autorevolezza e ti fa trovare da chi non ti conosce ancora.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'correggio',
    cityName: 'Correggio',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.7712,
      lng: 10.7812,
    },
    population: 25273,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Correggio.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Correggio e provincia',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Correggio | Manuel De Ceglie',
      description:
        'Siti web professionali a Correggio: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio reggiano.',
      canonical: 'https://manueldeceglie.it/siti-web/correggio',
      keywords: [
        'siti web correggio',
        'web designer correggio',
        'realizzazione siti web correggio',
        'sviluppatore web correggio',
        'agenzia web correggio',
        'creazione siti internet correggio',
        'web agency correggio',
      ],
      h1: 'Siti Web a Correggio per attivita che vogliono farsi trovare online',
    },
    hero: {
      h1: 'A Correggio il tuo sito deve farti trovare dai clienti giusti',
      sub: 'Citta darte e industria, Correggio ha un tessuto economico vivace. Io ti creo un sito veloce, chiaro e ottimizzato per portarti richieste reali.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Esperienza con le attivita del territorio reggiano',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta aiutando… o sta facendo perdere occasioni?',
      problems: [
        'Non compari nelle ricerche locali per servizi a Correggio',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito vecchio che non riflette la qualita attuale',
        'Non sai quante persone visitano il sito',
        'I clienti preferiscono competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Correggio',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design moderno che trasmette professionalita',
        'Analytics integrato per misurare risultati',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati',
      subtitle:
        'Un sito fatto bene non serve solo ad "esserci". Serve a generare fiducia, intercettare chi ti cerca e portarti richieste.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita del tuo lavoro.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento sicuro che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Un venditore h24',
          description:
            'Risponde alle domande e porta contatti.',
          description2:
            'Tu lavori, il sito porta i clienti.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'Per un artigiano o un negozio a Correggio serve un sito?',
        a: 'Assolutamente si. I clienti cercano online prima di decidere. Se non ti trovano, vanno dai competitor a Reggio o Carpi. Un sito ti fa trovare e ti da credibilita locale.',
      },
      {
        q: 'Non ho tempo di gestire un sito.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale, io preparo tutto. Per le modifiche successive, mi scrivi un messaggio e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e darti uno strumento utile senza aggiungerti pensieri.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integro Analytics e Search Console. Cosi puoi vedere quante persone visitano il sito e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'guastalla',
    cityName: 'Guastalla',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.9222,
      lng: 10.6542,
    },
    population: 14689,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Guastalla.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Guastalla e zona Bassa Reggiana',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Guastalla | Manuel De Ceglie',
      description:
        'Siti web professionali a Guastalla: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio della Bassa Reggiana.',
      canonical: 'https://manueldeceglie.it/siti-web/guastalla',
      keywords: [
        'siti web guastalla',
        'web designer guastalla',
        'realizzazione siti web guastalla',
        'sviluppatore web guastalla',
        'agenzia web guastalla',
        'siti web bassa reggiana',
        'web agency guastalla',
      ],
      h1: 'Siti Web a Guastalla per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Guastalla il tuo sito deve raccontare la qualita del tuo lavoro',
      sub: 'Centro storico e commerciale della Bassa, Guastalla ha una forte identita. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti locali.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita della Bassa Reggiana',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Guastalla"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Guastalla',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Guastalla serve davvero un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita rispetto a chi non ce lha.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'sant-ilario-d-enza',
    cityName: 'Sant\'Ilario d\'Enza',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.7592,
      lng: 10.4512,
    },
    population: 11211,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Sant\'Ilario d\'Enza.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Sant\'Ilario e provincia',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Sant\'Ilario d\'Enza | Manuel De Ceglie',
      description:
        'Siti web professionali a Sant\'Ilario d\'Enza: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio tra Reggio e Parma.',
      canonical: 'https://manueldeceglie.it/siti-web/sant-ilario-d-enza',
      keywords: [
        'siti web sant\'ilario d\'enza',
        'web designer sant\'ilario d\'enza',
        'realizzazione siti web sant\'ilario',
        'sviluppatore web sant\'ilario',
        'agenzia web sant\'ilario',
        'siti web provincia di reggio emilia',
      ],
      h1: 'Siti Web a Sant\'Ilario d\'Enza per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Sant\'Ilario d\'Enza la tua attivita merita un sito che funziona',
      sub: 'Zona strategica tra Reggio Emilia e Parma, con un forte tessuto commerciale. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Sant\'Ilario d\'Enza"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Sant\'Ilario',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Sant\'Ilario serve davvero un sito?',
        a: 'Si. La zona e di passaggio e molto commerciale. Chi non ha un sito competitivo perde terreno rispetto ai competitor di zona.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'montecchio-emilia',
    cityName: 'Montecchio Emilia',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.7012,
      lng: 10.4512,
    },
    population: 10542,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Montecchio Emilia.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Montecchio e provincia',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Montecchio Emilia | Manuel De Ceglie',
      description:
        'Siti web professionali a Montecchio Emilia: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio della Val d\'Enza.',
      canonical: 'https://manueldeceglie.it/siti-web/montecchio-emilia',
      keywords: [
        'siti web montecchio emilia',
        'web designer montecchio emilia',
        'realizzazione siti web montecchio',
        'sviluppatore web montecchio',
        'agenzia web montecchio',
        'siti web val d\'enza',
      ],
      h1: 'Siti Web a Montecchio Emilia per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Montecchio Emilia la tua attivita merita un sito che funziona',
      sub: 'Centro importante della Val d\'Enza, Montecchio ha un forte spirito imprenditoriale. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Montecchio Emilia"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Montecchio',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Montecchio serve davvero un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita rispetto a chi non ce lha.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'nonantola',
    cityName: 'Nonantola',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6752,
      lng: 11.0432,
    },
    population: 16237,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Nonantola.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Nonantola e provincia',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Nonantola | Manuel De Ceglie',
      description:
        'Siti web professionali a Nonantola: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio modenese.',
      canonical: 'https://manueldeceglie.it/siti-web/nonantola',
      keywords: [
        'siti web nonantola',
        'web designer nonantola',
        'realizzazione siti web nonantola',
        'sviluppatore web nonantola',
        'agenzia web nonantola',
        'siti web provincia di modena',
      ],
      h1: 'Siti Web a Nonantola per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Nonantola la tua attivita merita un sito che funziona',
      sub: 'Citta storica e vivace, Nonantola ha un forte spirito commerciale. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cerc "(servizio) Nonantola"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Nonantola',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Nonantola serve davvero un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita rispetto a chi non ce lha.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'soliera',
    cityName: 'Soliera',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.7352,
      lng: 10.9232,
    },
    population: 15453,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Soliera.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Soliera e provincia',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Soliera | Manuel De Ceglie',
      description:
        'Siti web professionali a Soliera: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio modenese.',
      canonical: 'https://manueldeceglie.it/siti-web/soliera',
      keywords: [
        'siti web soliera',
        'web designer soliera',
        'realizzazione siti web soliera',
        'sviluppatore web soliera',
        'agenzia web soliera',
        'siti web provincia di modena',
      ],
      h1: 'Siti Web a Soliera per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Soliera la tua attivita merita un sito che funziona',
      sub: 'Zona strategica del modenese. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Soliera"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Soliera',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Soliera serve davvero un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita rispetto a chi non ce lha.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'mirandola',
    cityName: 'Mirandola',
    province: 'Modena',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.8852,
      lng: 11.0632,
    },
    population: 24345,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Mirandola.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Mirandola e zona biomedicale',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Mirandola | Manuel De Ceglie',
      description:
        'Siti web professionali a Mirandola: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio e il distretto biomedicale.',
      canonical: 'https://manueldeceglie.it/siti-web/mirandola',
      keywords: [
        'siti web mirandola',
        'web designer mirandola',
        'realizzazione siti web mirandola',
        'sviluppatore web mirandola',
        'agenzia web mirandola',
        'siti web biomedicale mirandola',
      ],
      h1: 'Siti Web a Mirandola per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Mirandola la tua attivita merita un sito allaltezza del tuo lavoro',
      sub: 'Centro del distretto biomedicale e citta di tradizioni, Mirandola e un polo economico unico. Io ti creo un sito veloce, professionale e ottimizzato per farti trovare.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle aziende del distretto',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Mirandola"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Mirandola',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Mirandola serve davvero un sito?',
        a: 'Si. Il distretto e molto competitivo e avere una presenza online professionale e fondamentale per farsi scegliere da partner e clienti locali.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'castel-maggiore',
    cityName: 'Castel Maggiore',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5752,
      lng: 11.3632,
    },
    population: 18581,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Castel Maggiore.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Castel Maggiore e hinterland bolognese',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Castel Maggiore | Manuel De Ceglie',
      description:
        'Siti web professionali a Castel Maggiore: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio bolognese.',
      canonical: 'https://manueldeceglie.it/siti-web/castel-maggiore',
      keywords: [
        'siti web castel maggiore',
        'web designer castel maggiore',
        'realizzazione siti web castel maggiore',
        'sviluppatore web castel maggiore',
        'agenzia web castel maggiore',
        'siti web provincia di bologna',
      ],
      h1: 'Siti Web a Castel Maggiore per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Castel Maggiore la tua attivita merita un sito che funziona',
      sub: 'Hinterland bolognese dinamico e commerciale. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita dellarea bolognese',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Castel Maggiore"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Castel Maggiore',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Castel Maggiore serve davvero un sito?',
        a: 'Si. La zona e molto competitiva per la vicinanza a Bologna. Chi non ha un sito professionale perde terreno rispetto ai competitor.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'castenaso',
    cityName: 'Castenaso',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5152,
      lng: 11.4632,
    },
    population: 16378,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Castenaso.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Castenaso e hinterland bolognese',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Castenaso | Manuel De Ceglie',
      description:
        'Siti web professionali a Castenaso: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio bolognese.',
      canonical: 'https://manueldeceglie.it/siti-web/castenaso',
      keywords: [
        'siti web castenaso',
        'web designer castenaso',
        'realizzazione siti web castenaso',
        'sviluppatore web castenaso',
        'agenzia web castenaso',
        'siti web provincia di bologna',
      ],
      h1: 'Siti Web a Castenaso per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Castenaso la tua attivita merita un sito che funziona',
      sub: 'Hinterland bolognese dinamico. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita dellarea bolognese',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Castenaso"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Castenaso',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Castenaso serve davvero un sito?',
        a: 'Si. La zona e competitiva. Chi non ha un sito professionale perde terreno rispetto ai competitor.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'budrio',
    cityName: 'Budrio',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.5352,
      lng: 11.5332,
    },
    population: 18436,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Budrio.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Budrio e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Budrio | Manuel De Ceglie',
      description:
        'Siti web professionali a Budrio: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio bolognese.',
      canonical: 'https://manueldeceglie.it/siti-web/budrio',
      keywords: [
        'siti web budrio',
        'web designer budrio',
        'realizzazione siti web budrio',
        'sviluppatore web budrio',
        'agenzia web budrio',
        'siti web provincia di bologna',
      ],
      h1: 'Siti Web a Budrio per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Budrio la tua attivita merita un sito che funziona',
      sub: 'Citta storica e vivace del bolognese. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Budrio"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Budrio',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Budrio serve davvero un sito?',
        a: 'Si. Chi cerca un servizio in zona inizia da Google. Un sito ti fa trovare e ti da credibilita rispetto a chi non ce lha.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'san-giovanni-in-persiceto',
    cityName: 'San Giovanni in Persiceto',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.6402,
      lng: 11.1832,
    },
    population: 28153,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a San Giovanni in Persiceto.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per San Giovanni e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a San Giovanni in Persiceto | Manuel De Ceglie',
      description:
        'Siti web professionali a San Giovanni in Persiceto: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio bolognese.',
      canonical: 'https://manueldeceglie.it/siti-web/san-giovanni-in-persiceto',
      keywords: [
        'siti web san giovanni in persiceto',
        'web designer san giovanni in persiceto',
        'realizzazione siti web san giovanni',
        'sviluppatore web san giovanni',
        'agenzia web san giovanni',
        'siti web provincia di bologna',
      ],
      h1: 'Siti Web a San Giovanni in Persiceto per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A San Giovanni in Persiceto la tua attivita merita un sito che funziona',
      sub: 'Centro importante tra Bologna e Modena. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) San Giovanni in Persiceto"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a San Giovanni',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A San Giovanni serve davvero un sito?',
        a: 'Si. La zona e importante e commerciale. Chi non ha un sito professionale perde terreno rispetto ai competitor di zona.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e toglierti pensieri, non aggiungerteli.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'collecchio',
    cityName: 'Collecchio',
    province: 'Parma',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.7502,
      lng: 10.2167,
    },
    population: 14846,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete a Collecchio.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Collecchio e provincia di Parma',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Collecchio | Manuel De Ceglie',
      description:
        'Siti web professionali a Collecchio: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio parmense.',
      canonical: 'https://manueldeceglie.it/siti-web/collecchio',
      keywords: [
        'siti web collecchio',
        'web designer collecchio',
        'realizzazione siti web collecchio',
        'sviluppatore web collecchio',
        'agenzia web collecchio',
        'siti web provincia di parma',
      ],
      h1: 'Siti Web a Collecchio per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Collecchio la tua attivita merita un sito che funziona',
      sub: 'Centro importante alle porte di Parma. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti giusti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere occasioni?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Collecchio"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Collecchio',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'lavora per te',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta.',
          description2:
            'I clienti percepiscono la qualita.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati misurabili',
          description:
            'Puoi vedere quante persone ti trovano.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Collecchio serve davvero un sito?',
        a: 'Si. La zona e importante e vicina a Parma. Chi non ha un sito professionale perde terreno rispetto ai competitor di zona.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Perfetto. Mi dai le informazioni base e il materiale. Io preparo tutto. Per le modifiche, mi scrivi e aggiorno io.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro assistenza opzionale. L'obiettivo e darti uno strumento utile senza aggiungerti pensieri.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Analytics e Search Console integrati. Vedi quante persone visitano, da dove arrivano e quante richieste ricevi.',
      },
    ],
  },
  {
    slug: 'fiorenzuola-d-arda',
    cityName: 'Fiorenzuola d\'Arda',
    province: 'Piacenza',
    region: 'Emilia-Romagna',
    geo: {
      lat: 44.9333,
      lng: 9.9167,
    },
    population: 15057,
    active: true,
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [
      {
        id: 'onepage-pro',
        title: 'One Page Pro',
        description:
          'Una pagina professionale per farti conoscere e contattare subito. Chiara, veloce e ottimizzata per portarti richieste concrete.',
        price: '890',
        badge: 'Pro',
        active: true,
        type: 'landing',
        features: [
          '1 pagina completa con struttura efficace',
          'Call to Action visibili: WhatsApp, chiamata, form',
          'SEO locale per Fiorenzuola d\'Arda e zona',
          'Mappa, indicazioni, orari, link recensioni',
          'Ottimizzazione mobile e velocita',
          'Analytics e Search Console',
          'Cookie/GDPR a norma',
          '1 round di revisioni inclusi',
        ],
      },
      {
        id: ' sito-essenziale-5p',
        title: 'Sito Essenziale (fino a 5 pagine)',
        description:
          'Un sito completo per presentare la tua attivita in modo professionale. SEO ottimizzato e struttura pensata per generare richieste.',
        price: '1490',
        badge: 'Essenziale',
        active: true,
        type: 'website',
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
    ],
    seo: {
      title: 'Realizzazione Siti Web a Fiorenzuola d\'Arda | Manuel De Ceglie',
      description:
        'Siti web professionali a Fiorenzuola d\'Arda: veloci, ottimizzati per Google e costruiti per portarti clienti. Conosco il territorio piacentino.',
      canonical: 'https://manueldeceglie.it/siti-web/fiorenzuola-d-arda',
      keywords: [
        'siti web fiorenzuola d\'arda',
        'web designer fiorenzuola',
        'realizzazione siti web fiorenzuola',
        'sviluppatore web fiorenzuola',
        'siti web provincia di piacenza',
        'agenzia web fiorenzuola',
      ],
      h1: 'Siti Web a Fiorenzuola d\'Arda per attivita che vogliono crescere',
    },
    hero: {
      h1: 'A Fiorenzuola d\'Arda la tua attivita merita un sito che funziona',
      sub: 'Zona importante della provincia di Piacenza. Io ti creo un sito veloce, chiaro e ottimizzato per farti trovare dai clienti.',
      ctaText: 'Parliamo del tuo sito',
      ctaHref: '#contatti',
      trustSignal: 'Conosco le esigenze delle attivita del territorio',
    },
    diagnostica: {
      badge: 'Diagnostica Attuale',
      title: 'Il tuo sito ti sta facendo perdere clienti?',
      problems: [
        'Non compari su Google quando cercano "(servizio) Fiorenzuola d\'Arda"',
        'Il sito e lento o non funziona bene da telefono',
        'Le informazioni principali sono difficili da trovare',
        'Hai un sito che non riflette la qualita del tuo lavoro',
        'Non sai quante persone ti trovano online',
        'I clienti vanno da competitor con una presenza online migliore',
      ],
      solutions: [
        'Ottimizzazione SEO locale per farti trovare a Fiorenzuola',
        'Sito rapido e perfetto su smartphone',
        'Contatti sempre visibili: WhatsApp, chiamata, form',
        'Design professionale che trasmette fiducia',
        'Analytics per misurare visite e richieste',
        'Struttura pensata per convertire visitatori in clienti',
      ],
    },
    goodInvestment: {
      title: 'Un sito che',
      titleHighlight: 'porta risultati misurabili',
      subtitle:
        'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua attivita.',
      cards: [
        {
          icon: 'star',
          title: 'Credibilita immediata',
          description:
            'Un sito curato trasmette serieta e qualita.',
          description2:
            'I clienti ti percepiscono come professionista.',
          footerType: 'premium',
        },
        {
          icon: 'shield',
          title: 'Un asset di proprieta',
          description:
            'Il sito e tuo e non dipende da algoritmi.',
          description2:
            'Un investimento che dura nel tempo.',
          footerType: 'ownership',
        },
        {
          icon: 'zap',
          title: 'Risultati verificabili',
          description:
            'Puoi misurare visite, richieste e conversioni.',
          description2:
            'Investimento con ritorno tangibile.',
          footerType: 'roi',
        },
      ],
    },
    faq: [
      {
        q: 'A Fiorenzuola serve davvero un sito?',
        a: 'Si. E un centro importante della provincia. Chi non ha un sito competitivo perde terreno.',
      },
      {
        q: 'Non ho tempo di gestire contenuti.',
        a: 'Non serve. Mi dai le informazioni base e il materiale. Io mi occupo di tutto: struttura, testi, ottimizzazione e pubblicazione.',
      },
      {
        q: 'Ci sono canoni annuali?',
        a: "Oltre a dominio e hosting, offro un pacchetto di assistenza opzionale per aggiornamenti. L'obiettivo e un sito che funziona senza aggiungerti lavoro.",
      },
      {
        q: 'Come faccio a sapere se il sito funziona?',
        a: 'Integrato Analytics e Search Console. Vedi quante persone ti trovano, cosa cercano e quante richieste ricevi. Numeri concreti.',
      },
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
