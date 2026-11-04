const seoFoundations = [
  {
    title: 'Search-Friendly Website Structure',
    desc: 'We organize pages, navigation, URLs, headings, and content relationships so search engines and visitors can understand the website more easily.',
  },
  {
    title: 'Metadata & Indexing Foundations',
    desc: 'Relevant pages can be configured with appropriate title tags, meta descriptions, indexation settings, XML sitemaps, and other basic technical SEO elements.',
  },
  {
    title: 'Mobile & Performance Considerations',
    desc: 'We build responsive layouts and review loading performance, usability, image handling, and other factors that can affect the experience across devices.',
  },
  {
    title: 'Internal Linking & Content Structure',
    desc: 'Important pages should be connected logically. We consider internal linking opportunities and content hierarchy during development so the website has a stronger foundation for future content and SEO work.',
  },
  {
    title: 'Analytics & Search Tools',
    desc: 'Where included in the project scope, we can set up analytics and search monitoring tools to help you measure traffic, user behavior, and conversions after launch.',
  },
  {
    title: 'Redesign & SEO Preservation',
    desc: 'For redesign projects, we consider existing URLs, valuable content, redirects, rankings, and backlinks before replacing the old structure.',
  },
]

export default function SeoReady() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            SEO-Ready Business{' '}
            <span className="italic text-frame-accent">Website Development.</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Your website should give future SEO campaigns a strong technical foundation from the day it launches. We build important on-page and technical elements into the development process instead of treating SEO as something to consider after launch.
          </p>
        </div>

        {/* Modality 1: Editorial Divided Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {seoFoundations.map((pillar, idx) => (
            <div
              key={idx}
              className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
                {/* Col 1-3: Number and Category */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                    SEO 0{idx + 1}
                  </span>
                </div>
                {/* Col 4-6: Headline */}
                <div className="md:col-span-4">
                  <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {pillar.title}
                  </h3>
                </div>
                {/* Col 7-12: Description */}
                <div className="md:col-span-5">
                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Callout Box */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-zinc-300 border-l-2 border-frame-accent pl-4">
            <strong className="text-white uppercase tracking-wider font-mono">Please Note:</strong> A technically sound website does not guarantee rankings. Search visibility also depends on content quality, competition, authority, technical performance, and ongoing SEO work.
          </p>
        </div>
      </div>
    </section>
  )
}
