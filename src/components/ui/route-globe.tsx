'use client'

import React, { useEffect, useRef } from 'react'

export interface GlobeTheme {
  ground: string
  land: string
  arc: string
  glow: string
  text: string
  muted: string
}

export interface RouteGlobeProps {
  theme?: GlobeTheme
  className?: string
  hubLocation?: { name: string; lat: number; lng: number }
  routes?: Array<{ name: string; lat: number; lng: number }>
}

// Global Hubs & Sample Coordinates
const DEFAULT_HUB = { name: 'Dhaka (HQ)', lat: 23.8103, lng: 90.4125 }

const DEFAULT_ROUTES = [
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'New York', lat: 40.7128, lng: -74.006 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
  { name: 'Toronto', lat: 43.6532, lng: -79.3832 },
  { name: 'Berlin', lat: 52.52, lng: 13.405 },
  { name: 'Riyadh', lat: 24.7136, lng: 46.6753 },
]

export function RouteGlobe({
  theme,
  className = '',
  hubLocation = DEFAULT_HUB,
  routes = DEFAULT_ROUTES,
}: RouteGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isDraggingRef = useRef(false)
  const lastMouseXRef = useRef(0)
  const lastMouseYRef = useRef(0)
  const rotationYRef = useRef(0.8)
  const rotationXRef = useRef(0.25)
  const autoRotateSpeed = 0.0025

  const defaultTheme: GlobeTheme = {
    ground: '#09090B',
    land: '#A855F7',
    arc: '#C084FC',
    glow: 'rgba(168, 85, 247, 0.18)',
    text: '#FFFFFF',
    muted: '#A1A1AA',
  }

  const activeTheme = theme || defaultTheme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0

    // Generate dotted points covering a sphere (Fibonacci sphere algorithm)
    const DOTS_COUNT = 850
    const dots: Array<{ x: number; y: number; z: number }> = []
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle

    for (let i = 0; i < DOTS_COUNT; i++) {
      const y = 1 - (i / (DOTS_COUNT - 1)) * 2 // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y) // radius at y
      const theta = phi * i // golden angle increment

      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius

      dots.push({ x, y, z })
    }

    // Convert Lat/Lng to 3D Sphere Coordinates
    const latLngTo3D = (lat: number, lng: number) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)
      return {
        x: -(Math.sin(phi) * Math.cos(theta)),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
      }
    }

    const hub3D = latLngTo3D(hubLocation.lat, hubLocation.lng)
    const routes3D = routes.map((r) => ({
      ...r,
      target: latLngTo3D(r.lat, r.lng),
      progress: Math.random(), // Random start progress for animated comets
      speed: 0.005 + Math.random() * 0.004,
    }))

    const handleResize = () => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Interactive Drag to Rotate handlers
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true
      lastMouseXRef.current = e.clientX
      lastMouseYRef.current = e.clientY
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      const deltaX = e.clientX - lastMouseXRef.current
      const deltaY = e.clientY - lastMouseYRef.current
      rotationYRef.current += deltaX * 0.005
      rotationXRef.current = Math.max(-0.6, Math.min(0.6, rotationXRef.current + deltaY * 0.005))
      lastMouseXRef.current = e.clientX
      lastMouseYRef.current = e.clientY
    }

    const onMouseUp = () => {
      isDraggingRef.current = false
    }

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true
        lastMouseXRef.current = e.touches[0].clientX
        lastMouseYRef.current = e.touches[0].clientY
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return
      const deltaX = e.touches[0].clientX - lastMouseXRef.current
      const deltaY = e.touches[0].clientY - lastMouseYRef.current
      rotationYRef.current += deltaX * 0.006
      rotationXRef.current = Math.max(-0.6, Math.min(0.6, rotationXRef.current + deltaY * 0.006))
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

    // Main 60fps render loop
    const render = () => {
      if (!isDraggingRef.current) {
        rotationYRef.current += autoRotateSpeed
      }

      ctx.clearRect(0, 0, width, height)

      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.42

      // Draw Atmospheric Glow behind the globe
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.7,
        centerX,
        centerY,
        radius * 1.35
      )
      glowGrad.addColorStop(0, activeTheme.glow)
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = glowGrad
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2)
      ctx.fill()

      // Function to project 3D point after rotation
      const project = (p: { x: number; y: number; z: number }) => {
        // Rotate around X
        const cosX = Math.cos(rotationXRef.current)
        const sinX = Math.sin(rotationXRef.current)
        const y1 = p.y * cosX - p.z * sinX
        const z1 = p.y * sinX + p.z * cosX

        // Rotate around Y
        const cosY = Math.cos(rotationYRef.current)
        const sinY = Math.sin(rotationYRef.current)
        const x2 = p.x * cosY + z1 * sinY
        const z2 = -p.x * sinY + z1 * cosY

        return {
          screenX: centerX + x2 * radius,
          screenY: centerY - y1 * radius,
          z: z2, // > 0 is facing the viewer
          alpha: (z2 + 1) / 2, // visibility depth
        }
      }

      // Draw Earth Dotted Grid
      for (let i = 0; i < dots.length; i++) {
        const proj = project(dots[i])
        if (proj.z > -0.2) {
          const dotAlpha = Math.max(0.08, Math.min(0.65, proj.alpha * 0.7))
          ctx.beginPath()
          ctx.arc(proj.screenX, proj.screenY, 1.25 * (proj.alpha * 0.8 + 0.4), 0, Math.PI * 2)
          ctx.fillStyle = activeTheme.land
          ctx.globalAlpha = dotAlpha
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1.0

      // Projected Hub
      const projHub = project(hub3D)

      // Draw Arcs & Animated Comets connecting Dhaka Hub to Global Targets
      routes3D.forEach((route) => {
        const projTarget = project(route.target)

        // Draw great-circle curved arc if either hub or target is reasonably visible
        if (projHub.z > -0.2 || projTarget.z > -0.2) {
          // Midpoint calculated in 3D and elevated outward for high arch
          const midX = (hub3D.x + route.target.x) * 0.5
          const midY = (hub3D.y + route.target.y) * 0.5
          const midZ = (hub3D.z + route.target.z) * 0.5
          const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ) || 1
          const elevation = 1.35 // Great circle arch height
          const elevatedMid = {
            x: (midX / midLen) * elevation,
            y: (midY / midLen) * elevation,
            z: (midZ / midLen) * elevation,
          }

          const projMid = project(elevatedMid)

          const arcAlpha = Math.max(0.12, Math.min(0.7, (projHub.alpha + projTarget.alpha) * 0.4))
          ctx.strokeStyle = activeTheme.arc
          ctx.lineWidth = 1.2
          ctx.globalAlpha = arcAlpha
          ctx.setLineDash([3, 3])

          ctx.beginPath()
          ctx.moveTo(projHub.screenX, projHub.screenY)
          ctx.quadraticCurveTo(projMid.screenX, projMid.screenY, projTarget.screenX, projTarget.screenY)
          ctx.stroke()
          ctx.setLineDash([])

          // Animated Comet Particle along the curve
          route.progress = (route.progress + route.speed) % 1
          const t = route.progress

          // Quadratic Bezier interpolation for comet
          const cometX =
            (1 - t) * (1 - t) * projHub.screenX +
            2 * (1 - t) * t * projMid.screenX +
            t * t * projTarget.screenX
          const cometY =
            (1 - t) * (1 - t) * projHub.screenY +
            2 * (1 - t) * t * projMid.screenY +
            t * t * projTarget.screenY

          if (projMid.z > -0.3) {
            ctx.beginPath()
            ctx.arc(cometX, cometY, 2.8, 0, Math.PI * 2)
            ctx.fillStyle = '#FFFFFF'
            ctx.globalAlpha = 0.95
            ctx.shadowColor = activeTheme.arc
            ctx.shadowBlur = 8
            ctx.fill()
            ctx.shadowBlur = 0

            // Trailing glow
            ctx.beginPath()
            ctx.arc(cometX, cometY, 5, 0, Math.PI * 2)
            ctx.fillStyle = activeTheme.arc
            ctx.globalAlpha = 0.4
            ctx.fill()
          }
        }

        // Draw Target Node Dot & Label
        if (projTarget.z > 0.05) {
          ctx.beginPath()
          ctx.arc(projTarget.screenX, projTarget.screenY, 3, 0, Math.PI * 2)
          ctx.fillStyle = activeTheme.arc
          ctx.globalAlpha = 0.9
          ctx.fill()

          ctx.font = '10px "Geist", sans-serif'
          ctx.fillStyle = activeTheme.muted
          ctx.globalAlpha = Math.min(1, projTarget.alpha * 1.2)
          ctx.fillText(route.name, projTarget.screenX + 6, projTarget.screenY + 3)
        }
      })

      // Draw Dhaka HQ Beacon Node (Prominent Pulse)
      if (projHub.z > -0.1) {
        ctx.beginPath()
        ctx.arc(projHub.screenX, projHub.screenY, 5.5, 0, Math.PI * 2)
        ctx.fillStyle = '#A855F7'
        ctx.globalAlpha = 0.95
        ctx.shadowColor = '#C084FC'
        ctx.shadowBlur = 12
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.beginPath()
        ctx.arc(projHub.screenX, projHub.screenY, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = '#FFFFFF'
        ctx.globalAlpha = 1.0
        ctx.fill()

        ctx.font = 'bold 11px "Geist", sans-serif'
        ctx.fillStyle = '#FFFFFF'
        ctx.globalAlpha = Math.min(1, projHub.alpha * 1.5)
        ctx.fillText('Dhaka HQ', projHub.screenX + 8, projHub.screenY + 4)
      }

      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      canvas.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [activeTheme, hubLocation, routes])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="block h-full w-full cursor-grab active:cursor-grabbing"
      />
    </div>
  )
}

