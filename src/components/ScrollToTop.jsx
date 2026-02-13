import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasModal, setHasModal] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const checkForModal = () => {
      // Check if any modal/overlay is present in the DOM
      const modal = document.querySelector('.fixed.inset-0.z-50')
      setHasModal(!!modal)
    }

    window.addEventListener('scroll', toggleVisibility)
    
    // Check for modals periodically
    const modalObserver = new MutationObserver(checkForModal)
    modalObserver.observe(document.body, { childList: true, subtree: true })
    
    checkForModal()

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      modalObserver.disconnect()
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && !hasModal && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center bg-purple-600/90 hover:bg-purple-500 border border-purple-400/50 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] group animate-fadeIn"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  )
}
