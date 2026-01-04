"use client"

import { LocalPageData } from "@/data/local-pages/types";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  MapPin,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Zap,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
  Search,
  LayoutGrid,
  Timer,
  AlertTriangle,
  Terminal,
  Check,
  Clock,
  Star
} from "lucide-react";
import { DidYouKnowSection } from "@/components/local-pages/DidYouKnow";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ServiceContactForm } from "@/components/service-contact-form";
import { OfferPopup } from "@/components/local-pages/OfferPopup";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { OfferAlertBar } from "@/components/local-pages/OfferAlertBar"
import { AssetDigitalSection } from "@/components/local-pages/AssetDigitalSection"

interface LocalPageTemplateProps {
  data: LocalPageData;
}


export default function LocalPageTemplate({ data }: LocalPageTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-[#FFBC11]/30 selection:text-black overflow-x-hidden">
      {data.offer && (
        <OfferAlertBar
          offer={data.offer}
          cityName={data.cityName}
          onClick={() => setIsOfferOpen(true)} // Apre il popup al click
        />
      )}
      {/* Offer Popup */}
      {data.offer && (
        <OfferPopup
          offer={data.offer}
          cityName={data.cityName}
          // Passiamo lo stato e la funzione per chiuderlo
          isOpen={isOfferOpen}
          onOpenChange={setIsOfferOpen}
        />
      )}

      {/* --- HERO SECTION: CONTEXTUAL & IMMERSIVE --- */}
      <section className="relative py-24 md:py-20  overflow-hidden bg-background">
        {/* Abstract Map Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFBC11]/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left: Copy */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <BlurFade delay={0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-primary/10 backdrop-blur-md mb-8 group cursor-default hover:bg-muted/80 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#FFBC11] animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    SviluppoSiti Web a <span className="text-foreground font-black">{data.cityName}</span>
                  </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-foreground text-balance">
                  {data.hero.h1}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl font-medium">
                  {data.hero.sub}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <div className="relative group w-full sm:w-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-[#FFBC11] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                    <Button size="lg" className="relative w-full h-14 sm:h-16 px-8 rounded-2xl font-bold text-lg shadow-xl" asChild>
                      <Link href={data.hero.ctaHref}>
                        {data.hero.ctaText}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 sm:h-16 px-8 rounded-2xl border-2 border-[#25D366] hover:bg-[#25D366]/10 font-semibold text-base w-full sm:w-auto text-[#25D366] hover:text-[#25D366] transition-all"
                    asChild
                  >
                    <a
                      href={`https://wa.me/393462136256?text=Ciao%20Manuel,%20voglio%20info%20per%20un%20sito%20a%20${encodeURIComponent(data.cityName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 mr-2" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Scrivimi su WhatsApp
                    </a>
                  </Button>
                </div>

                {/* <div className="mt-8 flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[8px] overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                      </div>
                    ))}
                  </div>
                  {data.hero.trustSignal}
                </div> */}
              </BlurFade>
            </div>

            {/* Right: Visual Contextual Simulation */}
            <div className="lg:col-span-5 hidden lg:block perspective-1000">
              <BlurFade delay={0.3}>
                <motion.div
                  style={{ y }}
                  className="relative w-full aspect-square max-w-[500px] mx-auto"
                >
                  {/* The Abstract "Local Search" Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] shadow-2xl border border-white/50 p-6 flex flex-col transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out z-10">
                    {/* Fake Browser Bar */}
                    <div className="flex items-center gap-2 mb-6 bg-muted/30 p-3 rounded-full w-fit">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">sito web {data.cityName}</span>
                    </div>

                    {/* Simulated Result */}
                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-border/40 flex-1 flex flex-col relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBC11]/10 rounded-bl-[100px] z-0"></div>

                      <div className="flex items-start justify-between relative z-10">
                        <div className="space-y-1">
                          <div className="h-2 w-20 bg-muted rounded-full"></div>
                          <div className="h-6 w-48 bg-primary/10 rounded-md"></div>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                          <MapPin className="w-5 h-5 fill-current" />
                        </div>
                      </div>

                      <div className="mt-8 grid grid-cols-2 gap-3">
                        <div className="h-24 bg-muted/20 rounded-xl border border-dashed border-muted-foreground/20 animate-pulse"></div>
                        <div className="h-24 bg-muted/20 rounded-xl border border-dashed border-muted-foreground/20 animate-pulse delay-100"></div>
                      </div>

                      <div className="mt-auto pt-6 flex items-center gap-3">
                        <div className="px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full">APERTO ORA</div>
                        <div className="px-3 py-1 bg-muted text-muted-foreground text-[10px] font-bold rounded-full">5.0 ★★★★★</div>
                      </div>

                      {/* Overlay Cursor Animation */}
                      <motion.div
                        className="absolute bottom-10 right-10"
                        initial={{ x: 20, y: 20, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                      >
                        <svg className="w-8 h-8 text-primary drop-shadow-xl" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z" /></svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Backdrop Blob */}
                  <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 via-[#FFBC11]/20 to-primary/5 rounded-full blur-[60px] -z-10 animate-pulse"></div>
                </motion.div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM & SOLUTION: BENTO GRID STYLE --- */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        {/* Background Dinamico Sottile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">

          {/* Nuovo Titolo di Sezione */}
          <div className="text-center mb-16 md:mb-24">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-bold uppercase tracking-widest mb-4 border border-red-500/20">
                <AlertTriangle className="w-3 h-3" />
                Diagnostica Attuale
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-balance">
                Il tuo sito attuale ti sta <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">costando clienti?</span>
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
                      {data.pain.bullets.map((bullet: string, i: number) => (
                        <div key={i} className="flex gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                          <span className="text-red-500 shrink-0 select-none">{`>`}</span>
                          <p className="text-red-200/90 leading-relaxed">
                            <span className="bg-red-500/20 text-red-400 px-1 rounded mr-2 text-xs">ERROR {400 + i}</span>
                            {bullet}
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
                      {data.solution?.highlights?.map((highlight: string, i: number) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FFBC11]/5 transition-colors group/item border border-transparent hover:border-[#FFBC11]/20">
                          <div className="w-10 h-10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <Check className="w-6 h-6 text-green-500 stroke-[3]" />
                          </div>
                          <span className="text-base font-bold text-foreground/80 leading-tight">{highlight}</span>
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

      {/* --- UNIQUE BLOCKS: ASYMMETRIC & ANIMATED --- */}
      <section className="py-24 bg-background overflow-hidden">
        <div className=" max-w-[1200px] mx-auto">
          {data.uniqueBlocks.map((block, index) => {

            // 1. PROCESS: VERTICAL HUD STYLE
            if (block.kind === 'process') {
              return (
                <BlurFade key={index} className="mb-32">
                  <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-[#FFBC11] font-mono text-xs uppercase tracking-widest mb-2 block">Workflow</span>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter">{block.title}</h3>
                  </div>

                  <div className="relative grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: The Steps */}
                    <div className="space-y-8 relative">
                      <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-muted via-primary/20 to-muted border-l border-dashed border-primary/30"></div>
                      {block.steps.map((step, i) => (
                        <div key={i} className="relative pl-20 group">
                          <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-background border-2 border-primary/10 flex items-center justify-center text-xl font-black text-muted-foreground group-hover:border-[#FFBC11] group-hover:text-primary transition-all shadow-sm z-10">
                            {step.step}
                          </div>
                          <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Right: Sticky Visual */}
                    <div className="hidden md:block relative h-full min-h-[400px] bg-muted/30 rounded-[3rem] border border-border/50 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping"></div>
                          <div className="absolute inset-4 bg-primary/10 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Zap className="w-16 h-16 text-[#FFBC11] fill-[#FFBC11]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-10 left-0 right-0 text-center text-sm font-mono text-muted-foreground uppercase tracking-widest">
                        System Optimization...
                      </div>
                    </div>
                  </div>
                </BlurFade>
              )
            }

            if (block.kind === 'comparison') {
              return (
                <section key={index} className="py-24 md:py-32 bg-background relative overflow-hidden">
                  {/* Sfondo Texture Carta/Rumore molto leggero per dare matericità */}
                  <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>

                  <div className="container max-w-[1200px] mx-auto px-6 relative z-10">

                    {/* HEADER EDITORIALE - CENTRATO */}
                    {/* Aggiunto 'mx-auto' per centrare il blocco e 'text-center' per il testo */}
                    <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
                      <BlurFade delay={0.1}>

                        {/* Badge Centrato */}
                        {/* Aggiunto 'justify-center' per centrare linea e testo */}

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-[1.1] mb-8 text-balance">
                          La differenza tra una spesa e un <span className="text-transparent bg-clip-text  bg-[#FFBC11] ">buon investimento</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed text-balance mx-auto">
                          Molti vedono il sito web come un costo fisso, come la bolletta della luce.
                          Io lo costruisco come un investimento che deve generare un ritorno misurabile.
                        </p>
                      </BlurFade>
                    </div>

                    {/* BENTO GRID DI LETTURA */}
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">

                      {/* CARD 1: REPUTAZIONE */}
                      <BlurFade delay={0.2} className="lg:col-span-1">
                        <div className="group h-full bg-white rounded-[2rem] p-8 md:p-10 border border-border shadow-sm hover:shadow-xl hover:border-[#FFBC11]/30 transition-all duration-500 flex flex-col justify-between text-left">
                          <div>
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                              <Star className="w-7 h-7 text-orange-500 fill-orange-500/20" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 group-hover:text-orange-600 transition-colors">
                              Il tuo biglietto da visita h24
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Mentre tu dormi, il sito lavora. Risponde alle domande, mostra i tuoi lavori e convince i clienti.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                              Se è trascurato, lento o non si adatta al cellulare, il cliente penserà che anche il tuo lavoro sia scadente.
                            </p>
                          </div>

                          {/* Micro-Visual */}
                          <div className="mt-8 pt-8 border-t border-dashed border-gray-100 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            <div className="flex text-[#FFBC11]">
                              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Percezione Premium</span>
                          </div>
                        </div>
                      </BlurFade>

                      {/* CARD 2: PROPRIETÀ */}
                      <BlurFade delay={0.3} className="lg:col-span-1">
                        <div className="group h-full bg-[#1a1a1a] text-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between text-left">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-[#FFBC11]/20 transition-colors duration-700"></div>

                          <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/10">
                              <ShieldCheck className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-black mb-4">
                              L'unica cosa che possiedi davvero
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed">
                              I social media sono "in affitto". Se domani l'algoritmo cambia o ti bloccano il profilo, sparisci nel nulla.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed mt-4">
                              Un sito web è <strong className="text-white">casa tua</strong>. Nessuno può togliertelo. È un asset sicuro che accumula valore storico nel tempo.
                            </p>
                          </div>

                          <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                            <span className="text-xs font-mono text-white/40">STATUS PROPRIETÀ</span>
                            <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">100% Tuo</span>
                            </div>
                          </div>
                        </div>
                      </BlurFade>

                      {/* CARD 3: VENDITA */}
                      <BlurFade delay={0.4} className="lg:col-span-1">
                        <div className="group h-full bg-white rounded-[2rem] p-8 md:p-10 border border-border shadow-sm hover:shadow-xl hover:border-[#FFBC11]/30 transition-all duration-500 flex flex-col justify-between text-left">
                          <div>
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                              <Zap className="w-7 h-7 text-blue-500 fill-blue-500/20" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors">
                              Un venditore che non chiede stipendio
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              Immagina di dover spiegare a ogni singolo cliente chi sei e perché costi quella cifra. Estenuante, vero?
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                              Un sito ben progettato lo fa al posto tuo. Filtra i perditempo e ti porta solo contatti <strong className="text-foreground">già convinti</strong>.
                            </p>
                          </div>

                          <div className="mt-8 pt-8 border-t border-dashed border-gray-100 relative h-24 flex items-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                            <div className="w-full bg-blue-100 h-[30%] rounded-t-sm"></div>
                            <div className="w-full bg-blue-200 h-[50%] rounded-t-sm"></div>
                            <div className="w-full bg-blue-300 h-[40%] rounded-t-sm"></div>
                            <div className="w-full bg-blue-400 h-[70%] rounded-t-sm"></div>
                            <div className="w-full bg-blue-500 h-[90%] rounded-t-sm relative">
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 rounded">ROI</div>
                            </div>
                          </div>
                        </div>
                      </BlurFade>

                    </div>

                  </div>
                </section>
              )
            }

            // 4. CHECKLIST & STATS (Fallback to generic pretty cards)
            if (['checklist', 'stats', 'callout', 'table'].includes(block.kind)) {
              return (
                <BlurFade key={index} className="mb-32">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-black tracking-tight">{block?.kind === 'checklist' ? block.title : block?.kind === 'stats' ? block.title : block?.kind === 'callout' ? block.title : block?.kind === 'table' ? block.title : ''}</h3>
                  </div>

                  {block.kind === 'checklist' && 'items' in block && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {block.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm hover:border-[#FFBC11] transition-colors">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {block.kind === 'stats' && 'items' in block && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {block.items.map((stat, i) => (
                        <div key={i} className="p-6 bg-muted/20 rounded-2xl border border-transparent hover:border-primary/10 transition-colors text-center">
                          <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                          <div className="text-sm font-bold uppercase text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {block.kind === 'callout' && 'body' in block && (
                    <div className={cn(
                      "p-8 rounded-2xl border-l-8 text-lg font-medium shadow-lg",
                      block.variant === 'success' ? "bg-green-50 border-green-500 text-green-900" :
                        block.variant === 'warning' ? "bg-amber-50 border-amber-500 text-amber-900" :
                          "bg-blue-50 border-blue-500 text-blue-900"
                    )}>
                      {block.body}
                    </div>
                  )}
                </BlurFade>
              )
            }

            return null
          })}
        </div>
      </section>

      {/* --- DID YOU KNOW SECTION --- */}
      <DidYouKnowSection cityName={data.cityName} />

      {/* --- FAQ SECTION: ACCORDION MINIMAL --- */}
      <section className="py-24 bg-white border-t border-border/40">
        <div className="container max-w-3xl mx-auto px-6">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Supporto</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">
                Domande frequenti
              </h2>
            </div>

            <div className="space-y-4">
              {data.faq.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "group bg-muted/20 hover:bg-muted/40 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer",
                    openFaqIndex === index ? "bg-white shadow-xl ring-1 ring-black/5" : ""
                  )}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                    <h3 className={cn("text-lg md:text-xl font-bold tracking-tight transition-colors", openFaqIndex === index ? "text-primary" : "text-foreground")}>
                      {faq.q}
                    </h3>
                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-300 text-muted-foreground", openFaqIndex === index ? "rotate-180 text-primary" : "")} />
                  </div>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 text-muted-foreground text-lg leading-relaxed">
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

      {/* --- CTA FOOTER: THE "BIG FINISH" --- */}
      <section id="contatti" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>

        <div className="container max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="space-y-10">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                Pronto a dominare <br />
                <span className="text-[#FFBC11]"> {data.cityName}?</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 font-medium max-w-xl">
                Non lasciare che i tuoi clienti vadano dalla concorrenza solo perché loro hanno un sito migliore. Prendiamoci questo mercato insieme.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  "Preventivo chiaro e bloccato",
                  "Nessun vincolo contrattuale a vita",
                  "Proprietà 100% tua del codice"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FFBC11] flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFBC11]">
                  <Image src={DATA.avatarUrl} alt="Manuel" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <div className="font-black text-xl">Manuel De Ceglie</div>
                  <div className="text-[#FFBC11] text-sm font-bold uppercase tracking-wider">Web Developer</div>
                </div>
              </div>
            </div>

            <div className="bg-white text-foreground rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-[#FFBC11] text-primary px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest transform rotate-3 shadow-lg">
                Zero Spam
              </div>
              <ServiceContactForm
                serviceName={`LP - ${data.cityName}`}
                formTitle="Richiedi Analisi"
                formDescription="Ti rispondo personalmente entro 24h."
                submitButtonText="Invia Richiesta"
                hideServiceTypes={data.serviceSlug === 'siti-web'}
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}