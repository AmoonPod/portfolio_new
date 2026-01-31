import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/aziende-agricole';
const WHATSAPP_NUMBER = '393505764958';

export const googleMyBusiness: PlaybookContent = {
  slug: 'google-my-business',
  niche: 'aziende-agricole',
  nicheName: 'Aziende Agricole e Agriturismi',
  hero: {
    title: 'Google My Business: fatti trovare dai turisti (gratis)',
    subtitle: 'Quando qualcuno cerca "agriturismo vicino a me", devi comparire tu. Ecco come ottimizzare la tua scheda Google.',
    lastUpdated: '27 gennaio 2026',
    readTime: '5 minuti',
  },
  tldr: {
    short: 'La scheda Google My Business è gratuita e potentissima. Chi cerca agriturismi, fattorie didattiche o prodotti tipici su Google Maps deve trovare te, non il concorrente.',
    bullets: [
      'Il 46% delle ricerche Google ha intento locale',
      'La scheda GMB è gratis e porta clienti veri',
      'Le foto aumentano i click del 42%',
      'Le recensioni sono il fattore decisivo per la scelta',
    ],
  },
  quickQuestions: [
    'Hai già una scheda Google My Business?',
    'Quando è l\'ultima volta che hai aggiornato le foto?',
    'Rispondi alle recensioni (anche quelle negative)?',
    'La tua scheda mostra orari, telefono e sito corretti?',
  ],
  cta: {
    title: 'Vuoi ottimizzare la tua presenza su Google?',
    description: 'Ti aiuto a configurare e ottimizzare la scheda Google My Business per farti trovare dai turisti che cercano nella tua zona.',
    buttonText: 'Ottimizziamo la tua scheda',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei ottimizzare la scheda Google My Business del mio agriturismo.')}`,
  },
  content: `
## 1. Perché Google Maps è fondamentale

Quando un turista cerca "agriturismo Modena" o "olio extravergine vicino a me", dove cerca?
Su Google. E Google mostra la mappa con le attività.

Se non ci sei, o ci sei ma con informazioni sbagliate, **quel cliente va dal concorrente**.

La buona notizia? Google My Business è **completamente gratuito**.
La cattiva? Molti non lo usano bene.

---

## 2. Come creare/rivendicare la scheda

Se non hai ancora una scheda:
1. Vai su business.google.com
2. Clicca "Gestisci ora"
3. Inserisci nome e indirizzo dell'azienda
4. Verifica (Google manda una cartolina con un codice)

Se la scheda esiste già (creata automaticamente):
1. Cercati su Google Maps
2. Clicca "Rivendica questa attività"
3. Segui la procedura di verifica

Una volta verificata, la scheda è **tua** e puoi modificarla.

---

## 3. Le informazioni base (falle giuste)

Sembra banale, ma molti sbagliano le basi:

- **Nome:** Usa il nome reale dell'azienda, non keyword stuffing.
  ✅ "Agriturismo Il Poggio"
  ❌ "Agriturismo Il Poggio - Miglior Agriturismo Modena Economico"

- **Categoria:** Scegli quella giusta. "Agriturismo" o "Azienda agricola" o "Fattoria didattica".

- **Indirizzo:** Preciso, con indicazioni se sei fuori dal paese.

- **Telefono:** Quello che rispondi sempre.

- **Sito web:** Il tuo sito (non la pagina Booking!).

- **Orari:** Aggiornati. Se chiudi a Gennaio, segnalo.

---

## 4. Le foto fanno la differenza

Google lo dice chiaro: le attività con foto ricevono il **42% in più di richieste di indicazioni stradali**.

**Cosa fotografare:**
- Esterno dell'agriturismo (come vi trovano)
- Camere e spazi comuni
- I prodotti (olio, vino, formaggi)
- La campagna circostante
- Il momento della raccolta o della produzione
- Piatti tipici (se fate ristorazione)

**Qualità > Quantità.** Meglio 15 foto belle che 50 brutte.
[Scopri come fare foto che vendono →](${BASE_PATH}/foto-prodotti)

---

## 5. I post su Google (sì, esistono)

Pochi lo sanno: puoi pubblicare **post** direttamente sulla scheda Google.

Usa i post per:
- Annunciare eventi (vendemmia, degustazioni)
- Promuovere offerte stagionali
- Mostrare novità (nuovo prodotto, nuova camera)

I post scadono dopo 7 giorni, quindi tienili aggiornati.
È un modo per sembrare **vivo e attivo**.

---

## 6. Le recensioni: il fattore decisivo

Quando due agriturismi sembrano simili, cosa guarda il cliente?
Le **stelle** e le **recensioni**.

**Come ottenere più recensioni:**
- Dopo il checkout, manda un messaggio con il link diretto.
- Chiedi gentilmente: "Se vi siete trovati bene, una recensione ci aiuta tanto."
- Rendi facile: crea un QR code da mostrare in reception.

**Come rispondere:**
- Alle positive: ringrazia, sii personale.
- Alle negative: rispondi con calma, scusati se c'è stato un problema, offri una soluzione.

[Approfondisci la gestione recensioni →](${BASE_PATH}/recensioni-google)

---

## 7. Le domande e risposte

Su Google, chiunque può fare domande sulla tua attività.
E chiunque può rispondere (anche i concorrenti!).

**Controlla regolarmente** e rispondi tu per primo.
Domande tipiche:
- "Accettate animali?"
- "C'è la piscina?"
- "Si può comprare l'olio senza soggiornare?"

Rispondi in modo chiaro e completo.

---

## 8. Monitora le statistiche

Google ti dà dati preziosi:
- Quante persone hanno visto la scheda
- Quante hanno chiesto indicazioni
- Quante hanno chiamato
- Quali foto vedono di più

Usa questi dati per capire cosa funziona e cosa migliorare.
  `,
  faqs: [
    {
      question: 'La scheda Google è davvero gratis?',
      answer: 'Sì, completamente. Google guadagna in altri modi. Tu devi solo crearla, verificarla e tenerla aggiornata.',
    },
    {
      question: 'Posso eliminare una recensione negativa?',
      answer: 'Solo se viola le linee guida di Google (linguaggio offensivo, spam, ecc.). Le recensioni legittime, anche negative, non si possono cancellare. Puoi solo rispondere.',
    },
    {
      question: 'Quanto tempo ci vuole per apparire in alto?',
      answer: 'Dipende dalla concorrenza nella tua zona. Ma una scheda completa, con foto e recensioni, si posiziona molto meglio di una vuota.',
    },
  ],
  relatedLinks: [
    { anchor: 'Recensioni Google', url: `${BASE_PATH}/recensioni-google` },
    { anchor: 'SEO locale per agriturismi', url: `${BASE_PATH}/seo-locale` },
    { anchor: 'Foto prodotti che vendono', url: `${BASE_PATH}/foto-prodotti` },
  ],
  tocSections: [
    'Perché Google Maps è fondamentale',
    'Come creare/rivendicare la scheda',
    'Le informazioni base (falle giuste)',
    'Le foto fanno la differenza',
    'I post su Google (sì, esistono)',
    'Le recensioni: il fattore decisivo',
    'Le domande e risposte',
    'Monitora le statistiche',
  ],
};
