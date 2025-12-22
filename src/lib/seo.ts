import { DATA } from '@/data/resume'

// Types for JSON-LD structured data
interface ServiceJsonLdProps {
  serviceName: string
  serviceDescription: string
  serviceType: string
  areaServed?: string | string[]
  url: string
}

interface FAQItem {
  question: string
  answer: string
}

interface BreadcrumbItem {
  name: string
  url: string
}

// Generate Service schema
export function generateServiceJsonLd({
  serviceName,
  serviceDescription,
  serviceType,
  areaServed = 'Italy',
  url
}: ServiceJsonLdProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceType,
    provider: {
      '@type': 'ProfessionalService',
      name: DATA.name,
      url: DATA.url,
      logo: `${DATA.url}/logo_black.png`,
      image: `${DATA.url}${DATA.avatarUrl}`,
      telephone: DATA.contact.tel,
      email: DATA.contact.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Castelfranco Emilia',
        addressRegion: 'MO',
        addressCountry: 'IT'
      },
      areaServed: Array.isArray(areaServed)
        ? areaServed.map(area => ({
            '@type': 'Place',
            name: area
          }))
        : {
            '@type': 'Country',
            name: areaServed
          }
    },
    url: url,
    areaServed: Array.isArray(areaServed)
      ? areaServed.map(area => ({
          '@type': 'Place',
          name: area
        }))
      : {
          '@type': 'Country',
          name: areaServed
        }
  }
}

// Generate FAQPage schema
export function generateFAQJsonLd(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Generate BreadcrumbList schema
export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

// Generate LocalBusiness schema for local pages
export function generateLocalBusinessJsonLd(city: string, province: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: DATA.name,
    description: DATA.description,
    url: DATA.url,
    logo: `${DATA.url}/logo_black.png`,
    image: `${DATA.url}${DATA.avatarUrl}`,
    telephone: DATA.contact.tel,
    email: DATA.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Castelfranco Emilia',
      addressRegion: 'MO',
      addressCountry: 'IT'
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: province
      }
    },
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-18:00'
  }
}





