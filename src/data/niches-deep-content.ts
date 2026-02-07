/**
 * NICHE DEEP CONTENT DATABASE - Phase 1
 * 
 * Contenuto specifico per nicchie principali:
 * - 4 KPI settore-specifici
 * - 6 problemi con icone appropriate
 * 
 * NOTA: Espandere gradualmente per tutte le 18 nicchie
 */

import {
  Utensils,
  CalendarCheck,
  Star,
  TrendingUp,
  Users,
  Clock,
  Scissors,
  Sparkles,
  Calendar,
  Instagram,
  Leaf,
  Tractor,
  Home,
  Scale,
  FileText,
  Briefcase,
  Dumbbell,
  Heart,
  Stethoscope,
  CalendarDays,
  Bed,
  MapPin,
  Wifi,
  Key,
  ShoppingBag,
  Gem,
  Smartphone,
  Package,
  Truck,
  UtensilsCrossed,
  Shield,
  Search,
  Eye,
  CreditCard,
  Phone,
  BarChart3,
  Percent,
  ArrowUp,
  ArrowDown,
  UserX,
  TrendingDown,
  Building,
  Image,
} from 'lucide-react';

// Tipi
export interface NicheKPI {
  value: string;
  label: string;
  sublabel?: string;
  icon: React.ComponentType<{ className?: string }>;
  trend: 'up' | 'down' | 'neutral';
}

export interface NicheProblem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
}

export interface NicheDeepContent {
  kpis: NicheKPI[];
  problems: NicheProblem[];
}

// =============================================================================
// RISTORANTI
// =============================================================================
export const RISTORANTI_CONTENT: NicheDeepContent = {
  kpis: [
    { value: '+40%', label: 'Prenotazioni Online', sublabel: 'incremento medio', icon: CalendarCheck, trend: 'up' },
    { value: '70%', label: 'Consultano Menu', sublabel: 'prima di prenotare', icon: Utensils, trend: 'neutral' },
    { value: '-50%', label: 'Telefonate', sublabel: 'risparmio tempo', icon: Phone, trend: 'down' },
    { value: '+25%', label: 'Ticket Medio', sublabel: 'upselling digitale', icon: TrendingUp, trend: 'up' },
  ],
  problems: [
    {
      icon: Phone,
      title: 'Telefono Occupato Durante Servizio',
      description: 'Clienti che chiamano mentre lavori. Perdi prenotazioni e interrompi il flusso.',
      tag: 'DISPONIBILITÀ',
    },
    {
      icon: UtensilsCrossed,
      title: 'Menu PDF Obsoleto',
      description: 'Prezzi cambiati, piatti stagionali finiti. Confusione e recensioni negative.',
      tag: 'AGGIORNAMENTO',
    },
    {
      icon: Star,
      title: 'Recensioni Ignorate',
      description: 'Critiche su Google senza risposta. Reputazione che peggiora in silenzio.',
      tag: 'REPUTAZIONE',
    },
    {
      icon: Clock,
      title: 'Orari Confusi Online',
      description: 'Clienti arrivano quando sei chiuso. Frustrazione e recensioni negative.',
      tag: 'INFORMAZIONE',
    },
    {
      icon: Image,
      title: 'Foto Amatoriali',
      description: 'Immagini scattate con cellulare non valorizzano il cibo e l ambiente.',
      tag: 'IMMAGINE',
    },
    {
      icon: Users,
      title: 'Nessun Database Clienti',
      description: 'Non raccogli contatti per fidelizzazione e marketing mirato.',
      tag: 'MARKETING',
    },
  ],
};

// =============================================================================
// HOTEL
// =============================================================================
export const HOTEL_CONTENT: NicheDeepContent = {
  kpis: [
    { value: '-30%', label: 'Commissioni OTA', sublabel: 'Booking, Expedia', icon: Percent, trend: 'down' },
    { value: '+35%', label: 'Prenotazioni Dirette', sublabel: 'vs intermediari', icon: TrendingUp, trend: 'up' },
    { value: '4.8★', label: 'Media Recensioni', sublabel: 'reputazione gestita', icon: Star, trend: 'up' },
    { value: '+€45', label: 'ADR Incremento', sublabel: 'average daily rate', icon: TrendingUp, trend: 'up' },
  ],
  problems: [
    {
      icon: Percent,
      title: 'Commissioni del 15-20%',
      description: 'Su €100 camera, perdi €15-20. Margini ridotti dai portali esterni.',
      tag: 'COSTI',
    },
    {
      icon: Key,
      title: 'Dipendenza OTA',
      description: '70% prenotazioni da portali. Se chiudono o aumentano, rimani senza clienti.',
      tag: 'RISCHIO',
    },
    {
      icon: Star,
      title: 'Recensioni Non Gestite',
      description: 'Ogni recensione negativa costa 10 prenotazioni. Manca risposta attiva.',
      tag: 'REPUTAZIONE',
    },
    {
      icon: Bed,
      title: 'Up-selling Manuale',
      description: 'Perdi vendite suite e servizi extra. Cliente non sa cosa offri.',
      tag: 'REVENUE',
    },
    {
      icon: Wifi,
      title: 'Servizi Non Comunicati',
      description: 'Spa, ristorante, shuttle scoperti solo all arrivo. Manca pre-arrival upsell.',
      tag: 'COMUNICAZIONE',
    },
    {
      icon: MapPin,
      title: 'Territorio Non Valorizzato',
      description: 'Attrazioni locali ignorate. Perdi pacchetti esperienza e pernottamenti.',
      tag: 'ESPANDIBILITÀ',
    },
  ],
};

