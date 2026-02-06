/**
 * ADDITIONAL LOCATIONS - EXPANSION TO 500+ CITIES
 * 
 * This file contains additional cities for programmatic SEO scaling.
 * Import and merge with main locations.ts
 */

import { Location, Province } from './locations';

// =============================================================================
// PIEMONTE (Additional Cities)
// =============================================================================

export const PIEMONTE_LOCATIONS: Location[] = [
  // Province di Torino
  { id: 'torino', slug: 'torino', name: 'Torino', province: 'Torino', region: 'Piemonte', population: 886837, geo: { lat: 45.0703, lng: 7.6869 }, priority: 1, highImpression: true, demonym: 'Torinesi' },
  { id: 'novara', slug: 'novara', name: 'Novara', province: 'Novara', region: 'Piemonte', population: 104183, geo: { lat: 45.4455, lng: 8.6222 }, priority: 1, demonym: 'Novaresi' },
  { id: 'alessandria', slug: 'alessandria', name: 'Alessandria', province: 'Alessandria', region: 'Piemonte', population: 94207, geo: { lat: 44.9127, lng: 8.6165 }, priority: 2, demonym: 'Alessandrini' },
  { id: 'asti', slug: 'asti', name: 'Asti', province: 'Asti', region: 'Piemonte', population: 76223, geo: { lat: 44.9007, lng: 8.2067 }, priority: 2, demonym: 'Astigiani' },
  { id: 'moncalieri', slug: 'moncalieri', name: 'Moncalieri', province: 'Torino', region: 'Piemonte', population: 58231, geo: { lat: 45.0031, lng: 7.6920 }, priority: 2, demonym: 'Moncalieresi' },
  { id: 'cuneo', slug: 'cuneo', name: 'Cuneo', province: 'Cuneo', region: 'Piemonte', population: 56599, geo: { lat: 44.3845, lng: 7.5428 }, priority: 2, demonym: 'Cuneesi' },
  { id: 'collegno', slug: 'collegno', name: 'Collegno', province: 'Torino', region: 'Piemonte', population: 49551, geo: { lat: 45.0782, lng: 7.5762 }, priority: 2, demonym: 'Collegnesi' },
  { id: 'rivoli', slug: 'rivoli', name: 'Rivoli', province: 'Torino', region: 'Piemonte', population: 48797, geo: { lat: 45.0706, lng: 7.5261 }, priority: 2, demonym: 'Rivolesi' },
  { id: 'vercelli', slug: 'vercelli', name: 'Vercelli', province: 'Vercelli', region: 'Piemonte', population: 46511, geo: { lat: 45.3202, lng: 8.4183 }, priority: 2, demonym: 'Vercellesi' },
  { id: 'biella', slug: 'biella', name: 'Biella', province: 'Biella', region: 'Piemonte', population: 44208, geo: { lat: 45.5628, lng: 8.0570 }, priority: 2, demonym: 'Biellesi' },
  { id: 'settimo-torinese', slug: 'settimo-torinese', name: 'Settimo Torinese', province: 'Torino', region: 'Piemonte', population: 47561, geo: { lat: 45.1341, lng: 7.7668 }, priority: 2, demonym: 'Settimesi' },
  { id: 'grugliasco', slug: 'grugliasco', name: 'Grugliasco', province: 'Torino', region: 'Piemonte', population: 37598, geo: { lat: 45.0686, lng: 7.5767 }, priority: 3, demonym: 'Grugliaschese' },
  { id: 'chivasso', slug: 'chivasso', name: 'Chivasso', province: 'Torino', region: 'Piemonte', population: 26609, geo: { lat: 45.1923, lng: 7.8898 }, priority: 3, demonym: 'Chivassesi' },
  { id: 'pinerolo', slug: 'pinerolo', name: 'Pinerolo', province: 'Torino', region: 'Piemonte', population: 35871, geo: { lat: 44.8872, lng: 7.3323 }, priority: 3, demonym: 'Pinerolesi' },
  { id: 'venaria-reale', slug: 'venaria-reale', name: 'Venaria Reale', province: 'Torino', region: 'Piemonte', population: 33779, geo: { lat: 45.1232, lng: 7.6307 }, priority: 3, demonym: 'Venariesi' },
  { id: 'racconigi', slug: 'racconigi', name: 'Racconigi', province: 'Cuneo', region: 'Piemonte', population: 10023, geo: { lat: 44.7686, lng: 7.6787 }, priority: 3, demonym: 'Racconigesi' },
  { id: 'alba', slug: 'alba', name: 'Alba', province: 'Cuneo', region: 'Piemonte', population: 31967, geo: { lat: 44.6990, lng: 8.0354 }, priority: 3, demonym: 'Albesi' },
  { id: 'bra', slug: 'bra', name: 'Bra', province: 'Cuneo', region: 'Piemonte', population: 29810, geo: { lat: 44.6984, lng: 7.8517 }, priority: 3, demonym: 'Brasini' },
  { id: 'fossano', slug: 'fossano', name: 'Fossano', province: 'Cuneo', region: 'Piemonte', population: 24628, geo: { lat: 44.5505, lng: 7.7291 }, priority: 3, demonym: 'Fossanesi' },
  { id: 'savigliano', slug: 'savigliano', name: 'Savigliano', province: 'Cuneo', region: 'Piemonte', population: 21433, geo: { lat: 44.6476, lng: 7.6681 }, priority: 3, demonym: 'Saviglianesi' },
];

// =============================================================================
// LIGURIA
// =============================================================================

