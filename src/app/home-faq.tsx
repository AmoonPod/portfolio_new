"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Quanto costa un progetto?",
    answer:
      "Dipende da cosa ti serve: un sito vetrina, un gestionale, un'app. Non ho listini fissi perché ogni progetto è diverso. Parliamone: ti faccio una stima chiara dopo aver capito le tue esigenze."
  },
  {
    question: "Quanto tempo ci vuole?",
    answer:
      "Per un sito, di solito 4-6 settimane. Per software o app, dipende dalla complessità. Ti terrò aggiornato passo passo, senza sorprese."
  },
  {
    question: "Lavori solo su siti web?",
    answer:
      "No. Faccio siti web, software gestionali, integrazioni tra sistemi, automazioni con AI e app mobile. Partiamo dal bisogno e scegliamo insieme la soluzione."
  },
  {
    question: "Lavori solo a Modena?",
    answer:
      "Lavoro principalmente in Emilia-Romagna, ma collaboro anche da remoto con clienti in tutta Italia. Per molti progetti non serve vedersi di persona."
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Domande Frequenti
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-lg border shadow-sm overflow-hidden transition-all cursor-pointer hover:shadow-md"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium font-sans">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
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
                    <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

