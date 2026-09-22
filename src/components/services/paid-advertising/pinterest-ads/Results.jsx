import { SectionIntro, PosterButton } from '../../../Kinetic'

const caseStudyElements = [
  'Business objective',
  'Target market',
  'Campaign structure',
  'Investment level',
  'Creative approach',
  'Conversion setup',
  'Optimization decisions',
  'Measurable outcome',
]

const categories = [
  {
    title: 'Ecommerce Campaigns',
    body: 'Relevant case studies can cover product catalogs, Shopping Ads, product groups, seasonal campaigns, retargeting, and purchase-focused optimization. Where verified client data is available, we will show the campaign objective, spend, revenue, ROAS, conversion volume, and key changes made during the engagement.',
  },
  {
    title: 'Product & Lifestyle Brands',
    body: 'These case studies can demonstrate how Pinterest creative, keyword targeting, seasonal planning, and visual positioning contributed to traffic, engagement, leads, or sales. The emphasis should be on the actual campaign challenge and the changes that produced measurable movement.',
  },
  {
    title: 'International Campaigns',
    body: 'International case studies can show how targeting, localization, creative, landing pages, and budget allocation differed between markets. Verified country-level results can then demonstrate how the campaign was managed across multiple regions.',
  },
]

export default function Results() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Evidence based"
          title="Pinterest Ads Case Studies & Results"
        >
          Pinterest campaign performance should be evaluated in context. A strong case study
          should show the business objective, market, campaign structure, investment level,
          creative approach, conversion setup, optimization decisions, and measurable outcome.
          We do not publish invented performance figures or unverified claims.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Where verified Framecipher case studies are available, we can show:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-1">
              {caseStudyElements.map((element, index) => (
                <li key={index} className="flex items-start gap-3 border-2 border-frame-border bg-frame-bg p-4">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="text-sm font-semibold text-frame-fg">{element}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <PosterButton href="/case-studies">View Our Case Studies</PosterButton>
            </div>
          </div>

          <div className="space-y-5">
            {categories.map((item, index) => (
              <div key={index} className="border-2 border-frame-border bg-frame-bg p-6 md:p-7">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Case study 0{index + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
              </div>
            ))}
            <div className="border-l-2 border-frame-accent bg-frame-bg p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                Case-study metrics should only be published when supported by real account or
                client data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}