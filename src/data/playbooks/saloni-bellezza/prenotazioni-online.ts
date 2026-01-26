import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const prenotazioniOnline: PlaybookContent = {
  slug: 'prenotazioni-online',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Agenda piena senza telefono: il segreto dei saloni di successo',
    subtitle: 'Smetti di interrompere pieghe e tagli per rispondere al telefono. Lascia che i clienti prenotino da soli.',
    lastUpdated: '26 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Un sistema di prenotazione online lavora 24/7, riempie i buchi in agenda e azzera i no-show grazie ai promemoria automatici.',
    bullets: [
      'I clienti prenotano anche di notte (quando tu dormi)',
      'Nessuna interruzione durante il lavoro',
      'Promemoria automatici via SMS/WhatsApp (addio bidoni)',
      'Il cliente sceglie il servizio e lo stilista preferito',
    ],
  },
  quickQuestions: [
    'Quante volte interrompi un lavoro per rispondere al telefono?',
    'Ti è mai capitato di segnare male un appuntamento?',
    'Mandi il messaggino di promemoria a mano?',
    'Sai quanto perdi ogni volta che un cliente non si presenta?',
  ],
  cta: {
    title: 'Vuoi automatizzare la tua agenda?',
    description: 'Ti aiuto a impostare un sistema di prenotazione semplice che lavora per te.',
    buttonText: 'Voglio l\'agenda online',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei un sistema di prenotazione per il mio salone.')}`,
  },
  content: `
## 1. Il costo nascosto del telefono

Ogni volta che il telefono squilla mentre stai facendo una sfumatura o un massaggio, hai due scelte:
1.  **Non rispondere:** Rischi di perdere un cliente nuovo.
2.  **Rispondere:** Interrompi il servizio, ti deconcentri, il cliente in poltrona si sente trascurato.

Non puoi permetterti nessuna delle due.

### La soluzione
Un'agenda digitale aperta 24 ore su 24.
Il cliente vede gli orari liberi, sceglie il servizio (es. "Taglio + Piega"), sceglie con chi farlo (es. "Con Marco") e prenota.
Tu ricevi solo la notifica: **"Nuovo appuntamento: Giulia, Martedì ore 10:00"**.

---

## 2. Riempi i buchi (anche di notte)

Le mamme che lavorano, le professioniste, le studentesse... spesso si ricordano di dover prenotare il parrucchiere alle 22:00, quando sono sul divano.
Se hai solo il telefono, trovano chiuso. E magari si dimenticano di richiamare il giorno dopo.

Se hai l'agenda online, prenotano subito.
Ti svegli la mattina con 3-4 appuntamenti in più presi mentre dormivi.

---

## 3. Basta "Bidoni" (No-Show)

Il cliente che prenota e non si presenta è il peggior nemico del fatturato.
Quel buco di 1 ora o 2 ore non lo recuperi più.

Il sistema online riduce i no-show del **40%** grazie ai **reminder automatici**.
24 ore prima, il sistema manda un SMS o WhatsApp:
*"Ciao Giulia, ti ricordiamo il tuo appuntamento domani alle 10:00. A presto!"*

Semplice, automatico, potentissimo.

---

## 4. Scegliere lo stilista

Molti clienti sono legati a un collaboratore specifico.
Il sistema online permette di scegliere:
- Servizio: Colore
- Operatore: Qualsiasi (prima disponibilità) OPPURE Sara (la mia preferita)

Questo aumenta la soddisfazione del cliente e ti aiuta a gestire i turni dello staff.

---

## 5. Non solo un nome, ma un database

Quando prendi appuntamenti a voce, scrivi "Giulia M." sull'agenda cartacea.
Ma chi è Giulia? Quando è venuta l'ultima volta? Che colore ha fatto?

L'agenda digitale crea una **scheda cliente** automatica:
- Storico trattamenti (fondamentale per i colori!)
- Frequenza visite
- Spesa media
- Compleanno (per mandarle gli auguri e uno sconto)

Così puoi dire: *"Giulia, rifacciamo il biondo miele dell'altra volta?"*. Lei si sentirà coccolata e compresa.

[Scopri come fidelizzare i clienti →](${BASE_PATH}/fidelizzazione)

---

## 6. Perché ti serve un sistema TUO (non in affitto)

Esistono app famose per prenotare parrucchieri. Sembrano comode, ma hanno due difetti enormi:
1.  **Si prendono i tuoi clienti:** Se un cliente cerca te sull'app, l'app gli suggerisce anche i tuoi concorrenti.
2.  **Commissioni:** Spesso paghi una percentuale su ogni prenotazione.

**La mia soluzione:**
Ti sviluppo un **sistema proprietario** integrato nel tuo sito.
- I dati sono tuoi (non dell'app).
- Nessuna commissione sulle prenotazioni.
- Nessuna pubblicità dei concorrenti.
- Personalizzato al 100% sulle tue regole.

[Parliamone e costruiamo il tuo gestionale →](${BASE_PATH}/struttura-sito)
  `,
  faqs: [
    {
      question: 'Le clienti anziane riusciranno a usarlo?',
      answer: 'Il telefono non sparisce! Le signore che preferiscono chiamare possono continuare a farlo. Ma vedrai che molte "anziane" sono bravissime con WhatsApp e apprezzeranno la novità.',
    },
    {
      question: 'Posso chiedere un acconto?',
      answer: 'Sì, per servizi lunghi (es. schiariture da 4 ore) posso configurare il sistema per chiedere un acconto online e tutelarti dai no-show.',
    },
    {
      question: 'E se devo spostare un appuntamento?',
      answer: 'Puoi farlo dal tuo pannello di controllo e il sistema avvisa automaticamente la cliente via messaggio.',
    },
  ],
  relatedLinks: [
    { anchor: 'Fidelizzare i clienti', url: `${BASE_PATH}/fidelizzazione` },
    { anchor: 'Sito web per saloni', url: `${BASE_PATH}/struttura-sito` },
    { anchor: 'Google My Business', url: `${BASE_PATH}/google-my-business` },
  ],
  tocSections: [
    'Il costo nascosto del telefono',
    'Riempi i buchi (anche di notte)',
    'Basta "Bidoni" (No-Show)',
    'Scegliere lo stilista',
    'Non solo un nome, ma un database',
    'Perché ti serve un sistema TUO (non in affitto)',
  ],
};
