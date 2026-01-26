import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const prenotazioniOnline: PlaybookContent = {
  slug: 'prenotazioni-online',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Prenotazioni Online: come riempire i tavoli mentre dormi',
    subtitle: 'Basta passare la serata al telefono. Ecco come automatizzare le prenotazioni e azzerare i tavoli vuoti.',
    lastUpdated: '22 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Un sistema di prenotazione online ti libera dal telefono e permette ai clienti di prenotare quando vogliono, anche alle 2 di notte.',
    bullets: [
      'Il 40% delle prenotazioni arriva quando sei chiuso',
      'Riduci i "bidoni" (no-show) grazie ai promemoria automatici',
      'Raccogli le email dei clienti per invitarli di nuovo',
      'Risparmi ore di lavoro al telefono',
    ],
  },
  quickQuestions: [
    'Ti è mai capitato di perdere una prenotazione perché non hai risposto?',
    'Ti chiamano mentre sei nel pieno del servizio?',
    'Mandi un messaggio per ricordare la prenotazione?',
    'Sai quante volte è venuto il cliente del tavolo 4?',
  ],
  cta: {
    title: 'Vuoi smettere di vivere al telefono?',
    description: 'Ti installo un sistema di prenotazione semplice che lavora per te 24 ore su 24.',
    buttonText: 'Voglio automatizzare le prenotazioni',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei un sistema di prenotazione online per il mio ristorante.')}`,
  },
  content: `
## 1. Il problema del telefono

Il telefono è vecchio.
- Se sei occupato, non rispondi → Cliente perso.
- Se sei chiuso, non rispondi → Cliente perso.
- Se c'è rumore, sbagli a scrivere il nome o l'orario → Cliente arrabbiato.

### La soluzione
Un sistema online che prende le prenotazioni per te. **Sempre.**
Il cliente vede i posti liberi, clicca, prenota. Tu ricevi una notifica. Fatto.

---

## 2. Prenotazioni mentre dormi

Hai mai controllato a che ora la gente cerca i ristoranti?
Spesso lo fa la sera tardi per il giorno dopo, o la mattina presto.
Se hai solo il telefono, in quelle ore sei irraggiungibile.

Con il sito, il tuo "segretario digitale" è sveglio anche alle 3 di notte.
Quando ti svegli, trovi il locale già mezzo pieno.

---

## 3. Basta "Bidoni" (No-Show)

La piaga dei ristoratori: gente che prenota e non si presenta.
Il sistema online risolve il problema in due modi:

1.  **Promemoria automatico:** Il sistema manda un WhatsApp o una Email al cliente qualche ora prima: *"Ti aspettiamo stasera alle 20:00. Confermi?"*
2.  **Cancellazione facile:** Se il cliente ha un imprevisto, può cancellare con un click (e il tavolo torna subito disponibile per altri).

Risultato? I tavoli vuoti diminuiscono drasticamente.

---

## 4. Riconosci i clienti VIP

Quando rispondi al telefono, non sai chi c'è dall'altra parte. È la prima volta? È un cliente abituale? È quello che spende 100€ di vino?

Il sistema online **si ricorda tutto**.
Quando arriva la prenotazione, vedi subito: *"Marco Rossi, 5ª visita, spesa media 45€, preferisce tavolo vicino alla finestra."*

Così puoi accoglierlo come un re: *"Bentornato Signor Rossi, le abbiamo tenuto il suo tavolo preferito."*
Questo è servizio.

---

## 5. Non solo un tavolo, ma un contatto

Se prendi la prenotazione a voce, quel numero di telefono finisce su un pezzo di carta e poi nel cestino.
Se prenota online, quel contatto entra nel tuo **Database**.

Tra un mese, se hai una serata speciale o il locale un po' vuoto, puoi mandare un messaggio a tutti:
*"Ciao! Stasera serata Fiorentina, ultimi 3 tavoli."*
E riempi il locale a comando.

[Scopri come gestire eventi e promozioni →](${BASE_PATH}/eventi-promozioni)

---

## 6. Perché ti serve un sistema PROPRIETARIO

Molti usano piattaforme famose (TheFork, ecc.) per le prenotazioni.
Sono utili per farsi trovare, ma **terribili per i margini**.
Pagare 2€ a coperto significa regalare migliaia di euro l'anno.

**La mia soluzione:**
Ti sviluppo un sistema di prenotazione **TUO**, integrato nel tuo sito.
- **Zero commissioni** per coperto.
- I dati dei clienti sono tuoi (non della piattaforma).
- Nessuno suggerisce altri ristoranti mentre prenotano da te.

È un investimento che si ripaga in pochi mesi.

---

## 7. Integrazione col sito

Il sistema di prenotazione non deve essere una pagina esterna brutta.
Deve essere parte del tuo brand.

Io lo integro perfettamente nel tuo sito:
- Stessi colori e logo.
- Facile da usare da cellulare (massimo 3 click).
- Pulsante "Prenota" sempre visibile.

[Parliamo di quale sistema scegliere →](${BASE_PATH}/struttura-sito)
  `,
  faqs: [
    {
      question: 'Devo abbandonare il telefono?',
      answer: 'No, il telefono resta per chi preferisce chiamare (spesso gli anziani). Ma vedrai che il 70% delle persone passerà all\'online da solo.',
    },
    {
      question: 'Quanto costa rispetto a TheFork?',
      answer: 'TheFork è un affitto eterno. Il mio sistema è come comprare casa: paghi lo sviluppo una volta, e poi è tuo per sempre. Risparmi migliaia di euro l\'anno.',
    },
    {
      question: 'Posso bloccare le prenotazioni se sono pieno?',
      answer: 'Ovviamente. Imposti tu quanti coperti hai. Quando sei pieno, il sistema dice "Sold Out" in automatico.',
    },
  ],
  relatedLinks: [
    { anchor: 'Sito web per ristoranti', url: `${BASE_PATH}/struttura-sito` },
    { anchor: 'Menu digitale', url: `${BASE_PATH}/menu-online` },
    { anchor: 'Recensioni Google', url: `${BASE_PATH}/recensioni-google` },
  ],
  tocSections: [
    'Il problema del telefono',
    'Prenotazioni mentre dormi',
    'Basta "Bidoni" (No-Show)',
    'Riconosci i clienti VIP',
    'Non solo un tavolo, ma un contatto',
    'Perché ti serve un sistema PROPRIETARIO',
    'Integrazione col sito',
  ],
};
