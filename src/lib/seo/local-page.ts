import { Location } from '@/data/locations';
import { MarketArchetype } from '@/data/archetypes';
import { LocalPageData } from '@/data/local-pages/types';
import { buildSeoMetadata } from './metadata';
import { buildLocalPageSchema, buildFAQSchema, buildBreadcrumbSchema, serializeJsonLd } from './schema';

export interface CompleteSeoData {
  metadata: ReturnType<typeof buildSeoMetadata>;
  jsonLd: {
    localBusiness: string;
    service: string;
    breadcrumb: string;
    faq?: string;
    all: string;
  };
  openGraph: {
    imageUrl: string;
  };
}

export function generateSeoForPage(
  location: Location,
  pageData: LocalPageData,
  archetype?: MarketArchetype
): CompleteSeoData {
  const metadata = buildSeoMetadata(location, 'siti-web', archetype);
  const baseUrl = 'https://manueldeceglie.it';
  const pageUrl = `${baseUrl}/siti-web/${location.slug}`;

  const faqs = pageData.faq.map(faq => ({
    question: faq.q,
    answer: faq.a,
  }));

  const schemas = buildLocalPageSchema(
    location,
    pageData.serviceName,
    pageData.seo.description,
    pageData.offers,
    faqs
  );

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Servizi', url: `${baseUrl}#services` },
    { name: pageData.serviceName, url: `${baseUrl}/siti-web` },
    { name: location.name, url: pageUrl },
  ]);

  const faqSchema = faqs.length > 0 ? buildFAQSchema(faqs) : undefined;

  return {
    metadata: {
      ...metadata,
      title: pageData.seo.title,
      description: pageData.seo.description,
      keywords: pageData.seo.keywords,
    },
    jsonLd: {
      localBusiness: JSON.stringify(schemas.find(s => s['@type'] === 'ProfessionalService')),
      service: JSON.stringify(schemas.find(s => s['@type'] === 'Service')),
      breadcrumb: JSON.stringify(breadcrumbSchema),
      faq: faqSchema ? JSON.stringify(faqSchema) : undefined,
      all: serializeJsonLd(schemas),
    },
    openGraph: {
      imageUrl: `${pageUrl}/og-image.png`,
    },
  };
}

export function getServiceJsonLd(pageData: LocalPageData) {
  const baseUrl = 'https://manueldeceglie.it';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${pageData.serviceName} a ${pageData.cityName}`,
    description: pageData.seo.description,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Manuel De Ceglie',
      url: baseUrl,
    },
    areaServed: [
      { '@type': 'Place', name: pageData.cityName },
      { '@type': 'Place', name: pageData.province },
      { '@type': 'Place', name: pageData.region },
    ],
    url: pageData.seo.canonical,
    image: `${pageData.seo.canonical}/og-image.png`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: pageData.geo?.lat,
      longitude: pageData.geo?.lng,
    },
    offers: pageData.offers?.map(offer => ({
      '@type': 'Offer',
      name: offer.title,
      description: offer.description,
      price: offer.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    })),
  };
}

export function getFAQJsonLd(faq: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
