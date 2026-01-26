import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958'; // Sostituire con numero reale

export const strutturaSito: PlaybookContent = {
  slug: 'struttura-sito',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title:
      'Come deve essere fatto il sito del tuo ristorante per portarti più clienti',
    subtitle: 'Le 5 cose fondamentali per trasformare i visitatori in clienti seduti a tavola.',
    lastUpdated: '22 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short:
      'Il sito deve servire a una cosa sola: far prenotare il cliente. Deve essere veloce, chiaro e funzionare bene sul telefono.',
    bullets: [
      'Il tasto "Prenota" deve essere la prima cosa che si vede',
      'Il menu deve leggersi bene dal telefono (no PDF)',
      'Le foto devono essere vere e fare fame',
      'Orari e indirizzo devono essere impossibili da mancare',
    ],
  },
  quickQuestions: [
    'Si riesce a prenotare in meno di 10 secondi?',
    'Il menu si legge senza dover ingrandire lo schermo?',
    'Le foto sono del tuo locale o prese da internet?',
    'Si capisce subito se sei aperto adesso?',
  ],
  cta: {
    title: 'Il tuo sito attuale ti sta facendo perdere clienti?',
    description:
      'Analizzo il tuo sito gratuitamente e ti dico dove stai lasciando soldi sul tavolo.',
    buttonText: 'Richiedi analisi gratuita su WhatsApp',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei un parere veloce sul sito del mio ristorante.')}`,
  },
  content: `
## 1. Un tasto "Prenota" impossibile da non vedere

Quando un cliente arriva sul tuo sito, il 90% delle volte ha già fame. Non fargli cercare il numero di telefono o il modulo di prenotazione.

### Fai così

Metti un pulsante **"Prenota Ora"** ben visibile, fisso in alto, che si veda anche mentre scorri la pagina. Meglio se di un colore che risalta (es. giallo o arancione).

### Esempio

\`\`\`
[PRENOTA TAVOLO (Giallo)] [CHIAMA (Verde)]
\`\`\`

### Perché è fondamentale

Se il cliente deve cercare per più di 5 secondi come prenotare, spesso chiude e va su TripAdvisor o Google Maps. E lì vede anche i tuoi concorrenti.

---

## 2. Menu che si legge (Basta PDF!)

Scaricare un PDF di 10MB sul telefono, doverlo cercare nella cartella download e poi ingrandire per leggere è l'esperienza peggiore possibile.

### Fai così

Il menu deve essere una **pagina del sito**, scritta come testo normale.
- Clicchi "Menu" e leggi subito.
- Le categorie (Antipasti, Primi, Pizze) si aprono e chiudono.
- Si legge perfettamente anche su un telefono piccolo.

### Il vantaggio nascosto

Google riesce a leggere il testo del menu (mentre fa fatica con i PDF). Così se qualcuno cerca "Ristorante con carbonara a [Città]", è più facile che trovi te.

[Approfondisci: Come creare un menu digitale perfetto →](${BASE_PATH}/menu-online)

---

## 3. Foto vere: si mangia con gli occhi

Nessuno prenota in un ristorante che usa foto finte prese da internet. Ma nemmeno in uno che ha foto buie e sfocate.

### Fai così

Ti servono poche foto, ma fatte bene:
1.  **3-4 piatti forti** (i tuoi cavalli di battaglia)
2.  **L'atmosfera** (sala piena, un dettaglio dell'arredo)
3.  **L'esterno** (per farsi riconoscere dalla strada)

Le foto devono essere **luminose**. Scattale di giorno vicino a una finestra.

[Guida pratica: Foto per ristoranti che fanno venire fame →](${BASE_PATH}/foto-ristorante)

---

## 4. Orari e Dove Siamo: non nasconderli

Sembra banale, ma tantissimi siti nascondono queste info nella pagina "Contatti". Il cliente vuole saperlo subito.

### Fai così

Metti indirizzo e orari:
- Nel "piede" (footer) di ogni pagina
- Nella pagina "Contatti" con una mappa cliccabile
- Se hai orari spezzati o giorni di chiusura, scrivilo chiaramente.

### Esempio

\`\`\`
Siamo aperti tutti i giorni
Pranzo: 12:00 - 15:00
Cena: 19:00 - 23:00
Chiuso il Martedì
\`\`\`

---

## 5. Velocità: il cliente non aspetta

Hai presente quando clicchi su un sito e resta bianco per 4-5 secondi? Cosa fai? Torni indietro.
I tuoi clienti fanno lo stesso.

### Fai così

Il tuo sito deve caricarsi in un lampo.
- **Niente video pesanti** che partono da soli in home page.
- **Foto ottimizzate** (non caricare la foto da 10MB che ti ha mandato il fotografo, va ridotta!).
- **Hosting di qualità** (lo spazio web dove vive il sito).

Se il sito è veloce, il cliente naviga volentieri e prenota di più.

[Vuoi un sito veloce? Contattami →](${BASE_PATH}/struttura-sito)
  `,
  faqs: [
    {
      question: 'Quanto tempo ci vuole per rifare il sito?',
      answer:
        'Di solito in 2-3 settimane possiamo essere online con un sito nuovo, veloce e ottimizzato.',
    },
    {
      question: 'Posso aggiornare il menu da solo?',
      answer:
        'Assolutamente sì. Ti darò un pannello semplicissimo (tipo scrivere un messaggio) per cambiare prezzi e piatti dal telefono.',
    },
    {
      question: 'Devo per forza avere un sistema di prenotazione automatico?',
      answer:
        'No, possiamo anche mettere un semplice pulsante che apre WhatsApp o fa partire la chiamata. L\'importante è che sia chiaro.',
    },
    {
      question: 'Il sito si vedrà bene su iPhone e Android?',
      answer:
        'Sì, progetto tutto partendo dal telefono ("Mobile First"), perché è lì che il 90% dei tuoi clienti guarderà il sito.',
    },
  ],
  relatedLinks: [
    { anchor: 'Torna ai playbook per ristoranti', url: BASE_PATH },
    { anchor: 'Menu digitale: la guida', url: `${BASE_PATH}/menu-online` },
    { anchor: 'Come fare belle foto ai piatti', url: `${BASE_PATH}/foto-ristorante` },
    { anchor: 'SEO locale: fatti trovare su Google', url: `${BASE_PATH}/seo-locale` },
  ],
  tocSections: [
    'Un tasto "Prenota" impossibile da non vedere',
    'Menu che si legge (Basta PDF!)',
    'Foto vere: si mangia con gli occhi',
    'Orari e Dove Siamo: non nasconderli',
    'Velocità: il cliente non aspetta',
  ],
};
