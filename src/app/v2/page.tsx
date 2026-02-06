"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowRight, Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function V2Page() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1a1a1a] overflow-x-hidden font-sans selection:bg-purple-200 selection:text-purple-900">
      
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-pink-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <header className="fixed top-0 w-full z-50 p-6 mix-blend-difference text-white">
        <div className="flex justify-between items-center">
            <span className="text-xl font-bold tracking-tight">mdc.</span>
            <div className="hidden md:flex gap-4">
                <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
                <span className="text-xs uppercase tracking-widest">Available for work</span>
            </div>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1 rounded-full border border-[#1a1a1a]/10 text-sm font-medium bg-white/50 backdrop-blur-sm">
                Digital Craftsman
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tight mb-12 text-[#1a1a1a]"
            >
              <span className="block italic text-slate-400 font-light">curating</span>
              digital
              <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent pb-4">experiences</span>
            </motion.h1>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="flex flex-col items-center gap-4"
            >
                <p className="max-w-xl mx-auto text-xl text-slate-600 leading-relaxed">
                   I help visionary brands communicate through thoughtful design and robust engineering.
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all cursor-pointer group">
                    Explore Work <ArrowRight className="w-4 h-4 group-hover:text-pink-500 transition-colors" />
                </div>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="w-full bg-[#1a1a1a] text-[#FDFBF7] py-8 overflow-hidden whitespace-nowrap">
            <div className="animate-shimmer-slide inline-flex items-center gap-12 text-4xl font-serif italic opacity-50">
                {Array(10).fill("Development • Design • Strategy • ").map((text, i) => (
                    <span key={i}>{text}</span>
                ))}
            </div>
        </div>

        {/* WORK / SELECTED CASES */}
        <section className="py-40 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-24">
                    <h2 className="text-5xl font-serif">Selected Works</h2>
                    <span className="text-slate-400 text-lg">(2023 — 2025)</span>
                </div>

                <div className="space-y-32">
                    {DATA.projects.slice(0, 3).map((project, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
                        >
                            <div className="w-full md:w-1/2 aspect-[4/3] bg-slate-200 relative rounded-3xl overflow-hidden group shadow-2xl shadow-purple-900/10">
                                {project.image ? (
                                    <Image 
                                        src={project.image} 
                                        alt={project.title} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                                        <span className="text-4xl text-purple-300 font-serif italic">Image Placeholder</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map(tech => (
                                        <span key={tech} className="px-3 py-1 rounded-full border border-slate-200 text-xs text-slate-500 uppercase tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-4xl font-serif">{project.title}</h3>
                                <p className="text-xl text-slate-600 leading-relaxed font-light">
                                    {project.description}
                                </p>
                                <Link href={project.href} className="inline-block text-lg font-medium border-b border-black pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">
                                    View Project
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* SERVICES / CAPABILITIES */}
        <section className="py-32 bg-white rounded-[3rem] mx-4 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">Expertise</span>
                    <h2 className="text-5xl md:text-6xl font-serif">Crafting Digital Excellence</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                   <div className="p-8 bg-[#FDFBF7] rounded-3xl hover:shadow-xl transition-shadow border border-slate-100">
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                         <Star className="w-6 h-6 fill-current" />
                      </div>
                      <h3 className="text-2xl font-serif mb-4">Design & UI</h3>
                      <p className="text-slate-600">Creating intuitive, accessible, and beautiful interfaces that users love to interact with.</p>
                   </div>
                   <div className="p-8 bg-[#FDFBF7] rounded-3xl hover:shadow-xl transition-shadow border border-slate-100">
                      <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
                         <Star className="w-6 h-6 fill-current" />
                      </div>
                      <h3 className="text-2xl font-serif mb-4">Engineering</h3>
                      <p className="text-slate-600">Robust full-stack development using modern frameworks like Next.js, React, and Flutter.</p>
                   </div>
                </div>
            </div>
        </section>

        {/* MAD LIBS CONTACT */}
        <section className="py-40 px-6 bg-[#1a1a1a] text-[#FDFBF7] rounded-t-[3rem] mt-[-3rem] relative z-20">
            <div className="max-w-3xl mx-auto text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
                    Let&apos;s create something<br/>
                    <span className="italic text-purple-300">extraordinary</span> together.
                </h2>

                <form className="text-xl md:text-3xl leading-loose font-light">
                    Hello, my name is 
                    <input type="text" placeholder="your name" className="bg-transparent border-b-2 border-white/20 focus:border-purple-400 outline-none text-center min-w-[200px] px-2 text-white placeholder:text-white/30" />
                    . I work at
                    <input type="text" placeholder="company" className="bg-transparent border-b-2 border-white/20 focus:border-purple-400 outline-none text-center min-w-[200px] px-2 text-white placeholder:text-white/30" />
                    and I&apos;m looking for help with a 
                    <select className="bg-transparent border-b-2 border-white/20 focus:border-purple-400 outline-none text-center min-w-[200px] px-2 text-white appearance-none cursor-pointer hover:text-purple-300">
                        <option className="bg-[#1a1a1a]">Website</option>
                        <option className="bg-[#1a1a1a]">App</option>
                        <option className="bg-[#1a1a1a]">Design System</option>
                    </select>
                    project. You can reach me at
                    <input type="email" placeholder="your email" className="bg-transparent border-b-2 border-white/20 focus:border-purple-400 outline-none text-center min-w-[300px] px-2 text-white placeholder:text-white/30" />
                    .
                    
                    <div className="mt-16 text-center">
                        <button className="bg-white text-black px-12 py-5 rounded-full text-lg font-bold hover:bg-purple-300 transition-colors">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
      </main>
    </div>
  );
}