// =============================================================================
// SALONI BELLEZZA
// =============================================================================
export const SALONI_BELLEZZA_CONTENT: NicheDeepContent = {
  kpis: [
    { value: '+60%', label: 'Prenotazioni Online', sublabel: '24/7 automatiche', icon: CalendarCheck, trend: 'up' },
    { value: '-40%', label: 'No-Show', sublabel: 'con reminder', icon: UserX, trend: 'down' },
    { value: '+30%', label: 'Fidelizzazione', sublabel: 'programma punti', icon: Heart, trend: 'up' },
    { value: '4.9★', label: 'Soddisfazione', sublabel: 'recensioni gestite', icon: Star, trend: 'up' },
  ],
  problems: [
    {
      icon: Phone,
      title: 'Telefono Sempre Occupato',
      description: 'Chiamate mentre tagli. Perdi appuntamenti per mancata risposta.',
      tag: 'DISPONIBILITÀ',
    },
    {
      icon: UserX,
      title: 'Clienti Non Si Presentano',
      description: '2-3 no-show a settimana. Tempo perso e fatturato mancato.',
      tag: 'GESTIONE',
    },
    {
      icon: Scissors,
      title: 'Portfolio Nascosto',
      description: 'Foto migliori tagli nel telefono. Clienti non vedono qualità prima.',
      tag: 'PORTFOLIO',
    },
    {
      icon: Sparkles,
      title: 'Prezzi Non Chiari',
      description: 'Chiamate per sapere costo colore. Manca tariffario trasparente.',
      tag: 'TRASPARENZA',
    },
    {
      icon: Heart,
      title: 'Nessuna Fedeltà',
      description: 'Clienti abituali non premiati. Perso marketing mirato.',
      tag: 'FEDELTÀ',
    },
    {
      icon: Star,
      title: 'Recensioni Ignorate',
      description: 'Positive non richieste, negative non gestite. Reputazione cala.',
      tag: 'REPUTAZIONE',
    },
  ],
};

// =============================================================================
// DENTISTI
// =============================================================================
export const DENTISTI_CONTENT: NicheDeepContent = {
  kpis: [
    { value: '+45%', label: 'Lead Qualificati', sublabel: 'da ricerca organica', icon: Search, trend: 'up' },
    { value: '-35%', label: 'Costo Acquisizione', sublabel: 'vs Google Ads', icon: TrendingDown, trend: 'down' },
    { value: '3.2x', label: 'ROI Marketing', sublabel: 'sito ottimizzato', icon: BarChart3, trend: 'up' },
    { value: '+28%', label: 'Pazienti Nuovi', sublabel: 'primo anno', icon: Users, trend: 'up' },
  ],
  problems: [
    {
      icon: Search,
      title: 'Pagina 3 su Google',
      description: 'Pazienti cercano dentisti ma trovano competitor. Perdi appuntamenti.',
      tag: 'VISIBILITÀ',
    },
    {
      icon: Phone,
      title: 'Segreteria Occupata',
      description: 'Telefono squilla durante visite. Pazienti desistono dopo 3 tentativi.',
      tag: 'RISPOSTA',
    },
    {
      icon: Stethoscope,
      title: 'Servizi Non Spiegati',
      description: 'Impianti, ortodonzia, sbiancamento incompresi. Manca informazione chiara.',
      tag: 'INFORMAZIONE',
    },
    {
      icon: Shield,
      title: 'Nessuna Autorità Online',
      description: 'Manca contenuto che dimostri competenza. Pazienti non si fidano.',
      tag: 'CREDIBILITÀ',
    },
    {
      icon: CalendarDays,
      title: 'Agenda Disorganizzata',
      description: 'Prenotazioni WhatsApp/telefono caotiche. Doppi appuntamenti e buchi.',
      tag: 'ORGANIZZAZIONE',
    },
    {
      icon: Star,
      title: 'Recensioni Non Sfruttate',
      description: 'Pazienti soddisfatti non lasciano recensioni. Perso social proof.',
      tag: 'REPUTAZIONE',
    },
  ],
};

