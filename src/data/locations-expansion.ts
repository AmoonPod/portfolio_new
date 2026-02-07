/**
 * ADDITIONAL LOCATIONS - EXPANSION TO 500+ CITIES
 * 
 * This file contains additional cities for programmatic SEO scaling.
 * Import and merge with main locations.ts
 * 
 * WAVE STRATEGY:
 * - Wave 1: Core Priority Cities (Already in locations.ts)
 * - Wave 2: Regional Expansion (North/Center)
 * - Wave 3: Major National Cities (Lazio, Campania, etc.)
 * - Wave 4: Deep Coverage (Small towns, South, Islands)
 */

import { Location } from './locations';

// =============================================================================
// PIEMONTE (Wave 2)
// =============================================================================

export const PIEMONTE_LOCATIONS: Location[] = [
  { id: 'torino', slug: 'torino', name: 'Torino', province: 'Torino', region: 'Piemonte', population: 886837, geo: { lat: 45.0703, lng: 7.6869 }, priority: 1, highImpression: true, demonym: 'Torinesi', wave: 2 },
  { id: 'novara', slug: 'novara', name: 'Novara', province: 'Novara', region: 'Piemonte', population: 104183, geo: { lat: 45.4455, lng: 8.6222 }, priority: 1, demonym: 'Novaresi', wave: 2 },
  { id: 'alessandria', slug: 'alessandria', name: 'Alessandria', province: 'Alessandria', region: 'Piemonte', population: 94207, geo: { lat: 44.9127, lng: 8.6165 }, priority: 2, demonym: 'Alessandrini', wave: 2 },
  { id: 'asti', slug: 'asti', name: 'Asti', province: 'Asti', region: 'Piemonte', population: 76223, geo: { lat: 44.9007, lng: 8.2067 }, priority: 2, demonym: 'Astigiani', wave: 2 },
  { id: 'moncalieri', slug: 'moncalieri', name: 'Moncalieri', province: 'Torino', region: 'Piemonte', population: 58231, geo: { lat: 45.0031, lng: 7.6920 }, priority: 2, demonym: 'Moncalieresi', wave: 3 },
  { id: 'cuneo', slug: 'cuneo', name: 'Cuneo', province: 'Cuneo', region: 'Piemonte', population: 56599, geo: { lat: 44.3845, lng: 7.5428 }, priority: 2, demonym: 'Cuneesi', wave: 2 },
  { id: 'collegno', slug: 'collegno', name: 'Collegno', province: 'Torino', region: 'Piemonte', population: 49551, geo: { lat: 45.0782, lng: 7.5762 }, priority: 2, demonym: 'Collegnesi', wave: 3 },
  { id: 'rivoli', slug: 'rivoli', name: 'Rivoli', province: 'Torino', region: 'Piemonte', population: 48797, geo: { lat: 45.0706, lng: 7.5261 }, priority: 2, demonym: 'Rivolesi', wave: 3 },
  { id: 'vercelli', slug: 'vercelli', name: 'Vercelli', province: 'Vercelli', region: 'Piemonte', population: 46511, geo: { lat: 45.3202, lng: 8.4183 }, priority: 2, demonym: 'Vercellesi', wave: 2 },
  { id: 'biella', slug: 'biella', name: 'Biella', province: 'Biella', region: 'Piemonte', population: 44208, geo: { lat: 45.5628, lng: 8.0570 }, priority: 2, demonym: 'Biellesi', wave: 2 },
  { id: 'settimo-torinese', slug: 'settimo-torinese', name: 'Settimo Torinese', province: 'Torino', region: 'Piemonte', population: 47561, geo: { lat: 45.1341, lng: 7.7668 }, priority: 2, demonym: 'Settimesi', wave: 3 },
  { id: 'grugliasco', slug: 'grugliasco', name: 'Grugliasco', province: 'Torino', region: 'Piemonte', population: 37598, geo: { lat: 45.0686, lng: 7.5767 }, priority: 3, demonym: 'Grugliaschese', wave: 3 },
  { id: 'chivasso', slug: 'chivasso', name: 'Chivasso', province: 'Torino', region: 'Piemonte', population: 26609, geo: { lat: 45.1923, lng: 7.8898 }, priority: 3, demonym: 'Chivassesi', wave: 3 },
  { id: 'pinerolo', slug: 'pinerolo', name: 'Pinerolo', province: 'Torino', region: 'Piemonte', population: 35871, geo: { lat: 44.8872, lng: 7.3323 }, priority: 3, demonym: 'Pinerolesi', wave: 3 },
  { id: 'venaria-reale', slug: 'venaria-reale', name: 'Venaria Reale', province: 'Torino', region: 'Piemonte', population: 33779, geo: { lat: 45.1232, lng: 7.6307 }, priority: 3, demonym: 'Venariesi', wave: 3 },
  { id: 'racconigi', slug: 'racconigi', name: 'Racconigi', province: 'Cuneo', region: 'Piemonte', population: 10023, geo: { lat: 44.7686, lng: 7.6787 }, priority: 3, demonym: 'Racconigesi', wave: 4 },
  { id: 'alba', slug: 'alba', name: 'Alba', province: 'Cuneo', region: 'Piemonte', population: 31967, geo: { lat: 44.6990, lng: 8.0354 }, priority: 3, demonym: 'Albesi', wave: 3 },
  { id: 'bra', slug: 'bra', name: 'Bra', province: 'Cuneo', region: 'Piemonte', population: 29810, geo: { lat: 44.6984, lng: 7.8517 }, priority: 3, demonym: 'Brasini', wave: 3 },
  { id: 'fossano', slug: 'fossano', name: 'Fossano', province: 'Cuneo', region: 'Piemonte', population: 24628, geo: { lat: 44.5505, lng: 7.7291 }, priority: 3, demonym: 'Fossanesi', wave: 4 },
  { id: 'savigliano', slug: 'savigliano', name: 'Savigliano', province: 'Cuneo', region: 'Piemonte', population: 21433, geo: { lat: 44.6476, lng: 7.6681 }, priority: 3, demonym: 'Saviglianesi', wave: 4 },
];

// =============================================================================
// LIGURIA (Wave 2)
// =============================================================================

export const LIGURIA_LOCATIONS: Location[] = [
  { id: 'genova', slug: 'genova', name: 'Genova', province: 'Genova', region: 'Liguria', population: 586180, geo: { lat: 44.4056, lng: 8.9463 }, priority: 1, highImpression: true, demonym: 'Genovesi', wave: 2 },
  { id: 'la-spezia', slug: 'la-spezia', name: 'La Spezia', province: 'La Spezia', region: 'Liguria', population: 93448, geo: { lat: 44.1024, lng: 9.8241 }, priority: 1, demonym: 'Spezzini', wave: 2 },
  { id: 'savona', slug: 'savona', name: 'Savona', province: 'Savona', region: 'Liguria', population: 61001, geo: { lat: 44.3080, lng: 8.3740 }, priority: 2, demonym: 'Savonesi', wave: 2 },
  { id: 'sanremo', slug: 'sanremo', name: 'Sanremo', province: 'Imperia', region: 'Liguria', population: 56905, geo: { lat: 43.8158, lng: 7.7761 }, priority: 2, demonym: 'Sanremesi', wave: 3 },
  { id: 'imperia', slug: 'imperia', name: 'Imperia', province: 'Imperia', region: 'Liguria', population: 42329, geo: { lat: 43.8870, lng: 8.0299 }, priority: 2, demonym: 'Imperiesi', wave: 3 },
  { id: 'rapallo', slug: 'rapallo', name: 'Rapallo', province: 'Genova', region: 'Liguria', population: 29711, geo: { lat: 44.3515, lng: 9.2283 }, priority: 3, demonym: 'Rapallese', wave: 4 },
  { id: 'chiavari', slug: 'chiavari', name: 'Chiavari', province: 'Genova', region: 'Liguria', population: 27569, geo: { lat: 44.3176, lng: 9.3234 }, priority: 3, demonym: 'Chiavaresi', wave: 4 },
  { id: 'ventimiglia', slug: 'ventimiglia', name: 'Ventimiglia', province: 'Imperia', region: 'Liguria', population: 25576, geo: { lat: 43.7914, lng: 7.6079 }, priority: 3, demonym: 'Ventimigliesi', wave: 4 },
  { id: 'alassio', slug: 'alassio', name: 'Alassio', province: 'Savona', region: 'Liguria', population: 11074, geo: { lat: 44.0082, lng: 8.1713 }, priority: 3, demonym: 'Alassini', wave: 4 },
  { id: 'albenga', slug: 'albenga', name: 'Albenga', province: 'Savona', region: 'Liguria', population: 24336, geo: { lat: 44.0497, lng: 8.2131 }, priority: 3, demonym: 'Albenganesi', wave: 4 },
  { id: 'varazze', slug: 'varazze', name: 'Varazze', province: 'Savona', region: 'Liguria', population: 13174, geo: { lat: 44.3592, lng: 8.5747 }, priority: 3, demonym: 'Varazzini', wave: 4 },
  { id: 'cogoleto', slug: 'cogoleto', name: 'Cogoleto', province: 'Genova', region: 'Liguria', population: 9120, geo: { lat: 44.3895, lng: 8.6463 }, priority: 3, demonym: 'Cogoletesi', wave: 4 },
];

// =============================================================================
// FRIULI VENEZIA GIULIA (Wave 2)
// =============================================================================

