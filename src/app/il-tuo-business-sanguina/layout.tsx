import type { Metadata } from 'next'
import { DATA } from '@/data/resume'
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: 'Il tuo business sanguina? Fermiamo l\'emorragia | Manuel De Ceglie',
  description: 'Hai un sito web ma non ricevi richieste? Processi manuali che ti rallentano? Scopri come trasformare il tuo business digitale. Analisi gratuita e senza impegno. Soluzioni concrete per risultati reali.',
  keywords: [
    'sito web non funziona',
    'sito non porta clienti',
    'analisi sito web gratuita',
    'ottimizzazione sito web',
    'sito web non converte',
    'migliorare sito web',
    'sito invisibile su google',
    'seo sito web',
    'restyling sito web',
    'consulenza sito web',
    'sviluppatore web',
    'manuel de ceglie',
    'business digitale',
    'infrastruttura digitale'
  ],
  alternates: {
    canonical: `${DATA.url}/il-tuo-business-sanguina`
  },
  openGraph: {
    title: 'Il tuo business sanguina? Fermiamo l\'emorragia',
    description: 'Hai un sito web ma non ricevi richieste? Processi manuali che ti rallentano? Scopri come trasformare il tuo business digitale. Analisi gratuita.',
    url: `${DATA.url}/il-tuo-business-sanguina`,
    siteName: 'Manuel De Ceglie',
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Il tuo business sanguina? - Manuel De Ceglie'
      }
    ],
    locale: 'it_IT',
    type: 'website'
  },
  twitter: {
    title: 'Il tuo business sanguina? Fermiamo l\'emorragia',
    description: 'Hai un sito web ma non ricevi richieste? Scopri come trasformare il tuo business digitale. Analisi gratuita.',
    card: 'summary_large_image',
    images: [`${DATA.url}/og-image.png`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function IlTuoBusinessSanguinaLayout ({
  children
}: {
  children: React.ReactNode
}) {
  // Structured Data per SEO
  const pageUrl = `${DATA.url}/il-tuo-business-sanguina`
  
  const serviceJsonLd = generateServiceJsonLd({
    serviceName: 'Analisi e Consulenza Business Digitale',
    serviceDescription: 'Analisi gratuita del tuo sito web e processi digitali. Identifico i problemi che impediscono al tuo business di fatturare online e propongo soluzioni concrete.',
    serviceType: 'Digital Business Consulting',
    areaServed: 'Italy',
    url: pageUrl,
    image: `${DATA.url}${DATA.avatarUrl}`
  })

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: DATA.url },
    { name: 'Il tuo business sanguina', url: pageUrl }
  ])

  const webpageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Il tuo business sanguina? Fermiamo l\'emorragia',
    description: 'Hai un sito web ma non ricevi richieste? Processi manuali che ti rallentano? Scopri come trasformare il tuo business digitale con un\'analisi gratuita.',
    url: pageUrl,
    inLanguage: 'it-IT',
    isPartOf: {
      '@type': 'WebSite',
      name: DATA.name,
      url: DATA.url
    },
    about: {
      '@type': 'Thing',
      name: 'Consulenza Business Digitale',
      description: 'Servizi di analisi e ottimizzazione per siti web e processi digitali'
    }
  }

  return (
    <>
      {/* Structured Data per SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      {children}
    </>
  )
}

