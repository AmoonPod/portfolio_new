import { LocalPageData } from "@/data/local-pages/types";
import { Metadata } from "next";
import { DATA } from "@/data/resume";

export function generateLocalPageMetadata(data: LocalPageData): Metadata {
  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: {
      canonical: data.seo.canonical,
    },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: data.seo.canonical,
      siteName: DATA.name,
      images: [
        {
          url: `${DATA.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${data.serviceName} a ${data.cityName}`,
        },
      ],
      locale: "it_IT",
      type: "website",
    },
    twitter: {
      title: data.seo.title,
      description: data.seo.description,
      card: "summary_large_image",
      images: [`${DATA.url}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}


