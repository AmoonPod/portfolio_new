import type { PlaybookContent } from '../types';

const BASE_PATH = '/siti-web/saloni-bellezza';
const WHATSAPP_NUMBER = '393505764958';

export const fotoPrimaDopo: PlaybookContent = {
  slug: 'foto-prima-dopo',
  niche: 'saloni-bellezza',
  nicheName: 'Saloni di Bellezza',
  hero: {
    title: 'Prima e Dopo: come vendere trasformazioni (non solo tagli)',
    subtitle: 'La foto del "dopo" è la tua pubblicità più potente. Ecco come farla perfetta per attrarre nuove clienti.',
    lastUpdated: '26 gennaio 2026',
    readTime: '5 minuti',
  },
  tldr: {
    short: 'Le clienti comprano il risultato. Una foto Prima/Dopo ben fatta vale più di mille parole e dimostra la tua competenza.',
    bullets: [
      'Crea un angolo foto nel salone (luce perfetta)',
      'Fai sempre la foto del "prima" (anche se è brutta)',
      'Il "dopo" deve essere WOW (capelli lucidi, posa giusta)',
      'Usa queste foto ovunque: sito, social, Google',
    ],
  },
  quickQuestions: [
    'Hai un Ring Light o una zona ben illuminata?',
    'Chiedi il permesso alle clienti per le foto?',
    'Pubblichi regolarmente le trasformazioni?',
    'Le tue foto hanno uno sfondo pulito?',
  ],
  cta: {
    title: 'Vuoi un sito che mostri i tuoi lavori?',
    description: 'Creo una galleria fotografica sul tuo sito che farà innamorare le nuove clienti.',
    buttonText: 'Voglio mostrare i miei lavori',
    buttonUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao Manuel, vorrei valorizzare le foto dei miei lavori sul sito.')}`,
  },
  content: `
## 1. Perché il "Prima e Dopo" è magico

Quando una donna cerca un nuovo parrucchiere, ha paura.
Paura di uscire con un colore sbagliato, paura di rovinarsi i capelli.

La foto **Prima e Dopo** cancella la paura.
Dimostra che:
1.  Sai gestire situazioni difficili (il "Prima").
2.  Sai creare risultati pazzeschi (il "Dopo").

È la prova tangibile della tua bravura.

---

## 2. L'angolo foto (investi 50€)

Non fare le foto alla poltrona, con lo specchio dietro, i cavi per terra e gli asciugamani sporchi.
Rovina tutto.

### Fai così
Trova un angolo del salone con una parete libera (bianca, grigia o col tuo logo).
Compra una **Ring Light** (luce ad anello) su Amazon. Costa 50€.
Quella è la tua "Zona Shooting".

Ogni volta che finisci un lavoro bello: *"Vieni un attimo qui che ti faccio una foto con la luce giusta?"*.
Le clienti si sentono modelle e le foto vengono professionali.

---

## 3. La regola del "Prima"

Spesso ci si dimentica di fare la foto al "Prima".
Ma senza il prima, il dopo vale la metà.

Il "Prima" serve a far dire: *"Mamma mia, com'era combinata... guarda che miracolo ha fatto!"*.
Falla appena la cliente arriva, anche veloce, anche col telefono.
Non deve essere bella, deve essere **vera**.

---

## 4. Come scattare il "Dopo"

Qui devi dare il massimo.
- **Luce:** La Ring Light deve illuminare il viso e i capelli frontalmente. Niente ombre strane.
- **Capelli:** Pettinali bene. Devono sembrare seta. Usa un lucidante se serve.
- **Posa:** Falla mettere di spalle o di tre quarti. Se è un taglio corto, profilo.
- **Sfondo:** Pulito. Niente scope, niente carrelli.

---

## 5. Dove mettere queste foto

Hai fatto la foto perfetta. E ora?
Non lasciarla morire nel telefono.

1.  **Instagram/Facebook:** Crea un post carosello (Scorri per vedere il Prima). Oppure un Reel di transizione.
2.  **Google My Business:** Fondamentale. Chi ti cerca su Google deve vedere subito cosa sai fare.
3.  **Sito Web:** Crea una pagina "Le Nostre Trasformazioni" o "I Nostri Biondi". È la pagina che converte di più.

[Scopri come usare Instagram al meglio →](${BASE_PATH}/social-media)

---

## 6. Privacy e Liberatoria

Ricordati sempre di chiedere il permesso.
*"Posso pubblicare la foto sui nostri social?"*
Il 99% dirà di sì (specialmente se sono venute bene).
Se dicono no, rispetta la scelta.
Non taggare mai la cliente se non te lo chiede lei (magari ha detto al marito che era in ufficio!).

---

## 7. La descrizione che vende

Sotto la foto, non scrivere solo "Biondo".
Scrivi la storia:
*"Giulia è arrivata con un vecchio colore spento e le punte rovinate. Abbiamo fatto un Balayage miele per illuminare il viso senza rovinare la base, e un trattamento ricostruttivo. Guardate che luce adesso!"*

Spiega il problema e la soluzione. Dimostra che sei un esperto.

[Vuoi aiuto con la descrizione dei servizi? →](${BASE_PATH}/listino-prezzi)
  `,
  faqs: [
    {
      question: 'Quale telefono serve?',
      answer: 'Qualsiasi smartphone moderno (iPhone 11+, Samsung S20+) va benissimo. La luce conta più del telefono.',
    },
    {
      question: 'Devo mostrare il viso?',
      answer: 'Non per forza. Le foto di spalle funzionano benissimo per mostrare i capelli lunghi. Per i tagli corti, il viso aiuta ma puoi coprirlo o tagliarlo se la cliente preferisce.',
    },
    {
      question: 'Quante foto devo pubblicare?',
      answer: 'Almeno una trasformazione a settimana. La costanza batte la quantità.',
    },
  ],
  relatedLinks: [
    { anchor: 'Instagram per parrucchieri', url: `${BASE_PATH}/social-media` },
    { anchor: 'Google My Business', url: `${BASE_PATH}/google-my-business` },
    { anchor: 'Sito web professionale', url: `${BASE_PATH}/struttura-sito` },
  ],
  tocSections: [
    'Perché il "Prima e Dopo" è magico',
    "L'angolo foto (investi 50€)",
    'La regola del "Prima"',
    'Come scattare il "Dopo"',
    'Dove mettere queste foto',
    'Privacy e Liberatoria',
    'La descrizione che vende',
  ],
};
