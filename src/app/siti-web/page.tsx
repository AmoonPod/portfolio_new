import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Search,
    Smartphone,
    TrendingUp,
    MapPin,
    Globe,
    Database,
    Bot,
    X,
    AlertTriangle,
    Clock,
    ShieldCheck,
    Code2,
    Sparkles,
    ChevronRight,
    Target,
    BarChart3,
    Rocket,
    Lock,
    Timer
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import BlurFade from '@/components/magicui/blur-fade'
import { ServiceContactForm } from '@/components/service-contact-form'
import { DATA } from '@/data/resume'
import { sitiWebDataset } from '@/data/local-pages/siti-web-dataset'
import { generateServiceJsonLd, generateFAQJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'
import { locations, targetLocations } from '@/data/locations'
import NicheHubOtherNiches from '@/components/local-pages/niche/NicheHubOtherNiches'
import { NearbyCitiesFooter } from '@/components/local-pages/NearbyCitiesFooter'

const BASE_URL = 'https://manueldeceglie.it'

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: 'Realizzazione Siti Web che Portano Clienti | Manuel De Ceglie',
    description: 'Basta siti vetrina inutili. Realizzo siti web ad alte prestazioni (Next.js) progettati per posizionarsi su Google e generare fatturato. Analisi gratuita.',
    keywords: [
        'realizzazione siti web',
        'realizzazione siti web emilia romagna',
        'realizzazione siti web bologna',
        'realizzazione siti web modena',
        'realizzazione siti web reggio emilia',
        'realizzazione siti web sassuolo',
        'realizzazione siti web maranello',
        'realizzazione siti web fiorano modenese',
        'realizzazione siti web vignola',
        'realizzazione siti web carpineti',
        "realizzazione siti web castelnovo ne' monti",
        'siti web next.js',
        'siti web veloci',
        'posizionamento google',
        'sviluppo web professionale',
        'web designer emilia romagna',
        'costo sito web',
        'costo sito web bologna',
        'costo sito web modena',
        'costo sito web reggio emilia',
        'costo sito web sassuolo',
        'costo sito web maranello',
        'costo sito web fiorano modenese',
        'costo sito web vignola',
        'costo sito web carpineti',
        "costo sito web castelnovo ne' monti",
        'preventivo sito internet'
    ],
    alternates: {
        canonical: `${BASE_URL}/siti-web`,
    },
    openGraph: {
        title: 'Il tuo sito web ti sta facendo perdere soldi?',
        description: 'Scopri perché il 90% dei siti locali fallisce e come trasformare la tua presenza online in una macchina da contatti.',
        url: `${BASE_URL}/siti-web`,
        siteName: 'Manuel De Ceglie',
        images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
        locale: 'it_IT',
        type: 'website',
    },
}

const faqs = [
    {
        q: 'Perché i tuoi siti costano più di quelli fatti con Wix o WordPress?',
        a: 'Perché non vendo template pronti che rallentano e si rompono dopo un anno. Scrivo codice su misura (Next.js) ottimizzato per le prestazioni e Google. È la differenza tra comprare un vestito al mercato e farselo fare su misura da un sarto: il secondo ti dura una vita e ti sta perfetto.'
    },
    {
        q: 'Ho davvero bisogno di un sito se ho i social?',
        a: 'Assolutamente sì. I social sono "in affitto": l\'algoritmo cambia e tu sparisci dalla vista dei tuoi clienti. Il sito è casa tua, e nessuno può togliertelo. Inoltre, quando le persone cercano un servizio "serio" (un avvocato, un idraulico, un fornitore), cercano su Google, non su Instagram.'
    },
    {
        q: 'Quanto tempo ci vuole per andare online?',
        a: 'Per una Landing Page ("One Page") ottimizzata, circa 7-10 giorni lavorativi dalla ricezione dei materiali. Per siti multipagina completi, dalle 3 alle 5 settimane. La velocità dipende molto da quanto sei rapido nel fornirmi testi e foto.'
    },
    {
        q: 'Mi garantisci la prima pagina su Google?',
        a: 'Nessun professionista onesto può garantirti la prima posizione (è proprietà di Google). Quello che garantisco è un sito tecnicamente perfetto, veloce e strutturato secondo le migliori pratiche SEO, che è la base fondamentale per scalare le classifiche.'
    },
    {
        q: 'Cosa succede se voglio cambiare una foto o un testo tra 6 mesi?',
        a: 'Hai due opzioni: o mi mandi un WhatsApp e lo faccio io (incluso nei piani di assistenza), oppure ti collego un pannello di controllo semplicissimo (CMS) per farlo in autonomia. Niente codici strani, facile come scrivere una mail.'
    },
    {
        q: 'Ci sono costi nascosti o canoni obbligatori?',
        a: 'Trasparenza totale: paghi la realizzazione una volta sola. I costi fissi annuali sono solo dominio/hosting (circa 50-100€/anno totali, pagati ai provider, non a me) e, opzionalmente, il mio pacchetto di manutenzione se vuoi dormire sonni tranquilli.'
    }
]

