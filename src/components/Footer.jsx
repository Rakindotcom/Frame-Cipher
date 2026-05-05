import Link from 'next/link'
import { contact, navItems, services, siteUrl } from '../data/agency'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070b] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src="/logo.png" alt="Frame Cipher" className="h-11 w-11 object-contain" />
              <div className="font-heading text-lg font-bold tracking-[0.16em]">FRAME CIPHER</div>
            </div>
            <p className="max-w-md text-sm leading-7 text-gray-400">
              Frame Cipher is a 360 marketing, media, and technology agency helping brands build strategy,
              content, software, campaigns, and growth systems under one roof.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-300">{siteUrl}</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Core Services</h2>
            <ul className="grid gap-2 text-sm">
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-gray-400 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Company</h2>
            <ul className="grid gap-2 text-sm">
              {navItems.slice(1).map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-gray-400 transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-gray-400 transition-colors hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 transition-colors hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Contact</h2>
            <ul className="grid gap-3 text-sm text-gray-400">
              <li>{contact.location}</li>
              <li>
                <a href={`tel:${contact.phoneHref}`} className="transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.whatsapp} className="text-cyan-200 transition-colors hover:text-white">
                  Talk on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Frame Cipher. All rights reserved.</p>
          <p>One Team for Brand, Content, Tech, and Growth.</p>
        </div>
      </div>
    </footer>
  )
}
