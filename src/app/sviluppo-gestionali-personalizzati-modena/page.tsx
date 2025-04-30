import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceContactForm } from '@/components/service-contact-form';

// TODO: Definire metadati

const BLUR_FADE_DELAY = 0.04;

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
                    <p className="mt-4 text-center text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Ottimizza i processi della tua azienda a Modena con un software gestionale su misura. Semplifica la fatturazione, il magazzino, la gestione clienti e molto altro.
                    </p>
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
                        <p>Realizzo <strong>applicativi web aziendali</strong> e <strong>software gestionali su misura</strong> per PMI e realtà produttive di <strong>Modena</strong>, <strong>Sassuolo</strong>, <strong>Maranello</strong> e dell'intera provincia. Il mio obiettivo è aiutarti a <strong>ottimizzare i tuoi processi lavorativi</strong> e rendere la tua azienda più efficiente.</p>
                        <p>Sei stanco di procedure manuali lente e soggette a errori? Un gestionale personalizzato può fare la differenza, ad esempio per:</p>
                        <ul>
                            <li>Migliorare la gestione delle <strong>commesse</strong> e dei clienti (CRM)</li>
                            <li>Ottenere una <strong>tracciabilità</strong> precisa della produzione</li>
                            <li>Tenere sotto controllo il <strong>magazzino</strong> in tempo reale</li>
                        </ul>
                        <p>Un software su misura <strong>riduce gli errori, libera tempo prezioso</strong> per te e i tuoi collaboratori e ti fornisce dati chiari per prendere decisioni migliori. Sviluppo soluzioni intuitive, potenti e perfettamente integrate con i tuoi sistemi esistenti.</p>
                        <p>Il mio obiettivo è diventare il partner tecnologico di fiducia per le <strong>aziende del distretto ceramico e metalmeccanico</strong>, e non solo, fornendo strumenti che portano un reale vantaggio competitivo.</p>
                    </BlurFade>
                </div>
            </section>
            {/* END: Add Service Details Section */}

            {/* Placeholder Sections (Adjusted Titles) */}
            <section id="mio-approccio-gestionali">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-2xl font-bold">Dall'Analisi alla Soluzione: Il Mio Metodo</h2>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
                        {/* TODO: Expand on process for custom software */}
                        Ascolto attivo, analisi approfondita dei processi, sviluppo agile, test rigorosi e formazione all'uso.
                    </p>
                </BlurFade>
            </section>

            {/* Removed detailed tech section placeholder */}

            <section id="faq-gestionali">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-2xl font-bold">Domande Frequenti (FAQ)</h2>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 space-y-2">
                        {/* TODO: Add FAQ specific for custom software */}
                        <p><strong>È possibile integrare il gestionale con altri software?</strong> Sì, l'integrazione è un aspetto fondamentale.</p>
                        <p><strong>Offrite assistenza post-rilascio?</strong> Certo, fornisco supporto e manutenzione continua.</p>
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