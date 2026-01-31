import type { PlaybookContent } from '../types';

export const portfolioOnline: PlaybookContent = {
  slug: 'portfolio-online',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'Portfolio Online che Converte: Più di una Semplice Galleria',
    subtitle: 'Come strutturare il tuo portfolio per trasformare i visitatori in clienti paganti.',
    lastUpdated: '2025-01-27',
    readTime: '6 min lettura',
  },
  tldr: {
    short: 'Un portfolio efficace non deve solo mostrare belle foto, ma guidare il cliente verso la prenotazione. Scopri come curare la selezione e strutturare le gallerie.',
    bullets: [
      'La qualità batte la quantità: mostra solo i tuoi lavori migliori',
      'Organizza le gallerie per tipologia di servizio',
      'Velocità di caricamento: fondamentale per non perdere utenti',
      'Call to Action (CTA) chiare in ogni pagina',
    ],
  },
  quickQuestions: [
    'Il tuo portfolio carica velocemente da mobile?',
    'È facile contattarti mentre si guardano le foto?',
    'Le immagini raccontano una storia o sono slegate?',
    'Hai troppe foto simili nella stessa galleria?',
  ],
  cta: {
    title: 'Il tuo portfolio non ti porta clienti?',
    description: 'Realizzo siti web per fotografi ottimizzati per la velocità e la conversione, dove le tue immagini sono le vere protagoniste.',
    buttonText: 'Richiedi una consulenza gratuita',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## Il Problema dei Portfolio "Vetrina"

Molti fotografi trattano il loro sito web come un semplice archivio digitale. Caricano centinaia di foto, spesso pesanti, in gallerie infinite senza un filo logico. Il risultato? Un sito lento, confuso e che non converte.

Il tuo portfolio non deve essere un museo, ma uno strumento di vendita. Deve emozionare il visitatore e convincerlo che sei tu il professionista giusto per lui.

## 1. Curatela: Less is More

L'errore numero uno è pubblicare *tutto*. Al potenziale cliente non interessa vedere 50 foto dello stesso matrimonio che sembrano uguali. Vuole vedere:
- Il tuo stile unico
- La tua capacità di catturare emozioni
- La varietà di situazioni che sai gestire

**Regola d'oro:** Seleziona al massimo 20-30 immagini per galleria. Devono essere le tue migliori in assoluto. Una foto mediocre in mezzo a 10 capolavori abbassa la percezione generale della tua qualità.

## 2. Velocità e Qualità dell'Immagine

Un sito lento è la morte della conversione, specialmente da mobile.
- **Compressione:** Usa formati moderni come WebP. Le immagini devono essere nitide ma leggere.
- **Lazy Loading:** Carica le immagini solo quando l'utente scorre la pagina.
- **CDN:** Usa una rete di distribuzione dei contenuti per servire le foto velocemente ovunque.

*Nota tecnica: Piattaforme come Wix o Squarespace spesso non ottimizzano le immagini come un sito custom, penalizzandoti su Google.*

## 3. La Struttura che Vende

Non lasciare che l'utente si perda.
- **Home Page:** Una "hero image" mozzafiato e un testo che spiega chi sei e cosa fai in 3 secondi.
- **Gallerie Tematiche:** Dividi chiaramente "Matrimoni", "Ritratti", "Eventi". Non mischiare tutto.
- **Pagine Servizi:** Per ogni galleria, linka alla pagina che spiega il servizio e i prezzi (o come richiederli).

## 4. Call to Action (CTA)

Ogni galleria deve avere un obiettivo. Alla fine delle foto (e magari anche a metà), inserisci un invito all'azione chiaro:
- "Vorresti foto come queste? Contattami"
- "Scopri i pacchetti Matrimonio"
- "Prenota la tua sessione"

Non dare per scontato che l'utente vada nella pagina contatti da solo.

## 5. Racconta Storie (Blogging)

Invece di sole gallerie statiche, usa il blog per raccontare interi servizi (Real Weddings, Sessioni di Famiglia). Questo ti permette di:
- Mostrare la consistenza del tuo lavoro (non solo i "best of")
- Fare SEO locale (es. "Matrimonio a Villa d'Este, Como")
- Creare connessione emotiva raccontando chi sono i soggetti

## Conclusione

Il tuo portfolio è il tuo miglior venditore 24/7. Trattalo con la stessa cura che metti nel post-produzione delle tue foto.
  `,
  faqs: [
    {
      question: 'Quante foto dovrei mettere in home page?',
      answer: 'Poche, d’impatto. Uno slideshow di 3-5 immagini o una griglia curata di massimo 6-9 foto. La home page deve caricarsi istantaneamente.',
    },
    {
      question: 'Meglio sfondo bianco o nero?',
      answer: 'Dipende dal tuo stile. Il bianco è più pulito e moderno, il nero fa risaltare i colori ma può stancare la vista se c’è molto testo. L’importante è che non distragga dalle foto.',
    },
    {
      question: 'Devo proteggere le foto con watermark?',
      answer: 'Generalmente no sul portfolio. Un watermark gigante rovina l’esperienza visiva e fa sembrare il sito amatoriale. Chi vuole rubare una foto lo farà comunque. Meglio caricare file a risoluzione web (es. 1500px lato lungo) che non vanno bene per la stampa.',
    },
  ],
  relatedLinks: [
    { anchor: 'SEO Locale per essere trovati', url: '/playbooks/fotografi/seo-locale' },
    { anchor: 'Come presentare i prezzi', url: '/playbooks/fotografi/listino-prezzi' },
    { anchor: 'Gallerie clienti e consegna', url: '/playbooks/fotografi/consegna-foto' },
  ],
  tocSections: [
    'Il Problema dei Portfolio "Vetrina"',
    '1. Curatela: Less is More',
    '2. Velocità e Qualità dell\'Immagine',
    '3. La Struttura che Vende',
    '4. Call to Action (CTA)',
    '5. Racconta Storie (Blogging)',
    'Conclusione',
  ],
};
