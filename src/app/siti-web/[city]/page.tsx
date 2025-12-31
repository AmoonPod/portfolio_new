import { notFound } from "next/navigation";
import { generateServiceJsonLd, generateFAQJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";
import { getLocalPageBySlug, getAllSlugs } from "@/data/local-pages/siti-web-dataset";
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

  if (!data) {
    return {
      title: "Pagina Non Trovata",
    };
  }

  return generateLocalPageMetadata(data);
}

export default async function LocalPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getLocalPageBySlug(city);

  if (!data) {
    notFound();
  }

  const serviceJsonLd = generateServiceJsonLd({
    serviceName: `${data.serviceName} a ${data.cityName}`,
    serviceDescription: data.seo.description,
    serviceType: "Web Development",
    areaServed: [data.cityName, data.province, data.region],
    url: data.seo.canonical,
  });

  const faqJsonLd = generateFAQJsonLd(data.faq.map(faq => ({
    question: faq.q,
    answer: faq.a,
  })));

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://manueldeceglie.it" },
    { name: "Servizi", url: "https://manueldeceglie.it/#services" },
    { name: data.serviceName, url: "https://manueldeceglie.it/#services" },
    { name: data.cityName, url: data.seo.canonical },
  ]);

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
      <LocalPageTemplate data={data} />
    </>
  );
}


