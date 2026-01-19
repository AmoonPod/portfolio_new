import type { Metadata } from 'next'

const BASE_URL = 'https://manueldeceglie.it'

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
        'landing page Modena',
        'landing page Bologna',
        'landing page Reggio Emilia',
        'landing page Emilia-Romagna',
    ],
    openGraph: {
        title: 'Preventivo Gratuito Landing Page | Risparmi 250€ | Solo 347€',
        description: 'Richiedi un preventivo gratuito senza impegno. Design moderno, responsive, SEO inclusa. Consegna in 48 ore garantita.',
        type: 'website',
        locale: 'it_IT',
        url: `${BASE_URL}/offerta-preventivo`,
        siteName: 'Manuel De Ceglie - Sviluppatore Web',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `${BASE_URL}/offerta-preventivo`,
    },
}

export default function OfferPreventivoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="offer-landing-page variant-preventivo">
            {children}
        </div>
    )
}
