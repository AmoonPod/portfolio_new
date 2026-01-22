import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs } from '@/data/locations';
import { assignArchetype } from '@/data/archetypes';
import { buildPageContent } from '@/lib/content/factory';
import { buildSeoMetadata } from '@/lib/seo/metadata';
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/seo/local-page';
import { getNearestNeighbors } from '@/lib/link-graph/graph';
import { getNicheLinksForCity } from '@/lib/paths';
import { getNicheConfig, NICHE_SLUGS } from '@/data/niches-config';
import { generateHubHero, generateHubMetadata, isNicheSlug as isHubNicheSlug } from '@/lib/content/hub-templates';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import NicheHubTemplate from '@/components/local-pages/NicheHubTemplate';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export const dynamicParams = true;

export const revalidate = 3600;

export async function generateStaticParams() {
  const paths: Array<{ slug: string[] }> = [];

  // Add city pages only (no niche subpages)
  const citySlugs = getAllLocationSlugs();
  citySlugs.forEach(city => {
    paths.push({ slug: [city] });
  });

  // Add hub pages for each niche
  NICHE_SLUGS.forEach(niche => {
    paths.push({ slug: [niche] });
  });

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug.length === 1) {
    const potential = slug[0];
    
    // Check if it's a niche hub page
    if (isHubNicheSlug(potential)) {
      const nicheConfig = getNicheConfig(potential);
      if (!nicheConfig) {
        return {
          title: 'Pagina Non Trovata',
          description: 'La nicchia richiesta non esiste.',
        };
      }

      const metadata = generateHubMetadata(nicheConfig);
      const baseUrl = 'https://manueldeceglie.it';

      return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        alternates: {
          canonical: `${baseUrl}/siti-web/${potential}`,
        },
        openGraph: {
          title: metadata.title,
          description: metadata.description,
          url: `${baseUrl}/siti-web/${potential}`,
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: metadata.title,
          description: metadata.description,
        },
      };
    }

    // Otherwise, check if it's a city page
    const location = getLocationBySlug(potential);
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

  return {
    title: 'Pagina Non Trovata',
    description: 'La pagina richiesta non esiste.',
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
          { '@Type': 'Place', name: pageData.province },
        ],
      },
      breadcrumbJsonLd,
      faqJsonLd,
    ],
  };
}

function buildProvinceBreadcrumb(citySlug: string) {
  return [
    { name: 'Home', url: 'https://manueldeceglie.it' },
    { name: 'Servizi', url: 'https://manueldeceglie.it#services' },
    { name: 'Siti Web', url: 'https://manueldeceglie.it/siti-web' },
    { name: citySlug.replace(/-/g, ' '), url: `https://manueldeceglie.it/siti-web/${citySlug}` },
  ];
}

export default async function LocalPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug.length === 1) {
    const potential = slug[0];
    
    // Check if it's a niche hub page
    if (isHubNicheSlug(potential)) {
      const nicheConfig = getNicheConfig(potential);
      if (!nicheConfig) {
        notFound();
      }

      const content = generateHubHero(potential);
      const baseUrl = 'https://manueldeceglie.it';

      // Hub page JSON-Ld
      const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            name: 'Manuel De Ceglie',
            description: 'Web developer specializzato in siti web per attività locali',
            url: baseUrl,
            areaServed: 'Italia',
          },
          {
            '@type': 'Service',
            name: `Siti web per ${nicheConfig.pluralName.toLowerCase()}`,
            description: `Realizzo siti web professionali per ${nicheConfig.pluralName.toLowerCase()}. Design, SEO e marketing pensati per il tuo settore.`,
            provider: { '@type': 'ProfessionalService', name: 'Manuel De Ceglie' },
            areaServed: 'Italia',
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
              { '@type': 'ListItem', position: 2, name: 'Siti Web', item: `${baseUrl}/siti-web` },
              { '@type': 'ListItem', position: 3, name: nicheConfig.name, item: `${baseUrl}/siti-web/${potential}` },
            ],
          },
        ],
      };

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <NicheHubTemplate nicheSlug={potential} content={content} />
        </>
      );
    }

    // Otherwise, it's a city page
    const city = potential;
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

  // slug.length >= 2 - Not supported anymore (removed city/niche pages)
  notFound();
}
