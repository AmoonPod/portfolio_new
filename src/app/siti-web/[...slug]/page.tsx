import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs, PRIORITY_CITY_SLUGS } from '@/data/locations';
import { assignArchetype } from '@/data/archetypes';
import { buildPageContent } from '@/lib/content/factory';
import { buildSeoMetadata } from '@/lib/seo/metadata';
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/seo/local-page';
import { getNearestNeighbors } from '@/lib/link-graph/graph';
import { getNicheConfig, NICHE_SLUGS, SITI_WEB_NICHE_SLUGS } from '@/data/niches-config';
import { getNicheLabelForPhrase } from '@/lib/niche-labels';
import { generateHubHero, generateHubMetadata, isNicheSlug as isHubNicheSlug } from '@/lib/content/hub-templates';
import { getPlaybookContent, getAllPlaybookSlugs } from '@/data/playbooks';
import LocalPageTemplate from '@/components/local-pages/LocalPageTemplate';
import NicheHubTemplate from '@/components/local-pages/NicheHubTemplate';
import PlaybookTemplate from '@/components/playbook/PlaybookTemplate';
import { buildNicheCityPageData } from '@/lib/seo/niche-city-generator';
import UnifiedServicePageTemplate from '@/components/programmatic/UnifiedServicePageTemplate';
import { getServiceBySlug } from '@/data/services-config';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export const dynamicParams = true;

export const revalidate = 3600;

