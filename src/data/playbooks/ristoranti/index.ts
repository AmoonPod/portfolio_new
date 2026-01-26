import type { PlaybookContent } from '../types';
import { strutturaSito } from './struttura-sito';
import { menuOnline } from './menu-online';
import { googleMyBusiness } from './google-my-business';
import { fotoRistorante } from './foto-ristorante';
import { recensioniGoogle } from './recensioni-google';
import { prenotazioniOnline } from './prenotazioni-online';
import { seoLocale } from './seo-locale';
import { socialMedia } from './social-media';
import { deliveryAsporto } from './delivery-asporto';
import { eventiPromozioni } from './eventi-promozioni';

// Registry di tutti i playbook per ristoranti
export const ristorantiPlaybooks: Record<string, PlaybookContent> = {
  'struttura-sito': strutturaSito,
  'menu-online': menuOnline,
  'google-my-business': googleMyBusiness,
  'foto-ristorante': fotoRistorante,
  'recensioni-google': recensioniGoogle,
  'prenotazioni-online': prenotazioniOnline,
  'seo-locale': seoLocale,
  'social-media': socialMedia,
  'delivery-asporto': deliveryAsporto,
  'eventi-promozioni': eventiPromozioni,
};

export function getRistorantiPlaybook(slug: string): PlaybookContent | null {
  return ristorantiPlaybooks[slug] || null;
}

export function getAllRistorantiPlaybookSlugs(): string[] {
  return Object.keys(ristorantiPlaybooks);
}
