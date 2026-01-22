'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NicheHubContactProps {
  nicheName: string;
}

export default function NicheHubContact({ nicheName }: NicheHubContactProps) {
  return (
    <section id="contatti" className="py-24 bg-[#050805] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFBC11]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBC11]/10 rounded-full text-[#FFBC11] text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Contattami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto a trasformare il tuo business?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Parliamo del tuo progetto per <span className="text-white font-medium">{nicheName.toLowerCase()}</span>. 
            Ti rispondo entro 24 ore.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-[#FFBC11] text-black hover:bg-[#FFBC11] hover:scale-105 px-8 py-6 text-lg font-semibold rounded-full shadow-[0_0_30px_-5px_rgba(255,188,17,0.4)] transition-all duration-300"
            onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Prenota Consulenza
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            onClick={() => window.location.href = 'tel:+393405684884'}
          >
            <Phone className="w-5 h-5 mr-2" />
            Chiama Ora
          </Button>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 text-gray-500"
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>Risposta entro 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>Consulenza gratuita</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            <span>Nessun impegno</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
