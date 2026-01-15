'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  Cpu,
  Code2,
  Database,
  BrainCircuit,
  AlertOctagon,
  Timer,
  Smartphone,
  CheckCircle2,
  Lock,
  AlertTriangle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import BlurFade from '@/components/magicui/blur-fade'
import { DATA } from '@/data/resume'

// --- COMPONENTI LOCALI ---

// 1. Bento Card (Riutilizzabile)
const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <BlurFade delay={delay} className={`h-full ${className}`}>
    <div className="h-full bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden relative group hover:border-[#FFBC11]/50 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFBC11]/0 via-[#FFBC11]/0 to-[#FFBC11]/5 group-hover:via-[#FFBC11]/10 transition-all duration-500"></div>
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  </BlurFade>
)

// 2. Dark Tech Form (Custom per questa landing)
function DarkTechForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [need, setNeed] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const formCarryEndpoint = "https://formcarry.com/s/fC-nAghgngU"

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus('idle')

    try {
      const response = await fetch(formCarryEndpoint, {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name, email, phone, need, message, serviceName: 'Il Tuo Business Sanguina - Analisi' })
      })
      const data = await response.json()

      if (data.code === 200) {
        setSubmissionStatus('success')
        setName(''); setEmail(''); setPhone(''); setNeed(''); setMessage('')
      } else {
        setSubmissionStatus('error')
        setErrorMessage(data.message || "Errore durante l'invio.")
      }
    } catch (error) {
      setSubmissionStatus('error')
      setErrorMessage("Errore di rete.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const needs = [
    { id: 'sito', label: 'Sito Web' },
    { id: 'gestionale', label: 'Gestionale' },
    { id: 'ai', label: 'AI / Automazioni' },
    { id: 'altro', label: 'Non lo so' }
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Nome</label>
          <input
            id="name" required value={name} onChange={e => setName(e.target.value)}
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-[#FFBC11] focus:ring-1 focus:ring-[#FFBC11] outline-none transition-all placeholder:text-zinc-700"
            placeholder="Il tuo nome"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email</label>
          <input
            id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-[#FFBC11] focus:ring-1 focus:ring-[#FFBC11] outline-none transition-all placeholder:text-zinc-700"
            placeholder="name@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Telefono (Opzionale)</label>
        <input
          id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)}
          className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-[#FFBC11] focus:ring-1 focus:ring-[#FFBC11] outline-none transition-all placeholder:text-zinc-700"
          placeholder="+39 ..."
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Area di interesse</label>
        <div className="grid grid-cols-2 gap-2">
          {needs.map(n => (
            <button
              key={n.id} type="button" onClick={() => setNeed(n.id)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-all ${need === n.id ? 'bg-[#FFBC11]/10 border-[#FFBC11] text-[#FFBC11]' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'}`}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Il problema</label>
        <textarea
          id="message" required rows={4} value={message} onChange={e => setMessage(e.target.value)}
          className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-[#FFBC11] focus:ring-1 focus:ring-[#FFBC11] outline-none transition-all placeholder:text-zinc-700 resize-none"
          placeholder="Qual è il problema principale che dobbiamo risolvere?"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-[#FFBC11] hover:bg-[#e5a910] text-black font-bold text-lg rounded-xl shadow-[0_0_20px_-5px_rgba(255,188,17,0.3)]">
        {isSubmitting ? 'Analisi in corso...' : 'RICHIEDI DIAGNOSI'}
        {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
      </Button>

      {submissionStatus === 'success' && <p className="text-green-500 text-center text-sm font-bold animate-pulse">Richiesta inviata con successo!</p>}
      {submissionStatus === 'error' && <p className="text-red-500 text-center text-sm">{errorMessage}</p>}
    </form>
  )
}


export default function IlTuoBusinessSanguinaPage() {
  return (
    <main className="min-h-screen font-sans bg-[#050505] text-white overflow-x-hidden w-full selection:bg-[#FFBC11] selection:text-black">

      {/* BACKGROUND MESH FISSO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-900/10 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FFBC11]/5 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
      </div>

      {/* HERO SECTION: CENTRATA & AGGRESSIVE */}
      <section className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 container max-w-[1400px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-8 hover:bg-red-500/20 transition-colors cursor-default">
              <AlertOctagon className="w-3.5 h-3.5" />
              Warning: Stai perdendo fatturato
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 text-balance">
              Il tuo business sanguina. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] to-orange-500">Fermiamo l'emorragia.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
              Hai un <Link href="/siti-web" className="text-white font-bold hover:text-[#FFBC11] transition-colors underline decoration-[#FFBC11]/30 underline-offset-2">sito web</Link> che non converte? Processi manuali che ti rallentano?
              Non serve un restyling. Serve un'infrastruttura digitale da guerra.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="h-16 px-10 rounded-full bg-[#FFBC11] text-black font-bold text-lg hover:bg-[#e5a910] shadow-[0_0_40px_-10px_rgba(255,188,17,0.5)] transition-all hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <Link href="#action">
                  Diagnosi Immediata
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <WhatsAppButton
                size="lg"
                className="h-16 px-10 rounded-full w-full sm:w-auto"
                message="Ciao Manuel! Ho scannerizzato il tuo QR code. Il mio sito non sta performando come vorrei..."
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* PAIN POINTS - BENTO GRID DISRUPTIVE */}
      <section className="relative z-10 py-12 container max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">

          {/* CARD 1: IL DATO ESPLOSIVO (Pichello) */}
          <div className="lg:col-span-8 row-span-2">
            <BentoCard className="bg-gradient-to-br from-zinc-900 to-black !border-zinc-800" delay={0.2}>
              <div className="flex flex-col justify-between h-full relative">
                <div className="absolute right-0 top-0 p-4 opacity-20 pointer-events-none">
                  <TrendingUp className="w-40 h-40 text-green-500" />
                </div>

                <div>
                  <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Caso Studio: Il Pichello
                  </h3>
                  <div className="text-6xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter mb-6 leading-none">
                    +900<span className="text-[#FFBC11]">%</span>
                  </div>
                  <p className="text-lg md:text-xl text-zinc-300 max-w-lg font-medium leading-relaxed">
                    È l'aumento di visibilità organica. Mentre tu leggi questa frase, i loro clienti li stanno trovando su Google senza spendere 1€ in ads.
                  </p>
                </div>

                <div className="mt-8 flex gap-3 flex-wrap">
                  <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    0 → 1° su Google Maps
                  </div>
                  <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Max. Posizionamento
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* CARD 2: MOBILE DISASTER */}
          <div className="lg:col-span-4 lg:row-span-2">
            <BentoCard className="!p-0 relative group bg-zinc-900" delay={0.3}>
              <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
              <div className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sito "Da Museo"</h3>
                <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                  Il 70% dei tuoi clienti ti cerca da smartphone. Se il tuo <Link href="/siti-web" className="text-white font-bold hover:text-[#FFBC11] transition-colors underline decoration-[#FFBC11]/30 underline-offset-2">sito</Link> non è una Web App fluida, stai regalando soldi.
                </p>
                {/* Visual Representation of broken mobile site */}
                <div className="mt-auto relative w-full h-40 bg-zinc-950 rounded-t-xl border-t border-x border-zinc-800 p-4 overflow-hidden opacity-60">
                  <div className="w-full h-2 bg-zinc-800 rounded-full mb-3"></div>
                  <div className="w-2/3 h-2 bg-zinc-800 rounded-full mb-6"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-zinc-800/50 rounded-lg"></div>
                    <div className="h-20 bg-zinc-800/50 rounded-lg"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                    <span className="text-red-500 font-mono text-xs font-bold border border-red-500/50 px-3 py-1 rounded bg-red-500/10 shadow-[0_0_15px_-3px_rgba(239,68,68,0.5)]">
                      UX CRITICAL ERROR
                    </span>
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* CARD 3: LENTEZZA */}
          <div className="lg:col-span-6">
            <BentoCard delay={0.4}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Timer className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Lentezza = Morte</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Google odia i siti lenti. Gli utenti ancora di più. Ogni secondo di caricamento ti costa il 20% di conversioni.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* CARD 4: MANCANZA AUTOMAZIONI */}
          <div className="lg:col-span-6">
            <BentoCard delay={0.5}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-500 shrink-0">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Zero Intelligenza</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Niente CRM? Niente risposte automatiche? Niente analisi dati?
                    Nel 2026, lavorare manualmente è un lusso che non puoi permetterti.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

        </div>
      </section>

      {/* THE SOLUTION TRINITY */}
      <section className="relative z-10 py-20 md:py-32 container max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            L'Arsenale Completo.
          </h2>
          <p className="text-zinc-400 text-xl font-medium">
            Non faccio "siti". Costruisco macchine da guerra digitali.
            Tre pilastri per dominare il tuo mercato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PILASTRO 1: WEB */}
          <BlurFade delay={0.2} className="group">
            <div className="h-full bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-[2rem] p-8 hover:border-[#FFBC11] transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code2 className="w-40 h-40 text-white" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#FFBC11] flex items-center justify-center text-black mb-8 relative z-10 shadow-[0_0_20px_-5px_#FFBC11]">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4"><Link href="/siti-web" className="hover:text-[#FFBC11] transition-colors">Siti Web</Link> Ultra-Fast</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-sm font-medium flex-grow">
                Non uso template WordPress. Scrivo codice custom (Next.js) che Google ama.
                Velocità istantanea, SEO aggressiva, Design che converte.
              </p>
              <ul className="space-y-3 text-sm text-zinc-300 border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FFBC11]" /> 100/100 Google Speed</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FFBC11]" /> SEO Tecnica Avanzata</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#FFBC11]" /> Mobile-First Reale</li>
              </ul>
            </div>
          </BlurFade>

          {/* PILASTRO 2: SOFTWARE */}
          <BlurFade delay={0.4} className="group">
            <div className="h-full bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-[2rem] p-8 hover:border-blue-500 transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database className="w-40 h-40 text-blue-500" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 relative z-10 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Gestionali & Software</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-sm font-medium flex-grow">
                Il sito porta i clienti, il software gestisce il lavoro.
                Sviluppo dashboard su misura, CRM personalizzati e app interne.
              </p>
              <ul className="space-y-3 text-sm text-zinc-300 border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Dashboard Amministrative</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Gestione Ordini & Clienti</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> App Mobile Native</li>
              </ul>
            </div>
          </BlurFade>

          {/* PILASTRO 3: AI */}
          <BlurFade delay={0.6} className="group">
            <div className="h-full bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-[2rem] p-8 hover:border-purple-500 transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <BrainCircuit className="w-40 h-40 text-purple-500" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white mb-8 relative z-10 shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)]">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">AI & Automazioni</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-sm font-medium flex-grow">
                Integro l'Intelligenza Artificiale nel tuo business.
                Chatbot che vendono h24, analisi predittive, automazione report.
              </p>
              <ul className="space-y-3 text-sm text-zinc-300 border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Chatbot AI Intelligenti</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Automazione Processi</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Analisi Dati Avanzata</li>
              </ul>
            </div>
          </BlurFade>

        </div>
      </section>

      {/* CTA SECTION - FORM TECH */}
      <section id="action" className="relative z-10 py-24 bg-black border-t border-zinc-900">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] mb-6">
                  Basta perdere tempo. <br />
                  <span className="text-[#FFBC11]">Parliamo di business.</span>
                </h2>
                <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                  Compila il form. Analizzo la tua situazione attuale (<Link href="/siti-web" className="text-white font-bold hover:text-[#FFBC11] transition-colors underline decoration-[#FFBC11]/30 underline-offset-2">Sito Web</Link>, Software, Processi) e ti dico cosa non va e come sistemarlo.
                </p>
              </div>

              <div className="bg-zinc-900/30 rounded-2xl p-8 border border-zinc-800 backdrop-blur-sm">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFBC11] shadow-lg shadow-[#FFBC11]/20">
                    <Image
                      src={DATA.avatarUrl}
                      alt="Manuel De Ceglie - Sviluppatore Web e Consulente Business Digitale"
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Manuel De Ceglie</div>
                    <div className="text-xs text-[#FFBC11] uppercase tracking-wider font-bold">Full Stack Developer</div>
                  </div>
                </div>
                <p className="text-base text-zinc-300 italic leading-relaxed">
                  "Non vendo pacchetti pre-confezionati. Costruisco soluzioni su misura per chi vuole dominare il mercato, non solo parteciparvi."
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/50">
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-4">Canale di emergenza (WhatsApp)</p>
                <WhatsAppButton
                  size="lg"
                  className="w-full h-14 rounded-xl shadow-[0_0_30px_-5px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_-5px_rgba(37,211,102,0.4)] transition-all"
                  message="Ciao Manuel, ho visto la pagina 'Il tuo business sanguina'. Ho bisogno di una diagnosi urgente."
                />
              </div>
            </div>

            {/* FORM CONTAINER - DARK & TECH */}
            <div className="relative">
              {/* Badge Mobile-Safe */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.5)] z-20 flex items-center gap-2 whitespace-nowrap">
                <AlertTriangle className="w-3 h-3 fill-white" />
                Action Required
              </div>

              <div className="bg-[#0A0A0A] border border-zinc-800 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
                {/* Subtle Background Glow inside form */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FFBC11]/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-white mb-2">Diagnosi Gratuita</h3>
                    <p className="text-zinc-400 text-sm">
                      Ti contatto entro 24h con un piano d'attacco.
                    </p>
                  </div>

                  <DarkTechForm />

                  <p className="mt-6 text-center text-[10px] text-zinc-600 uppercase tracking-widest flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" />
                    Dati criptati end-to-end
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

