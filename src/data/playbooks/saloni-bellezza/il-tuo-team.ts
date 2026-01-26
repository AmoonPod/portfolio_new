import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const ilTuoTeam: PlaybookContent = {
  slug: 'il-tuo-team',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Vendi il tuo Team: le persone comprano da persone',
    subtitle: 'Il salone sei tu, ma non solo. Ecco come valorizzare i tuoi collaboratori per creare fiducia e libertà.',
    lastUpdated: '26 gennaio 2026',
    readTime: '6 minuti',
  },
  tldr: {
    short: 'Se i clienti vogliono solo te, sei schiavo del salone. Valorizzando il team, crei fiducia nei collaboratori e puoi delegare.',
    bullets: [
      'Presenta lo staff sul sito e sui social',
      'Crea "Specialisti" (es. Mago del Colore)',
      'Fai parlare i collaboratori nelle Stories',
      'Le clienti si affezionano alle persone, non al brand',
    ],
  },
  quickQuestions: [
    'Le clienti vogliono solo te o si fidano degli altri?',
    'Sul sito ci sono le foto e i nomi dello staff?',
    'Ogni collaboratore ha una sua specialità?',
    'I tuoi ragazzi sono orgogliosi di lavorare lì?',
  ],
  cta: {
    title: 'Vuoi una pagina "Chi Siamo" che vende?',
    description: 'Creo la sezione Team sul tuo sito per far innamorare le clienti del tuo staff prima ancora di entrare.',
    buttonText: 'Valorizziamo il team',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei creare una bella presentazione del mio team sul sito.')}`,
  },
  content: `
## 1. La trappola del "Titolare Tuttofare"

Se sei l'unico bravo, non hai un'azienda, hai un lavoro da schiavo.
Se vai in ferie, il salone si ferma. Se ti ammali, non incassi.

L'unico modo per crescere è far sì che le clienti si fidino dei tuoi ragazzi quanto di te.
Per farlo, devi **venderli**.

---

## 2. Presentali come Star

Sul sito, non mettere solo la foto di gruppo sgranata.
Crea una sezione per ognuno:
- **Foto professionale** (sorridente!).
- **Nome e Ruolo** (non "apprendista", ma "Junior Stylist").
- **Specialità** ("La regina delle sfumature").
- **Bio breve** ("Ama i tagli corti e la musica rock").

Quando la cliente prenota, non sceglie "un parrucchiere a caso". Sceglie Marco o Sara.

---

## 3. Crea gli Specialisti

Nessuno può essere bravo in tutto.
Specializza i tuoi ragazzi e comunicalo.

- Luca: **Specialista Taglio Maschile**
- Elena: **Colorist Expert**
- Giulia: **Extension Specialist**

Se una cliente vuole le extension, andrà da Giulia felice, anche se tu sei il titolare. Perché Giulia è la "Specialista".

---

## 4. Social Media Takeover

Fai vedere le loro facce su Instagram.
- Fai fare a loro i video dei "Prima e Dopo".
- Falli parlare nelle storie ("Ciao, oggi vi spiego come mantenere il colore").
- Taggali nei lavori che fanno.

Se le clienti li vedono online, si fidano offline.

[Strategia social completa →](${BASE_PATH}/social-media)

---

## 5. Formazione visibile

Quando mandi lo staff a un corso, dillo a tutti!
*"Oggi il salone è chiuso perché siamo a Londra ad imparare le nuove tecniche 2026."*

Non è un disservizio, è un valore.
Le clienti penseranno: *"Wow, si aggiornano sempre, sono in mani sicure."*

---

## 6. Il prezzo differenziato

È giusto che tu costi di più.
Crea livelli di prezzo:
- **Art Director (Tu):** Taglio €40
- **Top Stylist:** Taglio €30
- **Stylist:** Taglio €25

Così intercetti tutte le fasce di clientela.
Chi vuole il meglio paga te. Chi vuole risparmiare va dai ragazzi (e tu guadagni comunque).

---

## 7. L'orgoglio di appartenenza

Se valorizzi il tuo team pubblicamente, loro si sentiranno importanti.
Lavoreranno meglio, sorrideranno di più e venderanno di più.
Un team felice porta clienti felici.

[Scopri come gestire le prenotazioni per operatore →](${BASE_PATH}/prenotazioni-online)
  `,
  faqs: [
    {
      question: 'E se poi si aprono un salone per conto loro?',
      answer: 'È un rischio. Ma l\'alternativa è trattarli male e avere dipendenti mediocri che restano per sempre. Meglio formare campioni che forse andranno via, che tenersi brocchi che restano.',
    },
    {
      question: 'Come convinco la cliente a passare da me a un collaboratore?',
      answer: 'Edifica il collaboratore: "Oggi ti segue Marco, sul biondo è diventato più bravo di me, fidati." Se lo dici tu, lei si fida.',
    },
    {
      question: 'Devo fare foto professionali?',
      answer: 'Sì. Chiama un fotografo per mezza giornata. Foto belle del team in divisa, tutti coordinati. Dà un\'immagine di professionalità pazzesca.',
    },
  ],
  relatedLinks: [
    { anchor: 'Listino Prezzi', url: `${BASE_PATH}/listino-prezzi` },
    { anchor: 'Social Media', url: `${BASE_PATH}/social-media` },
    { anchor: 'Foto Prima e Dopo', url: `${BASE_PATH}/foto-prima-dopo` },
  ],
  tocSections: [
    'La trappola del "Titolare Tuttofare"',
    'Presentali come Star',
    'Crea gli Specialisti',
    'Social Media Takeover',
    'Formazione visibile',
    'Il prezzo differenziato',
    "L'orgoglio di appartenenza",
  ],
};
