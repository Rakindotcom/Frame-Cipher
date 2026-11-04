import React from 'react'
import { Check } from 'lucide-react'

const portfolioShowcase = [
  {
    title: 'Business Websites',
    desc: 'Brand-focused websites designed around services, credibility, lead generation, and easy content management.',
  },
  {
    title: 'Wix Studio Builds',
    desc: 'More customized Wix websites with advanced responsive layouts, structured content, and deeper design control.',
  },
  {
    title: 'CMS & Dynamic Websites',
    desc: 'Content-driven projects that use structured collections and dynamic page templates.',
  },
  {
    title: 'Wix Ecommerce Stores',
    desc: 'Product-focused websites with catalog setup, checkout, payments, and store management.',
  },
  {
    title: 'Redesign Projects',
    desc: 'Existing Wix websites improved through new design, structure, mobile optimization, SEO setup, and better conversion paths.',
  },
]

const caseStudyIncludes = [
  'Business or industry',
  'Website type',
  'Wix Editor or Wix Studio',
  'Project scope',
  'Main functionality',
  'Integrations used',
  'Screenshots',
  'Verified outcomes where available',
]

export default function PortfolioShowcase() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What We Showcase in{' '}
            <span className="italic text-frame-accent">Our Wix Portfolio.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Transparent breakdown of the architectures, capabilities, and delivery scopes across our live client builds.
          </p>
        </div>

        {/* 5 Category Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {portfolioShowcase.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Transparency Block */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
            Case Study Transparency
          </span>
          <h3 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            What Each Case Study Includes
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {caseStudyIncludes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-[#09090B] p-3.5"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs md:text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs md:text-sm italic text-zinc-400 font-normal">
            We only publish measurable results that can be supported by project data.
          </p>
        </div>
      </div>
    </section>
  )
}
