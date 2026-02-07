'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Location } from '@/data/locations';

interface ExpandableCityGridProps {
  cities: Location[];
  serviceSlug: string;
  nicheSlug?: string;
  initialVisible?: number;
}

export default function ExpandableCityGrid({
  cities,
  serviceSlug,
  nicheSlug,
  initialVisible = 10,
}: ExpandableCityGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleCities = isExpanded ? cities : cities.slice(0, initialVisible);
  const hasMore = cities.length > initialVisible;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visibleCities.map((city) => (
          <Link
            key={city.slug}
            href={nicheSlug 
              ? `/siti-web/${nicheSlug}/${city.slug}`
              : `/${serviceSlug}/${city.slug}`
            }
            className="group flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-[#FFBC11]/10 
                       border border-white/10 hover:border-[#FFBC11]/30 rounded-xl
                       transition-all duration-300"
          >
            <MapPin className="w-4 h-4 text-[#FFBC11] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-white/80 group-hover:text-[#FFBC11]">
              {city.name}
            </span>
          </Link>
        ))}
      </div>
      
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 
                     bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20
                     rounded-xl text-white/70 hover:text-white transition-all duration-300"
        >
          <span className="text-sm font-medium">
            {isExpanded 
              ? `Mostra meno` 
              : `Vedi altre ${cities.length - initialVisible} città`
            }
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}
