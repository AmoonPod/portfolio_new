import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const giftCard: PlaybookContent = {
  slug: 'gift-card',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Gift Card: incassa oggi, lavora domani',
    subtitle: 'Vendere bellezza è il regalo perfetto. Ecco come creare un sistema di buoni regalo che porta soldi e clienti nuovi.',
    lastUpdated: '26 gennaio 2026',
    readTime: '5 minuti',
  },
  tldr: {
    short: 'Le Gift Card sono un prestito a tasso zero che ti fanno i clienti. Ti pagano oggi, vengono dopo (e spesso spendono di più).',
    bullets: [
      'Crea card fisiche belle (da mettere sotto l\'albero)',
      'Vendi card digitali sul sito (per i ritardatari)',
      'Fai pacchetti "Esperienza" (non solo valore monetario)',
      'La Gift Card porta clienti nuovi gratis',
    ],
  },
  quickQuestions: [
    'Hai delle Gift Card fisiche in bella vista?',
    'Si possono comprare dal sito alle 23:00 del 24 Dicembre?',
    'Hai pacchetti regalo con nomi accattivanti?',
    'Sai che il 20% delle gift card non viene mai riscattato?',
  ],
  cta: {
    title: 'Vuoi vendere Gift Card online?',
    description: 'Ti configuro una pagina sul sito per vendere buoni regalo in automatico, pagati con carta.',
    buttonText: 'Voglio vendere Gift Card',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei mettere le Gift Card in vendita sul mio sito.')}`,
  },
  content: `
## 1. Soldi subito, lavoro dopo

La Gift Card è fantastica per il flusso di cassa.
Incassi 100€ oggi. Magari la cliente viene tra 2 mesi.
Nel frattempo quei soldi sono tuoi.

Inoltre, statisticamente:
- Chi riceve una Gift Card spende il **20% in più** del valore del buono.
- Un 15-20% di Gift Card scade o viene persa (guadagno netto 100%).

---

## 2. Il regalo per chi ha tutto

Cosa regali a un'amica che ha tutto? Un momento di relax.
Il parrucchiere è il regalo perfetto per Natale, San Valentino, Festa della Mamma.

Ma devi renderlo visibile.
Metti un espositore in cassa: *"Non sai cosa regalare? Regala bellezza."*

---

## 3. Digitale salva la vita

Il 24 Dicembre alle 18:00 i negozi sono chiusi e la gente è disperata per i regali.
Se hai le Gift Card sul sito:
1.  Il cliente compra online.
2.  Riceve subito il PDF via mail.
3.  Lo stampa o lo manda su WhatsApp.
4.  Tu incassi mentre fai l'aperitivo.

È un servizio fondamentale per i ritardatari.

---

## 4. Non vendere soldi, vendi sogni

Non chiamarla "Buono da 50€". È freddo.
Crea dei pacchetti regalo:

- **"Rituale Relax"** (Piega + Trattamento Spa + Massaggio) - €45
- **"Cambio Look Totale"** (Colore + Taglio + Piega) - €90
- **"Biondo da Star"** (Schiariture + Tonalizzante + Piega) - €120

Chi regala preferisce regalare un'esperienza, non una cifra.

---

## 5. Packaging (per quelle fisiche)

Se vendi la card in salone, non dare un pezzo di carta.
Mettila in una bustina elegante, magari con un campioncino di shampoo o una caramella.
Deve sembrare un regalo prezioso.
Più è bella la confezione, più ne venderai.

---

## 6. Acquisizione clienti gratis

Chi riceve la Gift Card spesso non è tua cliente (gliel'ha regalata un'amica che viene da te).
Quindi:
1.  Hai incassato.
2.  Hai una nuova persona in salone.
3.  Se sei bravo, diventerà una cliente fedele.

È marketing a costo zero (anzi, a profitto immediato).

---

## 7. Promozioni sulle Gift Card

Nei periodi morti (es. Novembre), puoi fare un'offerta:
*"Compra una Gift Card da 100€, la paghi 80€."*
Oppure:
*"Compra una Gift Card da 50€ per un'amica, e ricevi un buono da 10€ per te."*

Questo incentiva l'acquisto impulsivo.

[Come usare le promozioni per riempire l'agenda →](${BASE_PATH}/fidelizzazione)
  `,
  faqs: [
    {
      question: 'Che scadenza devo mettere?',
      answer: 'Per legge non puoi mettere scadenze troppo brevi. Di solito "6 mesi" o "1 anno" dall\'emissione è lo standard corretto.',
    },
    {
      question: 'Come gestisco i codici?',
      answer: 'Con il sistema che ti sviluppo, ogni card ha un codice univoco generato automaticamente. Lo verifichi dal telefono e vedi subito se è valido.',
    },
    {
      question: 'E se spendono meno del valore?',
      answer: 'Puoi scegliere: o dai un buono resto, o scrivi "non frazionabile" (devono spenderlo tutto in una volta). La seconda opzione alza lo scontrino medio.',
    },
  ],
  relatedLinks: [
    { anchor: 'Listino Prezzi', url: `${BASE_PATH}/listino-prezzi` },
    { anchor: 'Prenotazioni Online', url: `${BASE_PATH}/prenotazioni-online` },
    { anchor: 'Sito Web', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Soldi subito, lavoro dopo',
    'Il regalo per chi ha tutto',
    'Digitale salva la vita',
    'Non vendere soldi, vendi sogni',
    'Packaging (per quelle fisiche)',
    'Acquisizione clienti gratis',
    'Promozioni sulle Gift Card',
  ],
};
