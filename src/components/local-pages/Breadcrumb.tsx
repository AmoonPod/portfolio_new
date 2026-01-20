'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbProps {
  serviceName: string
  serviceSlug: string
  cityName: string
  variant?: 'light' | 'dark'
}

export function Breadcrumb({ 
  serviceName, 
  serviceSlug, 
  cityName,
  variant = 'light'
}: BreadcrumbProps) {
  const isDark = variant === 'dark'
  
  return (
    <nav
      className={cn(
        "container max-w-[1200px] mx-auto px-4 sm:px-6 py-3"
      )}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li className="flex items-center">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-1.5 transition-colors font-medium",
              isDark 
                ? "text-gray-400 hover:text-white" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center">
          <ChevronRight className={cn(
            "w-4 h-4 mx-1",
            isDark ? "text-gray-600" : "text-muted-foreground/50"
          )} />
          <Link
            href={`/${serviceSlug}`}
            className={cn(
              "transition-colors font-medium",
              isDark 
                ? "text-gray-400 hover:text-white" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {serviceName}
          </Link>
        </li>
        <li className="flex items-center">
          <ChevronRight className={cn(
            "w-4 h-4 mx-1",
            isDark ? "text-gray-600" : "text-muted-foreground/50"
          )} />
          <span 
            className={cn(
              "font-semibold",
              isDark ? "text-white" : "text-foreground"
            )} 
            aria-current="page"
          >
            {cityName}
          </span>
        </li>
      </ol>
    </nav>
  )
}
