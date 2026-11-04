const seoFeatures = [
  {
    tag: 'SEO 01',
    title: 'Search-Friendly Site Architecture',
    description: 'Organize pages, categories, navigation, and internal links so users and search engines can understand the relationship between important content.',
  },
  {
    tag: 'SEO 02',
    title: 'Metadata & Heading Structure',
    description: 'Configure relevant title tags, meta descriptions, headings, and indexation settings based on the agreed project scope.',
  },
  {
    tag: 'SEO 03',
    title: 'XML Sitemap & Indexation',
    description: 'Review sitemap generation, indexation controls, canonical URLs, and other technical foundations that help search engines crawl the site effectively.',
  },
  {
    tag: 'SEO 04',
    title: 'Schema Markup',
    description: 'Implement relevant structured data where appropriate for businesses, articles, products, services, organizations, or other supported content types.',
  },
  {
    tag: 'SEO 05',
    title: 'Image & Performance Optimization',
    description: 'Optimize media, page structure, scripts, and other performance factors that affect usability and search experience.',
  },
  {
    tag: 'SEO 06',
    title: 'Redirects & SEO Preservation',
    description: 'For redesigns and migrations, review old URLs and implement appropriate redirects where needed to help preserve existing search value.',
  },
  {
    tag: 'SEO 07',
    title: 'Search Console & Analytics',
    description: 'Set up or connect relevant Google tools where included in the project scope so the site can be monitored after launch.',
  },
]

export default function SeoReady() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            SEO-Ready WordPress{' '}
            <span className="italic text-frame-accent">Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A WordPress website should provide a strong technical foundation for ongoing SEO work. We consider search structure during development rather than treating SEO as an afterthought.
          </p>
        </div>

        {/* 3-Column Grid of SEO Features */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {seoFeatures.map((seo, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {seo.tag}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {seo.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {seo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            A WordPress website built with SEO-ready foundations does not guarantee rankings. Search visibility still depends on content, competition, authority, technical quality, and ongoing SEO work.
          </p>
        </div>
      </div>
    </section>
  )
}
