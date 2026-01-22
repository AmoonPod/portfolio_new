'use client';

import { getNicheConfig } from '@/data/niches-config';
import { getNicheContent } from '@/data/niches-content';
import { Breadcrumb } from '@/components/local-pages/Breadcrumb';
import { NicheHubStickyBottomBar } from '@/components/local-pages/niche/NicheHubStickyBottomBar';
import NicheHubHero from '@/components/local-pages/niche/NicheHubHero';
import NicheHubPainPoints from '@/components/local-pages/niche/NicheHubPainPoints';
import NicheHubFeatures from '@/components/local-pages/niche/NicheHubFeatures';
import NicheHubStats from '@/components/local-pages/niche/NicheHubStats';
import NicheHubCaseStudies from '@/components/local-pages/niche/NicheHubCaseStudies';
import NicheHubFooter from '@/components/local-pages/niche/NicheHubFooter';
import { ContactSection } from '@/components/local-pages/ContactSection';

interface HubPageContent {
  h1: string;
  sub: string;
  ctaText: string;
  trustSignal?: string;
}

interface NicheHubTemplateProps {
  nicheSlug: string;
  content: HubPageContent;
}

export default function NicheHubTemplate({ nicheSlug, content }: NicheHubTemplateProps) {
  const nicheConfig = getNicheConfig(nicheSlug);

  if (!nicheConfig) {
    return null;
  }

  const nicheContent = getNicheContent(nicheSlug);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-[#FFBC11]/30 selection:text-black overflow-x-hidden">
      {/* Breadcrumb Navigation - Sticky at top */}
      <div className="sticky top-0 z-50 bg-[#050805]/95 backdrop-blur-md border-b border-white/10">
        <Breadcrumb
          serviceName="Siti Web"
          serviceSlug="siti-web"
          cityName={nicheConfig.name}
          variant="dark"
        />
      </div>

      {/* Hero Section */}
      <NicheHubHero
        nicheSlug={nicheSlug}
        nicheName={nicheConfig.name}
        category={nicheConfig.category}
        hero={content}
        stats={nicheContent?.stats}
      />

      {/* Pain Points Section */}
      {nicheContent?.painPoints && (
        <NicheHubPainPoints
          nicheName={nicheConfig.name}
          painPoints={nicheContent.painPoints}
        />
      )}

      {/* Features Section */}
      {nicheContent?.features && (
        <NicheHubFeatures
          nicheName={nicheConfig.name}
          features={nicheContent.features}
        />
      )}

      {/* Stats Section */}
      {nicheContent?.stats && (
        <NicheHubStats
          title={`Perché i ${nicheConfig.pluralName.toLowerCase()} hanno bisogno di un sito web professionale`}
          stats={nicheContent.stats}
        />
      )}

      {/* Case Studies Section */}
      <NicheHubCaseStudies nicheSlug={nicheSlug} />

      {/* Contact Section - Identico alle altre pagine */}
      <ContactSection cityName={"il tuo settore"} serviceSlug="siti-web" />

      {/* Footer with Cities Grid */}
      <NicheHubFooter
        nicheSlug={nicheSlug}
        nicheName={nicheConfig.name}
        showBreadcrumb={false}
      />

      {/* Sticky Bottom Bar */}
      <NicheHubStickyBottomBar nicheName={nicheConfig.name} />
    </main>
  );
}
