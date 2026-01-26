import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const seoLocale: PlaybookContent = {
  slug: 'seo-locale',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'SEO Locale per Parrucchieri: domina Google nel tuo quartiere',
    subtitle: 'Non serve essere primi al mondo. Serve essere primi quando qualcuno cerca "Parrucchiere [Tua Città]".',
    lastUpdated: '26 gennaio 2026',
    readTime: '8 minuti',
  },
  tldr: {
    short: 'La SEO locale ti fa trovare da chi è vicino e cerca un servizio specifico. Usa le parole giuste sul sito e ottimizza la scheda Google.',
    bullets: [
      'Usa il nome della città e del quartiere ovunque',
      'Crea pagine per servizi specifici (es. "Extension Milano")',
      'Le recensioni sono benzina per la classifica',
      'Il sito deve essere velocissimo da cellulare',
    ],
  },
  quickQuestions: [
    'Se cerchi "Shatush [Tua Città]", esci tu?',
    'Il tuo sito dice chiaramente dove sei?',
    'Hai una pagina per ogni servizio importante?',
    'Carichi spesso foto nuove su Google?',
  ],
  cta: {
    title: 'Vuoi essere primo su Google?',
    description: 'Analizzo il tuo posizionamento e ti dico come superare i concorrenti nella tua zona.',
    buttonText: 'Voglio salire su Google',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei migliorare la SEO del mio salone.')}`,
  },
  content: `
## 1. La ricerca locale è specifica

Le donne non cercano solo "parrucchiere". Cercano soluzioni.
- "Parrucchiere per biondo Milano"
- "Extension ciglia Roma Nord"
- "Taglio ricci Bologna centro"

Se il tuo sito ha scritto solo "Benvenuti nel nostro salone", Google non ti mostrerà mai per quelle ricerche.

---

## 2. Pagine Servizi Specifiche

Non fare un listone unico. Crea pagine dedicate ai tuoi servizi di punta.
Esempio:
Una pagina intitolata: **"Balayage e Schiariture a [Città] - Salone [Nome]"**.

Dentro scrivi:
- Cos'è il Balayage
- Perché il tuo è speciale
- Foto dei tuoi lavori
- Prezzo indicativo
- Recensioni di clienti che l'hanno fatto

Così Google capisce che sei l'esperto di quello specifico servizio.

---

## 3. La regola del NAP

Nome, Indirizzo, Telefono (Name, Address, Phone).
Devono essere IDENTICI ovunque:
- Sito Web
- Scheda Google
- Facebook
- Pagine Gialle online

Se su Google sei "Salone Claudia" e su Facebook "Claudia Hair Style", Google si confonde e ti penalizza.

---

## 4. Google Maps è il Re

Per i servizi locali, la mappa appare PRIMA dei siti web.
Per salire nella mappa devi:
1.  Avere tante recensioni (e rispondere).
2.  Avere foto recenti (caricane 3 a settimana).
3.  Avere la scheda compilata al 100%.

È la tua priorità assoluta.

[Approfondisci Google My Business →](${BASE_PATH}/google-my-business)

---

## 5. Blog? Sì, ma utile

Non scrivere "Buon Natale". Scrivi articoli che la gente cerca.
- "Come mantenere il biondo freddo in estate"
- "I 5 tagli corti di tendenza per il 2026"
- "Keratina o Stiratura: le differenze"

Questi articoli portano traffico di persone interessate. E alla fine dell'articolo metti: *"Vuoi un consiglio? Prenota una consulenza gratuita."*

---

## 6. Velocità da Mobile

Il 90% delle ricerche beauty avviene da smartphone (spesso su Instagram, poi passano al sito).
Se il tuo sito ci mette 5 secondi ad aprirsi, tornano indietro.
Google odia i siti lenti.

Usa immagini leggere, design pulito, niente video pesanti in autoplay.

[Come creare un sito veloce →](${BASE_PATH}/struttura-sito)

---

## 7. Link Locali

Fatti linkare da altri siti della tua città.
- Il giornale locale online (fatti intervistare).
- Il blog della tua città.
- Associazioni di quartiere.

Per Google, un link da un sito locale vale più di un link dal New York Times (per la SEO locale).

---

## 8. Monitora i risultati

Non andare alla cieca. Controlla:
- Quante volte compari nelle ricerche?
- Quante persone chiedono indicazioni stradali?
- Quante chiamano dal pulsante Google?

Google ti manda un report mensile gratis. Leggilo!
  `,
  faqs: [
    {
      question: 'Quanto tempo ci vuole per salire?',
      answer: 'La SEO è una maratona, non uno sprint. Con un lavoro fatto bene, vedi i primi risultati in 2-3 mesi. Ma poi restano nel tempo.',
    },
    {
      question: 'Devo pagare Google?',
      answer: 'No, la SEO serve proprio a comparire gratis nei risultati naturali (organici). Se vuoi pagare per essere subito in alto, quello è Google Ads (pubblicità).',
    },
    {
      question: 'Il nome del salone deve contenere "Parrucchiere"?',
      answer: 'Aiuta, ma non è obbligatorio. Se ti chiami "Arte e Stile", assicurati che la categoria su Google sia "Parrucchiere" e che il sito lo ripeta spesso.',
    },
  ],
  relatedLinks: [
    { anchor: 'Google My Business', url: `${BASE_PATH}/google-my-business` },
    { anchor: 'Recensioni', url: `${BASE_PATH}/recensioni-google` },
    { anchor: 'Sito Web', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'La ricerca locale è specifica',
    'Pagine Servizi Specifiche',
    'La regola del NAP',
    'Google Maps è il Re',
    'Blog? Sì, ma utile',
    'Velocità da Mobile',
    'Link Locali',
    'Monitora i risultati',
  ],
};
