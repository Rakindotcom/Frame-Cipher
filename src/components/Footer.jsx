'use client'

import React from 'react'
import Link from 'next/link'
import { contact, navItems, siteUrl } from '../data/agency'
import { RouteGlobe } from './ui/route-globe'

const CYBER_DARK_THEME = {
  ground: 'transparent',
  land: '#9333EA',
  arc: '#C084FC',
  glow: 'rgba(147, 51, 234, 0.22)',
  text: '#FFFFFF',
  muted: '#A1A1AA',
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#09090B] px-4 pt-16 sm:px-6 md:px-8 md:pt-20 pb-8 md:pb-10 text-[#FAFAFA]">
      {/* Background Interactive 3D RouteGlobe Canvas & Architectural Ambient Light */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none [mask-image:linear-gradient(to_bottom,black_50%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_92%)]">
        {/* Soft atmospheric violet glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.05] blur-[150px]" />
        <div className="absolute -bottom-32 right-1/4 h-[400px] w-[600px] rounded-full bg-indigo-600/[0.04] blur-[140px]" />

        {/* Interactive 3D Dotted Globe with Flight Routes & Animated Comets */}
        <div className="pointer-events-auto absolute inset-0 flex items-start justify-center pt-80 sm:pt-96 md:items-center md:justify-end md:pt-0 opacity-25 md:opacity-30 lg:opacity-35 xl:right-10">
          <RouteGlobe
            theme={CYBER_DARK_THEME}
            className="h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] md:h-[620px] md:w-[620px] lg:h-[750px] lg:w-[750px]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Massive Headline (Solid pure white, unobstructed and pure) */}
        <div className="mb-12 border-b border-white/10 pb-10">
          <h2 className="font-heading text-[clamp(2.5rem,7.5vw,7.5rem)] font-medium leading-[0.96] tracking-tight text-white">
            Brand. Content. Tech. Growth.
          </h2>
        </div>

        {/* 5-Column Sitemap & Directory Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1.05fr_1.15fr_0.85fr_1.1fr] pb-12 border-b border-white/10">
          {/* Col 1: Identity & Positioning */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#121214] p-1 shadow-sm">
                <img src="/logo.webp" alt="Frame Cipher" className="h-full w-full object-contain" />
              </div>
              <span className="font-heading text-lg font-medium uppercase tracking-[0.08em] text-white">
                FRAME CIPHER
              </span>
            </div>
            <p className="max-w-sm text-sm font-normal leading-relaxed text-zinc-300">
              Frame Cipher is a 360 marketing, media, and technology agency helping brands build strategy,
              content, software, campaigns, and growth systems under one roof.
            </p>
            <div className="pt-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-purple-400">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <span>{siteUrl.replace(/^https?:\/\//, '')}</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                Core Services
              </h3>
            </div>
            <ul className="grid gap-2.5 text-sm">
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
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-zinc-400 transition-colors duration-150 hover:text-white"
                  >
                    <span className="text-zinc-600 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-purple-400">
                      &rsaquo;
                    </span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ads Calculators */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                Ads Calculators
              </h3>
              <span className="font-mono text-[10px] tracking-wider text-emerald-400 font-medium">
                (Free)
              </span>
            </div>
            <ul className="grid gap-2.5 text-sm">
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
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-zinc-400 transition-colors duration-150 hover:text-white"
                  >
                    <span className="text-zinc-600 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-purple-400">
                      &rsaquo;
                    </span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                Company
              </h3>
            </div>
            <ul className="grid gap-2.5 text-sm">
              {navItems.slice(1).map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="group inline-flex items-center gap-1.5 text-zinc-400 transition-colors duration-150 hover:text-white"
                  >
                    <span className="text-zinc-600 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-purple-400">
                      &rsaquo;
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/authors"
                  className="group inline-flex items-center gap-1.5 text-zinc-400 transition-colors duration-150 hover:text-white"
                >
                  <span className="text-zinc-600 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-purple-400">
                    &rsaquo;
                  </span>
                  <span>Authors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="group inline-flex items-center gap-1.5 text-zinc-400 transition-colors duration-150 hover:text-white"
                >
                  <span className="text-zinc-600 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-purple-400">
                    &rsaquo;
                  </span>
                  <span>Privacy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="group inline-flex items-center gap-1.5 text-zinc-400 transition-colors duration-150 hover:text-white"
                >
                  <span className="text-zinc-600 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-purple-400">
                    &rsaquo;
                  </span>
                  <span>Terms</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                Contact
              </h3>
            </div>
            <ul className="grid gap-3.5 text-sm text-zinc-400">
              <li className="text-zinc-300 leading-relaxed font-normal">
                {contact.location}
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="font-mono text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-mono text-sm text-zinc-300 hover:text-white transition-colors break-all"
                >
                  {contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#FAFAFA] px-5 font-mono text-xs uppercase tracking-wider text-[#09090B] font-medium transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-sm touch-manipulation"
                >
                  <span>Talk on WhatsApp</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Positioning */}
        <div className="pt-8 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Frame Cipher. All rights reserved.</p>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <span>One Team for Brand, Content, Tech, and Growth.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
