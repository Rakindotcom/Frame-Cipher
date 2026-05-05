'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contact, navItems, services } from '../data/agency'

const primaryServices = services.map((service) => ({
  name: service.navTitle,
  path: `/services/${service.slug}`,
}))

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path || (path !== '/' && pathname.startsWith(path))

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-frame-border bg-frame-bg/92 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[95vw] items-center justify-between px-4 py-4 md:px-0" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Frame Cipher home">
          <img src="/logo.png" alt="Frame Cipher" className="h-10 w-10 object-contain" />
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
                <div className="invisible absolute left-0 top-full w-72 translate-y-3 border-2 border-frame-border bg-frame-bg p-3 opacity-0 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                  <div className="mb-2 px-3 text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent">Service systems</div>
                  <div className="grid gap-1">
                    {primaryServices.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="px-3 py-2 text-sm font-semibold text-frame-muted-fg transition-colors hover:bg-frame-accent hover:text-frame-accent-fg"
                      >
                        {service.name}
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
        >
          <span className={`h-0.5 w-5 bg-frame-fg transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-frame-fg transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-frame-fg transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="border-t-2 border-frame-border bg-frame-bg px-4 py-5">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
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
            ))}
          </div>
          <div className="mt-4">
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
