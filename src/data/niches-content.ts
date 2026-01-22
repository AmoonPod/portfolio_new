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
        description: 'TheFork, Just Eat e TripAdvisor trattengono dal 15% al 25% su ogni prenotazione e ordine. Per un ristorante che fattura 500€ a sera solo in commissioni perdi 75-125€.',
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
        description: 'Mancano pacchetti, carte prepagate o punti: i clienti saltano da un salone all’altro per le promozioni.',
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
        description: 'SMS/WhatsApp 48h e 2h prima dell’appuntamento.',
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
        benefit: 'Fatturato aggiuntivo tra una visita e l’altra'
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
        quote: 'Il booking online mi ha liberato il telefono. Le clienti scelgono l’orario e arrivano puntuali.',
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
      subtitle: 'Racconta l’azienda, vendi i tuoi prodotti online e porta le persone in vigna, in stalla o in agriturismo con un sito pensato per la filiera corta.',
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
      { value: '41%', label: 'aumenta la spesa quando conosce l’origine', source: 'Internal data' },
      { value: '35%', label: 'prenotazioni visite generate da ricerche locali', source: 'Google Data' }
    ],
    testimonials: [
      {
        quote: 'Con l’e-commerce diretto spediamo ogni settimana box degustazione. I margini sono finalmente sotto controllo.',
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
  }
};

export const getNicheContent = (slug: string): NicheContent | undefined => {
  return nichesContent[slug];
};
