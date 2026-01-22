import Link from 'next/link'
import { LocalPageData } from '@/data/local-pages/types'
import { MapPin, ArrowRight } from 'lucide-react'
import { targetLocations } from '@/data/locations'

interface NearbyCitiesFooterProps {
  nearbyCities?: LocalPageData[]
  serviceName: string
}

export function NearbyCitiesFooter({ nearbyCities, serviceName }: NearbyCitiesFooterProps) {
  // Se nearbyCities non è fornito o è vuoto, usa tutte le città da locations.ts
  const citiesToShow = nearbyCities && nearbyCities.length > 0
    ? nearbyCities
    : targetLocations.map(location => ({
      slug: location.slug,
      cityName: location.name,
      province: location.province,
      region: location.region,
      active: true,
    } as LocalPageData))

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBC11]/10 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#FFBC11]" />
            <span className="text-sm font-bold text-[#FFBC11] uppercase tracking-wider">
              Servizi Disponibili
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Realizzo {serviceName.toLowerCase()} anche in queste città
          </h3>
          <p className="text-gray-600 font-medium">
            Servizio disponibile in tutta l'Emilia-Romagna e zone limitrofe
          </p>
        </div>

        {/* Marquee Container */}
        {citiesToShow.length > 0 && (
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-3">
              {/* Prima serie */}
              {citiesToShow.map((city) => (
                <Link
                  key={city.slug}
                  href={`/siti-web/${city.slug}`}
                  className="group relative inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#FFBC11] hover:bg-[#FFBC11]/5 transition-all duration-200 shadow-sm hover:shadow-md shrink-0 whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4 text-gray-500 group-hover:text-[#FFBC11] transition-colors" />
                  <span className="font-bold text-gray-900 group-hover:text-[#FFBC11] transition-colors">
                    {city.cityName}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FFBC11] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
              {/* Duplicato per loop continuo */}
              {citiesToShow.map((city) => (
                <Link
                  key={`${city.slug}-dup`}
                  href={`/siti-web/${city.slug}`}
                  className="group relative inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#FFBC11] hover:bg-[#FFBC11]/5 transition-all duration-200 shadow-sm hover:shadow-md shrink-0 whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4 text-gray-500 group-hover:text-[#FFBC11] transition-colors" />
                  <span className="font-bold text-gray-900 group-hover:text-[#FFBC11] transition-colors">
                    {city.cityName}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FFBC11] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}






