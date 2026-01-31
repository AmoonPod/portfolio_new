"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 bg-background">
      <div className="text-center space-y-8 max-w-lg">
        <div>
          <h1 className="text-8xl font-black text-primary/20 tracking-tighter">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground -mt-8 relative z-10">Pagina non trovata</h2>
        </div>
        
        <p className="text-muted-foreground text-lg">
          Sembra che tu ti sia perso. Forse stavi cercando uno di questi servizi?
        </p>

        <div className="grid gap-3 w-full max-w-sm mx-auto">
          <Button asChild variant="default" size="lg" className="w-full">
            <Link href="/">Torna alla Home</Link>
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="outline" className="w-full">
              <Link href="/siti-web">Siti Web</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/casi-studio">Casi Studio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
