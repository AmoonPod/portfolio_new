import type { Metadata } from 'next'

const BASE_URL = 'https://manueldeceglie.it'
const PAGE_URL = `${BASE_URL}/offerta-rate`

export const metadata: Metadata = {
    title: 'Landing Page Professionale - Paga in 2 Rate | Solo 173€ Oggi | Manuel De Ceglie',
    description: 'Inizia oggi con solo 173€ e paga il resto alla consegna. Landing page professionale, design moderno, responsive, SEO base inclusa. Consegna garantita in 48 ore.',
    keywords: [
        'landing page rate',
        'landing page pagamento dilazionato',
        'landing page professionale',
        'landing page 48 ore',
        'landing page veloce',
        'landing page Modena',
        'landing page Bologna',
        'landing page Reggio Emilia',
        'landing page Emilia-Romagna',
    ],
    openGraph: {
        title: 'Landing Page - Inizia con Solo 173€ | Paga in 2 Rate',
        description: 'Vuoi la tua landing page? Inizia oggi con solo 173€. Design moderno, responsive, SEO inclusa. Consegna in 48 ore.',
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
            name: 'Offerta Landing Page a Rate | 173€ Oggi + 174€ alla consegna',
            inLanguage: 'it-IT',
            description: 'Landing page professionale con consegna in 48 ore. Inizia oggi con 173€ e paga 174€ alla consegna.',
        },
        {
            '@type': 'BreadcrumbList',
            '@id': `${PAGE_URL}#breadcrumb`,
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
                { '@type': 'ListItem', position: 2, name: 'Offerta Rate', item: PAGE_URL },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Quanto pago oggi per iniziare?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Oggi paghi 173€ per iniziare. Il saldo di 174€ è alla consegna.' },
                },
                {
                    '@type': 'Question',
                    name: 'In quanto tempo viene consegnata?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Consegna garantita in 48 ore lavorative dal pagamento dell’acconto.' },
                },
                {
                    '@type': 'Question',
                    name: 'Cosa include il servizio?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Design moderno, 100% responsive, form contatto, SEO base, setup hosting se necessario e 1 revisione inclusa.' },
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

export default function OfferRateLayout({
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
            <div className="offer-landing-page variant-rate">
                {children}
            </div>
        </>
    )
}
