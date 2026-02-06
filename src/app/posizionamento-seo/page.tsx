/**
 * SEO/POSIZIONAMENTO SERVICE HUB
 */

import { Metadata } from 'next';
import { getServiceBySlug } from '@/data/services-config';
import { Search, TrendingUp, BarChart3, MapPin } from 'lucide-react';
import ServiceHubPage from '@/components/programmatic/ServiceHubPage';

const service = getServiceBySlug('posizionamento-seo')!;

export const metadata: Metadata = {
  title: 'Consulente SEO e Posizionamento Google | Manuel De Ceglie',
  description: 'Strategia SEO personalizzata per farti trovare su Google. Audit tecnico, ottimizzazione on-page, local SEO. Risultati misurabili e reportistica mensile.',
  alternates: {
    canonical: 'https://manueldeceglie.it/posizionamento-seo',
  },
  openGraph: {
    title: 'Consulente SEO e Posizionamento Google | Manuel De Ceglie',
    description: 'Strategia SEO personalizzata per farti trovare su Google.',
    url: 'https://manueldeceglie.it/posizionamento-seo',
    type: 'website',
    siteName: 'Manuel De Ceglie',
  },
};

const features = [
  {
    icon: BarChart3,
    title: 'Audit Tecnico Completo',
    description: 'Analisi approfondita del tuo sito: velocita, struttura, errori, opportunita. Report dettagliato con priorita.',
  },
  {
    icon: TrendingUp,
    title: 'Strategia su Misura',
    description: 'Non pacchetti standard. Strategia personalizzata basata sui tuoi obiettivi e sul tuo mercato.',
  },
  {
    icon: MapPin,
    title: 'Local SEO Avanzato',
    description: 'Ottimizzazione Google Business, citazioni locali, recensioni. Fatti trovare nella tua zona.',
  },
];

export default function SeoHubPage() {
  return (
    <ServiceHubPage
      service={service}
      Icon={Search}
      headline="Fatti Trovare su Google"
      subheadline="Strategia SEO personalizzata per posizionare il tuo sito nelle prime posizioni di Google. Piu visibilita organica significa piu clienti senza pagare per ogni clic."
      features={features}
    />
  );
}
