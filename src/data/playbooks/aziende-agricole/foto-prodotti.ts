import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const fotoProdotti: PlaybookContent = {
  slug: 'foto-prodotti',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Foto Prodotti: come vendere olio e vino con gli occhi',
    subtitle: 'Le persone comprano prima con gli occhi. Una foto brutta uccide anche il prodotto migliore. Ecco come valorizzare ciò che produci.',
    lastUpdated: '27 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Foto professionali dei tuoi prodotti aumentano le vendite online del 30-50%. Non servono attrezzature costose: servono luce, contesto e cura.',
    bullets: [
      'Il 93% delle decisioni d\'acquisto è influenzato dalle immagini',
      'Foto brutte = prodotto percepito come economico',
      'Mostra il contesto: la terra, le mani, il processo',
      'Anche col telefono puoi fare foto che vendono',
    ],
  },
  quickQuestions: [
    'Le foto sul tuo sito sono fatte col telefono in fretta?',
    'Si vede la qualità del prodotto dalle immagini?',
    'Mostri anche chi produce e come?',
    'Le foto hanno tutte uno stile coerente?',
  ],
  cta: {
    title: 'Vuoi foto che fanno vendere?',
    description: 'Collaboro con fotografi specializzati e posso insegnarti i trucchi per scattare foto migliori col tuo smartphone.',
    buttonText: 'Migliora le tue foto',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei migliorare le foto dei prodotti sul mio sito.')}`,
  },
  content: `
## 1. Perché le foto contano così tanto

Online, il cliente non può toccare, annusare o assaggiare.
Può solo **vedere**.

Una bottiglia di olio fotografata male sembra olio del discount.
La stessa bottiglia, fotografata bene, sembra un prodotto premium.

Il prodotto è lo stesso. Ma la **percezione del valore** cambia completamente.
E la percezione determina quanto il cliente è disposto a pagare.

---

## 2. Gli errori più comuni

❌ **Foto col flash del telefono** → Luce piatta, colori falsati.

❌ **Sfondo disordinato** → Distrae, sembra poco professionale.

❌ **Solo il prodotto isolato** → Freddo, anonimo, senza storia.

❌ **Foto troppo piccole o sgranate** → Sembrano spam.

❌ **Stile incoerente** → Ogni prodotto sembra di un'azienda diversa.

---

## 3. La luce naturale è tua amica

Non serve uno studio fotografico.
Serve una **finestra**.

**Come fare:**
1. Posiziona il prodotto vicino a una finestra (luce indiretta, non sole diretto).
2. Usa un fondo neutro (tavolo di legno, tovaglia chiara, ardesia).
3. Scatta con calma, fai più prove.

La luce del mattino o del tardo pomeriggio è la migliore.
Evita la luce a mezzogiorno (troppo dura) e il flash (uccide tutto).

---

## 4. Il contesto racconta la storia

Una bottiglia di vino su sfondo bianco è anonima.
Una bottiglia di vino accanto a un grappolo d'uva, su un tavolo rustico, con le colline sullo sfondo, **racconta una storia**.

**Idee per il contesto:**
- Prodotti sul tavolo della cucina contadina
- Olio versato sul pane fresco
- Formaggio tagliato con coltello artigianale
- Mani rugose del produttore che raccolgono le olive
- Vigneti al tramonto

Il cliente non compra solo il prodotto: compra l'**esperienza** e la **provenienza**.

---

## 5. Mostra le persone

Le foto con persone generano più fiducia.

Mostra:
- Chi produce (tu, la tua famiglia)
- Il momento della lavorazione
- L'interazione con i clienti (degustazioni)

Non servono modelli. Serve **autenticità**.
Le mani sporche di terra sono più credibili di una foto patinata.

---

## 6. Coerenza visiva

Tutte le foto del sito devono sembrare della stessa "famiglia".

**Cosa mantenere coerente:**
- Stile di luce (sempre naturale, o sempre studio)
- Palette colori (i colori della tua terra)
- Tipo di sfondi (legno, pietra, tessuti naturali)
- Proporzioni (tutte orizzontali, o tutte quadrate)

Questa coerenza fa sembrare il brand **professionale**.

---

## 7. Foto tecniche per e-commerce

Per vendere online, servono anche foto "tecniche":

- **Prodotto frontale** (bottiglia, etichetta leggibile)
- **Dettaglio etichetta** (ingredienti, origine)
- **Dimensioni** (magari vicino a un oggetto di riferimento)
- **Varianti** (se hai diversi formati)

Queste foto non devono essere artistiche, devono essere **chiare**.
Il cliente deve capire esattamente cosa riceverà.

---

## 8. Cosa puoi fare subito

Anche senza fotografo professionista:

1. **Pulisci** il prodotto (niente polvere, impronte).
2. **Trova** una finestra con bella luce.
3. **Prepara** uno sfondo semplice (tavolo legno, stoffa).
4. **Scatta** tante foto, scegli le migliori.
5. **Modifica** leggermente (luminosità, contrasto) con app gratuite.

Se vuoi fare il salto di qualità, un fotografo specializzato in food/prodotto costa meno di quanto pensi e le foto le usi per anni.

[Scopri come raccontare la tua storia →](${BASE_PATH}/racconta-la-tua-storia)
  `,
  faqs: [
    {
      question: 'Basta il telefono o serve una macchina fotografica?',
      answer: 'I telefoni moderni fanno foto eccellenti. Il segreto è la luce e la composizione, non l\'attrezzatura. Certo, una reflex dà più controllo, ma puoi iniziare col telefono.',
    },
    {
      question: 'Quanto costa un servizio fotografico professionale?',
      answer: 'Un set di 15-20 foto di prodotto costa indicativamente 200-400€. Sembrano tanti, ma quelle foto le usi per anni su sito, social, cataloghi. È un investimento.',
    },
    {
      question: 'Posso usare foto stock (scaricate da internet)?',
      answer: 'Per i TUOI prodotti, no. Il cliente vuole vedere il TUO olio, non un olio generico. Le foto stock vanno bene per immagini di contorno (es. paesaggi generici), ma il prodotto deve essere reale.',
    },
  ],
  relatedLinks: [
    { anchor: 'Racconta la tua storia', url: `${BASE_PATH}/racconta-la-tua-storia` },
    { anchor: 'Vendita diretta online', url: `${BASE_PATH}/vendita-diretta` },
    { anchor: 'Social media per aziende agricole', url: `${BASE_PATH}/social-media` },
  ],
  tocSections: [
    'Perché le foto contano così tanto',
    'Gli errori più comuni',
    'La luce naturale è tua amica',
    'Il contesto racconta la storia',
    'Mostra le persone',
    'Coerenza visiva',
    'Foto tecniche per e-commerce',
    'Cosa puoi fare subito',
  ],
};
