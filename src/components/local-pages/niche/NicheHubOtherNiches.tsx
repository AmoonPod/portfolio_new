'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Grid, Star } from 'lucide-react';
import { nichesConfig } from '@/data/niches-config';

interface OtherNichesProps {
  currentNicheSlug?: string;
  showAll?: boolean;
}

export default function OtherNiches({ currentNicheSlug, showAll = false }: OtherNichesProps) {
  const otherNiches = showAll
    ? nichesConfig
    : nichesConfig.filter(n => n.slug !== currentNicheSlug);

  if (otherNiches.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white relative">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBC11]/10 rounded-full text-[#FFBC11] text-sm font-medium mb-6">
            <Grid className="w-4 h-4" />
            {showAll ? 'I Settori' : 'Altre Specializzazioni'}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6">
            {showAll ? (
              <>Lavoro con <span className="text-[#FFBC11]">settori specifici</span></>
            ) : (
              <>Lavoro anche con <span className="text-[#FFBC11]">altri settori</span></>
            )}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            {showAll ? (
              'Soluzioni web professionali pensate per le esigenze di ogni settore.'
            ) : (
              <>Oltre a {nichesConfig.find(n => n.slug === currentNicheSlug)?.name.toLowerCase()},
                mi occupo anche di altri settori con soluzioni web su misura.</>
            )}
          </p>
        </motion.div>

        {/* Other Niches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherNiches.map((niche, idx) => (
            <motion.div
              key={niche.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={`/siti-web/${niche.slug}`}
                className="group flex flex-col bg-gradient-to-br from-slate-900 to-[#050805] rounded-3xl p-8 md:p-10 text-white hover:shadow-2xl hover:shadow-[#FFBC11]/10 transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    {niche.category === 'Food & Hospitality' && '🍽️'}
                    {niche.category === 'Beauty & Wellness' && '💅'}
                    {niche.category === 'Creative' && '📸'}
                    {niche.category === 'Agriculture' && '🌾'}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#FFBC11]/20 rounded-full">
                    <Star className="w-3 h-3 text-[#FFBC11]" />
                    <span className="text-[10px] font-medium text-[#FFBC11]">ATTIVO</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-[#FFBC11] transition-colors">
                  {niche.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  Soluzioni web professionali per {niche.pluralName.toLowerCase()}.
                  Design, SEO e marketing pensati per il tuo settore.
                </p>

                <div className="flex items-center gap-2 text-[#FFBC11] font-medium">
                  <span>Scopri di più</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
