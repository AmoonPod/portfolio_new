"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, PlayCircle, TrendingUp, ShoppingBag, Search, CheckCircle2, MapPin, AlertCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlurFade from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

export default function HeroSection() {
    return (
        <section className="relative py-16 overflow-hidden bg-[#FAFAFA]">

            {/* Background: Warm & Clean */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FFBC11]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Grid Texture */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none"></div>

            <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid xl:grid-cols-2 gap-10 xl:gap-20 items-center">

                    {/* --- LEFT: IL MESSAGGIO UMANO (Priorità Mobile) --- */}
                    <div className="flex flex-col justify-center text-center xl:text-left order-1">
                        <BlurFade delay={0.1}>

                            {/* Badge Personale */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm mb-6 mx-auto xl:mx-0 hover:scale-105 transition-transform cursor-default">
                                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-gray-100">
                                    <Image
                                        src={DATA.avatarUrl}
                                        alt="Manuel De Ceglie"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-sm font-bold text-gray-700">
                                    Ciao, sono Manuel 👋
                                </span>
                            </div>

                            {/* H1 Scalabile */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6 text-balance">
                                Realizzo siti web e software per chi vuole <span className="relative whitespace-nowrap text-[#FFBC11] inline-block">
                                    risultati concreti
                                    <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[#FFBC11] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
                                </span>
                            </h1>

                            {/* Sub-H1 Compatto */}
                            <div className="space-y-4 max-w-xl mx-auto xl:mx-0 mb-8">
                                <p className="text-base md:text-xl text-gray-600 font-medium leading-relaxed">
                                    Aiuto le aziende a Reggio-Emilia (e in tutta Italia) a trasformare il digitale da "spesa inutile" a motore di crescita.
                                </p>
                                <p className="text-sm md:text-lg text-gray-800 font-bold border-l-4 border-[#FFBC11] pl-4 text-left">
                                    Niente agenzie giganti, niente intermediari: parli direttamente con me.
                                </p>
                            </div>

                            {/* CTAs - Always Visible */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start">
                                <div className="relative group w-full sm:w-auto">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFBC11] to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                                    <Button
                                        size="lg"
                                        className="relative w-full sm:w-auto h-14 md:h-16 px-8 rounded-2xl font-bold text-lg shadow-xl hover:bg-[#0a0a0a]"
                                        asChild
                                    >
                                        <Link href="#contact">
                                            Analisi Gratuita
                                            <span className="bg-white/20 text-white text-xs py-0.5 px-2 rounded-md ml-2 md:ml-3 font-normal backdrop-blur-sm">15 min</span>
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-14 md:h-16 px-8 rounded-2xl border-2 border-[#25D366] hover:bg-[#25D366]/10 font-semibold text-base w-full sm:w-auto text-[#25D366] hover:text-[#25D366] transition-all gap-2"
                                    asChild
                                >
                                    <a
                                        href="https://wa.me/message/NUINS3YRUTA4O1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                        Scrivimi su WhatsApp
                                    </a>
                                </Button>
                            </div>

                            {/* Trust Micro-copy */}
                            <div className="mt-6 flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-2 text-xs md:text-sm text-gray-500 font-medium">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" /> Preventivi chiari</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" /> Zero intermediari</span>
                            </div>

                        </BlurFade>
                    </div>

                    {/* --- RIGHT: IL VISUAL (Adaptive) --- */}
                    <div className="hidden xl:flex relative w-full items-center justify-center order-2 perspective-1000">
                        {/* Altezza automatica su mobile, fissa su desktop */}
                        <BlurFade delay={0.3} className="relative w-full max-w-[480px] h-auto lg:h-[600px] flex items-center">

                            {/* 1. Main Card */}
                            <div className="relative w-full bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] border border-white/60 p-6 md:p-8 z-20 transform transition-transform hover:scale-[1.01] duration-500">

                                {/* Header Card */}
                                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg">
                                            P
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm md:text-lg">Il Pichello</div>
                                            <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">Report Mensile</div>
                                        </div>
                                    </div>
                                    <div className="bg-green-50 text-green-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" /> +900%
                                    </div>
                                </div>

                                {/* Graph Area */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-end mb-2">
                                        <div className="text-xs md:text-sm text-gray-500 font-medium">Visibilità Google</div>
                                        <div className="text-2xl md:text-4xl font-black text-[#FFBC11] tracking-tighter">+900%</div>
                                    </div>
                                    <div className="h-16 md:h-24 w-full flex items-end gap-1.5 md:gap-2">
                                        {[20, 35, 30, 50, 45, 60, 55, 80, 70, 90, 100].map((h, i) => (
                                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#FFBC11] rounded-t-sm opacity-20 last:opacity-100 last:bg-green-500 transition-all hover:opacity-100"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Stats */}
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-100">
                                        <div className="text-gray-400 text-[10px] font-bold uppercase mb-1 md:mb-2 tracking-wider">Nuovi Ordini</div>
                                        <div className="flex items-center gap-2">
                                            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
                                            <span className="text-base md:text-lg font-black text-gray-900">Ricorrenti</span>
                                        </div>
                                        <div className="text-[9px] md:text-[10px] text-green-600 font-medium mt-1">Da zero a costanti</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-100">
                                        <div className="text-gray-400 text-[10px] font-bold uppercase mb-1 md:mb-2 tracking-wider">Ranking</div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
                                            <span className="text-base md:text-lg font-black text-gray-900">1°</span>
                                        </div>
                                        <div className="text-[9px] md:text-[10px] text-green-600 font-medium mt-1">Su Google Maps</div>
                                    </div>
                                </div>

                            </div>

                            {/* Floating Badges - Modern Design */}
                            {/* Badge Prima - Dark card with subtle glow */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: -20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200 }}
                                className="absolute right-0 top-0 md:right-[-2rem] md:top-[-1.5rem] z-30 w-[160px] sm:w-[180px] md:w-[200px]"
                            >
                                <div className="relative group">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    {/* Card */}
                                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-4 md:p-5 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.6)]">
                                        {/* Icon */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                                                <AlertCircle className="w-4 h-4 text-red-400" />
                                            </div>
                                            <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Prima</span>
                                        </div>
                                        {/* Quote */}
                                        <p className="text-[11px] md:text-sm text-gray-200 leading-relaxed font-medium">
                                            "Il sito era invisibile. Ricevevo zero chiamate."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Badge Dopo - Bright card with yellow accent */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 200 }}
                                className="absolute left-0 bottom-0 md:left-[-2.5rem] md:bottom-[-1.5rem] z-30 w-[160px] sm:w-[180px] md:w-[220px]"
                            >
                                <div className="relative group">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFBC11]/30 to-[#FFBC11]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity"></div>
                                    {/* Card */}
                                    <div className="relative bg-white/95 backdrop-blur-md border-2 border-[#FFBC11]/40 rounded-3xl p-4 md:p-5 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(255,188,17,0.4)]">
                                        {/* Icon */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-[#FFBC11]/20 flex items-center justify-center border-2 border-[#FFBC11]">
                                                <Sparkles className="w-4 h-4 text-[#FFBC11]" />
                                            </div>
                                            <span className="text-[10px] md:text-xs text-[#FFBC11] font-black uppercase tracking-wider">Oggi</span>
                                        </div>
                                        {/* Quote */}
                                        <p className="text-[11px] md:text-sm text-gray-900 leading-relaxed font-bold">
                                            "Ordini automatici ogni settimana senza fare nulla."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative blob behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#FFBC11]/20 to-primary/10 rounded-full blur-[80px] -z-10"></div>

                        </BlurFade>
                    </div>

                </div>
            </div>
        </section >
    )
}