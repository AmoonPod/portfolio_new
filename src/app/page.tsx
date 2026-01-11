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
import HeroSection from "@/components/home/hero";
import EmpathySection from "@/components/home/emozioni";
import CaseStudySection from "@/components/home/case_study";
import ServicesSection from "@/components/home/servizi";
import AboutSection from "@/components/home/about";

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
      <HeroSection />

      <EmpathySection />

      {/* IL CASO STUDIO (IL PICHELLO) */}
      <CaseStudySection />

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
                        <span className="whitespace-nowrap">Analisi Gratuita 15 min</span>
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
      <ServicesSection />

      {/* CHI SONO (BRIEF) */}
      <AboutSection />

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
                Hai un&apos;idea in mente? Prendiamoci un caffè (anche virtuale).
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                Non serve avere già tutto chiaro. Scrivimi due righe sulla tua
                attività o sul tuo progetto. Ti rispondo personalmente,
                valutiamo insieme se posso esserti utile e ti faccio un
                preventivo onesto. Senza impegno.
              </p>

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
                    submitButtonText="SCRIVIMI ORA"
                  />



                  <p className="mt-8 text-center text-xs text-muted-foreground">
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
