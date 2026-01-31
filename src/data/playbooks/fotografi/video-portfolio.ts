import type { PlaybookContent } from '../types';

export const videoPortfolio: PlaybookContent = {
  slug: 'video-portfolio',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'Videomaker: Il Tuo Sito Non è YouTube',
    subtitle: 'Come presentare i tuoi video per emozionare senza rallentare il sito.',
    lastUpdated: '2025-01-27',
    readTime: '6 min lettura',
  },
  tldr: {
    short: 'Il video è il formato più pesante del web. Se lo carichi direttamente sul sito, uccidi le performance. Serve una strategia ibrida: hosting esterno, presentazione interna.',
    bullets: [
      'Mai caricare file video pesanti direttamente sul server del sito',
      'Usa Vimeo (Pro) per un player pulito senza pubblicità',
      'Crea una Showreel d\'impatto in autoplay (ma muta)',
      'Racconta il "Dietro le quinte" per dare valore al processo',
    ],
  },
  quickQuestions: [
    'Il tuo sito ci mette 10 secondi a caricare?',
    'I video si vedono sgranati su mobile?',
    'Alla fine dei tuoi video appaiono le pubblicità dei concorrenti?',
  ],
  cta: {
    title: 'Showreel che non si blocca?',
    description: 'Sviluppo siti per videomaker che gestiscono flussi video 4K fluidamente, ottimizzati per la massima qualità visiva.',
    buttonText: 'Parliamo di video',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## Il Peso della Qualità

Come videomaker, la qualità d'immagine è tutto. Vuoi che il cliente veda il 4K, il color grading perfetto, la grana della pellicola.
Ma un file 4K di 3 minuti pesa gigabyte.
Se lo metti in autoplay sulla home page, l'utente da mobile consumerà tutto il suo piano dati o chiuderà la pagina prima che carichi.

## 1. Dove Ospitare i Video

- **YouTube:** Gratis, ottimo server, ma "sporco". Alla fine del video mostra "Video consigliati" (spesso trash o concorrenti), ha il logo YouTube ovunque, pubblicità. Va bene per la SEO, male per il Portfolio.
- **Vimeo (Consigliato):** La scelta pro. Paghi un abbonamento, ma hai un player pulito, senza loghi, colori personalizzabili, niente pubblicità e qualità di compressione superiore.
- **Wistia:** Ottimo per il marketing aziendale, analytics avanzate.

**La Strategia:** Carica su Vimeo, incorpora (embed) sul sito. Il sito rimane leggero, il video parte subito.

## 2. La Showreel in Home Page

La "Hero Section" del tuo sito deve muoversi.
- Usa un breve loop video (15-20 secondi) come sfondo.
- **Regole vitali:** Deve essere MUTO di default. Deve pesare meno di 5-10MB (comprimilo brutalmente, tanto è atmosfera). Deve avere un tasto "Guarda Showreel Completa" che apre il video in alta qualità con audio.

## 3. Thumbnail (Copertine) Personalizzate

Non lasciare che sia il player a scegliere un frame a caso (magari mosso o con una faccia strana).
Carica una copertina personalizzata ("Poster Image") per ogni video. Deve essere coerente con lo stile grafico del sito.

## 4. Racconta, non mostrare solo

Un video senza contesto è solo belle immagini.
Per ogni progetto importante (Case Study), scrivi due righe:
- Qual era la sfida del cliente? (es. "Lanciare un nuovo brand di orologi")
- Qual è stata la tua idea creativa?
- Risultato? (es. "Il video ha fatto 100k views e venduto tutto lo stock")

Questo ti trasforma da "operatore video" a "regista e consulente strategico".

## 5. Audio e Musica

L'audio è il 50% del video, ma sul web l'autoplay con audio è il male assoluto (e i browser lo bloccano).
Lascia sempre all'utente la scelta di attivare l'audio.
Scrivi chiaramente "Sound On 🔊" vicino al video per invogliarlo.

## Conclusione

Il tuo sito deve essere fluido come il tuo montaggio. Bilancia la massima qualità visiva con la velocità di caricamento, perché nessuno aspetterà 30 secondi per vedere il tuo capolavoro.
  `,
  faqs: [
    {
      question: 'Meglio 4K o Full HD per il web?',
      answer: 'Full HD (1080p) con un bitrate alto è sufficiente per il 99% degli schermi (specialmente mobile). Il 4K consuma banda e spesso non si nota su schermi piccoli. Riserva il 4K per la consegna file o se il tuo target sono agenzie con monitor cinema.',
    },
    {
      question: 'Posso usare musica famosa nei video sul sito?',
      answer: 'Attenzione al Copyright. YouTube e Vimeo potrebbero bloccarti o mutarti il video. Usa piattaforme di stock music (Artlist, Musicbed, Epidemic Sound) per avere le licenze corrette.',
    },
    {
      question: 'Come consegno i video pesanti al cliente?',
      answer: 'Non via mail! Usa servizi come WeTransfer Pro, Smash, o meglio ancora Frame.io per la revisione collaborativa e la consegna finale.',
    },
  ],
  relatedLinks: [
    { anchor: 'Portfolio Online (Foto & Video)', url: '/playbooks/fotografi/portfolio-online' },
    { anchor: 'SEO per farsi trovare', url: '/playbooks/fotografi/seo-locale' },
    { anchor: 'Strategia Social', url: '/playbooks/fotografi/social-media' },
  ],
  tocSections: [
    'Il Peso della Qualità',
    '1. Dove Ospitare i Video',
    '2. La Showreel in Home Page',
    '3. Thumbnail (Copertine) Personalizzate',
    '4. Racconta, non mostrare solo',
    '5. Audio e Musica',
    'Conclusione',
  ],
};
