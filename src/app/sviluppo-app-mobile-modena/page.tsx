import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceContactForm } from '@/components/service-contact-form';
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { DATA } from "@/data/resume";

// TODO: Definire metadati

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url + "/sviluppo-app-mobile-modena"),
    title: {
        default: "Sviluppo App Mobile (iOS/Android) a Modena | Applicazioni Flutter su misura - Manuel De Ceglie",
        template: "%s | Manuel De Ceglie",
    },
    alternates: {
        canonical: DATA.url + "/sviluppo-app-mobile-modena",
        languages: {
            "it-IT": DATA.url + "/sviluppo-app-mobile-modena",
        },
    },
    description:
        "Realizzo applicazioni mobile native o cross-platform per iOS e Android. Sviluppo app a Modena e provincia. Preventivo gratuito!",
    openGraph: {
        title: "Sviluppo App Mobile (iOS/Android) a Modena | Applicazioni Flutter su misura - Manuel De Ceglie",
        description:
            "Realizzo applicazioni mobile native o cross-platform per iOS e Android. Sviluppo app a Modena e provincia. Preventivo gratuito!",
        url: DATA.url + "/sviluppo-app-mobile-modena",
        siteName: "Manuel De Ceglie",
        images: [
            {
                url: `${DATA.url}/og-image.jpeg`,
                width: 1200,
                height: 630,
                alt: "Sviluppo App Mobile (iOS/Android) a Modena | Applicazioni mobile su misura - Manuel De Ceglie",
            },
        ],
        countryName: "Italy",
        locale: "it_IT",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Sviluppo App Mobile (iOS/Android) a Modena | Applicazioni Flutter su misura - Manuel De Ceglie",
        description:
            "Realizzo applicazioni mobile native o cross-platform per iOS e Android. Sviluppo app a Modena e provincia. Preventivo gratuito!",
        card: "summary_large_image",
        images: [`${DATA.url}/og-image.jpeg`],
    },

    verification: {
        google: "",
        yandex: "",
    },
};

