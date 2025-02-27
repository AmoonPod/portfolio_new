import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manuel De Ceglie",
  initials: "MDC",
  url: "https://manueldeceglie.it", // Sostituisci con il tuo URL reale
  location: "Castelfranco Emilia, MO",
  locationLink: "https://www.google.com/maps/place/castelfranco-emilia",
  description:
    "Sviluppatore software e web. Mi piace aiutare le attività a crescere con soluzioni digitali su misura. Appassionato di AI e delle sue potenzialità.",
  summary:
    "Appassionato di informatica da sempre, ho trasformato questo interesse in un lavoro che mi permette di aiutare le persone a realizzare le proprie idee. [Dopo aver lavorato su diversi tipi di progetti](#projects), ho scelto di dedicare parte del mio tempo e delle mie competenze alle attività locali, offrendo soluzioni digitali personalizzate: siti web, gestionali, applicazioni e molto altro. Il mio obiettivo è fornire strumenti efficaci e un supporto professionale per aiutarti a raggiungere i tuoi obiettivi di business, senza trascurare l'innovazione e le sfide che mi appassionano. Se hai un progetto in mente, [contattami per discuterne insieme](#contact).",
  avatarUrl: "/me.webp", // Sostituisci con il tuo avatar reale
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
      image: "/ewo.jpg",
      video: "",
    },
    {
      title: "Sito Web di Asset Plan",
      href: "https://www.assetplan.co.uk/",
      dates: "2023",
      active: true,
      description:
        "Ho collaborato nella realizzazione di un sito web per un'azienda che offre servizi nell'ambito della gestione degli asset, beni strutturali, con base nel Regno Unito.",
      technologies: ["Framer", "React"],
      links: [
        {
          type: "Sito Web",
          href: "https://www.assetplan.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ap.jpg",
      video: "",
    },
    {
      title: "Sito Web di Pure Heat",
      href: "https://www.purehe.at/",
      dates: "2024",
      active: true,
      description:
        "Ho sviluppato un sito web per un'azienda che si occupa di vendita di biomasse, pellet e pulizia di canne fumarie.",
      technologies: ["Framer"],
      links: [
        {
          type: "Sito Web",
          href: "https://www.purehe.at/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pureheat.jpg",
      video: "",
    },
    {
      title: "Lumen",
      href: "https://www.assetplan.co.uk/products/lumen",
      dates: "2024-Oggi",
      active: true,
      description:
        "Ho collaborato nel creare un'app che, sfruttando la potenza e l'intelligenza dell'AI, assiste gli ispettori delle infrastrutture nel loro lavoro.",
      technologies: ["Framer"],
      links: [
        {
          type: "Sito Web",
          href: "https://www.assetplan.co.uk/products/lumen",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lumen.jpg",
      video: "",
    },
  ],
} as const;
