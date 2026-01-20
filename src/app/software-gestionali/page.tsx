import type { Metadata } from 'next'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Database,
    BarChart3,
    Users,
    Clock,
    ShieldCheck,
    Code2,
    ChevronRight,
    Layers,
    Cpu,
    Server,
    Terminal,
    Puzzle,
    RefreshCw,
    MessageSquare,
    FileText,
    Calculator,
    ShoppingCart,
    Package,
    Truck,
    Calendar,
    Bell,
    Search,
    Briefcase,
    Store,
    UtensilsCrossed,
    Wrench,
    Stethoscope,
    GraduationCap,
    Home,
    Car,
    PawPrint,
    AlertCircle,
    TrendingUp,
    Smartphone,
    Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import BlurFade from '@/components/magicui/blur-fade'
import { ServiceContactForm } from '@/components/service-contact-form'
import { DATA } from '@/data/resume'
import { generateServiceJsonLd, generateFAQJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'

const BASE_URL = 'https://manueldeceglie.it'

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: 'Sviluppo Software Gestionale su Misura e CRM | Preventivo Online',
    description: 'Sviluppo software gestionali su misura e CRM personalizzati: automazione processi, integrazioni API, database SQL e report. Valutiamo insieme anche i requisiti Industria 4.0 / Transizione 5.0.',
    keywords: [
        'software gestionale', 'gestionale aziendale', 'crm su misura', 'software personalizzato',
        'sviluppo software gestionale su misura', 'erp su misura', 'sviluppo software italia',
        'software su misura', 'automatizzazione processi aziendali', 'digitalizzazione impresa',
        'gestionale clienti', 'software gestione magazzino', 'integrazioni api', 'api rest',
        'fatturazione elettronica', 'industria 4.0', 'transizione 5.0', 'crm per artigiani',
        'gestionale emilia romagna', 'sviluppo software modena', 'crm bologna'
    ],
    alternates: {
        canonical: `${BASE_URL}/software-gestionali`,
    },
    openGraph: {
        title: 'Sviluppo Software Gestionale su Misura e CRM',
        description: 'Smetti di combattere con Excel: gestionali su misura con automazioni, integrazioni API e report per PMI e professionisti.',
        url: `${BASE_URL}/software-gestionali`,
        siteName: 'Manuel De Ceglie',
        images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
        locale: 'it_IT',
        type: 'website',
    },
}

// --- DATA ---
const faqs = [
    {
        q: 'Perché dovrei investire in un software su misura invece di usare Excel?',
        a: 'Excel è ottimo per calcoli veloci, ma pessimo per gestire processi. Un software su misura centralizza i dati, elimina gli errori di copia-incolla, automatizza le operazioni ripetitive e ti dà una visione chiara del business. È un asset che cresce con la tua azienda, non un foglio che si rompe.'
    },
    {
        q: 'Quanto costa un software gestionale su misura?',
        a: 'Molto meno di quanto pensi rispetto al valore generato. Un CRM base parte da 1.500€ una tantum. Sistemi complessi con magazzino e API vanno dai 3.000€ agli 8.000€. Non ci sono canoni mensili eterni: il software diventa di tua proprietà.'
    },
    {
        q: 'Il mio team saprà usarlo senza problemi?',
        a: 'Assolutamente sì. Disegno interfacce "User-First", simili alle app che usano ogni giorno (come Facebook o WhatsApp). Elimino il superfluo. Inoltre, fornisco video-tutorial dedicati per il tuo staff.'
    },
    {
        q: 'Posso integrare il gestionale con i software che uso già?',
        a: 'Sì, è la mia specialità. Collego il gestionale a Google Calendar, Outlook, WhatsApp Business, Fatturazione Elettronica, Shopify/WooCommerce e banche. I dati devono fluire automaticamente.'
    },
    {
        q: 'I miei dati sono al sicuro?',
        a: 'La sicurezza è prioritaria. Utilizzo database crittografati, backup automatici giornalieri (su server diversi) e protocolli HTTPS sicuri. Decidiamo insieme se ospitare tutto in Cloud (accessibile ovunque) o su Server Locale.'
    }
]