export default function AppMobilePage() {
    const serviceName = "Sviluppo App Mobile";

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 mt-10 mb-10">
            <section id="service-hero">
                <BlurFade delay={BLUR_FADE_DELAY * 1}>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
                        Sviluppo App Mobile (iOS/Android) a Modena
                    </h1>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <h2 className="mt-4 text-center text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Trasforma la tua idea in un'applicazione mobile nativa o cross-platform per raggiungere i tuoi clienti su iOS e Android. Sviluppo app a Modena e provincia.
                    </h2>
                </BlurFade>
            </section>

            {/* START: Add Service Details Section */}
            <section id="service-details">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-2xl font-bold">Applicazioni Mobile Intuitive e Performanti</h2>
                </BlurFade>
                <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-4 space-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        {/* Content focused on benefits and client needs */}
                        <p>Porto le tue idee su smartphone e tablet creando <strong>applicazioni mobile</strong> native o cross-platform per dispositivi iOS e Android. Collaboro con <strong>startup e aziende di Modena, Castelfranco Emilia</strong> e dell'intera provincia per sviluppare soluzioni digitali coinvolgenti.</p>
                        <p>Che tu voglia lanciare un nuovo servizio, migliorare l'interazione con i tuoi clienti o digitalizzare un processo, un'app mobile può essere la chiave per:</p>
                        <ul>
                            <li><strong>Raggiungere i tuoi clienti</strong> ovunque si trovino, direttamente sul loro dispositivo preferito.</li>
                            <li>Offrire un'<strong>esperienza utente fluida</strong> e ottimizzata per il mobile.</li>
                            <li>Creare un <strong>canale di comunicazione diretto</strong> e personalizzato.</li>
                            <li><strong>Differenziarti dalla concorrenza</strong> con uno strumento innovativo.</li>
                        </ul>
                        <p>Utilizzo tecnologie moderne come Flutter per garantire <strong>prestazioni elevate</strong> e la possibilità di raggiungere sia utenti iOS che Android con un unico sviluppo efficiente. Seguo l'intero ciclo di vita dell'app, dall'idea alla <strong>pubblicazione sugli store</strong> (App Store e Google Play).</p>
                        <p>Il mio obiettivo è trasformare la tua visione in un'app di successo che porti <strong>risultati concreti</strong> al tuo business.</p>
                        {/* Add styled Link CTAs */}
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                            {/* REMOVE link to projects */}
                            {/* <Link
                                href="/#projects"
                                className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-blue-600 dark:hover:text-blue-400 group whitespace-nowrap"
                            >
                                Guarda i Progetti Correlati
                                <ArrowRight className="size-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                            </Link> */}
                            <Link
                                href="#cta-app"
                                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline group whitespace-nowrap"
                            >
                                Pianifica Chiamata per la Tua App
                                <ArrowRight className="size-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </BlurFade>
                </div>
            </section>
            {/* END: Add Service Details Section */}

            {/* Placeholder Sections (Adjusted Titles) */}
            <section id="mio-approccio-app">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-2xl font-bold">Dall'Idea all'App Store: Il Percorso</h2>
                    <ul className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 list-disc pl-6 space-y-1">
                        <li><strong>Analisi dell'Idea e Requisiti:</strong> Definiamo insieme le funzionalità chiave, il target di utenti e gli obiettivi strategici della tua applicazione mobile.</li>
                        <li><strong>Design UX/UI e Prototipazione:</strong> Collaboro con te o il tuo designer per definire l'esperienza utente (UX) e trasformare le specifiche grafiche (UI) in prototipi interattivi.</li>
                        <li><strong>Sviluppo Cross-Platform (Flutter):</strong> Sviluppo l'applicazione utilizzando Flutter, permettendo di raggiungere sia iOS che Android con un codice efficiente e performante.</li>
                        <li><strong>Test Funzionali e Multi-device:</strong> Eseguo test approfonditi su diversi dispositivi e sistemi operativi per garantire stabilità, performance e compatibilità.</li>
                        <li><strong>Pubblicazione sugli Store:</strong> Ti assisto nel processo di preparazione e pubblicazione dell'app su Apple App Store e Google Play Store, rispettando le linee guida.</li>
                        <li><strong>Manutenzione ed Evoluzione:</strong> Offro supporto post-lancio per aggiornamenti, correzione di bug e future evoluzioni dell'applicazione.</li>
                    </ul>
                </BlurFade>
            </section>

            {/* Removed detailed tech section placeholder */}

            <section id="faq-app">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-2xl font-bold">Domande Frequenti (FAQ)</h2>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 space-y-2">
                        {/* TODO: Add FAQ specific for mobile apps */}
                        <p><strong>Sviluppate sia per iOS che per Android?</strong> Sì, utilizzo principalmente tecnologie cross-platform come Flutter per creare un'unica app che funziona nativamente su entrambi i sistemi, ottimizzando tempi e costi.</p>
                        <p><strong>Vi occupate anche della grafica (UI/UX Design)?</strong> Mi concentro sullo sviluppo tecnico dell'applicazione. Collaboro strettamente con designer di tua fiducia o lavoro sulla base di specifiche e design che mi vengono forniti per garantire che l'app sia funzionale e rispetti la visione estetica desiderata.</p>
                        {/* Add Cost/Time FAQ */}
                        <p><strong>Quanto costa e quanto tempo richiede sviluppare un'app?</strong> I costi e le tempistiche variano significativamente in base alla complessità delle funzionalità, al design e alle integrazioni richieste. <Link href="#cta-app" className="font-semibold">Pianifichiamo una chiamata</Link> per discutere la tua idea e fornirti una stima più precisa.</p>
                    </div>
                </BlurFade>
            </section>

            {/* START INSERTION: Aree Servite Section */}
            <section id="aree-servite-app">
                <BlurFade delay={BLUR_FADE_DELAY * 7.5}> {/* Adjusted delay */}
                    <h2 className="text-2xl font-bold">Aree Geografiche Servite per Sviluppo App</h2>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
                        Sviluppo applicazioni mobile per clienti in tutta la provincia di Modena, tra cui:
                    </p>
                    <ul className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 grid grid-cols-2 sm:grid-cols-3 gap-1 list-disc pl-5">
                        <li>Modena</li>
                        <li>Carpi</li>
                        <li>Sassuolo</li>
                        <li>Castelfranco Emilia</li>
                        <li>Vignola</li>
                        <li>Mirandola</li>
                        <li>Formigine</li>
                        {/* Add others if relevant */}
                    </ul>
                </BlurFade>
            </section>
            {/* END INSERTION: Aree Servite Section */}

            {/* Replace CTA section with the ServiceContactForm component */}
            <section id="cta-app" className="mt-12">
                <BlurFade delay={BLUR_FADE_DELAY * 8}> {/* Delay Placeholder */}
                    <ServiceContactForm
                        serviceName={serviceName}
                        formTitle="Hai un'Idea per un'App Mobile?"
                        formDescription="Pianifica una chiamata conoscitiva gratuita per discutere del tuo progetto di app mobile e scoprire come posso aiutarti a realizzarlo."
                        submitButtonText="Pianifica una Chiamata"
                    />
                </BlurFade>
            </section>
        </main>
    );
} 