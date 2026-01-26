import type { PlaybookContent } from '../types';
import { prenotazioniOnline } from './prenotazioni-online';
import { fotoPrimaDopo } from './foto-prima-dopo';
import { googleMyBusiness } from './google-my-business';
import { recensioniGoogle } from './recensioni-google';
import { listinoPrezzi } from './listino-prezzi';
import { socialMedia } from './social-media';
import { fidelizzazione } from './fidelizzazione';
import { giftCard } from './gift-card';
import { ilTuoTeam } from './il-tuo-team';
import { seoLocale } from './seo-locale';

export const saloniBellezzaPlaybooks: Record<string, PlaybookContent> = {
  'prenotazioni-online': prenotazioniOnline,
  'foto-prima-dopo': fotoPrimaDopo,
  'google-my-business': googleMyBusiness,
  'recensioni-google': recensioniGoogle,
  'listino-prezzi': listinoPrezzi,
  'social-media': socialMedia,
  'fidelizzazione': fidelizzazione,
  'gift-card': giftCard,
  'il-tuo-team': ilTuoTeam,
  'seo-locale': seoLocale,
};

export function getSaloniBellezzaPlaybook(slug: string): PlaybookContent | null {
  return saloniBellezzaPlaybooks[slug] || null;
}

export function getAllSaloniBellezzaPlaybookSlugs(): string[] {
  return Object.keys(saloniBellezzaPlaybooks);
}
