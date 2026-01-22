'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Building2, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies } from '@/data/case-studies/case-studies-data';
import { getNicheConfig } from '@/data/niches-config';
import type { CaseStudy } from '@/data/case-studies/types';

interface NicheHubCaseStudiesProps {
  nicheSlug: string;
}

// Mappa le nicchie ai case study in base alla categoria o slug
function getCaseStudiesForNiche(nicheSlug: string): CaseStudy[] {
  const nicheConfig = getNicheConfig(nicheSlug);
  if (!nicheConfig) return [];

  const allCaseStudies = getAllCaseStudies();

  // Filtra i case study in base alla nicchia
  return allCaseStudies.filter(cs => {
    // Mappatura esplicita per nicchia
    if (nicheSlug === 'aziende-agricole') {
      // Il Pichello è per aziende agricole
      return cs.slug === 'il-pichello';
    }

    // Per altre nicchie, potresti aggiungere logica basata su keywords, categoria, etc.
    // Per ora restituiamo solo quelli esplicitamente mappati
    return false;
  });
}

export default function NicheHubCaseStudies({ nicheSlug }: NicheHubCaseStudiesProps) {
  const caseStudies = getCaseStudiesForNiche(nicheSlug);
  const nicheConfig = getNicheConfig(nicheSlug);

  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white relative">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#050805]/5 rounded-full text-[#050805] text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Case Study
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Lavori Realizzati per <span className="text-[#FFBC11]">{nicheConfig?.name || nicheSlug.replace(/-/g, ' ')}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Esempi concreti di progetti che hanno generato risultati reali per i miei clienti.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-[#050805] rounded-3xl overflow-hidden relative"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFBC11]/5 rounded-full blur-[100px]" />

              {/* Header Image */}
              {study.headerImage && (
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <Image
                    src={study.headerImage}
                    alt={study.title}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
              )}

              <div className="p-8 md:p-12 text-white relative z-10">
                {/* Client Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFBC11]/20 rounded-full">
                    <Building2 className="w-4 h-4 text-[#FFBC11]" />
                    <span className="text-sm font-medium text-[#FFBC11]">{nicheConfig?.singularName || 'Cliente'}</span>
                  </div>
                  {study.locationCity && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{study.locationCity}</span>
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
                  {study.subtitle}
                </p>

                {/* Results */}
                {study.results && study.results.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-[#FFBC11] uppercase tracking-wider mb-4">Risultati Ottenuti</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {study.results.map((result, rIdx) => (
                        <div key={rIdx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="text-3xl font-black text-[#FFBC11] mb-1">
                            {result.prefix}{result.value}{result.suffix}
                          </div>
                          <div className="text-sm text-gray-300">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {study.technologies && study.technologies.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Tecnologie Utilizzate</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  {study.websiteUrl && (
                    <Link
                      href={study.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFBC11] text-black font-semibold rounded-full hover:bg-[#FFBC11]/90 transition-all hover:scale-105"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Visita il Sito</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                  <Link
                    href={`/casi-studio/${study.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
                  >
                    <span>Leggi il Case Study Completo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
