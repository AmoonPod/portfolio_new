"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import BlurFade from "@/components/magicui/blur-fade"
import { cn } from "@/lib/utils"

import Link from "next/link"

const faqs = [
  {
    question: "Quanto costa un progetto?",
    answer: (
      <>
        Dipende da cosa ti serve: un <Link href="/siti-web" className="underline decoration-[#FFBC11] underline-offset-4 hover:text-primary transition-colors">sito vetrina</Link>, un gestionale, un'app. Non ho listini fissi perché ogni progetto è diverso. Parliamone: ti faccio una stima chiara dopo aver capito le tue esigenze.
      </>
    )
  },
  {
    question: "Quanto tempo ci vuole?",
    answer:
      "Per un sito, di solito 4-6 settimane. Per software o app, dipende dalla complessità. Ti terrò aggiornato passo passo, senza sorprese."
  },
  {
    question: "Lavori solo su siti web?",
    answer: (
      <>
        No. Faccio <Link href="/siti-web" className="underline decoration-[#FFBC11] underline-offset-4 hover:text-primary transition-colors">siti web</Link>, <Link href="/sviluppo-software" className="underline decoration-[#FFBC11] underline-offset-4 hover:text-primary transition-colors">software su misura</Link>, integrazioni tra sistemi, automazioni con AI e app mobile. Partiamo dal bisogno e scegliamo insieme la soluzione.
      </>
    )
  },
  {
    question: "Dove lavori?",
    answer:
      "Lavoro principalmente nelle province di Modena e Reggio Emilia, ma collaboro anche da remoto con clienti in tutta Italia. Per molti progetti non serve vedersi di persona."
  },
  {
    question: "Cosa succede dopo la consegna?",
    answer:
      "Rimango disponibile per supporto e manutenzione. Per i siti c'è un canone annuale che include hosting, aggiornamenti e piccole modifiche. Per software e app, definiamo insieme un piano di assistenza."
  }
]

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-muted/30 border-t">
      <div className="container max-w-3xl mx-auto px-6">
        <BlurFade delay={0.7}>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tighter">
            Domande Frequenti
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "bg-background rounded-[1.5rem] border-2 transition-all cursor-pointer overflow-hidden",
                  openIndex === index ? "border-primary shadow-xl" : "border-transparent hover:border-primary/20 shadow-sm"
                )}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-8 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight leading-tight">
                    {faq.question}
                  </h3>
                  <div className={cn(
                    "w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300",
                    openIndex === index ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/20" : ""
                  )}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-6 text-muted-foreground text-xl leading-relaxed border-t-2 border-muted mt-2">
                        {faq.answer}
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

