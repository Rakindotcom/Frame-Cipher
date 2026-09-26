import { SectionIntro } from '../../../Kinetic'

const benefits = [
  'Demonstrate measurable customer outcomes',
  'Show how your solution works in a real situation',
  'Address common buyer objections',
  'Give sales teams credible proof to share',
  'Help prospects recognize their own challenges',
  'Strengthen proposals and presentations',
  'Create reusable content for marketing campaigns',
  'Build a library of customer stories over time',
]

export default function ProvesResults() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why case studies matter"
          title="Case Studies Built to Prove Results and Support Sales"
        >
          A case study should do more than say your business delivers good work. It should show what changed, why
          it changed, how it happened, and what the result meant for the customer.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>That makes a case study useful at the point where prospects need evidence.</p>
            <p>
              A weak case study does not just fail to help. If it reads as obviously generic, it can actively
              undermine credibility.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              A strong case study can help your business
            </span>
            <ul className="mt-5 space-y-2.5">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-4xl border-l-2 border-frame-accent bg-frame-bg p-4 text-sm font-semibold leading-relaxed text-frame-fg">
          We build each story around the evidence available from the actual engagement. We do not invent results,
          inflate numbers, or turn ordinary feedback into unsupported claims.
        </p>
      </div>
    </section>
  )
}
