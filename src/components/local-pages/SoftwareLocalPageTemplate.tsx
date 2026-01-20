"use client"

import { LocalPageData } from "@/data/local-pages/types";
import { 
    CheckCircle2, 
    ArrowRight, 
    Zap, 
    Check, 
    Clock, 
    Shield, 
    BarChart3, 
    Users, 
    TrendingUp, 
    Target, 
    Database, 
    Settings, 
    FileText, 
    Rocket, 
    MapPin, 
    Navigation, 
    Cpu,
    MessageSquare,
    Globe,
    Calculator,
    Lightbulb,
    Handshake,
    Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ServiceContactForm } from "@/components/service-contact-form";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import { getLocationBySlug } from "@/data/locations";
import { Breadcrumb } from "./Breadcrumb";

interface SoftwareLocalPageTemplateProps {
  data: LocalPageData;
  nearbyCities?: LocalPageData[];
}

// Coordinate Città (Espandibile)
const CITY_COORDS: Record<string, { lat: number; lng: number; zoom: number }> = {
  'bologna': { lat: 44.4949, lng: 11.3426, zoom: 11 },
  'modena': { lat: 44.6471, lng: 10.9254, zoom: 12 },
  'parma': { lat: 44.8015, lng: 10.3279, zoom: 12 },
  'reggio-emilia': { lat: 44.6989, lng: 10.6299, zoom: 12 },
  'piacenza': { lat: 45.0494, lng: 9.6935, zoom: 12 },
  'ferrara': { lat: 44.8371, lng: 11.6187, zoom: 12 },
  'rimini': { lat: 44.0678, lng: 12.5695, zoom: 12 },
  'milano': { lat: 45.4642, lng: 9.1900, zoom: 11 },
  'default': { lat: 41.9028, lng: 12.4964, zoom: 6 } 
};

function MapSection({ cityName, citySlug }: { cityName: string; citySlug: string }) {
  const location = getLocationBySlug(citySlug);
  if (!location) return null;
  const coords = location.geo;

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng - 0.05}%2C${coords.lat - 0.05}%2C${coords.lng + 0.05}%2C${coords.lat + 0.05}&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`;

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="container max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                Supporto Locale
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
                Operativo a <span className="text-[#FFBC11]">{cityName}</span> e provincia
            </h3>
            <p className="text-gray-400 font-medium">
                Sviluppo remoto, ma disponibile per incontri e setup in loco nell'area.
            </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group hover:border-[#FFBC11]/30 transition-colors duration-500">
            {/* Dark Map Overlay Trick */}
            <div className="aspect-[16/9] md:aspect-[21/9] bg-[#1a1a1a] relative">
                <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%) grayscale(20%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mappa servizi software a ${cityName}`}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
            </div>
            
            {/* Card flottante */}
            <div className="absolute bottom-6 left-6 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-12 h-12 rounded-full bg-[#FFBC11] flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,188,17,0.4)]">
                    <Navigation className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Zona Coperta</p>
                    <p className="text-lg font-black text-white">{cityName}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

const generateLocalSchema = (data: LocalPageData) => {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Sviluppo Software Gestionale ${data.cityName}`,
        "description": `Sviluppo software e CRM su misura per aziende a ${data.cityName}.`,
        "url": `https://manueldeceglie.it/sviluppo-software/${data.slug}`,
        "priceRange": "€€€",
        "areaServed": {
            "@type": "City",
            "name": data.cityName
        },
        "provider": {
            "@type": "Person",
            "name": "Manuel De Ceglie"
        }
    }
}

