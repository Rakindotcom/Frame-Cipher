'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasModal, setHasModal] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Check if scrolled past 300px
      if (window.pageYOffset <= 300) {
        setIsVisible(false)
        return
      }

      // Check if footer is in viewport
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Hide button if footer is visible in viewport
        if (footerRect.top < windowHeight) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      } else {
        setIsVisible(true)
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
    toggleVisibility() // Initial check

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
          className="group fixed bottom-4 right-3.5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-[#121214]/90 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:border-white/40 hover:bg-[#18181B] sm:bottom-8 sm:right-8 sm:h-12 sm:w-12 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
          aria-label="Scroll to top"
        >
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-5 sm:w-5 text-white"
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
