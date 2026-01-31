import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const filieraCorta: PlaybookContent = {
  slug: 'filiera-corta',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Filiera Corta e Km0: comunica il valore del tuo prodotto',
    subtitle: 'I consumatori cercano prodotti locali, biologici, tracciabili. Hai già tutto questo. Devi solo comunicarlo bene.',
    lastUpdated: '27 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'La filiera corta non è solo un metodo produttivo: è un messaggio di marketing potentissimo. Chi compra locale è disposto a pagare di più per qualità e trasparenza.',
    bullets: [
      'Il 73% degli italiani preferisce prodotti a km0',
      'I prodotti biologici hanno prezzi superiori del 20-40%',
      'La tracciabilità aumenta la fiducia del consumatore',
      'Il sito è il posto perfetto per raccontare la tua filiera',
    ],
  },
  quickQuestions: [
    'I tuoi clienti sanno dove nasce esattamente il tuo prodotto?',
    'Comunichi le certificazioni (bio, DOP, IGP) in modo chiaro?',
    'Il tuo sito spiega il processo produttivo?',
    'Mostri la differenza tra il tuo prodotto e quello industriale?',
  ],
  cta: {
    title: 'Vuoi comunicare meglio il valore del tuo prodotto?',
    description: 'Ti aiuto a creare contenuti che raccontano la qualità, la tracciabilità e l\'unicità della tua produzione.',
    buttonText: 'Valorizziamo il tuo prodotto',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei comunicare meglio la qualità e la tracciabilità dei miei prodotti.')}`,
  },
  content: `
## 1. Perché la filiera corta vende

Il consumatore moderno è stanco.

Stanco di non sapere cosa mangia.
Stanco di etichette illeggibili.
Stanco di scandali alimentari.

Cerca **fiducia**. E la trova nei produttori locali che può guardare negli occhi.

Tu hai già tutto: terra, tradizione, qualità.
Ma se non lo comunichi, nessuno lo sa.

---

## 2. Cosa significa "filiera corta" per il cliente

Per te è normale. Per il cliente di città è **straordinario**.

**Filiera corta significa:**
- Nessun intermediario tra produttore e consumatore
- Prodotto fresco, non viaggiato per migliaia di km
- Soldi che restano sul territorio
- Rapporto diretto con chi produce

**Km0 significa:**
- Riduzione dell'impatto ambientale
- Stagionalità rispettata
- Economia locale sostenuta

Questi valori vanno **esplicitati** sul sito e sulle etichette.

---

## 3. Le certificazioni: usale!

Se hai certificazioni, **mostrale ovunque**.

**Certificazioni comuni:**
- **Biologico** (logo Euro-foglia)
- **DOP** (Denominazione di Origine Protetta)
- **IGP** (Indicazione Geografica Protetta)
- **Produzione Integrata**
- **Slow Food** (Presìdi)

Sul sito:
- Loghi ben visibili
- Spiegazione di cosa significa ogni certificazione
- Link ai disciplinari (per chi vuole approfondire)

Non dare per scontato che il cliente sappia cosa significa "DOP".

---

## 4. La tracciabilità come marketing

Ogni prodotto ha una storia. Raccontala.

**Esempio per l'olio:**
*"Questo olio nasce dai nostri 500 ulivi Leccino, coltivati sulle colline di Castelvetro (MO) a 350 metri di altitudine. Raccolto a mano tra il 15 e il 30 ottobre 2025. Franto entro 6 ore dalla raccolta presso il Frantoio Sociale di [nome]. Acidità 0,2%."*

Questo testo **trasforma l'olio da commodity a prodotto premium**.
E giustifica un prezzo più alto.

---

## 5. Confronto: tu vs industria

Non denigrare i competitor. Ma educa il cliente.

**Cosa puoi spiegare:**
- Tempi di maturazione (il tuo formaggio stagiona 24 mesi, quello industriale 6)
- Ingredienti (il tuo usa latte crudo, quello industriale pastorizzato)
- Metodi (la tua vendemmia è manuale, quella industriale meccanica)
- Rese (tu produci meno per avere più qualità)

Una tabella comparativa sul sito funziona benissimo.

---

## 6. Il prezzo giusto

Se vendi a km0, **puoi (e devi) chiedere di più**.

Il cliente di città capisce che:
- La qualità ha un costo
- Sostenere il piccolo produttore vale la differenza
- Il prodotto industriale a 4€ non è un vero paragone

Ma devi **giustificare il prezzo** con trasparenza.
Se spieghi perché costa di più, il cliente accetta.

---

## 7. I canali della filiera corta

**Dove vendere:**
- Direttamente in azienda
- E-commerce sul tuo sito
- Mercati contadini e fiere
- GAS (Gruppi di Acquisto Solidale)
- Ristorazione locale (ristoranti, pizzerie)

**Dove NON vendere (se puoi evitare):**
- GDO (margini ridicoli)
- Grossisti (perdita di controllo)

[Approfondisci la vendita diretta →](${BASE_PATH}/vendita-diretta)

---

## 8. Racconta con i numeri

I numeri creano credibilità.

*"4 generazioni di agricoltori"*
*"500 ulivi centenari"*
*"Acidità 0,18% (la metà del limite legale)"*
*"Franto entro 6 ore"*
*"24 mesi di stagionatura"*

Questi dettagli non sono noiosi. Sono **prova di qualità**.
Mettili sul sito, sulle etichette, sui social.
  `,
  faqs: [
    {
      question: 'Se non ho certificazioni bio, posso comunque parlare di qualità?',
      answer: 'Assolutamente sì. "Biologico" è una certificazione specifica, ma puoi comunicare altri valori: tradizione, raccolta manuale, assenza di chimica, km0. L\'importante è essere onesti.',
    },
    {
      question: 'Come comunico la differenza col prodotto industriale senza sembrare arrogante?',
      answer: 'Usa dati oggettivi, non giudizi. "Il nostro olio ha acidità 0,2%, quello industriale spesso 0,8%" è un fatto. "Il loro olio fa schifo" è un giudizio.',
    },
    {
      question: 'Vale la pena fare certificazione bio?',
      answer: 'Dipende. Costa tempo e denaro. Ma apre mercati (export, GAS, clientela premium). Se già produci "quasi bio", può valere la pena fare il passo.',
    },
  ],
  relatedLinks: [
    { anchor: 'Vendita diretta online', url: `${BASE_PATH}/vendita-diretta` },
    { anchor: 'Racconta la tua storia', url: `${BASE_PATH}/racconta-la-tua-storia` },
    { anchor: 'Foto prodotti che vendono', url: `${BASE_PATH}/foto-prodotti` },
  ],
  tocSections: [
    'Perché la filiera corta vende',
    'Cosa significa "filiera corta" per il cliente',
    'Le certificazioni: usale!',
    'La tracciabilità come marketing',
    'Confronto: tu vs industria',
    'Il prezzo giusto',
    'I canali della filiera corta',
    'Racconta con i numeri',
  ],
};
