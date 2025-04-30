import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// TODO: Definire metadati

const BLUR_FADE_DELAY = 0.04;

export default function AiPage() {
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

            {/* TODO: Aggiungere sezioni: Dettaglio Servizio (con contenuto migrato), Aree di Applicazione, Approccio, Tecnologie, FAQ */}

            <section id="cta-ai" className="text-center">
                <BlurFade delay={BLUR_FADE_DELAY * 8}> {/* Delay Placeholder */}
                    <h2 className="text-2xl font-bold mb-4">Vuoi Esplorare le Potenzialità dell'AI?</h2>
                    <p className="text-muted-foreground md:text-xl max-w-xl mx-auto mb-6">
                        Contattami per una consulenza gratuita e scopri come l'Intelligenza Artificiale può creare valore per la tua attività a Modena.
                    </p>
                    <Link href="/#contact">
                        <Button size="lg">Valuta le Potenzialità dell'AI</Button>
                    </Link>
                </BlurFade>
            </section>
        </main>
    );
} 