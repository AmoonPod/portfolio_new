'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ChevronRight, ArrowLeft, Globe, Building2 } from 'lucide-react';
import { HubPageData } from '@/lib/seo/hub-generator';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

interface HubGridTemplateProps {
  data: HubPageData;
  type: 'region' | 'province';
}

export default function HubGridTemplate({ data, type }: HubGridTemplateProps) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', href: '/' },
    { name: data.serviceName, href: data.items[0]?.href.split('/').slice(0, 2).join('/') || '/siti-web' },
  ];

  if (type === 'province' && data.parent) {
    breadcrumbItems.push({ name: data.parent.name, href: data.parent.href });
  }

  breadcrumbItems.push({ name: data.h1 });

  return (
    <div className="min-h-screen bg-[#050805] text-white selection:bg-[#FFBC11]/30 selection:text-black">
      {/* BREADCRUMB */}
      <div className="sticky top-0 z-50 bg-[#050805]/95 backdrop-blur-md border-b border-white/10">
        <Breadcrumb
          items={breadcrumbItems}
          variant="dark"
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-[#FFBC11]/5 rounded-full blur-[100px] pointer-events-none opacity-20"></div>
        
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {data.parent && (
              <Link 
                href={data.parent.href}
                className="inline-flex items-center gap-2 text-sm text-[#FFBC11] hover:underline mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Torna a {data.parent.name}
              </Link>
            )}
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              {type === 'region' ? <Globe className="w-4 h-4 text-[#FFBC11]" /> : <Building2 className="w-4 h-4 text-[#FFBC11]" />}
              <span className="text-sm font-medium text-gray-300">
                {type === 'region' ? 'Hub Regionale' : 'Hub Provinciale'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              {data.h1}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {data.description.split('.')[0]}. Seleziona la tua zona per scoprire i servizi dedicati.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data.items.map((item, idx) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-[#FFBC11]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FFBC11]/10 flex items-center justify-center border border-[#FFBC11]/20 group-hover:bg-[#FFBC11] transition-all">
                        <MapPin className="w-5 h-5 text-[#FFBC11] group-hover:text-black" />
                      </div>
                      <div>
                        <div className="font-bold text-lg group-hover:text-[#FFBC11] transition-colors">
                          {item.name}
                        </div>
                        {item.count && (
                          <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                            {item.count} Comuni
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#FFBC11] transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 border-t border-white/10 bg-[#080B08]">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Non trovi la tua città?</h2>
          <p className="text-gray-400 mb-10">
            Lavoro in tutta Italia, garantendo tempi rapidi e qualità premium. 
            Contattami per un preventivo personalizzato per la tua attività.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFBC11] text-black font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-[#FFBC11]/10"
          >
            Contattami Ora
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
