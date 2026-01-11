'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Search, TrendingUp } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BlurFade from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'

interface HeroProps {
  cityName: string
  hero: {
    h1: string
    sub: string
    ctaText: string
    ctaHref: string
    trustSignal?: string
  }
}

export function Hero({ cityName, hero }: HeroProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="relative py-24 md:py-20 overflow-hidden bg-[#FAFAFA]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFBC11]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <BlurFade delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-primary/10 backdrop-blur-md mb-8 group cursor-default hover:bg-muted/80 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FFBC11] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Sviluppo Siti Web a <span className="text-foreground font-black">{cityName}</span>
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-foreground text-balance">
                {hero.h1}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl font-medium">
                {hero.sub}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="relative group w-full sm:w-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-[#FFBC11] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                  <Button size="lg" className="relative w-full h-14 sm:h-16 px-8 rounded-2xl font-bold text-lg shadow-xl" asChild>
                    <Link href={hero.ctaHref}>
                      {hero.ctaText}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 sm:h-16 px-8 rounded-2xl border-2 border-[#25D366] hover:bg-[#25D366]/10 font-semibold text-base w-full sm:w-auto text-[#25D366] hover:text-[#25D366] transition-all"
                  asChild
                >
                  <a
                    href={`https://wa.me/393462136256?text=Ciao%20Manuel,%20voglio%20info%20per%20un%20sito%20a%20${encodeURIComponent(cityName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Scrivimi su WhatsApp
                  </a>
                </Button>
              </div>

              {/* <div className="mt-8 flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[8px] overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
                    </div>
                  ))}
                </div>
                {hero.trustSignal}
              </div> */}
            </BlurFade>
          </div>

          {/* Right: Visual Contextual Simulation */}
          <div className="lg:col-span-5 hidden lg:block">
            <BlurFade delay={0.3}>
              <motion.div
                style={{ y }}
                className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center"
              >
                {/* Success Visualization Card */}
                <div className="relative w-full bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 p-8 md:p-10 transform rotate-[-2deg] hover:rotate-0 transition-all duration-700 ease-out z-10">
                  
                  {/* Card Header: Client Result */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 text-lg">Risultati Reali</div>
                        <div className="text-xs font-bold text-green-600 uppercase tracking-wider">Nuovi contatti oggi</div>
                      </div>
                    </div>
                  </div>

                  {/* Notification List: Simulation of Business Success */}
                  <div className="space-y-4">
                    {[
                      { title: "Nuova richiesta preventivo", time: "2 min fa", type: "Email" },
                      { title: "Chiamata da Google Maps", time: "1 ora fa", type: "Tel" },
                      { title: "Messaggio WhatsApp", time: "3 ore fa", type: "WA" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.2) }}
                        className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 group/item hover:bg-white hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-sm font-bold text-gray-700">{item.title}</span>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Growth Badge */}
                  <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Crescita a {cityName}</div>
                    <div className="text-2xl font-black text-gray-900">+340%</div>
                  </div>
                </div>

                {/* Backdrop Decoration */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-primary/10 via-[#FFBC11]/10 to-primary/5 rounded-full blur-[80px] -z-10 animate-pulse"></div>
              </motion.div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}


