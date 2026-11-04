'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contact, navItems } from '../data/agency'
import { studioClusters, getServicesInCluster } from '../data/studioServices'

const studioNavClusters = studioClusters.map((cluster) => ({
  name: cluster.name,
  path: `/studio/${cluster.parentSlug}`,
  subServices: getServicesInCluster(cluster.id).map((service) => ({
    name: service.shortTitle || service.name,
    path: `/studio/${service.slug}`,
  })),
}))

const workCategories = [
  {
    name: 'All Work',
    path: '/projects',
    pill: 'All',
    description: 'Explore full portfolio across all creative formats',
  },
  {
    name: 'Website',
    path: '/projects?view=website',
    pill: 'Website',
    description: 'Live platforms, web applications, and digital systems',
  },
  {
    name: 'Long Video',
    path: '/projects?view=long-video',
    pill: 'Long Video',
    description: 'Storytelling productions, documentaries, and YouTube films',
  },
  {
    name: 'Short Video',
    path: '/projects?view=short-video',
    pill: 'Short Video',
    description: 'Vertical 9:16 reels, shorts, and viral social edits',
  },
  {
    name: 'SEO',
    path: '/projects?view=seo',
    pill: 'SEO',
    description: 'Search growth, rankings, and organic authority engines',
  },
  {
    name: 'Paid ads',
    path: '/projects?view=paid-ads',
    pill: 'Paid ads',
    description: 'Meta Ads performance, creatives, and conversion scaling',
  },
  {
    name: 'Branding',
    path: '/projects?view=branding',
    pill: 'Branding',
    description: 'Visual identity systems, art direction, and design archive',
  },
  {
    name: 'Content Writing',
    path: '/projects?view=writing',
    pill: 'Writing',
    description: 'Blogs, website copy, product copy, ads, and video scripts',
  },
]

