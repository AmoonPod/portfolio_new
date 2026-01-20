import type { Metadata } from 'next'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Smartphone,
    Tablet,
    Code2,
    Sparkles,
    Target,
    TrendingUp,
    Layers,
    Lock,
    Cpu,
    Globe,
    Download,
    Star,
    Award,
    Users,
    Clock,
    ShieldCheck,
    Rocket,
    DollarSign,
    RefreshCw,
    BarChart3,
    Calendar,
    Bell,
    Search as SearchIcon,
    Briefcase,
    Factory,
    Store,
    UtensilsCrossed,
    Wrench,
    Stethoscope,
    GraduationCap,
    Home,
    Car,
    PawPrint,
    ShoppingBag,
    Heart,
    Music,
    Camera,
    MapPin,
    Navigation,
    MessageCircle,
    CreditCard,
    Fingerprint,
    Wifi,
    Battery,
    Aperture,
    Play,
    AppWindow,
    SmartphoneNfc,
    Touchpad,
    Grid3X3,
    Box,
    Package,
    Truck,
    Building2,
    Users2,
    Handshake,
    FastForward,
    Globe2,
    Bolt,
    Crown,
    Diamond,
    Gem,
    SwatchBook,
    Palette,
    PenTool,
    Layout,
    Component,
    Watch,
    Headphones,
    Keyboard,
    Mouse,
    Monitor,
    Server,
    Cloud,
    Database,
    FileCode,
    Braces,
    GitBranch,
    GitCommit,
    CloudLightning,
    QrCode,
    Barcode,
    Share2,
    Send,
    Mail,
    MessageSquare,
    Phone,
    Video,
    Mic,
    Mic2,
    Speaker,
    Volume2,
    Music2,
    Image,
    Film,
    FileText,
    File,
    Folder,
    Archive,
    Upload,
    RotateCcw,
    Power,
    Plug,
    Cable,
    Usb,
    WifiOff,
    Bluetooth,
    Share,
    Eye,
    EyeOff,
    Unlock,
    Key,
    Shield,
    ShieldAlert,
    User,
    UserPlus,
    UserCheck,
    UserX,
    Settings,
    Sliders,
    ToggleLeft,
    ToggleRight,
    Filter,
    Command,
    Terminal,
    Code,
    Bug,
    TestTube,
    Beaker,
    FlaskConical,
    Microscope,
    Atom,
    Dna,
    Flower,
    Mountain,
    Waves,
    Flame,
    Sparkle,
    Moon,
    Sun,
    CloudSun,
    CloudRain,
    Droplet,
    Umbrella,
    Snowflake,
    Wind,
    Zap as ZapIcon,
    Flashlight,
    Lightbulb,
    Lamp,
    Sparkle as SparkleIcon,
    ChevronRight
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
    title: 'Sviluppo App Mobile Professionali | iOS, Android e Cross-Platform',
    description: 'Creo app mobile su misura per aziende e startup. Sviluppo iOS, Android e cross-platform con tecnologia React Native. Dal concept al lancio, con design innovativo e performance eccezionali.',
    keywords: [
        // Nazionali
        'sviluppo app mobile',
        'sviluppo app ios',
        'sviluppo app android',
        'app su misura',
        'flutter sviluppatore',
        'sviluppo app roma',
        'sviluppo app milano',
        'sviluppo app bologna',
        'sviluppo app firenze',
        'app per aziende',
        'sviluppo app startup',
        'mobile app development italia',
        'programmatore app flutter',
        'creare app',
        'app personalizzate',
        'sviluppo app cross-platform',
        'flutter developer',
        'dart sviluppatore',
        // Locali - Emilia-Romagna
        'sviluppo app reggio emilia',
        'sviluppo app modena',
        'sviluppo app parma',
        'sviluppo app bologna',
        'sviluppo app piacenza',
        'sviluppo app ferrara',
        'sviluppo app rimini',
        // Locali - Castelnovo ne' Monti e zone
        'sviluppo app castelnovo ne monti',
        'app per ristoranti emilia romagna',
        'app per artigiani emilia',
        'app per negozi emilia romagna',
        // Settori
        'app per ristoranti',
        'app per palestre',
        'app per e-commerce',
        'app per servizi',
        'app per delivery',
        'app per prenotazioni'
    ],
    alternates: {
        canonical: `${BASE_URL}/sviluppo-app-mobile`,
    },
    openGraph: {
        title: 'App Mobile che Fanno la Differenza | Sviluppo Professionale',
        description: 'Non creo template. Creo app su misura che conquistano gli utenti e fanno crescere la tua attività. iOS, Android, Flutter.',
        url: `${BASE_URL}/sviluppo-app-mobile`,
        siteName: 'Manuel De Ceglie',
        images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
        locale: 'it_IT',
        type: 'website',
    },
}

