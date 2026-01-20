import type { Metadata } from 'next'
import Link from 'next/link'
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Settings,
    Database,
    BarChart3,
    Users,
    Clock,
    ShieldCheck,
    Code2,
    Sparkles,
    ChevronRight,
    Target,
    TrendingUp,
    Workflow,
    Layers,
    Lock,
    Cpu,
    Globe,
    Smartphone,
    Server,
    Terminal,
    Puzzle,
    Rocket,
    DollarSign,
    RefreshCw,
    Layers3,
    ClipboardList,
    Mail,
    MessageSquare,
    FileText,
    Calculator,
    ShoppingCart,
    Package,
    Truck,
    Building2,
    Users2,
    Handshake,
    Calendar,
    Bell,
    Search,
    BarChart,
    PieChart,
    Activity,
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
    AlertCircle
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
    title: 'Software Gestionali e CRM su Misura | Digitalizza la Tua Impresa',
    description: 'Sviluppo software gestionali personalizzati e CRM su misura per PMI, artigiani e professionisti. Automatizza i processi, risparmia tempo e aumenta il fatturato.',
    keywords: [
        // Nazionali
        'software gestionale',
        'gestionale aziendale',
        'crm su misura',
        'software personalizzato',
        'sviluppo software italia',
        'software su misura',
        'automatizzazione processi aziendali',
        'digitalizzazione impresa',
        'gestionale clienti',
        'software gestione magazzino',
        'crm per artigiani',
        'crm per professionisti',
        'gestionale per negozi',
        'software per ristoranti',
        'gestionale per studi professionali',
        // Locali - Emilia-Romagna
        'software gestionale emilia romagna',
        'sviluppo software reggio emilia',
        'crm su misura modena',
        'gestionale parma',
        'software personalizzato bologna',
        'digitalizzazione impresa piacenza',
        'gestionale artigiani appennino',
        'software per aziende ferrara',
        // Locali - Castelnovo ne' Monti e zone
        'software gestionale castelnovo ne monti',
        'sviluppo software alta val d\'enza',
        'crm per artigiani canossa',
        'gestionale per negozi carpineti',
        'software su misura villamino',
        'digitalizzazione casina',
        'software per aziende di rubiera',
        'gestionale per artigiani di san polo d\'enza',
        'sviluppo software provincia reggio emilia',
        'crm per piccole imprese emilia'
    ],
    alternates: {
        canonical: `${BASE_URL}/software-gestionali`,
    },
    openGraph: {
        title: 'Software Gestionali e CRM Su Misura per la Tua Impresa',
        description: 'Smetterai di combattere con Excel e processi manuali. Ti costruisco un gestionale che si adatta perfettamente alle esigenze della tua attività.',
        url: `${BASE_URL}/software-gestionali`,
        siteName: 'Manuel De Ceglie',
        images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
        locale: 'it_IT',
        type: 'website',
    },
}

