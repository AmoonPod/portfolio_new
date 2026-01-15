"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, ShoppingBag, MapPin, LineChart, Bell, CreditCard } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"

export default function CaseStudySection() {
    return (
        <section id="case-study" className="py-24 md:py-32 bg-[#F9FAFB] text-foreground relative overflow-hidden">

            {/* Background Decorativo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#FFBC11]/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* --- LEFT: LA STORIA (Business Copy) --- */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <BlurFade delay={0.2}>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100 mb-6">
                                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                                Caso Studio Verificato
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] text-gray-900">
                                Non credere alle mie parole. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E4F2F] to-green-600">
                                    Guarda i numeri.
                                </span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Prendi il caso de <strong>"Il Pichello"</strong>.
                                </p>
                                <p>
                                    Avevano un sito che non convertiva. Ci siamo seduti a tavolino, abbiamo analizzato il problema e ho ricostruito la loro presenza online da zero.
                                </p>
                                <p>
                                    Il risultato? <br />
                                    Non solo traffico. Ma <span className="text-gray-900 font-bold bg-green-100/50 px-1">+900% di Clienti Interessati</span> che arrivano da Google pronti a comprare.
                                </p>
                                <p className="text-gray-900 font-bold border-l-4 border-[#FFBC11] pl-4 italic text-xl">
                                    "Quando lavori con me, i grafici servono solo a confermare quello che vedi già dal tuo conto in banca."
                                </p>
                            </div>

                            <div className="pt-6 flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="h-14 px-8 rounded-xl font-bold bg-[#0a0a0a] text-white hover:bg-black/80 shadow-xl group" asChild>
                                    <Link href="#contact">
                                        Analisi Gratuita 15 min
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl font-bold border-2 border-green-600/30 text-green-800 hover:bg-green-50 hover:border-green-600/50 group" asChild>
                                    <Link href="/casi-studio/il-pichello">
                                        Leggi il Caso Studio
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </BlurFade>
                    </div>

                    {/* --- RIGHT: LA PROVA (Business Intelligence Visual) --- */}
                    <div className="order-1 lg:order-2 relative">
                        <BlurFade delay={0.4}>

                            {/* Dashboard Card */}
                            <div className="relative bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 p-8 md:p-10 overflow-visible transform hover:scale-[1.01] transition-transform duration-500 z-10">

                                {/* Header Dashboard */}
                                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                                    <div>
                                        <div className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Report Vendite</div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-black text-gray-800 uppercase tracking-wide">CRESCITA VISIBILITÀ & ORDINI</span>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                        <LineChart className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Main Metric */}
                                <div className="flex items-end gap-4 mb-10">
                                    <div>
                                        <div className="text-sm text-gray-500 font-medium mb-1">Traffico Qualificato</div>
                                        <div className="text-5xl font-black text-gray-900 tracking-tighter">12.4K</div>
                                    </div>
                                    <div className="mb-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 border border-green-200">
                                        <TrendingUp className="w-4 h-4 stroke-[3]" /> +900%
                                    </div>
                                </div>

                                {/* THE GRAPH AREA with FLOATING BIZ METRICS */}
                                <div className="relative h-56 w-full">

                                    {/* Grid Lines Background */}
                                    <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 z-0">
                                        <div className="border-b border-dashed border-gray-100 w-full h-0"></div>
                                        <div className="border-b border-dashed border-gray-100 w-full h-0"></div>
                                        <div className="border-b border-dashed border-gray-100 w-full h-0"></div>
                                        <div className="border-b border-dashed border-gray-100 w-full h-0"></div>
                                    </div>

                                    {/* The Line Graph (Subtle background) */}
                                    <svg className="absolute inset-0 w-full h-full overflow-visible z-0 opacity-50" preserveAspectRatio="none" viewBox="0 0 100 50">
                                        <defs>
                                            <linearGradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,50 L0,45 Q10,45 20,43 T40,35 T60,20 T80,10 L100,2 L100,50 Z" fill="url(#gradientArea)" />
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            d="M0,45 Q10,45 20,43 T40,35 T60,20 T80,10 L100,2"
                                            fill="none"
                                            stroke="#16a34a"
                                            strokeWidth="2"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    </svg>

                                    {/* --- FLOATING BOX 1: ORDINI (Money Focus) --- */}
                                    <motion.div
                                        initial={{ scale: 0, y: 20 }}
                                        whileInView={{ scale: 1, y: 0 }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        className="absolute top-0 left-4 bg-white p-3 rounded-xl shadow-xl border border-green-100 flex items-center gap-3 z-10"
                                    >
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                                            <ShoppingBag className="w-5 h-5 fill-green-700/20" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ordini dal Sito</div>
                                            <div className="text-sm font-black text-green-700">Ricorrenti</div>
                                        </div>
                                    </motion.div>

                                    {/* --- FLOATING BOX 2: STORE (Footfall Focus) --- */}
                                    <motion.div
                                        initial={{ scale: 0, y: 20 }}
                                        whileInView={{ scale: 1, y: 0 }}
                                        transition={{ delay: 0.8, type: "spring" }}
                                        className="absolute bottom-8 right-0 bg-white p-3 rounded-xl shadow-xl border border-blue-100 flex items-center gap-3 z-10"
                                    >
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                                            <MapPin className="w-5 h-5 fill-blue-700/20" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Clienti in Negozio</div>
                                            <div className="text-sm font-black text-blue-700">+300%</div>
                                        </div>
                                    </motion.div>

                                </div>

                            </div>

                            {/* --- THE HERO NOTIFICATION (Push Notification Style) --- */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                                className="absolute -bottom-8 -right-4 md:-right-12 w-72 bg-white p-4 rounded-2xl shadow-2xl border-l-4 border-[#FFBC11] z-30"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                                        <CreditCard className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs font-bold text-gray-900">Nuovo Ordine</span>
                                            <span className="text-[10px] text-gray-400">Adesso</span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-600 leading-tight">
                                            Hai ricevuto un pagamento di <span className="font-bold text-green-600">€ 145,00</span> dal sito web.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                        </BlurFade>
                    </div>

                </div>
            </div>
        </section>
    )
}