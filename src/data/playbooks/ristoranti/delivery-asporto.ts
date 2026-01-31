import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const deliveryAsporto: PlaybookContent = {
  slug: 'delivery-asporto',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Delivery e Asporto: come guadagnarci davvero (senza regalare il 30% alle app)',
    subtitle: 'Le app di consegna sono comode ma costose. Ecco come farti ordinare direttamente dal sito.',
    lastUpdated: '26 gennaio 2026',
    readTime: '7 minuti',
  },
  tldr: {
    short: 'Vendere asporto e delivery direttamente dal tuo sito ti fa risparmiare commissioni enormi e ti dà il controllo sui clienti.',
    bullets: [
      'Crea un sistema di ordine semplice sul tuo sito',
      'Incentiva l\'ordine diretto (es. bibita in omaggio)',
      'Organizza bene gli orari per non intasare la cucina',
      'Raccogli i dati dei clienti (cosa che le app non ti danno)',
    ],
  },
  quickQuestions: [
    'Quanto paghi di commissioni a fine mese?',
    'Hai i numeri di telefono dei clienti che ordinano?',
    'Il telefono squilla in continuazione per gli ordini?',
    'Riesci a gestire i picchi del sabato sera?',
  ],
  cta: {
    title: 'Vuoi smettere di pagare commissioni folli?',
    description: 'Ti sviluppo un sistema di ordini su misura: zero commissioni, controllo totale e privacy a norma.',
    buttonText: 'Voglio il mio sistema di ordini',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei capire come ricevere ordini dal mio sito senza pagare commissioni.')}`,
  },
  content: `
## 1. Il problema delle App (JustEat, Glovo, ecc.)

Le app sono fantastiche per farsi conoscere, ma terribili per i margini.
Se ti chiedono il 25-30% di commissione, su una pizza da 10€ te ne restano 7€. Hai lavorato gratis.

**La strategia giusta:**
Usa le app per trovare *nuovi* clienti. Ma fai di tutto per spostare i clienti abituali sul *tuo* sito.

---

## 2. Perché ti serve un sistema proprietario

Se il cliente ordina dal tuo sito:
1.  **Zero commissioni:** I soldi sono tutti tuoi.
2.  **Incasso immediato:** I soldi arrivano subito (es. Stripe/PayPal), non a fine mese.
3.  **Dati cliente:** Hai la sua email e telefono. Puoi ricontattarlo.
4.  **Fedeltà:** Il cliente si abitua a venire da te, non a scorrere l'app.

---

## 3. Come convincerli a ordinare da te

Il cliente è pigro. Usa le app perché sono comode.
Devi dargli un motivo per cambiare.

### Fai così
Metti un volantino nella busta di ogni ordine che arriva dalle app:
*"Grazie per l'ordine! La prossima volta ordina su www.miosito.it e ricevi una **Birra in Omaggio** (o il 10% di sconto)."*

Risparmi il 30% di commissione e regali una birra che ti costa 1€. Ci guadagni comunque e hai fidelizzato il cliente.

---

## 4. Gestione delle zone (senza impazzire)

Non puoi consegnare ovunque. Devi essere chiaro.

### Fai così
Sul sito imposti:
- **Zona A (vicino):** Consegna gratis.
- **Zona B (medio):** Consegna 2€.
- **Zona C (lontano):** Consegna 5€ o solo per ordini sopra 50€.

Il sistema calcola tutto da solo in base all'indirizzo. Niente più litigate al telefono: *"Ma io abito lì vicino..."*

---

## 5. Asporto: l'oro del ristoratore

L'asporto (Take Away) è la cosa più redditizia.
- Niente rider da pagare.
- Niente tavolo da occupare e pulire.
- Cibo consegnato caldo e perfetto.

### Fai così
Crea una corsia preferenziale per l'asporto.
*"Ordina online, salta la fila, ritira al volo."*
Se il cliente sa che non deve aspettare in piedi alla cassa, ordinerà più volentieri.

---

## 6. Il menu per delivery

Non tutto viaggia bene.
La frittura diventa molle. Il gelato si scioglie. La pasta scuoce.

Sul menu online per delivery, **togli i piatti a rischio**.
Metti solo quelli che arrivano a casa buoni come al ristorante (o quasi).
Meglio un menu più corto che una recensione negativa perché le patatine erano fredde.

[Come scrivere un menu efficace →](${BASE_PATH}/menu-online)

---

## 7. Pagamenti online

Accettare solo contanti è un errore.
- Il cliente deve prelevare (scocciatura).
- Il rider deve avere il resto (perdita di tempo e rischio).
- Rischio ordini falsi.

Se fai pagare online (Carta, PayPal, Satispay):
- L'ordine è sicuro.
- La consegna è velocissima (lascio il pacco, vado via).
- Incassi subito.

---

## 8. Organizzazione in cucina

Gli ordini online devono arrivare chiari.
Niente foglietti volanti.
Ti serve una stampantina termica che sputa fuori l'ordine appena arriva:
*"2 Margherite, 1 Diavola, Ore 20:30, Via Roma 5, GIÀ PAGATO."*

Ordine, pulizia, velocità.

[Parliamo di come impostare tutto questo →](${BASE_PATH}/struttura-sito)
  `,
  faqs: [
    {
      question: 'Devo avere i miei rider?',
      answer: 'Per l\'asporto no. Per il delivery sì, oppure puoi usare servizi che ti forniscono solo i fattorini (senza marketplace).',
    },
    {
      question: 'Quanto costa il sistema di ordini?',
      answer: 'Molto meno delle commissioni delle app. Di solito c\'è un costo fisso mensile piccolo o una commissione minuscola (es. 2%).',
    },
    {
      question: 'Come gestisco i ritardi?',
      answer: 'Se il sistema è fatto bene, ti avvisa se stai accettando troppi ordini per la stessa ora e blocca gli slot.',
    },
  ],
  relatedLinks: [
    { anchor: 'Menu digitale ottimizzato', url: `${BASE_PATH}/menu-online` },
    { anchor: 'Sito web professionale', url: `${BASE_PATH}/struttura-sito` },
    { anchor: 'Social media marketing', url: `${BASE_PATH}/social-media` },
  ],
  tocSections: [
    'Il problema delle App (JustEat, Glovo, ecc.)',
    'Perché ti serve un sistema proprietario',
    'Come convincerli a ordinare da te',
    'Gestione delle zone (senza impazzire)',
    'Asporto: l\'oro del ristoratore',
    'Il menu per delivery',
    'Pagamenti online',
    'Organizzazione in cucina',
  ],
};
