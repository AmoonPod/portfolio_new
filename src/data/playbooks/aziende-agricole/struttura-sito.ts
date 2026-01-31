import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const strutturaSito: PlaybookContent = {
  slug: 'struttura-sito',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Struttura Sito: le pagine che non possono mancare',
    subtitle: 'Un sito per aziende agricole e agriturismi deve avere una struttura precisa. Ecco le pagine essenziali per vendere e farsi trovare.',
    lastUpdated: '27 gennaio 2026',
    readTime: '5 minuti',
  },
  tldr: {
    short: 'Un sito efficace guida il visitatore verso l\'azione: prenotare, comprare, contattare. Ogni pagina ha uno scopo preciso.',
    bullets: [
      'Homepage: cattura l\'attenzione in 3 secondi',
      'Chi siamo: racconta la storia (le persone comprano da persone)',
      'Prodotti/Servizi: mostra cosa offri con foto e prezzi',
      'Contatti: rendi facile prenotare o scrivere',
    ],
  },
  quickQuestions: [
    'Il tuo sito dice chiaramente cosa fai nei primi 3 secondi?',
    'Un visitatore sa come contattarti o prenotare?',
    'Ci sono foto professionali dei prodotti e della struttura?',
    'La pagina "Chi siamo" racconta davvero la tua storia?',
  ],
  cta: {
    title: 'Vuoi un sito che funziona davvero?',
    description: 'Ti aiuto a creare un sito con la struttura giusta per convertire visitatori in clienti.',
    buttonText: 'Parliamo del tuo sito',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei un sito efficace per la mia azienda agricola/agriturismo.')}`,
  },
  content: `
## 1. Homepage: il biglietto da visita

Il visitatore decide in **3 secondi** se restare o andarsene.

**Cosa deve vedere subito:**
- Chi sei (nome, logo)
- Cosa fai (agriturismo? prodotti? entrambi?)
- Dove sei (zona geografica)
- Come contattarti (pulsante WhatsApp/telefono)

**Cosa NON mettere:**
- Muri di testo
- Slider lenti con 10 foto
- Musica automatica (per favore, no)

La homepage deve **incuriosire** e **guidare** verso le pagine di dettaglio.

---

## 2. Chi Siamo: la pagina più importante

Strano ma vero: "Chi Siamo" è spesso la pagina più visitata.
Le persone vogliono sapere **da chi comprano**.

**Cosa raccontare:**
- La storia dell'azienda (origini, generazioni)
- Chi ci lavora (nomi, volti, ruoli)
- I valori (tradizione, qualità, territorio)
- Le motivazioni (perché fate questo lavoro)

**Come raccontarlo:**
- Tono personale, non aziendale
- Foto vere della famiglia e del team
- Video se possibile (anche breve)

[Approfondisci lo storytelling →](${BASE_PATH}/racconta-la-tua-storia)

---

## 3. Prodotti: il catalogo online

Se vendi prodotti, questa pagina è cruciale.

**Per ogni prodotto:**
- Foto di qualità (più angolazioni)
- Nome e descrizione evocativa
- Formato e prezzo
- Pulsante "Acquista" o "Aggiungi al carrello"

**Organizzazione:**
- Categorie (Olio, Vino, Conserve, ecc.)
- Filtri (formato, prezzo)
- Box "Più venduti" o "Novità"

Se non vendi online, almeno mostra cosa produci con un pulsante "Contattaci per ordini".

[Approfondisci la vendita diretta →](${BASE_PATH}/vendita-diretta)

---

## 4. Agriturismo: camere e servizi

Se hai un agriturismo, questa sezione è fondamentale.

**Pagina camere:**
- Foto di ogni camera (letto, bagno, vista)
- Nome della camera
- Capacità (posti letto)
- Servizi (bagno privato, aria condizionata, ecc.)
- Prezzo (o "da X€/notte")
- Pulsante "Prenota" o "Verifica disponibilità"

**Altre pagine utili:**
- Ristorante (se fai ristorazione)
- Piscina e spazi esterni
- Fattoria didattica (se hai animali)
- Cosa fare nella zona

[Approfondisci le prenotazioni →](${BASE_PATH}/prenotazioni-agriturismo)

---

## 5. Esperienze: degustazioni, tour, eventi

Se offri esperienze, meritano una sezione dedicata.

**Per ogni esperienza:**
- Titolo accattivante
- Cosa include (durata, attività)
- Prezzo
- Calendario disponibilità
- Pulsante prenotazione

Questa pagina può generare vendite tutto l'anno, specialmente per regali e voucher.

[Approfondisci le esperienze →](${BASE_PATH}/degustazioni-eventi)

---

## 6. Contatti: rendi facile trovarti

Sembra banale, ma molti siti nascondono i contatti.

**Cosa deve esserci:**
- Indirizzo completo
- Mappa Google incorporata
- Telefono (cliccabile da mobile)
- WhatsApp (pulsante diretto)
- Email
- Form di contatto semplice
- Indicazioni stradali (come arrivarci)

**Orari:**
- Quando siete aperti per visite
- Quando risponde qualcuno al telefono

---

## 7. Blog (opzionale ma utile)

Un blog aiuta la SEO e mostra che sei attivo.

**Cosa pubblicare:**
- Vita in campagna (vendemmia, raccolta, animali)
- Ricette con i tuoi prodotti
- Eventi e novità
- Consigli su cosa fare nella zona

Non devi scrivere ogni settimana. Anche 1 articolo al mese fa la differenza.

---

## 8. La struttura tipo

Ecco uno schema che funziona:

**Menu principale:**
1. Home
2. Chi Siamo
3. Prodotti (o Shop)
4. Agriturismo (Camere, Ristorante)
5. Esperienze
6. Contatti

**Footer:**
- Link rapidi
- Social
- Indirizzo e telefono
- Privacy Policy

Semplice, chiaro, efficace.
Il visitatore trova quello che cerca in massimo 2 click.
  `,
  faqs: [
    {
      question: 'Quante pagine deve avere il sito?',
      answer: 'Dipende da cosa offri. Un agriturismo con shop e degustazioni può avere 15-20 pagine. Un produttore che vende solo olio può averne 5-6. La qualità conta più della quantità.',
    },
    {
      question: 'Devo avere per forza l\'e-commerce?',
      answer: 'No. Se preferisci vendere solo di persona o via telefono, basta mostrare i prodotti e un pulsante "Contattaci". L\'e-commerce è utile ma non obbligatorio.',
    },
    {
      question: 'Chi scrive i testi?',
      answer: 'Puoi scriverli tu (nessuno conosce la tua attività meglio di te) oppure posso aiutarti io a strutturarli. L\'importante è che siano autentici e non copiati.',
    },
  ],
  relatedLinks: [
    { anchor: 'Racconta la tua storia', url: `${BASE_PATH}/racconta-la-tua-storia` },
    { anchor: 'Vendita diretta online', url: `${BASE_PATH}/vendita-diretta` },
    { anchor: 'SEO locale', url: `${BASE_PATH}/seo-locale` },
  ],
  tocSections: [
    'Homepage: il biglietto da visita',
    'Chi Siamo: la pagina più importante',
    'Prodotti: il catalogo online',
    'Agriturismo: camere e servizi',
    'Esperienze: degustazioni, tour, eventi',
    'Contatti: rendi facile trovarti',
    'Blog (opzionale ma utile)',
    'La struttura tipo',
  ],
};
