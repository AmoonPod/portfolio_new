import { notFound } from "next/navigation";
import { generateServiceJsonLd, generateFAQJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";
import { getLocalPageBySlug, getAllSlugs, getPagesByProvince } from "@/data/local-pages/siti-web-dataset";
import LocalPageTemplate from "@/components/local-pages/LocalPageTemplate";
import { generateLocalPageMetadata } from "@/lib/local-page-metadata";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({
    city: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<ReturnType<typeof generateLocalPageMetadata>> {
  const { city } = await params;
  const data = getLocalPageBySlug(city);

  if (!data || data.active === false) {
    return {
      title: "Pagina Non Trovata",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return generateLocalPageMetadata(data);
}

export default async function LocalPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getLocalPageBySlug(city);

  if (!data || data.active === false) {
    notFound();
  }

  const serviceJsonLd = generateServiceJsonLd({
    serviceName: `${data.serviceName} a ${data.cityName}`,
    serviceDescription: data.seo.description,
    serviceType: "Web Development",
    areaServed: [data.cityName, data.province, data.region],
    url: data.seo.canonical,
    offers: data.offers || [],
    image: `${data.seo.canonical}/og-image.png`,
    geo: data.geo,
    cityName: data.cityName
  });

  const faqJsonLd = generateFAQJsonLd(data.faq.map(faq => ({
    question: faq.q,
    answer: faq.a,
  })));

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://manueldeceglie.it" },
    { name: "Servizi", url: "https://manueldeceglie.it/#services" },
    { name: data.serviceName, url: "https://manueldeceglie.it/siti-web" },
    { name: data.cityName, url: data.seo.canonical },
  ]);

  // Recupera città della stessa provincia per interlinking
  const allProvincePages = getPagesByProvince(data.province)
  const activeProvincePages = allProvincePages.filter(page => page.active !== false)
  const nearbyCities = activeProvincePages
    .filter(page => page.slug !== data.slug)
    .slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LocalPageTemplate data={data} nearbyCities={nearbyCities} />
    </>
  );
}


