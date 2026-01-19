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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-xl shadow-primary/20">M</div>
              <p className="font-black text-xl tracking-tighter">© {new Date().getFullYear()} Manuel De Ceglie</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span>P. IVA: 04032610364</span>
              <span className="hidden sm:inline">|</span>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

