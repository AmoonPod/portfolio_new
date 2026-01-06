"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight, Star, Zap, LayoutTemplate, Layers, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface Offer {
    id: string
    title: string
    description: string
    price: string
    badge?: string
    active: boolean
    type: 'landing' | 'website'
    features: string[]
}

interface ActiveOffersSectionProps {
    offers: Offer[]
    cityName: string
}

export function ActiveOffersSection({ offers, cityName }: ActiveOffersSectionProps) {
    // Filtriamo solo le offerte attive
    const activeOffers = offers.filter(o => o.active).sort((a, b) => {
        // Mettiamo prima Landing, poi Website
        return a.type === 'landing' ? -1 : 1
    })

    // Stato per il toggle mobile (se ci sono 2 offerte)
    const [mobileView, setMobileView] = useState<'landing' | 'website'>('website')

    if (activeOffers.length === 0) return null

    return (
        <section id="offerte-attive" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">

            {/* Background Decorativo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container max-w-[1200px] mx-auto px-6 relative z-10">

                {/* Header Sezione */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFBC11]/10 text-[#FFBC11] text-xs font-bold uppercase tracking-widest mb-6 border border-[#FFBC11]/20">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Promo {cityName}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-balance">
                        Scegli il livello di crescita per la tua attività
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium text-balance">
                        Soluzioni chiare, prezzi bloccati e tutto incluso. Nessuna sorpresa finale.
                    </p>
                </div>

                {/* MOBILE TOGGLE (Visibile solo su schermi piccoli e se ci sono 2 offerte) */}
                {activeOffers.length > 1 && (
                    <div className="md:hidden flex justify-center mb-8">
                        <div className="bg-white p-1 rounded-xl border border-border shadow-sm flex items-center">
                            <button
                                onClick={() => setMobileView('landing')}
                                className={cn(
                                    "px-6 py-2.5 rounded-lg text-sm font-bold transition-all",
                                    mobileView === 'landing' ? "bg-primary text-white shadow-md" : "text-muted-foreground"
                                )}
                            >
                                Landing Page
                            </button>
                            <button
                                onClick={() => setMobileView('website')}
                                className={cn(
                                    "px-6 py-2.5 rounded-lg text-sm font-bold transition-all",
                                    mobileView === 'website' ? "bg-primary text-white shadow-md" : "text-muted-foreground"
                                )}
                            >
                                Sito Completo
                            </button>
                        </div>
                    </div>
                )}

                {/* CARDS GRID */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {activeOffers.map((offer, index) => {
                        const isBestSeller = offer.type === 'website'
                        const isVisibleMobile = activeOffers.length === 1 || mobileView === offer.type

                        return (
                            <motion.div
                                key={offer.id}
                                id={`offerta-${offer.id}`} // Ancora per lo scroll
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "relative bg-white rounded-[2.5rem] border transition-all duration-300 flex flex-col h-full",
                                    // Logica visibilità mobile
                                    !isVisibleMobile && "hidden md:flex",
                                    // Stile Best Seller vs Standard
                                    isBestSeller
                                        ? "border-[#FFBC11] shadow-[0_20px_60px_-15px_rgba(255,188,17,0.15)] ring-1 ring-[#FFBC11]/20 scale-100 md:scale-[1.02] z-10"
                                        : "border-border shadow-lg hover:border-primary/20"
                                )}
                            >
                                {/* Badge Best Seller */}
                                {isBestSeller && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFBC11] text-primary px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap">
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        Più Scelto a {cityName}
                                    </div>
                                )}

                                <div className="p-8 md:p-10 flex-1 flex flex-col">

                                    {/* Header Card */}
                                    <div className="mb-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={cn(
                                                "w-12 h-12 rounded-2xl flex items-center justify-center",
                                                isBestSeller ? "bg-[#FFBC11]/20 text-primary" : "bg-muted text-muted-foreground"
                                            )}>
                                                {offer.type === 'landing' ? <LayoutTemplate className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
                                            </div>
                                            {offer.badge && !isBestSeller && (
                                                <span className="px-3 py-1 rounded-full bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                    {offer.badge}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-black text-foreground mb-2">{offer.title}</h3>
                                        <p className="text-muted-foreground text-sm font-medium leading-relaxed min-h-[40px]">
                                            {offer.description}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8 pb-8 border-b border-dashed border-border/60">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-muted-foreground">€</span>
                                            <span className="text-6xl font-black text-foreground tracking-tighter">
                                                {offer.price}
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground font-medium mt-2 uppercase tracking-wide">
                                            Pagamento Unico • Fattura Inclusa
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="flex-1 space-y-4 mb-10">
                                        <span className="text-xs font-bold uppercase text-muted-foreground tracking-widest block mb-4">
                                            Cosa è incluso:
                                        </span>
                                        {offer.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm font-medium text-foreground/80 group">
                                                <div className={cn(
                                                    "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                                    isBestSeller ? "bg-green-100 text-green-700 group-hover:bg-green-200" : "bg-muted text-muted-foreground group-hover:bg-muted/80"
                                                )}>
                                                    <Check className="w-3 h-3 stroke-[3]" />
                                                </div>
                                                <span className="leading-snug">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-auto pt-4">
                                        <Button
                                            size="lg"
                                            className={cn(
                                                "w-full h-14 rounded-xl font-bold text-base shadow-lg transition-all hover:-translate-y-1",
                                                isBestSeller
                                                    ? "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
                                                    : "bg-white border-2 border-primary text-primary hover:bg-primary/5"
                                            )}
                                            asChild
                                        >
                                            <Link href="#contatti">
                                                {isBestSeller ? "Voglio il Sito Completo" : "Inizia con la Landing"}
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </Link>
                                        </Button>

                                        {/* Tooltip Info */}
                                        <div className="mt-4 text-center">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger className="text-xs text-muted-foreground underline decoration-dashed underline-offset-4 hover:text-foreground transition-colors flex items-center justify-center gap-1 mx-auto">
                                                        <HelpCircle className="w-3 h-3" />
                                                        Cosa succede dopo il click?
                                                    </TooltipTrigger>
                                                    <TooltipContent className="max-w-xs">
                                                        <p>Compili il form in fondo alla pagina, ti richiamo entro 24h per confermare i dettagli e partiamo!</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}