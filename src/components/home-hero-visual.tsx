"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  ClipboardList,
  Layers,
  Target,
  TrendingUp
} from "lucide-react"

import { cn } from "@/lib/utils"

type HomeHeroVisualProps = {
  className?: string
  isCompact?: boolean
}

const TILE_ANIM = {
  scale: [1, 1.02, 1],
  y: [0, -2, 0]
}

const TILE_TRANSITION = (delay: number) => ({
  duration: 3.2,
  times: [0, 0.45, 1],
  delay,
  repeat: Infinity,
  ease: "easeInOut"
})

export function HomeHeroVisual ({ className, isCompact = false }: HomeHeroVisualProps) {
  const prefersReducedMotion = useReducedMotion()

  const tiles = [
    {
      icon: Target,
      title: "Obiettivo",
      text: "Cosa vuoi ottenere (clienti, tempo, margine).",
      accent: "from-primary/15 to-primary/0",
      delay: 0
    },
    {
      icon: ClipboardList,
      title: "Contesto",
      text: "Cosa hai già, cosa manca, cosa blocca oggi.",
      accent: "from-blue-500/15 to-blue-500/0",
      delay: 0.35
    },
    {
      icon: Layers,
      title: "Soluzione",
      text: "Sito, software, integrazioni o app: scegliamo il mezzo.",
      accent: "from-emerald-500/15 to-emerald-500/0",
      delay: 0.7
    },
    {
      icon: TrendingUp,
      title: "Risultato",
      text: "Misuriamo e ottimizziamo: non finisce alla consegna.",
      accent: "from-orange-500/15 to-orange-500/0",
      delay: 1.05
    }
  ]

  return (
    <div className={cn("relative w-full max-w-md", className)}>
      {/* Ambient blobs (different from /siti-web hero) */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-gradient-to-r from-primary/5 via-blue-500/5 to-transparent px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Mappa di crescita</div>
              <div className={cn("text-xs text-muted-foreground", isCompact && "hidden sm:block")}>
                dal bisogno al risultato (senza strada prescritta)
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">Roadmap</span>
            <ArrowRight className="h-3.5 w-3.5" />
            <span className="font-medium text-foreground/80">Esecuzione</span>
            <ArrowRight className="h-3.5 w-3.5" />
            <span className="font-medium text-foreground/80">Ottimizzazione</span>
          </div>
        </div>

        {/* Canvas */}
        <div className={cn("p-4", isCompact ? "sm:p-5" : "sm:p-6")}>
          <div className="relative overflow-hidden rounded-xl border bg-muted/15 p-3 sm:p-4">
            {/* Dotted canvas background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(120,120,120,.18) 1px, transparent 0)",
                backgroundSize: "14px 14px"
              }}
            />

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {tiles.map((tile) => (
                <motion.div
                  key={tile.title}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border bg-background/80 p-3 shadow-sm backdrop-blur-sm",
                    "transition-colors hover:border-primary/25"
                  )}
                  animate={prefersReducedMotion ? undefined : TILE_ANIM}
                  transition={prefersReducedMotion ? undefined : TILE_TRANSITION(tile.delay)}
                >
                  <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br", tile.accent)} />

                  <div className="relative flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                      <tile.icon className="h-4 w-4 text-foreground/80" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-semibold leading-tight">
                        {tile.title}
                      </div>
                      <div className={cn("mt-1 text-xs text-muted-foreground", isCompact && "line-clamp-2")}>
                        {tile.text}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Output row (distinct UI element) */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { label: "Priorità chiare", tint: "bg-primary/10 text-primary" },
              { label: "Stima tempi/costi", tint: "bg-blue-500/10 text-blue-600" },
              { label: "KPI misurabili", tint: "bg-emerald-500/10 text-emerald-600" }
            ].map((pill) => (
              <div
                key={pill.label}
                className={cn(
                  "rounded-lg px-2.5 py-2 text-center text-xs font-medium",
                  "border bg-background",
                  pill.tint
                )}
              >
                {pill.label}
              </div>
            ))}
          </div>

          {/* Animated progress shimmer */}
          <div className="mt-3 overflow-hidden rounded-full bg-muted">
            <div className="relative h-2 w-full">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                animate={
                  prefersReducedMotion
                    ? { x: "0%" }
                    : { x: ["-60%", "160%"] }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 2.8, repeat: Infinity, ease: "linear" }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


