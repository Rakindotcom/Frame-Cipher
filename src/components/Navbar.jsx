import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/public/logo.png" 
              alt="Frame Cipher" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">
              Portfolio
            </a>
            <a href="#contact" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium">
              Start Project
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar