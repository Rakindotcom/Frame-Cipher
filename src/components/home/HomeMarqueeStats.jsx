'use client'

import { useState, useEffect, useRef } from 'react'

const stats = [
  { target: 360, prefix: '', suffix: '°', pad: 0, label: 'Growth System' },
  { target: 70, prefix: '', suffix: '+', pad: 0, label: 'Services Integrated' },
  { target: 1, prefix: '', suffix: '', pad: 2, label: 'Integrated Team' },
  { target: 24, prefix: '', suffix: '/7', pad: 0, label: 'Always On' },
  { target: 5, prefix: '', suffix: '', pad: 0, label: 'Core Pillars' },
  { target: 50, prefix: '', suffix: '+', pad: 0, label: 'Brands Served' },
  { target: 6, prefix: '', suffix: '', pad: 0, label: 'Step Process' },
  { target: 100, prefix: '', suffix: '%', pad: 0, label: 'In-House' },
]

function StatCounterItem({ stat, isVisible }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0)
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
    <div className="flex flex-col items-center justify-center bg-frame-accent px-3 py-6 text-center transition-colors">
      <span className="font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-accent-fg sm:text-4xl lg:text-5xl">
        {stat.prefix}{formattedNumber}{stat.suffix}
      </span>
      <span className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg/80 sm:text-xs">
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
          // Re-triggers every time the user scrolls into view
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
      className="border-y-2 border-frame-border bg-frame-accent text-frame-accent-fg"
    >
      <h2 className="sr-only">Performance metrics and capabilities</h2>
      <div className="grid grid-cols-2 gap-px bg-frame-border/40 sm:grid-cols-4 lg:grid-cols-8">
        {stats.map((stat) => (
          <StatCounterItem key={stat.label} stat={stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