export const LIGURIA_LOCATIONS: Location[] = [
  { id: 'genova', slug: 'genova', name: 'Genova', province: 'Genova', region: 'Liguria', population: 586180, geo: { lat: 44.4056, lng: 8.9463 }, priority: 1, highImpression: true, demonym: 'Genovesi' },
  { id: 'la-spezia', slug: 'la-spezia', name: 'La Spezia', province: 'La Spezia', region: 'Liguria', population: 93448, geo: { lat: 44.1024, lng: 9.8241 }, priority: 1, demonym: 'Spezzini' },
  { id: 'savona', slug: 'savona', name: 'Savona', province: 'Savona', region: 'Liguria', population: 61001, geo: { lat: 44.3080, lng: 8.3740 }, priority: 2, demonym: 'Savonesi' },
  { id: 'sanremo', slug: 'sanremo', name: 'Sanremo', province: 'Imperia', region: 'Liguria', population: 56905, geo: { lat: 43.8158, lng: 7.7761 }, priority: 2, demonym: 'Sanremesi' },
  { id: 'imperia', slug: 'imperia', name: 'Imperia', province: 'Imperia', region: 'Liguria', population: 42329, geo: { lat: 43.8870, lng: 8.0299 }, priority: 2, demonym: 'Imperiesi' },
  { id: 'rapallo', slug: 'rapallo', name: 'Rapallo', province: 'Genova', region: 'Liguria', population: 29711, geo: { lat: 44.3515, lng: 9.2283 }, priority: 3, demonym: 'Rapallese' },
  { id: 'chiavari', slug: 'chiavari', name: 'Chiavari', province: 'Genova', region: 'Liguria', population: 27569, geo: { lat: 44.3176, lng: 9.3234 }, priority: 3, demonym: 'Chiavaresi' },
  { id: 'ventimiglia', slug: 'ventimiglia', name: 'Ventimiglia', province: 'Imperia', region: 'Liguria', population: 25576, geo: { lat: 43.7914, lng: 7.6079 }, priority: 3, demonym: 'Ventimigliesi' },
  { id: 'alassio', slug: 'alassio', name: 'Alassio', province: 'Savona', region: 'Liguria', population: 11074, geo: { lat: 44.0082, lng: 8.1713 }, priority: 3, demonym: 'Alassini' },
  { id: 'albenga', slug: 'albenga', name: 'Albenga', province: 'Savona', region: 'Liguria', population: 24336, geo: { lat: 44.0497, lng: 8.2131 }, priority: 3, demonym: 'Albenganesi' },
  { id: 'varazze', slug: 'varazze', name: 'Varazze', province: 'Savona', region: 'Liguria', population: 13174, geo: { lat: 44.3592, lng: 8.5747 }, priority: 3, demonym: 'Varazzini' },
  { id: 'cogoleto', slug: 'cogoleto', name: 'Cogoleto', province: 'Genova', region: 'Liguria', population: 9120, geo: { lat: 44.3895, lng: 8.6463 }, priority: 3, demonym: 'Cogoletesi' },
];

// =============================================================================
// FRIULI VENEZIA GIULIA
// =============================================================================

export const FRIULI_LOCATIONS: Location[] = [
  { id: 'trieste', slug: 'trieste', name: 'Trieste', province: 'Trieste', region: 'Friuli Venezia Giulia', population: 204849, geo: { lat: 45.6495, lng: 13.7768 }, priority: 1, highImpression: true, demonym: 'Triestini' },
  { id: 'udine', slug: 'udine', name: 'Udine', province: 'Udine', region: 'Friuli Venezia Giulia', population: 99778, geo: { lat: 46.0711, lng: 13.2346 }, priority: 1, demonym: 'Udinesi' },
  { id: 'pordenone', slug: 'pordenone', name: 'Pordenone', province: 'Pordenone', region: 'Friuli Venezia Giulia', population: 51808, geo: { lat: 45.9564, lng: 12.6592 }, priority: 2, demonym: 'Pordenonesi' },
  { id: 'gorizia', slug: 'gorizia', name: 'Gorizia', province: 'Gorizia', region: 'Friuli Venezia Giulia', population: 34403, geo: { lat: 45.9409, lng: 13.6220 }, priority: 2, demonym: 'Goriziani' },
  { id: 'sacile', slug: 'sacile', name: 'Sacile', province: 'Pordenone', region: 'Friuli Venezia Giulia', population: 19971, geo: { lat: 45.9542, lng: 12.5031 }, priority: 3, demonym: 'Sacilesi' },
  { id: 'codroipo', slug: 'codroipo', name: 'Codroipo', province: 'Udine', region: 'Friuli Venezia Giulia', population: 16027, geo: { lat: 45.9614, lng: 13.1594 }, priority: 3, demonym: 'Codroipesi' },
  { id: 'tavagnacco', slug: 'tavagnacco', name: 'Tavagnacco', province: 'Udine', region: 'Friuli Venezia Giulia', population: 14628, geo: { lat: 46.0889, lng: 13.2167 }, priority: 3, demonym: 'Tavagnacchesi' },
  { id: 'cordenons', slug: 'cordenons', name: 'Cordenons', province: 'Pordenone', region: 'Friuli Venezia Giulia', population: 18516, geo: { lat: 45.9897, lng: 12.7058 }, priority: 3, demonym: 'Cordenonese' },
  { id: 'porcia', slug: 'porcia', name: 'Porcia', province: 'Pordenone', region: 'Friuli Venezia Giulia', population: 15307, geo: { lat: 45.9611, lng: 12.6156 }, priority: 3, demonym: 'Porciese' },
];

// =============================================================================
// TRENTINO ALTO ADIGE
// =============================================================================

export const TRENTINO_LOCATIONS: Location[] = [
  { id: 'trento', slug: 'trento', name: 'Trento', province: 'Trento', region: 'Trentino Alto Adige', population: 120709, geo: { lat: 46.0748, lng: 11.1217 }, priority: 1, highImpression: true, demonym: 'Trentini' },
  { id: 'bolzano', slug: 'bolzano', name: 'Bolzano', province: 'Bolzano', region: 'Trentino Alto Adige', population: 107944, geo: { lat: 46.4983, lng: 11.3548 }, priority: 1, highImpression: true, demonym: 'Bolzanini' },
  { id: 'rovereto', slug: 'rovereto', name: 'Rovereto', province: 'Trento', region: 'Trentino Alto Adige', population: 39966, geo: { lat: 45.8890, lng: 11.0442 }, priority: 2, demonym: 'Roveretani' },
  { id: 'merano', slug: 'merano', name: 'Merano', province: 'Bolzano', region: 'Trentino Alto Adige', population: 40662, geo: { lat: 46.6689, lng: 11.1637 }, priority: 2, demonym: 'Meranesi' },
  { id: 'pieve-di-soligo', slug: 'pieve-di-soligo', name: 'Pieve di Soligo', province: 'Treviso', region: 'Veneto', population: 11908, geo: { lat: 45.8889, lng: 12.1667 }, priority: 3, demonym: 'Solighese' },
  { id: 'bressanone', slug: 'bressanone', name: 'Bressanone', province: 'Bolzano', region: 'Trentino Alto Adige', population: 22352, geo: { lat: 46.7164, lng: 11.6566 }, priority: 3, demonym: 'Bressanonesi' },
  { id: 'brunico', slug: 'brunico', name: 'Brunico', province: 'Bolzano', region: 'Trentino Alto Adige', population: 16714, geo: { lat: 46.7969, lng: 11.9367 }, priority: 3, demonym: 'Brunicensi' },
];