export const FRIULI_LOCATIONS: Location[] = [
  { id: 'trieste', slug: 'trieste', name: 'Trieste', province: 'Trieste', region: 'Friuli Venezia Giulia', population: 204849, geo: { lat: 45.6495, lng: 13.7768 }, priority: 1, highImpression: true, demonym: 'Triestini', wave: 2 },
  { id: 'udine', slug: 'udine', name: 'Udine', province: 'Udine', region: 'Friuli Venezia Giulia', population: 99778, geo: { lat: 46.0711, lng: 13.2346 }, priority: 1, demonym: 'Udinesi', wave: 2 },
  { id: 'pordenone', slug: 'pordenone', name: 'Pordenone', province: 'Pordenone', region: 'Friuli Venezia Giulia', population: 51808, geo: { lat: 45.9564, lng: 12.6592 }, priority: 2, demonym: 'Pordenonesi', wave: 2 },
  { id: 'gorizia', slug: 'gorizia', name: 'Gorizia', province: 'Gorizia', region: 'Friuli Venezia Giulia', population: 34403, geo: { lat: 45.9409, lng: 13.6220 }, priority: 2, demonym: 'Goriziani', wave: 2 },
  { id: 'sacile', slug: 'sacile', name: 'Sacile', province: 'Pordenone', region: 'Friuli Venezia Giulia', population: 19971, geo: { lat: 45.9542, lng: 12.5031 }, priority: 3, demonym: 'Sacilesi', wave: 3 },
  { id: 'codroipo', slug: 'codroipo', name: 'Codroipo', province: 'Udine', region: 'Friuli Venezia Giulia', population: 16027, geo: { lat: 45.9614, lng: 13.1594 }, priority: 3, demonym: 'Codroipesi', wave: 4 },
  { id: 'tavagnacco', slug: 'tavagnacco', name: 'Tavagnacco', province: 'Udine', region: 'Friuli Venezia Giulia', population: 14628, geo: { lat: 46.0889, lng: 13.2167 }, priority: 3, demonym: 'Tavagnacchesi', wave: 4 },
  { id: 'cordenons', slug: 'cordenons', name: 'Cordenons', province: 'Pordenone', region: 'Friuli Venezia Giulia', population: 18516, geo: { lat: 45.9897, lng: 12.7058 }, priority: 3, demonym: 'Cordenonese', wave: 4 },
  { id: 'porcia', slug: 'porcia', name: 'Porcia', province: 'Pordenone', region: 'Friuli Venezia Giulia', population: 15307, geo: { lat: 45.9611, lng: 12.6156 }, priority: 3, demonym: 'Porciese', wave: 4 },
];

// =============================================================================
// TRENTINO ALTO ADIGE (Wave 2)
// =============================================================================

export const TRENTINO_LOCATIONS: Location[] = [
  { id: 'trento', slug: 'trento', name: 'Trento', province: 'Trento', region: 'Trentino Alto Adige', population: 120709, geo: { lat: 46.0748, lng: 11.1217 }, priority: 1, highImpression: true, demonym: 'Trentini', wave: 2 },
  { id: 'bolzano', slug: 'bolzano', name: 'Bolzano', province: 'Bolzano', region: 'Trentino Alto Adige', population: 107944, geo: { lat: 46.4983, lng: 11.3548 }, priority: 1, highImpression: true, demonym: 'Bolzanini', wave: 2 },
  { id: 'rovereto', slug: 'rovereto', name: 'Rovereto', province: 'Trento', region: 'Trentino Alto Adige', population: 39966, geo: { lat: 45.8890, lng: 11.0442 }, priority: 2, demonym: 'Roveretani', wave: 3 },
  { id: 'merano', slug: 'merano', name: 'Merano', province: 'Bolzano', region: 'Trentino Alto Adige', population: 40662, geo: { lat: 46.6689, lng: 11.1637 }, priority: 2, demonym: 'Meranesi', wave: 3 },
  { id: 'pieve-di-soligo', slug: 'pieve-di-soligo', name: 'Pieve di Soligo', province: 'Treviso', region: 'Veneto', population: 11908, geo: { lat: 45.8889, lng: 12.1667 }, priority: 3, demonym: 'Solighese', wave: 4 },
  { id: 'bressanone', slug: 'bressanone', name: 'Bressanone', province: 'Bolzano', region: 'Trentino Alto Adige', population: 22352, geo: { lat: 46.7164, lng: 11.6566 }, priority: 3, demonym: 'Bressanonesi', wave: 4 },
  { id: 'brunico', slug: 'brunico', name: 'Brunico', province: 'Bolzano', region: 'Trentino Alto Adige', population: 16714, geo: { lat: 46.7969, lng: 11.9367 }, priority: 3, demonym: 'Brunicensi', wave: 4 },
];

// =============================================================================
// VALLE D'AOSTA (Wave 2)
// =============================================================================

export const VALLE_AOSTA_LOCATIONS: Location[] = [
  { id: 'aosta', slug: 'aosta', name: 'Aosta', province: 'Aosta', region: "Valle d'Aosta", population: 34082, geo: { lat: 45.7349, lng: 7.3131 }, priority: 2, highImpression: true, demonym: 'Aostani', wave: 2 },
  { id: 'saint-vincent', slug: 'saint-vincent', name: "Saint-Vincent", province: 'Aosta', region: "Valle d'Aosta", population: 4683, geo: { lat: 45.7509, lng: 7.6489 }, priority: 3, demonym: 'Vincenzini', wave: 4 },
  { id: 'courmayeur', slug: 'courmayeur', name: 'Courmayeur', province: 'Aosta', region: "Valle d'Aosta", population: 2846, geo: { lat: 45.7969, lng: 6.9689 }, priority: 3, demonym: 'Courmayeurins', wave: 4 },
];

// =============================================================================
// MARCHE (Wave 3)
// =============================================================================

export const MARCHE_LOCATIONS: Location[] = [
  { id: 'ancona', slug: 'ancona', name: 'Ancona', province: 'Ancona', region: 'Marche', population: 100497, geo: { lat: 43.6158, lng: 13.5189 }, priority: 1, highImpression: true, demonym: 'Anconetani', wave: 3 },
  { id: 'pesaro', slug: 'pesaro', name: 'Pesaro', province: 'Pesaro e Urbino', region: 'Marche', population: 95261, geo: { lat: 43.9102, lng: 12.9133 }, priority: 1, demonym: 'Pesaresi', wave: 3 },
  { id: 'senigallia', slug: 'senigallia', name: 'Senigallia', province: 'Ancona', region: 'Marche', population: 44780, geo: { lat: 43.7167, lng: 13.2167 }, priority: 2, demonym: 'Senigalliesi', wave: 3 },
  { id: 'macerata', slug: 'macerata', name: 'Macerata', province: 'Macerata', region: 'Marche', population: 41776, geo: { lat: 43.2976, lng: 13.4528 }, priority: 2, demonym: 'Maceratesi', wave: 3 },
  { id: 'ascoli-piceno', slug: 'ascoli-piceno', name: 'Ascoli Piceno', province: 'Ascoli Piceno', region: 'Marche', population: 47755, geo: { lat: 42.8536, lng: 13.5748 }, priority: 2, demonym: 'Piceni', wave: 3 },
  { id: 'civitanova-marche', slug: 'civitanova-marche', name: 'Civitanova Marche', province: 'Macerata', region: 'Marche', population: 42342, geo: { lat: 43.3069, lng: 13.7276 }, priority: 2, demonym: 'Civitanovesi', wave: 3 },
  { id: 'fermo', slug: 'fermo', name: 'Fermo', province: 'Fermo', region: 'Marche', population: 37323, geo: { lat: 43.1600, lng: 13.7184 }, priority: 2, demonym: 'Fermani', wave: 3 },
  { id: 'jesesi', slug: 'jesesi', name: 'Jesi', province: 'Ancona', region: 'Marche', population: 39796, geo: { lat: 43.5240, lng: 13.2440 }, priority: 2, demonym: 'Jesini', wave: 4 },
  { id: 'fano', slug: 'fano', name: 'Fano', province: 'Pesaro e Urbino', region: 'Marche', population: 61033, geo: { lat: 43.8472, lng: 13.0167 }, priority: 2, demonym: 'Fanese', wave: 4 },
  { id: 'san-benedetto-del-tronto', slug: 'san-benedetto-del-tronto', name: 'San Benedetto del Tronto', province: 'Ascoli Piceno', region: 'Marche', population: 47329, geo: { lat: 42.9553, lng: 13.8768 }, priority: 2, demonym: 'Sambenedettesi', wave: 4 },
  { id: 'urbino', slug: 'urbino', name: 'Urbino', province: 'Pesaro e Urbino', region: 'Marche', population: 14276, geo: { lat: 43.7262, lng: 12.6363 }, priority: 3, demonym: 'Urbinate', wave: 4 },
];

// =============================================================================
// UMBRIA (Wave 3)
// =============================================================================

export const UMBRIA_LOCATIONS: Location[] = [
  { id: 'perugia', slug: 'perugia', name: 'Perugia', province: 'Perugia', region: 'Umbria', population: 168385, geo: { lat: 43.1107, lng: 12.3908 }, priority: 1, highImpression: true, demonym: 'Perugini', wave: 3 },
  { id: 'terni', slug: 'terni', name: 'Terni', province: 'Terni', region: 'Umbria', population: 109142, geo: { lat: 42.5636, lng: 12.6427 }, priority: 1, demonym: 'Ternani', wave: 3 },
  { id: 'foligno', slug: 'foligno', name: 'Foligno', province: 'Perugia', region: 'Umbria', population: 56500, geo: { lat: 42.9560, lng: 12.7020 }, priority: 2, demonym: 'Folignati', wave: 3 },
  { id: 'citta-di-castello', slug: 'citta-di-castello', name: 'Città di Castello', province: 'Perugia', region: 'Umbria', population: 39740, geo: { lat: 43.4578, lng: 12.2317 }, priority: 2, demonym: 'Tifernati', wave: 4 },
  { id: 'spoleto', slug: 'spoleto', name: 'Spoleto', province: 'Perugia', region: 'Umbria', population: 37626, geo: { lat: 42.7428, lng: 12.7383 }, priority: 2, demonym: 'Spoletini', wave: 4 },
  { id: 'gubbio', slug: 'gubbio', name: 'Gubbio', province: 'Perugia', region: 'Umbria', population: 31929, geo: { lat: 43.3512, lng: 12.5772 }, priority: 3, demonym: 'Eugubini', wave: 4 },
  { id: 'assisi', slug: 'assisi', name: 'Assisi', province: 'Perugia', region: 'Umbria', population: 28229, geo: { lat: 43.0707, lng: 12.6196 }, priority: 3, demonym: 'Assisani', wave: 4 },
  { id: 'bastia-umbra', slug: 'bastia-umbra', name: 'Bastia Umbra', province: 'Perugia', region: 'Umbria', population: 21958, geo: { lat: 43.0686, lng: 12.5494 }, priority: 3, demonym: 'Bastolini', wave: 4 },
];

