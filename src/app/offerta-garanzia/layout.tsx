import type { Metadata } from 'next'

const BASE_URL = 'https://manueldeceglie.it'
const PAGE_URL = `${BASE_URL}/offerta-garanzia`

export const metadata: Metadata = {
    title: 'Landing Page 347€ - Zero Stress, Comunicazione Trasparente | Manuel De Ceglie',
    description: 'Inizia il tuo progetto oggi senza stress. Landing page professionale a 347€, design moderno, responsive, SEO base. Nessuna fretta, comunicazione trasparente.',
    keywords: [
        'landing page senza stress',
        'landing page comunicazione trasparente',
        'landing page professionale',
        'landing page zero pressioni',
        'landing page Italia',
    ],
    openGraph: {
        title: 'Landing Page - Zero Stress, Zero Pressioni | Solo 347€',
        description: 'Inizia il tuo progetto senza stress. Design moderno, responsive, SEO inclusa. Comunicazione trasparente.',
        type: 'website',
        locale: 'it_IT',
        url: PAGE_URL,
        siteName: 'Manuel De Ceglie - Sviluppatore Web',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: PAGE_URL,
    },
}

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: 'Offerta Zero Stress Landing Page | 347€ tutto incluso',
            inLanguage: 'it-IT',
            description: 'Landing page professionale con consegna in 48 ore. Prezzo 347€ tutto incluso. Pagamento: 50% all’inizio, 50% alla consegna (dopo aver visto il risultato finale).',
        },
        {
            '@type': 'BreadcrumbList',
            '@id': `${PAGE_URL}#breadcrumb`,
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
                { '@type': 'ListItem', position: 2, name: 'Offerta Zero Stress', item: PAGE_URL },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Quanto costa la landing page?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Il prezzo è 347€ tutto incluso. Pagamento: 50% all’inizio e 50% alla consegna.' },
                },
                {
                    '@type': 'Question',
                    name: 'Quando pago il saldo?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Paghi il saldo alla consegna: prima vedrai il risultato finale e poi si procede.' },
                },
                {
                    '@type': 'Question',
                    name: 'In quanto tempo viene consegnata?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Consegna garantita in 48 ore lavorative dal pagamento dell’acconto.' },
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
            geo: { '@type': 'GeoCoordinates', latitude: 44.4347, longitude: 10.4053 },
        },
    ],
}

export default function OfferGaranziaLayout({
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
            <div className="offer-landing-page variant-garanzia">
            {children}
        </div>
        </>
    )
}