// =============================================================================
// PALESTRE
// =============================================================================
export const PALESTRE_CONTENT: NicheDeepContent = {
  kpis: [
    { value: '+55%', label: 'Conversione', sublabel: 'visite → iscrizioni', icon: TrendingUp, trend: 'up' },
    { value: '-30%', label: 'Abbandoni', sublabel: 'con app tracking', icon: TrendingDown, trend: 'down' },
    { value: '+40%', label: 'Retention', sublabel: 'oltre 12 mesi', icon: Heart, trend: 'up' },
    { value: '4.7★', label: 'Rating', sublabel: 'recensioni gestite', icon: Star, trend: 'up' },
  ],
  problems: [
    {
      icon: Users,
      title: 'Acquisizione Difficile',
      description: 'Solo passaparola. Manca canale lead generation misurabile.',
      tag: 'CRESCITA',
    },
    {
      icon: TrendingDown,
      title: 'Abbandoni Elevati',
      description: 'Pagano 3 mesi poi spariscono. Manca engagement digitale.',
      tag: 'RETENTION',
    },
    {
      icon: Dumbbell,
      title: 'Schede Cartacee',
      description: 'Programmi su fogli che si perdono. Nessun tracking digitale.',
      tag: 'DIGITALIZZAZIONE',
    },
    {
      icon: Calendar,
      title: 'Prenotazioni Caotiche',
      description: 'WhatsApp, telefono, reception. Overbooking e insoddisfazione.',
      tag: 'GESTIONE',
    },
    {
      icon: CreditCard,
      title: 'Pagamenti Manuali',
      description: 'Rincorrere pagamenti ogni mese. Manca ricorrenza automatica.',
      tag: 'AMMINISTRAZIONE',
    },
    {
      icon: Smartphone,
      title: 'Nessuna App',
      description: 'Membri usano notes. Competitor con app hanno vantaggio.',
      tag: 'TECNOLOGIA',
    },
  ],
};

// =============================================================================
// ARCHITETTI
// =============================================================================
export const ARCHITETTI_CONTENT: NicheDeepContent = {
  kpis: [
    { value: '+85%', label: 'Portfolio Visto', sublabel: 'online vs cartaceo', icon: Eye, trend: 'up' },
    { value: '+45%', label: 'Richieste', sublabel: 'da referenze digitali', icon: TrendingUp, trend: 'up' },
    { value: '-40%', label: 'Tempo', sublabel: 'presentazione progetti', icon: Clock, trend: 'down' },
    { value: '4.9★', label: 'Reputazione', sublabel: 'recensioni clienti', icon: Star, trend: 'up' },
  ],
  problems: [
    {
      icon: Image,
      title: 'Progetti Invisibili',
      description: 'Render e foto cantiere su hard disk. Nessuno li vede online.',
      tag: 'VISIBILITÀ',
    },
    {
      icon: Building,
      title: 'Processo Non Raccontato',
      description: 'Cliente non capisce cosa fai. Manca storytelling progettuale.',
      tag: 'COMUNICAZIONE',
    },
    {
      icon: FileText,
      title: 'Documentazione Dispersa',
      description: 'Progetti sparse, revisioni perse. Caos versioni e modifiche.',
      tag: 'ORGANIZZAZIONE',
    },
    {
      icon: Search,
      title: 'Non Trovati Localmente',
      description: 'Cercano architetti ma trovano solo grandi studi. Manca SEO.',
      tag: 'ACQUISIZIONE',
    },
    {
      icon: Briefcase,
      title: 'Preventivi Non Convertiti',
      description: 'Proponi ma chiudi poco. Manca trust building digitale.',
      tag: 'CONVERSIONE',
    },
    {
      icon: Clock,
      title: 'Riunioni Inutili',
      description: '2 ore in auto per revisioni visibili online. Tempo perso.',
      tag: 'EFFICIENZA',
    },
  ],
};

// Mappatura
export const NICHE_CONTENT_MAP: Record<string, NicheDeepContent> = {
  'ristoranti': RISTORANTI_CONTENT,
  'hotel': HOTEL_CONTENT,
  'saloni-bellezza': SALONI_BELLEZZA_CONTENT,
  'dentisti': DENTISTI_CONTENT,
  'palestre': PALESTRE_CONTENT,
  'architetti': ARCHITETTI_CONTENT,
};

export function getNicheContent(nicheSlug: string): NicheDeepContent {
  return NICHE_CONTENT_MAP[nicheSlug] || RISTORANTI_CONTENT;
}
