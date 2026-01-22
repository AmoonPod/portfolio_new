'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Zap, Target, TrendingUp, Shield } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  benefit: string;
}

interface NicheHubFeaturesProps {
  nicheName: string;
  features: Feature[];
}

export default function NicheHubFeatures({ nicheName, features }: NicheHubFeaturesProps) {
  return (
    <section id="soluzioni" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#FFBC11]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBC11]/10 rounded-full text-[#FFBC11] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Cosa Include il Servizio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tutto quello che serve per <span className="text-[#FFBC11]">distinguerti</span> online
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Progettato specificamente per {nicheName.toLowerCase()}, con funzionalità che generano risultati concreti.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-[#FFBC11]/20 transition-all duration-300"
            >
              {/* Accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFBC11] to-[#FFBC11]/0 rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#050805] to-[#1a1a1a] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">
                    {feature.icon === 'qr-code' && '📱'}
                    {feature.icon === 'calendar' && '📅'}
                    {feature.icon === 'review' && '⭐'}
                    {feature.icon === 'camera' && '📷'}
                    {feature.icon === 'shopping-cart' && '🛒'}
                    {feature.icon === 'calendar-event' && '🎉'}
                    {feature.icon === 'chat' && '💬'}
                    {feature.icon === 'chart' && '📊'}
                    {feature.icon === 'grid' && '🖼️'}
                    {feature.icon === 'play-circle' && '🎬'}
                    {feature.icon === 'list' && '📋'}
                    {feature.icon === 'image' && '🔄'}
                    {feature.icon === 'map-pin' && '🗺️'}
                    {feature.icon === 'users' && '👥'}
                    {feature.icon === 'download' && '⬇️'}
                    {feature.icon === 'bell' && '🔔'}
                    {feature.icon === 'gift' && '🎁'}
                    {feature.icon === 'shopping-bag' && '🛍️'}
                    {feature.icon === 'store' && '🏪'}
                    {feature.icon === 'map' && '🗺️'}
                    {feature.icon === 'video' && '🎥'}
                    {feature.icon === 'shield' && '🛡️'}
                    {feature.icon === 'truck' && '🚚'}
                    {feature.icon === 'mail' && '📧'}
                    {feature.icon === 'form' && '📝'}
                    {feature.icon === 'heart' && '💚'}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FFBC11] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                    <Zap className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-emerald-700">{feature.benefit}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
