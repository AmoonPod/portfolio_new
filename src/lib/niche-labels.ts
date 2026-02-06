/**
 * Helper per etichette e titoli in italiano corretti per nicchie.
 * Evita errori come "i e-commerce libri" → "gli e-commerce di libri".
 */

import type { NicheConfig } from '@/data/niches-config'

/**
 * Restituisce la frase da usare dopo "per" (es. "siti web per X", "58+ X hanno scelto").
 * Per e-commerce: "e-commerce di libri", "e-commerce di abbigliamento", ecc.
 * Per servizi: "ristoranti", "fotografi", ecc. (minuscolo).
 */
export function getNicheLabelForPhrase(niche: NicheConfig): string {
  if (niche.pluralName.startsWith('E-commerce ')) {
    const category = niche.pluralName.slice('E-commerce '.length).toLowerCase()
    return `e-commerce di ${category}`
  }
  return niche.pluralName.toLowerCase()
}

/**
 * Titolo della sezione statistiche: "Perché [articolo + soggetto] hanno bisogno di un sito web professionale".
 * Usa formulazioni corrette in italiano (es. "gli e-commerce di libri", "le palestre", "gli hotel").
 */
export function getNicheStatsSectionTitle(niche: NicheConfig): string {
  const slug = niche.slug
  const explicit: Record<string, string> = {
    hotel: 'Perché gli hotel hanno bisogno di un sito web professionale',
    palestre: 'Perché le palestre hanno bisogno di un sito web professionale',
    'studi-legali': 'Perché gli studi legali hanno bisogno di un sito web professionale',
    architetti: 'Perché gli architetti hanno bisogno di un sito web professionale',
    'aziende-agricole': 'Perché le aziende agricole hanno bisogno di un sito web professionale',
    'saloni-bellezza': 'Perché i saloni di bellezza hanno bisogno di un sito web professionale',
    libri: 'Perché gli e-commerce di libri hanno bisogno di un sito web professionale',
    abbigliamento: 'Perché gli e-commerce di abbigliamento hanno bisogno di un sito web professionale',
    alimentari: 'Perché gli e-commerce alimentari hanno bisogno di un sito web professionale',
    arredamento: 'Perché gli e-commerce di arredamento hanno bisogno di un sito web professionale',
    cosmetici: 'Perché gli e-commerce di cosmetici hanno bisogno di un sito web professionale',
    elettronica: 'Perché gli e-commerce di elettronica hanno bisogno di un sito web professionale',
    gioielli: 'Perché gli e-commerce di gioielli hanno bisogno di un sito web professionale',
    sport: 'Perché gli e-commerce sportivi hanno bisogno di un sito web professionale',
  }
  if (explicit[slug]) return explicit[slug]
  return `Perché i ${niche.pluralName.toLowerCase()} hanno bisogno di un sito web professionale`
}

/**
 * Restituisce il termine da usare in contesti singolari come "nel tuo X", "per il tuo X".
 * Per e-commerce: "e-commerce" (evita "nel tuo e-commerce libri").
 */
export function getNicheSingularContext(niche: NicheConfig): string {
  if (niche.singularName.startsWith('E-commerce ')) {
    return 'e-commerce'
  }
  return niche.singularName.toLowerCase()
}

/**
 * Inizio frase per meta description: "Sei un X a city?" oppure "Hai un e-commerce a city?".
 * Evita "Sei un e-commerce libri a Milano?".
 */
export function getNicheMetaQuestionStart(niche: NicheConfig, cityName: string): string {
  if (niche.singularName.startsWith('E-commerce ')) {
    return `Hai un e-commerce a ${cityName}?`
  }
  return `Sei un ${getNicheSingularContext(niche)} a ${cityName}?`
}
