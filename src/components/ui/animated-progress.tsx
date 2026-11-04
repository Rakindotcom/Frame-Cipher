'use client'

import React, { useEffect, useRef, useState } from 'react'

/**
 * AnimatedProgress — a stat bar that fills from 0 to its target width when
 * it scrolls into view, then stays full exactly like the static layout did.
 *
 * Pure CSS width transition (GPU-friendly), fires once per element, and
 * respects `prefers-reduced-motion` by rendering the full bar immediately.
 */

export interface AnimatedProgressProps {
  /** Final width, e.g. "80%", "91.7%", "100%" */
  width: string
  /** Visual classes of the fill (color/gradients/rounding) */
  className?: string
  /** ms for the width transition */
  duration?: number
  /** ms to wait after becoming visible before filling (for stagger) */
  delay?: number
}

export function AnimatedProgress({
  width,
  className = '',
  duration = 1100,
  delay = 0,
}: AnimatedProgressProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [fill, setFill] = useState('0%')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFill(width)
      return
    }

    let timer: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        timer = setTimeout(() => setFill(width), delay)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [width, delay, duration])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: fill,
        transition: `width ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    />
  )
}
