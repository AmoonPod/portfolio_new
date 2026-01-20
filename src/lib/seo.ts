import { DATA } from '@/data/resume'

// Types for JSON-LD structured data
interface PriceRangeSpecification {
  minPrice: string
  maxPrice: string
}

interface Offer {
  id: string
  title: string
  description: string
  active: boolean
  price?: string
  priceSpecification?: PriceRangeSpecification
}

interface ServiceJsonLdProps {
  serviceName: string
  serviceDescription: string
  serviceType: string
  areaServed?: string | string[]
  url: string
  offers?: Offer[]
  image?: string
  geo?: {
    lat: number
    lng: number
  }
  cityName?: string
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
  url,
  offers = [],
  image,
  geo,
  cityName
}: ServiceJsonLdProps) {
  // Filter only active offers and prepare them for schema
  const activeOffers = offers.filter(offer => offer.active)

  // Build areaServed with optional geo coordinates
  let areaServedSchema: any
  if (Array.isArray(areaServed)) {
    // If we have geo coordinates and city name, use the first area (city) with coordinates
    if (geo && cityName && areaServed.length > 0 && areaServed[0] === cityName) {
      areaServedSchema = [
        {
          '@type': 'Place',
          name: cityName,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: geo.lat,
            longitude: geo.lng
          }
        },
        ...areaServed.slice(1).map(area => ({
          '@type': 'City',
          name: area
        }))
      ]
    } else {
      areaServedSchema = areaServed.map(area => ({
        '@type': 'City',
        name: area
      }))
    }
  } else {
    areaServedSchema = {
      '@type': 'Country',
      name: areaServed
    }
  }

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceType,
    provider: {
      '@type': 'Person',
      name: DATA.name,
      url: DATA.url,
      image: image || `${DATA.url}${DATA.avatarUrl}`,
      telephone: DATA.contact.tel,
      email: DATA.contact.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Castelfranco Emilia',
        addressRegion: 'MO',
        addressCountry: 'IT'
      }
    },
    url: url,
    areaServed: areaServedSchema
  }

  // Add offer catalog if offers are available
  if (activeOffers.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Servizi di Sviluppo Web',
      itemListElement: activeOffers.map((offer) => {
        const offerSchema: any = {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: offer.title,
            description: offer.description
          }
        }

        if (offer.priceSpecification) {
          offerSchema.priceSpecification = {
            '@type': 'PriceSpecification',
            minPrice: offer.priceSpecification.minPrice.replace(/[^\d]/g, ''),
            maxPrice: offer.priceSpecification.maxPrice.replace(/[^\d]/g, ''),
            priceCurrency: 'EUR'
          }
        } else if (offer.price) {
          const normalizedPrice = offer.price.replace(/[^\d]/g, '') // Remove all non-digit characters (€, dots, etc.)
          const numericPrice = Number(normalizedPrice)

          // If price is 0/empty, treat it as "call for price" and omit the price field.
          if (Number.isFinite(numericPrice) && numericPrice > 0) {
            offerSchema.price = normalizedPrice
            offerSchema.priceCurrency = 'EUR'
          }
        }

        return offerSchema
      })
    }
  }

  return schema
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





