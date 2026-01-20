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

// JSON-LD (Google Rich Results safe): FAQ + Breadcrumb + WebPage + LocalBusiness
// Nota: evitiamo oggetti/annidamenti che in Search Console generano errori tipo "<parent_node>".
const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': `${BASE_URL}/offerta-landing#webpage`,
            url: `${BASE_URL}/offerta-landing`,
            name: 'Landing Page Professionale in 48 Ore | Offerta 347€',
            inLanguage: 'it-IT',
            description: 'Landing page professionale con consegna in 48 ore. Prezzo 347€ tutto incluso. Pagamento: 50% all’inizio, 50% alla consegna.',
        },
        {
            '@type': 'BreadcrumbList',
            '@id': `${BASE_URL}/offerta-landing#breadcrumb`,
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
                    name: 'Offerta Landing Page',
                    item: `${BASE_URL}/offerta-landing`,
                },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${BASE_URL}/offerta-landing#faq`,
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Quanto costa una landing page professionale?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Con questa offerta la landing page costa 347€ tutto incluso. Pagamento: 50% all’inizio e 50% alla consegna.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'In quanto tempo viene consegnata la landing page?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Consegna garantita in 48 ore lavorative dal pagamento dell’acconto.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Cosa include il servizio?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Design moderno, 100% responsive, form contatto funzionante, SEO base, setup hosting se necessario e 1 revisione inclusa.',
                    },
                },
            ],
        },
        {
            '@type': 'ProfessionalService',
            '@id': `${BASE_URL}#localbusiness`,
            name: 'Manuel De Ceglie - Sviluppatore Web',
            url: BASE_URL,
            telephone: '+39 350 576 4958',
            address: {
                '@type': 'PostalAddress',
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
            areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: 44.4347,
                    longitude: 10.4053,
                },
                geoRadius: '150000',
            },
            sameAs: [
                'https://www.linkedin.com/in/manuel-de-ceglie/',
                'https://github.com/AmoonPod',
            ],
        },
    ],
}

export default function OfferLandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="offer-landing-page">
                {children}
            </div>
        </>
    )
}
