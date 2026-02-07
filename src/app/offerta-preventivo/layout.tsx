import type { Metadata } from 'next'

const BASE_URL = 'https://manueldeceglie.it'
const PAGE_URL = `${BASE_URL}/offerta-preventivo`

export const metadata: Metadata = {
    title: 'Landing Page 347€ - Preventivo Gratuito Senza Impegno | Manuel De Ceglie',
    description: 'Richiedi un preventivo gratuito per la tua landing page professionale. Design moderno, responsive, SEO base. Solo 347€ invece di 597€. Risparmi 250€. Consegna in 48 ore.',
    keywords: [
        'preventivo landing page gratuito',
        'landing page preventivo',
        'landing page senza impegno',
        'landing page professionale',
        'landing page 48 ore',
        'landing page economica',
        'landing page Italia',
    ],
    openGraph: {
        title: 'Preventivo Gratuito Landing Page | Risparmi 250€ | Solo 347€',
        description: 'Richiedi un preventivo gratuito senza impegno. Design moderno, responsive, SEO inclusa. Consegna in 48 ore garantita.',
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
            name: 'Preventivo Gratuito Landing Page | Offerta 347€',
            inLanguage: 'it-IT',
            description: 'Richiedi un preventivo gratuito per una landing page professionale. Prezzo 347€ tutto incluso. Consegna in 48 ore.',
        },
        {
            '@type': 'BreadcrumbList',
            '@id': `${PAGE_URL}#breadcrumb`,
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
                { '@type': 'ListItem', position: 2, name: 'Offerta Preventivo', item: PAGE_URL },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Quanto costa la landing page?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Il prezzo è 347€ tutto incluso. Pagamento: 50% all’inizio e 50% alla consegna.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'In quanto tempo viene consegnata?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Consegna garantita in 48 ore lavorative dal pagamento dell’acconto.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Il preventivo è davvero gratuito?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Sì: ti rispondo su WhatsApp con una proposta chiara e senza impegno.',
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
            geo: { '@type': 'GeoCoordinates', latitude: 44.4347, longitude: 10.4053 },
        },
    ],
}

export default function OfferPreventivoLayout({
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
            <div className="offer-landing-page variant-preventivo">
            {children}
        </div>
        </>
    )
}
