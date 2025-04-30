import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// TODO: Definire metadati

const BLUR_FADE_DELAY = 0.04;

export default function GestionaliPage() {
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

            {/* TODO: Aggiungere sezioni: Dettaglio Servizio (con contenuto migrato), Approccio, Tecnologie, FAQ */}

            <section id="cta-gestionali" className="text-center">
                <BlurFade delay={BLUR_FADE_DELAY * 8}> {/* Delay Placeholder */}
                    <h2 className="text-2xl font-bold mb-4">Migliora l'Efficienza della Tua Azienda?</h2>
                    <p className="text-muted-foreground md:text-xl max-w-xl mx-auto mb-6">
                        Richiedi un preventivo gratuito per sviluppare il software gestionale perfetto per le tue esigenze a Modena e provincia.
                    </p>
                    <Link href="/#contact">
                        <Button size="lg">Richiedi un Preventivo Gratuito</Button>
                    </Link>
                </BlurFade>
            </section>
        </main>
    );
} 