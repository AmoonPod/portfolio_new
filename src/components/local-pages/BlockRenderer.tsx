import { Block } from "@/data/local-pages/types";
import { CheckCircle2, AlertCircle, Info, TrendingUp, ArrowRight, Target, Zap, Globe, MapPin, BarChart3, Users, Clock, Check, X, Sparkles, ShieldCheck, Star } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlockComponentProps {
  block: Block;
  delay?: number;
}

export default function BlockRenderer({ block, delay = 0 }: BlockComponentProps) {
  const getVariantStyles = (variant?: string) => {
    switch (variant) {
      case "warning":
        return "bg-amber-50 border-amber-200 text-amber-900";
      case "success":
        return "bg-emerald-50 border-emerald-200 text-emerald-900";
      default:
        return "bg-blue-50 border-blue-200 text-blue-900";
    }
  };

  const getIcon = (variant?: string) => {
    switch (variant) {
      case "warning":
        return <AlertCircle className="w-6 h-6 text-amber-600" />;
      case "success":
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      default:
        return <Info className="w-6 h-6 text-blue-600" />;
    }
  };

  switch (block.kind) {
    case "callout":
      return (
        <BlurFade delay={delay}>
          <Card className={cn("p-8 border-4 rounded-[2.5rem] shadow-xl relative overflow-hidden group transition-all hover:scale-[1.02]", getVariantStyles(block.variant))}>
            <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:scale-110 transition-transform duration-700 group-hover:opacity-10">
              {getIcon(block.variant)}
            </div>
            <div className="flex gap-6 items-start relative z-10">
              <div className={`p-4 rounded-2xl bg-current opacity-20 shrink-0`}>
                {getIcon(block.variant)}
              </div>
              <div className="flex-1">
                <h3 className="font-black text-2xl mb-3 tracking-tight">{block.title}</h3>
                <p className="opacity-90 leading-relaxed text-lg font-bold">{block.body}</p>
              </div>
            </div>
          </Card>
        </BlurFade>
      );

    case "checklist":
      return (
        <BlurFade delay={delay}>
          <Card className="p-8 md:p-12 rounded-[3rem] border-4 shadow-2xl bg-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors"></div>
            <h3 className="font-black text-3xl mb-10 flex items-center gap-5 tracking-tighter">
              {block.icon && <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner"><Target className="w-8 h-8" /></div>}
              {block.title}
            </h3>
            <ul className="grid gap-4">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-5 group/item p-4 rounded-3xl hover:bg-muted/50 transition-all border-2 border-transparent hover:border-muted-foreground/10">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 shadow-sm">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="text-foreground/90 leading-tight text-xl font-black tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </BlurFade>
      );

    case "case":
      return (
        <BlurFade delay={delay}>
          <Card className="p-8 md:p-12 rounded-[3.5rem] border-4 bg-white shadow-2xl relative overflow-hidden">
            <h3 className="font-black text-3xl mb-10 flex items-center gap-4 tracking-tighter">
              <div className="w-14 h-14 rounded-[1.5rem] bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 rotate-3">
                <Zap className="w-8 h-8 fill-white" />
              </div>
              {block.title}
            </h3>

            <div className="grid gap-6 mb-12">
              <div className="bg-red-50 rounded-[2.5rem] p-10 border-2 border-red-100 shadow-inner">
                <span className="px-4 py-1 bg-red-500 text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] block w-fit mb-4">Prima</span>
                <p className="text-red-900/80 text-2xl font-black leading-[1.1] tracking-tight">{block.before}</p>
              </div>

              <div className="bg-emerald-50 rounded-[2.5rem] p-10 border-2 border-emerald-100 shadow-xl shadow-emerald-500/5 rotate-1">
                <span className="px-4 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] block w-fit mb-4">Dopo</span>
                <p className="text-emerald-900 text-2xl font-black leading-[1.1] tracking-tight italic">&ldquo;{block.after}&rdquo;</p>
              </div>
            </div>

            {block.metrics && block.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {block.metrics.map((metric, i) => (
                  <div key={i} className="bg-muted/30 rounded-[2rem] p-6 border-2 border-muted hover:border-primary/20 transition-all hover:-translate-y-1 text-center">
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2">{metric.label}</div>
                    <div className="text-3xl font-black text-primary tracking-tighter">{metric.value}</div>
                    {metric.trend && (
                      <div className={cn(
                        "flex items-center justify-center gap-1 text-[10px] font-black mt-2",
                        metric.trend === "up" ? "text-emerald-600" : "text-red-600"
                      )}>
                        <TrendingUp className={cn("w-3 h-3", metric.trend === "down" && "rotate-180")} />
                        {metric.trend === "up" ? "BOOM" : "DOWN"}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>
        </BlurFade>
      );

    case "table":
      return (
        <BlurFade delay={delay}>
          <Card className="p-8 md:p-12 rounded-[3rem] border-4 shadow-2xl bg-white relative overflow-hidden group">
            <h3 className="font-black text-3xl mb-10 flex items-center gap-4 tracking-tighter text-balance">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner"><Globe className="w-8 h-8" /></div>
              {block.title}
            </h3>
            <div className="grid gap-4">
              {block.rows.map((row, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-8 rounded-[2.5rem] border-4 transition-all duration-500",
                    block.highlightIndex === i
                      ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 scale-[1.02] -rotate-1"
                      : "bg-muted/30 border-transparent hover:border-primary/20"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-black text-2xl tracking-tighter flex items-center gap-3">
                      {row.a}
                      {block.highlightIndex === i && <Badge variant="secondary" className="bg-white text-primary font-black uppercase text-[9px] px-3 py-1 shadow-md">Winner</Badge>}
                    </div>
                  </div>
                  <div className={cn(
                    "text-xl font-bold leading-tight opacity-80",
                    block.highlightIndex === i ? "text-white" : "text-muted-foreground"
                  )}>{row.b}</div>
                </div>
              ))}
            </div>
          </Card>
        </BlurFade>
      );

    case "comparison":
      return (
        <BlurFade delay={delay}>
          <Card className="p-8 md:p-12 rounded-[3rem] border-4 shadow-2xl bg-white relative overflow-hidden group">
            <h3 className="font-black text-3xl mb-10 flex items-center gap-4 tracking-tighter">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner"><ShieldCheck className="w-8 h-8" /></div>
              {block.title}
            </h3>
            <div className="grid gap-4">
              {block.items.map((item, i) => (
                <div key={i} className="flex items-start gap-6 p-6 rounded-[2.5rem] bg-muted/30 border-2 border-transparent hover:border-primary/20 hover:bg-white transition-all group/item shadow-sm">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 shadow-xl transition-all group-hover/item:scale-110",
                    item.has ? "bg-primary text-white shadow-primary/20" : "bg-muted-foreground/10 text-muted-foreground/40 shadow-none"
                  )}>
                    {item.has ? <Check className="w-7 h-7" /> : <X className="w-7 h-7" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-2xl mb-1 tracking-tighter leading-none">{item.label}</div>
                    {item.description && (
                      <div className="text-lg text-muted-foreground font-bold leading-tight">{item.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </BlurFade>
      );

    case "process":
      return (
        <BlurFade delay={delay}>
          <Card className="p-8 md:p-12 rounded-[3rem] border-4 shadow-2xl bg-white relative overflow-hidden group">
            <h3 className="font-black text-3xl mb-12 flex items-center gap-4 tracking-tighter">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner"><ArrowRight className="w-8 h-8" /></div>
              {block.title}
            </h3>
            <div className="space-y-10 relative">
              {block.steps.map((step, i) => (
                <div key={i} className="flex gap-8 relative z-10 group/step">
                  <div className="w-20 h-20 rounded-[2rem] bg-primary text-white flex items-center justify-center shrink-0 font-black text-4xl shadow-2xl shadow-primary/30 group-hover/step:scale-110 group-hover/step:rotate-6 transition-all">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <div className="font-black text-3xl mb-2 tracking-tighter leading-none">{step.title}</div>
                    <div className="text-muted-foreground text-xl font-bold leading-snug">{step.description}</div>
                  </div>
                  {i < block.steps.length - 1 && (
                    <div className="absolute top-24 left-10 w-1 h-10 bg-gradient-to-b from-primary/20 to-transparent -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </BlurFade>
      );

    case "testimonial":
      return (
        <BlurFade delay={delay}>
          <Card className="p-8 md:p-12 rounded-[3.5rem] border-4 bg-primary text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
              <Sparkles className="w-64 h-64 text-white" />
            </div>

            <div className="flex gap-1.5 mb-10 relative z-10">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="w-6 h-6 text-amber-400 fill-current shadow-sm" />
              ))}
            </div>

            <p className="text-3xl md:text-4xl leading-[1.1] mb-12 font-black italic tracking-tighter text-balance relative z-10">
              &ldquo;{block.text}&rdquo;
            </p>

            <div className="flex items-center gap-6 pt-10 border-t-4 border-white/10 relative z-10">
              <div className="w-20 h-20 rounded-[2rem] bg-white text-primary flex items-center justify-center font-black text-4xl shadow-2xl">
                {block.author.charAt(0)}
              </div>
              <div>
                <div className="font-black text-2xl tracking-tighter leading-none mb-1">{block.author}</div>
                <div className="font-black text-white/60 text-sm uppercase tracking-widest">{block.role}</div>
                <div className="font-black text-white/40 text-xs uppercase tracking-widest">{block.location}</div>
              </div>
            </div>
          </Card>
        </BlurFade>
      );

    case "stats":
      return (
        <BlurFade delay={delay}>
          <Card className="p-8 md:p-12 rounded-[3rem] border-4 shadow-2xl bg-white overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="font-black text-3xl mb-12 flex items-center gap-4 tracking-tighter">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner"><BarChart3 className="w-8 h-8" /></div>
              {block.title}
            </h3>
            <div className="grid gap-6">
              {block.items.map((stat, i) => (
                <div key={i} className="flex items-center gap-8 p-8 rounded-[2.5rem] border-4 border-muted hover:border-primary/30 transition-all hover:-translate-y-1 bg-muted/10 group/item">
                  <div className="text-6xl font-black text-primary tracking-tighter shrink-0 min-w-[120px] group-hover/item:scale-110 transition-transform">{stat.value}</div>
                  <div>
                    <div className="font-black text-2xl tracking-tighter leading-tight mb-1">{stat.label}</div>
                    <div className="text-lg text-muted-foreground font-bold leading-tight">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </BlurFade>
      );

    default:
      return null;
  }
}
