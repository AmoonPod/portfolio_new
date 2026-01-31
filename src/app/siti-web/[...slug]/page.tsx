import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs } from '@/data/locations';
import { assignArchetype } from '@/data/archetypes';
import { buildPageContent } from '@/lib/content/factory';
import { buildSeoMetadata } from '@/lib/seo/metadata';
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/seo/local-page';
import { getNearestNeighbors } from '@/lib/link-graph/graph';
import { getNicheConfig, NICHE_SLUGS } from '@/data/niches-config';
import { generateHubHero, generateHubMetadata, isNicheSlug as isHubNicheSlug } from '@/lib/content/hub-templates';
import { getPlaybookContent, getAllPlaybookSlugs } from '@/data/playbooks';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import NicheHubTemplate from '@/components/local-pages/NicheHubTemplate';
import PlaybookTemplate from '@/components/playbook/PlaybookTemplate';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export const dynamicParams = true;

export const revalidate = 3600;

export async function generateStaticParams() {
  const paths: Array<{ slug: string[] }> = [];

  const citySlugs = getAllLocationSlugs();
  citySlugs.forEach(city => {
    paths.push({ slug: [city] });
  });

  NICHE_SLUGS.forEach(niche => {
    // Hub page
    paths.push({ slug: [niche] });

    // Playbook pages
    const playbooks = getAllPlaybookSlugs(niche);
    playbooks.forEach(topic => {
      paths.push({ slug: [niche, topic] });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = 'https://manueldeceglie.it';

  if (slug.length === 1) {
    const potential = slug[0];
    
    if (isHubNicheSlug(potential)) {
      const nicheConfig = getNicheConfig(potential);
      if (!nicheConfig) {
        return { title: 'Pagina Non Trovata', description: 'La nicchia richiesta non esiste.' };
      }
      const metadata = generateHubMetadata(nicheConfig);
      const ogUrl = new URL(`${baseUrl}/api/og`);
      ogUrl.searchParams.set('title', metadata.title);
      ogUrl.searchParams.set('subtitle', metadata.description);
      ogUrl.searchParams.set('badge', nicheConfig.name);

      return {
        title: metadata.title,
        description: metadata.description,
        alternates: { canonical: `${baseUrl}/siti-web/${potential}` },
        openGraph: {
          title: metadata.title,
          description: metadata.description,
          url: `${baseUrl}/siti-web/${potential}`,
          type: 'website',
          siteName: 'Manuel De Ceglie',
          images: [{
            url: ogUrl.toString(),
            width: 1200,
            height: 630,
            alt: metadata.title,
          }],
        },
        twitter: { 
          card: 'summary_large_image', 
          title: metadata.title, 
          description: metadata.description,
          images: [ogUrl.toString()],
        },
      };
    }

    const location = getLocationBySlug(potential);
    if (!location) {
      return { title: 'Pagina Non Trovata', description: 'La pagina richiesta non esiste.' };
    }

    const archetype = assignArchetype(location);
    const metadata = buildSeoMetadata(location, 'siti-web', archetype);
    
    const cityOgUrl = new URL(`${baseUrl}/api/og`);
    cityOgUrl.searchParams.set('title', metadata.title);
    cityOgUrl.searchParams.set('subtitle', metadata.description);
    cityOgUrl.searchParams.set('badge', location.province || 'Emilia-Romagna');

    return {
      title: metadata.title,
      description: metadata.description,
      alternates: { canonical: metadata.canonical },
      openGraph: {
        ...metadata.openGraph,
        images: [{
          url: cityOgUrl.toString(),
          width: 1200,
          height: 630,
          alt: metadata.title,
        }],
      },
      twitter: {
        ...metadata.twitter,
        images: [cityOgUrl.toString()],
      },
    };
  }

    if (slug.length === 2) {
    const [niche, topic] = slug;

    if (isHubNicheSlug(niche)) {
      const playbook = getPlaybookContent(niche, topic);
      if (playbook) {
        const playbookOgUrl = new URL(`${baseUrl}/api/og`);
        playbookOgUrl.searchParams.set('title', playbook.hero.title);
        playbookOgUrl.searchParams.set('subtitle', playbook.hero.subtitle);
        playbookOgUrl.searchParams.set('badge', playbook.nicheName);

        return {
          title: `${playbook.hero.title} | Manuel De Ceglie`,
          description: playbook.hero.subtitle,
          alternates: { canonical: `${baseUrl}/siti-web/${niche}/${topic}` },
          openGraph: {
            title: playbook.hero.title,
            description: playbook.hero.subtitle,
            url: `${baseUrl}/siti-web/${niche}/${topic}`,
            type: 'article',
            siteName: 'Manuel De Ceglie',
            images: [{
              url: playbookOgUrl.toString(),
              width: 1200,
              height: 630,
              alt: playbook.hero.title,
            }],
          },
          twitter: { 
            card: 'summary_large_image', 
            title: playbook.hero.title, 
            description: playbook.hero.subtitle,
            images: [playbookOgUrl.toString()],
          },
        };
      }
    }
  }

  return { title: 'Pagina Non Trovata', description: 'La pagina richiesta non esiste.' };
}

function generateJsonLd(pageData: ReturnType<typeof buildPageContent>) {
  const baseUrl = 'https://manueldeceglie.it';
  const faqJsonLd = getFAQJsonLd(pageData.faq);
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
        image: `${baseUrl}/manuel-de-ceglie.jpg`,
        priceRange: '€€',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '58'
        },
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '58'
        },
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

export default async function LocalPage({ params }: PageProps) {
  const { slug } = await params;
  const baseUrl = 'https://manueldeceglie.it';

  if (slug.length === 1) {
    const potential = slug[0];
    
    if (isHubNicheSlug(potential)) {
      const nicheConfig = getNicheConfig(potential);
      if (!nicheConfig) notFound();

      const content = generateHubHero(potential);

      const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            name: 'Manuel De Ceglie',
            description: 'Web developer specializzato in siti web per attività locali',
            url: baseUrl,
            image: `${baseUrl}/manuel-de-ceglie.jpg`,
            priceRange: '€€',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '58'
            },
            areaServed: 'Italia',
          },
          {
            '@type': 'Service',
            name: `Siti web per ${nicheConfig.pluralName.toLowerCase()}`,
            description: `Realizzo siti web professionali per ${nicheConfig.pluralName.toLowerCase()}. Design, SEO e marketing pensati per il tuo settore.`,
            provider: { '@type': 'ProfessionalService', name: 'Manuel De Ceglie' },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '58'
            },
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <NicheHubTemplate nicheSlug={potential} content={content} />
        </>
      );
    }

    const city = potential;
    const location = getLocationBySlug(city);
    if (!location) notFound();

    const pageData = buildPageContent(location);
    const neighbors = getNearestNeighbors(city, 6);
    const nearbyCities = neighbors.map(n => buildPageContent(n.location));
    const jsonLd = generateJsonLd(pageData);

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LocalPageTemplate data={pageData} nearbyCities={nearbyCities} />
      </>
    );
  }

  if (slug.length === 2) {
    const [niche, topic] = slug;

    if (isHubNicheSlug(niche)) {
      const nicheConfig = getNicheConfig(niche);
      if (!nicheConfig) notFound();

      const playbook = getPlaybookContent(niche, topic);
      if (!playbook) notFound();

      const sectionList = {
        '@type': 'ItemList',
        itemListElement: playbook.tocSections.map((section, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: section,
          item: `${baseUrl}/siti-web/${niche}/${topic}#section-${section}`,
        })),
      };

      const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            name: 'Manuel De Ceglie',
            description: `Web developer specializzato in siti web per ${nicheConfig.pluralName.toLowerCase()}`,
            url: baseUrl,
            priceRange: '€€',
            image: `${baseUrl}/manuel-de-ceglie.jpg`,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '58'
            },
            areaServed: 'Italia',
          },
          {
            '@type': 'Article',
            headline: playbook.hero.title,
            description: playbook.hero.subtitle,
            url: `${baseUrl}/siti-web/${niche}/${topic}`,
            datePublished: playbook.hero.lastUpdated,
            dateModified: playbook.hero.lastUpdated,
            author: { '@type': 'Person', name: 'Manuel De Ceglie' },
            publisher: { '@type': 'Organization', name: 'Manuel De Ceglie' },
            articleSection: 'Playbook',
            wordCount: playbook.content.length,
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
              { '@type': 'ListItem', position: 2, name: 'Siti Web', item: `${baseUrl}/siti-web` },
              { '@type': 'ListItem', position: 3, name: nicheConfig.name, item: `${baseUrl}/siti-web/${niche}` },
              { '@type': 'ListItem', position: 4, name: playbook.hero.title, item: `${baseUrl}/siti-web/${niche}/${topic}` },
            ],
          },
          sectionList,
          {
            '@type': 'FAQPage',
            mainEntity: playbook.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ],
      };

      return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <PlaybookTemplate playbook={playbook} />
        </>
      );
    }
  }

  notFound();
}
