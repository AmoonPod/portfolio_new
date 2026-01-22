import { NicheConfig, getNicheConfig, NICHE_SLUGS } from '@/data/niches-config';
import { getNicheContent } from '@/data/niches-content';
import { pickVariant } from '@/lib/content/spintax';

interface HubPageContent {
  h1: string;
  sub: string;
  ctaText: string;
  trustSignal?: string;
}

const HUB_HERO_TEMPLATES: Record<string, { h1: string; sub: string; ctaText: string; trustSignal: string }> = {
  ristoranti: {
    h1: 'Sito Web per Ristoranti e Pizzerie che Porta Prenotazioni',
    sub: 'Menu digitale, prenotazioni online e visibilità su Google. Trasforma il tuo sito in una macchina da clienti.',
    ctaText: 'Aumenta le Prenotazioni',
    trustSignal: 'Specializzato in siti per ristoranti e locali food in tutta Italia',
  },
  'saloni-bellezza': {
    h1: 'Sito Web per Saloni di Bellezza che Prenota da Solo',
    sub: 'Booking online 24/7, listino chiaro e portfolio lavori. Meno telefonate, più appuntamenti.',
    ctaText: 'Attiva il Booking Online',
    trustSignal: 'Soluzioni digitali per parrucchieri ed estetiste in Italia',
  },
  fotografi: {
    h1: 'Portfolio per Fotografi che Attrae Clienti',
    sub: 'Galleria immersiva, video showreel e sistema di prenotazione shooting. Il tuo talento merita una vetrina.',
    ctaText: 'Vedi il Portfolio Demo',
    trustSignal: 'Specializzato in portfolio per fotografi e videomaker',
  },
  'aziende-agricole': {
    h1: 'Sito Web per Aziende Agricole e Agriturismi',
    sub: 'E-commerce per vendita diretta, prenotazioni visite e storytelling del territorio. Dalla terra al cliente.',
    ctaText: 'Racconta la Tua Azienda',
    trustSignal: 'Progetti web per agricoltori, cantine e agriturismi in Emilia-Romagna e oltre',
  },
};

export function generateHubHero(nicheSlug: string): HubPageContent {
  const template = HUB_HERO_TEMPLATES[nicheSlug];
  
  if (!template) {
    return {
      h1: `Sito Web Professionale per ${nicheSlug.replace(/-/g, ' ')}`,
      sub: 'Un sito che ti fa trovare, ti fa scegliere e ti fa crescere.',
      ctaText: 'Contattami',
      trustSignal: 'Specializzato in siti per attività locali',
    };
  }

  return template;
}

export function generateHubMetadata(niche: NicheConfig) {
  const titleVariants = [
    `${niche.name} | Web Design e Siti Web Professionali`,
    `Siti web per ${niche.pluralName.toLowerCase()} | Manuel De Ceglie`,
    `${niche.name}: sito web professionale per il tuo business`,
  ];

  const descriptionVariants = [
    `Realizzo siti web professionali per ${niche.pluralName.toLowerCase()}. Design, SEO e marketing pensati per il tuo settore.`,
    `Sito web per ${niche.pluralName.toLowerCase()}? Mi occupo di web design specializzato per ${niche.pluralName.toLowerCase()} in tutta Italia.`,
    `${niche.name}: creazione siti web professionali con focus su risultati concreti per il tuo business.`,
  ];

  const title = pickVariant('hub-' + niche.slug, titleVariants);
  const description = pickVariant('hub-' + niche.slug, descriptionVariants);

  const keywords = [
    `web design ${niche.pluralName.toLowerCase()}`,
    `sitoweb ${niche.pluralName.toLowerCase()}`,
    `realizzazione siti ${niche.pluralName.toLowerCase()}`,
    `sviluppo siti ${niche.pluralName.toLowerCase()}`,
  ];

  return {
    title,
    description,
    keywords,
  };
}

export function isNicheSlug(slug: string): boolean {
  return NICHE_SLUGS.includes(slug as any);
}

export function getHubPageContent(nicheSlug: string): HubPageContent | null {
  if (!isNicheSlug(nicheSlug)) {
    return null;
  }
  return generateHubHero(nicheSlug);
}