const industries = [
    { name: 'Artigiani e Fabbri', icon: Wrench, desc: 'Gestione commesse, preventivi, materiali, clienti' },
    { name: 'Ristoranti e Bar', icon: UtensilsCrossed, desc: 'Ordini, fornitori, magazzino, prenotazioni' },
    { name: 'Negozi e Retail', icon: Store, desc: 'Inventario, vendite, clienti fidelizzati' },
    { name: 'Studi Professionali', icon: Briefcase, desc: 'Gestione pratiche, scadenze e clienti' },
    { name: 'Dentisti e Medici', icon: Stethoscope, desc: 'Prenotazioni, cartelle pazienti e promemoria' },
    { name: 'Corrieri e Trasporti', icon: Truck, desc: 'Tracciamento, pianificazione e gestione clienti' },
    { name: 'Palestre e Scuole', icon: GraduationCap, desc: 'Abbonamenti, prenotazioni e iscrizioni' },
    { name: 'Immobiliari', icon: Home, desc: 'Portfolio, clienti, preventivi e contratti' },
    { name: 'Autofficine', icon: Car, desc: 'Interventi, ricambi, clienti, garanzie' },
]

const features = [
    { icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10', title: 'CRM Clienti', desc: 'Anagrafica completa, storico interazioni e note.' },
    { icon: FileText, color: 'text-emerald-500', bg: 'bg-emerald-500/10', title: 'Preventivi & Contratti', desc: 'Generazione PDF automatica, firma digitale e archivio.' },
    { icon: Calculator, color: 'text-purple-500', bg: 'bg-purple-500/10', title: 'Fatturazione', desc: 'Ciclo attivo/passivo, scadenziario e invio al commercialista.' },
    { icon: Package, color: 'text-orange-500', bg: 'bg-orange-500/10', title: 'Magazzino', desc: 'Inventario real-time, sottoscorta e tracciabilità lotti.' },
    { icon: Calendar, color: 'text-cyan-500', bg: 'bg-cyan-500/10', title: 'Agenda Smart', desc: 'Appuntamenti, scadenze e assegnazione task al team.' },
    { icon: BarChart3, color: 'text-pink-500', bg: 'bg-pink-500/10', title: 'Dashboard', desc: 'KPI, grafici di andamento e report decisionali.' },
    { icon: Puzzle, color: 'text-indigo-500', bg: 'bg-indigo-500/10', title: 'Integrazioni', desc: 'WhatsApp, Email, E-commerce, Banche tutto connesso.' },
    { icon: Bell, color: 'text-rose-500', bg: 'bg-rose-500/10', title: 'Automazioni', desc: 'Notifiche e workflow automatici per risparmiare tempo.' },
]

export default function SoftwareGestionaliPage() {
    // --- SEO GENERATORS ---
    const serviceJsonLd = generateServiceJsonLd({
        serviceName: 'Software Gestionali e CRM su Misura',
        serviceDescription: 'Sviluppo software gestionali su misura per automatizzare processi aziendali: CRM, magazzino, ordini, report e integrazioni API.',
        serviceType: 'Software Development',
        areaServed: ['Emilia-Romagna', 'Veneto', 'Toscana', 'Italia'],
        url: `${BASE_URL}/software-gestionali`,
        image: `${BASE_URL}/og-image.png`,
        offers: [
            { id: 'crm-base', title: 'CRM su Misura', description: 'Gestione clienti, preventivi e comunicazioni.', price: '1500', active: true },
            { id: 'gestionale-completo', title: 'Gestionale Completo', description: 'CRM + magazzino + ordini + automazioni.', price: '3000', active: true },
            { id: 'web-app', title: 'Web App Complessa', description: 'Progetti enterprise su misura.', priceSpecification: { minPrice: '5000', maxPrice: '50000' }, active: true }
        ]
    })
    serviceJsonLd.isSimilarTo = ['https://it.wikipedia.org/wiki/Enterprise_resource_planning', 'https://it.wikipedia.org/wiki/Customer_relationship_management']
    const faqJsonLd = generateFAQJsonLd(faqs.map(f => ({ question: f.q, answer: f.a })))
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([{ name: 'Home', url: BASE_URL }, { name: 'Software Gestionali', url: `${BASE_URL}/software-gestionali` }])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <main className="min-h-screen flex flex-col font-sans bg-background overflow-x-hidden w-full pb-24 md:pb-0 selection:bg-[#FFBC11] selection:text-black">

                {/* --- HERO SECTION --- */}
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-[#050505] text-white">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-[#FFBC11]/10 rounded-full blur-[100px] pointer-events-none opacity-20"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
                        <BlurFade delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] hover:bg-white/10 transition-colors cursor-default">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-100">
                                    Software Sviluppato in Italia
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-8 text-balance drop-shadow-2xl">
                                Smetti di combattere <br className="hidden md:block" />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFBC11] via-orange-400 to-[#FFBC11] animate-gradient-x">
                                    con Excel e carta.
                                </span>
                            </h1>

                            <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed mb-12 max-w-2xl mx-auto text-balance">
                                Se gestisci la tua attività con fogli sparsi e promemoria volanti,
                                <span className="text-white font-semibold"> stai perdendo soldi</span>.
                                Costruisco il sistema operativo su misura per la tua azienda.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 rounded-full bg-[#FFBC11] text-black font-black text-base hover:bg-[#FFBC11] hover:brightness-110 shadow-[0_0_20px_-5px_rgba(255,188,17,0.5)] transition-all hover:scale-105 w-full sm:w-auto border-2 border-[#FFBC11]"
                                    asChild
                                >
                                    <Link href="#contatti">
                                        Analizziamo la tua Situazione
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <WhatsAppButton
                                    size="lg"
                                    className="h-14 px-8 rounded-full w-full sm:w-auto bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
                                    message="Ciao Manuel! Ho visto la tua pagina. Vorrei automatizzare la mia attività..."
                                >
                                    Parliamone su WhatsApp
                                </WhatsAppButton>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                {['React', 'Next.js', 'Node.js', 'AWS', 'Stripe'].map((tech) => (
                                    <span key={tech} className="text-sm font-bold text-white flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#FFBC11]" /> {tech}
                                    </span>
                                ))}
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* --- IL PROBLEMA --- */}
                <section id="problema" className="py-24 bg-white relative">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Il caos gestionale ti sta costando <br />
                                <span className="text-red-600 underline decoration-4 decoration-red-200 underline-offset-4">tempo e soldi</span>
                            </h2>
                            <p className="text-lg text-gray-600 font-medium">
                                Se ti riconosci in queste situazioni, è ora di digitalizzare.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Clock, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100', title: 'Ore Perse', desc: 'Compili le stesse informazioni su preventivi, fatture e email. Ogni documento è una perdita di tempo.' },
                                { icon: Search, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100', title: 'Dati Sparsi', desc: 'Clienti su un foglio, ordini su un altro, scadenze sul calendario. Nessuna visione d’insieme.' },
                                { icon: AlertCircle, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100', title: 'Errori Umani', desc: 'Un copia-incolla sbagliato, un prezzo vecchio, una scadenza dimenticata. Errori che costano clienti.' },
                                { icon: Layers, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', title: 'Ciechi sui Numeri', desc: 'Non sai davvero quanto guadagni oggi o quale servizio ti rende di più. Navighi a vista.' },
                                { icon: RefreshCw, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', title: 'Lavoro Doppio', desc: 'Creare un preventivo, poi la conferma, poi la fattura. Tre passaggi manuali invece di uno click.' },
                                { icon: Users, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100', title: 'Team Scollegato', desc: 'Ognuno ha il suo metodo. Le informazioni non circolano e si perde tempo a chiedere "a che punto sei?".' }
                            ].map((item, i) => (
                                <div key={i} className={`group p-8 rounded-3xl border ${item.border} bg-white hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`w-7 h-7 ${item.color}`} />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- LA SOLUZIONE (BENTO GRID) --- */}
                <section id="soluzione" className="py-24 bg-[#080808] text-white overflow-hidden relative">
                    {/* Background Glows */}
                    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFBC11]/10 rounded-full blur-[128px] pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                            <div>
                                <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-[#FFBC11]"></span> La Soluzione
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                                    Software che si adatta a te, <br />
                                    <span className="text-gray-500">non il contrario.</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed font-medium mb-8 text-balance">
                                    Non ti imposto un gestionale "scatola chiusa" pieno di funzioni inutili.
                                    Analizzo i tuoi processi e costruisco uno strumento sartoriale.
                                    <br /><br />
                                    È come passare da un abito taglia unica a uno fatto su misura dal sarto: ti sta perfetto.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Interfaccia intuitiva (niente manuali da 100 pagine)",
                                        "Accessibile da PC, Tablet e Smartphone",
                                        "Automazioni che eliminano il lavoro manuale",
                                        "Proprietà del codice: niente canoni a vita"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-medium">
                                            <div className="w-6 h-6 rounded-full bg-[#FFBC11]/20 flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-[#FFBC11]" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* BENTO GRID VISUALIZATION */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(180px,auto)]">
                                {/* Card 1: Main Dashboard */}
                                <div className="md:col-span-2 bg-[#111] border border-white/10 rounded-3xl p-6 relative overflow-hidden group shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Fatturato Mese</p>
                                            <h3 className="text-3xl font-black text-white mt-1">€ 42.590</h3>
                                        </div>
                                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold flex items-center gap-1">
                                            <TrendingUp className="w-3 h-3" /> +18%
                                        </span>
                                    </div>
                                    {/* Mock Chart */}
                                    <div className="h-24 w-full flex items-end gap-2 opacity-80">
                                        {[40, 65, 50, 80, 55, 90, 70, 95].map((h, i) => (
                                            <div key={i} className="flex-1 bg-blue-600 rounded-t-sm hover:bg-[#FFBC11] transition-colors duration-300" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Card 2: Notifications / Integration */}
                                <div className="bg-[#111] border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center shadow-xl">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/20 blur-[40px]"></div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                                            <MessageSquare className="w-5 h-5 text-white fill-current" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Nuovo Ordine WhatsApp</p>
                                            <p className="text-xs text-gray-500">Adesso</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-3 text-xs text-gray-300 border border-white/5">
                                        "Ciao! Vorrei confermare il preventivo #402..."
                                    </div>
                                </div>

                                {/* Card 3: Performance / Status */}
                                <div className="bg-[#111] border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xl">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                            <p className="text-xs text-emerald-500 font-bold uppercase">System Online</p>
                                        </div>
                                        <p className="text-white font-bold">Database Centralizzato</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                                            <Database className="w-5 h-5 text-[#FFBC11]" />
                                        </div>
                                        <div className="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#FFBC11] w-[85%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SETTORI --- */}
                <section id="settori" className="py-24 bg-[#FAFAFA]">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Versatilità
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Ogni attività ha il suo workflow
                            </h2>
                            <p className="text-lg text-gray-600 font-medium">
                                Non importa cosa vendi o produci: se c'è un processo ripetitivo, posso automatizzarlo.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                            {industries.map((industry, i) => (
                                <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 cursor-default">
                                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                                        <industry.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{industry.name}</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-medium leading-snug">{industry.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <WhatsAppButton
                                variant="outline"
                                className="rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-black px-8"
                                message="Ciao Manuel! Il mio settore non è nella lista, ma vorrei un gestionale..."
                            >
                                Il tuo settore non c'è? Scrivimi
                            </WhatsAppButton>
                        </div>
                    </div>
                </section>

                {/* --- FUNZIONALITÀ --- */}
                <section id="funzionalita" className="py-24 bg-white">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                                Moduli & Feature
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Tutto quello che ti serve. <br />
                                <span className="text-gray-400">Niente di più.</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300 group">
                                    <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- INTEGRAZIONI --- */}
                <section id="integrazioni" className="py-24 bg-gray-50/50 border-y border-gray-100">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                                {/* Integration Logos Grid */}
                                {['SDI (Fatture)', 'WhatsApp', 'Google Cal', 'Outlook', 'WooCommerce', 'Shopify', 'Stripe', 'Banche'].map((logo, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-center font-bold text-gray-400 shadow-sm hover:text-black hover:shadow-md transition-all">
                                        {logo}
                                    </div>
                                ))}
                            </div>
                            <div className="order-1 lg:order-2">
                                <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                    Ecosistema Digitale
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                    Integrazioni API e Fatturazione Elettronica
                                </h2>
                                <p className="text-lg text-gray-600 font-medium mb-8">
                                    Il gestionale non deve essere un'isola. Lo collego ai servizi che usi già.
                                    Immagina: arriva un ordine dal sito, si crea la fattura su Aruba/FattureInCloud, parte il messaggio WhatsApp al cliente e si aggiorna il magazzino.
                                    <br /><span className="font-bold text-black">Tutto in automatico.</span>
                                </p>
                                <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white transition-colors px-8" asChild>
                                    <Link href="#contatti">Dimmi cosa devi integrare</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CONFRONTO --- */}
                <section id="confronto" className="py-24 bg-white">
                    <div className="container max-w-[1000px] mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
                                Perché vince il "Su Misura"
                            </h2>
                            <p className="text-lg text-gray-500 font-medium">
                                Confronto onesto con le alternative.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-2xl shadow-gray-200/50">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[700px] border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200">
                                            <th className="py-6 px-6 text-left text-gray-400 font-bold uppercase text-xs tracking-wider w-1/4">Caratteristica</th>
                                            <th className="py-6 px-6 text-center text-gray-500 font-bold w-1/4">Fogli Excel</th>
                                            <th className="py-6 px-6 text-center text-gray-500 font-bold w-1/4">Gestionali Standard</th>
                                            <th className="py-6 px-6 text-center bg-[#FFBC11] text-black font-black text-lg w-1/4 relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                                                Software Su Misura
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm md:text-base font-medium">
                                        {[
                                            { label: "Facilità d'uso", excel: "Bassa", standard: "Media (training)", me: "Alta (immediata)" },
                                            { label: "Adattabilità", excel: "Alta (ma fragile)", standard: "Bassa (rigido)", me: "Totale (sartoriale)" },
                                            { label: "Automazione", excel: "Nessuna", standard: "Limitata", me: "Completa" },
                                            { label: "Costi Futuri", excel: "Tempo perso", standard: "Canoni mensili", me: "Zero Canoni" },
                                            { label: "Proprietà Dati", excel: "Tua (file locale)", standard: "Del fornitore", me: "Tua al 100%" },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                                <td className="py-5 px-6 font-bold text-gray-900">{row.label}</td>
                                                <td className="py-5 px-6 text-center text-gray-500">{row.excel}</td>
                                                <td className="py-5 px-6 text-center text-gray-500">{row.standard}</td>
                                                <td className="py-5 px-6 text-center bg-[#FFBC11]/10 font-bold text-gray-900 border-x border-[#FFBC11]/20">
                                                    {row.me}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- INDUSTRIA 4.0 (PREMIUM LOOK) --- */}
                <section id="industria-4-0" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                    {/* Golden Glows */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-900/10 to-transparent pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-[#FFBC11] via-amber-700 to-gray-900 shadow-[0_0_100px_-20px_rgba(255,188,17,0.3)]">
                            <div className="bg-[#0f0f0f] rounded-[2.3rem] p-8 md:p-16 overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-12 opacity-10">
                                    <Zap className="w-64 h-64 text-[#FFBC11]" />
                                </div>

                                <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFBC11]/10 border border-[#FFBC11]/20 rounded-full mb-6 text-[#FFBC11] font-bold text-xs uppercase tracking-widest">
                                            <TrendingUp className="w-4 h-4" /> Incentivi Statali
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                            Industria 4.0 e <br />
                                            <span className="text-[#FFBC11]">Transizione 5.0</span>
                                        </h2>
                                        <p className="text-lg text-gray-400 font-medium leading-relaxed mb-8">
                                            Non è solo "comprare un software", è un investimento intelligente.
                                            Sviluppo sistemi predisposti per l'interconnessione e il credito d'imposta.
                                            <br /><br />
                                            <span className="text-white">Recuperi gran parte dell'investimento</span> mentre modernizzi la tua azienda.
                                        </p>
                                        <Button className="rounded-full bg-[#FFBC11] text-black font-black hover:bg-[#ffc940] px-8 h-12" asChild>
                                            <Link href="#contatti">Parliamone subito</Link>
                                        </Button>
                                    </div>

                                    <div className="grid gap-4">
                                        {[
                                            "Interconnessione macchinari/software",
                                            "Integrazione automatizzata",
                                            "Monitoraggio e reportistica",
                                            "Telemanutenzione e controllo remoto"
                                        ].map((req, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-[#FFBC11] flex items-center justify-center shrink-0">
                                                    <Check className="w-5 h-5 text-black" />
                                                </div>
                                                <span className="text-white font-medium">{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
                                    * La verifica dei requisiti e l'accesso al credito dipendono dalla normativa vigente e dalla perizia del tuo consulente fiscale.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PREZZI --- */}
                <section id="prezzi" className="py-24 bg-white">
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
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] border-2 border-gray-200 p-8 md:p-12 shadow-xl">
                                <div className="space-y-6 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FFBC11]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <MessageSquare className="w-5 h-5 text-[#FFBC11]" />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-gray-900 text-lg mb-2">Analisi Preliminare Gratuita</h3>
                                            <p className="text-gray-600 font-medium leading-relaxed">
                                                Raccontami le tue esigenze. Analizzeremo insieme i processi aziendali da digitalizzare e ti fornirò un preventivo dettagliato e trasparente.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FFBC11]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <Calculator className="w-5 h-5 text-[#FFBC11]" />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-gray-900 text-lg mb-2">Preventivo Trasparente</h3>
                                            <p className="text-gray-600 font-medium leading-relaxed">
                                                Riceverai un preventivo chiaro con costi suddivisi per modulo, tempistiche di sviluppo e fasi di lavoro. Niente sorprese.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FFBC11]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <Zap className="w-5 h-5 text-[#FFBC11]" />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-gray-900 text-lg mb-2">Sviluppo Flessibile</h3>
                                            <p className="text-gray-600 font-medium leading-relaxed">
                                                Possiamo partire con i moduli essenziali e aggiungere funzionalità in seguito. Ti aiuto a definire le priorità.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-200">
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <WhatsAppButton
                                            size="lg"
                                            className="h-14 px-8 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg"
                                            message="Ciao Manuel! Vorrei un preventivo per un software gestionale. Possiamo parlarne?"
                                        >
                                            Richiedi Preventivo via WhatsApp
                                        </WhatsAppButton>
                                        <Button
                                            size="lg"
                                            asChild
                                            className="h-14 px-8 rounded-xl bg-gray-900 hover:bg-black text-white font-bold shadow-lg"
                                        >
                                            <Link href="#contatti">Compila il Form</Link>
                                        </Button>
                                    </div>
                                    <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                                        Risposta garantita entro 24 ore
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* --- TECH STACK (MINIMAL) --- */}
                <section className="py-20 bg-[#FAFAFA] border-t border-gray-200">
                    <div className="container max-w-[1200px] mx-auto px-4 text-center">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Technology Stack</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                            {[Code2, Server, Database, ShieldCheck, Terminal, Smartphone].map((Icon, i) => (
                                <Icon key={i} className="w-8 h-8 md:w-10 md:h-10 text-gray-800" />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FAQ --- */}
                <section id="faq" className="py-20 bg-white">
                    <div className="container max-w-[800px] mx-auto px-4 sm:px-6">
                        <h2 className="text-3xl font-black text-center text-gray-900 mb-12">Domande Frequenti</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden open:shadow-lg open:border-blue-100 transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 hover:text-blue-600 transition-colors list-none select-none">
                                        <span className="pr-4">{faq.q}</span>
                                        <span className="text-2xl leading-none text-gray-300 group-open:rotate-45 group-open:text-blue-500 transition-transform origin-center">
                                            +
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium text-sm md:text-base border-t border-transparent group-open:border-gray-100 pt-0 group-open:pt-4 transition-all">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
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
                                        message="Ciao Manuel! Voglio discutere di un software gestionale..."
                                    />
                                </div>
                            </div>

                            <div className="bg-white text-black rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/10 relative">
                                <ServiceContactForm
                                    serviceName="Software Gestionali - Richiesta"
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
                                    <Link href="#contatti">Preventivo</Link>
                                </Button>
                                <WhatsAppButton
                                    size="lg"
                                    className="h-12 rounded-xl w-full justify-center bg-[#25D366] hover:bg-[#128C7E] text-white"
                                    message="Ciao! Info software..."
                                >
                                    WhatsApp
                                </WhatsAppButton>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}