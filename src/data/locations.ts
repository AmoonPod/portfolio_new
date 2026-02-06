/**
 * EXPANDED LOCATIONS DATABASE
 * 
 * This file contains all target cities for programmatic SEO pages.
 * Cities are organized by province with metadata for content differentiation.
 * 
 * ADDING NEW CITIES:
 * 1. Add the city to the LOCATIONS array with all required fields
 * 2. The city will automatically be included in:
 *    - Sitemap generation
 *    - Page routing
 *    - Internal linking
 *    - Service page generation (if population meets minimum threshold)
 * 
 * IMPORTANT: Each city MUST have unique content through:
 * - Archetype-based content differentiation (see archetypes.ts)
 * - Population-based tier adjustments
 * - Province-specific contextual content
 */

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface Location {
  /** Unique identifier (usually same as slug) */
  id: string;
  /** URL-safe slug */
  slug: string;
  /** Display name */
  name: string;
  /** Province name */
  province: string;
  /** Region name */
  region: string;
  /** Population (used for content differentiation and service eligibility) */
  population: number;
  /** Geographic coordinates */
  geo: {
    lat: number;
    lng: number;
  };
  /** Priority tier for SEO (1 = highest) */
  priority?: 1 | 2 | 3;
  /** Whether this city has shown significant search impressions */
  highImpression?: boolean;
  /** Demonym for citizens (e.g., "Modenesi", "Milanesi") */
  demonym?: string;
  /** Famous local landmarks (e.g., "Ghirlandina", "Piazza Maggiore") */
  landmarks?: string[];
  /** What the city is famous for (e.g., "motori", "ceramica", "moda") */
  famousFor?: string;
}

export type Province = 
  | 'Modena'
  | 'Reggio Emilia'
  | 'Bologna'
  | 'Parma'
  | 'Ferrara'
  | 'Ravenna'
  | 'Forli-Cesena'
  | 'Piacenza'
  | 'Rimini'
  // Veneto
  | 'Venezia'
  | 'Verona'
  | 'Padova'
  | 'Vicenza'
  | 'Treviso'
  // Lombardia
  | 'Milano'
  | 'Brescia'
  | 'Bergamo'
  | 'Monza e Brianza'
  | 'Cremona'
  | 'Pavia'
  | 'Mantova'
  | 'Como'
  | 'Lecco'
  | 'Varese'
  // Toscana
  | 'Firenze'
  | 'Prato'
  | 'Livorno'
  | 'Pisa'
  | 'Arezzo'
  | 'Lucca'
  | 'Pistoia'
  | 'Grosseto'
  | 'Siena';

// =============================================================================
// LOCATIONS DATABASE
// =============================================================================

