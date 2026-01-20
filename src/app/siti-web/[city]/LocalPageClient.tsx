'use client';

import { LocalPageData } from '@/data/local-pages/types';
import { MarketArchetype } from '@/data/archetypes';
import Link from 'next/link';

interface LocalPageClientProps {
  pageData: LocalPageData;
  archetype: MarketArchetype;
  neighbors: Array<{ name: string; slug: string; distance: number }>;
  province: { name: string; slug: string };
  breadcrumbs: Array<{ name: string; url: string }>;
  canonical: string;
}

export default function LocalPageClient({
  pageData,
  archetype,
  neighbors,
  province,
  breadcrumbs,
  canonical,
}: LocalPageClientProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for Breadcrumbs */}
      <nav className="sr-only" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((item, index) => (
            <li
              key={item.url}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link href={item.url} itemProp="item">
                <span itemProp="name">{item.name}</span>
              </Link>
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              {archetype}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {pageData.hero.h1}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {pageData.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={pageData.hero.ctaHref}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {pageData.hero.ctaText}
              </a>
              <Link
                href={`/siti-web/${province.slug}`}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                Vedi tutte le città di {province.name}
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              {pageData.hero.trustSignal}
            </p>
          </div>
        </div>
      </section>

      {/* SEO Meta */}
      <section className="sr-only">
        <h1>{pageData.seo.h1}</h1>
        <p>{pageData.seo.description}</p>
        <link rel="canonical" href={canonical} />
      </section>

      {/* Offers Section */}
      <section className="py-16" id="offerte">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            I nostri pacchetti per {pageData.cityName}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(pageData.offers || []).map((offer) => (
              <div
                key={offer.id}
                className={`border rounded-xl p-6 ${
                  offer.badge?.includes('Promo')
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200'
                }`}
              >
                {offer.badge && (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                    {offer.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {offer.price}€
                </div>
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contatti"
                  className="block w-full py-3 text-center bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Richiedi preventivo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostica Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {pageData.diagnostica && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-2">
                {pageData.diagnostica.badge}
              </span>
              <h2 className="text-3xl font-bold">{pageData.diagnostica.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                  Problemi comuni
                </h3>
                <ul className="space-y-3">
                  {pageData.diagnostica.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-gray-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Le nostre soluzioni
                </h3>
                <ul className="space-y-3">
                  {pageData.diagnostica.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

      {/* Good Investment Section */}
      {pageData.goodInvestment && (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {pageData.goodInvestment.title}{' '}
              <span className="text-blue-600">
                {pageData.goodInvestment.titleHighlight}
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              {pageData.goodInvestment.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(pageData.goodInvestment.cards || []).map((card, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {card.icon === 'star' && (
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                  {card.icon === 'shield' && (
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {card.icon === 'zap' && (
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-2">{card.description}</p>
                <p className="text-gray-500 text-sm">{card.description2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Domande frequenti
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {pageData.faq.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg border border-gray-200 p-4">
                <summary className="font-semibold cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities Section */}
      {neighbors.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">
                Operiamo anche a:
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {neighbors.map((neighbor) => (
                  <Link
                    key={neighbor.slug}
                    href={`/siti-web/${neighbor.slug}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                  >
                    {neighbor.name}
                    {neighbor.distance > 0 && (
                      <span className="text-gray-500 text-sm ml-1">
                        ({neighbor.distance} km)
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contatti" className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Parliamo del tuo progetto a {pageData.cityName}
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contattami per una chiacchierata senza impegno. Ti presenterò una proposta
            personalizzata per le esigenze della tua attività.
          </p>
          <a
            href="mailto:hello@manueldeceglie.it"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Scrivimi un'email
          </a>
        </div>
      </section>

      {/* Province Link Footer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            <Link
              href={`/siti-web/${province.slug}`}
              className="text-blue-600 hover:underline"
            >
              Vedi tutte le città della provincia di {province.name}
            </Link>
            {' '}oppure{' '}
            <Link href="/siti-web" className="text-blue-600 hover:underline">
              torna alla lista completa
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
