'use client'

import React, { useEffect, useRef, useState } from 'react'

const MILESTONES = [
  {
    quarter: 'Q1',
    title: 'Technical Foundation',
    metric: '+45% Health',
    t: 0.12, // Position along curve (0 to 1)
    color: '#38BDF8', // Cyan
  },
  {
    quarter: 'Q2',
    title: 'Intent Content Silos',
    metric: '+85% Indexed',
    t: 0.38,
    color: '#A855F7', // Violet
  },
  {
    quarter: 'Q3',
    title: 'Authority & Contextual PR',
    metric: '+140% Impressions',
    t: 0.68,
    color: '#10B981', // Emerald
  },
  {
    quarter: 'Q4',
    title: 'Market Dominance',
    metric: '3.4x Revenue',
    t: 0.94,
    color: '#F59E0B', // Amber
  },
]

export default function SeoStrategyVisual() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(2)
  const activeIdxRef = useRef(2)
  const isHoveredRef = useRef(false)

  useEffect(() => {
    activeIdxRef.current = activeIdx
  }, [activeIdx])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = 0
    let height = 0
    let time = 0

    // Stream particles traveling along the trajectory
    const PARTICLE_COUNT = 36
    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      t: (i / PARTICLE_COUNT),
      speed: 0.003 + (i % 4) * 0.0008,
      size: 1.5 + (i % 3) * 0.8,
      opacity: 0.4 + (i % 3) * 0.3,
    }))

    // Cubic Bézier calculation
    const getCurvePoint = (t, p0, p1, p2, p3) => {
      const u = 1 - t
      const tt = t * t
      const uu = u * u
      const uuu = uu * u
      const ttt = tt * t

      return {
        x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
        y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
      }
    }

    const updateSize = () => {
      const rect = container.getBoundingClientRect()
      width = Math.floor(rect.width)
      // Ideal aspect ratio ~ 1.25 : 1 to match the hero text height cleanly
      height = Math.max(340, Math.floor(width * 0.72))
      if (width <= 0) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    updateSize()
    const resizeObserver = new ResizeObserver(() => updateSize())
    resizeObserver.observe(container)

    // Auto cycle active quarter every 3.8s
    const cycleInterval = setInterval(() => {
      if (!isHoveredRef.current) {
        setActiveIdx((prev) => (prev + 1) % MILESTONES.length)
      }
    }, 3800)

    // Render loop
    const render = () => {
      time += 0.02
      ctx.clearRect(0, 0, width, height)

      // Padding
      const padLeft = 45
      const padRight = 50
      const padTop = 45
      const padBottom = 45

      // Control points for the compounding growth curve
      const p0 = { x: padLeft, y: height - padBottom }
      const p1 = { x: padLeft + (width - padLeft - padRight) * 0.35, y: height - padBottom - 15 }
      const p2 = { x: padLeft + (width - padLeft - padRight) * 0.55, y: padTop + (height - padTop - padBottom) * 0.4 }
      const p3 = { x: width - padRight, y: padTop }

      // 1. Subtle Matrix Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
      ctx.lineWidth = 1
      const gridCols = 6
      const gridRows = 4
      for (let c = 0; c <= gridCols; c++) {
        const x = padLeft + (c / gridCols) * (width - padLeft - padRight)
        ctx.beginPath()
        ctx.moveTo(x, padTop - 10)
        ctx.lineTo(x, height - padBottom + 10)
        ctx.stroke()
      }
      for (let r = 0; r <= gridRows; r++) {
        const y = padTop + (r / gridRows) * (height - padTop - padBottom)
        ctx.beginPath()
        ctx.moveTo(padLeft - 10, y)
        ctx.lineTo(width - padRight + 10, y)
        ctx.stroke()
      }

      // 2. Stagnant Baseline Curve (Without Strategy)
      ctx.save()
      ctx.setLineDash([4, 4])
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      for (let x = padLeft; x <= width - padRight; x += 3) {
        const norm = (x - padLeft) / (width - padLeft - padRight)
        const wave = Math.sin(norm * 14 + time * 0.6) * 4
        const y = height - padBottom - 15 + wave
        if (x === padLeft) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.restore()

      // Baseline Label
      ctx.font = '500 10px ui-monospace, monospace'
      ctx.fillStyle = 'rgba(255, 255, 255, 0.28)'
      ctx.fillText('Static Competitor Baseline (Plateau)', padLeft, height - padBottom + 26)

      // 3. Shimmering Area Gradient Fill under Compounding Strategic Curve
      const areaGrad = ctx.createLinearGradient(0, padTop, 0, height - padBottom)
      areaGrad.addColorStop(0, 'rgba(168, 85, 247, 0.22)')
      areaGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.08)')
      areaGrad.addColorStop(1, 'rgba(14, 14, 18, 0.0)')

      ctx.beginPath()
      ctx.moveTo(p0.x, p0.y)
      for (let t = 0; t <= 1; t += 0.02) {
        const pt = getCurvePoint(t, p0, p1, p2, p3)
        ctx.lineTo(pt.x, pt.y)
      }
      ctx.lineTo(p3.x, height - padBottom)
      ctx.lineTo(p0.x, height - padBottom)
      ctx.closePath()
      ctx.fillStyle = areaGrad
      ctx.fill()

      // 4. Vibrant Strategic Growth Bézier Curve
      const curveGrad = ctx.createLinearGradient(p0.x, p0.y, p3.x, p3.y)
      curveGrad.addColorStop(0, '#38BDF8') // Cyan
      curveGrad.addColorStop(0.35, '#A855F7') // Purple
      curveGrad.addColorStop(0.7, '#10B981') // Emerald
      curveGrad.addColorStop(1, '#F59E0B') // Gold

      ctx.save()
      ctx.strokeStyle = curveGrad
      ctx.lineWidth = 3.5
      ctx.shadowColor = '#A855F7'
      ctx.shadowBlur = 14
      ctx.beginPath()
      for (let t = 0; t <= 1; t += 0.015) {
        const pt = getCurvePoint(t, p0, p1, p2, p3)
        if (t === 0) ctx.moveTo(pt.x, pt.y)
        else ctx.lineTo(pt.x, pt.y)
      }
      ctx.stroke()
      ctx.restore()

      // 5. Flowing Data Particles / Photons along the strategic path
      particles.forEach((p) => {
        p.t += p.speed
        if (p.t > 1) p.t = 0

        const pt = getCurvePoint(p.t, p0, p1, p2, p3)
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = '#FFFFFF'
        ctx.globalAlpha = p.opacity * Math.sin(p.t * Math.PI)
        ctx.shadowColor = '#38BDF8'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1.0
      })

      // 6. Draw Strategic Milestones (Q1, Q2, Q3, Q4)
      MILESTONES.forEach((m, idx) => {
        const pt = getCurvePoint(m.t, p0, p1, p2, p3)
        const isCurrent = activeIdxRef.current === idx

        // Expanding Radar Ring Pulse for Active Milestone
        if (isCurrent) {
          const pulse = (Math.sin(time * 3) + 1) * 0.5
          ctx.beginPath()
          ctx.arc(pt.x, pt.y, 8 + pulse * 10, 0, Math.PI * 2)
          ctx.strokeStyle = m.color
          ctx.lineWidth = 1.5
          ctx.globalAlpha = 0.55 - pulse * 0.4
          ctx.stroke()
          ctx.globalAlpha = 1.0
        }

        // Outer Ring
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, isCurrent ? 8 : 5.5, 0, Math.PI * 2)
        ctx.fillStyle = '#0E0E12'
        ctx.strokeStyle = m.color
        ctx.lineWidth = isCurrent ? 3 : 2
        ctx.shadowColor = m.color
        ctx.shadowBlur = isCurrent ? 12 : 4
        ctx.fill()
        ctx.stroke()
        ctx.shadowBlur = 0

        // Center Core
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, isCurrent ? 3.5 : 2.2, 0, Math.PI * 2)
        ctx.fillStyle = '#FFFFFF'
        ctx.fill()

        // Quarter label on curve
        ctx.font = `bold ${isCurrent ? 12 : 10}px ui-monospace, monospace`
        ctx.fillStyle = isCurrent ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)'
        ctx.textAlign = 'center'
        ctx.fillText(m.quarter, pt.x, pt.y + (pt.y < 80 ? 22 : -14))

        // 7. Active Milestone HUD Badge Tooltip
        if (isCurrent) {
          const badgeW = 168
          const badgeH = 50
          let badgeX = pt.x - badgeW / 2
          let badgeY = pt.y - 70

          // Bound within canvas margins
          if (badgeX < 12) badgeX = 12
          if (badgeX + badgeW > width - 12) badgeX = width - badgeW - 12
          if (badgeY < 12) badgeY = pt.y + 24

          // Glassmorphic HUD badge box
          ctx.save()
          ctx.fillStyle = 'rgba(18, 18, 22, 0.94)'
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)'
          ctx.lineWidth = 1
          ctx.shadowColor = 'rgba(0, 0, 0, 0.7)'
          ctx.shadowBlur = 16

          // Rounded rect
          const radius = 8
          ctx.beginPath()
          ctx.moveTo(badgeX + radius, badgeY)
          ctx.lineTo(badgeX + badgeW - radius, badgeY)
          ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + radius)
          ctx.lineTo(badgeX + badgeW, badgeY + badgeH - radius)
          ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - radius, badgeY + badgeH)
          ctx.lineTo(badgeX + radius, badgeY + badgeH)
          ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - radius)
          ctx.lineTo(badgeX, badgeY + radius)
          ctx.quadraticCurveTo(badgeX, badgeY, badgeX + radius, badgeY)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          ctx.restore()

          // HUD Title
          ctx.font = '600 11px "Geist", -apple-system, sans-serif'
          ctx.fillStyle = '#FFFFFF'
          ctx.textAlign = 'left'
          ctx.fillText(m.title, badgeX + 12, badgeY + 20)

          // HUD Metric Chip
          ctx.font = 'bold 11px ui-monospace, monospace'
          ctx.fillStyle = m.color
          ctx.fillText(`● ${m.metric}`, badgeX + 12, badgeY + 38)
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      clearInterval(cycleInterval)
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      className="relative mx-auto w-full select-none"
      onMouseEnter={() => {
        isHoveredRef.current = true
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
      }}
    >
      {/* Ambient Multi-Layer Glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-blue-500/15 to-emerald-500/15 blur-3xl pointer-events-none" />

      {/* Main Glass Chassis — Clean, Zero Clutter */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0E0E12] shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05]">
        
        {/* Minimalist macOS Window Dots Only (No extra text strings) */}
        <div className="flex items-center gap-2 bg-[#141418] px-4 py-3 border-b border-white/[0.08]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]/90" />
        </div>

        {/* 60fps Dynamic Canvas Visualization */}
        <div ref={containerRef} className="relative w-full overflow-hidden bg-[#0A0A0D]">
          <canvas
            ref={canvasRef}
            className="block cursor-pointer"
            title="Strategic Compounding SEO Growth Curve"
          />
        </div>

        {/* Interactive Milestone Indicator Buttons (Inside the frame, clean minimal pills) */}
        <div className="grid grid-cols-4 border-t border-white/[0.08] bg-[#121214]">
          {MILESTONES.map((m, idx) => {
            const isSelected = activeIdx === idx
            return (
              <button
                key={m.quarter}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`py-3 px-2 text-center transition-colors border-r last:border-r-0 border-white/[0.06] ${
                  isSelected
                    ? 'bg-white/[0.06] text-white'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]'
                }`}
              >
                <span
                  className="font-mono text-xs font-bold block"
                  style={{ color: isSelected ? m.color : undefined }}
                >
                  {m.quarter}
                </span>
                <span className="font-mono text-[10px] text-zinc-400 block truncate mt-0.5">
                  {m.metric}
                </span>
              </button>
            )
          })}
        </div>

      </div>
    </div>
  )
}
