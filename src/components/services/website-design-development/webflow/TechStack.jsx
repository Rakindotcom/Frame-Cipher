import React from 'react'

const techStack = [
  {
    name: 'Webflow Designer',
    desc: 'Responsive page development, reusable styles, components, layouts, interactions, and responsive breakpoints.',
  },
  {
    name: 'Webflow CMS',
    desc: 'Structured Collections, dynamic templates, reference relationships, filtering, sorting, and CMS-driven page experiences.',
  },
  {
    name: 'Webflow Components',
    desc: 'Reusable design elements that help keep large websites consistent and easier to manage.',
  },
  {
    name: 'Custom Code',
    desc: 'HTML, CSS, JavaScript, embeds, and custom functionality where native Webflow capabilities are not enough.',
  },
  {
    name: 'Webflow APIs & Integrations',
    desc: 'Site data integrations, CMS workflows, external systems, automation, and custom application connections.',
  },
  {
    name: 'Webflow Apps',
    desc: 'Apps and extensions selected around genuine business requirements rather than unnecessary third-party functionality.',
  },
  {
    name: 'Webflow Localization',
    desc: 'Localized pages, CMS content, components, URLs, and SEO configurations for multilingual or multi-region websites.',
  },
  {
    name: 'Performance & SEO',
    desc: 'Semantic structure, image optimization, metadata, redirects, accessibility checks, mobile performance, and other technical considerations.',
  },
]

export default function TechStack() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Webflow Technology{' '}
            <span className="italic text-frame-accent">Stack.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Webflow development works best when the visual system, CMS, components, integrations, custom code, SEO, and publishing workflow are planned together.
          </p>
        </div>

        {/* 8 Stack Layer Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Stack Layer 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {tech.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Takeaway Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-300">
            We use the technology required by the project rather than adding complexity simply to make the technical stack look more advanced.
          </p>
        </div>
      </div>
    </section>
  )
}
