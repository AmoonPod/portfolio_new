'use client'

import {
    ArrowRight,
    AlertTriangle,
    Terminal,
    Zap,
    Check
} from 'lucide-react'
import BlurFade from '@/components/magicui/blur-fade'

interface DiagnosticaAttualeProps {
    badge: string
    title: string | React.ReactNode
    problems: string[]
    solutions: string[]
}

export function DiagnosticaAttuale({
    badge,
    title,
    problems,
    solutions
}: DiagnosticaAttualeProps) {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-background">
            {/* Background Dinamico Sottile */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                {/* Nuovo Titolo di Sezione */}
                <div className="text-center mb-16 md:mb-24">
                    <BlurFade delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-bold uppercase tracking-widest mb-4 border border-red-500/20">
                            <AlertTriangle className="w-3 h-3" />
                            {badge}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-balance">
                            {typeof title === 'string' && title.includes('costando') ? (
                                <>
                                    Il tuo sito attuale ti sta <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">costando clienti?</span>
                                </>
                            ) : typeof title === 'string' ? (
                                title
                            ) : (
                                title
                            )}
                        </h2>
                    </BlurFade>
                </div>

                <div className="relative grid lg:grid-cols-12 gap-8 items-center">

                    {/* LEFT: THE GLITCH / PROBLEM (Terminal Style) */}
                    <div className="lg:col-span-5 relative z-10">
                        <BlurFade delay={0.2}>
                            <div className="relative bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 group">

                                {/* Fake Browser/Terminal Header */}
                                <div className="bg-[#2a2a2a] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    <div className="ml-auto text-[10px] font-mono text-white/30 flex items-center gap-1">
                                        <Terminal className="w-3 h-3" />
                                        error_log.txt
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 space-y-6">
                                    <div className="space-y-4 font-mono text-sm">
                                        {problems.map((problem: string, i: number) => (
                                            <div key={i} className="flex gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                                                <span className="text-red-500 shrink-0 select-none">{`>`}</span>
                                                <p className="text-red-200/90 leading-relaxed">
                                                    <span className="bg-red-500/20 text-red-400 px-1 rounded mr-2 text-xs">ERROR {400 + i}</span>
                                                    {problem}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Glitch Overlay Effect */}
                                    <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 animate-pulse"></div>
                                </div>

                                {/* Status Bar */}
                                <div className="bg-red-950/30 p-3 border-t border-red-500/20 flex items-center justify-between">
                                    <span className="text-xs text-red-400 font-mono animate-pulse">● CONNECTION UNSTABLE</span>
                                    <span className="text-xs text-red-500/50 font-mono">packet_loss: 98%</span>
                                </div>
                            </div>
                        </BlurFade>
                    </div>

                    {/* CONNECTOR (Desktop Only) */}
                    <div className="lg:col-span-2 hidden lg:flex items-center justify-center relative z-0">
                        <BlurFade delay={0.3}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FFBC11] blur-[40px] opacity-20"></div>
                                <div className="w-16 h-16 rounded-full bg-background border-2 border-[#FFBC11] flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,188,17,0.3)]">
                                    <ArrowRight className="w-6 h-6 text-[#FFBC11]" />
                                </div>
                                {/* Animated Dash Line */}
                                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[20px] -z-10 overflow-visible">
                                    <path d="M0,10 L200,10" stroke="#FFBC11" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                                </svg>
                            </div>
                        </BlurFade>
                    </div>

                    {/* RIGHT: THE UPGRADE / SOLUTION (Modern Glass) */}
                    <div className="lg:col-span-5 relative z-20">
                        <BlurFade delay={0.4}>
                            <div className="relative">
                                {/* Glow Behind */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBC11] to-orange-500 rounded-[2.2rem] blur opacity-30 animate-pulse"></div>

                                <div className="relative bg-white rounded-[2rem] border border-white/20 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">

                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-[#FFBC11]/10 flex items-center justify-center">
                                                <Zap className="w-4 h-4 text-[#FFBC11] fill-[#FFBC11]" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Upgrade Disponibile</div>
                                                <div className="text-sm font-black text-foreground">Versione 2.0</div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                                            Online
                                        </div>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="p-6 md:p-8 space-y-4 bg-white/50 backdrop-blur-sm">
                                        {solutions.map((solution: string, i: number) => (
                                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FFBC11]/5 transition-colors group/item border border-transparent hover:border-[#FFBC11]/20">
                                                <div className="w-10 h-10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                                    <Check className="w-6 h-6 text-green-500 stroke-[3]" />
                                                </div>
                                                <span className="text-base font-bold text-foreground/80 leading-tight">{solution}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer Stat */}
                                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                                        <div className="text-xs text-muted-foreground font-medium">Performance Score</div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full w-full bg-green-500 animate-[width_1.5s_ease-out]"></div>
                                            </div>
                                            <span className="text-sm font-black text-green-600">99/100</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </BlurFade>
                    </div>

                </div>
            </div>
        </section>
    )
}

