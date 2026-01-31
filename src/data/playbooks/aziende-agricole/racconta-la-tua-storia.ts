import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const raccontaLaTuaStoria: PlaybookContent = {
  slug: 'racconta-la-tua-storia',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Racconta la Tua Storia: il marketing che nessuno può copiarti',
    subtitle: 'Il tuo olio lo fanno in molti. Ma la TUA storia è unica. Ecco come usarla per vendere di più e farti ricordare.',
    lastUpdated: '27 gennaio 2026',
    readTime: '7 minuti',
  },
  tldr: {
    short: 'Le persone non comprano prodotti, comprano storie. La tua famiglia, la tua terra, il tuo metodo: sono asset di marketing che i competitor non possono copiare.',
    bullets: [
      'Lo storytelling aumenta la percezione di valore del 20-30%',
      'I clienti pagano di più per prodotti con una storia',
      'La storia crea connessione emotiva e fedeltà',
      'È l\'unico vantaggio competitivo non replicabile',
    ],
  },
  quickQuestions: [
    'Da quante generazioni è attiva la tua azienda?',
    'C\'è un aneddoto su come è iniziato tutto?',
    'Cosa fai di diverso dagli altri produttori?',
    'I clienti conoscono la tua storia?',
  ],
  cta: {
    title: 'Vuoi raccontare la tua storia online?',
    description: 'Ti aiuto a costruire una narrazione autentica che trasforma visitatori in clienti affezionati.',
    buttonText: 'Raccontiamo la tua storia',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei raccontare la storia della mia azienda agricola sul sito.')}`,
  },
  content: `
## 1. Perché la storia vende

Fai un esperimento mentale.

**Scenario A:** Bottiglia di olio, etichetta anonima, prezzo 8€.

**Scenario B:** Stessa bottiglia. Ma sull'etichetta c'è scritto:
*"Olio extravergine della famiglia Bianchi. Ulivi centenari coltivati da 4 generazioni sulle colline di Castelvetro. Raccolto a mano a ottobre, franto entro 6 ore."*

Quale compreresti? Quale pagheresti di più?

La **storia** trasforma un prodotto anonimo in qualcosa di **unico e prezioso**.

---

## 2. Gli elementi della tua storia

Ogni azienda agricola ha una storia. Spesso non la racconti perché ti sembra "normale". Ma per il cliente di città è **straordinaria**.

**Cosa raccontare:**

- **Le origini:** Come è nata l'azienda? Chi l'ha fondata? Perché?
- **La famiglia:** Chi ci lavora oggi? Figli, nipoti, cugini?
- **La terra:** Da dove viene? Che caratteristiche ha? Microclima?
- **Il metodo:** Cosa fai di diverso? Tradizione o innovazione?
- **Le sfide:** Che difficoltà hai superato? Gelate, siccità, crisi?
- **I valori:** Perché fai questo lavoro? Cosa ti appassiona?

---

## 3. Come raccontarla sul sito

La storia non va nascosta in una pagina "Chi siamo" che nessuno legge.
Va **integrata ovunque**.

**Nella homepage:**
*"Dal 1952, quattro generazioni dedicano la vita a questi ulivi."*

**Nella pagina prodotto:**
*"Quest'olio nasce da 200 piante di Leccino, alcune piantate da mio nonno negli anni '60."*

**Nelle email:**
*"Ciao, sono Marco. Ti scrivo dalla collina dove sono nato..."*

La storia crea **connessione**. Non sei più un fornitore anonimo, sei una persona.

---

## 4. Il potere delle foto autentiche

Le parole raccontano, le immagini mostrano.

**Foto che funzionano:**
- Foto di famiglia in mezzo agli ulivi
- Nonno e nipote che lavorano insieme
- Mani rugose che raccolgono
- L'alba sulla vigna
- Il momento della pigiatura

**Foto che NON funzionano:**
- Foto stock patinate
- Immagini troppo "pubblicitarie"
- Prodotti su sfondo bianco anonimo

[Approfondisci le foto prodotto →](${BASE_PATH}/foto-prodotti)

---

## 5. Video: il livello successivo

Se una foto vale mille parole, un video ne vale un milione.

Non serve un documentario. Basta un video di 60 secondi:
- Tu che parli della tua passione
- Il rumore del frantoio
- Il tramonto sui campi

Lo pubblichi sul sito, su YouTube, sui social.
Chi lo vede, si sente già un po' a casa tua.

---

## 6. Testimonial: lascia che parlino gli altri

La tua storia è potente. Ma ancora più potente è quando la raccontano **gli altri**.

**Raccogli testimonianze:**
- Clienti che tornano ogni anno
- Ristoranti che usano i tuoi prodotti
- Giornalisti o food blogger che ti hanno visitato

Una frase come *"Compro l'olio da loro da 15 anni, non riesco più a usarne un altro"* vale più di mille parole tue.

---

## 7. La storia come filtro

Raccontare la tua storia non serve solo a vendere di più.
Serve a vendere alle **persone giuste**.

Chi cerca il prezzo più basso non è il tuo cliente.
Chi cerca qualità, autenticità e una storia vera, lo è.

La tua narrazione attira i secondi e allontana i primi.
**Meglio meno clienti, ma quelli giusti.**

---

## 8. Come iniziare

Non devi scrivere un romanzo. Inizia così:

1. **Intervistati:** Rispondi a voce alle domande del paragrafo 2.
2. **Registra:** Usa il telefono, parla liberamente.
3. **Trascrivi:** Le parole migliori sono quelle spontanee.
4. **Semplifica:** Taglia, riordina, rendi leggibile.

Oppure parliamone insieme: ti aiuto a tirare fuori la storia e a metterla sul sito.
  `,
  faqs: [
    {
      question: 'E se la mia storia non è "speciale"?',
      answer: 'Ogni storia è speciale per chi non la vive. Tu sei abituato, ma per un cliente di Milano la tua vita tra gli ulivi è affascinante. Fidati.',
    },
    {
      question: 'Non mi piace mettermi in mostra...',
      answer: 'Lo capisco. Ma non devi "metterti in mostra", devi condividere la tua passione. La gente apprezza l\'autenticità, non la perfezione.',
    },
    {
      question: 'Posso raccontare anche i momenti difficili?',
      answer: 'Assolutamente sì. Le sfide superate rendono la storia più vera. La gelata del 2018, la siccità, il Covid... mostrano resilienza e passione.',
    },
  ],
  relatedLinks: [
    { anchor: 'Foto prodotti che vendono', url: `${BASE_PATH}/foto-prodotti` },
    { anchor: 'Filiera corta e Km0', url: `${BASE_PATH}/filiera-corta` },
    { anchor: 'Social media per aziende agricole', url: `${BASE_PATH}/social-media` },
  ],
  tocSections: [
    'Perché la storia vende',
    'Gli elementi della tua storia',
    'Come raccontarla sul sito',
    'Il potere delle foto autentiche',
    'Video: il livello successivo',
    'Testimonial: lascia che parlino gli altri',
    'La storia come filtro',
    'Come iniziare',
  ],
};
