import React from 'react'

const marketingBenefits = [
  {
    title: 'Design Control',
    desc: 'Webflow gives teams strong control over layouts, responsive behavior, typography, interactions, and visual systems.',
  },
  {
    title: 'Structured Content',
    desc: 'The CMS allows blogs, case studies, services, team members, resources, listings, and other structured content to be managed separately from page design.',
  },
  {
    title: 'Reusable Components',
    desc: 'Reusable components help teams maintain consistent layouts while allowing approved content and properties to change across instances.',
  },
  {
    title: 'Marketing-Team Independence',
    desc: 'A well-architected Webflow project lets marketing teams make routine content changes without editing source code.',
  },
  {
    title: 'SEO & Performance Foundations',
    desc: 'SEO settings, structured content, redirects, responsive design, image optimization, and technical configuration can be considered throughout the Webflow build.',
  },
  {
    title: 'International Publishing',
    desc: 'Localization can support different languages and regions through localized content, URLs, SEO settings, and CMS publishing workflows.',
  },
  {
    title: 'A Platform That Can Stay Simple',
    desc: 'Webflow is powerful, but not every project needs extensive custom code or complex integrations. We use native capabilities first and add custom development only when the business requirement justifies it.',
  },
]

export default function WhyWebflow() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Why Webflow Works for{' '}
            <span className="italic text-frame-accent">Modern Marketing Teams.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Webflow is particularly useful for organizations that need strong visual control, structured content, and the ability for marketing teams to publish without depending on developers for every routine update.
          </p>
        </div>

        {/* 7 Benefit Cards */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {marketingBenefits.map((item, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent block mb-2">
                  Benefit 0{idx + 1}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
