"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Tag, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface Offer {
    id: string
    title: string
    price: string
    badge?: string
    active: boolean
    type: 'landing' | 'website'
}

interface OfferAlertBarProps {
    offers?: Offer[]
    cityName: string
    onClick: () => void
}

export function OfferAlertBar({ offers = [], cityName, onClick }: OfferAlertBarProps) {
    const [index, setIndex] = useState(0)

    // Filtra solo le offerte attive
    const activeOffers = offers.filter(o => o.active)
    
    // Se non ci sono offerte attive, non mostrare la barra
    if (activeOffers.length === 0) {
        return null
    }

    // Prendi la prima offerta attiva per i messaggi
    const firstOffer = activeOffers[0]

    // Messaggi che ruotano
    const messages = [
        {
            text: `Offerta esclusiva per ${cityName}`,
            icon: Sparkles,
            highlight: cityName
        },
        {
            text: `${firstOffer.title} a soli €${firstOffer.price}`,
            icon: Tag,
            highlight: `€${firstOffer.price}`
        },
        {
            text: "Offerta a tempo limitato - Clicca qui",
            icon: Clock,
            highlight: "Clicca qui"
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length)
        }, 3500) // Cambia ogni 3.5 secondi
        return () => clearInterval(timer)
    }, [])

    return (
        <button
            onClick={onClick}
            className="relative w-full h-10 md:h-12 bg-foreground text-background flex items-center justify-center overflow-hidden cursor-pointer group z-40 border-b border-white/10"
        >
            {/* Background Effect: Shimmer Animation */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer-slide_3s_infinite]" />

            {/* Content Rotation */}
            <div className="relative z-10 flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex items-center gap-2 md:gap-3"
                    >
                        {/* Dynamic Icon */}
                        <div className="text-[#FFBC11]">
                            {(() => {
                                const Icon = messages[index].icon
                                return <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            })()}
                        </div>

                        {/* Text with Highlight */}
                        <span>
                            {messages[index].text.split(messages[index].highlight)[0]}
                            <span className="text-[#FFBC11] font-bold">{messages[index].highlight}</span>
                            {messages[index].text.split(messages[index].highlight)[1]}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Arrow (Always visible on desktop, shows on hover mobile) */}
            <div className="absolute right-4 text-[#FFBC11] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hidden md:block">
                <ArrowRight className="w-4 h-4" />
            </div>
        </button>
    )
}