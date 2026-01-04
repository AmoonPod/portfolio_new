import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Zap,
  Search,
  Rocket,
  Code,
  Database,
  ArrowRight,
  MonitorSmartphone,
  TrendingUp,
  ExternalLink,
  MessageCircle,
  Phone,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { ServiceContactForm } from "@/components/service-contact-form";
import { AnimatedKpi } from "@/components/animated-kpi";
import { DATA } from "@/data/resume";
import { HomeFAQSection } from "./home-faq";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Siti Web, Software e App su Misura | Manuel De Ceglie",
    template: "%s | Manuel De Ceglie",
  },
  alternates: {
    canonical: DATA.url,
    languages: {
      "it-IT": DATA.url,
    },
  },
  description:
    "Ti aiuto a farti trovare online, gestire meglio la tua attività e automatizzare il lavoro. Siti web, software e app su misura. Richiedi un'analisi gratuita.",
  keywords: [
    "realizzazione siti web emilia romagna",
    "sviluppatore web modena",
    "sviluppatore web reggio emilia",
    "software su misura",
    "app mobile",
    "siti web veloci",
    "manuel de ceglie",
    "web developer emilia romagna",
  ],
  openGraph: {
    title: "Siti Web, Software e App su Misura | Manuel De Ceglie",
    description:
      "Ti aiuto a farti trovare online e a gestire meglio la tua attività. Richiedi un'analisi gratuita.",
    url: DATA.url,
    siteName: "Manuel De Ceglie",
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Siti Web, Software e App - Manuel De Ceglie",
      },
    ],
    countryName: "Italy",
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Siti Web, Software e App su Misura | Manuel De Ceglie",
    description:
      "Ti aiuto a farti trovare online e a gestire meglio la tua attività.",
    card: "summary_large_image",
    images: [`${DATA.url}/og-image.png`],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-background overflow-x-hidden w-full">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center py-20 md:py-20 bg-background overflow-hidden"
      >
        {/* BACKGROUND TECH GRID */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="grid xl:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT COLUMN: Content */}
            <BlurFade delay={0.1} className="flex flex-col justify-center text-left space-y-8">

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-muted/50 border border-primary/10 rounded-full pl-1 pr-4 py-1 w-fit backdrop-blur-md hover:bg-muted/80 transition-colors cursor-default">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-background shadow-sm">
                  <Image
                    src={DATA.avatarUrl}
                    alt="Manuel De Ceglie"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground tracking-wide uppercase">Manuel De Ceglie</span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Disponibile per nuovi progetti
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-foreground">
                  Soluzioni digitali <br className="hidden lg:block" />
                  per far <span className="relative inline-block text-transparent bg-clip-text bg-[#FFBC11] animate-gradient bg-300%">
                    crescere
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFBC11] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                  <br />
                  la tua azienda.
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                  Basta strumenti lenti o siti invisibili. Sviluppo ecosistemi digitali
                  su misura per imprenditori che vogliono <span className="font-semibold text-foreground">risultati misurabili</span>,
                  senza il gergo tecnico inutile.
                </p>
              </div>

              {/* CTA AREA */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Main Button */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFBC11] to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                    <Button
                      size="lg"
                      className="relative w-full sm:w-auto h-14 sm:h-16 px-8 rounded-2xl font-bold text-lg shadow-xl hover:bg-primary/90"
                      asChild
                    >
                      <Link href="#contact">
                        Analisi Gratuita
                        <span className="bg-white/20 text-white text-xs py-0.5 px-2 rounded-md ml-3 font-normal backdrop-blur-sm">15 min</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* WhatsApp Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 sm:h-16 px-8 rounded-2xl border-2 border-[#25D366] hover:bg-[#25D366]/10 font-semibold text-base w-full sm:w-auto text-[#25D366] hover:text-[#25D366] transition-all"
                    asChild
                  >
                    <a
                      href="https://wa.me/393462136256"
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

                {/* Trust indicators */}
                <div className="flex items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground flex-wrap pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBC11]" />
                    Risposta in 24h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBC11]" />
                    Preventivi chiari
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBC11]" />
                    Assistenza diretta
                  </span>
                </div>
              </div>
            </BlurFade>

            {/* RIGHT COLUMN (DESKTOP): The "Hollywood Tech" Card */}
            <BlurFade delay={0.3} className="hidden xl:flex relative items-center justify-center perspective-1000">
              {/* The Main "HUD" Card */}
              <div className="relative w-full max-w-[480px] bg-background/60 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2rem] overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[#33333]/40">

                {/* Card Header */}
                <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    System_Status: Active
                  </div>
                </div>

                {/* Scanner Line */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent z-20 animate-scan shadow-[0_0_20px_2px_rgba(var(--primary),0.5)] pointer-events-none"></div>                {/* Content */}
                <div className="p-6 space-y-4 relative z-10">
                  {[
                    {
                      icon: Search,
                      title: "Analisi Strategica",
                      subtitle: "Identificazione colli di bottiglia",
                      bg: "bg-orange-500/10",
                      text: "text-orange-500",
                      progress: "100%"
                    },
                    {
                      icon: Code,
                      title: "Sviluppo su misura",
                      subtitle: "Codice pulito, veloce, scalabile",
                      bg: "bg-[#FFBC11]/10",
                      text: "text-[#FFBC11]",
                      progress: "85%"
                    },
                    {
                      icon: Rocket,
                      title: "Lancio e Crescita",
                      subtitle: "Pubblicazione e monitoraggio KPI",
                      bg: "bg-emerald-500/10",
                      text: "text-emerald-500",
                      progress: "0%"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="group flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-black/20 border border-white/10 hover:bg-white/60 transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.text} shadow-inner`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                          {idx === 0 && <span className="text-[10px] font-mono text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">FATTO</span>}
                          {idx === 1 && <span className="text-[10px] font-mono text-[#FFBC11] bg-[#FFBC11]/10 px-2 py-0.5 rounded-full animate-pulse">IN CORSO</span>}
                        </div>
                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-4 pt-4 border-t border-dashed border-muted-foreground/20">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">Efficienza stimata</div>
                      <div className="text-xl font-black ">+120%</div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* MOBILE/TABLET: The "Mini-HUD" (< XL screens) - RIFATTO COMPLETAMENTE */}
          <BlurFade delay={0.4} className="xl:hidden mt-16 pb-8">
            <div className="relative overflow-hidden bg-background/60 border border-white/20 backdrop-blur-xl rounded-[1.5rem] shadow-xl">
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-muted/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBC11] animate-pulse"></div>
                  <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest">Processo Attivo</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">v2.0</div>
              </div>

              {/* Mobile Process Timeline */}
              <div className="p-5">
                <div className="relative space-y-6 pl-2">
                  {/* Vertical Line Connector */}
                  <div className="absolute left-[19px] top-2 bottom-4 w-[2px] bg-gradient-to-b from-green-500 via-[#FFBC11] to-muted"></div>

                  {/* Step 1 */}
                  <div className="relative flex items-center gap-4">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Analisi</div>
                      <div className="text-[10px] text-muted-foreground">Strategia definita</div>
                    </div>
                  </div>

                  {/* Step 2 (Active) */}
                  <div className="relative flex items-center gap-4">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-[#FFBC11] text-white flex items-center justify-center text-xs shadow-[0_0_15px_rgba(255,188,17,0.6)] animate-pulse">
                      <Code className="w-4 h-4" />
                    </div>
                    <div className="flex-1 bg-muted/30 p-2 rounded-lg border border-[#FFBC11]/20">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-xs font-bold text-[#FFBC11]">Sviluppo</div>
                        <span className="text-[9px] bg-[#FFBC11]/20 text-[#FFBC11] px-1.5 py-0.5 rounded animate-pulse">In corso...</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#FFBC11] h-1.5 rounded-full w-[70%]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center gap-4">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-muted border border-muted-foreground/30 flex items-center justify-center text-muted-foreground">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted-foreground">Lancio</div>
                      <div className="text-[10px] text-muted-foreground">In attesa</div>
                    </div>
                  </div>
                </div>

                {/* Mobile KPI Footer */}
                <div className="mt-6 pt-4 border-t border-dashed border-border/50 flex justify-between items-end">
                  <div className="text-[10px] text-muted-foreground max-w-[60%]">
                    Proiezione crescita post-lancio:
                  </div>
                  <div className="text-lg font-black">
                    +120%
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

        </div>
      </section>

      {/* IL CASO STUDIO (IL PICHELLO) */}
      <section
        id="case-study"
        className="py-32 bg-[#F9FAFB] text-foreground overflow-hidden relative w-full"
      >
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BlurFade delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                Non credermi sulla parola. <br /> Guarda i numeri.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                Il Pichello era invisibile online. Ora riceve ordini ogni
                settimana. Ecco come.
              </p>
            </BlurFade>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Video del sito Il Pichello */}
            <BlurFade
              delay={0.2}
              className="relative order-2 lg:order-1 flex flex-col items-center gap-8 w-full overflow-hidden px-4 sm:px-0"
            >
              {/* Phone frame with video */}
              <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] shadow-2xl shadow-black/20 hover:scale-[1.02] transition-transform duration-500 ease-out overflow-visible max-w-full">
                {/* iPhone side buttons - hidden on mobile to prevent overflow */}
                <div className="hidden sm:block h-[32px] w-[3px] bg-gray-900 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="hidden sm:block h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="hidden sm:block h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="hidden sm:block h-[64px] w-[3px] bg-gray-900 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                <div className="rounded-[2rem] overflow-hidden w-[280px] max-w-full bg-[#f2f2f7] flex flex-col">
                  {/* Safari iOS-style top bar - sopra il video */}
                  <div className="bg-[#f2f2f7] pt-12 pb-2 px-3 relative shrink-0">
                    {/* Dynamic Island / Notch area */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full"></div>

                    {/* Safari Search Bar */}
                    <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm border border-gray-200/50">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <span className="text-xs text-gray-500 flex-1 truncate">
                        ilpichello.it
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Video - crop top per rimuovere fascia nera */}
                  <div className="overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/poster_pichello.jpeg"
                      className="w-full -mt-10"
                    >
                      <source src="/il_pichello.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              {/* Mini growth chart - Area style */}
              <div className="bg-white rounded-[2rem] p-6 shadow-xl border-2 w-full max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    Crescita click al sito
                  </span>
                  <span className="text-sm text-[#2E4F2F] font-semibold">
                    +900%
                  </span>
                </div>
                <svg
                  viewBox="0 0 200 60"
                  className="w-full h-16"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="caseStudyGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#2E4F2F" stopOpacity="0.4" />
                      <stop
                        offset="100%"
                        stopColor="#2E4F2F"
                        stopOpacity="0.05"
                      />
                    </linearGradient>
                  </defs>
                  {/* Area fill */}
                  <path
                    d="M0,55 Q15,54 30,52 T60,48 T90,40 T120,28 T150,15 T180,8 T200,5 L200,60 L0,60 Z"
                    fill="url(#caseStudyGradient)"
                  />
                  {/* Line */}
                  <path
                    d="M0,55 Q15,54 30,52 T60,48 T90,40 T120,28 T150,15 T180,8 T200,5"
                    fill="none"
                    stroke="#2E4F2F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* End dot */}
                  <circle cx="200" cy="5" r="4" fill="#2E4F2F" />
                </svg>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Prima (~100/mese)</span>
                  <span>Dopo (&gt;1000/mese)</span>
                </div>
              </div>
            </BlurFade>

            {/* Content with KPIs */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Caso studio reale
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
                Da zero contatti a{" "}
                <span className="text-[#2E4F2F]">ordini ogni settimana</span>
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Il problema:</strong> un'azienda agricola con ottimi prodotti ma invisibile online. Sito vecchio,
                  informazioni sbagliate, nessuno li trovava su Google.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">La soluzione:</strong>{" "}
                  nuovo sito veloce, catalogo digitale, scheda Google
                  ottimizzata. Ora i clienti li trovano, vedono i prodotti e
                  fanno ordini ogni settimana.
                </p>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-white rounded-[2rem] p-6 border-2 shadow-xl">
                  <AnimatedKpi
                    value={1000}
                    prefix=">"
                    label="Click al mese"
                    valueClassName="text-3xl md:text-4xl font-black text-[#2E4F2F]"
                    labelClassName="text-xs font-black uppercase tracking-wider text-muted-foreground mt-1"
                  />
                  <div className="text-xs text-muted-foreground/60 mt-2">
                    prima: ~100
                  </div>
                </div>
                <div className="bg-white rounded-[2rem] p-6 border-2 shadow-xl">
                  <AnimatedKpi
                    value={300}
                    suffix="+"
                    label="Visite Google Maps"
                    valueClassName="text-3xl md:text-4xl font-black text-[#2E4F2F]"
                    labelClassName="text-xs font-black uppercase tracking-wider text-muted-foreground mt-1"
                  />
                  <div className="text-xs text-muted-foreground/60 mt-2">
                    prima: ~20
                  </div>
                </div>
                <div className="bg-white rounded-[2rem] p-6 border-2 shadow-xl">
                  <AnimatedKpi
                    value={10}
                    suffix=""
                    label="Contatti reali"
                    valueClassName="text-3xl md:text-4xl font-black text-[#2E4F2F]"
                    labelClassName="text-xs font-black uppercase tracking-wider text-muted-foreground mt-1"
                  />
                  <div className="text-xs text-muted-foreground/60 mt-2">
                    prima: 0
                  </div>
                </div>
                <div className="bg-white rounded-[2rem] p-6 border-2 shadow-xl flex flex-col justify-center">
                  <div className="text-lg font-black text-[#2E4F2F]">
                    Ordini ogni settimana
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider text-muted-foreground mt-1">
                    dal sito
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/60 pt-2">
                Dati: ultimi 30 giorni vs un mese prima del nuovo sito
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all pt-2"
              >
                Vuoi risultati simili? Parliamone{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COSA INCLUDE L'ANALISI */}
      <section className="relative py-20 sm:py-32 bg-background overflow-hidden">
        {/* Background Decorativo molto sottile per dare profondità */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-[#FFBC11]/5 rounded-full blur-[80px]"></div>
        </div>

        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* LEFT COLUMN: The "Circuit" Timeline */}
            <div className="relative">
              <BlurFade delay={0.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-wider mb-6 border border-green-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Gratuita, senza impegno
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-foreground">
                  Come funziona <br />
                  la
                  <span className="text-transparent bg-clip-text bg-[#FFBC11] ml-2">consulenza</span>
                </h2>

                <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg font-medium">
                  Non è una chiamata commerciale noiosa. Ti ascolto, capisco il problema, e ti propongo una direzione concreta — che tu decida di lavorare con me o no.
                </p>

                {/* THE TIMELINE */}
                <div className="relative space-y-8">
                  {/* Connecting Line (Dashed) */}
                  <div className="absolute left-[28px] sm:left-[36px] top-4 bottom-12 w-0.5 border-l-2 border-dashed border-primary/20"></div>

                  {/* Step 1 */}
                  <div className="group relative flex gap-6 sm:gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-2xl bg-background border-2 border-primary/10 group-hover:border-[#FFBC11] group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-black text-primary/40 group-hover:text-[#FFBC11] transition-colors">1</span>
                      <div className="absolute -inset-1 bg-[#FFBC11]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        Ti ascolto
                        <Phone className="w-4 h-4 text-muted-foreground opacity-50" />
                      </h3>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        Mi racconti cosa ti serve: visibilità, efficienza, automazioni, un'app. Capisco il contesto.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="group relative flex gap-6 sm:gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-2xl bg-background border-2 border-primary/10 group-hover:border-[#FFBC11] group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-black text-primary/40 group-hover:text-[#FFBC11] transition-colors">2</span>
                      <div className="absolute -inset-1 bg-[#FFBC11]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        Analizzo la situazione
                        <FileText className="w-4 h-4 text-muted-foreground opacity-50" />
                      </h3>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        Guardo cosa hai già, cosa manca e cosa si può migliorare.
                        Ti dico onestamente cosa ha senso fare e cosa no.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="group relative flex gap-6 sm:gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-2xl bg-background border-2 border-primary/10 group-hover:border-[#FFBC11] group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-black text-primary/40 group-hover:text-[#FFBC11] transition-colors">3</span>
                      <div className="absolute -inset-1 bg-[#FFBC11]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        Ti propongo un piano
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-50 -rotate-45" />
                      </h3>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        Strategia, tempi, costi. Tutto chiaro. Poi decidi tu se
                        andare avanti.
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* RIGHT COLUMN: The "Manifest/Outcome" Card */}
            <BlurFade delay={0.4} className="h-full flex items-center">
              <div className="relative w-full">
                {/* Backdrop decoration */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-[#FFBC11] to-primary rounded-[2.5rem] opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>

                {/* The Card Itself */}
                <div className="relative bg-background rounded-[2rem] border border-border p-8 sm:p-10 md:p-12 shadow-2xl">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-dashed border-border">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Risultati</div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Cosa ottieni</h3>
                    </div>
                    {/* Stamp effect */}
                    <div className="h-12 w-12 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 rotate-12 opacity-80 shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  </div>

                  {/* List of benefits */}
                  <ul className="space-y-6">
                    {[
                      { title: "Direzione chiara", desc: "Quale soluzione fa al caso tuo e perché." },
                      { title: "Priorità definite", desc: "Cosa fare subito, cosa può aspettare." },
                      { title: "Stima tempi e costi", desc: "Un range realistico, senza sorprese." },
                      { title: "Zero pressione", desc: "Decidi tu se andare avanti o no." },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="mt-1 h-6 w-6 rounded-full bg-[#FFBC11]/20 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-[#FFBC11]" />
                        </div>
                        <div>
                          <strong className="block text-lg font-bold text-foreground">{item.title}</strong>
                          <span className="text-muted-foreground text-base">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA inside Card */}
                  <div className="mt-10 pt-6 border-t border-border">
                    <Button
                      size="lg"
                      className="w-full h-14 text-base sm:text-lg rounded-xl shadow-xl shadow-[#FFBC11]/20 hover:bg-[#FFBC11] hover:text-black hover:shadow-[#FFBC11]/40 transition-all duration-300 font-bold group"
                      asChild
                    >
                      <Link href="#contact">
                        <span className="whitespace-nowrap">Prenota Analisi Gratuita</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                      Slot limitati ogni settimana.
                    </p>
                  </div>
                </div>

                {/* Decorative "Paper" effect behind */}
                <div className="absolute inset-0 bg-white/50 dark:bg-black/50 rounded-[2rem] -z-10 translate-x-3 translate-y-3 blur-[1px]"></div>
              </div>
            </BlurFade>

          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="services" className="py-24 bg-background w-full overflow-x-hidden">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              Scegliamo insieme la strada
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Partiamo dal bisogno: visibilità, processi, integrazioni o
              prodotto. Poi costruiamo la soluzione giusta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BlurFade
              delay={0.3}
              className="bg-white border-2 border-primary/20 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group relative"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform shadow-lg shadow-primary/10">
                <MonitorSmartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight">
                Siti Vetrina per farti trovare
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Non ti trovano su Google? Ti creo un sito veloce, chiaro e
                ottimizzato per portare clienti.
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                Caricamento sotto i 2 secondi, SEO integrata dall&apos;inizio,
                struttura ottimizzata per Google Maps. Siti vetrina, e-commerce,
                landing page: ogni progetto è costruito sulle tue esigenze.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Per chi: attività locali, professionisti, PMI che vogliono più
                visibilità online
              </p>
            </BlurFade>

            <BlurFade
              delay={0.4}
              className="bg-white border-2 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight">
                Gestionali per eliminare Excel
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Processi manuali, fogli Excel ovunque? Creo gestionali che
                mettono ordine e fanno risparmiare tempo.
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                CRM e gestione clienti, ordini e preventivi, magazzino in tempo
                reale, commesse e produzione. Dashboard chiare, automazioni che
                lavorano per te, integrazioni con i software che già usi.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Per chi: aziende, studi, realtà produttive che vogliono
                centralizzare dati e automatizzare processi
              </p>
            </BlurFade>

            <BlurFade
              delay={0.5}
              className="bg-white border-2 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/10">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight">
                App per fidelizzare i clienti
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Vuoi che i tuoi clienti tornino? Creo app che li fidelizzano con
                programmi punti, sconti personalizzati e notifiche mirate.
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                App per iOS e Android con card fedeltà digitale, prenotazioni,
                ordini rapidi, promozioni personalizzate. I tuoi clienti hanno
                tutto a portata di smartphone e tornano più spesso.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Per chi: attività locali, ristoranti, negozi che vogliono
                aumentare la fidelizzazione
              </p>
            </BlurFade>

            <BlurFade
              delay={0.6}
              className="bg-white border-2 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/10">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight">App Mobile</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Hai bisogno di un&apos;app per i tuoi clienti o per il tuo team?
                La progetto e costruisco per te.
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                Sviluppo con Flutter: un&apos;unica app per iOS e Android. App
                per clienti (prenotazioni, ordini, fidelity), app per team
                (check-in, report), MVP per startup. Pubblicazione su App Store
                e Google Play inclusa.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Per chi: startup, aziende con esigenze specifiche che vogliono
                raggiungere i clienti sullo smartphone
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CHI SONO (BRIEF) */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <BlurFade delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[3rem] blur-xl opacity-40"></div>
                <div className="relative bg-white rounded-[3rem] p-10 md:p-16 border-4 shadow-2xl">
                  <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                    {/* Large avatar */}
                    <div className="shrink-0">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] bg-muted overflow-hidden border-4 border-primary/20 shadow-xl">
                        <Image
                          src={DATA.avatarUrl}
                          alt="Manuel De Ceglie"
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tighter">
                        Manuel De Ceglie
                      </h3>
                      <p className="text-primary font-black mb-6 text-lg">
                        Sviluppatore Web & Software
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-8 text-xl font-medium">
                        Non sono un&apos;agenzia con 15 persone che non si
                        parlano. Sono uno sviluppatore che lavora direttamente
                        con te. Mi scrivi? Rispondo io. Hai un problema? Lo
                        risolvo io. Voglio che il tuo progetto funzioni quanto
                        te.
                      </p>

                      <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span>Referente unico</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span>Prezzi trasparenti</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span>Risposta in giornata</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <Button asChild>
                          <Link href="#contact">Scrivimi</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FAQ */}
      <HomeFAQSection />

      {/* CTA FINALE */}
      <section
        id="contact"
        className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background w-full"
      >
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -mr-96 -mt-96 opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -ml-64 -mb-64 opacity-50 pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
            {/* Left Column: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
                <CheckCircle2 className="w-4 h-4" />
                Analisi Gratuita • Senza Impegno
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
                Pronto a iniziare?
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                Non vendo pacchetti pronti. Analizzo la tua situazione e ti
                propongo la strategia migliore per i tuoi obiettivi concreti.
              </p>

              <div className="space-y-5 pt-4">
                {[
                  {
                    title: "Strategia personalizzata",
                    desc: "Ogni soluzione è su misura per le tue esigenze",
                  },
                  {
                    title: "Analisi competitiva",
                    desc: "Studio dei tuoi competitor per batterli",
                  },
                  {
                    title: "Tecnologie moderne",
                    desc: "Soluzioni scalabili e future-proof",
                  },
                  {
                    title: "Referente unico",
                    desc: "Niente agenzie, parli direttamente con me",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-[2rem] bg-white border-2 border-transparent hover:border-primary/20 shadow-sm transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-black text-xl mb-1 tracking-tight">
                        {item.title}
                      </div>
                      <div className="text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Personal touch card */}
              <div className="mt-12 p-8 bg-white border-4 border-primary/20 rounded-[2rem] shadow-xl">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-primary/20 shadow-xl">
                    <Image
                      src={DATA.avatarUrl}
                      alt="Manuel De Ceglie"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-black text-xl tracking-tight">
                      Parla direttamente con me
                    </div>
                    <div className="text-base text-muted-foreground mt-1">
                      Risposta garantita entro 24 ore
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              {/* Form container with shadow */}
              <div className="sticky top-8">
                <div className="bg-white border-4 border-border rounded-[3rem] p-10 md:p-16 shadow-2xl">
                  <div className="mb-10">
                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">
                      Raccontami la tua idea
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                      Bastano 30 secondi per iniziare. Riceverai un&apos;analisi
                      dettagliata senza alcun impegno.
                    </p>
                  </div>

                  <ServiceContactForm
                    serviceName="Homepage - Analisi Gratuita"
                    formTitle=""
                    formDescription=""
                    submitButtonText="Invia la richiesta ora"
                  />

                  <p className="mt-6 text-center text-xs text-muted-foreground">
                    I tuoi dati sono al sicuro. Trattati secondo la nostra{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline hover:text-primary transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
