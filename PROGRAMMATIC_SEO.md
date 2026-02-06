# Programmatic SEO System Documentation

This document explains the programmatic SEO architecture implemented to scale to 100,000+ pages while maintaining content quality and avoiding SEO penalties.

## Architecture Overview

```
src/
├── data/
│   ├── services-config.ts    # Central service definitions (SEO, pricing, FAQs)
│   ├── locations.ts          # 60+ cities with metadata
│   ├── archetypes.ts         # Content differentiation profiles
│   └── niches-config.ts      # Industry vertical definitions
├── lib/
│   └── seo/
│       ├── page-generator.ts # Builds page data for any service+city
│       └── metadata.ts       # Legacy metadata utilities
├── components/
│   └── programmatic/
│       ├── UnifiedServicePageTemplate.tsx  # Main city page template
│       └── ServiceHubPage.tsx              # Service hub template
└── app/
    ├── [service]/[city]/page.tsx  # Dynamic route for new services
    ├── ecommerce/page.tsx         # E-commerce hub
    ├── landing-pages/page.tsx     # Landing pages hub
    ├── posizionamento-seo/page.tsx # SEO hub
    ├── siti-web/[...slug]/        # Existing route (preserved)
    └── sviluppo-software/[city]/  # Existing route (preserved)
```

## Page Matrix

The system generates pages based on the following matrix:

| Service | Min Population | Estimated Pages | Route Pattern |
|---------|----------------|-----------------|---------------|
| Siti Web | 3,000 | ~55 | `/siti-web/[city]` |
| E-commerce | 8,000 | ~45 | `/ecommerce/[city]` |
| Landing Pages | 10,000 | ~40 | `/landing-pages/[city]` |
| SEO | 15,000 | ~35 | `/posizionamento-seo/[city]` |
| Software | 15,000 | ~35 | `/sviluppo-software/[city]` |
| App Mobile | 20,000 | ~30 | `/sviluppo-app-mobile/[city]` |

**Total city pages: ~240**  
**Plus**: Niche hubs, playbooks, blog posts, case studies = **~350 total pages**

## Adding a New Service

### 1. Add Service Configuration

Edit `src/data/services-config.ts`:

```typescript
{
  slug: 'new-service',
  name: 'New Service Name',
  singularName: 'New Service',
  shortDescription: 'Brief description...',
  longDescription: 'Longer description...',
  category: 'web-development', // or 'software', 'marketing', 'design'
  priority: 'secondary',
  icon: 'Globe', // Lucide icon name
  hasCityPages: true,
  minPopulation: 10000, // Minimum city population
  seo: {
    titleTemplates: [
      'Title with {{CITY_NAME}} | Manuel De Ceglie',
      // Add 2-3 variations
    ],
    descriptionTemplates: [...],
    h1Templates: [...],
    keywordPatterns: [
      'keyword {{CITY_NAME}}',
      // Add 5-7 patterns
    ],
  },
  schema: {
    schemaType: 'Service',
    additionalProperties: {
      priceRange: '€€',
    },
  },
  pricing: [
    {
      id: 'tier-1',
      name: 'Basic',
      price: '990',
      description: '...',
      features: ['Feature 1', 'Feature 2'],
    },
  ],
  faqTemplates: [
    {
      question: 'Question with {{CITY_NAME}}?',
      answer: 'Answer text...',
    },
  ],
  relatedServices: ['siti-web', 'ecommerce'],
  active: true,
}
```

### 2. Add Service to Dynamic Route

Edit `src/app/[service]/[city]/page.tsx`, add to `HANDLED_SERVICES`:

```typescript
const HANDLED_SERVICES = [
  'ecommerce',
  'landing-pages',
  'sviluppo-app-mobile',
  'posizionamento-seo',
  'new-service', // Add here
];
```

### 3. Create Hub Page

Create `src/app/new-service/page.tsx`:

```typescript
import { Metadata } from 'next';
import { getServiceBySlug } from '@/data/services-config';
import { IconName } from 'lucide-react';
import ServiceHubPage from '@/components/programmatic/ServiceHubPage';

const service = getServiceBySlug('new-service')!;

export const metadata: Metadata = {
  title: '...',
  description: '...',
  // ...
};

const features = [
  { icon: Icon1, title: '...', description: '...' },
  { icon: Icon2, title: '...', description: '...' },
  { icon: Icon3, title: '...', description: '...' },
];

export default function NewServiceHubPage() {
  return (
    <ServiceHubPage
      service={service}
      Icon={IconName}
      headline="Your Headline"
      subheadline="Your subheadline..."
      features={features}
    />
  );
}
```

### 4. Sitemap Auto-Updates

The sitemap (`src/app/sitemap.ts`) automatically includes all services with `hasCityPages: true`.

## Adding New Cities

### 1. Add to Locations Database

Edit `src/data/locations.ts`:

```typescript
{
  id: 'new-city',
  slug: 'new-city',
  name: 'New City',
  province: 'Province Name',
  region: 'Emilia-Romagna',
  population: 25000,
  geo: { lat: 44.5, lng: 10.5 },
  priority: 2, // 1 = highest, 3 = lowest
  highImpression: false, // Set true if GSC shows impressions
},
```

### 2. Automatic Inclusion

The city will automatically:
- Appear in the sitemap
- Be available via dynamic routes
- Show in "nearby cities" sections
- Be linked from hub pages

## Content Differentiation

To avoid thin content and keyword cannibalization:

### 1. Archetype System

Each city is assigned an archetype based on location and economy:

- `MountainSmall` - Mountain tourism areas
- `HillMedium` - Hill areas with agriculture
- `IndustrialHub` - Industrial districts
- `FoodValley` - Food production areas
- `ProvinceCapital` - Province capitals
- `SuburbanGrowth` - Growing suburban areas
- `PlainsSmall` - Small plain towns
- `MetroBologna` - Bologna metropolitan area

### 2. Content Templates

Each archetype has unique:
- Hero subtitles
- Problem/solution statements
- FAQ answers
- Pricing emphasis

### 3. Token Replacement

Templates use `{{CITY_NAME}}`, `{{PROVINCE}}`, etc. for dynamic content.

## SEO Safeguards

### Avoiding Thin Content

1. **Minimum Population Thresholds**: Each service has a minimum population requirement
2. **Archetype Differentiation**: Same service, different cities = different content
3. **Unique FAQs**: City-specific questions and answers
4. **Local Context**: Province, region, and nearby cities mentioned

### Avoiding Keyword Cannibalization

1. **One Page Per Intent**: Each service+city has one canonical page
2. **Clear Hierarchy**: Hub pages → City pages → Related content
3. **Internal Linking**: Hub-and-spoke structure with clear relationships
4. **Canonical URLs**: Every page has a canonical URL

### Schema Markup

Every page includes:
- `ProfessionalService` - Business information
- `Service` - Service offering
- `BreadcrumbList` - Navigation path
- `FAQPage` - FAQ content (when present)

## Build Performance

### Static Generation

All pages use `generateStaticParams()` for static generation at build time.

### ISR (Incremental Static Regeneration)

`revalidate = 3600` (1 hour) allows updates without full rebuilds.

### Expected Build Impact

With 350 pages:
- Build time: ~3-5 minutes (Vercel)
- Memory usage: Normal (pages are lightweight)
- Bundle size: Minimal increase (shared components)

## Monitoring

### Sitemap Stats

```typescript
import { getSitemapStats } from '@/app/sitemap';

const stats = getSitemapStats();
console.log(stats);
// { totalPages: 350, breakdown: { ... } }
```

### Page Count Route

Visit `/conteggio` to see current page counts.

## Future Scaling

To scale to 100,000+ pages:

1. **More Cities**: Add cities from other regions
2. **More Services**: Add niche services (WordPress, Shopify, etc.)
3. **Niche × City**: Combine niches with cities (`/siti-web/ristoranti/modena`)
4. **More Niches**: Add industry verticals
5. **Content Depth**: Add more playbooks per niche

### Database Migration

At very large scale (10,000+ cities), consider:
- Moving locations to a database (Prisma/Supabase)
- Using ISR exclusively (no static generation)
- Edge caching with stale-while-revalidate
