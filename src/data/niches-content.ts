export interface PainPoint {
  icon: string;
  title: string;
  description: string;
  keyword: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  benefit: string;
}

export interface Stat {
  value: string;
  label: string;
  source: string;
}

export interface TestimonialSchema {
  quote: string;
  author: string;
  business: string;
  location: string;
  rating?: number;
}

export interface IntroSection {
  title: string;
  content: string;
}

export interface NicheContent {
  description: string;
  targetAudience: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  introSection: IntroSection;
  painPoints: PainPoint[];
  features: Feature[];
  stats: Stat[];
  testimonials: TestimonialSchema[];
}

export const nichesContent: Record<string, NicheContent> = {
  ristoranti: {
    description: 'Siti web professionali per ristoranti, pizzerie, trattorie e locali gastronomici con menu digitali, prenotazioni online e integrazione con le piattaforme di delivery.',
    targetAudience: 'Proprietari di ristoranti, pizzaioli, chef, gestori di locali che vogliono aumentare le prenotazioni dirette e ridurre le commissioni dei portali.',
    hero: {
      title: 'Trasforma il Tuo Ristorante in una Macchina da Prenotazioni',
      subtitle: 'Sito web professionale con menu digitale, prenotazioni online e gestione recensioni. Aumenta le prenotazioni dirette e riduci le commissioni dei portali.',
      cta: 'Richiedi Consulenza Gratuita'
    },
    introSection: {
      title: 'Perché il Tuo Ristorante Ha Bisogno di un Sito Web Professionale',
      content: 'Nel 2024, il primo contatto con un potenziale cliente avviene online. Se il tuo ristorante non ha una presenza web professionale, stai cedendo clienti alla concorrenza. Un sito web non è un costo, è un investimento che genera prenotazioni.'
    },
    painPoints: [
      {
        icon: 'percent',
        title: 'Commissioni Esorbitanti sui Portali',
        description: 'TheFork, Just Eat e TripAdvisor trattengono dal 15% al 25% su ogni prenotazione e ordine. Per un ristorante che fattura 500€ a sera, solo in commissioni perdi 75-125€.',
        keyword: 'commissioni ristoranti portali'
      },
      {
        icon: 'smartphone',
        title: 'Menu PDF Illegibile su Mobile',
        description: 'Il 73% dei clienti cerca il menu sullo smartphone. Se il tuo PDF si vede male, i clienti abbandonano prima di ordinare. Il menu deve essere veloce, responsive e facile da navigare.',
        keyword: 'menu mobile friendly'
      },
      {
        icon: 'star',
        title: 'Recensioni Negative Senza Risposta',
        description: 'Il 94% dei consumatori legge le recensioni prima di scegliere un ristorante. Le recensioni negative senza risposta danneggiano la reputazione e scoraggiano nuovi clienti.',
        keyword: 'gestione recensioni ristorante'
      },
      {
        icon: 'clock',
        title: 'Chiamate Infinite per Prenotazioni',
        description: 'Il personale distratto dalle telefonate di prenotazione commette errori, perde ordini e fornisce un servizio peggiore ai clienti fisici.',
        keyword: 'sistema prenotazioni automatico'
      },
      {
        icon: 'image',
        title: 'Foto Food Scadenti',
        description: 'Le foto del cibo su Google Maps sono spesso fatte dai clienti con il cellulare. Un sito con foto professionali del menu aumenta l\'attrattiva del 40%.',
        keyword: 'fotografo food professionale'
      },
      {
        icon: 'map',
        title: 'Non Visibile su Google Maps',
        description: 'Se il profilo Google Business non è ottimizzato, perdi clienti che cercano "ristorante vicino a me" sul cellulare. Il 68% delle ricerche locali termina con una visita.',
        keyword: 'google business ristorante'
      }
    ],
    features: [
      {
        icon: 'qr-code',
        title: 'Menu Digitale Interattivo QR',
        description: 'Menu navigabile via QR code con ricerca per categoria, filtri per diete, visualizzazione foto e prezzi. Si aggiorna in tempo reale senza stampare.',
        benefit: 'Aumenta le ordinazioni del 30% e riduce il lavoro del personale'
      },
      {
        icon: 'calendar',
        title: 'Sistema Prenotazioni Integrato',
        description: 'Prenotazioni online 24/7 con gestione tavoli, conferma automatica via SMS/WhatsApp e sincronizzazione con il gestionale del locale.',
        benefit: 'Elimina le telefonate e riduce i no-show del 50%'
      },
      {
        icon: 'review',
        title: 'Gestione Recensioni Automatizzata',
        description: 'Richiesta automatica di recensioni post-pasto, risposta template personalizzabili e monitoraggio della reputazione online.',
        benefit: 'Migliora il rating Google di 0.5-1 stella in 6 mesi'
      },
      {
        icon: 'camera',
        title: 'Gallery Fotografica Professionale',
        description: 'Servizio fotografico food incluso con foto ad alta risoluzione per menu, interno del locale e piatti signature.',
        benefit: 'Aumenta la conversione visitatori-clienti del 40%'
      },
      {
        icon: 'shopping-cart',
        title: 'Ordini Online e Delivery Proprio',
        description: 'Sistema di ordini diretto con consegna a domicilio, ritiro in loco e pagamento online. Commissioni decise da te, non dai portali.',
        benefit: 'Risparmia 15-25% su ogni ordine rispetto ai portali'
      },
      {
        icon: 'calendar-event',
        title: 'Eventi e Serate Speciali',
        description: 'Sezione eventi con calendario, prenotazione obbligatoria per cene speciali, menù degustazione e promozioni stagionali.',
        benefit: 'Aumenta il fatturato delle serate eventi del 50%'
      },
      {
        icon: 'chat',
        title: 'Chat e Assistenza Clienti',
        description: 'Chatbot per rispondere alle domande frequenti su orari, menu e disponibilità. Assistenza clienti immediata senza personale dedicato.',
        benefit: 'Aumenta le richieste del 25% con risposta immediata'
      },
      {
        icon: 'chart',
        title: 'Analytics e Insight',
        description: 'Dashboard con piatti più visualizzati, orari di picco, preferenze dei clienti e dati per ottimizzare il menu e il servizio.',
        benefit: 'Decisioni basate sui dati, non sulle sensazioni'
      }
    ],
    stats: [
      { value: '73%', label: 'clienti cerca il menu sullo smartphone', source: 'Think with Google' },
      { value: '94%', label: 'legge le recensioni prima di scegliere', source: 'BrightLocal' },
      { value: '15-25%', label: 'commissioni medie sui portali', source: 'Elaborazione interna' },
      { value: '68%', label: 'ricerche locali terminano con visita', source: 'HubSpot' }
    ],
    testimonials: [
      {
        quote: 'Dopo il nuovo sito, le prenotazioni dirette sono aumentate del 60%. Non dipendiamo più solo da TheFork.',
        author: 'Marco',
        business: 'Trattoria da Marco',
        location: 'Modena',
        rating: 5
      },
      {
        quote: 'Il menu QR code ha rivoluzionato il servizio. I clienti ordinano direttamente e il personale si concentra sui tavoli.',
        author: 'Giulia',
        business: 'Pizzeria Luna Nova',
        location: 'Bologna',
        rating: 5
      }
    ]
  },

  fotografi: {
    description: 'Siti web per fotografi, videomaker e creativi di contenuti con portfolio immersive e sistema di prenotazione shooting.',
    targetAudience: 'Fotografi professionisti, videomaker, agenzie di produzione contenuti e creativi che vogliono mostrare il loro lavoro e acquisire clienti.',
    hero: {
      title: 'Il Tuo Portfolio Deve Essere un\'Opera d\'Arte',
      subtitle: 'Sito web per fotografi con portfolio immersivo, video showreel e sistema di booking. Fatti trovare, fatti ammirare.',
      cta: 'Vedi il Portfolio Demo'
    },
    introSection: {
      title: 'Portfolio che Emoziona',
      content: 'Le tue foto devono parlare. Un sito che le valorizza è l\'investimento più importante per il tuo business.'
    },
    painPoints: [
      {
        icon: 'image',
        title: 'Portfolio Frammentato',
        description: 'Le foto sono su Instagram, Flickr, Google Photos, hard disk. Nessun luogo centrale per mostrare il lavoro.',
        keyword: 'portfolio fotografo online'
      },
      {
        icon: 'search',
        title: 'Non Vieni Trovato Localmente',
        description: '"Fotografo [città]" è cercato da clienti che vogliono servizi locali. Senza SEO, non ti trovano.',
        keyword: 'seo fotografo google'
      },
      {
        icon: 'dollar',
        title: 'Prezzi Poco Chiari',
        description: 'I clienti non sanno cosa aspettarsi come prezzo. Richieste info, preventivi, trattative infinite.',
        keyword: 'listino fotografico trasparente'
      },
      {
        icon: 'calendar',
        title: 'Gestione Date Complessa',
        description: 'Email, WhatsApp, telefono per ogni richiesta. Sovrapposizioni, errori, clienti persi.',
        keyword: 'booking fotografo online'
      },
      {
        icon: 'users',
        title: 'Nessuna Prova Sociale',
        description: 'Testimonianze sparse, recensioni non raccolte. I nuovi clienti non vedono cosa dicono gli altri.',
        keyword: 'testimonianze fotografo'
      },
      {
        icon: 'smartphone',
        title: 'Sito Non Mobile-Friendly',
        description: 'Il 60% dei visitatori è da mobile. Gallerie che non caricano, immagini pesanti, esperienza frustrante.',
        keyword: 'mobile portfolio photographer'
      }
    ],
    features: [
      {
        icon: 'grid',
        title: 'Portfolio Immersivo',
        description: 'Gallerie organizzate per tipologia (matrimonio, corporate, ritratto). Lightbox, slideshow, filtering.',
        benefit: 'Il lavoro si presenta da solo'
      },
      {
        icon: 'play-circle',
        title: 'Video Showreel',
        description: 'Video portfolio con le migliori clip. Vimeo/YouTube integrato con design custom.',
        benefit: 'Differenziazione dai fotografi statici'
      },
      {
        icon: 'calendar',
        title: 'Booking Online',
        description: 'Calendario disponibilità con tipologia servizio. Richiesta data, location provvisoria.',
        benefit: 'Gestione richieste automatizzata'
      },
      {
        icon: 'list',
        title: 'Listino Servizi',
        description: 'Pacchetti chiari: cosa include, durata, foto consegnate, tempi di consegna.',
        benefit: 'Meno email, più preventivi'
      },
      {
        icon: 'image',
        title: 'Before/After Editing',
        description: 'Sezione che mostra il processo di editing. I clienti capiscono il valore del post-produzione.',
        benefit: 'Giustifica i prezzi'
      },
      {
        icon: 'map-pin',
        title: 'Servizio Zone',
        description: 'Mappa interattiva con zone coperte. Distanze, costi trasferta, disponibilità.',
        benefit: 'Chiarisce la copertura'
      },
      {
        icon: 'users',
        title: 'Sezione Clienti',
        description: 'Logo e nomi dei clienti serviti. Corporate, eventi, pubblicità.',
        benefit: 'Social proof B2B'
      },
      {
        icon: 'download',
        title: 'Galleria Privata Clienti',
        description: 'Link privato per i clienti per scaricare le foto. Protezione e facilità.',
        benefit: 'Experience post-shooting'
      }
    ],
    stats: [
      { value: '93%', label: 'fotografi considerano il portfolio essenziale', source: 'ASMP' },
      { value: '63%', label: 'dei clienti cerca su Google', source: 'Google Data' },
      { value: '4s', label: 'tempo medio di attesa accettabile', source: 'Google PageSpeed' },
      { value: '72%', label: 'di clienti B2B legge le recensioni', source: 'BrightLocal' }
    ],
    testimonials: [
      {
        quote: 'Il nuovo portfolio ha aumentato le richieste del 50%. Ora i clienti vengono già convinti.',
        author: 'FotoStudio Milano',
        business: 'FSM',
        location: 'Milano',
        rating: 5
      },
      {
        quote: 'Il booking online mi fa risparmiare 5 ore a settimana. Gestisco tutto dal calendario.',
        author: 'Marco Lens',
        business: 'Marco Lens Photography',
        location: 'Roma',
        rating: 5
      }
    ]
  },

  'saloni-bellezza': {
    description: 'Siti web per parrucchieri, centri estetici e saloni di bellezza con booking online, listino chiaro e portfolio lavori.',
    targetAudience: 'Parrucchieri, estetiste, barbieri e saloni che vogliono prenotazioni dirette e clienti fidelizzati.',
    hero: {
      title: 'Un Salone che Prenota da Solo, Anche di Notte',
      subtitle: 'Booking online 24/7, listino chiaro, portfolio lavori e promemoria automatici. Meno telefonate, più appuntamenti puntuali.',
      cta: 'Attiva il Booking Online'
    },
    introSection: {
      title: 'Prenotazioni Senza Interrompere il Servizio',
      content: 'Le tue clienti vogliono prenotare quando hanno tempo: di sera, in pausa pranzo, la domenica. Un booking online semplice ti libera il telefono e riduce i no-show.'
    },
    painPoints: [
      {
        icon: 'calendar',
        title: 'Agenda nel Caos',
        description: 'Telefonate, WhatsApp, post-it. Gli appuntamenti si accavallano, i tempi non sono chiari e i no-show aumentano.',
        keyword: 'gestione appuntamenti salone'
      },
      {
        icon: 'clock',
        title: 'Ritardi e No-Show',
        description: 'Senza promemoria automatici, chi si dimentica o arriva tardi rompe la catena degli appuntamenti.',
        keyword: 'promemoria salone'
      },
      {
        icon: 'list',
        title: 'Listino Non Trasparente',
        description: 'Prezzi e servizi non sono chiari online: chi ti scopre su Google passa al concorrente con un listino leggibile.',
        keyword: 'listino salone online'
      },
      {
        icon: 'instagram',
        title: 'Portfolio Sparso sui Social',
        description: 'I lavori migliori sono su Instagram ma non sul tuo sito. Chi cerca "parrucchiere [città]" non li vede.',
        keyword: 'portfolio capelli sito'
      },
      {
        icon: 'users',
        title: 'Poche Recensioni',
        description: 'Senza richiesta recensioni post-servizio, i clienti soddisfatti non lasciano feedback e la reputazione cresce lentamente.',
        keyword: 'recensioni salone bellezza'
      },
      {
        icon: 'gift',
        title: 'Nessuna Fidelizzazione',
        description: 'Mancano pacchetti, carte prepagate o punti: i clienti saltano da un salone all\'altro per le promozioni.',
        keyword: 'fidelizzazione salone'
      }
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Booking Online 24/7',
        description: 'Calendario interattivo con slot, durata servizio e acconto opzionale.',
        benefit: 'Meno telefonate e agenda sempre piena'
      },
      {
        icon: 'bell',
        title: 'Promemoria Automatici',
        description: 'SMS/WhatsApp 48h e 2h prima dell\'appuntamento.',
        benefit: 'Riduci no-show e ritardi'
      },
      {
        icon: 'list',
        title: 'Listino Chiaro e Pacchetti',
        description: 'Prezzi, durata, cosa include e possibili upgrade.',
        benefit: 'Nessuna sorpresa, più conferme'
      },
      {
        icon: 'grid',
        title: 'Portfolio Lavori',
        description: 'Gallerie per colore, taglio, barba, trucco, nails con slider before/after.',
        benefit: 'Mostra il tuo stile, non solo i prezzi'
      },
      {
        icon: 'image',
        title: 'Sezione Team',
        description: 'Presenta ogni professionista con specialità e disponibilità.',
        benefit: 'Il cliente sceglie chi lo seguirà'
      },
      {
        icon: 'star',
        title: 'Raccolta Recensioni',
        description: 'Richiesta automatica dopo il servizio, pubblicazione su Google.',
        benefit: 'Reputazione che cresce ogni settimana'
      },
      {
        icon: 'gift',
        title: 'Programmi Fedeltà',
        description: 'Punti, pacchetti prepagati e gift card digitali.',
        benefit: 'Clienti che tornano e spendono di più'
      },
      {
        icon: 'shopping-bag',
        title: 'Vendita Prodotti Online',
        description: 'E-commerce light per shampoo, maschere e styling consigliati.',
        benefit: 'Fatturato aggiuntivo tra una visita e l\'altra'
      }
    ],
    stats: [
      { value: '65%', label: 'prenoterebbe online se possibile', source: 'Square' },
      { value: '70%', label: 'legge le recensioni prima di prenotare', source: 'BrightLocal' },
      { value: '47%', label: 'dei no-show dovuti a dimenticanza', source: 'Internal data' },
      { value: '40%', label: 'prenotazioni fuori orario con booking online', source: 'Salon Tech' }
    ],
    testimonials: [
      {
        quote: 'Il booking online mi ha liberato il telefono. Le clienti scelgono l\'orario e arrivano puntuali.',
        author: 'Anna',
        business: 'Anna Hair Studio',
        location: 'Modena',
        rating: 5
      },
      {
        quote: 'Con il listino chiaro e i promemoria i no-show sono quasi spariti. Finalmente giornate piene e ordinate.',
        author: 'Giulia',
        business: 'Espace Beauté',
        location: 'Reggio Emilia',
        rating: 5
      }
    ]
  },

  'aziende-agricole': {
    description: 'Siti web per aziende agricole, agriturismi, cantine e produttori locali con focus su vendita diretta, visite in azienda e storytelling del territorio.',
    targetAudience: 'Aziende agricole, agriturismi, cantine e produttori che vogliono vendere direttamente, aumentare le visite in azienda e costruire relazioni con i clienti.',
    hero: {
      title: 'Dalla Terra al Cliente, Senza Intermediari',
      subtitle: 'Racconta l\'azienda, vendi i tuoi prodotti online e porta le persone in vigna, in stalla o in agriturismo con un sito pensato per la filiera corta.',
      cta: 'Racconta la Tua Azienda'
    },
    introSection: {
      title: 'Il Valore del Territorio Va Messo Online',
      content: 'Le persone scelgono i prodotti che conoscono. Un sito che mostra processi, certificazioni e persone trasforma curiosi in clienti fedeli.'
    },
    painPoints: [
      {
        icon: 'image',
        title: 'Prodotti Invisibili Online',
        description: 'Chi cerca formaggi, vino o ortofrutta locali non trova il tuo brand: il sito è assente o datato.',
        keyword: 'vendita diretta agricola'
      },
      {
        icon: 'shopping-cart',
        title: 'Dipendenza dai Portali',
        description: 'Marketplace e GDO erodono margini. Senza e-commerce diretto, non hai controllo su prezzo e relazione col cliente.',
        keyword: 'ecommerce agricolo'
      },
      {
        icon: 'map-pin',
        title: 'Poche Visite in Azienda',
        description: 'Tour, degustazioni e agriturismo non sono raccontati bene. Chi viaggia non ti trova nelle ricerche locali.',
        keyword: 'visite in cantina sito'
      },
      {
        icon: 'shield',
        title: 'Non Comunichi Qualità e Certificazioni',
        description: 'BIO, DOC, IGP o filiera corta non vengono valorizzati: resti un produttore generico.',
        keyword: 'certificazioni prodotto agricolo'
      },
      {
        icon: 'truck',
        title: 'Logistica Non Chiara',
        description: 'Tempi di spedizione, corrieri refrigerati o ritiro in azienda non sono spiegati: i clienti esitano.',
        keyword: 'spedizioni prodotti freschi'
      },
      {
        icon: 'mail',
        title: 'Manca una Community',
        description: 'Nessuna newsletter, zero storytelling delle stagioni. I clienti comprano una volta e spariscono.',
        keyword: 'newsletter azienda agricola'
      }
    ],
    features: [
      {
        icon: 'store',
        title: 'E-commerce Diretto',
        description: 'Schede prodotto con ingredienti, origine, lotti e stock aggiornato. Pagamenti online e ritiro in azienda.',
        benefit: 'Margini sotto controllo e relazione diretta col cliente'
      },
      {
        icon: 'map',
        title: 'Visite e Degustazioni',
        description: 'Calendario per tour in cantina, raccolta in campo o weekend in agriturismo con prenotazione online.',
        benefit: 'Più persone fisicamente in azienda'
      },
      {
        icon: 'video',
        title: 'Storytelling del Territorio',
        description: 'Foto e video di campi, cantina e lavorazioni stagionali. Racconti brevi e autentici.',
        benefit: 'Fiducia e valore percepito più alto'
      },
      {
        icon: 'shield',
        title: 'Certificazioni in Evidenza',
        description: 'BIO, IGP, DOC, filiera corta e tracciabilità ben spiegate con badge e schede.',
        benefit: 'Prezzo giustificato e niente guerra al ribasso'
      },
      {
        icon: 'truck',
        title: 'Spedizioni e Ritiro',
        description: 'Opzioni chiare: refrigerato, standard, ritiro in azienda o consegna locale.',
        benefit: 'Meno domande e più carrelli completati'
      },
      {
        icon: 'mail',
        title: 'Newsletter Stagionale',
        description: 'Email automatiche su raccolti, nuovi prodotti, box degustazione e fiere.',
        benefit: 'Clienti che tornano a ogni stagione'
      },
      {
        icon: 'users',
        title: 'Sezione B2B',
        description: 'Area per ristoranti e botteghe con listino dedicato e richieste campione.',
        benefit: 'Canale business separato e più ordinato'
      },
      {
        icon: 'heart',
        title: 'Impatto e Sostenibilità',
        description: 'Dati su risparmio idrico, energia rinnovabile, benessere animale.',
        benefit: 'Valore differenziante per clienti attenti'
      }
    ],
    stats: [
      { value: '72%', label: 'dei consumatori preferisce prodotti locali quando disponibili', source: 'Nielsen' },
      { value: '58%', label: 'compra online prodotti alimentari almeno una volta al mese', source: 'Statista' },
      { value: '41%', label: 'aumenta la spesa quando conosce l\'origine', source: 'Internal data' },
      { value: '35%', label: 'prenotazioni visite generate da ricerche locali', source: 'Google Data' }
    ],
    testimonials: [
      {
        quote: 'Con l\'e-commerce diretto spediamo ogni settimana box degustazione. I margini sono finalmente sotto controllo.',
        author: 'Luca',
        business: 'Azienda Agricola Terre Alte',
        location: 'Modena',
        rating: 5
      },
      {
        quote: 'Le prenotazioni per le degustazioni sono esplose. Il calendario online ci fa organizzare i turni senza telefonate.',
        author: 'Chiara',
        business: 'Cantina Colline Reggiane',
        location: 'Reggio Emilia',
        rating: 5
      }
    ]
  },

  'studi-legali': {
    description: 'Siti web per avvocati e studi legali con focus su professionalità, aree di pratica e acquisizione clienti qualificati.',
    targetAudience: 'Avvocati, studi associati e consulenti legali che vogliono rafforzare la reputazione e trovare nuovi clienti online.',
    hero: {
      title: 'Il Tuo Studio Legale Merita una Presenza Autorevole Online',
      subtitle: 'Sito web professionale che trasmette competenza e fiducia. Presenta le aree di pratica, il team e fatti trovare da chi cerca assistenza legale.',
      cta: 'Richiedi Analisi Gratuita'
    },
    introSection: {
      title: 'Reputazione e Fiducia Online',
      content: 'Nel settore legale, la prima impressione è fondamentale. Un sito web curato è il biglietto da visita digitale che trasforma un visitatore in un cliente che si affida a te.'
    },
    painPoints: [
      {
        icon: 'search',
        title: 'Invisibili su Google',
        description: 'Chi cerca "avvocato [città]" non ti trova. Perdi clienti potenziali a favore di studi con una migliore presenza SEO.',
        keyword: 'seo avvocati'
      },
      {
        icon: 'smartphone',
        title: 'Sito Vecchio e Lento',
        description: 'Un sito non responsive o lento danneggia l\'immagine di professionalità e competenza dello studio.',
        keyword: 'restyling sito studio legale'
      },
      {
        icon: 'users',
        title: 'Pochi Contatti dal Web',
        description: 'Il sito attuale è una vetrina statica che non genera richieste di consulenza o appuntamenti.',
        keyword: 'lead generation avvocati'
      }
    ],
    features: [
      {
        icon: 'shield',
        title: 'Design Istituzionale',
        description: 'Grafica sobria, elegante e professionale che rispecchia i valori dello studio.',
        benefit: 'Immagine autorevole immediata'
      },
      {
        icon: 'file-text',
        title: 'Schede Aree di Pratica',
        description: 'Pagine dedicate per ogni specializzazione (civile, penale, lavoro) per posizionarsi su Google.',
        benefit: 'Clienti profilati per materia'
      },
      {
        icon: 'users',
        title: 'Profili Avvocati',
        description: 'Bio professionali con foto, CV e pubblicazioni per ogni membro del team.',
        benefit: 'Fiducia nel professionista'
      },
      {
        icon: 'book',
        title: 'Blog Giuridico',
        description: 'Sezione news e approfondimenti per dimostrare competenza e aggiornamento continuo.',
        benefit: 'Autorità e traffico organico'
      }
    ],
    stats: [
      { value: '74%', label: 'cerca un avvocato online', source: 'Clio Trends' },
      { value: '58%', label: 'visita il sito web dello studio', source: 'Clio Trends' }
    ],
    testimonials: [
      {
        quote: 'Il nuovo sito ci ha posizionato come punto di riferimento per il diritto del lavoro in città.',
        author: 'Avv. Rossi',
        business: 'Studio Legale Rossi',
        location: 'Bologna',
        rating: 5
      }
    ]
  },

  'dentisti': {
    description: 'Siti web per studi dentistici e odontoiatrici con prenotazione visite, presentazione trattamenti e casi clinici.',
    targetAudience: 'Dentisti, odontoiatri e cliniche che vogliono rassicurare i pazienti e riempire l\'agenda.',
    hero: {
      title: 'Fai Sorridere il Tuo Studio Dentistico Online',
      subtitle: 'Sito web accogliente e professionale. Spiega i trattamenti, mostra i casi di successo e permetti ai pazienti di prenotare online.',
      cta: 'Digitalizza il Tuo Studio'
    },
    introSection: {
      title: 'Pazienti Più Sereni',
      content: 'Un sito chiaro, che spiega le procedure e mostra l\'ambiente, riduce l\'ansia del paziente e aumenta la fiducia prima ancora della visita.'
    },
    painPoints: [
      {
        icon: 'calendar',
        title: 'Segreteria Intasata',
        description: 'Troppe chiamate per appuntamenti o informazioni base. Un sito chiaro filtra le richieste giuste.',
        keyword: 'gestione appuntamenti dentista'
      },
      {
        icon: 'star',
        title: 'Paura del Dentista',
        description: 'Senza foto e spiegazioni chiare, i nuovi pazienti esitano a prenotare per timore.',
        keyword: 'comunicazione odontoiatrica'
      }
    ],
    features: [
      {
        icon: 'smile',
        title: 'Presentazione Trattamenti',
        description: 'Pagine dettagliate per impianti, ortodonzia e igiene con FAQ specifiche.',
        benefit: 'Pazienti consapevoli e convinti'
      },
      {
        icon: 'calendar',
        title: 'Richiesta Appuntamento',
        description: 'Form semplice per richiedere visita, urgenza o igiene.',
        benefit: 'Agenda ottimizzata'
      },
      {
        icon: 'image',
        title: 'Casi Prima/Dopo',
        description: 'Gallery di casi clinici reali (anonimizzati) per mostrare i risultati.',
        benefit: 'Prova concreta della qualità'
      }
    ],
    stats: [
      { value: '88%', label: 'cerca info salute online', source: 'Pew Research' },
      { value: '45%', label: 'prenoterebbe online se potesse', source: 'Accenture' }
    ],
    testimonials: [
      {
        quote: 'I pazienti arrivano già informati sui trattamenti. Risparmiamo tempo in poltrona.',
        author: 'Dr. Bianchi',
        business: 'Clinica Sorriso',
        location: 'Modena',
        rating: 5
      }
    ]
  },

  'palestre': {
    description: 'Siti web per palestre, centri fitness e personal trainer con gestione abbonamenti, prenotazione corsi e area membri.',
    targetAudience: 'Palestre, centri fitness, personal trainer e coach che vogliono aumentare gli iscritti e fidelizzare i clienti.',
    hero: {
      title: 'Trasforma la Tua Palestra in una Community Online',
      subtitle: 'Sito web con booking corsi, gestione abbonamenti e area riservata per i membri. Attira nuovi iscritti e fidelizza chi già ti segue.',
      cta: 'Potenzia la Tua Palestra'
    },
    introSection: {
      title: 'Più Iscritti, Meno Fatica Amministrativa',
      content: 'Una palestra di successo non è solo attrezzi e pesi. Serve una presenza online che facilita la vita ai soci e al team, automatizzando prenotazioni e pagamenti.'
    },
    painPoints: [
      {
        icon: 'calendar',
        title: 'Gestione Corsi caotica',
        description: 'Fogli Excel, WhatsApp e post-it per organizzare le lezioni. Overbooking, disdetta last minute e confusione sugli orari.',
        keyword: 'gestione corsi palestra'
      },
      {
        icon: 'credit-card',
        title: 'Ritardi nei Pagamenti',
        description: 'Abbonamenti scaduti, solleciti manuali e incassi in contanti che rallentano il flusso di cassa.',
        keyword: 'pagamenti automatici palestra'
      },
      {
        icon: 'users',
        title: 'Alta Percentuale di Abbandono',
        description: 'I soci si iscrivono a gennaio e spariscono a marzo. Senza engagement digitale, non si crea abitudine.',
        keyword: 'fidelizzazione palestra'
      },
      {
        icon: 'search',
        title: 'Non Ti Trovano su Google',
        description: 'Chi cerca "palestra [città]" o "yoga vicino a me" trova la concorrenza. Non hai una strategia SEO locale.',
        keyword: 'seo palestra'
      }
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Prenotazione Corsi Online',
        description: 'Calendario interattivo con disponibilità in tempo reale. I soci prenotano spinning, pilates o corso di nuoto direttamente online.',
        benefit: 'Zero overbooking e agenda sempre aggiornata'
      },
      {
        icon: 'credit-card',
        title: 'Gestione Abbonamenti Automatica',
        description: 'Pagamenti ricorrenti con carta, promemoria scadenze e rinnovi automatici. Riduci i solleciti manuali.',
        benefit: 'Flusso di cassa regolare e meno lavoro amministrativo'
      },
      {
        icon: 'lock',
        title: 'Area Riservata Soci',
        description: 'Spazio privato con schede allenamento, diario dei progressi e contenuti esclusivi (video, ricette).',
        benefit: 'Aumenta il senso di appartenenza e riduce l\'abbandono'
      },
      {
        icon: 'users',
        title: 'Presentazione Trainer',
        description: 'Profili dei personal trainer con specializzazioni, orari disponibili e recensioni. I soci scelgono chi li seguirà.',
        benefit: 'Umanizza la palestra e facilita la scelta del coach'
      },
      {
        icon: 'trophy',
        title: 'Sfide e Gamification',
        description: 'Classifiche, badge per traguardi raggiunti e sfide mensili. Trasforma l\'allenamento in un gioco.',
        benefit: 'Engagement e motivazione costante per i soci'
      }
    ],
    stats: [
      { value: '67%', label: 'cerca palestre online prima di iscriversi', source: 'IHRSA' },
      { value: '30%', label: 'di abbandono entro i primi 3 mesi', source: 'Statista' },
      { value: '25%', label: 'aumento retention con app/community digitale', source: 'Club Industry' }
    ],
    testimonials: [
      {
        quote: 'Da quando abbiamo il sistema di prenotazione online, la gestione dei corsi è diventata un gioco da ragazzi. Zero stress.',
        author: 'Marco',
        business: 'Fitness Club 360',
        location: 'Bologna',
        rating: 5
      },
      {
        quote: 'L\'area riservata ha aumentato la fedeltà dei nostri soci. Si sentono parte di una community, non solo clienti.',
        author: 'Sara',
        business: 'Yoga Studio Namaste',
        location: 'Milano',
        rating: 5
      }
    ]
  },

  'architetti': {
    description: 'Siti web per architetti e studi di progettazione con portfolio progetti, blog tecnico e lead generation per commesse.',
    targetAudience: 'Architetti, studi di progettazione, interior designer e professionisti dell\'edilizia che vogliono mostrare i propri lavori e trovare nuovi clienti.',
    hero: {
      title: 'Il Tuo Portfolio Architettonico Merita uno Spazio Dignitoso',
      subtitle: 'Sito web elegante e tecnico per mostrare progetti, pubblicare articoli di settore e farti contattare da committenti qualificati.',
      cta: 'Mostra i Tuoi Progetti'
    },
    introSection: {
      title: 'La Prima impressione è Quella che Conta',
      content: 'Un architetto vende visione, estetica e attenzione ai dettagli. Se il tuo sito web non riflette questi valori, stai perdendo credibilità prima ancora di mostrare i progetti.'
    },
    painPoints: [
      {
        icon: 'image',
        title: 'Portfolio Disperso',
        description: 'I progetti migliori sono su Instagram, Pinterest o PDF. Non c\'è una vetrina professionale che racconta la tua filosofia di design.',
        keyword: 'portfolio architetto online'
      },
      {
        icon: 'search',
        title: 'Non Sei Trovabile Localmente',
        description: 'Chi cerca "architetto ristrutturazione [città]" trova i competitor. Il tuo sito non è ottimizzato per le ricerche locali.',
        keyword: 'seo architetto'
      },
      {
        icon: 'file-text',
        title: 'Manca una Voce Autorevole',
        description: 'Non hai un blog o una sezione pubblicazioni dove dimostrare competenza tecnica e rimanere top-of-mind per i potenziali clienti.',
        keyword: 'content marketing architetti'
      },
      {
        icon: 'mail',
        title: 'Nessun Sistema di Contatto',
        description: 'Il modulo contatti è generico. Non raccoglie informazioni utili sul progetto (metriquadri, budget, tipologia) per fare una prima scrematura.',
        keyword: 'lead generation architetti'
      }
    ],
    features: [
      {
        icon: 'grid',
        title: 'Portfolio Immersivo',
        description: 'Gallerie progetti con foto prima/dopo, planimetrie interattive, scheda tecnica e descrizione del concept architettonico.',
        benefit: 'I lavori parlano per te, 24 ore su 24'
      },
      {
        icon: 'book',
        title: 'Blog Tecnico e di Design',
        description: 'Pubblica articoli su materiali, tendenze architettoniche e case history. Posizionati come esperto di riferimento.',
        benefit: 'Autorevolezza e traffico qualificato dal blog'
      },
      {
        icon: 'map-pin',
        title: 'Mappa Progetti Realizzati',
        description: 'Visualizzazione geografica interattiva dei tuoi lavori nella città. I potenziali clienti vedono cosa hai fatto nel loro quartiere.',
        benefit: 'Prova sociale locale immediata'
      },
      {
        icon: 'file-text',
        title: 'Modulo Contatto Qualificato',
        description: 'Form che chiede: tipologia progetto, metratura, budget, timeline. Ricevi solo richieste serie e compatibili.',
        benefit: 'Meno tempo sprecato su lead non qualificati'
      },
      {
        icon: 'award',
        title: 'Sezione Pubblicazioni e Premi',
        description: 'Mostra collaborazioni con riviste di settore, premi ricevuti e partecipazioni a concorsi di architettura.',
        benefit: 'Credibilità e riconoscimento professionale'
      }
    ],
    stats: [
      { value: '81%', label: 'dei committenti cerca online prima di contattare', source: 'Houzz' },
      { value: '3x', label: 'più probabilità di essere contattato con portfolio online', source: 'AIA' },
      { value: '65%', label: 'giudica un professionista dal suo sito web', source: 'Stanley Black & Decker' }
    ],
    testimonials: [
      {
        quote: 'Il portfolio online ci ha fatto ottenere una commessa per una villa di lusso. Il cliente ci ha trovati su Google e ha amato la presentazione dei progetti.',
        author: 'Arch. Verdi',
        business: 'Studio Verdi Architetti',
        location: 'Firenze',
        rating: 5
      }
    ]
  },

  'hotel': {
    description: 'Siti web per hotel, B&B e strutture ricettive con booking engine integrato, gestione camere e gallery immersive.',
    targetAudience: 'Hotel, bed and breakfast, agriturismi e strutture ricettive che vogliono aumentare le prenotazioni dirette e ridurre la dipendenza dai portali.',
    hero: {
      title: 'Riempi le Tue Camere Senza Pagare Commissioni ai Portali',
      subtitle: 'Sito web con booking engine integrato, gallery fotografica professionale e strategia per farti prenotare direttamente.',
      cta: 'Aumenta le Prenotazioni Dirette'
    },
    introSection: {
      title: 'Ogni Camera Vuota è Denaro Perso',
      content: 'Booking.com e Expedia sono utili ma costano il 15-25% su ogni prenotazione. Un sito web con booking engine proprietario ti permette di vendere direttamente, trattenendo i margini e costruendo una relazione diretta con l\'ospite.'
    },
    painPoints: [
      {
        icon: 'percent',
        title: 'Commissioni dei Portali Troppo Alte',
        description: 'Ogni notte venduta tramite OTA costa il 15-25% del fatturato. Su una camera da 100€, perdi 15-25€ solo in commissioni.',
        keyword: 'commissioni booking expedia'
      },
      {
        icon: 'calendar',
        title: 'Overbooking e Disallineamenti',
        description: 'Gestire manualmente la disponibilità su più portali porta a errori costosi: sovrapprenotazioni o camere lasciate vuote per sbaglio.',
        keyword: 'channel manager hotel'
      },
      {
        icon: 'image',
        title: 'Foto Amatoriali che Non Vendono',
        description: 'Le foto sui portali sono vecchie o fatte col cellulare. Non trasmettono l\'atmosfera della struttura e spaventano i prezzi.',
        keyword: 'fotografia hotel professionale'
      },
      {
        icon: 'star',
        title: 'Recensioni Negative Non Gestite',
        description: 'Una recensione negativa su TripAdvisor non riceve risposta professionale e danneggia la reputazione per mesi.',
        keyword: 'reputation management hotel'
      }
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Booking Engine Integrato',
        description: 'Prenotazioni dirette 24/7 con pagamento online, selezione camera, extra (colazione, late check-out) e conferma automatica via email.',
        benefit: 'Risparmia 15-25% sulle commissioni OTA'
      },
      {
        icon: 'sync',
        title: 'Sincronizzazione Automatica',
        description: 'Channel manager che aggiorna in tempo reale disponibilità e prezzi su Booking, Expedia e altri portali. Zero overbooking.',
        benefit: 'Gestione semplificata e zero errori di disponibilità'
      },
      {
        icon: 'camera',
        title: 'Gallery Fotografica Immersiva',
        description: 'Servizio fotografico professionale con foto HDR, tour virtuale 360° e video delle camere e delle aree comuni.',
        benefit: 'Aumenta la conversione del 40% con foto professionali'
      },
      {
        icon: 'gift',
        title: 'Pacchetti e Offerte Speciali',
        description: 'Crea facilmente offerte "romantica", "weekend benessere" o "soggiorno lungo". Promozioni last minute automatiche.',
        benefit: 'Riempi le camere vuote con offerte mirate'
      },
      {
        icon: 'globe',
        title: 'Multilingua Automatico',
        description: 'Sito tradotto in inglese, francese, tedesco e spagnolo. Atterra turisti stranieri senza sforzo.',
        benefit: 'Espandi il mercato target senza agenzia'
      }
    ],
    stats: [
      { value: '15-25%', label: 'commissioni medie dei portali OTA', source: 'HSMAI' },
      { value: '3x', label: 'ritorno investimento su booking engine proprio', source: 'Kalibri Labs' },
      { value: '76%', label: 'dei viaggiatori visita il sito ufficiale prima di prenotare', source: 'Google Travel' }
    ],
    testimonials: [
      {
        quote: 'Con il booking engine diretto abbiamo aumentato le prenotazioni dal sito del 35%. Le commissioni risparmiate ci hanno permesso di ristrutturare 5 camere.',
        author: 'Giulia',
        business: 'Hotel Bella Vista',
        location: 'Lago di Como',
        rating: 5
      }
    ]
  },

  'negozi': {
    description: 'Siti web e e-commerce per negozi al dettaglio, boutique e attività commerciali con vetrina digitale e vendita online.',
    targetAudience: 'Negozi al dettaglio, boutique, attività commerciali e piccoli commercianti che vogliono vendere online e fidelizzare la clientela.',
    hero: {
      title: 'Porta il Tuo Negozio nel Mondo Digitale',
      subtitle: 'Sito web con vetrina prodotti, e-commerce integrato e strategia per farti trovare dai clienti locali. Vendi online e in negozio.',
      cta: 'Digitalizza il Tuo Negozio'
    },
    introSection: {
      title: 'Il Commercio di Oggi è Multicanale',
      content: 'I clienti cercano su Google prima di entrare in negozio. Se non sei online, perdi vendite. Un sito web ti permette di mostrare i prodotti, comunicare promozioni e vendere anche quando il negozio fisico è chiuso.'
    },
    painPoints: [
      {
        icon: 'search',
        title: 'Non Ti Trovano su Google',
        description: 'Chi cerca "negozio [prodotto] [città]" trova Amazon o la grande distribuzione. Il tuo negozio fisico è invisibile online.',
        keyword: 'seo negozio locale'
      },
      {
        icon: 'clock',
        title: 'Orari Limitati di Apertura',
        description: 'Il negozio chiama alle 19. I clienti che lavorano non riescono a passare. Perdi vendite per mancanza di flessibilità.',
        keyword: 'ecommerce negozio fisico'
      },
      {
        icon: 'users',
        title: 'Nessuna Fidelizzazione Digitale',
        description: 'I clienti entrano, comprano e non tornano. Non hai un sistema per ricontattarli con offerte personalizzate.',
        keyword: 'fidelizzazione clienti negozio'
      },
      {
        icon: 'image',
        title: 'Prodotti Non Mostrati Online',
        description: 'Hai merce interessante ma nessuno la vede. Senza foto e descrizioni online, i prodotti restano sullo scaffale.',
        keyword: 'vetrina digitale negozio'
      }
    ],
    features: [
      {
        icon: 'store',
        title: 'Vetrina Digitale Aggiornata',
        description: 'Catalogo prodotti online con foto, descrizioni, prezzi e disponibilità in tempo reale. Il negozio è sempre aperto, anche di notte.',
        benefit: 'I clienti vedono cosa hai prima di entrare'
      },
      {
        icon: 'shopping-cart',
        title: 'E-commerce Facile da Gestire',
        description: 'Vendi online con pagamenti sicuri, spedizioni automatizzate e gestione ordini semplice. Perfetto per integrare con il negozio fisico.',
        benefit: 'Vendi 24/7 senza aumentare il personale'
      },
      {
        icon: 'gift',
        title: 'Carte Fedeltà Digitali',
        description: 'Punti per ogni acquisto, sconti personalizzati e offerte esclusive per i clienti registrati. Tutto gestito automaticamente.',
        benefit: 'Clienti che tornano più spesso e spendono di più'
      },
      {
        icon: 'map-pin',
        title: 'Click and Collect',
        description: 'Il cliente ordina online e ritira in negozio. Combina il meglio del digitale e del fisico, aumentando il traffico in negozio.',
        benefit: 'Più vendite online e più visite fisiche'
      },
      {
        icon: 'bell',
        title: 'Comunicazione Promozioni',
        description: 'Banner sul sito, popup offerte e notifiche WhatsApp per eventi e sconti. Comunica velocemente con i clienti abituali.',
        benefit: 'Svuota il magazzino con promozioni mirate'
      }
    ],
    stats: [
      { value: '81%', label: 'cerca online prima di visitare un negozio fisico', source: 'Google' },
      { value: '30%', label: 'di incremento vendite con click-and-collect', source: 'Forrester' },
      { value: '2x', label: 'valore medio cliente fidelizzato vs occasionale', source: 'Harvard Business Review' }
    ],
    testimonials: [
      {
        quote: 'Da quando abbiamo il sito con l\'e-commerce, vendiamo anche ai clienti che abitano fuori città. Il fatturato è cresciuto del 25%.',
        author: 'Roberto',
        business: 'Boutique Elegance',
        location: 'Verona',
        rating: 5
      }
    ]
  },

  'elettronica': {
    description: 'E-commerce per negozi di elettronica, informatica e telefonia. Schede tecniche dettagliate, filtri avanzati e gestione magazzino.',
    targetAudience: 'Negozi di elettronica, riparatori e rivenditori tech che vogliono vendere online e competere con i big player.',
    hero: {
      title: 'Vendi Tecnologia Online con un E-commerce Potente',
      subtitle: 'Shop veloce, filtri avanzati per specifiche tecniche e sincronizzazione magazzino. La tua vetrina tech aperta 24/7.',
      cta: 'Apri il Tuo Tech Store'
    },
    introSection: {
      title: 'Schede Tecniche che Vendono',
      content: 'Chi compra tecnologia vuole dettagli precisi. Un e-commerce ottimizzato permette di confrontare prodotti, vedere specifiche e acquistare in sicurezza.'
    },
    painPoints: [
      {
        icon: 'database',
        title: 'Gestione Listini Complessa',
        description: 'Migliaia di prodotti, prezzi che cambiano frequentemente, varianti tecniche da gestire. Serve un sistema che semplifichi l\'aggiornamento del catalogo.',
        keyword: 'gestione catalogo elettronica'
      },
      {
        icon: 'search',
        title: 'Concorrenza Agguerrita',
        description: 'Amazon e MediaWorld dominano il mercato. Per vendere devi offrire nicchia, assistenza pre-vendita o usabilità superiore.',
        keyword: 'ecommerce elettronica nicchia'
      },
      {
        icon: 'help-circle',
        title: 'Domande Tecniche Ripetitive',
        description: 'I clienti chiedono sempre le stesse cose su compatibilità, specifiche e garanzie. Senza FAQ dettagliate, perdi tempo in risposte.',
        keyword: 'assistenza clienti ecommerce'
      }
    ],
    features: [
      {
        icon: 'filter',
        title: 'Filtri Avanzati per Specifiche',
        description: 'Filtra per RAM, processore, pollici, marca, compatibilità. Fondamentale per aiutare il cliente a trovare il prodotto giusto.',
        benefit: 'Il cliente trova subito ciò che cerca'
      },
      {
        icon: 'box',
        title: 'Sincronizzazione Magazzino',
        description: 'Integrazione con il gestionale di negozio per stock in tempo reale. Nessun ordine annullato per mancanza prodotto.',
        benefit: 'Affidabilità e zero delusioni clienti'
      },
      {
        icon: 'tool',
        title: 'Configuratori Prodotto',
        description: 'Possibilità di assemblare PC, scegliere accessori compatibili o configurare dispositivi prima dell\'acquisto.',
        benefit: 'Upselling automatico e vendite configurate'
      },
      {
        icon: 'file-text',
        title: 'Schede Tecniche Complete',
        description: 'Specifiche dettagliate, manuali PDF, video unboxing e confronti tra modelli. Tutto ciò che serve per decidere.',
        benefit: 'Meno domande, più acquisti autonomi'
      }
    ],
    stats: [
      { value: '40%', label: 'degli acquisti tech avviene online', source: 'Osservatorio eCommerce B2c' },
      { value: '85%', label: 'legge recensioni tech prima di comprare', source: 'Trustpilot' }
    ],
    testimonials: [
      {
        quote: 'Finalmente un e-commerce che gestisce le varianti dei prodotti come serve a noi. Le vendite sono raddoppiate in 6 mesi.',
        author: 'Luca',
        business: 'TechPoint Modena',
        location: 'Modena',
        rating: 5
      }
    ]
  },

  'abbigliamento': {
    description: 'E-commerce per negozi di abbigliamento e moda. Gestione taglie/colori, lookbook e integrazione social.',
    targetAudience: 'Boutique, brand di moda e negozi di abbigliamento che vogliono vendere online.',
    hero: {
      title: 'La Tua Boutique Aperta 24 Ore su 24',
      subtitle: 'Vendi moda online con uno shop elegante. Gestione semplice di taglie e colori, gallery lookbook e integrazione Instagram.',
      cta: 'Vendi Moda Online'
    },
    introSection: {
      title: 'Nel Fashion l\'Immagine è Tutto',
      content: 'Nel settore moda l\'estetica è fondamentale. Il tuo e-commerce deve essere bello quanto la tua vetrina fisica, con foto accattivanti e navigazione fluida.'
    },
    painPoints: [
      {
        icon: 'shirt',
        title: 'Gestione Resi Complessa',
        description: 'Taglie sbagliate causano resi costosi. Serve una guida taglie dettagliata e foto su modello per ridurre errori.',
        keyword: 'guida taglie ecommerce'
      },
      {
        icon: 'instagram',
        title: 'Social non Collegati',
        description: 'Vendi su Instagram ma il checkout è macchinoso. Serve integrazione diretta tra social e shop per conversioni immediate.',
        keyword: 'instagram shopping'
      },
      {
        icon: 'package',
        title: 'Gestione Collezioni Stagionali',
        description: 'Il cambio stagione richiede aggiornamenti costanti del catalogo. Senza un sistema agile, il negozio online resta indietro.',
        keyword: 'gestione collezioni moda'
      }
    ],
    features: [
      {
        icon: 'grid',
        title: 'Varianti Taglia/Colore Intuitive',
        description: 'Interfaccia chiara per scegliere la combinazione giusta, con controllo disponibilità in tempo reale.',
        benefit: 'Esperienza d\'acquisto fluida e senza errori'
      },
      {
        icon: 'image',
        title: 'Lookbook e Zoom Dettagli',
        description: 'Foto alta qualità su modello, zoom sui tessuti e dettagli delle finiture. Video per vedere il movimento degli abiti.',
        benefit: 'Riduce l\'incertezza e i resi del 30%'
      },
      {
        icon: 'heart',
        title: 'Wishlist e Outfit Completi',
        description: 'I clienti salvano i preferiti e vedono suggerimenti per completare l\'outfit. Cross-selling automatico.',
        benefit: 'Aumenta il valore medio del carrello'
      }
    ],
    stats: [
      { value: '55%', label: 'acquista moda da dispositivi mobile', source: 'Statista' },
      { value: '40%', label: 'di resi nel fashion ecommerce', source: 'CNBC' }
    ],
    testimonials: [
      {
        quote: 'Le vendite da Instagram sono raddoppiate grazie al collegamento diretto con lo shop. I clienti acquistano senza abbandonare l\'app.',
        author: 'Sofia',
        business: 'Boutique Chic',
        location: 'Firenze',
        rating: 5
      }
    ]
  },

  'alimentari': {
    description: 'E-commerce per prodotti alimentari, gastronomia e specialità tipiche. Tracciabilità, scadenze e spedizioni refrigerate.',
    targetAudience: 'Gastronomie, produttori artigianali, aziende alimentari e rivenditori di specialità tipiche.',
    hero: {
      title: 'Porta i Sapori Locali in Tutta Italia',
      subtitle: 'Vendi prodotti alimentari online con gestione scadenze, tracciabilità lotto e spedizioni refrigerate. Dal produttore al consumatore.',
      cta: 'Vendi Cibo Online'
    },
    introSection: {
      title: 'La Spesa Si Fa Sempre Più Online',
      content: 'I consumatori cercano prodotti genuini, artigianali e locali. Un e-commerce ti permette di raccontare la storia dietro ogni prodotto e spedire freschezza in tutta Italia.'
    },
    painPoints: [
      {
        icon: 'calendar',
        title: 'Gestione Scadenze Critica',
        description: 'I prodotti alimentari hanno data di scadenza. Senza un sistema che gestisce il FIFO (first in first out), si rischia di spedire merce quasi scaduta.',
        keyword: 'gestione scadenze ecommerce alimentare'
      },
      {
        icon: 'truck',
        title: 'Spedizioni Complesse',
        description: 'Prodotti freschi, refrigerati o deperibili richiedono imballaggi speciali e corrieri espressi. I costi di spedizione sono più alti.',
        keyword: 'spedizioni alimentari refrigerate'
      },
      {
        icon: 'shield',
        title: 'Normative Alimentari Stringenti',
        description: 'Etichette, allergeni, tracciabilità lotto. L\'e-commerce deve rispettare tutte le normative HACCP e del consumo.',
        keyword: 'normative ecommerce alimentare'
      }
    ],
    features: [
      {
        icon: 'calendar-check',
        title: 'Alert Scadenze Automatici',
        description: 'Sistema che evidenzia i prodotti in scadenza per favorirne la vendita. Gestione automatica del magazzino FIFO.',
        benefit: 'Zero spreco e massima freschezza'
      },
      {
        icon: 'thermometer',
        title: 'Spedizioni Tracciate Temperature',
        description: 'Integrazione con corrieri specializzati in alimentari freschi. Monitoraggio temperatura durante il trasporto.',
        benefit: 'Prodotto fresco garantito all\'arrivo'
      },
      {
        icon: 'file-text',
        title: 'Schede Prodotto Complete',
        description: 'Ingredienti, allergeni, valori nutrizionali, certificazioni e provenienza. Tutto chiaro e conforme alle normative.',
        benefit: 'Fiducia del consumatore e conformità legale'
      }
    ],
    stats: [
      { value: '+40%', label: 'crescita e-commerce alimentare annuale', source: 'Osservatorio eCommerce B2c' },
      { value: '72%', label: 'disposto a pagare di più per prodotti locali', source: 'Nielsen' }
    ],
    testimonials: [
      {
        quote: 'Ora spediamo i nostri tortellini in tutta Italia. I clienti apprezzano la freschezza e la tracciabilità che mostriamo online.',
        author: 'Paolo',
        business: 'Pasta Fresca Artigianale',
        location: 'Modena',
        rating: 5
      }
    ]
  },

  'arredamento': {
    description: 'E-commerce per mobili, arredamento e complementi d\'arredo. Configuratori, visualizzazione 3D e gestione consegne.',
    targetAudience: 'Negozi di arredamento, interior designer, produttori di mobili e rivenditori di complementi d\'arredo.',
    hero: {
      title: 'Vendi Arredamento Online Senza Limiti',
      subtitle: 'E-commerce per mobili con configuratore prodotto, visualizzazione in ambiente e gestione logistica integrata. Il tuo showroom digitale.',
      cta: 'Arreda il Web'
    },
    introSection: {
      title: 'L\'Arredamento Entra nell\'Era Digitale',
      content: 'Anche i mobili si comprano online. Con configurazioni interattive, foto in ambientazione reale e servizi di consegna professionali, puoi vendere divani, tavoli e complementi a clienti in tutta Italia.'
    },
    painPoints: [
      {
        icon: 'maximize',
        title: 'Problematiche di Dimensioni',
        description: 'I clienti hanno paura che il divano o il tavolo non entrino in casa. Serve aiutarli a misurare e visualizzare gli spazi.',
        keyword: 'visualizzazione arredamento'
      },
      {
        icon: 'truck',
        title: 'Logistica Complessa',
        description: 'Mobili ingombranti, montaggio richiesto, consegne al piano. Servono corrieri specializzati e tracking avanzato.',
        keyword: 'consegna mobili ecommerce'
      },
      {
        icon: 'palette',
        title: 'Varietà Combinazioni',
        description: 'Un divano ha infinite combinazioni di tessuti, colori e misure. Senza un configuratore, il catalogo è ingestibile.',
        keyword: 'configuratore mobili'
      }
    ],
    features: [
      {
        icon: 'sliders',
        title: 'Configuratore 3D Interattivo',
        description: 'I clienti personalizzano colore, tessuto, dimensioni e vedono il risultato in tempo reale. Prezzo aggiornato automaticamente.',
        benefit: 'Prodotto su misura senza errori di ordine'
      },
      {
        icon: 'image',
        title: 'Foto in Ambientazione Reale',
        description: 'Immagini dei mobili in vere stanze arredate, non solo su sfondo bianco. Aiuta a immaginare il prodotto a casa propria.',
        benefit: 'Minor incertezza, più acquisti decisi'
      },
      {
        icon: 'ruler',
        title: 'Guida Misure e Spazi',
        description: 'Tool interattivo per calcolare se un mobile entra nella stanza. Spiegazioni su come misurare porte e passaggi.',
        benefit: 'Zero resi per problemi di dimensioni'
      }
    ],
    stats: [
      { value: '+25%', label: 'crescita anno ecommerce arredamento', source: 'Casaleggio Associati' },
      { value: '60%', label: 'cerca online prima di acquistare mobili', source: 'Houzz' }
    ],
    testimonials: [
      {
        quote: 'Il configuratore 3D ci ha permesso di vendere divani su misura a clienti lontani. I resi sono praticamente zero.',
        author: 'Andrea',
        business: 'Divani & Divani Online',
        location: 'Milano',
        rating: 5
      }
    ]
  },

  'cosmetici': {
    description: 'E-commerce per cosmetici, prodotti beauty e skincare. Recensioni, guide routine e box abbonamento.',
    targetAudience: 'Brand di cosmetici, profumerie, estetiste con linee proprie e rivenditori di prodotti beauty.',
    hero: {
      title: 'Vendi Bellezza Online con Stile',
      subtitle: 'E-commerce per cosmetici con recensioni dettagliate, guide routine di bellezza e box abbonamento. Trasforma visitatori in clienti fedeli.',
      cta: 'Lancia il Tuo Beauty Store'
    },
    introSection: {
      title: 'La Bellezza è un\'Esperienza, Anche Online',
      content: 'Nel settore beauty, la confezione conta ma conta anche la consulenza. Un e-commerce efficace guida il cliente nella scelta dei prodotti giusti per la sua pelle e crea rituali di acquisto ripetuti.'
    },
    painPoints: [
      {
        icon: 'help-circle',
        title: 'Scelta Prodotto Complessa',
        description: 'Cliente non sa quale crema fa al caso suo tra migliaia di opzioni. Senza consulenza digitale, abbandona il carrello.',
        keyword: 'consulenza beauty online'
      },
      {
        icon: 'shield',
        title: 'Fiducia e Autenticità',
        description: 'Timori su prodotti contraffatti o scaduti. Serve trasparenza su ingredienti, provenienza e certificazioni.',
        keyword: 'autenticità prodotti cosmetici'
      },
      {
        icon: 'repeat',
        title: 'Acquisto non Ripetitivo',
        description: 'I clienti comprano una volta e non tornano. Manca un sistema di abbonamento o reminder per prodotti a consumo.',
        keyword: 'abbonamento cosmetici'
      }
    ],
    features: [
      {
        icon: 'search',
        title: 'Quiz Pelle Personalizzato',
        description: 'Test interattivo che suggerisce i prodotti giusti in base a tipologia di pelle, esigenze e preferenze.',
        benefit: 'Consulenza digitale che guida all\'acquisto'
      },
      {
        icon: 'star',
        title: 'Review con Foto Prima/Dopo',
        description: 'Recensioni dettagliate con foto reali dei risultati. Filtri per tipo di pelle simile alla propria.',
        benefit: 'Social proof autentica e persuasiva'
      },
      {
        icon: 'package',
        title: 'Box Abbonamento Beauty',
        description: 'Box mensili con prodotti selezionati, campioncini omaggio e routine personalizzate. Fidelizzazione automatica.',
        benefit: 'Ricavi ricorrenti mensili garantiti'
      }
    ],
    stats: [
      { value: '+35%', label: 'crescita e-commerce cosmetici', source: 'Cosmetica Italia' },
      { value: '70%', label: 'legge recensioni prima di acquistare beauty', source: 'BrightLocal' }
    ],
    testimonials: [
      {
        quote: 'Il quiz sulla pelle ha aumentato le conversioni del 40%. Le clienti si sentono consigliate, non solo vendute.',
        author: 'Elena',
        business: 'SkinCare Lab',
        location: 'Roma',
        rating: 5
      }
    ]
  },

  'gioielli': {
    description: 'E-commerce per gioielli, bigiotteria e accessori di lusso. Gallery immersive, certificazioni e packaging premium.',
    targetAudience: 'Gioiellieri, artigiani orefici, brand di accessori di lusso e boutique di bigiotteria.',
    hero: {
      title: 'Vendi Lusso e Artigianalità Online',
      subtitle: 'E-commerce elegante per gioielli con gallery in alta risoluzione, certificazioni autenticità e unboxing experience. Valorizza l\'artigianato italiano.',
      cta: 'Esponi i Tuoi Gioielli'
    },
    introSection: {
      title: 'Il Lusso Nasce dalla Presentazione',
      content: 'Un gioiello vale tanto quanto la storia che racconta. Un e-commerce di lusso deve trasmettere artigianalità, esclusività e qualità attraverso immagini impeccabili e narrazione coinvolgente.'
    },
    painPoints: [
      {
        icon: 'camera',
        title: 'Foto che Non Valorizzano',
        description: 'Gioielli fotografati male, senza dettaglio su lucidatura e pietre. Il prodotto sembra economico e non vende.',
        keyword: 'fotografia gioielli professionale'
      },
      {
        icon: 'shield',
        title: 'Percezione di Rischio Acquisto',
        description: 'Clienti timorosi di comprare gioielli costosi online. Serve garanzia autenticità, reso facile e customer service impeccabile.',
        keyword: 'fiducia acquisto gioielli online'
      },
      {
        icon: 'gift',
        title: 'Mancanza di Personalizzazione',
        description: 'I clienti vogliono incidere, scegliere lunghezze o creare pezzi unici. Senza opzioni di custom, si perde differenziazione.',
        keyword: 'personalizzazione gioielli ecommerce'
      }
    ],
    features: [
      {
        icon: 'zoom-in',
        title: 'Foto Macro 360 Gradi',
        description: 'Immagini in altissima risoluzione con zoom su dettagli, pietre e incisioni. Visualizzazione 360° del gioiello.',
        benefit: 'Il cliente vede ogni dettaglio come in vetrina'
      },
      {
        icon: 'certificate',
        title: 'Certificati di Autenticità Digitali',
        description: 'Certificato scaricabile con codice univoco, provenienza pietre e dati artigiano. Garanzia inclusa visibile.',
        benefit: 'Fiducia e sicurezza nell\'acquisto'
      },
      {
        icon: 'edit',
        title: 'Configuratore Personalizzazioni',
        description: 'Scelta metallo, lunghezza catena, incisioni personalizzate. Preventivo immediato per pezzi su misura.',
        benefit: 'Gioielli unici come desidera il cliente'
      }
    ],
    stats: [
      { value: '+45%', label: 'crescita ecommerce gioielli lusso', source: 'Altagamma' },
      { value: '3x', label: 'valore medio ordine online vs negozio fisico', source: 'McKinsey' }
    ],
    testimonials: [
      {
        quote: 'Le foto macro 360 hanno rivoluzionato le vendite. I clienti apprezzano la trasparenza e l\'attenzione ai dettagli.',
        author: 'Maria',
        business: 'Gioielli Artigianali Aurora',
        location: 'Vicenza',
        rating: 5
      }
    ]
  },

  'sport': {
    description: 'E-commerce per abbigliamento sportivo, attrezzature e integratori. Guide tecniche, taglie specifiche e community.',
    targetAudience: 'Negozi di articoli sportivi, brand fitness, rivenditori attrezzature e supplement stores.',
    hero: {
      title: 'Attrezza gli Atleti di Tutta Italia',
      subtitle: 'E-commerce per articoli sportivi con guide tecniche, taglie performanti e consigli per sport specifici. Dallo yoga al bodybuilding.',
      cta: 'Vendi Sport Online'
    },
    introSection: {
      title: 'Lo Sport Vende Online',
      content: 'Atleti e appassionati cercano online l\'attrezzatura giusta per la loro disciplina. Un e-commerce specializzato offre consulenza tecnica e prodotti specifici che Amazon non sa consigliare.'
    },
    painPoints: [
      {
        icon: 'help-circle',
        title: 'Consulenza Tecnica Mancante',
        description: 'Cliente non sa quale racchetta, scarpa o integratore scegliere per il suo livello e sport. Serve guida esperta.',
        keyword: 'consulenza tecnica sport'
      },
      {
        icon: 'ruler',
        title: 'Taglie Tecniche Complicate',
        description: 'Abbigliamento sportivo con fit compressione, misure specifiche per sport. Taglie S/M/L non bastano.',
        keyword: 'taglie tecniche abbigliamento sportivo'
      },
      {
        icon: 'users',
        title: 'Mancanza di Community',
        description: 'Gli sportivi cercano consigli, recensioni da atleti veri, appartenenza a una tribù. Non solo un prodotto.',
        keyword: 'community sport ecommerce'
      }
    ],
    features: [
      {
        icon: 'target',
        title: 'Guide per Sport Specifici',
        description: 'Consigli su attrezzatura per running, palestra, ciclismo, nuoto. Articoli tecnici scritti da esperti.',
        benefit: 'Posizionamento da esperto di settore'
      },
      {
        icon: 'ruler',
        title: 'Guida Taglie Tecnica',
        description: 'Tabelle dettagliate per misure corporee, livello di compressione, fit desiderato. Calcolatore taglia intelligente.',
        benefit: 'Zero resi per taglia errata'
      },
      {
        icon: 'users',
        title: 'Recensioni da Atleti Verificati',
        description: 'Review solo da clienti che hanno acquistato, con filtri per livello sportivo, altezza, peso. Community integrata.',
        benefit: 'Consigli autentici da chi usa il prodotto'
      }
    ],
    stats: [
      { value: '+30%', label: 'crescita ecommerce sportivo post-pandemia', source: 'Coni' },
      { value: '65%', label: 'cerca consigli online prima di acquistare attrezzatura', source: 'Nielsen Sports' }
    ],
    testimonials: [
      {
        quote: 'Le guide per runner ci hanno fatto diventare punto di riferimento per i podisti della zona. Vendiamo scarpe tecniche ogni giorno.',
        author: 'Davide',
        business: 'Runner Store Bologna',
        location: 'Bologna',
        rating: 5
      }
    ]
  },

  'libri': {
    description: 'E-commerce per librerie, editoria e vendita libri online. Schede dettagliate, preview e gestione catalogo editoriale.',
    targetAudience: 'Librerie indipendenti, editori, autori self-publishing e rivenditori di libri nuovi e usati.',
    hero: {
      title: 'Porta la Cultura Online',
      subtitle: 'E-commerce per libri con schede editoriali complete, preview gratuiti e raccomandazioni intelligenti. La tua libreria digitale.',
      cta: 'Apri la Tua Libreria Online'
    },
    introSection: {
      title: 'I Libri Meritano una Vetrina Curata',
      content: 'Amazon vende libri ma non li ama. Una libreria online indipendente può offrire consigli editoriali, scoperte di nicchia e quella cura nella selezione che i lettori apprezzano.'
    },
    painPoints: [
      {
        icon: 'search',
        title: 'Concorrenza Amazon Spietata',
        description: 'Prezzi bassissimi, spedizioni prime. Come competere? Serve differenziarsi con consigli, scoperte e cura del cliente.',
        keyword: 'competere amazon libreria'
      },
      {
        icon: 'book',
        title: 'Catalogo Vasto da Gestire',
        description: 'Migliaia di titoli, edizioni diverse, esaurimenti rapidi. Serve un sistema aggiornato automaticamente con distribuzione editoriale.',
        keyword: 'gestione catalogo libri'
      },
      {
        icon: 'users',
        title: 'Mancanza di Scoperta Editoriale',
        description: 'I clienti non sanno cosa leggere. Serve un\'algoritmo di consigli umano, basato su gusti e scoperte editoriali.',
        keyword: 'consigli lettura personalizzati'
      }
    ],
    features: [
      {
        icon: 'book-open',
        title: 'Schede Editoriali Curate',
        description: 'Sinossi approfondite, bio autore, recensioni critiche, temi del libro. Non solo dati anagrafici ma contesto culturale.',
        benefit: 'Aiuta il lettore a scoprire il libro giusto'
      },
      {
        icon: 'eye',
        title: 'Preview Gratuiti',
        description: 'Prime pagine leggibili online, indice consultabile. Prova il libro prima di comprare, come in libreria.',
        benefit: 'Maggior fiducia nell\'acquisto'
      },
      {
        icon: 'compass',
        title: 'Consigli del Libraio',
        description: 'Sezioni curate: "Se ti è piaciuto X, leggi Y", novità editoriali, classici da riscoprire. Umanità algoritmica.',
        benefit: 'Esperienza di scoperta unica'
      }
    ],
    stats: [
      { value: '+20%', label: 'crescita ecommerce libri', source: 'AIE' },
      { value: '40%', label: 'scopre libri nuovi grazie a consigli online', source: 'Codex Group' }
    ],
    testimonials: [
      {
        quote: 'I nostri consigli editoriali ci distinguono da Amazon. I clienti tornano per le scoperte, non solo per i bestseller.',
        author: 'Laura',
        business: 'Libreria Indipendente Online',
        location: 'Torino',
        rating: 5
      }
    ]
  }
};

