import type { PlaybookContent } from '../types';

export const consegnaFoto: PlaybookContent = {
  slug: 'consegna-foto',
  niche: 'fotografi',
  nicheName: 'Fotografi e Videomaker',
  hero: {
    title: 'Consegna Foto: L\'Ultima Impressione Conta',
    subtitle: 'Perché WeTransfer non basta più. Come consegnare gallerie che emozionano e fanno upsell.',
    lastUpdated: '2025-01-27',
    readTime: '5 min lettura',
  },
  tldr: {
    short: 'La consegna è il momento della verità. Usare sistemi professionali di gallerie online aumenta il valore percepito, facilita la condivisione e ti permette di vendere stampe extra.',
    bullets: [
      'Evita WeTransfer o Google Drive per la consegna finale',
      'Usa piattaforme dedicate (Pic-Time, Pixieset, ShootProof)',
      'Abilita lo store per vendere stampe automaticamente',
      'Cura l\'esperienza mobile (dove il 90% dei clienti guarderà le foto)',
    ],
  },
  quickQuestions: [
    'I tuoi clienti faticano a scaricare le foto sul telefono?',
    'Usi ancora chiavette USB che finiscono in un cassetto?',
    'Stai perdendo soldi non vendendo stampe?',
  ],
  cta: {
    title: 'Integra le gallerie nel tuo sito',
    description: 'Posso collegare il tuo sistema di gallerie al tuo dominio principale (es. clienti.tuosito.it) per un brand coerente al 100%.',
    buttonText: 'Parliamo di branding',
    buttonUrl: 'https://wa.me/393505764958',
  },
  content: `
## Basta Zip e WeTransfer

Mandare un link WeTransfer scaduto dopo 7 giorni o una cartella Google Drive anonima è funzionale, ma "cheap".
Hai lavorato duramente per scattare ed editare foto meravigliose: non "buttarle" in una cartella file.

## 1. Gallerie Online Professionali

Piattaforme come **Pic-Time, Pixieset, CloudSpot o ShootProof** offrono un'esperienza visiva superiore.
- Layout a griglia bellissimo (stile Pinterest).
- Cover image d'impatto.
- Musica di sottofondo (emozionale!).
- Esperienza mobile perfetta.

Il cliente riceve un link elegante, apre la galleria come se fosse una rivista digitale e rivive la storia.

## 2. Upselling Passivo (Stampe)

Il più grande vantaggio di queste piattaforme è lo **Store integrato**.
Il cliente guarda le foto e vede un bottone "Compra Stampa" o "Crea Album".
- Tu imposti il listino e il ricarico.
- Il cliente ordina.
- Il laboratorio stampa e spedisce direttamente al cliente.
- Tu incassi la differenza senza aver mosso un dito.

È una rendita passiva che molti fotografi ignorano.

## 3. Selezione e Download

Queste piattaforme gestiscono permessi avanzati:
- Puoi far scaricare gli originali (alta risoluzione) agli sposi.
- Puoi far scaricare solo i file "social size" (con watermark) agli invitati.
- Puoi creare liste di "Preferiti" per la selezione dell'album.

## 4. Branding Coerente

Non mandare il cliente su \`pixieset.com/mar-e-paolo\`.
Configura il **dominio personalizzato** (CNAME) per avere \`gallery.tuosito.it/mario-e-paola\`.
Mantiene il cliente nel tuo ecosistema e rafforza il tuo brand.

## 5. L'Esperienza Unboxing (se consegni fisico)

Se consegni anche un cofanetto fisico (USB o stampe fine-art):
- Cura il packaging. Scatola in legno, lino, velluto.
- Profuma la scatola.
- Inserisci un biglietto scritto a mano.
- **La USB sta morendo:** molti computer nuovi non hanno nemmeno la porta. Considerala un gadget, non il metodo principale. Il link cloud è la vera consegna.

## Conclusione

La consegna non è la fine del lavoro, è l'inizio del passaparola. Un cliente che piange di gioia guardando una galleria ben presentata sul suo telefono è un cliente che condividerà quel link con tutti i suoi amici (i tuoi futuri clienti).
  `,
  faqs: [
    {
      question: 'Quanto costano questi servizi?',
      answer: 'Hanno piani gratuiti (spazio limitato) e piani a pagamento dai 10€ ai 30€ al mese per spazio illimitato o quasi. Si ripagano vendendo 2 stampe.',
    },
    {
      question: 'Come funzionano i laboratori di stampa?',
      answer: 'Le piattaforme sono collegate a laboratori pro (spesso anche italiani o europei). Tu non devi gestire i file o la spedizione. È tutto automatico (Drop Shipping).',
    },
    {
      question: 'Devo consegnare i RAW?',
      answer: 'No. Mai. Sarebbe come se un ristorante ti servisse gli ingredienti crudi invece del piatto finito. Il tuo editing è metà del tuo stile. Consegna solo JPG in alta risoluzione.',
    },
  ],
  relatedLinks: [
    { anchor: 'Chiedi una recensione dopo la consegna', url: '/playbooks/fotografi/recensioni-google' },
    { anchor: 'Portfolio Online', url: '/playbooks/fotografi/portfolio-online' },
    { anchor: 'Prezzi e Pacchetti', url: '/playbooks/fotografi/listino-prezzi' },
  ],
  tocSections: [
    '1. Gallerie Online Professionali',
    '2. Upselling Passivo (Stampe)',
    '3. Selezione e Download',
    '4. Branding Coerente',
    '5. L\'Esperienza Unboxing (se consegni fisico)',
    'Conclusione',
  ],
};
