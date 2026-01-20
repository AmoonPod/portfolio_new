import { MarketArchetype } from '@/data/archetypes';
import { TokenReplacements, replaceTokens, createReplacements, buildCanonicalUrl, buildKeywords } from '@/lib/link-graph/tokens';
import { pickVariant, spintaxParse, getPopulationTier, getZoneContext } from '@/lib/content/spintax';

interface ProblemSolution {
  problems: string[];
  solutions: string[];
}

export interface PageContentTemplates {
  hero: {
    h1: string;
    sub: string;
    ctaText: string;
    trustSignal: string;
  };
  seo: {
    title: string;
    description: string;
    h1: string;
    keywords: string[];
  };
  diagnostica: {
    badge: string;
    title: string;
    problems: ProblemSolution;
  };
  goodInvestment: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  faq: Array<{ q: string; a: string }>;
}

const HERO_TEMPLATES: Record<MarketArchetype, { h1: string; sub: string; ctaText: string; trustSignal: string }> = {
  MountainSmall: {
    h1: "A {{CityName}} il tuo sito deve funzionare anche con poca connessione",
    sub: "In zona la copertura non è sempre ottimale. Io creo siti leggeri e veloci che funzionano ovunque, così puoi farti trovare dai clienti anche con segnale debole.",
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Siti ottimizzati per zone con connessione difficile',
  },
  HillMedium: {
    h1: "A {{CityName}} il tuo sito deve raccontare la qualità del tuo lavoro",
    sub: "Zona ricca di artigiani e agriturismi, qui la credibilità è tutto. Ti creo un sito che valorizza la tradizione e ti fa trovare dai clienti giusti.",
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Conosco le esigenze delle attività del territorio collinare',
  },
  IndustrialHub: {
    h1: "A {{CityName}} la tua azienda merita un sito all'altezza del tuo lavoro",
    sub: "Il distretto {{Sector}} è competitivo. Ti creo un sito professionale che ti fa distinguere e porta richieste concrete.",
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Esperienza con le aziende del settore {{Sector}}',
  },
  FoodValley: {
    h1: "A {{CityName}} il tuo sito deve raccontare la tradizione e la qualità",
    sub: "Terra di eccellenze enogastronomiche, qui l'autenticità conta. Ti creo un sito che valorizza la tua storia e i tuoi prodotti.",
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Conosco il territorio food e le sue eccellenze',
  },
  ProvinceCapital: {
    h1: "A {{CityName}} la competizione è alta: il tuo sito deve distinguerti",
    sub: "{{ServiceName}} a {{CityName}}: ti creo un sito chiaro e ottimizzato per farti trovare e farti scegliere.",
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Conosco il mercato e le esigenze delle attività di {{Province}}',
  },
  SuburbanGrowth: {
    h1: "A {{CityName}} il tuo sito deve farti trovare dai clienti giusti",
    sub: "Zona in crescita ricca di opportunità. Ti creo un sito veloce, chiaro e ottimizzato per portarti richieste.",
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Conosco le esigenze delle attività del territorio',
  },
  PlainsSmall: {
    h1: "A {{CityName}} il tuo sito deve portarti clienti, non solo visitatori",
    sub: "Ti creo un sito locale efficace: veloce, chiaro e pensato per farti trovare da chi cerca i tuoi servizi nella zona.",
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Specializzato in servizi per attività locali',
  },
  MetroBologna: {
    h1: "A {{CityName}} il tuo sito deve distinguerti nella zona bolognese",
    sub: "Area dinamica e competitiva. Ti creo un sito professionale che ti fa trovare e ti differenzia dalla concorrenza.",
    ctaText: 'Parliamo del tuo sito',
    trustSignal: 'Esperienza con attività dell\'area metropolitana bolognese',
  },
};

