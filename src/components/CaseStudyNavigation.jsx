'use client'

import { useEffect, useRef, useState } from 'react'

const tabs = [
  { id: 'featured-case-study', label: 'Featured study' },
  { id: 'case-studies-paid-ads', label: 'Paid Ads' },
  { id: 'case-studies-seo', label: 'SEO' },
]

export default function CaseStudyNavigation() {
  const navRef = useRef(null)
  const [activeId, setActiveId] = useState(tabs[0].id)

  useEffect(() => {
    const nav = navRef.current
    const container = nav.parentElement
    const header = document.querySelector('header')
    const sections = tabs.map(({ id }) => document.getElementById(id))
    let frame = 0

    const updateActiveTab = () => {
      const offset = (header?.getBoundingClientRect().height || 78) + nav.offsetHeight + 24
      let current = tabs[0].id
      sections.forEach((section) => {
        if (section && section.getBoundingClientRect().top <= offset) current = section.id
      })
      setActiveId(current)
    }

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateActiveTab)
    }

    const measureNavigation = () => {
      const headerHeight = header?.getBoundingClientRect().height || 78
      container.style.setProperty('--case-study-header-height', `${headerHeight}px`)
      container.style.setProperty('--case-study-scroll-offset', `${headerHeight + nav.offsetHeight + 16}px`)
      scheduleUpdate()
    }

    const observer = new ResizeObserver(measureNavigation)
    observer.observe(nav)
    if (header) observer.observe(header)
    measureNavigation()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
    }
  }, [])

  const navigateToStudy = (event, id) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const target = document.getElementById(id)
    if (!target) return

    event.preventDefault()
    if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`)
    target.focus({ preventScroll: true })
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    })
  }

  return (
    <nav
      ref={navRef}
      aria-label="Case study navigation"
      className="sticky top-[var(--case-study-header-height,78px)] z-40 border-y-2 border-frame-border bg-frame-bg/95 px-4 py-3 shadow-lg backdrop-blur-xl md:px-8"
    >
      <div className="mx-auto flex max-w-[95vw] items-center gap-4">
        <span className="hidden shrink-0 text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg md:block">
          Case studies
        </span>
        <div className="flex min-w-0 gap-2 overflow-x-auto p-1">
          {tabs.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => navigateToStudy(event, id)}
              aria-current={activeId === id ? 'location' : undefined}
              className={`shrink-0 whitespace-nowrap border-2 px-4 py-2 text-xs font-black uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-frame-accent ${
                activeId === id
                  ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                  : 'border-frame-border bg-frame-bg text-frame-muted-fg hover:border-frame-accent hover:text-frame-fg'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