const faqs = [
    {
        q: 'Perché dovrei investire in un software su misura invece di usare Excel o un gestionale generico?',
        a: 'Excel è ottimo per fare due conti, ma quando i dati iniziano ad accumularsi diventa ingestibile, pieno di errori e impossibile da condividere con il team. I gestionali standard, invece, sono pensati per tutte le aziende: contengono funzionalità che non userai mai e ti mancano quelle che servono a te. Un software su misura fa esattamente quello che ti serve, si adatta al tuo modo di lavorare e cresce вместе con la tua azienda. È la differenza tra comprare un vestito al mercato e fartelo confezionare da un sarto: il secondo ti dura una vita e ti sta perfetto.'
    },
    {
        q: 'Quanto costa un software gestionale su misura?',
        a: 'Dipende da quello che ti serve. Per un CRM base con gestione clienti e preventivi si parte da 1.500 euro. Per un gestionale completo con magazzino, ordini, fatturazione semplice e integrazioni si va dai 3.000 agli 8.000 euro. I progetti più complessi, con automazioni avanzate e integrazioni personalizzate, hanno un costo superiore. Il vantaggio? Una volta pagato, il software è tuo. Nessun canone mensile, nessuna licenza, nessun aumento dei prezzi deciso da altri.'
    },
    {
        q: 'Il mio team saprà usarlo senza problemi?',
        a: 'Progetto interfacce intuitive, pensate per chi non ha tempo di leggere manuali infiniti. Se sai usare WhatsApp o un sito web, saprai usare il tuo gestionale. In più, ti fornisco video tutorial personalizzati e una documentazione scritta appositamente per il tuo team.'
    },
    {
        q: 'Posso integrare il gestionale con i software che uso già?',
        a: 'Certo. Posso creare integrazioni con la tua email e il tuo calendario (Google, Outlook), con WhatsApp Business, con il tuo e-commerce (Shopify, WooCommerce), con il commercialista, con i gateway di pagamento e con qualsiasi altra API sia disponibile. L\'obiettivo è creare un ecosistema digitale dove i dati fluiscono, non isole separate che non comunicano tra loro.'
    },
    {
        q: 'E se tra qualche anno ho bisogno di aggiungere qualcosa?',
        a: 'Il software è tuo, quindi posso modificarlo quando vuoi. Offro pacchetti di assistenza oraria per le piccole modifiche del giorno dopo e progetti più strutturati quando serve aggiungere funzionalità nuove. Non c\'è lock-in, sei libero di fare quello che vuoi con il tuo investimento.'
    },
    {
        q: 'I miei dati sono al sicuro?',
        a: 'Implemento backup automatici, crittografia dei dati sensibili e controlli di accesso granulari. Decidiamo insieme dove ospitare i tuoi dati: su un server dedicato, nel cloud o on-premise nella tua sede. La sicurezza non è un\'opzione, è una priorità.'
    }
]

const industries = [
    { name: 'Artigiani e Fabbri', icon: Wrench, desc: 'Gestione commesse, preventivi, materiali, clienti' },
    { name: 'Ristoranti e Bar', icon: UtensilsCrossed, desc: 'Ordini, fornitori, magazzino, prenotazioni' },
    { name: 'Negozi e Retail', icon: Store, desc: 'Inventario, vendite, clienti fidelizzati' },
    { name: 'Studi Professionali', icon: Briefcase, desc: 'Gestione pratiche, scadenze e clienti' },
    { name: 'Dentisti e Studi Medici', icon: Stethoscope, desc: 'Prenotazioni, cartelle pazienti e promemoria' },
    { name: 'Corrieri e Trasporti', icon: Truck, desc: 'Tracciamento, pianificazione e gestione clienti' },
    { name: 'Palestre e Scuole', icon: GraduationCap, desc: 'Abbonamenti, prenotazioni e iscrizioni' },
    { name: 'Agenzie e Immobiliari', icon: Home, desc: 'Portfolio, clienti, preventivi e contratti' },
    { name: 'Autofficine', icon: Car, desc: 'Interventi, ricambi, clienti, garanzie' },
    { name: 'Veterinarie', icon: PawPrint, desc: 'Pazienti, appuntamenti, farmaci, storico' },
]

