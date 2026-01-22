'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getNicheConfig, NicheCategory } from '@/data/niches-config'

interface NicheLinksSectionProps {
    cityName: string
    citySlug: string
    nicheLinks: Array<{ slug: string; name: string }>
}

// Icone per categoria
const categoryIcons: Record<NicheCategory, string> = {
    'Food & Hospitality': '🍽️',
    'Beauty & Wellness': '💅',
    'Creative': '📸',
    'Agriculture': '🌾',
}


export function NicheLinksSection({ cityName, citySlug, nicheLinks }: NicheLinksSectionProps) {
    // Debug: log per verificare i dati ricevuti
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        console.log('NicheLinksSection - cityName:', cityName, 'nicheLinks:', nicheLinks)
    }

    if (!nicheLinks || nicheLinks.length === 0) {
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
            console.log('NicheLinksSection - No niche links found for', cityName)
        }
        return null
    }

    // Rimuoviamo il raggruppamento per categoria per semplificare

    return (
        <section className="py-12 bg-gray-50 border-y border-gray-200">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header - Compatto */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-2">
                        Soluzioni per Settori Specifici a <span className="text-[#FFBC11]">{cityName}</span>
                    </h2>
                    <p className="text-sm text-gray-600">
                        Siti web ottimizzati per il tuo settore professionale
                    </p>
                </div>

                {/* Niches Grid - Compatto, senza raggruppamento per categoria */}
                <div className="flex flex-wrap gap-2">
                    {nicheLinks.map((niche) => {
                        const config = getNicheConfig(niche.slug)
                        const icon = config ? categoryIcons[config.category] : '🔧'

                        return (
                            <Link
                                key={niche.slug}
                                href={`/siti-web/${citySlug}/${niche.slug}`}
                                className="group inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-[#FFBC11] hover:bg-[#FFBC11]/5 transition-all duration-200"
                            >
                                <span className="text-base">{icon}</span>
                                <span className="text-sm font-bold text-gray-900 group-hover:text-[#FFBC11] transition-colors">
                                    {niche.name}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FFBC11] group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