import { getNicheConfig } from './niches-config';
import { getNicheLabelForPhrase } from '@/lib/niche-labels';

export const getNicheContent = (slug: string): NicheContent | undefined => {
  const content = nichesContent[slug];
  if (content) return content;

  // Fallback content generator
  const config = getNicheConfig(slug);
  if (!config) return undefined;

  const label = getNicheLabelForPhrase(config);
  return {
    description: `Siti web e soluzioni digitali per ${label}.`,
    targetAudience: `Professionisti e aziende nel settore ${config.category}.`,
    hero: {
      title: `Porta il Tuo Business di ${config.name} Online`,
      subtitle: `Soluzioni web professionali su misura per ${label}. Fatti trovare dai clienti e aumenta il fatturato.`,
      cta: 'Richiedi Preventivo'
    },
    introSection: {
      title: 'Digitalizza la Tua Attività',
      content: `Il settore ${config.category} sta cambiando. Essere online con un sito professionale non è più un optional.`
    },
    painPoints: [
      {
        icon: 'search',
        title: 'Visibilità Limitata',
        description: 'I clienti ti cercano online ma non ti trovano.',
        keyword: `seo ${config.slug}`
      },
      {
        icon: 'users',
        title: 'Concorrenza',
        description: 'I tuoi competitor sono già online e stanno acquisendo quote di mercato.',
        keyword: 'competitor online'
      }
    ],
    features: [
      {
        icon: 'globe',
        title: 'Sito Web Professionale',
        description: 'Design moderno e responsive ottimizzato per il tuo settore.',
        benefit: 'Immagine professionale'
      },
      {
        icon: 'search',
        title: 'SEO Locale',
        description: 'Posizionamento su Google per farti trovare nella tua città.',
        benefit: 'Più clienti locali'
      }
    ],
    stats: [],
    testimonials: []
  };
};