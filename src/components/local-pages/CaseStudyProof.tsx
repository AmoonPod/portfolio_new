"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, Play } from "lucide-react"
import { motion } from "framer-motion"
import BlurFade from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { getFeaturedCaseStudies } from "@/data/case-studies/case-studies-data"

interface CaseStudyProofProps {
    cityName: string
}

export function CaseStudyProof({ cityName }: CaseStudyProofProps) {
    const featuredCaseStudies = getFeaturedCaseStudies()
    const caseStudy = featuredCaseStudies[0] // Prende il primo caso studio in evidenza

    if (!caseStudy) return null

    // Controlla se il caso studio è stato realizzato nella stessa città
    const isLocalCaseStudy = caseStudy.locationCity?.toLowerCase() === cityName.toLowerCase()

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-green-50/30 to-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#FFBC11]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Video/Visual */}
                    <BlurFade delay={0.2}>
                        <Link href={`/casi-studio/${caseStudy.slug}`} className="group block">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-muted">
                                {caseStudy.videoUrl ? (
                                    <>
                                        <video
                                            src={caseStudy.videoUrl}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                        {/* Play overlay on hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileHover={{ scale: 1, opacity: 1 }}
                                                className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Play className="w-6 h-6 text-green-700 ml-1" fill="currentColor" />
                                            </motion.div>
                                        </div>
                                    </>
                                ) : (
                                    <Image
                                        src={caseStudy.headerImage}
                                        alt={caseStudy.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                )}

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <div className="bg-white/95 backdrop-blur-sm text-green-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                                        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                                        Caso Studio Verificato
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </BlurFade>

                    {/* Right: Content */}
                    <div className="space-y-6">
                        <BlurFade delay={0.3}>
                            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
                                Risultati Reali • Non Promesse
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[0.95]">
                                {isLocalCaseStudy ? (
                                    <>
                                        Anche a {cityName},<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
                                            i risultati parlano.
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        I risultati<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
                                            parlano da soli.
                                        </span>
                                    </>
                                )}
                            </h2>
                        </BlurFade>

                        <BlurFade delay={0.4}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Ho aiutato <strong className="text-foreground">{caseStudy.client}</strong> a trasformare la loro presenza online.
                                Il sito non è solo "bello" — genera clienti veri.
                            </p>
                        </BlurFade>

                        {/* Results Pills */}
                        {caseStudy.results && caseStudy.results.length > 0 && (
                            <BlurFade delay={0.5}>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {caseStudy.results.slice(0, 3).map((result, idx) => (
                                        <div
                                            key={idx}
                                            className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-2"
                                        >
                                            <TrendingUp className="w-4 h-4 text-green-600" />
                                            <span className="text-sm font-bold text-green-800">
                                                {result.prefix}{result.value}{result.suffix}
                                            </span>
                                            <span className="text-xs text-green-700">{result.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </BlurFade>
                        )}

                        <BlurFade delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="h-12 px-6 rounded-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg group"
                                    asChild
                                >
                                    <Link href={`/casi-studio/${caseStudy.slug}`}>
                                        Leggi il Caso Studio Completo
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

