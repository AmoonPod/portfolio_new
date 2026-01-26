import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const recensioniGoogle: PlaybookContent = {
  slug: 'recensioni-google',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Recensioni Google: come aumentarle e gestire quelle brutte',
    subtitle: 'Avere 4.5 stelle invece di 3.5 può raddoppiare il tuo fatturato. Ecco come arrivarci.',
    lastUpdated: '22 gennaio 2026',
    readTime: '7 minuti',
  },
  tldr: {
    short: 'Le recensioni sono il passaparola di oggi. Non puoi ignorarle. Devi chiederle, gestirle e usarle per crescere.',
    bullets: [
      'Chiedi la recensione solo ai clienti felici (e fallo subito)',
      'Rispondi SEMPRE (anche a quelle brutte)',
      'Mai litigare online: ci fai brutta figura tu',
      'Usa un QR code per rendere tutto facile',
    ],
  },
  quickQuestions: [
    'Sai qual è la tua media stelle attuale?',
    'Rispondi alle recensioni entro 24 ore?',
    'Hai un modo per chiedere le recensioni ai tavoli?',
    'Ti arrabbi quando leggi una critica?',
  ],
  cta: {
    title: 'Vuoi un sistema per avere più recensioni?',
    description: 'Ti aiuto a creare i QR code e le strategie giuste per far salire il tuo punteggio su Google.',
    buttonText: 'Aiutami con le recensioni',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei capire come aumentare le recensioni positive del mio locale.')}`,
  },
  content: `
## 1. Perché le stelle sono soldi

Il 90% delle persone, prima di prenotare in un posto nuovo, guarda le stelle.
- **Sotto il 4.0:** "Mmh, forse no."
- **Sopra il 4.5:** "Proviamo questo!"

Passare da 3.8 a 4.3 non è vanità. Significa avere il 30% di prenotazioni in più. È matematica.

---

## 2. Quando chiedere (il timing è tutto)

Non chiedere la recensione mentre il cliente sta ancora masticando o appena entra.
Il momento magico è:
1.  Quando paga il conto ed è sorridente.
2.  Quando ti fa i complimenti per il piatto.
3.  Quando dice "Torneremo sicuramente".

In quel momento, digli: *"Grazie mille! Se ti va, lasciaci due righe su Google, ci aiuta tantissimo."*

---

## 3. Rendiglielo facile (QR Code)

Nessuno ha voglia di aprire Google, cercare il nome del locale, scorrere fino a "Scrivi recensione".
Devi accorciare la strada.

### Fai così
Stampa un bigliettino da visita o un cavaliere da tavolo con un **QR Code**.
Scrivici: *"Ti sei trovato bene? Inquadra qui per dircelo in 10 secondi."*
Il QR Code deve aprire DIRETTAMENTE la schermata delle 5 stelle.

[Se vuoi, ti creo io il QR Code diretto →](${BASE_PATH}/google-my-business)

---

## 4. Come rispondere alle recensioni negative 😱

Arriva la recensione a 1 stella. "Cibo freddo, cameriere scortese".
Ti sale il sangue al cervello. Vorresti insultarlo.
**FERMO.**

Se rispondi male, fai la figura dell'isterico davanti a migliaia di potenziali clienti che leggeranno.

### La regola delle 3 A:
1.  **Accogli:** "Grazie per il feedback." (Anche se ti fa male).
2.  **Ammetti (o Spiega):** "Ci dispiace che la serata sia andata storta. Sabato eravamo a corto di personale."
3.  **Azione:** "Vorremmo rimediare. Scrivici in privato o torna a trovarci, ci prenderemo cura di te."

Chi legge penserà: *"Guarda che signori, hanno risposto con educazione. Il cliente forse era esagerato."*
Hai vinto tu.

---

## 5. Rispondi anche a quelle positive

Se un cliente ti fa un complimento dal vivo, tu lo ignori? No, dici "Grazie".
Fallo anche online.

Basta un: *"Grazie Marco! Felice che la carbonara ti sia piaciuta. A presto!"*
Google vede che sei attivo e ti premia facendoti comparire più in alto nelle ricerche.

---

## 6. Mai comprare recensioni (Mai!)

Ci sono agenzie che ti promettono "50 recensioni a 5 stelle per 100€".
**È una truffa.**
Google se ne accorge (vede che arrivano tutte dal Bangladesh o da profili falsi) e ti cancella la scheda. O peggio, ti mette in "lista nera" e sparisci dalle mappe.
Non ne vale la pena. Meglio 50 vere che 500 false.

[Scopri come funziona la SEO locale →](${BASE_PATH}/seo-locale)
  `,
  faqs: [
    {
      question: 'Come cancello una recensione falsa?',
      answer: 'Segnalala a Google tramite l\'apposita funzione "Segnala come inappropriato". Se viola le regole, la tolgono. Se è solo "cattiva", purtroppo resta.',
    },
    {
      question: 'TripAdvisor serve ancora?',
      answer: 'Sì, soprattutto per i turisti stranieri. Ma per i clienti della tua città, Google Maps è molto più importante oggi.',
    },
    {
      question: 'Devo rispondere io o lo staff?',
      answer: 'Meglio se risponde il titolare o il direttore. Dà un tocco personale e autorevole.',
    },
  ],
  relatedLinks: [
    { anchor: 'Ottimizza la scheda Google', url: `${BASE_PATH}/google-my-business` },
    { anchor: 'Strategie SEO locale', url: `${BASE_PATH}/seo-locale` },
    { anchor: 'Sito web per ristoranti', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Perché le stelle sono soldi',
    'Quando chiedere (il timing è tutto)',
    'Rendiglielo facile (QR Code)',
    'Come rispondere alle recensioni negative 😱',
    'Rispondi anche a quelle positive',
    'Mai comprare recensioni (Mai!)',
  ],
};
