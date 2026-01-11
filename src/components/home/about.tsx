"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, MessageCircle, Lock, Code2 } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { DATA } from "@/data/resume"

export default function AboutSection() {
    // Calcolo dinamico del mese corrente per la scarcity
    const currentMonth = new Date().toLocaleString('it-IT', { month: 'long' });
    const monthCapitalized = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">

            {/* Background: Minimal Tech Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center">

                    {/* --- LEFT: THE ARCHITECT (Visual Upgrade) --- */}
                    <BlurFade delay={0.2} className="relative mx-auto lg:mx-0 w-full max-w-sm">

                        {/* Tech Element Behind: Dots Pattern */}
                        <div className="absolute -top-8 -left-8 w-40 h-40 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}>
                        </div>

                        {/* Tech Element Behind: Code Icon Hint */}
                        <div className="absolute -bottom-6 -right-10 text-gray-100 transform rotate-12 -z-10">
                            <Code2 className="w-48 h-48" />
                        </div>

                        {/* Border Frame */}
                        <div className="absolute top-4 left-4 w-full h-full border-[3px] border-gray-100 rounded-[2rem] -z-10"></div>

                        {/* The Image: Clean & Sharp */}
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
                            <Image
                                src={DATA.avatarUrl}
                                alt="Manuel De Ceglie - Web Developer"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </BlurFade>

                    {/* --- RIGHT: THE STRATEGY (Hard Copy) --- */}
                    <div className="text-left max-w-lg"> {/* Allineamento ottico forzato */}
                        <BlurFade delay={0.3}>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-8 leading-[1]">
                                Non sono un'agenzia. <br />
                                Sono il tuo <span className="text-[#FFBC11] underline decoration-[6px] decoration-[#FFBC11]/40 underline-offset-4">vantaggio competitivo</span>.
                            </h2>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Hai presente quando chiami la "Web Agency" e ti risponde il commerciale, che passa la richiesta all'account manager, che la gira allo stagista?
                                    <br /><strong className="text-gray-900">Ecco, dimentica tutto.</strong>
                                </p>
                                <p>
                                    Io sono Manuel. Sono uno sviluppatore, non un venditore.
                                    Quando lavori con me, elimini il "telefono senza fili". Parli direttamente con chi scrive il codice e progetta la strategia.
                                </p>

                                {/* Box "Perché" potenziato */}
                                <div className="bg-gray-50 p-6 rounded-2xl border-l-[6px] border-[#FFBC11]">
                                    <p className="text-gray-900 font-bold mb-2 text-lg">Perché le aziende mi scelgono?</p>
                                    <p className="text-base leading-relaxed">
                                        Perché non ho uffici costosi o stipendi a vuoto da coprire.
                                        Investo tutto il mio tempo nel tuo progetto.
                                        Sono <span className="text-gray-900 font-bold bg-[#FFBC11]/20 px-1">ossessionato dalle performance</span>: se un sito è lento, non ci dormo la notte finché non vola.
                                    </p>
                                </div>

                                <p>
                                    Non cerco "clienti da spennare". Cerco imprenditori ambiziosi con cui costruire strumenti digitali che durano anni.
                                </p>
                            </div>

                            {/* THE REAL VALUES (Italiano Potente) */}
                            <div className="grid sm:grid-cols-3 gap-6 mt-10 mb-10">
                                {/* 1 */}
                                <div className="space-y-2">
                                    <div className="w-10 h-10 rounded-lg bg-[#FFBC11]/10 flex items-center justify-center text-[#FFBC11]">
                                        <Zap className="w-5 h-5 fill-current" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Velocità Maniacale</h4>
                                    <p className="text-xs text-gray-500 leading-snug">
                                        Ottimizzazione estrema. Niente caricamenti lenti.
                                    </p>
                                </div>
                                {/* 2 */}
                                <div className="space-y-2">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Filo Diretto</h4>
                                    <p className="text-xs text-gray-500 leading-snug">
                                        Nessun ticket system. Parli con me su WhatsApp.
                                    </p>
                                </div>
                                {/* 3 */}
                                <div className="space-y-2">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Codice Proprietario</h4>
                                    <p className="text-xs text-gray-500 leading-snug">
                                        Il sito è tuo al 100%. Nessun vincolo a vita.
                                    </p>
                                </div>
                            </div>

                            {/* CTA with REAL SCARCITY */}
                            <div className="flex flex-col gap-4 pt-2">
                                <Button size="lg" className="h-16 px-10 rounded-full font-bold text-lg bg-[#0a0a0a] text-white hover:bg-black/80 shadow-2xl hover:shadow-black/20 hover:-translate-y-1 transition-all w-full sm:w-fit" asChild>
                                    <Link href="#contact">
                                        Analisi Gratuita 15 min
                                        <ArrowRight className="w-5 h-5 ml-3" />
                                    </Link>
                                </Button>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    )
}