"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { CheckCircle2 } from "lucide-react";
import Script from "next/script";

function GrazieContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  // Optional: use 'need' if you want to customize the message further
  // const need = searchParams.get("need");

  useEffect(() => {
    // Fire GA4 event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        currency: "EUR",
        value: 10, // Symbolic value
      });
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-center">
      <div className="max-w-2xl w-full space-y-8">
        <BlurFade delay={0.2}>
          <div className="mx-auto w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
        </BlurFade>

        <BlurFade delay={0.3}>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Grazie{name ? `, ${name}` : ""}!
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Ho ricevuto la tua richiesta.
          </h2>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Ti risponderò personalmente <strong>entro 24 ore</strong> per discutere i dettagli del tuo progetto.
            <br className="hidden sm:block" />
            Nel frattempo, puoi dare un'occhiata ai miei ultimi lavori o seguirmi sui social.
          </p>
        </BlurFade>

        <BlurFade delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/">Torna alla Home</Link>
            </Button>
            
            <div className="flex gap-2 w-full sm:w-auto justify-center">
              {Object.entries(DATA.contact.social).map(([key, social]) => (
                <Button
                  key={key}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  asChild
                >
                  <Link href={social.url} target="_blank" aria-label={social.name}>
                    <social.icon className="size-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}

export default function GraziePage() {
  return (
    <>
      <meta name="robots" content="noindex" />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Caricamento...</div>}>
        <GrazieContent />
      </Suspense>
    </>
  );
}
