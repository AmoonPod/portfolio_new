import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import BlurFade from '@/components/magicui/blur-fade'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { getAllCaseStudies } from '@/data/case-studies/case-studies-data'
import { DATA } from '@/data/resume'

export const metadata: Metadata = {
    title: 'Casi Studio | Manuel De Ceglie',
    description: 'Scopri come ho aiutato aziende e attività a crescere online. Casi studio reali con risultati misurabili: più traffico, più clienti, più vendite.',
    alternates: {
        canonical: `${DATA.url}/casi-studio`
    },
    openGraph: {
        title: 'Casi Studio | Manuel De Ceglie',
        description: 'Scopri come ho aiutato aziende e attività a crescere online. Casi studio reali con risultati misurabili.',
        url: `${DATA.url}/casi-studio`,
        siteName: 'Manuel De Ceglie',
        images: [
            {
                url: `${DATA.url}/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Casi Studio - Manuel De Ceglie'
            }
        ],
        locale: 'it_IT',
        type: 'website'
    }
}

export default function CasiStudioPage() {
    const caseStudies = getAllCaseStudies()

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] -mr-64 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFBC11]/5 rounded-full blur-[120px] -ml-48 pointer-events-none" />

                <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
                    <BlurFade delay={0.1}>
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100 mb-6">
                            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                            Risultati Verificati
                        </div>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
                            Casi Studio
                        </h1>
                    </BlurFade>

                    <BlurFade delay={0.3}>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                            Non promesse. <strong className="text-foreground">Risultati misurabili.</strong><br />
                            Scopri come ho aiutato aziende reali a crescere online.
                        </p>
                    </BlurFade>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="pb-24 md:pb-32">
                <div className="container max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {caseStudies.map((caseStudy, index) => (
                            <BlurFade key={caseStudy.slug} delay={0.1 + index * 0.1}>
                                <Link
                                    href={`/casi-studio/${caseStudy.slug}`}
                                    className="group block h-full"
                                >
                                    <article className="h-full flex flex-col bg-background border border-border/40 hover:border-border/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                        {/* Visual 16:9 */}
                                        <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                            {caseStudy.videoUrl ? (
                                                <video
                                                    src={caseStudy.videoUrl}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                            ) : (
                                                <Image
                                                    src={caseStudy.headerImage}
                                                    alt={caseStudy.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            )}

                                            {/* Featured Badge - Super Minimal */}
                                            {caseStudy.featured && (
                                                <div className="absolute top-4 left-4 z-10">
                                                    <div className="bg-white/90 backdrop-blur-md text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                                        IN EVIDENZA
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-1 p-6">
                                            <div className="flex items-center justify-between mb-3 text-xs">
                                                <span className="font-bold text-muted-foreground uppercase tracking-wider">
                                                    {caseStudy.client}
                                                </span>
                                                <span className="text-muted-foreground/60">
                                                    {caseStudy.date}
                                                </span>
                                            </div>

                                            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">
                                                {caseStudy.title}
                                            </h2>

                                            <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                                {caseStudy.subtitle}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/30">
                                                {/* Technologies */}
                                                <div className="flex -space-x-1.5 overflow-hidden">
                                                    {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                                                        <div key={idx} className="inline-flex items-center justify-center bg-secondary text-[10px] font-medium px-2 py-1 rounded-full border border-background ring-1 ring-background">
                                                            {tech}
                                                        </div>
                                                    ))}
                                                    {caseStudy.technologies.length > 3 && (
                                                        <div className="inline-flex items-center justify-center bg-muted text-[10px] font-medium px-2 py-1 rounded-full border border-background ring-1 ring-background z-10">
                                                            +{caseStudy.technologies.length - 3}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 bg-[#F9FAFB] relative overflow-hidden">
                {/* Background */}
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#FFBC11]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container max-w-[900px] mx-auto px-6 text-center relative z-10">
                    <BlurFade delay={0.1}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
                            Vuoi essere il prossimo<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E4F2F] to-green-600">
                                caso di successo?
                            </span>
                        </h2>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                            Raccontami il tuo progetto. Ti mostrerò come posso aiutarti a raggiungere risultati concreti.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="h-14 px-8 rounded-xl font-bold bg-[#0a0a0a] text-white hover:bg-black/80 shadow-xl group"
                                asChild
                            >
                                <Link href="/#contact">
                                    Parliamo del tuo progetto
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <WhatsAppButton
                                size="lg"
                                className="h-14 px-8 rounded-xl"
                            >
                                Scrivimi su WhatsApp
                            </WhatsAppButton>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    )
}

