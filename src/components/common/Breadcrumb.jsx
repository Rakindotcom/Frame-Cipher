'use client'

import Link from 'next/link'

/**
 * Breadcrumb Component
 * Keeps semantic breadcrumb navigation present in the DOM for SEO, crawlers,
 * and accessibility while matching the site's compact technical navigation language.
 */
export default function Breadcrumb({ items = [], className = '' }) {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className={`mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="flex items-center gap-2">
              {isLast || !item.href ? (
                <span aria-current="page" className="text-zinc-300">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition-colors duration-200 hover:text-white">{item.label}</Link>
              )}
              {!isLast && <span aria-hidden="true" className="text-frame-accent">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
