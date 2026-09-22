import { SectionIntro } from '../../../Kinetic'

const factors = [
  'Buyer intent',
  'Audience quality',
  'Offer strength',
  'Lead destination',
  'Qualification',
  'CRM routing',
  'Follow-up process',
  'Lead quality',
  'Sales outcomes',
  'Revenue',
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="The model" title="Lead Generation Built Around Sales Outcomes, Not Form Counts">
          A lead is not the final result of a campaign.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          A useful lead needs to reach the right person, receive timely follow-up, enter the right
          sales process, and have a realistic chance of becoming a customer.
        </p>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            That is why we build lead generation around
          </p>
          <div className="flex flex-wrap gap-3">
            {factors.map((factor) => (
              <span
                key={factor}
                className="border border-frame-border px-4 py-2 text-sm font-bold uppercase tracking-wider text-frame-fg"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-8 md:p-12">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The goal is not to generate the highest possible number of forms.
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The goal is to generate more opportunities your sales team can actually use.
          </p>
        </div>
      </div>
    </section>
  )
}