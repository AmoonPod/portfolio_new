'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const WHATSAPP_LINK = "https://wa.me/393505764958?text=Ciao%20Manuel!%20Voglio%20la%20mia%20landing%20page%20professionale%20in%2048%20ore.%20Sono%20pronto%20a%20iniziare!"

const FEATURES = [
    { icon: "✦", text: "Design personalizzato e moderno" },
    { icon: "✦", text: "100% responsive (mobile, tablet, desktop)" },
    { icon: "✦", text: "Form di contatto funzionante" },
    { icon: "✦", text: "Ottimizzazione SEO base" },
    { icon: "✦", text: "Setup hosting (se necessario)" },
    { icon: "✦", text: "1 revisione inclusa" },
    { icon: "✦", text: "Consegna garantita in 48 ore" }
]

const STEPS = [
    { number: "01", title: "Decidi", desc: "Clicca e inizia subito" },
    { number: "02", title: "Paga 173€", desc: "Solo metà oggi" },
    { number: "03", title: "Brief", desc: "15 min di call" },
    { number: "04", title: "Sviluppo", desc: "Pronta in 48 ore" },
    { number: "05", title: "Revisione", desc: "1 modifica inclusa" },
    { number: "06", title: "Saldo", desc: "174€ e vai online" }
]

const PORTFOLIO_ITEMS = [
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

const FAQ_ITEMS = [
    {
        question: "Quanto costa una landing page professionale?",
        answer: "Con questa offerta, la landing page costa 347€ totali, pagabili in 2 comode rate: 173€ oggi per iniziare e 174€ alla consegna. Nessun costo nascosto."
    },
    {
        question: "In quanto tempo viene consegnata?",
        answer: "La consegna è garantita in 48 ore lavorative dal pagamento dell'acconto. Riceverai una landing page completa, testata e pronta per andare online."
    },
    {
        question: "Lavori solo in una zona specifica o anche in altre città?",
        answer: "Lavoro con clienti in tutta Italia! Creo landing page per aziende in qualsiasi città. La comunicazione avviene via WhatsApp e videochiamate."
    },
    {
        question: "Cosa include esattamente il servizio?",
        answer: "Design personalizzato, layout 100% responsive, form di contatto funzionante, ottimizzazione SEO base, setup hosting se necessario, e 1 revisione inclusa nel prezzo."
    },
    {
        question: "Posso richiedere modifiche dopo la consegna?",
        answer: "Sì! Nel prezzo è inclusa 1 revisione gratuita dove potrai richiedere modifiche al design, ai testi o alla struttura. Revisioni aggiuntive sono quotate separatamente."
    }
]

function FloatingOrb({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "absolute rounded-full blur-3xl opacity-20 animate-blob pointer-events-none",
                className
            )}
            aria-hidden="true"
        />
    )
}

