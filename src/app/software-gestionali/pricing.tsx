"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
    CheckCircle2, 
    Circle, 
    Database, 
    FileText, 
    Package, 
    BarChart3, 
    Share2, 
    Smartphone, 
    Zap,
    Lock,
    Receipt,
    Calculator,
    CreditCard,
    FileBarChart,
    Building2,
    ShoppingCart,
    Bell,
    Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Configurazione dei prezzi base (nascosti all'utente, servono per la logica)
// Range realistico per setup iniziale, design e formazione (developer medium 40-60€/h)
const BASE_PRICE_MIN = 2000
const BASE_PRICE_MAX = 3500

interface Feature {
    id: string
    title: string
    priceMin: number
    priceMax: number
    description: string
    icon: any
    locked: boolean
}

const features: Feature[] = [
    {
        id: "core",
        title: "Core System & CRM",
        priceMin: 2500,
        priceMax: 4000,
        description: "Anagrafica clienti, gestione utenti e database sicuro.",
        icon: Database,
        locked: true // Questo non si può togliere
    },
    {
        id: "preventivi",
        title: "Preventivi & PDF",
        priceMin: 1200,
        priceMax: 2200,
        description: "Generazione documenti, firma digitale e archivio.",
        icon: FileText,
        locked: false
    },
    {
        id: "magazzino",
        title: "Magazzino & Ordini",
        priceMin: 3500,
        priceMax: 5500,
        description: "Gestione scorte, lotti, fornitori e movimenti.",
        icon: Package,
        locked: false
    },
    {
        id: "dashboard",
        title: "Dashboard Smart",
        priceMin: 1500,
        priceMax: 2800,
        description: "Statistiche, grafici di vendita e KPI in tempo reale.",
        icon: BarChart3,
        locked: false
    },
    {
        id: "integrazioni",
        title: "Integrazioni API",
        priceMin: 2000,
        priceMax: 3800,
        description: "Collegamento con Email, WhatsApp, Google, SDI.",
        icon: Share2,
        locked: false
    },
    {
        id: "mobile",
        title: "Web App Mobile",
        priceMin: 2500,
        priceMax: 4200,
        description: "Interfaccia ottimizzata per smartphone e tablet.",
        icon: Smartphone,
        locked: false
    },
    {
        id: "fatturazione",
        title: "Fatturazione Elettronica",
        priceMin: 1800,
        priceMax: 3200,
        description: "Fatture XML, invio SDI, conservazione sostitutiva.",
        icon: Receipt,
        locked: false
    },
    {
        id: "contabilita",
        title: "Contabilità & Bilancio",
        priceMin: 2800,
        priceMax: 4800,
        description: "Piano dei conti, registrazioni IVA, bilancio automatico.",
        icon: Calculator,
        locked: false
    },
    {
        id: "pagamenti",
        title: "Gestione Pagamenti",
        priceMin: 1500,
        priceMax: 2800,
        description: "Riconciliazione bancaria, scadenziario, incassi.",
        icon: CreditCard,
        locked: false
    },
    {
        id: "report",
        title: "Report Avanzati",
        priceMin: 1800,
        priceMax: 3200,
        description: "Report personalizzabili, export Excel, analisi approfondite.",
        icon: FileBarChart,
        locked: false
    },
    {
        id: "multiazienda",
        title: "Multi-Azienda",
        priceMin: 2200,
        priceMax: 3800,
        description: "Gestione di più aziende, consolidamento dati.",
        icon: Building2,
        locked: false
    },
    {
        id: "ecommerce",
        title: "Integrazione E-commerce",
        priceMin: 2500,
        priceMax: 4500,
        description: "Sincronizzazione con Shopify, WooCommerce, Magento.",
        icon: ShoppingCart,
        locked: false
    },
    {
        id: "notifiche",
        title: "Notifiche & Alert",
        priceMin: 1000,
        priceMax: 2000,
        description: "Notifiche push, email automatiche, reminder intelligenti.",
        icon: Bell,
        locked: false
    },
    {
        id: "sicurezza",
        title: "Backup & Sicurezza",
        priceMin: 1500,
        priceMax: 2800,
        description: "Backup automatici, crittografia, audit log, GDPR.",
        icon: Shield,
        locked: false
    },
]

export function PricingCalculator() {
    const [selected, setSelected] = useState<string[]>(["core", "preventivi"])
    const [totalMin, setTotalMin] = useState(0)
    const [totalMax, setTotalMax] = useState(0)
    const [totalAvg, setTotalAvg] = useState(0)

    // Calcola il totale ogni volta che cambia la selezione
    useEffect(() => {
        const { min, max } = selected.reduce((acc, id) => {
            const feature = features.find(f => f.id === id)
            if (feature) {
                acc.min += feature.priceMin
                acc.max += feature.priceMax
            }
            return acc
        }, { min: BASE_PRICE_MIN, max: BASE_PRICE_MAX })
        
        setTotalMin(min)
        setTotalMax(max)
        setTotalAvg(Math.round((min + max) / 2))
    }, [selected])

    const toggleFeature = (id: string, locked: boolean) => {
        if (locked) return
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id))
        } else {
            setSelected([...selected, id])
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* LEFT: Options Grid */}
            <div className="p-8 md:p-12 lg:w-2/3 bg-gray-50/50">
                <div className="mb-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Configura il tuo Software</h3>
                    <p className="text-gray-500 font-medium">Seleziona i moduli che ti servono per ottenere una stima.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature) => {
                        const isSelected = selected.includes(feature.id)
                        const Icon = feature.icon

                        return (
                            <motion.div
                                key={feature.id}
                                whileTap={!feature.locked ? { scale: 0.98 } : {}}
                                onClick={() => toggleFeature(feature.id, feature.locked || false)}
                                className={`
                                    relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200
                                    flex flex-col gap-4 select-none
                                    ${isSelected 
                                        ? "bg-white border-[#FFBC11] shadow-lg shadow-[#FFBC11]/10" 
                                        : "bg-white border-transparent hover:border-gray-200 shadow-sm"
                                    }
                                    ${feature.locked ? "opacity-80 cursor-default" : ""}
                                `}
                            >
                                <div className="flex justify-between items-start">
                                    <div className={`
                                        w-10 h-10 rounded-full flex items-center justify-center
                                        ${isSelected ? "bg-[#FFBC11] text-black" : "bg-gray-100 text-gray-400"}
                                    `}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className={`
                                        w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                                        ${isSelected 
                                            ? "border-[#FFBC11] bg-[#FFBC11]" 
                                            : "border-gray-200 bg-transparent"
                                        }
                                    `}>
                                        {feature.locked ? (
                                            <Lock className="w-3 h-3 text-black" />
                                        ) : (
                                            isSelected && <CheckCircle2 className="w-4 h-4 text-black" />
                                        )}
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                                    <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <div className="mt-2 text-xs font-semibold text-gray-600">
                                        €{feature.priceMin.toLocaleString('it-IT')} - €{feature.priceMax.toLocaleString('it-IT')}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* RIGHT: Sticky Summary */}
            <div className="bg-[#111] text-white p-8 md:p-12 lg:w-1/3 flex flex-col justify-between relative overflow-hidden">
                {/* Background FX */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFBC11]/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="relative z-10">
                    <span className="text-[#FFBC11] font-bold text-xs uppercase tracking-widest mb-2 block">
                        Stima Investimento
                    </span>
                    <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter flex items-start gap-1">
                        <span className="text-2xl mt-2 text-gray-500">€</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={totalAvg}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                {totalAvg.toLocaleString('it-IT')}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 text-sm font-medium">
                            Range: €{totalMin.toLocaleString('it-IT')} - €{totalMax.toLocaleString('it-IT')}
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium mb-8">
                        *Prezzo indicativo. Include setup, design e formazione. Il prezzo finale dipende dalla complessità specifica.
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-sm font-medium text-gray-400">
                            <span>Moduli Selezionati</span>
                            <span className="text-white">{selected.length}</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-400">
                            <span>Tempo di Sviluppo</span>
                            <span className="text-white">~ {4 + (selected.length * 1.5)} Settimane</span>
                        </div>
                        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mt-4">
                            <motion.div 
                                className="h-full bg-[#FFBC11]"
                                initial={{ width: 0 }}
                                animate={{ width: `${(selected.length / features.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-auto">
                    <Button 
                        size="lg" 
                        className="w-full h-14 rounded-xl bg-[#FFBC11] text-black font-bold text-lg hover:bg-[#ffc940] hover:scale-[1.02] transition-all"
                        asChild
                    >
                        <Link href={`https://wa.me/393505764958?text=Ciao Manuel, ho configurato una stima di circa €${totalAvg} (range €${totalMin}-€${totalMax}) sul sito per un software con ${selected.length} moduli. Possiamo parlarne?`} target="_blank">
                            Blocca questa offerta
                        </Link>
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                        Nessun impegno. Parliamo del progetto reale.
                    </p>
                </div>
            </div>
        </div>
    )
}