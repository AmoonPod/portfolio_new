import { LocalPageData } from '@/data/local-pages/types';
import { Metadata } from 'next';
import { DATA } from '@/data/resume';

export function generateLocalPageMetadata(data: LocalPageData): Metadata {
  const isActive = data.active !== false; // Default to true if not specified

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
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
          url: `${DATA.url}/api/og?title=${encodeURIComponent(data.cityName)}`,
          width: 1200,
          height: 630,
          alt: `Realizzazione siti web a ${data.cityName}`,
        },
      ],
      locale: 'it_IT',
      type: 'website',
    },
    twitter: {
      title: data.seo.title,
      description: data.seo.description,
      card: 'summary_large_image',
      images: [`${DATA.url}/api/og?title=${encodeURIComponent(data.cityName)}`],
    },
    robots: {
      index: isActive,
      follow: isActive,
      googleBot: {
        index: isActive,
        follow: isActive,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