export default function SoftwareLocalPageTemplate({ data, nearbyCities = [] }: SoftwareLocalPageTemplateProps) {
  const localSchema = generateLocalSchema(data);

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-[#FFBC11] selection:text-black overflow-x-hidden">

      {/* --- HERO SECTION (DARK) --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-[#050505] text-white">
        {/* Breadcrumb Navigation - Posizionato in modo assoluto */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-[#050505]/80 backdrop-blur-sm border-b border-white/5">
          <Breadcrumb
            serviceName={data.serviceName}
            serviceSlug={data.serviceSlug}
            cityName={data.cityName}
            variant="dark"
          />
        </div>
        {/* Il padding top esistente (pt-32) è già sufficiente per il breadcrumb */}
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-[#FFBC11]/5 rounded-full blur-[100px] pointer-events-none opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] pointer-events-none"></div>

        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-300">
                Soluzioni Digitali a {data.cityName}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.1] mb-8 text-balance drop-shadow-2xl">
              {data.hero.h1.split(data.cityName)[0]} 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] to-orange-500">{data.cityName}</span>
              {data.hero.h1.split(data.cityName)[1]}
            </h1>

            <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
              {data.hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-[#FFBC11] text-black font-black text-lg hover:bg-[#FFBC11] hover:brightness-110 shadow-[0_0_30px_-5px_rgba(255,188,17,0.4)] transition-all hover:scale-105 border border-[#FFBC11]"
                asChild
              >
                <a href="#prezzi">
                  {data.hero.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <WhatsAppButton
                size="lg"
                className="h-14 px-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white backdrop-blur-sm transition-all"
                message={`Ciao Manuel! Scrivo da ${data.cityName}, vorrei info sul software gestionale.`}
              >
                Scrivimi su WhatsApp
              </WhatsAppButton>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-8">
                {[
                  { icon: MapPin, label: 'Territorio', value: data.cityName },
                  { icon: Zap, label: 'Performance', value: '100%' },
                  { icon: Clock, label: 'Risparmio', value: '-15h/sett' },
                  { icon: Shield, label: 'Garanzia', value: 'Codice Tuo' },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                        <stat.icon className="w-6 h-6 text-[#FFBC11] mb-2" />
                        <div className="text-xl font-black text-white">{stat.value}</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* --- IL PROBLEMA (LIGHT) --- */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                    Il caos gestionale ti sta costando <br />
                    <span className="text-red-600 underline decoration-4 decoration-red-200 underline-offset-4">tempo e soldi</span>
                </h2>
                <p className="text-lg text-gray-600 font-medium">
                    A {data.cityName}, molte aziende sono frenate da processi obsoleti.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Clock, title: 'Ore Perse', desc: 'Compili le stesse informazioni su preventivi, fatture e email. Ogni documento è una perdita di tempo.' },
                    { icon: Target, title: 'Dati Sparsi', desc: 'Clienti su un foglio, ordini su un altro, scadenze sul calendario. Nessuna visione d’insieme.' },
                    { icon: Zap, title: 'Errori Umani', desc: 'Un copia-incolla sbagliato, un prezzo vecchio, una scadenza dimenticata. Errori che costano clienti.' },
                ].map((item, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                            <item.icon className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors" />
                        </div>
                        <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- DIAGNOSTICA (TERMINAL STYLE DARK) --- */}
      {data.diagnostica && (
        <section className="py-24 bg-[#080808] relative overflow-hidden">
          <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                    Problem Solving
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
                  {data.diagnostica.title}
                </h2>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="bg-[#0f0f0f] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative hover:border-white/20 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
                    
                    {/* Terminal Header */}
                    <div className="bg-[#151515] px-6 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <span className="text-xs font-mono text-gray-500">root@{data.slug.toLowerCase()}:~</span>
                    </div>

                    <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                        {/* Problemi */}
                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-red-500/10 rounded-lg"><Zap className="w-5 h-5 text-red-500" /></div>
                                <h3 className="text-lg font-bold text-white">Situazione Attuale</h3>
                            </div>
                            <ul className="space-y-6">
                                {data.diagnostica.problems.map((problem, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-400">
                                        <span className="font-mono text-red-500/50 mt-1">0{i+1}</span>
                                        <span className="leading-relaxed">{problem}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Soluzioni */}
                        <div className="p-8 md:p-12 bg-white/[0.02]">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-[#FFBC11]/10 rounded-lg"><Check className="w-5 h-5 text-[#FFBC11]" /></div>
                                <h3 className="text-lg font-bold text-white">Soluzione De Ceglie</h3>
                            </div>
                            <ul className="space-y-4">
                                {data.diagnostica.solutions.map((solution, i) => {
                                    const text = typeof solution === 'string' ? solution : solution.text;
                                    return (
                                        <li key={i} className="p-4 rounded-xl bg-[#FFBC11]/5 border border-[#FFBC11]/10 flex items-start gap-3 hover:bg-[#FFBC11]/10 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-[#FFBC11] shrink-0 mt-0.5" />
                                            <span className="text-white font-medium">{text}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      )}

      {/* --- PERCHÉ SU MISURA (LIGHT) --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
              Perché un Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] to-orange-500">Su Misura</span>?
            </h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Non accontentarti di soluzioni standard. Ecco cosa ottieni con un gestionale cucito addosso alla tua azienda di {data.cityName}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: 'Velocità Impossibile', desc: 'Le operazioni da 20 minuti diventano da 2 secondi. Automatizza tutto.', benefit: 'Risparmi 15h/sett' },
              { icon: Shield, title: 'Zero Errori', desc: 'Validazione dati automatica. Addio copia-incolla sbagliati.', benefit: 'Precisione 100%' },
              { icon: Lightbulb, title: 'Decisioni Reali', desc: 'Dashboard e report ti mostrano come va l\'azienda in tempo reale.', benefit: 'Controllo Totale' },
              { icon: Handshake, title: 'Adattato a Te', desc: 'Il software segue i tuoi processi, non il contrario. Niente stress.', benefit: 'Subito Operativo' },
              { icon: TrendingUp, title: 'Cresce Con Te', desc: 'Oggi ti serve poco, domani molto. Si espande senza costi folli.', benefit: 'Investimento Sicuro' },
              { icon: CheckCircle2, title: 'Proprietà Totale', desc: 'Il codice è tuo. Nessun abbonamento eterno, nessun lock-in.', benefit: 'Indipendenza' },
            ].map((item, i) => (
              <BlurFade key={i} delay={i * 0.1}>
                <div className="group h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#FFBC11]/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFBC11]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-[#FFBC11]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center gap-2 text-green-600 font-bold text-sm mt-auto">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    {item.benefit}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* --- PREZZI (CUSTOM SECTION) --- */}
      <section id="prezzi" className="py-24 bg-white relative">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                    Preventivo Personalizzato
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                    Ogni Software è Diverso
                </h2>
                <p className="text-lg text-gray-500 font-medium mb-8">
                    Il prezzo dipende da molti fattori: complessità, moduli necessari, integrazioni richieste e tempistiche.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] border-2 border-gray-100 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="space-y-8 mb-10">
                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFBC11]/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#FFBC11] transition-colors duration-300">
                                <MessageSquare className="w-6 h-6 text-[#FFBC11] group-hover:text-black transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-black text-gray-900 text-xl mb-2">Analisi Preliminare Gratuita</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                    Raccontami le tue esigenze. Analizzeremo insieme i processi aziendali da digitalizzare e ti fornirò un preventivo dettagliato e trasparente.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFBC11]/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#FFBC11] transition-colors duration-300">
                                <Calculator className="w-6 h-6 text-[#FFBC11] group-hover:text-black transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-black text-gray-900 text-xl mb-2">Preventivo Trasparente</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                    Riceverai un preventivo chiaro con costi suddivisi per modulo, tempistiche di sviluppo e fasi di lavoro. Niente sorprese.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFBC11]/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#FFBC11] transition-colors duration-300">
                                <Zap className="w-6 h-6 text-[#FFBC11] group-hover:text-black transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-black text-gray-900 text-xl mb-2">Sviluppo Flessibile</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                    Possiamo partire con i moduli essenziali e aggiungere funzionalità in seguito. Ti aiuto a definire le priorità.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <WhatsAppButton
                                size="lg"
                                className="h-16 px-10 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105"
                                message={`Ciao Manuel! Vorrei un preventivo per un software gestionale a ${data.cityName}.`}
                            >
                                Richiedi Preventivo via WhatsApp
                            </WhatsAppButton>
                            <Button
                                size="lg"
                                asChild
                                className="h-16 px-10 rounded-xl bg-[#0a0a0a] hover:bg-black text-white font-bold shadow-lg hover:scale-105 transition-all"
                            >
                                <a href="#contatti">Compila il Form</a>
                            </Button>
                        </div>
                        <p className="text-center text-sm text-gray-400 mt-6 font-medium flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4" /> Risposta garantita entro 24 ore
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FEATURES GRID (DARK) --- */}
      <section className="py-24 bg-[#050505]">
        <div className="container max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6">
              Stack Tecnologico & Moduli
            </h2>
            <p className="text-gray-400">Le migliori tecnologie per la tua azienda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'CRM Avanzato', desc: 'Gestione anagrafiche e lead' },
              { icon: FileText, title: 'Preventivi PDF', desc: 'Generazione automatica' },
              { icon: BarChart3, title: 'Analytics', desc: 'Dashboard decisionale' },
              { icon: Database, title: 'Magazzino', desc: 'Scorte e fornitori' },
              { icon: Settings, title: 'Workflow', desc: 'Processi automatici' },
              { icon: Globe, title: 'Cloud', desc: 'Accesso ovunque' },
              { icon: MessageSquare, title: 'WhatsApp', desc: 'Integrazione messaggi' },
              { icon: Shield, title: 'Sicurezza', desc: 'Backup & GDPR' },
              { icon: Target, title: 'Ruoli', desc: 'Permessi granulari' },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#FFBC11]/30 hover:bg-white/10 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-gray-500" />
                <div>
                    <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (LIGHT) --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">Domande Frequenti</h2>
          <div className="space-y-4">
            {data.faq.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm open:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 hover:text-[#FFBC11] transition-colors list-none select-none">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-xl leading-none text-gray-300 group-open:rotate-45 group-open:text-[#FFBC11] transition-transform origin-center">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium text-sm md:text-base border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHI SONO SECTION --- */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#FFBC11]/30">
                <Image
                  src="/manuel-de-ceglie-sviluppatore-web-modena.png"
                  alt={`Manuel De Ceglie - Sviluppatore Software Gestionale a ${data.cityName}`}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#FFBC11] rounded-full p-1.5">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                Ciao, sono Manuel 👋
              </h2>
              <p className="text-gray-600 leading-relaxed font-medium">
                Sviluppatore software dall'Appennino Reggiano. Da anni aiuto aziende di <strong className="text-gray-900">{data.cityName}</strong> e dintorni a digitalizzare i processi con <strong className="text-gray-900">software gestionali su misura che funzionano davvero</strong>. Niente giri di parole: analizzo i tuoi processi, costruisco la soluzione, e ti aiuto a renderla operativa a {data.cityName}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEARBY CITIES & MAP (DARK FOOTER AREA) --- */}
      <section className="bg-[#050505] border-t border-white/5 pt-12">
        {nearbyCities.length > 0 && (
            <div className="container max-w-[800px] mx-auto px-4 sm:px-6 text-center mb-12">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                Servizi disponibili anche a
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                {nearbyCities.map((city) => (
                    <Link
                    key={city.slug}
                    href={`/sviluppo-software/${city.slug}`}
                    className="px-4 py-2 bg-white/5 hover:bg-[#FFBC11] hover:text-black rounded-full text-gray-400 text-sm font-medium transition-all hover:scale-105"
                    >
                    {city.cityName}
                    </Link>
                ))}
                </div>
            </div>
        )}

        {/* --- MAP SECTION --- */}
        <MapSection cityName={data.cityName} citySlug={data.slug} />
      </section>

      {/* --- CONTACT HERO --- */}
      <section id="contatti" className="py-24 md:py-32 relative overflow-hidden bg-[#050505] text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFBC11]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 pt-8">
              <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter">
                Digitalizza la tua azienda <br />
                <span className="text-[#FFBC11]">una volta per tutte.</span>
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-lg">
                Raccontami i tuoi problemi gestionali. Ti dirò se posso risolverli e come.
                Senza impegno.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-sm font-bold text-white">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
                  Risposta garantita entro 24h
                </div>
                <div className="flex items-center gap-4 text-sm font-bold text-white">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-blue-500" /></div>
                  Analisi preliminare gratuita
                </div>
              </div>

              <div className="pt-8">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Canale Diretto</p>
                <WhatsAppButton
                  size="lg"
                  className="h-16 px-8 rounded-2xl w-full sm:w-auto shadow-2xl shadow-green-500/20 transition-all hover:scale-105 border border-white/10"
                  message={`Ciao Manuel! Voglio discutere di un software gestionale a ${data.cityName}...`}
                />
              </div>
            </div>

            <div className="bg-white text-black rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/10 relative">
              <ServiceContactForm
                serviceName={`Software Gestionali ${data.cityName} - Richiesta`}
                formTitle="Richiedi Preventivo"
                formDescription="Compila il modulo. Ti ricontatto io."
                submitButtonText="INVIA RICHIESTA GRATUITA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- STICKY MOBILE CTA --- */}
      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden animate-in slide-in-from-bottom duration-500">
        <div className="bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
          <div className="container max-w-[1200px] mx-auto px-4 py-3">
            <div className="grid grid-cols-2 gap-3">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-[#0a0a0a] text-white font-bold hover:bg-black"
                asChild
              >
                <a href="#prezzi">Preventivo</a>
              </Button>
              <WhatsAppButton
                size="lg"
                className="h-12 rounded-xl w-full justify-center bg-[#25D366] hover:bg-[#128C7E] text-white"
                message={`Ciao Manuel! Vorrei un preventivo per un software gestionale a ${data.cityName}.`}
              >
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>

    </main>
    </>
  );
}