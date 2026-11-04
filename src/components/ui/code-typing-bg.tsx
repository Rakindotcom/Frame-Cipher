'use client'

import React, { useEffect, useRef } from 'react'

/**
 * CodeTypingBg — ambient "terminal/code editor" background animation.
 *
 * Relevant for design & development service pages: muted, token-colored
 * source code types itself out line by line like a live coding session,
 * then holds, fades and loops.
 *
 * Performance notes (deliberately budgeted for a background element):
 * - No canvas, no framer-motion. Pure DOM text built once, then mutated
 *   imperatively via a single low-frequency timer (no React re-renders).
 * - IntersectionObserver pauses while off-screen; document.hidden respected.
 * - `prefers-reduced-motion` renders the full snippet statically.
 */

export type Token = [text: string, className?: string] | string[]

// Token palette tuned to the site's dark cyber-luxury (purple) system.
const KW = 'text-purple-400/70'
const ID = 'text-zinc-300/80'
const STR = 'text-sky-300/60'
const FN = 'text-white/70'
const PUNCT = 'text-zinc-500/70'
const COMMENT = 'text-zinc-500/50 italic'
const NUM = 'text-zinc-600/80'

/** Shared token palette for platform-specific typing snippets passed via `lines`. */
export const CODE_TOKENS = {
  kw: KW,
  id: ID,
  str: STR,
  fn: FN,
  punct: PUNCT,
  comment: COMMENT,
  num: NUM,
}

const DEFAULT_LINES: Token[][] = [
  [[`import`, KW], [` { build } `, ID], [`from `, KW], [`'@framecipher/core'`, STR], [`;`, PUNCT]],
  [],
  [[`const`, KW], [` website `, ID], [`= `, ID], [`build`, FN], [`({`, PUNCT]],
  [[`  design`, FN], [`: `, PUNCT], [`'modern-ui-ux'`, STR], [`,`, PUNCT]],
  [[`  stack`, FN], [`: [`, PUNCT], [`'next'`, STR], [`, `, PUNCT], [`'tailwind'`, STR], [`],`, PUNCT]],
  [[`  performance`, FN], [`: `, PUNCT], [`'core-web-vitals'`, STR], [`,`, PUNCT]],
  [[`});`, PUNCT]],
  [],
  [[`await`, KW], [` website.`, ID], [`optimize`, FN], [`({`, PUNCT]],
  [[`  lighthouse`, FN], [`: `, PUNCT], [`98`, NUM], [`,`, PUNCT], [`  // all green`, COMMENT]],
  [[`  lcp`, FN], [`: `, PUNCT], [`'0.4s'`, STR], [`,`, PUNCT], [`   // mobile-first`, COMMENT]],
  [[`});`, PUNCT]],
  [],
  [[`await`, KW], [` website.`, ID], [`launch`, FN], [`();`, PUNCT], [` // live in 20+ countries`, COMMENT]],
]

export interface CodeTypingBgProps {
  className?: string
  lines?: Token[][]
  /** ms per character typed */
  speed?: number
  /** ms the full snippet stays visible before wiping and looping */
  holdMs?: number
}

export function CodeTypingBg({
  className = '',
  lines = DEFAULT_LINES,
  speed = 26,
  holdMs = 3200,
}: CodeTypingBgProps) {
      const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const gutterClass = 'mr-3 inline-block text-zinc-700 select-none'

    // Build all line/level DOM exactly once; typing only mutates textContent.
    const tokenEls: { el: HTMLElement; full: string }[][] = []
    const caretClass =
      'ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.22em] bg-purple-400 animate-pulse'
    const caret = document.createElement('span')
    caret.className = caretClass

    lines.forEach((tokens, i) => {
      const line = document.createElement('div')
      line.setAttribute('style', 'min-height:1.7em;white-space:pre;')

      const gutter = document.createElement('span')
      gutter.className = gutterClass
      gutter.textContent = String(i + 1).padStart(2, '0')
      line.appendChild(gutter)

      tokenEls.push(
        tokens.map(([text, cls]) => {
          const span = document.createElement('span')
          span.className = cls
          span.textContent = ''
          line.appendChild(span)
          return { el: span, full: text }
        })
      )

      container.appendChild(line)
    })

    function caret_() {
      return 'ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.22em] bg-purple-400 animate-pulse'
    }

    const flat: { el: HTMLElement; full: string }[] = tokenEls.flat()

    // Accessibility / battery: no looping animation when reduced motion is set.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      flat.forEach((t) => {
        t.el.textContent = t.full
      })
      container.lastElementChild?.appendChild(caret)
      return () => caret.remove()
    }

    let cancelled = false
    let index = 0
    let holding = false
    let wipeTimer: ReturnType<typeof setTimeout> | null = null
    let ready = false

    const currentLineEl = () => {
      // Line that owns the caret; empty lines still get it while "typing" 1 char.
      let which = -1
      let count = 0
      for (let i = 0; i < tokenEls.length; i++) {
        if (index < count + tokenChars(i)) {
          which = i
          break
        }
        count += tokenChars(i)
      }
      return which === -1 ? null : container.children[which] as HTMLElement
    }

    const tokenChars = (lineIdx: number) =>
      tokenEls[lineIdx].reduce((sum, t) => sum + t.full.length, 0)

    const step = () => {
      // Move the caret to the line currently being typed (a cheap appendChild move).
      const caretLine = currentLineEl()
      if (caretLine) caretLine.appendChild(caret)

      if (index < flat.length) {
        const t = flat[index]
        t.el.textContent = t.full.slice(0, t.el.textContent!.length + 1)
        if (t.el.textContent === t.full) index++
      } else if (!holding) {
        holding = true
        wipeTimer = setTimeout(() => {
          if (cancelled) return
          container.style.opacity = '0'
          wipeTimer = setTimeout(() => {
            if (cancelled) return
            flat.forEach((t) => {
              t.el.textContent = ''
            })
            index = 0
            holding = false
            container.style.opacity = '1'
          }, 500)
        }, holdMs)
      }
    }

    // Single low-frequency timer: the entire animation budget.
    const timer = setInterval(() => {
      if (!ready || document.hidden) return
      if (!holding) step()
    }, speed)

    const observer = new IntersectionObserver(
      ([entry]) => {
        ready = entry.isIntersecting
      },
      { threshold: 0.02 }
    )
    observer.observe(container)

    container.style.transition = 'opacity 500ms ease'

    return () => {
      cancelled = true
      clearInterval(timer)
      if (wipeTimer) clearTimeout(wipeTimer)
      wipeTimer = null
      observer.disconnect()
      caret.remove()
    }
  }, [lines, speed, holdMs])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`font-mono text-[11px] leading-[1.7] tracking-tight ${className}`}
    />
  )
}
