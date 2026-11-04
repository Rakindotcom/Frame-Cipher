'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'
import { CodeTypingBg, CODE_TOKENS as T } from '../../../ui/code-typing-bg'

// Ambient typing snippet shows real Velo (Wix's JS runtime) code.
const WIX_LINES = [
  [
    ['$w', T.fn],
    ['.onReady', T.fn],
    ['(', T.punct],
    ['function ', T.kw],
    ['() {', T.punct],
  ],
  [
    ['  $w', T.fn],
    ['(', T.punct],
    [`'#ctaButton'`, T.str],
    [')', T.punct],
    ['.onClick', T.fn],
    ['(', T.punct],
    ['() => {', T.kw],
  ],
  [
    ['    wixLocation', T.id],
    ['.to', T.fn],
    ['(', T.punct],
    [`'/contact'`, T.str],
    [');', T.punct],
  ],
  [['  });', T.punct]],
  [['});', T.punct]],
  [],
  [
    ['wixData', T.id],
    ['.query', T.fn],
    ['(', T.punct],
    [`'Leads'`, T.str],
    [')', T.punct],
  ],
  [
    ['  .eq', T.fn],
    ['(', T.punct],
    [`'source'`, T.str],
    [', ', T.punct],
    [`'homepage'`, T.str],
    [')', T.punct],
  ],
  [
    ['  .find', T.fn],
    ['();', T.punct],
  ],
  [],
  [['// editor-speed builds with native CMS', T.comment]],
]

