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

interface LocalPageTemplateProps {
  data: LocalPageData;
  nearbyCities?: LocalPageData[];
}


export default function LocalPageTemplate({ data, nearbyCities = [] }: LocalPageTemplateProps) {
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  // Filtra solo le offerte attive
  const activeOffers = data.offers?.filter(o => o.active) || []

  return (
    <main className="min-h-screen flex flex-col font-sans bg-background selection:bg-[#FFBC11]/30 selection:text-black overflow-x-hidden">
      {activeOffers.length > 0 && (
        <OfferAlertBar
          offers={data.offers}
          cityName={data.cityName}
          onClick={() => setIsOfferOpen(true)} // Apre il popup al click
        />
      )}
      {/* Offer Popup */}
      {activeOffers.length > 0 && (
        <OfferPopup
          offers={data.offers}
          cityName={data.cityName}
          // Passiamo lo stato e la funzione per chiuderlo
          isOpen={isOfferOpen}
          onOpenChange={setIsOfferOpen}
        />
      )}

      <div className="relative">
        {/* Breadcrumb Navigation - Posizionato in modo assoluto */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-sm border-b border-border/50">
          <Breadcrumb
            serviceName={data.serviceName}
            serviceSlug={data.serviceSlug}
            cityName={data.cityName}
          />
        </div>
        {/* Aggiungo padding top per compensare il breadcrumb */}
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
      {/* --- DID YOU KNOW SECTION --- */}
      <DidYouKnowSection cityName={data.cityName} />

      {/* --- CASE STUDY PROOF --- */}
      <CaseStudyProof cityName={data.cityName} />

      <FAQ faq={data.faq} />

      <ContactSection cityName={data.cityName} serviceSlug={data.serviceSlug} />

      {nearbyCities.length > 0 && (
        <NearbyCitiesFooter
          nearbyCities={nearbyCities}
          serviceName={data.serviceName}
        />
      )}
    </main>
  );
}