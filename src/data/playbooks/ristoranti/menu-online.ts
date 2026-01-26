import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const menuOnline: PlaybookContent = {
  slug: 'menu-online',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Menu Digitale: come far venire l\'acquolina in bocca (e aumentare lo scontrino)',
    subtitle: 'Perché il PDF è il nemico del tuo ristorante e come presentare i tuoi piatti per venderli meglio.',
    lastUpdated: '22 gennaio 2026',
    readTime: '5 minuti',
  },
  tldr: {
    short: 'Un menu digitale ben fatto non è solo un elenco di prezzi. È il tuo miglior cameriere che consiglia i clienti 24/7.',
    bullets: [
      'Elimina i PDF: sono scomodi e illeggibili su telefono',
      'Descrivi i piatti in modo che facciano venire fame',
      'Usa foto solo per i piatti forti (non per tutto)',
      'Rendi facile per te cambiare prezzi e disponibilità',
    ],
  },
  quickQuestions: [
    'Il tuo menu attuale si legge senza "pizzicare" lo schermo?',
    'Hai descritto gli ingredienti o solo il nome del piatto?',
    'Se finisce un piatto, puoi toglierlo dal menu in 10 secondi?',
    'Sono indicati chiaramente gli allergeni?',
  ],
  cta: {
    title: 'Vuoi un menu digitale che si aggiorna in un click?',
    description: 'Ti creo un menu bello, veloce e che puoi modificare dal telefono in un attimo.',
    buttonText: 'Fammi vedere come funziona',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei capire come funziona il menu digitale aggiornabile dal telefono.')}`,
  },
  content: `
## 1. Perché devi abbandonare il PDF

Il PDF è nato per essere stampato, non per essere letto su un iPhone.
Quando un cliente apre un menu PDF sul telefono:
1. Deve aspettare che si scarichi (e se prende poco, non scarica).
2. Deve ingrandire e spostare a destra/sinistra per leggere.
3. Si innervosisce.

### La soluzione

Il menu deve essere una **pagina web**. Testo semplice, chiaro, che si adatta perfettamente allo schermo.
Così il cliente scorre, legge, sceglie. Facile.

---

## 2. Descrizioni che vendono

Scrivere "Spaghetti alla Carbonara - 12€" va bene.
Ma scrivere:
*"Spaghetti alla Carbonara con guanciale croccante, pecorino romano DOP, uova fresche e pepe nero macinato al momento"*
...è tutta un'altra storia.

### Fai così

Non servono poemi. Basta aggiungere 2-3 dettagli che fanno capire la qualità:
- La provenienza degli ingredienti (DOP, IGP, locale)
- Il metodo di cottura (lenta, forno a legna)
- L'aggettivo che descrive il gusto (croccante, cremoso, fresco)

[Scopri come strutturare il resto del sito →](${BASE_PATH}/struttura-sito)

---

## 3. Foto: poche ma buone

Non mettere la foto per ogni singolo piatto: il menu diventa un album infinito e confuso.
Usa le foto per spingere i **piatti dove guadagni di più** o quelli che ti riescono meglio.

### La regola d'oro

La foto deve essere **realistica**. Se il piatto arriva al tavolo ed è diverso dalla foto, il cliente si sente preso in giro.
Meglio nessuna foto che una foto brutta o finta.

[Guida: Come fare foto belle col telefono →](${BASE_PATH}/foto-ristorante)

---

## 4. Ordine intelligente

Non mettere i piatti a caso. Il menu deve guidare il cliente.

### Fai così

1.  **Antipasti in alto:** Spesso chi inizia a leggere dagli antipasti ordina di più.
2.  **I tuoi consigli:** Crea una sezione "I preferiti dallo Chef" o "I più amati". Aiuta gli indecisi e spinge i tuoi piatti migliori.
3.  **Dolci e Bevande:** Chiaramente separati.

Se hai molte pizze, dividile: "Le Classiche", "Le Speciali", "Le Bianche". Nessuno ha voglia di leggere una lista di 50 pizze tutte insieme.

---

## 5. Aggiornare i prezzi deve essere facile

Il prezzo della farina aumenta? È stagione di funghi porcini?
Devi poter aggiornare il menu **subito**, da solo.

### Il problema del "tecnico"

Se ogni volta che devi cambiare un prezzo devi chiamare "quello del sito" e aspettare tre giorni, il tuo menu sarà sempre sbagliato.

### La soluzione

Ti serve un sistema (pannello di controllo) dove entri, scrivi "14" al posto di "12", salvi ed è fatto. In tempo reale.
Senza sapere nulla di informatica.

[Vuoi provare questo sistema? Scrivimi →](${BASE_PATH}/struttura-sito)

---

## 6. Allergeni e chiarezza

È obbligatorio per legge, ma è anche un servizio.
Chi è celiaco, intollerante al lattosio o vegetariano deve capire **a colpo d'occhio** cosa può mangiare.

Usa delle icone semplici accanto al piatto:
- 🌾 (Glutine)
- 🥛 (Lattosio)
- 🥬 (Vegetariano)

Ti eviterà mille domande al tavolo e farà sentire il cliente al sicuro.
  `,
  faqs: [
    {
      question: 'Il menu digitale sostituisce quello di carta?',
      answer: 'Non per forza. Puoi averli entrambi. Ma quello online è fondamentale per chi vuole "sbirciare" da casa prima di prenotare.',
    },
    {
      question: 'È difficile aggiornare il menu da soli?',
      answer: 'No, configuro i miei siti con un pannello semplicissimo. Se sai mandare un messaggio su WhatsApp, sai aggiornare il menu.',
    },
    {
      question: 'Le foto rallentano il sito?',
      answer: 'Solo se non sono ottimizzate. Io mi occupo di renderle leggerissime così il menu si apre all\'istante.',
    },
    {
      question: 'Posso mettere il QR Code sui tavoli?',
      answer: 'Certamente. Ti fornisco il QR Code che apre direttamente la pagina del menu sul telefono del cliente.',
    },
  ],
  relatedLinks: [
    { anchor: 'Come strutturare il sito', url: `${BASE_PATH}/struttura-sito` },
    { anchor: 'Consigli per le foto', url: `${BASE_PATH}/foto-ristorante` },
    { anchor: 'Gestire le recensioni', url: `${BASE_PATH}/recensioni-google` },
  ],
  tocSections: [
    'Perché devi abbandonare il PDF',
    'Descrizioni che vendono',
    'Foto: poche ma buone',
    'Ordine intelligente',
    'Aggiornare i prezzi deve essere facile',
    'Allergeni e chiarezza',
  ],
};
