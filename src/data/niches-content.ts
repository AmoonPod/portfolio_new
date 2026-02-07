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
  icon?: string;
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
      { icon: 'percent', title: 'Commissioni Esorbitanti sui Portali', description: 'TheFork, Just Eat e TripAdvisor trattengono dal 15% al 25% su ogni prenotazione e ordine. Per un ristorante che fattura 500€ a sera, solo in commissioni perdi 75-125€.', keyword: 'commissioni ristoranti portali' },
      { icon: 'smartphone', title: 'Menu PDF Illegibile su Mobile', description: 'Il 73% dei clienti cerca il menu sullo smartphone. Se il tuo PDF si vede male, i clienti abbandonano prima di ordinare. Il menu deve essere veloce, responsive e facile da navigare.', keyword: 'menu mobile friendly' },
      { icon: 'star', title: 'Recensioni Negative Senza Risposta', description: 'Il 94% dei consumatori legge le recensioni prima di scegliere un ristorante. Le recensioni negative senza risposta danneggiano la reputazione e scoraggiano nuovi clienti.', keyword: 'gestione recensioni ristorante' },
      { icon: 'clock', title: 'Chiamate Infinite per Prenotazioni', description: 'Il personale distratto dalle telefonate di prenotazione commette errori, perde ordini e fornisce un servizio peggiore ai clienti fisici.', keyword: 'sistema prenotazioni automatico' },
      { icon: 'image', title: 'Foto Food Scadenti', description: 'Le foto del cibo su Google Maps sono spesso fatte dai clienti con il cellulare. Un sito con foto professionali del menu aumenta l\'attrattiva del 40%.', keyword: 'fotografo food professionale' },
      { icon: 'map', title: 'Non Visibile su Google Maps', description: 'Se il profilo Google Business non è ottimizzato, perdi clienti che cercano "ristorante vicino a me" sul cellulare. Il 68% delle ricerche locali termina con una visita.', keyword: 'google business ristorante' }
    ],
    features: [
      { icon: 'grid', title: 'Menu Digitale Interattivo', description: 'Menu navigabile via QR code con ricerca per categoria, filtri per diete, visualizzazione foto e prezzi. Si aggiorna in tempo reale senza stampare.', benefit: 'Aumenta le ordinazioni del 30% e riduce il lavoro del personale' },
      { icon: 'calendar', title: 'Sistema Prenotazioni Integrato', description: 'Prenotazioni online 24/7 con gestione tavoli, conferma automatica via SMS/WhatsApp e sincronizzazione con il gestionale del locale.', benefit: 'Elimina le telefonate e riduce i no-show del 50%' },
      { icon: 'star', title: 'Gestione Recensioni Automatizzata', description: 'Richiesta automatica di recensioni post-pasto, risposta template personalizzabili e monitoraggio della reputazione online.', benefit: 'Migliora il rating Google di 0.5-1 stella in 6 mesi' },
      { icon: 'camera', title: 'Gallery Fotografica Professionale', description: 'Servizio fotografico food incluso con foto ad alta risoluzione per menu, interno del locale e piatti signature.', benefit: 'Aumenta la conversione visitatori-clienti del 40%' },
      { icon: 'shopping-cart', title: 'Ordini Online e Delivery Proprio', description: 'Sistema di ordini diretto con consegna a domicilio, ritiro in loco e pagamento online. Commissioni decise da te, non dai portali.', benefit: 'Risparmia 15-25% su ogni ordine rispetto ai portali' },
      { icon: 'calendar', title: 'Eventi e Serate Speciali', description: 'Sezione eventi con calendario, prenotazione obbligatoria per cene speciali, menù degustazione e promozioni stagionali.', benefit: 'Aumenta il fatturato delle serate eventi del 50%' },
      { icon: 'message-circle', title: 'Chat e Assistenza Clienti', description: 'Chatbot per rispondere alle domande frequenti su orari, menu e disponibilità. Assistenza clienti immediata senza personale dedicato.', benefit: 'Aumenta le richieste del 25% con risposta immediata' },
      { icon: 'trending-up', title: 'Analytics e Insight', description: 'Dashboard con piatti più visualizzati, orari di picco, preferenze dei clienti e dati per ottimizzare il menu e il servizio.', benefit: 'Decisioni basate sui dati, non sulle sensazioni' }
    ],
    stats: [
      { value: '73%', label: 'clienti cerca il menu sullo smartphone', source: 'Think with Google', icon: 'smartphone' },
      { value: '94%', label: 'legge le recensioni prima di scegliere', source: 'BrightLocal', icon: 'star' },
      { value: '15-25%', label: 'commissioni medie sui portali', source: 'Elaborazione interna', icon: 'percent' },
      { value: '68%', label: 'ricerche locali terminano con visita', source: 'HubSpot', icon: 'map-pin' }
    ],
    testimonials: [
      { quote: 'Dopo il nuovo sito, le prenotazioni dirette sono aumentate del 60%. Non dipendiamo più solo da TheFork.', author: 'Marco', business: 'Trattoria da Marco', location: 'Modena', rating: 5 },
      { quote: 'Il menu QR code ha rivoluzionato il servizio. I clienti ordinano direttamente e il personale si concentra sui tavoli.', author: 'Giulia', business: 'Pizzeria Luna Nova', location: 'Bologna', rating: 5 }
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
      { icon: 'image', title: 'Portfolio Frammentato', description: 'Le foto sono su Instagram, Flickr, Google Photos, hard disk. Nessun luogo centrale per mostrare il lavoro.', keyword: 'portfolio fotografo online' },
      { icon: 'search', title: 'Non Vieni Trovato Localmente', description: '"Fotografo [città]" è cercato da clienti che vogliono servizi locali. Senza SEO, non ti trovano.', keyword: 'seo fotografo google' },
      { icon: 'dollar', title: 'Prezzi Poco Chiari', description: 'I clienti non sanno cosa aspettarsi come prezzo. Richieste info, preventivi, trattative infinite.', keyword: 'listino fotografico trasparente' },
      { icon: 'calendar', title: 'Gestione Date Complessa', description: 'Email, WhatsApp, telefono per ogni richiesta. Sovrapposizioni, errori, clienti persi.', keyword: 'booking fotografo online' },
      { icon: 'users', title: 'Nessuna Prova Sociale', description: 'Testimonianze sparse, recensioni non raccolte. I nuovi clienti non vedono cosa dicono gli altri.', keyword: 'testimonianze fotografo' },
      { icon: 'smartphone', title: 'Sito Non Mobile-Friendly', description: 'Il 60% dei visitatori è da mobile. Gallerie che non caricano, immagini pesanti, esperienza frustrante.', keyword: 'mobile portfolio photographer' }
    ],
    features: [
      { icon: 'grid', title: 'Portfolio Immersivo', description: 'Gallerie organizzate per tipologia (matrimonio, corporate, ritratto). Lightbox, slideshow, filtering.', benefit: 'Il lavoro si presenta da solo' },
      { icon: 'video', title: 'Video Showreel', description: 'Video portfolio con le migliori clip. Vimeo/YouTube integrato con design custom.', benefit: 'Differenziazione dai fotografi statici' },
      { icon: 'calendar', title: 'Booking Online', description: 'Calendario disponibilità con tipologia servizio. Richiesta data, location provvisoria.', benefit: 'Gestione richieste automatizzata' },
      { icon: 'list', title: 'Listino Servizi', description: 'Pacchetti chiari: cosa include, durata, foto consegnate, tempi di consegna.', benefit: 'Meno email, più preventivi' },
      { icon: 'image', title: 'Before/After Editing', description: 'Sezione che mostra il processo di editing. I clienti capiscono il valore del post-produzione.', benefit: 'Giustifica i prezzi' },
      { icon: 'map-pin', title: 'Servizio Zone', description: 'Mappa interattiva con zone coperte. Distanze, costi trasferta, disponibilità.', benefit: 'Chiarisce la copertura' },
      { icon: 'users', title: 'Sezione Clienti', description: 'Logo e nomi dei clienti serviti. Corporate, eventi, pubblicità.', benefit: 'Social proof B2B' },
      { icon: 'download', title: 'Galleria Privata Clienti', description: 'Link privato per i clienti per scaricare le foto. Protezione e facilità.', benefit: 'Experience post-shooting' }
    ],
    stats: [
      { value: '93%', label: 'fotografi considerano il portfolio essenziale', source: 'ASMP', icon: 'image' },
      { value: '63%', label: 'dei clienti cerca su Google', source: 'Google Data', icon: 'search' },
      { value: '4s', label: 'tempo medio di attesa accettabile', source: 'Google PageSpeed', icon: 'clock' },
      { value: '72%', label: 'di clienti B2B legge le recensioni', source: 'BrightLocal', icon: 'star' }
    ],
    testimonials: [
      { quote: 'Il nuovo portfolio ha aumentato le richieste del 50%. Ora i clienti vengono già convinti.', author: 'FotoStudio Milano', business: 'FSM', location: 'Milano', rating: 5 },
      { quote: 'Il booking online mi fa risparmiare 5 ore a settimana. Gestisco tutto dal calendario.', author: 'Marco Lens', business: 'Marco Lens Photography', location: 'Roma', rating: 5 }
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
      { icon: 'calendar', title: 'Agenda nel Caos', description: 'Telefonate, WhatsApp, post-it. Gli appuntamenti si accavallano, i tempi non sono chiari e i no-show aumentano.', keyword: 'gestione appuntamenti salone' },
      { icon: 'clock', title: 'Ritardi e No-Show', description: 'Senza promemoria automatici, chi si dimentica o arriva tardi rompe la catena degli appuntamenti.', keyword: 'promemoria salone' },
      { icon: 'list', title: 'Listino Non Trasparente', description: 'Prezzi e servizi non sono chiari online: chi ti scopre su Google passa al concorrente con un listino leggibile.', keyword: 'listino salone online' },
      { icon: 'instagram', title: 'Portfolio Sparso sui Social', description: 'I lavori migliori sono su Instagram ma non sul tuo sito. Chi cerca "parrucchiere [città]" non li vede.', keyword: 'portfolio capelli sito' },
      { icon: 'users', title: 'Poche Recensioni', description: 'Senza richiesta recensioni post-servizio, i clienti soddisfatti non lasciano feedback e la reputazione cresce lentamente.', keyword: 'recensioni salone bellezza' },
      { icon: 'gift', title: 'Nessuna Fidelizzazione', description: 'Mancano pacchetti, carte prepagate o punti: i clienti saltano da un salone all\'altro per le promozioni.', keyword: 'fidelizzazione salone' }
    ],
    features: [
      { icon: 'calendar', title: 'Booking Online 24/7', description: 'Calendario interattivo con slot, durata servizio e acconto opzionale.', benefit: 'Meno telefonate e agenda sempre piena' },
      { icon: 'bell', title: 'Promemoria Automatici', description: 'SMS/WhatsApp 48h e 2h prima dell\'appuntamento.', benefit: 'Riduci no-show e ritardi' },
      { icon: 'list', title: 'Listino Chiaro e Pacchetti', description: 'Prezzi, durata, cosa include e possibili upgrade.', benefit: 'Nessuna sorpresa, più conferme' },
      { icon: 'grid', title: 'Portfolio Lavori', description: 'Gallerie per colore, taglio, barba, trucco, nails con slider before/after.', benefit: 'Mostra il tuo stile, non solo i prezzi' },
      { icon: 'users', title: 'Sezione Team', description: 'Presenta ogni professionista con specialità e disponibilità.', benefit: 'Il cliente sceglie chi lo seguirà' },
      { icon: 'star', title: 'Raccolta Recensioni', description: 'Richiesta automatica dopo il servizio, pubblicazione su Google.', benefit: 'Reputazione che cresce ogni settimana' },
      { icon: 'gift', title: 'Programmi Fedeltà', description: 'Punti, pacchetti prepagati e gift card digitali.', benefit: 'Clienti che tornano e spendono di più' },
      { icon: 'shopping-bag', title: 'Vendita Prodotti Online', description: 'E-commerce light per shampoo, maschere e styling consigliati.', benefit: 'Fatturato aggiuntivo tra una visita e l\'altra' }
    ],
    stats: [
      { value: '65%', label: 'prenoterebbe online se possibile', source: 'Square', icon: 'calendar' },
      { value: '70%', label: 'legge le recensioni prima di prenotare', source: 'BrightLocal', icon: 'star' },
      { value: '47%', label: 'dei no-show dovuti a dimenticanza', source: 'Internal data', icon: 'clock' },
      { value: '40%', label: 'prenotazioni fuori orario con booking online', source: 'Salon Tech', icon: 'trending-up' }
    ],
    testimonials: [
      { quote: 'Il booking online mi ha liberato il telefono. Le clienti scelgono l\'orario e arrivano puntuali.', author: 'Anna', business: 'Anna Hair Studio', location: 'Modena', rating: 5 },
      { quote: 'Con il listino chiaro e i promemoria i no-show sono quasi spariti. Finalmente giornate piene e ordinate.', author: 'Giulia', business: 'Espace Beauté', location: 'Reggio Emilia', rating: 5 }
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
      { icon: 'image', title: 'Prodotti Invisibili Online', description: 'Chi cerca formaggi, vino o ortofrutta locali non trova il tuo brand: il sito è assente o datato.', keyword: 'vendita diretta agricola' },
      { icon: 'shopping-cart', title: 'Dipendenza dai Portali', description: 'Marketplace e GDO erodono margini. Senza e-commerce diretto, non hai controllo su prezzo e relazione col cliente.', keyword: 'ecommerce agricolo' },
      { icon: 'map-pin', title: 'Poche Visite in Azienda', description: 'Tour, degustazioni e agriturismo non sono raccontati bene. Chi viaggia non ti trova nelle ricerche locali.', keyword: 'visite in cantina sito' },
      { icon: 'shield', title: 'Non Comunichi Qualità e Certificazioni', description: 'BIO, DOC, IGP o filiera corta non vengono valorizzati: resti un produttore generico.', keyword: 'certificazioni prodotto agricolo' },
      { icon: 'truck', title: 'Logistica Non Chiara', description: 'Tempi di spedizione, corrieri refrigerati o ritiro in azienda non sono spiegati: i clienti esitano.', keyword: 'spedizioni prodotti freschi' },
      { icon: 'mail', title: 'Manca una Community', description: 'Nessuna newsletter, zero storytelling delle stagioni. I clienti comprano una volta e spariscono.', keyword: 'newsletter azienda agricola' }
    ],
    features: [
      { icon: 'store', title: 'E-commerce Diretto', description: 'Schede prodotto con ingredienti, origine, lotti e stock aggiornato. Pagamenti online e ritiro in azienda.', benefit: 'Margini sotto controllo e relazione diretta col cliente' },
      { icon: 'map', title: 'Visite e Degustazioni', description: 'Calendario per tour in cantina, raccolta in campo o weekend in agriturismo con prenotazione online.', benefit: 'Più persone fisicamente in azienda' },
      { icon: 'video', title: 'Storytelling del Territorio', description: 'Foto e video di campi, cantina e lavorazioni stagionali. Racconti brevi e autentici.', benefit: 'Fiducia e valore percepito più alto' },
      { icon: 'shield', title: 'Certificazioni in Evidenza', description: 'BIO, IGP, DOC, filiera corta e tracciabilità ben spiegate con badge e schede.', benefit: 'Prezzo giustificato e niente guerra al ribasso' },
      { icon: 'truck', title: 'Spedizioni e Ritiro', description: 'Opzioni chiare: refrigerato, standard, ritiro in azienda o consegna locale.', benefit: 'Meno domande e più carrelli completati' },
      { icon: 'mail', title: 'Newsletter Stagionale', description: 'Email automatiche su raccolti, nuovi prodotti, box degustazione e fiere.', benefit: 'Clienti che tornano a ogni stagione' },
      { icon: 'users', title: 'Sezione B2B', description: 'Area per ristoranti e botteghe con listino dedicato e richieste campione.', benefit: 'Canale business separato e più ordinato' },
      { icon: 'heart', title: 'Impatto e Sostenibilità', description: 'Dati su risparmio idrico, energia rinnovabile, benessere animale.', benefit: 'Valore differenziante per clienti attenti' }
    ],
    stats: [
      { value: '72%', label: 'dei consumatori preferisce prodotti locali quando disponibili', source: 'Nielsen', icon: 'map-pin' },
      { value: '58%', label: 'compra online prodotti alimentari almeno una volta al mese', source: 'Statista', icon: 'shopping-cart' },
      { value: '41%', label: 'aumenta la spesa quando conosce l\'origine', source: 'Internal data', icon: 'trending-up' },
      { value: '35%', label: 'prenotazioni visite generate da ricerche locali', source: 'Google Data', icon: 'search' }
    ],
    testimonials: [
      { quote: 'Con l\'e-commerce diretto spediamo ogni settimana box degustazione. I margini sono finalmente sotto controllo.', author: 'Luca', business: 'Azienda Agricola Terre Alte', location: 'Modena', rating: 5 },
      { quote: 'Le prenotazioni per le degustazioni sono esplose. Il calendario online ci fa organizzare i turni senza telefonate.', author: 'Chiara', business: 'Cantina Colline Reggiane', location: 'Reggio Emilia', rating: 5 }
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
      { icon: 'search', title: 'Invisibili su Google', description: 'Chi cerca "avvocato [città]" non ti trova. Perdi clienti potenziali a favore di studi con una migliore presenza SEO.', keyword: 'seo avvocati' },
      { icon: 'smartphone', title: 'Sito Vecchio e Lento', description: 'Un sito non responsive o lento danneggia l\'immagine di professionalità e competenza dello studio.', keyword: 'restyling sito studio legale' },
      { icon: 'users', title: 'Pochi Contatti dal Web', description: 'Il sito attuale è una vetrina statica che non genera richieste di consulenza o appuntamenti.', keyword: 'lead generation avvocati' },
      { icon: 'shield', title: 'Mancanza di Autorità', description: 'I potenziali clienti non percepiscono la specializzazione dello studio. Senza contenuti, sei solo un altro avvocato.', keyword: 'posizionamento avvocati' },
      { icon: 'clock', title: 'Gestione Appuntamenti Lenta', description: 'Segreteria occupata a gestire appuntamenti base. Manca un sistema di prenotazione prima consulenza.', keyword: 'gestione studio legale' },
      { icon: 'file-text', title: 'Documenti non Protetti', description: 'Manca un\'area riservata dove scambiare documenti sensibili in modo sicuro e conforme al GDPR.', keyword: 'area riservata legale' }
    ],
    features: [
      { icon: 'shield', title: 'Design Istituzionale', description: 'Grafica sobria, elegante e professionale che rispecchia i valori dello studio.', benefit: 'Immagine autorevole immediata' },
      { icon: 'file-text', title: 'Schede Aree di Pratica', description: 'Pagine dedicate per ogni specializzazione (civile, penale, lavoro) per posizionarsi su Google.', benefit: 'Clienti profilati per materia' },
      { icon: 'users', title: 'Profili Avvocati', description: 'Bio professionali con foto, CV e pubblicazioni per ogni membro del team.', benefit: 'Fiducia nel professionista' },
      { icon: 'book', title: 'Blog Giuridico', description: 'Sezione news e approfondimenti per dimostrare competenza e aggiornamento continuo.', benefit: 'Autorità e traffico organico' },
      { icon: 'lock', title: 'Area Riservata Clienti', description: 'Spazio sicuro per lo scambio di documenti, fatture e aggiornamenti sulle pratiche.', benefit: 'Sicurezza e trasparenza verso il cliente' },
      { icon: 'calendar', title: 'Booking Prima Consulenza', description: 'Calendario integrato per fissare il primo colloquio conoscitivo o telefonico.', benefit: 'Agenda più ordinata e lead immediati' },
      { icon: 'search', title: 'SEO Legale Specialistica', description: 'Ottimizzazione per parole chiave specifiche del settore e della zona geografica.', benefit: 'Visibilità dove conta davvero' },
      { icon: 'mail', title: 'Newsletter di Settore', description: 'Aggiornamenti normativi inviati ai clienti per rimanere il loro punto di riferimento.', benefit: 'Retention del cliente e passaparola' }
    ],
    stats: [
      { value: '74%', label: 'cerca un avvocato online', source: 'Clio Trends', icon: 'search' },
      { value: '58%', label: 'visita il sito web dello studio', source: 'Clio Trends', icon: 'users' },
      { value: '82%', label: 'considera recensioni nella scelta', source: 'Lawyer Marketing', icon: 'star' },
      { value: '60%', label: 'preferisce contatto via web form', source: 'Legal Trends', icon: 'mail' }
    ],
    testimonials: [
      { quote: 'Il nuovo sito ci ha posizionato come punto di riferimento per il diritto del lavoro in città.', author: 'Avv. Rossi', business: 'Studio Legale Rossi', location: 'Bologna', rating: 5 }
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
      { icon: 'calendar', title: 'Segreteria Intasata', description: 'Troppe chiamate per appuntamenti o informazioni base. Un sito chiaro filtra le richieste giuste.', keyword: 'gestione appuntamenti dentista' },
      { icon: 'star', title: 'Paura del Dentista', description: 'Senza foto e spiegazioni chiare, i nuovi pazienti esitano a prenotare per timore delle procedure.', keyword: 'comunicazione odontoiatrica' },
      { icon: 'search', title: 'Invisibili alle Ricerche Locali', description: 'Chi cerca "dentista [città]" trova solo grandi catene. Il tuo studio storico scompare dal web.', keyword: 'seo locale dentisti' },
      { icon: 'image', title: 'Mancanza di Prove Reali', description: 'I pazienti non vedono i risultati dei tuoi trattamenti. Senza casi reali, la scelta cade sul prezzo più basso.', keyword: 'casi clinici dentista' },
      { icon: 'smartphone', title: 'Sito non Mobile-First', description: 'L\'80% dei pazienti prenota dal cellulare. Se il sito è lento o difficile, cambiano studio.', keyword: 'sito mobile dentista' },
      { icon: 'shield', title: 'Credibilità in Dubbio', description: 'Un sito datato trasmette l\'idea di uno studio non all\'avanguardia tecnologicamente.', keyword: 'authority studio dentistico' }
    ],
    features: [
      { icon: 'smile', title: 'Presentazione Trattamenti', description: 'Pagine dettagliate per impianti, ortodonzia e igiene con FAQ specifiche.', benefit: 'Pazienti consapevoli e convinti' },
      { icon: 'calendar', title: 'Richiesta Appuntamento', description: 'Form semplice per richiedere visita, urgenza o igiene con selezione orario.', benefit: 'Agenda ottimizzata e segreteria libera' },
      { icon: 'image', title: 'Gallery Casi Clinici', description: 'Galleria fotografica di casi reali (prima/dopo) per mostrare l\'eccellenza clinica.', benefit: 'Prova concreta della qualità' },
      { icon: 'camera', title: 'Tour Virtuale Studio', description: 'Video o foto 360° degli ambienti per far sentire il paziente già a casa sua.', benefit: 'Riduce l\'ansia pre-visita' },
      { icon: 'users', title: 'Profili Team Medico', description: 'Schede dei medici con specializzazioni e percorsi formativi in evidenza.', benefit: 'Fiducia istantanea nello specialista' },
      { icon: 'search', title: 'SEO Sanitaria Locale', description: 'Posizionamento per termini chiave specifici ("impianti dentali [città]").', benefit: 'Lead pronti ad iniziare trattamenti' },
      { icon: 'star', title: 'Modulo Recensioni', description: 'Sistema per raccogliere e mostrare i feedback dei pazienti soddisfatti.', benefit: 'La miglior pubblicità possibile' },
      { icon: 'smartphone', title: 'WhatsApp Urgenze', description: 'Pulsante rapido per emergenze dentistiche, vitale per il servizio locale.', benefit: 'Acquisizione pazienti in emergenza' }
    ],
    stats: [
      { value: '88%', label: 'cerca info salute online', source: 'Pew Research', icon: 'search' },
      { value: '45%', label: 'prenoterebbe online se potesse', source: 'Accenture', icon: 'calendar' },
      { value: '76%', label: 'valuta il dentista online prima di prenotare', source: 'Google Health', icon: 'star' },
      { value: '3x', label: 'ROI di un sito professionale vs pubblicità tradizionale', source: 'Healthcare Marketing', icon: 'trending-up' }
    ],
    testimonials: [
      { quote: 'I pazienti arrivano già informati sui trattamenti. Risparmiamo tempo in poltrona.', author: 'Dr. Bianchi', business: 'Clinica Sorriso', location: 'Modena', rating: 5 }
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
      { icon: 'calendar', title: 'Gestione Corsi Caotica', description: 'Fogli Excel, WhatsApp e post-it per organizzare le lezioni. Overbooking, disdetta last minute e confusione.', keyword: 'gestione corsi palestra' },
      { icon: 'credit-card', title: 'Ritardi nei Pagamenti', description: 'Abbonamenti scaduti, solleciti manuali e incassi in contanti che rallentano il flusso di cassa.', keyword: 'pagamenti automatici palestra' },
      { icon: 'users', title: 'Alta Percentuale di Abbandono', description: 'I soci si iscrivono a gennaio e spariscono a marzo. Senza engagement digitale, non si crea abitudine.', keyword: 'fidelizzazione palestra' },
      { icon: 'search', title: 'Non Ti Trovano su Google', description: 'Chi cerca "palestra [città]" o "yoga vicino a me" trova la concorrenza. Manca SEO locale.', keyword: 'seo palestra' },
      { icon: 'smartphone', title: 'Assenza di Contatto Diretto', description: 'I membri non hanno un modo rapido per vedere i cambi orario o le nuove lezioni disponibili.', keyword: 'comunicazione fitness' },
      { icon: 'image', title: 'Immagine Datata', description: 'Le foto della palestra sono vecchie. I nuovi potenziali soci non vedono la qualità dell\'attrezzatura.', keyword: 'marketing palestre' }
    ],
    features: [
      { icon: 'calendar', title: 'Prenotazione Corsi Online', description: 'Calendario interattivo con disponibilità in tempo reale. I soci prenotano e disdicono in autonomia.', benefit: 'Zero overbooking e agenda sempre aggiornata' },
      { icon: 'credit-card', title: 'Gestione Abbonamenti', description: 'Pagamenti ricorrenti automatici, rinnovi e gestione scadenze senza lavoro manuale.', benefit: 'Flusso di cassa regolare e meno amministrazione' },
      { icon: 'lock', title: 'Area Riservata Soci', description: 'Schede allenamento digitali, diario dei progressi e contenuti video esclusivi.', benefit: 'Aumenta la retention e il valore per il socio' },
      { icon: 'users', title: 'Presentazione Personal Trainer', description: 'Profili dei coach con specializzazioni e possibilità di prenotare sessioni 1-to-1.', benefit: 'Upselling di servizi personalizzati' },
      { icon: 'trophy', title: 'Sfide e Gamification', description: 'Classifiche, badge per traguardi e sfide mensili tra soci per creare community.', benefit: 'Aumenta il senso di appartenenza e il divertimento' },
      { icon: 'shopping-bag', title: 'Shop Merchandising e Suppl.', description: 'Vendita online di abbigliamento, integratori e accessori brandizzati.', benefit: 'Fatturato extra senza gestire vendite fisiche' },
      { icon: 'star', title: 'Raccolta Feedback', description: 'Sistema automatico di recensioni post-corso per monitorare la qualità dei trainer.', benefit: 'Miglioramento continuo basato sui dati' },
      { icon: 'smartphone', title: 'App Web-based', description: 'Interfaccia ottimizzata per smartphone per gestire tutto durante l\'allenamento.', benefit: 'Esperienza utente moderna e veloce' }
    ],
    stats: [
      { value: '67%', label: 'cerca palestre online prima di iscriversi', source: 'IHRSA', icon: 'search' },
      { value: '30%', label: 'di abbandono entro i primi 3 mesi', source: 'Statista', icon: 'trending-down' },
      { value: '25%', label: 'aumento retention con app/community digitale', source: 'Club Industry', icon: 'heart' },
      { value: '82%', label: 'utilizza smartphone per tracciare allenamenti', source: 'Fitness Tech', icon: 'smartphone' }
    ],
    testimonials: [
      { quote: 'Da quando abbiamo il sistema di prenotazione online, la gestione dei corsi è diventata un gioco da ragazzi.', author: 'Marco', business: 'Fitness Club 360', location: 'Bologna', rating: 5 }
    ]
  },

  'architetti': {
    description: 'Siti web per architetti e studi di progettazione con portfolio progetti, blog tecnico e lead generation per commesse.',
    targetAudience: 'Architetti, studi di progettazione, interior designer e professionisti dell\'edilizia che vogliono mostrare i propri lavori.',
    hero: {
      title: 'Il Tuo Portfolio Architettonico Merita uno Spazio Dignitoso',
      subtitle: 'Sito web elegante e tecnico per mostrare progetti, pubblicare articoli e farti contattare da committenti qualificati.',
      cta: 'Mostra i Tuoi Progetti'
    },
    introSection: {
      title: 'La Prima Impressione è Quella che Conta',
      content: 'Un architetto vende visione, estetica e attenzione ai dettagli. Se il tuo sito non riflette questi valori, stai perdendo credibilità.'
    },
    painPoints: [
      { icon: 'image', title: 'Portfolio Disperso', description: 'I progetti sono su Instagram o PDF. Non c\'è una vetrina professionale che racconta la tua filosofia.', keyword: 'portfolio architetto online' },
      { icon: 'search', title: 'Non Sei Trovabile Localmente', description: 'Chi cerca "architetto ristrutturazione [città]" trova i competitor. Il sito non è ottimizzato SEO.', keyword: 'seo architetto' },
      { icon: 'file-text', title: 'Manca una Voce Autorevole', description: 'Non hai un blog dove dimostrare competenza tecnica e rimanere top-of-mind per i clienti.', keyword: 'content marketing architetti' },
      { icon: 'mail', title: 'Lead non Qualificati', description: 'Ricevi richieste generiche o per budget non compatibili. Manca una selezione all\'ingresso.', keyword: 'lead generation architetti' },
      { icon: 'smartphone', title: 'User Experience Scadente', description: 'I render bellissimi non caricano o si vedono male da mobile. Frustrazione del cliente.', keyword: 'web design architetti' },
      { icon: 'clock', title: 'Processi Comunicativi Lenti', description: 'Troppo tempo speso a spiegare il tuo metodo di lavoro a ogni nuovo potenziale cliente.', keyword: 'comunicazione studio architettura' }
    ],
    features: [
      { icon: 'grid', title: 'Portfolio Immersivo', description: 'Gallerie progetti con foto prima/dopo, planimetrie e descrizione del concept.', benefit: 'I lavori parlano per te' },
      { icon: 'book', title: 'Blog Tecnico e di Design', description: 'Articoli su materiali e tendenze per posizionarti come esperto di riferimento.', benefit: 'Autorità e traffico qualificato' },
      { icon: 'map-pin', title: 'Mappa Progetti', description: 'Visualizzazione geografica dei tuoi lavori in città. Prova sociale locale immediata.', benefit: 'Credibilità sul territorio' },
      { icon: 'file-text', title: 'Modulo Contatto Qualificato', description: 'Form che chiede metratura, budget e timeline per ricevere solo richieste serie.', benefit: 'Meno tempo sprecato' },
      { icon: 'award', title: 'Premi e Pubblicazioni', description: 'Sezione dedicata a riconoscimenti e stampa di settore per aumentare il prestigio.', benefit: 'Posizionamento premium' },
      { icon: 'video', title: 'Storytelling di Cantiere', description: 'Video-racconti dell\'evoluzione dei lavori, per mostrare il "dietro le quinte".', benefit: 'Fiducia nel processo realizzativo' },
      { icon: 'users', title: 'Area Collaboratori', description: 'Presentazione del team e dei partner tecnici (artigiani, fornitori).', benefit: 'Immagine di studio strutturato' },
      { icon: 'image', title: 'Render Interactive View', description: 'Integrazione di visualizzatori 3D o panoramiche per un\'esperienza coinvolgente.', benefit: 'Effetto WOW sul cliente' }
    ],
    stats: [
      { value: '81%', label: 'cerca online prima di contattare lo studio', source: 'Houzz', icon: 'search' },
      { value: '3x', label: 'probabilità di contatto con portfolio online', source: 'AIA', icon: 'trending-up' },
      { value: '65%', label: 'giudica la professionalità dal sito web', source: 'Stanley B&D', icon: 'star' },
      { value: '40%', label: 'di traffico arriva da ricerche locali specifiche', source: 'Google Data', icon: 'map-pin' }
    ],
    testimonials: [
      { quote: 'Il portfolio online ci ha fatto ottenere una commessa per una villa di lusso. Il cliente ci ha trovati su Google.', author: 'Arch. Verdi', business: 'Studio Verdi', location: 'Firenze', rating: 5 }
    ]
  },

  'hotel': {
    description: 'Siti web per hotel, B&B e strutture ricettive con booking engine integrato e gestione diretta delle prenotazioni.',
    targetAudience: 'Hotel, B&B, agriturismi e strutture ricettive che vogliono ridurre le commissioni delle OTA.',
    hero: {
      title: 'Riempi le Tue Camere Senza Commissioni Esterne',
      subtitle: 'Sito web con booking engine integrato, gallery professionale e strategia per aumentare le prenotazioni dirette.',
      cta: 'Disintermedia Ora'
    },
    introSection: {
      title: 'Ogni Camera Vuota è un Costo',
      content: 'Booking ed Expedia costano il 15-25%. Un sito proprietario ti permette di vendere direttamente e fidelizzare l\'ospite.'
    },
    painPoints: [
      { icon: 'percent', title: 'Commissioni OTA Altissime', description: 'Su una camera da 100€, perdi 20€ in commissioni. I portali mangiano i tuoi margini di profitto.', keyword: 'commissioni booking' },
      { icon: 'calendar', title: 'Rischio Overbooking', description: 'Gestire la disponibilità a mano su più portali causa errori costosi e stress per lo staff.', keyword: 'gestione camere hotel' },
      { icon: 'image', title: 'Foto che non Emozionano', description: 'Le foto sui portali sono vecchie o amatoriali. Non trasmettono l\'atmosfera della struttura.', keyword: 'fotografo hotel' },
      { icon: 'star', title: 'Recensioni non Gestite', description: 'Critiche su TripAdvisor ignorate danneggiano la reputazione. Ogni silenzio è una prenotazione persa.', keyword: 'reputation hotel' },
      { icon: 'smartphone', title: 'Esperienza Mobile Frustrante', description: 'Il 70% dei turisti prenota da cellulare. Se il sito è lento, passano alla concorrenza.', keyword: 'booking mobile hotel' },
      { icon: 'map-pin', title: 'Scarsa Valorizzazione Locale', description: 'Non racconti il territorio e le attività. L\'ospite non vede il valore aggiunto di sceglierti.', keyword: 'marketing territoriale' }
    ],
    features: [
      { icon: 'calendar', title: 'Booking Engine Diretto', description: 'Prenotazioni 24/7 con pagamento online e conferma immediata senza commissioni.', benefit: 'Risparmio immediato del 15-25%' },
      { icon: 'refresh-ccw', title: 'Sincronizzazione Automatica', description: 'Channel manager integrato per aggiornare prezzi e disponibilità su tutti i portali.', benefit: 'Zero overbooking e meno lavoro' },
      { icon: 'camera', title: 'Servizio Foto/Video HDR', description: 'Foto professionali che valorizzano camere, aree comuni e colazione.', benefit: 'Aumento conversioni del 40%' },
      { icon: 'gift', title: 'Gestione Offerte e Coupon', description: 'Crea pacchetti speciali e sconti per chi prenota direttamente dal tuo sito.', benefit: 'Più vendite nei periodi di bassa stagione' },
      { icon: 'globe', title: 'Sito Multilingua', description: 'Traduzioni professionali per intercettare il turismo straniero di alta fascia.', benefit: 'Accesso a mercati internazionali' },
      { icon: 'star', title: 'Widget Recensioni Verificate', description: 'Mostra i migliori feedback di Google e TripAdvisor direttamente sul sito.', benefit: 'Fiducia immediata nell\'ospite' },
      { icon: 'smartphone', title: 'Fast Check-in Online', description: 'Permetti agli ospiti di inviare i documenti prima dell\'arrivo per evitare code.', benefit: 'Migliore esperienza al check-in' },
      { icon: 'map', title: 'Guida Locale Digitale', description: 'Mappa interattiva con ristoranti, attrazioni e consigli dello staff.', benefit: 'L\'ospite si sente seguito e consigliato' }
    ],
    stats: [
      { value: '15-25%', label: 'commissioni medie dei portali OTA', source: 'HSMAI', icon: 'percent' },
      { value: '3x', label: 'ROI su booking engine proprietario', source: 'Kalibri', icon: 'trending-up' },
      { value: '76%', label: 'visita il sito ufficiale prima di prenotare', source: 'Google', icon: 'search' },
      { value: '4.8★', label: 'media necessaria per dominare la zona', source: 'TripAdvisor', icon: 'star' }
    ],
    testimonials: [
      { quote: 'Con il booking diretto abbiamo aumentato le prenotazioni del 35%. I margini sono finalmente tornati a noi.', author: 'Giulia', business: 'Hotel Bella Vista', location: 'Como', rating: 5 }
    ]
  },

  'negozi': {
    description: 'Siti web e e-commerce per negozi locali e boutique. Vetrina prodotti, SEO locale e vendita multicanale.',
    targetAudience: 'Commercianti, boutique e negozi fisici che vogliono vendere online e attirare clienti in negozio.',
    hero: {
      title: 'Porta la Tua Vetrina Oltre i Confini della Città',
      subtitle: 'Sito web con catalogo prodotti e e-commerce integrato. Fatti trovare dai clienti locali e vendi in tutta Italia.',
      cta: 'Vendi Online Ora'
    },
    introSection: {
      title: 'Il Negozio Fisico non Basta Più',
      content: 'I clienti cercano online prima di uscire di casa. Un sito professionale ti permette di essere presente nel momento della scelta.'
    },
    painPoints: [
      { icon: 'search', title: 'Invisibilità su Google', description: 'Chi cerca i tuoi prodotti a [città] trova solo Amazon o grandi catene. Il tuo negozio è ignorato.', keyword: 'seo locale negozi' },
      { icon: 'clock', title: 'Orari di Vendita Limitati', description: 'Il negozio chiude, le vendite si fermano. Perdi l\'opportunità di vendere la sera o la domenica.', keyword: 'vendita online h24' },
      { icon: 'users', title: 'Nessun Database Clienti', description: 'I clienti comprano e vanno via. Non hai modo di ricontattarli per nuovi arrivi o saldi.', keyword: 'fidelizzazione retail' },
      { icon: 'image', title: 'Catalogo non Consultabile', description: 'I clienti non sanno cosa hai in negozio finché non entrano. Barriera all\'ingresso altissima.', keyword: 'vetrina digitale' },
      { icon: 'package', title: 'Magazzino non Sincronizzato', description: 'Rischio di vendere online prodotti esauriti o viceversa. Gestione doppia e faticosa.', keyword: 'gestione stock' },
      { icon: 'credit-card', title: 'Poche Opzioni di Pagamento', description: 'Senza pagamenti digitali o rateali online, perdi le vendite più importanti.', keyword: 'checkout retail' }
    ],
    features: [
      { icon: 'store', title: 'Catalogo Prodotti Digitale', description: 'Tutti i tuoi articoli online con foto, taglie, colori e disponibilità reale.', benefit: 'Il negozio è sempre aperto' },
      { icon: 'shopping-cart', title: 'E-commerce Integrato', description: 'Carrello, checkout sicuro e gestione spedizioni facile anche per chi inizia.', benefit: 'Vendi in tutta Italia senza fatica' },
      { icon: 'map-pin', title: 'Click & Collect (Ritiro in Sede)', description: 'Il cliente compra online e ritira in negozio. Aumenta il traffico fisico nel locale.', benefit: 'Più vendite e più visite in negozio' },
      { icon: 'gift', title: 'Programma Fedeltà Digitale', description: 'Raccolta punti e sconti personalizzati per i clienti fedeli gestiti dal sito.', benefit: 'Clienti che tornano più spesso' },
      { icon: 'instagram', title: 'Social Shopping', description: 'Integrazione con Instagram e Facebook per vendere direttamente dai post.', benefit: 'Sfrutta la potenza dei social' },
      { icon: 'truck', title: 'Gestione Spedizioni Automatica', description: 'Stampa etichette e tracking ordini integrato con i principali corrieri.', benefit: 'Meno tempo speso in logistica' },
      { icon: 'search', title: 'SEO Locale Avanzata', description: 'Ottimizzazione per "negozio [prodotto] [città]" per battere la concorrenza.', benefit: 'Più clienti pronti a venire in negozio' },
      { icon: 'message-circle', title: 'Assistenza WhatsApp', description: 'Contatto diretto per consulenza taglie o info prodotti, come dal vivo.', benefit: 'Umanizza la vendita online' }
    ],
    stats: [
      { value: '81%', label: 'cerca online prima di visitare il negozio', source: 'Google', icon: 'search' },
      { value: '30%', label: 'di incremento vendite con Click & Collect', source: 'Forrester', icon: 'trending-up' },
      { value: '2x', label: 'valore cliente fidelizzato vs occasionale', source: 'HBR', icon: 'users' },
      { value: '60%', label: 'acquista da smartphone mentre è in giro', source: 'Statista', icon: 'smartphone' }
    ],
    testimonials: [
      { quote: 'L\'e-commerce ci ha salvato. Ora vendiamo anche fuori regione e i clienti locali usano il sito come catalogo.', author: 'Roberto', business: 'Boutique Elegance', location: 'Verona', rating: 5 }
    ]
  },

  'abbigliamento': {
    description: 'E-commerce specializzato per fashion brand e boutique di abbigliamento. Gestione taglie/colori e lookbook.',
    targetAudience: 'Proprietari di boutique, fashion designer e rivenditori di abbigliamento e accessori.',
    hero: {
      title: 'Vendi la Tua Moda in Tutta Italia',
      subtitle: 'E-commerce fashion con gestione varianti, guide taglie e integrazione Instagram. La tua boutique online di successo.',
      cta: 'Lancia il Tuo Brand'
    },
    introSection: {
      title: 'Il Fashion Vive di Immagini e Usabilità',
      content: 'Nel settore moda, l\'estetica è tutto. Il tuo e-commerce deve trasmettere lo stile del brand e rendere l\'acquisto semplice come un click.'
    },
    painPoints: [
      { icon: 'shirt', title: 'Resi Frequenti per Taglia Errata', description: 'Il 40% degli acquisti fashion viene reso. Senza guide taglie chiare, i profitti spariscono.', keyword: 'gestione resi moda' },
      { icon: 'instagram', title: 'Social non Collegati allo Shop', description: 'I clienti mettono like su Instagram ma non trovano il prodotto sul sito. Vendite perse.', keyword: 'instagram shopping fashion' },
      { icon: 'package', title: 'Catalogo Stagionale Complesso', description: 'Cambiare collezioni ogni 6 mesi è un lavoro immenso senza un sistema agile.', keyword: 'gestione catalogo fashion' },
      { icon: 'image', title: 'Foto che non Valorizzano', description: 'Senza zoom, video e foto su modella, il cliente non percepisce la qualità del tessuto.', keyword: 'fotografo moda' },
      { icon: 'search', title: 'Invisibilità tra i Big Brand', description: 'Difficile competere con Zalando o ASOS senza una strategia SEO di nicchia o locale.', keyword: 'seo moda' },
      { icon: 'clock', title: 'Lentezza Caricamento Immagini', description: 'Siti fashion pesanti caricano piano. Il cliente abbandona dopo 3 secondi di attesa.', keyword: 'velocità sito fashion' }
    ],
    features: [
      { icon: 'grid', title: 'Varianti Taglia/Colore Intuitive', description: 'Selettori chiari con disponibilità stock sincronizzata in tempo reale.', benefit: 'Esperienza d\'acquisto fluida' },
      { icon: 'ruler', title: 'Guida Taglie Intelligente', description: 'Tool che suggerisce la taglia corretta in base alle misure dell\'utente.', benefit: 'Riduzione resi del 30%' },
      { icon: 'instagram', title: 'Shoppable Instagram Feed', description: 'I tuoi post social diventano porte d\'accesso dirette ai prodotti sul sito.', benefit: 'Conversioni social immediate' },
      { icon: 'image', title: 'Lookbook e Video Prodotto', description: 'Gallerie emozionali e brevi video per mostrare il movimento dei capi.', benefit: 'Valore percepito più alto' },
      { icon: 'heart', title: 'Wishlist e "Completa il Look"', description: 'Suggerimenti di cross-selling per aumentare lo scontrino medio.', benefit: 'Più vendite per ogni ordine' },
      { icon: 'refresh-ccw', title: 'Portale Resi Automatizzato', description: 'Il cliente gestisce il reso in autonomia dal sito, riducendo le tue email.', benefit: 'Assistenza clienti più snella' },
      { icon: 'zap', title: 'Checkout in 2 Click', description: 'Pagamenti rapidi con Apple Pay, Google Pay e PayPal integrati.', benefit: 'Massima conversione da mobile' },
      { icon: 'search', title: 'SEO Fashion Verticale', description: 'Posizionamento per categorie specifiche ("abiti da sera [marca/stile]").', benefit: 'Traffico altamente qualificato' }
    ],
    stats: [
      { value: '55%', label: 'acquista moda esclusivamente da mobile', source: 'Statista', icon: 'smartphone' },
      { value: '40%', label: 'di resi medi nel settore fashion online', source: 'CNBC', icon: 'refresh-ccw' },
      { value: '3x', label: 'conversione superiore con video prodotto', source: 'Wyzowl', icon: 'video' },
      { value: '+45%', label: 'crescita vendite con social integration', source: 'Shopify', icon: 'instagram' }
    ],
    testimonials: [
      { quote: 'Le vendite da Instagram sono raddoppiate. Il sito è veloce e la gestione delle taglie ha ridotto drasticamente i resi.', author: 'Sofia', business: 'Chic Boutique', location: 'Firenze', rating: 5 }
    ]
  },

  'alimentari': {
    description: 'E-commerce per prodotti tipici, gastronomia e food & beverage. Gestione scadenze e spedizioni food-safe.',
    targetAudience: 'Produttori locali, gastronomie, cantine e rivenditori di eccellenze alimentari.',
    hero: {
      title: 'Spedisci il Gusto della Tua Terra in Ogni Casa',
      subtitle: 'E-commerce alimentare con gestione lotti, scadenze e spedizioni refrigerate. La tua bottega online aperta al mondo.',
      cta: 'Inizia a Vendere Food'
    },
    introSection: {
      title: 'Il Cibo si Compra con gli Occhi e con la Fiducia',
      content: 'Vendere alimentari online richiede tracciabilità, freschezza e una narrazione che faccia sentire il profumo del prodotto.'
    },
    painPoints: [
      { icon: 'calendar', title: 'Gestione Scadenze (FIFO)', description: 'Rischio di spedire prodotti prossimi alla scadenza senza un controllo automatico.', keyword: 'scadenze alimentari' },
      { icon: 'truck', title: 'Logistica Delicata', description: 'Spedire bottiglie rotte o prodotti freschi deteriorati distrugge la reputazione.', keyword: 'spedizioni food' },
      { icon: 'shield', title: 'Normative e Tracciabilità', description: 'Lotti, ingredienti, allergeni. La conformità legale è complessa e obbligatoria.', keyword: 'haccp ecommerce' },
      { icon: 'shopping-cart', title: 'Carrelli Abbandonati per Spese Spedizione', description: 'I costi di spedizione refrigerata sono alti e spaventano il cliente al checkout.', keyword: 'spedizioni refrigerate' },
      { icon: 'image', title: 'Difficoltà a Trasmettere Qualità', description: 'Senza una buona presentazione, un prodotto artigianale sembra industriale.', keyword: 'food photography' },
      { icon: 'repeat', title: 'Mancanza di Acquisti Ricorrenti', description: 'Il cibo è un prodotto a consumo. Senza reminder o abbonamenti, il cliente cambia.', keyword: 'fidelizzazione food' }
    ],
    features: [
      { icon: 'box', title: 'Gestione Lotti e Scadenze', description: 'Sistema che monitora lo stock in base alla data di produzione e scadenza.', benefit: 'Zero sprechi e massima sicurezza' },
      { icon: 'thermometer', title: 'Spedizione Refrigerata Integrata', description: 'Collegamento con corrieri specializzati per mantenere la catena del freddo.', benefit: 'Prodotti freschi garantiti all\'arrivo' },
      { icon: 'file-text', title: 'Schede Ingredienti e Allergeni', description: 'Informazioni complete e trasparenti conformi al regolamento UE.', benefit: 'Fiducia e sicurezza per l\'acquirente' },
      { icon: 'refresh-ccw', title: 'Abbonamenti "Box Ricorrente"', description: 'Permetti ai clienti di ricevere i tuoi prodotti ogni settimana o mese.', benefit: 'Entrate prevedibili e costanti' },
      { icon: 'video', title: 'Storytelling della Produzione', description: 'Video-ricette e racconti dal laboratorio o dai campi per mostrare il valore.', benefit: 'Valore percepito altissimo' },
      { icon: 'shopping-bag', title: 'Bundle e Cesti Regalo', description: 'Crea combinazioni di prodotti per festività o regali aziendali in un click.', benefit: 'Aumento del ticket medio' },
      { icon: 'map-pin', title: 'Local Delivery Automatizzato', description: 'Gestione consegne proprie per la tua città con fasce orarie selezionabili.', benefit: 'Servizio imbattibile nella tua zona' },
      { icon: 'award', title: 'Certificazioni in Evidenza', description: 'Badge BIO, DOP, IGP e certificati di qualità ben visibili in ogni scheda.', benefit: 'Giustifica il prezzo premium' }
    ],
    stats: [
      { value: '+40%', label: 'crescita annuale ecommerce alimentare', source: 'Netcomm', icon: 'trending-up' },
      { value: '72%', label: 'paga di più per prodotti di origine garantita', source: 'Nielsen', icon: 'shield' },
      { value: '68%', label: 'acquista cesti regalo food online a Natale', source: 'Statista', icon: 'gift' },
      { value: '1 su 3', label: 'compra regolarmente cibo online nel 2024', source: 'Osservatorio B2c', icon: 'shopping-cart' }
    ],
    testimonials: [
      { quote: 'Ora spediamo i nostri tortellini freschi in tutta Italia. Il sistema di gestione scadenze è vitale per noi.', author: 'Paolo', business: 'Gastronomia Tipica', location: 'Modena', rating: 5 }
    ]
  },

  'arredamento': {
    description: 'E-commerce per mobili e interior design. Configuratori 3D, gestione volumi e logistica pesante.',
    targetAudience: 'Produttori di mobili, negozi di arredamento e showroom di design.',
    hero: {
      title: 'Progetta e Vendi la Casa dei Sogni Online',
      subtitle: 'Shop per arredamento con configuratore 3D, calcolo spedizioni ingombranti e gallerie ambientate. Eleva il tuo showroom.',
      cta: 'Arreda il Web'
    },
    introSection: {
      title: 'L\'Acquisto di Mobili è un Processo Riflessivo',
      content: 'Il cliente ha bisogno di misure, materiali e ispirazione. Un e-commerce di successo abbatte i dubbi tecnici e accende l\'immaginazione.'
    },
    painPoints: [
      { icon: 'maximize', title: 'Paura dell\'Ingombro', description: 'Il cliente teme che il mobile non entri in casa o non passi dalla porta.', keyword: 'misure mobili online' },
      { icon: 'truck', title: 'Costi di Consegna e Montaggio', description: 'Prezzi di spedizione incerti per pacchi pesanti spaventano e bloccano l\'acquisto.', keyword: 'consegna mobili' },
      { icon: 'palette', title: 'Difficoltà a Scegliere Finiture', description: 'Senza vedere il legno o il tessuto dal vivo, l\'utente esita a concludere.', keyword: 'campionari arredamento' },
      { icon: 'image', title: 'Mancanza di Ambientazione', description: 'Mobili visti su sfondo bianco sembrano piatti e non aiutano a immaginare la casa.', keyword: 'interior design online' },
      { icon: 'search', title: 'Ricerca Solo Locale', description: 'Chi cerca mobili spesso guarda solo i negozi vicini. Perdi il mercato nazionale.', keyword: 'seo arredamento' },
      { icon: 'clock', title: 'Tempi di Produzione Lunghi', description: 'Non comunicare bene i tempi di attesa genera frustrazione e rimborsi.', keyword: 'lead time arredamento' }
    ],
    features: [
      { icon: 'sliders', title: 'Configuratore di Materiali 3D', description: 'Cambia tessuti, legni e colori e vedi l\'anteprima fotorealistica immediata.', benefit: 'Prodotto su misura digitale' },
      { icon: 'box', title: 'Calcolatore Spedizioni Volumetriche', description: 'Costo consegna calcolato al checkout basato sul peso e sul piano di casa.', benefit: 'Trasparenza totale sui costi' },
      { icon: 'image', title: 'Galleria "Shop the Look"', description: 'Foto di intere stanze arredate dove ogni elemento è cliccabile e acquistabile.', benefit: 'Aumento vendite correlate' },
      { icon: 'mail', title: 'Invio Campionari Fisici', description: 'Permetti al cliente di ordinare a casa campioni di tessuti o legni per 5€.', benefit: 'Conversione finale garantita' },
      { icon: 'ruler', title: 'Tool "Verifica Misure"', description: 'Guida interattiva e PDF stampabile per misurare spazi e porte correttamente.', benefit: 'Zero resi per errore misure' },
      { icon: 'users', title: 'Consulenza Interior Online', description: 'Pulsante per prenotare una chiamata video con un arredatore dello studio.', benefit: 'Servizio da showroom fisico' },
      { icon: 'file-text', title: 'Istruzioni e Schede Tecniche', description: 'Download istantaneo di manuali montaggio e schede materiali dettagliate.', benefit: 'Meno chiamate post-vendita' },
      { icon: 'award', title: 'Garanzia Trasporto Sicuro', description: 'Assicurazione kasko inclusa su ogni spedizione per danni da trasporto.', benefit: 'Tranquillità totale per il cliente' }
    ],
    stats: [
      { value: '60%', label: 'cerca mobili online prima di andare in showroom', source: 'Houzz', icon: 'search' },
      { value: '+25%', label: 'crescita annuale settore Home & Design online', source: 'Netcomm', icon: 'trending-up' },
      { value: '70%', label: 'ritiene fondamentale la visualizzazione in ambiente', source: 'IKEA Data', icon: 'image' },
      { value: '1.200€', label: 'valore medio carrello arredamento online', source: 'Casaleggio', icon: 'shopping-cart' }
    ],
    testimonials: [
      { quote: 'Il configuratore 3D ha abbattuto le barriere geografiche. Ora vendiamo le nostre cucine artigianali in tutta Italia.', author: 'Andrea', business: 'Showroom Design', location: 'Milano', rating: 5 }
    ]
  },

  'cosmetici': {
    description: 'E-commerce per beauty brand e skincare. Recensioni, routine personalizzate e analisi della pelle.',
    targetAudience: 'Produttori di cosmetici, estetiste con propria linea e rivenditori beauty.',
    hero: {
      title: 'Vendi Bellezza e Benessere con un\'Esperienza Digitale',
      subtitle: 'E-commerce beauty con routine guidate, recensioni con foto e analisi della pelle. Trasforma i visitatori in fan.',
      cta: 'Crea il Tuo Beauty Shop'
    },
    introSection: {
      title: 'La Bellezza è un Rituale Quotidiano',
      content: 'Il tuo shop deve essere la guida di bellezza del cliente, non solo un catalogo di flaconi. Crea percorsi di cura personalizzati.'
    },
    painPoints: [
      { icon: 'help-circle', title: 'Incertezza sulla Scelta', description: 'Il cliente non sa se il prodotto è adatto al suo tipo di pelle o capelli.', keyword: 'consulenza skincare' },
      { icon: 'shield', title: 'Paura di Ingredienti Dannosi', description: 'Mancanza di trasparenza su INCI e allergeni blocca l\'acquisto consapevole.', keyword: 'inci prodotti online' },
      { icon: 'repeat', title: 'Bassa Frequenza di Riacquisto', description: 'I prodotti finiscono ma il cliente si dimentica di ricomprarli da te.', keyword: 'fidelizzazione beauty' },
      { icon: 'star', title: 'Mancanza di Prova Sociale', description: 'Senza vedere i risultati su altre persone reali, la promessa sembra falsa.', keyword: 'recensioni beauty' },
      { icon: 'smartphone', title: 'Checkout Complicato', description: 'Molti acquisti beauty sono d\'impulso. Se il checkout è lento, l\'impulso passa.', keyword: 'fast checkout' },
      { icon: 'package', title: 'Campioncini non Valorizzati', description: 'Non offrire prove omaggio mirate riduce le probabilità di upselling futuro.', keyword: 'sampling online' }
    ],
    features: [
      { icon: 'search', title: 'Quiz Routine Personalizzata', description: 'Analisi digitale guidata che costruisce il set di prodotti ideale per l\'utente.', benefit: 'Aumento scontrino medio del 50%' },
      { icon: 'star', title: 'Recensioni con Foto e Tipo Pelle', description: 'Feedback che mostrano il "prima/dopo" e specificano le caratteristiche dell\'utente.', benefit: 'Social proof imbattibile' },
      { icon: 'refresh-ccw', title: 'Abbonamento "Mai Senza"', description: 'Sconto fisso per chi riceve il prodotto ogni 1, 2 o 3 mesi automaticamente.', benefit: 'Fatturato ricorrente garantito' },
      { icon: 'file-text', title: 'Dizionario INCI Trasparente', description: 'Spiegazione semplice di ogni ingrediente e dei suoi benefici reali.', benefit: 'Percezione di brand etico e serio' },
      { icon: 'gift', title: 'Scelta Campioncini al Checkout', description: 'Il cliente sceglie quali omaggi provare in base ai suoi interessi futuri.', benefit: 'Marketing mirato su nuovi lanci' },
      { icon: 'video', title: 'Video Tutorial e Routine', description: 'Contenuti che mostrano come applicare i prodotti per massimizzare i risultati.', benefit: 'Clienti più soddisfatti e fedeli' },
      { icon: 'zap', title: 'Integrazione con App Mobile', description: 'Notifiche push quando è ora di applicare la crema o quando sta per finire.', benefit: 'Presenza costante nella vita del cliente' },
      { icon: 'award', title: 'Badge Benefici (Vegan, Bio, Cruelty Free)', description: 'Icone chiare per evidenziare i valori del prodotto immediatamente.', benefit: 'Conversione immediata per target attenti' }
    ],
    stats: [
      { value: '+35%', label: 'crescita vendite online cosmetica', source: 'Cosmetica Italia', icon: 'trending-up' },
      { value: '70%', label: 'legge recensioni prima di acquistare beauty', source: 'BrightLocal', icon: 'star' },
      { value: '45%', label: 'di conversioni in più con quiz personalizzato', source: 'L\'Oreal Data', icon: 'search' },
      { value: '1 su 2', label: 'acquista regolarmente da mobile', source: 'Statista', icon: 'smartphone' }
    ],
    testimonials: [
      { quote: 'Il quiz sulla pelle ha cambiato tutto. Le clienti comprano set completi invece di singoli prodotti.', author: 'Elena', business: 'SkinCare Lab', location: 'Roma', rating: 5 }
    ]
  },

  'elettronica': {
    description: 'E-commerce per tecnologia, hardware e gadget. Schede tecniche API-driven e comparatori di prezzo.',
    targetAudience: 'Rivenditori di informatica, centri riparazione e distributori tech.',
    hero: {
      title: 'Vendi la Tecnologia con la Migliore Tecnologia',
      subtitle: 'Shop tech con filtri parametrici, sincronizzazione listini e gestione garanzie. Supera i giganti con l\'usabilità.',
      cta: 'Accendi il Tuo Shop'
    },
    introSection: {
      title: 'Nel Tech la Specificità è Potere',
      content: 'Chi compra elettronica cerca specifiche. Il tuo sito deve essere un database veloce e preciso dove trovare la soluzione giusta al giusto prezzo.'
    },
    painPoints: [
      { icon: 'database', title: 'Listini che Cambiano Ogni Ora', description: 'Prezzi e stock dei distributori variano continuamente. Gestione manuale impossibile.', keyword: 'gestione listini tech' },
      { icon: 'filter', title: 'Filtri di Ricerca Scarsi', description: 'Il cliente non trova il prodotto per CPU, RAM o pollici. Abbandono immediato.', keyword: 'filtri parametrici' },
      { icon: 'search', title: 'Concorrenza di Prezzo Estrema', description: 'Lotta al centesimo con Amazon e eBay. Serve valore aggiunto o servizi extra.', keyword: 'marketing elettronica' },
      { icon: 'shield', title: 'Dubbi sulla Garanzia', description: 'I clienti temono problemi con l\'assistenza post-vendita su prodotti costosi.', keyword: 'garanzia elettronica' },
      { icon: 'help-circle', title: 'Resi per Incompatibilità', description: 'Il cliente compra un pezzo che non va bene per il suo PC. Perdita di tempo e soldi.', keyword: 'compatibilità tech' },
      { icon: 'alert-triangle', title: 'Rischio Truffe e Frodi', description: 'Il settore tech è il più colpito da frodi nei pagamenti. Serve massima sicurezza.', keyword: 'sicurezza ecommerce' }
    ],
    features: [
      { icon: 'refresh-ccw', title: 'Sincronizzazione API Fornitori', description: 'Importazione automatica di prezzi e stock dai principali distributori (Esprinet, Computer Gross, etc.).', benefit: 'Catalogo sempre aggiornato 24/7' },
      { icon: 'sliders', title: 'Filtri Parametrici Avanzati', description: 'Ricerca granulare per ogni singola specifica tecnica del prodotto.', benefit: 'Il cliente trova l\'esatto modello in 3 click' },
      { icon: 'shield', title: 'Estensioni Garanzia Online', description: 'Vendita di pacchetti assicurativi e assistenza aggiuntiva direttamente nel carrello.', benefit: 'Aumento margini su prodotti low-margin' },
      { icon: 'tool', title: 'Check Compatibilità Automatico', description: 'Sistema che avvisa se due componenti nel carrello non funzionano insieme.', benefit: 'Resi ridotti a zero' },
      { icon: 'zap', title: 'Schede Prodotto Rich Content', description: 'Importazione automatica di video, manuali e foto HD tramite Icecat o simili.', benefit: 'Contenuti professionali senza fatica' },
      { icon: 'repeat', title: 'Programma "Trade-in" (Rientro Usato)', description: 'Valutazione immediata dell\'usato del cliente per l\'acquisto del nuovo.', benefit: 'Incentivo fortissimo all\'acquisto' },
      { icon: 'lock', title: 'Pagamenti Protetti 3D Secure', description: 'Massimi standard di sicurezza contro le frodi e per la tutela dell\'esercente.', benefit: 'Business sicuro e protetto' },
      { icon: 'truck', title: 'Tracking Spedizione Real-time', description: 'Integrazione diretta con corrieri per mostrare l\'esatta posizione del pacco.', benefit: 'Meno ansia e meno chiamate assistenza' }
    ],
    stats: [
      { value: '40%', label: 'degli acquisti tech avviene online in Italia', source: 'Polimi', icon: 'trending-up' },
      { value: '85%', label: 'guarda video recensioni prima di decidere', source: 'Google', icon: 'video' },
      { value: '1,5%', label: 'margine medio se non offri servizi extra', source: 'Gartner', icon: 'percent' },
      { value: '60%', label: 'preferisce comprare da esperti di settore', source: 'Trustpilot', icon: 'star' }
    ],
    testimonials: [
      { quote: 'Grazie alla sincronizzazione con i distributori abbiamo 10.000 prodotti sempre aggiornati. Impossibile da fare a mano.', author: 'Luca', business: 'Tech Master', location: 'Brescia', rating: 5 }
    ]
  },

  'gioielli': {
    description: 'E-commerce luxury per gioiellerie e artigiani orefici. Gallery macro e certificati digitali.',
    targetAudience: 'Orafi, gioiellieri e brand di accessori di lusso che vogliono una vetrina online d\'eccellenza.',
    hero: {
      title: 'Il Lusso Italiano, in un Click Splendente',
      subtitle: 'E-commerce per gioielli con immagini macro, certificati di autenticità e packaging esperienziale. Valore eterno.',
      cta: 'Esponi i Tuoi Gioielli'
    },
    introSection: {
      title: 'L\'Oro e le Pietre si Vendono con la Fiducia',
      content: 'Comprare un gioiello online è un atto di fede. Il tuo sito deve essere impeccabile, sicuro e capace di trasmettere l\'emozione di un oggetto unico.'
    },
    painPoints: [
      { icon: 'camera', title: 'Foto che non Brillano', description: 'Gioielli fotografati male sembrano bigiotteria. Manca la resa del taglio e della luce.', keyword: 'still life gioielli' },
      { icon: 'shield', title: 'Percezione di Insicurezza', description: 'Il cliente ha paura di ricevere un falso o che il pacco venga rubato.', keyword: 'sicurezza gioielli online' },
      { icon: 'maximize', title: 'Incertezza sulle Dimensioni', description: 'Non capire la grandezza reale di un anello o di un ciondolo frena l\'acquisto.', keyword: 'misure anelli' },
      { icon: 'gift', title: 'Mancanza di Packaging Dedicato', description: 'Il cliente non vede come arriverà il regalo. L\'unboxing nel lusso è fondamentale.', keyword: 'confezione regalo lusso' },
      { icon: 'edit', title: 'Richieste di Personalizzazione', description: 'I clienti vogliono incidere date o nomi ma il sito non lo permette facilmente.', keyword: 'incisioni online' },
      { icon: 'search', title: 'Ricerca Solo per Brand Famosi', description: 'Piccoli artigiani sono schiacciati dai grandi brand. Serve SEO di nicchia su materiali e pietre.', keyword: 'seo gioielleria' }
    ],
    features: [
      { icon: 'zoom-in', title: 'Zoom Macro Fotorealistico', description: 'Visualizzazione di ogni minima sfaccettatura della pietra e dettaglio del metallo.', benefit: 'Trasparenza totale sulla qualità' },
      { icon: 'certificate', title: 'Certificato Autenticità Digitale', description: 'Documento PDF protetto da blockchain o firma digitale incluso nell\'ordine.', benefit: 'Valore legale e fiducia estrema' },
      { icon: 'ruler', title: 'Misuratore Anelli Virtuale', description: 'Tool interattivo per trovare la misura perfetta usando una carta di credito o un anello esistente.', benefit: 'Zero errori di misura' },
      { icon: 'box', title: 'Anteprima Packaging Luxury', description: 'Video o foto che mostrano l\'esperienza di apertura del pacco e la confezione regalo.', benefit: 'Aumento vendite "gift"' },
      { icon: 'edit', title: 'Configuratore Incisioni 3D', description: 'Scrivi il testo, scegli il font e vedi l\'anteprima reale sul gioiello.', benefit: 'Prodotto unico e non resoabile' },
      { icon: 'truck', title: 'Spedizione Assicurata Inclusa', description: 'Gestione logistica con corrieri portavalori e assicurazione totale sul furto.', benefit: 'Tranquillità per chi vende e chi compra' },
      { icon: 'video', title: 'Video Indossato (Lifestyle)', description: 'Brevi clip che mostrano il gioiello indossato per capirne proporzioni e luce.', benefit: 'Umanizza il prodotto e aiuta la scelta' },
      { icon: 'lock', title: 'Pagamento Rateale "Luxury"', description: 'Integrazione con sistemi tipo Soisy o Klarna per acquisti importanti in rate leggere.', benefit: 'Aumento vendite prodotti high-ticket' }
    ],
    stats: [
      { value: '3x', label: 'scontrino medio superiore al retail generico', source: 'McKinsey', icon: 'trending-up' },
      { value: '80%', label: 'degli acquirenti lusso è influenzato dal digitale', source: 'Bain', icon: 'smartphone' },
      { value: '45%', label: 'crescita annua vendite anelli online', source: 'The Knot', icon: 'star' },
      { value: '90%', label: 'vuole garanzie scritte prima del pagamento', source: 'Altagamma', icon: 'shield' }
    ],
    testimonials: [
      { quote: 'Il sistema di zoom macro ha permesso ai clienti di fidarsi della qualità delle nostre pietre. Vendiamo pezzi da 2000€ con semplicità.', author: 'Maria', business: 'Oreficeria d\'Arte', location: 'Vicenza', rating: 5 }
    ]
  },

  'sport': {
    description: 'E-commerce per articoli sportivi e attrezzatura tecnica. Guide all\'acquisto e community.',
    targetAudience: 'Negozi di sport, brand tecnici e distributori di attrezzatura sportiva.',
    hero: {
      title: 'Equipaggia le Passioni di Ogni Atleta',
      subtitle: 'E-commerce sportivo con guide tecniche, filtri per disciplina e gestione taglie specifiche. Performance al primo posto.',
      cta: 'Scendi in Campo Online'
    },
    introSection: {
      title: 'Lo Sportivo Cerca la Performance',
      content: 'Chi fa sport non compra un oggetto, compra un risultato. Il tuo shop deve spiegare come l\'attrezzatura migliora le prestazioni.'
    },
    painPoints: [
      { icon: 'help-circle', title: 'Difficoltà nella Scelta Tecnica', description: 'Quale racchetta? Quale scarpa per il mio peso? Manca la consulenza del commesso.', keyword: 'scelta attrezzatura sport' },
      { icon: 'ruler', title: 'Taglie Tecniche Diverse', description: 'Ogni brand sportivo veste diversamente. Il rischio di sbagliare è altissimo.', keyword: 'guida taglie sport' },
      { icon: 'search', title: 'Schiacciati dai Grandi Store', description: 'Decathlon e Amazon dominano sui prezzi. Serve specializzazione e competenza.', keyword: 'marketing sportivo' },
      { icon: 'users', title: 'Mancanza di Community', description: 'Lo sport è sociale. Un sito freddo non crea legame con l\'atleta locale.', keyword: 'community fitness' },
      { icon: 'video', title: 'Prodotti che vanno spiegati', description: 'Attrezzi complessi o integratori richiedono istruzioni d\'uso chiare.', keyword: 'tutorial sport' },
      { icon: 'alert-triangle', title: 'Gestione Resi Costosa', description: 'Scarpe provate e sporcate rese come nuove. Problemi di igiene e costi.', keyword: 'resi sport' }
    ],
    features: [
      { icon: 'search', title: 'Finder Tecnico Guidato', description: 'Serie di domande che portano al prodotto perfetto per il livello dell\'utente.', benefit: 'Conversione del 40% superiore' },
      { icon: 'ruler', title: 'Comparatore Taglie Cross-Brand', description: '"Se porti Nike 42, di questa marca ti serve il 42.5".', benefit: 'Resi ridotti drasticamente' },
      { icon: 'book', title: 'Blog e Guide Tecniche', description: 'Articoli su come allenarsi o come mantenere l\'attrezzatura.', benefit: 'SEO e fidelizzazione' },
      { icon: 'video', title: 'Recensioni Video Atleti', description: 'Testimonianze reali di chi usa il prodotto sul campo.', benefit: 'Credibilità imbattibile' },
      { icon: 'refresh-ccw', title: 'Programma "Riuso e Valutazione"', description: 'Possibilità di rendere l\'usato per l\'acquisto del nuovo modello.', benefit: 'Sostenibilità e fidelizzazione' },
      { icon: 'map-pin', title: 'Local Event Integration', description: 'Promozione di gare o eventi locali dove lo studio sarà presente.', benefit: 'Legame col territorio' },
      { icon: 'users', title: 'Area Team/Club', description: 'Listini riservati per società sportive e squadre locali.', benefit: 'Ordini bulk ricorrenti' },
      { icon: 'zap', title: 'Filtro per Livello Atleta', description: 'Da principiante a pro, i prodotti sono filtrati per capacità reale.', benefit: 'Il cliente non sbaglia acquisto' }
    ],
    stats: [
      { value: '65%', label: 'cerca recensioni tecniche prima dell\'acquisto', source: 'Nielsen', icon: 'search' },
      { value: '+30%', label: 'crescita annua ecommerce sportivo', source: 'Netcomm', icon: 'trending-up' },
      { value: '1 su 2', label: 'cambia brand se la guida taglie è assente', source: 'Statista', icon: 'ruler' },
      { value: '80%', label: 'degli sportivi usa YouTube per scegliere attrezzi', source: 'Google', icon: 'video' }
    ],
    testimonials: [
      { quote: 'Il finder tecnico per le scarpe da running ha ridotto i resi del 50%. I clienti sono entusiasti dei consigli.', author: 'Davide', business: 'Runner World', location: 'Bologna', rating: 5 }
    ]
  },

  'libri': {
    description: 'E-commerce per librerie ed editori. Anteprime, recensioni editoriali e gestione cataloghi massivi.',
    targetAudience: 'Librerie indipendenti, case editrici e autori che vogliono vendere direttamente.',
    hero: {
      title: 'La Tua Libreria, Senza Confini e Senza Algoritmi Freddi',
      subtitle: 'E-commerce per libri con anteprime sfogliabili, consigli del libraio e gestione catalogo veloce. Coltiva i tuoi lettori.',
      cta: 'Porta la Cultura Online'
    },
    introSection: {
      title: 'Leggere è un Piacere, Comprare Deve Esserlo Altrettanto',
      content: 'In un mondo dominato da Amazon, la libreria indipendente vince con la cura, la selezione e il rapporto umano digitale.'
    },
    painPoints: [
      { icon: 'search', title: 'Concorrenza Impossibile sui Prezzi', description: 'Amazon offre sconti che tu non puoi permetterti. Serve altro valore.', keyword: 'marketing librerie' },
      { icon: 'book', title: 'Gestione Catalogo Immensa', description: 'Migliaia di titoli, edizioni diverse, disponibilità che variano. Caos totale.', keyword: 'gestione catalogo libri' },
      { icon: 'users', title: 'Perdita del Rapporto col Lettore', description: 'Online sembra tutto uguale. Manca il consiglio del libraio di fiducia.', keyword: 'fidelizzazione lettori' },
      { icon: 'clock', title: 'Tempi di Consegna Percepiti', description: 'Il cliente vuole il libro domani. Se non sei veloce, compra altrove.', keyword: 'logistica editoria' },
      { icon: 'image', title: 'Schede Prodotto Fredde', description: 'Solo copertina e trama. Manca il "feeling" del libro tra le mani.', keyword: 'web design libreria' },
      { icon: 'mail', title: 'Poca Comunicazione Post-Vendita', description: 'Il lettore finisce il libro e tu non gli suggerisci il prossimo. Cliente perso.', keyword: 'email marketing libri' }
    ],
    features: [
      { icon: 'book-open', title: 'Anteprima Capitoli Online', description: 'Widget per sfogliare le prime 10 pagine del libro direttamente nel browser.', benefit: 'Riduce l\'incertezza e invita alla lettura' },
      { icon: 'refresh-ccw', title: 'Sincronizzazione Arianna/Fastbook', description: 'Integrazione automatica con i cataloghi della distribuzione editoriale nazionale.', benefit: 'Catalogo infinito senza data entry' },
      { icon: 'compass', title: 'I Consigli del Libraio', description: 'Sezione "Scelti per te" scritta da persone, non da un algoritmo freddo.', benefit: 'Unicità e valore umano' },
      { icon: 'heart', title: 'Wishlist "Lista dei Desideri"', description: 'I lettori salvano i libri per il futuro o per condividerli come regalo.', benefit: 'Marketing passivo che genera vendite' },
      { icon: 'users', title: 'Book Club e Forum Integrato', description: 'Spazio per discutere dei libri acquistati e creare community locale.', benefit: 'Fidelizzazione estrema' },
      { icon: 'gift', title: 'Confezione Regalo con Dedica', description: 'Possibilità di aggiungere una dedica scritta a mano e pacchetto personalizzato.', benefit: 'Servizio premium per regali' },
      { icon: 'zap', title: 'Ricerca Fulminea per Titolo/ISBN', description: 'Motore di ricerca ottimizzato per trovare il libro esatto in millisecondi.', benefit: 'Usabilità superiore ad Amazon' },
      { icon: 'mail', title: 'Newsletter Curate per Genere', description: 'Invio automatico di novità basate sugli acquisti passati (es. solo Gialli).', benefit: 'Ritorno del cliente garantito' }
    ],
    stats: [
      { value: '40%', label: 'dei lettori scopre libri su siti specializzati', source: 'Codex', icon: 'search' },
      { value: '+20%', label: 'crescita librerie indipendenti online 2024', source: 'AIE', icon: 'trending-up' },
      { value: '3x', label: 'conversione se è presente un\'anteprima testo', source: 'Google Books', icon: 'book-open' },
      { value: '75%', label: 'preferisce comprare da librerie che offrono consigli', source: 'Statista', icon: 'heart' }
    ],
    testimonials: [
      { quote: 'I nostri lettori apprezzano la selezione curata. Il sito riflette l\'anima della nostra libreria fisica.', author: 'Laura', business: 'Libreria del Centro', location: 'Torino', rating: 5 }
    ]
  }
};

