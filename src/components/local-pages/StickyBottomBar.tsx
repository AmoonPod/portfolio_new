'use client'

import { useEffect, useState } from 'react'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { MessageCircle } from 'lucide-react'

interface StickyBottomBarProps {
    cityName: string
    serviceName?: string
}

export function StickyBottomBar({ cityName, serviceName }: StickyBottomBarProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            // Calcola se siamo vicini al fondo (considerando anche l'altezza della barra sticky)
            // Usiamo una soglia di 400px per essere sicuri che il footer sia visibile
            const threshold = 100
            const scrollBottom = currentScrollY + windowHeight
            const isNearBottom = scrollBottom >= (documentHeight - threshold)

            // Mostra la barra quando:
            // 1. Lo scroll è maggiore di 300px (non in cima)
            // 2. NON siamo vicini al fondo della pagina
            if (currentScrollY > 300 && !isNearBottom) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        // Controlla anche al resize per gestire cambi di altezza
        window.addEventListener('resize', handleScroll, { passive: true })
        // Controlla iniziale
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 animate-in slide-in-from-bottom duration-300">
            <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                <div className="container max-w-[1200px] mx-auto px-4 py-3">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-[#FFBC11] flex items-center justify-center shrink-0">
                                <MessageCircle className="w-5 h-5 text-black" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">
                                    Scrivimi per un preventivo gratuito
                                </p>
                                <p className="text-xs text-gray-600">Rispondo entro 24 ore</p>
                            </div>
                        </div>
                        <WhatsAppButton
                            size="lg"
                            className="h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white border-0 font-bold shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105 shrink-0"
                            message={`Ciao Manuel! Scrivo da ${cityName}, vorrei info sui servizi.`}
                        >
                            Scrivimi
                        </WhatsAppButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