export const LOCATIONS: Location[] = [
  // ---------------------------------------------------------------------------
  // PROVINCIA DI MODENA (Primary Focus)
  // ---------------------------------------------------------------------------
  {
    id: 'modena',
    slug: 'modena',
    name: 'Modena',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 185334,
    geo: { lat: 44.6458885, lng: 10.9255707 },
    priority: 1,
    highImpression: true,
    demonym: 'Modenesi',
    landmarks: ['Ghirlandina', 'Duomo', 'Piazza Grande'],
    famousFor: 'i motori e l\'aceto balsamico'
  },
  {
    id: 'carpi',
    slug: 'carpi',
    name: 'Carpi',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 71131,
    geo: { lat: 44.7833, lng: 10.8833 },
    priority: 1,
    highImpression: true,
    demonym: 'Carpigiani',
    landmarks: ['Piazza Martiri', 'Palazzo dei Pio'],
    famousFor: 'il distretto tessile e la moda'
  },
  {
    id: 'sassuolo',
    slug: 'sassuolo',
    name: 'Sassuolo',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 40884,
    geo: { lat: 44.5409769, lng: 10.7829023 },
    priority: 1,
    highImpression: true,
    demonym: 'Sassolesi',
    landmarks: ['Palazzo Ducale'],
    famousFor: 'la ceramica e l\'industria delle piastrelle'
  },
  {
    id: 'formigine',
    slug: 'formigine',
    name: 'Formigine',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 34706,
    geo: { lat: 44.5758, lng: 10.8461 },
    priority: 1,
    highImpression: true, // 130 impressions GSC
    demonym: 'Formiginesi',
    landmarks: ['Castello di Formigine'],
    famousFor: 'la meccanica e il distretto ceramico'
  },
  {
    id: 'maranello',
    slug: 'maranello',
    name: 'Maranello',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 17342,
    geo: { lat: 44.5253, lng: 10.8659 },
    priority: 1,
    highImpression: true, // 166 impressions GSC
    demonym: 'Maranellesi',
    landmarks: ['Museo Ferrari', 'Stabilimento Ferrari'],
    famousFor: 'la Ferrari e i motori'
  },
  {
    id: 'vignola',
    slug: 'vignola',
    name: 'Vignola',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 26170,
    geo: { lat: 44.28, lng: 11.0058 },
    priority: 1,
    highImpression: true, // 245 impressions GSC
    demonym: 'Vignolesi',
    landmarks: ['Rocca di Vignola'],
    famousFor: 'le ciliegie e l\'agricoltura di qualità'
  },
  {
    id: 'fiorano-modenese',
    slug: 'fiorano-modenese',
    name: 'Fiorano Modenese',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 16723,
    geo: { lat: 44.32, lng: 10.49 },
    priority: 2,
    highImpression: true, // 48 impressions GSC "programmi personalizzati fiorano"
    demonym: 'Fioranesi',
    landmarks: ['Santuario della Beata Vergine'],
    famousFor: 'la pista Ferrari e la ceramica'
  },
  {
    id: 'castelfranco-emilia',
    slug: 'castelfranco-emilia',
    name: 'Castelfranco Emilia',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 33245,
    geo: { lat: 44.5972, lng: 11.0522 },
    priority: 1,
    highImpression: true, // 124 impressions GSC
    demonym: 'Castelfranchesi',
    famousFor: 'il tortellino tradizionale'
  },
  {
    id: 'mirandola',
    slug: 'mirandola',
    name: 'Mirandola',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 23867,
    geo: { lat: 44.8878, lng: 11.0661 },
    priority: 2,
    highImpression: true, // 2 impressions GSC (software mirandola)
  },
  {
    id: 'spilamberto',
    slug: 'spilamberto',
    name: 'Spilamberto',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 13125,
    geo: { lat: 44.5333, lng: 11.0167 },
    priority: 1,
    highImpression: true, // 364 impressions GSC!
  },
  {
    id: 'nonantola',
    slug: 'nonantola',
    name: 'Nonantola',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 16221,
    geo: { lat: 44.6756, lng: 11.0411 },
    priority: 2,
    highImpression: true, // 7 impressions GSC
  },
  {
    id: 'pavullo-nel-frignano',
    slug: 'pavullo-nel-frignano',
    name: 'Pavullo nel Frignano',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 17349,
    geo: { lat: 44.3333, lng: 10.8333 },
    priority: 2,
  },
  {
    id: 'soliera',
    slug: 'soliera',
    name: 'Soliera',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 15459,
    geo: { lat: 44.7389, lng: 10.9250 },
    priority: 3,
  },
  {
    id: 'finale-emilia',
    slug: 'finale-emilia',
    name: 'Finale Emilia',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 15689,
    geo: { lat: 44.8333, lng: 11.3000 },
    priority: 3,
  },
  {
    id: 'castelnuovo-rangone',
    slug: 'castelnuovo-rangone',
    name: 'Castelnuovo Rangone',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 15123,
    geo: { lat: 44.5500, lng: 10.9333 },
    priority: 2,
  },
  {
    id: 'campogalliano',
    slug: 'campogalliano',
    name: 'Campogalliano',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 8834,
    geo: { lat: 44.6894, lng: 10.8456 },
    priority: 3,
    highImpression: true, // 2 impressions GSC
  },
  {
    id: 'montale-rangone',
    slug: 'montale-rangone',
    name: 'Castelnuovo Rangone', // Montale is a frazione of Castelnuovo - mapped to parent
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 15123,
    geo: { lat: 44.5500, lng: 10.9333 },
    priority: 3,
    highImpression: true, // 2 impressions GSC
  },
  {
    id: 'marano-sul-panaro',
    slug: 'marano-sul-panaro',
    name: 'Marano sul Panaro',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 4836,
    geo: { lat: 44.4667, lng: 10.9667 },
    priority: 3,
  },
  {
    id: 'savignano-sul-panaro',
    slug: 'savignano-sul-panaro',
    name: 'Savignano sul Panaro',
    province: 'Modena',
    region: 'Emilia-Romagna',
    population: 9542,
    geo: { lat: 44.4833, lng: 11.0333 },
    priority: 3,
  },

  // ---------------------------------------------------------------------------
  // PROVINCIA DI REGGIO EMILIA (Secondary Focus)
  // ---------------------------------------------------------------------------
  {
    id: 'reggio-emilia',
    slug: 'reggio-emilia',
    name: 'Reggio Emilia',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 171337,
    geo: { lat: 44.6982, lng: 10.6312 },
    priority: 1,
    highImpression: true,
    demonym: 'Reggiani',
    landmarks: ['Ponte di Calatrava', 'Teatro Valli'],
    famousFor: 'il tricolore e l\'educazione'
  },
  {
    id: 'correggio',
    slug: 'correggio',
    name: 'Correggio',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 25799,
    geo: { lat: 44.7706, lng: 10.7794 },
    priority: 2,
    demonym: 'Correggesi'
  },
  {
    id: 'scandiano',
    slug: 'scandiano',
    name: 'Scandiano',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 25648,
    geo: { lat: 44.5944, lng: 10.6903 },
    priority: 2,
  },
  {
    id: 'castelnovo-ne-monti',
    slug: 'castelnovo-ne-monti',
    name: "Castelnovo ne' Monti",
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 10500,
    geo: { lat: 44.566667, lng: 10.666667 },
    priority: 2,
  },
  {
    id: 'carpineti',
    slug: 'carpineti',
    name: 'Carpineti',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 4500,
    geo: { lat: 44.3, lng: 10.3 },
    priority: 3,
  },
  {
    id: 'guastalla',
    slug: 'guastalla',
    name: 'Guastalla',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 15280,
    geo: { lat: 44.9203, lng: 10.6556 },
    priority: 2,
  },
  {
    id: 'rubiera',
    slug: 'rubiera',
    name: 'Rubiera',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 14989,
    geo: { lat: 44.6500, lng: 10.7833 },
    priority: 2,
  },
  {
    id: 'montecchio-emilia',
    slug: 'montecchio-emilia',
    name: 'Montecchio Emilia',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 10583,
    geo: { lat: 44.7000, lng: 10.4500 },
    priority: 3,
  },
  {
    id: 'novellara',
    slug: 'novellara',
    name: 'Novellara',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 13907,
    geo: { lat: 44.8458, lng: 10.7283 },
    priority: 3,
  },
  {
    id: 'cavriago',
    slug: 'cavriago',
    name: 'Cavriago',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 9979,
    geo: { lat: 44.6917, lng: 10.5278 },
    priority: 3,
  },
  {
    id: 'bagnolo-in-piano',
    slug: 'bagnolo-in-piano',
    name: 'Bagnolo in Piano',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 9649,
    geo: { lat: 44.7667, lng: 10.6833 },
    priority: 3,
  },

  // ---------------------------------------------------------------------------
  // PROVINCIA DI BOLOGNA (Tertiary Focus - High Volume)
  // ---------------------------------------------------------------------------
  {
    id: 'bologna',
    slug: 'bologna',
    name: 'Bologna',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 392564,
    geo: { lat: 44.4949, lng: 11.3426 },
    priority: 1,
    highImpression: true,
    demonym: 'Bolognesi',
    landmarks: ['Due Torri', 'San Petronio', 'Piazza Maggiore'],
    famousFor: 'la cucina e l\'università'
  },
  {
    id: 'imola',
    slug: 'imola',
    name: 'Imola',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 70023,
    geo: { lat: 44.3528, lng: 11.7144 },
    priority: 2,
    demonym: 'Imolesi',
    famousFor: 'l\'autodromo e la Formula 1'
  },
  {
    id: 'casalecchio-di-reno',
    slug: 'casalecchio-di-reno',
    name: 'Casalecchio di Reno',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 36589,
    geo: { lat: 44.4750, lng: 11.2833 },
    priority: 2,
  },
  {
    id: 'san-lazzaro-di-savena',
    slug: 'san-lazzaro-di-savena',
    name: 'San Lazzaro di Savena',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 32458,
    geo: { lat: 44.4683, lng: 11.4092 },
    priority: 2,
  },
  {
    id: 'castel-maggiore',
    slug: 'castel-maggiore',
    name: 'Castel Maggiore',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 18529,
    geo: { lat: 44.5694, lng: 11.3658 },
    priority: 2,
    highImpression: true, // 1 impression GSC
  },
  {
    id: 'zola-predosa',
    slug: 'zola-predosa',
    name: 'Zola Predosa',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 19021,
    geo: { lat: 44.4906, lng: 11.2192 },
    priority: 3,
  },
  {
    id: 'san-giovanni-in-persiceto',
    slug: 'san-giovanni-in-persiceto',
    name: 'San Giovanni in Persiceto',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 28374,
    geo: { lat: 44.6333, lng: 11.1833 },
    priority: 2,
  },
  {
    id: 'valsamoggia',
    slug: 'valsamoggia',
    name: 'Valsamoggia',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 31124,
    geo: { lat: 44.4500, lng: 11.1000 },
    priority: 2,
  },
  {
    id: 'pianoro',
    slug: 'pianoro',
    name: 'Pianoro',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 17543,
    geo: { lat: 44.3833, lng: 11.3333 },
    priority: 3,
  },
  {
    id: 'budrio',
    slug: 'budrio',
    name: 'Budrio',
    province: 'Bologna',
    region: 'Emilia-Romagna',
    population: 18425,
    geo: { lat: 44.5361, lng: 11.5336 },
    priority: 3,
  },

  // ---------------------------------------------------------------------------
  // PROVINCIA DI PARMA
  // ---------------------------------------------------------------------------
  {
    id: 'parma',
    slug: 'parma',
    name: 'Parma',
    province: 'Parma',
    region: 'Emilia-Romagna',
    population: 198292,
    geo: { lat: 44.8015, lng: 10.3279 },
    priority: 1,
    highImpression: true, // 1 impression GSC
    demonym: 'Parmigiani',
    landmarks: ['Battistero', 'Teatro Regio'],
    famousFor: 'il prosciutto e la musica lirica'
  },
  {
    id: 'fidenza',
    slug: 'fidenza',
    name: 'Fidenza',
    province: 'Parma',
    region: 'Emilia-Romagna',
    population: 27061,
    geo: { lat: 44.8667, lng: 10.0667 },
    priority: 2,
  },
  {
    id: 'langhirano',
    slug: 'langhirano',
    name: 'Langhirano',
    province: 'Parma',
    region: 'Emilia-Romagna',
    population: 10682,
    geo: { lat: 44.6167, lng: 10.2667 },
    priority: 3,
  },
  {
    id: 'collecchio',
    slug: 'collecchio',
    name: 'Collecchio',
    province: 'Parma',
    region: 'Emilia-Romagna',
    population: 14789,
    geo: { lat: 44.7500, lng: 10.2167 },
    priority: 3,
  },
  {
    id: 'salsomaggiore-terme',
    slug: 'salsomaggiore-terme',
    name: 'Salsomaggiore Terme',
    province: 'Parma',
    region: 'Emilia-Romagna',
    population: 19425,
    geo: { lat: 44.8167, lng: 9.9833 },
    priority: 3,
  },

  // ---------------------------------------------------------------------------
  // PROVINCIA DI PIACENZA
  // ---------------------------------------------------------------------------
  {
    id: 'piacenza',
    slug: 'piacenza',
    name: 'Piacenza',
    province: 'Piacenza',
    region: 'Emilia-Romagna',
    population: 104358,
    geo: { lat: 45.0526, lng: 9.6930 },
    priority: 2,
    highImpression: true, // 2 impressions GSC
  },
  {
    id: 'fiorenzuola-d-arda',
    slug: 'fiorenzuola-d-arda',
    name: "Fiorenzuola d'Arda",
    province: 'Piacenza',
    region: 'Emilia-Romagna',
    population: 15412,
    geo: { lat: 44.9333, lng: 9.9167 },
    priority: 3,
  },

  // ---------------------------------------------------------------------------
  // PROVINCIA DI FERRARA
  // ---------------------------------------------------------------------------
  {
    id: 'ferrara',
    slug: 'ferrara',
    name: 'Ferrara',
    province: 'Ferrara',
    region: 'Emilia-Romagna',
    population: 132009,
    geo: { lat: 44.8381, lng: 11.6179 },
    priority: 2,
  },
  {
    id: 'cento',
    slug: 'cento',
    name: 'Cento',
    province: 'Ferrara',
    region: 'Emilia-Romagna',
    population: 35842,
    geo: { lat: 44.7333, lng: 11.2833 },
    priority: 3,
  },
  {
    id: 'comacchio',
    slug: 'comacchio',
    name: 'Comacchio',
    province: 'Ferrara',
    region: 'Emilia-Romagna',
    population: 22354,
    geo: { lat: 44.6944, lng: 12.1833 },
    priority: 3,
  },

  // ---------------------------------------------------------------------------
  // PROVINCIA DI RAVENNA
  // ---------------------------------------------------------------------------
  {
    id: 'ravenna',
    slug: 'ravenna',
    name: 'Ravenna',
    province: 'Ravenna',
    region: 'Emilia-Romagna',
    population: 159116,
    geo: { lat: 44.4184, lng: 12.2035 },
    priority: 2,
    highImpression: true, // 2-3 impressions GSC
  },
  {
    id: 'faenza',
    slug: 'faenza',
    name: 'Faenza',
    province: 'Ravenna',
    region: 'Emilia-Romagna',
    population: 59335,
    geo: { lat: 44.2894, lng: 11.8817 },
    priority: 2,
    highImpression: true, // 6+ impressions GSC
  },
  {
    id: 'lugo',
    slug: 'lugo',
    name: 'Lugo',
    province: 'Ravenna',
    region: 'Emilia-Romagna',
    population: 32451,
    geo: { lat: 44.4178, lng: 11.9094 },
    priority: 3,
  },

  // ---------------------------------------------------------------------------
  // PROVINCIA DI FORLI-CESENA
  // ---------------------------------------------------------------------------
  {
    id: 'forli',
    slug: 'forli',
    name: 'Forli',
    province: 'Forli-Cesena',
    region: 'Emilia-Romagna',
    population: 117913,
    geo: { lat: 44.2225, lng: 12.0407 },
    priority: 2,
  },
  {
    id: 'cesena',
    slug: 'cesena',
    name: 'Cesena',
    province: 'Forli-Cesena',
    region: 'Emilia-Romagna',
    population: 97056,
    geo: { lat: 44.1391, lng: 12.2431 },
    priority: 2,
    highImpression: true, // 6+ impressions GSC
  },

  // ---------------------------------------------------------------------------
  // PROVINCIA DI RIMINI
  // ---------------------------------------------------------------------------
  {
    id: 'rimini',
    slug: 'rimini',
    name: 'Rimini',
    province: 'Rimini',
    region: 'Emilia-Romagna',
    population: 150755,
    geo: { lat: 44.0593, lng: 12.5681 },
    priority: 2,
  },
  {
    id: 'riccione',
    slug: 'riccione',
    name: 'Riccione',
    province: 'Rimini',
    region: 'Emilia-Romagna',
    population: 35064,
    geo: { lat: 43.9958, lng: 12.6533 },
    priority: 3,
  },
  {
    id: 'bellaria-igea-marina',
    slug: 'bellaria-igea-marina',
    name: 'Bellaria-Igea Marina',
    province: 'Rimini',
    region: 'Emilia-Romagna',
    population: 19825,
    geo: { lat: 44.1436, lng: 12.4597 },
    priority: 3,
    highImpression: true, // 2 impressions GSC
  },

  // ---------------------------------------------------------------------------
  // VENETO
  // ---------------------------------------------------------------------------
  { id: 'venezia', slug: 'venezia', name: 'Venezia', province: 'Venezia', region: 'Veneto', population: 261321, geo: { lat: 45.4408, lng: 12.3155 }, priority: 1, highImpression: true, demonym: 'Veneziani' },
  { id: 'verona', slug: 'verona', name: 'Verona', province: 'Verona', region: 'Veneto', population: 258031, geo: { lat: 45.4384, lng: 10.9916 }, priority: 1, highImpression: true, demonym: 'Veronesi' },
  { id: 'padova', slug: 'padova', name: 'Padova', province: 'Padova', region: 'Veneto', population: 210173, geo: { lat: 45.4064, lng: 11.8768 }, priority: 1, highImpression: true, demonym: 'Padovani' },
  { id: 'vicenza', slug: 'vicenza', name: 'Vicenza', province: 'Vicenza', region: 'Veneto', population: 111500, geo: { lat: 45.5455, lng: 11.5354 }, priority: 1, demonym: 'Vicentini' },
  { id: 'treviso', slug: 'treviso', name: 'Treviso', province: 'Treviso', region: 'Veneto', population: 85254, geo: { lat: 45.6669, lng: 12.2423 }, priority: 1, demonym: 'Trevigiani' },
  { id: 'bassano-del-grappa', slug: 'bassano-del-grappa', name: 'Bassano del Grappa', province: 'Vicenza', region: 'Veneto', population: 43536, geo: { lat: 45.7667, lng: 11.7333 }, priority: 2, demonym: 'Bassanesi' },
  { id: 'chioggia', slug: 'chioggia', name: 'Chioggia', province: 'Venezia', region: 'Veneto', population: 49430, geo: { lat: 45.2197, lng: 12.2786 }, priority: 2, demonym: 'Chioggiotti' },
  { id: 'conegliano', slug: 'conegliano', name: 'Conegliano', province: 'Treviso', region: 'Veneto', population: 35082, geo: { lat: 45.8872, lng: 12.3008 }, priority: 2, demonym: 'Coneglianesi' },
  { id: 'montebelluna', slug: 'montebelluna', name: 'Montebelluna', province: 'Treviso', region: 'Veneto', population: 31258, geo: { lat: 45.7753, lng: 12.0464 }, priority: 2, demonym: 'Montebellunesi' },
  { id: 'mestre', slug: 'mestre', name: 'Mestre', province: 'Venezia', region: 'Veneto', population: 180000, geo: { lat: 45.4906, lng: 12.2425 }, priority: 1, highImpression: true, demonym: 'Mestrini' },

  // ---------------------------------------------------------------------------
  // LOMBARDIA
  // ---------------------------------------------------------------------------
  { id: 'milano', slug: 'milano', name: 'Milano', province: 'Milano', region: 'Lombardia', population: 1396059, geo: { lat: 45.4642, lng: 9.1900 }, priority: 1, highImpression: true, demonym: 'Milanesi' },
  { id: 'brescia', slug: 'brescia', name: 'Brescia', province: 'Brescia', region: 'Lombardia', population: 196745, geo: { lat: 45.5416, lng: 10.2118 }, priority: 1, demonym: 'Bresciani' },
  { id: 'bergamo', slug: 'bergamo', name: 'Bergamo', province: 'Bergamo', region: 'Lombardia', population: 121316, geo: { lat: 45.6983, lng: 9.6773 }, priority: 1, demonym: 'Bergamaschi' },
  { id: 'monza', slug: 'monza', name: 'Monza', province: 'Monza e Brianza', region: 'Lombardia', population: 123598, geo: { lat: 45.5845, lng: 9.2744 }, priority: 1, demonym: 'Monzesi' },
  { id: 'cremona', slug: 'cremona', name: 'Cremona', province: 'Cremona', region: 'Lombardia', population: 72077, geo: { lat: 45.1332, lng: 10.0227 }, priority: 2, demonym: 'Cremonesi' },
  { id: 'pavia', slug: 'pavia', name: 'Pavia', province: 'Pavia', region: 'Lombardia', population: 73086, geo: { lat: 45.1849, lng: 9.1583 }, priority: 2, demonym: 'Pavesi' },
  { id: 'mantova', slug: 'mantova', name: 'Mantova', province: 'Mantova', region: 'Lombardia', population: 49409, geo: { lat: 45.1564, lng: 10.7914 }, priority: 2, demonym: 'Mantovani' },
  { id: 'como', slug: 'como', name: 'Como', province: 'Como', region: 'Lombardia', population: 84834, geo: { lat: 45.8081, lng: 9.0852 }, priority: 2, demonym: 'Comaschi' },
  { id: 'lecco', slug: 'lecco', name: 'Lecco', province: 'Lecco', region: 'Lombardia', population: 48131, geo: { lat: 45.8566, lng: 9.3977 }, priority: 2, demonym: 'Lecchesi' },
  { id: 'varese', slug: 'varese', name: 'Varese', province: 'Varese', region: 'Lombardia', population: 80511, geo: { lat: 45.8206, lng: 8.8251 }, priority: 2, demonym: 'Varesini' },

  // ---------------------------------------------------------------------------
  // TOSCANA
  // ---------------------------------------------------------------------------
  { id: 'firenze', slug: 'firenze', name: 'Firenze', province: 'Firenze', region: 'Toscana', population: 382258, geo: { lat: 43.7696, lng: 11.2558 }, priority: 1, highImpression: true, demonym: 'Fiorentini' },
  { id: 'prato', slug: 'prato', name: 'Prato', province: 'Prato', region: 'Toscana', population: 195884, geo: { lat: 43.8777, lng: 11.1022 }, priority: 1, demonym: 'Pratesi' },
  { id: 'livorno', slug: 'livorno', name: 'Livorno', province: 'Livorno', region: 'Toscana', population: 158493, geo: { lat: 43.5485, lng: 10.3106 }, priority: 1, demonym: 'Livornesi' },
  { id: 'pisa', slug: 'pisa', name: 'Pisa', province: 'Pisa', region: 'Toscana', population: 90488, geo: { lat: 43.7228, lng: 10.4017 }, priority: 1, demonym: 'Pisani' },
  { id: 'arezzo', slug: 'arezzo', name: 'Arezzo', province: 'Arezzo', region: 'Toscana', population: 99543, geo: { lat: 43.4612, lng: 11.8810 }, priority: 2, demonym: 'Aretini' },
  { id: 'lucca', slug: 'lucca', name: 'Lucca', province: 'Lucca', region: 'Toscana', population: 89046, geo: { lat: 43.8429, lng: 10.5027 }, priority: 2, demonym: 'Lucchesi' },
  { id: 'pistoia', slug: 'pistoia', name: 'Pistoia', province: 'Pistoia', region: 'Toscana', population: 90363, geo: { lat: 43.9301, lng: 10.9125 }, priority: 2, demonym: 'Pistoiesi' },
  { id: 'grosseto', slug: 'grosseto', name: 'Grosseto', province: 'Grosseto', region: 'Toscana', population: 82284, geo: { lat: 42.7674, lng: 11.1097 }, priority: 2, demonym: 'Grossetani' },
  { id: 'siena', slug: 'siena', name: 'Siena', province: 'Siena', region: 'Toscana', population: 53901, geo: { lat: 43.3188, lng: 11.3308 }, priority: 2, demonym: 'Senesi' },
  
  // Import additional cities from expansion file
  // NOTE: These will be merged at build time
];

