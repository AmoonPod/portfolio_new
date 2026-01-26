import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const socialMedia: PlaybookContent = {
  slug: 'social-media',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Social Media per Ristoranti: come riempire il locale senza diventare influencer',
    subtitle: 'Non serve ballare su TikTok. Serve far venire l\'acquolina in bocca a chi guarda il telefono.',
    lastUpdated: '22 gennaio 2026',
    readTime: '7 minuti',
  },
  tldr: {
    short: 'I social sono la vetrina moderna. Se pubblichi foto invitanti con costanza, la gente viene. Se sparisci, si dimenticano di te.',
    bullets: [
      'Meglio 3 post fatti bene a settimana che 10 fatti male',
      'Fai foto vere, luminose e che facciano fame',
      'Rispondi sempre ai commenti (è educazione e marketing)',
      'Le Storie servono a mostrare il "dietro le quinte"',
    ],
  },
  quickQuestions: [
    'Quando è stata l\'ultima volta che hai pubblicato?',
    'Le tue foto fanno venire fame o sono buie?',
    'Rispondi a chi ti scrive in privato?',
    'I clienti fanno foto ai tuoi piatti?',
  ],
  cta: {
    title: 'Non sai cosa pubblicare?',
    description: 'Ti aiuto a creare un piano semplice per avere sempre contenuti pronti senza stress.',
    buttonText: 'Aiutami coi social',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei una mano per gestire meglio Instagram e Facebook del mio ristorante.')}`,
  },
  content: `
## 1. A cosa servono davvero i Social?

Non servono a prendere i "Like". I Like non pagano le bollette.
Servono a **ricordare alle persone che esisti** e che fai da mangiare cose buone.

La gente apre Instagram quando ha fame o si annoia. Se in quel momento appare la tua carbonara fumante... hai vinto un cliente.

---

## 2. Cosa pubblicare (senza impazzire)

Non devi inventarti cose strane. La gente vuole vedere:
1.  **Cibo:** Il piatto del giorno, la pizza che esce dal forno, il dolce. (Devono essere belli!).
2.  **Persone:** Il cuoco che spadella, il cameriere che sorride, tu che accogli. I volti creano fiducia.
3.  **Atmosfera:** Il locale pieno, un dettaglio del tavolo, le luci calde.

Non pubblicare locandine piene di scritte. Pubblica emozioni.

[Come fare foto belle col telefono →](${BASE_PATH}/foto-ristorante)

---

## 3. La regola della costanza

È meglio pubblicare **3 volte a settimana** per sempre, che fare 10 post in un giorno e poi sparire per un mese.
L'algoritmo (il cervello di Instagram) premia la costanza.

Fatti un calendario semplice:
- Martedì: Foto di un piatto
- Venerdì: Video veloce della preparazione
- Domenica: Foto della sala piena (repost dei clienti)

---

## 4. Stories: il tuo reality show

I post (le foto fisse) sono la tua vetrina elegante.
Le **Stories** (quelle che spariscono dopo 24h) sono il "dietro le quinte".

Usa le Stories per:
- Dire "Siamo aperti, ultimi tavoli!"
- Far vedere il mercato del mattino
- Mostrare la teglia appena sfornata
- Ripostare le foto che fanno i clienti

Sono spontanee, veloci, imperfette. Alla gente piacciono così.

---

## 5. Rispondi. Sempre.

Se un cliente entra nel locale e dice "Buongiorno", tu rispondi? Sì.
Sui social è uguale.

- Se commentano "Che buono!", rispondi "Grazie, ti aspettiamo!".
- Se ti scrivono in privato per prenotare, rispondi subito (o imposta una risposta automatica che li manda al sito).

Ignorare i commenti è maleducazione digitale.

---

## 6. Sfrutta i clienti (User Generated Content)

I clienti adorano fare foto al cibo. Per te è **pubblicità gratis**.
Se un cliente mette una Storia e ti tagga:
1.  Ricevi una notifica.
2.  Clicca "Aggiungi alla tua storia".
3.  Scrivi "Grazie!".

I suoi amici vedranno che è da te e si fidano di lui. È il passaparola più potente che esista.

---

## 7. Facebook vs Instagram

- **Instagram:** È visivo. Foto belle, video brevi. Pubblico più giovane (20-45 anni).
- **Facebook:** È informativo. Eventi, menu del pranzo, comunicazioni. Pubblico più adulto (40-70 anni).

Devi esserci su entrambi. Spesso basta collegarli in modo che se pubblichi su Instagram va anche su Facebook.

[Vuoi collegare i social al sito? →](${BASE_PATH}/struttura-sito)
  `,
  faqs: [
    {
      question: 'Devo fare balletti su TikTok?',
      answer: 'No. Se non ti senti a tuo agio, lascia stare. Meglio fare bene Instagram che fare male TikTok.',
    },
    {
      question: 'A che ora devo pubblicare?',
      answer: 'Di solito poco prima di pranzo (11:30) o prima di cena (18:30). Quando la gente inizia ad avere fame.',
    },
    {
      question: 'Devo pagare qualcuno per farlo?',
      answer: 'All\'inizio puoi farlo tu o delegare a un ragazzo sveglio dello staff. Se vuoi crescere sul serio, un professionista si ripaga da solo.',
    },
  ],
  relatedLinks: [
    { anchor: 'Guida alle foto col telefono', url: `${BASE_PATH}/foto-ristorante` },
    { anchor: 'Gestire le recensioni', url: `${BASE_PATH}/recensioni-google` },
    { anchor: 'Eventi e promozioni', url: `${BASE_PATH}/eventi-promozioni` },
  ],
  tocSections: [
    'A cosa servono davvero i Social?',
    'Cosa pubblicare (senza impazzire)',
    'La regola della costanza',
    'Stories: il tuo reality show',
    'Rispondi. Sempre.',
    'Sfrutta i clienti (User Generated Content)',
    'Facebook vs Instagram',
  ],
};
