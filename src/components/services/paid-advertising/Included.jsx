import { SectionIntro } from '../../Kinetic'

const includedItems = [
  {
    title: 'Strategy & Media Planning',
    body: 'A paid media plan built around your business model, customers, markets, goals, budget, and conversion economics.',
  },
  {
    title: 'Campaign Management',
    body: 'Campaign setup, structure, targeting, budgeting, optimization, and ongoing account management based on the agreed scope.',
  },
  {
    title: 'Creative & Testing',
    body: 'Ad concepts, messaging, creative coordination, and structured testing designed around platform context and audience behavior.',
  },
  {
    title: 'Tracking & Attribution',
    body: 'Conversion measurement configured around the actions that matter to your business, with reporting designed to connect advertising activity to actual outcomes.',
  },
  {
    title: 'Landing Page Alignment',
    body: 'Review and coordination between the ad, offer, landing page, form, checkout, or other conversion path so post-click performance is not ignored.',
  },
  {
    title: 'Reporting & Optimization',
    body: 'Regular performance reporting that explains what your advertising produced, what changed, what needs attention, and where the next opportunity lies.',
  },
]

export default function Included() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Deliverables"
          title="What You Get With Framecipher"
        >
          Every paid advertising engagement is different. The actual scope depends on your
          platform mix, number of campaigns, creative requirements, tracking needs,
          landing-page work, and market coverage.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {includedItems.map((item, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Deliverable 0{index + 1}
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

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-5 md:p-6">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            We define the final scope after reviewing your account and goals so you pay for work
            that aligns with your actual paid advertising needs.
          </p>
        </div>
      </div>
    </section>
  )
}