// Merge with additional locations (this happens at module load)
import { ALL_ADDITIONAL_LOCATIONS } from './locations-expansion';

// Extend the Province type to include new provinces
export type AdditionalProvince = 
  | 'Torino' | 'Novara' | 'Alessandria' | 'Asti' | 'Cuneo' | 'Biella' | 'Vercelli'
  | 'Genova' | 'Savona' | 'La Spezia' | 'Imperia'
  | 'Trieste' | 'Udine' | 'Pordenone' | 'Gorizia'
  | 'Trento' | 'Bolzano'
  | 'Aosta'
  | 'Ancona' | 'Pesaro e Urbino' | 'Macerata' | 'Ascoli Piceno' | 'Fermo'
  | 'Perugia' | 'Terni'
  | "L'Aquila" | 'Pescara' | 'Chieti' | 'Teramo'
  | 'Campobasso' | 'Isernia'
  | 'Napoli' | 'Salerno' | 'Caserta' | 'Avellino' | 'Benevento'
  | 'Bari' | 'Taranto' | 'Foggia' | 'Lecce' | 'Brindisi'
  | 'Palermo' | 'Catania' | 'Messina' | 'Siracusa' | 'Trapani' | 'Ragusa'
  | 'Cagliari' | 'Sassari' | 'Nuoro' | 'Oristano'
  | 'Massa-Carrara';