// Raggruppa le città per provincia
function getCitiesByProvince() {
    const activeCities = sitiWebDataset.filter(city => city.active)
    const grouped: Record<string, typeof activeCities> = {}
    activeCities.forEach(city => {
        if (!grouped[city.province]) grouped[city.province] = []
        grouped[city.province].push(city)
    })
    return grouped
}

// Ottiene le città più popolose dell'Emilia-Romagna
function getTopCitiesEmiliaRomagna(limit: number = 10) {
    return targetLocations
        .filter(loc => loc.region === 'Emilia-Romagna')
        .sort((a, b) => b.population - a.population)
        .slice(0, limit)
}

export default function SitiWebPage() {
    const citiesByProvince = getCitiesByProvince()
    const topCities = getTopCitiesEmiliaRomagna(10)

    // JSON-LD
    const serviceJsonLd = generateServiceJsonLd({
        serviceName: 'Sviluppo Siti Web High-Performance',
        serviceDescription: 'Siti web sviluppati in Next.js per massimizzare velocità, SEO e conversioni. Non uso template pre-fatti.',
        serviceType: 'Web Development',
        areaServed: ['Emilia-Romagna', 'Italia'],
        url: `${BASE_URL}/siti-web`,
        image: `${BASE_URL}/og-image.png`,
        offers: [
            {
                id: 'landing-page',
                title: 'Landing Page Ottimizzata',
                description: 'Pagina singola progettata per massimizzare le conversioni e le vendite di un servizio specifico.',
                price: '600',
                active: true
            },
            {
                id: 'sito-professionale',
                title: 'Sito Web Professionale',
                description: 'Sito web multipagina (2+) completo con struttura SEO avanzata per aziende e professionisti.',
                price: '900',
                active: true
            },
            {
                id: 'web-app-ecommerce',
                title: 'Web App / E-commerce',
                description: 'Progetti complessi su misura, e-commerce e applicazioni web con funzionalità avanzate.',
                price: '0', // Su misura
                active: true
            }
        ]
    })

    const faqJsonLd = generateFAQJsonLd(faqs.map(f => ({ question: f.q, answer: f.a })))

    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: BASE_URL },
        { name: 'Siti Web', url: `${BASE_URL}/siti-web` }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <main className="min-h-screen flex flex-col font-sans bg-background overflow-x-hidden w-full selection:bg-[#FFBC11] selection:text-black">

                {/* ═══════════════════════════════════════════════════════════════════
            HERO SECTION: AGGRESSIVA E DIRETTA
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-black text-white">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#FFBC11]/10 rounded-full blur-[120px] pointer-events-none opacity-30"></div>
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
                        <BlurFade delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white">
                                    Stop ai siti che non vendono
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 text-balance">
                                Il tuo sito web dovrebbe essere <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC11] to-orange-500">
                                    il tuo miglior venditore.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
                                Se il tuo sito è lento, non si trova su Google o non porta contatti,
                                <span className="text-white font-bold"> è solo una spesa</span>.
                                Io costruisco macchine digitali progettate per portare fatturato.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="h-16 px-10 rounded-full bg-[#FFBC11] text-black font-black text-lg hover:bg-[#FFBC11]/90 shadow-[0_0_30px_-5px_rgba(255,188,17,0.4)] transition-all hover:scale-105 w-full sm:w-auto"
                                    asChild
                                >
                                    <Link href="#diagnosi">
                                        Analizziamo il tuo Sito
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <WhatsAppButton
                                    size="lg"
                                    className="h-16 px-10 rounded-full w-full sm:w-auto"
                                    message="Ciao Manuel! Ho visto la tua pagina sui siti web. Vorrei analizzare la mia situazione attuale..."
                                >
                                    Richiedi un preventivo
                                </WhatsAppButton>
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            DIAGNOSI: I 4 ERRORI FATALI (Perché perdi soldi)
        ═══════════════════════════════════════════════════════════════════ */}
                <section id="diagnosi" className="py-24 bg-white relative">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Perché il 90% dei siti locali fallisce?
                            </h2>
                            <p className="text-lg text-gray-600 font-medium">
                                La maggior parte dei siti web sono belli da vedere (forse), ma tecnicamente disastrosi.
                                Ecco i 4 motivi per cui i visitatori scappano dal tuo sito:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Timer,
                                    color: "text-red-500",
                                    bg: "bg-red-50",
                                    title: "Lentezza",
                                    desc: "Se il sito non carica in 2 secondi, l'utente chiude. Hai perso un cliente prima ancora di presentarti."
                                },
                                {
                                    icon: Smartphone,
                                    color: "text-orange-500",
                                    bg: "bg-orange-50",
                                    title: "Mobile Rotto",
                                    desc: "Il 75% del traffico è da telefono. Se bisogna zoomare per leggere o i tasti sono piccoli, addio conversione."
                                },
                                {
                                    icon: Search,
                                    color: "text-blue-500",
                                    bg: "bg-blue-50",
                                    title: "Invisibile",
                                    desc: "Un sito bellissimo che nessuno trova su Google è inutile. Serve struttura, non solo design."
                                },
                                {
                                    icon: Target,
                                    color: "text-purple-500",
                                    bg: "bg-purple-50",
                                    title: "Zero CTA",
                                    desc: "Visitatori che guardano e se ne vanno. Senza un percorso chiaro di contatto, il sito è un vicolo cieco."
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

                        <div className="mt-16 text-center">
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Vuoi una diagnosi rapida del tuo sito?</p>
                            <WhatsAppButton
                                variant="outline"
                                className="rounded-full border-2 border-green-500 text-green-600 hover:bg-green-50 px-8"
                                message="Ciao Manuel! Mi piacerebbe avere un parere rapido sul mio sito attuale."
                            />
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            IL CONFRONTO TECNICO (Next.js vs WordPress)
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
                    {/* Decorazioni */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            <div>
                                <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                    Non è magia, è tecnologia
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[1.1]">
                                    Perché non uso WordPress (e dovresti esserne felice).
                                </h2>
                                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                                    <p>
                                        WordPress è nato per i blog nel 2003. Oggi, per farci un sito veloce, devi riempirlo di plugin che lo appesantiscono e lo rendono vulnerabile agli hacker.
                                    </p>
                                    <p>
                                        Io utilizzo <strong>Next.js</strong> e <strong>React</strong>.
                                        È la stessa tecnologia usata da Facebook, Airbnb, Netflix e dai più grandi e-commerce al mondo.
                                    </p>
                                    <ul className="space-y-4 mt-8">
                                        {[
                                            "Caricamento istantaneo (zero attese)",
                                            "Sicurezza totale (niente database da hackerare)",
                                            "Google PageSpeed 99/100 garantito",
                                            "Scalabilità infinita"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Comparison Card */}
                            <div className="relative">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
                                    <h3 className="text-2xl font-bold text-white mb-8 text-center">La differenza è misurabile</h3>

                                    <div className="space-y-8">
                                        {/* Speed Comparison */}
                                        <div>
                                            <div className="flex justify-between text-sm font-bold mb-2">
                                                <span className="text-gray-400">Sito WordPress Medio</span>
                                                <span className="text-red-400">3.5s - 6s (Lento)</span>
                                            </div>
                                            <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-[40%] bg-red-500 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-sm font-bold mb-2">
                                                <span className="text-white">Sito Manuel De Ceglie</span>
                                                <span className="text-green-400">0.4s - 0.8s (Istantaneo)</span>
                                            </div>
                                            <div className="h-4 bg-white/10 rounded-full overflow-hidden relative">
                                                <div className="absolute top-0 left-0 h-full w-[95%] bg-[#FFBC11] shadow-[0_0_20px_#FFBC11] rounded-full animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                                        <p className="text-sm text-blue-200 text-center font-medium">
                                            <Zap className="w-4 h-4 inline mr-2 text-blue-400" />
                                            Google premia i siti veloci facendoli salire in classifica.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            TABELLA COMPARATIVA (Io vs Altri)
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="py-24 bg-white">
                    <div className="container max-w-[1000px] mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Chi scegli come partner?
                            </h2>
                            <p className="text-lg text-gray-500 font-medium">
                                Confronta le opzioni sul mercato. La trasparenza è il mio forte.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-4 text-left text-gray-400 font-medium text-sm uppercase tracking-wider w-1/4">Caratteristica</th>
                                        <th className="py-6 px-4 text-center text-gray-400 font-bold text-lg w-1/4">Il "Cugino" / Fai-da-te</th>
                                        <th className="py-6 px-4 text-center text-gray-400 font-bold text-lg w-1/4">Web Agency Classica</th>
                                        <th className="py-6 px-4 text-center bg-[#FFBC11]/10 border-t-4 border-[#FFBC11] rounded-t-xl w-1/4">
                                            <span className="text-black font-black text-xl block py-2">Manuel De Ceglie</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm md:text-base">
                                    {[
                                        { label: "Tecnologia", cugino: "Wix / WordPress crackato", agency: "WordPress con Template", me: "Next.js Custom Code" },
                                        { label: "Velocità", cugino: "Lentissimo", agency: "Dipende dai plugin", me: "Massima (99/100)" },
                                        { label: "SEO", cugino: "Inesistente", agency: "Plugin base (Yoast)", me: "SEO Tecnica Nativa" },
                                        { label: "Sicurezza", cugino: "Rischio alto", agency: "Necessita manutenzione", me: "Blindata (Statico)" },
                                        { label: "Costo Annuale", cugino: "Basso", agency: "Alto (Canoni obbligatori)", me: "Solo Hosting (Basso)" },
                                        { label: "Interlocutore", cugino: "Irreperibile", agency: "Account Manager", me: "Diretto con Sviluppatore" },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                            <td className="py-6 px-4 font-bold text-gray-900">{row.label}</td>
                                            <td className="py-6 px-4 text-center text-gray-500">{row.cugino}</td>
                                            <td className="py-6 px-4 text-center text-gray-500">{row.agency}</td>
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

                {/* ═══════════════════════════════════════════════════════════════════
            I PACCHETTI (Qualificazione)
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#FFBC11] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Investimento Chiaro
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                                Soluzioni per ogni fase di crescita
                            </h2>
                            <p className="text-lg text-gray-500 font-medium">
                                Ogni progetto è unico, ma queste fasce ti aiutano a capire cosa aspettarti.
                                Nessuna sorpresa finale.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Card 1: Landing */}
                            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-black text-gray-900">Landing Page</h3>
                                    <p className="text-gray-500 font-medium mt-2">Per chi deve vendere un servizio specifico o lanciare un'offerta.</p>
                                </div>
                                <div className="mb-8">
                                    <span className="text-sm text-gray-400 font-bold uppercase">A partire da</span>
                                    <div className="text-4xl font-black text-gray-900">€ 649</div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {["Pagina Unica a Scorrimento", "Ottimizzata per Conversione", "Mobile Perfect", "Form Contatti + WhatsApp", "Consegna in 7 giorni"].map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <Button variant="outline" className="w-full rounded-xl font-bold border-gray-200 hover:bg-gray-50 hover:text-black" asChild>
                                        <Link href="#contatti">Chiedi info</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Card 2: Sito Vetrina (Featured) */}
                            <div className="bg-black text-white rounded-[2rem] p-8 border border-gray-800 shadow-2xl flex flex-col transform md:-translate-y-4 relative">
                                <div className="absolute top-0 right-0 bg-[#FFBC11] text-black text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                                    PIÙ RICHIESTO
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-2xl font-black text-white">Sito Professionale</h3>
                                    <p className="text-gray-400 font-medium mt-2">La presenza digitale completa per aziende e professionisti.</p>
                                </div>
                                <div className="mb-8">
                                    <span className="text-sm text-gray-500 font-bold uppercase">A partire da</span>
                                    <div className="text-4xl font-black text-[#FFBC11]">€ 949</div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {["Da 2+ Pagine", "Struttura SEO Avanzata", "Google Maps + Business Profile", "CMS per modifiche autonome (su richiesta)", "Analytics + Search Console"].map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-[#FFBC11] shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <Button className="w-full h-12 rounded-xl font-bold bg-[#FFBC11] text-black hover:bg-[#e5a910]" asChild>
                                        <Link href="#contatti">Richiedi Preventivo</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Card 3: Custom/App */}
                            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-black text-gray-900">Web App / E-comm</h3>
                                    <p className="text-gray-500 font-medium mt-2">Per chi ha bisogno di funzionalità complesse o vendita online.</p>
                                </div>
                                <div className="mb-8">
                                    <span className="text-sm text-gray-400 font-bold uppercase">Progetti complessi</span>
                                    <div className="text-4xl font-black text-gray-900">Su Misura</div>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {["E-commerce Completo", "Area Riservata Clienti", "Gestionale Integrato", "Integrazioni API", "Database Personalizzato"].map((f, i) => (
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

                {/* ═══════════════════════════════════════════════════════════════════
            CITTÀ & SEO LOCALE (Interlinking mantenuto ma raffinato)
        ═══════════════════════════════════════════════════════════════════ */}


                {/* Città Scorrevole con NearbyCitiesFooter */}
                <NearbyCitiesFooter serviceName="Siti Web" />

                {/* Settori */}
                <NicheHubOtherNiches showAll={true} />

                {/* ═══════════════════════════════════════════════════════════════════
            CTA UNICA - Città e Settori
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="py-12 bg-green-50/50 border-y border-green-100">
                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20 shrink-0">
                                    <Zap className="w-8 h-8 fill-current" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                                        Non trovi la tua città o il tuo settore?
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        Non ti preoccupare. Contattami lo stesso che ne parliamo.
                                    </p>
                                </div>
                            </div>
                            <WhatsAppButton
                                size="lg"
                                className="h-16 px-10 rounded-2xl w-full md:w-auto shadow-xl shadow-green-500/20 transition-all hover:scale-105"
                                message="Ciao Manuel! Non ho trovato la mia città o il mio settore nella lista. Possiamo parlarne?"
                            >
                                Scrivimi ora
                            </WhatsAppButton>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════════════════════ */}
                <section className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
                    <div className="container max-w-[800px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-4">
                                Dubbi? Rispondo qui.
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

                {/* ═══════════════════════════════════════════════════════════════════
            CTA FINALE
        ═══════════════════════════════════════════════════════════════════ */}
                <section id="contatti" className="py-24 md:py-32 relative overflow-hidden bg-black text-white">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFBC11]/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter">
                                    Iniziamo a fare sul serio?
                                </h2>
                                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                                    Non ti sto vendendo "un sito". Ti sto proponendo una partnership per far crescere la tua attività.
                                    Scrivimi, analizziamo la tua situazione e vediamo se posso aiutarti.
                                </p>
                                <div className="flex items-center gap-4 text-sm font-bold text-[#FFBC11]">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Preventivo Gratuito in 24h
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-[#FFBC11]">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Nessun impegno
                                </div>

                                <div className="pt-8">
                                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Canale Preferenziale</p>
                                    <WhatsAppButton
                                        size="lg"
                                        className="h-16 px-10 rounded-2xl w-full sm:w-auto shadow-2xl shadow-green-500/20 transition-all hover:scale-105"
                                        message="Ciao Manuel! Voglio iniziare a fare sul serio con il mio sito web."
                                    />
                                </div>
                            </div>

                            <div className="bg-white text-black rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-4 border-white/10">
                                <ServiceContactForm
                                    serviceName="Siti Web - Richiesta Preventivo"
                                    formTitle="Richiedi Preventivo"
                                    formDescription="Compila il form. Ti rispondo personalmente."
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
