'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Sparkles, X, LayoutTemplate, Layers } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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

interface OfferPopupProps {
    offers?: Offer[] // Array di offerte attive
    cityName: string
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
}

export function OfferPopup({ offers = [], cityName, isOpen, onOpenChange }: OfferPopupProps) {
    const [internalOpen, setInternalOpen] = useState(false)

    // Filtra solo le offerte attive e ordina per tipo (landing prima, website dopo)
    const activeOffers = offers.filter(o => o.active).sort((a, b) => {
        if (a.type === 'landing' && b.type === 'website') return -1
        if (a.type === 'website' && b.type === 'landing') return 1
        return 0
    })

    const [activeTab, setActiveTab] = useState<string>(activeOffers[0]?.id || '')

    const isControlled = typeof isOpen !== 'undefined'
    const open = isControlled ? isOpen : internalOpen
    const setOpen = isControlled ? onOpenChange! : setInternalOpen

    // Dati del pacchetto attivo
    const currentOffer = activeOffers.find(o => o.id === activeTab) || activeOffers[0]

    // Se non ci sono offerte attive, non mostrare il popup
    if (!currentOffer || activeOffers.length === 0) {
        return null
    }

    // Icone per tipo
    const typeIcons = {
        landing: LayoutTemplate,
        website: Layers
    }

    // Label per tipo
    const typeLabels = {
        landing: 'Landing Page',
        website: 'Sito Web'
    }

    // Subtitle per tipo
    const typeSubtitles = {
        landing: 'Pagina Unica',
        website: 'Multi-Pagina'
    }

    // Mostra solo le prime 3 features
    const displayFeatures = currentOffer.features.slice(0, 3)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[90vw] max-w-[420px] p-0 border-none shadow-2xl bg-transparent overflow-visible">
                <DialogTitle className="sr-only">Scegli la tua Offerta</DialogTitle>

                {/* Glow Effect posteriore che cambia colore in base al tab? Teniamolo giallo per coerenza brand */}
                <div className="absolute inset-0 bg-[#FFBC11] opacity-20 blur-[60px] rounded-full pointer-events-none z-[-1]"></div>

                <div className="relative bg-white rounded-[2.5rem] overflow-hidden border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5">

                    {/* Header con TABS */}
                    <div className="relative bg-muted/30 pt-6 pb-12 px-6 overflow-hidden">
                        {/* Decorative Patterns */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                        {/* City Badge */}
                        <div className="relative z-10 flex justify-center mb-5">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border/50 text-foreground text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                <Sparkles className="w-3 h-3 text-[#FFBC11]" />
                                {cityName} Edition
                            </div>
                        </div>

                        {/* Custom Animated Tabs */}
                        {activeOffers.length > 1 && (
                            <div className="relative z-10 grid p-1 bg-gray-200/50 rounded-2xl border border-white/50 shadow-inner" style={{ gridTemplateColumns: `repeat(${activeOffers.length}, 1fr)` }}>
                                {activeOffers.map((offer) => {
                                    const Icon = typeIcons[offer.type]
                                    return (
                                        <button
                                            key={offer.id}
                                            onClick={() => setActiveTab(offer.id)}
                                            className={cn(
                                                "relative py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-300 z-10 flex items-center justify-center gap-2",
                                                activeTab === offer.id ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
                                            )}
                                        >
                                            {activeTab === offer.id && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-black/5"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <span className="relative z-10">{typeLabels[offer.type]}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </div>

                    {/* Body: The Content */}
                    <div className="px-8 pb-8 -mt-6 relative z-20 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">



                        <div className="text-center space-y-6 pt-8">

                            {/* Price Transition */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative py-2"
                                >
                                    {currentOffer.badge && (
                                        <span className="inline-block text-[10px] font-bold text-[#FFBC11] uppercase tracking-widest mb-2 px-2 py-1 bg-[#FFBC11]/10 rounded-full">
                                            {currentOffer.badge}
                                        </span>
                                    )}
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 block">
                                        {typeSubtitles[currentOffer.type]}
                                    </span>
                                    <div className="flex items-start justify-center text-foreground scale-110 origin-center">
                                        <span className="text-2xl font-bold mt-2 mr-1 text-primary">€</span>
                                        <span className="text-7xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/80">
                                            {currentOffer.price}
                                        </span>
                                    </div>

                                </motion.div>
                            </AnimatePresence>

                            {/* Features Stack - Solo prime 3 */}
                            <div className="bg-muted/30 rounded-2xl p-5 border border-border/50 space-y-3">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab + "-features"}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {displayFeatures.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                                                <div className="w-5 h-5 rounded-full bg-[#FFBC11] flex items-center justify-center shrink-0 shadow-sm">
                                                    <Check className="w-3 h-3 text-black stroke-[3]" />
                                                </div>
                                                <span className="text-sm font-medium text-left flex-1">{item}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* CTAs */}
                            <div className="space-y-3">
                                <Button
                                    size="lg"
                                    className="w-full h-14 rounded-xl text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all bg-primary text-white"
                                    asChild
                                >
                                    <Link href="#contatti" onClick={() => setOpen(false)}>
                                        Blocca il prezzo a €{currentOffer.price}
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full h-12 rounded-xl text-base font-medium"
                                    asChild
                                >
                                    <Link href={`#offerta-${currentOffer.id}`} onClick={() => setOpen(false)}>
                                        Scopri di più
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}