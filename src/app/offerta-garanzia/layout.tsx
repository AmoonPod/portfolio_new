import type { Metadata } from 'next'

const BASE_URL = 'https://manueldeceglie.it'

export const metadata: Metadata = {
    title: 'Landing Page 347€ - Zero Stress, Comunicazione Trasparente | Manuel De Ceglie',
    description: 'Inizia il tuo progetto oggi senza stress. Landing page professionale a 347€, design moderno, responsive, SEO base. Nessuna fretta, comunicazione trasparente.',
    keywords: [
        'landing page senza stress',
        'landing page comunicazione trasparente',
        'landing page professionale',
        'landing page zero pressioni',
        'landing page Modena',
        'landing page Bologna',
        'landing page Reggio Emilia',
        'landing page Emilia-Romagna',
    ],
    openGraph: {
        title: 'Landing Page - Zero Stress, Zero Pressioni | Solo 347€',
        description: 'Inizia il tuo progetto senza stress. Design moderno, responsive, SEO inclusa. Comunicazione trasparente.',
        type: 'website',
        locale: 'it_IT',
        url: `${BASE_URL}/offerta-garanzia`,
        siteName: 'Manuel De Ceglie - Sviluppatore Web',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `${BASE_URL}/offerta-garanzia`,
    },
}

export default function OfferGaranziaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="offer-landing-page variant-garanzia">
            {children}
        </div>
    )
}
