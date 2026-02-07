/**
 * MASSIVE COPY VARIATIONS SYSTEM (ANTI-DOORWAY)
 * 
 * Questo sistema genera 24 varianti uniche per ogni sezione principale della pagina.
 * Utilizza un hash deterministico basato su Città + Nicchia per selezionare la variante.
 * 
 * STRUTTURA VARIANTI:
 * - Gruppo A (0-5): Focus Risultato (Guadagno immediato)
 * - Gruppo B (6-11): Focus Problema (Pain Point Agitation)
 * - Gruppo C (12-17): Focus Autorità (Social Proof & Trust)
 * - Gruppo D (18-23): Focus Tecnico/Velocità (Performance)
 */

import { NicheConfig } from '@/data/niches-config';
import { Location } from '@/data/locations';

// =============================================================================
// INTERFACES
// =============================================================================

export interface CopyVariant {
  id: string;
  group: 'result' | 'problem' | 'authority' | 'technical';
  title: string;
  subtitle: string;
  cta: string;
}

// =============================================================================
// HERO VARIATIONS (24 Templates)
// =============================================================================

const HERO_TEMPLATES: CopyVariant[] = [
  // --- GRUPPO A: FOCUS RISULTATO ---
  {
    id: 'hero-result-1',
    group: 'result',
    title: 'Trasforma il tuo {{SINGULAR_NICHE}} a {{CITY}} in una Macchina da Clienti',
    subtitle: 'Sito web professionale progettato per convertire i visitatori in prenotazioni reali. Risultati misurabili in 30 giorni.',
    cta: 'Voglio Più Clienti'
  },
  {
    id: 'hero-result-2',
    group: 'result',
    title: 'Aumenta il Fatturato del Tuo {{SINGULAR_NICHE}} a {{CITY}}',
    subtitle: 'Non serve solo "essere online". Serve un sito che vende. Strategia digitale completa per dominare il mercato locale.',
    cta: 'Calcola il Tuo ROI'
  },
  {
    id: 'hero-result-3',
    group: 'result',
    title: 'Il Tuo {{SINGULAR_NICHE}} a {{CITY}}: Più Visibilità, Più Prenotazioni',
    subtitle: 'Smetti di perdere clienti a favore della concorrenza. Un sito web ottimizzato che lavora per te 24/7.',
    cta: 'Inizia a Crescere'
  },
  {
    id: 'hero-result-4',
    group: 'result',
    title: 'Domina il Mercato {{NICHE_CATEGORY}} a {{CITY}}',
    subtitle: 'Posizionati come leader del settore. Sito web, SEO locale e reputazione online in un unico pacchetto.',
    cta: 'Domina la Tua Zona'
  },
  {
    id: 'hero-result-5',
    group: 'result',
    title: 'Clienti Reali per il Tuo {{SINGULAR_NICHE}} a {{CITY}}',
    subtitle: 'Basta visite a vuoto. Portiamo persone interessate pronte ad acquistare i tuoi servizi oggi stesso.',
    cta: 'Ricevi Clienti Ora'
  },
  {
    id: 'hero-result-6',
    group: 'result',
    title: 'Sito Web per {{PLURAL_NICHE}} a {{CITY}} che Funziona Davvero',
    subtitle: 'Design moderno + strategia di vendita. La formula vincente per far decollare la tua attività locale.',
    cta: 'Scopri Come Funziona'
  },

  // --- GRUPPO B: FOCUS PROBLEMA ---
  {
    id: 'hero-problem-1',
    group: 'problem',
    title: 'Stanco di Perdere Clienti a {{CITY}}?',
    subtitle: 'Mentre tu rimandi, i tuoi competitor online ti stanno rubando fatturato. Riprenditi la tua quota di mercato.',
    cta: 'Smetti di Perdere Soldi'
  },
  {
    id: 'hero-problem-2',
    group: 'problem',
    title: 'Il Tuo Sito Attuale Sta Uccidendo il Tuo Business a {{CITY}}?',
    subtitle: 'Lento, vecchio, non ottimizzato. Se non piace a Google, non piace ai clienti. È ora di cambiare marcia.',
    cta: 'Analisi Gratuita Sito'
  },
  {
    id: 'hero-problem-3',
    group: 'problem',
    title: 'Perché i {{PLURAL_NICHE}} a {{CITY}} Falliscono Online?',
    subtitle: 'Siti vetrina inutili, zero SEO, nessuna strategia. Non fare lo stesso errore. Scegli una soluzione performante.',
    cta: 'Evita il Fallimento'
  },
  {
    id: 'hero-problem-4',
    group: 'problem',
    title: 'Basta Buttare Soldi in Pubblicità Inutile a {{CITY}}',
    subtitle: 'Senza un sito che converte, le ads sono benzina sul fuoco. Costruisci prima le fondamenta solide.',
    cta: 'Ottimizza il Budget'
  },
  {
    id: 'hero-problem-5',
    group: 'problem',
    title: 'I Tuoi Competitor a {{CITY}} Sono Già Online. E Tu?',
    subtitle: 'Ogni giorno che passi senza un sito professionale è un regalo alla concorrenza. Recupera il terreno perso.',
    cta: 'Supera i Competitor'
  },
  {
    id: 'hero-problem-6',
    group: 'problem',
    title: 'Nessuno Trova il Tuo {{SINGULAR_NICHE}} a {{CITY}}?',
    subtitle: 'Essere invisibili su Google equivale a non esistere. Ti porto in prima pagina per le ricerche che contano.',
    cta: 'Fatti Trovare Subito'
  },

  // --- GRUPPO C: FOCUS AUTORITÀ ---
  {
    id: 'hero-authority-1',
    group: 'authority',
    title: 'Il Partner Digitale dei Migliori {{PLURAL_NICHE}} a {{CITY}}',
    subtitle: 'Unisciti a 58+ attività locali che hanno già trasformato il loro business. Esperienza comprovata nel tuo settore.',
    cta: 'Vedi Casi Studio'
  },
  {
    id: 'hero-authority-2',
    group: 'authority',
    title: 'Eccellenza Digitale per {{PLURAL_NICHE}} a {{CITY}}',
    subtitle: 'Non un sito qualsiasi, ma un asset aziendale di valore. Qualità premium per chi non si accontenta.',
    cta: 'Scegli l\'Eccellenza'
  },
  {
    id: 'hero-authority-3',
    group: 'authority',
    title: 'Specialista Web per {{PLURAL_NICHE}} a {{CITY}}',
    subtitle: 'Conosco il tuo settore, i tuoi problemi e i tuoi clienti. Soluzioni verticali, non generaliste.',
    cta: 'Parla con un Esperto'
  },
  {
    id: 'hero-authority-4',
    group: 'authority',
    title: 'Web Design di Alto Livello a {{CITY}}',
    subtitle: 'Estetica raffinata e tecnologia all\'avanguardia. Il tuo brand merita di essere rappresentato al meglio.',
    cta: 'Eleva il Tuo Brand'
  },
  {
    id: 'hero-authority-5',
    group: 'authority',
    title: 'Garanzia di Risultato per {{PLURAL_NICHE}} a {{CITY}}',
    subtitle: 'Soddisfatto o rimborsato. Lavoro solo con chi vuole crescere davvero. Posti limitati ogni mese.',
    cta: 'Verifica Disponibilità'
  },
  {
    id: 'hero-authority-6',
    group: 'authority',
    title: 'La Scelta N.1 dei {{PLURAL_NICHE}} a {{CITY}}',
    subtitle: 'Recensioni a 5 stelle, assistenza 24/7, formazione inclusa. Scopri perché tutti parlano di noi.',
    cta: 'Leggi le Recensioni'
  },

  // --- GRUPPO D: FOCUS TECNICO ---
  {
    id: 'hero-technical-1',
    group: 'technical',
    title: 'Sito Web Ultra-Veloce per {{PLURAL_NICHE}} a {{CITY}}',
    subtitle: 'Caricamento in <1 secondo. Google ama i siti veloci, i clienti ancora di più. Tecnologia Next.js avanzata.',
    cta: 'Testa la Velocità'
  },
  {
    id: 'hero-technical-2',
    group: 'technical',
    title: 'Mobile First per il Tuo {{SINGULAR_NICHE}} a {{CITY}}',
    subtitle: 'L\'80% dei tuoi clienti naviga da smartphone. Ti garantisco un\'esperienza mobile perfetta e intuitiva.',
    cta: 'Vedi Demo Mobile'
  },
  {
    id: 'hero-technical-3',
    group: 'technical',
    title: 'SEO Nativa per {{PLURAL_NICHE}} a {{CITY}}',
    subtitle: 'Non un plugin aggiunto dopo, ma ottimizzazione nel codice. Struttura dati schema.org per dominare la SERP.',
    cta: 'Analisi SEO Gratis'
  },
  {
    id: 'hero-technical-4',
    group: 'technical',
    title: 'Sicurezza Totale per il Tuo Business a {{CITY}}',
    subtitle: 'Protezione dati, backup automatici, conformità GDPR. Dormi sonni tranquilli mentre il sito lavora.',
    cta: 'Metti al Sicuro i Dati'
  },
  {
    id: 'hero-technical-5',
    group: 'technical',
    title: 'Integrazioni Avanzate per {{PLURAL_NICHE}} a {{CITY}}',
    subtitle: 'Prenotazioni, CRM, Newsletter, Pagamenti. Tutto connesso, tutto automatico. Risparmia 10h/settimana.',
    cta: 'Automatizza Tutto'
  },
  {
    id: 'hero-technical-6',
    group: 'technical',
    title: 'Sito Web Scalabile a {{CITY}}',
    subtitle: 'Parti piccolo, cresci senza limiti. Un\'infrastruttura che supporta la tua espansione futura senza rifare tutto.',
    cta: 'Costruisci il Futuro'
  }
];