// =============================================================================
// VALLE D'AOSTA
// =============================================================================

export const VALLE_AOSTA_LOCATIONS: Location[] = [
  { id: 'aosta', slug: 'aosta', name: 'Aosta', province: 'Aosta', region: "Valle d'Aosta", population: 34082, geo: { lat: 45.7349, lng: 7.3131 }, priority: 2, highImpression: true, demonym: 'Aostani' },
  { id: 'saint-vincent', slug: 'saint-vincent', name: "Saint-Vincent", province: 'Aosta', region: "Valle d'Aosta", population: 4683, geo: { lat: 45.7509, lng: 7.6489 }, priority: 3, demonym: 'Vincenzini' },
  { id: 'courmayeur', slug: 'courmayeur', name: 'Courmayeur', province: 'Aosta', region: "Valle d'Aosta", population: 2846, geo: { lat: 45.7969, lng: 6.9689 }, priority: 3, demonym: 'Courmayeurins' },
];

// =============================================================================
// MARCHE
// =============================================================================

export const MARCHE_LOCATIONS: Location[] = [
  { id: 'ancona', slug: 'ancona', name: 'Ancona', province: 'Ancona', region: 'Marche', population: 100497, geo: { lat: 43.6158, lng: 13.5189 }, priority: 1, highImpression: true, demonym: 'Anconetani' },
  { id: 'pesaro', slug: 'pesaro', name: 'Pesaro', province: 'Pesaro e Urbino', region: 'Marche', population: 95261, geo: { lat: 43.9102, lng: 12.9133 }, priority: 1, demonym: 'Pesaresi' },
  { id: 'senigallia', slug: 'senigallia', name: 'Senigallia', province: 'Ancona', region: 'Marche', population: 44780, geo: { lat: 43.7167, lng: 13.2167 }, priority: 2, demonym: 'Senigalliesi' },
  { id: 'macerata', slug: 'macerata', name: 'Macerata', province: 'Macerata', region: 'Marche', population: 41776, geo: { lat: 43.2976, lng: 13.4528 }, priority: 2, demonym: 'Maceratesi' },
  { id: 'ascoli-piceno', slug: 'ascoli-piceno', name: 'Ascoli Piceno', province: 'Ascoli Piceno', region: 'Marche', population: 47755, geo: { lat: 42.8536, lng: 13.5748 }, priority: 2, demonym: 'Piceni' },
  { id: 'civitanova-marche', slug: 'civitanova-marche', name: 'Civitanova Marche', province: 'Macerata', region: 'Marche', population: 42342, geo: { lat: 43.3069, lng: 13.7276 }, priority: 2, demonym: 'Civitanovesi' },
  { id: 'fermo', slug: 'fermo', name: 'Fermo', province: 'Fermo', region: 'Marche', population: 37323, geo: { lat: 43.1600, lng: 13.7184 }, priority: 2, demonym: 'Fermani' },
  { id: 'jesesi', slug: 'jesesi', name: 'Jesi', province: 'Ancona', region: 'Marche', population: 39796, geo: { lat: 43.5240, lng: 13.2440 }, priority: 2, demonym: 'Jesini' },
  { id: 'fano', slug: 'fano', name: 'Fano', province: 'Pesaro e Urbino', region: 'Marche', population: 61033, geo: { lat: 43.8472, lng: 13.0167 }, priority: 2, demonym: 'Fanese' },
  { id: 'san-benedetto-del-tronto', slug: 'san-benedetto-del-tronto', name: 'San Benedetto del Tronto', province: 'Ascoli Piceno', region: 'Marche', population: 47329, geo: { lat: 42.9553, lng: 13.8768 }, priority: 2, demonym: 'Sambenedettesi' },
  { id: 'urbino', slug: 'urbino', name: 'Urbino', province: 'Pesaro e Urbino', region: 'Marche', population: 14276, geo: { lat: 43.7262, lng: 12.6363 }, priority: 3, demonym: 'Urbinate' },
];

// =============================================================================
// UMBRIA
// =============================================================================

export const UMBRIA_LOCATIONS: Location[] = [
  { id: 'perugia', slug: 'perugia', name: 'Perugia', province: 'Perugia', region: 'Umbria', population: 168385, geo: { lat: 43.1107, lng: 12.3908 }, priority: 1, highImpression: true, demonym: 'Perugini' },
  { id: 'terni', slug: 'terni', name: 'Terni', province: 'Terni', region: 'Umbria', population: 109142, geo: { lat: 42.5636, lng: 12.6427 }, priority: 1, demonym: 'Ternani' },
  { id: 'foligno', slug: 'foligno', name: 'Foligno', province: 'Perugia', region: 'Umbria', population: 56500, geo: { lat: 42.9560, lng: 12.7020 }, priority: 2, demonym: 'Folignati' },
  { id: 'citta-di-castello', slug: 'citta-di-castello', name: 'Città di Castello', province: 'Perugia', region: 'Umbria', population: 39740, geo: { lat: 43.4578, lng: 12.2317 }, priority: 2, demonym: 'Tifernati' },
  { id: 'spoleto', slug: 'spoleto', name: 'Spoleto', province: 'Perugia', region: 'Umbria', population: 37626, geo: { lat: 42.7428, lng: 12.7383 }, priority: 2, demonym: 'Spoletini' },
  { id: 'gubbio', slug: 'gubbio', name: 'Gubbio', province: 'Perugia', region: 'Umbria', population: 31929, geo: { lat: 43.3512, lng: 12.5772 }, priority: 3, demonym: 'Eugubini' },
  { id: 'assisi', slug: 'assisi', name: 'Assisi', province: 'Perugia', region: 'Umbria', population: 28229, geo: { lat: 43.0707, lng: 12.6196 }, priority: 3, demonym: 'Assisani' },
  { id: 'bastia-umbra', slug: 'bastia-umbra', name: 'Bastia Umbra', province: 'Perugia', region: 'Umbria', population: 21958, geo: { lat: 43.0686, lng: 12.5494 }, priority: 3, demonym: 'Bastolini' },
];

// =============================================================================
// ABRUZZO
// =============================================================================

