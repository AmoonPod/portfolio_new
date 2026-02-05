'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { DATA } from "@/data/resume"

export function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isEditCMS = pathname?.startsWith('/edit-cms')
  const isOfferPage = pathname?.startsWith('/offerta-landing') ||
    pathname?.startsWith('/offerta-preventivo') ||
    pathname?.startsWith('/offerta-rate') ||
    pathname?.startsWith('/offerta-garanzia')

  if (isEditCMS || isOfferPage) {
    return <>{children}</>
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background md:bg-background/95 md:backdrop-blur supports-[backdrop-filter]:md:bg-background/60 overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <span className="font-semibold text-sm sm:text-base">{DATA.name}</span>
            </Link>
            <Button asChild size="sm" className="text-sm">
              <Link href="#contact">Analisi Gratuita</Link>
            </Button>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t bg-muted/30 w-full overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 w-full">
          {/* SEO LINKS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 border-b pb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-xl shadow-primary/20 mb-4">M</div>
              <p className="text-sm text-muted-foreground">
                Sviluppo web e strategie digitali per attività locali che vogliono crescere.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Servizi</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/siti-web" className="hover:text-primary transition-colors">Siti Web</Link></li>
                <li><Link href="/sviluppo-software" className="hover:text-primary transition-colors">Software Gestionali</Link></li>
                <li><Link href="/sviluppo-app-mobile" className="hover:text-primary transition-colors">App Mobile</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm">Aree Coperta</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/siti-web/modena" className="hover:text-primary transition-colors">Siti Web Modena</Link></li>
                <li><Link href="/siti-web/reggio-emilia" className="hover:text-primary transition-colors">Siti Web Reggio Emilia</Link></li>
                <li><Link href="/siti-web/bologna" className="hover:text-primary transition-colors">Siti Web Bologna</Link></li>
                <li><Link href="/siti-web/sassuolo" className="hover:text-primary transition-colors">Siti Web Sassuolo</Link></li>
                <li><Link href="/siti-web/carpi" className="hover:text-primary transition-colors">Siti Web Carpi</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm">Settori</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/siti-web/ristoranti" className="hover:text-primary transition-colors">Per Ristoranti</Link></li>
                <li><Link href="/siti-web/aziende-agricole" className="hover:text-primary transition-colors">Per Aziende Agricole</Link></li>
                <li><Link href="/siti-web/fotografi" className="hover:text-primary transition-colors">Per Fotografi</Link></li>
                <li><Link href="/siti-web/saloni-bellezza" className="hover:text-primary transition-colors">Per Saloni di Bellezza</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm">Link Utili</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/#contact" className="hover:text-primary transition-colors">Contatti</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <p className="font-bold text-sm tracking-tight">© {new Date().getFullYear()} Manuel De Ceglie</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span>P. IVA: 04032610364</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