// Combine all locations
const ALL_LOCATIONS: Location[] = [...LOCATIONS, ...ALL_ADDITIONAL_LOCATIONS];

// Override LOCATIONS with combined array
(LOCATIONS as Location[]).length = 0;
ALL_LOCATIONS.forEach(loc => (LOCATIONS as Location[]).push(loc));

// =============================================================================
// DERIVED ARRAYS AND UTILITIES
// =============================================================================

/** All location slugs (for backwards compatibility) */
export const TARGET_CITY_SLUGS = LOCATIONS.map(l => l.slug) as readonly string[];

/** Cities eligible for niche pages (population > 50k or high impression) */
export const NICHE_CITY_SLUGS = LOCATIONS
  .filter(l => l.population >= 50000 || l.highImpression)
  .map(l => l.slug) as readonly string[];

/** High-priority cities for internal linking */
export const PRIORITY_CITY_SLUGS = LOCATIONS
  .filter(l => l.priority === 1)
  .map(l => l.slug) as readonly string[];

// Sets for fast lookups
const TARGET_CITY_SET = new Set<string>(TARGET_CITY_SLUGS);
export const NICHE_CITY_SET = new Set<string>(NICHE_CITY_SLUGS);
const PRIORITY_CITY_SET = new Set<string>(PRIORITY_CITY_SLUGS);

