"use client"

import { LocalPageData } from "@/data/local-pages/types";
import { CheckCircle2, ArrowRight, Zap, Check, Clock, Shield, BarChart3, Users, TrendingUp, Target, Database, Settings, FileText, Star, Rocket, Handshake, Lightbulb, ChevronRight, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ServiceContactForm } from "@/components/service-contact-form";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

interface SoftwareLocalPageTemplateProps {
  data: LocalPageData;
  nearbyCities?: LocalPageData[];
}

// Map coordinates for Italian cities
const CITY_COORDS: Record<string, { lat: number; lng: number; zoom: number }> = {
  'bologna': { lat: 44.4949, lng: 11.3426, zoom: 11 },
  'modena': { lat: 44.6471, lng: 10.9254, zoom: 12 },
  'parma': { lat: 44.8015, lng: 10.3279, zoom: 12 },
  'reggio-emilia': { lat: 44.6989, lng: 10.6299, zoom: 12 },
  'piacenza': { lat: 45.0494, lng: 9.6935, zoom: 12 },
  'ferrara': { lat: 44.8371, lng: 11.6187, zoom: 12 },
  'ravenna': { lat: 44.4186, lng: 12.2035, zoom: 12 },
  'rimini': { lat: 44.0678, lng: 12.5695, zoom: 12 },
  'firenze': { lat: 43.7696, lng: 11.2558, zoom: 11 },
  'milano': { lat: 45.4642, lng: 9.1900, zoom: 11 },
};

