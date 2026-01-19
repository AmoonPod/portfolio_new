import Link from 'next/link'
import Image from 'next/image'

export type SocialProofVariant = 'portfolio' | 'testimonial' | 'stats'

interface PortfolioItem {
    title: string
    category: string
    description: string
    image: string
    alt: string
    link: string
}

interface TestimonialItem {
    quote: string
    author: string
    role: string
    company: string
}

interface SocialProofProps {
    variant: SocialProofVariant
    portfolioItems?: PortfolioItem[]
    testimonials?: TestimonialItem[]
}

const DEFAULT_PORTFOLIO: PortfolioItem[] = [
    {
        title: "Agricola Il Pichello",
        category: "Sito Web + SEO Locale",
        description: "+900% traffico organico",
        image: "/poster_pichello.jpeg",
        alt: "Caso studio Il Pichello - Sito web con SEO locale a Reggio Emilia - +900% traffico organico",
        link: "/casi-studio/il-pichello"
    },
    {
        title: "Pure Heat",
        category: "Landing Page",
        description: "Biomasse e pellet",
        image: "/sito-web-vetrina-pure-heat.jpg",
        alt: "Landing page Pure Heat - Vendita biomasse e pellet - Design moderno e responsive",
        link: "https://www.purehe.at/"
    },
    {
        title: "Asset Plan UK",
        category: "Sito Vetrina Internazionale",
        description: "Gestione asset infrastrutturali",
        image: "/sito-web-asset-plan-framer.jpg",
        alt: "Sito web Asset Plan UK - Gestione asset infrastrutturali - Progetto internazionale",
        link: "https://www.assetplan.co.uk/"
    }
]

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
    {
        quote: "Manuel ha consegnato in tempo e il risultato ha superato le aspettative. Professionale e veloce.",
        author: "Marco R.",
        role: "Titolare",
        company: "Azienda Agricola"
    },
    {
        quote: "Finalmente qualcuno che capisce le esigenze di una PMI. Landing page perfetta, clienti in aumento.",
        author: "Laura B.",
        role: "Marketing Manager",
        company: "PMI Reggio Emilia"
    }
]

export function PortfolioGrid({ items = DEFAULT_PORTFOLIO }: { items?: PortfolioItem[] }) {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group block"
                    aria-label={`Vedi il progetto ${item.title} - ${item.category}`}
                >
                    <article className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#FFBC11]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(255,188,17,0.15)]">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority={index === 0}
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

                            {item.description.includes('+') && (
                                <div className="absolute top-4 right-4 bg-[#FFBC11] text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                                    {item.description}
                                </div>
                            )}
                        </div>

                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[#FFBC11] text-xs uppercase tracking-wider font-medium">{item.category}</span>
                                <svg className="w-4 h-4 text-zinc-600 group-hover:text-[#FFBC11] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-[#FFBC11] transition-colors">{item.title}</h3>
                            {!item.description.includes('+') && (
                                <p className="text-zinc-500 text-sm mt-1">{item.description}</p>
                            )}
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    )
}

export function TestimonialCards({ testimonials = DEFAULT_TESTIMONIALS }: { testimonials?: TestimonialItem[] }) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6"
                >
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-[#FFBC11]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-zinc-300 mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                        <p className="text-white font-semibold">{testimonial.author}</p>
                        <p className="text-zinc-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function StatsBar() {
    return (
        <div className="grid grid-cols-3 gap-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <div className="text-center">
                <p className="text-3xl font-bold text-[#FFBC11]">15+</p>
                <p className="text-zinc-500 text-sm">Progetti completati</p>
            </div>
            <div className="text-center border-x border-zinc-800">
                <p className="text-3xl font-bold text-[#FFBC11]">48h</p>
                <p className="text-zinc-500 text-sm">Tempo di consegna</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-[#FFBC11]">100%</p>
                <p className="text-zinc-500 text-sm">Clienti soddisfatti</p>
            </div>
        </div>
    )
}
