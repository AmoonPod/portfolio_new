import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const googleMyBusiness: PlaybookContent = {
  slug: 'google-my-business',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Google Maps: come farsi trovare da chi cerca un ristorante ora',
    subtitle: 'La Scheda Google (quella con le mappe) è la tua vetrina più importante. Ed è gratis.',
    lastUpdated: '22 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Quando qualcuno ha fame e non sa dove andare, cerca su Google. Se la tua scheda non è perfetta, va dal tuo concorrente.',
    bullets: [
      'Compila TUTTO: orari, telefono, sito web',
      'Carica almeno 20 foto (piatti e locale)',
      'Rispondi sempre alle recensioni (sempre!)',
      'Usa i "Post" per mostrare le novità',
    ],
  },
  quickQuestions: [
    'Hai controllato se i tuoi orari su Google sono giusti?',
    'C\'è il link al tuo menu digitale?',
    'Le foto sono recenti o di 3 anni fa?',
    'Hai risposto all\'ultima recensione ricevuta?',
  ],
  cta: {
    title: 'La tua scheda Google non ti convince?',
    description: 'Posso analizzarla e dirti cosa sistemare per comparire prima dei tuoi concorrenti.',
    buttonText: 'Analisi scheda gratuita',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei dare una controllata alla mia scheda Google Maps.')}`,
  },
  content: `
## 1. Perché Google Maps è meglio delle Pagine Gialle

Immagina di avere un cartellone pubblicitario gigante in piazza, gratis.
Ecco, la Scheda Google (ex Google My Business) è esattamente questo.

Quando qualcuno scrive "Ristorante di pesce" o "Pizzeria vicino a me", Google mostra **prima le mappe**, poi i siti web.
Essere lì, con le stelle e le foto belle, significa avere il ristorante pieno.

### Fai così
Se non l'hai ancora fatto, vai su [Google Business Profile](https://business.google.com) e reclama la tua attività. Spesso Google crea la scheda in automatico ma con dati sbagliati. Prendine il controllo.

---

## 2. Orari: non farli arrabbiare

La cosa che fa infuriare di più un cliente?
Leggere "Aperto" su Google, guidare fino al locale e trovarlo chiuso.
Quel cliente non tornerà mai più e ti lascerà 1 stella.

### Fai così
- Imposta gli orari precisi (es. 12:00–14:30, non 12:00–15:00 se la cucina chiude prima).
- Usa la funzione **Orari Speciali** per Natale, Ferragosto o ferie.
- Se fai orario continuato, scrivilo.

[Scopri come gestire le recensioni se sbagliano →](${BASE_PATH}/recensioni-google)

---

## 3. Le foto vendono per te

La scheda Google è visiva. La gente scorre le foto prima di leggere le recensioni.

### Fai così
Carica foto in queste 3 categorie:
1.  **Cibo:** I tuoi piatti migliori (non tutto il menu).
2.  **Ambiente:** Sala, tavoli apparecchiati, esterno. Fai capire l'atmosfera.
3.  **Menu:** Se proprio vuoi caricare la foto del menu cartaceo, assicurati che sia leggibile. Ma è meglio il link al menu digitale.

[Guida: Come fare foto belle col telefono →](${BASE_PATH}/foto-ristorante)

---

## 4. Domande e Risposte (Q&A)

Sulla tua scheda c'è una sezione dove la gente può fare domande.
Spesso chiedono: "Avete parcheggio?", "Fate senza glutine?", "Accettate i cani?".

### Fai così
Non aspettare che chiedano.
Usa il tuo account personale per fare la domanda e rispondi con l'account del ristorante.
Esempio:
*Domanda:* "Avete opzioni vegetariane?"
*Risposta:* "Certamente! Abbiamo un'intera sezione del menu dedicata ai vegetariani."

È un trucco semplice ma utilissimo.

---

## 5. Usa i "Post" come se fosse Facebook

Pochi lo sanno, ma puoi pubblicare aggiornamenti sulla scheda Google.
Appaiono proprio sotto le info principali.

### Cosa pubblicare?
- "Stasera serata Paella!"
- "Nuovo menu autunnale online"
- "Siamo aperti a Pasquetta"

Durano 7 giorni e attirano l'attenzione di chi sta guardando la scheda.

---

## 6. Il link più importante

C'è un pulsante "Sito web" sulla scheda. Assicurati che porti al posto giusto.

### Fai così
Se hai un sistema di prenotazione, metti il link diretto a quello (o alla pagina dove si prenota).
Non mandarli in Home Page a cercare. Mandali dove possono darti i soldi (prenotando).

[Come strutturare il sito per convertire →](${BASE_PATH}/struttura-sito)
  `,
  faqs: [
    {
      question: 'La scheda Google è davvero gratis?',
      answer: 'Sì, al 100%. Se qualcuno ti chiama dicendo che devi pagare per rinnovarla, è una truffa (e capita spesso).',
    },
    {
      question: 'Come faccio a cancellare una recensione falsa?',
      answer: 'Non puoi cancellarla tu, ma puoi segnalarla a Google. Se viola le regole, la tolgono. Altrimenti, rispondi con eleganza.',
    },
    {
      question: 'Devo rispondere anche alle recensioni positive?',
      answer: 'Assolutamente sì. Un semplice "Grazie!" fa vedere a tutti che sei attento ai clienti.',
    },
    {
      question: 'Posso avere più schede se ho più locali?',
      answer: 'Sì, puoi gestire tutte le sedi da un unico account Google.',
    },
  ],
  relatedLinks: [
    { anchor: 'Gestire le recensioni (belle e brutte)', url: `${BASE_PATH}/recensioni-google` },
    { anchor: 'Consigli per le foto', url: `${BASE_PATH}/foto-ristorante` },
    { anchor: 'Sito web che converte', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Perché Google Maps è meglio delle Pagine Gialle',
    'Orari: non farli arrabbiare',
    'Le foto vendono per te',
    'Domande e Risposte (Q&A)',
    'Usa i "Post" come se fosse Facebook',
    'Il link più importante',
  ],
};
