'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import type { PlaybookContent } from '@/data/playbooks/types';

interface PlaybookTemplateProps {
  playbook: PlaybookContent;
}

export default function PlaybookTemplate({ playbook }: PlaybookTemplateProps) {
  const {
    hero,
    tldr,
    quickQuestions,
    cta,
    content,
    faqs,
    relatedLinks,
    tocSections,
    niche,
    nicheName,
  } = playbook;

  const [activeSection, setActiveSection] = useState('');
  const [faqsOpen, setFaqsOpen] = useState<number[]>([]);

  // Helper per generare ID consistente dai titoli
  const generateSectionId = (text: string): string => {
    return text.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    // Osserva gli elementi usando l'ID generato dai titoli tocSections
    tocSections.forEach((section) => {
      const sectionId = `section-${generateSectionId(section)}`;
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocSections]);

  const toggleFaq = (idx: number) => {
    setFaqsOpen((prev) => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <header className="bg-[#1a1a1a] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm text-gray-400">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <a href="/siti-web" className="hover:text-white">Siti Web</a>
            <span className="mx-2">/</span>
            <a href={`/siti-web/${niche}`} className="hover:text-white">{nicheName}</a>
            <span className="mx-2">/</span>
            <span className="text-white">Playbook</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
            {hero.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            {hero.subtitle}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>{hero.lastUpdated}</span>
            <span>•</span>
            <span>{hero.readTime}</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-8">
              <h4 className="font-bold text-sm mb-4 text-gray-400 uppercase tracking-wider">
                Indice
              </h4>
              <nav className="space-y-2">
                {tocSections.map((section, idx) => {
                  const sectionId = `section-${generateSectionId(section)}`;
                  return (
                    <a
                      key={idx}
                      href={`#${sectionId}`}
                      className={`block text-sm py-1 transition-colors ${
                        activeSection === sectionId
                          ? 'text-[#FFBC11] font-medium'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {idx + 1}. {section}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="bg-[#FFBC11] p-6 rounded-lg mb-8 max-w-4xl">
              <p className="font-bold text-lg mb-4">{tldr.short}</p>
              <ul className="space-y-2">
                {tldr.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-black mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {quickQuestions.length > 0 && (
              <section className="mb-8 max-w-4xl">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span>🚀</span>
                  <span>Inizia da qui: {quickQuestions.length} domande veloci</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {quickQuestions.map((q, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg text-sm">
                      <span className="font-bold">{idx + 1}.</span> {q}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <article className="prose prose-lg max-w-4xl py-8">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => {
                    const text = String(children);
                    // Estrai numero se presente (es. "1. Un tasto..." → num: "1", title: "Un tasto...")
                    const match = text.match(/^(\d+)\.\s*(.+)$/);
                    const num = match ? match[1] : null;
                    const title = match ? match[2] : text;
                    // Genera ID dal titolo (senza numero) per matchare con tocSections
                    const id = `section-${generateSectionId(title)}`;
                    
                    return (
                      <div id={id} className="mt-14 mb-6 scroll-mt-24 first:mt-0">
                        <div className={`relative bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-2xl p-6 shadow-lg border border-gray-800 ${num ? 'pl-20 md:pl-24' : ''}`}>
                          {num && (
                            <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
                              <span className="text-5xl md:text-6xl font-black text-[#FFBC11] opacity-90">{num}</span>
                            </div>
                          )}
                          <h2 className="text-xl md:text-2xl font-bold text-white leading-tight m-0">
                            {title}
                          </h2>
                        </div>
                      </div>
                    );
                  },
                  h3: ({ children }) => {
                    const text = String(children);
                    const id = text.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                    
                    return (
                      <h3 
                        id={`section-${id}`} 
                        className="text-lg font-bold mt-8 mb-3 scroll-mt-24 text-[#1a1a1a] border-l-4 border-[#FFBC11] pl-4"
                      >
                        {text}
                      </h3>
                    );
                  },
                  h4: ({ children }) => {
                    const text = String(children);
                    return (
                      <h4 className="text-base font-semibold mt-6 mb-2 text-gray-800">
                        {text}
                      </h4>
                    );
                  },
                  p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="space-y-2 mb-6 ml-0 list-none">{children}</ul>,
                  ol: ({ children }) => <ol className="space-y-2 mb-6 ml-5 list-decimal marker:text-[#FFBC11] marker:font-bold">{children}</ol>,
                  li: ({ children }) => (
                    <li className="flex items-start gap-3 text-gray-700">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFBC11] flex-shrink-0 mt-2.5"></span>
                      <span>{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => <strong className="font-bold text-[#1a1a1a]">{children}</strong>,
                  em: ({ children }) => <em className="italic text-gray-600">{children}</em>,
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      className="text-[#FFBC11] font-medium hover:underline underline-offset-2"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#FFBC11] bg-gray-50 rounded-r-lg pl-5 pr-4 py-4 my-6 text-gray-700 not-italic">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => {
                    // Questo componente ora gestisce SOLO il codice inline
                    return <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 border border-gray-200">{children}</code>;
                  },
                  pre: ({ children }) => {
                    // Estrai il contenuto testuale dal children (che è un elemento <code>)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const codeElement = children as any;
                    const content = String(codeElement?.props?.children || '').trim();
                    
                    // Smart Parser per "Wireframe Buttons"
                    const buttonRegex = /\[(.*?)(?:\s*\((.*?)\))?\]/g;
                    const textWithoutButtons = content.replace(buttonRegex, '').trim();
                    const isWireframe = textWithoutButtons === '' && content.includes('[');

                    // Smart Parser per "Menu Ristorante"
                    // Riconosce pattern tipo: "Antipasti:\n- Piatto €10..."
                    const menuLines = content.split('\n');
                    const isMenu = menuLines.some(line => line.trim().endsWith(':')) && 
                                   menuLines.some(line => line.trim().startsWith('-') && (line.includes('€') || line.match(/\d+([\.,]\d+)?/)));

                    // Smart Parser per "Orari Business"
                    // Riconosce giorni della settimana
                    const days = ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica'];
                    const isHours = menuLines.some(line => days.some(d => line.toLowerCase().startsWith(d)));

                    // RENDERER: Wireframe Buttons
                    if (isWireframe) {
                      const buttons: Array<{text: string; color: string}> = [];
                      let match;
                      buttonRegex.lastIndex = 0;
                      
                      while ((match = buttonRegex.exec(content)) !== null) {
                        buttons.push({
                          text: match[1],
                          color: match[2]?.toLowerCase() || 'default'
                        });
                      }

                      return (
                        <div className="my-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                          <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                            </div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Anteprima UI</span>
                          </div>
                          <div className="p-8 bg-white flex flex-wrap items-center justify-center gap-4 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                            {buttons.map((btn, idx) => {
                              let btnClasses = "px-6 py-3 rounded-lg font-bold shadow-sm transition-transform hover:-translate-y-0.5 border-2 cursor-default flex items-center justify-center text-center";
                              
                              if (btn.color?.includes('giallo') || btn.color?.includes('yellow')) {
                                btnClasses += " bg-[#FFBC11] border-[#FFBC11] text-black";
                              } else if (btn.color?.includes('verde') || btn.color?.includes('green')) {
                                btnClasses += " bg-emerald-500 border-emerald-500 text-white";
                              } else if (btn.color?.includes('rosso') || btn.color?.includes('red')) {
                                btnClasses += " bg-red-500 border-red-500 text-white";
                              } else if (btn.color?.includes('blu') || btn.color?.includes('blue')) {
                                btnClasses += " bg-blue-600 border-blue-600 text-white";
                              } else if (btn.color?.includes('scuro') || btn.color?.includes('nero') || btn.color?.includes('dark')) {
                                btnClasses += " bg-[#1a1a1a] border-[#1a1a1a] text-white";
                              } else if (btn.color?.includes('outline')) {
                                btnClasses += " bg-transparent border-[#1a1a1a] text-[#1a1a1a]";
                              } else {
                                btnClasses += " bg-gray-100 border-gray-200 text-gray-800";
                              }

                              return (
                                <div key={idx} className={btnClasses}>
                                  {btn.text}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }

                    // RENDERER: Menu Ristorante
                    if (isMenu) {
                      return (
                        <div className="my-8 max-w-md mx-auto bg-[#FDFBF7] border border-stone-200 rounded-lg shadow-lg overflow-hidden relative">
                          <div className="absolute top-0 left-0 w-full h-1 bg-[#FFBC11]"></div>
                          <div className="p-8 font-serif text-stone-800">
                            <div className="text-center mb-8 border-b-2 border-stone-100 pb-4">
                              <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#FFBC11]">Menu Esempio</span>
                              <h4 className="text-2xl font-bold mt-2 font-serif italic">La Nostra Cucina</h4>
                            </div>
                            
                            <div className="space-y-6">
                              {content.split('\n').reduce((acc: any[], line) => {
                                const trimmed = line.trim();
                                if (!trimmed) return acc;
                                
                                if (trimmed.endsWith(':')) {
                                  // Section Title
                                  acc.push({ type: 'section', text: trimmed.replace(':', '') });
                                } else if (trimmed.startsWith('-')) {
                                  // Menu Item
                                  // Try to extract price
                                  const priceMatch = trimmed.match(/€?\d+([\.,]\d+)?/);
                                  const price = priceMatch ? (priceMatch[0].includes('€') ? priceMatch[0] : `€${priceMatch[0]}`) : '';
                                  const text = trimmed.replace(/^-/, '').replace(/€?\d+([\.,]\d+)?/, '').trim();
                                  acc.push({ type: 'item', text, price });
                                }
                                return acc;
                              }, []).map((item, idx) => (
                                item.type === 'section' ? (
                                  <h5 key={idx} className="font-bold text-lg border-b border-stone-200 pb-1 mt-6 first:mt-0 text-[#1a1a1a]">
                                    {item.text}
                                  </h5>
                                ) : (
                                  <div key={idx} className="flex justify-between items-baseline group">
                                    <span className="text-stone-600 text-sm md:text-base">{item.text}</span>
                                    <span className="border-b border-dotted border-stone-300 flex-grow mx-2 opacity-50"></span>
                                    <span className="font-bold text-[#FFBC11]">{item.price}</span>
                                  </div>
                                )
                              ))}
                            </div>
                          </div>
                          <div className="bg-[#1a1a1a] text-white text-center py-2 text-xs uppercase tracking-wider opacity-90">
                            Anteprima Menu Mobile
                          </div>
                        </div>
                      );
                    }

                    // RENDERER: Card Orari
                    if (isHours) {
                       return (
                        <div className="my-8 max-w-sm mx-auto bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                          <div className="bg-[#1a1a1a] px-6 py-4 flex items-center justify-between">
                             <div className="flex items-center gap-3">
                               <span className="text-2xl">🕒</span>
                               <div>
                                 <h4 className="text-white font-bold text-base leading-none">Orari di Apertura</h4>
                                 <p className="text-gray-400 text-xs mt-1">Sempre aperti per te</p>
                               </div>
                             </div>
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          </div>
                          
                          <div className="p-6">
                            <ul className="space-y-3">
                              {content.split('\n').filter(l => l.trim()).map((line, idx) => {
                                const parts = line.split(':');
                                const day = parts[0]?.trim();
                                const hours = parts[1]?.trim();
                                const isClosed = hours?.toLowerCase().includes('chiuso');
                                
                                if (!day || !hours) return <div key={idx} className="text-sm text-gray-500">{line}</div>;

                                return (
                                  <li key={idx} className="flex justify-between items-center text-sm border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                                    <span className="font-semibold text-gray-700 capitalize">{day}</span>
                                    {isClosed ? (
                                      <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-bold">CHIUSO</span>
                                    ) : (
                                      <span className="text-gray-600 font-mono">{hours}</span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-start gap-3">
                               <span className="text-lg mt-0.5">📍</span>
                               <div className="text-xs text-gray-500">
                                 <strong className="block text-gray-800 text-sm mb-0.5">Vieni a trovarci</strong>
                                 Via Roma 15, Milano<br/>
                                 <span className="text-emerald-600 font-medium">Parcheggio gratuito disponibile</span>
                               </div>
                            </div>
                          </div>
                        </div>
                       );
                    }

                    // Fallback: standard code block
                    return (
                      <div className="my-6 rounded-lg overflow-hidden border border-gray-200 bg-[#1a1a1a]">
                        <div className="flex items-center px-4 py-2 border-b border-gray-800 bg-[#111]">
                          <span className="text-xs font-bold text-gray-500">CODE</span>
                        </div>
                        <pre className="overflow-x-auto m-0 p-4 text-gray-300 font-mono text-sm">{content}</pre>
                      </div>
                    );
                  },
                  hr: () => (
                    <hr className="my-10 border-0 border-t border-gray-200" />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </article>

            <section className="py-12 border-t border-gray-100 text-center max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {cta.title}
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                {cta.description}
              </p>
              <a
                href={cta.buttonUrl}
                className="inline-block px-10 py-5 bg-[#FFBC11] text-black font-bold text-xl rounded-xl hover:bg-[#FFBC11]/90 transition-all hover:scale-105 shadow-lg"
              >
                {cta.buttonText}
              </a>
            </section>

            {faqs.length > 0 && (
              <section className="py-12 border-t border-gray-200 max-w-4xl">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Domande frequenti
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-gray-200 rounded-xl bg-gray-50/50"
                      open={faqsOpen.includes(idx)}
                    >
                      <summary
                        className="cursor-pointer p-5 font-bold flex items-center justify-between text-base"
                        onClick={() => toggleFaq(idx)}
                      >
                        {faq.question}
                        <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {relatedLinks.length > 0 && (
              <section className="py-12 border-t border-gray-200 max-w-4xl">
                <h4 className="font-bold text-xl mb-6">Guide correlate</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="group block p-4 bg-gray-50 rounded-xl border border-transparent hover:border-[#FFBC11]/30 hover:bg-white transition-all text-sm shadow-sm hover:shadow-md"
                    >
                      <span className="font-bold text-gray-900 group-hover:text-[#FFBC11] flex items-center justify-between">
                        {link.anchor}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
