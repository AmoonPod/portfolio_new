import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const socialMedia: PlaybookContent = {
  slug: 'social-media',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Instagram e TikTok per Parrucchieri: cosa postare per avere clienti',
    subtitle: 'Basta foto sfocate o volantini brutti. Ecco come creare un profilo che fa venire voglia di prenotare subito.',
    lastUpdated: '26 gennaio 2026',
    readTime: '7 minuti',
  },
  tldr: {
    short: 'I social sono il tuo catalogo vivente. Posta trasformazioni reali, usa i video per mostrare la lucentezza e mettici la faccia.',
    bullets: [
      'Il video vince sulla foto (i capelli si muovono!)',
      'Non postare solo prodotti, posta risultati',
      'Le Storie servono per vendere gli appuntamenti liberi',
      'Mostra il tuo team all\'opera',
    ],
  },
  quickQuestions: [
    'Posti video dei capelli in movimento?',
    'Si capisce chi lavora nel tuo salone?',
    'Usi le storie per riempire i buchi?',
    'Rispondi ai messaggi privati?',
  ],
  cta: {
    title: 'Vuoi una strategia social che funziona?',
    description: 'Ti aiuto a collegare Instagram al sito per trasformare i like in prenotazioni reali.',
    buttonText: 'Parliamo di Social',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei migliorare i social del mio salone.')}`,
  },
  content: `
## 1. Non vendi shampoo, vendi bellezza

L'errore classico: postare la foto del barattolo di shampoo sulla mensola.
Noioso.
Alla cliente non interessa lo shampoo, interessa come saranno i suoi capelli *dopo* lo shampoo.

**Regola:** Posta il risultato. Capelli lucidi, voluminosi, sani.
Lo shampoo mostralo nelle Storie mentre spieghi perché lo usi.

---

## 2. Il potere dei Reel (Video)

La foto si può ritoccare. Il video no.
Un video di capelli che si muovono al rallentatore, che riflettono la luce, è ipnotico.

### Idee per Reel facili:
1.  **Schiocco di dita:** Lei "prima" (spettinata) → schiocco → Lei "dopo" (divina).
2.  **Il tocco:** Passa la mano tra i capelli appena fatti per mostrare la morbidezza.
3.  **Il lavaggio:** Video ASMR del massaggio alla testa (rilassante!).
4.  **Dietro le quinte:** Tu che mescoli il colore come un piccolo chimico.

---

## 3. Instagram è il tuo catalogo

Quando una cliente nuova arriva sul tuo profilo, deve capire subito il tuo stile.
- Sei specializzato in Biondi? Il profilo deve essere biondissimo.
- Fai colori pazzi (rosa, blu)? Mostrali.
- Sei elegante e classico? Foto pulite e minimal.

Non fare "un po' di tutto". Specializzati visivamente.

[Scopri come fare foto belle →](${BASE_PATH}/foto-prima-dopo)

---

## 4. Le Storie per vendere ORA

I post rimangono per sempre. Le Storie durano 24 ore e servono per l'urgenza.

### Cosa mettere nelle Storie:
- **"Si è liberato un posto!"**: *"Domani alle 11:30 si è liberato un posto per Colore. Chi lo vuole?"* (Funziona sempre).
- **Sondaggi**: *"Meglio questo biondo freddo o questo miele?"* (Coinvolgi).
- **Clienti felici**: Riposta i selfie delle clienti.

---

## 5. Mettici la faccia (Team)

Le persone comprano da persone.
Vogliono sapere chi toccherà i loro capelli.
Fai vedere il tuo staff.
- *"Ecco Marco, il nostro specialista del taglio corto."*
- *"Sara sta seguendo un corso sulle nuove tendenze."*

Crea fiducia prima ancora che entrino in negozio.

[Come valorizzare il team →](${BASE_PATH}/il-tuo-team)

---

## 6. Bio e Link

La "Bio" (la scritta sotto la foto profilo) deve dire chi sei e dove sei.
✅ *"Parrucchieri Milano - Specialisti del Biondo - Via Roma 5"*

**Il Link:**
Non mettere il sito generico. Metti un link che porta a:
1.  Prenota Online
2.  Listino Prezzi
3.  WhatsApp

Usa Linktree o una pagina del tuo sito fatta apposta.

[Crea un sito che converte →](${BASE_PATH}/struttura-sito)

---

## 7. Hashtag Locali

Non usare #hair #love #beautiful. Li usano in tutto il mondo.
Usa hashtag che intercettano chi è nella tua città:
- #parrucchieremilano
- #biondomilano
- #balayagemilano
- #quartiereisola

Così ti trovano le persone che possono venire davvero da te.

[Tutto sulla SEO Locale →](${BASE_PATH}/seo-locale)
  `,
  faqs: [
    {
      question: 'Ogni quanto devo postare?',
      answer: 'L\'ideale è 3-4 volte a settimana nel Feed e TUTTI i giorni nelle Storie. Le storie mantengono vivo l\'interesse.',
    },
    {
      question: 'Devo fare balletti su TikTok?',
      answer: 'No! Se ti piace falli, ma per vendere basta mostrare capelli belli. I tutorial ("come farsi le onde a casa") funzionano benissimo senza ballare.',
    },
    {
      question: 'Meglio foto mie o di modelle?',
      answer: 'Assolutamente le tue. Le foto stock di donne perfette prese da internet sanno di finto. Meglio una foto imperfetta di un lavoro vero.',
    },
  ],
  relatedLinks: [
    { anchor: 'Foto Prima e Dopo', url: `${BASE_PATH}/foto-prima-dopo` },
    { anchor: 'Il tuo Team', url: `${BASE_PATH}/il-tuo-team` },
    { anchor: 'Sito web Salone', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Non vendi shampoo, vendi bellezza',
    'Il potere dei Reel (Video)',
    'Instagram è il tuo catalogo',
    'Le Storie per vendere ORA',
    'Mettici la faccia (Team)',
    'Bio e Link',
    'Hashtag Locali',
  ],
};
