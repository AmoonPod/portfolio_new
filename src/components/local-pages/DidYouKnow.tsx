"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { Lightbulb, Timer, Smartphone, Search, Award, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import Link from "next/link"

interface DidYouKnowProps {
    cityName: string
    onCtaClick?: () => void
}

// Database delle Statistiche
const STATS_DB = [
    {
        id: "speed",
        percent: 53,
        symbol: "%",
        icon: Timer,
        color: "text-red-500",
        bg: "bg-red-500/10",
        question: "Vuoi differenziarti dalla concorrenza e raggiungere più clienti con un sito web veloce, reattivo e responsive?",
        cta: "Contattami ora",
        title: "La velocità non è un optional",
        description: "E' la percentuale degli utenti che abbandona un sito se ci mette più di 3 secondi a caricare. Se il tuo sito è lento, stai letteralmente regalando clienti alla concorrenza.",
        source: "Google Research"
    },
    {
        id: "mobile",
        percent: 74,
        symbol: "%",
        icon: Smartphone,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        question: "Non rientrare in questa statistica",
        cta: "Contattami ora",
        title: "Tutti hanno lo smartphone in mano",
        description: "Degli utenti tornerà sul tuo sito solo se è ottimizzato per mobile. Se devono 'pizzicare' lo schermo per leggere, se ne sono già andati.",
        source: "Web FX Report"
    },
    {
        id: "design",
        percent: 75,
        symbol: "%",
        icon: Award,
        color: "text-[#FFBC11]",
        bg: "bg-[#FFBC11]/10",
        title: "L'abito fa il monaco",
        description: "Delle persone giudica la credibilità della tua azienda basandosi solo sul design del sito web. Un sito brutto ti fa sembrare poco professionale.",
        question: "Non rientrare in questa statistica",
        cta: "Contattami ora",
        source: "Stanford Persuasion Tech Lab"
    },
    {
        id: "local",
        percent: 46,
        symbol: "%",
        icon: Search,
        color: "text-green-500",
        bg: "bg-green-500/10",
        title: "Cercano proprio te",
        description: "Di tutte le ricerche su Google hanno un intento locale (es. 'vicino a me'). Se non sei posizionato bene sulla mappa, per Google non esisti.",
        question: "Non rientrare in questa statistica",
        cta: "Contattami ora",
        source: "Social Media Today"
    }
]

export function DidYouKnowSection({ cityName, onCtaClick }: DidYouKnowProps) {
    // Seleziona la stat in base alla lunghezza del nome città (pseudo-random deterministico)
    // Così ogni città ha sempre la stessa stat, ma variano tra città diverse.
    const statIndex = cityName.length % STATS_DB.length
    const stat = STATS_DB[statIndex]

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // Animazione numero
    const springValue = useSpring(0, { bounce: 0, duration: 2000 })
    const displayValue = useTransform(springValue, (value) => Math.round(value))

    useEffect(() => {
        if (isInView) {
            springValue.set(stat.percent)
        }
    }, [isInView, stat.percent, springValue])

    const [currentValue, setCurrentValue] = useState(0)
    useEffect(() => {
        const unsubscribe = displayValue.on("change", (latest) => {
            setCurrentValue(latest)
        })
        return () => unsubscribe()
    }, [displayValue])

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className=" max-w-[1200px] mx-auto px-6 relative z-10">

                {/* Section Title */}
                <div className="text-center mb-16 md:mb-24">
                    <div className="flex items-center justify-center gap-3 text-muted-foreground font-medium leading-relaxed">
                        <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-[#FFBC11]" />
                        <span className="text-xl md:text-2xl">Lo sapevi che...</span>
                    </div>
                </div>

                <div ref={ref} className="relative group">
                    {/* Glow Effect Behind */}
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-r rounded-[3rem] blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700",
                        stat.id === 'speed' ? "from-red-500 to-orange-500" :
                            stat.id === 'mobile' ? "from-blue-500 to-cyan-500" :
                                stat.id === 'design' ? "from-[#FFBC11] to-orange-500" :
                                    "from-green-500 to-emerald-500"
                    )}></div>

                    <div className="relative bg-[#0f0f0f] rounded-[2.5rem] border border-white/10 p-8 md:p-14 overflow-hidden shadow-2xl">

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(-45deg,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

                            {/* LEFT: THE BIG NUMBER */}
                            <div className="relative shrink-0 flex flex-col items-center md:items-start">
                                <div className="flex items-start leading-none">
                                    <span className={cn(
                                        "text-[8rem] md:text-[10rem] font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 tabular-nums",
                                    )}>
                                        {currentValue}
                                    </span>
                                    <span className={cn("text-4xl md:text-6xl font-black mt-4 md:mt-8", stat.color)}>
                                        {stat.symbol}
                                    </span>
                                </div>
                                <div className={cn(
                                    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mt-2",
                                    stat.bg, stat.color
                                )}>
                                    <stat.icon className="w-4 h-4" />
                                    Statistica Verificata
                                </div>
                            </div>

                            {/* SEPARATOR (Desktop) */}
                            <div className="hidden md:block w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                            {/* RIGHT: THE INSIGHT */}
                            <div className="text-center md:text-left space-y-6">
                                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                    {stat.title}
                                </h3>

                                <p className="text-xl text-gray-400 leading-relaxed font-medium max-w-2xl">
                                    {stat.description}
                                </p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden group/cta hover:bg-white/10 transition-colors">
                                    <div className={cn("absolute top-0 left-0 w-1 h-full", stat.bg.replace('/10', ''))}></div>

                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="space-y-1 text-center md:text-left">
                                            <div className="text-sm font-bold text-white/50 uppercase tracking-wider">
                                                Non rientrare in questa statistica
                                            </div>
                                            <div className="text-xl font-bold text-white">
                                                {stat.question}
                                            </div>
                                        </div>

                                        <Button
                                            size="lg"
                                            onClick={onCtaClick ? onCtaClick : undefined}
                                            className={cn(
                                                "h-14 px-8 rounded-xl font-bold text-base shadow-xl transition-all hover:scale-105",
                                                "bg-white text-black hover:bg-white/90"
                                            )}
                                            asChild={!onCtaClick}
                                        >
                                            {onCtaClick ? (
                                                <span className="flex items-center">
                                                    {stat.cta}
                                                    <ArrowRight className="w-5 h-5 ml-2" />
                                                </span>
                                            ) : (
                                                <Link href="#contatti" className="flex items-center">
                                                    {stat.cta}
                                                    <ArrowRight className="w-5 h-5 ml-2" />
                                                </Link>
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-gray-600">
                                    <span>FONTE DATI:</span>
                                    <span className="text-gray-500 uppercase">{stat.source}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}