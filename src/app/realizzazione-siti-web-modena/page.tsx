import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ServiceContactForm } from '@/components/service-contact-form'; // Import the new form component
import { Metadata } from "next";
import { DATA } from "@/data/resume";
import Head from "next/head";
import { ArrowRight } from "lucide-react"; // Ensure ArrowRight is imported

// TODO: Definire metadati specifici per SEO
// export const metadata = {
//   title: "Realizzazione Siti Web Professionali a Modena | Manuel De Ceglie",
//   description: "Creo siti web moderni, veloci e ottimizzati SEO per aziende e professionisti a Modena, Vignola, Castelfranco E. e provincia. Siti vetrina, e-commerce, blog.",
// };

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url + "/realizzazione-siti-web-modena"),
    title: {
        default: "Realizzazione Siti Web Modena | Creazione Siti Professionali - Manuel De Ceglie",
        template: "%s | Manuel De Ceglie",
    },
    alternates: {
        canonical: DATA.url + "/realizzazione-siti-web-modena",
        languages: {
            "it-IT": DATA.url + "/realizzazione-siti-web-modena",
        },
    },
    description:
        "Cerchi un esperto per la realizzazione di siti web a Modena e provincia? Creo siti vetrina, e-commerce e blog professionali, ottimizzati SEO. Preventivo gratuito!",
    openGraph: {
        title: "Realizzazione Siti Web Modena | Creazione Siti Professionali - Manuel De Ceglie",
        description:
            "Cerchi un esperto per la realizzazione di siti web a Modena e provincia? Creo siti vetrina, e-commerce e blog professionali, ottimizzati SEO. Preventivo gratuito!",
        url: DATA.url + "/realizzazione-siti-web-modena",
        siteName: "Manuel De Ceglie",
        images: [
            {
                url: `${DATA.url}/og-image.jpeg`,
                width: 1200,
                height: 630,
                alt: "Realizzazione Siti Web Modena | Creazione Siti Professionali - Manuel De Ceglie",
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
        title: "Realizzazione Siti Web Modena | Creazione Siti Professionali - Manuel De Ceglie",
        description:
            "Cerchi un esperto per la realizzazione di siti web a Modena e provincia? Creo siti vetrina, e-commerce e blog professionali, ottimizzati SEO. Preventivo gratuito!",
        card: "summary_large_image",
        images: [`${DATA.url}/og-image.jpeg`],
    },

    verification: {
        google: "",
        yandex: "",
    },
};


export default function RealizzazioneSitiWebPage() {
    // Trova il servizio specifico dai dati (opzionale, se serve info aggiuntiva qui)
    const serviceName = "Realizzazione Siti Web"; // Pass service name to the form

    return (
        <>

            <main className="flex flex-col min-h-[100dvh] space-y-10 mt-10 mb-10"> {/* Aggiunto padding verticale */}
                <section id="service-hero">
                    <BlurFade delay={BLUR_FADE_DELAY * 1}>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
                            Realizzazione Siti Web Professionali a Modena e Provincia
                        </h1>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        {/* Breve intro specifica per la pagina */}
                        <h2 className="mt-4 text-center text-muted-foreground md:text-xl max-w-2xl mx-auto">
                            Hai bisogno di un sito web moderno, performante e ottimizzato per i motori di ricerca per far crescere la tua attività a Modena e dintorni? Scopri come posso aiutarti.
                        </h2>
                    </BlurFade>
                </section>

                <section id="service-details">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <h2 className="text-2xl font-bold">Il Servizio di Creazione Siti Web in Dettaglio</h2>
                    </BlurFade>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-4 space-y-4">
                        <BlurFade delay={BLUR_FADE_DELAY * 4}>
                            {/* Modified text for flow, integrating specific examples and removing tech jargon */}
                            <p>Sviluppo <strong>siti internet</strong> moderni, veloci e ottimizzati (SEO) per aziende, professionisti e negozi a <strong>Modena e in tutta la provincia</strong>. Un sito web efficace è cruciale per <strong>attirare più clienti locali</strong> e presentare al meglio la tua attività. Che tu sia un <strong>professionista a Modena centro</strong>, un <strong>negozio a Carpi</strong>, o un&apos;<strong>azienda manifatturiera a Sassuolo</strong>, posso creare il sito giusto per te.</p>
                            <p>Mi occupo della creazione di diverse tipologie di siti web, personalizzati per le esigenze specifiche del <strong>territorio modenese</strong>:</p>
                            <ul>
                                <li><strong>Siti Vetrina Professionali:</strong> Per presentare la tua azienda, i tuoi servizi e rafforzare la tua immagine locale.</li>
                                <li><strong>Blog Aziendali:</strong> Per condividere la tua expertise, interagire con la comunità e migliorare il posizionamento sui motori di ricerca.</li>
                                <li><strong>Siti E-commerce Performanti:</strong> Per vendere i tuoi prodotti online raggiungendo clienti a Modena, provincia e oltre.</li>
                                <li><strong>Landing Page Ottimizzate:</strong> Per massimizzare il ritorno di campagne marketing mirate sul territorio.</li>
                            </ul>
                            <p>Il mio approccio garantisce soluzioni su misura, design <strong>responsive</strong> (perfettamente visibili su smartphone, tablet e desktop) e un&apos;interfaccia <strong>facile da usare</strong> sia per te che per i tuoi visitatori. Il mio obiettivo è diventare il punto di riferimento per la <strong>creazione di siti web professionali nel modenese</strong>, fornendo strumenti efficaci che portano risultati concreti.</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                                <Link
                                    href="/#projects"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-blue-600 dark:hover:text-blue-400 group whitespace-nowrap"
                                >
                                    Guarda i Progetti Correlati
                                    <ArrowRight className="size-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="#cta-web"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline group whitespace-nowrap"
                                >
                                    Richiedi Preventivo Sito Web
                                    <ArrowRight className="size-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </BlurFade>
                    </div>
                </section>

                {/* Placeholder per Sezioni Aggiuntive */}
                <section id="mio-approccio-web">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-2xl font-bold">Il Mio Approccio alla Realizzazione del Tuo Sito</h2>
                        <ul className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 list-disc pl-6 space-y-1">
                            <li><strong>Analisi e Strategia:</strong> Ascolto attentamente le tue esigenze e definiamo insieme gli obiettivi specifici che il sito web dovrà raggiungere.</li>
                            <li><strong>Design su Misura:</strong> Creo un layout grafico unico e professionale, perfettamente allineato con l&apos;identità del tuo brand e ottimizzato per l&apos;esperienza utente.</li>
                            <li><strong>Sviluppo Moderno:</strong> Utilizzo tecnologie all&apos;avanguardia come Next.js e React per garantire un sito web veloce, sicuro, affidabile e facilmente aggiornabile.</li>
                            <li><strong>Ottimizzazione SEO Base:</strong> Imposto le fondamenta tecniche e strutturali affinché il tuo sito sia ben indicizzato e possa essere trovato più facilmente sui motori di ricerca come Google.</li>
                            <li><strong>Consegna e Formazione:</strong> Ti consegno il sito web completo e pronto all&apos;uso, fornendoti anche una breve formazione per permetterti di gestire i contenuti in autonomia, se necessario.</li>
                            <li><strong>Supporto Continuativo:</strong> Rimango a tua disposizione anche dopo il lancio per offrire assistenza tecnica, manutenzione e futuri aggiornamenti.</li>
                        </ul>
                    </BlurFade>
                </section>

                <section id="faq-web">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-2xl font-bold">Domande Frequenti (FAQ)</h2>
                        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 space-y-2">
                            {/* TODO: Aggiungere FAQ specifiche per siti web */}
                            <p><strong>Quanto costa realizzare un sito web?</strong> I costi variano in base alla complessità del progetto (numero di pagine, funzionalità specifiche, e-commerce, ecc.). Contattami per un preventivo personalizzato e trasparente.</p>
                            <p><strong>Quanto tempo ci vuole per creare un sito?</strong> Dipende dalla complessità e dalla rapidità nel fornire contenuti e feedback. Un sito vetrina semplice può richiedere 3-4 settimane, progetti più complessi richiedono più tempo.</p>
                            <p><strong>Posso aggiornare il sito da solo dopo la consegna?</strong> Assolutamente sì. Se richiesto, posso integrare un CMS (Content Management System) facile da usare che ti permetterà di modificare testi, immagini e aggiungere news/articoli in autonomia. Offro anche una breve formazione.</p>
                        </div>
                    </BlurFade>
                </section>

                {/* START INSERTION: Aree Servite Section */}
                <section id="aree-servite">
                    <BlurFade delay={BLUR_FADE_DELAY * 7.5}> {/* Adjusted delay */}
                        <h2 className="text-2xl font-bold">Aree Geografiche Servite</h2>
                        <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
                            Offro i miei servizi di realizzazione siti web principalmente nelle seguenti aree della provincia di Modena:
                        </p>
                        <ul className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 grid grid-cols-2 sm:grid-cols-3 gap-1 list-disc pl-5">
                            <li>Modena</li>
                            <li>Sassuolo</li>
                            <li>Carpi</li>
                            <li>Vignola</li>
                            <li>Castelfranco Emilia</li>
                            <li>Maranello</li>
                            <li>Spilamberto</li>
                            <li>Formigine</li>
                            <li>Nonantola</li>
                            <li>Pavullo nel Frignano</li>
                            <li>Fiorano Modenese</li>
                            <li>Altre località su richiesta</li>
                        </ul>
                    </BlurFade>
                </section>
                {/* END INSERTION: Aree Servite Section */}

                <section id="cta-web" className="mt-12"> {/* Adjusted margin */}
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <ServiceContactForm
                            serviceName={serviceName}
                            formTitle="Richiedi un Preventivo per il Tuo Sito Web"
                            formDescription="Compila il modulo per ricevere un preventivo gratuito e senza impegno per la realizzazione del tuo sito web a Modena."
                            submitButtonText="Richiedi Preventivo Gratuito"
                        />
                    </BlurFade>
                </section>

            </main>
        </>
    );
} 