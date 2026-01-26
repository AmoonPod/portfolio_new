import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const listinoPrezzi: PlaybookContent = {
  slug: 'listino-prezzi',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Listino Prezzi: come scriverlo per aumentare lo scontrino',
    subtitle: 'Il listino non è solo un elenco di costi. È uno strumento di vendita. Ecco come renderlo irresistibile.',
    lastUpdated: '26 gennaio 2026',
    readTime: '5 minuti',
  },
  tldr: {
    short: 'Un listino chiaro e ben strutturato elimina la paura del "conto salato" e spinge la cliente a scegliere servizi migliori.',
    bullets: [
      'Elimina i prezzi nascosti ("da €...")',
      'Crea dei "Pacchetti" completi',
      'Dai nomi accattivanti ai servizi',
      'Mettilo online ben visibile',
    ],
  },
  quickQuestions: [
    'Il tuo listino è facile da capire?',
    'Le clienti chiedono spesso "quanto viene?"',
    'Hai dei pacchetti "tutto incluso"?',
    'I nomi dei servizi sono noiosi?',
  ],
  cta: {
    title: 'Vuoi un listino digitale efficace?',
    description: 'Ti aiuto a strutturare la pagina prezzi del sito per vendere servizi di valore più alto.',
    buttonText: 'Rifacciamo il listino',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei rivedere come presento i prezzi sul mio sito web.')}`,
  },
  content: `
## 1. La paura della "sorpresa in cassa"

Molte donne non provano nuovi saloni perché temono di entrare per una piega e uscire con 150€ di conto a sorpresa.
Se il tuo listino è pieno di "a partire da...", crei ansia.

**La regola:** Sii chiaro.
Se il prezzo dipende dalla lunghezza, scrivi:
- Capelli corti: €20
- Capelli medi: €25
- Capelli lunghi: €30

La chiarezza crea fiducia.

---

## 2. Pacchetti vs Servizi singoli

Invece di vendere "Colore + Taglio + Piega + Trattamento" separati, crea dei **Rituali**.

Esempio:
❌ Colore €40, Piega €20, Ricostruzione €20.
✅ **Rituale Luce Infinita**: Colore rigenerante, Ricostruzione alla cheratina e Piega Glossy. €75 (invece di €80).

Il pacchetto:
1.  Sembra più conveniente.
2.  Ti garantisce che la cliente faccia anche il trattamento (che altrimenti magari taglierebbe).
3.  Ha un nome più bello.

---

## 3. I nomi contano

Non chiamare il servizio "Colore". Chiamalo con il beneficio.

- Invece di "Schiariture" → **"Biondo Californiano"**
- Invece di "Trattamento Idratante" → **"Bomba d'Acqua"**
- Invece di "Taglio Uomo" → **"Barber Experience"**

Rendi il servizio desiderabile, non una tassa da pagare.

---

## 4. Upselling nel listino

Il listino deve suggerire il passo successivo.
Sotto "Taglio e Piega", scrivi piccolo:
*"Aggiungi la maschera illuminante a soli +5€"*

Molte clienti diranno di sì perché la cifra è piccola rispetto al totale.

---

## 5. Digitale vs Carta

Il listino cartaceo si rovina, si sporca e costa ristamparlo se cambi un prezzo.
Il listino digitale (sul sito o tramite QR code) è:
- Sempre aggiornato.
- Bellissimo (con le foto accanto ai servizi!).
- Igienico.

[Scopri come mettere il listino sul sito →](${BASE_PATH}/struttura-sito)

---

## 6. La consulenza è un servizio

Molti saloni regalano la consulenza. Errore.
Mettila a listino:
**"Consulenza Cambio Look (30 min): €30"**
*(Gratuita se prosegui con il servizio)*

Questo dà valore al tuo tempo e alla tua esperienza. Fa capire che il tuo consiglio vale.

---

## 7. Dove metterlo

Il listino non deve essere nascosto in un cassetto.
- **Sul sito:** Pagina dedicata nel menu.
- **Su Google Maps:** Nella sezione servizi.
- **Sui Social:** Nelle storie in evidenza "Prezzi".

Chi cerca online vuole sapere il budget prima di chiamare.

[Ottimizza la scheda Google →](${BASE_PATH}/google-my-business)
  `,
  faqs: [
    {
      question: 'Devo mettere proprio tutti i prezzi online?',
      answer: 'Sì, la trasparenza paga. Se hai servizi su misura (es. extension), scrivi "Consulenza obbligatoria per preventivo".',
    },
    {
      question: 'Posso aumentare i prezzi?',
      answer: 'Certo, ma fallo con stile. Avvisa i clienti ("Nuovo listino dal 1° Gennaio") e magari migliora il servizio (aggiungi un caffè, un massaggio) per giustificare l\'aumento.',
    },
    {
      question: 'Meglio prezzi tondi o no?',
      answer: 'Nel lusso funzionano i tondi (€50). Nel low cost i psicologici (€19.90). Per un salone di qualità, meglio tondi (€45, €90).',
    },
  ],
  relatedLinks: [
    { anchor: 'Sito web professionale', url: `${BASE_PATH}/struttura-sito` },
    { anchor: 'Strategia promozioni', url: `${BASE_PATH}/fidelizzazione` },
    { anchor: 'Foto dei servizi', url: `${BASE_PATH}/foto-prima-dopo` },
  ],
  tocSections: [
    'La paura della "sorpresa in cassa"',
    'Pacchetti vs Servizi singoli',
    'I nomi contano',
    'Upselling nel listino',
    'Digitale vs Carta',
    'La consulenza è un servizio',
    'Dove metterlo',
  ],
};
