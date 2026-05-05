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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07070b]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Frame Cipher home">
          <img src="/logo.png" alt="Frame Cipher" className="h-10 w-10 object-contain" />
          <div>
            <div className="font-heading text-sm font-bold tracking-[0.18em] text-white">FRAME CIPHER</div>
            <div className="hidden text-[10px] uppercase tracking-[0.22em] text-cyan-300 sm:block">
              Brand. Content. Tech. Growth.
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.path} className="group relative">
              <Link
                href={item.path}
                className={`rounded-sm px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive(item.path) ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
              {item.name === 'Services' && (
                <div className="invisible absolute left-0 top-full w-72 translate-y-3 border border-white/10 bg-[#090912]/95 p-3 opacity-0 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                  <div className="mb-2 px-3 text-[11px] uppercase tracking-[0.22em] text-cyan-300">Service systems</div>
                  <div className="grid gap-1">
                    {primaryServices.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="rounded-sm px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
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
            className="rounded-sm border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-200 transition-colors hover:border-cyan-300 hover:bg-cyan-300/10"
          >
            Talk on WhatsApp
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-white px-4 py-2 text-sm font-bold text-[#08080d] transition-transform hover:-translate-y-0.5"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen((value) => !value)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/15 bg-white/5 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`h-0.5 w-5 bg-white transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-white transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="border-t border-white/10 bg-[#090912] px-4 py-5">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`border px-4 py-3 text-sm font-semibold ${
                  isActive(item.path)
                    ? 'border-cyan-300/40 bg-cyan-300/10 text-white'
                    : 'border-white/10 text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={contact.whatsapp}
              className="border border-cyan-400/40 px-4 py-3 text-center text-sm font-semibold text-cyan-200"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white px-4 py-3 text-center text-sm font-bold text-[#08080d]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
