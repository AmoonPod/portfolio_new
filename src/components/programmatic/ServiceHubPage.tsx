/**
 * REUSABLE SERVICE HUB COMPONENT
 * 
 * Used by all service hub pages (/ecommerce, /landing-pages, /posizionamento-seo)
 * to display a consistent layout with city links.
 */

import Link from 'next/link';
import { 
  ArrowRight, MapPin, Check, Star, MessageCircle,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceConfig } from '@/data/services-config';
import { Location, LOCATIONS } from '@/data/locations';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceHubPageProps {
  service: ServiceConfig;
  Icon: LucideIcon;
  headline: string;
  subheadline: string;
  features: Feature[];
}

export default function ServiceHubPage({
  service,
  Icon,
  headline,
  subheadline,
  features,
}: ServiceHubPageProps) {
  // Get qualifying cities
  const qualifyingCities = LOCATIONS
    .filter(loc => loc.population >= service.minPopulation)
    .sort((a, b) => (a.priority || 3) - (b.priority || 3));

  const priorityCities = qualifyingCities.filter(c => c.priority === 1);
  const otherCities = qualifyingCities.filter(c => c.priority !== 1);

  // WhatsApp link
  const whatsappMessage = encodeURIComponent(
    `Ciao Manuel, sono interessato ai servizi di ${service.name}. Vorrei ricevere maggiori informazioni.`
  );
  const whatsappUrl = `https://wa.me/393711816124?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              <Icon className="h-4 w-4 mr-2" />
              {service.name}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {headline}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#FFBC11] text-black hover:bg-[#FFBC11]/90 font-semibold"
                asChild
              >
                <a href="#contatti">
                  Richiedi Preventivo Gratuito
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
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perche scegliere i miei servizi di {service.name}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-[#FFBC11]/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#FFBC11]" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Quanto costa?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Prezzi trasparenti, nessuna sorpresa.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {service.pricing.map((tier) => (
              <Card 
                key={tier.id}
                className={tier.popular ? 'border-[#FFBC11] border-2 shadow-lg relative' : ''}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#FFBC11] text-black">
                      <Star className="h-3 w-3 mr-1" />
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <p className="text-muted-foreground mt-2">{tier.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€{tier.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES SECTION */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {service.name} in Emilia-Romagna
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Offro servizi di {service.name.toLowerCase()} in tutta la regione. 
            Trova la pagina dedicata alla tua città.
          </p>

          {/* Priority cities */}
          {priorityCities.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-[#FFBC11]" />
                Citta principali
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {priorityCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${service.slug}/${city.slug}`}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-[#FFBC11] hover:shadow-md transition-all"
                  >
                    <MapPin className="h-5 w-5 mx-auto mb-2 text-[#FFBC11]" />
                    <div className="font-medium">{city.name}</div>
                    <div className="text-xs text-muted-foreground">{city.province}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Other cities */}
          {otherCities.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                Altre zone servite
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {otherCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${service.slug}/${city.slug}`}
                    className="bg-card border border-border rounded-lg p-3 text-center hover:border-[#FFBC11] transition-all text-sm"
                  >
                    <div className="font-medium">{city.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contatti" className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Parliamo del tuo progetto
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contattami per un preventivo gratuito. Rispondo entro 24 ore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#FFBC11] text-black hover:bg-[#FFBC11]/90"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Scrivimi su WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+393711816124">
                Chiamami: 371 181 6124
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
