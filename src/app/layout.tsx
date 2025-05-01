import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bricolage_Grotesque as Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const fontSans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Realizzazione Siti Web e Software a Modena | Manuel De Ceglie",
    template: "%s | Manuel De Ceglie",
  },
  description:
    "Realizzo siti web professionali e software su misura a Modena. Soluzioni digitali per PMI e professionisti. Contattami per un preventivo!",
  keywords: [
    "realizzazione siti web modena",
    "creazione siti web modena",
    "sviluppo software modena",
    "sviluppatore web modena",
    "software su misura modena",
    "siti web castelfranco emilia",
    "siti web vignola",
    "gestionali modena",
    "app mobile modena",
    "manuel de ceglie",
    "programmatore modena",
    "web agency modena",
    "consulenza AI modena",
    "programmatore sassuolo",
    "next.js modena",
    "react modena",
    "flutter modena",
  ],
  openGraph: {
    title: "Realizzazione Siti Web e Software a Modena | Manuel De Ceglie",
    description:
      "Realizzo siti web professionali e software su misura a Modena per PMI e professionisti. Contattami!",
    url: DATA.url,
    siteName: "Manuel De Ceglie",
    images: [
      {
        url: `${DATA.url}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "Realizzazione Siti Web e Sviluppo Software a Modena - Manuel De Ceglie",
      },
    ],
    countryName: "Italy",
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Realizzazione Siti Web e Software a Modena | Manuel De Ceglie",
    description:
      "Realizzo siti web professionali e software su misura a Modena per PMI e professionisti. Contattami!",
    card: "summary_large_image",
    images: [`${DATA.url}/og-image.jpeg`],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={DATA.url} />
        <meta name="google-site-verification" content="BzkUaVu8rd1Ixv5g73FCGyldZPKgc2NklXHMqbOcm9Q" />
        <meta property="og:logo" content="logo_black.png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
