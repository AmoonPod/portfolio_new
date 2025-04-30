import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// TODO: Definire metadati

const BLUR_FADE_DELAY = 0.04;

export default function AppMobilePage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 mt-10 mb-10">
            <section id="service-hero">
                <BlurFade delay={BLUR_FADE_DELAY * 1}>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
                        Sviluppo App Mobile (iOS/Android) a Modena
                    </h1>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <p className="mt-4 text-center text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Trasforma la tua idea in un'applicazione mobile nativa o cross-platform per raggiungere i tuoi clienti su iOS e Android. Sviluppo app a Modena e provincia.
                    </p>
                </BlurFade>
            </section>

            {/* TODO: Aggiungere sezioni: Dettaglio Servizio (con contenuto migrato), Approccio, Tecnologie (Flutter, Dart, etc.), FAQ */}

            <section id="cta-app" className="text-center">
                <BlurFade delay={BLUR_FADE_DELAY * 8}> {/* Delay Placeholder */}
                    <h2 className="text-2xl font-bold mb-4">Hai un'Idea per un'App Mobile?</h2>
                    <p className="text-muted-foreground md:text-xl max-w-xl mx-auto mb-6">
                        Pianifica una chiamata conoscitiva gratuita per discutere del tuo progetto di app mobile e scoprire come posso aiutarti a realizzarlo.
                    </p>
                    <Link href="/#contact">
                        <Button size="lg">Pianifica una Chiamata</Button>
                    </Link>
                </BlurFade>
            </section>
        </main>
    );
} 