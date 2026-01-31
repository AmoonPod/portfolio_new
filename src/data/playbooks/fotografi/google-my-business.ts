import type { PlaybookContent } from '../types';

export const googleMyBusiness: PlaybookContent = {
  slug: 'google-my-business',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'Google Business Profile: La Tua Vetrina su Maps',
    subtitle: 'Il modo più veloce per farsi trovare da chi cerca un fotografo in zona, gratis.',
    lastUpdated: '2025-01-27',
    readTime: '5 min lettura',
  },
  tldr: {
    short: 'La scheda Google Business (ex Google My Business) è fondamentale per la SEO locale. Molti fotografi la trascurano, lasciando campo libero ai concorrenti.',
    bullets: [
      'Compila ogni campo: orari, servizi, aree coperte',
      'Carica regolarmente le tue foto migliori (Google premia la frequenza)',
      'Rispondi a tutte le recensioni, belle e brutte',
      'Usa la sezione "Aggiornamenti" come un mini-social',
    ],
  },
  quickQuestions: [
    'Hai rivendicato la tua attività su Google Maps?',
    'Le foto del tuo profilo sono aggiornate o vecchie di 3 anni?',
    'Chiedi sistematicamente ai clienti di lasciarti una recensione lì?',
  ],
  cta: {
    title: 'Non sai come gestire la tua presenza online?',
    description: 'Ti aiuto a configurare perfettamente Google Business e integrarlo con un sito web performante.',
    buttonText: 'Consulenza Strategica',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## Perché è Essenziale per i Fotografi

Quando cerchi "fotografo vicino a me", Google mostra prima la mappa (Local Pack) e poi i siti web. Essere lì significa visibilità immediata.

Per un'attività visuale come la fotografia, la scheda Google è ancora più potente perché mostra subito le immagini.

## 1. Configurazione Perfetta

Non lasciare campi vuoti.
- **Categoria:** Scegli quella primaria corretta (es. "Fotografo di matrimoni"). Puoi aggiungerne altre secondarie (es. "Fotografo commerciale", "Studio fotografico").
- **Area di servizio:** Se non hai uno studio aperto al pubblico, nascondi l'indirizzo e imposta un'area di servizio (es. raggio di 50km o elenco di città).
- **Servizi:** Elenca tutto ciò che fai (shooting gravidanza, corporate, eventi).

## 2. Le Foto: Il Tuo Asso nella Manica

Sei un fotografo: la tua scheda deve avere le foto migliori della zona.
- Carica il logo e una bella foto copertina.
- Crea album per categorie (Matrimoni, Ritratti, Studio).
- Carica nuove foto regolarmente (almeno una volta al mese). Google vede l'attività e ti premia.
- **Attenzione:** Evita foto con watermark giganti o troppo testo, Google potrebbe rifiutarle.

## 3. Recensioni (Social Proof)

Le stelline sono la prima cosa che l'occhio guarda.
- Le recensioni su Google pesano molto per il ranking locale.
- Non aspettare che arrivino: chiedile! Manda il link diretto al cliente appena consegni il lavoro ed è felice.
- Rispondi sempre. "Grazie mille Maria, è stato un piacere" dimostra che ci tieni e che sei attivo.

## 4. Sezione Prodotti e Aggiornamenti

- **Prodotti:** Puoi creare delle schede "prodotto" per i tuoi pacchetti (es. "Servizio Matrimonio Base", "Sessione Family"). È uno spazio gratis per mostrare prezzi o "a partire da".
- **Aggiornamenti:** Usa i post di Google per annunciare disponibilità last minute, nuovi articoli del blog, o offerte stagionali (es. "Prenotazioni aperte per sessioni natalizie").

## 5. Domande e Risposte (Q&A)

Chiunque può fare domande sulla tua scheda.
- Monitorale e rispondi subito.
- **Trucco:** Puoi fare tu stesso delle domande (dall'account personale) e rispondere (dall'account business) per creare una sezione FAQ visibile (es. "Quanto tempo prima devo prenotare?", "Consegni i file originali?").

## Conclusione

Google Business Profile è gratuito e ti porta clienti "caldi", pronti a prenotare. Dedicaci 30 minuti al mese per tenerlo vivo.
  `,
  faqs: [
    {
      question: 'Posso avere una scheda se non ho uno studio fisico?',
      answer: 'Assolutamente sì. Google permette di creare schede per "attività senza sede fissa" (Service Area Business). Nasconderai l\'indirizzo di casa e mostrerai solo l\'area in cui lavori.',
    },
    {
      question: 'Come cancello una recensione negativa falsa?',
      answer: 'È difficile. Puoi segnalarla a Google se viola le policy, ma raramente la tolgono se è solo un parere negativo. La strategia migliore è rispondere con educazione e professionalità, e "seppellirla" sotto tante nuove recensioni positive.',
    },
    {
      question: 'Le foto devono essere ad alta risoluzione?',
      answer: 'Sì, ma ottimizzate per il web (JPG, sRGB). Google le comprimerà comunque, ma parti da una buona qualità. Formato consigliato: circa 1080px o 2048px lato lungo.',
    },
  ],
  relatedLinks: [
    { anchor: 'Come gestire le Recensioni', url: '/playbooks/fotografi/recensioni-google' },
    { anchor: 'SEO Locale approfondita', url: '/playbooks/fotografi/seo-locale' },
    { anchor: 'Social Media Strategy', url: '/playbooks/fotografi/social-media' },
  ],
  tocSections: [
    'Perché è Essenziale per i Fotografi',
    '1. Configurazione Perfetta',
    '2. Le Foto: Il Tuo Asso nella Manica',
    '3. Recensioni (Social Proof)',
    '4. Sezione Prodotti e Aggiornamenti',
    '5. Domande e Risposte (Q&A)',
    'Conclusione',
  ],
};
