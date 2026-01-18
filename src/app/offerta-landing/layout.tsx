import type { Metadata } from 'next'

const BASE_URL = 'https://manueldeceglie.it'

export const metadata: Metadata = {
    title: 'Landing Page Professionale 347€ | Consegna in 48 Ore | Manuel De Ceglie',
    description: 'Cerchi una landing page professionale a Modena, Bologna o in Emilia-Romagna? Design moderno, responsive, ottimizzata SEO. Consegna in 48 ore a soli 347€. Offerta limitata fino al 31 gennaio.',
    keywords: [
        // Keywords principali ad alto volume
        'landing page professionale',
        'landing page 48 ore',
        'landing page economica',
        'landing page prezzo',
        'creazione landing page',
        'landing page costo',
        'quanto costa una landing page',
        'landing page preventivo',

        // Keywords locali - Modena e provincia
        'landing page Modena',
        'siti web Modena',
        'web designer Modena',
        'sviluppatore web Modena',
        'realizzazione siti web Modena',
        "creazione siti web Castelnovo ne' Monti",
        'siti web Vignola',
        'siti web Sassuolo',
        'siti web Carpi',
        'siti web Formigine',
        'siti web Maranello',
        'siti web Pavullo',

        // Keywords locali - Reggio Emilia
        'landing page Reggio Emilia',
        'siti web Reggio Emilia',
        'web designer Reggio Emilia',
        'siti web Correggio',
        'siti web Scandiano',
        'siti web Castelnovo ne Monti',
        'siti web Guastalla',

        // Keywords locali - Bologna
        'landing page Bologna',
        'siti web Bologna',
        'web designer Bologna',
        'sviluppatore web Bologna',
        'siti web Imola',
        'siti web Casalecchio',

        // Keywords locali - Parma
        'landing page Parma',
        'siti web Parma',
        'web designer Parma',

        // Keywords Emilia-Romagna
        'landing page Emilia-Romagna',
        'siti web Emilia-Romagna',
        'web designer Emilia-Romagna',
        'realizzazione siti web Emilia-Romagna',
        'agenzia web Emilia-Romagna',

        // Keywords Italia
        'landing page Italia',
        'creazione landing page online',
        'landing page freelance',
        'landing page per PMI',
        'landing page per aziende',
        'landing page per startup',
        'landing page per liberi professionisti',

        // Keywords conversione e servizio
        'landing page che converte',
        'landing page per lead generation',
        'landing page efficace',
        'landing page mobile first',
        'landing page responsive',
        'landing page ottimizzata SEO',
        'landing page veloce',
        'landing page wordpress alternativa',
        'landing page senza abbonamento',
    ],
    openGraph: {
        title: 'Landing Page Professionale in 48 Ore | Solo 347€ | Offerta Limitata',
        description: 'Design moderno, 100% responsive, form contatto, SEO base inclusa. Consegna garantita in 48 ore. Offerta valida fino al 31 gennaio 2026.',
        type: 'website',
        locale: 'it_IT',
        url: `${BASE_URL}/offerta-landing`,
        siteName: 'Manuel De Ceglie - Sviluppatore Web',
        images: [
            {
                url: `${BASE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Landing Page Professionale in 48 Ore - Offerta 347€ - Manuel De Ceglie Web Developer Modena',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Landing Page Professionale 347€ | Consegna in 48 Ore',
        description: 'Design moderno, responsive, ottimizzata SEO. Consegna garantita in 48 ore. Offerta limitata fino al 31 gennaio.',
        images: [`${BASE_URL}/og-image.png`],
        creator: '@manueldeceglie',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: `${BASE_URL}/offerta-landing`,
        languages: {
            'it-IT': `${BASE_URL}/offerta-landing`,
            'it': `${BASE_URL}/offerta-landing`,
        },
    },
    authors: [{ name: 'Manuel De Ceglie', url: BASE_URL }],
    creator: 'Manuel De Ceglie',
    publisher: 'Manuel De Ceglie',
    category: 'Web Development',
    classification: 'Business',
    other: {
        'geo.region': 'IT-RE',
        'geo.placename': "Castelnovo ne' Monti, Reggio Emilia, Emilia-Romagna, Italia",
        'geo.position': '44.4347;10.4053',
        'ICBM': '44.4347, 10.4053',
        'rating': 'General',
        'distribution': 'Global',
        'revisit-after': '3 days',
        'language': 'Italian',
        'target': 'all',
        'audience': 'all',
        'coverage': 'Worldwide',
    },
    verification: {
        google: 'BzkUaVu8rd1Ixv5g73FCGyldZPKgc2NklXHMqbOcm9Q',
    },
}

// Schema JSON-LD multipli per SEO avanzato
const schemas = [
    // 1. WebPage Schema
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE_URL}/offerta-landing#webpage`,
        url: `${BASE_URL}/offerta-landing`,
        name: 'Landing Page Professionale in 48 Ore | Offerta 347€',
        description: 'Creazione di landing page professionali con consegna garantita in 48 ore. Design moderno, responsive, ottimizzata SEO. Solo 347€ tutto incluso.',
        isPartOf: {
            '@id': `${BASE_URL}#website`,
        },
        about: {
            '@id': `${BASE_URL}/offerta-landing#service`,
        },
        datePublished: '2026-01-18',
        dateModified: '2026-01-18',
        inLanguage: 'it-IT',
    },

    // 2. Service Schema (dettagliato)
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${BASE_URL}/offerta-landing#service`,
        name: 'Creazione Landing Page Professionale in 48 Ore',
        description: 'Servizio di creazione landing page professionali con design personalizzato, 100% responsive, form di contatto, ottimizzazione SEO base, setup hosting. Consegna garantita in 48 ore.',
        serviceType: 'Web Design',
        category: 'Landing Page Development',
        provider: {
            '@type': 'Person',
            '@id': `${BASE_URL}#person`,
            name: 'Manuel De Ceglie',
            jobTitle: 'Web Developer',
            url: BASE_URL,
            telephone: '+39 350 576 4958',
            email: 'info@manueldeceglie.it',
            image: `${BASE_URL}/manuel-de-ceglie-sviluppatore-web-modena.png`,
            sameAs: [
                'https://www.linkedin.com/in/manuel-de-ceglie/',
                'https://github.com/AmoonPod',
            ],
            address: {
                '@type': 'PostalAddress',
                streetAddress: "Castelnovo ne' Monti",
                addressLocality: "Castelnovo ne' Monti",
                addressRegion: 'Reggio Emilia',
                postalCode: '42035',
                addressCountry: 'IT',
            },
        },
        areaServed: [
            { '@type': 'City', name: 'Modena', '@id': 'https://www.wikidata.org/wiki/Q13366' },
            { '@type': 'City', name: 'Bologna', '@id': 'https://www.wikidata.org/wiki/Q1891' },
            { '@type': 'City', name: 'Reggio Emilia', '@id': 'https://www.wikidata.org/wiki/Q13360' },
            { '@type': 'City', name: 'Parma', '@id': 'https://www.wikidata.org/wiki/Q2683' },
            { '@type': 'City', name: 'Ferrara' },
            { '@type': 'City', name: 'Sassuolo' },
            { '@type': 'City', name: 'Carpi' },
            { '@type': 'City', name: 'Vignola' },
            { '@type': 'City', name: "Castelnovo ne' Monti" },
            { '@type': 'AdministrativeArea', name: 'Emilia-Romagna' },
            { '@type': 'Country', name: 'Italia', '@id': 'https://www.wikidata.org/wiki/Q38' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servizi Landing Page',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Landing Page Professionale',
                    },
                },
            ],
        },
        offers: {
            '@type': 'Offer',
            name: 'Landing Page Professionale - Offerta Limitata',
            price: '347',
            priceCurrency: 'EUR',
            priceValidUntil: '2026-01-31',
            availability: 'https://schema.org/LimitedAvailability',
            url: `${BASE_URL}/offerta-landing`,
            validFrom: '2026-01-18',
            seller: {
                '@id': `${BASE_URL}#person`,
            },
            itemCondition: 'https://schema.org/NewCondition',
            hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'IT',
                returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                merchantReturnDays: 14,
                returnMethod: 'https://schema.org/ReturnByMail',
                returnFees: 'https://schema.org/FreeReturn',
            },
        },
        termsOfService: `${BASE_URL}/privacy-policy`,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: '12',
            bestRating: '5',
            worstRating: '1',
        },
    },

    // 3. LocalBusiness Schema
    {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${BASE_URL}#localbusiness`,
        name: 'Manuel De Ceglie - Sviluppatore Web',
        image: `${BASE_URL}/manuel-de-ceglie-sviluppatore-web-modena.png`,
        logo: `${BASE_URL}/logo_black.png`,
        url: BASE_URL,
        telephone: '+39 350 576 4958',
        email: 'info@manueldeceglie.it',
        priceRange: '€€',
        address: {
            '@type': 'PostalAddress',
            streetAddress: "Castelnovo ne' Monti",
            addressLocality: "Castelnovo ne' Monti",
            addressRegion: 'RE',
            postalCode: '42035',
            addressCountry: 'IT',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 44.4347,
            longitude: 10.4053,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
        sameAs: [
            'https://www.linkedin.com/in/manuel-de-ceglie/',
            'https://github.com/AmoonPod',
        ],
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 44.4347,
                longitude: 10.4053,
            },
            geoRadius: '150000',
        },
    },

    // 4. BreadcrumbList Schema
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: BASE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Landing Page 48 Ore',
                item: `${BASE_URL}/offerta-landing`,
            },
        ],
    },

    // 5. FAQPage Schema
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Quanto costa una landing page professionale?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Con questa offerta speciale, una landing page professionale costa solo 347€ tutto incluso. Il prezzo normale sarebbe 597€. Il pagamento è suddiviso in 50% all\'inizio e 50% alla consegna.',
                },
            },
            {
                '@type': 'Question',
                name: 'In quanto tempo viene consegnata la landing page?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'La consegna è garantita in 48 ore lavorative dal pagamento dell\'acconto. Riceverai una landing page completa, testata e pronta per andare online.',
                },
            },
            {
                '@type': 'Question',
                name: 'Cosa include il servizio di creazione landing page?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Il servizio include: design personalizzato e moderno, layout 100% responsive per mobile/tablet/desktop, form di contatto funzionante, ottimizzazione SEO base, setup hosting se necessario, e 1 revisione inclusa.',
                },
            },
            {
                '@type': 'Question',
                name: 'Lavori anche fuori da Modena?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sì, lavoro con clienti in tutta Italia. Essendo un servizio digitale, posso creare landing page per aziende di Modena, Bologna, Reggio Emilia, Parma e qualsiasi altra città italiana. La comunicazione avviene via WhatsApp e videochiamate.',
                },
            },
            {
                '@type': 'Question',
                name: 'Posso richiedere modifiche dopo la consegna?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sì, nel prezzo è inclusa 1 revisione gratuita. Potrai richiedere modifiche al design, ai testi o alla struttura della landing page. Revisioni aggiuntive sono quotate separatamente.',
                },
            },
            {
                '@type': 'Question',
                name: 'La landing page sarà ottimizzata per i motori di ricerca?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sì, ogni landing page include ottimizzazione SEO base: meta tag ottimizzati, struttura semantica corretta, velocità di caricamento ottimale e compatibilità mobile. Per strategie SEO avanzate, offro servizi aggiuntivi.',
                },
            },
        ],
    },

    // 6. Product Schema (per Google Shopping/Merchant)
    {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Landing Page Professionale in 48 Ore',
        description: 'Servizio di creazione landing page con design personalizzato, responsive, form contatto e SEO base inclusa. Consegna garantita in 48 ore.',
        image: `${BASE_URL}/og-image.png`,
        brand: {
            '@type': 'Brand',
            name: 'Manuel De Ceglie',
        },
        offers: {
            '@type': 'Offer',
            url: `${BASE_URL}/offerta-landing`,
            priceCurrency: 'EUR',
            price: '347',
            priceValidUntil: '2026-01-31',
            availability: 'https://schema.org/InStock',
            seller: {
                '@type': 'Person',
                name: 'Manuel De Ceglie',
            },
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: '12',
        },
    },
]

export default function OfferLandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* Multiple JSON-LD Schemas */}
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <div className="offer-landing-page">
                {children}
            </div>
        </>
    )
}
