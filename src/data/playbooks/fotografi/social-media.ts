import type { PlaybookContent } from '../types';

export const socialMedia: PlaybookContent = {
  slug: 'social-media',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'Instagram e Social: Strategia Senza Stress',
    subtitle: 'Smetti di essere schiavo dell\'algoritmo e inizia a usare i social per trovare clienti veri.',
    lastUpdated: '2025-01-27',
    readTime: '6 min lettura',
  },
  tldr: {
    short: 'Instagram è il biglietto da visita moderno per i fotografi, ma i like non pagano le bollette. Serve una strategia per portare i follower fuori dal social e dentro il tuo sito.',
    bullets: [
      'Il feed è il tuo portfolio, le stories sono il "dietro le quinte"',
      'Usa i Reel per mostrare l\'esperienza di scatto, non solo le foto',
      'Geotagga sempre i post per farti trovare localmente',
      'Porta il traffico sul sito (l\'unica piattaforma tua)',
    ],
  },
  quickQuestions: [
    'Pubblichi ogni giorno ma nessuno chiede preventivi?',
    'I tuoi follower sono solo altri fotografi che ti fanno i complimenti?',
    'Usi le stories per far vedere la tua faccia e creare fiducia?',
  ],
  cta: {
    title: 'Trasforma i follower in clienti',
    description: 'Il social attira, il sito vende. Sviluppo il sito web perfetto per convertire il traffico che generi su Instagram in prenotazioni reali.',
    buttonText: 'Collega Social e Sito',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## Il Grande Inganno dei "Vanity Metrics"

Avere 10.000 follower è bello per l'ego, ma se nessuno compra, è inutile.
Meglio averne 500 locali, in target, che interagiscono e prenotano.
L'obiettivo dei social non è diventare famosi, è **portare persone sul tuo sito web** e farle contattare.

## 1. Instagram: Feed vs Stories

- **Feed (La Vetrina):** Qui vanno solo i lavori migliori. Deve essere curato cromaticamente e stilisticamente. È quello che un nuovo utente guarda per decidere se seguirti.
- **Stories (Il Reality):** Qui costruisci la fiducia (Know, Like, Trust). Fai vedere chi sei, come lavori, il backstage, i tuoi gatti, il caffè. La gente compra *te* prima delle tue foto.

## 2. Pinterest: Il Gigante Addormentato

Molti fotografi lo ignorano, ma per **matrimoni, family e maternity** è oro.
A differenza di Instagram (che è effimero), i pin su Pinterest durano anni e sono indicizzati su Google.
- Crea board come "Ispirazione Matrimonio in Toscana" o "Outfit per sessione gravidanza".
- Linka ogni pin a un articolo del tuo blog o a una galleria del sito.

## 3. TikTok e Reels: Mostra l'Esperienza

Il video è re. Non limitarti a fare slideshow di foto statiche (sono noiosi).
Cosa postare:
- Backstage di uno shooting (POV: Point Of View).
- "Come vestirsi per una sessione".
- Reazione degli sposi alla consegna dell'album.
- Consigli per posare meglio.

## 4. Local Strategy sui Social

Se sei un fotografo di famiglia a Bologna:
- Usa hashtag locali: #fotografobologna #mammaabologna #bolognabimbi.
- Tagga le location: "Giardini Margherita", "Piazza Maggiore".
- Interagisci con profili di attività locali (negozi per bambini, wedding planner di zona).

## 5. La Regola dell'80/20

- **80% Valore e Intrattenimento:** Belle foto, consigli, emozioni, ispirazione.
- **20% Vendita:** "Ho 2 posti liberi per luglio", "Prenota la sessione di Natale".

Se provi solo a vendere, ti unfollowano. Se non provi mai a vendere, muori di fame.

## Conclusione

Non lasciare che i social ti rubino la vita. Pianifica, usa strumenti di programmazione (come Meta Business Suite) e ricorda: **i social sono in affitto, il tuo sito web è casa tua.** Sposta sempre l'utente lì.
  `,
  faqs: [
    {
      question: 'Devo avere un account separato per il lavoro?',
      answer: 'Sì. Il profilo personale privato tienilo per gli amici. Il profilo business deve essere pubblico e professionale, anche se deve mostrare un po\' della tua personalità.',
    },
    {
      question: 'Ogni quanto devo pubblicare?',
      answer: 'La costanza batte l\'intensità. Meglio 3 post a settimana fissi che 10 in una settimana e poi silenzio per un mese. Le stories invece, possibilmente ogni giorno (anche solo una).',
    },
    {
      question: 'Facebook è morto?',
      answer: 'No, specialmente per il target 35-50+ (genitori, famiglie). I gruppi Facebook locali sono ancora ottimi per trovare clienti nella propria zona.',
    },
  ],
  relatedLinks: [
    { anchor: 'SEO Locale (perché i social non bastano)', url: '/playbooks/fotografi/seo-locale' },
    { anchor: 'Videomaking e Portfolio Video', url: '/playbooks/fotografi/video-portfolio' },
    { anchor: 'Racogliere recensioni', url: '/playbooks/fotografi/recensioni-google' },
  ],
  tocSections: [
    'Il Grande Inganno dei "Vanity Metrics"',
    '1. Instagram: Feed vs Stories',
    '2. Pinterest: Il Gigante Addormentato',
    '3. TikTok e Reels: Mostra l\'Esperienza',
    '4. Local Strategy sui Social',
    '5. La Regola dell\'80/20',
    'Conclusione',
  ],
};
