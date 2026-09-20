import { SectionIntro } from '../../Kinetic'

const reportItems = [
  'Organic clicks and impressions',
  'Keyword and page-level ranking movement',
  'Branded and non-branded search visibility',
  'Organic traffic trends',
  'Organic leads and conversions',
  'Ecommerce actions and revenue where tracking is available',
  'Indexed pages and technical health',
  'Backlink and authority development',
  'Local search visibility',
  'Content performance',
  'Completed SEO work',
  'New issues and recommended priorities',
]

const dataSources = [
  {
    title: 'Google Search Console',
    body: 'For search visibility, indexing, queries, and page performance.',
  },
  {
    title: 'Google Analytics 4',
    body: 'For website behavior and conversion measurement.',
  },
  {
    title: 'Google Business Profile',
    body: 'For local search and business-profile insights.',
  },
  {
    title: 'Google Trends',
    body: 'For search-interest patterns and topic research.',
  },
  {
    title: 'Crawling Tools',
    body: 'For technical SEO and website architecture analysis.',
  },
  {
    title: 'Third-Party SEO Platforms',
    body: 'For keyword, competitor, backlink, and SERP research.',
  },
]

export default function Reporting() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Transparent tracking"
            title="SEO Reporting & Performance Tracking"
          >
            SEO reporting should make it easy to understand what changed, what is working, and
            what should happen next. Depending on the project and available access, reporting
            can cover:
          </SectionIntro>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                <span className="text-xs font-black text-frame-accent font-mono">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <span className="text-sm font-semibold text-frame-fg">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Where appropriate, we use Google Search Console, Google Analytics 4, Google
                Business Profile, and relevant SEO platforms to connect search performance with
                website activity.
              </p>
            </div>
            <div className="border-l-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                The purpose of reporting is not to create a longer spreadsheet. It is to make
                the next SEO decision clearer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Evidence versus noise"
            title="SEO Tools & Data Sources We Use"
          >
            SEO tools are useful when they help answer a specific business or search question.
            Depending on the project, our analysis may use:
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dataSources.map((tool, index) => (
              <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Source 0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tool.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {tool.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The exact tools depend on the website and objectives. We use the data to support
              decisions rather than treating any single tool&apos;s score as the SEO strategy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}