export const ABRUZZO_LOCATIONS: Location[] = [
  { id: 'laquila', slug: 'laquila', name: "L'Aquila", province: "L'Aquila", region: 'Abruzzo', population: 69399, geo: { lat: 42.3498, lng: 13.3995 }, priority: 2, highImpression: true, demonym: 'Aquilani' },
  { id: 'pescara', slug: 'pescara', name: 'Pescara', province: 'Pescara', region: 'Abruzzo', population: 123103, geo: { lat: 42.4618, lng: 14.2160 }, priority: 1, highImpression: true, demonym: 'Pescaresi' },
  { id: 'chieti', slug: 'chieti', name: 'Chieti', province: 'Chieti', region: 'Abruzzo', population: 50823, geo: { lat: 42.3512, lng: 14.1675 }, priority: 2, demonym: 'Chietini' },
  { id: 'teramo', slug: 'teramo', name: 'Teramo', province: 'Teramo', region: 'Abruzzo', population: 52329, geo: { lat: 42.6612, lng: 13.6980 }, priority: 2, demonym: 'Teramani' },
  { id: 'montesilvano', slug: 'montesilvano', name: 'Montesilvano', province: 'Pescara', region: 'Abruzzo', population: 54510, geo: { lat: 42.5092, lng: 14.1438 }, priority: 2, demonym: 'Montesilvanesi' },
  { id: 'avezzano', slug: 'avezzano', name: 'Avezzano', province: "L'Aquila", region: 'Abruzzo', population: 42508, geo: { lat: 42.0311, lng: 13.4255 }, priority: 2, demonym: 'Avezzanesi' },
  { id: 'vasto', slug: 'vasto', name: 'Vasto', province: 'Chieti', region: 'Abruzzo', population: 41047, geo: { lat: 42.1143, lng: 14.7069 }, priority: 2, demonym: 'Vastesi' },
  { id: 'lanciano', slug: 'lanciano', name: 'Lanciano', province: 'Chieti', region: 'Abruzzo', population: 34306, geo: { lat: 42.2270, lng: 14.3913 }, priority: 3, demonym: 'Lancianesi' },
];

// =============================================================================
// MOLISE
// =============================================================================

export const MOLISE_LOCATIONS: Location[] = [
  { id: 'campobasso', slug: 'campobasso', name: 'Campobasso', province: 'Campobasso', region: 'Molise', population: 49185, geo: { lat: 41.5619, lng: 14.6684 }, priority: 2, demonym: 'Campobassani' },
  { id: 'isernia', slug: 'isernia', name: 'Isernia', province: 'Isernia', region: 'Molise', population: 21841, geo: { lat: 41.5972, lng: 14.2387 }, priority: 3, demonym: 'Isernini' },
  { id: 'termoli', slug: 'termoli', name: 'Termoli', province: 'Campobasso', region: 'Molise', population: 33278, geo: { lat: 41.9959, lng: 15.0007 }, priority: 3, demonym: 'Termolesi' },
];

// =============================================================================
// CAMPANIA (Main cities only - partial)
// =============================================================================

export const CAMPANIA_LOCATIONS: Location[] = [
  { id: 'napoli', slug: 'napoli', name: 'Napoli', province: 'Napoli', region: 'Campania', population: 962003, geo: { lat: 40.8518, lng: 14.2681 }, priority: 1, highImpression: true, demonym: 'Napoletani' },
  { id: 'salerno', slug: 'salerno', name: 'Salerno', province: 'Salerno', region: 'Campania', population: 133237, geo: { lat: 40.6824, lng: 14.7680 }, priority: 1, highImpression: true, demonym: 'Salernitani' },
  { id: 'caserta', slug: 'caserta', name: 'Caserta', province: 'Caserta', region: 'Campania', population: 75513, geo: { lat: 41.0727, lng: 14.3317 }, priority: 1, demonym: 'Casertani' },
  { id: 'avellino', slug: 'avellino', name: 'Avellino', province: 'Avellino', region: 'Campania', population: 53778, geo: { lat: 40.9162, lng: 14.7887 }, priority: 2, demonym: 'Avellinesi' },
  { id: 'benevento', slug: 'benevento', name: 'Benevento', province: 'Benevento', region: 'Campania', population: 60027, geo: { lat: 41.1298, lng: 14.7820 }, priority: 2, demonym: 'Beneventani' },
];

// =============================================================================
// PUGLIA (Main cities only - partial)
// =============================================================================

export const PUGLIA_LOCATIONS: Location[] = [
  { id: 'bari', slug: 'bari', name: 'Bari', province: 'Bari', region: 'Puglia', population: 323370, geo: { lat: 41.1171, lng: 16.8719 }, priority: 1, highImpression: true, demonym: 'Baresi' },
  { id: 'taranto', slug: 'taranto', name: 'Taranto', province: 'Taranto', region: 'Puglia', population: 198283, geo: { lat: 40.4692, lng: 17.2470 }, priority: 1, highImpression: true, demonym: 'Tarantini' },
  { id: 'foggia', slug: 'foggia', name: 'Foggia', province: 'Foggia', region: 'Puglia', population: 151372, geo: { lat: 41.4622, lng: 15.5448 }, priority: 1, demonym: 'Foggiani' },
  { id: 'lecce', slug: 'lecce', name: 'Lecce', province: 'Lecce', region: 'Puglia', population: 95766, geo: { lat: 40.3515, lng: 18.1750 }, priority: 1, highImpression: true, demonym: 'Leccesi' },
  { id: 'brindisi', slug: 'brindisi', name: 'Brindisi', province: 'Brindisi', region: 'Puglia', population: 88005, geo: { lat: 40.6383, lng: 17.9459 }, priority: 1, demonym: 'Brindisini' },
];

// =============================================================================
// SICILIA (Main cities only - partial)
// =============================================================================

export const SICILIA_LOCATIONS: Location[] = [
  { id: 'palermo', slug: 'palermo', name: 'Palermo', province: 'Palermo', region: 'Sicilia', population: 668405, geo: { lat: 38.1157, lng: 13.3615 }, priority: 1, highImpression: true, demonym: 'Palermitani' },
  { id: 'catania', slug: 'catania', name: 'Catania', province: 'Catania', region: 'Sicilia', population: 311584, geo: { lat: 37.5079, lng: 15.0830 }, priority: 1, highImpression: true, demonym: 'Catanesi' },
  { id: 'messina', slug: 'messina', name: 'Messina', province: 'Messina', region: 'Sicilia', population: 234293, geo: { lat: 38.1938, lng: 15.5540 }, priority: 1, highImpression: true, demonym: 'Messinesi' },
  { id: 'siracusa', slug: 'siracusa', name: 'Siracusa', province: 'Siracusa', region: 'Sicilia', population: 121605, geo: { lat: 37.0755, lng: 15.2866 }, priority: 1, demonym: 'Siracusani' },
  { id: 'trapani', slug: 'trapani', name: 'Trapani', province: 'Trapani', region: 'Sicilia', population: 67359, geo: { lat: 38.0174, lng: 12.5370 }, priority: 2, demonym: 'Trapanesi' },
  { id: 'ragusa', slug: 'ragusa', name: 'Ragusa', province: 'Ragusa', region: 'Sicilia', population: 73943, geo: { lat: 36.9269, lng: 14.7255 }, priority: 2, demonym: 'Ragusani' },
];

