import Link from 'next/link';
import { getNearestNeighbors, getProvinceByCitySlug, generateNeighborFooter } from './graph';

export interface NearbyCitiesProps {
  citySlug: string;
  maxNeighbors?: number;
  showDistance?: boolean;
}

export function NearbyCities({
  citySlug,
  maxNeighbors = 6,
  showDistance = true,
}: NearbyCitiesProps) {
  const neighbors = getNearestNeighbors(citySlug, maxNeighbors);
  
  if (neighbors.length === 0) return null;

  return (
    <div className="nearby-cities">
      <h3 className="text-lg font-semibold mb-3">Zone servite</h3>
      <p className="text-gray-600 mb-4">
        Operiamo anche nelle seguenti zone vicine a {citySlug}:
      </p>
      <div className="flex flex-wrap gap-2">
        {neighbors.map(({ location, distanceKm }) => (
          <Link
            key={location.slug}
            href={`/siti-web/${location.slug}`}
            className="inline-flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
          >
            <span>{location.name}</span>
            {showDistance && (
              <span className="ml-2 text-gray-500 text-xs">
                {distanceKm} km
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export interface ProvinceLinkProps {
  citySlug: string;
  className?: string;
}

export function ProvinceLink({ citySlug, className = '' }: ProvinceLinkProps) {
  const province = getProvinceByCitySlug(citySlug);
  
  if (!province) return null;

  return (
    <Link
      href={`/siti-web/${province.slug}`}
      className={`text-blue-600 hover:text-blue-800 underline ${className}`}
    >
      Siti Web nella provincia di {province.name}
    </Link>
  );
}

export interface BreadcrumbLinksProps {
  citySlug: string;
  showHome?: boolean;
}

export function BreadcrumbLinks({ citySlug, showHome = true }: BreadcrumbLinksProps) {
  const province = getProvinceByCitySlug(citySlug);

  if (!province) return null;

  const items = [
    ...(showHome ? [{ name: 'Home', href: '/' }] : []),
    { name: 'Siti Web', href: '/siti-web' },
    { name: province.name, href: `/siti-web/${province.slug}` },
    { name: citySlug, href: `/siti-web/${citySlug}`, current: true },
  ];

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 mx-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {item.current ? (
              <span className="text-gray-900 font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="text-gray-500 hover:text-gray-700">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ServiceHubLink({ serviceSlug = 'siti-web' }: { serviceSlug?: string }) {
  const serviceNames: Record<string, string> = {
    'siti-web': 'Siti Web',
    'seo': 'SEO',
    'social-media': 'Social Media',
    'ecommerce': 'E-commerce',
  };

  return (
    <Link
      href={`/${serviceSlug}`}
      className="text-blue-600 hover:text-blue-800"
    >
      {serviceNames[serviceSlug] || serviceSlug}
    </Link>
  );
}