const DIAGNOSTICA_TEMPLATES: Record<MarketArchetype, { badge: string; title: string; problems: string[]; solutions: string[] }> = {
  MountainSmall: {
    badge: 'Diagnostica Attuale',
    title: 'Il tuo sito funziona anche con poca connessione?',
    problems: [
      'Il sito è pesante e non si carica con la rete del telefono',
      'Non compari su Google quando cercano i tuoi servizi a {{CityName}}',
      'Da smartphone è difficile da navigare: i clienti abbandonano',
      'Hai un sito che non riflette la qualità del tuo lavoro',
    ],
    solutions: [
      'Sito super leggero: caricamento rapido anche con connessione debole',
      'Ottimizzazione SEO locale per farti trovare a {{CityName}}',
      'Mobile-first: perfetto su smartphone anche con segnale instabile',
      'Design professionale che trasmette fiducia',
    ],
  },
  HillMedium: {
    badge: 'Diagnostica Attuale',
    title: 'Il tuo sito ti sta facendo perdere clienti?',
    problems: [
      'Non compari su Google per ricerche legate ai tuoi servizi',
      'Il sito è lento o non funziona bene da telefono',
      'Non riesci a raccontare la qualità artigianale del tuo lavoro',
      'I clienti vanno da competitor con una presenza online migliore',
    ],
    solutions: [
      'Ottimizzazione SEO locale per la zona collinare',
      'Sito rapido e perfetto su smartphone',
      'Gallery e contenuti che valorizzano la qualità',
      'Design che comunica artigianalità e tradizione',
    ],
  },
  IndustrialHub: {
    badge: 'Diagnostica Attuale',
    title: 'Il tuo sito ti sta facendo vincere o perdere clienti?',
    problems: [
      'Non compari su Google per ricerche B2B nel settore {{Sector}}',
      'Il sito è lento e i buyer abbandonano',
      'Non comunichi efficacemente la qualità dei tuoi prodotti',
      'I competitor hanno siti più professionali e convincenti',
    ],
    solutions: [
      'SEO settoriale per intercettare buyer e rivenditori',
      'Sito veloce e professionale per clienti esigenti',
      'Catalogo prodotti e contenuti tecnici',
      'Design che trasmette affidabilità aziendale',
    ],
  },
  FoodValley: {
    badge: 'Diagnostica Attuale',
    title: 'Il tuo sito racconta la qualità dei tuoi prodotti?',
    problems: [
      'Non compari su Google per ricerche food a {{CityName}}',
      'Il sito non valorizza la tradizione e la qualità',
      'Non riesci a mostrare i tuoi prodotti in modo efficace',
      'I clienti vanno da competitor con un racconto più autentico',
    ],
    solutions: [
      'SEO food per intercettare appassionati e buyer',
      'Gallery e storytelling che valorizzano i prodotti',
      'Sito che racconta storia e tradizione',
      'Design che comunica autenticità e qualità',
    ],
  },
  ProvinceCapital: {
    badge: 'Diagnostica Attuale',
    title: 'Il tuo sito ti sta facendo vincere o perdere clienti?',
    problems: [
      'Non compari su Google per ricerche a {{CityName}}',
      'Il sito è lento e i visitatori abbandonano',
      'Da telefono è difficile da navigare o i contatti sono nascosti',
      'La concorrenza ha siti più moderni e convincenti',
    ],
    solutions: [
      'Ottimizzazione SEO locale per {{CityName}}',
      'Sito super veloce e perfetto su smartphone',
      'Contatti sempre visibili: WhatsApp, chiamata, form',
      'Design professionale che trasmette affidabilità',
    ],
  },
  SuburbanGrowth: {
    badge: 'Diagnostica Attuale',
    title: 'Il tuo sito ti sta facendo perdere occasioni?',
    problems: [
      'Non compari su Google quando cercano i tuoi servizi in zona',
      'Il sito è lento o non funziona bene da telefono',
      'Le informazioni principali sono difficili da trovare',
      'I clienti vanno da competitor con una presenza online migliore',
    ],
    solutions: [
      'Ottimizzazione SEO locale per la zona',
      'Sito rapido e perfetto su smartphone',
      'Contatti sempre visibili: WhatsApp, chiamata, form',
      'Design professionale che trasmette fiducia',
    ],
  },
  PlainsSmall: {
    badge: 'Diagnostica Attuale',
    title: 'Il tuo sito ti sta facendo perdere clienti locali?',
    problems: [
      'Non compari su Google quando cercano i tuoi servizi a {{CityName}}',
      'Il sito è lento o non funziona bene da telefono',
      'Non hai abbastanza richieste dal sito',
      'I clienti vanno da competitor con una presenza online migliore',
    ],
    solutions: [
      'Ottimizzazione SEO locale per la zona',
      'Sito rapido e perfetto su smartphone',
      'Contatti sempre visibili e CTA efficaci',
      'Design locale che trasmette fiducia',
    ],
  },
  MetroBologna: {
    badge: 'Diagnostica Attuale',
    title: 'Il tuo sito ti sta facendo perdere terreno?',
    problems: [
      'Non compari su Google nell\'area bolognese',
      'Il sito è lento o non funziona bene da telefono',
      'La competizione è alta e i clienti hanno molte scelte',
      'Non ti distingui dalla massa di competitor',
    ],
    solutions: [
      'SEO locale per l\'area metropolitana',
      'Sito veloce e mobile-first',
      'Differenziazione e branding efficace',
      'Design professionale che ti fa notare',
    ],
  },
};

