'use client'

import React, { useEffect, useRef } from 'react'

export default function AdsenseApprovalVisual() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const isDraggingRef = useRef(false)
  const lastMouseXRef = useRef(0)
  const lastMouseYRef = useRef(0)
  const rotationYRef = useRef(0.3)
  const rotationXRef = useRef(0.2)
  const autoRotateRef = useRef(true)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let size = 0

    // Load authentic user-provided Google Icon (transparent background)
    const googleIcon = new Image()
    googleIcon.src = '/google-icon.png?v=2'
    let isIconLoaded = false
    googleIcon.onload = () => {
      isIconLoaded = true
    }

    // Strict 1:1 square sizing handler
    const updateSize = () => {
      if (!canvas || !container) return
      const rect = container.getBoundingClientRect()
      const side = Math.floor(rect.width)
      if (side <= 0) return
      size = side

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(side * dpr)
      canvas.height = Math.round(side * dpr)
      canvas.style.width = `${side}px`
      canvas.style.height = `${side}px`

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
      autoRotateRef.current = false
      lastMouseXRef.current = e.clientX
      lastMouseYRef.current = e.clientY
    }

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return
      const deltaX = e.clientX - lastMouseXRef.current
      const deltaY = e.clientY - lastMouseYRef.current
      rotationYRef.current += deltaX * 0.007
      rotationXRef.current = Math.max(-0.6, Math.min(0.6, rotationXRef.current + deltaY * 0.007))
      lastMouseXRef.current = e.clientX
      lastMouseYRef.current = e.clientY
    }

    const onMouseUp = () => {
      isDraggingRef.current = false
      autoRotateRef.current = true
    }

    // Touch interaction
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true
        autoRotateRef.current = false
        lastMouseXRef.current = e.touches[0].clientX
        lastMouseYRef.current = e.touches[0].clientY
      }
    }

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return
      const deltaX = e.touches[0].clientX - lastMouseXRef.current
      const deltaY = e.touches[0].clientY - lastMouseYRef.current
      rotationYRef.current += deltaX * 0.008
      rotationXRef.current = Math.max(-0.6, Math.min(0.6, rotationXRef.current + deltaY * 0.008))
      lastMouseXRef.current = e.touches[0].clientX
      lastMouseYRef.current = e.touches[0].clientY
    }

    const onTouchEnd = () => {
      isDraggingRef.current = false
      autoRotateRef.current = true
    }

    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    // 3D Particles on spherical shells
    const PARTICLE_COUNT = 140
    const particles = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 0.88 + Math.random() * 0.22
      particles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        color: ['#4285F4', '#EA4335', '#FBBC05', '#34A853'][i % 4],
        size: Math.random() * 1.5 + 0.8,
        speed: 0.002 + Math.random() * 0.003,
      })
    }

    // 3 Orbiting Verification Satellite Nodes
    const satellites = [
      { color: '#4285F4', label: 'ELIGIBLE', angle: 0, speed: 0.015, radius: 1.15, tilt: 0.35 },
      { color: '#34A853', label: 'APPROVED', angle: 2.1, speed: 0.012, radius: 1.25, tilt: -0.4 },
      { color: '#FBBC05', label: '100% POLICY', angle: 4.2, speed: 0.014, radius: 1.2, tilt: 0.7 },
    ]

    // 3D Projection Helper
    const project3D = (p, center, scale) => {
      // Rotation around X axis
      const cosX = Math.cos(rotationXRef.current)
      const sinX = Math.sin(rotationXRef.current)
      const y1 = p.y * cosX - p.z * sinX
      const z1 = p.y * sinX + p.z * cosX

      // Rotation around Y axis
      const cosY = Math.cos(rotationYRef.current)
      const sinY = Math.sin(rotationYRef.current)
      const x2 = p.x * cosY + z1 * sinY
      const z2 = -p.x * sinY + z1 * cosY

      // Perspective projection
      const distance = 3.2
      const fov = distance / (distance + z2)

      return {
        screenX: center + x2 * scale * fov,
        screenY: center - y1 * scale * fov,
        z: z2,
        fov,
      }
    }

    // Main 60fps render loop
    const render = () => {
      if (autoRotateRef.current) {
        rotationYRef.current += 0.0035
      }

      ctx.clearRect(0, 0, size, size)

      const center = size / 2
      const baseRadius = center * 0.65

      // Atmospheric Radial Glow in dark space
      const ambientGlow = ctx.createRadialGradient(
        center,
        center,
        baseRadius * 0.3,
        center,
        center,
        baseRadius * 1.45
      )
      ambientGlow.addColorStop(0, 'rgba(66, 133, 244, 0.16)')
      ambientGlow.addColorStop(0.35, 'rgba(52, 168, 83, 0.08)')
      ambientGlow.addColorStop(0.65, 'rgba(251, 188, 5, 0.05)')
      ambientGlow.addColorStop(1, 'rgba(9, 9, 11, 0)')
      ctx.fillStyle = ambientGlow
      ctx.fillRect(0, 0, size, size)

      // 1. Draw 3D Orbit Rings
      const ringAngles = [
        { tiltX: 0.45, tiltY: 0.1, radius: baseRadius * 1.05, color: 'rgba(66, 133, 244, 0.22)' },
        { tiltX: -0.35, tiltY: 0.5, radius: baseRadius * 1.18, color: 'rgba(52, 168, 83, 0.22)' },
      ]

      ringAngles.forEach((ring) => {
        ctx.beginPath()
        const segments = 64
        for (let s = 0; s <= segments; s++) {
          const theta = (s / segments) * Math.PI * 2
          const rx = Math.cos(theta) * (ring.radius / baseRadius)
          const ry = Math.sin(theta) * (ring.radius / baseRadius) * Math.cos(ring.tiltX)
          const rz = Math.sin(theta) * (ring.radius / baseRadius) * Math.sin(ring.tiltX)

          const proj = project3D({ x: rx, y: ry, z: rz }, center, baseRadius)
          if (s === 0) {
            ctx.moveTo(proj.screenX, proj.screenY)
          } else {
            ctx.lineTo(proj.screenX, proj.screenY)
          }
        }
        ctx.strokeStyle = ring.color
        ctx.lineWidth = 1.2
        ctx.setLineDash([4, 6])
        ctx.stroke()
        ctx.setLineDash([])
      })

      // 2. Draw 3D Background Particles
      particles.forEach((pt) => {
        pt.x += (Math.random() - 0.5) * 0.001
        pt.y += (Math.random() - 0.5) * 0.001
        const p = project3D(pt, center, baseRadius)

        // Depth cue: particles behind center are dimmer
        const alpha = Math.max(0.15, Math.min(0.9, (p.z + 1.2) / 2.4))
        ctx.globalAlpha = alpha

        ctx.beginPath()
        ctx.arc(p.screenX, p.screenY, pt.size * p.fov, 0, Math.PI * 2)
        ctx.fillStyle = pt.color
        ctx.fill()

        if (p.z > 0.4) {
          ctx.shadowColor = pt.color
          ctx.shadowBlur = 6
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })
      ctx.globalAlpha = 1.0

      // 3. Central 3D Google Floating Shield / Emblem
      const cosY = Math.cos(rotationYRef.current)
      const shieldRadius = baseRadius * 0.58

      // Front Face 3D Coordinates
      const centerFront = project3D({ x: 0, y: 0, z: 0.12 }, center, baseRadius)

      // Outer Glow Halo for the Google Emblem
      const emblemGlow = ctx.createRadialGradient(
        centerFront.screenX,
        centerFront.screenY,
        shieldRadius * 0.2,
        centerFront.screenX,
        centerFront.screenY,
        shieldRadius * 1.25
      )
      emblemGlow.addColorStop(0, 'rgba(66, 133, 244, 0.28)')
      emblemGlow.addColorStop(0.35, 'rgba(234, 67, 53, 0.18)')
      emblemGlow.addColorStop(0.7, 'rgba(52, 168, 83, 0.14)')
      emblemGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = emblemGlow
      ctx.beginPath()
      ctx.arc(centerFront.screenX, centerFront.screenY, shieldRadius * 1.25, 0, Math.PI * 2)
      ctx.fill()

      // 3D Glass Medallion Base
      ctx.save()
      ctx.translate(centerFront.screenX, centerFront.screenY)
      // Slight 3D scale skew to reflect rotation angle
      ctx.scale(Math.max(0.35, Math.abs(cosY)), 1)

      // Dark Glass Base Disc
      const discGrad = ctx.createLinearGradient(
        -shieldRadius,
        -shieldRadius,
        shieldRadius,
        shieldRadius
      )
      discGrad.addColorStop(0, '#1E1E24')
      discGrad.addColorStop(0.5, '#121216')
      discGrad.addColorStop(1, '#09090B')
      ctx.fillStyle = discGrad
      ctx.beginPath()
      ctx.arc(0, 0, shieldRadius, 0, Math.PI * 2)
      ctx.fill()

      // Metallic Hairline Rim
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)'
      ctx.lineWidth = 2
      ctx.stroke()

      // Inner Accent Rim (Gold / Green AdSense Trust Ring)
      ctx.strokeStyle = '#34A853'
      ctx.lineWidth = 1.2
      ctx.shadowColor = '#34A853'
      ctx.shadowBlur = 8
      ctx.beginPath()
      ctx.arc(0, 0, shieldRadius * 0.92, 0, Math.PI * 2)
      ctx.stroke()
      ctx.shadowBlur = 0

      // 4. Render Authentic Google "G" Icon (Transparent Background from User's Asset)
      const iconSize = shieldRadius * 1.12

      if (isIconLoaded && googleIcon.complete && googleIcon.naturalWidth > 0) {
        // Drop shadow for the floating Google Icon
        ctx.shadowColor = 'rgba(0, 0, 0, 0.65)'
        ctx.shadowBlur = 14
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 4
        ctx.drawImage(googleIcon, -iconSize / 2, -iconSize / 2, iconSize, iconSize)
        ctx.shadowBlur = 0
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
      } else {
        // High-fidelity vector fallback while image loads
        const gSize = shieldRadius * 0.52
        const thickness = gSize * 0.32
        ctx.lineWidth = thickness
        ctx.lineCap = 'butt'

        // Red Segment: Top arc
        ctx.strokeStyle = '#EA4335'
        ctx.beginPath()
        ctx.arc(0, 0, gSize, -Math.PI * 0.75, -Math.PI * 0.05)
        ctx.stroke()

        // Yellow Segment: Left arc
        ctx.strokeStyle = '#FBBC05'
        ctx.beginPath()
        ctx.arc(0, 0, gSize, Math.PI * 0.75, -Math.PI * 0.75, true)
        ctx.stroke()

        // Green Segment: Bottom arc
        ctx.strokeStyle = '#34A853'
        ctx.beginPath()
        ctx.arc(0, 0, gSize, Math.PI * 0.15, Math.PI * 0.75)
        ctx.stroke()

        // Blue Segment: Right bar
        ctx.strokeStyle = '#4285F4'
        ctx.beginPath()
        ctx.arc(0, 0, gSize, -Math.PI * 0.05, Math.PI * 0.15)
        ctx.stroke()

        // Google "G" Horizontal Crossbar
        ctx.fillStyle = '#4285F4'
        ctx.fillRect(0, -thickness / 2, gSize + thickness / 2, thickness)
      }

      ctx.restore()

      // 5. Draw Orbiting Verification Satellites with Badges
      satellites.forEach((sat) => {
        sat.angle += sat.speed
        const rawX = Math.cos(sat.angle) * sat.radius
        const rawY = Math.sin(sat.angle) * sat.radius * Math.cos(sat.tilt)
        const rawZ = Math.sin(sat.angle) * sat.radius * Math.sin(sat.tilt)

        const p = project3D({ x: rawX, y: rawY, z: rawZ }, center, baseRadius)

        // Draw satellite glow node
        ctx.beginPath()
        ctx.arc(p.screenX, p.screenY, 5 * p.fov, 0, Math.PI * 2)
        ctx.fillStyle = sat.color
        ctx.shadowColor = sat.color
        ctx.shadowBlur = 12
        ctx.fill()
        ctx.shadowBlur = 0

        // White core dot
        ctx.beginPath()
        ctx.arc(p.screenX, p.screenY, 2.2 * p.fov, 0, Math.PI * 2)
        ctx.fillStyle = '#FFFFFF'
        ctx.fill()

        // Badge pill label for front-facing satellites
        if (p.z > -0.2) {
          ctx.font = '600 10px "Geist", -apple-system, sans-serif'
          const textWidth = ctx.measureText(sat.label).width
          const padX = 6
          const boxW = textWidth + padX * 2
          const boxH = 16

          // Mini dark badge
          ctx.fillStyle = 'rgba(18, 18, 22, 0.88)'
          ctx.strokeStyle = `${sat.color}80`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.roundRect(p.screenX + 8, p.screenY - boxH / 2, boxW, boxH, 4)
          ctx.fill()
          ctx.stroke()

          // Text
          ctx.fillStyle = '#FFFFFF'
          ctx.fillText(sat.label, p.screenX + 8 + padX, p.screenY + 3.5)
        }
      })

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
      {/* 1:1 Aspect-Ratio Canvas Container — Zero Extra Outside Texts */}
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
          title="Drag to rotate the 3D Google AdSense approval engine"
        />
      </div>
    </div>
  )
}
