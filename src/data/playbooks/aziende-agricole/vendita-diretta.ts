import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const venditaDiretta: PlaybookContent = {
  slug: 'vendita-diretta',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Vendita Diretta Online: taglia fuori gli intermediari',
    subtitle: 'Basta regalare margini a GDO e distributori. Vendi i tuoi prodotti direttamente al consumatore finale e guadagna di più.',
    lastUpdated: '27 gennaio 2026',
    readTime: '7 minuti',
  },
  tldr: {
    short: 'Vendere online i tuoi prodotti agricoli ti permette di recuperare i margini che oggi lasci ai grossisti, costruendo un rapporto diretto con chi apprezza davvero la qualità.',
    bullets: [
      'Margini superiori del 40-60% rispetto alla GDO',
      'I clienti ti cercano: vogliono qualità e provenienza certa',
      'Zero dipendenza da intermediari e distributori',
      'Costruisci una lista clienti che riordineranno ogni anno',
    ],
  },
  quickQuestions: [
    'Quanto ti paga oggi il grossista per il tuo olio o il tuo vino?',
    'Sai quanti clienti privati comprerebbero volentieri da te?',
    'Hai mai calcolato quanto margine lasci alla GDO?',
    'I turisti che visitano la tua azienda tornano a comprare?',
  ],
  cta: {
    title: 'Vuoi vendere direttamente ai tuoi clienti?',
    description: 'Ti sviluppo un e-commerce su misura, facile da usare e già configurato con privacy policy e cookie banner a norma.',
    buttonText: 'Parliamo del tuo e-commerce',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, ho un\'azienda agricola e vorrei vendere i miei prodotti online.')}`,
  },
  content: `
## 1. Il problema della filiera tradizionale

Produci qualità. Ma quanto guadagni davvero?

Il grossista ti paga 4€ al litro per l'olio. Lo stesso olio viene venduto al supermercato a 12€. Chi guadagna?

- Il trasportatore.
- Il magazzino.
- La GDO.
- Tu? Le briciole.

### La verità scomoda
Se vendi solo ai grossisti, stai **finanziando la loro attività** col tuo lavoro.
Il consumatore finale pagherebbe volentieri 10€ per il tuo olio, sapendo da dove viene. Ma tu ne vedi solo 4€.

---

## 2. La vendita diretta online

Internet ha cambiato tutto. Oggi puoi raggiungere il consumatore finale senza intermediari.

**Come funziona:**
1. Il cliente trova il tuo sito (o ti scopre su Google/social).
2. Vede i prodotti, legge la tua storia.
3. Ordina e paga online (carta, PayPal, bonifico).
4. Tu spedisci con corriere. Oppure lui viene a ritirare in azienda.

Il margine? **Tutto tuo.** Al netto del costo di spedizione.

---

## 3. Ma chi compra online prodotti agricoli?

Più gente di quanto pensi.

- **Famiglie attente alla qualità** che non si fidano del supermercato.
- **Ex turisti** che hanno visitato la tua zona e vogliono continuare a comprare.
- **Emigrati** che cercano i sapori di casa.
- **Regali aziendali** (cesti natalizi, omaggi per clienti).

Questi clienti non cercano il prezzo più basso. Cercano **provenienza, storia e fiducia**.
E sono disposti a pagare.

---

## 4. Cosa puoi vendere online

Praticamente tutto ciò che può essere spedito:

- **Olio extravergine** (il prodotto più venduto online)
- **Vino** (con le giuste autorizzazioni)
- **Miele, confetture, conserve**
- **Formaggi stagionati** (pecorino, parmigiano)
- **Pasta, farine, legumi secchi**
- **Salumi** (con spedizione refrigerata)
- **Box degustazione** (assortimenti regalo)

E se hai un agriturismo, puoi vendere anche **voucher** per soggiorni e degustazioni.

---

## 5. Quanto costa avviare un e-commerce agricolo?

Meno di quanto pensi, se fatto nel modo giusto.

**Da evitare:**
- Marketplace generici (Amazon, eBay) → paghi commissioni altissime
- Piattaforme con canoni mensili infiniti
- Soluzioni complesse che richiedono un tecnico

**La mia proposta:**
Un e-commerce semplice, integrato nel tuo sito, sviluppato su misura.
- Paghi una volta sola lo sviluppo.
- Gestisci tutto tu dal telefono.
- Zero commissioni sulle vendite.

Il risparmio rispetto ai marketplace? Migliaia di euro l'anno.

---

## 6. La spedizione: come funziona

La spedizione è il dubbio più grande. Ma oggi è semplice.

**Per prodotti secchi** (olio, pasta, vino):
- Corriere standard (BRT, GLS, Poste).
- Costo: 6-10€ per pacco.
- Consegna in 24-48 ore.

**Per prodotti freschi** (formaggi, salumi):
- Corriere refrigerato o box isotermico con ghiaccio.
- Costo un po' più alto, ma fattibile.

Il trucco? **Includi la spedizione nel prezzo** sopra una certa soglia.
"Spedizione gratuita sopra i 50€" → aumenta lo scontrino medio.

---

## 7. Costruire la lista clienti

Ogni cliente che compra online diventa un **contatto**. Email, telefono, indirizzo.

Tra 6 mesi, quando hai il nuovo olio pronto:
*"Ciao Giovanni, la spremitura 2026 è pronta. Vuoi che ti spedisca le tue 6 bottiglie come l'anno scorso?"*

Lui riordina con un click. Tu hai venduto senza cercarlo.
**Questo è il vero valore della vendita diretta.**

[Scopri come fidelizzare i clienti →](${BASE_PATH}/degustazioni-eventi)

---

## 8. Dal casolare al mondo

Non devi essere Amazon. Non ti serve un magazzino.
Ti serve un sito fatto bene e un sistema semplice per gestire ordini e spedizioni.

Il resto lo fai tu: la qualità, la passione, la storia.
Io mi occupo della tecnologia.
  `,
  faqs: [
    {
      question: 'Devo avere la partita IVA agricola?',
      answer: 'Sì, per vendere online serve partita IVA. Se sei già un\'azienda agricola, hai già tutto. Il tuo commercialista ti guiderà sugli aspetti fiscali.',
    },
    {
      question: 'Posso vendere vino online?',
      answer: 'Sì, con la licenza UTIF (Agenzia Dogane) per la vendita a distanza. Molte aziende vitivinicole già ce l\'hanno. Se non ce l\'hai, ti spiego come ottenerla.',
    },
    {
      question: 'E se arriva rotto?',
      answer: 'Usi imballaggi adeguati (scatole con protezioni) e assicuri la spedizione. I danni sono rarissimi, e quando capitano, rispedisci il prodotto. Il cliente apprezzerà la serietà.',
    },
  ],
  relatedLinks: [
    { anchor: 'Racconta la tua storia', url: `${BASE_PATH}/racconta-la-tua-storia` },
    { anchor: 'Foto prodotti che vendono', url: `${BASE_PATH}/foto-prodotti` },
    { anchor: 'Filiera corta e Km0', url: `${BASE_PATH}/filiera-corta` },
    { anchor: 'Struttura del sito', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Il problema della filiera tradizionale',
    'La vendita diretta online',
    'Ma chi compra online prodotti agricoli?',
    'Cosa puoi vendere online',
    'Quanto costa avviare un e-commerce agricolo?',
    'La spedizione: come funziona',
    'Costruire la lista clienti',
    'Dal casolare al mondo',
  ],
};
