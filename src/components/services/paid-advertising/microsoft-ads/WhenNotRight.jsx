import { SectionIntro } from '../../../Kinetic'

const signals = [
  'Your target market has very low Microsoft search volume',
  'Your category depends heavily on mobile-first discovery',
  'Your customers rarely use search to research the product',
  'Your offer or landing page is not conversion-ready',
  'There is not enough budget for meaningful testing',
  'The business requires a different channel for demand creation',
  'The account lacks reliable conversion tracking',
]

export default function WhenNotRight() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          eyebrow="Honest assessment"
          title="When Microsoft Ads May Not Be the Right Primary Channel"
        >
          Microsoft Ads is not automatically the right choice for every business.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-bg p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            It may have limited potential when
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {signals.map((signal) => (
              <li
                key={signal}
                className="flex items-start gap-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-frame-accent">
                  &#10005;
                </span>
                <span>{signal}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl border-l-2 border-frame-accent pl-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            For some businesses, Microsoft Ads may work best as a secondary acquisition channel
            rather than the primary paid media platform. We evaluate that before recommending a
            budget.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex border-2 border-frame-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-frame-accent transition-colors hover:bg-frame-accent hover:text-frame-bg"
          >
            Assess Your Microsoft Ads Opportunity
          </a>
        </div>
      </div>
    </section>
  )
}