/**
 * NICHE × CITY PAGE GENERATOR
 * 
 * Generates content for combined niche + city pages like:
 * - /siti-web/ristoranti/modena
 * - /ecommerce/abbigliamento/milano
 * 
 * These pages are highly targeted and combine:
 * - Service-specific content
 * - Niche-specific features/benefits
 * - City-specific local context
 */

import { ServiceConfig, getServiceBySlug } from '@/data/services-config';
import { NicheConfig, getNicheConfig } from '@/data/niches-config';
import { Location, getLocationBySlug } from '@/data/locations';
import { MarketArchetype, assignArchetype, getArchetype } from '@/data/archetypes';
import { getNicheLabelForPhrase, getNicheSingularContext } from '@/lib/niche-labels';
import { getCopyVariants } from '@/lib/content/copy-variations';

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface NicheCityPageData {
  // Identification
  slug: string;
  citySlug: string;
  nicheSlug: string;
  serviceSlug: string;
  
  // Location Data
  cityName: string;
  province: string;
  region: string;
  population: number;
  
  // Niche Data
  nicheName: string;
  nicheCategory: string;
  
  // Service Data
  serviceName: string;
  
  // Archetype Data
  archetype: MarketArchetype;
  
  // SEO Data
  seo: {
    title: string;
    description: string;
    canonical: string;
    keywords: string[];
    h1: string;
  };
  
  // Page Sections
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
  
  features: Array<{
    title: string;
    description: string;
  }>;
  
  benefits: Array<{
    title: string;
    description: string;
  }>;
  
  faq: Array<{
    question: string;
    answer: string;
  }>;
  
  pricing?: ServiceConfig['pricing'];
  
  // Internal Linking
  relatedNiches: Array<{
    slug: string;
    name: string;
  }>;
  
  nearbyCities: Array<{
    slug: string;
    name: string;
  }>;
}

// =============================================================================
// CONTENT TEMPLATES
// =============================================================================

const NICHE_CITY_HERO_TEMPLATES: Record<string, string> = {
  // Siti Web + Service Niches
  'siti-web:ristoranti': 'Siti web per ristoranti a {{CITY}}: menu digitale, prenotazioni online e SEO locale',
  'siti-web:saloni-bellezza': 'Siti web per parrucchieri a {{CITY}}: booking online e portfolio lavori',
  'siti-web:fotografi': 'Siti web per fotografi a {{CITY}}: portfolio professionale e lead generation',
  'siti-web:aziende-agricole': 'Siti web per aziende agricole a {{CITY}}: vendita diretta e storytelling',
  'siti-web:studi-legali': 'Siti web per avvocati a {{CITY}}: professionalità e acquisizione clienti',
  'siti-web:dentisti': 'Siti web per dentisti a {{CITY}}: prenotazioni online e guide trattamenti',
  'siti-web:palestre': 'Siti web per palestre a {{CITY}}: iscrizioni e gestione abbonamenti',
  'siti-web:architetti': 'Siti web per architetti a {{CITY}}: portfolio immersivo e case study',
  'siti-web:hotel': 'Siti web per hotel a {{CITY}}: booking engine e gestione camere',
  'siti-web:negozi': 'Siti web per negozi a {{CITY}}: vetrina digitale e catalogo prodotti',
  
  // E-commerce + Product Niches
  'ecommerce:abbigliamento': 'E-commerce abbigliamento a {{CITY}}: vendi moda online con un negozio professionale',
  'ecommerce:alimentari': 'E-commerce alimentari a {{CITY}}: prodotti tipici e consegna a domicilio',
  'ecommerce:arredamento': 'E-commerce arredamento a {{CITY}}: vendi mobili e complementi online',
  'ecommerce:cosmetici': 'E-commerce cosmetici a {{CITY}}: beauty shop online con catalogo completo',
  'ecommerce:elettronica': 'E-commerce elettronica a {{CITY}}: tech store con pagamenti sicuri',
  'ecommerce:gioielli': 'E-commerce gioielli a {{CITY}}: vetrina luxury per creazioni artigianali',
  'ecommerce:sport': 'E-commerce sportivo a {{CITY}}: attrezzature e abbigliamento tecnico',
  'ecommerce:libri': 'E-commerce di libri a {{CITY}}: libreria online con catalogo esteso',
  'ecommerce:negozi': 'E-commerce per negozi a {{CITY}}: espandi il tuo business oltre il locale fisico',
};