function MapSection({ cityName, citySlug }: { cityName: string; citySlug: string }) {
  const coords = CITY_COORDS[citySlug.toLowerCase()] || { lat: 44.4949, lng: 11.3426, zoom: 11 };
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng - 0.05}%2C${coords.lat - 0.05}%2C${coords.lng + 0.05}%2C${coords.lat + 0.05}&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`;

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="container max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Area di Servizio</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900">
            Opero a {cityName} e provincia
          </h3>
          <p className="text-gray-600 font-medium mt-2">
            Interventi in loco e supporto remoto per tutto il territorio
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mappa dell'area di servizio a ${cityName}`}
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFBC11]/20 flex items-center justify-center">
              <Navigation className="w-5 h-5 text-[#FFBC11]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Zona coperta</p>
              <p className="text-sm font-bold text-gray-900">{cityName} e Hinterland</p>
            </div>
          </div>
          <a
            href={`https://www.openstreetmap.org/?mlat=${coords.lat}&mlon=${coords.lng}#map=${coords.zoom}/${coords.lat}/${coords.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg text-xs font-bold text-gray-600 hover:text-[#FFBC11] transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3 h-3" />
            Apri in OpenStreetMap
          </a>
        </div>
      </div>
    </section>
  );
}

export default function SoftwareLocalPageTemplate({ data, nearbyCities = [] }: SoftwareLocalPageTemplateProps) {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-[#FFBC11]/30 selection:text-black overflow-x-hidden">

      {/* Hero Section - Tech/SaaS Dark Theme */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0d0d1a] to-[#1a1a2e] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#FFBC11]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
        </div>

        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Software Gestionale Su Misura a {data.cityName}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-8 text-balance">
              {data.hero.h1}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-10 max-w-3xl mx-auto text-balance">
              {data.hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-[#FFBC11] text-black font-bold text-lg hover:bg-[#FFBC11]/90 shadow-[0_0_30px_-5px_rgba(255,188,17,0.4)] transition-all hover:scale-105"
                asChild
              >
                <a href="#contatti">
                  {data.hero.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <WhatsAppButton
                size="lg"
                className="h-14 px-8 rounded-full"
                message={`Ciao Manuel! Vorrei informazioni sul software gestionale per ${data.cityName}.`}
              >
                Scrivimi su WhatsApp
              </WhatsAppButton>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>{data.hero.trustSignal}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stats Strip */}
      <section className="py-10 bg-white border-b border-gray-100 relative -mt-6 z-20">
        <div className="container max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: 'Tempo risparmiato a settimana', value: '8-15 ore' },
              { icon: Zap, label: 'Errori eliminati', value: 'Fino al 90%' },
              { icon: TrendingUp, label: 'Produttività in piú', value: '+40%' },
              { icon: Target, label: 'Precisione garantita', value: '100%' },
            ].map((stat, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#FFBC11]/30 transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#FFBC11]/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-[#FFBC11]" />
                    </div>
                    <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostica Section - Terminal/Scanner Style with Value-Driven Solutions */}
      {data.diagnostica && (
        <section className="py-20 md:py-28 bg-[#0a0a0a] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#1a1a2e_1px,transparent_1px),linear-gradient(#1a1a2e_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
              <BlurFade delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                  <Zap className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">Analisi Gratuita - Scopri il Potenziale</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
                  {data.diagnostica.title}
                </h2>
                <p className="text-gray-400 font-medium max-w-2xl mx-auto">
                  Ecco cosa posso fare per trasformare la tua attività con un software su misura
                </p>
              </BlurFade>
            </div>

            {/* Terminal-style comparison */}
            <div className="max-w-5xl mx-auto">
              <BlurFade delay={0.2}>
                <div className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                  {/* Terminal Header */}
                  <div className="bg-[#1a1a2e] px-6 py-4 flex items-center justify-between border-b border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-gray-400 text-sm font-mono">analisi — {data.cityName}</span>
                    </div>
                    <span className="text-gray-500 text-xs font-mono">100% personalizzato</span>
                  </div>

                  {/* Terminal Content */}
                  <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
                    {/* Problems Column */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-red-400 font-bold uppercase tracking-wider text-sm">Situazione Attuale</span>
                      </div>
                      <div className="space-y-4">
                        {data.diagnostica.problems.map((problem, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                            <span className="text-red-400 font-mono text-sm w-6 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                            <span className="text-gray-300 font-medium leading-relaxed">{problem}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions Column - New Card Design with Value */}
                    <div className="p-8 bg-[#0d0d1a]/50">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#FFBC11]"></div>
                        <span className="text-[#FFBC11] font-bold uppercase tracking-wider text-sm">La Mia Soluzione</span>
                      </div>
                      <div className="space-y-4">
                        {data.diagnostica.solutions.map((solution, i) => {
                          const solutionText = typeof solution === 'string' ? solution : (solution as { text: string }).text;
                          const solutionValue = typeof solution === 'string' ? null : (solution as { value: string }).value;
                          return (
                            <div key={i} className="group relative p-5 rounded-xl bg-gradient-to-br from-[#FFBC11]/10 to-transparent border border-[#FFBC11]/20 hover:border-[#FFBC11]/50 transition-all">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#FFBC11]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                  <Check className="w-6 h-6 text-[#FFBC11]" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-white font-bold mb-1">{solutionText}</p>
                                  {solutionValue && (
                                    <div className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                      <span className="text-green-400 text-sm font-medium">{solutionValue}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Terminal Footer */}
                  <div className="bg-[#1a1a2e] px-6 py-4 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-mono">$ ./calcola-miglioramento.sh</span>
                    <span className="text-green-400 text-sm font-mono">✓ Potenziale rilevato!</span>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
      )}

      {/* Perché Un Software Su Misura - Value Proposition */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
              Perché Un Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] to-orange-500">Su Misura</span>?
            </h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Perché meriti un工具 che lavora per te, non il contrario. Ecco cosa ottieni con un gestionale creato apposta per la tua attività.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Velocità Impossibile da Battere',
                description: 'Le operazioni che ti prendono minuti diventano secondi. Automatizzo tutto ciò che si ripete, così tu ti dedichi a ciò che conta davvero.',
                benefit: 'Risparmi 8-15 ore settimanali'
              },
              {
                icon: Shield,
                title: 'Zero Errori, Zero Pensieri',
                description: 'Niente più copia-incolla sbagliati, niente più dati che non tornano. Il software fa le verifiche per te, automaticamente.',
                benefit: 'Precisione garantita al 100%'
              },
              {
                icon: Lightbulb,
                title: 'Decisioni Basate sui Dati',
                description: 'Non vai piú a naso. Dashboard e report ti mostrano esattamente come va la tua attività, in tempo reale.',
                benefit: 'Guadagni di piú, sprechi di meno'
              },
              {
                icon: Handshake,
                title: 'Adattato a Te, Non Viceversa',
                description: 'Il software segue i tuoi processi, che hai affinato in anni di lavoro. Non il contrario. L\'apprendimento è minimo.',
                benefit: 'Subito operativo, senza stress'
              },
              {
                icon: TrendingUp,
                title: 'Cresce Con Te',
                description: 'Oggi ti serve poco, domani molto. Il software si espande con la tua attività, senza costi nascosti o canoni.',
                benefit: 'Un investimento che dura nel tempo'
              },
              {
                icon: CheckCircle2,
                title: 'Proprietà Totale',
                description: 'Il codice è tuo. Nessun abbonamento, nessun lock-in. Puoi modificarlo, ampliarlo, portarlo dove vuoi.',
                benefit: 'Indipendenza totale dal fornitore'
              },
            ].map((item, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div className="group h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:shadow-2xl hover:border-[#FFBC11]/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFBC11]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-[#FFBC11]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    {item.benefit}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Come Lavoro - Process Section */}
      <section className="py-20 md:py-28 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,188,17,0.1),transparent_50%)]"></div>
        </div>

        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
              Come Lavoro Insieme a Te
            </h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto">
              Un processo chiaro, trasparente e senza sorprese. Dalla prima chiacchierata al lancio del tuo software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Chiacchierata Gratuita',
                description: 'Ci sentiamo (30 min) e mi racconti la tua situazione. Ascolto, faccio domande, capisco le tue esigenze reali.',
                duration: 'Gratuito'
              },
              {
                step: '02',
                title: 'Analisi e Proposta',
                description: 'Studio i tuoi processi e ti mando una proposta dettagliata con tempistiche, costi e funzionalità incluse.',
                duration: '3-5 giorni'
              },
              {
                step: '03',
                title: 'Sviluppo Iterativo',
                description: 'Sviluppo il software in fasi, mostrandoti i progressi regolarmente. Puoi testare e dare feedback in tempo reale.',
                duration: '3-8 settimane'
              },
              {
                step: '04',
                title: 'Lancio e Formazione',
                description: 'Lanciamo il software insieme. Ti formo (e al tuo team) con video e documentazione. Resto disponibile.',
                duration: '1 settimana'
              },
            ].map((item, i) => (
              <BlurFade key={i} delay={i * 0.15}>
                <div className="relative h-full bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] rounded-3xl p-8 border border-gray-800 hover:border-[#FFBC11]/50 transition-all group">
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-[#FFBC11] flex items-center justify-center text-black font-black text-lg shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 mt-4">{item.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-[#FFBC11] text-sm font-bold">
                    <Clock className="w-4 h-4" />
                    {item.duration}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FFBC11]/10 border border-[#FFBC11]/30 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#FFBC11]" />
              <span className="font-medium">Nessun impegno dopo la prima chiacchierata</span>
            </div>
          </div>
        </div>
      </section>

      {/* Good Investment Section */}
      {data.goodInvestment && (
        <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
          <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                {data.goodInvestment.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] to-orange-500">
                  {data.goodInvestment.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                {data.goodInvestment.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {data.goodInvestment.cards?.map((card, i) => (
                <div key={i} className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#FFBC11]/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFBC11]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {card.icon === 'zap' && <Zap className="w-7 h-7 text-blue-500" />}
                      {card.icon === 'shield' && <Shield className="w-7 h-7 text-green-500" />}
                      {card.icon === 'star' && <Star className="w-7 h-7 text-orange-500" />}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 font-medium mb-4">{card.description}</p>
                    <p className="text-gray-500 text-sm mb-6">{card.description2}</p>

                    <div className="flex items-center gap-2 text-[#FFBC11] font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5" />
                      Incluso
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d1a] to-[#1a1a2e] text-white">
        <div className="container max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
              Funzionalità Che Fanno la Differenza
            </h2>
            <p className="text-lg text-gray-400 font-medium">
              Niente funzioni inutili. Solo strumenti concreti per la tua attività a {data.cityName} e provincia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'CRM Clienti', desc: 'Anagrafica completa, storico interazioni e gestione contatti' },
              { icon: FileText, title: 'Preventivi & Contratti', desc: 'Generazione PDF automatica con template personalizzati' },
              { icon: BarChart3, title: 'Dashboard & Report', desc: 'Metriche in tempo reale per decisioni vincenti' },
              { icon: Database, title: 'Magazzino', desc: 'Gestione scorte, alert minimi e ordini automatizzati' },
              { icon: Settings, title: 'Workflow Automatizzati', desc: 'Operazioni ripetitive eliminate per sempre' },
              { icon: Clock, title: 'Accesso Cloud', desc: 'I tuoi dati sempre disponibili, da ogni dispositivo' },
              { icon: Zap, title: 'Integrazioni', desc: 'Collegamento con email, WhatsApp, contabilità e più' },
              { icon: Shield, title: 'Sicurezza', desc: 'Backup automatici e crittografia dei dati sensibili' },
              { icon: Target, title: 'Permessi Utente', desc: 'Accesso personalizzato per ogni ruolo nel team' },
            ].map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FFBC11]/30 transition-all backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FFBC11]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#FFBC11]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-4">
              Domande Frequenti
            </h2>
            <p className="text-gray-600 font-medium">
              Tutto quello che vuoi sapere prima di iniziare
            </p>
          </div>
          <div className="space-y-4">
            {data.faq.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 hover:text-[#FFBC11] transition-colors list-none">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-xl leading-none text-gray-300 group-open:rotate-45 transition-transform group-open:text-[#FFBC11]">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium text-sm md:text-base border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Disponibile anche a:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((city) => (
                <a
                  key={city.slug}
                  href={`/software-gestionali/${city.slug}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-[#FFBC11] hover:text-black rounded-full text-gray-700 font-medium transition-all hover:shadow-md"
                >
                  {city.cityName}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      <MapSection cityName={data.cityName} citySlug={data.slug} />

      {/* Footer */}
      <section className="py-8 bg-gray-100">
        <div className="container max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 text-sm">
            <a href="/software-gestionali" className="text-[#FFBC11] hover:underline font-medium">
              Software Gestionali
            </a>
            {' '}•{' '}
            <a href="/" className="text-[#FFBC11] hover:underline font-medium">
              Home
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}
