/**
 * AI CONTENT GENERATION SYSTEM
 * 
 * Template system for generating unique, AI-powered content
 * for long-tail programmatic SEO pages at scale.
 * 
 * Usage:
 * 1. Define content templates with placeholders
 * 2. Use generateAiContent() to fill with AI or deterministic variations
 * 3. Content is cached and reused for similar pages
 */

import { Location } from '@/data/locations';
import { ServiceConfig } from '@/data/services-config';
import { NicheConfig } from '@/data/niches-config';

// =============================================================================
// CONTENT TEMPLATES
// =============================================================================

export interface AiContentTemplate {
  id: string;
  type: 'hero' | 'intro' | 'benefits' | 'features' | 'testimonial' | 'cta';
  template: string;
  variables: string[];
  variations: number; // Number of AI variations to generate
}

// Hero section templates with deep personalization
export const HERO_TEMPLATES: AiContentTemplate[] = [
  {
    id: 'hero-software-1',
    type: 'hero',
    template: `{{SERVICE_NAME}} a {{CITY_NAME}}: {{UNIQUE_VALUE_PROP}}

{{CITY_DEMONYM}} stanno digitalizzando le loro aziende. Non restare indietro.

{{SERVICE_DESCRIPTION}}`,
    variables: ['SERVICE_NAME', 'CITY_NAME', 'UNIQUE_VALUE_PROP', 'CITY_DEMONYM', 'SERVICE_DESCRIPTION'],
    variations: 5,
  },
  {
    id: 'hero-software-2',
    type: 'hero',
    template: `Hai un processo che ti fa perdere tempo a {{CITY_NAME}}?

{{SERVICE_NAME}} su misura che ti fa risparmiare {{HOURS_SAVED}} ore a settimana.

{{SOCIAL_PROOF}}`,
    variables: ['SERVICE_NAME', 'CITY_NAME', 'HOURS_SAVED', 'SOCIAL_PROOF'],
    variations: 5,
  },
  {
    id: 'hero-app-1',
    type: 'hero',
    template: `Dall'idea all'App Store: {{SERVICE_NAME}} a {{CITY_NAME}}

{{UNIQUE_VALUE_PROP}}

Già {{PROJECTS_COUNT}} {{CITY_DEMONYM}} hanno scelto le mie app.`,
    variables: ['SERVICE_NAME', 'CITY_NAME', 'UNIQUE_VALUE_PROP', 'PROJECTS_COUNT', 'CITY_DEMONYM'],
    variations: 5,
  },
];

// Introduction paragraphs with local context
export const INTRO_TEMPLATES: AiContentTemplate[] = [
  {
    id: 'intro-local-1',
    type: 'intro',
    template: `{{CITY_NAME}} è {{CITY_DESCRIPTION}}. Le aziende locali stanno investendo in digitalizzazione per restare competitive.

{{SERVICE_NAME}} è la soluzione ideale per {{TARGET_BUSINESS}} che vogliono {{BENEFIT}}.

{{DIFFERENTIATOR}}`,
    variables: ['CITY_NAME', 'CITY_DESCRIPTION', 'SERVICE_NAME', 'TARGET_BUSINESS', 'BENEFIT', 'DIFFERENTIATOR'],
    variations: 8,
  },
  {
    id: 'intro-problem-1',
    type: 'intro',
    template: `Quanto tempo perdi ogni settimana su {{PAIN_POINT}}? A {{CITY_NAME}} ho aiutato {{CLIENTS_COUNT}} aziende a eliminare questo problema.

{{SERVICE_NAME}} {{SOLUTION_DESCRIPTION}}.

{{RESULT_EXAMPLE}}`,
    variables: ['PAIN_POINT', 'CITY_NAME', 'CLIENTS_COUNT', 'SERVICE_NAME', 'SOLUTION_DESCRIPTION', 'RESULT_EXAMPLE'],
    variations: 8,
  },
];

