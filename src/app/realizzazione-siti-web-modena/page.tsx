import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume"; // Potrebbe servire per dati comuni (es. contatto)
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Per eventuali CTA

// TODO: Definire metadati specifici per SEO
// export const metadata = {
//   title: "Realizzazione Siti Web Professionali a Modena | Manuel De Ceglie",
//   description: "Creo siti web moderni, veloci e ottimizzati SEO per aziende e professionisti a Modena, Vignola, Castelfranco E. e provincia. Siti vetrina, e-commerce, blog.",
// };

const BLUR_FADE_DELAY = 0.04;

export default function RealizzazioneSitiWebPage() {
    // Trova il servizio specifico dai dati (opzionale, se serve info aggiuntiva qui)
    const servizio = DATA.services.items.find(s => s.title.includes("Siti Web"));

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
                        {/* Contenuto migrato e leggermente adattato */}
                        <p>Sviluppo <strong>siti internet</strong> moderni, veloci e ottimizzati (SEO) per aziende, professionisti e negozi a <strong>Modena</strong>, <strong>Vignola</strong>, <strong>Castelfranco Emilia</strong>, <strong>Sassuolo</strong> e dintorni. Un sito web efficace è cruciale per <strong>attirare più clienti locali</strong> e presentare al meglio la tua attività.</p>
                        <p>Mi occupo della creazione di diverse tipologie di siti web:</p>
                        <ul>
                            <li><strong>Siti Vetrina:</strong> Ideali per presentare la tua azienda, i tuoi servizi e i tuoi contatti in modo professionale.</li>
                            <li><strong>Blog Aziendali:</strong> Perfetti per condividere contenuti, stabilire autorità nel tuo settore e migliorare la SEO.</li>
                            <li><strong>Siti E-commerce:</strong> Soluzioni complete per vendere i tuoi prodotti online in modo sicuro ed efficace.</li>
                            <li><strong>Landing Page:</strong> Pagine mirate per campagne di marketing specifiche, ottimizzate per la conversione.</li>
                        </ul>
                        <p>Il mio approccio garantisce soluzioni su misura, design <strong>responsive</strong> (perfettamente visibili su tutti i dispositivi) e un'interfaccia <strong>facile da usare</strong> per te e per i tuoi visitatori. Utilizzo tecnologie moderne come React e Next.js per assicurare prestazioni elevate.</p>
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

            <section id="tecnologie-web">
                <BlurFade delay={BLUR_FADE_DELAY * 6}>
                    <h2 className="text-2xl font-bold">Tecnologie Utilizzate</h2>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
                        {/* TODO: Elencare tecnologie specifiche per siti web (React, Next.js, TypeScript, CMS headless?, TailwindCSS, etc.) */}
                        Utilizzo principalmente React, Next.js, TypeScript, Tailwind CSS per siti performanti e moderni. Valuto anche l'uso di CMS o altre piattaforme in base alle esigenze.
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

            <section id="cta-web" className="text-center">
                <BlurFade delay={BLUR_FADE_DELAY * 8}>
                    <h2 className="text-2xl font-bold mb-4">Pronto a Dare Vita al Tuo Nuovo Sito Web?</h2>
                    <p className="text-muted-foreground md:text-xl max-w-xl mx-auto mb-6">
                        Contattami oggi stesso per discutere delle tue esigenze e ricevere un preventivo gratuito e senza impegno per la realizzazione del tuo sito web a Modena.
                    </p>
                    <Link href="/#contact">
                        <Button size="lg">Richiedi un Preventivo Gratuito</Button>
                    </Link>
                </BlurFade>
            </section>

        </main>
    );
} 