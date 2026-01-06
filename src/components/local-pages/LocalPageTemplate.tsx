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

interface LocalPageTemplateProps {
  data: LocalPageData;
}


export default function LocalPageTemplate({ data }: LocalPageTemplateProps) {
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

      <Hero cityName={data.cityName} hero={data.hero} />
      {data.diagnostica && (
        <DiagnosticaAttuale
          badge={data.diagnostica.badge}
          title={data.diagnostica.title}
          problems={data.diagnostica.problems}
          solutions={data.diagnostica.solutions}
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

      <FAQ faq={data.faq} />

      <ContactSection cityName={data.cityName} serviceSlug={data.serviceSlug} />
    </main>
  );
}