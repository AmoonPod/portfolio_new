import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const fidelizzazione: PlaybookContent = {
  slug: 'fidelizzazione',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Clienti Fedeli: come farle tornare ogni 4 settimane',
    subtitle: 'Acquisire una cliente nuova costa tanto. Far tornare quella vecchia costa zero. Ecco come aumentare la frequenza.',
    lastUpdated: '26 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'La vera ricchezza del salone è la frequenza di visita. Usa il rebooking, i programmi fedeltà e gli auguri di compleanno per non farti dimenticare.',
    bullets: [
      'Fissa il prossimo appuntamento PRIMA che esca',
      'Crea una Fidelity Card digitale (basta cartoncini)',
      'Coccola le clienti VIP (regali inaspettati)',
      'Recupera le clienti "dormienti" con un messaggio',
    ],
  },
  quickQuestions: [
    'Quante clienti fissano il prossimo appuntamento subito?',
    'Hai un database con le date di compleanno?',
    'Sai chi non viene da più di 3 mesi?',
    'Fai sconti a caso o mirati?',
  ],
  cta: {
    title: 'Vuoi automatizzare la fidelizzazione?',
    description: 'Configuro gli strumenti per inviare auguri e promozioni ai tuoi clienti in automatico, senza che tu debba pensarci.',
    buttonText: 'Voglio clienti fedeli',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei capire come fidelizzare meglio le clienti del mio salone.')}`,
  },
  content: `
## 1. La Matematica della Frequenza

Fai due conti:
- Cliente A viene ogni 4 settimane (12 volte l'anno) x €50 = **€600/anno**
- Cliente B viene ogni 6 settimane (8 volte l'anno) x €50 = **€400/anno**

Solo spostando la frequenza di 2 settimane, hai guadagnato il **50% in più**. Senza trovare clienti nuovi.
Il tuo obiettivo è ridurre l'intervallo tra una visita e l'altra.

---

## 2. Il Rebooking (Prenotare subito)

La regola d'oro: la cliente non deve uscire dal salone senza il prossimo appuntamento.
Non dire: *"Chiamaci tu quando vuoi tornare."*
Dì: *"Per mantenere questo colore perfetto, ci vediamo tra 4 settimane. Ti blocco già giovedì 25 o preferisci venerdì?"*

Se prenota subito:
1.  Si impegna (psicologicamente).
2.  Tu hai l'agenda piena in anticipo.
3.  Lei non rischia di trovare posto occupato all'ultimo minuto.

---

## 3. Fidelity Card Digitale (La TUA App)

I cartoncini coi timbri si perdono e non ti danno dati.
Le app generiche costano e mostrano altri negozi.

**La soluzione:** Una Web App fedeltà creata su misura per te.
La cliente vede i punti sul suo telefono accedendo al tuo sito.
Tu vedi tutto dal tuo pannello.

**Esempio:**
Ogni 10€ spesi = 1 punto.
A 500 punti = Piega Omaggio o Prodotto in regalo.

---

## 4. Buon Compleanno!

Il compleanno è l'occasione perfetta per farti sentire.
Il sistema che ti creo invia una mail o SMS automatico:
*"Tanti auguri Giulia! 🎂 Per la tua settimana speciale, ti regaliamo un trattamento ristrutturante se vieni a farti la piega."*

Lei si sente speciale, viene in salone, e magari già che c'è fa anche il colore.

---

## 5. Recupero Clienti "Dormienti"

Se una cliente non viene da 4 mesi, l'hai persa. O quasi.
Prova a riattivarla.

Il software può rilevare chi non viene da 90 giorni e mandare un messaggio:
*"Ciao Anna, è tanto che non ti vediamo! Ci manchi. Se torni entro fine mese, abbiamo riservato per te uno sconto del 20% sul taglio."*

Se torna, hai recuperato un cliente. Se non torna, pulisci il database.

---

## 6. Il cliente VIP

Ci sono clienti che spendono molto e non si lamentano mai. Spesso le diamo per scontate.
Invece vanno premiate.

Ogni tanto, a sorpresa:
*"Oggi il trattamento te lo offro io, perché sei una cliente speciale."*
Questo gesto crea una fedeltà indistruttibile. Ne parlerà con tutte le amiche.

---

## 7. Email Marketing per Saloni

Non mandare email noiose. Manda valore.
- "Come proteggere i capelli al mare" (a Giugno)
- "I colori di tendenza per l'autunno" (a Settembre)
- "Idee acconciature per le feste" (a Dicembre)

Mantieni il contatto mentale. Quando avrà bisogno del parrucchiere, penserà a te.

[Come raccogliere le email →](${BASE_PATH}/prenotazioni-online)
  `,
  faqs: [
    {
      question: 'Lo sconto svaluta il mio lavoro?',
      answer: 'Se fatto sempre, sì. Se usato strategicamente (compleanno, recupero cliente perso), è un investimento marketing. Meglio incassare l\'80% di qualcosa che il 100% di niente.',
    },
    {
      question: 'Come convinco a prenotare subito?',
      answer: 'Fai leva sulla scarsità: "Siamo pienissimi per le prossime settimane, meglio bloccarlo ora, al massimo lo sposti dopo."',
    },
    {
      question: 'Quanto costa un sistema fedeltà su misura?',
      answer: 'Meno di quanto pensi. È un investimento una tantum per lo sviluppo, poi è tuo per sempre. Niente canoni mensili eterni.',
    },
  ],
  relatedLinks: [
    { anchor: 'Prenotazioni Online', url: `${BASE_PATH}/prenotazioni-online` },
    { anchor: 'Listino Prezzi Strategico', url: `${BASE_PATH}/listino-prezzi` },
    { anchor: 'Recensioni Google', url: `${BASE_PATH}/recensioni-google` },
  ],
  tocSections: [
    'La Matematica della Frequenza',
    'Il Rebooking (Prenotare subito)',
    'Fidelity Card Digitale (La TUA App)',
    'Buon Compleanno!',
    'Recupero Clienti "Dormienti"',
    'Il cliente VIP',
    'Email Marketing per Saloni',
  ],
};
