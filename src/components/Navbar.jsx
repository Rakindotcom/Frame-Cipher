'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contact, navItems } from '../data/agency'

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
]

export default function Navbar({ pillarNavServices = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path || (path !== '/' && pathname.startsWith(path))

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-frame-border bg-frame-bg/92 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[95vw] items-center justify-between px-4 py-4 md:px-0" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Frame Cipher home">
          <Image src="/logo.webp" alt="Frame Cipher" width={40} height={40} className="h-10 w-10 object-contain" priority />
          <div>
            <div className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-frame-fg">FRAME CIPHER</div>
            <div className="hidden text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent sm:block">
              Brand. Content. Tech. Growth.
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.path} className="group relative">
              <Link
                href={item.path}
                className={`px-3 py-2 text-sm font-black uppercase tracking-tighter transition-colors ${
                  isActive(item.path) ? 'text-frame-accent' : 'text-frame-muted-fg hover:text-frame-fg'
                }`}
              >
                {item.name}
              </Link>
              {item.name === 'Services' && (
                <div className="invisible absolute left-0 top-full w-80 translate-y-3 border-2 border-frame-border bg-frame-bg p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100">
                  <div className="mb-2 flex items-center justify-between gap-4 px-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent">
                      7 Core Pillars
                    </span>
                    <Link
                      href="/services#all-services"
                      className="text-[10px] font-black uppercase tracking-wider text-frame-muted-fg transition-colors hover:text-frame-fg hover:underline"
                    >
                      All 74 Services &rarr;
                    </Link>
                  </div>
                  <div className="grid gap-1">
                    {pillarNavServices.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="flex items-center justify-between px-3 py-2.5 text-sm font-bold uppercase tracking-tight text-frame-fg transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
                      >
                        <span>{service.name}</span>
                        <span className="text-xs opacity-60">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {item.name === 'Work' && (
                <div className="invisible absolute left-0 top-full w-88 translate-y-3 border-2 border-frame-border bg-frame-bg p-3 opacity-0 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 shadow-2xl">
                  <div className="mb-2 flex items-center justify-between px-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent">Work categories</span>
                    <Link
                      href="/projects"
                      className="text-[10px] font-black uppercase tracking-wider text-frame-muted-fg transition-colors hover:text-frame-fg hover:underline"
                    >
                      View all &rarr;
                    </Link>
                  </div>
                  <div className="grid gap-1">
                    {workCategories
                      .filter((cat) => cat.pill !== 'All')
                      .map((cat) => (
                        <Link
                          key={cat.path}
                          href={cat.path}
                          className="group/lane grid gap-0.5 border border-transparent px-3 py-2.5 transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors group-hover/lane:text-frame-accent-fg">
                              {cat.name}
                            </span>
                            <span className="text-xs font-black uppercase tracking-widest text-frame-accent opacity-0 transition-opacity group-hover/lane:opacity-100 group-hover/lane:text-frame-accent-fg">
                              &rarr;
                            </span>
                          </div>
                          <span className="text-xs font-medium leading-snug text-frame-muted-fg transition-colors group-hover/lane:text-frame-accent-fg/80">
                            {cat.description}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.whatsapp}
            className="border-2 border-frame-accent bg-frame-accent px-4 py-2 text-sm font-black uppercase tracking-tighter text-frame-accent-fg transition-transform hover:scale-105"
          >
            Talk on WhatsApp
          </a>
        </div>

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
                {item.name === 'Services' && (
                  <div className="grid gap-1 pl-4">
                    {pillarNavServices.map((pillar) => (
                      <Link
                        key={pillar.path}
                        href={pillar.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between border-2 border-frame-border bg-frame-muted px-4 py-3 text-xs font-black uppercase tracking-tighter text-frame-fg hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
                      >
                        <span>{pillar.name}</span>
                        <span className="font-mono text-[10px] text-frame-accent">&rarr;</span>
                      </Link>
                    ))}
                    <Link
                      href="/services#all-services"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 text-xs font-black uppercase tracking-wider text-frame-accent"
                    >
                      View all 74 services &rarr;
                    </Link>
                  </div>
                )}
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
                          <span className="text-[10px] text-frame-accent font-mono">&rarr;</span>
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
