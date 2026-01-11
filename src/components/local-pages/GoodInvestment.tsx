import { ShieldCheck, Star, Zap } from "lucide-react";
import BlurFade from "../magicui/blur-fade";

interface GoodInvestmentProps {
  title: string;
  titleHighlight: string;
  subtitle: string;
  cards: Array<{
    icon: 'star' | 'shield' | 'zap';
    title: string;
    description: string;
    description2: string;
    footerType: 'premium' | 'ownership' | 'roi';
  }>;
}

export function GoodInvestment({ title, titleHighlight, subtitle, cards }: GoodInvestmentProps) {
  const iconMap = {
    star: Star,
    shield: ShieldCheck,
    zap: Zap
  }

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Sfondo Texture Carta/Rumore molto leggero per dare matericità */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">

        {/* HEADER EDITORIALE - CENTRATO */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-[1.1] mb-8 text-balance">
              {title} <span className="text-transparent bg-clip-text bg-[#FFBC11]">{titleHighlight}</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed text-balance mx-auto">
              {subtitle}
            </p>
          </BlurFade>
        </div>

        {/* BENTO GRID DI LETTURA */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const IconComponent = iconMap[card.icon]
            const isDarkCard = false // Tutte le card ora sono chiare
            const iconColors = {
              star: { bg: 'bg-orange-50', text: 'text-orange-500', fill: 'fill-orange-500/20', hover: 'group-hover:text-orange-600' },
              shield: { bg: 'bg-green-50', text: 'text-green-600', fill: 'fill-green-600/20', hover: 'group-hover:text-green-700' },
              zap: { bg: 'bg-blue-50', text: 'text-blue-500', fill: 'fill-blue-500/20', hover: 'group-hover:text-blue-600' }
            }
            const colors = iconColors[card.icon]

            return (
              <BlurFade key={index} delay={0.2 + index * 0.1} className="lg:col-span-1">
                <div className={`group h-full bg-white rounded-[2rem] p-8 md:p-10 border border-border shadow-sm hover:shadow-xl hover:border-[#FFBC11]/30 transition-all duration-500 flex flex-col justify-between text-left`}>
                  
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className={`w-7 h-7 ${colors.text} ${colors.fill}`} />
                    </div>
                    <h3 className={`text-2xl font-black mb-4 ${colors.hover} transition-colors`}>
                      {card.title}
                    </h3>
                    <p className={`text-lg text-muted-foreground leading-relaxed`}>
                      {card.description}
                    </p>
                    <p className={`text-lg text-muted-foreground leading-relaxed mt-4`}>
                      {card.description2}
                    </p>
                  </div>

                  {/* Footer */}
                  {card.footerType === 'premium' && (
                    <div className={`mt-8 pt-8 border-t border-dashed border-gray-100 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity`}>
                      <div className="flex text-[#FFBC11]">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider text-muted-foreground`}>Percezione Premium</span>
                    </div>
                  )}

                  {card.footerType === 'ownership' && (
                    <div className="mt-8 pt-8 border-t border-dashed border-gray-100 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Proprietà Garantita</span>
                      <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">100% Tuo</span>
                      </div>
                    </div>
                  )}

                  {card.footerType === 'roi' && (
                    <div className={`mt-8 pt-8 border-t border-dashed border-gray-100 relative h-24 flex items-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity`}>
                      <div className="w-full bg-blue-100 h-[30%] rounded-t-sm"></div>
                      <div className="w-full bg-blue-200 h-[50%] rounded-t-sm"></div>
                      <div className="w-full bg-blue-300 h-[40%] rounded-t-sm"></div>
                      <div className="w-full bg-blue-400 h-[70%] rounded-t-sm"></div>
                      <div className="w-full bg-blue-500 h-[90%] rounded-t-sm relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 rounded">RISULTATI</div>
                      </div>
                    </div>
                  )}
                </div>
              </BlurFade>
            )
          })}
        </div>

      </div>
    </section>
  )
}
