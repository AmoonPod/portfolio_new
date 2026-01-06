import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Bricolage_Grotesque as BricolageGrotesque } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/sonner"
import { NavbarWrapper } from "@/components/NavbarWrapper"

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
          <NavbarWrapper>
            {children}
          </NavbarWrapper>
        </TooltipProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  )
}
