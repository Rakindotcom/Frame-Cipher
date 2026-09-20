import { SectionIntro, PosterButton } from '../../Kinetic'

const conversionJourney = [
  'Search intent',
  'Relevant page',
  'Useful content',
  'Clear experience',
  'CTA',
  'Lead, call, message, signup, or sale',
]

const chooseUs = [
  {
    title: 'SEO + Development Under One Team',
    body: 'SEO recommendations are more useful when the team can also understand and implement the underlying website changes. Framecipher combines SEO strategy with website design, development, content, and technical execution under one in-house team. This reduces the gap between identifying an issue and implementing the solution.',
  },
  {
    title: 'SEO + Content in One Workflow',
    body: 'Content should not operate separately from SEO strategy. We connect keyword research, search intent, page structure, content planning, optimization, and technical implementation so the website follows a consistent search strategy.',
  },
  {
    title: 'Transparent Client Approval',
    body: 'You stay informed about what is being recommended and why. Depending on the project workflow, major content work and significant implementation changes can be reviewed and approved before going live.',
  },
  {
    title: 'Bangladesh & International SEO',
    body: 'We support businesses targeting customers in Bangladesh and international markets including the US, UK, Australia, Canada, and UAE. The strategy is adapted to the target market instead of applying the same keyword, content, and local SEO approach everywhere.',
  },
  {
    title: 'Data-Driven Reporting',
    body: 'SEO decisions should be based on evidence rather than ranking screenshots alone. We track relevant visibility, traffic, conversions, technical issues, completed work, and emerging opportunities so priorities can change when the data changes.',
  },
]

const resultsMetrics = [
  'Organic clicks and impressions',
  'Non-brand search visibility',
  'Organic traffic growth',
  'Qualified leads',
  'Organic conversions',
  'Ecommerce actions and revenue',
  'Local search visibility',
  'Important keyword and page movement',
  'Technical improvements',
  'Content performance',
]

export default function Conversions() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Beyond rankings"
            title="SEO That Supports Conversions"
          >
            Search visibility matters most when it leads to a valuable business action.
          </SectionIntro>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              The conversion journey
            </span>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {conversionJourney.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="border-2 border-frame-accent bg-frame-accent/10 px-4 py-2 font-heading text-sm font-bold uppercase tracking-tight text-frame-fg">
                    {step}
                  </span>
                  {index < conversionJourney.length - 1 && (
                    <span className="font-heading text-xl font-bold text-frame-accent">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              <p>That means we look beyond rankings and traffic.</p>
              <p>
                For commercial pages, we consider relevance, content clarity, trust signals,
                calls to action, internal navigation, and the path users take after arriving
                from search.
              </p>
              <p>
                For ecommerce websites, that path may lead to a product view, cart, checkout, or
                purchase.
              </p>
              <p>
                For service businesses, it may lead to a form submission, phone call, WhatsApp
                conversation, or consultation request.
              </p>
              <p>
                Where reliable tracking is available, we use conversion data to understand which
                organic traffic contributes to actual business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="The Frame Cipher Standard"
            title="Why Choose Framecipher for SEO"
          >
            SEO strategy, content, and technical execution working together under one in-house team.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {chooseUs.map((item, index) => (
              <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Standard 0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Evidence based"
            title="SEO Results & Case Studies"
          >
            SEO results should be evaluated using meaningful business and search metrics rather
            than isolated ranking screenshots.
          </SectionIntro>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
                Where client permissions and reliable tracking data are available, we document:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {resultsMetrics.map((metric, index) => (
                  <li key={index} className="flex items-start gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-frame-fg">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  How each case study is documented
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Each case study should explain the starting situation, the SEO work performed,
                  the implementation period, and the measurable outcome.
                </p>
              </div>
              <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Verified Framecipher SEO case studies are featured at the top of this page. Each
                  study is documented with search-console and analytics evidence rather than
                  unverified performance claims.
                </p>
              </div>
              <PosterButton href="/case-studies">View Our Case Studies</PosterButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}