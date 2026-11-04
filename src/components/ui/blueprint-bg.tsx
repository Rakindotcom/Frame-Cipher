'use client'

import React, { useEffect, useRef } from 'react'

/**
 * BlueprintBg — ambient "wireframe blueprint" background animation,
 * hand-built for design-intent pages.
 *
 * mode="draw"  → a responsive wireframe sketches itself box by box
 *                (browser frame → header → cards → CTA → nodes). Used on the
 *                UI/UX design page where drawing a layout IS the service.
 * mode="morph" → an "old" muted layout draws first, labels BEFORE, then
 *                cross-fades into a crisp purple layout labeled AFTER —
 *                a literal rebuild story for the redesign page.
 *
 * Performance model matches CodeTypingBg: SVG primitives are created once,
 * a single low-frequency timer advances stroke offsets, the loop pauses
 * when off-screen or the tab is hidden, and `prefers-reduced-motion`
 * renders the final frame statically with no loop.
 */

export type BlueprintMode = 'draw' | 'morph'

interface RectItem {
  type: 'rect'
  x: number
  y: number
  w: number
  h: number
  stroke: string
  opacity: number
  strokeWidth?: number
}

interface CircleItem {
  type: 'circle'
  cx: number
  cy: number
  r: number
  fill: string
  opacity: number
}

type Item = RectItem | CircleItem

interface Phase {
  /** tiny mono label shown while this phase's layout is on screen */
  label?: string
  items: Item[]
}

const PURPLE = '#a855f7'
const ZINC = '#52525b'
const INDIGO = '#818cf8'
const SKY = '#7dd3fc'

const FRAME: RectItem = {
  type: 'rect',
  x: 14,
  y: 12,
  w: 292,
  h: 194,
  stroke: PURPLE,
  opacity: 0.5,
  strokeWidth: 1.4,
}

const BEFORE_LAYOUT: Item[] = [
  FRAME,
  { type: 'rect', x: 26, y: 26, w: 150, h: 12, stroke: ZINC, opacity: 0.5 },
  { type: 'rect', x: 252, y: 26, w: 42, h: 12, stroke: ZINC, opacity: 0.35 },
  { type: 'rect', x: 26, y: 52, w: 120, h: 50, stroke: ZINC, opacity: 0.5 },
  { type: 'rect', x: 158, y: 52, w: 136, h: 22, stroke: ZINC, opacity: 0.4 },
  { type: 'rect', x: 26, y: 116, w: 268, h: 9, stroke: ZINC, opacity: 0.3 },
  { type: 'rect', x: 26, y: 132, w: 236, h: 9, stroke: ZINC, opacity: 0.3 },
  { type: 'rect', x: 210, y: 158, w: 84, h: 14, stroke: ZINC, opacity: 0.4 },
  { type: 'rect', x: 26, y: 182, w: 268, h: 12, stroke: ZINC, opacity: 0.35 },
]

const AFTER_LAYOUT: Item[] = [
  FRAME,
  { type: 'rect', x: 26, y: 26, w: 110, h: 12, stroke: PURPLE, opacity: 0.7, strokeWidth: 1.4 },
  { type: 'circle', cx: 262, cy: 32, r: 5, fill: PURPLE, opacity: 0.85 },
  { type: 'circle', cx: 288, cy: 32, r: 5, fill: INDIGO, opacity: 0.7 },
  { type: 'rect', x: 26, y: 52, w: 136, h: 56, stroke: PURPLE, opacity: 0.75, strokeWidth: 1.4 },
  { type: 'rect', x: 174, y: 52, w: 120, h: 56, stroke: INDIGO, opacity: 0.6, strokeWidth: 1.4 },
  { type: 'rect', x: 26, y: 120, w: 96, h: 8, stroke: SKY, opacity: 0.6 },
  { type: 'rect', x: 26, y: 134, w: 150, h: 8, stroke: SKY, opacity: 0.45 },
  { type: 'rect', x: 210, y: 116, w: 84, h: 28, stroke: PURPLE, opacity: 0.95, strokeWidth: 1.6 },
  { type: 'circle', cx: 252, cy: 130, r: 3, fill: PURPLE, opacity: 1 },
  { type: 'rect', x: 26, y: 182, w: 268, h: 12, stroke: PURPLE, opacity: 0.5 },
]

// viewBox: 0 0 320 220
const DRAW_PHASES: Record<BlueprintMode, Phase[]> = {
  draw: [{ label: 'WIREFRAME', items: AFTER_LAYOUT }],
  morph: [
    { label: 'BEFORE', items: BEFORE_LAYOUT },
    { label: 'AFTER', items: AFTER_LAYOUT },
  ],
}

export interface BlueprintBgProps {
  mode?: BlueprintMode
  className?: string
  /** ms per drawing step (a single 4% segment of one element's outline) */
  speed?: number
  /** ms a completed phase stays on screen before transitioning */
  holdMs?: number
}

