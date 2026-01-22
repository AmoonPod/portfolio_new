'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star, TrendingUp, Globe, Users, Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NicheCategory, getNicheConfig } from '@/data/niches-config';

interface NicheHubHeroProps {
  nicheSlug: string;
  nicheName: string;
  category: NicheCategory;
  hero: {
    h1: string;
    sub: string;
    ctaText: string;
    trustSignal?: string;
  };
  stats?: {
    value: string;
    label: string;
  }[];
}

export default function NicheHubHero({ nicheSlug, nicheName, category, hero, stats }: NicheHubHeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#050805] text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-[#FFBC11]/5 rounded-full blur-[100px] pointer-events-none opacity-20"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>

      <div className="relative container max-w-7xl mx-auto px-6 w-full z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md"
          >
            <Globe className="w-4 h-4 text-[#FFBC11]" />
            <span className="text-sm font-medium text-gray-300">Siti Web Professionali in Italia</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05] text-balance mb-6"
          >
            {hero.h1}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto text-balance"
          >
            {hero.sub}
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Button
              size="lg"
              className="h-14 px-8 rounded-full bg-[#FFBC11] text-black font-black text-lg hover:bg-[#FFBC11] hover:scale-105 transition-all shadow-[0_0_20px_-5px_rgba(255,188,17,0.4)] border-2 border-[#FFBC11] w-full sm:w-auto"
              onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {hero.ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link
              href="/contatti"
              className="h-14 px-8 rounded-full bg-transparent border-2 border-white/10 hover:bg-white/5 text-white font-bold flex items-center justify-center transition-all w-full sm:w-auto"
            >
              Parliamo del Tuo Progetto
            </Link>
          </motion.div>

          {/* Trust Signal */}


          {/* Stats Row */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-[#FFBC11] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
