'use client'

import React, { useEffect, useRef } from 'react'

/**
 * ChipSequence — cycles a glowing "active" highlight across the `.fc-chip`
 * elements inside its wrapper, turning a static step pipeline (e.g. the
 * checkout funnel Product → Cart → Payment → Customer) into a live flow.
 *
 * It renders no new markup; children are untouched. Only class lists are
 * mutated imperatively through a single low-frequency timer (no React
 * re-renders), pauses when off-screen or the tab is hidden, and does
 * nothing under `prefers-reduced-motion`.
 */

export interface ChipSequenceProps {
  className?: string
  children: React.ReactNode
  /** ms each chip stays highlighted */
  stepMs?: number
}

export function ChipSequence({
  className = '',
  children,
  stepMs = 650,
}: ChipSequenceProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const chips = Array.from(container.querySelectorAll<HTMLElement>('.fc-chip'))
    if (chips.length < 2) return

    let index = -1
    let visible = false

    const clear = () => {
      if (index >= 0) {
        chips[index].classList.remove('fc-chip-active')
        index = -1
      }
    }

    const timer = setInterval(() => {
      if (!visible || document.hidden) return
      clear()
      index = (index + 1) % chips.length
      chips[index].classList.add('fc-chip-active')
    }, stepMs)

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0.3 }
    )
    observer.observe(container)

    return () => {
      clearInterval(timer)
      observer.disconnect()
      clear()
    }
  }, [stepMs])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
