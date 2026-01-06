'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import BlurFade from '@/components/magicui/blur-fade'
import { cn } from '@/lib/utils'

interface FAQProps {
  faq: Array<{ q: string; a: string }>
}

export function FAQ ({ faq }: FAQProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white border-t border-border/40">
      <div className="container max-w-3xl mx-auto px-6">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Supporto</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-balance">
              Domande frequenti
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "group bg-muted/20 hover:bg-muted/40 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer",
                  openFaqIndex === index ? "bg-white shadow-xl ring-1 ring-black/5" : ""
                )}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                  <h3 className={cn("text-lg md:text-xl font-bold tracking-tight transition-colors", openFaqIndex === index ? "text-primary" : "text-foreground")}>
                    {item.q}
                  </h3>
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300 text-muted-foreground", openFaqIndex === index ? "rotate-180 text-primary" : "")} />
                </div>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-muted-foreground text-lg leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

