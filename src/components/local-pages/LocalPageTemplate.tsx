"use client"

import { LocalPageData } from "@/data/local-pages/types";
import { useState } from "react";
import { OfferPopup } from "@/components/local-pages/OfferPopup";
import { OfferAlertBar } from "@/components/local-pages/OfferAlertBar"
import { DidYouKnowSection } from "@/components/local-pages/DidYouKnow";
import { GoodInvestment } from "./GoodInvestment";
import { DiagnosticaAttuale } from "./DiagnosticaAttuale";
import { Hero } from "./Hero";
import { FAQ } from "./FAQ";
import { ContactSection } from "./ContactSection";
import { ActiveOffersSection } from "./OffersSection";
import { NearbyCitiesFooter } from "./NearbyCitiesFooter";
import { CaseStudyProof } from "./CaseStudyProof";
import { Breadcrumb } from "./Breadcrumb";
import { StickyBottomBar } from "./StickyBottomBar";
import NicheHubOtherNiches from "@/components/local-pages/niche/NicheHubOtherNiches";
import { BreadcrumbItem } from "./Breadcrumb";
import { slugify } from "@/lib/seo/hub-generator";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LocalPageTemplateProps {
  data: LocalPageData;
  nearbyCities?: LocalPageData[];
  breadcrumbItems?: BreadcrumbItem[];
}


export default function LocalPageTemplate({ 
  data, 
  nearbyCities = [],
  breadcrumbItems
}: LocalPageTemplateProps) {
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const activeOffers = data.offers?.filter(o => o.active) || []

  return (
    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-[#FFBC11]/30 selection:text-black overflow-x-hidden">
      {activeOffers.length > 0 && (
        <OfferAlertBar
          offers={data.offers}
          cityName={data.cityName}
          onClick={() => setIsOfferOpen(true)}
        />
      )}
      {activeOffers.length > 0 && (
        <OfferPopup
          offers={data.offers}
          cityName={data.cityName}
          isOpen={isOfferOpen}
          onOpenChange={setIsOfferOpen}
        />
      )}

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-sm border-b border-border/50">
          <Breadcrumb
            items={breadcrumbItems}
            serviceName={data.serviceName}
            serviceSlug={data.serviceSlug}
            cityName={data.cityName}
          />
        </div>
        <div className="pt-12">
          <Hero cityName={data.cityName} hero={data.hero} />
        </div>
      </div>

      {data.diagnostica && (
        <DiagnosticaAttuale
          badge={data.diagnostica.badge}
          title={data.diagnostica.title}
          problems={data.diagnostica.problems}
          solutions={data.diagnostica.solutions as unknown as string[]}
        />
      )}

      {activeOffers.length > 0 && (
        <ActiveOffersSection
          offers={activeOffers}
          cityName={data.cityName}
        />
      )}

      {data.goodInvestment && (
        <GoodInvestment
          title={data.goodInvestment.title}
          titleHighlight={data.goodInvestment.titleHighlight}
          subtitle={data.goodInvestment.subtitle}
          cards={data.goodInvestment.cards}
        />
      )}
      <DidYouKnowSection cityName={data.cityName} />

      <CaseStudyProof cityName={data.cityName} />

      {/* Niches Section */}
      <NicheHubOtherNiches showAll={true} />

      {/* Nearby Cities Section */}
      {nearbyCities.length > 0 && (
        <section className="bg-[#050805] py-16">
          <NearbyCitiesFooter
            nearbyCities={nearbyCities}
            serviceName={data.serviceName}
          />
          
          <div className="container max-w-6xl mx-auto px-6 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 border-t border-white/5 pt-8">
            <Link 
              href={`/${data.serviceSlug}/provincia/${slugify(data.province)}`}
              className="text-sm font-medium text-[#FFBC11] hover:underline flex items-center gap-1"
            >
              Tutti i comuni di {data.province} <ChevronRight className="h-4 w-4" />
            </Link>
            <Link 
              href={`/${data.serviceSlug}/regione/${slugify(data.region)}`}
              className="text-sm font-medium text-[#FFBC11] hover:underline flex items-center gap-1"
            >
              Tutte le province in {data.region} <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      <FAQ faq={data.faq} />

      <ContactSection cityName={data.cityName} serviceSlug={data.serviceSlug} />

      <StickyBottomBar cityName={data.cityName} serviceName={data.serviceName} />
    </main>
  );
}
