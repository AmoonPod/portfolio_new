import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume"; // Potrebbe servire per dati comuni (es. contatto)
import Link from "next/link";
import { ServiceContactForm } from '@/components/service-contact-form'; // Import the new form component

// TODO: Definire metadati specifici per SEO
// export const metadata = {
//   title: "Realizzazione Siti Web Professionali a Modena | Manuel De Ceglie",
//   description: "Creo siti web moderni, veloci e ottimizzati SEO per aziende e professionisti a Modena, Vignola, Castelfranco E. e provincia. Siti vetrina, e-commerce, blog.",
// };

const BLUR_FADE_DELAY = 0.04;

export default function RealizzazioneSitiWebPage() {
    // Trova il servizio specifico dai dati (opzionale, se serve info aggiuntiva qui)
    const servizio = DATA.services.items.find(s => s.title.includes("Siti Web"));
    const serviceName = "Realizzazione Siti Web"; // Pass service name to the form

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 mt-10 mb-10"> {/* Aggiunto padding verticale */}
            <section id="service-hero">
                <BlurFade delay={BLUR_FADE_DELAY * 1}>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
                        Realizzazione Siti Web Professionali a Modena e Provincia
                    </h1>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    {/* Breve intro specifica per la pagina */}
                    <p className="mt-4 text-center text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Hai bisogno di un sito web moderno, performante e ottimizzato per i motori di ricerca per far crescere la tua attività a Modena e dintorni? Scopri come posso aiutarti.
                    </p>
                </BlurFade>
            </section>

            <section id="service-details">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-2xl font-bold">Il Servizio di Creazione Siti Web in Dettaglio</h2>
                </BlurFade>
                <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-4 space-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        {/* Modified text for flow, integrating specific examples and removing tech jargon */}
                        <p>Sviluppo <strong>siti internet</strong> moderni, veloci e ottimizzati (SEO) per aziende, professionisti e negozi a <strong>Modena e in tutta la provincia</strong>. Un sito web efficace è cruciale per <strong>attirare più clienti locali</strong> e presentare al meglio la tua attività. Che tu sia un <strong>professionista a Modena centro</strong>, un <strong>negozio a Carpi</strong>, o un'<strong>azienda manifatturiera a Sassuolo</strong>, posso creare il sito giusto per te.</p>
                        <p>Mi occupo della creazione di diverse tipologie di siti web, personalizzati per le esigenze specifiche del <strong>territorio modenese</strong>:</p>
                        <ul>
                            <li><strong>Siti Vetrina Professionali:</strong> Per presentare la tua azienda, i tuoi servizi e rafforzare la tua immagine locale.</li>
                            <li><strong>Blog Aziendali:</strong> Per condividere la tua expertise, interagire con la comunità e migliorare il posizionamento sui motori di ricerca.</li>
                            <li><strong>Siti E-commerce Performanti:</strong> Per vendere i tuoi prodotti online raggiungendo clienti a Modena, provincia e oltre.</li>
                            <li><strong>Landing Page Ottimizzate:</strong> Per massimizzare il ritorno di campagne marketing mirate sul territorio.</li>
                        </ul>
                        <p>Il mio approccio garantisce soluzioni su misura, design <strong>responsive</strong> (perfettamente visibili su smartphone, tablet e desktop) e un'interfaccia <strong>facile da usare</strong> sia per te che per i tuoi visitatori. Il mio obiettivo è diventare il punto di riferimento per la <strong>creazione di siti web professionali nel modenese</strong>, fornendo strumenti efficaci che portano risultati concreti.</p>
                        <p><Link href="/#projects" className="font-semibold">Guarda alcuni progetti web realizzati</Link> o <Link href="/#contact" className="font-semibold">contattami per discutere del tuo progetto</Link>.</p>
                    </BlurFade>
                </div>
            </section>

            {/* Placeholder per Sezioni Aggiuntive */}
            <section id="mio-approccio-web">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-2xl font-bold">Il Mio Approccio alla Realizzazione del Tuo Sito</h2>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
                        {/* TODO: Espandere con dettagli sul processo (analisi, design, sviluppo, test, lancio) */}
                        Analisi delle esigenze, design personalizzato, sviluppo efficiente, ottimizzazione SEO on-page, consegna e supporto.
                    </p>
                </BlurFade>
            </section>

            <section id="faq-web">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-2xl font-bold">Domande Frequenti (FAQ)</h2>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 space-y-2">
                        {/* TODO: Aggiungere FAQ specifiche per siti web */}
                        <p><strong>Quanto costa realizzare un sito web?</strong> I costi variano in base alla complessità. Contattami per un preventivo personalizzato.</p>
                        <p><strong>Quanto tempo ci vuole?</strong> Dipende dal progetto, solitamente da poche settimane a qualche mese.</p>
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
    );
} 