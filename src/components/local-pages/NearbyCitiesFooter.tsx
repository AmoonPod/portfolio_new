import Link from 'next/link'
import { LocalPageData } from '@/data/local-pages/types'

interface NearbyCitiesFooterProps {
  nearbyCities: LocalPageData[]
  serviceName: string
}

export function NearbyCitiesFooter ({ nearbyCities, serviceName }: NearbyCitiesFooterProps) {
  if (nearbyCities.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-muted/30 border-t">
      <div className="container max-w-[1400px] mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm md:text-base">
          {serviceName} anche a:{' '}
          {nearbyCities.map((city, index) => (
            <span key={city.slug}>
              <Link
                href={`/siti-web-${city.slug}`}
                className="text-primary hover:underline font-medium"
              >
                {city.cityName}
              </Link>
              {index < nearbyCities.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}

