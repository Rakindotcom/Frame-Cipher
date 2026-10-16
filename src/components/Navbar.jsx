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
      className="fixed left-0 right-0 top-0 z-50 border-b-2 border-frame-border bg-frame-bg/92 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-[95vw] flex-nowrap items-center justify-between px-4 py-3.5 md:px-0" aria-label="Primary navigation">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 xl:gap-3" aria-label="Frame Cipher home">
          <Image src="/logo.webp" alt="Frame Cipher" width={40} height={40} className="h-10 w-10 object-contain" priority />
          <div>
            <div className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-frame-fg whitespace-nowrap">FRAME CIPHER</div>
            <div className="hidden whitespace-nowrap text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent xl:block">
              Brand. Content. Tech. Growth.
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-nowrap items-center gap-0.5 lg:flex lg:shrink-0 xl:gap-1">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative shrink-0"
              onMouseEnter={() => handleNavEnter(item.name)}
              onMouseLeave={handleNavLeave}
            >
              <Link
                href={item.path}
                className={`block whitespace-nowrap px-2 py-2 text-xs font-black uppercase tracking-tight transition-colors xl:px-3 xl:text-sm xl:tracking-tighter ${
                  isActive(item.path) || activeDropdown === item.name
                    ? 'text-frame-accent'
                    : 'text-frame-muted-fg hover:text-frame-fg'
                }`}
              >
                {item.name}
              </Link>

              {/* SERVICES DROPDOWN */}
              {item.name === 'Services' && (
                <div
                  className={`absolute left-0 top-full w-96 translate-y-0 border-2 border-frame-border bg-frame-bg p-3 shadow-2xl backdrop-blur-xl transition-all duration-150 ${
                    activeDropdown === 'Services'
                      ? 'visible opacity-100 pointer-events-auto'
                      : 'invisible opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={handleDropdownContainerEnter}
                  onMouseLeave={handleNavLeave}
                >
                  <div className="mb-2 flex items-center justify-between gap-4 px-3">
                    <span className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent">
                      7 Service Areas
                    </span>
                    <Link
                      href="/services#all-services"
                      className="whitespace-nowrap text-[10px] font-black uppercase tracking-wider text-frame-muted-fg transition-colors hover:text-frame-fg hover:underline"
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
                        <div className="flex items-stretch">
                          <Link
                            href={service.path}
                            className={`flex min-w-0 flex-1 items-center justify-between px-3 py-2.5 text-sm font-bold uppercase tracking-tight transition-colors ${
                              activePillar === service.path
                                ? 'bg-frame-accent text-frame-accent-fg'
                                : 'text-frame-fg hover:bg-frame-accent hover:text-frame-accent-fg'
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
                                  ? 'bg-frame-accent text-frame-accent-fg'
                                  : 'text-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg'
                              }`}
                            >
                              ›
                            </button>
                          ) : (
                            <span className="flex w-8 shrink-0 items-center justify-center text-xs opacity-60">→</span>
                          )}
                        </div>

                        {/* Services Flyout Submenu with Invisible Hover Bridge */}
                        {service.subServices?.length > 0 && (
                          <div
                            className={`absolute left-[calc(100%+6px)] z-[70] flex w-88 -translate-x-1 flex-col overflow-y-auto overscroll-contain border-2 border-frame-border bg-frame-bg p-3 shadow-2xl transition-all duration-150 before:absolute before:-left-3 before:inset-y-0 before:w-3 before:content-[''] ${
                              activePillar === service.path
                                ? 'visible opacity-100 pointer-events-auto translate-x-0'
                                : 'invisible opacity-0 pointer-events-none'
                            }`}
                            onMouseEnter={handleSubmenuEnter}
                            onMouseLeave={handlePillarLeave}
                            style={activePillar === service.path ? desktopSubmenuStyle : undefined}
                          >
                            <div className="mb-2 px-3 text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent whitespace-nowrap">
                              {service.name} services
                            </div>
                            <div className="grid gap-1">
                              {service.subServices.map((subService) => (
                                <Link
                                  key={subService.path}
                                  href={subService.path}
                                  className="flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-tight text-frame-fg transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
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

              {/* STUDIO DROPDOWN */}
              {item.name === 'Studio' && (
                <div
                  className={`absolute left-0 top-full w-96 translate-y-0 border-2 border-frame-border bg-frame-bg p-3 shadow-2xl backdrop-blur-xl transition-all duration-150 ${
                    activeDropdown === 'Studio'
                      ? 'visible opacity-100 pointer-events-auto'
                      : 'invisible opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={handleDropdownContainerEnter}
                  onMouseLeave={handleNavLeave}
                >
                  <div className="mb-2 flex items-center justify-between gap-4 px-3">
                    <span className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent">
                      6 Studio Areas
                    </span>
                    <Link
                      href="/studio"
                      className="whitespace-nowrap text-[10px] font-black uppercase tracking-wider text-frame-muted-fg transition-colors hover:text-frame-fg hover:underline"
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
                        <div className="flex items-stretch">
                          <Link
                            href={cluster.path}
                            className={`flex min-w-0 flex-1 items-center justify-between px-3 py-2.5 text-sm font-bold uppercase tracking-tight transition-colors ${
                              activePillar === cluster.path
                                ? 'bg-frame-accent text-frame-accent-fg'
                                : 'text-frame-fg hover:bg-frame-accent hover:text-frame-accent-fg'
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
                                  ? 'bg-frame-accent text-frame-accent-fg'
                                  : 'text-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg'
                              }`}
                            >
                              ›
                            </button>
                          ) : (
                            <span className="flex w-8 shrink-0 items-center justify-center text-xs opacity-60">→</span>
                          )}
                        </div>

                        {/* Studio Flyout Submenu with Invisible Hover Bridge */}
                        {cluster.subServices?.length > 0 && (
                          <div
                            className={`absolute left-[calc(100%+6px)] z-[70] flex w-88 -translate-x-1 flex-col overflow-y-auto overscroll-contain border-2 border-frame-border bg-frame-bg p-3 shadow-2xl transition-all duration-150 before:absolute before:-left-3 before:inset-y-0 before:w-3 before:content-[''] ${
                              activePillar === cluster.path
                                ? 'visible opacity-100 pointer-events-auto translate-x-0'
                                : 'invisible opacity-0 pointer-events-none'
                            }`}
                            onMouseEnter={handleSubmenuEnter}
                            onMouseLeave={handlePillarLeave}
                            style={activePillar === cluster.path ? desktopSubmenuStyle : undefined}
                          >
                            <div className="mb-2 px-3 text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent whitespace-nowrap">
                              {cluster.name} services
                            </div>
                            <div className="grid gap-1">
                              {cluster.subServices.map((subService) => (
                                <Link
                                  key={subService.path}
                                  href={subService.path}
                                  className="flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-tight text-frame-fg transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
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
                  className={`absolute left-0 top-full max-h-[calc(100dvh-7rem)] w-88 translate-y-0 overflow-y-auto overscroll-contain border-2 border-frame-border bg-frame-bg p-3 shadow-2xl backdrop-blur-xl transition-all duration-150 ${
                    activeDropdown === 'Work'
                      ? 'visible opacity-100 pointer-events-auto'
                      : 'invisible opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={handleDropdownContainerEnter}
                  onMouseLeave={handleNavLeave}
                >
                  <div className="mb-2 flex items-center justify-between px-3">
                    <span className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent">Work categories</span>
                    <Link
                      href="/projects"
                      className="whitespace-nowrap text-[10px] font-black uppercase tracking-wider text-frame-muted-fg transition-colors hover:text-frame-fg hover:underline"
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
                          className="group/lane relative grid gap-0.5 border border-transparent px-3 py-2.5 transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
                        >
                          <div className="flex items-center justify-between">
                            <Link href={cat.path} className="after:absolute after:inset-0 after:content-['']">
                              <span className="whitespace-nowrap text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors group-hover/lane:text-frame-accent-fg">
                                {cat.name}
                              </span>
                            </Link>
                            <span
                              className="text-xs font-black uppercase tracking-widest text-frame-accent opacity-0 transition-opacity group-hover/lane:opacity-100 group-hover/lane:text-frame-accent-fg"
                              aria-hidden="true"
                            >
                              &rarr;
                            </span>
                          </div>
                          <span className="text-xs font-medium leading-snug text-frame-muted-fg transition-colors group-hover/lane:text-frame-accent-fg/80">
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
            className="shrink-0 whitespace-nowrap border-2 border-frame-accent bg-frame-accent px-3 py-1.5 text-xs font-black uppercase tracking-tight text-frame-accent-fg transition-transform hover:scale-105 xl:px-4 xl:py-2 xl:text-sm xl:tracking-tighter"
          >
            Talk on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen((value) => !value)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border-2 border-frame-border bg-frame-bg lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className={`h-0.5 w-5 bg-frame-fg transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-frame-fg transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-frame-fg transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div id="mobile-navigation" className={`max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="border-t-2 border-frame-border bg-frame-bg px-4 py-5">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <div key={item.path} className="grid gap-2">
                <Link
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-2 px-4 py-3 text-sm font-black uppercase tracking-tighter ${
                    isActive(item.path)
                      ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                      : 'border-frame-border text-frame-muted-fg'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Mobile Services Accordion */}
                {item.name === 'Services' && (
                  <div className="grid gap-1 pl-4">
                    {pillarNavServices.map((pillar) => {
                      const isPillarOpen = openMobilePillar === pillar.path

                      return (
                        <div key={pillar.path} className="border-2 border-frame-border bg-frame-muted">
                          <div className="flex items-stretch">
                            <Link
                              href={pillar.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex min-w-0 flex-1 items-center justify-between px-4 py-3 text-xs font-black uppercase tracking-tighter text-frame-fg hover:bg-frame-accent hover:text-frame-accent-fg"
                            >
                              <span className="truncate">{pillar.name}</span>
                              <span className="ml-3 font-mono text-[10px] text-frame-accent">&rarr;</span>
                            </Link>
                            {pillar.subServices?.length > 0 && (
                              <button
                                type="button"
                                aria-label={`Show ${pillar.name} services`}
                                aria-expanded={isPillarOpen}
                                onClick={() => setOpenMobilePillar(isPillarOpen ? null : pillar.path)}
                                className="w-12 border-l-2 border-frame-border text-lg font-medium text-frame-accent transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
                              >
                                {isPillarOpen ? '−' : '+'}
                              </button>
                            )}
                          </div>
                          {isPillarOpen && (
                            <div className="grid max-h-[45dvh] gap-1 overflow-y-auto overscroll-contain border-t-2 border-frame-border p-2">
                              {pillar.subServices.map((subService) => (
                                <Link
                                  key={subService.path}
                                  href={subService.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center justify-between px-3 py-2.5 text-[11px] font-bold uppercase tracking-tight text-frame-muted-fg transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
                                >
                                  <span>{subService.name}</span>
                                  <span className="font-mono text-[10px] after:content-['→']" />
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
                      className="px-4 py-2 text-xs font-black uppercase tracking-wider text-frame-accent"
                    >
                      View all 74 services &rarr;
                    </Link>
                  </div>
                )}

                {/* Mobile Studio Accordion */}
                {item.name === 'Studio' && (
                  <div className="grid gap-1 pl-4">
                    {studioNavClusters.map((cluster) => {
                      const isClusterOpen = openMobilePillar === cluster.path

                      return (
                        <div key={cluster.path} className="border-2 border-frame-border bg-frame-muted">
                          <div className="flex items-stretch">
                            <Link
                              href={cluster.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex min-w-0 flex-1 items-center justify-between px-4 py-3 text-xs font-black uppercase tracking-tighter text-frame-fg hover:bg-frame-accent hover:text-frame-accent-fg"
                            >
                              <span className="truncate">{cluster.name}</span>
                              <span className="ml-3 font-mono text-[10px] text-frame-accent">&rarr;</span>
                            </Link>
                            {cluster.subServices?.length > 0 && (
                              <button
                                type="button"
                                aria-label={`Show ${cluster.name} services`}
                                aria-expanded={isClusterOpen}
                                onClick={() => setOpenMobilePillar(isClusterOpen ? null : cluster.path)}
                                className="w-12 border-l-2 border-frame-border text-lg font-medium text-frame-accent transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
                              >
                                {isClusterOpen ? '−' : '+'}
                              </button>
                            )}
                          </div>
                          {isClusterOpen && (
                            <div className="grid max-h-[45dvh] gap-1 overflow-y-auto overscroll-contain border-t-2 border-frame-border p-2">
                              {cluster.subServices.map((subService) => (
                                <Link
                                  key={subService.path}
                                  href={subService.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center justify-between px-3 py-2.5 text-[11px] font-bold uppercase tracking-tight text-frame-muted-fg transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
                                >
                                  <span>{subService.name}</span>
                                  <span className="font-mono text-[10px] after:content-['→']" />
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
                      className="px-4 py-2 text-xs font-black uppercase tracking-wider text-frame-accent"
                    >
                      Studio Overview &rarr;
                    </Link>
                  </div>
                )}

                {/* Mobile Work Accordion */}
                {item.name === 'Work' && (
                  <div className="grid gap-1 pl-4">
                    {workCategories
                      .filter((cat) => cat.pill !== 'All')
                      .map((cat) => (
                        <Link
                          key={cat.path}
                          href={cat.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center justify-between border-2 border-frame-border bg-frame-muted px-4 py-3 text-xs font-black uppercase tracking-tighter text-frame-fg hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
                        >
                          <span>{cat.name}</span>
                          <span className="text-[10px] text-frame-accent font-mono after:content-['→']" />
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={contact.whatsapp}
              onClick={() => setIsMenuOpen(false)}
              className="block border-2 border-frame-accent bg-frame-accent px-4 py-3 text-center text-sm font-black uppercase tracking-tighter text-frame-accent-fg"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
