import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'Strategy advice comes from people who also execute the work themselves, not consultants disconnected from what implementation actually involves.',
  },
  {
    title: "Honest About What's Realistic",
    body: "We don't hand over a roadmap that assumes resources you've told us you don't have, the plan gets built around your actual situation.",
  },
  {
    title: 'Local & International Strategic Experience',
    body: 'Based in Dhaka. Advising clients across Bangladesh, the US, UK, Australia, Canada, and UAE.',
  },
  {
    title: 'No Pressure Toward Full Execution',
    body: "Strategy is a legitimate standalone service here, not a sales funnel toward a bigger retainer you didn't actually ask for.",
  },
]

export default function WhyDifferent() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher difference" title="Why We're Different">
          Strategy advice works when it respects the team that has to act on it.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Difference 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}