// =============================================================================
// ACCESSOR FUNCTIONS
// =============================================================================

export type TargetCitySlug = typeof TARGET_CITY_SLUGS[number];
export type NicheCitySlug = typeof NICHE_CITY_SLUGS[number];

/** Check if slug is a valid target city */
export function isTargetCitySlug(slug: string): slug is TargetCitySlug {
  return TARGET_CITY_SET.has(slug);
}

/** Check if slug is eligible for niche pages */
export function isNicheCitySlug(slug: string): slug is NicheCitySlug {
  return NICHE_CITY_SET.has(slug);
}

/** Check if slug is a high-priority city */
export function isPriorityCitySlug(slug: string): boolean {
  return PRIORITY_CITY_SET.has(slug);
}

/** Get location by slug */
export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find(loc => loc.slug === slug);
}

/** Get all location slugs */
export function getAllLocationSlugs(): string[] {
  return [...TARGET_CITY_SLUGS];
}

/** Get locations by province */
export function getLocationsByProvince(province: Province): Location[] {
  return LOCATIONS.filter(loc => loc.province === province);
}

/** Get all provinces */
export function getAllProvinces(): Province[] {
  return [...new Set(LOCATIONS.map(l => l.province as Province))];
}

/** Get location by ID */
export function getLocationById(id: string): Location | undefined {
  return LOCATIONS.find(loc => loc.id === id);
}

