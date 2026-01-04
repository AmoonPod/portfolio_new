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

interface OfferPopupProps {
    offer?: any // Lo rendiamo opzionale perché usiamo dati interni per i tab
    cityName: string
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
}

// Definiamo i due pacchetti fissi come richiesto
const PACKAGES = {
    landing: {
        id: 'landing',
        label: 'Landing Page',
        icon: LayoutTemplate,
        price: '499',
        subtitle: 'Pagina Unica',
        description: 'Ideale per campagne e promozioni specifiche.',
        features: [
            "Design One-Page a conversione",
            "Copywriting persuasivo base",
            "Consegna rapida in 7gg"
        ]
    },
    website: {
        id: 'website',
        label: 'Sito Web',
        icon: Layers,
        price: '799',
        subtitle: 'Multi-Pagina',
        description: 'La vetrina completa per la tua attività.',
        features: [
            "Design Completo Multi-Page",
            "Ottimizzazione SEO Base",
            "Ottimizzazione Mobile",
        ]
    }
}

export function OfferPopup({ cityName, isOpen, onOpenChange }: OfferPopupProps) {
    const [internalOpen, setInternalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<'landing' | 'website'>('website') // Default sul sito completo

    const isControlled = typeof isOpen !== 'undefined'
    const open = isControlled ? isOpen : internalOpen
    const setOpen = isControlled ? onOpenChange! : setInternalOpen

    // Dati del pacchetto attivo
    const currentPkg = PACKAGES[activeTab]

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
                        <div className="relative z-10 grid grid-cols-2 p-1 bg-gray-200/50 rounded-2xl border border-white/50 shadow-inner">
                            {(['landing', 'website'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "relative py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-300 z-10 flex items-center justify-center gap-2",
                                        activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
                                    )}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-white rounded-xl shadow-sm border border-black/5"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{PACKAGES[tab].label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Body: The Content */}
                    <div className="px-8 pb-8 -mt-6 relative z-20 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">

                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-gray-100 rounded-full transition-all"
                        >
                            <X className="w-4 h-4" />
                        </button>

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
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 block">
                                        {currentPkg.subtitle}
                                    </span>
                                    <div className="flex items-start justify-center text-foreground scale-110 origin-center">
                                        <span className="text-2xl font-bold mt-2 mr-1 text-primary">€</span>
                                        <span className="text-7xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/80">
                                            {currentPkg.price}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2 max-w-[200px] mx-auto leading-relaxed">
                                        {currentPkg.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Features Stack */}
                            <div className="bg-muted/30 rounded-2xl p-5 border border-border/50 space-y-3">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab + "-features"}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {currentPkg.features.map((item, i) => (
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

                            {/* Main CTA */}
                            <Button
                                size="lg"
                                className="w-full h-14 rounded-xl text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all bg-primary text-white"
                                asChild
                            >
                                <Link href="#contatti" onClick={() => setOpen(false)}>
                                    Blocca il prezzo a {currentPkg.price}€
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>

                            <div className="text-[10px] text-muted-foreground text-center">
                                Offerta limitata per {cityName}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}