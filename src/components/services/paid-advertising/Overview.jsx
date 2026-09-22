import { SectionIntro, PosterButton } from '../../Kinetic'

const knowList = [
  'Which channels are receiving budget',
  'Which campaigns and audiences are producing conversions',
  'Which creative is generating useful response',
  'What happens after someone clicks',
  'Which parts of the funnel are losing potential customers',
  'Where the next optimization opportunity exists',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our approach"
          title="Paid Advertising Built Around Business Outcomes, Not Clicks"
        >
          A paid campaign can generate thousands of clicks and still produce very little
          business value. The difference is what happens before and after the click.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Effective paid advertising starts with a clear business objective, the right
              audience, a relevant offer, strong creative, accurate tracking, and a conversion
              path that makes sense for the customer. From there, performance data guides what
              to test, reduce, improve, and scale.
            </p>
            <p>
              Framecipher manages paid advertising with that full system in mind. Whether the
              goal is ecommerce revenue, qualified leads, booked appointments, software
              sign-ups, product sales, or customer acquisition, campaign decisions are tied to
              the outcomes that matter to your business.
            </p>
            <p>
              The objective is not simply to spend more. It is to make each advertising decision
              more measurable, deliberate, and commercially useful.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              You should know
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Where budget goes and what it produces
            </h3>
            <ul className="mt-6 space-y-2.5">
              {knowList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <PosterButton href="/contact">Get Your Free Ad Account Audit &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}