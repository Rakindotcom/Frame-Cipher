import React from 'react'
import { Check } from 'lucide-react'

const portfolioShowcase = [
  {
    title: 'Design-Forward Marketing Websites',
    desc: 'Webflow websites built around brand identity, responsive design, interactions, and marketing goals.',
  },
  {
    title: 'CMS-Driven Websites',
    desc: 'Projects using structured Collections, reference relationships, dynamic templates, and reusable components.',
  },
  {
    title: 'Figma to Webflow Builds',
    desc: 'Approved Figma designs translated into responsive Webflow experiences with CMS binding and reusable components.',
  },
  {
    title: 'Webflow Migration Projects',
    desc: 'Existing websites moved to Webflow while addressing content, redirects, metadata, structure, and SEO preservation.',
  },
  {
    title: 'Integration-Heavy Webflow Builds',
    desc: 'Projects connecting Webflow with CRM, forms, analytics, booking tools, marketing platforms, APIs, or other business systems.',
  },
]

const caseStudyIncludes = [
  'Business or industry',
  'Project objective',
  'Website type',
  'CMS architecture',
  'Design or Figma source',
  'Webflow features used',
  'Integrations',
  'Custom code where relevant',
  'What Framecipher delivered',
  'Verified performance or business outcomes where available',
]

export default function PortfolioShowcase() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What We Showcase in{' '}
            <span className="italic text-frame-accent">Our Webflow Portfolio.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Real Webflow implementations provide stronger evidence than a list of technologies.
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

        {/* Verification Standards Block */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
            Verification Standards
          </span>
          <h3 className="mt-2 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            What Each Case Study Includes
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
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
