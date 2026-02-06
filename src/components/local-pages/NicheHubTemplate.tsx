'use client';

import { getNicheConfig } from '@/data/niches-config';
import { getNicheContent } from '@/data/niches-content';
import { getNicheStatsSectionTitle, getNicheSingularContext, getNicheLabelForPhrase } from '@/lib/niche-labels';
import { Breadcrumb } from '@/components/local-pages/Breadcrumb';
import { NicheHubStickyBottomBar } from '@/components/local-pages/niche/NicheHubStickyBottomBar';
import NicheHubHero from '@/components/local-pages/niche/NicheHubHero';
import NicheHubPainPoints from '@/components/local-pages/niche/NicheHubPainPoints';
import NicheHubFeatures from '@/components/local-pages/niche/NicheHubFeatures';
import NicheHubStats from '@/components/local-pages/niche/NicheHubStats';
import NicheHubCaseStudies from '@/components/local-pages/niche/NicheHubCaseStudies';
import NicheHubFooter from '@/components/local-pages/niche/NicheHubFooter';
import { ContactSection } from '@/components/local-pages/ContactSection';
import { getAllPlaybookSlugs, getPlaybookContent } from '@/data/playbooks';
import { BookOpen, ArrowRight } from 'lucide-react';

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

function NichePlaybookSection({ nicheSlug, nicheName, singularContext }: { nicheSlug: string; nicheName: string; singularContext: string }) {
  const links = getAllPlaybookSlugs(nicheSlug);

  if (links.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 border-t border-white/10 bg-[#0A0A0A]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFBC11]/10 border border-[#FFBC11]/20 text-[#FFBC11] text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen className="w-4 h-4" />
            Strategie & Guide
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Risorse per {nicheName}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Non solo teoria. Ecco le strategie pratiche che usiamo per portare clienti reali nel tuo {singularContext} usando il digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((playbookSlug, idx) => {
            const content = getPlaybookContent(nicheSlug, playbookSlug);
            if (!content) return null;

            return (
              <a
                key={playbookSlug}
                href={`/siti-web/${nicheSlug}/${playbookSlug}`}
                className="group flex flex-col p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] hover:border-[#FFBC11]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFBC11]/10 flex items-center justify-center border border-[#FFBC11]/20 group-hover:bg-[#FFBC11] group-hover:text-black transition-all duration-300">
                    <span className="text-[#FFBC11] font-black text-lg group-hover:text-black">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FFBC11] transition-all">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFBC11] transition-colors leading-tight">
                  {content.hero.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {content.hero.subtitle}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">
                  <span>Leggi Guida</span>
                  <span className="flex-1 h-[1px] bg-white/10 group-hover:bg-[#FFBC11]/50 transition-colors"></span>
                  <span>{content.hero.readTime}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function NicheHubTemplate({ nicheSlug, content }: NicheHubTemplateProps) {
  const nicheConfig = getNicheConfig(nicheSlug);

  if (!nicheConfig) {
    return null;
  }

  const nicheContent = getNicheContent(nicheSlug);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-[#FFBC11]/30 selection:text-black overflow-x-hidden">
      <div className="sticky top-0 z-50 bg-[#050805]/95 backdrop-blur-md border-b border-white/10">
        <Breadcrumb
          serviceName="Siti Web"
          serviceSlug="siti-web"
          cityName={nicheConfig.name}
          variant="dark"
        />
      </div>

      <NicheHubHero
        nicheSlug={nicheSlug}
        nicheName={nicheConfig.name}
        category={nicheConfig.category}
        hero={content}
        stats={nicheContent?.stats}
      />

      {nicheContent?.painPoints && (
        <NicheHubPainPoints
          nicheName={nicheConfig.name}
          painPoints={nicheContent.painPoints}
        />
      )}

      {nicheContent?.features && (
        <NicheHubFeatures
          nicheName={nicheConfig.name}
          features={nicheContent.features}
        />
      )}

      <NichePlaybookSection 
        nicheSlug={nicheSlug} 
        nicheName={nicheConfig.name} 
        singularContext={getNicheSingularContext(nicheConfig)}
      />

      {nicheContent?.stats && (
        <NicheHubStats
          title={nicheContent.introSection?.title ?? getNicheStatsSectionTitle(nicheConfig)}
          stats={nicheContent.stats}
        />
      )}

      <NicheHubCaseStudies nicheSlug={nicheSlug} />

      <ContactSection cityName={"il tuo settore"} serviceSlug="siti-web" />

      <NicheHubFooter
        nicheSlug={nicheSlug}
        nicheName={nicheConfig.name}
        showBreadcrumb={false}
      />

      <NicheHubStickyBottomBar
        nicheName={nicheConfig.name}
        ctaPhrase={`il tuo ${getNicheSingularContext(nicheConfig)}`}
        labelForMessage={getNicheLabelForPhrase(nicheConfig)}
      />
    </main>
  );
}
