"use client"

import { LocalPageData } from "@/data/local-pages/types";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Zap,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ServiceContactForm } from "@/components/service-contact-form";
import BlockRenderer from "@/components/local-pages/BlockRenderer";
import LocalCityLinks from "@/components/local-pages/LocalCityLinks";
import ServiceLinks from "@/components/local-pages/ServiceLinks";
import { OfferPopup } from "@/components/local-pages/OfferPopup";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

interface LocalPageTemplateProps {
  data: LocalPageData;
}

export default function LocalPageTemplate({ data }: LocalPageTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      {/* Offer Popup */}
      {data.offer && (
        <OfferPopup offer={data.offer} cityName={data.cityName} />
      )}

      {/* HERO SECTION - Striking & Personal */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b bg-gradient-to-b from-muted/20 to-background">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <BlurFade delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border shadow-sm text-primary text-[11px] font-black uppercase tracking-widest mb-8">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{data.cityName == data.province ? data.cityName : data.cityName + ', ' + data.province}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-8 text-foreground">
                  {data.hero.h1.split(' ').map((word, i) => (
                    <span key={i} className={cn(i > 2 && i < 6 ? "text-primary italic" : "")}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl font-medium">
                  {data.hero.sub}
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <Button size="lg" className="h-16 px-10 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all font-black text-lg group" asChild>
                    <Link href={data.hero.ctaHref}>
                      {data.hero.ctaText}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-16 px-10 rounded-2xl border-2 hover:bg-white hover:-translate-y-1 transition-all font-bold text-lg"
                    asChild
                  >
                    <a
                      href={`https://wa.me/393462136256?text=Ciao%20Manuel,%20ho%20visto%20la%20tua%20pagina%20per%20${encodeURIComponent(data.cityName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </BlurFade>
            </div>

            {/* Floating Visual Element */}
            <div className="lg:col-span-5 hidden lg:block relative">
              <BlurFade delay={0.3}>
                <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-primary via-blue-500 to-primary shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                  <div className="bg-white rounded-[2.4rem] p-10 space-y-8 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 w-3/4 bg-muted rounded-full"></div>
                      <div className="h-4 w-1/2 bg-muted/60 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-24 bg-primary/5 rounded-3xl border-2 border-primary/10"></div>
                      <div className="h-24 bg-blue-500/5 rounded-3xl border-2 border-blue-500/10"></div>
                    </div>
                    <div className="h-12 w-full bg-primary/10 rounded-2xl border-2 border-primary/20"></div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center -rotate-12 shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN & SOLUTION - Compact Original Design */}
      <section className="py-10 md:py-12 bg-muted/30">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Pain Points */}
            <BlurFade delay={0.4}>
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tighter leading-[0.9]">
                  {data.pain.title}
                </h2>
                <div className="space-y-3">
                  {data.pain.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border-2 border-transparent hover:border-red-500/20 shadow-sm transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                      <span className="text-base md:text-lg text-foreground/80 font-bold leading-snug pt-1">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Solution Card */}
            <div className="space-y-6">
              <BlurFade delay={0.5}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border-4 border-primary/10 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]"></div>

                  <div className="relative z-10">
                    <h2 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white rotate-6 group-hover:rotate-0 transition-transform shadow-lg shadow-primary/30">
                        <Zap className="w-6 h-6 fill-white" />
                      </div>
                      {data.solution.title}
                    </h2>

                    {data.solution.highlights && (
                      <div className="grid gap-3">
                        {data.solution.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-muted/30 border-2 border-transparent hover:border-primary/20 hover:bg-background transition-all group/item">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-md shadow-green-500/20 group-hover/item:scale-110 transition-transform">
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-base md:text-lg font-black text-foreground/90">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Trust Badge - Full Width */}
          <BlurFade delay={0.6}>
            <div className="mt-10 md:mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/10 p-6 md:p-8 border-2 border-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <div className="font-black text-lg md:text-xl mb-2">Trasparenza totale</div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                    Prezzi chiari, niente sorprese. Hosting e manutenzione a parte, che paghi direttamente al fornitore.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* UNIQUE BLOCKS - Modern Asymmetric Design */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-6xl mx-auto px-6 md:px-12">
          {data.uniqueBlocks
            .filter((block) => block.kind !== 'testimonial')
            .map((block, index) => {
              // Process - Zigzag Flow
              if (block.kind === 'process') {
                return (
                  <BlurFade key={index} delay={0.6 + index * 0.1}>
                    <div className="mb-12 md:mb-16">
                      <div className="text-center mb-10">
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                          <span className="text-xs font-black text-primary uppercase tracking-widest">Processo</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                          {block.title}
                        </h3>
                      </div>
                      <div className="space-y-6">
                        {block.steps.map((step, i) => (
                          <div key={i} className={cn(
                            "flex flex-col md:flex-row gap-6",
                            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                          )}>
                            <div className="md:w-1/3 flex items-start md:items-center justify-center md:justify-end">
                              <div className="relative">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-xl shadow-primary/30">
                                  <span className="text-3xl font-black">{step.step}</span>
                                </div>
                                {i < block.steps.length - 1 && (
                                  <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-transparent"></div>
                                )}
                              </div>
                            </div>
                            <div className="md:w-2/3">
                              <div className="bg-white rounded-xl p-6 border-l-4 border-primary shadow-md hover:shadow-xl transition-shadow">
                                <h4 className="font-black text-xl md:text-2xl mb-3 tracking-tight">{step.title}</h4>
                                <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                )
              }

              // Comparison - Split View
              if (block.kind === 'comparison') {
                return (
                  <BlurFade key={index} delay={0.6 + index * 0.1}>
                    <div className="mb-12 md:mb-16">
                      <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tight text-center">
                        {block.title}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {block.items.map((item, i) => (
                          <div key={i} className={cn(
                            "relative p-5 rounded-lg border-2 transition-all hover:scale-[1.02]",
                            item.has 
                              ? "bg-primary/5 border-primary/30 shadow-md" 
                              : "bg-muted/20 border-muted-foreground/10"
                          )}>
                            <div className="flex items-start gap-4">
                              <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1",
                                item.has ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                              )}>
                                {item.has ? <CheckCircle2 className="w-6 h-6" /> : <X className="w-6 h-6" />}
                              </div>
                              <div>
                                <div className="font-black text-lg mb-1">{item.label}</div>
                                {item.description && (
                                  <div className="text-sm text-muted-foreground leading-relaxed">{item.description}</div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                )
              }

              // Case Study - Split Screen Style
              if (block.kind === 'case') {
                return (
                  <BlurFade key={index} delay={0.6 + index * 0.1}>
                    <div className="mb-12 md:mb-16">
                      <div className="text-center mb-8">
                        <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                          <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Risultati</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                          {block.title}
                        </h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="relative overflow-hidden rounded-xl border-r-4 border-red-500">
                          <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                          <div className="pt-8 p-6 bg-red-50/50">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <span className="text-xs font-black text-red-600 uppercase tracking-wider">Prima</span>
                            </div>
                            <p className="text-base text-foreground/80 leading-relaxed">{block.before}</p>
                          </div>
                        </div>
                        
                        <div className="relative overflow-hidden rounded-xl border-r-4 border-emerald-500">
                          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                          <div className="pt-8 p-6 bg-emerald-50/50">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-xs font-black text-emerald-600 uppercase tracking-wider">Dopo</span>
                            </div>
                            <p className="text-base text-foreground/80 leading-relaxed">{block.after}</p>
                          </div>
                        </div>
                      </div>

                      {block.metrics && block.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-4 justify-center">
                          {block.metrics.map((metric, i) => (
                            <div key={i} className="flex-1 min-w-[140px] p-5 rounded-xl bg-white border-2 border-primary/20 text-center hover:border-primary/40 hover:shadow-lg transition-all">
                              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{metric.value}</div>
                              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </BlurFade>
                )
              }

              // Checklist - Card Grid
              if (block.kind === 'checklist') {
                return (
                  <BlurFade key={index} delay={0.6 + index * 0.1}>
                    <div className="mb-12 md:mb-16">
                      <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tight text-center">
                        {block.title}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {block.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white border-2 border-border hover:border-primary/40 hover:shadow-md transition-all">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-base text-foreground/80 leading-relaxed pt-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                )
              }

              // Stats - Horizontal Cards
              if (block.kind === 'stats') {
                return (
                  <BlurFade key={index} delay={0.6 + index * 0.1}>
                    <div className="mb-12 md:mb-16">
                      <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tight text-center">
                        {block.title}
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {block.items.map((stat, i) => (
                          <div key={i} className="p-6 rounded-xl bg-white border-2 border-border hover:border-primary/40 hover:shadow-lg transition-all text-center">
                            <div className="text-5xl font-black text-primary mb-3 leading-none">{stat.value}</div>
                            <div className="font-black text-base mb-2">{stat.label}</div>
                            <div className="text-sm text-muted-foreground">{stat.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                )
              }

              // Callout - Highlight Box
              if (block.kind === 'callout') {
                return (
                  <BlurFade key={index} delay={0.6 + index * 0.1}>
                    <div className="mb-12 md:mb-16 relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                      <div className="ml-6 p-6 rounded-xl bg-primary/5 border-l-4 border-primary">
                        <h3 className="font-black text-xl md:text-2xl mb-3">{block.title}</h3>
                        <p className="text-base text-foreground/70 leading-relaxed">{block.body}</p>
                      </div>
                    </div>
                  </BlurFade>
                )
              }

              // Table - Winner Highlight
              if (block.kind === 'table') {
                return (
                  <BlurFade key={index} delay={0.6 + index * 0.1}>
                    <div className="mb-12 md:mb-16">
                      <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tight text-center">
                        {block.title}
                      </h3>
                      <div className="space-y-3">
                        {block.rows.map((row, i) => (
                          <div key={i} className={cn(
                            "relative p-6 rounded-xl border-2 transition-all",
                            block.highlightIndex === i
                              ? "bg-gradient-to-r from-primary to-primary/90 text-white border-primary shadow-xl scale-[1.02]"
                              : "bg-white border-border hover:border-primary/30"
                          )}>
                            {block.highlightIndex === i && (
                              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-white text-primary text-xs font-black uppercase tracking-wider shadow-lg">
                                Winner
                              </div>
                            )}
                            <div className={cn(
                              "font-black text-xl mb-2",
                              block.highlightIndex === i ? "text-white" : ""
                            )}>{row.a}</div>
                            <div className={cn(
                              "text-base",
                              block.highlightIndex === i ? "text-white/90" : "text-muted-foreground"
                            )}>{row.b}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                )
              }

              return null
            })}
        </div>
      </section>

      {/* FAQ SECTION - Same as Home (Minimal Accordion) */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container max-w-3xl mx-auto px-6">
          <BlurFade delay={0.7}>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tighter">
              Domande Frequenti
            </h2>

            <div className="space-y-4">
              {data.faq.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-background rounded-[1.5rem] border-2 transition-all cursor-pointer overflow-hidden",
                    openFaqIndex === index ? "border-primary shadow-xl" : "border-transparent hover:border-primary/20 shadow-sm"
                  )}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <div className="p-8 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight leading-tight">
                      {faq.q}
                    </h3>
                    <div className={cn(
                      "w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300",
                      openFaqIndex === index ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/20" : ""
                    )}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </div>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-6 text-muted-foreground text-xl leading-relaxed border-t-2 border-muted mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA SECTION - Striking & Modern */}
      <section id="contatti" className="py-32 relative bg-primary/5">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto bg-white rounded-[4rem] p-10 md:p-20 border-4 shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden grid lg:grid-cols-2 gap-20 items-center">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

            <BlurFade delay={0.8}>
              <div className="space-y-10">
                <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter">
                  Facciamo decollare la tua attività a <span className="text-primary">{data.cityName}</span>.
                </h2>

                <div className="space-y-6">
                  {[
                    "Referente unico (parli con me)",
                    "Prezzi trasparenti al 100%",
                    "Sito veloce che converte",
                    "Supporto locale dedicato"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black tracking-tight leading-tight">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-10 border-t-4 border-muted">
                  <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-primary/20 shadow-2xl shrink-0">
                    <Image src={DATA.avatarUrl} alt={DATA.name} width={80} height={80} className="object-cover" />
                  </div>
                  <div>
                    <div className="font-black text-2xl">{DATA.name}</div>
                    <div className="text-primary font-bold text-lg leading-tight italic">Il tuo sviluppatore di fiducia</div>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.9}>
              <div className="bg-muted/30 p-10 md:p-14 rounded-[3rem] border-4 border-muted relative">
                <div className="absolute -top-10 -right-10 bg-amber-400 text-white w-24 h-24 rounded-full flex items-center justify-center -rotate-12 font-black text-4xl shadow-2xl z-20 animate-pulse">
                  M
                </div>
                <ServiceContactForm
                  serviceName={`${data.serviceName} - ${data.cityName}`}
                  formTitle="Iniziamo ora"
                  formDescription="Raccontami il tuo progetto."
                  submitButtonText="Invia la richiesta"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </main>
  );
}