const NICHE_FEATURES: Record<string, Array<{ title: string; description: string }>> = {
  'ristoranti': [
    { title: 'Menu Digitale Interattivo', description: 'Menu sempre aggiornato con foto, allergeni e filtri per categoria' },
    { title: 'Prenotazioni Online', description: 'Sistema booking integrato con notifiche WhatsApp' },
    { title: 'SEO Locale Food', description: 'Ottimizzazione per "ristorante a [città]" e ricerche correlate' },
  ],
  'saloni-bellezza': [
    { title: 'Booking con Slot', description: 'Calendario online con gestione appuntamenti e promemoria SMS' },
    { title: 'Portfolio Prima/Dopo', description: 'Gallery per mostrare i tuoi lavori e conquistare nuovi clienti' },
    { title: 'Listino Chiaro', description: 'Prezzi trasparenti con durata e descrizione servizi' },
  ],
  'abbigliamento': [
    { title: 'Catalogo Fashion', description: 'Taglie, colori, varianti prodotto gestite facilmente' },
    { title: 'Wishlist e Carrello', description: 'UX ottimizzata per massimizzare le conversioni' },
    { title: 'Integrazioni Social', description: 'Instagram Shopping e Facebook Catalog collegati' },
  ],
  'alimentari': [
    { title: 'Tracciabilità Prodotti', description: 'Schede con origine, ingredienti e certificazioni' },
    { title: 'Gestione Scadenze', description: 'Inventario automatico con alert su prodotti freschi' },
    { title: 'Spedizioni Refrigerate', description: 'Integrazione corrieri specializzati per food' },
  ],
  // Add more as needed...
};

// =============================================================================
// MAIN PAGE DATA BUILDER
// =============================================================================

