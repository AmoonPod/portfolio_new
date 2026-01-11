"use client"

import { X, Check, ArrowRight, AlertTriangle, Zap, Search, Smartphone } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { cn } from "@/lib/utils"

export default function EmpathySection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container max-w-[1200px] mx-auto px-6 relative z-10">

                {/* HEADER: Stretto, leggibile, impattante */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                        La dura verità sui siti web.
                    </h2>
                    <div className="text-xl text-gray-500 font-medium leading-relaxed space-y-6 max-w-2xl mx-auto text-balance">
                        <p>
                            Probabilmente ti è già capitato. Hai pagato per un sito, ti hanno promesso mari e monti, e ti sei ritrovato con una pagina che nessuno visita e impossibile da aggiornare.
                        </p>
                        <p>
                            C'è un abisso tra un sito "carino" e uno che porta fatturato.
                            La maggior parte delle agenzie ti vende il primo. <strong className="text-gray-900">Io costruisco il secondo.</strong>
                        </p>
                    </div>
                </div>

                {/* THE POWER CARD: Unico blocco denso */}
                <BlurFade delay={0.2}>
                    <div className="rounded-[3rem] border border-gray-200 overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                        {/* LEFT: THE TRAP (Il problema) - Grigio Chiaro */}
                        <div className="lg:w-[45%] bg-gray-50 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-gray-200">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-wide">
                                    Il solito "Sito Vetrina"
                                </h3>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Vertical Line for flow */}
                                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-200 -z-10"></div>

                                {[
                                    { title: "Lento da morire", desc: "Il cliente aspetta 3 secondi, si stufa e va dal concorrente. Hai perso un contatto." },
                                    { title: "Invisibile su Google", desc: "Un bel design che nessuno vede perché è sepolto a pagina 10 dei risultati." },
                                    { title: "Non porta contatti", desc: "Solo foto e 'chi siamo'. Nessun motivo per chiamarti o scriverti." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full bg-white border-2 border-red-100 flex items-center justify-center shrink-0 z-10">
                                            <X className="w-5 h-5 text-red-400 stroke-[3]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-4 bg-red-50 rounded-xl border border-red-100 text-red-700 text-sm font-bold text-center">
                                Risultato: Soldi spesi, zero ritorno.
                            </div>
                        </div>

                        {/* RIGHT: THE SOLUTION (La tua offerta) - Dark Premium */}
                        <div className="lg:w-[55%] bg-[#0a0a0a] text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-center">

                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFBC11]/10 rounded-full blur-[80px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-10 h-10 rounded-full bg-[#FFBC11] flex items-center justify-center text-black shadow-lg shadow-orange-500/20">
                                        <Zap className="w-5 h-5 fill-current" />
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-wide">
                                        Il mio Metodo
                                    </h3>
                                </div>

                                <div className="grid gap-5">
                                    {[
                                        {
                                            icon: Smartphone,
                                            title: "Mobile First Reale",
                                            desc: "Progettato per il pollice. Pulsanti grandi, niente zoom per leggere, navigazione facile come un'app."
                                        },
                                        {
                                            icon: Zap,
                                            title: "Velocità Istantanea",
                                            desc: "Caricamento immediato. Il cliente vede subito cosa offri prima che cambi idea."
                                        },
                                        {
                                            icon: Search,
                                            title: "Dominio su Google",
                                            desc: "Ottimizzato per farti trovare subito da chi cerca i tuoi servizi nella tua zona."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="group flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#FFBC11]/30 transition-all duration-300">
                                            <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FFBC11] shrink-0 group-hover:scale-110 transition-transform">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg mb-1 flex items-center gap-2">
                                                    {item.title}
                                                    <Check className="w-4 h-4 text-green-500 stroke-[4]" />
                                                </h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 flex items-center gap-4 text-sm font-normal text-white">
                                    <div className="h-px flex-1 bg-white/10"></div>
                                    <span className="text-center">Non è un costo. È un investimento che si ripaga.</span>
                                    <div className="h-px flex-1 bg-white/10"></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </BlurFade>

            </div>
        </section>
    )
}