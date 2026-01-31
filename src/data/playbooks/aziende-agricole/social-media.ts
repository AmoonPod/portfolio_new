import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const socialMedia: PlaybookContent = {
  slug: 'social-media',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Social Media: mostra la vita vera della tua azienda',
    subtitle: 'Instagram e Facebook sono vetrine gratuite. Usali per far vedere la bellezza del tuo lavoro e attrarre clienti che cercano autenticità.',
    lastUpdated: '27 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'I social media ti permettono di mostrare la vita quotidiana dell\'azienda, creando desiderio in chi vive in città e cerca autenticità.',
    bullets: [
      'Il 60% degli utenti scopre nuove attività sui social',
      'Contenuti "dietro le quinte" generano più engagement',
      'Non serve essere perfetti: serve essere veri',
      'I social portano traffico al sito (dove vendi)',
    ],
  },
  quickQuestions: [
    'Hai una pagina Facebook o Instagram aggiornata?',
    'Pubblichi regolarmente foto della vita in azienda?',
    'I tuoi post hanno un link al sito?',
    'Rispondi ai commenti e ai messaggi?',
  ],
  cta: {
    title: 'Vuoi una strategia social efficace?',
    description: 'Imposto la tua presenza tecnica (pixel, catalogo prodotti) e ti metto in contatto con chi può gestire i post per te.',
    buttonText: 'Parliamo di strategia social',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei migliorare la presenza social della mia azienda agricola.')}`,
  },
  content: `
## 1. Perché i social funzionano per l'agricoltura

Le persone in città vivono tra cemento e schermi.
Sognano la campagna, l'aria pulita, il cibo vero.

Quando vedono le tue foto — il tramonto sulla vigna, le galline nel cortile, l'olio che esce dal frantoio — **desiderano**.

Quel desiderio si trasforma in:
- Prenotazione per un weekend
- Ordine online di prodotti
- Visita per una degustazione

I social creano il **desiderio**. Il sito lo **converte** in vendita.

---

## 2. Quale piattaforma usare

**Instagram:**
Perfetto per foto e video brevi. Pubblico 25-55 anni, attento all'estetica.
Ideale per: paesaggi, prodotti, momenti di vita.

**Facebook:**
Pubblico più maturo (40+), ottimo per eventi e comunità locale.
Ideale per: eventi, promozioni, gruppi locali.

**YouTube:**
Per video più lunghi (tour virtuali, interviste, ricette).
Richiede più impegno, ma i video restano per sempre.

**TikTok:**
Pubblico giovane. Funziona se sei disposto a sperimentare format creativi.

Il mio consiglio: **inizia con Instagram + Facebook**, poi espandi.

---

## 3. Cosa pubblicare

**Dietro le quinte:**
- La raccolta delle olive
- Il formaggio che stagiona
- I trattori al lavoro
- Gli animali della fattoria

**I prodotti:**
- Bottiglie, vasetti, confezioni
- Il prodotto "in azione" (olio versato, vino nel calice)

**Le persone:**
- Tu al lavoro
- La famiglia
- I clienti felici (con permesso)

**Il territorio:**
- Paesaggi
- Alba e tramonto
- Le stagioni che cambiano

**Eventi:**
- Degustazioni
- Mercatini
- Feste

---

## 4. Come fare (senza impazzire)

Non devi pubblicare ogni giorno. Meglio 3 post a settimana fatti bene che 7 fatti male.

**Strategia semplice:**
- Lunedì: foto del lavoro settimanale
- Mercoledì: prodotto o ricetta
- Venerdì: paesaggio o momento speciale

**Strumenti utili:**
- Pianifica i post in anticipo (Meta Business Suite è gratis)
- Usa il telefono per foto spontanee
- Salva le idee quando ti vengono

---

## 5. Il tono giusto

Parla come parli. Non serve linguaggio aziendale.

❌ "Siamo lieti di presentare la nostra nuova linea di conserve artigianali..."
✅ "Quest'anno i pomodori sono venuti una bomba. Li abbiamo fatti in conserva. Volete assaggiare?"

Le persone vogliono **autenticità**, non comunicati stampa.
Errori di grammatica? Pazienza. Freddezza? Quella sì che allontana.

---

## 6. Porta al sito

I social sono belli, ma non sono tuoi.
Instagram può cambiare algoritmo domani e non ti vede più nessuno.

Usa i social per **portare traffico al sito**:
- Link in bio
- "Prenota sul sito"
- "Ordina online (link in bio)"

Sul sito raccogli email, vendi prodotti, prendi prenotazioni.
Il sito è **tuo**. I social sono **in affitto**.

---

## 7. Rispondi sempre

Quando qualcuno commenta o scrive in DM, **rispondi**.
Anche solo "Grazie!" o "Ti aspettiamo!".

Chi scrive sta alzando la mano. Non ignorarlo.
Una risposta veloce e gentile può trasformare un curioso in cliente.

---

## 8. Non serve essere perfetti

Il contenuto migliore spesso è quello meno curato:
- Il video col trattore che parte storto
- La foto del cane che ruba il formaggio
- Il selfie sudato dopo la vendemmia

Questi contenuti mostrano la **vita vera**. E la vita vera conquista.

[Scopri come fare foto che vendono →](${BASE_PATH}/foto-prodotti)
  `,
  faqs: [
    {
      question: 'Quanto tempo devo dedicare ai social?',
      answer: 'Con una buona organizzazione, 1-2 ore a settimana bastano. Pianifica, scatta quando capita, pubblica con regolarità.',
    },
    {
      question: 'Devo pagare per la pubblicità?',
      answer: 'Non necessariamente. I contenuti organici (non sponsorizzati) funzionano bene per le attività locali. La pubblicità può accelerare, ma non è obbligatoria.',
    },
    {
      question: 'Chi gestisce i social se non ho tempo?',
      answer: 'Puoi delegare a un familiare più giovane, o a un social media manager. Ma i contenuti migliori sono quelli che fai tu, dalla tua vita vera.',
    },
  ],
  relatedLinks: [
    { anchor: 'Foto prodotti che vendono', url: `${BASE_PATH}/foto-prodotti` },
    { anchor: 'Racconta la tua storia', url: `${BASE_PATH}/racconta-la-tua-storia` },
    { anchor: 'Degustazioni ed eventi', url: `${BASE_PATH}/degustazioni-eventi` },
  ],
  tocSections: [
    'Perché i social funzionano per l\'agricoltura',
    'Quale piattaforma usare',
    'Cosa pubblicare',
    'Come fare (senza impazzire)',
    'Il tono giusto',
    'Porta al sito',
    'Rispondi sempre',
    'Non serve essere perfetti',
  ],
};
