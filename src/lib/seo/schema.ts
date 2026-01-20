import { Location } from '@/data/locations';

export interface JsonLd {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export interface ServiceOffer {
  id: string;
  title: string;
  description: string;
  price: string;
  priceCurrency?: string;
  availability?: string;
  url?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  logo?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  areaServed?: Array<{
    name: string;
  }>;
  foundingDate?: string;
  sameAs?: string[];
}

export function buildLocalBusinessSchema(
  businessName: string = 'Manuel De Ceglie',
  description: string = 'Web developer specializzato in siti web per attività locali in Emilia-Romagna.',
  website: string = 'https://manueldeceglie.it',
  location?: Location,
  additionalSameAs?: string[]
): JsonLd {
  const address = {
    addressLocality: 'Reggio Emilia',
    addressRegion: 'Emilia-Romagna',
    addressCountry: 'IT',
  };

  const sameAs = [
    'https://www.linkedin.com/in/manueldeceglie',
    'https://www.instagram.com/manueldeceglie',
    ...(additionalSameAs || []),
  ];

  const schema: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: businessName,
    description,
    url: website,
    logo: 'https://manueldeceglie.it/logo.png',
    image: 'https://manueldeceglie.it/og-image.png',
    telephone: '+39 000 000 0000',
    email: 'hello@manueldeceglie.it',
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    areaServed: [
      { '@type': 'Place', name: 'Emilia-Romagna' },
      { '@type': 'Place', name: 'Province di Reggio Emilia, Modena, Parma, Bologna' },
    ],
    sameAs,
  };

  if (location?.geo) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: location.geo.lat,
      longitude: location.geo.lng,
    };
  }

  return schema;
}

export function buildServiceSchema(
  serviceName: string,
  serviceDescription: string,
  providerName: string,
  areaServed: string[],
  offers?: ServiceOffer[],
  image?: string,
  url?: string
): JsonLd {
  const schema: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'ProfessionalService',
      name: providerName,
    },
    areaServed: areaServed.map(name => ({
      '@type': 'Place',
      name,
    })),
    image: image || 'https://manueldeceglie.it/og-image.png',
    url: url || 'https://manueldeceglie.it',
  };

  if (offers && offers.length > 0) {
    schema.offers = offers.map(offer => ({
      '@type': 'Offer',
      name: offer.title,
      description: offer.description,
      price: offer.price,
      priceCurrency: offer.priceCurrency || 'EUR',
      availability: offer.availability || 'https://schema.org/InStock',
      url: offer.url,
    }));
  }

  return schema;
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): JsonLd {
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

export function buildFAQSchema(
  faqs: FAQItem[]
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildWebSiteSchema(
  name: string,
  url: string,
  potentialAction?: {
    target: string;
    queryInput: string;
  }
): JsonLd {
  const schema: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
  };

  if (potentialAction) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: potentialAction.target,
      },
      'query-input': potentialAction.queryInput,
    };
  }

  return schema;
}

export function buildLocalPageSchema(
  location: Location,
  serviceName: string,
  serviceDescription: string,
  offers?: ServiceOffer[],
  faqs?: FAQItem[]
): JsonLd[] {
  const baseUrl = 'https://manueldeceglie.it';
  const pageUrl = `${baseUrl}/siti-web/${location.slug}`;

  const schemas: JsonLd[] = [];

  schemas.push(buildLocalBusinessSchema(
    'Manuel De Ceglie',
    'Web developer specializzato in siti web per attività locali.',
    baseUrl,
    location
  ));

  schemas.push(buildServiceSchema(
    `${serviceName} a ${location.name}`,
    serviceDescription,
    'Manuel De Cegglie',
    [location.name, location.province, location.region],
    offers,
    `${pageUrl}/og-image.png`,
    pageUrl
  ));

  schemas.push(buildBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Servizi', url: `${baseUrl}#services` },
    { name: serviceName, url: `${baseUrl}/${location.slug}` },
    { name: location.name, url: pageUrl },
  ]));

  if (faqs && faqs.length > 0) {
    schemas.push(buildFAQSchema(faqs));
  }

  schemas.push(buildWebSiteSchema(
    'Manuel De Ceglie - Web Developer',
    baseUrl,
    {
      target: `${baseUrl}/siti-web/{search_term_string}`,
      queryInput: 'required name=search_term_string',
    }
  ));

  return schemas;
}

export function serializeJsonLd(schema: JsonLd | JsonLd[]): string {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return schemas.map(s => JSON.stringify(s)).join('\n');
}
