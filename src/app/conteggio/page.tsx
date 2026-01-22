import Link from 'next/link'
import { getAllLocationSlugs, targetLocations } from '@/data/locations'
import { getAllCaseStudySlugs } from '@/data/case-studies/case-studies-data'

const staticPages = [
  '/',
  '/privacy-policy',
  '/il-tuo-business-sanguina',
  '/offerta-landing',
  '/offerta-preventivo',
  '/offerta-rate',
  '/offerta-garanzia',
  '/siti-web',
  '/sviluppo-software',
  '/sviluppo-app-mobile',
  '/casi-studio',
]

export default function ConteggioPage() {
  const locationSlugs = getAllLocationSlugs()
  const caseStudySlugs = getAllCaseStudySlugs()

  const staticCount = staticPages.length
  const sitiWebCityCount = locationSlugs.length
  const softwareCityCount = locationSlugs.length
  const caseStudyCount = caseStudySlugs.length
  const locationsCount = targetLocations.length

  const totalIndexable = staticCount + sitiWebCityCount + softwareCityCount + caseStudyCount

  const cards = [
    {
      label: 'Pagine statiche',
      value: staticCount,
      hint: 'Home, landing, offerte, siti-web, software, privacy, casi studio index',
    },
    {
      label: 'Pagine siti-web / città',
      value: sitiWebCityCount,
      hint: 'Rotta: /siti-web/[city]',
    },
    {
      label: 'Pagine sviluppo-software / città',
      value: softwareCityCount,
      hint: 'Rotta: /sviluppo-software/[city]',
    },
    {
      label: 'Case study',
      value: caseStudyCount,
      hint: 'Rotta: /casi-studio/[slug]',
    },
    {
      label: 'Totale indicizzabili',
      value: totalIndexable,
      hint: 'Somma di tutte le pagine sopra',
    },
    {
      label: 'Totale città attive',
      value: locationsCount,
      hint: 'Città attualmente abilitate',
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Conteggi</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Pagine indicizzabili</h1>
          <p className="text-base text-muted-foreground max-w-2xl">
            Vista rapida dei conteggi correnti: statiche, pagine locali per siti-web e sviluppo-software,
            case study e totale complessivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(card => (
            <div
              key={card.label}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-muted-foreground mb-2">{card.label}</div>
              <div className="text-4xl font-black tracking-tight">{card.value}</div>
              <div className="text-xs text-muted-foreground mt-2">{card.hint}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="text-lg font-bold mb-3">Dettaglio percorsi</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-between">
              <span>Statiche</span>
              <span className="font-semibold text-foreground">{staticCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>/siti-web/[city]</span>
              <span className="font-semibold text-foreground">{sitiWebCityCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>/sviluppo-software/[city]</span>
              <span className="font-semibold text-foreground">{softwareCityCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>/casi-studio/[slug]</span>
              <span className="font-semibold text-foreground">{caseStudyCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Totale città in locations.ts</span>
              <span className="font-semibold text-foreground">{locationsCount}</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            Rotte usate per i conteggi: statiche ({staticPages.join(', ')}), tutte le città da{' '}
            <Link href="/siti-web" className="text-primary font-semibold">/siti-web</Link> e{' '}
            <Link href="/sviluppo-software" className="text-primary font-semibold">/sviluppo-software</Link>, e i case study.
          </p>
        </div>
      </div>
    </main>
  )
}
