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
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
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
  description:
    "Ti aiuto a farti trovare online, gestire meglio la tua attività e automatizzare il lavoro. Siti web, software e app su misura. Richiedi un'analisi gratuita.",
  keywords: [
    "realizzazione siti web",
    "software su misura",
    "app mobile",
    "siti web veloci",
    "manuel de ceglie",
    "web developer italia",
  ],
  alternates: {
    canonical: DATA.url,
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


      {/* SERVIZI */}
      <ServicesSection />

      {/* CHI SONO (BRIEF) */}
      <AboutSection />

      {/* FAQ */}
      <HomeFAQSection />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": `${DATA.url}/#identity`,
                "name": DATA.name,
                "url": DATA.url,
                "logo": `${DATA.url}/manuel-de-ceglie-sviluppatore-web-modena.png`,
                "image": `${DATA.url}/og-image.png`,
                "description": DATA.description,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Castelnovo ne’ Monti",
                  "addressRegion": "RE",
                  "addressCountry": "IT"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 44.5966,
                  "longitude": 11.0526
                },
                "telephone": DATA.contact.tel,
                "email": DATA.contact.email,
                "priceRange": "€€",
                "areaServed": {
                  "@type": "Country",
                  "name": "Italia"
                },
                "sameAs": [
                  DATA.contact.social.LinkedIn.url,
                  DATA.contact.social.GitHub.url
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Quanto costa un progetto?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dipende da cosa ti serve: un sito vetrina, un gestionale, un'app. Non ho listini fissi perché ogni progetto è diverso. Parliamone: ti faccio una stima chiara dopo aver capito le tue esigenze."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quanto tempo ci vuole?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Per un sito, di solito 4-6 settimane. Per software o app, dipende dalla complessità. Ti terrò aggiornato passo passo, senza sorprese."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Lavori solo su siti web?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Faccio siti web, software su misura, integrazioni tra sistemi, automazioni con AI e app mobile. Partiamo dal bisogno e scegliamo insieme la soluzione."
                    }
                  },
                    {
                      "@type": "Question",
                      "name": "Dove lavori?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Collaboro da remoto con clienti in tutta Italia. Per molti progetti non serve vedersi di persona, la comunicazione digitale è rapida ed efficace."
                      }
                    },
                  {
                    "@type": "Question",
                    "name": "Cosa succede dopo la consegna?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Rimango disponibile per supporto e manutenzione. Per i siti c'è un canone annuale che include hosting, aggiornamenti e piccole modifiche. Per software e app, definiamo insieme un piano di assistenza."
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />

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

              <div className="pt-8">
                <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-4">Oppure scrivimi subito</p>
                <WhatsAppButton
                  size="lg"
                  className="h-16 px-10 rounded-2xl w-full sm:w-auto shadow-xl transition-all hover:scale-105"
                  message="Ciao Manuel! Ho un'idea per un progetto e vorrei parlarne con te."
                />
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
