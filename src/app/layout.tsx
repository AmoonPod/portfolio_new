import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bricolage_Grotesque as BricolageGrotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import { DATA } from "@/data/resume";

const fontSans = BricolageGrotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Siti Web, Software e App su Misura | Manuel De Ceglie",
    template: "%s | Manuel De Ceglie",
  },
  openGraph: {
    title: "Siti Web, Software e App su Misura | Manuel De Ceglie",
    description: DATA.description,
    url: DATA.url,
    siteName: "Manuel De Ceglie",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuel De Ceglie | Sviluppo Web & Software",
    description: DATA.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/e094b572db338c13aa8929a9bc74db66/script.js"
          strategy="beforeInteractive"
        />
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
          <NavbarWrapper>{children}</NavbarWrapper>
        </TooltipProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9PGDXHRKGB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9PGDXHRKGB');
          `}
        </Script>
      </body>
    </html>
  );
}
