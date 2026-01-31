import type { PlaybookContent } from '../types';

export const recensioniGoogle: PlaybookContent = {
  slug: 'recensioni-google',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'Recensioni: Il Passaparola Digitale',
    subtitle: 'Come chiedere (e ottenere) recensioni a 5 stelle che convincono i futuri clienti a fidarsi di te.',
    lastUpdated: '2025-01-27',
    readTime: '5 min lettura',
  },
  tldr: {
    short: 'Nel settore fotografico la fiducia è tutto. Le recensioni su Google sono la prova sociale più potente che hai. Non lasciarle al caso, serve un processo sistematico.',
    bullets: [
      'Chiedi la recensione nel momento di massima felicità (consegna)',
      'Rendi facile il processo inviando il link diretto',
      'Rispondi a tutte le recensioni per migliorare la SEO',
      'Usa le recensioni migliori sul tuo sito web',
    ],
  },
  quickQuestions: [
    'Quante recensioni hai su Google Maps?',
    'L\'ultima recensione risale a 6 mesi fa?',
    'Hai paura di disturbare i clienti chiedendo un feedback?',
  ],
  cta: {
    title: 'Vuoi mostrare le tue recensioni sul sito?',
    description: 'Integro le tue recensioni Google direttamente sul tuo sito web in modo elegante e automatico.',
    buttonText: 'Migliora la tua reputazione',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## Perché la Gente Legge le Recensioni

Prima di affidarti il giorno del matrimonio o le foto dei figli, un cliente vuole essere rassicurato.
Non vuole solo sapere se fai belle foto (quello lo vede dal portfolio), vuole sapere:
- Sei puntuale?
- Metti a proprio agio le persone?
- Consegni nei tempi previsti?
- Come gestisci gli imprevisti?

Le recensioni rispondono a queste domande meglio di qualsiasi cosa tu possa scrivere su te stesso.

## 1. Il Timing è Tutto

Non chiedere la recensione due mesi dopo. Il momento magico ("Magic Moment") è **appena vedono le foto**.
Quando invii la gallery (o consegni l'album) e ti rispondono "Wow, sono bellissime, sto piangendo!", quella è la tua finestra.

Rispondi: *"Sono felicissimo che ti piacciano! Mi faresti un regalo enorme se scrivessi queste stesse parole in una breve recensione su Google? Ecco il link..."*

## 2. Facilita il Compito

Non dire "lasciami una recensione su Google". La gente è pigra.
Vai sul tuo profilo Google Business, clicca su "Chiedi recensioni" e copia il link diretto.
Manda quel link via WhatsApp o email. Devono solo cliccare e mettere le stelle.

## 3. Cosa Fare con le Recensioni Ricevute

- **Rispondi Sempre:** Ringrazia, cita un dettaglio del servizio ("Ricordo ancora la luce bellissima al tramonto..."). Questo piace a Google e ai futuri clienti.
- **Mettile sul Sito:** Non nasconderle su Google. Crea una sezione "Dicono di me" in Home Page o nella pagina Servizi.
- **Condividile sui Social:** Fai uno screenshot delle parole più belle e mettilo nelle Stories (e salvalo nelle storie in evidenza "Love Notes").

## 4. Gestire le Recensioni Negative

Capita. Un cliente incontentabile, un ritardo, un malinteso.
- **Mai litigare online:** Ti fa sembrare poco professionale.
- **Rispondi con classe:** "Mi dispiace che tu abbia avuto questa impressione. Il mio obiettivo è sempre... Contattami in privato per risolvere."
- **Seppelliscila:** L'unico antidoto a una recensione a 1 stella sono dieci recensioni a 5 stelle che arrivano subito dopo.

## 5. Automatizza (se puoi)

Se usi un CRM (come Studio Ninja, Dubsado, o anche solo un'automazione email), imposta una mail automatica che parte 3 giorni dopo la consegna della galleria con la richiesta di recensione.
Così non te ne dimentichi mai.

## Conclusione

Le recensioni sono un asset aziendale. Una scheda con 50 recensioni a 5 stelle vale migliaia di euro in marketing gratuito perché abbatte lo scetticismo iniziale dei prospect.
  `,
  faqs: [
    {
      question: 'Meglio recensioni su Google o su Facebook?',
      answer: 'Google vince a mani basse per la SEO e la visibilità nelle ricerche. Facebook è utile, ma secondario. Matrimonio.com è importante solo se paghi la vetrina lì, altrimenti meglio concentrare tutto su Google.',
    },
    {
      question: 'Posso offrire uno sconto in cambio di una recensione?',
      answer: 'Tecnicamente è contro le policy di Google (e poco etico). Meglio chiedere il favore facendo leva sulla soddisfazione del cliente e sul rapporto personale che hai creato.',
    },
    {
      question: 'Cosa faccio se un cliente non la lascia anche se ha promesso?',
      answer: 'Un gentile reminder dopo una settimana è ok. "Ciao, spero tutto bene! Ti rimando il link nel caso ti fosse sfuggito...". Se ancora non lo fa, lascia perdere per non diventare insistente.',
    },
  ],
  relatedLinks: [
    { anchor: 'Ottimizza Google My Business', url: '/playbooks/fotografi/google-my-business' },
    { anchor: 'Gallerie e consegna foto', url: '/playbooks/fotografi/consegna-foto' },
    { anchor: 'SEO Locale', url: '/playbooks/fotografi/seo-locale' },
  ],
  tocSections: [
    'Perché la Gente Legge le Recensioni',
    '1. Il Timing è Tutto',
    '2. Facilita il Compito',
    '3. Cosa Fare con le Recensioni Ricevute',
    '4. Gestire le Recensioni Negative',
    '5. Automatizza (se puoi)',
    'Conclusione',
  ],
};