const faqs = [
    {
        q: 'Quanto costa sviluppare un\'app mobile?',
        a: 'Ogni progetto è unico e il costo dipende dalle funzionalità di cui hai bisogno. Dopo una prima consulenza gratuita, ti preparerò un preventivo personalizzato senza impegno. Il mio obiettivo è trovare la soluzione migliore per il tuo budget e le tue esigenze.'
    },
    {
        q: 'Quale tecnologia usi per le app?',
        a: 'Utilizzo Flutter per la maggior parte dei progetti, perché permette di sviluppare un\'app per iOS e Android con un unico codice, riducendo tempi e costi mantenendo performance eccellenti. Per progetti che richiedono funzionalità native specifiche, utilizzo Swift per iOS e Kotlin per Android.'
    },
    {
        q: 'Quanto tempo ci vuole per creare un\'app?',
        a: 'I tempi variano in base alla complessità. Un\'app semplice può essere pronta in 2-3 mesi, mentre progetti più strutturati richiedono 4-6 mesi. Durante tutto il processo ti terrò aggiornato sul progresso e potrai vedere l\'app prendere forma passo dopo passo.'
    },
    {
        q: 'Mi serve anche un backend o un sito web?',
        a: 'Spesso sì. La maggior parte delle app ha bisogno di un backend per gestire utenti, dati e logica di business. Posso sviluppare tutto insieme: app mobile, backend API e sito web, tutto integrato e coerente tra loro.'
    },
    {
        q: 'Come funziona il supporto dopo il lancio?',
        a: 'Offro pacchetti di manutenzione per aggiornamenti, bug fix e miglioramenti. Le app richiedono aggiornamenti periodici per funzionare con le nuove versioni di iOS e Android. Posso occuparmi di tutto con un canone mensile opzionale, oppure gestisci gli aggiornamenti autonomamente.'
    },
    {
        q: 'Posso gestire l\'app dopo che è stata consegnata?',
        a: 'Certo. Fornisco un pannello di amministrazione per gestire contenuti, utenti, ordini e statistiche senza scrivere codice. Inoltre, ti documento tutto il codice e ti spiego come funziona, così sei libero di modificarla o farvela modificare da chi vuoi.'
    }
]

const appTypes = [
    {
        icon: Store,
        title: 'Ristoranti e Delivery',
        desc: 'Menu digitali, ordinazioni, prenotazioni tavoli, fidelizzazione clienti e integrazione con corrieri.',
        color: 'from-orange-500 to-red-500'
    },
    {
        icon: ShoppingBag,
        title: 'E-commerce Mobile',
        desc: 'Catalogo prodotti, carrello, pagamenti, tracking ordini e notifiche per i tuoi clienti.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: Calendar,
        title: 'Servizi e Prenotazioni',
        desc: 'Prenotazioni online, gestione appuntamenti, promemoria automatici e pagamenti anticipati.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Users,
        title: 'Community e Club',
        desc: 'Forum, chat, eventi, contenuti esclusivi e sistemi per coinvolgere i tuoi membri.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: Heart,
        title: 'Sanità e Benessere',
        desc: 'Prenotazioni, cartelle digitali, promemoria terapie e comunicazione paziente-medico.',
        color: 'from-rose-500 to-pink-500'
    },
    {
        icon: Briefcase,
        title: 'Business e Produttività',
        desc: 'Gestione progetti, task, team, timesheet e reportistica per chi lavora in mobilità.',
        color: 'from-indigo-500 to-violet-500'
    }
]

