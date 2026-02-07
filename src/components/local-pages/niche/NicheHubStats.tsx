'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Award,
  TrendingDown,
  CalendarCheck,
  Star,
  Clock,
  Heart,
  Search,
  Eye,
  BarChart3,
  Percent,
  MapPin,
  Phone,
  CreditCard,
  Shield,
  Zap,
  CheckCircle,
  LucideIcon
} from 'lucide-react';

// Mappatura nome icona -> componente Lucide
const ICON_MAP: Record<string, LucideIcon> = {
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'target': Target,
  'users': Users,
  'award': Award,
  'calendar-check': CalendarCheck,
  'star': Star,
  'clock': Clock,
  'heart': Heart,
  'search': Search,
  'eye': Eye,
  'bar-chart': BarChart3,
  'percent': Percent,
  'map-pin': MapPin,
  'phone': Phone,
  'credit-card': CreditCard,
  'shield': Shield,
  'zap': Zap,
  'check-circle': CheckCircle,
  'trendingup': TrendingUp,
  'trendingdown': TrendingDown,
};

interface Stat {
  value: string;
  label: string;
  source: string;
  icon?: string;
}

interface NicheHubStatsProps {
  title: string;
  stats: Stat[];
}

export default function NicheHubStats({ title, stats }: NicheHubStatsProps) {
  return (
    <section className="py-24 bg-[#050805] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFBC11]/10 rounded-full blur-[150px]" />

      <div className="relative container max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[#FFBC11] text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Perché È Importante
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I numeri che dimostrano l'importanza di una presenza online professionale per il tuo settore.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            // Ottieni l'icona specifica dello stat, o usa default basato sull'indice
            const iconName = stat.icon;
            const IconComponent = iconName && ICON_MAP[iconName] 
              ? ICON_MAP[iconName] 
              : ICON_MAP[Object.keys(ICON_MAP)[idx % Object.keys(ICON_MAP).length]] || TrendingUp;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-4">
                  <IconComponent className="w-8 h-8 text-[#FFBC11]" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">
                  {stat.source}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FFBC11]/10 border border-[#FFBC11]/20 rounded-full">
            <Award className="w-5 h-5 text-[#FFBC11]" />
            <span className="text-[#FFBC11] font-medium">Dati aggiornati e verificabili</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
