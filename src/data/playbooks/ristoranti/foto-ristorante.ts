import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const fotoRistorante: PlaybookContent = {
  slug: 'foto-ristorante',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Foto dei piatti: come farle belle (anche col telefono)',
    subtitle: 'Non serve essere un fotografo per fare foto invitanti. Basta seguire queste 4 regole.',
    lastUpdated: '22 gennaio 2026',
    readTime: '4 minuti',
  },
  tldr: {
    short: 'Una foto brutta è peggio di nessuna foto. Impara a usare la luce naturale e rendi giustizia ai tuoi piatti.',
    bullets: [
      'Usa solo la luce della finestra (mai il flash!)',
      'Pulisci bene il piatto e lo sfondo',
      'Fotografa dall\'alto o a 45 gradi',
      'Non esagerare con i filtri',
    ],
  },
  quickQuestions: [
    'Le tue foto attuali fanno venire fame?',
    'Sono luminose o sembrano scure/gialle?',
    'Lo sfondo è ordinato?',
    'I colori sono reali?',
  ],
  cta: {
    title: 'Vuoi foto professionali senza stress?',
    description: 'Collaboro con fotografi specializzati nel food. Tu cucini, loro scattano, io metto tutto online.',
    buttonText: 'Chiedi preventivo servizio foto',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei info sul servizio fotografico per i miei piatti.')}`,
  },
  content: `
## 1. La luce è tutto (ed è gratis)

L'errore numero uno? Fare le foto di sera, sotto le luci gialle della sala, o peggio col flash del telefono.
Risultato: il cibo sembra "malato" e unto.

### Fai così

Fai le foto **di giorno, vicino a una finestra**.
La luce naturale rende i colori vivi e reali. Il pomodoro sembra rosso vero, l'insalata verde brillante.
Non serve sole diretto (che crea ombre dure), basta la luce diffusa del giorno.

---

## 2. Pulisci la scena

Prima di scattare, guarda bene.
C'è una briciola sulla tovaglia? Una macchiolina sul bordo del piatto? Un bicchiere mezzo vuoto sullo sfondo?
Il telefono vede tutto.

### Fai così

- Pulisci il bordo del piatto con un tovagliolo.
- Usa uno sfondo neutro (tavolo di legno, tovaglia pulita).
- Togli tutto quello che non serve (chiavi, scontrini, posate sporche).
Il protagonista è il piatto.

---

## 3. L'angolazione giusta

Non tutte le angolazioni vanno bene per tutto.

### Fai così

- **Dall'alto (Zenitale):** Perfetto per **Pizze**, insalate, taglieri. Tutto ciò che è "piatto".
- **Di lato (45 gradi):** Come quando sei seduto a tavola. Perfetto per **Pasta**, hamburger, dolci alti. Serve a dare profondità.

Sperimenta un po', ma cerca di tenere il telefono dritto, non storto.

[Guida: Come strutturare il menu sul sito →](${BASE_PATH}/menu-online)

---

## 4. Attenzione ai filtri

Vedi quelle foto su Instagram con colori sparati, contrasto al massimo e pelle arancione? Ecco, col cibo non farlo.

### Fai così

Se la foto è fatta con buona luce, serve pochissimo ritocco.
Puoi aumentare leggermente la **luminosità** se è un po' scura.
Puoi aumentare di pochissimo la **saturazione** (colore) per rendere il piatto più vivo.
Basta. Se sembrano caramelle radioattive, hai esagerato.

---

## 5. Cosa fotografare?

Non devi fotografare tutto il menu (ci metteresti una vita).

### Fai così

Fotografa i tuoi "Top Player":
1.  I 3 piatti che vendi di più.
2.  Il piatto più bello da vedere.
3.  Un dettaglio del locale che piace ai clienti.

Queste 5-6 foto bastano per il sito e per iniziare sui social.

[Approfondisci: Social Media per ristoranti →](${BASE_PATH}/social-media)
  `,
  faqs: [
    {
      question: 'Meglio reflex o telefono?',
      answer: 'Un iPhone o un Samsung di ultima generazione fanno foto pazzesche se c\'è buona luce. La reflex serve se vuoi stampare poster giganti, per il web il telefono va benissimo.',
    },
    {
      question: 'Devo fotografare il piatto appena esce dalla cucina?',
      answer: 'Sì! La pasta è lucida, il formaggio fila, la verdura è croccante. Dopo 10 minuti il cibo si "spegne".',
    },
    {
      question: 'Quanto costa un fotografo professionista?',
      answer: 'Dipende, ma per un servizio base per il web siamo sui 200-400€. Se non hai tempo o voglia, è un investimento che si ripaga subito.',
    },
  ],
  relatedLinks: [
    { anchor: 'Menu digitale efficace', url: `${BASE_PATH}/menu-online` },
    { anchor: 'Sito web per ristoranti', url: `${BASE_PATH}/struttura-sito` },
    { anchor: 'Social media base', url: `${BASE_PATH}/social-media` },
  ],
  tocSections: [
    'La luce è tutto (ed è gratis)',
    'Pulisci la scena',
    'L\'angolazione giusta',
    'Attenzione ai filtri',
    'Cosa fotografare?',
  ],
};