// =============================================================================
// SARDEGNA
// =============================================================================

export const SARDEGNA_LOCATIONS: Location[] = [
  { id: 'cagliari', slug: 'cagliari', name: 'Cagliari', province: 'Cagliari', region: 'Sardegna', population: 154108, geo: { lat: 39.2238, lng: 9.1217 }, priority: 1, highImpression: true, demonym: 'Cagliaritani' },
  { id: 'sassari', slug: 'sassari', name: 'Sassari', province: 'Sassari', region: 'Sardegna', population: 127477, geo: { lat: 40.7259, lng: 8.5556 }, priority: 1, highImpression: true, demonym: 'Sassaresi' },
  { id: 'quartu-sant-elena', slug: 'quartu-sant-elena', name: "Quartu Sant'Elena", province: 'Cagliari', region: 'Sardegna', population: 71125, geo: { lat: 39.2495, lng: 9.1827 }, priority: 2, demonym: 'Quartesi' },
  { id: 'olbia', slug: 'olbia', name: 'Olbia', province: 'Sassari', region: 'Sardegna', population: 60031, geo: { lat: 40.9235, lng: 9.4964 }, priority: 2, demonym: 'Olbiensi' },
  { id: 'alghero', slug: 'alghero', name: 'Alghero', province: 'Sassari', region: 'Sardegna', population: 44019, geo: { lat: 40.5580, lng: 8.3190 }, priority: 2, demonym: 'Algheresi' },
  { id: 'nuoro', slug: 'nuoro', name: 'Nuoro', province: 'Nuoro', region: 'Sardegna', population: 35878, geo: { lat: 40.3213, lng: 9.3240 }, priority: 2, demonym: 'Nuoresi' },
  { id: 'oristano', slug: 'oristano', name: 'Oristano', province: 'Oristano', region: 'Sardegna', population: 31871, geo: { lat: 39.9062, lng: 8.5884 }, priority: 2, demonym: 'Oristanesi' },
];

// =============================================================================
// ADDITIONAL PROVINCE EXPANSION
// =============================================================================