const features = [
    {
        icon: Smartphone,
        title: 'Design Che Conquista',
        desc: 'Interfacce intuitive e moderne che gli utenti amano usare.',
        color: 'bg-purple-100 text-purple-600'
    },
    {
        icon: Zap,
        title: 'Velocità Istantanea',
        desc: 'App fluide e reattive, senza attese né crash fastidiosi.',
        color: 'bg-yellow-100 text-yellow-600'
    },
    {
        icon: ShieldCheck,
        title: 'Sicurezza Totale',
        desc: 'I tuoi dati sono protetti con crittografia di livello enterprise.',
        color: 'bg-green-100 text-green-600'
    },
    {
        icon: CloudLightning,
        title: 'Backend Potente',
        desc: 'Un\'architettura solida che cresce insieme alla tua app.',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: QrCode,
        title: 'Pagamenti NFC e QR',
        desc: 'Integrazione pagamenti contactless e biglietteria digitale.',
        color: 'bg-red-100 text-red-600'
    },
    {
        icon: Bell,
        title: 'Notifiche Smart',
        desc: 'Notifiche personalizzate che aumentano engagement e vendite.',
        color: 'bg-pink-100 text-pink-600'
    },
    {
        icon: Globe,
        title: 'Funziona Offline',
        desc: 'L\'app continua a funzionare anche senza connessione a internet.',
        color: 'bg-cyan-100 text-cyan-600'
    },
    {
        icon: BarChart3,
        title: 'Analytics Dettagliati',
        desc: 'Metriche precise su utilizzo, retention e comportamento utenti.',
        color: 'bg-orange-100 text-orange-600'
    }
]

const cities = [
    { name: 'Milano', region: 'Lombardia' },
    { name: 'Roma', region: 'Lazio' },
    { name: 'Bologna', region: 'Emilia-Romagna' },
    { name: 'Firenze', region: 'Toscana' },
    { name: 'Torino', region: 'Piemonte' },
    { name: 'Napoli', region: 'Campania' },
    { name: 'Genova', region: 'Liguria' },
    { name: 'Venezia', region: 'Veneto' },
    { name: 'Verona', region: 'Veneto' },
    { name: 'Modena', region: 'Emilia-Romagna' },
    { name: 'Parma', region: 'Emilia-Romagna' },
    { name: 'Reggio Emilia', region: 'Emilia-Romagna' }
]

const processSteps = [
    {
        number: '01',
        title: 'Parliamo della Tua Idea',
        desc: 'Iniziamo con una chiamata gratuita. Mi racconti la sua visione, analizziamo insieme cosa serve davvero.'
    },
    {
        number: '02',
        title: 'Progettiamo Insieme',
        desc: 'Creo wireframe e design su misura. Vedrai prototipi interattivi prima di iniziare a sviluppare.'
    },
    {
        number: '03',
        title: 'Sviluppo Trasparente',
        desc: 'Scrivo codice pulito e performante. Ti aggiorno costantemente e puoi vedere il progresso in tempo reale.'
    },
    {
        number: '04',
        title: 'Test Rigidi',
        desc: 'Verifico l\'app su decine di dispositivi reali. Niente bug, niente sorprese al lancio.'
    },
    {
        number: '05',
        title: 'Pubblicazione Garantita',
        desc: 'Mi occupo di tutto il processo su App Store e Google Play. L\'app viene approvata e pubblicata.'
    },
    {
        number: '06',
        title: 'Supporto Continuo',
        desc: 'Dopo il lancio, sono qui per aggiornamenti, miglioramenti e qualsiasi necessità.'
    }
]

const reasons = [
    {
        number: '88%',
        label: 'del tempo online',
        desc: 'Gli utenti passano il tempo sulle app, non sui siti web'
    },
    {
        number: '3x',
        label: 'più conversioni',
        desc: 'Le app convertono meglio rispetto ai siti web tradizionali'
    },
    {
        number: '5x',
        label: 'più engagement',
        desc: 'Le app coinvolgono gli utenti molto di più di altri canali'
    }
]