import { getNicheConfig } from './niches-config';
import { getNicheLabelForPhrase } from '@/lib/niche-labels';

export const getNicheContent = (slug: string): NicheContent | undefined => {
  const content = nichesContent[slug];
  if (content) return content;

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
      { icon: 'search', title: 'Visibilità Limitata', description: 'I clienti ti cercano online ma non ti trovano.', keyword: `seo ${config.slug}` },
      { icon: 'users', title: 'Concorrenza', description: 'I tuoi competitor sono già online e stanno acquisendo quote di mercato.', keyword: 'competitor online' },
      { icon: 'smartphone', title: 'Esperienza Mobile', description: 'Senza un sito ottimizzato per smartphone, perdi la maggior parte dei contatti.', keyword: 'mobile friendly' },
      { icon: 'shield', title: 'Mancanza di Fiducia', description: 'Un sito datato o assente non trasmette la professionalità che meriti.', keyword: 'trust signals' },
      { icon: 'clock', title: 'Tempo Sprecato', description: 'Passi ore a gestire richieste che potrebbero essere automatizzate online.', keyword: 'automazione' },
      { icon: 'image', title: 'Immagine non Curata', description: 'I tuoi lavori o prodotti non hanno la vetrina che meritano.', keyword: 'brand identity' }
    ],
    features: [
      { icon: 'globe', title: 'Sito Web Professionale', description: 'Design moderno e responsive ottimizzato per il tuo settore.', benefit: 'Immagine professionale' },
      { icon: 'search', title: 'SEO Locale', description: 'Posizionamento su Google per farti trovare nella tua città.', benefit: 'Più clienti locali' },
      { icon: 'smartphone', title: 'Mobile First', description: 'Esperienza perfetta su ogni dispositivo per massimizzare i contatti.', benefit: 'Zero perdite da mobile' },
      { icon: 'zap', title: 'Velocità Caricamento', description: 'Sito ultra-veloce per ridurre l\'abbandono dei visitatori.', benefit: 'Miglior ranking e conversioni' },
      { icon: 'shield', title: 'Sicurezza Garantita', description: 'Sito protetto, backup automatici e conformità GDPR nativa.', benefit: 'Tranquillità totale' },
      { icon: 'message-circle', title: 'WhatsApp Integration', description: 'Contatto diretto con un click per facilitare le richieste info.', benefit: 'Più contatti immediati' },
      { icon: 'bar-chart', title: 'Analytics Monitoraggio', description: 'Dati reali su chi visita il sito e cosa cerca, per migliorare sempre.', benefit: 'Decisioni basate sui dati' },
      { icon: 'check-circle', title: 'Garanzia Soddisfazione', description: 'Supporto diretto e assistenza continua post-lancio.', benefit: 'Partner di fiducia' }
    ],
    stats: [
      { value: '81%', label: 'cerca online prima di ogni acquisto o servizio', source: 'Google', icon: 'search' },
      { value: '3x', label: 'ritorno investimento con strategia digitale corretta', source: 'Netcomm', icon: 'trending-up' },
      { value: '55%', label: 'degli utenti abbandona siti lenti oltre 3 sec', source: 'HubSpot', icon: 'clock' },
      { value: '70%', label: 'giudica la serietà di un business dal sito', source: 'Stanford', icon: 'star' }
    ],
    testimonials: []
  };
};
