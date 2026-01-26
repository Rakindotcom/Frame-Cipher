import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 border border-purple-500/50 hover:border-purple-400 transition-all duration-300 group overflow-hidden bg-[#0a0a0f]/80 backdrop-blur-sm"
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
          </div>
        </div>
      </div>
    </>
  )
}
