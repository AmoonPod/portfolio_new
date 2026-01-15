import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import BlurFade from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { getCaseStudyBySlug, getAllCaseStudySlugs, getAllCaseStudies } from '@/data/case-studies/case-studies-data'
import { DATA } from '@/data/resume'

export const dynamicParams = false

export async function generateStaticParams() {
    const slugs = getAllCaseStudySlugs()
    return slugs.map(slug => ({
        slug
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const caseStudy = getCaseStudyBySlug(slug)

    if (!caseStudy) {
        return {
            title: 'Caso Studio Non Trovato',
            robots: { index: false, follow: false }
        }
    }

    return {
        title: caseStudy.seo.title,
        description: caseStudy.seo.description,
        alternates: {
            canonical: caseStudy.seo.canonical
        },
        openGraph: {
            title: caseStudy.seo.title,
            description: caseStudy.seo.description,
            url: caseStudy.seo.canonical,
            siteName: 'Manuel De Ceglie',
            images: [
                {
                    url: caseStudy.seo.ogImage || `${DATA.url}${caseStudy.headerImage}`,
                    width: 1200,
                    height: 630,
                    alt: caseStudy.title
                }
            ],
            locale: 'it_IT',
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: caseStudy.seo.title,
            description: caseStudy.seo.description,
            images: [caseStudy.seo.ogImage || `${DATA.url}${caseStudy.headerImage}`]
        }
    }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const caseStudy = getCaseStudyBySlug(slug)

    if (!caseStudy) {
        notFound()
    }

    const allCaseStudies = getAllCaseStudies()
    const currentIndex = allCaseStudies.findIndex(cs => cs.slug === slug)
    const nextCaseStudy = allCaseStudies[currentIndex + 1] || allCaseStudies[0]
    const showNext = nextCaseStudy && nextCaseStudy.slug !== slug

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: caseStudy.title,
        description: caseStudy.seo.description,
        image: `${DATA.url}${caseStudy.headerImage}`,
        author: {
            '@type': 'Person',
            name: DATA.name,
            url: DATA.url
        },
        publisher: {
            '@type': 'Person',
            name: DATA.name
        },
        datePublished: caseStudy.date,
        mainEntityOfPage: caseStudy.seo.canonical
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-background">
                {/* Spacer Navbar */}

                {/* --- NUOVA HERO SECTION EDITORIALE --- */}
                <div className="container max-w-[1400px] mx-auto py-12 px-6 ">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Colonna Sinistra: Info */}
                        <div className="lg:col-span-6 flex flex-col gap-8">
                            {/* Navigazione */}
                            <BlurFade delay={0.1}>
                                <Link
                                    href="/casi-studio"
                                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 text-sm font-medium group"
                                >
                                    <div className="p-1.5 rounded-full bg-secondary group-hover:bg-secondary/80 transition-colors">
                                        <ArrowLeft className="w-4 h-4" />
                                    </div>
                                    Tutti i casi studio
                                </Link>
                            </BlurFade>

                            {/* Header Testuale */}
                            <BlurFade delay={0.2}>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <Badge variant="outline" className="text-sm px-3 py-1 border-primary/20 bg-primary/5 text-primary">
                                        Case Study
                                    </Badge>
                                    <Badge variant="secondary" className="text-sm px-3 py-1">
                                        {caseStudy.date}
                                    </Badge>
                                </div>

                                <h1 className="text-4xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1] text-foreground mb-8">
                                    {caseStudy.title}
                                </h1>

                                <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-4xl leading-relaxed mb-8">
                                    {caseStudy.subtitle}
                                </p>
                            </BlurFade>

                            {/* Metadati Grid */}
                            <BlurFade delay={0.3}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border pt-8">
                                    <div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Cliente</div>
                                        <div className="font-bold text-lg md:text-xl">{caseStudy.client}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Tecnologie & Servizi</div>
                                        <div className="flex flex-wrap gap-2">
                                            {caseStudy.technologies.map((tech, i) => (
                                                <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </BlurFade>

                            {/* Pulsante Visita Sito */}
                            {caseStudy.websiteUrl && (
                                <BlurFade delay={0.35}>
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto h-12 px-6 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg group"
                                        asChild
                                    >
                                        <a
                                            href={caseStudy.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Visita il Sito Web
                                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </Button>
                                </BlurFade>
                            )}
                        </div>

                        {/* Colonna Destra: Visual (Video o Immagine) */}
                        <div className="lg:col-span-6 relative w-full">
                            <BlurFade delay={0.4}>
                                <div className="relative w-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-border/50 shadow-2xl bg-muted flex items-center justify-center">
                                    {caseStudy.videoUrl ? (
                                        <video
                                            src={caseStudy.videoUrl}
                                            className="w-full h-auto max-h-[600px] object-contain"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <div className="relative aspect-video w-full">
                                            <Image
                                                src={caseStudy.headerImage}
                                                alt={caseStudy.title}
                                                fill
                                                className="object-cover"
                                                priority
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                            />
                                        </div>
                                    )}
                                </div>
                            </BlurFade>
                        </div>
                    </div>
                </div>

                {/* Results Bar */}
                {caseStudy.results && caseStudy.results.length > 0 && (
                    <section className="bg-foreground text-background py-16 md:py-20 mb-20">
                        <div className="container max-w-[1200px] mx-auto px-6">
                            <BlurFade delay={0.5}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                                    {caseStudy.results.map((result, index) => (
                                        <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-background/20 last:border-0 pb-8 md:pb-0 last:pb-0">
                                            <div className="flex items-baseline gap-1 mb-2">
                                                <span className="text-5xl md:text-6xl font-black tracking-tight text-[#FFBC11]">
                                                    {result.prefix}{result.value}{result.suffix}
                                                </span>
                                            </div>
                                            <div className="text-lg font-medium text-background/80">
                                                {result.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </BlurFade>
                        </div>
                    </section>
                )}

                {/* Main Content */}
                <section className="pb-20 md:pb-32">
                    <div className="container max-w-[800px] mx-auto px-6">
                        <BlurFade delay={0.6}>
                            <article className="prose prose-lg prose-gray max-w-none 
                                prose-headings:font-black prose-headings:tracking-tight 
                                prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-16 prose-h2:mb-8 
                                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                                prose-p:leading-relaxed prose-p:text-gray-600 prose-p:mb-8
                                prose-strong:text-foreground prose-strong:font-bold
                                prose-ul:my-8 prose-li:mb-2
                                prose-blockquote:border-l-4 prose-blockquote:border-[#FFBC11] 
                                prose-blockquote:bg-muted/50 prose-blockquote:py-6 prose-blockquote:px-8 
                                prose-blockquote:rounded-r-2xl prose-blockquote:not-italic 
                                prose-blockquote:font-medium prose-blockquote:text-xl prose-blockquote:text-foreground
                                prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-12 prose-img:border prose-img:border-border">
                                <ReactMarkdown
                                    components={{
                                        p: ({ children, node, ...props }: any) => {
                                            // Se il paragrafo contiene un'immagine (verificato tramite AST), usiamo un div
                                            const hasImage = node?.children?.some(
                                                (child: any) => child.type === 'element' && child.tagName === 'img'
                                            )

                                            if (hasImage) {
                                                return <div {...props}>{children}</div>
                                            }
                                            return <p {...props}>{children}</p>
                                        },
                                        img: ({ src, alt }) => {
                                            if (!src || typeof src !== 'string') return null
                                            return (
                                                <div className="relative w-full aspect-video my-12 rounded-2xl overflow-hidden shadow-xl border border-border">
                                                    <Image
                                                        src={src}
                                                        alt={alt || ''}
                                                        fill
                                                        className="object-contain"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
                                                    />
                                                </div>
                                            )
                                        }
                                    }}
                                >
                                    {caseStudy.content}
                                </ReactMarkdown>
                            </article>
                        </BlurFade>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden border-t border-border">
                    <div className="container max-w-[900px] mx-auto px-6 relative z-10 text-center">
                        <BlurFade delay={0.1}>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-full mb-8 border border-primary/10">
                                <TrendingUp className="w-4 h-4" />
                                Vuoi risultati simili?
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.2}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
                                Parliamo del tuo progetto.
                            </h2>
                        </BlurFade>

                        <BlurFade delay={0.3}>
                            <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
                                Raccontami la tua situazione. Ti dirò onestamente se e come posso aiutarti a raggiungere i tuoi obiettivi con un <Link href="/siti-web" className="text-foreground font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-2">sito web</Link> ad alte prestazioni.
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 rounded-xl font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl group"
                                    asChild
                                >
                                    <Link href="/#contact">
                                        Richiedi Analisi Gratuita
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <WhatsAppButton
                                    size="lg"
                                    className="h-14 px-8 rounded-xl border-2 border-[#25D366] bg-transparent hover:bg-[#25D366]/10 text-[#25D366]"
                                >
                                    Scrivimi su WhatsApp
                                </WhatsAppButton>
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* Next Case Study */}
                {showNext && (
                    <section className="py-16 md:py-20 bg-background border-t border-border">
                        <div className="container max-w-[1200px] mx-auto px-6">
                            <BlurFade delay={0.1}>
                                <div className="flex items-center justify-between mb-10">
                                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                                        Prossimo caso studio
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                                </div>
                            </BlurFade>

                            <BlurFade delay={0.2}>
                                <Link
                                    href={`/casi-studio/${nextCaseStudy.slug}`}
                                    className="group block"
                                >
                                    <div className="relative rounded-[2rem] overflow-hidden bg-muted border border-border shadow-sm hover:shadow-2xl transition-all duration-500">
                                        <div className="grid md:grid-cols-2 gap-0">
                                            <div className="relative h-64 md:h-[400px]">
                                                <Image
                                                    src={nextCaseStudy.headerImage}
                                                    alt={nextCaseStudy.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                                <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors leading-[0.9]">
                                                    {nextCaseStudy.title}
                                                </h3>
                                                <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
                                                    {nextCaseStudy.subtitle}
                                                </p>
                                                <span className="inline-flex items-center font-bold text-foreground border-b-2 border-foreground pb-1 self-start group-hover:border-primary group-hover:text-primary transition-colors">
                                                    Leggi Case Study
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </BlurFade>
                        </div>
                    </section>
                )}
            </main>
        </>
    )
}
