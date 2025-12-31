'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, Zap, CheckCircle2, Clock } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface OfferPopupProps {
    offer: {
        title: string
        description: string
        price: string
        badge?: string
    }
    cityName: string
}

export function OfferPopup({ offer, cityName }: OfferPopupProps) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true)
        }, 800)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[95vw] max-w-[480px] p-0 gap-0 overflow-hidden border-none shadow-2xl rounded-2xl sm:rounded-3xl">
                {/* Header con gradiente vibrante */}
                <div className="relative bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 p-6 sm:p-8 text-white overflow-hidden">
                    {/* Pattern di sfondo decorativo */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="offer-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#offer-pattern)" />
                        </svg>
                    </div>

                    {/* Effetti luce animati */}
                    <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-gradient-to-r from-white/0 via-white/20 to-white/0 rotate-12 blur-3xl animate-[shimmer-slide_4s_infinite_linear]"></div>

                    <DialogHeader className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between">
                            {offer.badge && (
                                <Badge className="bg-white text-orange-600 border-none shadow-lg text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1">
                                    {offer.badge}
                                </Badge>
                            )}
                            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold">
                                <Clock className="w-3 h-3 animate-pulse" />
                                <span>Offerta a tempo</span>
                            </div>
                        </div>

                        <DialogTitle className="text-2xl sm:text-4xl font-black leading-[1.1] tracking-tight text-left">
                            {offer.title}
                        </DialogTitle>

                        <DialogDescription className="text-white/90 text-sm sm:text-base font-medium text-left">
                            Esclusiva per le attività di <span className="text-white font-bold underline decoration-white/30 underline-offset-4">{cityName}</span>
                        </DialogDescription>
                    </DialogHeader>
                </div>

                {/* Corpo del popup */}
                <div className="p-5 sm:p-8 space-y-6 bg-white">
                    <div className="space-y-5">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                            {offer.description}
                        </p>

                        {/* Box Prezzo - Design Focalizzato */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 border border-gray-100 flex flex-col items-center justify-center gap-1">
                                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Investimento</span>
                                <div className="flex items-start">
                                    <span className="text-lg sm:text-xl font-bold text-orange-600 mt-1 mr-1">€</span>
                                    <span className="text-5xl sm:text-6xl font-black text-gray-900 tracking-tighter leading-none">
                                        {offer.price.replace('€', '')}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 mt-2 bg-orange-100 px-3 py-1 rounded-full">
                                    <CheckCircle2 className="w-3 h-3 text-orange-600" />
                                    <span className="text-[10px] sm:text-xs font-bold text-orange-700">Dominio e Hosting esclusi</span>
                                </div>
                            </div>
                        </div>

                        {/* Griglia Caratteristiche - Compatta e Leggibile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-2">
                            {[
                                "Sito 5 Pagine",
                                "SEO Locale",
                                "Mobile Ready",
                                "Certificato SSL",
                                "Assistenza Diretta"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                        <Zap className="w-3 h-3 text-orange-600 fill-orange-600" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Azioni */}
                    <div className="flex flex-col gap-3 pt-2">
                        <Button size="lg" className="w-full h-14 text-base sm:text-lg font-black bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all group" asChild>
                            <Link href="#contatti" onClick={() => setOpen(false)}>
                                Voglio questa offerta
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <button
                            className="w-full text-xs sm:text-sm font-bold text-gray-400 hover:text-gray-600 py-2 transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            No grazie, non mi interessa
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

