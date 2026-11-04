import { SectionIntro } from '../../../Kinetic'

const columns = [
  {
    title: 'What We Control',
    items: [
      'The agreed reporting structure',
      'KPI framework',
      'Data analysis',
      'Interpretation',
      'Report preparation',
      'Recommendations',
      'Communication of limitations',
    ],
  },
  {
    title: 'What We Don\u2019t Guarantee',
    items: [
      'Follower growth',
      'Engagement growth',
      'Leads',
      'Sales',
      'Revenue',
      'Viral content',
      'Algorithmic distribution',
      'Specific ROI',
      'Specific conversion rates',
    ],
  },
]

export default function Guarantee() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Service standards"
          title="Service Standards &amp; Reporting Scope"
        >
          Reporting and analytics alone cannot produce business results on their own, so the scope is defined
          by what analysis can and cannot control.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          {columns.map((column) => (
            <article
              key={column.title}
              className={`p-7 md:p-8 ${column.title === 'What We Control' ? 'bg-[#A855F7]/10' : 'bg-[#09090B]'}`}
            >
              <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-white/[0.06] pb-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] last:border-b-0 md:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 h-2 w-2 shrink-0 ${
                        column.title === 'What We Control' ? 'bg-frame-accent' : 'bg-[#121214]'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-[#A855F7]/40 bg-[#121214] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
          Reporting measures performance and informs decisions. It does not control audience behavior,
          platform distribution, competition, creative quality, offers, website performance, market
          conditions, or other factors affecting business results. Our commitment is to provide clear, honest
          analysis based on the data available and recommendations that can be acted upon.
        </p>
      </div>
    </section>
  )
}
