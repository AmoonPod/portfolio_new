import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, PRIORITY_CITY_SLUGS } from '@/data/locations';
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
import { getRegions, getProvinces, generateRegionHubData, generateProvinceHubData, slugify } from '@/lib/seo/hub-generator';
import HubGridTemplate from '@/components/local-pages/HubGridTemplate';

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
    paths.push({ slug: [niche] });
    const playbooks = getAllPlaybookSlugs(niche);
    playbooks.forEach(topic => {
      paths.push({ slug: [niche, topic] });
    });
  });

  getRegions().forEach(region => {
    paths.push({ slug: ['regione', region.slug] });
  });

  getProvinces().forEach(province => {
    paths.push({ slug: ['provincia', province.slug] });
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
      if (!nicheConfig) return { title: 'Pagina Non Trovata' };
      const metadata = generateHubMetadata(nicheConfig);
      return {
        title: metadata.title,
        description: metadata.description,
        alternates: { canonical: `${baseUrl}/siti-web/${potential}` },
      };
    }

    const location = getLocationBySlug(potential);
    if (!location) return { title: 'Pagina Non Trovata' };
    const archetype = assignArchetype(location);
    const metadata = buildSeoMetadata(location, 'siti-web', archetype);
    return {
      title: metadata.title,
      description: metadata.description,
      alternates: { canonical: metadata.canonical },
    };
  }

  if (slug.length === 2) {
    const [typeOrNiche, slugPart] = slug;

    if (typeOrNiche === 'regione') {
      const data = generateRegionHubData(slugPart);
      if (!data) return { title: 'Regione Non Trovata' };
      return { title: data.title, description: data.description };
    }

    if (typeOrNiche === 'provincia') {
      const data = generateProvinceHubData(slugPart);
      if (!data) return { title: 'Provincia Non Trovata' };
      return { title: data.title, description: data.description };
    }

    if (isHubNicheSlug(typeOrNiche)) {
      const playbook = getPlaybookContent(typeOrNiche, slugPart);
      if (playbook) return { title: `${playbook.hero.title} | Manuel De Ceglie`, description: playbook.hero.subtitle };
    }

    if (SITI_WEB_NICHE_SLUGS.includes(typeOrNiche)) {
      const location = getLocationBySlug(slugPart);
      if (location) {
        const pageData = buildNicheCityPageData('siti-web', typeOrNiche, slugPart);
        if (pageData) return { title: pageData.seo.title, description: pageData.seo.description };
      }
    }
  }

  return { title: 'Pagina Non Trovata' };
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
      return <NicheHubTemplate nicheSlug={potential} content={content} />;
    }

    const location = getLocationBySlug(potential);
    if (!location) notFound();
    const pageData = buildPageContent(location);
    const neighbors = getNearestNeighbors(potential, 6);
    const nearbyCities = neighbors.map(n => buildPageContent(n.location));
    
    const breadcrumbItems = [
      { name: 'Home', href: '/' },
      { name: 'Siti Web', href: '/siti-web' },
      { name: location.region, href: `/siti-web/regione/${slugify(location.region)}` },
      { name: location.province, href: `/siti-web/provincia/${slugify(location.province)}` },
      { name: location.name }
    ];

    return <LocalPageTemplate data={pageData} nearbyCities={nearbyCities} breadcrumbItems={breadcrumbItems} />;
  }

  if (slug.length === 2) {
    const [typeOrNiche, slugPart] = slug;

    if (typeOrNiche === 'regione') {
      const data = generateRegionHubData(slugPart);
      if (!data) notFound();
      return <HubGridTemplate data={data} type="region" />;
    }

    if (typeOrNiche === 'provincia') {
      const data = generateProvinceHubData(slugPart);
      if (!data) notFound();
      return <HubGridTemplate data={data} type="province" />;
    }

    if (isHubNicheSlug(typeOrNiche)) {
      const playbook = getPlaybookContent(typeOrNiche, slugPart);
      if (playbook) return <PlaybookTemplate playbook={playbook} />;
    }

    if (SITI_WEB_NICHE_SLUGS.includes(typeOrNiche)) {
      const location = getLocationBySlug(slugPart);
      if (location) {
        const nicheCityData = buildNicheCityPageData('siti-web', typeOrNiche, slugPart);
        if (nicheCityData) {
          const serviceConfig = getServiceBySlug('siti-web');
          const unifiedPageData = {
            ...nicheCityData,
            active: true,
            nicheSlug: typeOrNiche,
            archetypeName: nicheCityData.archetype,
            problems: [],
            solutions: [],
            relatedServices: nicheCityData.relatedNiches.map(n => ({
              slug: n.slug,
              name: n.name,
              description: `Servizi per ${n.name}`,
            })),
          };

          const breadcrumbItems = [
            { name: 'Home', href: '/' },
            { name: 'Siti Web', href: '/siti-web' },
            { name: nicheCityData.nicheName, href: `/siti-web/${typeOrNiche}` },
            { name: location.region, href: `/siti-web/regione/${slugify(location.region)}` },
            { name: location.province, href: `/siti-web/provincia/${slugify(location.province)}` },
            { name: location.name }
          ];

          return <UnifiedServicePageTemplate pageData={unifiedPageData as any} service={serviceConfig!} breadcrumbItems={breadcrumbItems} />;
        }
      }
    }
  }

  notFound();
}