export function buildNicheCityPageData(
  serviceSlug: string,
  nicheSlug: string,
  citySlug: string
): NicheCityPageData | null {
  const service = getServiceBySlug(serviceSlug);
  const niche = getNicheConfig(nicheSlug);
  const location = getLocationBySlug(citySlug);

  if (!service || !niche || !location) {
    return null;
  }

  // Check if niche applies to this service
  if (niche.serviceType !== serviceSlug && niche.serviceType !== 'both') {
    return null;
  }

  // Check population threshold
  if (location.population < niche.minPopulation) {
    return null;
  }

  const archetype = assignArchetype(location);
  const archetypeData = getArchetype(archetype);
  const baseUrl = 'https://manueldeceglie.it';

  // Generate content using Anti-Doorway System (24 variations)
  const copyVariants = getCopyVariants(location, niche);
  const label = getNicheLabelForPhrase(niche);
  
  const title = `${copyVariants.hero.title} | Manuel De Ceglie`;
  const h1 = copyVariants.hero.title;
  const description = copyVariants.intro; // Use the AI generated intro which is specific and varied
  
  const keywords = [
    `${service.slug} ${nicheSlug} ${location.name.toLowerCase()}`,
    `${niche.singularName.toLowerCase()} ${location.name.toLowerCase()}`,
    `${service.name.toLowerCase()} per ${label} ${location.name.toLowerCase()}`,
  ];

  const canonical = `${baseUrl}/${serviceSlug}/${nicheSlug}/${citySlug}`;

  // Get niche-specific features
  const features = NICHE_FEATURES[nicheSlug] || service.pricing[0]?.features.slice(0, 3).map(f => ({
    title: f.split(':')[0] || f,
    description: f.split(':')[1] || 'Feature inclusa nel pacchetto base',
  })) || [];

  // Generate benefits
  const benefits = [
    {
      title: `Specializzato in ${niche.name}`,
      description: `Non sono un'agenzia generalista. Conosco le sfide specifiche di chi gestisce un ${getNicheSingularContext(niche)} e come risolverle.`,
    },
    {
      title: 'Visibilità Locale Mirata',
      description: location.demonym 
        ? `Fatti trovare dai clienti ${location.demonym} esattamente quando cercano i tuoi servizi.`
        : `Ottimizzazione SEO per intercettare la domanda locale a ${location.name} e provincia.`,
    },
    {
      title: 'Zero Commissioni Eterne',
      description: 'Il sito è tuo al 100%. Nessun canone mensile obbligatorio, a differenza delle piattaforme in abbonamento.',
    },
  ];

  // Generate FAQ
  const faq = [
    {
      question: `Quanto costa un ${service.singularName.toLowerCase()} per ${label} a ${location.name}?`,
      answer: `I prezzi partono da €${service.pricing[0]?.price} per soluzioni base. Il costo finale dipende dalle funzionalità richieste. Offro sempre un preventivo personalizzato gratuito.`,
    },
    {
      question: `Hai esperienza con ${label}?`,
      answer: `Sì, ho realizzato diversi progetti per ${label} in ${location.province} e regioni limitrofe. Conosco le dinamiche del settore e le esigenze specifiche.`,
    },
    {
      question: `Il ${service.singularName.toLowerCase()} sarà ottimizzato per ${location.name}?`,
      answer: `Assolutamente. Ogni progetto include ottimizzazione SEO locale per farti trovare da clienti nella tua zona.`,
    },
  ];

  // Get related niches (same service, different niches)
  const relatedNicheSlugs = Object.keys(NICHE_CITY_HERO_TEMPLATES)
    .filter(key => key.startsWith(`${serviceSlug}:`) && !key.includes(nicheSlug))
    .map(key => key.split(':')[1])
    .slice(0, 3);

  const relatedNiches = relatedNicheSlugs
    .map(slug => getNicheConfig(slug))
    .filter((n): n is NicheConfig => n !== undefined)
    .map(n => ({
      slug: n.slug,
      name: n.name,
    }));

  // Get nearby cities with same niche
  const nearbyCities: Array<{ slug: string; name: string }> = []; // Simplified for now, can expand later

  return {
    slug: `${serviceSlug}-${nicheSlug}-${citySlug}`,
    citySlug,
    nicheSlug,
    serviceSlug,
    cityName: location.name,
    province: location.province,
    region: location.region,
    population: location.population,
    nicheName: niche.name,
    nicheCategory: niche.category,
    serviceName: service.name,
    archetype,
    seo: {
      title,
      description,
      canonical,
      keywords,
      h1,
    },
    hero: {
      badge: `${service.name} • ${niche.name}`,
      title: h1,
      subtitle: copyVariants.hero.subtitle,
      ctaText: copyVariants.hero.cta,
      ctaHref: '#contatti',
    },
    features,
    benefits,
    faq,
    pricing: service.pricing,
    relatedNiches,
    nearbyCities,
  };
}

// =============================================================================
// BATCH GENERATION UTILITIES
// =============================================================================

import { LOCATIONS } from '@/data/locations';
import { getNichesByServiceType } from '@/data/niches-config';

/**
 * Generate all valid niche × city combinations for a service
 */
export function generateAllNicheCityPagesForService(serviceSlug: 'siti-web' | 'ecommerce'): NicheCityPageData[] {
  const pages: NicheCityPageData[] = [];
  const niches = getNichesByServiceType(serviceSlug);

  for (const niche of niches) {
    for (const location of LOCATIONS) {
      if (location.population >= niche.minPopulation) {
        const pageData = buildNicheCityPageData(serviceSlug, niche.slug, location.slug);
        if (pageData) {
          pages.push(pageData);
        }
      }
    }
  }

  return pages;
}

/**
 * Get count of niche × city pages per service
 */
export function getNicheCityPageCount(): {
  services: Record<string, number>;
  total: number;
} {
  const services: Record<string, number> = {};
  let total = 0;

  const sitiWebPages = generateAllNicheCityPagesForService('siti-web');
  const ecommercePages = generateAllNicheCityPagesForService('ecommerce');

  services['siti-web'] = sitiWebPages.length;
  services['ecommerce'] = ecommercePages.length;
  total = sitiWebPages.length + ecommercePages.length;

  return { services, total };
}
