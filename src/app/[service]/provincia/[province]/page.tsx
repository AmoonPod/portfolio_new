import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProvinces, generateProvinceHubData } from '@/lib/seo/hub-generator';
import { getServicesWithCityPages } from '@/data/services-config';
import HubGridTemplate from '@/components/local-pages/HubGridTemplate';

interface PageProps {
  params: Promise<{ service: string; province: string }>;
}

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const paths: Array<{ service: string; province: string }> = [];
  const services = getServicesWithCityPages();
  const provinces = getProvinces();

  for (const service of services) {
    // Limit pre-rendering to core services
    if (['siti-web', 'ecommerce'].includes(service.slug)) {
      for (const province of provinces) {
        paths.push({ service: service.slug, province: province.slug });
      }
    }
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service, province } = await params;
  const data = generateProvinceHubData(province, service);
  
  if (!data) return { title: 'Provincia Non Trovata' };

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://manueldeceglie.it/${service}/provincia/${province}`,
    },
  };
}

export default async function ProvinceHubPage({ params }: PageProps) {
  const { service, province } = await params;
  const data = generateProvinceHubData(province, service);

  if (!data) notFound();

  return <HubGridTemplate data={data} type="province" />;
}