export function BlueprintBg({
  mode = 'draw',
  className = '',
  speed = 26,
  holdMs = 3000,
}: BlueprintBgProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const phases = DRAW_PHASES[mode]

    // Build all DOM once; the loop only mutates stroke offsets / opacity.
    const elsByPhase = phases.map((phase) =>
      phase.items.map((item) => {
        let el: SVGElement
        if (item.type === 'rect') {
          el = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
          el.setAttribute('x', String(item.x))
          el.setAttribute('y', String(item.y))
          el.setAttribute('width', String(item.w))
          el.setAttribute('height', String(item.h))
          el.setAttribute('pathLength', '100')
          el.setAttribute('stroke', item.stroke)
          el.setAttribute('opacity', String(item.opacity))
          el.setAttribute('stroke-width', item.strokeWidth ? String(item.strokeWidth) : '1')
          el.setAttribute('fill', 'none')
          el.setAttribute('stroke-dasharray', '100')
          el.setAttribute('stroke-dashoffset', '100')
        } else {
          el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
          el.setAttribute('cx', String(item.cx))
          el.setAttribute('cy', String(item.cy))
          el.setAttribute('r', '0')
          el.setAttribute('fill', item.fill)
          el.setAttribute('opacity', String(item.opacity))
        }
        return { el: el as SVGElement, item, progress: item.type === 'rect' ? 100 : 0 }
      })
    )

    const labels = phases.map((phase) => {
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      const underline = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      text.textContent = phase.label ?? ''
      text.setAttribute('x', '20')
      text.setAttribute('y', '-14')
      text.setAttribute('class', 'fc-blueprint-label')
      text.setAttribute('opacity', '0')
      underline.setAttribute('x1', '20')
      underline.setAttribute('x2', '94')
      underline.setAttribute('y1', '-8')
      underline.setAttribute('y2', '-8')
      underline.setAttribute('stroke', PURPLE)
      underline.setAttribute('stroke-width', '1')
      underline.setAttribute('opacity', '0')
      group.appendChild(text)
      group.appendChild(underline)
      return { group }
    })

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 320 244')
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    labels.forEach(({ group }) => group.setAttribute('transform', translateForLabel()))
    function translateForLabel() {
      // Labels sit just above the frame, fixed position.
      return mode === 'morph' ? 'translate(0 24)' : 'translate(0 0)'
    }
    svg.appendChild(labels[0].group)
    if (labels[1]) svg.appendChild(labels[1].group)
    const contentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    contentGroup.setAttribute('transform', 'translate(0 22)')
    elsByPhase.forEach((items) => {
      items.forEach(({ el }) => contentGroup.appendChild(el))
    })
    svg.appendChild(contentGroup)
    svg.setAttribute('style', 'opacity:1;transition:opacity 500ms ease;overflow:visible')
    container.appendChild(svg)

    // Reduced motion: render the final phase fully, never loop.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const last = elsByPhase.length - 1
      elsByPhase[last].forEach(({ el, item }) => {
        if (item.type === 'rect') el.setAttribute('stroke-dashoffset', '0')
        else if (item.type === 'circle') el.setAttribute('r', String(item.r))
      })
      if (labels[last]) {
        labels[last].group.querySelectorAll('text,line').forEach((n) => n.setAttribute('opacity', '1'))
      }
      elsByPhase.forEach((items, i) => {
        if (i !== last) items.forEach(({ el }) => el.remove())
      })
      return
    }

    let cancelled = false
    let phaseIdx = 0
    let itemIdx = 0
    let progress = 0 // 0..100 outlines the active rect
    let hold = 0
    let visible = false

    const activeEls = () => elsByPhase[phaseIdx]
    const activeGroupOnly = () => {
      elsByPhase.forEach((items, i) => {
        items.forEach(({ el }) => (el.style.display = i === phaseIdx ? '' : 'none'))
      })
      labels.forEach(({ group }, i) => {
        group.style.display = i === phaseIdx ? '' : 'none'
        group
          .querySelectorAll('text,line')
          .forEach((n) => n.setAttribute('opacity', i === phaseIdx ? '1' : '0'))
      })
    }

    const wipePhase = (done: () => void) => {
      svg.setAttribute('style', 'opacity:0;transition:opacity 500ms ease;overflow:visible')
      setTimeout(() => {
        if (cancelled) return
        elsByPhase.forEach((items) =>
          items.forEach(({ el, item }) => {
            if (item.type === 'rect') el.setAttribute('stroke-dashoffset', '100')
            else if (item.type === 'circle') el.setAttribute('r', '0')
          })
        )
        labels.forEach(({ group }) =>
          group.querySelectorAll('text,line').forEach((n) => n.setAttribute('opacity', '0'))
        )
        svg.setAttribute('style', 'opacity:1;transition:opacity 500ms ease;overflow:visible')
        done()
      }, 520)
    }

    const tick = () => {
      if (!visible || document.hidden) return

      const items = activeEls()
      if (itemIdx < items.length) {
        const entry = items[itemIdx]
        if (entry.item.type === 'rect') {
          progress = Math.min(100, progress + 4)
          entry.el.setAttribute('stroke-dashoffset', String(100 - progress))
          if (progress >= 100) {
            itemIdx++
            progress = 0
          }
        } else {
          // Circles grow over two ticks then move on.
          const target = (entry.item as CircleItem).r
          const r = Math.min(target, Number(entry.el.getAttribute('r') || 0) + target / 2)
          entry.el.setAttribute('r', String(r))
          if (r >= target) {
            itemIdx++
            progress = 0
          }
        }
      } else if (hold < holdMs / speed) {
        hold++
      } else {
        // Phase complete → wipe and advance (or restart the loop).
        hold = 0
        wipePhase(() => {
          phaseIdx = (phaseIdx + 1) % phases.length
          itemIdx = 0
          progress = 0
          activeGroupOnly()
        })
      }
    }

    // Show the first phase and keep the active label in sync with it.
    activeGroupOnly()
    const timer = setInterval(tick, speed)

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    observer.observe(container)

    return () => {
      cancelled = true
      clearInterval(timer)
      observer.disconnect()
    }
  }, [mode, speed, holdMs])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    />
  )
}
