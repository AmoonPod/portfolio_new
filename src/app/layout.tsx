import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bricolage_Grotesque as Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const fontSans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Manuel De Ceglie - Sviluppatore Web e Software a Modena",
    template: "%s | Manuel De Ceglie",
  },
  description:
    "Sviluppatore web e software a Modena. Creo soluzioni digitali su misura per far crescere la tua attività. Contattami!",
  // Aggiungo le keyword per potenziare la presenza SEO
  keywords: [
    "software developer",
    "programmatore Castelfranco Emilia",
    "programmatore Vignola",
    "programmatore Fiorano",
    "programmatore Maranello",
    "programmatore Modena",
    "Manuel De Ceglie",
    "soluzioni digitali",
    "sviluppo web",
    "sviluppatore web Modena",
    "soluzioni digitali Vignola",
    "SEO Modena",
    "Next.js esperto",
    "React developer",
    "Manuel De Ceglie",
    "sviluppo software personalizzato",
    "gestionali aziendali",
    "applicazioni web",
  ],
  openGraph: {
    title: "Manuel De Ceglie - Sviluppatore Web e Software",
    description:
      "Soluzioni digitali personalizzate per far crescere la tua attività a Modena e oltre.",
    url: DATA.url,
    siteName: "Manuel De Ceglie",
    images: [
      {
        url: `${DATA.url}/og-image.jpg`, // Aggiungi un'immagine ottimizzata (es. 1200x630px)
        width: 1200,
        height: 630,
        alt: "Manuel De Ceglie - Sviluppatore Web",
      },
    ],
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
    title: "Manuel De Ceglie - Sviluppatore Web e Software",
    card: "summary_large_image",
    images: [`${DATA.url}/og-image.jpg`],
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
      </body>
    </html>
  );
}
