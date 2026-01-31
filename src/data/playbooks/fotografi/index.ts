// Export dei playbook per Fotografi e Videomaker
import type { PlaybookContent } from '../types';

import { portfolioOnline } from './portfolio-online';
import { seoLocale } from './seo-locale';
import { googleMyBusiness } from './google-my-business';
import { listinoPrezzi } from './listino-prezzi';
import { socialMedia } from './social-media';
import { recensioniGoogle } from './recensioni-google';
import { bookingSessioni } from './booking-sessioni';
import { consegnaFoto } from './consegna-foto';
import { matrimoni } from './matrimoni';
import { videoPortfolio } from './video-portfolio';

// Registry di tutti i playbook per fotografi
export const fotografiPlaybooks: Record<string, PlaybookContent> = {
  'portfolio-online': portfolioOnline,
  'seo-locale': seoLocale,
  'google-my-business': googleMyBusiness,
  'listino-prezzi': listinoPrezzi,
  'social-media': socialMedia,
  'recensioni-google': recensioniGoogle,
  'booking-sessioni': bookingSessioni,
  'consegna-foto': consegnaFoto,
  'matrimoni': matrimoni,
  'video-portfolio': videoPortfolio,
};

// Getter per singolo playbook
export function getFotografiPlaybook(slug: string): PlaybookContent | null {
  return fotografiPlaybooks[slug] || null;
}

// Getter per tutti gli slug
export function getAllFotografiPlaybookSlugs(): string[] {
  return Object.keys(fotografiPlaybooks);
}
