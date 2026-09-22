import { SectionIntro, PosterButton } from '../../../Kinetic'

const keyElements = [
  'Creative to earn attention and communicate the value.',
  'Offer to give people a reason to act.',
  'Conversion data to help Meta optimize toward meaningful outcomes.',
  'Landing-page or sales-flow alignment to turn attention into actual business results.',
]

const supportedOutcomes = [
  'Ecommerce sales',
  'Qualified lead generation',
  'Local enquiries',
  'Appointment bookings',
  'Phone calls',
  'Messenger conversations',
  'WhatsApp enquiries',
  'Product purchases',
  'Retargeting',
  'International customer acquisition',
]

const pillars = [
  'Creative strategy',
  'Conversion data',
  'Advantage+ optimization',
  'Continuous testing',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our approach"
          title="Meta Ads Management Built Around Creative, Conversion Data & Buyer Behavior"
        >
          On Meta, people are usually not searching for your product when your ad appears. The
          campaign has to earn attention, communicate the offer, build interest, and give Meta
          useful signals about who is most likely to act.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Meta advertising differs from search advertising because users are usually not
              searching for your product or service when your ad appears. The campaign has to
              earn attention, communicate the offer quickly, create enough interest to continue
              the journey, and give Meta useful signals about which users are more likely to
              take the desired action.
            </p>
            <p>
              We build campaigns around the outcome that matters to the business, whether that
              means purchases, qualified leads, calls, messages, bookings, or another measurable
              action.
            </p>
            <p>
              Meta&rsquo;s current Advantage+ tools use AI and automation across areas such as
              audience, placements, budget, creative, and end-to-end sales or lead campaigns.
              That makes accurate conversion signals and strong creative inputs increasingly
              important to campaign management.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Four elements that matter
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What makes Meta campaigns work
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
            Our Meta Ads management service can support
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