// Espansione province esistenti - città di medie dimensioni
export const ADDITIONAL_LOCATIONS: Location[] = [
  // Lombardia extras
  { id: 'seregno', slug: 'seregno', name: 'Seregno', province: 'Monza e Brianza', region: 'Lombardia', population: 44645, geo: { lat: 45.6495, lng: 9.2030 }, priority: 3, demonym: 'Seregnesi' },
  { id: 'vimercate', slug: 'vimercate', name: 'Vimercate', province: 'Monza e Brianza', region: 'Lombardia', population: 25875, geo: { lat: 45.6167, lng: 9.3667 }, priority: 3, demonym: 'Vimercatesi' },
  { id: 'lissone', slug: 'lissone', name: 'Lissone', province: 'Monza e Brianza', region: 'Lombardia', population: 45527, geo: { lat: 45.6167, lng: 9.2500 }, priority: 3, demonym: 'Lissonesi' },
  { id: 'desio', slug: 'desio', name: 'Desio', province: 'Monza e Brianza', region: 'Lombardia', population: 41808, geo: { lat: 45.6167, lng: 9.2000 }, priority: 3, demonym: 'Desiesi' },
  { id: 'cesano-maderno', slug: 'cesano-maderno', name: 'Cesano Maderno', province: 'Monza e Brianza', region: 'Lombardia', population: 37078, geo: { lat: 45.6333, lng: 9.1500 }, priority: 3, demonym: 'Cesanesi' },
  { id: 'gallarate', slug: 'gallarate', name: 'Gallarate', province: 'Varese', region: 'Lombardia', population: 52857, geo: { lat: 45.6667, lng: 8.8000 }, priority: 2, demonym: 'Gallaratesi' },
  { id: 'busto-arsizio', slug: 'busto-arsizio', name: 'Busto Arsizio', province: 'Varese', region: 'Lombardia', population: 83315, geo: { lat: 45.6167, lng: 8.8500 }, priority: 1, demonym: 'Bustocchi' },
  
  // Veneto extras  
  { id: 'mogliano-veneto', slug: 'mogliano-veneto', name: 'Mogliano Veneto', province: 'Treviso', region: 'Veneto', population: 28029, geo: { lat: 45.5608, lng: 12.2381 }, priority: 3, demonym: 'Mogianesi' },
  { id: 'conegliano', slug: 'conegliano', name: 'Conegliano', province: 'Treviso', region: 'Veneto', population: 34681, geo: { lat: 45.8875, lng: 12.2964 }, priority: 3, demonym: 'Coneglianesi' },
  { id: 'valdagno', slug: 'valdagno', name: 'Valdagno', province: 'Vicenza', region: 'Veneto', population: 26101, geo: { lat: 45.6436, lng: 11.2989 }, priority: 3, demonym: 'Valdagnesi' },
  { id: 'bassano-del-grappa', slug: 'bassano-del-grappa', name: 'Bassano del Grappa', province: 'Vicenza', region: 'Veneto', population: 43440, geo: { lat: 45.7653, lng: 11.7341 }, priority: 2, demonym: 'Bassanesi' },
  { id: 'schio', slug: 'schio', name: 'Schio', province: 'Vicenza', region: 'Veneto', population: 38898, geo: { lat: 45.7167, lng: 11.3667 }, priority: 3, demonym: 'Scledensi' },
  { id: 'chioggia', slug: 'chioggia', name: 'Chioggia', province: 'Venezia', region: 'Veneto', population: 50149, geo: { lat: 45.2186, lng: 12.2777 }, priority: 2, demonym: 'Clodiensi' },
  
  // Emilia-Romagna extras
  { id: 'cento', slug: 'cento', name: 'Cento', province: 'Ferrara', region: 'Emilia-Romagna', population: 35733, geo: { lat: 44.7259, lng: 11.2864 }, priority: 3, demonym: 'Centesi' },
  { id: 'bondeno', slug: 'bondeno', name: 'Bondeno', province: 'Ferrara', region: 'Emilia-Romagna', population: 14803, geo: { lat: 44.8859, lng: 11.4180 }, priority: 3, demonym: 'Bondenesi' },
  { id: 'copparo', slug: 'copparo', name: 'Copparo', province: 'Ferrara', region: 'Emilia-Romagna', population: 16481, geo: { lat: 44.8925, lng: 11.8267 }, priority: 3, demonym: 'Copparini' },
  { id: 'argenta', slug: 'argenta', name: 'Argenta', province: 'Ferrara', region: 'Emilia-Romagna', population: 22259, geo: { lat: 44.6144, lng: 11.8333 }, priority: 3, demonym: 'Argentani' },
  { id: 'medicina', slug: 'medicina', name: 'Medicina', province: 'Bologna', region: 'Emilia-Romagna', population: 16707, geo: { lat: 44.4769, lng: 11.6386 }, priority: 3, demonym: 'Medicinesi' },
  { id: 'castel-san-pietro-terme', slug: 'castel-san-pietro-terme', name: 'Castel San Pietro Terme', province: 'Bologna', region: 'Emilia-Romagna', population: 20884, geo: { lat: 44.3997, lng: 11.5883 }, priority: 3, demonym: 'Castellani' },
  { id: 'castel-maggiore', slug: 'castel-maggiore', name: 'Castel Maggiore', province: 'Bologna', region: 'Emilia-Romagna', population: 18874, geo: { lat: 44.5772, lng: 11.3672 }, priority: 3, demonym: 'Castellani' },
  { id: 'san-lazzaro-di-savena', slug: 'san-lazzaro-di-savena', name: 'San Lazzaro di Savena', province: 'Bologna', region: 'Emilia-Romagna', population: 32394, geo: { lat: 44.4708, lng: 11.4125 }, priority: 3, demonym: 'Sanlazzaresi' },
  { id: 'pianoro', slug: 'pianoro', name: 'Pianoro', province: 'Bologna', region: 'Emilia-Romagna', population: 18847, geo: { lat: 44.3917, lng: 11.3425 }, priority: 3, demonym: 'Pianoresi' },
  { id: 'castel-guelfo-di-bologna', slug: 'castel-guelfo-di-bologna', name: 'Castel Guelfo di Bologna', province: 'Bologna', region: 'Emilia-Romagna', population: 4591, geo: { lat: 44.4333, lng: 11.6833 }, priority: 3, demonym: 'Castellani' },
  { id: 'granarolo-dell-emilia', slug: 'granarolo-dell-emilia', name: "Granarolo dell'Emilia", province: 'Bologna', region: 'Emilia-Romagna', population: 11899, geo: { lat: 44.5547, lng: 11.4422 }, priority: 3, demonym: 'Granarolesi' },
  
  // Toscana extras
  { id: 'carrara', slug: 'carrara', name: 'Carrara', province: 'Massa-Carrara', region: 'Toscana', population: 62134, geo: { lat: 44.0779, lng: 10.0978 }, priority: 2, demonym: 'Carraresi' },
  { id: 'massa', slug: 'massa', name: 'Massa', province: 'Massa-Carrara', region: 'Toscana', population: 68946, geo: { lat: 44.0357, lng: 10.1397 }, priority: 2, demonym: 'Massesi' },
  { id: 'empoli', slug: 'empoli', name: 'Empoli', province: 'Firenze', region: 'Toscana', population: 48996, geo: { lat: 43.7179, lng: 10.9446 }, priority: 2, demonym: 'Empolesi' },
  { id: 'scandicci', slug: 'scandicci', name: 'Scandicci', province: 'Firenze', region: 'Toscana', population: 50912, geo: { lat: 43.7554, lng: 11.1867 }, priority: 2, demonym: 'Scandiccesi' },
  { id: 'campi-bisenzio', slug: 'campi-bisenzio', name: 'Campi Bisenzio', province: 'Firenze', region: 'Toscana', population: 46720, geo: { lat: 43.8214, lng: 11.1339 }, priority: 3, demonym: 'Campigiani' },
  { id: 'bagno-a-ripoli', slug: 'bagno-a-ripoli', name: 'Bagno a Ripoli', province: 'Firenze', region: 'Toscana', population: 25271, geo: { lat: 43.75, lng: 11.3167 }, priority: 3, demonym: 'Bagnesi' },
  { id: 'calenzano', slug: 'calenzano', name: 'Calenzano', province: 'Firenze', region: 'Toscana', population: 17743, geo: { lat: 43.8567, lng: 11.1667 }, priority: 3, demonym: 'Calenzanesi' },
  { id: 'lastra-a-signa', slug: 'lastra-a-signa', name: 'Lastra a Signa', province: 'Firenze', region: 'Toscana', population: 20252, geo: { lat: 43.7692, lng: 11.1064 }, priority: 3, demonym: 'Lastrigiani' },
  { id: 'montelupo-fiorentino', slug: 'montelupo-fiorentino', name: 'Montelupo Fiorentino', province: 'Firenze', region: 'Toscana', population: 14414, geo: { lat: 43.7333, lng: 11.0167 }, priority: 3, demonym: 'Montelupesi' },
  { id: 'poggibonsi', slug: 'poggibonsi', name: 'Poggibonsi', province: 'Siena', region: 'Toscana', population: 29175, geo: { lat: 43.4667, lng: 11.1500 }, priority: 3, demonym: 'Poggibonsesi' },
  { id: 'colle-di-val-d-elsa', slug: 'colle-di-val-d-elsa', name: "Colle di Val d'Elsa", province: 'Siena', region: 'Toscana', population: 21937, geo: { lat: 43.4233, lng: 11.1261 }, priority: 3, demonym: 'Collesani' },
  { id: 'montevarchi', slug: 'montevarchi', name: 'Montevarchi', province: 'Arezzo', region: 'Toscana', population: 24306, geo: { lat: 43.5239, lng: 11.5686 }, priority: 3, demonym: 'Montevarchini' },
  { id: 'san-giovanni-valdarno', slug: 'san-giovanni-valdarno', name: 'San Giovanni Valdarno', province: 'Arezzo', region: 'Toscana', population: 16812, geo: { lat: 43.5619, lng: 11.5328 }, priority: 3, demonym: 'Sangiovannesi' },
  { id: 'foiano-della-chiana', slug: 'foiano-della-chiana', name: 'Foiano della Chiana', province: 'Arezzo', region: 'Toscana', population: 9668, geo: { lat: 43.2553, lng: 11.8164 }, priority: 3, demonym: 'Foianesi' },
  { id: 'castiglion-fiorentino', slug: 'castiglion-fiorentino', name: 'Castiglion Fiorentino', province: 'Arezzo', region: 'Toscana', population: 13202, geo: { lat: 43.3433, lng: 11.9183 }, priority: 3, demonym: 'Castiglionesi' },
  
  // Romagna extras
  { id: 'bagnacavallo', slug: 'bagnacavallo', name: 'Bagnacavallo', province: 'Ravenna', region: 'Emilia-Romagna', population: 16717, geo: { lat: 44.4167, lng: 11.9833 }, priority: 3, demonym: 'Bagnacavallesi' },
  { id: 'faenza', slug: 'faenza', name: 'Faenza', province: 'Ravenna', region: 'Emilia-Romagna', population: 58908, geo: { lat: 44.2833, lng: 11.8833 }, priority: 2, demonym: 'Faventini' },
  { id: 'lugo', slug: 'lugo', name: 'Lugo', province: 'Ravenna', region: 'Emilia-Romagna', population: 32380, geo: { lat: 44.4167, lng: 11.9167 }, priority: 3, demonym: 'Lughesi' },
  { id: 'russii', slug: 'russii', name: 'Russi', province: 'Ravenna', region: 'Emilia-Romagna', population: 12387, geo: { lat: 44.3833, lng: 12.0333 }, priority: 3, demonym: 'Russesi' },
  { id: 'cotignola', slug: 'cotignola', name: 'Cotignola', province: 'Ravenna', region: 'Emilia-Romagna', population: 7449, geo: { lat: 44.3833, lng: 11.9333 }, priority: 3, demonym: 'Cotignolesi' },
  { id: 'fusignano', slug: 'fusignano', name: 'Fusignano', province: 'Ravenna', region: 'Emilia-Romagna', population: 8181, geo: { lat: 44.4667, lng: 11.9500 }, priority: 3, demonym: 'Fusignanesi' },
  { id: 'alfonsine', slug: 'alfonsine', name: 'Alfonsine', province: 'Ravenna', region: 'Emilia-Romagna', population: 12078, geo: { lat: 44.5000, lng: 12.0333 }, priority: 3, demonym: 'Alfonsinesi' },
  { id: 'solarolo', slug: 'solarolo', name: 'Solarolo', province: 'Ravenna', region: 'Emilia-Romagna', population: 4253, geo: { lat: 44.3667, lng: 11.8500 }, priority: 3, demonym: 'Solarolesi' },
  { id: 'castel-bolognese', slug: 'castel-bolognese', name: 'Castel Bolognese', province: 'Ravenna', region: 'Emilia-Romagna', population: 9578, geo: { lat: 44.3167, lng: 11.8000 }, priority: 3, demonym: 'Castellani' },
  
  // Modena extras
  { id: 'pavullo-nel-frignano', slug: 'pavullo-nel-frignano', name: 'Pavullo nel Frignano', province: 'Modena', region: 'Emilia-Romagna', population: 17884, geo: { lat: 44.3333, lng: 10.8333 }, priority: 3, demonym: 'Pavullesi' },
  { id: 'fanano', slug: 'fanano', name: 'Fanano', province: 'Modena', region: 'Emilia-Romagna', population: 3047, geo: { lat: 44.2167, lng: 10.7833 }, priority: 3, demonym: 'Fananesi' },
  { id: 'montecreto', slug: 'montecreto', name: 'Montecreto', province: 'Modena', region: 'Emilia-Romagna', population: 935, geo: { lat: 44.2667, lng: 10.7167 }, priority: 3, demonym: 'Montecretesi' },
  { id: 'serramazzoni', slug: 'serramazzoni', name: 'Serramazzoni', province: 'Modena', region: 'Emilia-Romagna', population: 8275, geo: { lat: 44.4167, lng: 10.7833 }, priority: 3, demonym: 'Serramazzonesi' },
  { id: 'maranello', slug: 'maranello', name: 'Maranello', province: 'Modena', region: 'Emilia-Romagna', population: 17643, geo: { lat: 44.5333, lng: 10.8667 }, priority: 2, highImpression: true, demonym: 'Maranellesi', landmarks: ['Museo Ferrari', 'Autodromo'], famousFor: 'i motori Ferrari' },
  { id: 'formigine', slug: 'formigine', name: 'Formigine', province: 'Modena', region: 'Emilia-Romagna', population: 34336, geo: { lat: 44.5667, lng: 10.8500 }, priority: 2, highImpression: true, demonym: 'Formiginesi' },
  { id: 'castelnuovo-rangone', slug: 'castelnuovo-rangone', name: 'Castelnuovo Rangone', province: 'Modena', region: 'Emilia-Romagna', population: 14758, geo: { lat: 44.5500, lng: 10.9333 }, priority: 3, demonym: 'Castelnovesi' },
  { id: 'spilamberto', slug: 'spilamberto', name: 'Spilamberto', province: 'Modena', region: 'Emilia-Romagna', population: 12507, geo: { lat: 44.5333, lng: 11.0167 }, priority: 2, highImpression: true, demonym: 'Spilambertesi' },
  { id: 'vignola', slug: 'vignola', name: 'Vignola', province: 'Modena', region: 'Emilia-Romagna', population: 25466, geo: { lat: 44.4833, lng: 11.0000 }, priority: 2, highImpression: true, demonym: 'Vignolesi' },
  { id: 'castelfranco-emilia', slug: 'castelfranco-emilia', name: 'Castelfranco Emilia', province: 'Modena', region: 'Emilia-Romagna', population: 33169, geo: { lat: 44.6000, lng: 11.0500 }, priority: 2, highImpression: true, demonym: 'Castelfranchesi' },
  { id: 'nonantola', slug: 'nonantola', name: 'Nonantola', province: 'Modena', region: 'Emilia-Romagna', population: 15790, geo: { lat: 44.6833, lng: 11.0333 }, priority: 3, demonym: 'Nonantolani' },
  { id: 'soliera', slug: 'soliera', name: 'Soliera', province: 'Modena', region: 'Emilia-Romagna', population: 15376, geo: { lat: 44.7333, lng: 10.9167 }, priority: 3, demonym: 'Solieresi' },
  { id: 'bastiglia', slug: 'bastiglia', name: 'Bastiglia', province: 'Modena', region: 'Emilia-Romagna', population: 4178, geo: { lat: 44.7167, lng: 10.9833 }, priority: 3, demonym: 'Bastigliesi' },
  { id: 'bomporto', slug: 'bomporto', name: 'Bomporto', province: 'Modena', region: 'Emilia-Romagna', population: 10018, geo: { lat: 44.7333, lng: 11.0500 }, priority: 3, demonym: 'Bomportesi' },
  { id: 'medolla', slug: 'medolla', name: 'Medolla', province: 'Modena', region: 'Emilia-Romagna', population: 6389, geo: { lat: 44.8500, lng: 11.1667 }, priority: 3, demonym: 'Medolesi' },
  { id: 'san-felice-sul-panaro', slug: 'san-felice-sul-panaro', name: 'San Felice sul Panaro', province: 'Modena', region: 'Emilia-Romagna', population: 11126, geo: { lat: 44.8333, lng: 11.1333 }, priority: 3, demonym: 'Sanfeliciani' },
  { id: 'mirandola', slug: 'mirandola', name: 'Mirandola', province: 'Modena', region: 'Emilia-Romagna', population: 23893, geo: { lat: 44.8833, lng: 11.0667 }, priority: 2, highImpression: true, demonym: 'Mirandolesi' },
  { id: 'concordia-sulla-secchia', slug: 'concordia-sulla-secchia', name: 'Concordia sulla Secchia', province: 'Modena', region: 'Emilia-Romagna', population: 8695, geo: { lat: 44.9167, lng: 11.1333 }, priority: 3, demonym: 'Concordiesi' },
  { id: 'san-prospero', slug: 'san-prospero', name: 'San Prospero', province: 'Modena', region: 'Emilia-Romagna', population: 5795, geo: { lat: 44.7833, lng: 11.0333 }, priority: 3, demonym: 'Sanprosperesi' },
  { id: 'carpi', slug: 'carpi', name: 'Carpi', province: 'Modena', region: 'Emilia-Romagna', population: 71836, geo: { lat: 44.7833, lng: 10.8851 }, priority: 1, highImpression: true, demonym: 'Carpigiani' },
  { id: 'campogalliano', slug: 'campogalliano', name: 'Campogalliano', province: 'Modena', region: 'Emilia-Romagna', population: 8820, geo: { lat: 44.6833, lng: 10.8500 }, priority: 3, demonym: 'Campogallianesi' },
  { id: 'correggio', slug: 'correggio', name: 'Correggio', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 25630, geo: { lat: 44.7667, lng: 10.8333 }, priority: 2, demonym: 'Correggesi' },
  { id: 'scandiano', slug: 'scandiano', name: 'Scandiano', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 25282, geo: { lat: 44.6000, lng: 10.6833 }, priority: 2, demonym: 'Scandianesi' },
  { id: 'rubiera', slug: 'rubiera', name: 'Rubiera', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 14850, geo: { lat: 44.6500, lng: 10.7833 }, priority: 3, demonym: 'Rubieresi' },
  { id: 'guastalla', slug: 'guastalla', name: 'Guastalla', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 15039, geo: { lat: 44.9167, lng: 10.6500 }, priority: 3, demonym: 'Guastallesi' },
  { id: 'novellara', slug: 'novellara', name: 'Novellara', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 13759, geo: { lat: 44.8500, lng: 10.7333 }, priority: 3, demonym: 'Novellaresi' },
  { id: 'bagnolo-in-piano', slug: 'bagnolo-in-piano', name: 'Bagnolo in Piano', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 9667, geo: { lat: 44.7667, lng: 10.6833 }, priority: 3, demonym: 'Bagnolesi' },
  { id: 'cavriago', slug: 'cavriago', name: 'Cavriago', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 9826, geo: { lat: 44.6833, lng: 10.5167 }, priority: 3, demonym: 'Cavriaghesi' },
  { id: 'poviglio', slug: 'poviglio', name: 'Poviglio', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 7298, geo: { lat: 44.8333, lng: 10.5500 }, priority: 3, demonym: 'Povigliesi' },
  { id: 'bibbiano', slug: 'bibbiano', name: 'Bibbiano', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 10403, geo: { lat: 44.6667, lng: 10.4667 }, priority: 3, demonym: 'Bibbianesi' },
  { id: 'montecchio-emilia', slug: 'montecchio-emilia', name: 'Montecchio Emilia', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 10637, geo: { lat: 44.7000, lng: 10.4500 }, priority: 3, demonym: 'Montecchiesi' },
  { id: 'canossa', slug: 'canossa', name: 'Canossa', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 3880, geo: { lat: 44.5833, lng: 10.4167 }, priority: 3, demonym: 'Canossiani' },
  { id: 'vezzano-sul-crostolo', slug: 'vezzano-sul-crostolo', name: 'Vezzano sul Crostolo', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 4282, geo: { lat: 44.6000, lng: 10.5500 }, priority: 3, demonym: 'Vezzanesi' },
  { id: 'albinea', slug: 'albinea', name: 'Albinea', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 8853, geo: { lat: 44.6167, lng: 10.6000 }, priority: 3, demonym: 'Albineesi' },
  { id: 'quattro-castella', slug: 'quattro-castella', name: 'Quattro Castella', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 13227, geo: { lat: 44.6000, lng: 10.4667 }, priority: 3, demonym: 'Quattrocastellani' },
  { id: 'sant-ilario-d-enza', slug: 'sant-ilario-d-enza', name: "Sant'Ilario d'Enza", province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 11134, geo: { lat: 44.7667, lng: 10.4500 }, priority: 3, demonym: 'Santilariesi' },
  { id: 'gattatico', slug: 'gattatico', name: 'Gattatico', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 5836, geo: { lat: 44.8000, lng: 10.4833 }, priority: 3, demonym: 'Gattatichesi' },
  { id: 'cadelbosco-di-sopra', slug: 'cadelbosco-di-sopra', name: 'Cadelbosco di Sopra', province: 'Reggio Emilia', region: 'Emilia-Romagna', population: 10690, geo: { lat: 44.7667, lng: 10.6167 }, priority: 3, demonym: 'Cadelboschesi' },
];

// Export all additional locations
export const ALL_ADDITIONAL_LOCATIONS: Location[] = [
  ...PIEMONTE_LOCATIONS,
  ...LIGURIA_LOCATIONS,
  ...FRIULI_LOCATIONS,
  ...TRENTINO_LOCATIONS,
  ...VALLE_AOSTA_LOCATIONS,
  ...MARCHE_LOCATIONS,
  ...UMBRIA_LOCATIONS,
  ...ABRUZZO_LOCATIONS,
  ...MOLISE_LOCATIONS,
  ...CAMPANIA_LOCATIONS,
  ...PUGLIA_LOCATIONS,
  ...SICILIA_LOCATIONS,
  ...SARDEGNA_LOCATIONS,
  ...ADDITIONAL_LOCATIONS,
];
