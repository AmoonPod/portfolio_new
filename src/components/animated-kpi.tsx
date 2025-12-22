"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

interface AnimatedKpiProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  className?: string
  valueClassName?: string
  labelClassName?: string
}

export function AnimatedKpi({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  className = "",
  valueClassName = "",
  labelClassName = ""
}: AnimatedKpiProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView) return

    if (prefersReducedMotion) {
      setDisplayValue(value)
      return
    }

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(easeOut * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration, prefersReducedMotion])

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className={valueClassName}
      >
        {prefix}{displayValue.toLocaleString("it-IT")}{suffix}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={labelClassName}
      >
        {label}
      </motion.div>
    </div>
  )
}

interface MiniBarChartProps {
  data: number[]
  color?: string
  className?: string
}

export function MiniBarChart({ data, color = "bg-primary", className = "" }: MiniBarChartProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const prefersReducedMotion = useReducedMotion()
  const maxValue = Math.max(...data)

  return (
    <div ref={ref} className={`flex items-end gap-1 h-16 ${className}`}>
      {data.map((value, index) => {
        const height = (value / maxValue) * 100
        return (
          <motion.div
            key={index}
            className={`flex-1 ${color} rounded-t-sm`}
            initial={{ height: 0 }}
            animate={isInView ? { height: `${height}%` } : { height: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.05,
              ease: "easeOut"
            }}
          />
        )
      })}
    </div>
  )
}