export default function OfferLandingPageC() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <main className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
            {/* Floating Background Orbs */}
            <FloatingOrb className="w-96 h-96 bg-amber-500 top-20 -left-48" />
            <FloatingOrb className="w-80 h-80 bg-orange-500 top-1/3 -right-40 animation-delay-2000" />
            <FloatingOrb className="w-64 h-64 bg-yellow-400 bottom-1/4 left-1/4 animation-delay-4000" />

            {/* H1 nascosto per SEO */}
            <h1 className="sr-only">Landing Page Professionale - Consegna 48 Ore - Paga in 2 Rate</h1>

            {/* Urgency Bar - "Ultimi 5 clienti in 48h" */}
            <div className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "translate-y-0" : "-translate-y-full"
            )} role="banner">
                <div className="bg-[#FFBC11] text-zinc-950 py-2 px-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
                        <span className="hidden sm:inline">⚡ Ultimi posti:</span>
                        <span className="font-bold">5 clienti nelle prossime 48h</span>
                        <span className="text-amber-800" aria-hidden="true">|</span>
                        <span>poi chiudo le richieste</span>
                        <Link
                            href={WHATSAPP_LINK}
                            className="ml-2 bg-zinc-950 text-[#FFBC11] px-3 py-1 rounded-full text-xs font-bold hover:bg-zinc-900 transition-colors"
                            aria-label="Voglio la mia landing page su WhatsApp"
                        >
                            Voglio la Mia →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 pt-8" aria-labelledby="hero-title">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Badge ACTION */}
                    <div className="inline-flex items-center gap-2 bg-[#FFBC11]/20 backdrop-blur-sm border border-[#FFBC11]/40 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 bg-[#FFBC11] rounded-full animate-pulse" aria-hidden="true" />
                        <span className="text-sm text-[#FFBC11] font-medium">Inizia oggi con solo 173€</span>
                    </div>

                    {/* Main Title */}
                    <p id="hero-title" className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6" role="heading" aria-level={2}>
                        <span className="text-white">La Tua </span>
                        <span className="text-[#FFBC11]">Landing Page</span>
                        <br />
                        <span className="text-white">è a </span>
                        <span className="relative inline-block">
                            <span className="text-[#FFBC11]">48 Ore</span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                                <path
                                    d="M2 10C50 4 150 4 198 10"
                                    stroke="#FFBC11"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <span className="text-white"> di distanza</span>
                    </p>

                    {/* Subtitle URGENTE */}
                    <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                        Non aspettare. La tua concorrenza sta già convertendo online.
                        <span className="text-white font-medium"> Unisciti ai numerosi clienti </span>
                        che hanno già scelto.
                    </p>

                    {/* Urgency Reminder */}
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" aria-hidden="true" />
                        <span className="text-sm text-red-400">
                            Accetto solo <span className="text-white font-semibold">5 nuovi clienti</span> nelle prossime 48 ore
                        </span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={WHATSAPP_LINK}
                            className="group relative inline-flex items-center gap-2 bg-[#FFBC11] hover:bg-amber-400 text-zinc-950 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,188,17,0.4)]"
                            aria-label="Voglio la mia landing page professionale"
                        >
                            <span>Voglio la Mia Landing</span>
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <a
                            href="#prezzo"
                            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                        >
                            <span>Vedi il prezzo</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>

                    {/* Trust Signals */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-zinc-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#FFBC11]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Paga in 2 rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#FFBC11]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>48 ore garantite</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#FFBC11]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>1 revisione inclusa</span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
                    <svg className="w-6 h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* What's Included Section con Pricing Action */}
            <section id="prezzo" className="relative py-24 px-4" aria-labelledby="features-title">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <div>
                            <span className="text-[#FFBC11] font-medium text-sm uppercase tracking-widest mb-4 block">
                                Cosa Ottieni
                            </span>
                            <h2 id="features-title" className="text-3xl sm:text-4xl font-bold mb-6">
                                Tutto quello che ti serve per
                                <span className="text-[#FFBC11]"> partire subito</span>
                            </h2>
                            <p className="text-zinc-400 mb-8">
                                Niente fronzoli, solo ciò che serve davvero per convertire. Una <strong>landing page professionale</strong>, veloce, ottimizzata per mobile e pronta a portarti clienti in tutta <strong>Italia</strong>.
                            </p>

                            <ul className="space-y-4" role="list">
                                {FEATURES.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-colors"
                                    >
                                        <span className="text-[#FFBC11]" aria-hidden="true">{feature.icon}</span>
                                        <span className="text-zinc-300">{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Price Card - VARIANT C - 2 RATE */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl" aria-hidden="true" />
                            <article className="relative bg-zinc-900/80 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8 sm:p-10">
                                {/* Badge */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="bg-[#FFBC11] text-zinc-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                        💳 Paga in 2 Rate
                                    </div>
                                </div>

                                <div className="text-center mb-8">
                                    <p className="text-zinc-500 text-sm mb-2">Inizia oggi con solo</p>
                                    <div className="flex flex-col items-center justify-center gap-1">
                                        <span className="text-5xl sm:text-6xl font-bold text-[#FFBC11]" aria-label="Prezzo 173 euro oggi">173€</span>
                                        <span className="text-lg text-zinc-400">+ 174€ alla consegna</span>
                                    </div>
                                    <div className="mt-3 inline-flex items-center gap-2 bg-zinc-800/50 rounded-full px-4 py-1">
                                        <span className="text-sm text-zinc-400">Totale:</span>
                                        <span className="text-sm text-white font-bold">347€</span>
                                    </div>
                                </div>

                                {/* Payment Info */}
                                <div className="bg-zinc-800/50 rounded-xl p-4 mb-8 space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-zinc-400">1ª rata (oggi)</span>
                                        <span className="text-white font-medium">173€</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-zinc-400">2ª rata (consegna)</span>
                                        <span className="text-white font-medium">174€</span>
                                    </div>
                                    <div className="border-t border-zinc-700 pt-2 flex items-center justify-between text-sm">
                                        <span className="text-zinc-400">Totale</span>
                                        <span className="text-[#FFBC11] font-bold">347€</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Link
                                    href={WHATSAPP_LINK}
                                    className="group flex items-center justify-center gap-2 w-full bg-[#FFBC11] hover:bg-amber-400 text-zinc-950 font-bold px-6 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,188,17,0.3)]"
                                    aria-label="Voglio la mia landing page su WhatsApp"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span>Voglio la Mia Landing</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>

                                <p className="text-center text-zinc-500 text-xs mt-4">
                                    Rispondo entro 2 ore • Nessun costo nascosto
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 px-4 bg-zinc-900/30" aria-labelledby="portfolio-title">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FFBC11] font-medium text-sm uppercase tracking-widest mb-4 block">
                            Risultati Reali
                        </span>
                        <h2 id="portfolio-title" className="text-3xl sm:text-4xl font-bold mb-4">
                            Alcuni dei miei <span className="text-[#FFBC11]">lavori recenti</span>
                        </h2>
                        <p className="text-zinc-400 max-w-xl mx-auto">
                            Questi sono clienti reali che hanno già scelto. E tu?
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {PORTFOLIO_ITEMS.map((item, index) => (
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
                </div>
            </section>

            {/* Chi Sono - Micro Section */}
            <section className="py-16 px-4" aria-labelledby="about-title">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8">
                        <div className="relative flex-shrink-0">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#FFBC11]/30">
                                <Image
                                    src="/manuel-de-ceglie-sviluppatore-web-modena.png"
                                    alt="Manuel De Ceglie - Sviluppatore Web e creatore di landing page professionali"
                                    width={112}
                                    height={112}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-[#FFBC11] rounded-full p-1.5">
                                <svg className="w-4 h-4 text-zinc-950" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h2 id="about-title" className="text-xl sm:text-2xl font-bold text-white mb-2">
                                Ciao, sono Manuel 👋
                            </h2>
                            <p className="text-zinc-400 leading-relaxed">
                                Sviluppatore web dall'Appennino Reggiano. Lavoro veloce, consegno in tempo, e i risultati parlano.
                                <strong className="text-white"> Decidi oggi, vai online domani.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="come-funziona" className="py-24 px-4 bg-zinc-900/30" aria-labelledby="steps-title">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FFBC11] font-medium text-sm uppercase tracking-widest mb-4 block">
                            Come Funziona
                        </span>
                        <h2 id="steps-title" className="text-3xl sm:text-4xl font-bold">
                            Da zero a online in <span className="text-[#FFBC11]">6 semplici step</span>
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent hidden md:block" aria-hidden="true" />

                        <ol className="grid grid-cols-2 md:grid-cols-6 gap-6" role="list">
                            {STEPS.map((step, index) => (
                                <li key={index} className="relative group">
                                    <div className="w-16 h-16 mx-auto mb-4 relative">
                                        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/40 transition-colors" aria-hidden="true" />
                                        <div className="relative w-full h-full bg-zinc-900 border border-amber-500/30 rounded-full flex items-center justify-center group-hover:border-[#FFBC11] transition-colors">
                                            <span className="text-[#FFBC11] font-bold text-sm">{step.number}</span>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                                        <p className="text-zinc-500 text-sm">{step.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4" aria-labelledby="faq-title">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FFBC11] font-medium text-sm uppercase tracking-widest mb-4 block">
                            Domande Frequenti
                        </span>
                        <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold">
                            Hai qualche <span className="text-[#FFBC11]">dubbio?</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {FAQ_ITEMS.map((faq, index) => (
                            <div key={index} className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800/50 transition-colors"
                                    aria-expanded={openFaq === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                                    <svg
                                        className={cn(
                                            "w-5 h-5 text-[#FFBC11] transition-transform flex-shrink-0",
                                            openFaq === index && "rotate-180"
                                        )}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    id={`faq-answer-${index}`}
                                    className={cn(
                                        "overflow-hidden transition-all duration-300",
                                        openFaq === index ? "max-h-96 pb-5" : "max-h-0"
                                    )}
                                    role="region"
                                >
                                    <p className="px-5 text-zinc-400">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-zinc-500 text-sm mt-8">
                        Hai altre domande? <Link href={WHATSAPP_LINK} className="text-[#FFBC11] hover:underline">Scrivimi su WhatsApp</Link>
                    </p>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 px-4 bg-zinc-900/30" aria-labelledby="cta-title">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl p-8 sm:p-12 border border-amber-500/20 overflow-hidden">
                        <div className="absolute inset-0 opacity-5" aria-hidden="true">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                backgroundSize: '32px 32px'
                            }} />
                        </div>

                        <div className="relative text-center">
                            <h2 id="cta-title" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                                Il momento è <span className="text-[#FFBC11]">adesso</span>
                            </h2>
                            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
                                Ogni giorno che aspetti è un giorno in cui la tua concorrenza sta convertendo online. <strong className="text-white">Inizia oggi con solo 173€.</strong>
                            </p>

                            {/* Urgency Reminder */}
                            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-8">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" aria-hidden="true" />
                                <span className="text-sm text-red-400">
                                    Solo <span className="text-white font-semibold">5 posti</span> disponibili
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href={WHATSAPP_LINK}
                                    className="group relative inline-flex items-center gap-3 bg-[#FFBC11] hover:bg-amber-400 text-zinc-950 font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,188,17,0.5)]"
                                    aria-label="Voglio la mia landing page adesso"
                                >
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span>Voglio la Mia Landing</span>
                                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
                                <svg className="w-4 h-4 text-[#FFBC11]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>Rispondo su WhatsApp entro 2 ore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-zinc-800" role="contentinfo">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-zinc-500 text-sm max-w-3xl mx-auto leading-relaxed">
                            <strong className="text-zinc-400">Manuel De Ceglie</strong> - Sviluppatore web freelance specializzato in landing page professionali per aziende e professionisti in tutta Italia.
                        </p>
                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-600 mb-6" aria-label="Footer navigation">
                        <Link href="/" className="hover:text-[#FFBC11] transition-colors">Home</Link>
                        <span aria-hidden="true">•</span>
                        <Link href="/siti-web" className="hover:text-[#FFBC11] transition-colors">Siti Web</Link>
                        <span aria-hidden="true">•</span>
                        <Link href="/casi-studio" className="hover:text-[#FFBC11] transition-colors">Casi Studio</Link>
                        <span aria-hidden="true">•</span>
                        <Link href="/privacy-policy" className="hover:text-[#FFBC11] transition-colors">Privacy Policy</Link>
                    </nav>

                    <div className="text-center text-zinc-700 text-xs space-y-1">
                        <p>© {new Date().getFullYear()} Manuel De Ceglie • P.IVA 04032610364</p>
                        <p>Offerta Rate - Paga in 2 Rate</p>
                    </div>
                </div>
            </footer>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent md:hidden z-40">
                <Link
                    href={WHATSAPP_LINK}
                    className="flex items-center justify-center gap-2 w-full bg-[#FFBC11] text-zinc-950 font-bold px-6 py-4 rounded-full text-lg shadow-[0_0_30px_rgba(255,188,17,0.3)]"
                    aria-label="Voglio la mia landing page"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Voglio la Mia</span>
                    <span className="text-amber-800" aria-hidden="true">•</span>
                    <span className="text-amber-900 font-black">173€</span>
                </Link>
            </div>
        </main>
    )
}
