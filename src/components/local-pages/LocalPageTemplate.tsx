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

                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8 text-foreground">
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

      {/* PAIN & SOLUTION - Interactive & Visual */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Pain Points */}
            <BlurFade delay={0.4}>
              <div className="sticky top-24">
                <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-[0.9]">
                  {data.pain.title}
                </h2>
                <div className="space-y-4">
                  {data.pain.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-5 p-6 rounded-[2rem] bg-white border-2 border-transparent hover:border-red-500/20 shadow-sm transition-all group">
                      <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <span className="text-xl text-foreground/80 font-bold leading-tight pt-2">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Solution Card */}
            <div className="space-y-12">
              <BlurFade delay={0.5}>
                <div className="bg-white rounded-[3rem] p-10 md:p-16 border-4 border-primary/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>

                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black mb-10 flex items-center gap-6">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-primary flex items-center justify-center text-white rotate-6 group-hover:rotate-0 transition-transform shadow-xl shadow-primary/30">
                        <Zap className="w-8 h-8 fill-white" />
                      </div>
                      {data.solution.title}
                    </h2>

                    <p className="text-2xl text-muted-foreground leading-relaxed mb-12 font-medium italic">
                      &ldquo;{data.solution.body}&rdquo;
                    </p>

                    {data.solution.highlights && (
                      <div className="grid gap-4">
                        {data.solution.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-5 p-5 rounded-[2rem] bg-muted/30 border-2 border-transparent hover:border-primary/20 hover:bg-background transition-all group/item">
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20 group-hover/item:scale-110 transition-transform">
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-black text-foreground/90">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </BlurFade>

              {/* Stats - Bold Icons */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary p-10 rounded-[2.5rem] text-primary-foreground shadow-xl shadow-primary/20">
                  <div className="text-5xl font-black mb-2 tracking-tighter">100%</div>
                  <div className="text-sm font-black opacity-80 uppercase tracking-widest leading-tight">Focus sul tuo<br />risultato</div>
                </div>
                <div className="bg-white border-4 border-muted p-10 rounded-[2.5rem] shadow-xl">
                  <div className="text-5xl font-black mb-2 text-primary tracking-tighter">ZERO</div>
                  <div className="text-sm font-black text-muted-foreground uppercase tracking-widest leading-tight">Canoni o costi<br />nascosti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE BLOCKS - Professional & Deep Cards */}
      <section className="py-32">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {data.uniqueBlocks.map((block, index) => (
              <BlockRenderer key={index} block={block} delay={0.6 + index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Same as Home (Minimal Accordion) */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container max-w-3xl mx-auto px-6">
          <BlurFade delay={0.7}>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tighter">
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
                <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
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