// =============================================================================
// INTRO VARIATIONS (24 Templates)
// =============================================================================

const INTRO_TEMPLATES: string[] = [
  // GRUPPO A: RISULTATO
  "A {{CITY}}, la competizione nel settore {{NICHE_CATEGORY}} è spietata. Per emergere, non basta più il passaparola. Ti serve un sistema digitale che porti clienti paganti ogni giorno.",
  "Immagina di avere la fila fuori dal tuo {{SINGULAR_NICHE}} a {{CITY}}. Con il giusto posizionamento web, questo non è un sogno, è una strategia replicabile.",
  "Il fatturato del tuo {{SINGULAR_NICHE}} a {{CITY}} dipende dalla tua visibilità. Se non ti trovano sul telefono, vanno dal concorrente. Cambiamo questa storia oggi.",
  "Hai investito tanto nel tuo {{SINGULAR_NICHE}} a {{CITY}}. Ora fallo fruttare. Un sito web professionale è il moltiplicatore dei tuoi sforzi offline.",
  "Vuoi essere il riferimento per {{PLURAL_NICHE}} a {{CITY}}? La leadership si costruisce online. Ti do gli strumenti per superare chi è sul mercato da anni.",
  "I numeri non mentono: le attività a {{CITY}} con un sito ottimizzato crescono del 40% in più. Non lasciare questi soldi sul tavolo.",

  // GRUPPO B: PROBLEMA
  "Quante volte un cliente a {{CITY}} ha cercato i tuoi servizi e ha trovato... il nulla? Ogni ricerca fallita è un cliente perso per sempre.",
  "Il vecchio sito del tuo {{SINGULAR_NICHE}} ti sta costando caro. Lento, brutto, invisibile a {{CITY}}. È come avere la vetrina oscurata in centro.",
  "Ti affidi ancora solo ai social o a portali che mangiano i margini? A {{CITY}} è ora di reclamare la tua indipendenza digitale e i tuoi profitti.",
  "La gestione del tuo {{SINGULAR_NICHE}} a {{CITY}} è un caos? Telefonate, messaggi, appuntamenti persi. Un sito web ben fatto mette ordine e automatizza.",
  "I tuoi competitor a {{CITY}} stanno ridendo. Mentre tu esiti, loro prendono le prime posizioni su Google. Fermali subito con una presenza web dominante.",
  "Sei stanco di vedere attività mediocri a {{CITY}} avere più successo di te solo perché sono 'bravi su internet'? È ora di prenderti la rivincita.",

  // GRUPPO C: AUTORITÀ
  "Da anni aiuto {{PLURAL_NICHE}} a {{CITY}} a digitalizzarsi con successo. Non sono un'agenzia che sparisce, sono il tuo partner locale di fiducia.",
  "La qualità del tuo lavoro a {{CITY}} merita una vetrina all'altezza. Costruisco siti che trasmettono immediatamente il valore e la professionalità del tuo {{SINGULAR_NICHE}}.",
  "Non affidare il tuo business a cugini o piattaforme fai-da-te. A {{CITY}} serve professionalità. Scegli chi ha un track record di 58+ progetti di successo.",
  "Specializzato in {{PLURAL_NICHE}}, conosco le dinamiche di {{CITY}} meglio di chiunque altro. Niente soluzioni copia-incolla, solo strategie su misura.",
  "La reputazione è tutto a {{CITY}}. Il tuo sito web sarà il tuo biglietto da visita premium, capace di instaurare fiducia prima ancora del primo contatto.",
  "Unisciti all'élite dei {{PLURAL_NICHE}} di {{CITY}}. Offro un servizio esclusivo, limitato a pochi progetti al mese per garantire la massima cura.",

  // GRUPPO D: TECNICO
  "La velocità è la nuova valuta a {{CITY}}. I miei siti caricano in millisecondi, garantendo che nessun cliente abbandoni la pagina per frustrazione.",
  "Sviluppo in Next.js, la tecnologia usata da Netflix e TikTok. Porto a {{CITY}} lo standard tecnologico della Silicon Valley per il tuo {{SINGULAR_NICHE}}.",
  "Google Core Vitals, SEO tecnica, Schema Markup. Paroloni? Per te significano solo una cosa: essere primi a {{CITY}} quando qualcuno cerca i tuoi servizi.",
  "Sicurezza blindata per il tuo business a {{CITY}}. Proteggo i dati dei tuoi clienti come se fossero i miei. Conformità GDPR nativa e zero rischi.",
  "Integrazione totale: il tuo sito parlerà con il tuo gestionale, il tuo calendario e i tuoi social. Un ecosistema digitale perfetto per {{CITY}}.",
  "Design responsive che spacca su ogni dispositivo. Che il cliente di {{CITY}} usi iPhone, Android o tablet, il tuo sito sarà sempre perfetto."
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

function replacePlaceholders(text: string, city: string, niche: NicheConfig): string {
  return text
    .replace(/{{CITY}}/g, city)
    .replace(/{{SINGULAR_NICHE}}/g, niche.singularName)
    .replace(/{{PLURAL_NICHE}}/g, niche.pluralName)
    .replace(/{{NICHE_CATEGORY}}/g, niche.category);
}

function generateHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

export function getCopyVariants(city: Location, niche: NicheConfig) {
  // Hash unico per questa combinazione città + nicchia
  // Usiamo salt diversi per ogni sezione per evitare pattern ripetitivi
  const heroHash = generateHash(`${city.slug}-${niche.slug}-hero-v2`);
  const introHash = generateHash(`${city.slug}-${niche.slug}-intro-v2`);
  
  // Seleziona template
  const rawHero = HERO_TEMPLATES[heroHash % HERO_TEMPLATES.length];
  const rawIntro = INTRO_TEMPLATES[introHash % INTRO_TEMPLATES.length];
  
  return {
    hero: {
      ...rawHero,
      title: replacePlaceholders(rawHero.title, city.name, niche),
      subtitle: replacePlaceholders(rawHero.subtitle, city.name, niche),
    },
    intro: replacePlaceholders(rawIntro, city.name, niche)
  };
}
