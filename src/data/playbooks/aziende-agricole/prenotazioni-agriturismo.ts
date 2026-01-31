import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const prenotazioniAgriturismo: PlaybookContent = {
  slug: 'prenotazioni-agriturismo',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Prenotazioni Agriturismo: riempi le camere senza Booking',
    subtitle: 'Basta pagare commissioni del 15-18% alle OTA. Crea un sistema di prenotazione tuo e tieni il margine in tasca.',
    lastUpdated: '27 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Le piattaforme come Booking ti portano clienti, ma ti mangiano il margine. Un sistema di prenotazione proprietario ti permette di guadagnare di più e costruire un rapporto diretto col cliente.',
    bullets: [
      'Booking prende il 15-18% a prenotazione: su 10.000€ sono 1.800€ regalati',
      'I clienti diretti tornano più facilmente l\'anno dopo',
      'Raccogli email e telefono per ricontattarli tu',
      'Mostri prezzi più bassi perché non hai commissioni',
    ],
  },
  quickQuestions: [
    'Quanto paghi di commissioni a Booking o Airbnb ogni anno?',
    'I clienti che vengono da Booking tornano l\'anno dopo?',
    'Hai i contatti (email, telefono) dei tuoi ospiti?',
    'Ti è mai capitato di essere pieno su Booking e vuoto sul sito?',
  ],
  cta: {
    title: 'Vuoi un sistema di prenotazione tutto tuo?',
    description: 'Sviluppo un booking engine proprietario sincronizzabile con Booking.com per evitare overbooking e commissioni inutili.',
    buttonText: 'Parliamo del tuo sistema prenotazioni',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, ho un agriturismo e vorrei un sistema di prenotazione senza commissioni.')}`,
  },
  content: `
## 1. Il problema delle OTA (Booking, Airbnb & Co.)

Le OTA (Online Travel Agencies) sono comode: ti portano visibilità.
Ma a che prezzo?

- **Booking.com:** 15-18% di commissione
- **Airbnb:** 3% a te + 14% al cliente
- **Expedia:** 15-20%

Fai i conti: su 100 notti a 80€, sono **oltre 1.200€** che regali ogni anno a Booking.

E non finisce qui: il cliente che prenota da Booking **non è tuo**. La prossima volta, cercherà di nuovo su Booking. E tu pagherai di nuovo la commissione.

---

## 2. La strategia: Booking per farti trovare, Sito per guadagnare

Non dico di abbandonare Booking. Dico di usarlo con intelligenza.

**La strategia vincente:**
1. Tieni **poche camere** su Booking (per visibilità e recensioni).
2. Sul tuo sito, offri un **prezzo migliore** (puoi farlo, non hai commissioni).
3. I clienti furbi confrontano e prenotano da te.
4. Tu guadagni il 15% in più.

*"Ma il cliente trova prima Booking!"*
Vero. Ma molti, prima di prenotare, cercano il nome dell'agriturismo su Google. Se il tuo sito funziona, prenotano lì.

---

## 3. Come funziona un booking engine proprietario

Il booking engine è il sistema che permette al cliente di:
1. Vedere la disponibilità (calendario).
2. Scegliere le date.
3. Pagare (carta o bonifico).
4. Ricevere conferma automatica.

**Quello che ti sviluppo io:**
- Calendario sincronizzato (evita doppie prenotazioni).
- Pagamento online sicuro (Stripe, PayPal, bonifico).
- Email di conferma automatiche.
- Promemoria pre-arrivo.
- Pannello semplice per gestire tutto dal telefono.

Sembra complicato, ma per te sarà **più facile di rispondere su WhatsApp**.

---

## 4. Il prezzo: mostra il vantaggio

La gente confronta i prezzi. Usa questo a tuo favore.

Sul tuo sito, scrivi chiaramente:
*"Prenota direttamente: 70€/notte. Su Booking: 80€/notte."*

Il cliente capisce subito che conviene prenotare da te.
Tu guadagni di più, lui paga di meno. **Tutti felici.**

---

## 5. Raccogli i dati (e riusa)

Quando prenotano da Booking, i dati restano a Booking.
Quando prenotano da te, raccogli:

- Nome e cognome
- Email
- Telefono
- Date di soggiorno
- Preferenze (colazione, allergie, ecc.)

Tra un anno:
*"Ciao Maria, ti ricordi il weekend in agriturismo? A maggio abbiamo la fioritura dei ciliegi. Ti teniamo la tua camera preferita?"*

Maria prenota subito. Senza Booking, senza commissioni.

---

## 6. Le recensioni: spostale su Google

Il problema di Booking: le recensioni restano lì.
Se un giorno chiudi con Booking, perdi tutto.

**La strategia:**
Dopo il checkout, manda un messaggio:
*"Grazie per essere stati con noi! Se vi siete trovati bene, lasciateci una recensione su Google: [link]"*

Le recensioni Google sono **tue per sempre**. E aiutano anche il posizionamento.

[Scopri come gestire le recensioni →](${BASE_PATH}/recensioni-google)

---

## 7. Channel Manager: se vuoi essere ovunque

Se vuoi restare su più piattaforme (Booking + Airbnb + sito), ti serve un **Channel Manager**.
È un software che sincronizza la disponibilità su tutti i canali.

Io posso integrarlo col tuo sito, così:
- Una prenotazione su Booking → blocca automaticamente il sito.
- Una prenotazione sul sito → blocca automaticamente Booking.

Zero rischio di overbooking.

---

## 8. Il vero guadagno: i clienti che tornano

Un agriturismo vive di **clienti fedeli**. Quelli che tornano ogni anno, portano gli amici, parlano bene di te.

Questi clienti non arrivano da Booking. Arrivano dal **passaparola** e dalla **tua comunicazione diretta**.

Costruisci la lista, cura il rapporto, e vedrai le prenotazioni arrivare da sole.
  `,
  faqs: [
    {
      question: 'Posso sincronizzare il calendario con Booking?',
      answer: 'Sì, con un Channel Manager o con iCal. Il sistema blocca automaticamente le date quando arriva una prenotazione da qualsiasi canale.',
    },
    {
      question: 'I clienti si fidano a pagare sul mio sito?',
      answer: 'Sì, se il sito è professionale e il pagamento passa da circuiti sicuri (Stripe, PayPal). Mostro i loghi di sicurezza e il lucchetto HTTPS.',
    },
    {
      question: 'Quanto costa un booking engine proprietario?',
      answer: 'Molto meno delle commissioni che paghi a Booking in un anno. È un investimento una tantum che si ripaga in pochi mesi.',
    },
  ],
  relatedLinks: [
    { anchor: 'Google My Business per agriturismi', url: `${BASE_PATH}/google-my-business` },
    { anchor: 'Recensioni Google', url: `${BASE_PATH}/recensioni-google` },
    { anchor: 'Struttura del sito', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Il problema delle OTA (Booking, Airbnb & Co.)',
    'La strategia: Booking per farti trovare, Sito per guadagnare',
    'Come funziona un booking engine proprietario',
    'Il prezzo: mostra il vantaggio',
    'Raccogli i dati (e riusa)',
    'Le recensioni: spostale su Google',
    'Channel Manager: se vuoi essere ovunque',
    'Il vero guadagno: i clienti che tornano',
  ],
};
