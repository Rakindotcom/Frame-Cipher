'use client'

import React, { useEffect, useRef } from 'react'

// Tier-1 Global Nodes for International SEO
const DHAKA_HQ = { name: 'Dhaka HQ', code: 'bn-BD', lat: 23.8103, lng: 90.4125 }

const GLOBAL_ROUTES = [
  { name: 'USA', code: 'en-US', lat: 40.7128, lng: -74.006 },
  { name: 'UK', code: 'en-GB', lat: 51.5074, lng: -0.1278 },
  { name: 'UAE', code: 'ar-AE', lat: 25.2048, lng: 55.2708 },
  { name: 'Canada', code: 'en-CA', lat: 43.6532, lng: -79.3832 },
  { name: 'Australia', code: 'en-AU', lat: -33.8688, lng: 151.2093 },
  { name: 'Europe', code: 'de-DE', lat: 52.52, lng: 13.405 },
]

// Secondary cross-regional peer connections
const CROSS_ROUTES = [
  { from: { lat: 51.5074, lng: -0.1278 }, to: { lat: 40.7128, lng: -74.006 } },
  { from: { lat: 25.2048, lng: 55.2708 }, to: { lat: 52.52, lng: 13.405 } },
]

export default function InternationalSeoVisual() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const isDraggingRef = useRef(false)
  const lastMouseXRef = useRef(0)
  const lastMouseYRef = useRef(0)
  const rotationYRef = useRef(1.2)
  const rotationXRef = useRef(0.24)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let size = 0

    // Fibonacci sphere: 960 evenly distributed dots
    const DOTS_COUNT = 960
    const dots = []
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle

    for (let i = 0; i < DOTS_COUNT; i++) {
      const y = 1 - (i / (DOTS_COUNT - 1)) * 2 // 1 to -1
      const radius = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = phi * i
      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius
      dots.push({ x, y, z })
    }

    // Latitude rings points for wireframe depth (Equator + Tropics)
    const latitudeRings = [0, 0.45, -0.45].map((latY) => {
      const r = Math.sqrt(Math.max(0, 1 - latY * latY))
      const pts = []
      const SEGMENTS = 64
      for (let s = 0; s <= SEGMENTS; s++) {
        const th = (s / SEGMENTS) * Math.PI * 2
        pts.push({
          x: Math.cos(th) * r,
          y: latY,
          z: Math.sin(th) * r,
        })
      }
      return pts
    })

    // Convert Lat/Lng to 3D Cartesian coordinates on unit sphere
    const latLngTo3D = (lat, lng) => {
      const phiRad = (90 - lat) * (Math.PI / 180)
      const thetaRad = (lng + 180) * (Math.PI / 180)
      return {
        x: -(Math.sin(phiRad) * Math.cos(thetaRad)),
        y: Math.cos(phiRad),
        z: Math.sin(phiRad) * Math.sin(thetaRad),
      }
    }

    const hub3D = latLngTo3D(DHAKA_HQ.lat, DHAKA_HQ.lng)

    // Primary routes from Dhaka to global destinations
    const routes3D = GLOBAL_ROUTES.map((r, i) => ({
      ...r,
      target: latLngTo3D(r.lat, r.lng),
      progress: (i * 0.18) % 1,
      speed: 0.0052,
    }))

    // Secondary cross routes
    const crossRoutes3D = CROSS_ROUTES.map((cr, i) => ({
      from: latLngTo3D(cr.from.lat, cr.from.lng),
      target: latLngTo3D(cr.to.lat, cr.to.lng),
      progress: (i * 0.5 + 0.3) % 1,
      speed: 0.0045,
    }))

    // Strict 1:1 square sizing handler
    const updateSize = () => {
      if (!canvas || !container) return
      const rect = container.getBoundingClientRect()
      // Enforce an exact 1:1 square size strictly based on width
      const side = Math.floor(rect.width)
      if (side <= 0) return
      size = side

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(side * dpr)
      canvas.height = Math.round(side * dpr)
      canvas.style.width = `${side}px`
      canvas.style.height = `${side}px`

      // Reset transform so scale is never cumulative
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    updateSize()

    const resizeObserver = new ResizeObserver(() => {
      updateSize()
    })
    resizeObserver.observe(container)

    // Mouse drag interaction
    const onMouseDown = (e) => {
      isDraggingRef.current = true
      lastMouseXRef.current = e.clientX
      lastMouseYRef.current = e.clientY
    }

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return
      const deltaX = e.clientX - lastMouseXRef.current
      const deltaY = e.clientY - lastMouseYRef.current
      rotationYRef.current += deltaX * 0.005
      rotationXRef.current = Math.max(-0.65, Math.min(0.65, rotationXRef.current + deltaY * 0.005))
      lastMouseXRef.current = e.clientX
      lastMouseYRef.current = e.clientY
    }

    const onMouseUp = () => {
      isDraggingRef.current = false
    }

    // Touch interaction
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true
        lastMouseXRef.current = e.touches[0].clientX
        lastMouseYRef.current = e.touches[0].clientY
      }
    }

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return
      const deltaX = e.touches[0].clientX - lastMouseXRef.current
      const deltaY = e.touches[0].clientY - lastMouseYRef.current
      rotationYRef.current += deltaX * 0.006
      rotationXRef.current = Math.max(-0.65, Math.min(0.65, rotationXRef.current + deltaY * 0.006))
      lastMouseXRef.current = e.touches[0].clientX
      lastMouseYRef.current = e.touches[0].clientY
    }

    const onTouchEnd = () => {
      isDraggingRef.current = false
    }

    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    // Helper: draw an oriented arrowhead along the arc trajectory
    const drawArrowHead = (tipX, tipY, angle, arrowSize = 9, color = '#34D399') => {
      ctx.save()
      ctx.translate(tipX, tipY)
      ctx.rotate(angle)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(-arrowSize, -arrowSize * 0.55)
      ctx.lineTo(-arrowSize * 0.65, 0)
      ctx.lineTo(-arrowSize, arrowSize * 0.55)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.shadowColor = color
      ctx.shadowBlur = 10
      ctx.fill()
      ctx.restore()
    }

    // Main 60fps render loop
    const render = () => {
      // Auto continuous rotation
      if (!isDraggingRef.current) {
        rotationYRef.current += 0.0028
      }

      ctx.clearRect(0, 0, size, size)

      const center = size / 2
      // Exactly round radius based on square dimension
      const radius = center * 0.85

      // Soft ambient atmospheric glow behind the sphere
      const outerGlow = ctx.createRadialGradient(
        center,
        center,
        radius * 0.75,
        center,
        center,
        radius * 1.25
      )
      outerGlow.addColorStop(0, 'rgba(16, 185, 129, 0.12)')
      outerGlow.addColorStop(0.5, 'rgba(59, 130, 246, 0.06)')
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = outerGlow
      ctx.beginPath()
      ctx.arc(center, center, radius * 1.25, 0, Math.PI * 2)
      ctx.fill()

      // Exact round circular rim border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(center, center, radius, 0, Math.PI * 2)
      ctx.stroke()

      // 3D Rotation projection (symmetrical on X and Y)
      const project = (p) => {
        const cosX = Math.cos(rotationXRef.current)
        const sinX = Math.sin(rotationXRef.current)
        const y1 = p.y * cosX - p.z * sinX
        const z1 = p.y * sinX + p.z * cosX

        const cosY = Math.cos(rotationYRef.current)
        const sinY = Math.sin(rotationYRef.current)
        const x2 = p.x * cosY + z1 * sinY
        const z2 = -p.x * sinY + z1 * cosY

        return {
          screenX: center + x2 * radius,
          screenY: center - y1 * radius,
          z: z2,
          alpha: (z2 + 1) / 2,
        }
      }

      // Draw subtle wireframe latitude rings for spherical depth
      latitudeRings.forEach((ring) => {
        ctx.beginPath()
        let started = false
        for (let i = 0; i < ring.length; i++) {
          const proj = project(ring[i])
          if (proj.z > -0.15) {
            if (!started) {
              ctx.moveTo(proj.screenX, proj.screenY)
              started = true
            } else {
              ctx.lineTo(proj.screenX, proj.screenY)
            }
          } else {
            started = false
          }
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
        ctx.lineWidth = 0.8
        ctx.stroke()
      })

      // Draw 3D Earth Dotted Matrix
      for (let i = 0; i < dots.length; i++) {
        const proj = project(dots[i])
        if (proj.z > -0.2) {
          const dotAlpha = Math.max(0.06, Math.min(0.72, proj.alpha * 0.75))
          const dotSize = 1.25 * (proj.alpha * 0.7 + 0.45)
          ctx.beginPath()
          ctx.arc(proj.screenX, proj.screenY, dotSize, 0, Math.PI * 2)
          ctx.fillStyle = proj.z > 0.3 ? '#6EE7B7' : '#94A3B8'
          ctx.globalAlpha = dotAlpha
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1.0

      const projHub = project(hub3D)

      // Draw Cross-Regional secondary arcs
      crossRoutes3D.forEach((cr) => {
        const p1 = project(cr.from)
        const p2 = project(cr.target)
        if (p1.z > -0.25 || p2.z > -0.25) {
          const midX = (cr.from.x + cr.target.x) * 0.5
          const midY = (cr.from.y + cr.target.y) * 0.5
          const midZ = (cr.from.z + cr.target.z) * 0.5
          const len = Math.sqrt(midX * midX + midY * midY + midZ * midZ) || 1
          const elevatedMid = {
            x: (midX / len) * 1.3,
            y: (midY / len) * 1.3,
            z: (midZ / len) * 1.3,
          }
          const pMid = project(elevatedMid)

          ctx.strokeStyle = '#38BDF8'
          ctx.lineWidth = 1.1
          ctx.globalAlpha = Math.max(0.08, Math.min(0.45, (p1.alpha + p2.alpha) * 0.3))
          ctx.setLineDash([3, 4])
          ctx.beginPath()
          ctx.moveTo(p1.screenX, p1.screenY)
          ctx.quadraticCurveTo(pMid.screenX, pMid.screenY, p2.screenX, p2.screenY)
          ctx.stroke()
          ctx.setLineDash([])

          // Animated comet along cross arc
          cr.progress = (cr.progress + cr.speed) % 1
          const t = cr.progress
          const cometX = (1 - t) * (1 - t) * p1.screenX + 2 * (1 - t) * t * pMid.screenX + t * t * p2.screenX
          const cometY = (1 - t) * (1 - t) * p1.screenY + 2 * (1 - t) * t * pMid.screenY + t * t * p2.screenY

          if (pMid.z > -0.3) {
            ctx.beginPath()
            ctx.arc(cometX, cometY, 2.2, 0, Math.PI * 2)
            ctx.fillStyle = '#38BDF8'
            ctx.globalAlpha = 0.8
            ctx.shadowColor = '#38BDF8'
            ctx.shadowBlur = 6
            ctx.fill()
            ctx.shadowBlur = 0
          }
        }
      })

      // Draw Main Hub -> Country 3D Flight Arcs with Directional Moving Arrows
      routes3D.forEach((route) => {
        const projTarget = project(route.target)

        if (projHub.z > -0.25 || projTarget.z > -0.25) {
          const midX = (hub3D.x + route.target.x) * 0.5
          const midY = (hub3D.y + route.target.y) * 0.5
          const midZ = (hub3D.z + route.target.z) * 0.5
          const len = Math.sqrt(midX * midX + midY * midY + midZ * midZ) || 1
          const elevation = 1.38
          const elevatedMid = {
            x: (midX / len) * elevation,
            y: (midY / len) * elevation,
            z: (midZ / len) * elevation,
          }
          const projMid = project(elevatedMid)

          const arcAlpha = Math.max(0.12, Math.min(0.75, (projHub.alpha + projTarget.alpha) * 0.42))
          ctx.strokeStyle = '#10B981'
          ctx.lineWidth = 1.4
          ctx.globalAlpha = arcAlpha
          ctx.setLineDash([4, 3])

          ctx.beginPath()
          ctx.moveTo(projHub.screenX, projHub.screenY)
          ctx.quadraticCurveTo(projMid.screenX, projMid.screenY, projTarget.screenX, projTarget.screenY)
          ctx.stroke()
          ctx.setLineDash([])

          // Trajectory progress
          route.progress = (route.progress + route.speed) % 1
          const t = route.progress

          // Quadratic Bezier coordinates at t
          const cometX =
            (1 - t) * (1 - t) * projHub.screenX +
            2 * (1 - t) * t * projMid.screenX +
            t * t * projTarget.screenX
          const cometY =
            (1 - t) * (1 - t) * projHub.screenY +
            2 * (1 - t) * t * projMid.screenY +
            t * t * projTarget.screenY

          // Derivative vector to calculate tangent arrow orientation
          const dx = 2 * (1 - t) * (projMid.screenX - projHub.screenX) + 2 * t * (projTarget.screenX - projMid.screenX)
          const dy = 2 * (1 - t) * (projMid.screenY - projHub.screenY) + 2 * t * (projTarget.screenY - projMid.screenY)
          const angle = Math.atan2(dy, dx)

          // Only draw glowing arrow if on front-facing hemisphere
          if (projMid.z > -0.25) {
            // Tail trail
            ctx.beginPath()
            ctx.arc(cometX, cometY, 3.2, 0, Math.PI * 2)
            ctx.fillStyle = '#FFFFFF'
            ctx.globalAlpha = 0.95
            ctx.shadowColor = '#10B981'
            ctx.shadowBlur = 10
            ctx.fill()
            ctx.shadowBlur = 0

            // Moving Directional 3D Arrowhead
            drawArrowHead(cometX, cometY, angle, 9, '#34D399')
          }
        }

        // Target City Node & Country Label inside the globe
        if (projTarget.z > 0.05) {
          ctx.beginPath()
          ctx.arc(projTarget.screenX, projTarget.screenY, 3.5, 0, Math.PI * 2)
          ctx.fillStyle = '#10B981'
          ctx.globalAlpha = 0.95
          ctx.shadowColor = '#34D399'
          ctx.shadowBlur = 8
          ctx.fill()
          ctx.shadowBlur = 0

          // White center dot
          ctx.beginPath()
          ctx.arc(projTarget.screenX, projTarget.screenY, 1.8, 0, Math.PI * 2)
          ctx.fillStyle = '#FFFFFF'
          ctx.globalAlpha = 1
          ctx.fill()

          // Country Label + Code
          ctx.font = '600 11px "Geist", -apple-system, sans-serif'
          ctx.fillStyle = '#FFFFFF'
          ctx.globalAlpha = Math.min(1, projTarget.alpha * 1.3)
          ctx.fillText(route.name, projTarget.screenX + 7, projTarget.screenY - 2)

          ctx.font = '500 9px ui-monospace, monospace'
          ctx.fillStyle = '#A1A1AA'
          ctx.fillText(route.code, projTarget.screenX + 7, projTarget.screenY + 8)
        }
      })

      // Draw Dhaka HQ Origin Beacon (Prominent Pulsing Ring)
      if (projHub.z > -0.1) {
        const pulse = (Math.sin(Date.now() * 0.005) + 1) * 0.5
        ctx.beginPath()
        ctx.arc(projHub.screenX, projHub.screenY, 5 + pulse * 4, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)'
        ctx.lineWidth = 1.2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(projHub.screenX, projHub.screenY, 5, 0, Math.PI * 2)
        ctx.fillStyle = '#10B981'
        ctx.globalAlpha = 0.95
        ctx.shadowColor = '#34D399'
        ctx.shadowBlur = 12
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.beginPath()
        ctx.arc(projHub.screenX, projHub.screenY, 2.4, 0, Math.PI * 2)
        ctx.fillStyle = '#FFFFFF'
        ctx.globalAlpha = 1.0
        ctx.fill()

        ctx.font = 'bold 11.5px "Geist", -apple-system, sans-serif'
        ctx.fillStyle = '#FFFFFF'
        ctx.globalAlpha = Math.min(1, projHub.alpha * 1.4)
        ctx.fillText('Dhaka HQ', projHub.screenX + 9, projHub.screenY + 3)
      }

      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      resizeObserver.disconnect()
      canvas.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      canvas.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative mx-auto flex w-full items-center justify-center select-none py-2">
      {/* Strict 1:1 Aspect-Square Container guaranteeing a 100% round globe */}
      <div
        ref={containerRef}
        className="relative aspect-square w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px] flex items-center justify-center overflow-visible"
        style={{ aspectRatio: '1 / 1' }}
      >
        <canvas
          ref={canvasRef}
          className="cursor-grab active:cursor-grabbing block touch-none"
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            aspectRatio: '1 / 1',
          }}
          title="Drag to rotate the 3D globe"
        />
      </div>
    </div>
  )
}