const features = [
    {
        icon: Users,
        color: 'text-blue-500',
        bg: 'bg-blue-50',
        title: 'CRM Clienti',
        desc: 'Anagrafica completa, storico interazioni, note personalizzate e comunicazioni tracciate.'
    },
    {
        icon: FileText,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        title: 'Preventivi & Contratti',
        desc: 'Generazione automatica PDF, template personalizzati, firma digitale e archiviazione.'
    },
    {
        icon: Calculator,
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        title: 'Fatturazione Base',
        desc: 'Creazione fatture, gestione righe IVA, invio automatico al commercialista.'
    },
    {
        icon: Package,
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        title: 'Magazzino',
        desc: 'Inventario sempre aggiornato, alert per le scorte minime, tracciabilità lotti e scadenze.'
    },
    {
        icon: Calendar,
        color: 'text-cyan-500',
        bg: 'bg-cyan-50',
        title: 'Calendario e Promemoria',
        desc: 'Appuntamenti, scadenze, task assegnati e notifiche automatiche.'
    },
    {
        icon: BarChart3,
        color: 'text-pink-500',
        bg: 'bg-pink-50',
        title: 'Dashboard e Report',
        desc: 'Metriche chiave in tempo reale, grafici chiari e export dei dati per decisioni informate.'
    },
    {
        icon: Puzzle,
        color: 'text-indigo-500',
        bg: 'bg-indigo-50',
        title: 'Integrazioni',
        desc: 'Connetti WhatsApp Business, email, calendario e tutti gli altri servizi che usi già.'
    },
    {
        icon: Bell,
        color: 'text-rose-500',
        bg: 'bg-rose-50',
        title: 'Automazioni',
        desc: 'Notifiche automatiche, email di conferma e workflow ripetitivi eliminati una volta per tutte.'
    },
]

