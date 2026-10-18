import Link from 'next/link'
import { contact, navItems, siteUrl } from '../data/agency'

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

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1.15fr_0.85fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src="/logo.webp" alt="Frame Cipher" className="h-11 w-11 object-contain" />
              <div className="font-heading text-lg font-bold uppercase tracking-[0.16em] text-frame-fg">FRAME CIPHER</div>
            </div>
            <p className="max-w-md text-sm font-medium leading-7 text-frame-muted-fg wide:text-lg">
              Frame Cipher is a 360 marketing, media, and technology agency helping brands build strategy,
              content, software, campaigns, and growth systems under one roof.
            </p>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">{siteUrl}</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Core Services</h2>
            <ul className="grid gap-2 text-sm">
              {[
                { title: '360 Marketing', href: '/services/360-marketing' },
                { title: 'Paid Advertising', href: '/services/paid-advertising' },
                { title: 'SEO Services', href: '/services/seo' },
                { title: 'Brand Identity', href: '/services/content-creation/branding' },
                { title: 'Social Media Marketing', href: '/services/social-media-management' },
                { title: 'Video Production', href: '/services/content-creation/video-production' },
                { title: 'Photography', href: '/services/content-creation/product-photography' },
                { title: 'Website Development', href: '/services/website-design-development' },
                { title: 'Production Studio Hub', href: '/studio' },
                { title: 'Podcast Studio Dhaka', href: '/studio/podcast' },
                { title: 'Studio Space Rental', href: '/studio/rental' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium text-frame-muted-fg transition-colors hover:text-frame-fg">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <h2 className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Ads Calculators</h2>
              <span className="rounded bg-frame-accent/15 px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-wider text-frame-accent">FREE</span>
            </div>
            <ul className="grid gap-2 text-sm">
              {[
                { title: 'All Calculators Hub', href: '/calculators' },
                { title: 'Google Ads ROI', href: '/calculators/google-ads' },
                { title: 'Meta Ads ROAS', href: '/calculators/meta-ads' },
                { title: 'TikTok Ads CPM', href: '/calculators/tiktok-ads' },
                { title: 'LinkedIn B2B CAC', href: '/calculators/linkedin-ads' },
                { title: 'Amazon ACoS / TACoS', href: '/calculators/amazon-ads' },
                { title: 'Remarketing CPA', href: '/calculators/remarketing' },
                { title: 'Lead Gen Funnel', href: '/calculators/lead-generation-ads' },
                { title: 'ChatGPT & AI Ads', href: '/calculators/chatgpt-ads' },
                { title: 'Pinterest Ads', href: '/calculators/pinterest-ads' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium text-frame-muted-fg transition-colors hover:text-frame-fg">
                    {item.title}
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
                <Link href="/authors" className="font-medium text-frame-muted-fg transition-colors hover:text-frame-fg">
                  Authors
                </Link>
              </li>
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
            <ul className="grid gap-3 text-sm font-medium text-frame-muted-fg wide:text-lg">
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

        {/* Listed & Recognized On / Accreditations Strip */}
        <div className="mt-12 border-t-2 border-frame-border pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">
                Listed &amp; Recognized On
              </p>
              <p className="mt-1 text-xs font-medium text-frame-muted-fg">
                Accredited across verified global agency directories &amp; client review platforms.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* SelectedFirms (Exact Badge Code from Provider) */}
              <div className="group flex h-14 items-center justify-center rounded-lg border border-frame-border bg-white px-3.5 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:shadow-sm">
                <a
                  href="https://selectedfirms.co/companies/digital-marketing-agencies?utm_source=framecipher&utm_medium=badge&utm_campaign=digital_marketing_agencies&utm_term=top_digital_marketing_company&utm_content=agency_badge&utm_marketing_tactic=badge_organic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                  title="Top Digital Marketing Company - SelectedFirms"
                >
                  <img
                    alt="Top Digital Marketing Company"
                    src="https://selectedfirms.co/public/assets/frontend/img/services/round/digital-marketing-agencies.webp"
                    className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>
              </div>

              {/* Clutch */}
              <div
                className="group flex h-14 w-28 items-center justify-center rounded-lg border border-frame-border bg-white px-3.5 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:shadow-sm"
                title="Clutch Verified Agency"
              >
                <img
                  src="/Listed%20In/Cutch.webp"
                  alt="Clutch"
                  className="max-h-7 max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* GoodFirms */}
              <div
                className="group flex h-14 w-32 items-center justify-center rounded-lg border border-frame-border bg-white px-3.5 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:shadow-sm"
                title="GoodFirms Top Agency"
              >
                <img
                  src="/Listed%20In/GoodFirms.png"
                  alt="GoodFirms"
                  className="max-h-7 max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Trustpilot */}
              <div
                className="group flex h-14 w-32 items-center justify-center rounded-lg border border-frame-border bg-white px-3.5 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:shadow-sm"
                title="Trustpilot Reviews"
              >
                <img
                  src="/Listed%20In/Trustpilot.webp"
                  alt="Trustpilot"
                  className="max-h-8 max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* ShortList */}
              <div
                className="group flex h-14 w-28 items-center justify-center rounded-lg border border-frame-border bg-white px-3.5 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:shadow-sm"
                title="ShortList Featured Agency"
              >
                <img
                  src="/Listed%20In/ShortList-logo.webp"
                  alt="ShortList"
                  className="max-h-7 max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t-2 border-frame-border pt-6 text-xs font-black uppercase tracking-[0.18em] text-frame-muted-fg md:flex-row md:items-center md:justify-between">
          <p>© 2026 Frame Cipher. All rights reserved.</p>
          <p>One Team for Brand, Content, Tech, and Growth.</p>
        </div>
      </div>
    </footer>
  )
}
