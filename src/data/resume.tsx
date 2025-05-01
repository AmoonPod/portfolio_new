import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manuel De Ceglie",
  initials: "MDC",
  url: "https://manueldeceglie.it", // Sostituisci con il tuo URL reale
  location: "Castelfranco Emilia, MO",
  locationLink: "https://www.google.com/maps/place/castelfranco-emilia",
  description:
    " Aiuto aziende e attività di Modena a ottenere risultati online con siti web efficaci, software gestionali personalizzati e integrazioni AI.",
  summary:
    "Appassionato di informatica da sempre, ho trasformato questo interesse in un lavoro che mi permette di aiutare le persone a realizzare le proprie idee. Dopo aver lavorato su diversi tipi di progetti, ho scelto di dedicare parte del mio tempo e delle mie competenze alle attività locali, principalmente nel territorio di Modena e provincia (incluse aree come Vignola, Castelfranco Emilia, Sassuolo). Offro soluzioni digitali personalizzate: siti web moderni ed efficaci, gestionali su misura, applicazioni mobili intuitive e software specifici per rispondere alle tue esigenze. Il mio obiettivo è fornire strumenti efficaci e un supporto professionale per aiutarti a raggiungere i tuoi obiettivi di business, operando con base a Castelfranco Emilia. Se hai un progetto in mente, contattami per discuterne insieme.",
  avatarUrl: "/manuel-de-ceglie-sviluppatore-web-modena.jpeg", // Sostituisci con il tuo avatar reale
  skills: [
    "Sviluppo Software",
    "Sviluppo App Mobile",
    "Sviluppo Siti Web",
    "Sviluppo Gestionali",
    "Sviluppo Applicazioni Desktop e Web",
    "AI",
    "Framer",
    "SEO",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" }, // Se hai un blog
  ],
  contact: {
    email: "amoonpod@gmail.com", // Sostituisci con la tua email
    tel: "+39 3462136256", // Sostituisci con il tuo numero di telefono
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmoonPod", // Sostituisci con il tuo URL GitHub
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manuel-de-ceglie/", // Sostituisci con il tuo URL LinkedIn
        icon: Icons.linkedin,
        navbar: true,
      },
      // Aggiungi o rimuovi altri social media a seconda delle tue esigenze
    },
  },
  work: [
    {
      company: "",
      href: "",
      badges: ["Flutter", "Dart", "Firebase"],
      location: "Da remoto",
      title: "Sviluppatore software",
      logoUrl: "/ewo.png",
      start: "Gen 2021",
      end: "Giu 2021",
      description:
        "Sviluppo di applicazioni mobile e web per la gestione aziendale.",
    },
  ],
  education: [
    {
      school: "IIS Primo Levi di Vignola",
      href: "https://www.istitutolevi.edu.it/",
      degree: "Diploma di Perito Informatico",
      logoUrl: "/logo-levi.png",
      start: "2017",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "CRM Aziendale",
      href: "",
      dates: "Ago 2022 - Oggi",
      active: true,
      description:
        "Ho collaborato nella realizzazione di un CRM aziendale per la gestione dei clienti e delle vendite.",
      altText: "Screenshot del CRM Aziendale sviluppato con Flutter",
      technologies: [
        "Flutter",
        "Dart",
        "PostgreSQL",
        "Prisma",
        "Firebase",
        "Serverpod",
      ],
      links: [
        {
          type: "Web App",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/crm-aziendale-sviluppo-flutter.jpg",
      video: "",
    },
    {
      title: "Sito Web di Asset Plan",
      href: "https://www.assetplan.co.uk/",
      dates: "2023",
      active: true,
      description:
        "Ho collaborato nella realizzazione del sito web vetrina internazionale per un'azienda con sede nel Regno Unito, specializzata nella gestione di asset e beni strutturali.",
      altText: "Homepage del sito web realizzato per Asset Plan (Framer)",
      technologies: ["Framer", "React"],
      links: [
        {
          type: "Sito Web",
          href: "https://www.assetplan.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sito-web-asset-plan-framer.jpg",
      video: "",
    },
    {
      title: "Sito Web di Pure Heat",
      href: "https://www.purehe.at/",
      dates: "2024",
      active: true,
      description:
        "Ho sviluppato il sito web vetrina per Pure Heat, azienda attiva nella vendita di biomasse, pellet e servizi di pulizia canne fumarie, curando design e usabilità.",
      altText: "Sito web vetrina Pure Heat ",
      technologies: ["Framer"],
      links: [
        {
          type: "Sito Web",
          href: "https://www.purehe.at/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sito-web-vetrina-pure-heat.jpg",
      video: "",
    },
    {
      title: "Lumen",
      href: "https://www.assetplan.co.uk/products/lumen",
      dates: "2024-Oggi",
      active: true,
      description:
        "Ho collaborato nel creare un'app che, sfruttando la potenza e l'intelligenza dell'AI, assiste gli ispettori delle infrastrutture nel loro lavoro.",
      altText: "Interfaccia app Lumen per ispezioni con AI",
      technologies: ["Framer"],
      links: [
        {
          type: "Sito Web",
          href: "https://www.assetplan.co.uk/products/lumen",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/app-lumen-ispezioni-ai.jpg",
      video: "",
    },
  ],
  services: {
    title: "Cosa Faccio",
    items: [
      {
        title: "Creazione Siti Web Professionali a Modena e Provincia:",
        description: "Sviluppo <strong>siti internet</strong> moderni, veloci e ottimizzati (SEO) per aziende, professionisti e negozi a <strong>Modena</strong>, <strong>Vignola</strong>, <strong>Castelfranco Emilia</strong>, <strong>Sassuolo</strong> e dintorni. Un sito web efficace è cruciale per <strong>attirare più clienti locali</strong>.Realizzo diverse tipologie di siti, tra cui:<ul><li>Siti vetrina per presentare al meglio la tua attività</li><li>Blog aziendali per condividere contenuti e interagire con il tuo pubblico</li><li>Soluzioni <strong>e-commerce</strong> per avviare o potenziare la vendita online</li></ul>Creo soluzioni su misura, responsive e facili da usare, che riflettono la tua identità e ti aiutano a crescere. <a href=\"#projects\">Guarda i progetti web realizzati</a>. Hai un\'idea per il tuo sito? <a href=\"#contact\">Contattami per parlarne</a>.",
        slug: "/realizzazione-siti-web-modena"
      },
      {
        title: "Software Gestionali su Misura nel Modenese:",
        description: "Realizzo <strong>applicativi web aziendali</strong> e <strong>software su misura</strong> per PMI e realtà produttive di <strong>Modena</strong>, <strong>Sassuolo</strong>, <strong>Maranello</strong> e provincia, pensati per ottimizzare i tuoi processi lavorativi.Hai bisogno di migliorare aspetti come:<ul><li>Gestione delle <strong>commesse</strong> e dei clienti (CRM)</li><li>Tracciabilità della <strong>produzione</strong></li><li>Integrazione con la <strong>fatturazione elettronica (PA e B2B)</strong></li><li>Controllo del <strong>magazzino</strong></li></ul>Un gestionale personalizzato <strong>riduce gli errori manuali e libera tempo prezioso</strong> per la tua attività, rendendola più efficiente. Sviluppo soluzioni intuitive, potenti e integrabili. <a href=\"#contact\">Richiedi un preventivo gratuito per il tuo gestionale</a>.",
        slug: "/sviluppo-gestionali-personalizzati-modena"
      },
      {
        title: "Sviluppo Applicazioni Mobile (iOS/Android):",
        description: "Porto le tue idee su smartphone e tablet creando <strong>applicazioni mobile</strong> native o cross-platform (utilizzando Flutter/Dart) per dispositivi iOS e Android. Collaboro con startup e aziende di <strong>Modena</strong> e provincia.Sviluppo app:<ul><li><strong>Performanti</strong> e reattive</li><li><strong>Intuitive</strong> e facili da usare</li><li>Utili per <strong>raggiungere i tuoi clienti ovunque</strong> si trovino</li></ul>Seguo l\'intero ciclo di sviluppo, dalla progettazione alla pubblicazione sugli store. Hai un\'idea per un\'app? <a href=\"#contact\">Pianifica una chiamata conoscitiva</a>.",
        slug: "/sviluppo-app-mobile-modena"
      },
      {
        title: "Consulenza e Integrazione AI per Aziende Locali:",
        description: "Aiuto le aziende della provincia di <strong>Modena</strong> a sfruttare l\'<strong>Intelligenza Artificiale</strong> per innovare e ottenere un vantaggio competitivo.Posso aiutarti a:<ul><li>Integrare funzionalità AI nei tuoi sistemi esistenti</li><li>Creare <strong>strumenti intelligenti</strong> per automatizzare compiti ripetitivi</li><li>Analizzare dati in modo avanzato per ottenere insight preziosi</li><li>Migliorare l\'esperienza dei tuoi clienti con soluzioni personalizzate</li></ul>L\'AI può <strong>ottimizzare processi e aprire nuove opportunità</strong> di business. <a href=\"#contact\">Contattami per valutare le potenzialità dell'AI</a>.",
        slug: "/consulenza-integrazione-ai-modena"
      }
    ]
  },
  targetAudience: {
    title: "A Chi Mi Rivolgo",
    intro: "Collaboro principalmente con <strong>piccole e medie imprese (PMI)</strong>, <strong>liberi professionisti</strong>, <strong>negozi</strong>, <strong>artigiani</strong> e <strong>startup</strong> con sede nella provincia di <strong>Modena</strong>, incluse aree chiave come <strong>Vignola</strong>, <strong>Castelfranco Emilia</strong>, <strong>Sassuolo</strong> e <strong>Maranello</strong>. Il mio obiettivo è aiutarvi a sfruttare il digitale per:",
    points: [
      "Aumentare la vostra <strong>visibilità online</strong> e raggiungere nuovi clienti con siti web efficaci e ottimizzati (SEO).",
      "Migliorare l'<strong>efficienza operativa</strong> interna attraverso software gestionali personalizzati che digitalizzano e semplificano i processi.",
      "Creare <strong>esperienze digitali coinvolgenti</strong> per i vostri utenti tramite applicazioni web e mobile intuitive.",
      "Lanciare <strong>nuove idee e servizi</strong> sul mercato con soluzioni tecnologiche su misura."
    ]
  },
  whyMe: {
    title: "Perché Scegliermi",
    intro: "Mi impegno a fornire non solo codice, ma soluzioni concrete che portano valore al tuo business. Ecco cosa mi distingue:",
    points: [
      "<strong>Approccio Personalizzato:</strong> Ascolto attentamente le tue esigenze per proporti la soluzione tecnologica più adatta, senza pacchetti preconfezionati. Il tuo progetto è unico.",
      "<strong>Focus sui Risultati:</strong> Il mio obiettivo è aiutarti a raggiungere i tuoi traguardi, che sia aumentare le vendite, migliorare l'efficienza o rafforzare la tua presenza online.",
      "<strong>Competenza Tecnica Aggiornata:</strong> Utilizzo tecnologie moderne e performanti come Next.js, React, Flutter e sono costantemente aggiornato sulle ultime tendenze, inclusa l'Intelligenza Artificiale, per offrirti soluzioni all'avanguardia.",
      "<strong>Trasparenza e Comunicazione:</strong> Ti tengo aggiornato durante tutto il processo di sviluppo, con un dialogo aperto e chiaro.",
      "<strong>Supporto Diretto:</strong> Sono il tuo referente unico per lo sviluppo e l'assistenza, garantendo un supporto rapido e competente per le realtà di <strong>Modena</strong> e provincia."
    ]
  }
} as const;
