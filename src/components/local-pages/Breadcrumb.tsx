'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  // Legacy props for compatibility
  serviceName?: string
  serviceSlug?: string
  cityName?: string
  variant?: 'light' | 'dark'
}

export function Breadcrumb({ 
  items: propItems,
  serviceName, 
  serviceSlug, 
  cityName,
  variant = 'light'
}: BreadcrumbProps) {
  const isDark = variant === 'dark'
  
  // Build items from legacy props if items not provided
  const items: BreadcrumbItem[] = propItems || [
    { name: 'Home', href: '/' },
    { name: serviceName || 'Servizi', href: serviceSlug ? `/${serviceSlug}` : undefined },
    { name: cityName || '' }
  ].filter(item => item.name);

  return (
    <nav
      className={cn(
        "container max-w-[1200px] mx-auto px-4 sm:px-6 py-3"
      )}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isFirst = idx === 0;

          return (
            <li key={idx} className="flex items-center">
              {!isFirst && (
                <ChevronRight className={cn(
                  "w-4 h-4 mx-1",
                  isDark ? "text-gray-600" : "text-muted-foreground/50"
                )} />
              )}
              
              {isLast || !item.href ? (
                <span 
                  className={cn(
                    "font-semibold",
                    isDark ? "text-white" : "text-foreground",
                    isFirst && "flex items-center gap-1.5"
                  )} 
                  aria-current="page"
                >
                  {isFirst && item.name === 'Home' && <Home className="w-4 h-4" />}
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 transition-colors font-medium",
                    isDark 
                      ? "text-gray-400 hover:text-white" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isFirst && item.name === 'Home' && <Home className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  )
}
