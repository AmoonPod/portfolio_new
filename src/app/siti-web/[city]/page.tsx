import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs } from '@/data/locations';
import { assignArchetype } from '@/data/archetypes';
import { buildPageContent } from '@/lib/content/factory';
import { buildSeoMetadata } from '@/lib/seo/metadata';
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/seo/local-page';
import { getNearestNeighbors, getProvinceByCitySlug, buildProvinceBreadcrumb } from '@/lib/link-graph/graph';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';

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
  const metadata = buildSeoMetadata(location, 'siti-web', archetype);

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

function generateJsonLd(pageData: ReturnType<typeof buildPageContent>) {
  const baseUrl = 'https://manueldeceglie.it';

  const faqJsonLd = getFAQJsonLd(pageData.faq);

  const breadcrumbItems = buildProvinceBreadcrumb(pageData.slug);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Home', url: baseUrl },
    { name: 'Servizi', url: `${baseUrl}#services` },
    { name: pageData.serviceName, url: `${baseUrl}/siti-web` },
    { name: pageData.province, url: `${baseUrl}/siti-web/${pageData.province.toLowerCase().replace(/ /g, '-')}` },
    { name: pageData.cityName, url: pageData.seo.canonical },
  ]);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Manuel De Ceglie',
        description: 'Web developer specializzato in siti web per attività locali',
        url: baseUrl,
        areaServed: [
          { '@type': 'Place', name: pageData.region },
          { '@type': 'Place', name: pageData.province },
          { '@type': 'Place', name: pageData.cityName },
        ],
      },
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

export default async function LocalPage({ params }: PageProps) {
  const { city } = await params;

  const location = getLocationBySlug(city);
  if (!location) {
    notFound();
  }

  const pageData = buildPageContent(location);

  const neighbors = getNearestNeighbors(city, 6);
  const nearbyCities = neighbors.map(n => {
    const neighborPage = buildPageContent(n.location);
    return neighborPage;
  });

  const jsonLd = generateJsonLd(pageData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalPageTemplate
        data={pageData}
        nearbyCities={nearbyCities}
      />
    </>
  );
}
