import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRegions, generateRegionHubData } from '@/lib/seo/hub-generator';
import { getServicesWithCityPages } from '@/data/services-config';
import HubGridTemplate from '@/components/local-pages/HubGridTemplate';

interface PageProps {
  params: Promise<{ service: string; region: string }>;
}

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const paths: Array<{ service: string; region: string }> = [];
  const services = getServicesWithCityPages();
  const regions = getRegions();

  for (const service of services) {
    // Only pre-render core services for region hubs to keep build fast
    if (['siti-web', 'ecommerce', 'sviluppo-software'].includes(service.slug)) {
      for (const region of regions) {
        paths.push({ service: service.slug, region: region.slug });
      }
    }
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service, region } = await params;
  const data = generateRegionHubData(region, service);
  
  if (!data) return { title: 'Regione Non Trovata' };

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function RegionHubPage({ params }: PageProps) {
  const { service, region } = await params;
  const data = generateRegionHubData(region, service);

  if (!data) notFound();

  return <HubGridTemplate data={data} type="region" />;
}
