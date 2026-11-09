'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * AnimatedCounter component
 * Dynamically counts from 0 to target number when scrolled into viewport.
 * Automatically re-triggers every time it is scrolled into view (replay = true).
 * Supports prefixes, suffixes, padding, decimals, custom durations/delays,
 * and direct 'trigger' control from parent sections.
 */
export default function AnimatedCounter({
  value,
  target,
  prefix = '',
  suffix = '',
  pad = 0,
  duration = 1200,
  delay = 0,
  className = '',
  suffixClassName = 'text-purple-600',
  replay = true,
  trigger = null,
}) {
  const [displayNumber, setDisplayNumber] = useState(0)
  const elementRef = useRef(null)
  const rafRef = useRef(null)
  const inViewRef = useRef(false)

  // Parse raw value (or target alias) to extract target number, prefix, and suffix automatically if not separated
  const rawStr = String((value ?? target) ?? '').trim()
  const match = rawStr.match(/^([^\d.]*)([\d.]+)(.*)$/)

  const resolvedPrefix = prefix || (match ? match[1] : '')
  const targetNumber = match ? parseFloat(match[2]) : 0
  const resolvedSuffix = suffix || (match ? match[3] : '')

  const isDecimal = match ? match[2].includes('.') : false
  const decimalPlaces = isDecimal ? match[2].split('.')[1].length : 0

  const stopAnimation = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  const startAnimation = () => {
    stopAnimation()
    let startTimestamp = null
    const startVal = 0

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp + delay

      // During delay period, stay at 0
      if (timestamp < startTimestamp) {
        setDisplayNumber(0)
        rafRef.current = requestAnimationFrame(step)
        return
      }

      const elapsed = timestamp - startTimestamp
      const progress = Math.min(elapsed / duration, 1)

      // Smooth cubic ease-out so every number transition is clearly visible
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = startVal + (targetNumber - startVal) * ease

      setDisplayNumber(current)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        setDisplayNumber(targetNumber)
        rafRef.current = null
      }
    }

    rafRef.current = requestAnimationFrame(step)
  }

  // Handle explicit trigger from parent section (e.g. HomeMarqueeStats)
  useEffect(() => {
    if (trigger === null) return

    if (trigger > 0 || trigger === true) {
      startAnimation()
    } else if (replay) {
      stopAnimation()
      setDisplayNumber(0)
    }

    return () => stopAnimation()
  }, [trigger, targetNumber, duration, delay, replay])

  // Fallback: standalone auto-trigger when no parent trigger is provided
  useEffect(() => {
    if (trigger !== null) return
    const node = elementRef.current
    if (!node || typeof window === 'undefined') return

    const handleCheck = () => {
      const rect = node.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 50

      if (inView) {
        if (!inViewRef.current) {
          inViewRef.current = true
          startAnimation()
        }
      } else if (replay) {
        if (inViewRef.current) {
          inViewRef.current = false
          stopAnimation()
          setDisplayNumber(0)
        }
      }
    }

    let observer = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!inViewRef.current) {
                inViewRef.current = true
                startAnimation()
              }
            } else if (replay) {
              if (inViewRef.current) {
                inViewRef.current = false
                stopAnimation()
                setDisplayNumber(0)
              }
            }
          })
        },
        { threshold: 0.15 }
      )
      observer.observe(node)
    }

    window.addEventListener('scroll', handleCheck, { passive: true })
    handleCheck()

    return () => {
      if (observer) observer.disconnect()
      window.removeEventListener('scroll', handleCheck)
      stopAnimation()
    }
  }, [trigger, targetNumber, duration, delay, replay])

  // Format the animated number
  let formattedNumber = isDecimal
    ? displayNumber.toFixed(decimalPlaces)
    : Math.round(displayNumber)

  if (pad && Number(formattedNumber) < 10) {
    formattedNumber = String(formattedNumber).padStart(pad, '0')
  }

  return (
    <span
      ref={elementRef}
      className={`inline-block tabular-nums ${className}`}
    >
      {resolvedPrefix && <span>{resolvedPrefix}</span>}
      <span>{formattedNumber}</span>
      {resolvedSuffix && (
        <span className={suffixClassName}>{resolvedSuffix}</span>
      )}
    </span>
  )
}
