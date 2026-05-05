import Link from 'next/link'
import { contact, navItems, services, siteUrl } from '../data/agency'

export default function Footer() {
  return (
    <footer className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 border-b-2 border-frame-border pb-10">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-frame-accent">Frame Cipher</p>
          <h2 className="font-heading text-[clamp(3rem,10vw,10rem)] font-bold uppercase leading-[0.78] tracking-tighter text-frame-fg">
            Brand. Content. Tech. Growth.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src="/logo.png" alt="Frame Cipher" className="h-11 w-11 object-contain" />
              <div className="font-heading text-lg font-bold uppercase tracking-[0.16em] text-frame-fg">FRAME CIPHER</div>
            </div>
            <p className="max-w-md text-sm font-medium leading-7 text-frame-muted-fg">
              Frame Cipher is a 360 marketing, media, and technology agency helping brands build strategy,
              content, software, campaigns, and growth systems under one roof.
            </p>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">{siteUrl}</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Core Services</h2>
            <ul className="grid gap-2 text-sm">
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="font-medium text-frame-muted-fg transition-colors hover:text-frame-fg">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Company</h2>
            <ul className="grid gap-2 text-sm">
              {navItems.slice(1).map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="font-medium text-frame-muted-fg transition-colors hover:text-frame-fg">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="font-medium text-frame-muted-fg transition-colors hover:text-frame-fg">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="font-medium text-frame-muted-fg transition-colors hover:text-frame-fg">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Contact</h2>
            <ul className="grid gap-3 text-sm font-medium text-frame-muted-fg">
              <li>{contact.location}</li>
              <li>
                <a href={`tel:${contact.phoneHref}`} className="transition-colors hover:text-frame-fg">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-frame-fg">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.whatsapp} className="font-black uppercase tracking-tighter text-frame-accent transition-colors hover:text-frame-fg">
                  Talk on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t-2 border-frame-border pt-6 text-xs font-black uppercase tracking-[0.18em] text-frame-muted-fg md:flex-row md:items-center md:justify-between">
          <p>© 2026 Frame Cipher. All rights reserved.</p>
          <p>One Team for Brand, Content, Tech, and Growth.</p>
        </div>
      </div>
    </footer>
  )
}
