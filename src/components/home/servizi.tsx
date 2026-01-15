"use client"

import Link from "next/link"
import {
    ArrowRight,
    MonitorSmartphone,
    Database,
    Bot,
    Code2,
    TableProperties,
    Search
} from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">

            {/* Background Decorativo */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="container max-w-[1200px] mx-auto px-6 relative z-10">

                {/* HEADER: Dichiarazione d'Intenti */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <BlurFade delay={0.1}>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#FFBC11] mb-3 block">
                            Cosa so fare (Bene)
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6 leading-[1.1]">
                            Ho scelto di concentrarmi su, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">tre aree specifiche</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed text-balance">
                            Non faccio "tutto per tutti". Mi concentro su tre aree specifiche dove posso garantirti un vantaggio competitivo reale.
                        </p>
                    </BlurFade>
                </div>

                {/* SERVICES GRID */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* SERVICE 1: WEB PERFORMANCE */}
                    <BlurFade delay={0.2} className="h-full">
                        <div className="group relative h-full bg-white rounded-[2.5rem] border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:border-[#FFBC11]/30 transition-all duration-500 flex flex-col overflow-hidden">

                            {/* Visual Icon */}
                            <div className="w-16 h-16 bg-[#FFBC11]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <MonitorSmartphone className="w-8 h-8 text-[#FFBC11]" />
                            </div>

                            <h3 className="text-2xl font-black text-gray-900 mb-2">
                                Sviluppo Web <br /> Performance-First
                            </h3>

                            <div className="w-12 h-1 bg-[#FFBC11] rounded-full mb-6"></div>

                            <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                                Non uso costruttori visuali pesanti che impallano il browser. Scrivo codice su misura progettato per piacere a Google.
                                Risultato? Un <Link href="/siti-web" className="text-gray-900 font-bold hover:text-[#FFBC11] transition-colors underline decoration-[#FFBC11]/30 underline-offset-2">sito web</Link> che carica in un lampo, scala le classifiche di ricerca e converte i visitatori in clienti paganti.</p>

                            {/* Target Badge */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
                                    <Code2 className="w-3 h-3" /> Ideale per:
                                </div>
                                <div className="text-sm font-bold text-gray-900">
                                    Aziende locali, Ristorazione, Professionisti.
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Link href="/siti-web" className="inline-flex items-center text-sm font-black uppercase tracking-wider text-gray-900 group-hover:text-purple-600 transition-colors">
                                    Scopri di più <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </BlurFade>

                    {/* SERVICE 2: SOFTWARE & CRM */}
                    <BlurFade delay={0.3} className="h-full">
                        <div className="group relative h-full bg-[#0a0a0a] text-white rounded-[2.5rem] border border-gray-800 p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col overflow-hidden">

                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Visual Icon */}
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <Database className="w-8 h-8 text-blue-500" />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-2 relative z-10">
                                Software Gestionali <br /> & CRM su Misura
                            </h3>

                            <div className="w-12 h-1 bg-blue-500 rounded-full mb-6 relative z-10"></div>

                            <p className="text-gray-400 leading-relaxed mb-8 flex-1 relative z-10">
                                Ancora usi Excel per gestire i clienti? O carta e penna?
                                Sviluppo <strong>pannelli di controllo</strong> personalizzati per automatizzare il tuo lavoro. Risparmia ore di data-entry e concentrati sul business.
                            </p>

                            {/* Target Badge */}
                            <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/10 relative z-10">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500 mb-2">
                                    <TableProperties className="w-3 h-3" /> Ideale per:
                                </div>
                                <div className="text-sm font-bold text-white">
                                    Artigiani, PMI, Logistica, Magazzini.
                                </div>
                            </div>

                            <div className="mt-auto relative z-10">
                                <Link href="#contact" className="inline-flex items-center text-sm font-black uppercase tracking-wider text-white group-hover:text-blue-400 transition-colors">
                                    Analisi Gratuita <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </BlurFade>

                    {/* SERVICE 3: AI & SEO */}
                    <BlurFade delay={0.4} className="h-full">
                        <div className="group relative h-full bg-white rounded-[2.5rem] border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 flex flex-col overflow-hidden">

                            {/* Visual Icon */}
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Bot className="w-8 h-8 text-purple-600" />
                            </div>

                            <h3 className="text-2xl font-black text-gray-900 mb-2">
                                Automazione & Chatbot AI
                            </h3>

                            <div className="w-12 h-1 bg-purple-600 rounded-full mb-6"></div>

                            <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                                Smetti di perdere ore a rispondere alle stesse domande su WhatsApp o via email.
                                Creo <strong>Agenti Intelligenti</strong> (tipo ChatGPT, ma istruiti sulla tua azienda) che rispondono ai clienti, prendono appuntamenti e filtrano i contatti 24/7.
                                È come avere una segretaria che lavora gratis, anche la domenica. </p>

                            {/* Target Badge */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
                                    <Search className="w-3 h-3" /> Ideale per:
                                </div>
                                <div className="text-sm font-bold text-gray-900">
                                    CChi è sommerso di messaggi e chiamate.

                                </div>
                            </div>

                            <div className="mt-auto">
                                <Link href="#contact" className="inline-flex items-center text-sm font-black uppercase tracking-wider text-gray-900 group-hover:text-purple-600 transition-colors">
                                    Analisi Gratuita <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </BlurFade>

                </div>

                {/* Final CTA link */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground font-medium">
                        Hai un&apos;esigenza diversa? <Link href="#contact" className="text-primary font-bold underline decoration-2 underline-offset-4 hover:text-[#FFBC11] transition-colors">Richiedi un&apos;analisi gratuita per parlarne insieme.</Link>
                    </p>
                </div>

            </div>
        </section>
    )
}