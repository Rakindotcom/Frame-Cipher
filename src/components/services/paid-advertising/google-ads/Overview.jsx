import { SectionIntro, PosterButton } from '../../../Kinetic'

const conversionActions = [
  'Qualified lead generation',
  'Phone calls',
  'Appointment bookings',
  'Ecommerce purchases',
  'Product sales',
  'Quote requests',
  'Demo requests',
  'Store visits',
  'Revenue or conversion value',
]

const pillars = [
  'Conversion-first strategy',
  'Transparent account access',
  'Continuous optimization',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our approach"
          title="Google Ads Management Built Around Conversions, Not Clicks"
        >
          A campaign can generate inexpensive clicks and still fail if those visitors never
          become leads, customers, or revenue.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Google Ads management is the ongoing process of planning, building, tracking,
              testing, and optimizing paid campaigns around defined business goals.
            </p>
            <p>
              We build campaigns around the action that matters most to your business. Before
              optimization begins, we establish what a valuable conversion means, how it should
              be measured, and which campaigns should contribute to it.
            </p>
            <p>
              Our Google Ads management service brings strategy, campaign execution, conversion
              tracking, ad messaging, landing-page alignment, and ongoing optimization into one
              process. That gives us a clearer view of what is happening before, during, and
              after the ad click.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              That may be
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              The business action that matters most
            </h3>
            <ul className="mt-6 space-y-2.5">
              {conversionActions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex items-center justify-center bg-frame-muted/10 px-6 py-5 text-center">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-fg md:text-sm">
                {pillar}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}