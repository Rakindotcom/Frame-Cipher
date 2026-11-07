'use client'

import { useState, useEffect, useRef } from 'react'
import { Zap, Layers, ShieldCheck, Clock, MapPin, Users, GitBranch, CheckCircle2 } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { target: 360, prefix: '', suffix: '°', pad: 0, label: 'Growth System', icon: Zap },
  { target: 74, prefix: '', suffix: '+', pad: 0, label: 'Services Integrated', icon: Layers },
  { target: 1, prefix: '', suffix: '', pad: 2, label: 'Integrated Team', icon: ShieldCheck },
  { target: 24, prefix: '', suffix: '/7', pad: 0, label: 'Always On', icon: Clock },
  { target: 7, prefix: '', suffix: '', pad: 2, label: 'Service Areas', icon: MapPin },
  { target: 50, prefix: '', suffix: '+', pad: 0, label: 'Brands Served', icon: Users },
  { target: 6, prefix: '', suffix: '', pad: 2, label: 'Step Process', icon: GitBranch },
  { target: 100, prefix: '', suffix: '%', pad: 0, label: 'In-House', icon: CheckCircle2 },
]

export default function HomeMarqueeStats() {
  const sectionRef = useRef(null)
  const [triggerCount, setTriggerCount] = useState(0)
  const [cardHoverCount, setCardHoverCount] = useState({})
  const inViewRef = useRef(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node || typeof window === 'undefined') return

    const handleScroll = () => {
      const rect = node.getBoundingClientRect()
      // Section is considered in the active reading viewport
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 50

      if (inView && !inViewRef.current) {
        inViewRef.current = true
        // Increment trigger count to trigger counter animation across all cards
        setTriggerCount((prev) => prev + 1)
      } else if (!inView && inViewRef.current) {
        inViewRef.current = false
        // Reset to 0 when scrolled away so it replays next time scrolled into view
        setTriggerCount(0)
      }
    }

    let observer = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !inViewRef.current) {
              inViewRef.current = true
              setTriggerCount((prev) => prev + 1)
            } else if (!entry.isIntersecting && inViewRef.current) {
              inViewRef.current = false
              setTriggerCount(0)
            }
          })
        },
        { threshold: 0.15 }
      )
      observer.observe(node)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      if (observer) observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate border-y border-white/[0.08] bg-[#09090B] text-white overflow-hidden select-none"
    >
      <h2 className="sr-only text-highlighted">Performance metrics and capabilities</h2>
      <div className="grid grid-cols-2 gap-px bg-white/[0.08] sm:grid-cols-4 lg:grid-cols-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          const hoverKey = `card-${index}`
          // If triggerCount is > 0, section is in view. Adding cardHoverCount allows replaying on hover
          const currentTrigger = triggerCount > 0 ? triggerCount + (cardHoverCount[hoverKey] || 0) : 0

          return (
            <div
              key={stat.label}
              onMouseEnter={() =>
                setCardHoverCount((prev) => ({
                  ...prev,
                  [hoverKey]: (prev[hoverKey] || 0) + 1,
                }))
              }
              className="group relative flex flex-col items-center justify-center bg-[#09090B] px-3 py-6 text-center transition-colors duration-300 hover:bg-[#121214] cursor-pointer overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-purple-600/30 bg-purple-600/10 text-purple-600 transition-transform duration-300 group-hover:scale-110">
                <IconComponent className="h-3.5 w-3.5" />
              </div>
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold leading-none tabular-nums text-highlighted">
                <AnimatedCounter
                  value={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  pad={stat.pad}
                  duration={1200}
                  delay={index * 40}
                  suffixClassName="text-purple-600"
                  replay={true}
                  trigger={currentTrigger}
                />
              </span>
              <span className="mt-2 font-mono text-[11px] text-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
