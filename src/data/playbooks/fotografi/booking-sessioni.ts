import type { PlaybookContent } from '../types';

export const bookingSessioni: PlaybookContent = {
  slug: 'booking-sessioni',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'Sistema di Prenotazione: Smetti di Inseguire i Clienti',
    subtitle: 'Come automatizzare appuntamenti e sessioni per risparmiare ore di chat e email.',
    lastUpdated: '2025-01-27',
    readTime: '6 min lettura',
  },
  tldr: {
    short: 'Il ping-pong di email per trovare una data libera è frustrante per te e per il cliente. Un sistema di prenotazione online semplifica la vita, riduce i no-show e ti fa sembrare più professionale.',
    bullets: [
      'Usa strumenti come Calendly o integrati nel sito',
      'Chiedi un acconto (retainer) per bloccare la data',
      'Automatizza le email di conferma e promemoria',
      'Sincronizza tutto con il tuo Google Calendar',
    ],
  },
  quickQuestions: [
    'Quante email scambi solo per fissare una data?',
    'Ti è mai capitato che un cliente non si presentasse?',
    'I clienti possono prenotare anche quando tu stai dormendo?',
  ],
  cta: {
    title: 'Vuoi automatizzare il tuo flusso di lavoro?',
    description: 'Posso integrare un sistema di booking professionale direttamente nel tuo nuovo sito web, sincronizzato col tuo calendario.',
    buttonText: 'Semplificami la vita',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## "Sei libero sabato?" "No, domenica?" "Domenica non posso..."

Questa conversazione uccide la vendita. Nel tempo che ci metti a rispondere, il cliente ha già trovato un altro fotografo che gli ha permesso di prenotare subito.

Per servizi standard (sessioni ritratto, famiglia, consulenze sposi), l'automazione è la chiave.

## 1. Strumenti di Booking

Non serve sviluppare un software da zero. Esistono strumenti eccellenti:
- **Calendly:** Il più famoso, ottima versione free.
- **Doodle / Acuity Scheduling:** Più avanzati.
- **Moduli nativi del sito:** Se hai un sito custom, si può integrare un calendario perfettamente in stile con il tuo brand.

Il cliente vede i tuoi slot liberi (che decidi tu), clicca, prenota. Fatto.

## 2. L'Importanza dell'Acconto (Retainer)

Mai bloccare una data sulla fiducia (tranne forse per una prima call conoscitiva).
Configura il sistema in modo che la prenotazione sia confermata **solo dopo il pagamento di un acconto** (o session fee).
- Elimina i no-show al 99%.
- Impegna psicologicamente il cliente.
- Ti dà cash flow immediato.

Stripe o PayPal si integrano facilmente con questi sistemi.

## 3. Workflow Automatizzato

Ecco cosa succede quando hai un sistema ben configurato:
1.  Il cliente prenota sul sito alle 23:00.
2.  Riceve subito una mail di conferma con i dettagli (Luogo, Orario, Guida all'abbigliamento).
3.  Tu ricevi una notifica e l'evento appare sul tuo Google Calendar.
4.  24h prima della sessione, il cliente riceve un promemoria automatico.
5.  Tu non hai fatto *nulla* di manuale.

## 4. Per i Matrimoni?

Per i matrimoni non fai prenotare la data secca online (devi verificare disponibilità e fare un preventivo complesso).
Tuttavia, usa il booking per **fissare la call conoscitiva o l'appuntamento in studio**.
"Vuoi parlarmi del tuo matrimonio? Prenota una videochiamata di 30 minuti qui."
È molto più professionale del "chiamami quando vuoi" (che poi magari stai scattando e non rispondi).

## 5. Proteggi il Tuo Tempo

Il booking ti permette di mettere paletti ("boundaries").
- Puoi impostare che non si può prenotare con meno di 48h di anticipo.
- Puoi bloccare i lunedì o le mattine se fai editing.
- Eviti che i clienti ti chiamino la domenica a pranzo per fissare un appuntamento.

## Conclusione

Automatizzare non significa essere freddi. Significa essere efficienti e rispettare il tempo di tutti. Il cliente apprezzerà la facilità e la chiarezza del processo.
  `,
  faqs: [
    {
      question: 'È difficile da configurare?',
      answer: 'No, strumenti come Calendly si settano in 15 minuti. La parte più "tecnica" è collegare il calendario di Google per evitare sovrapposizioni, ma è guidata.',
    },
    {
      question: 'Posso fare domande prima della prenotazione?',
      answer: 'Sì, puoi aggiungere un modulo obbligatorio: "Quante persone sarete?", "Età dei bambini?", "Location preferita?". Così arrivi allo shooting preparato.',
    },
    {
      question: 'Costa molto?',
      answer: 'Molti tool hanno piani gratuiti sufficienti per iniziare. I piani a pagamento (che permettono pagamenti online e più automazioni) costano circa 10-15€ al mese. Un investimento che si ripaga con una sola sessione salvata.',
    },
  ],
  relatedLinks: [
    { anchor: 'Listino Prezzi e Strategia', url: '/playbooks/fotografi/listino-prezzi' },
    { anchor: 'Consegna foto e gallerie', url: '/playbooks/fotografi/consegna-foto' },
    { anchor: 'Sito web performante', url: '/playbooks/fotografi/portfolio-online' },
  ],
  tocSections: [
    '1. Strumenti di Booking',
    '2. L\'Importanza dell\'Acconto (Retainer)',
    '3. Workflow Automatizzato',
    '4. Per i Matrimoni?',
    '5. Proteggi il Tuo Tempo',
    'Conclusione',
  ],
};
