"use client";

/**
 * UNIFIED SERVICE PAGE TEMPLATE
 * 
 * A single, reusable template for all programmatic SEO service pages.
 * Renders consistently across all service + city combinations while
 * allowing service-specific customizations through configuration.
 */

import { ServiceConfig } from "@/data/services-config";
import { ServicePageData } from "@/lib/seo/page-generator";
import Link from "next/link";
import { useState } from "react";
import { 
  Globe, ShoppingCart, Target, Search, Smartphone, Cog,
  ChevronRight, Phone, MessageCircle, ArrowRight, Check,
  AlertTriangle, Lightbulb, Star, MapPin, Users, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// =============================================================================
// ICON MAPPING
// =============================================================================

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'siti-web': Globe,
  'ecommerce': ShoppingCart,
  'landing-pages': Target,
  'posizionamento-seo': Search,
  'sviluppo-app-mobile': Smartphone,
  'sviluppo-software': Cog,
};

// =============================================================================
// COMPARISON DATA
// =============================================================================

const COMPARISON_DATA = [
  { feature: "Prezzo", me: "Da 890€", agency: "Da 3.000€", diy: "0€ (ma tempo infinito)" },
  { feature: "Tempi di Consegna", me: "14 Giorni", agency: "2-3 Mesi", diy: "Indefinito" },
  { feature: "Referente", me: "Unico (Manuel)", agency: "Account Manager", diy: "Nessuno" },
  { feature: "Modifiche Future", me: "Assistenza Diretta", agency: "Ticket / Lentezza", diy: "Devi studiare" },
  { feature: "SEO Incluso", me: "Sì, nativo", agency: "Extra (+500€)", diy: "No" },
];

// =============================================================================
// PROPS INTERFACE
// =============================================================================

