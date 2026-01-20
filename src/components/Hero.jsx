import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const location = useLocation()

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize particles
    const particleCount = 80
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5
    }))

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction
        const dx = mousePos.x - particle.x
        const dy = mousePos.y - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 150) {
          const force = (150 - dist) / 150
          particle.vx -= (dx / dist) * force * 0.1
          particle.vy -= (dy / dist) * force * 0.1
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.99
        particle.vy *= 0.99

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${0.3 + Math.random() * 0.3})`
        ctx.fill()

        // Draw connections
        particlesRef.current.slice(i + 1).forEach(other => {
          const dx = other.x - particle.x
          const dy = other.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mousePos])

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" onMouseMove={handleMouseMove}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f] z-1" />

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-8 right-8 z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 border border-purple-500/50 hover:border-purple-400 transition-all duration-300 group overflow-hidden"
        aria-label="Toggle menu"
      >
        <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`w-6 h-0.5 bg-purple-400 transition-all duration-300 relative z-10 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-purple-400 transition-all duration-300 relative z-10 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-purple-400 transition-all duration-300 relative z-10 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-20 right-8 w-80 max-w-[calc(100vw-4rem)] bg-[#0a0a0f] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500 ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-purple-500/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-400 tracking-wider">NAVIGATION ACTIVE</span>
            </div>

            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border transition-all duration-300 group relative overflow-hidden ${
                      location.pathname === item.path
                        ? 'border-purple-400 bg-purple-600/20 text-purple-300'
                        : 'border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-950/30 text-gray-300'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm tracking-wide">{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          location.pathname === item.path ? 'text-purple-400' : 'text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <div className="text-xs font-mono text-gray-500 mb-3">CONNECT</div>
              <div className="flex gap-3">
                {['Instagram', 'Vimeo', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 border border-purple-500/30 hover:border-purple-400 flex items-center justify-center transition-all duration-300 hover:bg-purple-950/30 group"
                  >
                    <span className="text-xs text-purple-400 font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-4">
          <img src="/logo.png" alt="Frame Cipher" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          <div className="h-12 w-px bg-linear-to-b from-transparent via-purple-500 to-transparent" />
          <div className="text-left">
            <div className="text-sm font-mono text-purple-400 tracking-[0.3em] animate-pulse">
              SYSTEM ONLINE
            </div>
          </div>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            FRAME CIPHER
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide">
          Cinematic Media Production
        </p>
        
        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Elevating brands through professional video production, photography, and strategic creative services.
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
          <button className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-500 transition-all duration-300 font-semibold tracking-wide overflow-hidden">
            <span className="relative z-10">VIEW PROJECTS</span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 font-semibold tracking-wide">
            <span className="relative z-10">INITIATE CONTACT</span>
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="border border-purple-500/20 p-4 bg-purple-950/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-1">200+</div>
            <div className="text-sm text-gray-400 font-mono">PROJECTS DELIVERED</div>
          </div>
          <div className="border border-blue-500/20 p-4 bg-blue-950/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
            <div className="text-sm text-gray-400 font-mono">BRANDS SERVED</div>
          </div>
          <div className="border border-purple-500/20 p-4 bg-purple-950/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-1">10+</div>
            <div className="text-sm text-gray-400 font-mono">YEARS EXPERIENCE</div>
          </div>
        </div>
      </div>
    </section>
  )
}
