const capabilityGroups = [
  {
    title: 'Web & Digital Platforms',
    description: 'High-performance web applications, headless commerce, and conversion-focused architectures.',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify', 'WordPress', 'HTML5', 'CSS3', 'Headless CMS'],
  },
  {
    title: 'Backend, Cloud & Systems',
    description: 'Custom APIs, database architecture, CRM workflows, and business automation software.',
    items: ['Node.js', 'Python (FastAPI)', 'PostgreSQL', 'Supabase', 'Vercel Edge', 'APIs', 'Databases', 'Custom Dashboards', 'CRM', 'Business Management Systems', 'Automation'],
  },
  {
    title: 'MarTech & Unified Attribution',
    description: 'Server-side tracking, algorithmic ad platforms, search intelligence, and conversion analytics.',
    items: ['Meta CAPI (Server-Side)', 'Google Tag Manager', 'Google Ads', 'Meta Ads', 'Analytics', 'Conversion Tracking', 'Looker Studio', 'SEO', 'AEO', 'GEO', 'WhatsApp Business API'],
  },
  {
    title: 'Studio, Cinema & Creative Engine',
    description: 'Studio commercial filming, cinematic color grading, motion graphics, and audio mastering.',
    items: ['4K Cinema Rigs (Sony FX)', 'DaVinci Resolve Studio', 'Adobe Premiere Pro', 'After Effects', 'Studio Lighting & Audio', 'Drone Aerials', 'Motion Design', 'Brand Identity Systems'],
  },
]

export default function HomeTech() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Technology behind{' '}
            <span className="italic text-frame-accent">
              the work.
            </span>
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            From modern websites to custom business systems, we use technology based on the
            actual requirements of the project, not a fixed template.
          </p>
        </div>

        {/* Structured Capability Matrix */}
        <div className="grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group, index) => (
            <article
              key={group.title}
              className="group relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r last:border-r-0 border-white/[0.08] p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span
                    className="font-mono text-xs text-frame-accent tabular-nums"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                  {group.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-300">
                  {group.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-white/[0.08] bg-[#121214] px-2.5 py-1 text-[10px] sm:text-[11px] text-zinc-300 transition-colors duration-200 hover:border-white/[0.16] hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
