'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RouteScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Let anchor destinations retain their scroll position. Resetting here
    // races Next.js navigation and used to hide the catalog below the fold.
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [pathname])

  return null
}
