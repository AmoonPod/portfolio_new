import type { PlaybookContent } from '../types';

export const listinoPrezzi: PlaybookContent = {
  slug: 'listino-prezzi',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'Prezzi sul Sito: Sì, No o "A Partire Da"?',
    subtitle: 'Come presentare il tuo listino per filtrare i perditempo e attirare il cliente ideale.',
    lastUpdated: '2025-01-27',
    readTime: '6 min lettura',
  },
  tldr: {
    short: 'Nascondere i prezzi crea frizione e ti riempie la casella di posta di "preventivatori seriali". La trasparenza paga, ma serve strategia.',
    bullets: [
      'Il prezzo è un filtro: usalo per qualificare i lead',
      'Non fare la "guerra al ribasso", vendi il valore',
      'Usa la tecnica del "A partire da" per dare un\'idea senza vincolarti',
      'Crea pacchetti chiari (Base, Medio, Premium)',
    ],
  },
  quickQuestions: [
    'Ricevi troppe richieste che poi spariscono sentendo il prezzo?',
    'Il tuo cliente ideale capisce cosa include il tuo servizio?',
    'Hai paura che i concorrenti ti copino il listino?',
  ],
  cta: {
    title: 'Vuoi un sito che venda il tuo valore?',
    description: 'Creo pagine servizi e pricing studiate per convertire, con design che giustificano prezzi premium.',
    buttonText: 'Parliamo del tuo progetto',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## L'Eterno Dilemma: Pubblicare o No?

Molti fotografi temono di mostrare i prezzi per paura di spaventare i clienti o di essere copiati dai concorrenti.
La verità? **Nascondere i prezzi spaventa di più.**

Nell'era di Amazon e Netflix, l'utente vuole l'informazione *subito*. Se deve mandare una mail e aspettare 2 giorni per sapere se costi 500€ o 5.000€, andrà dal concorrente che ha i prezzi esposti.

## 1. Il Prezzo come Filtro (Qualificazione)

Se il tuo servizio matrimonio parte da 2.500€, non vuoi perdere tempo al telefono con chi ha un budget di 800€.
Mettere un "A partire da 2.500€" sul sito è il miglior filtro antispam che esista.

- **Vantaggio:** Ricevi meno richieste, ma quelle che arrivano sanno già che possono permetterselo. Il tasso di conversione schizza alle stelle.
- **Svantaggio:** Perdi i clienti low-budget (che è esattamente quello che vuoi, giusto?).

## 2. La Psicologia dei Pacchetti

Non offrire un menu infinito "a la carte". La troppa scelta paralizza (Paradosso della Scelta).
Crea 3 pacchetti chiari:
1.  **Base:** L'essenziale.
2.  **Best Seller (Medio):** Quello che vuoi vendere davvero. Rendilo il più attraente per rapporto qualità/prezzo.
3.  **VIP (Premium):** Tutto incluso, costoso. Serve anche per "ancoraggio": fa sembrare il pacchetto Medio più conveniente.

## 3. Non Vendere "Ore" e "File", Vendi Risultati

Errore classico nel listino:
*   "8 ore di copertura, 300 file jpg, 1 album 20x30."
È freddo e merceologico.

Approccio migliore:
*   "Racconto completo della giornata, dai preparativi ai balli. Tutte le emozioni in alta risoluzione, pronte per essere rivissute per sempre. Un album artigianale fatto a mano in Italia per custodire i ricordi."

Giustifica il prezzo con il valore emotivo e l'esperienza, non solo con le specifiche tecniche.

## 4. Dove Mettere i Prezzi

- **Pagina "Investimento" o "Prezzi":** Voce chiara nel menu.
- **FAQ:** "Quanto costa un servizio?"
- **Pagina Servizi:** Sotto la descrizione di ogni tipologia.

## 5. E se Faccio Preventivi Personalizzati?

Va benissimo, specialmente nel corporate o grandi eventi. Ma dai comunque un range o un prezzo minimo.
*"Progetti corporate a partire da 1.200€. Contattami per una quotazione su misura."*
Questo rassicura l'azienda che non sei un amatore da 50€, ma nemmeno un'agenzia da 50.000€ (se non lo sei).

## Conclusione

Non aver paura dei tuoi prezzi. Se il tuo lavoro vale, il cliente giusto pagherà. Il sito deve trasmettere professionalità tale da far dire "Costa tanto, ma li vale tutti".
  `,
  faqs: [
    {
      question: 'Devo scrivere i prezzi iva inclusa?',
      answer: 'Se ti rivolgi a privati (sposi, famiglie), assolutamente sì. È obbligatorio per legge e trasparente. Se lavori solo B2B (aziende), puoi scrivere "+ IVA".',
    },
    {
      question: 'Come gestisco gli sconti?',
      answer: 'Evita di svalutare il servizio. Invece di fare sconto sul prezzo, aggiungi valore (es. "Prenota entro fine mese e ti regalo 5 stampe fine-art").',
    },
    {
      question: 'Devo mettere il listino completo scaricabile in PDF?',
      answer: 'Meglio di no. I PDF su mobile sono scomodi. Meglio una pagina web ben impaginata. Usa il PDF (brochure) solo da inviare via mail dopo il primo contatto, come approfondimento.',
    },
  ],
  relatedLinks: [
    { anchor: 'Come gestire le Prenotazioni', url: '/playbooks/fotografi/booking-sessioni' },
    { anchor: 'Il Portfolio che vende', url: '/playbooks/fotografi/portfolio-online' },
    { anchor: 'Strategia Matrimoni', url: '/playbooks/fotografi/matrimoni' },
  ],
  tocSections: [
    'L\'Eterno Dilemma: Pubblicare o No?',
    '1. Il Prezzo come Filtro (Qualificazione)',
    '2. La Psicologia dei Pacchetti',
    '3. Non Vendere "Ore" e "File", Vendi Risultati',
    '4. Dove Mettere i Prezzi',
    '5. E se Faccio Preventivi Personalizzati?',
    'Conclusione',
  ],
};
