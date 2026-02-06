/**
 * LANDING PAGES SERVICE HUB
 */

import { Metadata } from 'next';
import { getServiceBySlug } from '@/data/services-config';
import { Target, Zap, TrendingUp, MousePointer } from 'lucide-react';
import ServiceHubPage from '@/components/programmatic/ServiceHubPage';

const service = getServiceBySlug('landing-pages')!;

export const metadata: Metadata = {
  title: 'Realizzazione Landing Pages Professionali | Manuel De Ceglie',
  description: 'Landing page ottimizzate per convertire. Perfette per Google Ads, Facebook Ads e campagne marketing. Design persuasivo, risultati misurabili.',
  alternates: {
    canonical: 'https://manueldeceglie.it/landing-pages',
  },
  openGraph: {
    title: 'Realizzazione Landing Pages Professionali | Manuel De Ceglie',
    description: 'Landing page ottimizzate per convertire. Perfette per campagne Ads.',
    url: 'https://manueldeceglie.it/landing-pages',
    type: 'website',
    siteName: 'Manuel De Ceglie',
  },
};

const features = [
  {
    icon: Target,
    title: 'Conversion-Oriented',
    description: 'Ogni elemento progettato per guidare il visitatore verso lazione. Form, CTA, social proof.',
  },
  {
    icon: Zap,
    title: 'Velocissime',
    description: 'Caricamento istantaneo. Non perdi conversioni per colpa della lentezza.',
  },
  {
    icon: TrendingUp,
    title: 'A/B Testing Ready',
    description: 'Struttura predisposta per testare varianti e ottimizzare le conversioni.',
  },
];

export default function LandingPagesHubPage() {
  return (
    <ServiceHubPage
      service={service}
      Icon={Target}
      headline="Landing Page che Convertono"
      subheadline="Pagine singole progettate per un unico obiettivo: trasformare visitatori in contatti o clienti. Perfette per campagne Google Ads, Facebook Ads e promozioni."
      features={features}
    />
  );
}
