import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const recensioniGoogle: PlaybookContent = {
  slug: 'recensioni-google',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Recensioni a 5 stelle: come far fidare le nuove clienti',
    subtitle: 'Nessuno affida i propri capelli a chi ha 3 stelle. Ecco come costruire una reputazione di ferro.',
    lastUpdated: '26 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Le recensioni sono la moneta della fiducia. Chiedile quando la cliente si guarda allo specchio felice e rispondi sempre, soprattutto alle critiche.',
    bullets: [
      'Il momento giusto per chiedere è "allo specchio"',
      'Rispondi a tutte le recensioni (positive e negative)',
      'Usa un QR code alla cassa per facilitare',
      'Mai litigare online con una cliente scontenta',
    ],
  },
  quickQuestions: [
    'Quante recensioni hai su Google?',
    'La tua media è sopra il 4.5?',
    'Rispondi alle clienti che scrivono?',
    'Hai un sistema per chiedere feedback?',
  ],
  cta: {
    title: 'Vuoi più recensioni positive?',
    description: 'Ti aiuto a creare i materiali (QR code e messaggi) per raccogliere decine di recensioni a 5 stelle.',
    buttonText: 'Aumentiamo le recensioni',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei una strategia per avere più recensioni positive per il mio salone.')}`,
  },
  content: `
## 1. I capelli sono sacri

Sbagliare una pizza è fastidioso. Sbagliare un colore è una tragedia.
Per questo, nel beauty, le recensioni contano 10 volte di più che nei ristoranti.

Una donna legge TUTTO prima di prenotare.
Cerca conferme. Cerca foto. Cerca la prova che non le brucerai i capelli.

---

## 2. Il "Momento Magico" per chiedere

C'è un attimo preciso in cui la cliente è più felice:
Quando si guarda allo specchio a fine piega, si tocca i capelli e sorride.
*"Wow, mi piacciono tantissimo!"*

**QUELLO è il momento.**
Tu (o la receptionist) devi dire:
*"Sono felicissimo che ti piacciano! Ci faresti un regalo enorme se lo scrivessi in due righe su Google. Ci aiuta tanto."*

Se glielo chiedi lì, lo farà volentieri.

---

## 3. QR Code alla cassa (e sullo specchio)

Rendilo facile.
Metti un piccolo cartello elegante alla cassa o sullo specchio con un QR Code.
*"Ti sei trovata bene? Scansiona qui e lasciaci una stellina ⭐"*

Il QR Code deve aprire direttamente la pagina di scrittura recensione (non la home di Google).

---

## 4. Gestire la cliente arrabbiata (online)

Succede. Magari il colore ha scaricato, o il taglio è troppo corto.
E lei scrive una recensione a 1 stella piena di rabbia.

**Cosa NON fare:**
- Insultarla.
- Dire "Non è vero, sei tu che hai i capelli rovinati".
- Ignorarla.

**Cosa fare:**
Rispondi con classe.
*"Ciao Laura, ci dispiace tantissimo leggere questo. Il nostro obiettivo è farti uscire col sorriso. Se il risultato non è quello che volevi, ti invitiamo a tornare in salone per un controllo gratuito e sistemarlo. Chiamaci pure."*

Chi legge penserà: *"Che professionisti, si prendono la responsabilità."*

---

## 5. Recensioni con foto

Le recensioni con foto valgono doppio.
Quando la cliente si fa il selfie allo specchio (o glielo fai tu), dille:
*"Se ti va, allega questa foto alla recensione su Google, così vedono tutti quanto stai bene!"*

Google ama le recensioni con foto e le mostra per prime.

---

## 6. Rispondi anche ai complimenti

Se scrivono: *"Bravissimi, Marco è un mago!"*
Non lasciarlo lì. Rispondi!
*"Grazie mille Elena! Marco sarà felicissimo di leggerlo. Ti aspettiamo per il prossimo ritocco!"*

Fai sentire le clienti parte di una famiglia.

[Come usare le recensioni sui social →](${BASE_PATH}/social-media)

---

## 7. Mai comprare recensioni

Non cedere alla tentazione di pagare 50€ per 100 recensioni false.
Si vede lontano un miglio che sono finte.
E se Google se ne accorge (e se ne accorge), ti penalizza o ti chiude la scheda.
La reputazione si costruisce, non si compra.

[Scopri come posizionarti su Google →](${BASE_PATH}/seo-locale)
  `,
  faqs: [
    {
      question: 'Posso offrire uno sconto in cambio di recensione?',
      answer: 'Le regole di Google lo vietano tecnicamente. Meglio dire "Un piccolo omaggio" (es. un campioncino) come ringraziamento, ma non legare lo sconto esplicitamente alla recensione 5 stelle.',
    },
    {
      question: 'Cosa faccio se una recensione è palesemente falsa?',
      answer: 'Segnalala a Google tramite l\'apposita funzione. Se viola le policy (spam, conflitti di interesse), potrebbero rimuoverla.',
    },
    {
      question: 'Quante recensioni servono?',
      answer: 'Punta ad averne almeno 50 per iniziare a essere percepito come un leader nella tua zona. Poi punta a 100.',
    },
  ],
  relatedLinks: [
    { anchor: 'Google My Business', url: `${BASE_PATH}/google-my-business` },
    { anchor: 'Fidelizzazione clienti', url: `${BASE_PATH}/fidelizzazione` },
    { anchor: 'Sito web per parrucchieri', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'I capelli sono sacri',
    'Il "Momento Magico" per chiedere',
    'QR Code alla cassa (e sullo specchio)',
    'Gestire la cliente arrabbiata (online)',
    'Recensioni con foto',
    'Rispondi anche ai complimenti',
    'Mai comprare recensioni',
  ],
};