export default function AppMobilePage() {
    const serviceJsonLd = generateServiceJsonLd({
        serviceName: 'Sviluppo App Mobile Professionali',
        serviceDescription: 'Sviluppo app mobile su misura per iOS e Android. Flutter, Swift, Kotlin. Dal concept al lancio, con design innovativo e performance eccezionali.',
        serviceType: 'MobileApplication',
        areaServed: ['Italia', 'Europa', 'USA'],
        url: `${BASE_URL}/sviluppo-app-mobile`,
        image: `${BASE_URL}/og-image.png`,
        offers: []
    })

    const faqJsonLd = generateFAQJsonLd(faqs.map(f => ({ question: f.q, answer: f.a })))

    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: BASE_URL },
        { name: 'Sviluppo App Mobile', url: `${BASE_URL}/sviluppo-app-mobile` }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <main className="min-h-screen flex flex-col font-sans bg-background overflow-x-hidden w-full selection:bg-[#FFBC11] selection:text-black">

                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0d0d1a] to-[#1a1a2e] text-white">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFBC11]/20 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-[80px] animate-pulse delay-500"></div>
                    </div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <BlurFade delay={0.1}>
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFBC11] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFBC11]"></span>
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                                        Sviluppo App Mobile Professionali
                                    </span>
                                </div>

                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
                                    La tua idea merita <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] via-orange-400 to-purple-500">
                                        un'app eccezionale.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-12 max-w-2xl">
                                    Non creo template. Creo esperienze digitali che conquistano milioni di utenti.
                                    Il tuo prodotto digitale, sviluppato con passione e tecnologia di ultima generazione.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-5 mb-16">
                                    <Button
                                        size="lg"
                                        className="h-16 px-10 rounded-full bg-[#FFBC11] text-black font-black text-lg hover:bg-[#FFBC11]/90 shadow-[0_0_30px_-5px_rgba(255,188,17,0.4)] transition-all hover:scale-105"
                                        asChild
                                    >
                                        <Link href="#contatti">
                                            Raccontami la Tua Idea
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Link>
                                    </Button>
                                    <WhatsAppButton
                                        size="lg"
                                        className="h-16 px-10 rounded-full"
                                        message="Ciao Manuel! Vorrei parlare dello sviluppo di un'app mobile per la mia attività."
                                    >
                                        Scrivimi su WhatsApp
                                    </WhatsAppButton>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <span className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-400 border border-white/10">Flutter</span>
                                    <span className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-400 border border-white/10">Swift</span>
                                    <span className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-400 border border-white/10">Kotlin</span>
                                    <span className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-400 border border-white/10">Dart</span>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* CITIES - Simple Grid */}
                <section className="py-12 bg-gradient-to-r from-[#0a0a0a] to-[#1a1a2e] border-y border-white/10">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">Lavoro con clienti in tutta Italia</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {cities.map((city, i) => (
                                <div key={i} className="flex items-center gap-2 px-5 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                    <MapPin className="w-4 h-4 text-[#FFBC11]" />
                                    <span className="text-white font-medium text-sm">{city.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY APP - Impactful Numbers */}
                <section className="py-24 bg-white relative">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mb-6 leading-[1.1]">
                                Il mobile è il presente.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                    E il futuro della tua azienda.
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 font-medium">
                                I numeri parlano chiaro: se non hai un'app, stai perdendo opportunità.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {reasons.map((reason, i) => (
                                <div key={i} className="relative p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-[#1a1a2e] text-white overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFBC11]/10 rounded-full blur-[60px]"></div>
                                    <div className="relative z-10 text-center">
                                        <div className="text-7xl md:text-8xl font-black text-[#FFBC11] mb-2">{reason.number}</div>
                                        <div className="text-xl font-bold text-white mb-4">{reason.label}</div>
                                        <p className="text-gray-400 font-medium">{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT I BUILD - Visual Cards */}
                <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Cosa Posso Creare Per Te
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Ogni settore ha la sua app
                            </h2>
                            <p className="text-lg text-gray-600 font-medium">
                                Dalla ristorazione al wellness, dall'e-commerce ai servizi: creo app su misura per ogni esigenza di business.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {appTypes.map((type, i) => (
                                <div key={i} className="group relative p-8 rounded-3xl bg-white shadow-xl shadow-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
                                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${type.color}`}></div>
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <type.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-3">{type.title}</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed">{type.desc}</p>
                                    <div className="mt-6 flex items-center text-[#FFBC11] font-bold group-hover:translate-x-2 transition-transform">
                                        <span>Scopri di più</span>
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW I WORK - Process */}
                <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Come Lavoriamo Insieme
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
                                Dalla Tua Idea alla Tua App
                            </h2>
                            <p className="text-lg text-gray-400 font-medium">
                                Un processo trasparente e collaborativo, passo dopo passo.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {processSteps.map((step, i) => (
                                <div key={i} className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#FFBC11] to-orange-500 rounded-2xl flex items-center justify-center text-black font-black text-lg">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-black text-white mt-4 mb-3">{step.title}</h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED - Features */}
                <section className="py-24 bg-white">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Cosa Ricevi
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Tecnologia di Ultima Generazione
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA STRIP */}
                <section className="py-16 bg-gradient-to-r from-[#FFBC11] to-orange-500">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-black mb-6">
                            Pronto a trasformare la tua idea in un'app?
                        </h3>
                        <p className="text-lg font-medium text-black/80 mb-8 max-w-2xl mx-auto">
                            Raccontami la tua visione. La trasformerò in un prodotto digitale che conquisterà i tuoi utenti.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <WhatsAppButton
                                size="lg"
                                className="h-14 px-10 rounded-full bg-black text-white hover:bg-gray-900 shadow-xl"
                                message="Ciao Manuel! Ho un'idea per un'app mobile e vorrei parlarne con te."
                            >
                                Parliamone su WhatsApp
                            </WhatsAppButton>
                            <Button
                                size="lg"
                                className="h-14 px-10 rounded-full bg-white text-black font-bold hover:bg-gray-100"
                                asChild
                            >
                                <Link href="#contatti">Prenata una Call</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 md:py-28 bg-[#FAFAFA]">
                    <div className="container max-w-[800px] mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-4">
                                Domande Frequenti
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                                    <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 hover:text-[#FFBC11] transition-colors list-none">
                                        <span className="pr-4">{faq.q}</span>
                                        <span className="text-xl leading-none text-gray-300 group-open:rotate-45 transition-transform group-open:text-[#FFBC11]">+</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium text-sm md:text-base border-t border-gray-100 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA FINALE */}
                <section id="contatti" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] text-white">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFBC11]/10 rounded-full blur-[150px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter">
                                    Il futuro della tua <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] to-orange-500">
                                        azienda è mobile.
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                                    Sono qui per trasformare la tua idea in un'app straordinaria.
                                    Scrivimi, parliamsene insieme, e vediamo come posso aiutarti.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#FFBC11]/20 rounded-xl flex items-center justify-center">
                                            <CheckCircle2 className="w-6 h-6 text-[#FFBC11]" />
                                        </div>
                                        <span className="font-medium">Prima consulenza completamente gratuita</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#FFBC11]/20 rounded-xl flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-[#FFBC11]" />
                                        </div>
                                        <span className="font-medium">Risposta garantita entro 24 ore</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#FFBC11]/20 rounded-xl flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6 text-[#FFBC11]" />
                                        </div>
                                        <span className="font-medium">NDA disponibile per proteggere la tua idea</span>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <WhatsAppButton
                                        size="lg"
                                        className="h-16 px-10 rounded-2xl w-full sm:w-auto shadow-2xl shadow-green-500/20 transition-all hover:scale-105"
                                        message="Ciao Manuel! Ho un'idea per un'app mobile e vorrei parlarne con te."
                                    >
                                        Scrivimi Ora su WhatsApp
                                    </WhatsAppButton>
                                    <p className="mt-4 text-sm text-gray-500 font-medium">
                                        Oppure compila il form e ti ricontatto io.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white text-black rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-4 border-white/10">
                                <ServiceContactForm
                                    serviceName="Sviluppo App Mobile - Richiesta Informazioni"
                                    formTitle="Parliamone Insieme"
                                    formDescription="Raccontami la tua idea per l'app."
                                    submitButtonText="INVIA RICHIESTA"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
