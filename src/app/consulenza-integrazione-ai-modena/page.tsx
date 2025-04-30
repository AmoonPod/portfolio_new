import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceContactForm } from '@/components/service-contact-form';

// TODO: Definire metadati

const BLUR_FADE_DELAY = 0.04;

export default function AiPage() {
    const serviceName = "Consulenza e Integrazione AI";

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 mt-10 mb-10">
            <section id="service-hero">
                <BlurFade delay={BLUR_FADE_DELAY * 1}>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
                        Consulenza e Integrazione AI a Modena
                    </h1>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <p className="mt-4 text-center text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Sfrutta la potenza dell'Intelligenza Artificiale per innovare la tua azienda a Modena. Automatizza processi, analizza dati e migliora l'esperienza cliente.
                    </p>
                </BlurFade>
            </section>

            {/* START: Add Service Details Section */}
            <section id="service-details">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-2xl font-bold">Intelligenza Artificiale per Innovare la Tua Azienda</h2>
                </BlurFade>
                <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-4 space-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        {/* Content focused on benefits and client needs */}
                        <p>Aiuto le aziende della <strong>provincia di Modena</strong> a esplorare e implementare soluzioni basate sull'<strong>Intelligenza Artificiale</strong> per ottenere un reale <strong>vantaggio competitivo</strong>. L'AI non è solo futuro, è uno strumento concreto per migliorare il presente.</p>
                        <p>Che tu voglia rendere più efficienti le operazioni, capire meglio i tuoi clienti o creare servizi innovativi, l'AI offre enormi potenzialità. Posso aiutarti a:</p>
                        <ul>
                            <li><strong>Automatizzare compiti ripetitivi</strong> e liberare risorse umane per attività a maggior valore aggiunto.</li>
                            <li>Integrare funzionalità AI (come chatbot o sistemi di raccomandazione) nei tuoi <strong>siti web o gestionali</strong> esistenti.</li>
                            <li>Creare <strong>strumenti intelligenti</strong> su misura per le tue specifiche esigenze operative.</li>
                            <li>Analizzare grandi quantità di dati per ottenere <strong>insight preziosi</strong> e supportare le decisioni strategiche.</li>
                        </ul>
                        <p>Il mio approccio è pragmatico: analizzo le tue necessità e propongo soluzioni AI che portino <strong>risultati misurabili</strong>, spiegando chiaramente benefici e modalità di integrazione.</p>
                        <p>L'obiettivo è rendere l'AI accessibile e utile per le <strong>realtà imprenditoriali del territorio modenese</strong>, aiutandole a crescere e innovare.</p>
                    </BlurFade>
                </div>
            </section>
            {/* END: Add Service Details Section */}

            {/* Placeholder Sections (Adjusted Titles) */}
            <section id="aree-applicazione-ai">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-2xl font-bold">Possibili Aree di Applicazione dell'AI</h2>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
                        {/* TODO: Expand with examples */}
                        Ottimizzazione processi produttivi, marketing personalizzato, analisi predittiva, assistenza clienti intelligente, ecc.
                    </p>
                </BlurFade>
            </section>

            {/* Removed detailed tech section placeholder */}

            <section id="faq-ai">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-2xl font-bold">Domande Frequenti (FAQ)</h2>
                    <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 space-y-2">
                        {/* TODO: Add FAQ specific for AI */}
                        <p><strong>L'AI è adatta anche alla mia piccola impresa?</strong> Assolutamente sì, esistono soluzioni scalabili.</p>
                        <p><strong>Quali dati servono per iniziare?</strong> Dipende dall'obiettivo, ma si può iniziare anche con set di dati limitati.</p>
                    </div>
                </BlurFade>
            </section>

            {/* START INSERTION: Aree Servite Section */}
            <section id="aree-servite-ai">
                <BlurFade delay={BLUR_FADE_DELAY * 7.5}> {/* Adjusted delay */}
                    <h2 className="text-2xl font-bold">Aree Geografiche Servite per Consulenza AI</h2>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2">
                        Offro consulenza e sviluppo AI per aziende in tutta la provincia di Modena:
                    </p>
                    <ul className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 grid grid-cols-2 sm:grid-cols-3 gap-1 list-disc pl-5">
                        <li>Modena</li>
                        <li>Carpi</li>
                        <li>Sassuolo</li>
                        <li>Formigine</li>
                        <li>Castelfranco Emilia</li>
                        <li>Vignola</li>
                        <li>Mirandola</li>
                        <li>Maranello</li>
                        {/* Add others if relevant */}
                    </ul>
                </BlurFade>
            </section>
            {/* END INSERTION: Aree Servite Section */}

            {/* Replace CTA section with the ServiceContactForm component */}
            <section id="cta-ai" className="mt-12">
                <BlurFade delay={BLUR_FADE_DELAY * 8}> {/* Delay Placeholder */}
                    <ServiceContactForm
                        serviceName={serviceName}
                        formTitle="Vuoi Esplorare le Potenzialità dell'AI?"
                        formDescription="Contattami per una consulenza gratuita e scopri come l'Intelligenza Artificiale può creare valore per la tua attività a Modena."
                        submitButtonText="Richiedi Consulenza Gratuita"
                    />
                </BlurFade>
            </section>
        </main>
    );
} 