interface UnifiedServicePageTemplateProps {
  pageData: ServicePageData;
  service: ServiceConfig;
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default function UnifiedServicePageTemplate({
  pageData,
  service,
}: UnifiedServicePageTemplateProps) {
  const [activeTab, setActiveTab] = useState<'problems' | 'solutions'>('problems');
  const ServiceIcon = SERVICE_ICONS[service.slug] || Globe;

  // WhatsApp message with context
  const whatsappMessage = encodeURIComponent(
    `Ciao Manuel, sono interessato ai servizi di ${service.name} a ${pageData.cityName}. Vorrei ricevere maggiori informazioni.`
  );
  const whatsappUrl = `https://wa.me/393711816124?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-[#FFBC11]/30 selection:text-black overflow-x-hidden">
      {/* URGENCY BANNER */}
      <div className="bg-[#FFBC11] text-black text-center py-2 px-4 text-sm font-semibold">
        🔥 Disponibilità limitata per {new Date().toLocaleString('it-IT', { month: 'long' })}: Accetto solo altri 2 progetti.
      </div>

      {/* BREADCRUMB */}
      <nav className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container max-w-6xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li>
              <Link 
                href={`/${service.slug}`} 
                className="hover:text-foreground transition-colors"
              >
                {service.name}
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground font-medium">
              {pageData.cityName}
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            {pageData.hero.badge && (
              <Badge 
                variant="secondary" 
                className="mb-4 text-sm font-medium"
              >
                <ServiceIcon className="h-4 w-4 mr-2" />
                {pageData.hero.badge}
              </Badge>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {pageData.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {pageData.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#FFBC11] text-black hover:bg-[#FFBC11]/90 font-semibold"
                asChild
              >
                <a href={pageData.hero.ctaHref}>
                  {pageData.hero.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Scrivimi su WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#FFBC11]">58+</div>
              <div className="text-sm text-muted-foreground">Progetti Completati</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#FFBC11]">4.9</div>
              <div className="text-sm text-muted-foreground">Valutazione Media</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#FFBC11]">7-14</div>
              <div className="text-sm text-muted-foreground">Giorni Consegna</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#FFBC11]">100%</div>
              <div className="text-sm text-muted-foreground">Garanzia Soddisfazione</div>
            </div>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <span className="text-lg">🛡️</span>
              Garanzia Soddisfatti o Rimborsati
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <span className="text-lg">💳</span>
              Pagamento a Rate 0%
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              <span className="text-lg">🕐</span>
              Assistenza 24/7
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              <span className="text-lg">⚡</span>
              Pronto in 7-14 Giorni
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              <span className="text-lg">🔥</span>
              Solo 3 Slot Disponibili
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
      {pageData.problems && pageData.problems.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                Problemi Comuni
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ti riconosci in questa situazione?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Molte attivita a {pageData.cityName} affrontano gli stessi ostacoli. 
                La buona notizia? Sono tutti risolvibili.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pageData.problems.map((problem, idx) => (
                <Card key={idx} className="bg-card border-amber-200/50">
                  <CardHeader>
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {problem.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CASE STUDY SECTION - "Pichello" */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Star className="h-4 w-4 mr-2 text-[#FFBC11]" />
              Risultati Reali
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cosa succede quando lavori con me?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Non solo parole. Ecco un esempio concreto di cosa posso fare per il tuo business.
            </p>
          </div>

          <Card className="bg-card border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center bg-muted/20">
                <div className="uppercase tracking-wide text-sm text-[#FFBC11] font-semibold">Caso Studio: Pichello</div>
                <h3 className="mt-2 text-3xl font-bold text-foreground">Da Idea a Startup Nazionale</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Pichello aveva bisogno di una piattaforma veloce e scalabile per connettere fotografi e clienti. Le agenzie classiche chiedevano tempi biblici.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Lancio in soli 30 giorni</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>+200% utenti nel primo mese</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Performance Core Web Vitals 99/100</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted min-h-[300px] relative flex items-center justify-center">
                {/* Placeholder for visual - using simple abstract representation */}
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-muted-foreground/20">PICHELLO</div>
                  <div className="mt-4 text-sm text-muted-foreground">Piattaforma Web App Custom</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perché scegliere Manuel De Ceglie?
            </h2>
            <p className="text-lg text-muted-foreground">
              Confronta tu stesso. La qualità di un'agenzia, la velocità di un freelance, al prezzo giusto.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="p-4 text-left font-medium text-muted-foreground">Caratteristica</th>
                  <th className="p-4 text-center font-bold text-[#FFBC11] text-lg bg-[#FFBC11]/10 border-x border-[#FFBC11]/20">Manuel De Ceglie</th>
                  <th className="p-4 text-center font-medium text-muted-foreground">Agenzia Web</th>
                  <th className="p-4 text-center font-medium text-muted-foreground">Fai-da-te (Wix/Square)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center font-bold bg-[#FFBC11]/5 border-x border-[#FFBC11]/20">{row.me}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.agency}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-[#FFBC11]/10 border-2 border-[#FFBC11] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-[#FFBC11] text-black text-xs font-bold px-3 py-1 rotate-12">GARANZIA</div>
            
            <h2 className="text-3xl font-bold mb-4 text-foreground">Garanzia "Soddisfatto o Rimborsato"</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sono così sicuro della qualità del mio lavoro che ti offro una garanzia unica. 
              Se entro 30 giorni dalla consegna non sei soddisfatto del risultato tecnico, ti rimborso l'ultima rata del progetto.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-[#FFBC11] mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold">Zero Rischi</h4>
                  <p className="text-sm text-muted-foreground">Paghi solo se il lavoro rispetta gli standard.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-[#FFBC11] mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold">Supporto 24h</h4>
                  <p className="text-sm text-muted-foreground">Non sparisco dopo la consegna.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-[#FFBC11] mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold">Prezzo Bloccato</h4>
                  <p className="text-sm text-muted-foreground">Nessun costo extra a sorpresa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="prezzi" className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Prezzi Trasparenti
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {service.name} a {pageData.cityName}: Quanto Costa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prezzi chiari, nessuna sorpresa. Scegli il pacchetto piu adatto alle tue esigenze.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.pricing.map((tier, idx) => (
              <Card 
                key={tier.id} 
                className={cn(
                  "relative",
                  tier.popular && "border-[#FFBC11] border-2 shadow-lg"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#FFBC11] text-black">
                      <Star className="h-3 w-3 mr-1" />
                      {tier.badge || "Piu Richiesto"}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {tier.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€{tier.price}</span>
                    {tier.price.includes('/') ? '' : <span className="text-muted-foreground"> una tantum</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={cn(
                      "w-full mt-6",
                      tier.popular 
                        ? "bg-[#FFBC11] text-black hover:bg-[#FFBC11]/90" 
                        : ""
                    )}
                    variant={tier.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href="#contatti">
                      Richiedi Preventivo
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * I prezzi sono indicativi. Ogni progetto viene valutato singolarmente per fornirti un preventivo personalizzato.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      {pageData.faq.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Lightbulb className="h-4 w-4 mr-2" />
                Domande Frequenti
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {service.name} a {pageData.cityName}: FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {pageData.faq.map((item, idx) => (
                <details 
                  key={idx}
                  className="group bg-card border border-border rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <h3 className="font-medium pr-4">{item.question}</h3>
                    <ChevronRight className="h-5 w-5 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEARBY CITIES SECTION */}
      {pageData.nearbyCities.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                Zone Servite
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {service.name} anche nelle zone vicine
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Offro i miei servizi anche a {pageData.nearbyCities.map(c => c.name).join(', ')}.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {pageData.nearbyCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${service.slug}/${city.slug}`}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-[#FFBC11] hover:shadow-md transition-all"
                >
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <div className="font-medium text-sm">{city.name}</div>
                  <div className="text-xs text-muted-foreground">{city.province}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES SECTION */}
      {pageData.relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Users className="h-4 w-4 mr-2" />
                Altri Servizi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Potrebbe interessarti anche
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pageData.relatedServices.map((relatedService) => {
                const RelatedIcon = SERVICE_ICONS[relatedService.slug] || Globe;
                return (
                  <Link
                    key={relatedService.slug}
                    href={`/${relatedService.slug}/${pageData.citySlug}`}
                    className="group"
                  >
                    <Card className="h-full group-hover:border-[#FFBC11] group-hover:shadow-md transition-all">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-[#FFBC11]/20 transition-colors">
                          <RelatedIcon className="h-6 w-6 text-muted-foreground group-hover:text-[#FFBC11] transition-colors" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-[#FFBC11] transition-colors">
                          {relatedService.name} a {pageData.cityName}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {relatedService.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT SECTION */}
      <section id="contatti" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Parliamo del tuo progetto
            </h2>
            <p className="text-lg text-muted-foreground">
              Contattami per un preventivo gratuito e senza impegno.
              Rispondo entro 24 ore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white rounded-xl p-6 flex items-center gap-4 hover:bg-[#25D366]/90 transition-colors"
            >
              <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <div className="font-semibold text-lg">WhatsApp</div>
                <div className="text-white/80">Risposta rapida, anche fuori orario</div>
              </div>
            </a>

            <a
              href="tel:+393711816124"
              className="bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:border-[#FFBC11] hover:shadow-md transition-all"
            >
              <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center shrink-0">
                <Phone className="h-7 w-7 text-muted-foreground" />
              </div>
              <div>
                <div className="font-semibold text-lg">Chiamami</div>
                <div className="text-muted-foreground">+39 371 181 6124</div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Oppure scrivimi a{" "}
              <a 
                href="mailto:info@manueldeceglie.it" 
                className="text-[#FFBC11] hover:underline"
              >
                info@manueldeceglie.it
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM BAR (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 md:hidden z-50">
        <div className="flex gap-3">
          <Button 
            className="flex-1 bg-[#FFBC11] text-black hover:bg-[#FFBC11]/90"
            asChild
          >
            <a href="#contatti">Preventivo Gratuito</a>
          </Button>
          <Button 
            variant="outline"
            size="icon"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 md:hidden" />
    </main>
  );
}
