import { SectionIntro, PosterButton } from '../../Kinetic'

const areas = [
  {
    eyebrow: 'Domestic reach',
    title: 'Social Media Management Services in Bangladesh',
    body: 'Framecipher provides social media management for businesses across Bangladesh, including Dhaka and other major markets.',
    points: [
      'Platform-specific strategy for the Bangladeshi market',
      'Bangla, English, or bilingual content depending on the audience and brand',
      'Local discovery, community engagement, and customer communication',
    ],
  },
  {
    eyebrow: 'Global delivery',
    title: 'International Social Media Management',
    body: 'We also work with international clients across the US, UK, Australia, Canada, UAE, and other markets.',
    points: [
      'Content planned around market-specific audiences and cultural context',
      'Language and platform behavior considered per market',
      'One regional content style is never applied to every market',
    ],
  },
]

const timelineFactors = [
  'Platform selection',
  'Industry and audience',
  'Starting position of your profiles',
  'Content quality and production capacity',
  'Posting frequency and platform mix',
  'Community volume and response requirements',
  'Business goals and approval process',
]

const milestones = [
  {
    label: 'Social audit',
    timing: 'Within a few business days',
    detail: 'The initial social audit is typically completed within a few business days.',
  },
  {
    label: 'Strategy & first calendar',
    timing: 'One to two weeks',
    detail: 'Your initial content strategy and first monthly calendar are usually prepared within one to two weeks after the engagement begins, depending on scope and the approval process.',
  },
  {
    label: 'Publishing & community management',
    timing: 'Once approved',
    detail: 'Once the strategy and content are approved, regular publishing and community management begin.',
  },
  {
    label: 'Meaningful outcomes',
    timing: 'Several months of consistent management',
    detail: 'Social media growth is cumulative. Early performance signals may appear within the first few weeks, while meaningful audience and business outcomes generally require consistent management over several months.',
  },
]

export default function ServiceAreas() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-muted/30 text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Where we work"
            title="Social Media Management Services in Bangladesh &amp; Worldwide"
          >
            Our approach considers the audience and market instead of applying one regional
            content style everywhere.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {areas.map((area) => (
              <div key={area.title} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-10">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                    {area.eyebrow}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-3xl">
                    {area.title}
                  </h3>
                  <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {area.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {area.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs font-medium text-frame-fg/90 md:text-sm">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Realistic expectations"
            title="Timeline &amp; What to Expect"
          >
            The timeline varies by platform, industry, audience, starting position, content
            quality, posting frequency, and business goals.
          </SectionIntro>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
              <table className="w-full min-w-[560px] text-left">
                <caption className="sr-only">
                  Expected timing for the social audit, strategy, publishing, and business outcomes
                </caption>
                <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/3 border-r border-frame-border/40 p-4 text-xs font-black uppercase tracking-[0.22em] text-frame-accent md:p-5 md:text-sm"
                    >
                      Milestone
                    </th>
                    <th
                      scope="col"
                      className="w-1/3 border-r border-frame-border/40 p-4 text-xs font-black uppercase tracking-[0.22em] text-frame-accent md:p-5 md:text-sm"
                    >
                      Typical Timing
                    </th>
                    <th scope="col" className="p-4 text-xs font-black uppercase tracking-[0.22em] text-frame-accent md:p-5 md:text-sm">
                      What Happens
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-frame-border text-sm font-medium md:text-base">
                  {milestones.map((milestone, mIdx) => (
                    <tr key={milestone.label} className="align-top transition-colors hover:bg-frame-muted/20">
                      <th
                        scope="row"
                        className="border-r border-frame-border/40 p-4 font-heading text-base font-bold uppercase tracking-tight text-frame-fg md:p-5"
                      >
                        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                          Stage {String(mIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="mt-1 block">{milestone.label}</span>
                      </th>
                      <td className="border-r border-frame-border/40 p-4 font-bold text-frame-accent md:p-5">
                        {milestone.timing}
                      </td>
                      <td className="p-4 leading-relaxed text-frame-muted-fg md:p-5">
                        {milestone.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Timeline drivers
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                The timeline can depend on:
              </h3>
              <ul className="mt-6 space-y-2.5">
                {timelineFactors.map((factor, index) => (
                  <li
                    key={factor}
                    className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg"
                  >
                    <span className="font-mono text-xs font-black text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Social growth is cumulative. We set expectations clearly at the start rather than
              promising a specific follower count, engagement rate, or viral result.
            </p>
            <div className="shrink-0">
              <PosterButton href="/contact">Start Your Social Media Management &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
