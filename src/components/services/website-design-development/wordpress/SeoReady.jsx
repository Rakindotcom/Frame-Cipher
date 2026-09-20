import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Search Visibility & Organic Architecture" title="SEO-Ready WordPress Development">
          A WordPress website should provide a strong technical foundation for ongoing SEO work. We consider search structure during development rather than treating SEO as an afterthought.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {seoFeatures.map((seo, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{seo.tag}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {seo.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {seo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            A WordPress website built with SEO-ready foundations does not guarantee rankings. Search visibility still depends on content, competition, authority, technical quality, and ongoing SEO work.
          </p>
        </div>
      </div>
    </section>
  )
}