// =============================================================================
// LAZIO (Wave 3)
// =============================================================================

export const LAZIO_LOCATIONS: Location[] = [
  { id: 'roma', slug: 'roma', name: 'Roma', province: 'Roma', region: 'Lazio', population: 2748109, geo: { lat: 41.9028, lng: 12.4964 }, priority: 1, highImpression: true, demonym: 'Romani', wave: 3 },
  { id: 'latina', slug: 'latina', name: 'Latina', province: 'Latina', region: 'Lazio', population: 127561, geo: { lat: 41.4676, lng: 12.9037 }, priority: 1, highImpression: true, demonym: 'Latinesi', wave: 3 },
  { id: 'guidonia-montecelio', slug: 'guidonia-montecelio', name: 'Guidonia Montecelio', province: 'Roma', region: 'Lazio', population: 89114, geo: { lat: 41.9962, lng: 12.7229 }, priority: 2, demonym: 'Guidoniani', wave: 3 },
  { id: 'fiumicino', slug: 'fiumicino', name: 'Fiumicino', province: 'Roma', region: 'Lazio', population: 81426, geo: { lat: 41.7659, lng: 12.2289 }, priority: 2, demonym: 'Fiumicinesi', wave: 3 },
  { id: 'aprilia', slug: 'aprilia', name: 'Aprilia', province: 'Latina', region: 'Lazio', population: 74126, geo: { lat: 41.5947, lng: 12.6531 }, priority: 2, demonym: 'Apriliani', wave: 3 },
  { id: 'viterbo', slug: 'viterbo', name: 'Viterbo', province: 'Viterbo', region: 'Lazio', population: 66050, geo: { lat: 42.4207, lng: 12.1077 }, priority: 2, demonym: 'Viterbesi', wave: 3 },
  { id: 'pomezia', slug: 'pomezia', name: 'Pomezia', province: 'Roma', region: 'Lazio', population: 64119, geo: { lat: 41.6702, lng: 12.5011 }, priority: 2, demonym: 'Pometini', wave: 3 },
  { id: 'tivoli', slug: 'tivoli', name: 'Tivoli', province: 'Roma', region: 'Lazio', population: 54916, geo: { lat: 41.9609, lng: 12.7989 }, priority: 2, demonym: 'Tiburtini', wave: 3 },
  { id: 'anzio', slug: 'anzio', name: 'Anzio', province: 'Roma', region: 'Lazio', population: 52923, geo: { lat: 41.4468, lng: 12.6267 }, priority: 2, demonym: 'Anziati', wave: 3 },
  { id: 'velletri', slug: 'velletri', name: 'Velletri', province: 'Roma', region: 'Lazio', population: 52754, geo: { lat: 41.6867, lng: 12.7772 }, priority: 2, demonym: 'Veliterni', wave: 3 },
  { id: 'civitavecchia', slug: 'civitavecchia', name: 'Civitavecchia', province: 'Roma', region: 'Lazio', population: 51595, geo: { lat: 42.0924, lng: 11.7954 }, priority: 2, demonym: 'Civitavecchiesi', wave: 3 },
  { id: 'frosinone', slug: 'frosinone', name: 'Frosinone', province: 'Frosinone', region: 'Lazio', population: 43417, geo: { lat: 41.6409, lng: 13.3512 }, priority: 2, demonym: 'Frusinati', wave: 3 },
  { id: 'rieti', slug: 'rieti', name: 'Rieti', province: 'Rieti', region: 'Lazio', population: 45575, geo: { lat: 42.4042, lng: 12.8617 }, priority: 2, demonym: 'Reatini', wave: 3 },
  { id: 'nettuno', slug: 'nettuno', name: 'Nettuno', province: 'Roma', region: 'Lazio', population: 48392, geo: { lat: 41.4589, lng: 12.6603 }, priority: 2, demonym: 'Nettunesi', wave: 3 },
  { id: 'terracina', slug: 'terracina', name: 'Terracina', province: 'Latina', region: 'Lazio', population: 44233, geo: { lat: 41.2828, lng: 13.2436 }, priority: 2, demonym: 'Terracinesi', wave: 4 },
];

// =============================================================================
// ABRUZZO (Wave 3)
// =============================================================================

export const ABRUZZO_LOCATIONS: Location[] = [
  { id: 'laquila', slug: 'laquila', name: "L'Aquila", province: "L'Aquila", region: 'Abruzzo', population: 69399, geo: { lat: 42.3498, lng: 13.3995 }, priority: 2, highImpression: true, demonym: 'Aquilani', wave: 3 },
  { id: 'pescara', slug: 'pescara', name: 'Pescara', province: 'Pescara', region: 'Abruzzo', population: 123103, geo: { lat: 42.4618, lng: 14.2160 }, priority: 1, highImpression: true, demonym: 'Pescaresi', wave: 3 },
  { id: 'chieti', slug: 'chieti', name: 'Chieti', province: 'Chieti', region: 'Abruzzo', population: 50823, geo: { lat: 42.3512, lng: 14.1675 }, priority: 2, demonym: 'Chietini', wave: 3 },
  { id: 'teramo', slug: 'teramo', name: 'Teramo', province: 'Teramo', region: 'Abruzzo', population: 52329, geo: { lat: 42.6612, lng: 13.6980 }, priority: 2, demonym: 'Teramani', wave: 3 },
  { id: 'montesilvano', slug: 'montesilvano', name: 'Montesilvano', province: 'Pescara', region: 'Abruzzo', population: 54510, geo: { lat: 42.5092, lng: 14.1438 }, priority: 2, demonym: 'Montesilvanesi', wave: 3 },
  { id: 'avezzano', slug: 'avezzano', name: 'Avezzano', province: "L'Aquila", region: 'Abruzzo', population: 42508, geo: { lat: 42.0311, lng: 13.4255 }, priority: 2, demonym: 'Avezzanesi', wave: 4 },
  { id: 'vasto', slug: 'vasto', name: 'Vasto', province: 'Chieti', region: 'Abruzzo', population: 41047, geo: { lat: 42.1143, lng: 14.7069 }, priority: 2, demonym: 'Vastesi', wave: 4 },
  { id: 'lanciano', slug: 'lanciano', name: 'Lanciano', province: 'Chieti', region: 'Abruzzo', population: 34306, geo: { lat: 42.2270, lng: 14.3913 }, priority: 3, demonym: 'Lancianesi', wave: 4 },
];

// =============================================================================
// MOLISE (Wave 4)
// =============================================================================

export const MOLISE_LOCATIONS: Location[] = [
  { id: 'campobasso', slug: 'campobasso', name: 'Campobasso', province: 'Campobasso', region: 'Molise', population: 49185, geo: { lat: 41.5619, lng: 14.6684 }, priority: 2, demonym: 'Campobassani', wave: 4 },
  { id: 'isernia', slug: 'isernia', name: 'Isernia', province: 'Isernia', region: 'Molise', population: 21841, geo: { lat: 41.5972, lng: 14.2387 }, priority: 3, demonym: 'Isernini', wave: 4 },
  { id: 'termoli', slug: 'termoli', name: 'Termoli', province: 'Campobasso', region: 'Molise', population: 33278, geo: { lat: 41.9959, lng: 15.0007 }, priority: 3, demonym: 'Termolesi', wave: 4 },
];

// =============================================================================
// CAMPANIA (Wave 3)
// =============================================================================

