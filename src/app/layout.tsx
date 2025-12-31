import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Bricolage_Grotesque as BricolageGrotesque } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DATA } from "@/data/resume"

const fontSans = BricolageGrotesque({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <meta
          name="google-site-verification"
          content="BzkUaVu8rd1Ixv5g73FCGyldZPKgc2NklXHMqbOcm9Q"
        />
        <meta property="og:logo" content="logo_black.png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <TooltipProvider delayDuration={0}>
          {/* Sticky Navbar */}
          <header className="sticky top-0 z-50 w-full border-b bg-background md:bg-background/95 md:backdrop-blur supports-[backdrop-filter]:md:bg-background/60">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="flex h-16 items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <span className="font-semibold text-sm sm:text-base">{DATA.name}</span>
                </Link>
                <Button asChild size="sm" className="text-sm">
                  <Link href="#contact">Contattami</Link>
                </Button>
              </div>
            </div>
          </header>
          {children}
          <footer className="border-t bg-muted/30">
            <div className="max-w-[1400px] mx-auto px-6 py-12">
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
        </TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
