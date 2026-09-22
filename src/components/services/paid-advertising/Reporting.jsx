import { SectionIntro } from '../../Kinetic'

const reportItems = [
  'Spend',
  'Impressions',
  'Clicks',
  'CTR',
  'CPC',
  'Leads',
  'Cost per lead',
  'Purchases',
  'Conversion rate',
  'Cost per acquisition',
  'Revenue',
  'Return on ad spend',
  'Campaign and audience performance',
]

const dataSources = [
  {
    title: 'Website Leads & Form Submissions',
    body: 'Leads and form fills captured through analytics, tag management, and platform conversion tracking.',
  },
  {
    title: 'Calls, Bookings & Appointments',
    body: 'Phone calls, appointments, bookings, and consultation requests recorded as conversion events where supported.',
  },
  {
    title: 'Purchases & Ecommerce Revenue',
    body: 'Checkout, add-to-cart, purchase, and revenue actions connected to the campaign that produced them.',
  },
  {
    title: 'Sign-ups, Trials & Applications',
    body: 'Software sign-ups, trials, and applications tracked against the campaign objective.',
  },
  {
    title: 'CRM & Offline Conversion Feedback',
    body: 'Qualified leads, booked calls, opportunities, and purchases fed back from the CRM or sales process where available.',
  },
  {
    title: 'Funnel & Audience Diagnosis',
    body: 'Where users drop off between the click and the conversion, so the next optimization is based on evidence.',
  },
]

export default function Reporting() {
  return (
    <div className="border-t-2 border-frame-border bg-frame-bg text-frame-fg">
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Transparent tracking"
            title="Performance Reporting & Optimization"
          >
            Reporting should lead to decisions, not simply display numbers. We monitor the
            metrics that matter for the campaign objective and use performance data to determine
            what should be changed next.
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
                Reporting is built around what each campaign was set up to produce, whether that
                is leads, sales, bookings, sign-ups, or revenue, rather than an unfiltered dump
                of every platform metric.
              </p>
            </div>
            <div className="border-l-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                The goal is to explain what happened, why it happened, and what should happen
                next. Budget changes follow an agreed approval process rather than arbitrary shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Conversion measurement"
            title="What Every Campaign Tracks"
          >
            You cannot optimize what you cannot measure reliably. We establish the conversion
            events needed to understand what paid traffic actually produces, subject to the
            available website, analytics, CRM, and platform setup.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dataSources.map((source, index) => (
              <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Tracking 0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {source.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {source.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Where included in scope, tracking setup is reviewed before launch so campaign
              optimization is based on conversion data instead of clicks alone.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}