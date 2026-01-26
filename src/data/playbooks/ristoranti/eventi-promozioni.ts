import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const eventiPromozioni: PlaybookContent = {
  slug: 'eventi-promozioni',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Eventi e Serate: come riempire il locale di Martedì',
    subtitle: 'Il weekend si riempie da solo. Il vero guadagno sta nel riempire i giorni "morti". Ecco come.',
    lastUpdated: '26 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Non aspettare che i clienti arrivino per caso. Crea un motivo per farli venire. Organizza eventi ricorrenti e comunicali per tempo.',
    bullets: [
      'Inventa un format fisso per i giorni deboli (es. Martedì della Pizza)',
      'Pubblica il calendario eventi sul sito (non solo social)',
      'Raccogli le prenotazioni in anticipo',
      'Usa le promozioni per portare gente nuova, non per svalutarti',
    ],
  },
  quickQuestions: [
    'Il tuo locale è vuoto a inizio settimana?',
    'I clienti sanno cosa fai a Capodanno con un mese di anticipo?',
    'Hai una lista email/WhatsApp dei tuoi clienti?',
    'Sai quanti clienti ti ha portato l\'ultima promozione?',
  ],
  cta: {
    title: 'Vuoi organizzare eventi che funzionano?',
    description: 'Ti aiuto a creare la pagina eventi sul sito e il sistema per raccogliere le prenotazioni.',
    buttonText: 'Parliamo di eventi',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei spingere di più gli eventi nel mio ristorante.')}`,
  },
  content: `
## 1. Il problema del "Martedì sera"

Tutti i ristoranti sono pieni il sabato sera. Lì non serve marketing.
Il bravo ristoratore si vede dal lunedì al giovedì.
Avere la sala vuota costa: affitto, personale e luce li paghi lo stesso.

### La soluzione
Non sperare nel passaggio. Crea un **Evento**.
Dai alle persone un motivo specifico per uscire di casa proprio quel martedì.

---

## 2. Inventa un Format (non una tantum)

L'evento singolo (es. "Cena con delitto") è faticoso: devi organizzarlo e promuoverlo da zero ogni volta.
Il **Format Ricorrente** è meglio: la gente si abitua.

Esempi:
- **Il Mercoledì della Degustazione:** Ogni mercoledì un vino diverso e 3 cicchetti a 15€.
- **Il Giovedì Universitario:** Sconto studenti o birra media al prezzo della piccola.
- **La Domenica in Famiglia:** Menu bambini gratis se mangiano i genitori.

Dopo un mese, non devi più nemmeno pubblicizzarlo. I clienti sanno che "il mercoledì si va lì".

---

## 3. Il sito deve fare da calendario

Se metti l'evento solo su Instagram, dopo 24 ore la Storia sparisce.
Sul sito devi avere una pagina **"Eventi & Serate"**.

Cosa scriverci:
1.  **Titolo e Data:** Chiaro e grande.
2.  **Menu e Prezzo:** Nessuna sorpresa. "30€ tutto incluso".
3.  **Tasto PRENOTA:** Fondamentale.

Così quando uno cerca su Google "Cena San Valentino [Tua Città]", trova la tua pagina.

[Come strutturare le pagine del sito →](${BASE_PATH}/struttura-sito)

---

## 4. Promozioni intelligenti (non svenderti)

Fare lo sconto del 50% attira solo clienti che vogliono spendere poco. Quando togli lo sconto, spariscono.
La promozione giusta **aggiunge valore**, non toglie prezzo.

- ❌ "Sconto 20% su tutto"
- ✅ "Ordina due burger, le birre le offriamo noi"
- ✅ "Vieni a cena martedì, il dolce è omaggio"

Il cliente percepisce un regalo, tu mantieni il margine sui piatti principali.

---

## 5. Riempi prima, non dopo

L'errore classico: pubblicare la locandina di San Valentino l'11 Febbraio.
È tardi. La gente ha già prenotato altrove.

### La regola dei tempi
- **Grandi Eventi (Natale, Capodanno, S.Valentino):** Pagina online 45 giorni prima.
- **Eventi Mensili (Degustazioni):** 20 giorni prima.
- **Eventi Settimanali:** Reminder 3 giorni prima.

---

## 6. L'arma segreta: il Database

Se ogni volta che fai un evento devi sperare che Facebook mostri il tuo post, sei fregato.
Devi possedere i contatti.

Se hai raccolto le email o i numeri WhatsApp (tramite le prenotazioni online):
1.  Mandi un messaggio a 500 clienti: *"Giovedì serata Paella. Prenotazioni aperte."*
2.  Tempo 1 ora, hai 30 tavoli prenotati.
3.  Costo: zero.

Questo è il vero potere del digitale.

[Scopri come raccogliere dati con le prenotazioni →](${BASE_PATH}/prenotazioni-online)

---

## 7. Misura se funziona

Alla fine della serata, fai i conti.
- Quanti coperti in più rispetto a un martedì normale?
- Quanto hanno speso in media (scontrino medio)?
- Quanti erano clienti nuovi?

Se la serata Paella ti porta 40 persone ma spendono pochissimo e fanno casino, cambiala.
Se la serata Vini ti porta 20 persone che spendono 60€ a testa, replicala subito.

[Come leggere i numeri con la SEO →](${BASE_PATH}/seo-locale)
  `,
  faqs: [
    {
      question: 'Come raccolgo le email dei clienti?',
      answer: 'Il modo migliore è chiederla quando prenotano online. Oppure con un QR code al tavolo: "Iscriviti per ricevere gli inviti agli eventi esclusivi".',
    },
    {
      question: 'Devo chiedere un acconto per gli eventi?',
      answer: 'Per le serate importanti (Capodanno, San Valentino) ASSOLUTAMENTE SÌ. Altrimenti rischi tavoli vuoti all\'ultimo minuto. Per serate normali, basta la prenotazione.',
    },
    {
      question: 'Posso fare eventi se il locale è piccolo?',
      answer: 'Certo. Anzi, l\'esclusività ("Solo 20 posti disponibili") crea urgenza e fa prenotare prima.',
    },
  ],
  relatedLinks: [
    { anchor: 'Sistema prenotazioni ed email', url: `${BASE_PATH}/prenotazioni-online` },
    { anchor: 'Social media per spingere gli eventi', url: `${BASE_PATH}/social-media` },
    { anchor: 'Struttura sito ed eventi', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Il problema del "Martedì sera"',
    'Inventa un Format (non una tantum)',
    'Il sito deve fare da calendario',
    'Promozioni intelligenti (non svenderti)',
    'Riempi prima, non dopo',
    "L'arma segreta: il Database",
    'Misura se funziona',
  ],
};
