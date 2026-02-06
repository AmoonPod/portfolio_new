/**
 * UNIFIED SERVICE + CITY DYNAMIC ROUTE
 * 
 * This single route handles all programmatic SEO pages for:
 * - /ecommerce/[city]
 * - /landing-pages/[city]
 * - /sviluppo-app-mobile/[city]
 * - /posizionamento-seo/[city]
 * 
 * The existing routes (/siti-web and /sviluppo-software) are preserved
 * for backwards compatibility and SEO continuity.
 * 
 * Adding a new service:
 * 1. Add it to services-config.ts
 * 2. Pages are automatically generated (no code changes needed here)
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getServicesWithCityPages 
} from '@/data/services-config';
import { getLocationBySlug, LOCATIONS } from '@/data/locations';
import { buildServicePageData, generateStaticParamsForService } from '@/lib/seo/page-generator';
import UnifiedServicePageTemplate from '@/components/programmatic/UnifiedServicePageTemplate';

// =============================================================================
// ROUTE CONFIGURATION
// =============================================================================

// Services handled by this route (exclude those with existing routes)
const HANDLED_SERVICES = ['ecommerce', 'landing-pages', 'sviluppo-app-mobile', 'posizionamento-seo'];

interface PageProps {
  params: Promise<{ service: string; city: string }>;
}

export const dynamicParams = true;
export const revalidate = 3600; // 1 hour ISR

// =============================================================================
// STATIC PARAMS GENERATION
// =============================================================================

export async function generateStaticParams() {
  const allParams: Array<{ service: string; city: string }> = [];

  for (const serviceSlug of HANDLED_SERVICES) {
    const service = getServiceBySlug(serviceSlug);
    if (!service || !service.hasCityPages) continue;

    const cityParams = generateStaticParamsForService(serviceSlug);
    for (const { city } of cityParams) {
      allParams.push({ service: serviceSlug, city });
    }
  }

  return allParams;
}

// =============================================================================
// METADATA GENERATION
// =============================================================================

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;

  // Validate service is handled by this route
  if (!HANDLED_SERVICES.includes(serviceSlug)) {
    return { title: 'Pagina Non Trovata' };
  }

  const pageData = buildServicePageData(serviceSlug, citySlug);
  if (!pageData) {
    return {
      title: 'Pagina Non Trovata',
      description: 'La pagina richiesta non esiste.',
    };
  }

  return {
    title: pageData.seo.title,
    description: pageData.seo.description,
    keywords: pageData.seo.keywords,
    alternates: {
      canonical: pageData.seo.canonical,
    },
    openGraph: pageData.seo.openGraph,
    twitter: pageData.seo.twitter,
  };
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default async function ServiceCityPage({ params }: PageProps) {
  const { service: serviceSlug, city: citySlug } = await params;

  // Validate service is handled by this route
  if (!HANDLED_SERVICES.includes(serviceSlug)) {
    notFound();
  }

  const pageData = buildServicePageData(serviceSlug, citySlug);
  if (!pageData) {
    notFound();
  }

  const service = getServiceBySlug(serviceSlug)!;
  const location = getLocationBySlug(citySlug)!;
  const baseUrl = 'https://manueldeceglie.it';

  // Generate structured data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Professional Service (provider)
      {
        '@type': 'ProfessionalService',
        '@id': `${baseUrl}/#business`,
        name: 'Manuel De Ceglie',
        description: `${service.name} professionali in Emilia-Romagna`,
        url: baseUrl,
        image: `${baseUrl}/manuel-de-ceglie.jpg`,
        priceRange: service.schema.additionalProperties?.priceRange || '€€',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '58',
        },
        areaServed: [
          { '@type': 'Place', name: location.region },
          { '@type': 'Place', name: location.province },
          { '@type': 'Place', name: location.name },
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: location.geo.lat,
          longitude: location.geo.lng,
        },
      },
      // Service offering
      {
        '@type': 'Service',
        '@id': `${pageData.seo.canonical}#service`,
        name: `${service.name} a ${location.name}`,
        description: pageData.seo.description,
        provider: { '@id': `${baseUrl}/#business` },
        serviceType: service.name,
        areaServed: [
          { '@type': 'Place', name: location.name },
          { '@type': 'Place', name: location.province },
        ],
        ...(service.pricing.length > 0 && {
          offers: service.pricing.map(tier => ({
            '@type': 'Offer',
            name: tier.name,
            description: tier.description,
            price: tier.price.replace(/[^0-9]/g, ''),
            priceCurrency: 'EUR',
          })),
        }),
      },
      // Breadcrumb
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: service.name,
            item: `${baseUrl}/${service.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: location.name,
            item: pageData.seo.canonical,
          },
        ],
      },
      // FAQ
      ...(pageData.faq.length > 0 ? [{
        '@type': 'FAQPage',
        mainEntity: pageData.faq.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }] : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UnifiedServicePageTemplate 
        pageData={pageData} 
        service={service}
      />
    </>
  );
}
