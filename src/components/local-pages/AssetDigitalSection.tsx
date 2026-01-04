"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ShieldCheck, Zap, Star, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlurFade from "@/components/magicui/blur-fade"
import { cn } from "@/lib/utils"

const features = [
  {
    id: 0,
    title: "Il tuo biglietto da visita h24",
    desc: "Mentre tu dormi, il sito lavora. Risponde alle domande, mostra i tuoi lavori e convince i clienti. Se è trascurato, il cliente penserà che lo sia anche il tuo lavoro.",
    icon: Star,
  },
  {
    id: 1,
    title: "L'unica cosa che possiedi davvero",
    desc: "I social sono in affitto. Se l'algoritmo cambia, sparisci. Il sito è casa tua. Nessuno può togliertelo. È un asset che accumula valore nel tempo.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Un venditore che non chiede stipendio",
    desc: "Smetti di spiegare a tutti chi sei e quanto costi. Un sito ben fatto filtra i perditempo e ti porta solo clienti già convinti e pronti a pagare.",
    icon: Zap,
  },
]

export function AssetDigitalSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (featureRefs.current.length === 0) return

      const viewportCenter = window.innerHeight / 2
      let closestIndex = 0
      let closestDistance = Infinity

      featureRefs.current.forEach((ref, index) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - elementCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveStep(closestIndex)
    }

    handleScroll() // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Background Ambientale */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#FFBC11]/5 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <div className="container max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header Centrale */}
        <div className="text-center mb-20 md:mb-32 py-12">
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6 max-w-4xl mx-auto">
              Non è solo un sito. <br />
              È il tuo <span className="relative inline-block text-foreground z-10">
                Asset Digitale
                <span className="absolute bottom-3 left-0 w-full h-4 bg-[#FFBC11]/40 -z-10 -rotate-1 rounded-sm"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Un investimento che lavora per te 24/7, non un costo da gestire.
            </p>
          </BlurFade>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* LEFT COLUMN: SCROLLABLE NARRATIVE */}
          <div className="flex flex-col justify-center py-12 md:py-20">

            {/* Timeline Content */}
            <div className="relative space-y-24 md:space-y-32">
              {/* Linea guida verticale continua */}
              <div className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-gray-100 hidden md:block"></div>

              {/* Linea progressiva colorata */}
              <div
                className="absolute left-[27px] top-2 w-[2px] bg-[#FFBC11] transition-all duration-700 ease-out hidden md:block"
                style={{ height: `${((activeStep + 0.5) / features.length) * 100}%` }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFBC11] shadow-[0_0_20px_#FFBC11]"></div>
              </div>

              {features.map((feature, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    featureRefs.current[i] = el
                  }}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "group relative pl-0 md:pl-20 transition-all duration-500 cursor-pointer",
                    activeStep === i ? "opacity-100" : "opacity-30 hover:opacity-60"
                  )}
                >
                  {/* Mobile Icon */}
                  <div className="md:hidden mb-4 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                    <feature.icon className="w-6 h-6 text-[#FFBC11]" />
                  </div>

                  <h3
                    className={cn(
                      "text-3xl md:text-4xl font-black mb-4 transition-transform duration-500 origin-left tracking-tight",
                      activeStep === i ? "translate-x-2 text-primary" : "text-foreground"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-xl">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24 pl-0 md:pl-20">
              <Button
                size="lg"
                className="h-16 px-10 rounded-full font-bold text-lg bg-primary text-white shadow-2xl hover:scale-105 transition-all group"
                asChild
              >
                <Link href="#contatti">
                  Costruiamo il tuo Asset
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY VISUAL */}
          <div className="hidden lg:flex flex-col justify-start relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center py-10">
              <div className="relative w-full max-w-[500px] aspect-square">
                {/* Ambient Glow Dietro la card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBC11]/20 to-primary/10 rounded-full blur-[80px] transform scale-90 animate-pulse"></div>

                <AnimatePresence mode="wait">
                  {/* SCENE 1: REPUTATION */}
                  {activeStep === 0 && (
                    <motion.div
                      key="reputation"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                      transition={{ duration: 0.5, ease: "backOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-white rounded-[3rem] p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-white/50 w-full relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-[6px] border-white shadow-xl"></div>
                          <div className="space-y-3">
                            <div className="h-6 w-48 bg-gray-100 rounded-full"></div>
                            <div className="flex gap-1.5 text-[#FFBC11]">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-6 h-6 fill-current drop-shadow-sm" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4 mb-8">
                          <div className="h-4 w-full bg-gray-50 rounded-full"></div>
                          <div className="h-4 w-[90%] bg-gray-50 rounded-full"></div>
                          <div className="h-4 w-[75%] bg-gray-50 rounded-full"></div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100">
                          <CheckCircle2 className="w-5 h-5" />
                          Attività Verificata
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="absolute -top-6 -right-6 bg-[#FFBC11] text-white p-5 rounded-[2rem] shadow-xl z-20 rotate-12"
                        >
                          <div className="text-xs font-bold uppercase opacity-90 mb-1">Rating</div>
                          <div className="text-4xl font-black">5.0</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 2: OWNERSHIP */}
                  {activeStep === 1 && (
                    <motion.div
                      key="ownership"
                      initial={{ opacity: 0, rotateX: 20 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      exit={{ opacity: 0, rotateX: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-[#0a0a0a] text-white rounded-[3rem] p-12 shadow-2xl border border-white/10 w-full relative overflow-hidden aspect-square flex flex-col items-center justify-center">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        <div className="relative z-10 text-center">
                          <div className="w-28 h-28 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-8 mx-auto shadow-[0_0_60px_rgba(34,197,94,0.2)]">
                            <ShieldCheck className="w-14 h-14 text-green-500" />
                          </div>
                          <h3 className="text-3xl font-bold mb-2 tracking-tight">Proprietà 100%</h3>
                          <p className="text-gray-400 text-lg">Database, Codice, Dominio.</p>
                        </div>

                        <div className="absolute bottom-10 inset-x-12 bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="font-mono text-sm text-gray-300">ACCESS GRANTED</span>
                          </div>
                          <span className="font-mono text-sm text-green-400 font-bold">ADMIN</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 3: AUTOMATION */}
                  {activeStep === 2 && (
                    <motion.div
                      key="automation"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 flex flex-col justify-center gap-5"
                    >
                      {[
                        { label: "Nuova Prenotazione", val: "Alessandro M.", time: "Adesso", color: "bg-blue-500", icon: Zap },
                        { label: "Pagamento Ricevuto", val: "€ 850,00", time: "2 min fa", color: "bg-green-500", icon: CheckCircle2 },
                        { label: "Lead Qualificato", val: "Hotel Ristoro", time: "15 min fa", color: "bg-[#FFBC11]", icon: Star },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                          className="bg-white rounded-3xl p-6 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-between hover:scale-105 transition-transform"
                        >
                          <div className="flex items-center gap-5">
                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
                              <item.icon className="w-7 h-7 fill-current" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                                {item.label}
                              </div>
                              <div className="text-xl font-black text-foreground">{item.val}</div>
                            </div>
                          </div>
                          <div className="text-xs font-mono bg-gray-50 px-3 py-1.5 rounded-lg text-gray-500 font-bold">
                            {item.time}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

