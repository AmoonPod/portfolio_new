import type { PlaybookContent } from '../types';

export const seoLocale: PlaybookContent = {
  slug: 'seo-locale',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'SEO Locale per Fotografi: Fatti Trovare dai Clienti Vicini',
    subtitle: 'Non serve essere famosi nel mondo, basta essere i primi nella tua città.',
    lastUpdated: '2025-01-27',
    readTime: '7 min lettura',
  },
  tldr: {
    short: 'Per un fotografo, la maggior parte dei clienti è locale. Ottimizzare il sito per ricerche come "fotografo matrimonio [Città]" è la strategia di marketing col ROI più alto.',
    bullets: [
      'Usa parole chiave geografiche nei titoli e testi',
      'Crea pagine specifiche per le città dove operi',
      'Il blog è l’arma segreta per la SEO locale',
      'La velocità del sito è un fattore di ranking',
    ],
  },
  quickQuestions: [
    'Se cerchi "fotografo [tua città]" su Google, appari in prima pagina?',
    'Le tue immagini hanno nomi file descrittivi (es. matrimonio-milano.jpg)?',
    'Hai una pagina per ogni servizio principale che offri?',
  ],
  cta: {
    title: 'Vuoi farti trovare dai clienti nella tua zona?',
    description: 'Sviluppo siti web tecnicamente ottimizzati per la SEO locale, per aiutarti a intercettare chi cerca un fotografo nella tua città.',
    buttonText: 'Parliamo di visibilità locale',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## Perché la SEO Locale è Vitale

A meno che tu non sia un fotografo di fama mondiale che vola ovunque, i tuoi clienti sono persone che cercano servizi nella tua zona.

Se un utente cerca "fotografo neonati Torino" e tu sei di Torino ma il tuo sito non lo dice chiaramente a Google, hai perso un cliente.

## 1. Struttura del Sito e Parole Chiave

Il tuo sito deve dire a Google *chi sei* e *dove lavori*.
- **Title Tag:** Non scrivere solo "Home". Scrivi "Mario Rossi | Fotografo Matrimonio Roma".
- **Meta Description:** Includi la città e i servizi principali.
- **H1 (Titolo principale):** Deve contenere la parola chiave principale.

## 2. Pagine per Location (Landing Pages)

Se lavori in più zone (es. Bari, Lecce, Taranto), non mettere tutto in un calderone. Crea pagine dedicate:
- /fotografo-matrimonio-bari
- /fotografo-matrimonio-lecce

In queste pagine, scrivi testo specifico per quella città, cita location famose della zona, mostra foto scattate lì. Google premierà questa specificità.

## 3. Ottimizzazione delle Immagini (Image SEO)

Google non "vede" le foto, legge i dati associati.
- **Nome File:** Mai caricare \`DSC_1234.jpg\`. Rinomina in \`fotografo-battesimo-napoli-chiesa-gesu.jpg\`.
- **Alt Text:** Descrivi la foto per l'accessibilità e includi le keyword in modo naturale.
- **Geotagging:** Se possibile, mantieni i dati EXIF con la posizione, o aggiungili.

## 4. Il Blog come Motore SEO

Il blog non serve (solo) a mostrare gli ultimi lavori, serve a intercettare ricerche specifiche.
Titolo sbagliato: "Maria & Paolo - 12 Giugno"
Titolo SEO: "Matrimonio alla Masseria Spina, Monopoli - Reportage Fotografo Puglia"

Chi cerca "Masseria Spina matrimonio" troverà il tuo articolo. Se stai cercando di lavorare con una location specifica, blogga un servizio fatto lì (o uno shooting ispirazionale).

## 5. Backlink Locali

Fatti linkare da altre realtà locali:
- Fornitori con cui hai lavorato (fioristi, wedding planner, location).
- Blog locali o giornali online della zona.
- Associazioni di categoria locali.

Un link da una wedding planner di Firenze vale molto di più per te di un link da un sito generico americano.

## Conclusione

La SEO non è magia nera, è aiutare Google a capire che sei la risposta migliore per chi cerca un fotografo nella tua zona. Richiede tempo, ma una volta posizionato, i lead arrivano gratis.
  `,
  faqs: [
    {
      question: 'Quanto tempo ci vuole per arrivare in prima pagina?',
      answer: 'Dipende dalla concorrenza. In una piccola città possono bastare poche settimane, in grandi città come Milano o Roma servono mesi di lavoro costante sui contenuti.',
    },
    {
      question: 'Devo per forza avere un blog?',
      answer: 'Non è obbligatorio, ma è lo strumento più potente per posizionarsi su molte parole chiave diverse (nomi delle location, tipi di servizi, consigli per gli sposi) senza intasare il menu principale.',
    },
    {
      question: 'Le ads su Google (PPC) sostituiscono la SEO?',
      answer: 'No. Le ads ti portano traffico finché paghi. La SEO è un investimento a lungo termine: una volta posizionato, il traffico è gratuito e costante.',
    },
  ],
  relatedLinks: [
    { anchor: 'Ottimizza il tuo profilo Google Business', url: '/playbooks/fotografi/google-my-business' },
    { anchor: 'Migliora il tuo Portfolio', url: '/playbooks/fotografi/portfolio-online' },
    { anchor: 'Strategia Social', url: '/playbooks/fotografi/social-media' },
  ],
  tocSections: [
    'Perché la SEO Locale è Vitale',
    '1. Struttura del Sito e Parole Chiave',
    '2. Pagine per Location (Landing Pages)',
    '3. Ottimizzazione delle Immagini (Image SEO)',
    '4. Il Blog come Motore SEO',
    '5. Backlink Locali',
    'Conclusione',
  ],
};
