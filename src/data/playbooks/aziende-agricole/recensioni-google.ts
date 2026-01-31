import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const recensioniGoogle: PlaybookContent = {
  slug: 'recensioni-google',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Recensioni Google: la prova sociale che fa prenotare',
    subtitle: 'Prima di prenotare, le persone leggono le recensioni. Ecco come raccoglierne tante, gestire le negative e usarle per vendere di più.',
    lastUpdated: '27 gennaio 2026',
    readTime: '5 minuti',
  },
  tldr: {
    short: 'Le recensioni Google sono il passaparola digitale. Più ne hai (positive), più la gente si fida e prenota. E Google ti premia nel posizionamento.',
    bullets: [
      '88% delle persone si fida delle recensioni online come dei consigli personali',
      'Ogni stella in più aumenta le conversioni del 5-9%',
      'Rispondere alle recensioni migliora la reputazione',
      'Le recensioni Google sono tue per sempre',
    ],
  },
  quickQuestions: [
    'Quante recensioni hai su Google?',
    'Qual è la tua media stelle?',
    'Rispondi a tutte le recensioni?',
    'Chiedi attivamente ai clienti di lasciare una recensione?',
  ],
  cta: {
    title: 'Vuoi più recensioni positive?',
    description: 'Ti aiuto a implementare un sistema automatico per raccogliere recensioni dopo ogni soggiorno o acquisto.',
    buttonText: 'Parliamo di recensioni',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei più recensioni Google per il mio agriturismo.')}`,
  },
  content: `
## 1. Perché le recensioni contano così tanto

Immagina due agriturismi simili nella stessa zona.

**Agriturismo A:** 4.8 stelle, 120 recensioni, risposte cortesi a tutti.
**Agriturismo B:** 3.9 stelle, 15 recensioni, nessuna risposta.

Quale sceglieresti?

Le recensioni sono la **prova sociale** che riduce il rischio percepito.
"Se 100 persone dicono che è bello, probabilmente lo è."

---

## 2. Google vs Booking vs TripAdvisor

Le recensioni sono ovunque. Ma dove concentrarsi?

**Google My Business:**
- Le più importanti per la SEO locale
- Visibili quando cercano su Maps
- Restano tue per sempre (anche se lasci Booking)

**Booking/Airbnb:**
- Utili se usi le OTA
- Ma restano sulla piattaforma, non sono tue

**TripAdvisor:**
- Ancora rilevante per il turismo
- Ma in declino rispetto a Google

Il mio consiglio: **punta su Google**. Porta lì le recensioni migliori.

---

## 3. Come chiedere recensioni (senza sembrare disperati)

La maggior parte dei clienti soddisfatti non lascia recensioni spontaneamente.
Devi **chiedere**. Ma con garbo.

**Il momento giusto:**
- Dopo il checkout dell'agriturismo
- Dopo la consegna dell'ordine
- Dopo una degustazione riuscita

**Come chiedere:**
*"Ti sei trovato bene? Mi farebbe piacere se lasciassi una recensione su Google. Ci aiuta tanto."*

**Rendi facile:**
- Crea un link diretto alla pagina recensioni
- Fai un QR code da mostrare alla reception
- Manda un messaggio post-soggiorno con il link

---

## 4. Il sistema automatico

Meglio ancora: automatizza.

Dopo ogni checkout o ordine, il sistema manda un'email:

*"Grazie per essere stati con noi! Se vi siete trovati bene, lasciateci una recensione: [LINK]"*

Chi è contento clicca e scrive.
Chi non è contento... beh, meglio saperlo e rimediare.

---

## 5. Come rispondere alle recensioni positive

Non limitarti a "Grazie!". Personalizza.

**Esempio:**
*"Grazie Marco! È stato un piacere avervi qui. Il vostro bambino con le galline è stato uno spettacolo! Vi aspettiamo per la prossima vendemmia."*

Questo mostra che:
- Leggi davvero le recensioni
- Ti ricordi i clienti
- Sei una persona, non un'azienda anonima

---

## 6. Come rispondere alle recensioni negative

Le negative fanno male. Ma sono un'opportunità.

**Regole:**
1. **Mai rispondere a caldo.** Aspetta qualche ora.
2. **Non metterti sulla difensiva.** Anche se ha torto.
3. **Scusati per l'esperienza negativa** (non per la colpa).
4. **Offri una soluzione** (sconto, invito a tornare).
5. **Porta offline** ("Ci contatti per risolvere").

**Esempio:**
*"Ci dispiace che l'esperienza non sia stata all'altezza delle aspettative. Prendiamo sul serio il suo feedback e abbiamo già parlato con lo staff. La invitiamo a contattarci per trovare insieme una soluzione."*

Chi legge vede che gestisci i problemi con professionalità.

---

## 7. Trasforma le recensioni in contenuto

Le recensioni migliori sono **testimonial gratuiti**.

Usale:
- Sul sito: cita le recensioni migliori
- Sui social: screenshot della recensione (col permesso)
- Nelle email: "Ecco cosa dicono i nostri ospiti"

Le parole degli altri valgono più delle tue.

[Scopri come ottimizzare la tua scheda Google →](${BASE_PATH}/google-my-business)

---

## 8. Non comprare recensioni false

È tentante. Ma è una pessima idea.

- Google le riconosce e ti penalizza.
- I clienti notano le recensioni false (troppo generiche, nomi strani).
- Rischi danni reputazionali enormi.

Meglio 30 recensioni vere che 100 false.
La reputazione si costruisce, non si compra.
  `,
  faqs: [
    {
      question: 'Posso cancellare le recensioni negative?',
      answer: 'Solo se violano le linee guida Google (spam, diffamazione, contenuti offensivi). Le recensioni legittime, anche negative, non si possono cancellare. Puoi solo rispondere.',
    },
    {
      question: 'Quante recensioni servono?',
      answer: 'Più sono meglio è, ma la qualità conta più della quantità. 50 recensioni con media 4.7 sono meglio di 200 con media 4.0.',
    },
    {
      question: 'Posso offrire uno sconto in cambio di una recensione?',
      answer: 'Attenzione: offrire incentivi per recensioni positive è contro le linee guida Google. Puoi chiedere una recensione, ma non "pagare" per averla positiva.',
    },
  ],
  relatedLinks: [
    { anchor: 'Google My Business', url: `${BASE_PATH}/google-my-business` },
    { anchor: 'SEO locale', url: `${BASE_PATH}/seo-locale` },
    { anchor: 'Prenotazioni agriturismo', url: `${BASE_PATH}/prenotazioni-agriturismo` },
  ],
  tocSections: [
    'Perché le recensioni contano così tanto',
    'Google vs Booking vs TripAdvisor',
    'Come chiedere recensioni (senza sembrare disperati)',
    'Il sistema automatico',
    'Come rispondere alle recensioni positive',
    'Come rispondere alle recensioni negative',
    'Trasforma le recensioni in contenuto',
    'Non comprare recensioni false',
  ],
};
