import type { Metadata } from 'next'

const BASE_URL = 'https://manueldeceglie.it'

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
        url: `${BASE_URL}/offerta-rate`,
        siteName: 'Manuel De Ceglie - Sviluppatore Web',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `${BASE_URL}/offerta-rate`,
    },
}

export default function OfferRateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="offer-landing-page variant-rate">
            {children}
        </div>
    )
}