export default function Navbar({ pillarNavServices = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activePillar, setActivePillar] = useState(null)
  const [desktopSubmenuStyle, setDesktopSubmenuStyle] = useState(null)
  const [openMobilePillar, setOpenMobilePillar] = useState(null)

  const dropdownCloseTimer = useRef(null)
  const pillarCloseTimer = useRef(null)
  const headerRef = useRef(null)
  const pathname = usePathname()

  const isActive = (path) => pathname === path || (path !== '/' && pathname.startsWith(path))

  // Clean all dropdown and flyout states whenever route changes
  useEffect(() => {
    setActiveDropdown(null)
    setActivePillar(null)
    setDesktopSubmenuStyle(null)
    setIsMenuOpen(false)
  }, [pathname])

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setActivePillar(null)
        setDesktopSubmenuStyle(null)
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null)
        setActivePillar(null)
        setDesktopSubmenuStyle(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Clean up any remaining timers on unmount
  useEffect(() => {
    return () => {
      if (dropdownCloseTimer.current) window.clearTimeout(dropdownCloseTimer.current)
      if (pillarCloseTimer.current) window.clearTimeout(pillarCloseTimer.current)
    }
  }, [])

  // Main dropdown hover handlers with smooth debounce (no sticking, no flickering)
  const handleNavEnter = (itemName) => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current)
      dropdownCloseTimer.current = null
    }
    if (itemName === 'Services' || itemName === 'Studio' || itemName === 'Work') {
      setActiveDropdown(itemName)
    } else {
      // Hovering any top-level item with no dropdown immediately closes previous dropdown
      setActiveDropdown(null)
      setActivePillar(null)
      setDesktopSubmenuStyle(null)
    }
  }

  const handleNavLeave = () => {
    if (dropdownCloseTimer.current) window.clearTimeout(dropdownCloseTimer.current)
    dropdownCloseTimer.current = window.setTimeout(() => {
      setActiveDropdown(null)
      setActivePillar(null)
      setDesktopSubmenuStyle(null)
    }, 220)
  }

  const handleDropdownContainerEnter = () => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current)
      dropdownCloseTimer.current = null
    }
  }

  // Pillar/cluster hover handlers with hover-bridge and safe debounce
  // Only applies max-height and scrolling to the SIDE flyout submenu if it extends past the bottom of the viewport
  const handlePillarEnter = (servicePath, triggerEl) => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current)
      dropdownCloseTimer.current = null
    }
    if (pillarCloseTimer.current) {
      window.clearTimeout(pillarCloseTimer.current)
      pillarCloseTimer.current = null
    }

    setActivePillar(servicePath)
    if (triggerEl) {
      const rect = triggerEl.getBoundingClientRect()
      setDesktopSubmenuStyle({
        top: 0,
        maxHeight: `calc(100dvh - ${Math.max(16, rect.top + 16)}px)`,
      })
    }
  }

  const handlePillarLeave = () => {
    if (pillarCloseTimer.current) window.clearTimeout(pillarCloseTimer.current)
    pillarCloseTimer.current = window.setTimeout(() => {
      setActivePillar(null)
      setDesktopSubmenuStyle(null)
    }, 250)
  }

  const handleSubmenuEnter = () => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current)
      dropdownCloseTimer.current = null
    }
    if (pillarCloseTimer.current) {
      window.clearTimeout(pillarCloseTimer.current)
      pillarCloseTimer.current = null
    }
  }

  const handleHeaderLeave = () => {
    if (dropdownCloseTimer.current) window.clearTimeout(dropdownCloseTimer.current)
    if (pillarCloseTimer.current) window.clearTimeout(pillarCloseTimer.current)
    dropdownCloseTimer.current = window.setTimeout(() => {
      setActiveDropdown(null)
      setActivePillar(null)
      setDesktopSubmenuStyle(null)
    }, 180)
  }

  return (
    <header
      ref={headerRef}
      onMouseLeave={handleHeaderLeave}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#09090B]/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-20 max-w-7xl flex-nowrap items-center justify-between px-4 sm:px-6 md:px-8" aria-label="Primary navigation">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5 xl:gap-3" aria-label="Frame Cipher home">
          <div className="relative flex h-9 w-9 xl:h-10 xl:w-10 items-center justify-center overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.04] p-1 transition-colors duration-200 group-hover:border-white/[0.16]">
            <Image src="/logo.webp" alt="Frame Cipher" width={40} height={40} className="h-full w-full object-contain" priority />
          </div>
          <div>
            <div className="font-heading text-xs sm:text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors duration-200 group-hover:text-frame-accent-light whitespace-nowrap">
              FRAME CIPHER
            </div>
            <div className="hidden whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.22em] text-frame-accent 2xl:block">
              Brand <span className="text-zinc-600">•</span> Content <span className="text-zinc-600">•</span> Tech <span className="text-zinc-600">•</span> Growth
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-nowrap items-center gap-0.5 lg:flex lg:shrink-0 xl:gap-1 2xl:gap-1.5">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative shrink-0"
              onMouseEnter={() => handleNavEnter(item.name)}
              onMouseLeave={handleNavLeave}
            >
              <Link
                href={item.path}
                className={`block whitespace-nowrap rounded-full px-3 py-2 text-sm xl:text-[15px] font-normal transition-colors duration-200 ${
                  isActive(item.path) || activeDropdown === item.name
                    ? 'bg-white/[0.06] text-white'
                    : 'text-zinc-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {item.name}
              </Link>

              {/* SERVICES DROPDOWN (Clean: No scrollbars on main pillar list) */}
              {item.name === 'Services' && (
                <div
                  className={`absolute left-0 top-full w-96 translate-y-0 rounded-xl border border-white/[0.08] bg-[#121214]/98 p-3 shadow-2xl backdrop-blur-xl transition-all duration-150 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent ${
                    activeDropdown === 'Services'
                      ? 'visible opacity-100 pointer-events-auto'
                      : 'invisible opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={handleDropdownContainerEnter}
                  onMouseLeave={handleNavLeave}
                >
                  <div className="mb-2 flex items-center justify-between gap-4 border-b border-white/10 px-3 pb-2">
                    <span className="flex items-center gap-1.5 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.1em] text-frame-muted-fg">
                      <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                      7 Service Areas
                    </span>
                    <Link
                      href="/services#all-services"
                      className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400 transition-colors hover:text-frame-accent-light hover:underline"
                    >
                      All 74 Services &rarr;
                    </Link>
                  </div>
                  <div className="grid gap-1">
                    {pillarNavServices.map((service) => (
                      <div
                        key={service.path}
                        className="relative"
                        onMouseEnter={(event) => service.subServices?.length && handlePillarEnter(service.path, event.currentTarget)}
                        onMouseLeave={handlePillarLeave}
                      >
                        <div className="flex items-stretch overflow-hidden rounded-xl transition-colors">
                          <Link
                            href={service.path}
                            className={`flex min-w-0 flex-1 items-center justify-between px-3 py-2.5 text-sm transition-colors ${
                              activePillar === service.path
                                ? 'bg-[#FAFAFA] text-[#09090B]'
                                : 'text-zinc-200 hover:bg-white/[0.08] hover:text-white'
                            }`}
                          >
                            <span className="whitespace-nowrap">{service.name}</span>
                          </Link>
                          {service.subServices?.length > 0 ? (
                            <button
                              type="button"
                              aria-label={`Show ${service.name} services`}
                              aria-expanded={activePillar === service.path}
                              onClick={(event) => {
                                event.preventDefault()
                                event.stopPropagation()
                                if (activePillar === service.path) {
                                  setActivePillar(null)
                                  setDesktopSubmenuStyle(null)
                                } else {
                                  handlePillarEnter(service.path, event.currentTarget.closest('.relative'))
                                }
                              }}
                              className={`w-8 shrink-0 text-sm transition-colors ${
                                activePillar === service.path
                                  ? 'bg-[#FAFAFA] text-[#09090B]'
                                  : 'text-purple-400 hover:bg-white/[0.08] hover:text-white'
                              }`}
                            >
                              ›
                            </button>
                          ) : (
                            <span className="flex w-8 shrink-0 items-center justify-center text-xs opacity-60">→</span>
                          )}
                        </div>

                        {/* Services Flyout Submenu with Invisible Hover Bridge - Only this scrolls if content exceeds viewport */}
                        {service.subServices?.length > 0 && (
                          <div
                            className={`absolute left-[calc(100%+6px)] z-[70] flex w-88 -translate-x-1 flex-col overflow-y-auto overscroll-contain rounded-xl border border-white/[0.08] bg-[#121214]/98 p-3 shadow-2xl backdrop-blur-xl transition-all duration-150 before:absolute before:-left-3 before:inset-y-0 before:w-3 before:content-[''] ${
                              activePillar === service.path
                                ? 'visible opacity-100 pointer-events-auto translate-x-0'
                                : 'invisible opacity-0 pointer-events-none'
                            }`}
                            onMouseEnter={handleSubmenuEnter}
                            onMouseLeave={handlePillarLeave}
                            style={activePillar === service.path ? desktopSubmenuStyle : undefined}
                          >
                            <div className="mb-2 border-b border-white/10 px-3 pb-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-frame-accent whitespace-nowrap">
                              {service.name} services
                            </div>
                            <div className="grid gap-1">
                              {service.subServices.map((subService) => (
                                <Link
                                  key={subService.path}
                                  href={subService.path}
                                  className="flex items-center justify-between rounded-lg px-3 py-1.5 text-[13px] text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                                >
                                  <span className="whitespace-nowrap">{subService.name}</span>
                                  <span className="text-xs opacity-60 after:content-['→'] shrink-0 ml-2" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STUDIO DROPDOWN (Clean: No scrollbars on main pillar list) */}
              {item.name === 'Studio' && (
                <div
                  className={`absolute left-0 top-full w-96 translate-y-0 rounded-xl border border-white/[0.08] bg-[#121214]/98 p-3 shadow-2xl backdrop-blur-xl transition-all duration-150 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent ${
                    activeDropdown === 'Studio'
                      ? 'visible opacity-100 pointer-events-auto'
                      : 'invisible opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={handleDropdownContainerEnter}
                  onMouseLeave={handleNavLeave}
                >
                  <div className="mb-2 flex items-center justify-between gap-4 border-b border-white/10 px-3 pb-2">
                    <span className="flex items-center gap-1.5 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.1em] text-frame-muted-fg">
                      <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                      6 Studio Areas
                    </span>
                    <Link
                      href="/studio"
                      className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400 transition-colors hover:text-frame-accent-light hover:underline"
                    >
                      Studio Overview &rarr;
                    </Link>
                  </div>
                  <div className="grid gap-1">
                    {studioNavClusters.map((cluster) => (
                      <div
                        key={cluster.path}
                        className="relative"
                        onMouseEnter={(event) => cluster.subServices?.length && handlePillarEnter(cluster.path, event.currentTarget)}
                        onMouseLeave={handlePillarLeave}
                      >
                        <div className="flex items-stretch overflow-hidden rounded-lg transition-colors">
                          <Link
                            href={cluster.path}
                            className={`flex min-w-0 flex-1 items-center justify-between px-3 py-2 text-sm transition-colors ${
                              activePillar === cluster.path
                                ? 'bg-white text-[#09090B] font-medium'
                                : 'text-zinc-200 hover:bg-white/[0.08] hover:text-white'
                            }`}
                          >
                            <span className="whitespace-nowrap">{cluster.name}</span>
                          </Link>
                          {cluster.subServices?.length > 0 ? (
                            <button
                              type="button"
                              aria-label={`Show ${cluster.name} services`}
                              aria-expanded={activePillar === cluster.path}
                              onClick={(event) => {
                                event.preventDefault()
                                event.stopPropagation()
                                if (activePillar === cluster.path) {
                                  setActivePillar(null)
                                  setDesktopSubmenuStyle(null)
                                } else {
                                  handlePillarEnter(cluster.path, event.currentTarget.closest('.relative'))
                                }
                              }}
                              className={`w-8 shrink-0 text-sm transition-colors ${
                                activePillar === cluster.path
                                  ? 'bg-white text-[#09090B]'
                                  : 'text-frame-accent hover:bg-white/[0.08] hover:text-white'
                              }`}
                            >
                              ›
                            </button>
                          ) : (
                            <span className="flex w-8 shrink-0 items-center justify-center text-xs opacity-60">→</span>
                          )}
                        </div>

                        {/* Studio Flyout Submenu with Invisible Hover Bridge - Only this scrolls if content exceeds viewport */}
                        {cluster.subServices?.length > 0 && (
                          <div
                            className={`absolute left-[calc(100%+6px)] z-[70] flex w-88 -translate-x-1 flex-col overflow-y-auto overscroll-contain rounded-xl border border-white/[0.08] bg-[#121214]/98 p-3 shadow-2xl backdrop-blur-xl transition-all duration-150 before:absolute before:-left-3 before:inset-y-0 before:w-3 before:content-[''] ${
                              activePillar === cluster.path
                                ? 'visible opacity-100 pointer-events-auto translate-x-0'
                                : 'invisible opacity-0 pointer-events-none'
                            }`}
                            onMouseEnter={handleSubmenuEnter}
                            onMouseLeave={handlePillarLeave}
                            style={activePillar === cluster.path ? desktopSubmenuStyle : undefined}
                          >
                            <div className="mb-2 border-b border-white/10 px-3 pb-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-frame-accent whitespace-nowrap">
                              {cluster.name} services
                            </div>
                            <div className="grid gap-1">
                              {cluster.subServices.map((subService) => (
                                <Link
                                  key={subService.path}
                                  href={subService.path}
                                  className="flex items-center justify-between rounded-lg px-3 py-1.5 text-[13px] text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                                >
                                  <span className="whitespace-nowrap">{subService.name}</span>
                                  <span className="text-xs opacity-60 after:content-['→'] shrink-0 ml-2" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WORK DROPDOWN */}
              {item.name === 'Work' && (
                <div
                  className={`absolute left-0 top-full max-h-[calc(100dvh-7rem)] w-88 translate-y-0 overflow-y-auto overscroll-contain rounded-xl border border-white/[0.08] bg-[#121214]/98 p-3 shadow-2xl backdrop-blur-xl transition-all duration-150 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent ${
                    activeDropdown === 'Work'
                      ? 'visible opacity-100 pointer-events-auto'
                      : 'invisible opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={handleDropdownContainerEnter}
                  onMouseLeave={handleNavLeave}
                >
                  <div className="mb-2 flex items-center justify-between border-b border-white/10 px-3 pb-2">
                    <span className="flex items-center gap-1.5 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.1em] text-frame-muted-fg">
                      <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                      Work categories
                    </span>
                    <Link
                      href="/projects"
                      className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400 transition-colors hover:text-frame-accent-light hover:underline"
                    >
                      View all &rarr;
                    </Link>
                  </div>
                  <div className="grid gap-1">
                    {workCategories
                      .filter((cat) => cat.pill !== 'All')
                      .map((cat) => (
                        <div
                          key={cat.path}
                          className="group/lane relative grid gap-0.5 rounded-lg border border-transparent px-3 py-2 transition-all duration-150 hover:border-white/[0.1] hover:bg-white/[0.06]"
                        >
                          <div className="flex items-center justify-between">
                            <Link href={cat.path} className="after:absolute after:inset-0 after:content-['']">
                              <span className="whitespace-nowrap text-sm text-white transition-colors group-hover/lane:text-frame-accent-light">
                                {cat.name}
                              </span>
                            </Link>
                            <span
                              className="text-xs font-bold uppercase tracking-widest text-frame-accent opacity-0 transition-opacity group-hover/lane:opacity-100"
                              aria-hidden="true"
                            >
                              &rarr;
                            </span>
                          </div>
                          <span className="text-[11px] font-medium leading-snug text-zinc-400 transition-colors group-hover/lane:text-zinc-200">
                            {cat.description}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <a
            href={contact.whatsapp}
            className="group relative inline-flex min-h-[38px] h-[38px] items-center justify-center rounded-full bg-[#FAFAFA] px-4 text-[13px] font-medium leading-none text-[#09090B] transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <span>Talk on WhatsApp</span>
            <span className="ml-1.5 text-xs transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen((value) => !value)}
          className="flex h-11 w-11 min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] transition-colors hover:border-white/[0.14] hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent touch-manipulation lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className={`h-0.5 w-5 bg-white transition-transform duration-200 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-white transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-white transition-transform duration-200 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-white/[0.08] bg-[#09090B]/98 backdrop-blur-xl lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <div key={item.path} className="grid gap-1.5">
                <Link
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg border px-3.5 py-2.5 text-sm transition-colors ${
                    isActive(item.path)
                      ? 'border-white/[0.14] bg-white/[0.08] text-white font-medium'
                      : 'border-white/[0.08] bg-[#121214] text-zinc-300 hover:border-white/[0.14] hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Mobile Services Accordion */}
                {item.name === 'Services' && (
                  <div className="grid gap-1.5 pl-3">
                    {pillarNavServices.map((pillar) => {
                      const isPillarOpen = openMobilePillar === pillar.path

                      return (
                        <div key={pillar.path} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                          <div className="flex items-stretch">
                            <Link
                              href={pillar.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex min-w-0 flex-1 items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-tight text-zinc-200 transition-colors hover:text-purple-300"
                            >
                              <span className="truncate">{pillar.name}</span>
                              <span className="ml-2 font-mono text-xs text-purple-400">&rarr;</span>
                            </Link>
                            {pillar.subServices?.length > 0 && (
                              <button
                                type="button"
                                aria-label={`Show ${pillar.name} services`}
                                aria-expanded={isPillarOpen}
                                onClick={() => setOpenMobilePillar(isPillarOpen ? null : pillar.path)}
                                className="w-10 border-l border-white/10 text-base font-semibold text-purple-400 transition-colors hover:bg-white/[0.05]"
                              >
                                {isPillarOpen ? '−' : '+'}
                              </button>
                            )}
                          </div>
                          {isPillarOpen && (
                            <div className="grid max-h-[45dvh] gap-1 overflow-y-auto overscroll-contain border-t border-white/10 bg-black/40 p-2">
                              {pillar.subServices.map((subService) => (
                                <Link
                                  key={subService.path}
                                  href={subService.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-tight text-zinc-400 transition-colors hover:bg-purple-600 hover:text-white"
                                >
                                  <span>{subService.name}</span>
                                  <span className="text-[10px] opacity-70 after:content-['→']" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                    <Link
                      href="/services#all-services"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 transition-colors hover:text-purple-300"
                    >
                      View all 74 services &rarr;
                    </Link>
                  </div>
                )}

                {/* Mobile Studio Accordion */}
                {item.name === 'Studio' && (
                  <div className="grid gap-1.5 pl-3">
                    {studioNavClusters.map((cluster) => {
                      const isClusterOpen = openMobilePillar === cluster.path

                      return (
                        <div key={cluster.path} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                          <div className="flex items-stretch">
                            <Link
                              href={cluster.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex min-w-0 flex-1 items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-tight text-zinc-200 transition-colors hover:text-purple-300"
                            >
                              <span className="truncate">{cluster.name}</span>
                              <span className="ml-2 font-mono text-xs text-purple-400">&rarr;</span>
                            </Link>
                            {cluster.subServices?.length > 0 && (
                              <button
                                type="button"
                                aria-label={`Show ${cluster.name} services`}
                                aria-expanded={isClusterOpen}
                                onClick={() => setOpenMobilePillar(isClusterOpen ? null : cluster.path)}
                                className="w-10 border-l border-white/10 text-base font-semibold text-purple-400 transition-colors hover:bg-white/[0.05]"
                              >
                                {isClusterOpen ? '−' : '+'}
                              </button>
                            )}
                          </div>
                          {isClusterOpen && (
                            <div className="grid max-h-[45dvh] gap-1 overflow-y-auto overscroll-contain border-t border-white/10 bg-black/40 p-2">
                              {cluster.subServices.map((subService) => (
                                <Link
                                  key={subService.path}
                                  href={subService.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-tight text-zinc-400 transition-colors hover:bg-purple-600 hover:text-white"
                                >
                                  <span>{subService.name}</span>
                                  <span className="text-[10px] opacity-70 after:content-['→']" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                    <Link
                      href="/studio"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 transition-colors hover:text-purple-300"
                    >
                      Studio Overview &rarr;
                    </Link>
                  </div>
                )}

                {/* Mobile Work Accordion */}
                {item.name === 'Work' && (
                  <div className="grid gap-1 pl-3">
                    {workCategories
                      .filter((cat) => cat.pill !== 'All')
                      .map((cat) => (
                        <Link
                          key={cat.path}
                          href={cat.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs font-bold uppercase tracking-tight text-zinc-300 transition-all hover:border-purple-500/40 hover:bg-purple-600/20 hover:text-white"
                        >
                          <span>{cat.name}</span>
                          <span className="font-mono text-xs text-purple-400 after:content-['→']" />
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={contact.whatsapp}
              onClick={() => setIsMenuOpen(false)}
              className="group mt-3 sw-btn sw-btn-primary min-h-[52px] h-[52px] w-full text-center text-[15px] font-medium leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent touch-manipulation"
            >
              <span>Talk on WhatsApp</span>
              <span aria-hidden="true" className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0 ml-1.5">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
