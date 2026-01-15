import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'il-pichello',
    title: 'Agricola Il Pichello: Digitalizzare la Tradizione',
    subtitle:
      'Come ho trasformato un sito invisibile in un sito vetrina locale da +900% di traffico organico.',
    client: 'Agricola Il Pichello - Marola (Carpineti)',
    locationCity: 'Carpineti',
    date: '2024',
    headerImage: '/poster_pichello.jpeg',
    videoUrl: '/case-study/pichello/video-pichello.mp4',
    websiteUrl: 'https://www.agricolailpichello.it',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Local SEO', 'Vercel'],
    results: [
      { label: 'Visibilità Organica', value: '900', suffix: '%', prefix: '+' },
      { label: 'Prodotti Indicizzati', value: '120', suffix: '+', prefix: '' },
      {
        label: 'Performance (Lighthouse)',
        value: '100',
        suffix: '/100',
        prefix: '',
      },
    ],
    featured: true,
    order: 1,
    content: `
## Il Contesto: Un'eccellenza nascosta nell'Appennino
    
L'**Agricola Il Pichello** non è una semplice azienda agricola. Situata a Marola, nel cuore dell'Appennino Reggiano (comune di [Carpineti](https://manueldeceglie.it/siti-web-carpineti)), rappresenta il custode di una biodiversità rara. 
    
Coltivano e trasformano **grani antichi** (un miscuglio evolutivo di 50 varietà), producono miele artigianale, legumi autoctoni e, recentemente, hanno lanciato una linea di pasta secca di altissima qualità.
Nonostante avessero un "prodotto d'oro", il loro **posizionamento digitale** era inesistente.
    
## Il Problema: Il "Paradosso del Magazzino Pieno"
    
Quando ho incontrato il titolare, la situazione era paradossale: il magazzino fisico era pieno di oltre **120 referenze**, ma il sito web ne mostrava a malapena 10.
    
L'analisi tecnica del vecchio sito ha evidenziato criticità bloccanti per il business:
- **Architettura informativa assente:** I prodotti di punta come le *Zuppe* o le *Farine Macinate a Pietra* erano sepolti in menu non navigabili.
- **Assenza di Funnel:** L'utente non aveva percorsi chiari per contattare l'azienda o ordinare.
- **Invisibilità Locale:** Cercando "prodotti tipici Carpineti" o "Farine antiche Reggio Emilia", il sito non compariva nelle prime 5 pagine di Google.
- **Esperienza Mobile frustrante:** Essendo un sito vecchio stampo, la navigazione da smartphone (da cui proviene l'80% del traffico locale) era impossibile.
    
> Avevamo un sito vetrina che faceva da muro, non da porta.
    
## La Strategia: Oltre il semplice restyling
    
L'obiettivo non era fare un sito "più bello", ma costruire uno strumento commerciale. Abbiamo applicato il mio metodo di **Sviluppo Web Orientato al Fatturato**.
    
### 1. Digitalizzazione del Catalogo (Information Architecture)
Abbiamo censito e fotografato ogni singolo prodotto. Ho ristrutturato le categorie merceologiche per rispondere agli intenti di ricerca degli utenti (es. *"Pasta di grani antichi"* vs *"Miele millefiori artigianale"*). Ora ogni prodotto ha una sua [Landing Page](/siti-web-castelnovo-ne-monti) dedicata e indicizzata.

![Pagina dedicata prodotto - Zuppa Contadina Il Pichello](/case-study/pichello/pagina-dedicata.jpg)
    
### 2. SEO Locale per dominare la Provincia
Ho implementato una strategia di **Local SEO** aggressiva per intercettare la domanda nella zona di Reggio Emilia, Carpineti e Castelnovo ne' Monti. 
- Ottimizzazione dei Meta Data per ogni scheda prodotto.
- Integrazione con Google Maps e Google My Business.
- Schema Markup (JSON-LD) per far capire a Google che si tratta di un'azienda locale reale.
    
### 3. L'Arsenale Tecnico: Next.js vs WordPress
Per gestire un catalogo dinamico senza sacrificare la velocità, ho evitato i classici CMS lenti come WordPress.
Ho scelto uno stack tecnologico **Headless**:
- **Next.js (React):** Per generare pagine statiche ultra-veloci (SSG). Google premia la velocità, e noi gli abbiamo dato un sito che carica in 0.8 secondi.
- **Tailwind CSS:** Per un design custom, pulito, che mette al centro le immagini dei prodotti senza distrazioni.
- **Hosting su Vercel:** Per garantire che il sito sia raggiungibile in millisecondi da qualsiasi parte d'Italia.
    
## I Risultati: Numeri Certificati
    
A sei mesi dal lancio del nuovo sito [agricolailpichello.it](https://www.agricolailpichello.it), i dati parlano chiaro:
    
1.  **Esplosione del Traffico (+900%):** Il sito ora intercetta ricerche specifiche. Chi cerca "Zuppe di legumi Reggio Emilia" trova Il Pichello.
2.  **Conversioni Offline:** Molti clienti entrano in negozio a Marola con lo smartphone in mano, mostrando il sito e dicendo: *"Voglio questo pacco che ho visto online"*.
3.  **Ordini Ricorrenti:** L'interfaccia semplice ha sbloccato gli ordini via WhatsApp e Email, creando un flusso di cassa settimanale che prima non esisteva.
    
## Conclusione
    
Il caso dell'Agricola Il Pichello dimostra che anche una piccola realtà locale può competere con i giganti se supportata dalla giusta tecnologia. Non serve avere budget milionari, serve smettere di usare strumenti amatoriali.
    
**Il tuo sito nasconde il valore dei tuoi prodotti invece di esaltarlo?**
Se sei un'azienda di Reggio Emilia o provincia, non lasciare che la tua concorrenza ti rubi altri clienti.
    
[Richiedi l'analisi gratuita del tuo sito](/il-tuo-business-sanguina) e scopri come possiamo replicare questi risultati per te.
    `,
    seo: {
      title:
        'Caso Studio Il Pichello: Strategia Web e SEO a Reggio Emilia | Manuel De Ceglie',
      description:
        'Scopri come ho portato Il Pichello a +900% di visibilità web grazie a una strategia SEO locale su Carpineti e Reggio Emilia e un sito web moderno e ottimizzato.',
      canonical: 'https://manueldeceglie.it/casi-studio/il-pichello',
      ogImage: '/poster_pichello.jpeg',
      keywords: [
        'Sviluppo siti web Carpineti',
        'SEO Reggio Emilia',
        'Caso studio e-commerce food',
        'Next.js developer Italia',
        'Sito web moderno',
        'Sito web ottimizzato',
        'Sito web veloce',
        'Sito web sicuro',
        'Sito web responsivo',
        'Sito web accessibile',
        'Sito web SEO',
        'Sito web SEO locale',
        'Sito web SEO a Reggio Emilia',
        'Sito web SEO a Carpineti',
        'Sito web SEO a Castelnovo ne Monti',
        'Sito web SEO a Reggio Emilia',
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.sort((a, b) => (a.order || 999) - (b.order || 999));
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.featured).sort(
    (a, b) => (a.order || 999) - (b.order || 999)
  );
}
