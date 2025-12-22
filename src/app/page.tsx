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
    <main className="min-h-screen flex flex-col font-sans bg-background">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[85vh] flex items-center py-16 md:py-0 bg-gradient-to-b from-background to-muted/20"
      >
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
            <BlurFade
              delay={0.1}
              className="flex flex-col justify-center text-left space-y-6"
            >
              {/* Mini intro - chi sono */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-muted overflow-hidden border-2 border-primary/20">
                  <Image
                    src={DATA.avatarUrl}
                    alt="Manuel De Ceglie"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">Manuel De Ceglie</p>
                  <p className="text-xs text-muted-foreground">
                    Consulente & Sviluppatore
                  </p>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                Soluzioni digitali per far
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
                    crescere la tua azienda.
                  </span>
                  <span className="absolute bottom-0 left-0 h-1 bg-primary/30 w-0 animate-[drawUnderline_0.6s_ease-out_0.8s_forwards]"></span>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Per aziende che sono stanche di strumenti lenti, inefficaci o
                che sono invisibili su Google. Vuoi dei risultati concreti?
                Contattami.
              </p>

              {/* Micro-list servizi - Hidden on mobile to keep CTA visible */}
              <div className="hidden md:flex flex-wrap gap-2 pt-2">
                {[
                  { label: "Siti Web" },
                  { label: "Software su Misura" },
                  { label: "Integrazioni & AI" },
                  { label: "App Mobile" },
                ].map((service) => (
                  <span
                    key={service.label}
                    className="px-3 py-1.5 bg-muted/60 border rounded-full text-sm font-medium"
                  >
                    {service.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-2">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-7 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all w-full sm:w-auto group"
                  asChild
                >
                  <Link href="#contact">
                    Prenota analisi gratuita (15 min)
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-7 border-green-200 hover:bg-green-50 hover:border-green-300 text-green-700 transition-all w-full sm:w-auto group"
                  asChild
                >
                  <a
                    href="https://wa.me/393462136256?text=Ciao%20Manuel,%20ho%20visto%20il%20tuo%20sito."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat su WhatsApp
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground pt-4 items-center">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Risposta entro 24h
                </span>
                <span className="text-muted-foreground/40">•</span>
                <span>Consulenza gratuita</span>
                <span className="text-muted-foreground/40">•</span>
                <span>Zero pressione</span>
              </div>
            </BlurFade>

            {/* DESKTOP: Full visual card (XL screens) */}
            <BlurFade
              delay={0.3}
              className="relative hidden xl:flex items-center justify-center"
            >
              {/* Colorful gradient blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/15 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Services visual card */}
              <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl border border-border/50 transform transition-all hover:-translate-y-1 duration-300">
                <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-b px-5 py-4 flex items-center justify-between rounded-t-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        Il tuo progetto
                      </div>
                      <div className="text-xs text-muted-foreground">
                        dalla strategia al risultato
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-2.5">
                  {/* Service steps - animated */}
                  {[
                    {
                      icon: Search,
                      label: "Analizzo il problema",
                      desc: "Capisco cosa ti serve davvero",
                      color: "bg-primary",
                      delay: "0.5s",
                    },
                    {
                      icon: Code,
                      label: "Progetto la soluzione",
                      desc: "Sito, software, app o integrazione",
                      color: "bg-blue-500",
                      delay: "0.7s",
                    },
                    {
                      icon: Rocket,
                      label: "Costruisco e lancio",
                      desc: "Sviluppo e metto online",
                      color: "bg-emerald-500",
                      delay: "0.9s",
                    },
                    {
                      icon: TrendingUp,
                      label: "Misuro i risultati",
                      desc: "Ottimizziamo insieme",
                      color: "bg-orange-500",
                      delay: "1.1s",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2.5 bg-muted/40 rounded-lg border border-transparent hover:border-primary/10 hover:bg-muted/60 transition-all cursor-pointer group animate-[slideIn_0.4s_ease-out_forwards] opacity-0"
                      style={{ animationDelay: item.delay }}
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white shadow-md`}
                      >
                        <item.icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm group-hover:text-primary transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.desc}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>

          {/* MOBILE/TABLET: Compact process timeline (below hero, visible on < XL) */}
          <BlurFade delay={0.4} className="xl:hidden mt-12">
            <div className="relative">
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-emerald-500/5 rounded-2xl"></div>

              <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl border shadow-lg p-4 sm:p-6">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Come lavoro</div>
                </div>

                {/* Process steps - horizontal on tablet, 2x2 grid on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      icon: Search,
                      label: "Analizzo",
                      desc: "il problema",
                      color: "bg-primary",
                      delay: "0.5s",
                    },
                    {
                      icon: Code,
                      label: "Progetto",
                      desc: "la soluzione",
                      color: "bg-blue-500",
                      delay: "0.6s",
                    },
                    {
                      icon: Rocket,
                      label: "Costruisco",
                      desc: "e lancio",
                      color: "bg-emerald-500",
                      delay: "0.7s",
                    },
                    {
                      icon: TrendingUp,
                      label: "Misuro",
                      desc: "i risultati",
                      color: "bg-orange-500",
                      delay: "0.8s",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="relative flex flex-col items-center text-center p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors animate-[slideIn_0.4s_ease-out_forwards] opacity-0"
                      style={{ animationDelay: item.delay }}
                    >
                      {/* Step number badge */}
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-background border text-[10px] font-bold flex items-center justify-center text-muted-foreground">
                        {i + 1}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white shadow-md mb-2`}
                      >
                        <item.icon className="w-4 h-4" />
                      </div>

                      {/* Label */}
                      <div className="font-semibold text-sm leading-tight">
                        {item.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.desc}
                      </div>

                      {/* Connector line (hidden on last item and on mobile 2nd/4th) */}
                      {i < 3 && (
                        <div className="hidden md:block absolute top-1/2 -right-1.5 w-3 h-0.5 bg-border"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* IL CASO STUDIO (IL PICHELLO) */}
      <section
        id="case-study"
        className="py-32 bg-[#F9FAFB] text-foreground overflow-hidden relative"
      >
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BlurFade delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Non credermi sulla parola. Guarda i numeri.
              </h2>
              <p className="text-xl text-muted-foreground">
                Il Pichello era invisibile online. Ora riceve ordini ogni
                settimana. Ecco come.
              </p>
            </BlurFade>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Video del sito Il Pichello */}
            <BlurFade
              delay={0.2}
              className="relative order-2 lg:order-1 flex flex-col items-center gap-8"
            >
              {/* Phone frame with video */}
              <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] shadow-2xl shadow-black/20 hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden">
                {/* iPhone side buttons */}
                <div className="h-[32px] w-[3px] bg-gray-900 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-900 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-900 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                <div className="rounded-[2rem] overflow-hidden w-[280px] bg-[#f2f2f7] flex flex-col">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg border w-full max-w-xs">
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

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900">
                Da zero contatti a{" "}
                <span className="text-[#2E4F2F]">ordini ogni settimana</span>
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Il problema:</strong> un
                  vivaio con ottimi prodotti ma invisibile online. Sito vecchio,
                  informazioni sbagliate, nessuno li trovava su Google.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">La soluzione:</strong>{" "}
                  nuovo sito veloce, catalogo digitale, scheda Google
                  ottimizzata. Ora i clienti li trovano, vedono i prodotti e
                  ordinano direttamente.
                </p>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white rounded-xl p-5 border shadow-sm">
                  <AnimatedKpi
                    value={1000}
                    prefix=">"
                    label="Click al mese"
                    valueClassName="text-3xl md:text-4xl font-bold text-[#2E4F2F]"
                    labelClassName="text-xs font-medium uppercase tracking-wider text-muted-foreground mt-1"
                  />
                  <div className="text-xs text-muted-foreground/60 mt-2">
                    prima: ~100
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border shadow-sm">
                  <AnimatedKpi
                    value={300}
                    suffix="+"
                    label="Visite Google Maps"
                    valueClassName="text-3xl md:text-4xl font-bold text-[#2E4F2F]"
                    labelClassName="text-xs font-medium uppercase tracking-wider text-muted-foreground mt-1"
                  />
                  <div className="text-xs text-muted-foreground/60 mt-2">
                    prima: ~20
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border shadow-sm">
                  <AnimatedKpi
                    value={10}
                    suffix="/mese"
                    label="Contatti reali"
                    valueClassName="text-3xl md:text-4xl font-bold text-[#2E4F2F]"
                    labelClassName="text-xs font-medium uppercase tracking-wider text-muted-foreground mt-1"
                  />
                  <div className="text-xs text-muted-foreground/60 mt-2">
                    prima: 0
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border shadow-sm flex flex-col justify-center">
                  <div className="text-lg font-bold text-[#2E4F2F]">
                    Ordini ogni settimana
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mt-1">
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
      <section className="py-24 bg-background">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Explanation */}
            <BlurFade delay={0.2}>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600 mb-4">
                <CheckCircle2 className="w-4 h-4" />
                Gratuita, senza impegno
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Come funziona la consulenza
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Non è una chiamata commerciale. Ti ascolto, capisco il problema,
                e ti propongo una direzione concreta — che tu decida di lavorare
                con me o no.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Ti ascolto</h3>
                    <p className="text-muted-foreground text-sm">
                      Mi racconti cosa ti serve: visibilità, efficienza,
                      automazioni, un&apos;app. Capisco il contesto.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Analizzo la situazione</h3>
                    <p className="text-muted-foreground text-sm">
                      Guardo cosa hai già, cosa manca, cosa si può migliorare.
                      Ti dico cosa ha senso fare e cosa no.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Ti propongo un piano</h3>
                    <p className="text-muted-foreground text-sm">
                      Strategia, tempi, costi. Tutto chiaro. Poi decidi tu se
                      andare avanti.
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Right: Visual card */}
            <BlurFade delay={0.4}>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-10 border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">
                    Dopo la chiamata avrai:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Direzione chiara</strong> — quale soluzione fa
                        al caso tuo e perché
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Priorità definite</strong> — cosa fare subito,
                        cosa può aspettare
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Stima tempi e costi</strong> — range realistico,
                        senza sorprese
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Zero pressione</strong> — decidi tu se andare
                        avanti o no
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button
                      size="lg"
                      className="w-full text-lg py-6 group"
                      asChild
                    >
                      <Link href="#contact">
                        Prenota l&apos;Analisi Gratuita
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="services" className="py-24 bg-background">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Scegliamo insieme la strada
            </h2>
            <p className="text-xl text-muted-foreground">
              Partiamo dal bisogno: visibilità, processi, integrazioni o
              prodotto. Poi costruiamo la soluzione giusta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BlurFade
              delay={0.3}
              className="bg-background border-2 border-primary/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all group relative"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform">
                <MonitorSmartphone className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">
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
              className="bg-background border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 text-blue-600 group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">
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
              className="bg-background border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 text-purple-600 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">
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
              className="bg-background border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 text-orange-600 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">App Mobile</h3>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl opacity-40"></div>
                <div className="relative bg-background rounded-3xl p-8 md:p-12 border shadow-xl">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Large avatar */}
                    <div className="shrink-0">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-muted overflow-hidden border-4 border-primary/20 shadow-lg">
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
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        Manuel De Ceglie
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        Sviluppatore Web & Software
                      </p>

                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
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
        className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background"
      >
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -mr-96 -mt-96 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -ml-64 -mb-64 opacity-50"></div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
            {/* Left Column: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
                <CheckCircle2 className="w-4 h-4" />
                Analisi Gratuita • Senza Impegno
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Pronto a far decollare il tuo progetto?
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
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
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-base mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Personal touch card */}
              <div className="mt-12 p-6 bg-background border-2 border-primary/20 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/20 shadow-md">
                    <Image
                      src={DATA.avatarUrl}
                      alt="Manuel De Ceglie"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-base">
                      Parla direttamente con me
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
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
                <div className="bg-background border-2 border-border rounded-3xl p-8 md:p-10 shadow-2xl">
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      Raccontami la tua idea
                    </h3>
                    <p className="text-muted-foreground">
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
