import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const seoLocale: PlaybookContent = {
  slug: 'seo-locale',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'SEO Locale: fatti trovare da chi cerca "agriturismo vicino a me"',
    subtitle: 'Quando qualcuno cerca un agriturismo o prodotti tipici nella tua zona, il tuo sito deve apparire. Ecco come posizionarti su Google.',
    lastUpdated: '27 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'La SEO locale ti fa trovare da chi cerca attività come la tua nella tua zona. È gratis, funziona 24/7 e porta clienti pronti a comprare.',
    bullets: [
      '76% delle ricerche locali porta a una visita entro 24 ore',
      'Chi cerca "agriturismo + città" è pronto a prenotare',
      'Google premia i siti veloci e ben strutturati',
      'La SEO locale batte la pubblicità a pagamento nel lungo termine',
    ],
  },
  quickQuestions: [
    'Se cerchi "agriturismo + la tua città" su Google, appari?',
    'Il tuo sito è veloce da telefono?',
    'Hai una pagina dedicata per ogni servizio che offri?',
    'Google capisce dove sei e cosa fai?',
  ],
  cta: {
    title: 'Vuoi apparire su Google quando ti cercano?',
    description: 'Ti aiuto a ottimizzare il sito per la SEO locale: così ti trovano i clienti che cercano nella tua zona.',
    buttonText: 'Parliamo di SEO',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei migliorare il posizionamento Google del mio agriturismo.')}`,
  },
  content: `
## 1. Cos'è la SEO locale (in parole semplici)

SEO = Search Engine Optimization = Farsi trovare su Google.
**Locale** = nella tua zona geografica.

Quando qualcuno cerca:
- "agriturismo Modena"
- "olio extravergine Emilia Romagna"
- "fattoria didattica vicino a me"

Google decide quali risultati mostrare.
La SEO locale serve a far sì che **mostri te**.

---

## 2. Perché è fondamentale per agriturismi

A differenza di un e-commerce nazionale, tu vendi a persone che **vengono fisicamente da te**.
Turisti, famiglie della domenica, aziende che cercano location per eventi.

Queste persone cercano su Google. Se non ti trovano, vanno dal concorrente.
Se ti trovano, hai un cliente nuovo.

È così semplice. E così importante.

---

## 3. I 3 pilastri della SEO locale

**1. Google My Business**
La scheda che appare su Google Maps. Deve essere completa e aggiornata.
[Approfondisci Google My Business →](${BASE_PATH}/google-my-business)

**2. Il sito web ottimizzato**
Veloce, mobile-friendly, con contenuti che parlano della tua zona.

**3. Le recensioni**
Più recensioni positive hai, più Google ti premia.
[Approfondisci le recensioni →](${BASE_PATH}/recensioni-google)

---

## 4. Come ottimizzare il sito per la SEO locale

**Titoli e descrizioni:**
Ogni pagina deve avere un titolo che include la keyword + la zona.
Esempio: "Agriturismo con piscina a Vignola | Il Poggio"

**Contenuti localizzati:**
Parla della tua zona. Cita i paesi vicini, le attrazioni, gli eventi.
"A 10 minuti da Maranello, nel cuore delle colline modenesi..."

**Pagina contatti:**
Indirizzo completo, mappa Google incorporata, telefono cliccabile.

**Schema Markup:**
Codice invisibile che dice a Google esattamente cosa sei e dove sei.
(Di questo me ne occupo io quando sviluppo il sito.)

---

## 5. La velocità conta

Google misura quanto è veloce il tuo sito. Se è lento, ti penalizza.

**Il problema:**
I siti WordPress pieni di plugin sono spesso lentissimi.
I siti fatti con page builder (Wix, Squarespace) ancora peggio.

**La soluzione:**
Siti sviluppati in Next.js (come i miei) caricano in meno di 1 secondo.
Google li adora. E anche i clienti.

---

## 6. Mobile first

Il 70% delle ricerche locali avviene da telefono.
Se il tuo sito è difficile da usare da mobile, perdi clienti.

**Cosa deve funzionare:**
- Testo leggibile senza zoomare
- Pulsanti grandi e cliccabili
- Telefono che si chiama con un tap
- Form semplici da compilare

Non è un "nice to have". È **obbligatorio**.

---

## 7. I contenuti che ti posizionano

Google ama i contenuti utili. Crea pagine che rispondono alle domande dei tuoi clienti:

- "Cosa fare a [tua zona] nel weekend"
- "I migliori prodotti tipici di [tua provincia]"
- "Agriturismi con fattoria didattica in [regione]"

Questi contenuti attirano traffico e ti posizionano come esperto della zona.

---

## 8. Quanto tempo ci vuole?

La SEO non è immediata. I risultati arrivano in 3-6 mesi.
Ma una volta che ti posizioni, resti lì. **Gratis.**

A differenza della pubblicità a pagamento (che smette di funzionare quando smetti di pagare), la SEO continua a portare clienti nel tempo.

È un investimento, non una spesa.
  `,
  faqs: [
    {
      question: 'Posso fare SEO da solo?',
      answer: 'Le basi sì (Google My Business, contenuti). La parte tecnica (velocità, schema markup, struttura) richiede competenze specifiche. Posso occuparmene io.',
    },
    {
      question: 'Quanto costa la SEO?',
      answer: 'Dipende. Un sito già ben fatto richiede pochi interventi. Un sito vecchio va spesso rifatto. Il vantaggio è che i risultati durano anni.',
    },
    {
      question: 'SEO o pubblicità: cosa funziona meglio?',
      answer: 'Breve termine: pubblicità. Lungo termine: SEO. L\'ideale è usare la pubblicità all\'inizio mentre la SEO "matura", poi ridurre la pubblicità.',
    },
  ],
  relatedLinks: [
    { anchor: 'Google My Business', url: `${BASE_PATH}/google-my-business` },
    { anchor: 'Recensioni Google', url: `${BASE_PATH}/recensioni-google` },
    { anchor: 'Struttura del sito', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Cos\'è la SEO locale (in parole semplici)',
    'Perché è fondamentale per agriturismi',
    'I 3 pilastri della SEO locale',
    'Come ottimizzare il sito per la SEO locale',
    'La velocità conta',
    'Mobile first',
    'I contenuti che ti posizionano',
    'Quanto tempo ci vuole?',
  ],
};
