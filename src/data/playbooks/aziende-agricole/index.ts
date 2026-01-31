// Export dei playbook per Aziende Agricole e Agriturismi
import type { PlaybookContent } from '../types';

import { venditaDiretta } from './vendita-diretta';
import { prenotazioniAgriturismo } from './prenotazioni-agriturismo';
import { googleMyBusiness } from './google-my-business';
import { fotoProdotti } from './foto-prodotti';
import { raccontaLaTuaStoria } from './racconta-la-tua-storia';
import { seoLocale } from './seo-locale';
import { degustazioniEventi } from './degustazioni-eventi';
import { socialMedia } from './social-media';
import { recensioniGoogle } from './recensioni-google';
import { filieraCorta } from './filiera-corta';
import { strutturaSito } from './struttura-sito';

// Registry di tutti i playbook per aziende agricole
export const aziendeAgricolePlaybooks: Record<string, PlaybookContent> = {
  'vendita-diretta': venditaDiretta,
  'prenotazioni-agriturismo': prenotazioniAgriturismo,
  'google-my-business': googleMyBusiness,
  'foto-prodotti': fotoProdotti,
  'racconta-la-tua-storia': raccontaLaTuaStoria,
  'seo-locale': seoLocale,
  'degustazioni-eventi': degustazioniEventi,
  'social-media': socialMedia,
  'recensioni-google': recensioniGoogle,
  'filiera-corta': filieraCorta,
  'struttura-sito': strutturaSito,
};

// Getter per singolo playbook
export function getAziendeAgricolePlaybook(slug: string): PlaybookContent | null {
  return aziendeAgricolePlaybooks[slug] || null;
}

// Getter per tutti gli slug
export function getAllAziendeAgricolePlaybookSlugs(): string[] {
  return Object.keys(aziendeAgricolePlaybooks);
}
