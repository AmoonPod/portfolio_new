'use client';

import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  CheckCircle2, 
  Tag,
  Percent,
  Smartphone,
  Star,
  Clock,
  Image,
  MapPin,
  Calendar,
  List,
  Instagram,
  Gift,
  ShoppingCart,
  Shield,
  Truck,
  Mail,
  Users,
  Heart,
  Video,
  Search,
  DollarSign,
  Grid3X3,
  Store,
  FileText,
  UtensilsCrossed,
  Phone,
  CreditCard,
  Shirt,
  Package,
  HelpCircle,
  Repeat,
  Camera,
  Maximize,
  Palette,
  Ruler,
  Database,
  Filter,
  AlertTriangle,
  RefreshCcw,
  Smile,
  Box,
  Lock,
  Award,
  Trophy,
  Compass,
  Zap,
  LucideIcon
} from 'lucide-react';

// Mappatura nome icona -> componente Lucide
const ICON_MAP: Record<string, LucideIcon> = {
  'percent': Percent,
  'smartphone': Smartphone,
  'star': Star,
  'clock': Clock,
  'image': Image,
  'map': MapPin,
  'calendar': Calendar,
  'list': List,
  'instagram': Instagram,
  'gift': Gift,
  'shopping-cart': ShoppingCart,
  'shield': Shield,
  'truck': Truck,
  'mail': Mail,
  'users': Users,
  'heart': Heart,
  'video': Video,
  'search': Search,
  'dollar': DollarSign,
  'grid': Grid3X3,
  'store': Store,
  'map-pin': MapPin,
  'form': FileText,
  'utensils-crossed': UtensilsCrossed,
  'phone': Phone,
  'credit-card': CreditCard,
  'shirt': Shirt,
  'package': Package,
  'help-circle': HelpCircle,
  'repeat': Repeat,
  'camera': Camera,
  'maximize': Maximize,
  'palette': Palette,
  'ruler': Ruler,
  'database': Database,
  'filter': Filter,
  'alert-triangle': AlertTriangle,
  'refresh-ccw': RefreshCcw,
  'sync': RefreshCcw,
  'smile': Smile,
  'box': Box,
  'lock': Lock,
  'award': Award,
  'trophy': Trophy,
  'compass': Compass,
  'zap': Zap,
  'file-text': FileText,
  'calendar-check': CheckCircle2,
  'camera-off': Image,
};

interface PainPoint {
  icon: string;
  title: string;
  description: string;
  keyword: string;
}

interface NicheHubPainPointsProps {
  nicheName: string;
  painPoints: PainPoint[];
}

export default function NicheHubPainPoints({ nicheName, painPoints }: NicheHubPainPointsProps) {
  return (
    <section id="problemi" className="py-24 bg-white relative">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            I Problemi Comuni
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perché molti {nicheName.toLowerCase()} <span className="text-[#FFBC11]">perdono clienti</span> online
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Questi sono i problemi che vedo ogni giorno lavorando con {nicheName.toLowerCase()} in tutta Italia.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, idx) => {
            const IconComponent = ICON_MAP[point.icon] || AlertCircle;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 hover:border-[#FFBC11]/20 transition-all duration-300"
              >
                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFBC11]/5 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center text-[#FFBC11] shadow-inner">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-full">
                    <Tag className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{point.keyword.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FFBC11] transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-10 border-t border-slate-100"
        >
          <p className="text-slate-600 mb-6">Riconosci uno di questi problemi?</p>
          <button
            className="bg-[#050805] hover:bg-[#1a1a1a] text-white px-8 py-4 text-lg font-semibold rounded-full transition-all inline-flex items-center gap-2"
            onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Troviamo la Soluzione
            <CheckCircle2 className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
