import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs } from '@/data/locations';
import { assignArchetype } from '@/data/archetypes';
import { buildSoftwarePageContent } from '@/lib/content/factory';
import { buildSeoMetadata } from '@/lib/seo/metadata';
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/seo/local-page';
import { getNearestNeighbors, buildProvinceBreadcrumb } from '@/lib/link-graph/graph';
import SoftwareLocalPageTemplate from '@/components/local-pages/SoftwareLocalPageTemplate';

interface PageProps {
  params: Promise<{ city: string }>;
}

export const dynamicParams = true;

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map(slug => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return {
      title: 'Pagina Non Trovata',
      description: 'La pagina richiesta non esiste.',
    };
  }

  const archetype = assignArchetype(location);
  const metadata = buildSeoMetadata(location, 'software-gestionali', archetype);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: metadata.canonical,
    },
    openGraph: metadata.openGraph,
    twitter: metadata.twitter,
  };
}

function generateJsonLd(pageData: ReturnType<typeof buildSoftwarePageContent>) {
  const baseUrl = 'https://manueldeceglie.it';

  const faqJsonLd = getFAQJsonLd(pageData.faq);

  const breadcrumbItems = buildProvinceBreadcrumb(pageData.slug);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Home', url: baseUrl },
    { name: 'Servizi', url: `${baseUrl}#services` },
    { name: pageData.serviceName, url: `${baseUrl}/software-gestionali` },
    { name: pageData.province, url: `${baseUrl}/software-gestionali/${pageData.province.toLowerCase().replace(/ /g, '-')}` },
    { name: pageData.cityName, url: pageData.seo.canonical },
  ]);

  // LocalBusiness schema with geographic coordinates
  const localBusinessSchema: any = {
    '@type': 'ProfessionalService',
    name: 'Manuel De Ceglie',
    description: 'Sviluppatore software specializzato in software gestionali e automazioni per attività locali',
    url: baseUrl,
    areaServed: [
      { '@type': 'Place', name: pageData.region },
      { '@type': 'Place', name: pageData.province },
      { '@type': 'Place', name: pageData.cityName },
    ],
  };

  // Add geographic coordinates if available
  if (pageData.geo && pageData.geo.lat && pageData.geo.lng) {
    localBusinessSchema.geo = {
      '@type': 'GeoCoordinates',
      latitude: pageData.geo.lat,
      longitude: pageData.geo.lng,
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusinessSchema,
      {
        '@type': 'Service',
        name: `${pageData.serviceName} a ${pageData.cityName}`,
        description: pageData.seo.description,
        provider: { '@type': 'ProfessionalService', name: 'Manuel De Ceglie' },
        areaServed: [
          { '@type': 'Place', name: pageData.cityName },
          { '@type': 'Place', name: pageData.province },
        ],
      },
      breadcrumbJsonLd,
      faqJsonLd,
    ],
  };
}

export default async function SoftwareLocalPage({ params }: PageProps) {
  const { city } = await params;

  const location = getLocationBySlug(city);
  if (!location) {
    notFound();
  }

  const pageData = buildSoftwarePageContent(location);

  const neighbors = getNearestNeighbors(city, 6);
  const nearbyCities = neighbors.map(n => {
    const neighborPage = buildSoftwarePageContent(n.location);
    return neighborPage;
  });

  const jsonLd = generateJsonLd(pageData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SoftwareLocalPageTemplate
        data={pageData}
        nearbyCities={nearbyCities}
      />
    </>
  );
}
