import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/ristoranti';
const WHATSAPP_NUMBER = '393505764958';

export const seoLocale: PlaybookContent = {
  slug: 'seo-locale',
  niche: 'ristoranti',
  nicheName: 'Ristoranti e Pizzerie',
  hero: {
    title: 'Farsi trovare su Google: come superare i concorrenti nella tua zona',
    subtitle: 'Quando uno scrive "Ristorante [Tua Città]", tu devi essere nei primi 3 risultati. Ecco come si fa.',
    lastUpdated: '22 gennaio 2026',
    readTime: '8 minuti',
  },
  tldr: {
    short: 'La SEO locale è come mettere un cartello luminoso gigante sulla strada principale, ma digitale. Serve a intercettare chi ha fame ORA.',
    bullets: [
      'Usa il nome della tua città nelle pagine del sito',
      'Assicurati che Google sappia ESATTAMENTE dove sei',
      'Le recensioni spingono il tuo sito in alto',
      'Il sito deve caricarsi subito (velocità = visibilità)',
    ],
  },
  quickQuestions: [
    'Se cerchi "Ristorante [Tua Città]", compari?',
    'Il tuo sito dice chiaramente in che quartiere sei?',
    'Google Maps ha le stesse info del tuo sito?',
    'Ricevi chiamate da chi ti ha trovato online?',
  ],
  cta: {
    title: 'Vuoi scalare la classifica di Google?',
    description: 'Non serve magia, serve metodo. Posso ottimizzare il tuo sito per farti trovare dai clienti della tua zona.',
    buttonText: 'Parliamo di visibilità',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei comparire più in alto su Google quando la gente cerca un ristorante.')}`,
  },
  content: `
## 1. Cos'è la "SEO Locale" (senza parole difficili)

Immagina Google come un vigile urbano.
Quando un turista gli chiede: *"Scusi, dove posso mangiare bene qui vicino?"*, il vigile (Google) consiglia i posti che:
1.  Sono vicini.
2.  Sono conosciuti e affidabili (tante recensioni).
3.  Hanno le carte in regola (sito chiaro, orari giusti).

Il nostro obiettivo è diventare il ristorante preferito del vigile.

---

## 2. Parla chiaro al tuo sito

Spesso vedo siti con scritto solo "Benvenuti da Mario".
Google non sa chi è Mario.

Devi scrivere: **"Ristorante Da Mario - Cucina Romana a Trastevere"**.
Devi dirlo chiaramente.

### Fai così
Controlla che sulla Home Page ci siano scritti:
- Il tipo di cucina (Pizzeria, Pesce, Sushi).
- La città e magari anche il quartiere.
- L'indirizzo completo a fondo pagina.

---

## 3. La pagina "Dove Siamo"

Aiuta Google a capire dove ti trovi creando una pagina dedicata.
Mettici:
- La mappa di Google incorporata (quella che puoi muovere col dito).
- Indicazioni scritte ("Siamo dietro al Duomo, vicino al parcheggio X").
- Info sul parcheggio.

Più informazioni dai sulla posizione, più Google capirà a chi mostrarti.

[Come strutturare le pagine del sito →](${BASE_PATH}/struttura-sito)

---

## 4. Coerenza (non confondere Google)

Se su Facebook sei "Pizzeria Mario", sul sito "Mario Pizza & Food" e su Google "Ristorante Da Mario"... Google si confonde.
E se si confonde, non ti mostra.

### La regola NAP
Assicurati che **Nome, Indirizzo e Telefono** siano IDENTICI ovunque:
- Sito Web
- Google Maps
- Facebook / Instagram
- TripAdvisor

Anche una virgola diversa può creare confusione nei sistemi automatici.

---

## 5. Le recensioni sono il turbo

Google ragiona così: *"Se tanta gente dice che questo posto è buono, allora lo mostro a più persone."*
Le recensioni non servono solo a convincere i clienti, servono a convincere l'algoritmo di Google.

Un flusso costante di recensioni positive è il fattore numero 1 per salire in classifica.

[Strategia per avere più recensioni →](${BASE_PATH}/recensioni-google)

---

## 6. Velocità = Visibilità

Google odia i siti lenti. Perché gli utenti odiano i siti lenti.
Se il tuo sito ci mette 10 secondi ad aprirsi dal cellulare, Google smetterà di mostrarlo nei risultati.

Non caricare foto pesantissime. Tieni il sito leggero.

---

## 7. Link locali (fatti conoscere dal vicinato)

Se il sito del Comune, il blog turistico locale o il giornale della città mettono un link al tuo sito, per Google è un segnale potentissimo.
È come se il Sindaco dicesse "Andate da Mario".

### Fai così
- Sponsorizza un evento locale (fiera, squadra di calcetto).
- Fatti intervistare dal giornale locale.
- Iscriviti al portale turistico della città.

Ogni link che ricevi da un sito "della zona" vale oro.

[Scopri come gestire Google My Business →](${BASE_PATH}/google-my-business)
  `,
  faqs: [
    {
      question: 'Devo pagare per essere primo su Google?',
      answer: 'No. Puoi pagare gli annunci (quelli con scritto "Sponsorizzato"), ma la SEO serve proprio a comparire in alto GRATIS, nei risultati naturali.',
    },
    {
      question: 'Quanto tempo ci vuole?',
      answer: 'La SEO non è immediata. Ci vogliono 2-3 mesi di lavoro fatto bene per vedere risultati stabili. Ma poi durano nel tempo.',
    },
    {
      question: 'Meglio Facebook o Google?',
      answer: 'Servono a cose diverse. Facebook crea voglia (vedo la foto e mi viene fame). Google soddisfa il bisogno (ho fame ORA, cerco dove andare). Per i ristoranti, Google vince.',
    },
  ],
  relatedLinks: [
    { anchor: 'Tutto su Google My Business', url: `${BASE_PATH}/google-my-business` },
    { anchor: 'Come avere più recensioni', url: `${BASE_PATH}/recensioni-google` },
    { anchor: 'Il menu digitale perfetto', url: `${BASE_PATH}/menu-online` },
  ],
  tocSections: [
    "Cos'è la \"SEO Locale\" (senza parole difficili)",
    'Parla chiaro al tuo sito',
    'La pagina "Dove Siamo"',
    'Coerenza (non confondere Google)',
    'Le recensioni sono il turbo',
    'Link locali (fatti conoscere dal vicinato)',
  ],
};