export const CAMPANIA_LOCATIONS: Location[] = [
  { id: 'napoli', slug: 'napoli', name: 'Napoli', province: 'Napoli', region: 'Campania', population: 962003, geo: { lat: 40.8518, lng: 14.2681 }, priority: 1, highImpression: true, demonym: 'Napoletani', wave: 3 },
  { id: 'salerno', slug: 'salerno', name: 'Salerno', province: 'Salerno', region: 'Campania', population: 133237, geo: { lat: 40.6824, lng: 14.7680 }, priority: 1, highImpression: true, demonym: 'Salernitani', wave: 3 },
  { id: 'caserta', slug: 'caserta', name: 'Caserta', province: 'Caserta', region: 'Campania', population: 75513, geo: { lat: 41.0727, lng: 14.3317 }, priority: 1, demonym: 'Casertani', wave: 3 },
  { id: 'avellino', slug: 'avellino', name: 'Avellino', province: 'Avellino', region: 'Campania', population: 53778, geo: { lat: 40.9162, lng: 14.7887 }, priority: 2, demonym: 'Avellinesi', wave: 3 },
  { id: 'benevento', slug: 'benevento', name: 'Benevento', province: 'Benevento', region: 'Campania', population: 60027, geo: { lat: 41.1298, lng: 14.7820 }, priority: 2, demonym: 'Beneventani', wave: 3 },
  { id: 'giugliano-in-campania', slug: 'giugliano-in-campania', name: 'Giugliano in Campania', province: 'Napoli', region: 'Campania', population: 123679, geo: { lat: 40.9318, lng: 14.1956 }, priority: 2, demonym: 'Giuglianesi', wave: 3 },
  { id: 'torre-del-greco', slug: 'torre-del-greco', name: 'Torre del Greco', province: 'Napoli', region: 'Campania', population: 83440, geo: { lat: 40.7856, lng: 14.3644 }, priority: 2, demonym: 'Torresi', wave: 3 },
  { id: 'pozzuoli', slug: 'pozzuoli', name: 'Pozzuoli', province: 'Napoli', region: 'Campania', population: 79278, geo: { lat: 40.8229, lng: 14.1223 }, priority: 2, demonym: 'Puteolani', wave: 3 },
  { id: 'casoria', slug: 'casoria', name: 'Casoria', province: 'Napoli', region: 'Campania', population: 75599, geo: { lat: 40.9022, lng: 14.2922 }, priority: 2, demonym: 'Casoriani', wave: 3 },
  { id: 'castellammare-di-stabia', slug: 'castellammare-di-stabia', name: 'Castellammare di Stabia', province: 'Napoli', region: 'Campania', population: 64506, geo: { lat: 40.6953, lng: 14.4828 }, priority: 2, demonym: 'Stabiesi', wave: 3 },
  { id: 'afragola', slug: 'afragola', name: 'Afragola', province: 'Napoli', region: 'Campania', population: 63446, geo: { lat: 40.9192, lng: 14.3075 }, priority: 2, demonym: 'Afragolesi', wave: 3 },
  { id: 'marano-di-napoli', slug: 'marano-di-napoli', name: 'Marano di Napoli', province: 'Napoli', region: 'Campania', population: 58580, geo: { lat: 40.8925, lng: 14.1878 }, priority: 2, demonym: 'Maranesi', wave: 3 },
  { id: 'acerra', slug: 'acerra', name: 'Acerra', province: 'Napoli', region: 'Campania', population: 58494, geo: { lat: 40.9431, lng: 14.3719 }, priority: 2, demonym: 'Acerrani', wave: 3 },
  { id: 'portici', slug: 'portici', name: 'Portici', province: 'Napoli', region: 'Campania', population: 52932, geo: { lat: 40.8197, lng: 14.3411 }, priority: 2, demonym: 'Porticesi', wave: 3 },
  { id: 'cava-de-tirreni', slug: 'cava-de-tirreni', name: "Cava de' Tirreni", province: 'Salerno', region: 'Campania', population: 51707, geo: { lat: 40.7019, lng: 14.7078 }, priority: 2, demonym: 'Cavesi', wave: 3 },
  { id: 'aversa', slug: 'aversa', name: 'Aversa', province: 'Caserta', region: 'Campania', population: 51227, geo: { lat: 40.9733, lng: 14.2072 }, priority: 2, demonym: 'Aversani', wave: 3 },
  { id: 'ercolano', slug: 'ercolano', name: 'Ercolano', province: 'Napoli', region: 'Campania', population: 51203, geo: { lat: 40.8064, lng: 14.3475 }, priority: 2, demonym: 'Ercolanesi', wave: 3 },
  { id: 'battipaglia', slug: 'battipaglia', name: 'Battipaglia', province: 'Salerno', region: 'Campania', population: 50400, geo: { lat: 40.6083, lng: 14.9850 }, priority: 2, demonym: 'Battipagliesi', wave: 3 },
  { id: 'scafati', slug: 'scafati', name: 'Scafati', province: 'Salerno', region: 'Campania', population: 48822, geo: { lat: 40.7511, lng: 14.5269 }, priority: 2, demonym: 'Scafatesi', wave: 3 },
];

// =============================================================================
// PUGLIA (Wave 3)
// =============================================================================

export const PUGLIA_LOCATIONS: Location[] = [
  { id: 'bari', slug: 'bari', name: 'Bari', province: 'Bari', region: 'Puglia', population: 323370, geo: { lat: 41.1171, lng: 16.8719 }, priority: 1, highImpression: true, demonym: 'Baresi', wave: 3 },
  { id: 'taranto', slug: 'taranto', name: 'Taranto', province: 'Taranto', region: 'Puglia', population: 198283, geo: { lat: 40.4692, lng: 17.2470 }, priority: 1, highImpression: true, demonym: 'Tarantini', wave: 3 },
  { id: 'foggia', slug: 'foggia', name: 'Foggia', province: 'Foggia', region: 'Puglia', population: 151372, geo: { lat: 41.4622, lng: 15.5448 }, priority: 1, demonym: 'Foggiani', wave: 3 },
  { id: 'lecce', slug: 'lecce', name: 'Lecce', province: 'Lecce', region: 'Puglia', population: 95766, geo: { lat: 40.3515, lng: 18.1750 }, priority: 1, highImpression: true, demonym: 'Leccesi', wave: 3 },
  { id: 'brindisi', slug: 'brindisi', name: 'Brindisi', province: 'Brindisi', region: 'Puglia', population: 88005, geo: { lat: 40.6383, lng: 17.9459 }, priority: 1, demonym: 'Brindisini', wave: 3 },
  { id: 'barletta', slug: 'barletta', name: 'Barletta', province: 'Barletta-Andria-Trani', region: 'Puglia', population: 93869, geo: { lat: 41.3194, lng: 16.2831 }, priority: 2, demonym: 'Barlettani', wave: 3 },
  { id: 'andria', slug: 'andria', name: 'Andria', province: 'Barletta-Andria-Trani', region: 'Puglia', population: 98841, geo: { lat: 41.2253, lng: 16.2953 }, priority: 2, demonym: 'Andriesi', wave: 3 },
  { id: 'trani', slug: 'trani', name: 'Trani', province: 'Barletta-Andria-Trani', region: 'Puglia', population: 55486, geo: { lat: 41.2725, lng: 16.4161 }, priority: 2, demonym: 'Tranesi', wave: 3 },
  { id: 'bisceglie', slug: 'bisceglie', name: 'Bisceglie', province: 'Barletta-Andria-Trani', region: 'Puglia', population: 54133, geo: { lat: 41.2422, lng: 16.5031 }, priority: 2, demonym: 'Biscegliesi', wave: 3 },
  { id: 'altamura', slug: 'altamura', name: 'Altamura', province: 'Bari', region: 'Puglia', population: 70355, geo: { lat: 40.8256, lng: 16.5533 }, priority: 2, demonym: 'Altamurani', wave: 3 },
  { id: 'molfetta', slug: 'molfetta', name: 'Molfetta', province: 'Bari', region: 'Puglia', population: 58639, geo: { lat: 41.2006, lng: 16.5986 }, priority: 2, demonym: 'Molfettesi', wave: 3 },
  { id: 'cerignola', slug: 'cerignola', name: 'Cerignola', province: 'Foggia', region: 'Puglia', population: 57813, geo: { lat: 41.2650, lng: 15.8997 }, priority: 2, demonym: 'Cerignolani', wave: 3 },
  { id: 'manfredonia', slug: 'manfredonia', name: 'Manfredonia', province: 'Foggia', region: 'Puglia', population: 56318, geo: { lat: 41.6264, lng: 15.9089 }, priority: 2, demonym: 'Sipontini', wave: 3 },
  { id: 'bitonto', slug: 'bitonto', name: 'Bitonto', province: 'Bari', region: 'Puglia', population: 54414, geo: { lat: 41.1075, lng: 16.6917 }, priority: 2, demonym: 'Bitontini', wave: 3 },
  { id: 'san-severo', slug: 'san-severo', name: 'San Severo', province: 'Foggia', region: 'Puglia', population: 52479, geo: { lat: 41.6872, lng: 15.3789 }, priority: 2, demonym: 'Sanseveresi', wave: 3 },
  { id: 'monopoli', slug: 'monopoli', name: 'Monopoli', province: 'Bari', region: 'Puglia', population: 48679, geo: { lat: 40.9500, lng: 17.3000 }, priority: 2, demonym: 'Monopolitani', wave: 3 },
  { id: 'martina-franca', slug: 'martina-franca', name: 'Martina Franca', province: 'Taranto', region: 'Puglia', population: 48168, geo: { lat: 40.7056, lng: 17.3375 }, priority: 2, demonym: 'Martinesi', wave: 3 },
  { id: 'corato', slug: 'corato', name: 'Corato', province: 'Bari', region: 'Puglia', population: 47934, geo: { lat: 41.1472, lng: 16.4131 }, priority: 2, demonym: 'Coratini', wave: 3 },
];

// =============================================================================
// CALABRIA (Wave 4)
// =============================================================================

export const CALABRIA_LOCATIONS: Location[] = [
  { id: 'reggio-calabria', slug: 'reggio-calabria', name: 'Reggio Calabria', province: 'Reggio Calabria', region: 'Calabria', population: 179471, geo: { lat: 38.1144, lng: 15.6500 }, priority: 1, highImpression: true, demonym: 'Reggini', wave: 4 },
  { id: 'catanzaro', slug: 'catanzaro', name: 'Catanzaro', province: 'Catanzaro', region: 'Calabria', population: 88478, geo: { lat: 38.9098, lng: 16.5877 }, priority: 1, demonym: 'Catanzaresi', wave: 4 },
  { id: 'cosenza', slug: 'cosenza', name: 'Cosenza', province: 'Cosenza', region: 'Calabria', population: 66457, geo: { lat: 39.3028, lng: 16.2522 }, priority: 1, demonym: 'Cosentini', wave: 4 },
  { id: 'lamezia-terme', slug: 'lamezia-terme', name: 'Lamezia Terme', province: 'Catanzaro', region: 'Calabria', population: 70261, geo: { lat: 38.9667, lng: 16.3000 }, priority: 2, demonym: 'Lametini', wave: 4 },
  { id: 'crotone', slug: 'crotone', name: 'Crotone', province: 'Crotone', region: 'Calabria', population: 63039, geo: { lat: 39.0807, lng: 17.1264 }, priority: 2, demonym: 'Crotonesi', wave: 4 },
  { id: 'corigliano-rossano', slug: 'corigliano-rossano', name: 'Corigliano-Rossano', province: 'Cosenza', region: 'Calabria', population: 77220, geo: { lat: 39.5969, lng: 16.5194 }, priority: 2, demonym: 'Coriglianesi', wave: 4 },
  { id: 'vibo-valentia', slug: 'vibo-valentia', name: 'Vibo Valentia', province: 'Vibo Valentia', region: 'Calabria', population: 33265, geo: { lat: 38.6756, lng: 16.1028 }, priority: 2, demonym: 'Vibonesi', wave: 4 },
];