export default function SoftwareGestionaliPage() {
    const serviceJsonLd = generateServiceJsonLd({
        serviceName: 'Software Gestionali e CRM su Misura',
        serviceDescription: 'Sviluppo software gestionali personalizzati per automatizzare processi aziendali. CRM, gestione clienti, magazzino e automazioni su misura per la tua attività.',
        serviceType: 'Software Development',
        areaServed: ['Emilia-Romagna', 'Veneto', 'Toscana', 'Italia'],
        url: `${BASE_URL}/software-gestionali`,
        image: `${BASE_URL}/og-image.png`,
        offers: [
            {
                id: 'crm-base',
                title: 'CRM su Misura',
                description: 'Gestione clienti, preventivi e comunicazioni in un unico sistema.',
                price: '1500',
                active: true
            },
            {
                id: 'gestionale-completo',
                title: 'Gestionale Completo',
                description: 'CRM + magazzino + ordini + automazioni per PMI e artigiani.',
                price: '3000',
                active: true
            },
            {
                id: 'web-app-personalizzata',
                title: 'Web App Complessa',
                description: 'Progetti su misura con integrazioni avanzate e automazioni.',
                price: '0',
                active: true
            }
        ]
    })

    const faqJsonLd = generateFAQJsonLd(faqs.map(f => ({ question: f.q, answer: f.a })))

    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: BASE_URL },
        { name: 'Software Gestionali', url: `${BASE_URL}/software-gestionali` }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <main className="min-h-screen flex flex-col font-sans bg-background overflow-x-hidden w-full selection:bg-[#FFBC11] selection:text-black">

                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#0a0a0a] text-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#FFBC11]/10 rounded-full blur-[120px] pointer-events-none opacity-30"></div>
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
                        <BlurFade delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white">
                                    Automazione Intelligente
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 text-balance">
                                Smetti di combattere <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] to-orange-500">
                                    con Excel e carta.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
                                Se gestisci la tua attività con fogli sparsi, promemoria in giro e operazioni che ripeti ogni giorno,
                                <span className="text-white font-bold"> stai bruciando tempo prezioso</span>.
                                Io creo software che fanno il lavoro al posto tuo, così puoi concentrarti su quello che conta davvero.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="h-16 px-10 rounded-full bg-[#FFBC11] text-black font-black text-lg hover:bg-[#FFBC11]/90 shadow-[0_0_30px_-5px_rgba(255,188,17,0.4)] transition-all hover:scale-105 w-full sm:w-auto"
                                    asChild
                                >
                                    <Link href="#contatti">
                                        Analizziamo la tua Situazione
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <WhatsAppButton
                                    size="lg"
                                    className="h-16 px-10 rounded-full w-full sm:w-auto"
                                    message="Ciao Manuel! Ho visto la tua pagina sui software gestionali. Vorrei capire come automatizzare la mia attività..."
                                >
                                    Parliamone su WhatsApp
                                </WhatsAppButton>
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* IL PROBLEMA: Caos Gestionale */}
                <section className="py-24 bg-white relative">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Il caos gestionale ti sta costando tempo e soldi
                            </h2>
                            <p className="text-lg text-gray-600 font-medium">
                                Se ti riconosci in queste situazioni, è ora di digitalizzare.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Clock,
                                    color: 'text-red-500',
                                    bg: 'bg-red-50',
                                    title: 'Ore Perse in Compilazioni',
                                    desc: 'Compili le stesse informazioni su preventivi, fatture e email. Ogni documento è una perdita di tempo.'
                                },
                                {
                                    icon: Search,
                                    color: 'text-orange-500',
                                    bg: 'bg-orange-50',
                                    title: 'Dati Sparsi Ovunque',
                                    desc: 'I clienti sono su un foglio, gli ordini su un altro, le scadenze sul calendario di Outlook.'
                                },
                                {
                                    icon: AlertCircle,
                                    color: 'text-yellow-500',
                                    bg: 'bg-yellow-50',
                                    title: 'Errori che Sfuggono',
                                    desc: 'Un copia-incolla sbagliato, un numero errato, una scadenza dimenticata. Gli errori costano cari.'
                                },
                                {
                                    icon: Layers,
                                    color: 'text-blue-500',
                                    bg: 'bg-blue-50',
                                    title: 'Nessuna Visibilità',
                                    desc: 'Non sai davvero quanto guadagni, quali clienti ti portano valore, cosa venderebbe di più.'
                                },
                                {
                                    icon: RefreshCw,
                                    color: 'text-purple-500',
                                    bg: 'bg-purple-50',
                                    title: 'Operazioni Ripetitive',
                                    desc: 'Inviare la stessa email di conferma, creare lo stesso preventivo, compilare gli stessi moduli.'
                                },
                                {
                                    icon: Users,
                                    color: 'text-cyan-500',
                                    bg: 'bg-cyan-50',
                                    title: 'Team Disallineato',
                                    desc: 'Ogni persona ha il proprio metodo. Non c\'è condivisione, non c\'è coordinamento, si duplica il lavoro.'
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
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

                {/* LA SOLUZIONE: Software Su Misura */}
                <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            <div>
                                <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                    La Soluzione
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[1.1]">
                                    Software che si adatta a te, non il contrario.
                                </h2>
                                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                                    <p>
                                        Non ti imposto un gestionale complicato pieno di funzioni che non userai mai.
                                        Analizzo i tuoi processi e costruisco uno strumento su misura che fa esattamente quello che ti serve.
                                    </p>
                                    <p>
                                        Più efficienza, meno errori, tempo recuperato per le cose che contano davvero.
                                    </p>
                                    <ul className="space-y-4 mt-8">
                                        {[
                                            "Interfaccia intuitiva, come un'app che già conosci",
                                            "Dati sempre accessibili da qualsiasi dispositivo",
                                            "Automazioni che eliminano le operazioni ripetitive",
                                            "Report e metriche per decidere meglio",
                                            "Nessun canone: il software è tuo, per sempre"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-[#FFBC11] rounded-xl flex items-center justify-center">
                                            <Cpu className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Il Tuo Sistema Gestionale</h3>
                                            <p className="text-gray-400 text-sm">Personalizzato per le tue esigenze</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { label: 'Clienti Attivi', value: '847', change: '+12%' },
                                            { label: 'Preventivi Inviati', value: '1.234', change: '+8%' },
                                            { label: 'Fatture Emesse', value: '892', change: '+15%' },
                                            { label: 'Ore Risparmiate/Sett.', value: '12.5', change: '+∞' },
                                        ].map((stat, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                                <div>
                                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                                    <p className="text-2xl font-black text-white">{stat.value}</p>
                                                </div>
                                                <span className="text-green-400 text-sm font-bold">{stat.change}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SETTORI */}
                <section className="py-24 bg-gray-50">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Per Chi?
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Ogni attività ha il suo software
                            </h2>
                            <p className="text-lg text-gray-600 font-medium">
                                Ho esperienza nella creazione di gestionali per diversi settori.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries.map((industry, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                                        <industry.icon className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <h3 className="text-lg font-black text-gray-900 mb-2">{industry.name}</h3>
                                    <p className="text-gray-500 text-sm font-medium">{industry.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Il tuo settore non è in lista?</p>
                            <WhatsAppButton
                                variant="outline"
                                className="rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8"
                                message="Ciao Manuel! Vorrei capire se puoi creare un gestionale per il mio settore..."
                            />
                        </div>
                    </div>
                </section>

                {/* FUNZIONALITÀ */}
                <section className="py-24 bg-white">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Cosa Include
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Tutto quello che ti serve, niente di più
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
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

                {/* TABELLA COMPARATIVA */}
                <section className="py-24 bg-[#FAFAFA]">
                    <div className="container max-w-[1000px] mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Confronto Soluzioni
                            </h2>
                            <p className="text-lg text-gray-500 font-medium">
                                Perché un software su misura batte Excel e soluzioni standard
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-4 text-left text-gray-400 font-medium text-sm uppercase tracking-wider w-1/4">Caratteristica</th>
                                        <th className="py-6 px-4 text-center text-gray-400 font-bold text-lg w-1/4">Fogli Excel</th>
                                        <th className="py-6 px-4 text-center text-gray-400 font-bold text-lg w-1/4">Software Standard</th>
                                        <th className="py-6 px-4 text-center bg-[#FFBC11]/10 border-t-4 border-[#FFBC11] rounded-t-xl w-1/4">
                                            <span className="text-black font-black text-xl block py-2">Su Misura</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm md:text-base">
                                    {[
                                        { label: "Facilità d'uso", excel: "Bassa (serve conoscere le formule)", standard: "Media (servono corsi)", me: "Alta (tutti la usano subito)" },
                                        { label: "Personalizzazione", excel: "Sì, ma fragile", standard: "Limitata o costosa", me: "Totale, senza limiti" },
                                        { label: "Condivisione in Team", excel: "Caos di versioni", standard: "Licenze multiple costose", me: "Accessi illimitati inclusi" },
                                        { label: "Automazione", excel: "Macro instabili", standard: "Plugin a pagamento", me: "Integrata nel sistema" },
                                        { label: "Costo nel tempo", excel: "Gratuito (ma inefficiente)", standard: "Canoni per sempre", me: "Nessun canone, una tantum" },
                                        { label: "Supporto", excel: "Nessuno", standard: "Ticket generico", me: "Parli direttamente con me" },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                            <td className="py-6 px-4 font-bold text-gray-900">{row.label}</td>
                                            <td className="py-6 px-4 text-center text-gray-500">{row.excel}</td>
                                            <td className="py-6 px-4 text-center text-gray-500">{row.standard}</td>
                                            <td className="py-6 px-4 text-center bg-[#FFBC11]/5 font-bold text-gray-900 border-x border-[#FFBC11]/10">
                                                {row.me}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* PACCHETTI */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Investimento
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Soluzioni per ogni esigenza
                            </h2>
                            <p className="text-lg text-gray-500 font-medium">
                                Trasparenza totale sui costi. Nessuna sorpresa finale.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Card 1: CRM Base */}
                            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-gray-900">CRM Base</h3>
                                <p className="text-gray-500 font-medium mt-2">Per artigiani, professionisti e piccole attività che vogliono organizzare clienti e preventivi.</p>
                            </div>
                                <div className="mb-8">
                                    <span className="text-sm text-gray-400 font-bold uppercase">A partire da</span>
                                    <div className="text-4xl font-black text-gray-900">€ 1.500</div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {["Anagrafica clienti completa", "Storico interazioni", "Generatori preventivi PDF", "Note e promemoria", "Accesso multiutente (fino a 3)", "Backup automatico"].map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <Button variant="outline" className="w-full rounded-xl font-bold border-gray-200 hover:bg-gray-50 hover:text-black" asChild>
                                        <Link href="#contatti">Richiedi Info</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Card 2: Gestionale Completo (Featured) */}
                            <div className="bg-black text-white rounded-[2rem] p-8 border border-gray-800 shadow-2xl flex flex-col transform md:-translate-y-4 relative">
                                <div className="absolute top-0 right-0 bg-[#FFBC11] text-black text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                                    PIÙ RICHIESTO
                                </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-white">Gestionale Completo</h3>
                                <p className="text-gray-400 font-medium mt-2">Per piccole e medie imprese, artigiani e negozi che gestiscono tutto in un unico sistema.</p>
                            </div>
                                <div className="mb-8">
                                    <span className="text-sm text-gray-500 font-bold uppercase">A partire da</span>
                                    <div className="text-4xl font-black text-[#FFBC11]">€ 3.000</div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {["Tutto CRM Base", "Gestione magazzino", "Ordini e commesse", "Fatturazione semplice", "Dashboard analytics", "Integrazione WhatsApp", "Report avanzati"].map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-[#FFBC11] shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <Button className="w-full h-12 rounded-xl font-bold bg-[#FFBC11] text-black hover:bg-[#e5a910]" asChild>
                                        <Link href="#contatti">Inizia Ora</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Card 3: Web App Complessa */}
                            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-gray-900">Progetto Completo</h3>
                                <p className="text-gray-500 font-medium mt-2">Per aziende con processi complessi che necessitano di automazioni avanzate e integrazioni.</p>
                            </div>
                                <div className="mb-8">
                                    <span className="text-sm text-gray-400 font-bold uppercase">Investimento</span>
                                    <div className="text-4xl font-black text-gray-900">Su Misura</div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {["Tutto Gestionale Completo", "Integrazioni API personalizzate", "Workflow complessi", "Multi-sede", "Portale clienti", "Accessi ruolati avanzati", "Manutenzione inclusa (1 anno)"].map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <Button variant="outline" className="w-full rounded-xl font-bold border-gray-200 hover:bg-gray-50 hover:text-black" asChild>
                                        <Link href="#contatti">Parliamone</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHATSAPP CTA */}
                <section className="py-12 bg-green-50/50 border-y border-green-100">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20 shrink-0">
                                    <Zap className="w-8 h-8 fill-current" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                                        Hai domande sul tuo caso specifico?
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        Contattami su WhatsApp per una valutazione gratuita.
                                    </p>
                                </div>
                            </div>
                            <WhatsAppButton
                                size="lg"
                                className="h-16 px-10 rounded-2xl w-full md:w-auto shadow-xl shadow-green-500/20 transition-all hover:scale-105"
                                message="Ciao Manuel! Ho visto la tua pagina sui software gestionali. Vorrei capire come potresti aiutare la mia attività..."
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
                    <div className="container max-w-[800px] mx-auto px-4 sm:px-6 relative z-10">
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
                <section id="contatti" className="py-24 md:py-32 relative overflow-hidden bg-black text-white">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFBC11]/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter">
                                    Pronti a digitalizzare la tua attività?
                                </h2>
                                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                                    Raccontami la tua situazione. Analizziamo insieme se un software su misura può aiutarti e quale soluzione è più adatta a te.
                                </p>
                                <div className="flex items-center gap-4 text-sm font-bold text-[#FFBC11]">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Valutazione Gratuita
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-[#FFBC11]">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Nessun Impegno
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-[#FFBC11]">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Risposta in 24h
                                </div>

                                <div className="pt-8">
                                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Contatto Preferenziale</p>
                                    <WhatsAppButton
                                        size="lg"
                                        className="h-16 px-10 rounded-2xl w-full sm:w-auto shadow-2xl shadow-green-500/20 transition-all hover:scale-105"
                                        message="Ciao Manuel! Voglio discutere di un software gestionale per la mia attività."
                                    />
                                </div>
                            </div>

                            <div className="bg-white text-black rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-4 border-white/10">
                                <ServiceContactForm
                                    serviceName="Software Gestionali - Richiesta Info"
                                    formTitle="Parliamone"
                                    formDescription="Descrivi la tua situazione e le tue esigenze."
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