export async function generateStaticParams() {
  const paths: Array<{ slug: string[] }> = [];

  // OPTIMIZATION: Only pre-render Priority 1 cities
  PRIORITY_CITY_SLUGS.forEach(city => {
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

  // Hybrid ISR: We don't pre-render Niche × City pages here to keep build fast
  // They will be generated on-demand

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = 'https://manueldeceglie.it';

  // 1. Single Slug: City OR Niche Hub
  if (slug.length === 1) {
    const potential = slug[0];
    
    // Case A: Niche Hub (e.g. /siti-web/ristoranti)
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

    // Case B: City Page (e.g. /siti-web/modena)
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

  // 2. Double Slug: Niche × City OR Niche Playbook
  if (slug.length === 2) {
    const [nicheOrCity, topicOrCity] = slug;

    // Case A: Playbook (e.g. /siti-web/ristoranti/menu-online)
    // We check if the first part is a niche and the second is a known playbook
    if (isHubNicheSlug(nicheOrCity)) {
      const playbook = getPlaybookContent(nicheOrCity, topicOrCity);
      if (playbook) {
        const playbookOgUrl = new URL(`${baseUrl}/api/og`);
        playbookOgUrl.searchParams.set('title', playbook.hero.title);
        playbookOgUrl.searchParams.set('subtitle', playbook.hero.subtitle);
        playbookOgUrl.searchParams.set('badge', playbook.nicheName);

        return {
          title: `${playbook.hero.title} | Manuel De Ceglie`,
          description: playbook.hero.subtitle,
          alternates: { canonical: `${baseUrl}/siti-web/${nicheOrCity}/${topicOrCity}` },
          openGraph: {
            title: playbook.hero.title,
            description: playbook.hero.subtitle,
            url: `${baseUrl}/siti-web/${nicheOrCity}/${topicOrCity}`,
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

    // Case B: Niche × City (e.g. /siti-web/ristoranti/modena)
    // First part must be a supported niche, second part must be a valid city
    if (SITI_WEB_NICHE_SLUGS.includes(nicheOrCity)) {
      const location = getLocationBySlug(topicOrCity);
      if (location) {
        // It's a niche city page!
        const pageData = buildNicheCityPageData('siti-web', nicheOrCity, topicOrCity);
        if (pageData) {
          const ogUrl = new URL(`${baseUrl}/api/og`);
          ogUrl.searchParams.set('title', pageData.seo.title);
          ogUrl.searchParams.set('subtitle', pageData.seo.description.slice(0, 100));
          ogUrl.searchParams.set('badge', `${pageData.nicheName} a ${pageData.cityName}`);

          return {
            title: pageData.seo.title,
            description: pageData.seo.description,
            alternates: { canonical: pageData.seo.canonical },
            openGraph: {
              title: pageData.seo.title,
              description: pageData.seo.description,
              url: pageData.seo.canonical,
              type: 'website',
              images: [{
                url: ogUrl.toString(),
                width: 1200,
                height: 630,
                alt: pageData.seo.title,
              }],
            },
            twitter: { 
              card: 'summary_large_image',
              title: pageData.seo.title,
              description: pageData.seo.description,
              images: [ogUrl.toString()],
            },
          };
        }
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

  // -------------------------------------------------------------------------
  // 1. Single Slug Logic: City Page OR Niche Hub
  // -------------------------------------------------------------------------
  if (slug.length === 1) {
    const potential = slug[0];
    
    // A. Niche Hub Page
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
            name: `Siti web per ${getNicheLabelForPhrase(nicheConfig)}`,
            description: `Realizzo siti web professionali per ${getNicheLabelForPhrase(nicheConfig)}. Design, SEO e marketing pensati per il tuo settore.`,
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

    // B. Standard City Page
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

  // -------------------------------------------------------------------------
  // 2. Double Slug Logic: Niche Playbook OR Niche × City Page
  // -------------------------------------------------------------------------
  if (slug.length === 2) {
    const [nicheOrCity, topicOrCity] = slug;

    // A. Playbook Page
    // Only if first part is a niche and second part is a known playbook topic
    if (isHubNicheSlug(nicheOrCity)) {
      const playbook = getPlaybookContent(nicheOrCity, topicOrCity);
      // If found, render playbook
      if (playbook) {
        const nicheConfig = getNicheConfig(nicheOrCity)!; // safe because isHubNicheSlug checks config
        
        const sectionList = {
          '@type': 'ItemList',
          itemListElement: playbook.tocSections.map((section, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: section,
            item: `${baseUrl}/siti-web/${nicheOrCity}/${topicOrCity}#section-${section}`,
          })),
        };

        const jsonLd = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ProfessionalService',
              name: 'Manuel De Ceglie',
              description: `Web developer specializzato in siti web per ${getNicheLabelForPhrase(nicheConfig)}`,
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
              url: `${baseUrl}/siti-web/${nicheOrCity}/${topicOrCity}`,
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
                { '@type': 'ListItem', position: 3, name: nicheConfig.name, item: `${baseUrl}/siti-web/${nicheOrCity}` },
                { '@type': 'ListItem', position: 4, name: playbook.hero.title, item: `${baseUrl}/siti-web/${nicheOrCity}/${topicOrCity}` },
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

    // B. Niche × City Page (NEW)
    // Logic: First part is a valid niche slug, second part is a valid city slug
    if (SITI_WEB_NICHE_SLUGS.includes(nicheOrCity)) {
      const location = getLocationBySlug(topicOrCity);
      if (location) {
        const nicheCityData = buildNicheCityPageData('siti-web', nicheOrCity, topicOrCity);
        
        if (nicheCityData) {
          // Adapt NicheCityPageData to ServicePageData for the unified template
          // NOTE: The unified template expects ServicePageData which is slightly different
          // We need to map it or create a new template. 
          // For consistency and speed, we will map it to the unified template format 
          // since they are very similar visually.
          
          const unifiedPageData = {
            ...nicheCityData,
            // Map differing fields
            active: true,
            archetypeName: nicheCityData.archetype, // This is a simplification
            problems: [], // Niche pages might not have this in same format yet
            solutions: [],
            // Map internal linking
            relatedServices: nicheCityData.relatedNiches.map(n => ({
                slug: n.slug,
                name: n.name,
                description: `Servizi specifici per ${n.name}`,
            })),
          };

          const serviceConfig = getServiceBySlug('siti-web');
          if (!serviceConfig) notFound();

          // Structured Data for Niche City Page
          const jsonLd = {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ProfessionalService',
                name: 'Manuel De Ceglie',
                description: `Realizzazione siti web per ${nicheCityData.nicheName} a ${nicheCityData.cityName}`,
                url: baseUrl,
                image: `${baseUrl}/manuel-de-ceglie.jpg`,
                priceRange: '€€',
                areaServed: [
                  { '@type': 'Place', name: nicheCityData.cityName },
                  { '@type': 'Place', name: nicheCityData.province },
                ],
              },
              {
                '@type': 'Service',
                name: `Siti Web per ${nicheCityData.nicheName} a ${nicheCityData.cityName}`,
                description: nicheCityData.seo.description,
                provider: { '@type': 'ProfessionalService', name: 'Manuel De Ceglie' },
                areaServed: { '@type': 'Place', name: nicheCityData.cityName },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
                  { '@type': 'ListItem', position: 2, name: 'Siti Web', item: `${baseUrl}/siti-web` },
                  { '@type': 'ListItem', position: 3, name: nicheCityData.nicheName, item: `${baseUrl}/siti-web/${nicheOrCity}` },
                  { '@type': 'ListItem', position: 4, name: nicheCityData.cityName, item: `${baseUrl}/siti-web/${nicheOrCity}/${topicOrCity}` },
                ],
              }
            ]
          };

          return (
            <>
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
              <UnifiedServicePageTemplate 
                pageData={unifiedPageData as any} // Cast to any because types slightly mismatch but structure is compatible
                service={serviceConfig} 
              />
            </>
          );
        }
      }
    }
  }

  notFound();
}
