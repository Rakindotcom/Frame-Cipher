'use client'

import { useState, useEffect, useRef } from 'react'

const stats = [
  { target: 360, prefix: '', suffix: '°', pad: 0, label: 'Growth System' },
  { target: 74, prefix: '', suffix: '+', pad: 0, label: 'Services Integrated' },
  { target: 1, prefix: '', suffix: '', pad: 2, label: 'Integrated Team' },
  { target: 24, prefix: '', suffix: '/7', pad: 0, label: 'Always On' },
  { target: 7, prefix: '', suffix: '', pad: 0, label: 'Service Areas' },
  { target: 50, prefix: '', suffix: '+', pad: 0, label: 'Brands Served' },
  { target: 6, prefix: '', suffix: '', pad: 0, label: 'Step Process' },
  { target: 100, prefix: '', suffix: '%', pad: 0, label: 'In-House' },
]

function StatCounterItem({ stat, isVisible }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      const resetRaf = requestAnimationFrame(() => setDisplayValue(0))
      return () => cancelAnimationFrame(resetRaf)
    }

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplayValue(stat.target)
      return
    }

    let start = 0
    const end = stat.target
    const duration = 1200
    let startTime = null
    let rafId

    const step = (now) => {
      if (!startTime) startTime = now
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (end - start) * ease)
      setDisplayValue(current)

      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      } else {
        setDisplayValue(end)
      }
    }

    rafId = requestAnimationFrame(step)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isVisible, stat.target])

  const formattedNumber =
    stat.pad && displayValue < 10
      ? String(displayValue).padStart(stat.pad, '0')
      : displayValue

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#09090B] px-3 py-6 text-center transition-colors duration-300 hover:bg-[#121214] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/30 before:to-transparent before:opacity-0 hover:before:opacity-100">
      <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium leading-none tabular-nums text-white">
        {stat.prefix}{formattedNumber}{stat.suffix}
      </span>
      <span className="mt-2 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
        {stat.label}
      </span>
    </div>
  )
}

export default function HomeMarqueeStats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate border-y border-white/[0.08] bg-[#09090B] text-white"
    >
      <h2 className="sr-only">Performance metrics and capabilities</h2>
      <div className="grid grid-cols-2 gap-px bg-white/[0.08] sm:grid-cols-4 lg:grid-cols-8">
        {stats.map((stat) => (
          <StatCounterItem key={stat.label} stat={stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
