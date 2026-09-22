import { SectionIntro, PosterButton } from '../../../Kinetic'

const keyElements = [
  'Ideal customer profiles',
  'Buying committees',
  'Target accounts',
  'Professional audience signals',
  'B2B offers and content',
  'Lead qualification',
  'CRM and conversion data',
  'Sales feedback',
  'Pipeline outcomes',
]

const supportedOutcomes = [
  'Qualified B2B leads',
  'Demo requests',
  'Consultation bookings',
  'Enterprise enquiries',
  'Webinar registrations',
  'Content downloads',
  'Website conversions',
  'Account engagement',
  'Sales opportunities',
]

const pillars = [
  'ICP-driven targeting',
  'B2B creative',
  'Qualified-lead measurement',
  'Pipeline-focused optimization',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our approach"
          title="LinkedIn Ads Built for B2B Demand, Qualified Leads & Pipeline Growth"
        >
          LinkedIn advertising is particularly useful when your target audience can be defined
          by professional characteristics such as company, industry, job function, seniority,
          skills, or other professional attributes.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              But precise targeting alone does not create a strong B2B campaign. The campaign
              also needs a clear offer, credible messaging, appropriate creative, reliable
              conversion tracking, and a process for determining whether leads actually fit
              your sales pipeline.
            </p>
            <p>
              LinkedIn&rsquo;s current audience system includes AI-powered options such as
              Audience Expansion, Auto-Targeting, Buyer Groups, and Predictive Audiences. These
              can help advertisers expand or refine professional audiences while still working
              from business-specific signals.
            </p>
            <p>
              That means modern LinkedIn Ads management is not simply about selecting hundreds
              of job titles. It is about giving the platform useful signals while maintaining a
              clear understanding of who the business actually wants to reach.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              We build campaigns around
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What makes LinkedIn campaigns work
            </h3>
            <ul className="mt-6 space-y-2.5">
              {keyElements.map((item, index) => (
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

        <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 md:p-9">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Depending on the business, the primary goal may be
          </span>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {supportedOutcomes.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm font-semibold text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
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