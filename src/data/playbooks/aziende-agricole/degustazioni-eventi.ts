import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const degustazioniEventi: PlaybookContent = {
  slug: 'degustazioni-eventi',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Degustazioni ed Eventi: trasforma i visitatori in clienti a vita',
    subtitle: 'Chi visita la tua azienda e assaggia i tuoi prodotti, compra. E ricompra per anni. Ecco come vendere esperienze, non solo prodotti.',
    lastUpdated: '27 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Le degustazioni e gli eventi creano un legame emotivo che nessun e-commerce può replicare. Chi assaggia di persona diventa cliente fedele.',
    bullets: [
      'Il turismo esperienziale cresce del 15% l\'anno',
      'Chi degusta in azienda ha un tasso di riacquisto del 60%',
      'Un evento ben organizzato genera passaparola',
      'Puoi vendere voucher online tutto l\'anno',
    ],
  },
  quickQuestions: [
    'Offri degustazioni ai visitatori?',
    'I turisti possono prenotare online un\'esperienza da te?',
    'Hai un calendario eventi visibile sul sito?',
    'Raccogli i contatti di chi partecipa?',
  ],
  cta: {
    title: 'Vuoi vendere esperienze online?',
    description: 'Sviluppo il sistema tecnico per vendere degustazioni e biglietti dal sito, con gestione automatica e sicura dei dati clienti.',
    buttonText: 'Parliamo dei tuoi eventi',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei vendere degustazioni e eventi dal mio sito.')}`,
  },
  content: `
## 1. Perché le esperienze vendono più dei prodotti

Viviamo nell'era dell'esperienza.
Le persone non vogliono solo comprare olio: vogliono **vedere dove nasce**, **incontrare chi lo produce**, **assaggiarlo sul posto**.

Questa esperienza crea un **legame emotivo** che nessun supermercato può offrire.
E chi vive quell'esperienza, torna a comprare per anni.

---

## 2. Cosa puoi offrire

**Degustazioni:**
- Olio: assaggio guidato con pane locale
- Vino: tour cantina + degustazione 3-5 etichette
- Formaggi: visita al caseificio + tagliere
- Miele: estrazione favi + assaggio varietà

**Tour esperienziali:**
- Visita agli ulivi/vigneti con spiegazione
- Raccolta partecipata (vendemmia, olive)
- Cooking class con i tuoi prodotti
- Pic-nic in vigna

**Eventi speciali:**
- Cena in vigna al tramonto
- Festa della vendemmia
- Mercatino di Natale in fattoria
- Matrimoni e cerimonie

---

## 3. Come vendere online le esperienze

Il sito deve avere una sezione chiara: **"Esperienze"** o **"Cosa fare"**.

Per ogni esperienza:
- Nome accattivante ("Tramonto tra gli ulivi")
- Descrizione evocativa
- Durata e cosa include
- Prezzo
- Pulsante "Prenota ora"

Il cliente prenota e paga online. Tu ricevi la prenotazione.
Niente telefonate, niente "ti richiamo dopo".

---

## 4. Voucher e gift card

Le esperienze sono **regali perfetti**.

*"Per il compleanno di mio padre, gli ho regalato una degustazione in cantina."*

Vendi voucher regalo online:
- Il cliente paga
- Riceve un PDF elegante da stampare o inoltrare
- Il destinatario prenota quando vuole

I voucher si vendono tutto l'anno, soprattutto a Natale, San Valentino, Festa del Papà.

---

## 5. Il calendario eventi

Se organizzi eventi periodici (cene, degustazioni aperte, mercatini), mostrali sul sito.

Un **calendario visibile** fa capire che sei attivo e vivo.
E permette ai visitatori di pianificare la visita.

Ogni evento ha:
- Data e ora
- Descrizione
- Posti disponibili
- Pulsante prenotazione

Quando l'evento è pieno, il sistema dice "Sold Out". Crea urgenza per il prossimo.

---

## 6. Promuovi gli eventi

Avere gli eventi sul sito non basta. Devi farli sapere.

**Canali:**
- Email ai clienti passati ("Quest'anno la cena in vigna è il 15 agosto")
- Post su Facebook e Instagram
- Google My Business (pubblica l'evento)
- Gruppi locali e Pro Loco

Il costo di promozione è basso. Il ritorno è alto.

---

## 7. L'esperienza crea il cliente

Ecco il percorso:
1. Turista cerca "cosa fare a [tua zona]"
2. Trova il tuo sito, prenota una degustazione
3. Viene, assaggia, si innamora
4. Compra prodotti da portare a casa
5. Tra 6 mesi, riordina online
6. A Natale, regala un voucher a un amico
7. L'amico viene, e il ciclo ricomincia

Questo è il **volano** che costruisce un business solido.

---

## 8. Non serve essere grandi

Non devi avere una sala eventi da 100 persone.
Anche 6-8 persone attorno a un tavolo di legno, con i tuoi prodotti e la tua passione, è un'esperienza memorabile.

L'importante è:
- Organizzarla bene
- Renderla prenotabile online
- Raccogliere i contatti
- Coltivare la relazione dopo

[Scopri come fidelizzare i clienti →](${BASE_PATH}/vendita-diretta)
  `,
  faqs: [
    {
      question: 'Devo avere autorizzazioni per le degustazioni?',
      answer: 'Dipende da cosa offri. Per assaggi gratuiti o vendita diretta, generalmente basta essere azienda agricola. Per somministrazione (ristorazione), servono altre licenze. Chiedi al tuo comune.',
    },
    {
      question: 'Come gestisco le prenotazioni?',
      answer: 'Con un sistema online integrato nel sito: il cliente sceglie data e ora, paga, e tu ricevi tutto. Niente telefonate, niente confusione.',
    },
    {
      question: 'Quanto posso far pagare una degustazione?',
      answer: 'Dipende da cosa offri. Una degustazione base può costare 15-25€. Un\'esperienza completa (tour + pranzo + prodotti) anche 50-80€. Il valore percepito è alto.',
    },
  ],
  relatedLinks: [
    { anchor: 'Vendita diretta online', url: `${BASE_PATH}/vendita-diretta` },
    { anchor: 'Social media per aziende agricole', url: `${BASE_PATH}/social-media` },
    { anchor: 'Prenotazioni agriturismo', url: `${BASE_PATH}/prenotazioni-agriturismo` },
  ],
  tocSections: [
    'Perché le esperienze vendono più dei prodotti',
    'Cosa puoi offrire',
    'Come vendere online le esperienze',
    'Voucher e gift card',
    'Il calendario eventi',
    'Promuovi gli eventi',
    'L\'esperienza crea il cliente',
    'Non serve essere grandi',
  ],
};
