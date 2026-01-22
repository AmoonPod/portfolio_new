'use client';

import Link from 'next/link';
import { MapPin, ChevronRight, Globe } from 'lucide-react';
import { getNicheConfig } from '@/data/niches-config';
import { targetLocations } from '@/data/locations';

interface NicheHubFooterProps {
  nicheSlug: string;
  nicheName: string;
  showBreadcrumb?: boolean;
}

export default function NicheHubFooter({ nicheSlug, nicheName, showBreadcrumb = true }: NicheHubFooterProps) {
  const nicheConfig = getNicheConfig(nicheSlug);
  const citiesWithNiche = targetLocations.filter(loc =>
    loc.population >= (nicheConfig?.minPopulation || 20000)
  );

  return (
    <section className="bg-[#050805] text-white">


      {/* Cities Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-[#FFBC11] mb-6">
            <Globe className="w-4 h-4" />
            Disponibile in tutta Italia
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lavoro con {nicheName.toLowerCase()} in tutta Italia
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ho realizzato progetti per {nicheName.toLowerCase()} in molte città italiane.
            Contattami per verificare la copertura nella tua zona.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
          {citiesWithNiche.map((city) => (
            <Link
              key={city.slug}
              href={`/siti-web/${city.slug}`}
              className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFBC11]/30 rounded-xl transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#FFBC11] transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium text-white group-hover:text-[#FFBC11] transition-colors">
                {city.name}
              </span>
            </Link>
          ))}
        </div>

        {/* More cities link */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">Non trovi la tua città?</p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFBC11]/30 rounded-full text-white font-medium transition-all duration-300"
          >
            <span>Contattami per verificare</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