const wixAdvantages = [
  {
    tag: '01',
    title: 'Fast Website Launch',
    description: 'Wix can reduce the technical setup involved in launching a website. That makes it practical for businesses working toward a short launch window.',
  },
  {
    tag: '02',
    title: 'Easy Content Management',
    description: 'Your team can manage many day-to-day content changes through the Wix dashboard without editing source code.',
  },
  {
    tag: '03',
    title: 'Professional Design Flexibility',
    description: 'Wix provides design tools for branded websites, while Wix Studio offers more advanced responsive control for custom builds.',
  },
  {
    tag: '04',
    title: 'Built-In Business Features',
    description: 'Wix supports capabilities such as forms, bookings, ecommerce, CMS content, and other business functions within the same ecosystem.',
  },
  {
    tag: '05',
    title: 'Room for Custom Development',
    description: 'When built-in features are not enough, Wix Studio and its developer tools can support custom code, APIs, CMS-driven functionality, and external integrations.',
  },
  {
    tag: '06',
    title: 'A Platform That Should Match the Project',
    description: 'Wix is not the right answer for every website. We recommend it when its capabilities match your business requirements and suggest another platform when they do not.',
  },
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Background Ambient Glow & Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.08] blur-[140px]" />
        <div className="fc-grid-pattern absolute inset-0 opacity-15" />

        {/* Ambient Wix Velo Terminal (types itself out, loops) */}
        <div className="hidden lg:block absolute -right-20 top-28 h-[400px] w-[420px] opacity-40 pointer-events-none select-none [mask-image:radial-gradient(ellipse_70%_65%_at_50%_50%,#000_30%,transparent_100%)]">
          <CodeTypingBg lines={WIX_LINES} />
        </div>
      </div>

      {/* Top Header & Breadcrumbs Clearance */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation Header Row */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              <Link href="/" className="shrink-0 hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <Link href="/services" className="shrink-0 hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <Link href="/services/website-design-development" className="shrink-0 hover:text-white transition-colors">
                Website Design &amp; Development
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              <span className="text-frame-accent shrink-0">Wix Development</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Full-Stack Wix &amp; Wix Studio · Dhaka &amp; Global</span>
            </div>
          </div>

          {/* Master Display Headline & 3D Interactive Architecture Matrix (Strict 7+5=12 columns: Always Side-by-Side on Desktop) */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Master Display Headline & Intro (7 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best Wix Development{' '}
                <span className="italic text-frame-accent">Service in Bangladesh.</span>
              </h1>

              <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-3xl">
                Framecipher builds Wix websites for small businesses, startups, and solo entrepreneurs who want a professional site online fast, without the cost or complexity of a fully custom build. Whether you&apos;re launching in Dhaka or reaching customers across the US, UK, Australia, Canada, or UAE, our Wix development services deliver a site that looks polished and stays easy for you to edit afterward.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation &rarr;
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Pricing &amp; Plans &rarr;
                </PosterButton>
              </div>

              {/* Technical Trust Meta Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-frame-accent" />
                <span>Wix &amp; Wix Studio Certified</span>
                <span className="text-zinc-700">|</span>
                <span>Velo &amp; Custom APIs</span>
                <span className="text-zinc-700">|</span>
                <span>Full Client Self-Editing</span>
              </div>
            </div>

            {/* Right Column: 3D Ambient Visual (Strict 5 cols: Always on the Side) */}
            <div className="flex justify-center lg:col-span-6 xl:col-span-6 w-full mt-8 lg:mt-0">
              <div className="w-full max-w-full sm:max-w-[540px]">
                <Ambient3DCanvas mode="geo-drift" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Dashboard Panel */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 md:p-8 font-mono text-xs">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090B]">
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Editing Experience</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Full Self-Editing</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-mono">Zero Code Required</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Responsive Control</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Wix Studio</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-mono">Fluid Breakpoints</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Custom Logic</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">Velo &amp; APIs</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-mono">Extensible CMS</p>
            </div>
            <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Security &amp; Uptime</p>
              <p className="mt-1 font-heading text-lg font-medium text-white">99.9% Uptime</p>
              <p className="mt-1 text-[11px] text-emerald-400 font-mono">Managed SSL &amp; Hosting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Wix for Your Business? */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading: STRICTLY LEFT-ALIGNED */}
          <div className="max-w-3xl space-y-4 mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why Choose Wix for{' '}
              <span className="italic text-frame-accent">Your Business?</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                Wix is a practical choice for businesses that want a professional website without managing a complex technical stack. It combines website design, content management, hosting, business tools, and ongoing editing in one platform.
              </p>
              <p>
                For small businesses, startups, professional services, and many growing brands, this can make launching and managing a website much simpler. Your team can update pages, images, services, blog content, forms, and other site elements without relying on a developer for every routine change.
              </p>
              <p>
                Wix also offers more advanced options when a standard website needs additional functionality. Wix Studio adds deeper responsive design controls, while custom development can extend the site through code, CMS functionality, APIs, and integrations.
              </p>
              <p>
                The right choice still depends on what your website needs to do. We assess your goals, content, workflows, integrations, ecommerce requirements, and long-term plans before recommending Wix.
              </p>
            </div>
          </div>

          {/* Approach Flow Pipeline Band */}
          <div className="mb-12 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-300">
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Business Goals</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Content Management</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Design &amp; Hosting</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-white/[0.08] bg-[#121214] px-4 py-2 text-zinc-200">Business Tools</span>
            <span className="text-frame-accent">&rarr;</span>
            <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-4 py-2 text-frame-accent">Growth</span>
          </div>

          {/* 3-Column Continuum Band */}
          <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3 mb-12">
            <div className="bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">Who We Build For</span>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                Small businesses, startups, solo entrepreneurs, and professional services that want a polished site online fast with easy self-editing.
              </p>
            </div>
            <div className="bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">What We Build</span>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                Branded business websites, portfolios, booking and service sites, forms, ecommerce, and CMS-driven pages in Wix &amp; Wix Studio.
              </p>
            </div>
            <div className="bg-[#121214] p-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">How We Deliver</span>
              <p className="text-sm font-normal leading-relaxed text-zinc-400">
                Design, build, custom code and integrations through one in-house team, with a dashboard your team can edit without a developer.
              </p>
            </div>
          </div>

          {/* Honest Assessment Banner */}
          <div className="mb-14 flex flex-col items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 sm:flex-row">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-xl">
              Not sure whether Wix or a different platform fits your business? We&apos;ll tell you honestly which one makes sense.
            </p>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Get an Honest Assessment &rarr;
            </PosterButton>
          </div>

          {/* 6 Advantage Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wixAdvantages.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.14]"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">{item.tag}</span>
                  <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