// Benefits section
export const BENEFITS_TEMPLATES: AiContentTemplate[] = [
  {
    id: 'benefits-list-1',
    type: 'benefits',
    template: `### Perché scegliere {{SERVICE_NAME}} a {{CITY_NAME}}?

1. **{{BENEFIT_1}}**: {{BENEFIT_1_DESC}}
2. **{{BENEFIT_2}}**: {{BENEFIT_2_DESC}}
3. **{{BENEFIT_3}}**: {{BENEFIT_3_DESC}}
4. **{{BENEFIT_4}}**: {{BENEFIT_4_DESC}}

{{GUARANTEE}}`,
    variables: ['SERVICE_NAME', 'CITY_NAME', 'BENEFIT_1', 'BENEFIT_1_DESC', 'BENEFIT_2', 'BENEFIT_2_DESC', 'BENEFIT_3', 'BENEFIT_3_DESC', 'BENEFIT_4', 'BENEFIT_4_DESC', 'GUARANTEE'],
    variations: 6,
  },
];

// Features section
export const FEATURES_TEMPLATES: AiContentTemplate[] = [
  {
    id: 'features-grid-1',
    type: 'features',
    template: `### Caratteristiche incluse

- ✅ {{FEATURE_1}}
- ✅ {{FEATURE_2}}
- ✅ {{FEATURE_3}}
- ✅ {{FEATURE_4}}
- ✅ {{FEATURE_5}}
- ✅ {{FEATURE_6}}

{{DELIVERY_NOTE}}`,
    variables: ['FEATURE_1', 'FEATURE_2', 'FEATURE_3', 'FEATURE_4', 'FEATURE_5', 'FEATURE_6', 'DELIVERY_NOTE'],
    variations: 4,
  },
];

// Testimonial/social proof
export const TESTIMONIAL_TEMPLATES: AiContentTemplate[] = [
  {
    id: 'testimonial-local-1',
    type: 'testimonial',
    template: `> "{{TESTIMONIAL_TEXT}}"
> 
> — {{CLIENT_NAME}}, {{CLIENT_BUSINESS}}, {{CLIENT_CITY}}

{{CONTEXT}}`,
    variables: ['TESTIMONIAL_TEXT', 'CLIENT_NAME', 'CLIENT_BUSINESS', 'CLIENT_CITY', 'CONTEXT'],
    variations: 10,
  },
];

// CTA section
export const CTA_TEMPLATES: AiContentTemplate[] = [
  {
    id: 'cta-urgency-1',
    type: 'cta',
    template: `### Pronto a {{ACTION}}?

{{OFFER_DESCRIPTION}}

**{{URGENCY_TEXT}}**

[{{CTA_BUTTON}}]({{CTA_LINK}})`,
    variables: ['ACTION', 'OFFER_DESCRIPTION', 'URGENCY_TEXT', 'CTA_BUTTON', 'CTA_LINK'],
    variations: 5,
  },
];

// =============================================================================
// VARIABLE RESOLVERS
// =============================================================================

export interface ContentVariables {
  [key: string]: string | number;
}

// Service-specific value propositions
const SERVICE_VALUE_PROPS: Record<string, string[]> = {
  'sviluppo-software': [
    'Elimina Excel e automatizza i processi manuali',
    'Software proprietario senza canoni mensili',
    'Gestionali su misura che crescono con te',
    'Digitalizzazione completa in 30 giorni',
    'Risparmia 10+ ore di lavoro a settimana',
  ],
  'sviluppo-app-mobile': [
    'Trasforma la tua idea in un\'app pubblicata',
    'App iOS e Android con una codebase sola',
    'Dalla progettazione allo Store in 60 giorni',
    'App performanti, belle e scalabili',
    'Nessun canone, il codice è tuo per sempre',
  ],
  'siti-web': [
    'Sito online in 14 giorni che porta clienti',
    'Web design che converte visitatori in contatti',
    'SEO inclusa per farti trovare su Google',
    'Più veloce delle agenzie, meno costoso',
    'Garanzia soddisfatti o rimborsati',
  ],
};

// City descriptions for local context
const CITY_DESCRIPTION_TEMPLATES: Record<string, string[]> = {
  'industrial': [
    'un polo industriale dinamico con forte tradizione manifatturiera',
    'al centro di un distretto produttivo in continua evoluzione',
    'una realtà industriale solida con aziende innovative',
  ],
  'tourist': [
    'una meta turistica apprezzata con economia diversificata',
    'ricca di storia e tradizioni, con un\'economia basata sul turismo',
    'un gioiello culturale che attrae visitatori da tutto il mondo',
  ],
  'agricultural': [
    'nel cuore di una terra fertile con forte tradizione agricola',
    'circondata da campagne che producono eccellenze alimentari',
    'terra di agricoltura di qualità e prodotti tipici',
  ],
  'commercial': [
    'un centro commerciale importante per la zona',
    'con un tessuto economico basato sul commercio e i servizi',
    'polo commerciale che attira clientela da tutta la provincia',
  ],
};