/** Get locations eligible for a specific service based on minimum population */
export function getLocationsForService(minPopulation: number): Location[] {
  return LOCATIONS.filter(loc => loc.population >= minPopulation);
}

/** Get high-impression locations */
export function getHighImpressionLocations(): Location[] {
  return LOCATIONS.filter(loc => loc.highImpression === true);
}

/** Get locations by priority tier */
export function getLocationsByPriority(priority: 1 | 2 | 3): Location[] {
  return LOCATIONS.filter(loc => loc.priority === priority);
}

/** Get nearby cities (by distance) */
export function getNearbyCities(slug: string, limit: number = 5): Location[] {
  const current = getLocationBySlug(slug);
  if (!current) return [];

  return LOCATIONS
    .filter(loc => loc.slug !== slug)
    .map(loc => ({
      location: loc,
      distance: calculateDistance(current.geo, loc.geo),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map(item => item.location);
}

/** Calculate distance between two points (Haversine formula) */
function calculateDistance(
  point1: { lat: number; lng: number },
  point2: { lat: number; lng: number }
): number {
  const R = 6371; // Earth's radius in km
  const dLat = (point2.lat - point1.lat) * Math.PI / 180;
  const dLon = (point2.lng - point1.lng) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// =============================================================================
// LEGACY EXPORTS (for backwards compatibility)
// =============================================================================

/** @deprecated Use LOCATIONS instead */
export const locations = LOCATIONS;

/** @deprecated Use getLocationsForService() instead */
export const targetLocations = LOCATIONS;

/** @deprecated Use getLocationsForService() with niche population threshold instead */
export const nicheEligibleLocations = LOCATIONS.filter(loc => NICHE_CITY_SET.has(loc.slug));
