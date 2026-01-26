// Export principale per i playbooks
export * from './types';
export { ristorantiPlaybooks, getRistorantiPlaybook, getAllRistorantiPlaybookSlugs } from './ristoranti';
export { saloniBellezzaPlaybooks, getSaloniBellezzaPlaybook, getAllSaloniBellezzaPlaybookSlugs } from './saloni-bellezza';

import type { PlaybookContent } from './types';
import { getRistorantiPlaybook, getAllRistorantiPlaybookSlugs } from './ristoranti';
import { getSaloniBellezzaPlaybook, getAllSaloniBellezzaPlaybookSlugs } from './saloni-bellezza';

// Funzione generica per ottenere un playbook da qualsiasi nicchia
export function getPlaybookContent(niche: string, slug: string): PlaybookContent | null {
  switch (niche) {
    case 'ristoranti':
      return getRistorantiPlaybook(slug);
    case 'saloni-bellezza':
      return getSaloniBellezzaPlaybook(slug);
    default:
      return null;
  }
}

// Funzione per ottenere tutti gli slug di una nicchia
export function getAllPlaybookSlugs(niche: string): string[] {
  switch (niche) {
    case 'ristoranti':
      return getAllRistorantiPlaybookSlugs();
    case 'saloni-bellezza':
      return getAllSaloniBellezzaPlaybookSlugs();
    default:
      return [];
  }
}

// Funzione per generare metadata SEO
export function getPlaybookMetadata(niche: string, slug: string) {
  const playbook = getPlaybookContent(niche, slug);
  if (!playbook) return null;

  return {
    title: `${playbook.hero.title} | Manuel De Ceglie`,
    description: playbook.hero.subtitle,
  };
}
