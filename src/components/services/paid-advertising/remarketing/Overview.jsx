import { SectionIntro } from '../../../Kinetic'

const factors = [
  'Audience behavior',
  'Funnel stage',
  'Recency',
  'Product or service interest',
  'Previous conversions',
  'Customer status',
  'Creative exposure',
  'Purchase cycle',
  'Available first-party data',
]

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="The model" title="Remarketing Built Around Buyer Intent, Not Repeated Impressions">
          Remarketing works best when previous interactions are used to make the next message more
          relevant.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          A homepage visitor, product viewer, cart abandoner, past customer, and qualified lead
          should not automatically receive the same campaign.
        </p>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            We build remarketing around
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
            The goal is simple: re-engage people who already showed interest without wasting spend on
            audiences that no longer need the message.
          </p>
        </div>
      </div>
    </section>
  )
}