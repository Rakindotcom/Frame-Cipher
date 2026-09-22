import { SectionIntro, PosterButton } from '../../Kinetic'

const journeyStages = [
  {
    title: 'Demand Generation',
    body: 'Some businesses need to create interest before customers begin searching for the solution. Paid social, video, discovery, and other upper-funnel campaigns can introduce the product, service, problem, or value proposition to relevant audiences.',
    tail: 'The objective is to build qualified attention that can support later conversion activity.',
  },
  {
    title: 'Consideration & Retargeting',
    body: 'People who already know your brand may need more information before they are ready to act. Consideration campaigns can focus on product benefits, proof, comparisons, use cases, offers, testimonials, or other information that helps move the customer forward.',
    tail: 'Retargeting can then reconnect with people who have already interacted with the business but have not yet converted.',
  },
  {
    title: 'Lead & Sales Conversion',
    body: 'Conversion campaigns focus on the action that creates measurable business value.',
    bullets: [
      'A product purchase',
      'Lead submission',
      'Consultation request',
      'Phone call',
      'Appointment',
      'Booking',
      'Application',
      'Trial or software sign-up',
    ],
    tail: 'Campaign structure, landing pages, tracking, and optimization should all support that specific conversion event.',
  },
  {
    title: 'Customer Retention',
    body: 'Paid advertising can also support existing customers when the economics and platform capabilities make sense.',
    bullets: [
      'Repeat purchases',
      'New products',
      'Cross-sells',
      'Upsells',
      'Seasonal offers',
      'Customer-specific promotions',
    ],
    tail: 'Retention should be evaluated alongside acquisition so the advertising strategy considers customer value, not only first-time conversion.',
  },
]

const chooseUs = [
  {
    title: 'One In-House Team',
    body: 'Your paid advertising is not isolated from the rest of your digital presence. SEO, content, design, development, landing pages, and paid media can be coordinated through one in-house team instead of being split across unrelated providers.',
  },
  {
    title: 'Media + Creative + Development Under One Roof',
    body: 'Many advertising problems happen after the click. Because Framecipher also works across design and development, we can look beyond the ad account when the campaign requires landing-page, website, checkout, or user-experience improvements.',
  },
  {
    title: 'Conversion-Focused Campaign Management',
    body: 'We optimize toward the business action you care about. That could mean a sale, qualified lead, booked consultation, application, appointment, or another measurable conversion event. Clicks and impressions remain useful diagnostic metrics, but they are not the final objective.',
  },
  {
    title: 'Bangladesh & International Market Experience',
    body: 'Framecipher supports businesses in Bangladesh as well as international markets, including the US, UK, Australia, Canada, and UAE. Campaign strategy can be adapted to differences in customer behavior, competition, pricing, language, geography, platform availability, and market economics.',
  },
  {
    title: 'Transparent Reporting & Budget Control',
    body: 'Your management fee and advertising budget remain separate. You receive visibility into where the budget is going, what the campaigns are producing, and what changes are being recommended. Campaign and budget changes are handled according to the approval process agreed for the engagement.',
  },
]

const resultsMetrics = [
  'Business type and market',
  'Original campaign objective',
  'Starting challenge',
  'Platform and campaign structure',
  'Target audience',
  'Creative or offer strategy',
  'Conversion tracking setup',
  'Major optimization decisions',
  'Advertising spend where appropriate',
  'Leads, sales, or revenue generated',
  'Cost per acquisition or other relevant efficiency metrics',
  'Timeline',
  'Lessons learned',
]

export default function CustomerJourney() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Across the funnel"
            title="Paid Advertising Across the Customer Journey"
          >
            Paid advertising does not have to serve the same purpose at every stage of the
            customer journey. The channel, message, audience, offer, and measurement approach
            can all change as the customer moves closer to conversion.
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
            {journeyStages.map((stage, index) => (
              <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {stage.body}
                  </p>
                  {stage.bullets?.length > 0 && (
                    <ul className="mt-4 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                      {stage.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-4 border-t border-frame-border/60 pt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
                    {stage.tail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="The Frame Cipher Standard"
            title="Why Choose Framecipher for Paid Advertising"
          >
            Strategy, creative, development, and measurement working together under one in-house team.
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
            title="Paid Advertising Results & Case Studies"
          >
            Strong paid advertising claims should be supported by real evidence.
          </SectionIntro>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
                Where verified case studies are available, Framecipher can document:
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
                  Each case study should explain the starting situation, the campaign structure,
                  the major optimization decisions, and the measurable outcome.
                </p>
              </div>
              <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                  We do not publish invented ROAS figures or generic claims that every business
                  can achieve the same result.
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