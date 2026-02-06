'use client';

import { useEffect, useState } from 'react';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { MessageCircle } from 'lucide-react';

interface NicheHubStickyBottomBarProps {
    nicheName: string;
    /** Testo corretto in italiano per la CTA, es. "il tuo e-commerce" o "i tuoi ristoranti" */
    ctaPhrase?: string;
    /** Testo per il messaggio WhatsApp, es. "e-commerce di libri" */
    labelForMessage?: string;
}

export function NicheHubStickyBottomBar({ nicheName, ctaPhrase, labelForMessage }: NicheHubStickyBottomBarProps) {
    const displayPhrase = ctaPhrase ?? nicheName.toLowerCase();
    const messageLabel = labelForMessage ?? nicheName.toLowerCase();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const threshold = 100;
            const scrollBottom = currentScrollY + windowHeight;
            const isNearBottom = scrollBottom >= (documentHeight - threshold);

            if (currentScrollY > 300 && !isNearBottom) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    if (!isVisible) return null;

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
                                    Vuoi un sito per {displayPhrase}?
                                </p>
                                <p className="text-xs text-gray-600">Rispondo entro 24 ore</p>
                            </div>
                        </div>
                        <WhatsAppButton
                            size="lg"
                            className="h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white border-0 font-bold shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105 shrink-0"
                            message={`Ciao Manuel! Vorrei informazioni per un sito web per ${messageLabel}.`}
                        >
                            Scrivimi
                        </WhatsAppButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NicheHubStickyBottomBar;