// =============================================================================
// BASILICATA (Wave 4)
// =============================================================================

export const BASILICATA_LOCATIONS: Location[] = [
  { id: 'potenza', slug: 'potenza', name: 'Potenza', province: 'Potenza', region: 'Basilicata', population: 66393, geo: { lat: 40.6386, lng: 15.8022 }, priority: 1, demonym: 'Potentini', wave: 4 },
  { id: 'matera', slug: 'matera', name: 'Matera', province: 'Matera', region: 'Basilicata', population: 60403, geo: { lat: 40.6664, lng: 16.6043 }, priority: 1, highImpression: true, demonym: 'Materani', wave: 4 },
];

// =============================================================================
// SICILIA (Wave 3)
// =============================================================================

export const SICILIA_LOCATIONS: Location[] = [
  { id: 'palermo', slug: 'palermo', name: 'Palermo', province: 'Palermo', region: 'Sicilia', population: 668405, geo: { lat: 38.1157, lng: 13.3615 }, priority: 1, highImpression: true, demonym: 'Palermitani', wave: 3 },
  { id: 'catania', slug: 'catania', name: 'Catania', province: 'Catania', region: 'Sicilia', population: 311584, geo: { lat: 37.5079, lng: 15.0830 }, priority: 1, highImpression: true, demonym: 'Catanesi', wave: 3 },
  { id: 'messina', slug: 'messina', name: 'Messina', province: 'Messina', region: 'Sicilia', population: 234293, geo: { lat: 38.1938, lng: 15.5540 }, priority: 1, highImpression: true, demonym: 'Messinesi', wave: 3 },
  { id: 'siracusa', slug: 'siracusa', name: 'Siracusa', province: 'Siracusa', region: 'Sicilia', population: 121605, geo: { lat: 37.0755, lng: 15.2866 }, priority: 1, demonym: 'Siracusani', wave: 3 },
  { id: 'marsala', slug: 'marsala', name: 'Marsala', province: 'Trapani', region: 'Sicilia', population: 82390, geo: { lat: 37.7981, lng: 12.4339 }, priority: 2, demonym: 'Marsalesi', wave: 3 },
  { id: 'gela', slug: 'gela', name: 'Gela', province: 'Caltanissetta', region: 'Sicilia', population: 74858, geo: { lat: 37.0664, lng: 14.2503 }, priority: 2, demonym: 'Gelesi', wave: 3 },
  { id: 'ragusa', slug: 'ragusa', name: 'Ragusa', province: 'Ragusa', region: 'Sicilia', population: 73943, geo: { lat: 36.9269, lng: 14.7255 }, priority: 2, demonym: 'Ragusani', wave: 3 },
  { id: 'trapani', slug: 'trapani', name: 'Trapani', province: 'Trapani', region: 'Sicilia', population: 67359, geo: { lat: 38.0174, lng: 12.5370 }, priority: 2, demonym: 'Trapanesi', wave: 3 },
  { id: 'vittoria', slug: 'vittoria', name: 'Vittoria', province: 'Ragusa', region: 'Sicilia', population: 63630, geo: { lat: 36.9511, lng: 14.5367 }, priority: 2, demonym: 'Vittoriesi', wave: 3 },
  { id: 'caltanissetta', slug: 'caltanissetta', name: 'Caltanissetta', province: 'Caltanissetta', region: 'Sicilia', population: 62797, geo: { lat: 37.4900, lng: 14.0622 }, priority: 2, demonym: 'Nisseni', wave: 3 },
  { id: 'agrigento', slug: 'agrigento', name: 'Agrigento', province: 'Agrigento', region: 'Sicilia', population: 59329, geo: { lat: 37.3111, lng: 13.5764 }, priority: 2, demonym: 'Agrigentini', wave: 3 },
  { id: 'bagheria', slug: 'bagheria', name: 'Bagheria', province: 'Palermo', region: 'Sicilia', population: 54620, geo: { lat: 38.0778, lng: 13.5139 }, priority: 2, demonym: 'Bagheresi', wave: 3 },
  { id: 'modica', slug: 'modica', name: 'Modica', province: 'Ragusa', region: 'Sicilia', population: 54332, geo: { lat: 36.8581, lng: 14.7614 }, priority: 2, demonym: 'Modicani', wave: 3 },
  { id: 'acireale', slug: 'acireale', name: 'Acireale', province: 'Catania', region: 'Sicilia', population: 52190, geo: { lat: 37.6125, lng: 15.1656 }, priority: 2, demonym: 'Acesi', wave: 3 },
  { id: 'mazara-del-vallo', slug: 'mazara-del-vallo', name: 'Mazara del Vallo', province: 'Trapani', region: 'Sicilia', population: 51488, geo: { lat: 37.6517, lng: 12.5897 }, priority: 2, demonym: 'Mazaresi', wave: 3 },
];

// =============================================================================
// SARDEGNA (Wave 4)
// =============================================================================

export const SARDEGNA_LOCATIONS: Location[] = [
  { id: 'cagliari', slug: 'cagliari', name: 'Cagliari', province: 'Cagliari', region: 'Sardegna', population: 154108, geo: { lat: 39.2238, lng: 9.1217 }, priority: 1, highImpression: true, demonym: 'Cagliaritani', wave: 4 },
  { id: 'sassari', slug: 'sassari', name: 'Sassari', province: 'Sassari', region: 'Sardegna', population: 127477, geo: { lat: 40.7259, lng: 8.5556 }, priority: 1, highImpression: true, demonym: 'Sassaresi', wave: 4 },
  { id: 'quartu-sant-elena', slug: 'quartu-sant-elena', name: "Quartu Sant'Elena", province: 'Cagliari', region: 'Sardegna', population: 71125, geo: { lat: 39.2495, lng: 9.1827 }, priority: 2, demonym: 'Quartesi', wave: 4 },
  { id: 'olbia', slug: 'olbia', name: 'Olbia', province: 'Sassari', region: 'Sardegna', population: 60031, geo: { lat: 40.9235, lng: 9.4964 }, priority: 2, demonym: 'Olbiensi', wave: 4 },
  { id: 'alghero', slug: 'alghero', name: 'Alghero', province: 'Sassari', region: 'Sardegna', population: 44019, geo: { lat: 40.5580, lng: 8.3190 }, priority: 2, demonym: 'Algheresi', wave: 4 },
  { id: 'nuoro', slug: 'nuoro', name: 'Nuoro', province: 'Nuoro', region: 'Sardegna', population: 35878, geo: { lat: 40.3213, lng: 9.3240 }, priority: 2, demonym: 'Nuoresi', wave: 4 },
  { id: 'oristano', slug: 'oristano', name: 'Oristano', province: 'Oristano', region: 'Sardegna', population: 31871, geo: { lat: 39.9062, lng: 8.5884 }, priority: 2, demonym: 'Oristanesi', wave: 4 },
];

// =============================================================================
// ADDITIONAL PROVINCE EXPANSION (Wave 2 & 3)
// =============================================================================