// =============================================================================
// CONTENT GENERATION FUNCTIONS
// =============================================================================

/**
 * Generate deterministic hash for consistent content selection
 */
function generateContentHash(input: string): number {
  return input.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0) | 0;
  }, 0);
}

/**
 * Get city archetype based on population and region
 */
function getCityArchetype(location: Location): 'industrial' | 'tourist' | 'agricultural' | 'commercial' {
  if (location.famousFor?.includes('industria') || location.famousFor?.includes('distretto')) {
    return 'industrial';
  }
  if (location.landmarks && location.landmarks.length > 2) {
    return 'tourist';
  }
  if (location.famousFor?.includes('agricol') || location.famousFor?.includes('food')) {
    return 'agricultural';
  }
  if (location.population > 50000) {
    return 'commercial';
  }
  return 'agricultural';
}

/**
 * Resolve template variables with deterministic values
 */
export function resolveVariables(
  template: AiContentTemplate,
  location: Location,
  service: ServiceConfig,
  niche?: NicheConfig
): ContentVariables {
  const hash = generateContentHash(`${location.slug}-${service.slug}-${template.id}`);
  const absHash = Math.abs(hash);
  const archetype = getCityArchetype(location);
  
  const variables: ContentVariables = {
    // Base variables
    SERVICE_NAME: service.name,
    CITY_NAME: location.name,
    CITY_DEMONYM: location.demonym || `${location.name}esi`,
    
    // Service-specific
    UNIQUE_VALUE_PROP: SERVICE_VALUE_PROPS[service.slug]?.[absHash % SERVICE_VALUE_PROPS[service.slug].length] || 'Soluzione professionale su misura',
    SERVICE_DESCRIPTION: service.longDescription,
    HOURS_SAVED: 10 + (absHash % 20), // 10-30 hours
    PROJECTS_COUNT: 58 + (absHash % 50), // 58-108
    CLIENTS_COUNT: 20 + (absHash % 80), // 20-100
    
    // City context
    CITY_DESCRIPTION: CITY_DESCRIPTION_TEMPLATES[archetype]?.[absHash % CITY_DESCRIPTION_TEMPLATES[archetype].length] || 'una realtà locale in crescita',
    TARGET_BUSINESS: niche ? niche.pluralName : 'aziende e professionisti',
    BENEFIT: 'aumentare efficienza e produttività',
    DIFFERENTIATOR: 'Soluzione proprietaria senza canoni mensili',
    
    // Problem-solution
    PAIN_POINT: service.slug === 'sviluppo-software' ? 'Excel e carta' : 'processi manuali',
    SOLUTION_DESCRIPTION: service.shortDescription,
    RESULT_EXAMPLE: 'Risparmio medio del 40% sul tempo amministrativo',
    
    // Benefits
    BENEFIT_1: 'Zero canoni mensili',
    BENEFIT_1_DESC: 'Paghi una volta sola, il software è tuo per sempre',
    BENEFIT_2: 'Assistenza diretta',
    BENEFIT_2_DESC: 'Parli sempre con me, non con call center',
    BENEFIT_3: 'Consegna garantita',
    BENEFIT_3_DESC: 'Timeline chiare, ritardi rimborsati',
    BENEFIT_4: 'Formazione inclusa',
    BENEFIT_4_DESC: 'Tu e il tuo team operativi da subito',
    GUARANTEE: 'Garanzia soddisfatti o rimborsati entro 30 giorni',
    
    // Features
    FEATURE_1: 'Analisi preliminare gratuita',
    FEATURE_2: 'Progettazione UX/UI',
    FEATURE_3: 'Sviluppo codice proprietario',
    FEATURE_4: 'Testing e debug completo',
    FEATURE_5: 'Deploy e configurazione',
    FEATURE_6: 'Formazione e documentazione',
    DELIVERY_NOTE: `Consegna in ${service.slug === 'sviluppo-app-mobile' ? '60' : '30'} giorni lavorativi`,
    
    // Testimonial
    TESTIMONIAL_TEXT: 'Servizio professionale e veloce. Manuel ha capito subito le nostre esigenze e ha consegnato un software che ha rivoluzionato il nostro lavoro.',
    CLIENT_NAME: 'Marco Rossi',
    CLIENT_BUSINESS: service.slug === 'sviluppo-software' ? 'Azienda di Produzione' : 'Startup Tech',
    CLIENT_CITY: location.name,
    CONTEXT: `Uno dei ${58 + (absHash % 50)} progetti completati a ${location.name}`,
    
    // CTA
    ACTION: service.slug === 'sviluppo-software' ? 'digitalizzare la tua azienda' : 'realizzare la tua app',
    OFFER_DESCRIPTION: 'Preventivo gratuito in 24h, nessun impegno',
    URGENCY_TEXT: `Solo ${3 + (absHash % 3)} slot disponibili questo mese`,
    CTA_BUTTON: 'Richiedi Preventivo Gratuito',
    CTA_LINK: '/offerta-preventivo',
  };
  
  // Add niche-specific variables if provided
  if (niche) {
    variables.NICHE_NAME = niche.name;
    variables.NICHE_SINGULAR = niche.singularName;
    variables.NICHE_PLURAL = niche.pluralName;
  }
  
  return variables;
}

