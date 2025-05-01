import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ServiceContactForm } from '@/components/service-contact-form';
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { DATA } from "@/data/resume";

// TODO: Definire metadati

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url + "/sviluppo-gestionali-personalizzati-modena"),
    title: {
        default: "Sviluppo Gestionali Personalizzati a Modena | Software su misura - Manuel De Ceglie",
        template: "%s | Manuel De Ceglie",
    },
    alternates: {
        canonical: DATA.url + "/sviluppo-gestionali-personalizzati-modena",
        languages: {
            "it-IT": DATA.url + "/sviluppo-gestionali-personalizzati-modena",
        },
    },
    description:
        "Realizzo software su misura a Modena per aziende e attività. Ottimizza processi di produzione, magazzino, CRM e fatturazione. Preventivo gratuito!",
    openGraph: {
        title: "Sviluppo Gestionali Personalizzati a Modena | Software su misura - Manuel De Ceglie",
        description:
            "Realizzo software su misura a Modena per aziende e attività. Ottimizza processi di produzione, magazzino, CRM e fatturazione. Preventivo gratuito!",
        url: DATA.url + "/sviluppo-gestionali-personalizzati-modena",
        siteName: "Manuel De Ceglie",
        images: [
            {
                url: `${DATA.url}/og-image.jpeg`,
                width: 1200,
                height: 630,
                alt: "Sviluppo Gestionali Personalizzati a Modena | Software su misura - Manuel De Ceglie",
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
        title: "Sviluppo Gestionali Personalizzati a Modena | Software su misura - Manuel De Ceglie",
        description:
            "Realizzo software su misura a Modena per aziende e attività. Ottimizza processi di produzione, magazzino, CRM e fatturazione. Preventivo gratuito!",
        card: "summary_large_image",
        images: [`${DATA.url}/og-image.jpeg`],
    },

    verification: {
        google: "",
        yandex: "",
    },
};

export default function GestionaliPage() {
    const serviceName = "Sviluppo Gestionali Personalizzati";

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 mt-10 mb-10">
            <section id="service-hero">
                <BlurFade delay={BLUR_FADE_DELAY * 1}>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
                        Sviluppo Gestionali Personalizzati a Modena
                    </h1>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <h2 className="mt-4 text-center text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Ottimizza i processi della tua azienda a Modena con un software gestionale su misura. Semplifica la fatturazione, il magazzino, la gestione clienti e molto altro.
                    </h2>
                </BlurFade>
            </section>

            {/* START: Add Service Details Section */}
            <section id="service-details">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-2xl font-bold">Software Gestionale su Misura: La Soluzione per la Tua Azienda</h2>
                </BlurFade>
                <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-4 space-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        {/* Content focused on benefits and client needs */}
                        <p>Realizzo <strong>applicativi web aziendali</strong> e <strong>software gestionali su misura</strong> per PMI e realtà produttive di <strong>Modena</strong>, <strong>Sassuolo</strong>, <strong>Maranello</strong> e dell&apos;intera provincia. Il mio obiettivo è aiutarti a <strong>ottimizzare i tuoi processi lavorativi</strong> e rendere la tua azienda più efficiente.</p>
                        <p>Sei stanco di procedure manuali lente e soggette a errori? Un gestionale personalizzato può fare la differenza, ad esempio per:</p>
                        <ul>
                            <li>Migliorare la gestione delle <strong>commesse</strong> e dei clienti (CRM)</li>
                            <li>Ottenere una <strong>tracciabilità</strong> precisa della produzione</li>
                            <li>Tenere sotto controllo il <strong>magazzino</strong> in tempo reale</li>
                        </ul>
                        <p>Un software su misura <strong>riduce gli errori, libera tempo prezioso</strong> per te e i tuoi collaboratori e ti fornisce dati chiari per prendere decisioni migliori. Sviluppo soluzioni intuitive, potenti e perfettamente integrate con i tuoi sistemi esistenti.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                            <Link
                                href="#cta-gestionali"
                                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline group whitespace-nowrap"
                            >
                                Discutiamo delle tue esigenze specifiche
                                <ArrowRight className="size-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </BlurFade>
                </div>
            </section>
            {/* END: Add Service Details Section */}

            {/* RE-INSERT Placeholder Sections (Adjusted Titles) BELOW */}
            <section id="mio-approccio-gestionali">
                <BlurFade delay={BLUR_FADE_DELAY * 5}> {/* Adjusted delay if needed */}
                    <h2 className="text-2xl font-bold">Dall&apos;Analisi alla Soluzione: Il Mio Metodo</h2>
                    {/* Add detailed list for software development process */}
                    <ul className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 list-disc pl-6 space-y-1">
                        <li><strong>Analisi dei Requisiti:</strong> Comprendiamo a fondo le tue esigenze operative, i flussi di lavoro attuali e gli obiettivi specifici che il software deve raggiungere.</li>
                        <li><strong>Progettazione della Soluzione:</strong> Definiamo l&apos;architettura del software, le tecnologie da utilizzare e progettiamo interfacce utente intuitive e funzionali.</li>
                        <li><strong>Sviluppo Agile e Modulare:</strong> Costruiamo il software per moduli, con un approccio agile che permette rilasci incrementali e feedback continui, garantendo flessibilità.</li>
                        <li><strong>Test Funzionali e Qualità:</strong> Eseguiamo test rigorosi per assicurarci che il software sia privo di errori, performante e risponda perfettamente ai requisiti definiti.</li>
                        <li><strong>Rilascio e Integrazione:</strong> Implementiamo la soluzione nel tuo ambiente lavorativo, curando l&apos;integrazione con eventuali sistemi preesistenti e la migrazione dei dati.</li>
                        <li><strong>Formazione e Supporto:</strong> Forniamo formazione al tuo team per l&apos;utilizzo ottimale del nuovo gestionale e offriamo supporto tecnico post-rilascio.</li>
                    </ul>
                </BlurFade>
            </section>
            {/* END RE-INSERTION */}

            {/* Removed detailed tech section placeholder */}

            <section id="faq-gestionali">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-2xl font-bold">Domande Frequenti (FAQ)</h2>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 space-y-2">
                        {/* TODO: Add FAQ specific for custom software */}
                        <p><strong>È possibile integrare il gestionale con altri software?</strong> Sì, l&apos;integrazione con i tuoi sistemi esistenti (es. contabilità, e-commerce) è un aspetto fondamentale che analizziamo insieme.</p>
                        <p><strong>Offrite assistenza post-rilascio?</strong> Certo, fornisco supporto continuativo e piani di manutenzione per garantire che il software rimanga performante e aggiornato.</p>
                        {/* Add Cost/Time FAQ */}
                        <p><strong>Quanto costa e quanto tempo richiede un gestionale su misura?</strong> I costi e le tempistiche dipendono molto dalla complessità delle funzionalità richieste. Un&apos;analisi preliminare gratuita ci permette di definire meglio l&apos;investimento. <Link href="#cta-gestionali" className="font-semibold">Contattami per un&apos;analisi gratuita</Link>.</p>
                    </div>
                </BlurFade>
            </section>

            {/* START INSERTION: Aree Servite Section */}
            <section id="aree-servite-gestionali">
                <BlurFade delay={BLUR_FADE_DELAY * 7.5}> {/* Adjusted delay */}
                    <h2 className="text-2xl font-bold">Aree Geografiche Servite per Gestionali</h2>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
                        Sviluppo software gestionali per aziende in tutta la provincia di Modena, con particolare focus su:
                    </p>
                    <ul className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 grid grid-cols-2 sm:grid-cols-3 gap-1 list-disc pl-5">
                        <li>Modena</li>
                        <li>Sassuolo e Distretto Ceramico</li>
                        <li>Maranello e Area Metalmeccanica</li>
                        <li>Carpi</li>
                        <li>Vignola</li>
                        <li>Castelfranco Emilia</li>
                        <li>Spilamberto</li>
                        <li>Formigine</li>
                        <li>Fiorano Modenese</li>
                        {/* Add others if relevant */}
                    </ul>
                </BlurFade>
            </section>
            {/* END INSERTION: Aree Servite Section */}

            {/* Replace CTA section with the ServiceContactForm component */}
            <section id="cta-gestionali" className="mt-12">
                <BlurFade delay={BLUR_FADE_DELAY * 8}> {/* Delay Placeholder */}
                    <ServiceContactForm
                        serviceName={serviceName}
                        formTitle="Migliora l'Efficienza della Tua Azienda?"
                        formDescription="Richiedi un preventivo gratuito per sviluppare il software gestionale perfetto per le tue esigenze a Modena e provincia."
                        submitButtonText="Richiedi Preventivo Gratuito"
                    />
                </BlurFade>
            </section>
        </main>
    );
} 