export const ADDITIONAL_LOCATIONS: Location[] = [
  // Lombardia extras
  { id: 'seregno', slug: 'seregno', name: 'Seregno', province: 'Monza e Brianza', region: 'Lombardia', population: 44645, geo: { lat: 45.6495, lng: 9.2030 }, priority: 3, demonym: 'Seregnesi', wave: 2 },
  { id: 'vimercate', slug: 'vimercate', name: 'Vimercate', province: 'Monza e Brianza', region: 'Lombardia', population: 25875, geo: { lat: 45.6167, lng: 9.3667 }, priority: 3, demonym: 'Vimercatesi', wave: 2 },
  { id: 'lissone', slug: 'lissone', name: 'Lissone', province: 'Monza e Brianza', region: 'Lombardia', population: 45527, geo: { lat: 45.6167, lng: 9.2500 }, priority: 3, demonym: 'Lissonesi', wave: 2 },
  { id: 'desio', slug: 'desio', name: 'Desio', province: 'Monza e Brianza', region: 'Lombardia', population: 41808, geo: { lat: 45.6167, lng: 9.2000 }, priority: 3, demonym: 'Desiesi', wave: 2 },
  { id: 'cesano-maderno', slug: 'cesano-maderno', name: 'Cesano Maderno', province: 'Monza e Brianza', region: 'Lombardia', population: 37078, geo: { lat: 45.6333, lng: 9.1500 }, priority: 3, demonym: 'Cesanesi', wave: 2 },
  { id: 'gallarate', slug: 'gallarate', name: 'Gallarate', province: 'Varese', region: 'Lombardia', population: 52857, geo: { lat: 45.6667, lng: 8.8000 }, priority: 2, demonym: 'Gallaratesi', wave: 2 },
  { id: 'busto-arsizio', slug: 'busto-arsizio', name: 'Busto Arsizio', province: 'Varese', region: 'Lombardia', population: 83315, geo: { lat: 45.6167, lng: 8.8500 }, priority: 1, demonym: 'Bustocchi', wave: 2 },
  { id: 'cinisello-balsamo', slug: 'cinisello-balsamo', name: 'Cinisello Balsamo', province: 'Milano', region: 'Lombardia', population: 74528, geo: { lat: 45.5586, lng: 9.2208 }, priority: 2, demonym: 'Cinisellesi', wave: 2 },
  { id: 'cremona', slug: 'cremona', name: 'Cremona', province: 'Cremona', region: 'Lombardia', population: 71533, geo: { lat: 45.1332, lng: 10.0227 }, priority: 2, demonym: 'Cremonesi', wave: 2 },
  { id: 'pavia', slug: 'pavia', name: 'Pavia', province: 'Pavia', region: 'Lombardia', population: 71142, geo: { lat: 45.1847, lng: 9.1582 }, priority: 2, demonym: 'Pavesi', wave: 2 },
  { id: 'vigevano', slug: 'vigevano', name: 'Vigevano', province: 'Pavia', region: 'Lombardia', population: 62620, geo: { lat: 45.3167, lng: 8.8500 }, priority: 2, demonym: 'Vigevanesi', wave: 2 },
  { id: 'legnano', slug: 'legnano', name: 'Legnano', province: 'Milano', region: 'Lombardia', population: 60481, geo: { lat: 45.6000, lng: 8.9167 }, priority: 2, demonym: 'Legnanesi', wave: 2 },
  { id: 'mantova', slug: 'mantova', name: 'Mantova', province: 'Mantova', region: 'Lombardia', population: 48653, geo: { lat: 45.1564, lng: 10.7914 }, priority: 2, demonym: 'Mantovani', wave: 2 },
  { id: 'lecco', slug: 'lecco', name: 'Lecco', province: 'Lecco', region: 'Lombardia', population: 47275, geo: { lat: 45.8558, lng: 9.3977 }, priority: 2, demonym: 'Lecchesi', wave: 2 },
  { id: 'lodi', slug: 'lodi', name: 'Lodi', province: 'Lodi', region: 'Lombardia', population: 44793, geo: { lat: 45.3136, lng: 9.5028 }, priority: 2, demonym: 'Lodigiani', wave: 2 },
  
  // Veneto extras  
  { id: 'mogliano-veneto', slug: 'mogliano-veneto', name: 'Mogliano Veneto', province: 'Treviso', region: 'Veneto', population: 28029, geo: { lat: 45.5608, lng: 12.2381 }, priority: 3, demonym: 'Mogianesi', wave: 2 },
  { id: 'conegliano', slug: 'conegliano', name: 'Conegliano', province: 'Treviso', region: 'Veneto', population: 34681, geo: { lat: 45.8875, lng: 12.2964 }, priority: 3, demonym: 'Coneglianesi', wave: 2 },
  { id: 'valdagno', slug: 'valdagno', name: 'Valdagno', province: 'Vicenza', region: 'Veneto', population: 26101, geo: { lat: 45.6436, lng: 11.2989 }, priority: 3, demonym: 'Valdagnesi', wave: 2 },
  { id: 'bassano-del-grappa', slug: 'bassano-del-grappa', name: 'Bassano del Grappa', province: 'Vicenza', region: 'Veneto', population: 43440, geo: { lat: 45.7653, lng: 11.7341 }, priority: 2, demonym: 'Bassanesi', wave: 2 },
  { id: 'schio', slug: 'schio', name: 'Schio', province: 'Vicenza', region: 'Veneto', population: 38898, geo: { lat: 45.7167, lng: 11.3667 }, priority: 3, demonym: 'Scledensi', wave: 2 },
  { id: 'chioggia', slug: 'chioggia', name: 'Chioggia', province: 'Venezia', region: 'Veneto', population: 50149, geo: { lat: 45.2186, lng: 12.2777 }, priority: 2, demonym: 'Clodiensi', wave: 2 },
  { id: 'san-dona-di-piave', slug: 'san-dona-di-piave', name: "San Donà di Piave", province: 'Venezia', region: 'Veneto', population: 41883, geo: { lat: 45.6292, lng: 12.5628 }, priority: 2, demonym: 'Sandonatesi', wave: 2 },
  { id: 'mira', slug: 'mira', name: 'Mira', province: 'Venezia', region: 'Veneto', population: 37737, geo: { lat: 45.4378, lng: 12.1311 }, priority: 2, demonym: 'Miresi', wave: 2 },
  { id: 'montebelluna', slug: 'montebelluna', name: 'Montebelluna', province: 'Treviso', region: 'Veneto', population: 31053, geo: { lat: 45.7753, lng: 12.0392 }, priority: 3, demonym: 'Montebellunesi', wave: 2 },
  { id: 'castelfranco-veneto', slug: 'castelfranco-veneto', name: 'Castelfranco Veneto', province: 'Treviso', region: 'Veneto', population: 33435, geo: { lat: 45.6711, lng: 11.9272 }, priority: 2, demonym: 'Castellani', wave: 2 },
  { id: 'vittorio-veneto', slug: 'vittorio-veneto', name: 'Vittorio Veneto', province: 'Treviso', region: 'Veneto', population: 27479, geo: { lat: 45.9817, lng: 12.2961 }, priority: 3, demonym: 'Vittoriesi', wave: 2 },
  { id: 'arzignano', slug: 'arzignano', name: 'Arzignano', province: 'Vicenza', region: 'Veneto', population: 25143, geo: { lat: 45.5217, lng: 11.3361 }, priority: 3, demonym: 'Arzignanesi', wave: 2 },
  
  // Emilia-Romagna extras (mostly Wave 1 & 2)
  { id: 'cento', slug: 'cento', name: 'Cento', province: 'Ferrara', region: 'Emilia-Romagna', population: 35733, geo: { lat: 44.7259, lng: 11.2864 }, priority: 3, demonym: 'Centesi', wave: 1 },
  { id: 'bondeno', slug: 'bondeno', name: 'Bondeno', province: 'Ferrara', region: 'Emilia-Romagna', population: 14803, geo: { lat: 44.8859, lng: 11.4180 }, priority: 3, demonym: 'Bondenesi', wave: 1 },
  { id: 'copparo', slug: 'copparo', name: 'Copparo', province: 'Ferrara', region: 'Emilia-Romagna', population: 16481, geo: { lat: 44.8925, lng: 11.8267 }, priority: 3, demonym: 'Copparini', wave: 1 },
  { id: 'argenta', slug: 'argenta', name: 'Argenta', province: 'Ferrara', region: 'Emilia-Romagna', population: 22259, geo: { lat: 44.6144, lng: 11.8333 }, priority: 3, demonym: 'Argentani', wave: 1 },
  { id: 'medicina', slug: 'medicina', name: 'Medicina', province: 'Bologna', region: 'Emilia-Romagna', population: 16707, geo: { lat: 44.4769, lng: 11.6386 }, priority: 3, demonym: 'Medicinesi', wave: 1 },
  { id: 'castel-san-pietro-terme', slug: 'castel-san-pietro-terme', name: 'Castel San Pietro Terme', province: 'Bologna', region: 'Emilia-Romagna', population: 20884, geo: { lat: 44.3997, lng: 11.5883 }, priority: 3, demonym: 'Castellani', wave: 1 },
  { id: 'castel-maggiore', slug: 'castel-maggiore', name: 'Castel Maggiore', province: 'Bologna', region: 'Emilia-Romagna', population: 18874, geo: { lat: 44.5772, lng: 11.3672 }, priority: 3, demonym: 'Castellani', wave: 1 },
  { id: 'san-lazzaro-di-savena', slug: 'san-lazzaro-di-savena', name: 'San Lazzaro di Savena', province: 'Bologna', region: 'Emilia-Romagna', population: 32394, geo: { lat: 44.4708, lng: 11.4125 }, priority: 3, demonym: 'Sanlazzaresi', wave: 1 },
  { id: 'pianoro', slug: 'pianoro', name: 'Pianoro', province: 'Bologna', region: 'Emilia-Romagna', population: 18847, geo: { lat: 44.3917, lng: 11.3425 }, priority: 3, demonym: 'Pianoresi', wave: 1 },
  { id: 'castel-guelfo-di-bologna', slug: 'castel-guelfo-di-bologna', name: 'Castel Guelfo di Bologna', province: 'Bologna', region: 'Emilia-Romagna', population: 4591, geo: { lat: 44.4333, lng: 11.6833 }, priority: 3, demonym: 'Castellani', wave: 1 },
  { id: 'granarolo-dell-emilia', slug: 'granarolo-dell-emilia', name: "Granarolo dell'Emilia", province: 'Bologna', region: 'Emilia-Romagna', population: 11899, geo: { lat: 44.5547, lng: 11.4422 }, priority: 3, demonym: 'Granarolesi', wave: 1 },
  { id: 'fidenza', slug: 'fidenza', name: 'Fidenza', province: 'Parma', region: 'Emilia-Romagna', population: 26976, geo: { lat: 44.8667, lng: 10.0667 }, priority: 2, demonym: 'Fidentini', wave: 1 },
  { id: 'salsomaggiore-terme', slug: 'salsomaggiore-terme', name: 'Salsomaggiore Terme', province: 'Parma', region: 'Emilia-Romagna', population: 19877, geo: { lat: 44.8167, lng: 9.9833 }, priority: 3, demonym: 'Salsesi', wave: 1 },
  { id: 'collecchio', slug: 'collecchio', name: 'Collecchio', province: 'Parma', region: 'Emilia-Romagna', population: 14595, geo: { lat: 44.7500, lng: 10.2167 }, priority: 3, demonym: 'Collecchiesi', wave: 1 },
  
  // Toscana extras (Wave 2)
  { id: 'carrara', slug: 'carrara', name: 'Carrara', province: 'Massa-Carrara', region: 'Toscana', population: 62134, geo: { lat: 44.0779, lng: 10.0978 }, priority: 2, demonym: 'Carraresi', wave: 2 },
  { id: 'massa', slug: 'massa', name: 'Massa', province: 'Massa-Carrara', region: 'Toscana', population: 68946, geo: { lat: 44.0357, lng: 10.1397 }, priority: 2, demonym: 'Massesi', wave: 2 },
  { id: 'empoli', slug: 'empoli', name: 'Empoli', province: 'Firenze', region: 'Toscana', population: 48996, geo: { lat: 43.7179, lng: 10.9446 }, priority: 2, demonym: 'Empolesi', wave: 2 },
  { id: 'scandicci', slug: 'scandicci', name: 'Scandicci', province: 'Firenze', region: 'Toscana', population: 50912, geo: { lat: 43.7554, lng: 11.1867 }, priority: 2, demonym: 'Scandiccesi', wave: 2 },
  { id: 'campi-bisenzio', slug: 'campi-bisenzio', name: 'Campi Bisenzio', province: 'Firenze', region: 'Toscana', population: 46720, geo: { lat: 43.8214, lng: 11.1339 }, priority: 3, demonym: 'Campigiani', wave: 2 },
  { id: 'bagno-a-ripoli', slug: 'bagno-a-ripoli', name: 'Bagno a Ripoli', province: 'Firenze', region: 'Toscana', population: 25271, geo: { lat: 43.75, lng: 11.3167 }, priority: 3, demonym: 'Bagnesi', wave: 2 },
  { id: 'calenzano', slug: 'calenzano', name: 'Calenzano', province: 'Firenze', region: 'Toscana', population: 17743, geo: { lat: 43.8567, lng: 11.1667 }, priority: 3, demonym: 'Calenzanesi', wave: 2 },
  { id: 'lastra-a-signa', slug: 'lastra-a-signa', name: 'Lastra a Signa', province: 'Firenze', region: 'Toscana', population: 20252, geo: { lat: 43.7692, lng: 11.1064 }, priority: 3, demonym: 'Lastrigiani', wave: 2 },
  { id: 'montelupo-fiorentino', slug: 'montelupo-fiorentino', name: 'Montelupo Fiorentino', province: 'Firenze', region: 'Toscana', population: 14414, geo: { lat: 43.7333, lng: 11.0167 }, priority: 3, demonym: 'Montelupesi', wave: 2 },
  { id: 'poggibonsi', slug: 'poggibonsi', name: 'Poggibonsi', province: 'Siena', region: 'Toscana', population: 29175, geo: { lat: 43.4667, lng: 11.1500 }, priority: 3, demonym: 'Poggibonsesi', wave: 2 },
  { id: 'colle-di-val-d-elsa', slug: 'colle-di-val-d-elsa', name: "Colle di Val d'Elsa", province: 'Siena', region: 'Toscana', population: 21937, geo: { lat: 43.4233, lng: 11.1261 }, priority: 3, demonym: 'Collesani', wave: 2 },
  { id: 'montevarchi', slug: 'montevarchi', name: 'Montevarchi', province: 'Arezzo', region: 'Toscana', population: 24306, geo: { lat: 43.5239, lng: 11.5686 }, priority: 3, demonym: 'Montevarchini', wave: 2 },
  { id: 'san-giovanni-valdarno', slug: 'san-giovanni-valdarno', name: 'San Giovanni Valdarno', province: 'Arezzo', region: 'Toscana', population: 16812, geo: { lat: 43.5619, lng: 11.5328 }, priority: 3, demonym: 'Sangiovannesi', wave: 2 },
  { id: 'foiano-della-chiana', slug: 'foiano-della-chiana', name: 'Foiano della Chiana', province: 'Arezzo', region: 'Toscana', population: 9668, geo: { lat: 43.2553, lng: 11.8164 }, priority: 3, demonym: 'Foianesi', wave: 2 },
  { id: 'castiglion-fiorentino', slug: 'castiglion-fiorentino', name: 'Castiglion Fiorentino', province: 'Arezzo', region: 'Toscana', population: 13202, geo: { lat: 43.3433, lng: 11.9183 }, priority: 3, demonym: 'Castiglionesi', wave: 2 },
  
  // Romagna extras (Wave 1)
  { id: 'bagnacavallo', slug: 'bagnacavallo', name: 'Bagnacavallo', province: 'Ravenna', region: 'Emilia-Romagna', population: 16717, geo: { lat: 44.4167, lng: 11.9833 }, priority: 3, demonym: 'Bagnacavallesi', wave: 1 },
  { id: 'faenza', slug: 'faenza', name: 'Faenza', province: 'Ravenna', region: 'Emilia-Romagna', population: 58908, geo: { lat: 44.2833, lng: 11.8833 }, priority: 2, demonym: 'Faventini', wave: 1 },
  { id: 'lugo', slug: 'lugo', name: 'Lugo', province: 'Ravenna', region: 'Emilia-Romagna', population: 32380, geo: { lat: 44.4167, lng: 11.9167 }, priority: 3, demonym: 'Lughesi', wave: 1 },
  { id: 'russii', slug: 'russii', name: 'Russi', province: 'Ravenna', region: 'Emilia-Romagna', population: 12387, geo: { lat: 44.3833, lng: 12.0333 }, priority: 3, demonym: 'Russesi', wave: 1 },
  { id: 'cotignola', slug: 'cotignola', name: 'Cotignola', province: 'Ravenna', region: 'Emilia-Romagna', population: 7449, geo: { lat: 44.3833, lng: 11.9333 }, priority: 3, demonym: 'Cotignolesi', wave: 1 },
  { id: 'fusignano', slug: 'fusignano', name: 'Fusignano', province: 'Ravenna', region: 'Emilia-Romagna', population: 8181, geo: { lat: 44.4667, lng: 11.9500 }, priority: 3, demonym: 'Fusignanesi', wave: 1 },
  { id: 'alfonsine', slug: 'alfonsine', name: 'Alfonsine', province: 'Ravenna', region: 'Emilia-Romagna', population: 12078, geo: { lat: 44.5000, lng: 12.0333 }, priority: 3, demonym: 'Alfonsinesi', wave: 1 },
  { id: 'solarolo', slug: 'solarolo', name: 'Solarolo', province: 'Ravenna', region: 'Emilia-Romagna', population: 4253, geo: { lat: 44.3667, lng: 11.8500 }, priority: 3, demonym: 'Solarolesi', wave: 1 },
  { id: 'castel-bolognese', slug: 'castel-bolognese', name: 'Castel Bolognese', province: 'Ravenna', region: 'Emilia-Romagna', population: 9578, geo: { lat: 44.3167, lng: 11.8000 }, priority: 3, demonym: 'Castellani', wave: 1 },
  { id: 'cervia', slug: 'cervia', name: 'Cervia', province: 'Ravenna', region: 'Emilia-Romagna', population: 28252, geo: { lat: 44.2636, lng: 12.3508 }, priority: 2, demonym: 'Cervesi', wave: 1 },
  { id: 'cesenatico', slug: 'cesenatico', name: 'Cesenatico', province: 'Forlì-Cesena', region: 'Emilia-Romagna', population: 25921, geo: { lat: 44.2000, lng: 12.4000 }, priority: 2, demonym: 'Cesenaticesi', wave: 1 },
  { id: 'savignano-sul-rubicone', slug: 'savignano-sul-rubicone', name: 'Savignano sul Rubicone', province: 'Forlì-Cesena', region: 'Emilia-Romagna', population: 17823, geo: { lat: 44.0917, lng: 12.3917 }, priority: 3, demonym: 'Savignanesi', wave: 1 },
  { id: 'riccione', slug: 'riccione', name: 'Riccione', province: 'Rimini', region: 'Emilia-Romagna', population: 34568, geo: { lat: 44.0000, lng: 12.6500 }, priority: 2, demonym: 'Riccionesi', wave: 1 },
  { id: 'santarcangelo-di-romagna', slug: 'santarcangelo-di-romagna', name: 'Santarcangelo di Romagna', province: 'Rimini', region: 'Emilia-Romagna', population: 22148, geo: { lat: 44.0667, lng: 12.4500 }, priority: 3, demonym: 'Santarcangiolesi', wave: 1 },
  { id: 'cattolica', slug: 'cattolica', name: 'Cattolica', province: 'Rimini', region: 'Emilia-Romagna', population: 16733, geo: { lat: 43.9667, lng: 12.7500 }, priority: 2, demonym: 'Cattolichini', wave: 1 },
  { id: 'bellaria-igea-marina', slug: 'bellaria-igea-marina', name: 'Bellaria-Igea Marina', province: 'Rimini', region: 'Emilia-Romagna', population: 19454, geo: { lat: 44.1500, lng: 12.4667 }, priority: 3, demonym: 'Bellariesi', wave: 1 },
  
  // Modena extras (Wave 1)
  { id: 'pavullo-nel-frignano', slug: 'pavullo-nel-frignano', name: 'Pavullo nel Frignano', province: 'Modena', region: 'Emilia-Romagna', population: 17884, geo: { lat: 44.3333, lng: 10.8333 }, priority: 3, demonym: 'Pavullesi', wave: 1 },
  { id: 'fanano', slug: 'fanano', name: 'Fanano', province: 'Modena', region: 'Emilia-Romagna', population: 3047, geo: { lat: 44.2167, lng: 10.7833 }, priority: 3, demonym: 'Fananesi', wave: 1 },
  { id: 'montecreto', slug: 'montecreto', name: 'Montecreto', province: 'Modena', region: 'Emilia-Romagna', population: 935, geo: { lat: 44.2667, lng: 10.7167 }, priority: 3, demonym: 'Montecretesi', wave: 1 },
  { id: 'serramazzoni', slug: 'serramazzoni', name: 'Serramazzoni', province: 'Modena', region: 'Emilia-Romagna', population: 8275, geo: { lat: 44.4167, lng: 10.7833 }, priority: 3, demonym: 'Serramazzonesi', wave: 1 },
  { id: 'maranello', slug: 'maranello', name: 'Maranello', province: 'Modena', region: 'Emilia-Romagna', population: 17643, geo: { lat: 44.5333, lng: 10.8667 }, priority: 2, highImpression: true, demonym: 'Maranellesi', landmarks: ['Museo Ferrari', 'Autodromo'], famousFor: 'i motori Ferrari', wave: 1 },
  { id: 'formigine', slug: 'formigine', name: 'Formigine', province: 'Modena', region: 'Emilia-Romagna', population: 34336, geo: { lat: 44.5667, lng: 10.8500 }, priority: 2, highImpression: true, demonym: 'Formiginesi', wave: 1 },
  { id: 'castelnuovo-rangone', slug: 'castelnuovo-rangone', name: 'Castelnuovo Rangone', province: 'Modena', region: 'Emilia-Romagna', population: 14758, geo: { lat: 44.5500, lng: 10.9333 }, priority: 3, demonym: 'Castelnovesi', wave: 1 },
  { id: 'spilamberto', slug: 'spilamberto', name: 'Spilamberto', province: 'Modena', region: 'Emilia-Romagna', population: 12507, geo: { lat: 44.5333, lng: 11.0167 }, priority: 2, highImpression: true, demonym: 'Spilambertesi', wave: 1 },
  { id: 'vignola', slug: 'vignola', name: 'Vignola', province: 'Modena', region: 'Emilia-Romagna', population: 25466, geo: { lat: 44.4833, lng: 11.0000 }, priority: 2, highImpression: true, demonym: 'Vignolesi', wave: 1 },
  { id: 'castelfranco-emilia', slug: 'castelfranco-emilia', name: 'Castelfranco Emilia', province: 'Modena', region: 'Emilia-Romagna', population: 33169, geo: { lat: 44.6000, lng: 11.0500 }, priority: 2, highImpression: true, demonym: 'Castelfranchesi', wave: 1 },
  { id: 'nonantola', slug: 'nonantola', name: 'Nonantola', province: 'Modena', region: 'Emilia-Romagna', population: 15790, geo: { lat: 44.6833, lng: 11.0333 }, priority: 3, demonym: 'Nonantolani', wave: 1 },
  { id: 'soliera', slug: 'soliera', name: 'Soliera', province: 'Modena', region: 'Emilia-Romagna', population: 15376, geo: { lat: 44.7333, lng: 10.9167 }, priority: 3, demonym: 'Solieresi', wave: 1 },
  { id: 'bastiglia', slug: 'bastiglia', name: 'Bastiglia', province: 'Modena', region: 'Emilia-Romagna', population: 4178, geo: { lat: 44.7167, lng: 10.9833 }, priority: 3, demonym: 'Bastigliesi', wave: 1 },
  { id: 'bomporto', slug: 'bomporto', name: 'Bomporto', province: 'Modena', region: 'Emilia-Romagna', population: 10018, geo: { lat: 44.7333, lng: 11.0500 }, priority: 3, demonym: 'Bomportesi', wave: 1 },
  { id: 'medolla', slug: 'medolla', name: 'Medolla', province: 'Modena', region: 'Emilia-Romagna', population: 6389, geo: { lat: 44.8500, lng: 11.1667 }, priority: 3, demonym: 'Medolesi', wave: 1 },
  { id: 'san-felice-sul-panaro', slug: 'san-felice-sul-panaro', name: 'San Felice sul Panaro', province: 'Modena', region: 'Emilia-Romagna', population: 11126, geo: { lat: 44.8333, lng: 11.1333 }, priority: 3, demonym: 'Sanfeliciani', wave: 1 },
  { id: 'mirandola', slug: 'mirandola', name: 'Mirandola', province: 'Modena', region: 'Emilia-Romagna', population: 23893, geo: { lat: 44.8833, lng: 11.0667 }, priority: 2, highImpression: true, demonym: 'Mirandolesi', wave: 1 },
  { id: 'concordia-sulla-secchia', slug: 'concordia-sulla-secchia', name: 'Concordia sulla Secchia', province: 'Modena', region: 'Emilia-Romagna', population: 8695, geo: { lat: 44.9167, lng: 11.1333 }, priority: 3, demonym: 'Concordiesi', wave: 1 },
  { id: 'san-prospero', slug: 'san-prospero', name: 'San Prospero', province: 'Modena', region: 'Emilia-Romagna', population: 5795, geo: { lat: 44.7833, lng: 11.0333 }, priority: 3, demonym: 'Sanprosperesi', wave: 1 },
  { id: 'carpi', slug: 'carpi', name: 'Carpi', province: 'Modena', region: 'Emilia-Romagna', population: 71836, geo: { lat: 44.7833, lng: 10.8851 }, priority: 1, highImpression: true, demonym: 'Carpigiani', wave: 1 },
  { id: 'campogalliano', slug: 'campogalliano', name: 'Campogalliano', province: 'Modena', region: 'Emilia-Romagna', population: 8820, geo: { lat: 44.6833, lng: 10.8500 }, priority: 3, demonym: 'Campogallianesi', wave: 1 },
  { id: 'correggio', slug: 'correggio', name: 'Correggio', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 25630, geo: { lat: 44.7667, lng: 10.8333 }, priority: 2, demonym: 'Correggesi', wave: 1 },
  { id: 'scandiano', slug: 'scandiano', name: 'Scandiano', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 25282, geo: { lat: 44.6000, lng: 10.6833 }, priority: 2, demonym: 'Scandianesi', wave: 1 },
  { id: 'rubiera', slug: 'rubiera', name: 'Rubiera', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 14850, geo: { lat: 44.6500, lng: 10.7833 }, priority: 3, demonym: 'Rubieresi', wave: 1 },
  { id: 'guastalla', slug: 'guastalla', name: 'Guastalla', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 15039, geo: { lat: 44.9167, lng: 10.6500 }, priority: 3, demonym: 'Guastallesi', wave: 1 },
  { id: 'novellara', slug: 'novellara', name: 'Novellara', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 13759, geo: { lat: 44.8500, lng: 10.7333 }, priority: 3, demonym: 'Novellaresi', wave: 1 },
  { id: 'bagnolo-in-piano', slug: 'bagnolo-in-piano', name: 'Bagnolo in Piano', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 9667, geo: { lat: 44.7667, lng: 10.6833 }, priority: 3, demonym: 'Bagnolesi', wave: 1 },
  { id: 'cavriago', slug: 'cavriago', name: 'Cavriago', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 9826, geo: { lat: 44.6833, lng: 10.5167 }, priority: 3, demonym: 'Cavriaghesi', wave: 1 },
  { id: 'poviglio', slug: 'poviglio', name: 'Poviglio', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 7298, geo: { lat: 44.8333, lng: 10.5500 }, priority: 3, demonym: 'Povigliesi', wave: 1 },
  { id: 'bibbiano', slug: 'bibbiano', name: 'Bibbiano', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 10403, geo: { lat: 44.6667, lng: 10.4667 }, priority: 3, demonym: 'Bibbianesi', wave: 1 },
  { id: 'montecchio-emilia', slug: 'montecchio-emilia', name: 'Montecchio Emilia', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 10637, geo: { lat: 44.7000, lng: 10.4500 }, priority: 3, demonym: 'Montecchiesi', wave: 1 },
  { id: 'canossa', slug: 'canossa', name: 'Canossa', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 3880, geo: { lat: 44.5833, lng: 10.4167 }, priority: 3, demonym: 'Canossiani', wave: 1 },
  { id: 'vezzano-sul-crostolo', slug: 'vezzano-sul-crostolo', name: 'Vezzano sul Crostolo', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 4282, geo: { lat: 44.6000, lng: 10.5500 }, priority: 3, demonym: 'Vezzanesi', wave: 1 },
  { id: 'albinea', slug: 'albinea', name: 'Albinea', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 8853, geo: { lat: 44.6167, lng: 10.6000 }, priority: 3, demonym: 'Albineesi', wave: 1 },
  { id: 'quattro-castella', slug: 'quattro-castella', name: 'Quattro Castella', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 13227, geo: { lat: 44.6000, lng: 10.4667 }, priority: 3, demonym: 'Quattrocastellani', wave: 1 },
  { id: 'sant-ilario-d-enza', slug: 'sant-ilario-d-enza', name: "Sant'Ilario d'Enza", province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 11134, geo: { lat: 44.7667, lng: 10.4500 }, priority: 3, demonym: 'Santilariesi', wave: 1 },
  { id: 'gattatico', slug: 'gattatico', name: 'Gattatico', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 5836, geo: { lat: 44.8000, lng: 10.4833 }, priority: 3, demonym: 'Gattatichesi', wave: 1 },
  { id: 'cadelbosco-di-sopra', slug: 'cadelbosco-di-sopra', name: 'Cadelbosco di Sopra', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 10690, geo: { lat: 44.7667, lng: 10.6167 }, priority: 3, demonym: 'Cadelboschesi', wave: 1 },
];

// Export all additional locations
export const ALL_ADDITIONAL_LOCATIONS: Location[] = [
  ...PIEMONTE_LOCATIONS,
  ...LIGURIA_LOCATIONS,
  ...FRIULI_LOCATIONS,
  ...TRENTINO_LOCATIONS,
  ...VALLE_AOSTA_LOCATIONS,
  ...MARCHE_LOCATIONS,
  ...LAZIO_LOCATIONS,
  ...ABRUZZO_LOCATIONS,
  ...MOLISE_LOCATIONS,
  ...CAMPANIA_LOCATIONS,
  ...PUGLIA_LOCATIONS,
  ...BASILICATA_LOCATIONS,
  ...CALABRIA_LOCATIONS,
  ...SICILIA_LOCATIONS,
  ...SARDEGNA_LOCATIONS,
  ...ADDITIONAL_LOCATIONS,
];