/**
 * Fill template with variables
 */
export function fillTemplate(template: string, variables: ContentVariables): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
    const value = variables[variable];
    return value !== undefined ? String(value) : match;
  });
}

/**
 * Generate complete content for a page
 */
export function generatePageContent(
  location: Location,
  service: ServiceConfig,
  niche?: NicheConfig
): {
  hero: string;
  intro: string;
  benefits: string;
  features: string;
  testimonial: string;
  cta: string;
} {
  const heroTemplate = HERO_TEMPLATES[Math.abs(generateContentHash(location.slug)) % HERO_TEMPLATES.length];
  const introTemplate = INTRO_TEMPLATES[Math.abs(generateContentHash(location.slug + 'intro')) % INTRO_TEMPLATES.length];
  const benefitsTemplate = BENEFITS_TEMPLATES[0];
  const featuresTemplate = FEATURES_TEMPLATES[0];
  const testimonialTemplate = TESTIMONIAL_TEMPLATES[0];
  const ctaTemplate = CTA_TEMPLATES[0];
  
  const variables = resolveVariables(heroTemplate, location, service, niche);
  
  return {
    hero: fillTemplate(heroTemplate.template, variables),
    intro: fillTemplate(introTemplate.template, variables),
    benefits: fillTemplate(benefitsTemplate.template, variables),
    features: fillTemplate(featuresTemplate.template, variables),
    testimonial: fillTemplate(testimonialTemplate.template, variables),
    cta: fillTemplate(ctaTemplate.template, variables),
  };
}

// =============================================================================
// AI INTEGRATION HELPERS
// =============================================================================

/**
 * Generate OpenAI prompt for content variation
 */
export function generateOpenAiPrompt(
  template: AiContentTemplate,
  variables: ContentVariables
): string {
  const filledTemplate = fillTemplate(template.template, variables);
  
  return `Sei un copywriter esperto specializzato in SEO per aziende B2B in Italia.

Genera una variazione del seguente contenuto mantenendo lo stesso significato ma con:
- Diversa struttura delle frasi
- Sinonimi appropriati
- Tono professionale ma vicino al cliente
- Riferimenti locali credibili
- Lunghezza simile

CONTENUTO ORIGINALE:
${filledTemplate}

VARIAZIONE (in italiano, stesso formato markdown):`;
}

/**
 * Cache key for AI-generated content
 */
export function getAiCacheKey(
  locationSlug: string,
  serviceSlug: string,
  templateId: string,
  variationIndex: number
): string {
  return `ai-content:${locationSlug}:${serviceSlug}:${templateId}:${variationIndex}`;
}

// Export all templates
export const ALL_AI_TEMPLATES = [
  ...HERO_TEMPLATES,
  ...INTRO_TEMPLATES,
  ...BENEFITS_TEMPLATES,
  ...FEATURES_TEMPLATES,
  ...TESTIMONIAL_TEMPLATES,
  ...CTA_TEMPLATES,
];
