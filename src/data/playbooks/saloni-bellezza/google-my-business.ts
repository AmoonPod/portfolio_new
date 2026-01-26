import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const googleMyBusiness: PlaybookContent = {
  slug: 'google-my-business',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Google Maps per Parrucchieri: fatti trovare da chi cerca un taglio ORA',
    subtitle: 'La tua vetrina più importante non è quella su strada, è quella su Google. Ecco come farla brillare.',
    lastUpdated: '26 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Quando una persona cerca "Parrucchiere vicino a me", tu devi uscire per primo. Scheda completa, foto belle e recensioni sono la chiave.',
    bullets: [
      'Compila orari e servizi nel dettaglio',
      'Carica foto del salone e dei lavori (Prima/Dopo)',
      'Attiva il pulsante "Prenota Online"',
      'Rispondi a tutte le recensioni',
    ],
  },
  quickQuestions: [
    'Se cerchi "Parrucchiere [Tua Città]", compari nei primi 3?',
    'I tuoi orari su Google sono corretti?',
    'C\'è il link per prenotare direttamente?',
    'Le foto sono recenti?',
  ],
  cta: {
    title: 'La tua scheda Google non ti porta clienti?',
    description: 'Analizzo la tua presenza su Maps e ti dico cosa correggere per salire in classifica.',
    buttonText: 'Analisi gratuita Scheda Google',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei ottimizzare la scheda Google del mio salone.')}`,
  },
  content: `
## 1. La nuova "Pagine Gialle"

Nessuno usa più gli elenchi cartacei.
Quando una donna si trasferisce in una nuova zona o vuole cambiare parrucchiere, fa una cosa sola:
Apre Google Maps e scrive **"Parrucchiere donna"** o **"Salone di bellezza"**.

Se non ci sei, o se la tua scheda è brutta, quei soldi vanno al tuo concorrente.

---

## 2. Le info che cercano

Chi guarda la tua scheda vuole sapere 3 cose in 10 secondi:
1.  **Sei aperto adesso?** (Orari precisi!)
2.  **Sei bravo?** (Foto e Recensioni)
3.  **Quanto costa/Come prenoto?** (Link al sito/prenotazione)

Se manca una di queste cose, passa al prossimo.

### Fai così
- Aggiorna gli orari (specialmente festivi e ferie).
- Inserisci il numero di telefono corretto (meglio se cliccabile).
- Metti il link diretto alla pagina **Listino** o **Prenota**.

---

## 3. Le foto che convincono

Nel beauty, l'immagine è tutto.
Non caricare foto sgranate o del pavimento.

Carica:
- **Foto del team:** Facce sorridenti. Trasmettono fiducia.
- **Foto del salone:** Pulito, luminoso, accogliente.
- **I tuoi lavori:** I famosi "Prima e Dopo".
- **I prodotti:** Se usi brand famosi (es. Kerastase, Olaplex), mostrali. Sono garanzia di qualità.

[Come fare foto perfette →](${BASE_PATH}/foto-prima-dopo)

---

## 4. La lista servizi su Google

Google ti permette di inserire il tuo "Menu Servizi" direttamente nella scheda.
Fallo.

Scrivi:
- Taglio Donna
- Piega
- Colore / Balayage / Schiariture
- Trattamenti (Ricostruzione, Cheratina)

Se qualcuno cerca specificamente "Balayage [Città]", Google mostrerà te perché lo hai scritto.

---

## 5. Il pulsante "Prenota"

Google permette di aggiungere un pulsante **"Prenota"** o **"Appuntamento"**.
Non collegarlo a piattaforme esterne che ti chiedono commissioni.
**Collegalo direttamente al tuo sito.**

Riduci l'attrito.
Vedo -> Mi piace -> Clicco -> Prenoto.
Senza intermediari e senza costi extra.

[Scopri i vantaggi della prenotazione diretta →](${BASE_PATH}/prenotazioni-online)

---

## 6. Domande e Risposte

Spesso le clienti chiedono sulla scheda:
- "Fate appuntamenti last minute?"
- "Avete parcheggio?"
- "Quanto costa il taglio?"

Rispondi subito. O meglio, scrivi tu le domande frequenti e risponditi da solo (sì, si può fare!).
Esempio:
D: "Bisogna prenotare con molto anticipo?"
R: "Consigliamo 2-3 giorni prima, ma chiamaci per verificare disponibilità last minute!"

---

## 7. I "Post" di Google

Usa la funzione "Aggiornamenti" per pubblicare:
- Offerte del mese
- Nuovi prodotti arrivati
- Foto di un cambio look pazzesco
- Avvisi di ferie

È gratis e ti dà visibilità extra.

[Come gestire le recensioni →](${BASE_PATH}/recensioni-google)
  `,
  faqs: [
    {
      question: 'Come recupero la password della scheda?',
      answer: 'Se la scheda esiste ma non è tua, clicca su "Sei il proprietario di quest\'attività?" e segui la procedura di verifica (spesso via telefono o cartolina).',
    },
    {
      question: 'Posso cancellare le foto brutte caricate dai clienti?',
      answer: 'Non direttamente. Puoi segnalarle a Google se violano la privacy o non sono pertinenti. Ma la strategia migliore è caricarne tante belle tue per "seppellire" quelle brutte.',
    },
    {
      question: 'Quanto costa stare su Google Maps?',
      answer: 'Zero. È gratis. Diffida di chi ti chiede soldi per "il rinnovo di Google".',
    },
  ],
  relatedLinks: [
    { anchor: 'Strategia Recensioni', url: `${BASE_PATH}/recensioni-google` },
    { anchor: 'Prenotazioni Online', url: `${BASE_PATH}/prenotazioni-online` },
    { anchor: 'Foto che vendono', url: `${BASE_PATH}/foto-prima-dopo` },
  ],
  tocSections: [
    'La nuova "Pagine Gialle"',
    'Le info che cercano',
    'Le foto che convincono',
    'La lista servizi su Google',
    'Il pulsante "Prenota"',
    'Domande e Risposte',
    'I "Post" di Google',
  ],
};
