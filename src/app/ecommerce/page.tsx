/**
 * E-COMMERCE SERVICE HUB PAGE
 * 
 * This is the main /ecommerce page that acts as the hub for all
 * e-commerce city pages. Links to all qualifying cities.
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { getServiceBySlug } from '@/data/services-config';
import { LOCATIONS, getLocationsByPriority } from '@/data/locations';
import { 
  ShoppingCart, ArrowRight, MapPin, Check, 
  TrendingUp, Zap, Shield, Star, MessageCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// =============================================================================
// METADATA
// =============================================================================

const service = getServiceBySlug('ecommerce')!;

export const metadata: Metadata = {
  title: 'Realizzazione E-commerce Professionali | Manuel De Ceglie',
  description: 'Creo e-commerce su misura che vendono. Shopify, WooCommerce o custom. Gestione semplice, pagamenti sicuri, SEO integrato. Preventivo gratuito.',
  alternates: {
    canonical: 'https://manueldeceglie.it/ecommerce',
  },
  openGraph: {
    title: 'Realizzazione E-commerce Professionali | Manuel De Ceglie',
    description: 'Creo e-commerce su misura che vendono. Shopify, WooCommerce o custom.',
    url: 'https://manueldeceglie.it/ecommerce',
    type: 'website',
    siteName: 'Manuel De Ceglie',
  },
};

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function EcommerceHubPage() {
  // Get qualifying cities (population >= minPopulation)
  const qualifyingCities = LOCATIONS
    .filter(loc => loc.population >= service.minPopulation)
    .sort((a, b) => (a.priority || 3) - (b.priority || 3));

  const priorityCities = qualifyingCities.filter(c => c.priority === 1);
  const otherCities = qualifyingCities.filter(c => c.priority !== 1);

  // WhatsApp link
  const whatsappMessage = encodeURIComponent(
    'Ciao Manuel, sono interessato alla realizzazione di un e-commerce. Vorrei ricevere un preventivo.'
  );
  const whatsappUrl = `https://wa.me/393711816124?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              <ShoppingCart className="h-4 w-4 mr-2" />
              E-commerce Professionali
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Il tuo negozio online che vende davvero
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Creo e-commerce su misura o su piattaforme consolidate (Shopify, WooCommerce). 
              Ogni shop è ottimizzato per vendere ed è facile da gestire.
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
            Perche scegliere me per il tuo e-commerce
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#FFBC11]/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#FFBC11]" />
                </div>
                <CardTitle>Veloce e Ottimizzato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  E-commerce veloci che non fanno scappare i clienti. 
                  Core Web Vitals ottimizzati per Google.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#FFBC11]/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#FFBC11]" />
                </div>
                <CardTitle>Pagamenti Sicuri</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stripe, PayPal, bonifico, contrassegno. 
                  Tutti i gateway necessari per vendere online.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#FFBC11]/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#FFBC11]" />
                </div>
                <CardTitle>SEO Integrato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ogni prodotto ottimizzato per Google. 
                  Fatti trovare da chi cerca i tuoi prodotti.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Quanto costa un e-commerce?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Prezzi trasparenti, nessuna sorpresa. Il tuo e-commerce chiavi in mano.
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
            E-commerce in tutta Italia
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Realizzo e-commerce professionali per attività in ogni regione. 
            Trova la pagina dedicata alla tua città.
          </p>

          {/* Priority cities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-[#FFBC11]" />
              Citta principali
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {priorityCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/ecommerce/${city.slug}`}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-[#FFBC11] hover:shadow-md transition-all"
                >
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-[#FFBC11]" />
                  <div className="font-medium">{city.name}</div>
                  <div className="text-xs text-muted-foreground">{city.province}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Other cities */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              Altre zone servite
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {otherCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/ecommerce/${city.slug}`}
                  className="bg-card border border-border rounded-lg p-3 text-center hover:border-[#FFBC11] transition-all text-sm"
                >
                  <div className="font-medium">{city.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contatti" className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto a vendere online?
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
