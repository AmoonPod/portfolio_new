'use client'

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { ServiceContactForm } from '@/components/service-contact-form'
import { DATA } from '@/data/resume'

interface ContactSectionProps {
  cityName: string
  serviceSlug: string
}

export function ContactSection ({ cityName, serviceSlug }: ContactSectionProps) {
  return (
    <section id="contatti" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>

      <div className="container max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="space-y-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Pronto a dominare <br />
              <span className="text-[#FFBC11]"> {cityName}?</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 font-medium max-w-xl">
              Non lasciare che i tuoi clienti vadano dalla concorrenza solo perché loro hanno un sito migliore. Prendiamoci questo mercato insieme.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Preventivo chiaro e bloccato",
                "Nessun vincolo contrattuale a vita",
                "Proprietà 100% tua del codice"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFBC11] flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFBC11]">
                <Image src={DATA.avatarUrl} alt="Manuel" width={64} height={64} className="object-cover" />
              </div>
              <div>
                <div className="font-black text-xl">Manuel De Ceglie</div>
                <div className="text-[#FFBC11] text-sm font-bold uppercase tracking-wider">Web Developer</div>
              </div>
            </div>
          </div>

          <div className="bg-white text-foreground rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-[#FFBC11] text-primary px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest transform rotate-3 shadow-lg">
              Zero Spam
            </div>
            <ServiceContactForm
              serviceName={`LP - ${cityName}`}
              formTitle="Richiedi Analisi"
              formDescription="Ti rispondo personalmente entro 24h."
              submitButtonText="Invia Richiesta"
              hideServiceTypes={serviceSlug === 'siti-web'}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