const GOOD_INVESTMENT_TEMPLATES: Record<MarketArchetype, { title: string; titleHighlight: string; subtitle: string }> = {
  MountainSmall: {
    title: 'Un sito che',
    titleHighlight: 'funziona davvero',
    subtitle: 'Non serve un sito complicato. Serve uno che funzioni anche quando la connessione non è al massimo. Un investimento che porta risultati misurabili.',
  },
  HillMedium: {
    title: 'Un sito che',
    titleHighlight: 'racconta la tua storia',
    subtitle: 'In zona la tradizione è tutto. Un sito ben fatto racconta chi sei, da dove vieni e perché i clienti dovrebbero scegliere te.',
  },
  IndustrialHub: {
    title: 'Un sito che',
    titleHighlight: 'porta risultati concreti',
    subtitle: 'Non costruisco template. Creo siti strategici pensati per generare valore concreto per la tua azienda nel settore {{Sector}}.',
  },
  FoodValley: {
    title: 'Un sito che',
    titleHighlight: 'racconta la tua tradizione',
    subtitle: 'In zona la qualità e la tradizione sono tutto. Un sito ben fatto racconta chi sei, da dove vieni e perché i clienti dovrebbero scegliere te.',
  },
  ProvinceCapital: {
    title: 'Un sito che',
    titleHighlight: 'porta risultati misurabili',
    subtitle: 'Non costruisco template. Creo siti strategici pensati per generare valore concreto: più visibilità, più fiducia, più richieste.',
  },
  SuburbanGrowth: {
    title: 'Un sito che',
    titleHighlight: 'lavora per te',
    subtitle: 'Non costruisco template. Creo siti strategici pensati per portarti risultati misurabili nella tua zona.',
  },
  PlainsSmall: {
    title: 'Un sito non è una spesa:',
    titleHighlight: 'è un investimento che lavora',
    subtitle: 'Il passaparola resta importante, ma oggi la prima "stretta di mano" spesso è una ricerca su Google. Un sito ti fa trovare e porta clienti.',
  },
  MetroBologna: {
    title: 'Un sito che',
    titleHighlight: 'ti fa distinguere',
    subtitle: 'Nell\'area bolognese la competizione è alta. Creo siti strategici che ti fanno notare e portano richieste qualificate.',
  },
};

export function generateHero(archetype: MarketArchetype, cityName: string, replacements: TokenReplacements) {
  const template = HERO_TEMPLATES[archetype];
  return {
    h1: replaceTokens(template.h1, replacements),
    sub: replaceTokens(template.sub, replacements),
    ctaText: template.ctaText,
    ctaHref: '#contatti',
    trustSignal: replaceTokens(template.trustSignal, replacements),
  };
}

export function generateDiagnostica(archetype: MarketArchetype, cityName: string, replacements: TokenReplacements) {
  const template = DIAGNOSTICA_TEMPLATES[archetype];
  return {
    badge: template.badge,
    title: replaceTokens(template.title, replacements),
    problems: template.problems.map(p => replaceTokens(p, replacements)),
    solutions: template.solutions.map(s => replaceTokens(s, replacements)),
  };
}

export function generateGoodInvestment(archetype: MarketArchetype, replacements: TokenReplacements) {
  const template = GOOD_INVESTMENT_TEMPLATES[archetype];
  return {
    title: replaceTokens(template.title, replacements),
    titleHighlight: replaceTokens(template.titleHighlight, replacements),
    subtitle: replaceTokens(template.subtitle, replacements),
  };
}

export function generateSEO(
  archetype: MarketArchetype,
  cityName: string,
  province: string,
  serviceName: string,
  serviceSlug: string,
  citySlug: string,
  replacements: TokenReplacements
) {
  const titleVariants = [
    `Realizzazione {{ServiceName}} a {{CityName}} | Manuel De Ceglie`,
    `{{ServiceName}} a {{CityName}}: fatti per farti trovare`,
    `Creazione {{ServiceName}} professionali a {{CityName}}`,
  ];

  const descriptionVariants = [
    `{{ServiceName}} professionali a {{CityName}}: veloci, ottimizzati per Google e costruiti per portarti clienti reali.`,
    `Creo {{ServiceName}} a {{CityName}} per attività locali: sito veloce, chiaro e orientato ai risultati.`,
    `{{ServiceName}} a {{CityName}} per professionisti e attività che vogliono farsi trovare online.`,
  ];

  const h1Variants = [
    `{{ServiceName}} a {{CityName}} per attività che vogliono crescere`,
    `Il tuo sito web a {{CityName}} deve portarti clienti`,
    `{{ServiceName}} professionali a {{CityName}}`,
  ];

  const title = pickVariant(citySlug, titleVariants);
  const description = pickVariant(citySlug, descriptionVariants);
  const h1 = pickVariant(citySlug, h1Variants);

  return {
    title: replaceTokens(title, replacements),
    description: replaceTokens(description, replacements),
    canonical: buildCanonicalUrl(citySlug, serviceSlug),
    keywords: buildKeywords(cityName, province, serviceName),
    h1: replaceTokens(h1, replacements),
  };
}
